// Gia sư riêng 1-1 (Claude): dạy theo hồ sơ của người học, nhớ từ mới và lỗi sai qua các buổi,
// giúp nghe hiểu (dịch, từ khó, nói chậm, giải thích) và gợi ý cách trả lời để hội thoại tiếp tục.
// Khóa API do người dùng tự nhập và chỉ lưu trong trình duyệt của họ.
(function () {
"use strict";
const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.136.0/+esm";
let Anthropic = null;
async function sdk() {
  if (!Anthropic) Anthropic = (await import(SDK_URL)).default;
  return Anthropic;
}

// ---------- Lưu trữ ----------
function load(key, fallback) {
  try { return Object.assign(fallback, JSON.parse(localStorage.getItem(key) || "{}")); } catch (e) { return fallback; }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* bỏ qua */ } }

const KEY = "ee11.tutor.v1", BOOK_KEY = "ee11.notebook.v1", CHAT_KEY = "ee11.tutorchat.v1";
const cfg = load(KEY, {
  apiKey: "", model: "claude-opus-5-5", level: "B1", scenario: "tutor", autoSpeak: true, listenMode: false,
  profile: { name: "", job: "Kỹ sư cầu đường", goal: "Nghe hiểu và giao tiếp tự tin với đồng nghiệp, tư vấn nước ngoài", interests: "", weak: "" }
});
const book = load(BOOK_KEY, { words: [], fixes: [], sessions: 0 });
// Một buổi học: system prompt được cố định khi bắt đầu để lịch sử hội thoại không bị thay đổi giữa chừng
let chat = load(CHAT_KEY, { system: "", history: [] });
const saveCfg = () => save(KEY, cfg), saveBook = () => save(BOOK_KEY, book), saveChat = () => save(CHAT_KEY, chat);

const MODELS = [
  ["claude-opus-5-5", "Claude Opus 5.5 (chất lượng cao nhất)"],
  ["claude-sonnet-5-5", "Claude Sonnet 5.5 (cân bằng)"],
  ["claude-haiku-5-5", "Claude Haiku 5.5 (nhanh, rẻ)"]
];
const TUTOR_MODE = { id: "tutor", label: "👩‍🏫 Gia sư riêng – bài học dành cho tôi", prompt: "" };
const scenarios = () => [TUTOR_MODE, ...window.AI_SCENARIOS];

function buildSystem() {
  const p = cfg.profile;
  const sc = scenarios().find((s) => s.id === cfg.scenario) || TUTOR_MODE;
  const words = book.words.slice(-20).map((w) => `${w.en} (${w.vi})`).join("; ");
  const fixes = book.fixes.slice(-12).map((f) => `"${f.wrong}" → "${f.right}"`).join("; ");
  const mode = sc.id === "tutor"
    ? `MODE: Private lesson. You are this learner's own personal English tutor and you teach only them. Lead the lesson: start with a warm, personal greeting, pick a practical speaking topic from their job, goals or interests (or continue reviewing their notebook), teach 1–2 useful phrases at a time, ask them to use the phrases, check that they understood, and move step by step. Recycle the words and mistakes from their notebook naturally.`
    : `MODE: Role-play. ${sc.prompt} Stay in character in EN, but still act as their tutor in the other fields.`;
  return `You are a patient, encouraging 1-on-1 English tutor for one Vietnamese learner. Your goal is that the learner UNDERSTANDS what they hear and can KEEP THE CONVERSATION GOING.

LEARNER PROFILE
- Name: ${p.name || "(not given)"}
- Job: ${p.job || "(not given)"}
- CEFR level: ${cfg.level}
- Goals: ${p.goal || "(not given)"}
- Interests: ${p.interests || "(not given)"}
- Known weaknesses: ${p.weak || "(not given)"}
- Sessions so far: ${book.sessions}
- Recent new words in their notebook: ${words || "(none yet)"}
- Recent mistakes in their notebook: ${fixes || "(none yet)"}

${mode}

TEACHING RULES
- Speak in short, clear, natural spoken English at level ${cfg.level}: 1–3 sentences, everyday words, one idea at a time. End with ONE simple question so the learner always knows what to say next.
- Use their name sometimes. Connect to their real life and work (bridges, roads, construction sites) when it fits.
- If the learner says they don't understand, or their reply shows they misunderstood: say it again more simply and more slowly, and explain the meaning in Vietnamese in FEEDBACK.
- If the learner writes or speaks in Vietnamese: teach them how to say it in English (give the English in FEEDBACK and as the first SUGGEST), ask them to try saying it, then continue.
- Their messages often come from speech recognition: ignore punctuation and capitalization; if a word looks misheard, guess the intended word.
- Correct only the 1–2 most important mistakes per turn, kindly. Praise what they did well.

OUTPUT FORMAT — every turn, exactly these 6 lines, each starting with its tag:
EN: <what you say to the learner, in English>
VI: <natural Vietnamese translation of EN>
WORDS: <1–3 words/phrases from EN that may be new for this learner, as "word = nghĩa tiếng Việt", separated by " ; ", or "-">
FEEDBACK: <in Vietnamese: short praise + correction/explanation about the learner's last message, or "-" for the first turn>
FIX: <the learner's most important wrong phrase and the correct version, as "wrong => right", or "-">
SUGGEST: <3 short example replies the learner could say next, in English at their level, separated by " || ">`;
}

const END_PROMPT = "[END] The lesson is over. Do NOT use the 6-line format. Write a short summary for the learner in Vietnamese with these headings: HÔM NAY ĐÃ HỌC, LỖI CẦN NHỚ (with corrected English), CÂU HAY NÊN DÙNG (3 English sentences), BÀI TẬP VỀ NHÀ (1 small speaking task for next time).";

function parse(text) {
  const get = (tag) => {
    const m = text.match(new RegExp("^\\s*" + tag + ":\\s*(.*)$", "mi"));
    return m ? m[1].trim() : "";
  };
  const en = get("EN");
  if (!en) return { en: text.trim(), raw: true };
  const clean = (v) => (v === "-" ? "" : v);
  return {
    en, vi: clean(get("VI")), feedback: clean(get("FEEDBACK")),
    words: clean(get("WORDS")).split(/\s*;\s*/).filter((w) => w.includes("=")).map((w) => { const [a, ...b] = w.split("="); return { en: a.trim(), vi: b.join("=").trim() }; }),
    fix: (() => { const f = clean(get("FIX")); const m = f.split(/\s*=>\s*/); return m.length === 2 && m[0] && m[1] ? { wrong: m[0].replace(/^["“]|["”]$/g, ""), right: m[1].replace(/^["“]|["”]$/g, "") } : null; })(),
    suggest: clean(get("SUGGEST")).split(/\s*\|\|\s*/).filter(Boolean)
  };
}
const blockText = (content) => typeof content === "string" ? content : content.filter((b) => b.type === "text").map((b) => b.text).join("\n");

function remember(p, ctx) {
  const today = new Date().toISOString().slice(0, 10);
  let changed = false;
  (p.words || []).forEach((w) => {
    if (w.en && !book.words.some((x) => x.en.toLowerCase() === w.en.toLowerCase())) { book.words.push({ en: w.en, vi: w.vi, ex: ctx, date: today }); changed = true; }
  });
  if (p.fix && !book.fixes.some((x) => x.wrong === p.fix.wrong)) { book.fixes.push(Object.assign({ date: today }, p.fix)); changed = true; }
  book.words = book.words.slice(-300); book.fixes = book.fixes.slice(-200);
  if (changed) saveBook();
}

// ---------- Gọi API ----------
function mapError(err) {
  if (Anthropic && err instanceof Anthropic.AuthenticationError) return new Error("Khóa API không hợp lệ. Kiểm tra lại trong phần cài đặt.");
  if (Anthropic && err instanceof Anthropic.RateLimitError) return new Error("Đã vượt giới hạn tần suất. Đợi một chút rồi thử lại.");
  if (Anthropic && err instanceof Anthropic.APIConnectionError) return new Error("Không kết nối được tới máy chủ. Kiểm tra mạng.");
  if (Anthropic && err instanceof Anthropic.APIError) return new Error(`Lỗi API (${err.status}): ${err.message}`);
  return err;
}
async function create(params) {
  try { await sdk(); } catch (e) { throw new Error("Không tải được thư viện Anthropic SDK (cần Internet)."); }
  const client = new Anthropic({ apiKey: cfg.apiKey, dangerouslyAllowBrowser: true });
  const res = await client.beta.messages.create(Object.assign({
    model: cfg.model,
    output_config: { effort: "low" },
  }, cfg.model === "claude-haiku-5-5" ? {} : { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" }, params));
  if (res.stop_reason === "refusal") throw new Error("Mô hình đã từ chối trả lời tin nhắn này. Hãy thử diễn đạt khác.");
  return res;
}

async function ask(userText) {
  chat.history.push({ role: "user", content: userText });
  try {
    const res = await create({ max_tokens: 3000, system: chat.system, messages: chat.history });
    chat.history.push({ role: "assistant", content: res.content });
    saveChat();
    return blockText(res.content);
  } catch (err) {
    if (chat.history.length && chat.history[chat.history.length - 1].role === "user") chat.history.pop();
    throw mapError(err);
  }
}

// ---------- Giao diện ----------
function renderTutor($app, App) {
  const { esc, speak, listen } = App;
  const p = cfg.profile;
  $app.innerHTML = `${window.tutorTabs ? window.tutorTabs("ai") : ""}
    <h1>🤖 Gia sư AI riêng của bạn</h1>
    <p class="note">⚠️ Cần khóa API Anthropic và <b>tính phí theo lượt dùng</b>. Muốn miễn phí: dùng tab <b>Gia sư miễn phí</b>.</p>
    <p class="sub">Gia sư chỉ dạy riêng bạn: nhớ bạn là ai, nhớ từ mới và lỗi sai, nói chậm, dịch, giải thích khi bạn chưa hiểu, và gợi ý câu để bạn nói tiếp.</p>
    <div class="card">
      <div class="row">
        <select id="sc" style="flex:2;min-width:200px">${scenarios().map((s) => `<option value="${s.id}">${esc(s.label)}</option>`).join("")}</select>
        <select id="lv" style="flex:1;min-width:110px" title="Trình độ">${["A1", "A2", "B1", "B2", "C1"].map((l) => `<option>${l}</option>`).join("")}</select>
      </div>
      <div class="row" style="margin-top:8px">
        <button class="btn" id="new">▶ Bắt đầu buổi học mới</button>
        <button class="btn ghost" id="end">🏁 Kết thúc & tổng kết</button>
      </div>
      <div class="row note" style="margin-top:8px;gap:14px">
        <label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="as" style="width:auto"> Tự đọc lời gia sư</label>
        <label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="lm" style="width:auto"> 🎧 Luyện nghe (ẩn chữ, chạm để xem)</label>
      </div>
      <div class="tutor-log chat" id="log" style="margin-top:12px"></div>
      <div class="row helpers" style="margin-top:10px">
        <button class="btn ghost" id="h-slow">🐢 Nói lại chậm</button>
        <button class="btn ghost" id="h-help">🙋 Tôi chưa hiểu</button>
        <button class="btn ghost" id="h-vi">🇻🇳 Nói tiếng Việt</button>
      </div>
      <div class="composer">
        <button class="iconbtn" id="mic" title="Nói tiếng Anh" style="width:52px;height:52px;font-size:22px">🎤</button>
        <textarea id="txt" placeholder="Nói hoặc gõ tiếng Anh… (gõ tiếng Việt cũng được, gia sư sẽ dạy cách nói)"></textarea>
        <button class="btn" id="send">Gửi</button>
      </div>
    </div>

    <details class="card" style="margin-top:12px" ${p.name ? "" : "open"}>
      <summary><b>🙋 Hồ sơ của bạn</b> <span class="note">– gia sư dùng để dạy đúng nhu cầu của bạn</span></summary>
      <label for="pf-name">Tên gọi</label><input id="pf-name" placeholder="VD: Nam" value="${esc(p.name)}">
      <label for="pf-job">Công việc</label><input id="pf-job" value="${esc(p.job)}">
      <label for="pf-goal">Mục tiêu học</label><input id="pf-goal" value="${esc(p.goal)}">
      <label for="pf-int">Sở thích (để có chuyện nói)</label><input id="pf-int" placeholder="VD: bóng đá, du lịch, nấu ăn" value="${esc(p.interests)}">
      <label for="pf-weak">Điểm yếu muốn cải thiện</label><input id="pf-weak" placeholder="VD: nghe người Úc nói nhanh, chia thì quá khứ" value="${esc(p.weak)}">
      <div class="row" style="margin-top:10px"><button class="btn" id="pf-save">Lưu hồ sơ</button><span class="note" id="pf-ok"></span></div>
      <p class="note">Thay đổi hồ sơ, tình huống hay trình độ sẽ áp dụng từ buổi học mới.</p>
    </details>

    <details class="card" style="margin-top:12px">
      <summary><b>📒 Sổ tay của bạn</b> <span class="note" id="bk-count"></span></summary>
      <div id="book"></div>
    </details>

    <details class="card" style="margin-top:12px" ${cfg.apiKey ? "" : "open"}>
      <summary><b>🔑 Cài đặt gia sư AI</b> ${cfg.apiKey ? "(đã có khóa API)" : "(cần khóa API)"}</summary>
      <label for="key">Khóa API Anthropic</label>
      <input id="key" type="password" placeholder="sk-ant-..." value="${esc(cfg.apiKey)}" autocomplete="off">
      <p class="note">Lấy khóa tại <a href="https://console.anthropic.com/" target="_blank" rel="noopener">console.anthropic.com</a>. Khóa chỉ lưu trong trình duyệt này và gửi thẳng tới API của Anthropic. Không dùng chung máy với người khác khi đã lưu khóa.</p>
      <label for="md">Mô hình</label>
      <select id="md">${MODELS.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>
      <div class="row" style="margin-top:10px"><button class="btn" id="savekey">Lưu</button><button class="btn ghost" id="clearkey">Xóa khóa</button><span id="saved" class="note"></span></div>
    </details>`;

  const $ = (s) => $app.querySelector(s);
  const log = $("#log"), txt = $("#txt");
  const sc = $("#sc"), lv = $("#lv"), md = $("#md"), as = $("#as"), lm = $("#lm");
  sc.value = cfg.scenario; lv.value = cfg.level; md.value = cfg.model; as.checked = cfg.autoSpeak; lm.checked = cfg.listenMode;
  sc.onchange = () => { cfg.scenario = sc.value; saveCfg(); };
  lv.onchange = () => { cfg.level = lv.value; saveCfg(); };
  as.onchange = () => { cfg.autoSpeak = as.checked; saveCfg(); };
  lm.onchange = () => { cfg.listenMode = lm.checked; saveCfg(); log.querySelectorAll(".msg.A .en").forEach((e) => e.classList.toggle("blur", cfg.listenMode)); };
  $("#savekey").onclick = () => { cfg.apiKey = $("#key").value.trim(); cfg.model = md.value; saveCfg(); $("#saved").textContent = "Đã lưu ✓"; };
  $("#clearkey").onclick = () => { cfg.apiKey = ""; $("#key").value = ""; saveCfg(); $("#saved").textContent = "Đã xóa khóa"; };
  $("#pf-save").onclick = () => {
    Object.assign(cfg.profile, { name: $("#pf-name").value.trim(), job: $("#pf-job").value.trim(), goal: $("#pf-goal").value.trim(), interests: $("#pf-int").value.trim(), weak: $("#pf-weak").value.trim() });
    saveCfg(); $("#pf-ok").textContent = "Đã lưu ✓ – bấm “Bắt đầu buổi học mới” để áp dụng";
  };

  // ----- Sổ tay -----
  function drawBook() {
    $("#bk-count").textContent = `– ${book.words.length} từ · ${book.fixes.length} lỗi đã sửa · ${book.sessions} buổi học`;
    const words = book.words.slice().reverse(), fixes = book.fixes.slice().reverse();
    $("#book").innerHTML = `
      <h3>Từ mới</h3>
      ${words.length ? `<div class="chips">${words.map((w, i) => `<span class="chip" data-w="${i}"><button class="linkbtn" data-say="${esc(w.en)}">🔊 <b>${esc(w.en)}</b></button> ${esc(w.vi)} <button class="linkbtn" data-delw="${book.words.length - 1 - i}" title="Xóa">✕</button></span>`).join("")}</div>` : `<p class="note">Chưa có. Gia sư sẽ tự ghi từ mới vào đây khi học.</p>`}
      <h3>Lỗi đã sửa</h3>
      ${fixes.length ? fixes.map((f, i) => `<div class="fixrow"><span class="miss">${esc(f.wrong)}</span> → <b class="ok">${esc(f.right)}</b> <button class="linkbtn" data-say="${esc(f.right)}">🔊</button> <button class="linkbtn" data-delf="${book.fixes.length - 1 - i}" title="Xóa">✕</button></div>`).join("") : `<p class="note">Chưa có.</p>`}
      ${words.length || fixes.length ? `<div class="row" style="margin-top:10px"><button class="btn ghost" id="bk-review">🔁 Nhờ gia sư ôn sổ tay</button></div>` : ""}`;
    $("#book").querySelectorAll("[data-say]").forEach((b) => b.onclick = () => speak(b.dataset.say));
    $("#book").querySelectorAll("[data-delw]").forEach((b) => b.onclick = () => { book.words.splice(+b.dataset.delw, 1); saveBook(); drawBook(); });
    $("#book").querySelectorAll("[data-delf]").forEach((b) => b.onclick = () => { book.fixes.splice(+b.dataset.delf, 1); saveBook(); drawBook(); });
    const rv = $("#bk-review");
    if (rv) rv.onclick = () => { cfg.scenario = "tutor"; sc.value = "tutor"; saveCfg(); startSession("[START] Start today's lesson by reviewing my notebook: quiz me on a few recent words and mistakes in a friendly way, one at a time."); window.scrollTo(0, 0); };
  }
  drawBook();

  // ----- Hiển thị tin nhắn -----
  function add(role, html) {
    const el = document.createElement("div");
    el.className = "msg " + (role === "user" ? "B" : "A");
    el.innerHTML = html;
    log.appendChild(el); log.scrollTop = log.scrollHeight;
    el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    return el;
  }
  let last = null; // lượt gần nhất của gia sư
  function addBot(text, fresh) {
    if (/^\s*(HÔM NAY ĐÃ HỌC|\*\*HÔM NAY)/m.test(text) || text.includes("BÀI TẬP VỀ NHÀ")) {
      add("bot", `<div class="who">Gia sư · Tổng kết buổi học</div><div class="fb">${esc(text).replace(/^(\**)(HÔM NAY ĐÃ HỌC|LỖI CẦN NHỚ|CÂU HAY NÊN DÙNG|BÀI TẬP VỀ NHÀ)(\**):?/gm, "<b>$2:</b>")}</div>`);
      return;
    }
    const t = parse(text);
    if (t.raw) { add("bot", `<div class="who">Gia sư</div><div class="en">${esc(t.en)}</div>`); return; }
    last = t;
    if (fresh) remember(t, t.en);
    const el = add("bot", `<div class="who">Gia sư</div>
      <div class="en ${cfg.listenMode ? "blur" : ""}" title="Chạm để hiện/ẩn">${esc(t.en)}</div>
      <div class="tools">
        <button class="iconbtn" data-a="say" title="Nghe">🔊</button>
        <button class="iconbtn" data-a="slow" title="Nghe chậm">🐢</button>
        ${t.vi ? `<button class="btn ghost sm" data-a="vi">🇻🇳 Dịch</button>` : ""}
        ${t.words.length ? `<button class="btn ghost sm" data-a="words">📚 Từ khó (${t.words.length})</button>` : ""}
      </div>
      <div class="vi" hidden>${esc(t.vi || "")}</div>
      <div class="chips" data-r="words" hidden>${t.words.map((w) => `<span class="chip"><button class="linkbtn" data-say="${esc(w.en)}">🔊 <b>${esc(w.en)}</b></button> ${esc(w.vi)}</span>`).join("")}</div>
      ${t.feedback ? `<details class="fb" ${fresh ? "open" : ""}><summary>📝 Nhận xét</summary>${esc(t.feedback)}${t.fix ? `<div style="margin-top:4px"><span class="miss">${esc(t.fix.wrong)}</span> → <b class="ok">${esc(t.fix.right)}</b></div>` : ""}</details>` : ""}
      ${t.suggest.length ? `<div class="suggest"><div class="note">💡 Bạn có thể trả lời (chạm để nghe & dùng):</div>${t.suggest.map((s) => `<button class="chip sugg">${esc(s)}</button>`).join("")}</div>` : ""}`);
    const q = (s) => el.querySelector(s);
    q("[data-a=say]").onclick = () => speak(t.en);
    q("[data-a=slow]").onclick = () => speak(t.en, { rate: 0.6 });
    q(".en").onclick = () => q(".en").classList.toggle("blur");
    if (q("[data-a=vi]")) q("[data-a=vi]").onclick = () => { q(".vi").hidden = !q(".vi").hidden; };
    if (q("[data-a=words]")) q("[data-a=words]").onclick = () => { q("[data-r=words]").hidden = !q("[data-r=words]").hidden; };
    el.querySelectorAll("[data-say]").forEach((b) => b.onclick = () => speak(b.dataset.say));
    el.querySelectorAll(".sugg").forEach((b) => b.onclick = () => { txt.value = b.textContent; txt.focus(); speak(b.textContent); });
    if (fresh && cfg.autoSpeak) speak(t.en);
  }
  const userText = (c) => c.replace(/^\[(VI|HELP)\]\s*/, "");
  function addUser(content) {
    if (content.startsWith("[START]") || content.startsWith("[END]")) return;
    if (content.startsWith("[HELP]")) { add("user", `<div class="who">Bạn</div><div>🙋 Tôi chưa hiểu, gia sư giải thích giúp.</div>`); return; }
    add("user", `<div class="who">Bạn</div><div class="en">${esc(userText(content))}</div>`);
  }

  // Hiện lại buổi học đang dở (kể cả sau khi đóng app)
  chat.history.forEach((m) => m.role === "user" ? addUser(m.content) : addBot(blockText(m.content), false));
  if (!chat.history.length) add("bot", `<div class="who">Gia sư</div><div>Xin chào${p.name ? " " + esc(p.name) : ""}! 👋 Mình là gia sư tiếng Anh riêng của bạn.<br>
    1️⃣ Điền <b>Hồ sơ của bạn</b> bên dưới để mình dạy đúng nhu cầu.<br>2️⃣ Chọn trình độ, rồi bấm <b>Bắt đầu buổi học mới</b>.<br>
    Trong lúc học: chạm 🐢 để nghe chậm, <b>Dịch</b> để xem nghĩa, <b>Tôi chưa hiểu</b> để mình giải thích lại, và chạm vào câu gợi ý nếu chưa biết nói gì.</div>`);

  // ----- Gửi -----
  let busy = false;
  async function send(content) {
    if (busy || !content.trim()) return;
    if (!cfg.apiKey) { $("details:last-of-type").open = true; add("bot", `<div class="err">Bạn cần nhập khóa API trong phần “Cài đặt gia sư AI” bên dưới.</div>`); return; }
    if (!chat.system) { chat.system = buildSystem(); book.sessions++; saveBook(); }
    busy = true; $("#send").disabled = true; speechSynthesis.cancel();
    addUser(content);
    const wait = add("bot", `<div class="who">Gia sư</div><div class="note">Đang trả lời…</div>`);
    try { const out = await ask(content); wait.remove(); addBot(out, true); drawBook(); }
    catch (err) { wait.innerHTML = `<div class="err">${esc(err.message)}</div>`; }
    finally { busy = false; $("#send").disabled = false; }
  }
  function startSession(first) {
    chat = { system: buildSystem(), history: [] }; saveChat();
    book.sessions++; saveBook();
    log.innerHTML = ""; last = null; speechSynthesis.cancel();
    send(first || "[START] Please start the lesson now.");
  }

  $("#new").onclick = () => startSession();
  $("#end").onclick = () => { if (chat.history.length) send(END_PROMPT); };
  $("#send").onclick = () => { const v = txt.value; txt.value = ""; send(v); };
  txt.onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#send").click(); } };
  $("#mic").onclick = async (e) => {
    const b = e.currentTarget; b.classList.add("rec"); speechSynthesis.cancel();
    try { const alts = await listen(); send(alts[0]); }
    catch (err) { add("bot", `<div class="err">${esc(err.message)}</div>`); }
    finally { b.classList.remove("rec"); }
  };
  $("#h-slow").onclick = () => { if (last) speak(last.en, { rate: 0.55 }); };
  $("#h-help").onclick = () => send("[HELP] I don't understand what you just said. Please say it again more simply and slowly, and explain it in Vietnamese in FEEDBACK.");
  // Nói tiếng Việt: gia sư sẽ dạy cách nói câu đó bằng tiếng Anh
  $("#h-vi").onclick = async (e) => {
    const b = e.currentTarget;
    if (txt.value.trim()) { const v = txt.value; txt.value = ""; return send("[VI] " + v); }
    b.classList.add("rec");
    try { const alts = await listen("vi-VN"); send("[VI] " + alts[0]); }
    catch (err) { txt.placeholder = "Gõ câu tiếng Việt bạn muốn nói rồi bấm 🇻🇳 Nói tiếng Việt"; txt.focus(); add("bot", `<div class="err">${esc(err.message)} Bạn có thể gõ tiếng Việt vào ô bên dưới rồi bấm lại nút 🇻🇳.</div>`); }
    finally { b.classList.remove("rec"); }
  };
}

// ---------- Chấm một bài làm (TOEIC Speaking/Writing): một lượt hỏi, không lưu vào hội thoại ----------
async function grade(system, userText) {
  if (!cfg.apiKey) throw new Error("Chưa có khóa API. Vào mục Gia sư AI → Cài đặt gia sư AI để nhập khóa.");
  try {
    const res = await create({ max_tokens: 4000, system, messages: [{ role: "user", content: userText }] });
    return blockText(res.content);
  } catch (err) { throw mapError(err); }
}
window.ClaudeAI = { hasKey: () => !!cfg.apiKey, grade };

window.renderTutor = renderTutor;
if (window.App && location.hash.startsWith("#/tutor/ai")) window.App.route();
})();
