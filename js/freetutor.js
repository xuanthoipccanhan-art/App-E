/* Gia sư miễn phí (offline, không cần khóa API).
   Dạy theo bài soạn sẵn: học câu → nghe hiểu → hội thoại có hướng dẫn → tổng kết.
   Tự sửa các lỗi ngữ pháp phổ biến của người Việt bằng quy tắc, ghi vào cùng sổ tay với gia sư AI. */
(function () {
  "use strict";
  const PROG_KEY = "ee11.free.v1", BOOK_KEY = "ee11.notebook.v1", CFG_KEY = "ee11.tutor.v1";
  let App, $app, esc;

  const store = {
    get(k, f) { try { return Object.assign(f, JSON.parse(localStorage.getItem(k) || "{}")); } catch (e) { return f; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } }
  };
  const book = () => store.get(BOOK_KEY, { words: [], fixes: [], sessions: 0 });
  function addToBook({ words = [], fixes = [] }) {
    const b = book(), today = new Date().toISOString().slice(0, 10);
    words.forEach((w) => { if (!b.words.some((x) => x.en.toLowerCase() === w.en.toLowerCase())) b.words.push(Object.assign({ date: today }, w)); });
    fixes.forEach((f) => { if (!b.fixes.some((x) => x.wrong === f.wrong)) b.fixes.push(Object.assign({ date: today }, f)); });
    b.words = b.words.slice(-300); b.fixes = b.fixes.slice(-200);
    store.set(BOOK_KEY, b);
  }
  const profile = () => store.get(CFG_KEY, {}).profile || {};

  // ---------- Sửa lỗi ngữ pháp phổ biến (miễn phí, theo quy tắc) ----------
  const THIRD = { go: "goes", do: "does", have: "has", work: "works", like: "likes", want: "wants", live: "lives", need: "needs", know: "knows", think: "thinks", say: "says", make: "makes", take: "takes", come: "comes", check: "checks", watch: "watches", study: "studies", play: "plays", use: "uses", get: "gets" };
  const PAST = { go: "went", have: "had", do: "did", work: "worked", see: "saw", eat: "ate", come: "came", visit: "visited", play: "played", watch: "watched", check: "checked", meet: "met", buy: "bought", stay: "stayed", take: "took", make: "made", get: "got", is: "was", am: "was", are: "were", finish: "finished", start: "started", travel: "traveled", cook: "cooked", read: "read", write: "wrote", talk: "talked", call: "called", help: "helped" };
  const RULES = [
    { re: /\bi\b/g, fix: () => "I", why: "Đại từ “I” luôn viết hoa.", quiet: true },
    { re: /\bI has\b/gi, fix: () => "I have", why: "Chủ ngữ I/you/we/they dùng “have”, không dùng “has”." },
    { re: /\b(have|has) (check|finish|start|visit|work|help|call|talk|cook|watch|play|stay|travel|use|need|want|like|live|ask|answer|open|close|clean|move|change|deliver|submit|complete|repair|install|inspect|test|pour|order|book|plan|prepare|learn)\b/gi,
      skipAfter: /\b(will|to|do|don't|does|doesn't|did|didn't|can|must|should)\s*$/i,
      fix: (m, h, v) => `${h} ${v.endsWith("e") ? v + "d" : v + "ed"}`, why: "Sau have/has (thì hiện tại hoàn thành) dùng động từ dạng V3: have checked, has finished." },
    { re: /\b(he|she|it|my (?:boss|wife|husband|son|daughter|manager|friend|colleague))\s+(go|do|have|work|like|want|live|need|know|think|make|take|come|check|watch|study|play|use|get)\b/gi,
      skipAfter: /\b(does|did|do|will|would|can|could|should|must|may|might|to|let|make|makes|help|helps|why|when|where|what|how)\s*$/i,
      fix: (m, s, v) => `${s} ${THIRD[v.toLowerCase()]}`, why: "Ngôi thứ ba số ít (he/she/it) ở thì hiện tại: động từ thêm -s/-es (go → goes, have → has)." },
    { re: /\b(he|she|it) don't\b/gi, fix: (m, s) => `${s} doesn't`, why: "He/she/it dùng “doesn't”, không dùng “don't”." },
    { re: /\b(I|we|you|they) (am|are) (agree|disagree)\b/gi, fix: (m, s, b, v) => `${s} ${v}`, why: "“agree” là động từ: nói “I agree”, không nói “I am agree”." },
    { re: /\bvery (like|love|enjoy|want)\b/gi, fix: (m, v) => `really ${v}`, why: "Không dùng “very” trước động từ; dùng “really like” hoặc “like … very much”." },
    { re: /\bmore (better|worse|bigger|smaller|faster|easier|cheaper)\b/gi, fix: (m, a) => a, why: "So sánh hơn đã có “-er” thì không thêm “more”." },
    { re: /\b(informations|equipments|advices|furnitures|luggages|knowledges)\b/gi, fix: (m, w) => w.replace(/s$/i, ""), why: "Danh từ không đếm được, không thêm -s (information, equipment, advice…)." },
    { re: /\bmany (information|equipment|advice|money|time|work|traffic)\b/gi, fix: (m, w) => `a lot of ${w}`, why: "Danh từ không đếm được dùng “much / a lot of”, không dùng “many”." },
    { re: /\bdiscuss about\b/gi, fix: () => "discuss", why: "“discuss” không đi với “about”: discuss the plan." },
    { re: /\bexplain me\b/gi, fix: () => "explain to me", why: "Nói “explain to me”, không nói “explain me”." },
    { re: /\b(can|must|should|will|could) to (\w+)/gi, fix: (m, a, v) => `${a} ${v}`, why: "Sau can/must/should/will dùng động từ nguyên mẫu, không có “to”." },
    { re: /\bpeople is\b/gi, fix: () => "people are", why: "“people” là số nhiều: people are." },
    { re: /\bthere have\b/gi, fix: () => "there is / there are", why: "Diễn tả “có” dùng “there is/are”, không dùng “there have”." },
    { re: /\bon (next|last) (week|month|year|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi, fix: (m, a, b) => `${a} ${b}`, why: "Trước next/last không dùng giới từ “on/in”." },
    { re: /\bI am (work|live|go|study) (in|at|to)\b/gi, fix: (m, v, p) => `I ${v} ${p}`, why: "Không dùng “am” cùng động từ thường: “I work in…” (hoặc “I am working in…”)." },
    { re: /\b(\d+) year old\b/gi, fix: (m, n) => `${n} years old`, why: "Số nhiều: “years old”." },
  ];
  function checkGrammar(text) {
    let out = text; const notes = [];
    RULES.forEach((r) => {
      if (!r.fix) return;
      out = out.replace(r.re, (...m) => {
        const offset = m[m.length - 2], whole = m[m.length - 1];
        if (r.skipAfter && r.skipAfter.test(whole.slice(0, offset))) return m[0];
        const fixed = r.fix(...m);
        if (fixed !== m[0] && !r.quiet) notes.push({ wrong: m[0], right: fixed, why: r.why });
        return fixed;
      });
    });
    // Quá khứ: có mốc thời gian quá khứ nhưng động từ ở hiện tại
    if (/\b(yesterday|last (week|weekend|month|year|night|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|\d+ (days|weeks|years) ago)\b/i.test(out)) {
      out = out.replace(/\b(have|has) (\w+ed)\b/gi, (m, h, v) => {
        notes.push({ wrong: m, right: v, why: "Có mốc thời gian quá khứ cụ thể (yesterday, last…, ago) thì dùng quá khứ đơn, không dùng hiện tại hoàn thành." });
        return v;
      });
      out = out.replace(/\b(I|we|they|you|he|she|my \w+)\s+(go|goes|have|has|do|does|work|works|see|sees|eat|eats|come|comes|visit|visits|play|plays|watch|watches|check|checks|meet|meets|buy|buys|stay|stays|take|takes|make|makes|get|gets|finish|finishes|start|starts|travel|travels|cook|cooks|talk|talks|call|calls|help|helps)\b/gi, (m, s, v) => {
        const w = v.toLowerCase();
        const IRREG3 = { has: "have", does: "do", goes: "go" };
        const key = [IRREG3[w], w, w.replace(/es$/, ""), w.replace(/s$/, "")].find((k) => k && PAST[k]);
        const past = key && PAST[key];
        if (!past) return m;
        notes.push({ wrong: m, right: `${s} ${past}`, why: "Có mốc thời gian quá khứ (yesterday, last…, ago) nên dùng thì quá khứ." });
        return `${s} ${past}`;
      });
    }
    return { fixed: out, notes };
  }

  // ---------- Bài “Về bạn” ----------
  const ABOUT = [
    { q: "What's your name?", vi: "Bạn tên là gì?", tpl: "My name is ___. / I'm ___.", sample: (p) => `My name is ${p.name || "Nam"}.` },
    { q: "What do you do?", vi: "Bạn làm nghề gì?", tpl: "I'm a ___ engineer. I work for ___.", sample: () => "I'm a civil engineer. I work for a construction company." },
    { q: "What project are you working on now?", vi: "Hiện bạn đang làm dự án nào?", tpl: "I'm working on a ___ project in ___.", sample: () => "I'm working on a bridge project in the Mekong Delta." },
    { q: "How long have you worked as an engineer?", vi: "Bạn làm kỹ sư được bao lâu rồi?", tpl: "I've worked as an engineer for ___ years.", sample: () => "I've worked as an engineer for seven years." },
    { q: "What do you usually do on site?", vi: "Ở công trường bạn thường làm gì?", tpl: "I usually ___ and ___.", sample: () => "I usually check the work and talk to the foremen." },
    { q: "What do you like doing in your free time?", vi: "Lúc rảnh bạn thích làm gì?", tpl: "I like ___ing. / I really enjoy ___.", sample: (p) => `I really enjoy ${p.interests ? p.interests.split(",")[0].trim() : "playing badminton"}.` },
    { q: "What did you do last weekend?", vi: "Cuối tuần trước bạn đã làm gì?", tpl: "Last weekend, I ___ (động từ quá khứ: went, visited, watched…).", sample: () => "Last weekend, I visited my parents and watched a football match.", past: true },
    { q: "Why are you learning English?", vi: "Tại sao bạn học tiếng Anh?", tpl: "Because I want to ___.", sample: () => "Because I want to communicate better with foreign consultants." },
    { q: "What is the most difficult part of your job?", vi: "Phần khó nhất trong công việc của bạn là gì?", tpl: "The most difficult part is ___ because ___.", sample: () => "The most difficult part is keeping the schedule because the weather often changes." },
    { q: "What are your plans for next year?", vi: "Kế hoạch năm sau của bạn là gì?", tpl: "Next year, I'm going to ___.", sample: () => "Next year, I'm going to take the TOEIC test and get a better job." }
  ];

  // ---------- Trang chính ----------
  function renderHome() {
    const prog = store.get(PROG_KEY, { done: {} });
    const p = profile();
    const topics = window.TOPICS;
    const next = topics.find((t) => !prog.done[t.id]) || topics[0];
    const b = book();
    $app.innerHTML = `${tabs("free")}
      <h1>👩‍🏫 Gia sư miễn phí</h1>
      <p class="sub">Không cần khóa API, không mất phí, chạy được cả khi không có Internet. Mỗi bài: học câu → nghe hiểu → nói chuyện với gia sư → tổng kết. Lỗi sai và từ chưa hiểu được ghi vào sổ tay.</p>
      <div class="card">
        <div class="note">Bài học hôm nay${p.name ? ` cho ${esc(p.name)}` : ""}</div>
        <h2 style="margin:4px 0 8px">${next.icon} ${esc(next.title)}</h2>
        <div class="row"><button class="btn" data-lesson="${next.id}">▶ Học ngay</button><button class="btn ghost" id="about">🙋 Bài “Nói về bạn”</button></div>
      </div>
      <div class="stats"><div class="stat"><b>${Object.keys(prog.done).length}/${topics.length}</b><span>bài đã học</span></div>
        <div class="stat"><b>${b.words.length}</b><span>từ trong sổ tay</span></div><div class="stat"><b>${b.fixes.length}</b><span>lỗi đã sửa</span></div></div>
      ${b.fixes.length ? `<div class="card" style="margin-top:12px"><b>🔁 Ôn lỗi cũ</b><div class="note" style="margin:6px 0">Đọc to câu đúng:</div>${b.fixes.slice(-3).reverse().map((f) => `<div class="fixrow"><span class="miss">${esc(f.wrong)}</span> → <b class="ok">${esc(f.right)}</b> <button class="linkbtn" data-say="${esc(f.right)}">🔊</button></div>`).join("")}</div>` : ""}
      <h2>Chọn bài</h2>
      ${["general", "tech", "daily"].map((g) => `<p class="note" style="margin:12px 0 6px"><b>${{ general: "💬 Giao tiếp công việc", tech: "🏗️ Chuyên môn cầu đường", daily: "🏡 Đời sống hàng ngày" }[g]}</b></p>
        <div class="chips">${topics.filter((t) => t.group === g).map((t) => `<button class="chip ${prog.done[t.id] ? "doneChip" : ""}" data-lesson="${t.id}">${t.icon} ${esc(t.title)}${prog.done[t.id] ? ` · ${prog.done[t.id]}%` : ""}</button>`).join("")}</div>`).join("")}
      ${claudeFree()}`;
    $app.querySelectorAll("[data-lesson]").forEach((b) => b.onclick = () => lesson(window.TOPICS.find((t) => t.id === b.dataset.lesson)));
    $app.querySelectorAll("[data-say]").forEach((b) => b.onclick = () => App.speak(b.dataset.say));
    $app.querySelector("#about").onclick = aboutLesson;
    wireClaudeFree();
  }

  const tabs = (on) => `<div class="tabs" style="margin-top:0"><button data-go="#/tutor" class="${on === "free" ? "active" : ""}">🆓 Gia sư miễn phí</button><button data-go="#/tutor/ai" class="${on === "ai" ? "active" : ""}">🤖 Gia sư AI (cần khóa API)</button></div>`;
  window.tutorTabs = tabs;
  document.addEventListener("click", (e) => { const g = e.target.closest(".tabs [data-go]"); if (g) location.hash = g.dataset.go; });

  // ---------- Claude miễn phí (nói chuyện tự do) ----------
  function claudePrompt() {
    const p = profile(), b = book();
    return `Hãy làm gia sư tiếng Anh giao tiếp riêng cho tôi (1 kèm 1).
Về tôi: tên ${p.name || "(chưa nhập)"}; công việc: ${p.job || "kỹ sư cầu đường"}; mục tiêu: ${p.goal || "nghe hiểu và giao tiếp tự tin"}; sở thích: ${p.interests || "(chưa nhập)"}; điểm yếu: ${p.weak || "(chưa nhập)"}.
Từ tôi đang học: ${b.words.slice(-15).map((w) => w.en).join(", ") || "(chưa có)"}.
Lỗi tôi hay mắc: ${b.fixes.slice(-8).map((f) => `${f.wrong} → ${f.right}`).join("; ") || "(chưa có)"}.

Cách dạy:
- Nói tiếng Anh ngắn, đơn giản, chậm (1–3 câu), luôn kết thúc bằng 1 câu hỏi để tôi trả lời.
- Sau câu tiếng Anh, ghi bản dịch tiếng Việt trong ngoặc.
- Mỗi lượt sửa tối đa 1–2 lỗi quan trọng nhất của tôi (giải thích bằng tiếng Việt) và gợi ý 2–3 câu tôi có thể trả lời tiếp.
- Nếu tôi nói "tôi chưa hiểu", hãy nói lại đơn giản hơn và giải thích bằng tiếng Việt.
- Nếu tôi nói tiếng Việt, hãy dạy tôi cách nói câu đó bằng tiếng Anh rồi bảo tôi nói lại.
- Dùng tình huống thực tế ở công trường cầu đường và đời sống hằng ngày.
Bắt đầu bằng một lời chào và câu hỏi đầu tiên.`;
  }
  const claudeFree = () => `<details class="card" style="margin-top:16px"><summary><b>💬 Muốn nói chuyện tự do? Dùng Claude bản miễn phí</b></summary>
    <p>Gia sư offline chỉ dạy theo bài soạn sẵn. Để nói chuyện tự do mà không tốn phí:</p>
    <ol><li>Bấm nút bên dưới để <b>sao chép lời nhắc gia sư</b>. Lời nhắc đã có sẵn hồ sơ, từ mới và lỗi sai của bạn.</li>
    <li>Mở ứng dụng <b>Claude</b> trên iPhone hoặc trang <b>claude.ai</b>, đăng nhập tài khoản miễn phí, rồi dán lời nhắc vào cuộc trò chuyện mới.</li>
    <li>Nếu tài khoản của bạn có <b>chế độ giọng nói</b>, bạn có thể nói chuyện trực tiếp bằng giọng.</li></ol>
    <p class="note">Bản miễn phí có giới hạn số tin nhắn mỗi ngày.</p>
    <div class="row"><button class="btn" id="cf-copy">📋 Sao chép lời nhắc</button><a class="btn ghost" href="https://claude.ai/new" target="_blank" rel="noopener">Mở claude.ai ↗</a><span class="note" id="cf-ok"></span></div>
    <textarea id="cf-text" rows="6" readonly style="margin-top:8px"></textarea></details>`;
  function wireClaudeFree() {
    const ta = $app.querySelector("#cf-text"); if (!ta) return;
    ta.value = claudePrompt();
    $app.querySelector("#cf-copy").onclick = async () => {
      try { await navigator.clipboard.writeText(ta.value); $app.querySelector("#cf-ok").textContent = "Đã sao chép ✓"; }
      catch (e) { ta.select(); document.execCommand && document.execCommand("copy"); $app.querySelector("#cf-ok").textContent = "Hãy giữ ngón tay trên ô chữ để sao chép"; }
    };
  }

  // ---------- Khung bài học (hội thoại với gia sư) ----------
  function shell(title) {
    $app.innerHTML = `${tabs("free")}<button class="back" id="home">← Gia sư miễn phí</button>
      <h1>${title}</h1>
      <div class="row note" style="gap:14px"><label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="lm" style="width:auto"> 🎧 Luyện nghe (ẩn chữ, chạm để xem)</label></div>
      <div class="chat" id="log" style="margin-top:10px"></div><div id="ctrl" style="margin-top:12px"></div>`;
    $app.querySelector("#home").onclick = () => { speechSynthesis.cancel(); renderHome(); };
    const log = $app.querySelector("#log"), ctrl = $app.querySelector("#ctrl");
    let listenMode = false;
    $app.querySelector("#lm").onchange = (e) => { listenMode = e.target.checked; };
    // Gia sư nói: tiếng Anh + nút nghe chậm/dịch/từ khó
    function tutor({ en, vi, words = [], note }) {
      const el = document.createElement("div");
      el.className = "msg A";
      el.innerHTML = `<div class="who">Gia sư</div>
        ${note ? `<div class="vi" style="margin:0 0 4px">${note}</div>` : ""}
        ${en ? `<div class="en ${listenMode ? "blur" : ""}">${esc(en)}</div>
        <div class="tools"><button class="iconbtn" data-a="say">🔊</button><button class="iconbtn" data-a="slow">🐢</button>
          ${vi ? `<button class="btn ghost sm" data-a="vi">🇻🇳 Dịch</button>` : ""}
          ${words.length ? `<button class="btn ghost sm" data-a="w">📚 Từ khó (${words.length})</button>` : ""}</div>
        <div class="vi" data-r="vi" hidden>${esc(vi || "")}</div>
        <div class="chips" data-r="w" hidden>${words.map((w) => `<span class="chip"><button class="linkbtn" data-say="${esc(w.en)}">🔊 <b>${esc(w.en)}</b></button> ${esc(w.vi)}</span>`).join("")}</div>` : ""}`;
      log.appendChild(el);
      const q = (s) => el.querySelector(s);
      if (en) {
        q("[data-a=say]").onclick = () => App.speak(en);
        q("[data-a=slow]").onclick = () => App.speak(en, { rate: 0.6 });
        q(".en").onclick = () => q(".en").classList.toggle("blur");
        if (q("[data-a=vi]")) q("[data-a=vi]").onclick = () => { q("[data-r=vi]").hidden = !q("[data-r=vi]").hidden; };
        if (q("[data-a=w]")) q("[data-a=w]").onclick = () => { q("[data-r=w]").hidden = !q("[data-r=w]").hidden; };
        el.querySelectorAll("[data-say]").forEach((b) => b.onclick = () => App.speak(b.dataset.say));
      }
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      return { el, done: en ? App.speak(en) : Promise.resolve(), reveal: () => { q("[data-r=vi]") && (q("[data-r=vi]").hidden = false); q("[data-r=w]") && (q("[data-r=w]").hidden = false); q(".en") && q(".en").classList.remove("blur"); } };
    }
    function me(text) {
      const el = document.createElement("div"); el.className = "msg B";
      el.innerHTML = `<div class="who">Bạn</div><div class="en">${esc(text)}</div><div class="result"></div>`;
      log.appendChild(el); el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      return el;
    }
    // Ô trả lời: micro / gõ + các nút trợ giúp
    function answerBox({ helpers = [], placeholder = "Nói 🎤 hoặc gõ tiếng Anh…" }) {
      return new Promise((resolve) => {
        ctrl.innerHTML = `<div class="row helpers">${helpers.map((h, i) => `<button class="btn ghost" data-h="${i}">${h.label}</button>`).join("")}</div>
          <div class="composer"><button class="iconbtn" id="mic" style="width:52px;height:52px;font-size:22px">🎤</button>
          <input id="typed" placeholder="${placeholder}" autocapitalize="sentences"><button class="btn" id="send">Gửi</button></div>`;
        ctrl.querySelectorAll("[data-h]").forEach((b) => b.onclick = () => helpers[+b.dataset.h].run(b));
        const finish = (v) => { if (!v || !v.trim()) return; ctrl.innerHTML = ""; resolve(v.trim()); };
        ctrl.querySelector("#send").onclick = () => finish(ctrl.querySelector("#typed").value);
        ctrl.querySelector("#typed").onkeydown = (e) => { if (e.key === "Enter") finish(e.target.value); };
        ctrl.querySelector("#mic").onclick = async (e) => {
          const b = e.currentTarget; b.classList.add("rec"); speechSynthesis.cancel();
          try { finish((await App.listen())[0]); } catch (err) { ctrl.querySelector("#typed").placeholder = err.message; }
          finally { b.classList.remove("rec"); }
        };
      });
    }
    function buttons(list) {
      return new Promise((resolve) => {
        ctrl.innerHTML = `<div class="row">${list.map((l, i) => `<button class="btn ${i ? "ghost" : ""}" data-b="${i}">${l}</button>`).join("")}</div>`;
        ctrl.querySelectorAll("[data-b]").forEach((b) => b.onclick = () => { ctrl.innerHTML = ""; resolve(+b.dataset.b); });
      });
    }
    function choose(options) {
      return new Promise((resolve) => {
        ctrl.innerHTML = `<div class="options">${options.map((o, i) => `<button class="opt" data-c="${i}">${esc(o)}</button>`).join("")}</div>`;
        ctrl.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => { ctrl.innerHTML = ""; resolve(+b.dataset.c); });
      });
    }
    return { tutor, me, answerBox, buttons, choose, log, ctrl };
  }

  // Đưa phản hồi cho câu trả lời tự do
  function feedback(ui, myEl, said, model, extra = {}) {
    const r = App.bestOf(model, [said]);
    const g = checkGrammar(said);
    const nWords = (said.match(/[A-Za-z']+/g) || []).length;
    const viNoMark = (said.toLowerCase().match(/\b(toi|muon|khong|nguoi|duoc|chung|minh|cua|nhung|nhu|bao|nhieu|lam|di|den|roi|chua|anh|chi|em|ban|cho|voi|va|la|co|nay|gi|sao|the|nao)\b/g) || []).length;
    const vi = /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệịỉĩọỏốồổỗộớờởỡợụủũứừửữựỳỷỹý]/i.test(said) || (viNoMark >= 3 && viNoMark >= nWords / 2);
    let verdict;
    if (vi) verdict = `Bạn vừa nói tiếng Việt 🙂. Câu tiếng Anh nên nói là: <b>“${esc(model)}”</b>. Bấm 🔊 rồi nói lại theo nhé.`;
    else if (r.score >= 70) verdict = `🎉 Rất tốt! (${r.score}% giống câu mẫu)`;
    else if (nWords >= 3) verdict = `👍 Gia sư hiểu ý bạn. Cách nói tự nhiên hơn: <b>“${esc(model)}”</b>`;
    else verdict = `💪 Câu hơi ngắn. Thử nói đầy đủ hơn, ví dụ: <b>“${esc(model)}”</b>`;
    if (extra.past && !vi && !/\b(\w+ed|went|had|did|saw|ate|came|met|bought|took|made|got|was|were|read|wrote)\b/i.test(said)) verdict += `<br>⚠️ Câu hỏi về quá khứ → dùng động từ quá khứ (went, visited, watched…).`;
    myEl.querySelector(".result").innerHTML = `<div class="fb">${verdict}
      ${g.notes.length ? `<div style="margin-top:6px"><b>Sửa lỗi:</b>${g.notes.map((n) => `<div><span class="miss">${esc(n.wrong)}</span> → <b class="ok">${esc(n.right)}</b><div class="note">${esc(n.why)}</div></div>`).join("")}</div>` : ""}
      <div class="row" style="margin-top:6px"><button class="linkbtn" data-say>🔊 Nghe câu mẫu</button></div></div>`;
    myEl.querySelector("[data-say]").onclick = () => App.speak(model);
    if (g.notes.length) addToBook({ fixes: g.notes.map((n) => ({ wrong: n.wrong, right: n.right })) });
    return vi ? 0 : Math.max(r.score, nWords >= 3 ? 60 : 30) - g.notes.length * 5;
  }

  // Từ khó trong một câu (lấy từ bảng từ vựng của chủ đề)
  function wordsIn(t, sentence) {
    const s = sentence.toLowerCase();
    return t.v.filter((v) => v[0].split(" / ").some((w) => s.includes(w.toLowerCase().replace(/\s*\(.*\)/, "")))).slice(0, 3).map((v) => ({ en: v[0], vi: v[2] }));
  }

  // ---------- Bài học theo chủ đề ----------
  async function lesson(t) {
    const ui = shell(`${t.icon} ${esc(t.title)}`);
    const name = profile().name;
    const scores = [];
    const missedWords = [];
    const A = t.d.filter((l) => l[0] === "A");
    // 1. Chào & giới thiệu
    await ui.tutor({ en: `Hi${name ? " " + name : ""}! Today we'll practice: ${t.en}.`, vi: `Chào${name ? " " + name : ""}! Hôm nay mình luyện chủ đề: ${t.title}.`, note: `🎬 ${esc(t.scenario)}` }).done;

    // 2. Học 3 câu hữu ích
    ui.tutor({ note: "<b>Bước 1/3 · Học câu.</b> Nghe rồi nói lại theo gia sư. Chỗ “___” điền thông tin của bạn." });
    for (const [en, vi] of t.p.slice(0, 3)) {
      const said0 = en.replace(/___/g, "…");
      await ui.tutor({ en: said0, vi, words: wordsIn(t, en) }).done;
      const said = await ui.answerBox({ helpers: [{ label: "🐢 Nghe chậm", run: () => App.speak(said0, { rate: 0.6 }) }, { label: "⏭ Bỏ qua", run: () => { ui.ctrl.querySelector("#typed").value = "-"; ui.ctrl.querySelector("#send").click(); } }], placeholder: "Nói lại câu trên (🎤) hoặc gõ…" });
      if (said === "-") continue;
      const el = ui.me(said);
      const r = App.bestOf(en.replace(/___/g, ""), [said]);
      el.querySelector(".result").innerHTML = `<span class="score">${r.score}%</span> ${App.verdict(r.score)}<div class="note">${r.marked}</div>`;
      scores.push(r.score);
    }

    // 3. Nghe hiểu
    ui.tutor({ note: "<b>Bước 2/3 · Nghe hiểu.</b> Nghe câu của người đối diện rồi chọn nghĩa đúng." });
    const pool = window.TOPICS.flatMap((x) => x.d.map((l) => l[2]));
    for (const [, en, vi] of App.shuffle(A).slice(0, 3)) {
      const msg = ui.tutor({ en, vi, words: wordsIn(t, en) });
      msg.el.querySelector(".en").classList.add("blur");
      await msg.done;
      const opts = App.shuffle([vi, ...App.shuffle(pool.filter((x) => x !== vi)).slice(0, 2)]);
      const pick = await ui.choose(opts);
      msg.reveal();
      const ok = opts[pick] === vi;
      ui.tutor({ note: ok ? "✅ Đúng rồi!" : `❌ Chưa đúng. Nghĩa là: <b>${esc(vi)}</b>. Xem từ khó bên trên và nghe lại 🐢 nhé.` });
      scores.push(ok ? 100 : 0);
      if (!ok) missedWords.push(...wordsIn(t, en));
    }

    // 4. Hội thoại có hướng dẫn
    ui.tutor({ note: `<b>Bước 3/3 · Nói chuyện.</b> Gia sư đóng vai <b>${esc(t.roles ? t.roles[0] : "đối tác")}</b>, bạn trả lời theo ý mình. Chưa biết nói gì thì bấm 💡 Gợi ý.` });
    for (let i = 0; i < t.d.length; i++) {
      const [who, en, vi] = t.d[i];
      if (who !== "A") continue;
      const nextB = t.d.slice(i + 1).find((l) => l[0] === "B");
      if (!nextB) { await ui.tutor({ en, vi, words: wordsIn(t, en) }).done; continue; }
      const msg = ui.tutor({ en, vi, words: wordsIn(t, en) });
      await msg.done;
      let hint = 0;
      const said = await ui.answerBox({
        helpers: [
          { label: "🙋 Tôi chưa hiểu", run: () => { msg.reveal(); App.speak(en, { rate: 0.6 }); } },
          { label: "💡 Gợi ý", run: (b) => {
            hint++;
            const words = nextB[1].split(" ");
            const txt = hint === 1 ? `🇻🇳 Ý cần nói: ${nextB[2]}` : hint === 2 ? `Bắt đầu bằng: “${words.slice(0, 4).join(" ")} …”` : `Câu mẫu: “${nextB[1]}”`;
            ui.tutor({ note: esc(txt) });
            if (hint >= 3) App.speak(nextB[1]);
            b.textContent = hint >= 3 ? "💡 Hết gợi ý" : `💡 Gợi ý thêm (${hint}/3)`;
          } },
          { label: "🇻🇳 Nói tiếng Việt", run: async (b) => {
            b.classList.add("rec");
            try { const v = (await App.listen("vi-VN"))[0]; ui.ctrl.querySelector("#typed").value = v; ui.ctrl.querySelector("#send").click(); }
            catch (e) { ui.ctrl.querySelector("#typed").placeholder = "Gõ tiếng Việt vào đây rồi bấm Gửi"; }
            finally { b.classList.remove("rec"); }
          } }
        ]
      });
      const el = ui.me(said);
      scores.push(feedback(ui, el, said, nextB[1]));
      i = t.d.indexOf(nextB);
    }

    // 5. Tổng kết
    const avg = scores.length ? Math.max(0, Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)) : 0;
    const prog = store.get(PROG_KEY, { done: {} });
    prog.done[t.id] = Math.max(prog.done[t.id] || 0, avg); store.set(PROG_KEY, prog);
    const newWords = [...missedWords, ...t.v.slice(0, 3).map((v) => ({ en: v[0], vi: v[2] }))].filter((w, i, arr) => arr.findIndex((x) => x.en === w.en) === i);
    addToBook({ words: newWords });
    const b = book(); b.sessions++; store.set(BOOK_KEY, b);
    ui.tutor({ note: `<b>🏁 Tổng kết:</b> ${avg}% · ${App.verdict(avg)}<br>
      📒 Đã ghi ${newWords.length} từ vào sổ tay: ${newWords.map((w) => esc(w.en)).join(", ")}.<br>
      🏠 <b>Bài tập:</b> nghe lại hội thoại mẫu ở mục <i>Chủ đề → ${esc(t.title)} → Hội thoại</i> 2 lần, rồi tự đóng vai lại một lần.` });
    const c = await ui.buttons(["▶ Bài tiếp theo", "🔁 Học lại bài này", "← Về trang gia sư"]);
    if (c === 0) { const i = window.TOPICS.indexOf(t); lesson(window.TOPICS[(i + 1) % window.TOPICS.length]); }
    else if (c === 1) lesson(t); else renderHome();
  }

  // ---------- Bài “Nói về bạn” ----------
  async function aboutLesson() {
    const ui = shell("🙋 Nói về bạn");
    const p = profile();
    await ui.tutor({ en: `Hi${p.name ? " " + p.name : ""}! Let's talk about you. Answer in your own words.`, vi: "Chào bạn! Mình nói về bạn nhé. Hãy trả lời bằng lời của bạn.", note: "Gia sư hỏi, bạn trả lời thật về bản thân. Mỗi câu có khung câu gợi ý và tự sửa lỗi ngữ pháp." }).done;
    const scores = [];
    for (const item of ABOUT) {
      const msg = ui.tutor({ en: item.q, vi: item.vi });
      await msg.done;
      let hint = 0;
      const said = await ui.answerBox({
        helpers: [
          { label: "🙋 Tôi chưa hiểu", run: () => { msg.reveal(); App.speak(item.q, { rate: 0.6 }); } },
          { label: "💡 Khung câu", run: (b) => { hint++; ui.tutor({ note: hint === 1 ? `Khung câu: <b>${esc(item.tpl)}</b>` : `Ví dụ: “${esc(item.sample(p))}”` }); if (hint > 1) App.speak(item.sample(p)); b.textContent = "💡 Ví dụ"; } },
          { label: "⏭ Bỏ qua", run: () => { ui.ctrl.querySelector("#typed").value = "-"; ui.ctrl.querySelector("#send").click(); } }
        ]
      });
      if (said === "-") continue;
      const el = ui.me(said);
      scores.push(feedback(ui, el, said, item.sample(p), { past: item.past }));
    }
    const avg = scores.length ? Math.max(0, Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)) : 0;
    ui.tutor({ note: `<b>🏁 Xong!</b> ${App.verdict(avg)} Hãy luyện trả lời các câu này thật trôi chảy: đây là những câu người nước ngoài hay hỏi bạn nhất.` });
    const c = await ui.buttons(["🔁 Làm lại", "← Về trang gia sư"]);
    c === 0 ? aboutLesson() : renderHome();
  }

  window.renderFreeTutor = function (root, app) {
    App = app; $app = root; esc = app.esc;
    App.touchStreak();
    renderHome();
  };
  window.FreeTutor = { checkGrammar };
  if (location.hash === "#/tutor" || location.hash === "#/tutor/" ) { if (window.App) window.App.route(); }
})();
