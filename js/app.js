/* Engineer English 1-1 — logic chính (không cần build, chạy trực tiếp trên trình duyệt) */
(function () {
  "use strict";

  const TOPICS = window.TOPICS;
  const $app = document.getElementById("app");

  // ---------- Lưu trữ ----------
  const STORE_KEY = "ee11.progress.v1";
  const SET_KEY = "ee11.settings.v1";
  function load(key, fallback) {
    try { return Object.assign(fallback, JSON.parse(localStorage.getItem(key) || "{}")); }
    catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* bỏ qua */ } }

  const progress = load(STORE_KEY, { learned: {}, quiz: {}, role: {}, hard: [], streak: { last: "", days: 0 } });
  const settings = load(SET_KEY, { accent: "en-US", rate: 0.9, showVi: true, theme: "auto" });
  const saveProgress = () => save(STORE_KEY, progress);
  const saveSettings = () => save(SET_KEY, settings);

  function applyTheme() {
    if (settings.theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", settings.theme);
  }
  applyTheme();

  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const s = progress.streak;
    if (s.last === today) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.days = s.last === y ? s.days + 1 : 1;
    s.last = today;
    saveProgress();
  }

  // ---------- Tiện ích ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const topicById = (id) => TOPICS.find((t) => t.id === id);
  const h = (html) => { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; };

  // ---------- Giọng nói: đọc (TTS) ----------
  let voices = [];
  function loadVoices() { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; }
  if (window.speechSynthesis) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function pickVoice() {
    const lang = settings.accent;
    return voices.find((v) => v.lang === lang && /Google|Natural|Microsoft/i.test(v.name))
      || voices.find((v) => v.lang === lang)
      || voices.find((v) => v.lang && v.lang.startsWith("en"));
  }
  function speak(text, opts = {}) {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) return resolve();
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text.replace(/___/g, "blank"));
      u.lang = settings.accent;
      const v = pickVoice(); if (v) u.voice = v;
      u.rate = opts.rate || settings.rate;
      u.onend = u.onerror = () => resolve();
      speechSynthesis.speak(u);
    });
  }

  // ---------- Giọng nói: nhận dạng (STT) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen() {
    return new Promise((resolve, reject) => {
      if (!SR) return reject(new Error("Trình duyệt không hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Edge, hoặc gõ câu trả lời."));
      const r = new SR();
      r.lang = settings.accent; r.interimResults = false; r.maxAlternatives = 3;
      let done = false;
      r.onresult = (e) => {
        done = true;
        const alts = Array.from(e.results[0]).map((a) => a.transcript);
        resolve(alts);
      };
      r.onerror = (e) => { if (!done) { done = true; reject(new Error(e.error === "not-allowed" ? "Bạn chưa cho phép dùng micro." : "Không nghe rõ, thử lại nhé (" + e.error + ").")); } };
      r.onend = () => { if (!done) { done = true; reject(new Error("Không nghe thấy gì, thử lại nhé.")); } };
      r.start();
    });
  }

  // ---------- Chấm điểm phát âm/câu nói ----------
  const NUM = { zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10" };
  function tokens(s) {
    return s.toLowerCase()
      .replace(/[’']/g, "'").replace(/i'm/g, "i am").replace(/we're/g, "we are").replace(/it's/g, "it is")
      .replace(/that's/g, "that is").replace(/i'll/g, "i will").replace(/we'll/g, "we will").replace(/don't/g, "do not")
      .replace(/let's/g, "let us").replace(/you're/g, "you are").replace(/i've/g, "i have").replace(/we've/g, "we have")
      .replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).map((w) => NUM[w] || w);
  }
  function compare(target, said) {
    const a = tokens(target), b = tokens(said);
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Array(m).fill(false);
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (a[i] === b[j]) { hit[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    const score = m ? Math.round((dp[0][0] / Math.max(m, n * 0.8)) * 100) : 0;
    // Hiển thị câu gốc, tô đỏ từ bị thiếu
    const words = target.split(/\s+/);
    let k = 0;
    const marked = words.map((w) => {
      const t = tokens(w);
      if (!t.length) return esc(w);
      let ok = true;
      t.forEach(() => { if (!hit[k]) ok = false; k++; });
      return `<span class="${ok ? "ok" : "miss"}">${esc(w)}</span>`;
    }).join(" ");
    return { score: Math.min(100, score), marked };
  }
  function bestOf(target, alts) {
    return alts.map((s) => Object.assign(compare(target, s), { said: s })).sort((x, y) => y.score - x.score)[0];
  }
  const verdict = (s) => s >= 85 ? "🎉 Xuất sắc!" : s >= 65 ? "👍 Khá tốt!" : s >= 40 ? "💪 Cố gắng thêm chút nữa" : "🔁 Thử lại nhé";

  // ---------- Tiến độ ----------
  function topicPct(t) {
    const l = (progress.learned[t.id] || []).length / t.v.length;
    const q = (progress.quiz[t.id] || 0) / 100;
    const r = (progress.role[t.id] || 0) / 100;
    return Math.round((l * 0.4 + q * 0.3 + r * 0.3) * 100);
  }
  function markLearned(tid, idx) {
    const arr = progress.learned[tid] = progress.learned[tid] || [];
    if (!arr.includes(idx)) { arr.push(idx); saveProgress(); }
  }
  function toggleHard(key) {
    const i = progress.hard.indexOf(key);
    if (i >= 0) progress.hard.splice(i, 1); else progress.hard.push(key);
    saveProgress();
    return i < 0;
  }

  // ---------- Điều hướng ----------
  function go(hash) { location.hash = hash; }
  function route() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    document.querySelectorAll(".mainnav button").forEach((b) => b.classList.toggle("active", b.dataset.nav === (parts[0] === "topic" ? "home" : parts[0])));
    $app.innerHTML = "";
    window.scrollTo(0, 0);
    switch (parts[0]) {
      case "topic": return renderTopic(parts[1], parts[2] || "vocab");
      case "review": return renderReview(parts[1] || "flash");
      case "tutor":
        if (window.renderTutor) return window.renderTutor($app, App);
        $app.innerHTML = '<p class="sub">Đang tải gia sư AI…</p>'; return;
      case "settings": return renderSettings();
      default: return renderHome();
    }
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("click", (e) => {
    const n = e.target.closest("[data-nav]");
    if (n) go("#/" + n.dataset.nav);
  });

  // ---------- Trang chủ ----------
  function renderHome() {
    const totalWords = TOPICS.reduce((s, t) => s + t.v.length, 0);
    const learned = Object.values(progress.learned).reduce((s, a) => s + a.length, 0);
    const section = (group, title, desc) => `
      <h2>${title}</h2><p class="sub">${desc}</p>
      <div class="grid">${TOPICS.filter((t) => t.group === group).map((t) => `
        <button class="card topic-card" data-topic="${t.id}">
          <span class="icon">${t.icon}</span>
          <span class="t">${esc(t.title)}</span>
          <span class="e">${esc(t.en)} · ${t.v.length} từ · ${t.d.length} câu thoại</span>
          <span class="bar"><span style="width:${topicPct(t)}%"></span></span>
        </button>`).join("")}</div>`;
    $app.innerHTML = `
      <h1>Xin chào, kỹ sư! 👷</h1>
      <p class="sub">Luyện tiếng Anh giao tiếp 1-1: học từ vựng, nghe hội thoại mẫu, rồi <b>đóng vai</b> nói chuyện với đối tác ảo.</p>
      <div class="stats">
        <div class="stat"><b>${learned}/${totalWords}</b><span>từ đã thuộc</span></div>
        <div class="stat"><b>${progress.streak.days || 0} 🔥</b><span>ngày liên tiếp</span></div>
        <div class="stat"><b>${progress.hard.length}</b><span>từ khó đã đánh dấu</span></div>
      </div>
      ${section("general", "💬 Giao tiếp công việc", "Giới thiệu, họp, gọi điện, thuyết trình, thương lượng…")}
      ${section("tech", "🏗️ Chuyên môn cầu đường", "Kết cấu cầu, thiết kế đường, vật liệu, nền móng, thi công, an toàn, nghiệm thu, hợp đồng FIDIC…")}
      <h2>🤖 Luyện nói tự do 1-1</h2>
      <div class="card row"><span>Nói chuyện tự do với gia sư AI theo tình huống: phỏng vấn, họp với tư vấn, nghiệm thu, thương lượng phát sinh…</span><span class="spacer"></span><button class="btn" data-nav="tutor">Bắt đầu</button></div>`;
    $app.querySelectorAll("[data-topic]").forEach((b) => b.onclick = () => go(`#/topic/${b.dataset.topic}/vocab`));
  }

  // ---------- Trang chủ đề ----------
  const TABS = [["vocab", "📖 Từ vựng"], ["phrases", "💡 Mẫu câu"], ["dialogue", "🎧 Hội thoại"], ["role", "🎭 Đóng vai 1-1"], ["flash", "🃏 Flashcard"], ["quiz", "📝 Kiểm tra"]];
  function renderTopic(id, tab) {
    const t = topicById(id);
    if (!t) return renderHome();
    touchStreak();
    $app.innerHTML = `
      <button class="back" data-nav="home">← Tất cả chủ đề</button>
      <h1>${t.icon} ${esc(t.title)}</h1>
      <p class="sub">${esc(t.en)} · Tiến độ ${topicPct(t)}%</p>
      <div class="tabs">${TABS.map(([k, l]) => `<button data-tab="${k}" class="${k === tab ? "active" : ""}">${l}</button>`).join("")}</div>
      <section id="pane"></section>`;
    $app.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => go(`#/topic/${id}/${b.dataset.tab}`));
    const pane = $app.querySelector("#pane");
    ({ vocab: paneVocab, phrases: panePhrases, dialogue: paneDialogue, role: paneRole, flash: (p, t) => flashcards(p, t.v.map((v, i) => ({ v, tid: t.id, i }))), quiz: (p, t) => quiz(p, t.v.map((v, i) => ({ v, tid: t.id, i })), t.id) }[tab] || paneVocab)(pane, t);
  }

  function speakBtn(text, title = "Nghe") { return `<button class="iconbtn" data-say="${esc(text)}" title="${title}">🔊</button>`; }
  function wireSay(root) {
    root.querySelectorAll("[data-say]").forEach((b) => b.onclick = (e) => { e.stopPropagation(); speak(b.dataset.say); });
  }
  function micPractice(btn, target, out) {
    btn.onclick = async () => {
      btn.classList.add("rec");
      try {
        const alts = await listen();
        const r = bestOf(target, alts);
        out.innerHTML = `<span class="score">${r.score}%</span> ${verdict(r.score)}<br>Bạn nói: “${esc(r.said)}”<br>${r.marked}`;
        return r;
      } catch (err) { out.innerHTML = `<span class="err">${esc(err.message)}</span>`; }
      finally { btn.classList.remove("rec"); }
    };
  }

  function paneVocab(pane, t) {
    const learned = progress.learned[t.id] || [];
    pane.innerHTML = `
      <div class="row"><span class="note">Bấm 🔊 nghe, 🎤 luyện phát âm, ⭐ đánh dấu từ khó, ✓ khi đã thuộc.</span><span class="spacer"></span>
      <button class="btn ghost" id="playAll">▶ Nghe tất cả</button></div>
      <div class="vocab" style="margin-top:12px">${t.v.map(([w, ipa, vi, ex], i) => `
        <div class="card vrow">
          ${speakBtn(w)}
          <div>
            <div><span class="w">${esc(w)}</span><span class="ipa">${esc(ipa)}</span></div>
            <div class="vi">${esc(vi)}</div>
            <div class="ex">${esc(ex)} <button class="iconbtn" style="width:28px;height:28px;font-size:12px" data-say="${esc(ex)}">🔊</button></div>
            <div class="result" id="r${i}"></div>
          </div>
          <div class="row" style="flex-direction:column">
            <button class="iconbtn" data-mic="${i}" title="Luyện phát âm">🎤</button>
            <button class="iconbtn ${progress.hard.includes(t.id + ":" + i) ? "on" : ""}" data-hard="${i}" title="Từ khó">⭐</button>
            <button class="iconbtn ${learned.includes(i) ? "on" : ""}" data-learn="${i}" title="Đã thuộc">✓</button>
          </div>
        </div>`).join("")}</div>`;
    wireSay(pane);
    pane.querySelectorAll("[data-mic]").forEach((b) => { const i = +b.dataset.mic; micPractice(b, t.v[i][0], pane.querySelector("#r" + i)); });
    pane.querySelectorAll("[data-hard]").forEach((b) => b.onclick = () => b.classList.toggle("on", toggleHard(t.id + ":" + b.dataset.hard)));
    pane.querySelectorAll("[data-learn]").forEach((b) => b.onclick = () => {
      const i = +b.dataset.learn, arr = progress.learned[t.id] = progress.learned[t.id] || [];
      const k = arr.indexOf(i); if (k >= 0) arr.splice(k, 1); else arr.push(i);
      saveProgress(); b.classList.toggle("on", k < 0);
    });
    pane.querySelector("#playAll").onclick = async () => { for (const v of t.v) { await speak(v[0]); await speak(v[3]); } };
  }

  function panePhrases(pane, t) {
    pane.innerHTML = `<p class="note">Thay “___” bằng thông tin của bạn rồi nói to. Bấm 🎤 để luyện.</p>
      <div class="vocab">${t.p.map(([en, vi], i) => `
        <div class="card vrow">${speakBtn(en)}
          <div><div class="w" style="font-weight:600">${esc(en)}</div><div class="vi">${esc(vi)}</div><div class="result" id="pr${i}"></div></div>
          <button class="iconbtn" data-mic="${i}">🎤</button></div>`).join("")}</div>`;
    wireSay(pane);
    pane.querySelectorAll("[data-mic]").forEach((b) => { const i = +b.dataset.mic; micPractice(b, t.p[i][0].replace(/___/g, ""), pane.querySelector("#pr" + i)); });
  }

  function paneDialogue(pane, t) {
    pane.innerHTML = `
      <div class="scenario">🎬 <b>Tình huống:</b> ${esc(t.scenario)}<br><span class="note">A = đối tác · B = bạn</span></div>
      <div class="row" style="margin:12px 0">
        <button class="btn" id="play">▶ Nghe cả đoạn</button>
        <button class="btn ghost" id="stop">⏹ Dừng</button>
        <label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="vi" style="width:auto" ${settings.showVi ? "checked" : ""}> Hiện tiếng Việt</label>
        <label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="hide" style="width:auto"> Ẩn chữ tiếng Anh (luyện nghe)</label>
      </div>
      <div class="chat">${t.d.map(([who, en, vi], i) => `
        <div class="msg ${who}" data-i="${i}">
          <div class="who">${who === "A" ? "Đối tác" : "Bạn"}</div>
          <div class="en">${esc(en)}</div>
          <div class="vi" ${settings.showVi ? "" : "hidden"}>${esc(vi)}</div>
          <div class="tools">${speakBtn(en)}<button class="iconbtn" data-slow="${esc(en)}" title="Nghe chậm">🐢</button></div>
        </div>`).join("")}</div>`;
    wireSay(pane);
    pane.querySelectorAll("[data-slow]").forEach((b) => b.onclick = () => speak(b.dataset.slow, { rate: 0.65 }));
    pane.querySelector("#vi").onchange = (e) => { settings.showVi = e.target.checked; saveSettings(); pane.querySelectorAll(".msg .vi").forEach((x) => x.hidden = !e.target.checked); };
    pane.querySelector("#hide").onchange = (e) => pane.querySelectorAll(".msg").forEach((x) => x.classList.toggle("hidden-text", e.target.checked));
    let stop = false;
    pane.querySelector("#stop").onclick = () => { stop = true; speechSynthesis.cancel(); };
    pane.querySelector("#play").onclick = async () => {
      stop = false;
      for (const el of pane.querySelectorAll(".msg")) {
        if (stop) break;
        el.classList.add("current"); el.scrollIntoView({ block: "center", behavior: "smooth" });
        await speak(t.d[+el.dataset.i][1]);
        el.classList.remove("current");
      }
    };
  }

  // Đóng vai: máy đọc lời đối tác, bạn nói lời của mình
  function paneRole(pane, t) {
    let myRole = "B", step = 0, scores = [], hint = false;
    pane.innerHTML = `
      <div class="scenario">🎬 ${esc(t.scenario)}</div>
      <div class="row" style="margin:12px 0">
        <span>Vai của bạn:</span>
        <select id="roleSel" style="width:auto"><option value="B">B – ${t.d[0][0] === "B" ? "người trình bày" : "bạn (nhà thầu)"}</option><option value="A">A – đối tác</option></select>
        <button class="btn" id="start">▶ Bắt đầu</button>
        <span class="spacer"></span>
        <label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="hint" style="width:auto"> Hiện câu mẫu</label>
      </div>
      <p class="note">Mỗi lượt của bạn: đọc nghĩa tiếng Việt, bấm 🎤 và nói câu tiếng Anh. Không có micro? Gõ câu trả lời rồi bấm Gửi.</p>
      <div class="chat" id="log"></div>
      <div id="ctrl"></div>`;
    const log = pane.querySelector("#log"), ctrl = pane.querySelector("#ctrl");
    pane.querySelector("#hint").onchange = (e) => { hint = e.target.checked; log.querySelectorAll(".msg.mine .en.target").forEach((x) => x.hidden = !hint); };
    pane.querySelector("#start").onclick = () => { myRole = pane.querySelector("#roleSel").value; step = 0; scores = []; log.innerHTML = ""; next(); };

    async function next() {
      ctrl.innerHTML = "";
      if (step >= t.d.length) return finish();
      const [who, en, vi] = t.d[step];
      if (who !== myRole) {
        const el = h(`<div class="msg A"><div class="who">Đối tác</div><div class="en">${esc(en)}</div><div class="vi">${esc(vi)}</div><div class="tools">${speakBtn(en)}</div></div>`);
        log.appendChild(el); wireSay(el); el.scrollIntoView({ block: "center", behavior: "smooth" });
        await speak(en);
        step++; return next();
      }
      const el = h(`<div class="msg B mine current"><div class="who">Lượt của bạn</div>
        <div class="vi">🇻🇳 ${esc(vi)}</div>
        <div class="en target" ${hint ? "" : "hidden"}>${esc(en)}</div>
        <div class="result"></div></div>`);
      log.appendChild(el); el.scrollIntoView({ block: "center", behavior: "smooth" });
      const res = el.querySelector(".result");
      ctrl.innerHTML = `<div class="composer">
          <button class="iconbtn" id="mic" style="width:52px;height:52px;font-size:22px">🎤</button>
          <input id="typed" placeholder="…hoặc gõ câu tiếng Anh">
          <button class="btn" id="send">Gửi</button>
        </div>
        <div class="row" style="margin-top:8px">
          <button class="btn ghost" id="listen">🔊 Nghe câu mẫu</button>
          <button class="btn ghost" id="skip">Bỏ qua ⏭</button>
          <button class="btn" id="cont" hidden>Tiếp tục ➜</button>
        </div>`;
      let best = 0;
      const show = (r) => {
        best = Math.max(best, r.score);
        res.innerHTML = `<span class="score">${r.score}%</span> ${verdict(r.score)}<br>Bạn nói: “${esc(r.said)}”<div class="note">Câu mẫu: ${r.marked}</div>`;
        ctrl.querySelector("#cont").hidden = false;
      };
      ctrl.querySelector("#listen").onclick = () => speak(en);
      ctrl.querySelector("#mic").onclick = async (e) => {
        const b = e.currentTarget; b.classList.add("rec");
        try { show(bestOf(en, await listen())); } catch (err) { res.innerHTML = `<span class="err">${esc(err.message)}</span>`; }
        finally { b.classList.remove("rec"); }
      };
      const send = () => { const v = ctrl.querySelector("#typed").value.trim(); if (v) show(bestOf(en, [v])); };
      ctrl.querySelector("#send").onclick = send;
      ctrl.querySelector("#typed").onkeydown = (e) => { if (e.key === "Enter") send(); };
      const advance = (s) => { scores.push(s); el.classList.remove("current"); el.querySelector(".en.target").hidden = false; step++; next(); };
      ctrl.querySelector("#cont").onclick = () => advance(best);
      ctrl.querySelector("#skip").onclick = () => advance(0);
    }
    function finish() {
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      progress.role[t.id] = Math.max(progress.role[t.id] || 0, avg); saveProgress();
      ctrl.innerHTML = `<div class="card" style="margin-top:12px;text-align:center">
        <h2 style="margin-top:0">Hoàn thành! Điểm trung bình: ${avg}%</h2><p>${verdict(avg)}</p>
        <div class="row" style="justify-content:center"><button class="btn" id="again">Làm lại</button><button class="btn ghost" id="swap">Đổi vai</button></div></div>`;
      ctrl.querySelector("#again").onclick = () => pane.querySelector("#start").click();
      ctrl.querySelector("#swap").onclick = () => { const s = pane.querySelector("#roleSel"); s.value = s.value === "A" ? "B" : "A"; pane.querySelector("#start").click(); };
    }
  }

  // ---------- Flashcard ----------
  function flashcards(pane, items) {
    if (!items.length) { pane.innerHTML = '<p class="sub">Chưa có từ nào. Hãy đánh dấu ⭐ từ khó trong phần Từ vựng.</p>'; return; }
    let deck = shuffle(items), i = 0, reverse = false;
    pane.innerHTML = `
      <div class="row"><label class="row" style="margin:0;font-weight:400"><input type="checkbox" id="rev" style="width:auto"> Mặt trước tiếng Việt</label><span class="spacer"></span><span class="note" id="cnt"></span></div>
      <div class="flash" id="fc"><div class="flash-inner"><div class="face front"></div><div class="face back"></div></div></div>
      <p class="note" style="text-align:center">Chạm vào thẻ để lật</p>
      <div class="row" style="justify-content:center">
        <button class="btn ghost" id="again">😕 Chưa nhớ</button>
        <button class="btn" id="know">😀 Đã nhớ</button>
      </div>`;
    const fc = pane.querySelector("#fc");
    function draw() {
      if (i >= deck.length) {
        pane.querySelector(".flash").outerHTML = `<div class="card" style="text-align:center;margin:12px 0"><h2 style="margin-top:0">Hết bộ thẻ! 🎉</h2><button class="btn" id="re">Học lại</button></div>`;
        pane.querySelector("#re").onclick = () => flashcards(pane, items);
        pane.querySelector("#again").hidden = pane.querySelector("#know").hidden = true;
        return;
      }
      const { v: [w, ipa, vi, ex] } = deck[i];
      fc.classList.remove("flipped");
      const en = `<div class="big">${esc(w)}</div><div class="note">${esc(ipa)}</div>${speakBtn(w)}`;
      const viH = `<div class="big" style="color:var(--primary)">${esc(vi)}</div><div class="note"><i>${esc(ex)}</i></div>`;
      fc.querySelector(".front").innerHTML = reverse ? viH : en;
      fc.querySelector(".back").innerHTML = reverse ? en : viH;
      wireSay(fc);
      pane.querySelector("#cnt").textContent = `${i + 1} / ${deck.length}`;
      if (!reverse) speak(w);
    }
    fc.onclick = () => { fc.classList.toggle("flipped"); if (reverse && fc.classList.contains("flipped")) speak(deck[i].v[0]); };
    pane.querySelector("#rev").onchange = (e) => { reverse = e.target.checked; draw(); };
    pane.querySelector("#know").onclick = () => { markLearned(deck[i].tid, deck[i].i); i++; draw(); };
    pane.querySelector("#again").onclick = () => { deck.push(deck[i]); i++; draw(); };
    draw();
  }

  // ---------- Kiểm tra (quiz) ----------
  function quiz(pane, items, tid) {
    if (items.length < 4) { pane.innerHTML = '<p class="sub">Cần ít nhất 4 từ để làm bài kiểm tra.</p>'; return; }
    const pool = TOPICS.flatMap((t) => t.v);
    const qs = shuffle(items).slice(0, 10).map((it) => {
      const [w, , vi, ex] = it.v;
      const type = ["en2vi", "vi2en", "fill", "listen"][Math.floor(Math.random() * 4)];
      const others = shuffle(pool.filter((p) => p[0] !== w)).slice(0, 3);
      const firstWord = w.split(/[\s/(]/)[0];
      const canFill = type === "fill" && new RegExp("\\b" + firstWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(ex);
      const t = type === "fill" && !canFill ? "vi2en" : type;
      const useVi = t === "en2vi";
      return {
        it, type: t,
        q: t === "en2vi" ? `“${w}” nghĩa là gì?`
          : t === "vi2en" ? `Từ tiếng Anh của “${vi}” là gì?`
          : t === "listen" ? "🎧 Nghe và chọn từ đúng"
          : `Điền từ: “${ex.replace(new RegExp("\\b" + w.split(" / ")[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*", "i"), "_____")}”`,
        answer: useVi ? vi : w,
        opts: shuffle([useVi ? vi : w, ...others.map((o) => useVi ? o[2] : o[0])])
      };
    });
    let k = 0, right = 0;
    function draw() {
      if (k >= qs.length) {
        const sc = Math.round((right / qs.length) * 100);
        if (tid) { progress.quiz[tid] = Math.max(progress.quiz[tid] || 0, sc); saveProgress(); }
        pane.innerHTML = `<div class="card" style="text-align:center"><h2 style="margin-top:0">Kết quả: ${right}/${qs.length} (${sc}%)</h2><p>${verdict(sc)}</p><button class="btn" id="re">Làm bài mới</button></div>`;
        pane.querySelector("#re").onclick = () => quiz(pane, items, tid);
        return;
      }
      const q = qs[k];
      pane.innerHTML = `<p class="note">Câu ${k + 1}/${qs.length} · Đúng ${right}</p>
        <div class="card"><div class="quiz-q">${esc(q.q)}</div>
        ${q.type === "listen" ? `<p><button class="btn ghost" id="replay">🔊 Nghe lại</button></p>` : ""}
        <div class="options">${q.opts.map((o) => `<button class="opt">${esc(o)}</button>`).join("")}</div>
        <div id="fb" class="result"></div></div>`;
      if (q.type === "listen") { speak(q.it.v[0]); pane.querySelector("#replay").onclick = () => speak(q.it.v[0]); }
      pane.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        pane.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.textContent === q.answer) x.classList.add("right"); });
        const ok = b.textContent === q.answer;
        if (ok) { right++; markLearned(q.it.tid, q.it.i); } else { b.classList.add("wrong"); if (!progress.hard.includes(q.it.tid + ":" + q.it.i)) toggleHard(q.it.tid + ":" + q.it.i); }
        const [w, ipa, vi, ex] = q.it.v;
        pane.querySelector("#fb").innerHTML = `${ok ? "✅ Chính xác!" : "❌ Chưa đúng (đã thêm vào từ khó)."} <b>${esc(w)}</b> ${esc(ipa)} = ${esc(vi)}<br><i>${esc(ex)}</i>
          <div class="row" style="margin-top:8px"><button class="btn" id="nx">Tiếp ➜</button></div>`;
        speak(w);
        pane.querySelector("#nx").onclick = () => { k++; draw(); };
      });
    }
    draw();
  }

  // ---------- Ôn tập tổng hợp ----------
  function renderReview(mode) {
    touchStreak();
    const all = TOPICS.flatMap((t) => t.v.map((v, i) => ({ v, tid: t.id, i })));
    const hard = all.filter((x) => progress.hard.includes(x.tid + ":" + x.i));
    $app.innerHTML = `
      <h1>🔁 Ôn tập tổng hợp</h1>
      <p class="sub">Ôn tất cả ${all.length} từ của mọi chủ đề, hoặc chỉ ${hard.length} từ khó bạn đã đánh dấu.</p>
      <div class="tabs">
        <button data-m="flash" class="${mode === "flash" ? "active" : ""}">🃏 Flashcard (tất cả)</button>
        <button data-m="hard" class="${mode === "hard" ? "active" : ""}">⭐ Flashcard từ khó</button>
        <button data-m="quiz" class="${mode === "quiz" ? "active" : ""}">📝 Kiểm tra ngẫu nhiên</button>
        <button data-m="hardquiz" class="${mode === "hardquiz" ? "active" : ""}">📝 Kiểm tra từ khó</button>
      </div><section id="pane"></section>`;
    $app.querySelectorAll("[data-m]").forEach((b) => b.onclick = () => go("#/review/" + b.dataset.m));
    const pane = $app.querySelector("#pane");
    if (mode === "hard") flashcards(pane, hard);
    else if (mode === "quiz") quiz(pane, all, null);
    else if (mode === "hardquiz") quiz(pane, hard, null);
    else flashcards(pane, all);
  }

  // ---------- Cài đặt ----------
  function renderSettings() {
    const enVoices = voices.filter((v) => v.lang && v.lang.startsWith("en")).length;
    $app.innerHTML = `
      <h1>⚙️ Cài đặt</h1>
      <div class="card">
        <label for="acc">Giọng đọc</label>
        <select id="acc"><option value="en-US">Anh – Mỹ (en-US)</option><option value="en-GB">Anh – Anh (en-GB)</option><option value="en-AU">Anh – Úc (en-AU)</option><option value="en-IN">Anh – Ấn (en-IN)</option></select>
        <label for="rate">Tốc độ đọc: <span id="rv">${settings.rate}</span></label>
        <input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${settings.rate}">
        <div class="row" style="margin-top:10px"><button class="btn ghost" id="test">🔊 Thử giọng</button><span class="note">${enVoices} giọng tiếng Anh có sẵn trên thiết bị.</span></div>
        <label for="theme">Giao diện</label>
        <select id="theme"><option value="auto">Theo hệ thống</option><option value="light">Sáng</option><option value="dark">Tối</option></select>
        <label>Dữ liệu học tập</label>
        <div class="row"><button class="btn ghost" id="export">⬇ Xuất tiến độ</button><button class="btn ghost" id="reset" style="color:var(--bad);border-color:var(--bad)">Xóa tiến độ</button></div>
        <p class="note">Tiến độ được lưu trên trình duyệt này. Khóa API của gia sư AI được cài trong mục Gia sư AI.</p>
      </div>`;
    const acc = $app.querySelector("#acc"); acc.value = settings.accent;
    acc.onchange = () => { settings.accent = acc.value; saveSettings(); };
    const rate = $app.querySelector("#rate");
    rate.oninput = () => { settings.rate = +rate.value; $app.querySelector("#rv").textContent = rate.value; saveSettings(); };
    const th = $app.querySelector("#theme"); th.value = settings.theme;
    th.onchange = () => { settings.theme = th.value; saveSettings(); applyTheme(); };
    $app.querySelector("#test").onclick = () => speak("The bored piles have been completed, and we are ready for inspection.");
    $app.querySelector("#export").onclick = () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" }));
      a.download = "engineer-english-progress.json"; a.click();
    };
    $app.querySelector("#reset").onclick = () => {
      if (confirm("Xóa toàn bộ tiến độ học?")) { Object.assign(progress, { learned: {}, quiz: {}, role: {}, hard: [], streak: { last: "", days: 0 } }); saveProgress(); go("#/home"); }
    };
  }

  // Xuất các tiện ích cho tutor.js
  const App = { speak, listen, esc, settings, saveSettings, route, isTutorRoute: () => location.hash.startsWith("#/tutor") };
  window.App = App;
  route();
})();
