// Gia sư AI 1-1: hội thoại tự do với Claude, có nhận xét/sửa lỗi bằng tiếng Việt.
// Khóa API do người dùng tự nhập và chỉ lưu trong trình duyệt của họ.
(function () {
"use strict";
const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.136.0/+esm";
let Anthropic = null;
async function sdk() {
  if (!Anthropic) Anthropic = (await import(SDK_URL)).default;
  return Anthropic;
}

const KEY = "ee11.tutor.v1";
const cfg = (() => {
  try { return Object.assign({ apiKey: "", model: "claude-opus-5-5", level: "B1", scenario: "free", autoSpeak: true }, JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e) { return { apiKey: "", model: "claude-opus-5-5", level: "B1", scenario: "free", autoSpeak: true }; }
})();
const saveCfg = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { /* bỏ qua */ } };

const MODELS = [
  ["claude-opus-5-5", "Claude Opus 5.5 (chất lượng cao nhất)"],
  ["claude-sonnet-5-5", "Claude Sonnet 5.5 (cân bằng)"],
  ["claude-haiku-5-5", "Claude Haiku 5.5 (nhanh, rẻ)"]
];

let history = []; // Anthropic.MessageParam[]

function systemPrompt() {
  const sc = window.AI_SCENARIOS.find((s) => s.id === cfg.scenario) || window.AI_SCENARIOS[0];
  return `You are a friendly 1-on-1 English speaking partner for a Vietnamese bridge and road (civil) engineer.
Learner level: CEFR ${cfg.level}. Adapt vocabulary and sentence length to that level.

Role-play scenario: ${sc.prompt}

How to respond on every turn:
- Stay in character and keep the conversation going. Reply in natural spoken English, 1–3 short sentences, and usually end with one question so the learner keeps talking.
- Use realistic bridge/road construction terms (piles, girders, pier caps, embankment, compaction, RFI, NCR, FIDIC, etc.) where they fit.
- After your reply, give brief feedback on the learner's LAST message, written in Vietnamese: point out grammar or word-choice mistakes, show a corrected or more natural version in English, and suggest one useful technical phrase. If the message had no mistakes, say so briefly.
- The learner's messages often come from speech recognition, so ignore missing punctuation and capital letters.

Output format, exactly:
REPLY: <your in-character English reply>
FEEDBACK: <Vietnamese feedback>`;
}

function parse(text) {
  const m = text.match(/REPLY:\s*([\s\S]*?)(?:\n\s*FEEDBACK:\s*([\s\S]*))?$/i);
  if (!m) return { reply: text.trim(), feedback: "" };
  return { reply: m[1].trim(), feedback: (m[2] || "").trim() };
}

async function ask(userText) {
  try { await sdk(); } catch (e) { throw new Error("Không tải được thư viện Anthropic SDK (cần Internet)."); }
  const client = new Anthropic({ apiKey: cfg.apiKey, dangerouslyAllowBrowser: true });
  history.push({ role: "user", content: userText });
  try {
    const res = await client.beta.messages.create({
      model: cfg.model,
      max_tokens: 2000,
      system: systemPrompt(),
      messages: history,
      output_config: { effort: "low" },
      ...(cfg.model === "claude-haiku-5-5" ? {} : { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" })
    });
    if (res.stop_reason === "refusal") {
      history.pop();
      throw new Error("Mô hình đã từ chối trả lời tin nhắn này. Hãy thử diễn đạt khác.");
    }
    history.push({ role: "assistant", content: res.content });
    return res.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
  } catch (err) {
    if (history.length && history[history.length - 1].role === "user") history.pop();
    if (err instanceof Anthropic.AuthenticationError) throw new Error("Khóa API không hợp lệ. Kiểm tra lại trong phần cài đặt bên dưới.");
    if (err instanceof Anthropic.RateLimitError) throw new Error("Đã vượt giới hạn tần suất. Đợi một chút rồi thử lại.");
    if (err instanceof Anthropic.APIConnectionError) throw new Error("Không kết nối được tới máy chủ. Kiểm tra mạng.");
    if (err instanceof Anthropic.APIError) throw new Error(`Lỗi API (${err.status}): ${err.message}`);
    throw err;
  }
}

function renderTutor($app, App) {
  const { esc, speak, listen } = App;
  $app.innerHTML = `
    <h1>🤖 Gia sư AI – luyện nói 1-1</h1>
    <p class="sub">Nói chuyện tự do theo tình huống thực tế. Sau mỗi câu, gia sư sẽ sửa lỗi và gợi ý cách nói tự nhiên hơn (bằng tiếng Việt).</p>
    <div class="card">
      <div class="row">
        <select id="sc" style="flex:2;min-width:200px">${window.AI_SCENARIOS.map((s) => `<option value="${s.id}">${esc(s.label)}</option>`).join("")}</select>
        <select id="lv" style="flex:1;min-width:120px">${["A2", "B1", "B2", "C1"].map((l) => `<option>${l}</option>`).join("")}</select>
        <button class="btn" id="new">Bắt đầu cuộc hội thoại mới</button>
      </div>
      <div class="tutor-log chat" id="log" style="margin-top:12px"></div>
      <div class="composer">
        <button class="iconbtn" id="mic" title="Nói" style="width:52px;height:52px;font-size:22px">🎤</button>
        <textarea id="txt" placeholder="Nói bằng micro hoặc gõ tiếng Anh… (Enter để gửi)"></textarea>
        <button class="btn" id="send">Gửi</button>
      </div>
      <label class="row" style="font-weight:400;margin-top:8px"><input type="checkbox" id="as" style="width:auto"> Tự động đọc câu trả lời</label>
    </div>
    <details class="card" style="margin-top:12px" ${cfg.apiKey ? "" : "open"}>
      <summary><b>🔑 Cài đặt gia sư AI</b> ${cfg.apiKey ? "(đã có khóa API)" : "(cần khóa API)"}</summary>
      <label for="key">Khóa API Anthropic</label>
      <input id="key" type="password" placeholder="sk-ant-..." value="${esc(cfg.apiKey)}" autocomplete="off">
      <p class="note">Lấy khóa tại <a href="https://console.anthropic.com/" target="_blank" rel="noopener">console.anthropic.com</a>. Khóa chỉ lưu trong trình duyệt này và gửi thẳng tới API của Anthropic. Không dùng chung máy với người khác khi đã lưu khóa.</p>
      <label for="md">Mô hình</label>
      <select id="md">${MODELS.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>
      <div class="row" style="margin-top:10px"><button class="btn" id="savekey">Lưu</button><button class="btn ghost" id="clearkey">Xóa khóa</button><span id="saved" class="note"></span></div>
    </details>`;

  const log = $app.querySelector("#log"), txt = $app.querySelector("#txt");
  const sc = $app.querySelector("#sc"), lv = $app.querySelector("#lv"), md = $app.querySelector("#md"), as = $app.querySelector("#as");
  sc.value = cfg.scenario; lv.value = cfg.level; md.value = cfg.model; as.checked = cfg.autoSpeak;
  sc.onchange = () => { cfg.scenario = sc.value; saveCfg(); };
  lv.onchange = () => { cfg.level = lv.value; saveCfg(); };
  as.onchange = () => { cfg.autoSpeak = as.checked; saveCfg(); };
  $app.querySelector("#savekey").onclick = () => {
    cfg.apiKey = $app.querySelector("#key").value.trim(); cfg.model = md.value; saveCfg();
    $app.querySelector("#saved").textContent = "Đã lưu ✓";
  };
  $app.querySelector("#clearkey").onclick = () => { cfg.apiKey = ""; $app.querySelector("#key").value = ""; saveCfg(); $app.querySelector("#saved").textContent = "Đã xóa khóa"; };

  function add(role, html) {
    const el = document.createElement("div");
    el.className = "msg " + (role === "user" ? "B" : "A");
    el.innerHTML = html;
    log.appendChild(el); log.scrollTop = log.scrollHeight;
    return el;
  }
  function addBot(text) {
    const { reply, feedback } = parse(text);
    const el = add("bot", `<div class="who">Gia sư</div><div class="en">${esc(reply)}</div>
      ${feedback ? `<div class="fb">📝 ${esc(feedback)}</div>` : ""}
      <div class="tools"><button class="iconbtn" title="Nghe">🔊</button><button class="iconbtn" title="Nghe chậm">🐢</button></div>`);
    const [b1, b2] = el.querySelectorAll(".tools button");
    b1.onclick = () => speak(reply); b2.onclick = () => speak(reply, { rate: 0.65 });
    if (cfg.autoSpeak) speak(reply);
  }

  // Hiện lại lịch sử khi quay lại trang
  history.forEach((m) => {
    if (m.role === "user") { if (!m.content.startsWith("[START]")) add("user", `<div class="who">Bạn</div><div class="en">${esc(m.content)}</div>`); }
    else addBot(m.content.filter((b) => b.type === "text").map((b) => b.text).join("\n"));
  });
  if (!history.length) add("bot", `<div class="who">Gia sư</div><div>Chọn tình huống, trình độ rồi bấm <b>Bắt đầu cuộc hội thoại mới</b>. Hoặc chào luôn: <i>“Hi, I'm a bridge engineer.”</i></div>`);

  let busy = false;
  async function send(text) {
    if (busy || !text.trim()) return;
    if (!cfg.apiKey) { $app.querySelector("details").open = true; add("bot", `<div class="err">Bạn cần nhập khóa API trong phần “Cài đặt gia sư AI” bên dưới.</div>`); return; }
    busy = true; $app.querySelector("#send").disabled = true;
    if (!text.startsWith("[START]")) add("user", `<div class="who">Bạn</div><div class="en">${esc(text)}</div>`);
    const wait = add("bot", `<div class="who">Gia sư</div><div class="note">Đang trả lời…</div>`);
    try { const out = await ask(text); wait.remove(); addBot(out); }
    catch (err) { wait.innerHTML = `<div class="err">${esc(err.message)}</div>`; }
    finally { busy = false; $app.querySelector("#send").disabled = false; }
  }

  $app.querySelector("#new").onclick = () => {
    history = []; log.innerHTML = ""; speechSynthesis.cancel();
    send("[START] Please begin the role-play now with a short greeting and your first question.");
  };
  $app.querySelector("#send").onclick = () => { const v = txt.value; txt.value = ""; send(v); };
  txt.onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $app.querySelector("#send").click(); } };
  $app.querySelector("#mic").onclick = async (e) => {
    const b = e.currentTarget; b.classList.add("rec"); speechSynthesis.cancel();
    try { const alts = await listen(); txt.value = alts[0]; send(alts[0]); txt.value = ""; }
    catch (err) { add("bot", `<div class="err">${esc(err.message)}</div>`); }
    finally { b.classList.remove("rec"); }
  };
}

// Chấm một bài làm (TOEIC Speaking/Writing): một lượt hỏi, không lưu vào hội thoại
async function grade(system, userText) {
  if (!cfg.apiKey) throw new Error("Chưa có khóa API. Vào mục Gia sư AI → Cài đặt gia sư AI để nhập khóa.");
  try { await sdk(); } catch (e) { throw new Error("Không tải được thư viện Anthropic SDK (cần Internet)."); }
  const client = new Anthropic({ apiKey: cfg.apiKey, dangerouslyAllowBrowser: true });
  try {
    const res = await client.beta.messages.create({
      model: cfg.model,
      max_tokens: 4000,
      system,
      messages: [{ role: "user", content: userText }],
      output_config: { effort: "low" },
      ...(cfg.model === "claude-haiku-5-5" ? {} : { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" })
    });
    if (res.stop_reason === "refusal") throw new Error("Mô hình đã từ chối chấm bài này.");
    return res.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) throw new Error("Khóa API không hợp lệ. Kiểm tra lại trong mục Gia sư AI.");
    if (err instanceof Anthropic.RateLimitError) throw new Error("Đã vượt giới hạn tần suất. Đợi một chút rồi thử lại.");
    if (err instanceof Anthropic.APIConnectionError) throw new Error("Không kết nối được tới máy chủ. Kiểm tra mạng.");
    if (err instanceof Anthropic.APIError) throw new Error(`Lỗi API (${err.status}): ${err.message}`);
    throw err;
  }
}
window.ClaudeAI = { hasKey: () => !!cfg.apiKey, grade };

window.renderTutor = renderTutor;
if (window.App && window.App.isTutorRoute()) window.App.route();
})();
