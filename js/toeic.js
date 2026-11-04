/* Luyện thi TOEIC 4 kỹ năng: Listening, Reading, Speaking, Writing + đề rút gọn */
(function () {
  "use strict";
  const T = window.TOEIC;
  const KEY = "ee11.toeic.v1";
  const L = "ABCD";

  const PARTS = {
    L1: { name: "Part 1 – Mô tả tranh", skill: "L", n: () => T.L1.length },
    L2: { name: "Part 2 – Hỏi đáp", skill: "L", n: () => T.L2.length },
    L3: { name: "Part 3 – Hội thoại", skill: "L", n: () => T.L3.reduce((s, x) => s + x.qs.length, 0) },
    L4: { name: "Part 4 – Bài nói ngắn", skill: "L", n: () => T.L4.reduce((s, x) => s + x.qs.length, 0) },
    R5: { name: "Part 5 – Điền câu", skill: "R", n: () => T.R5.length },
    R6: { name: "Part 6 – Điền đoạn văn", skill: "R", n: () => T.R6.reduce((s, x) => s + x.qs.length, 0) },
    R7: { name: "Part 7 – Đọc hiểu", skill: "R", n: () => T.R7.reduce((s, x) => s + x.qs.length, 0) }
  };
  const S_TASKS = {
    readAloud: { name: "Q1–2 · Đọc to đoạn văn", scale: 3 },
    picture: { name: "Q3–4 · Mô tả tranh", scale: 3 },
    respond: { name: "Q5–7 · Trả lời câu hỏi", scale: 3 },
    info: { name: "Q8–10 · Trả lời dựa trên thông tin", scale: 3 },
    opinion: { name: "Q11 · Nêu quan điểm", scale: 5 }
  };
  const W_TASKS = {
    sentence: { name: "Q1–5 · Viết câu theo tranh", scale: 3 },
    email: { name: "Q6–7 · Trả lời email", scale: 4 },
    essay: { name: "Q8 · Viết luận nêu quan điểm", scale: 5 }
  };

  let App, $app, esc, data;
  const saveData = () => App.saveData(KEY, data);
  const go = (h) => { location.hash = h; };
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const scaled = (pct) => Math.max(5, Math.min(495, Math.round((5 + pct * 490) / 5) * 5));
  let cleanup = [];
  const onLeave = (fn) => cleanup.push(fn);

  function countdown(sec, el, onEnd) {
    let left = sec;
    el.textContent = fmt(left);
    const id = setInterval(() => {
      left--; el.textContent = fmt(Math.max(0, left));
      if (left <= 10) el.classList.add("warn");
      if (left <= 0) { clearInterval(id); onEnd && onEnd(); }
    }, 1000);
    const stop = () => clearInterval(id);
    onLeave(stop);
    return stop;
  }

  // Đọc hội thoại 2 giọng (M/W) cho Part 3
  async function playLines(lines, stopRef) {
    for (const [who, text] of lines) {
      if (stopRef.stop) return;
      await App.speak(text, who === "M" ? { alt: true, pitch: 0.85 } : { pitch: 1.1 });
    }
  }

  // ---------- Trang chính TOEIC ----------
  function renderHub() {
    const best = (k) => data.best[k] != null ? `${data.best[k]}%` : "–";
    const last = data.mock[data.mock.length - 1];
    $app.innerHTML = `
      <h1>🎯 Luyện thi TOEIC</h1>
      <p class="sub">Câu hỏi tự soạn theo đúng format đề thi. Luyện từng Part, rồi làm đề rút gọn để ước tính điểm.</p>
      ${last ? `<div class="stats"><div class="stat"><b>${last.L + last.R}</b><span>Đề gần nhất (L&R ước tính)</span></div><div class="stat"><b>${last.L}</b><span>Listening</span></div><div class="stat"><b>${last.R}</b><span>Reading</span></div></div>` : ""}
      <div class="card row" style="margin-top:12px"><span>⏱️ <b>Đề rút gọn Listening & Reading</b>: 40 câu, 25 phút, nghe 1 lần như thi thật, có ước tính điểm thang 990.</span><span class="spacer"></span><button class="btn" data-go="#/toeic/mock">Làm đề</button></div>
      <h2>🎧 Listening</h2>
      <div class="grid">${["L1", "L2", "L3", "L4"].map((k) => partCard(k, best(k))).join("")}</div>
      <h2>📖 Reading</h2>
      <div class="grid">${["R5", "R6", "R7"].map((k) => partCard(k, best(k))).join("")}</div>
      <h2>🗣️ Speaking</h2>
      <div class="grid">${Object.entries(S_TASKS).map(([k, t]) => `<button class="card topic-card" data-go="#/toeic/S/${k}"><span class="t">${t.name}</span><span class="e">Đếm giờ chuẩn bị & trả lời · ghi âm · bài mẫu</span></button>`).join("")}</div>
      <h2>✍️ Writing</h2>
      <div class="grid">${Object.entries(W_TASKS).map(([k, t]) => `<button class="card topic-card" data-go="#/toeic/W/${k}"><span class="t">${t.name}</span><span class="e">Đếm giờ · đếm số từ · bài mẫu</span></button>`).join("")}</div>
      <p class="note" style="margin-top:16px">💡 Có khóa API trong mục <b>Gia sư AI</b>? Phần Speaking và Writing sẽ có nút <b>“AI chấm bài”</b>: ước tính điểm theo thang TOEIC, chỉ ra lỗi và viết lại bài tốt hơn.</p>`;
    wireGo($app);
  }
  const partCard = (k, b) => `<button class="card topic-card" data-go="#/toeic/${k}"><span class="t">${PARTS[k].name}</span><span class="e">${PARTS[k].n()} câu · Tốt nhất: ${b}</span></button>`;
  const wireGo = (root) => root.querySelectorAll("[data-go]").forEach((b) => b.onclick = () => go(b.dataset.go));
  const header = (title, back = "#/toeic") => `<button class="back" data-go="${back}">← TOEIC</button><h1>${title}</h1>`;

  // ---------- Bộ câu hỏi chung cho Listening/Reading ----------
  // set = { head, play?, qs:[{q?, opts, a, ex?}], script?, letterOnly? }
  function buildSets(part) {
    switch (part) {
      case "L1": return T.L1.map((x) => ({
        head: `<div class="scene"><div class="emoji">${x.emoji}</div><div class="note">🖼️ Bức tranh: ${esc(x.scene)}</div></div>`,
        play: (st) => playSeq(["Look at the picture.", ...x.opts.map((o, i) => `${L[i]}. ${o}`)], st),
        letterOnly: true, qs: [{ opts: x.opts, a: x.a }],
        script: x.opts.map((o, i) => `(${L[i]}) ${esc(o)}`).join("<br>")
      }));
      case "L2": return T.L2.map((x) => ({
        head: `<div class="note">Nghe câu hỏi và chọn câu trả lời phù hợp nhất.</div>`,
        play: (st) => playSeq([x.q, ...x.opts.map((o, i) => `${L[i]}. ${o}`)], st),
        letterOnly: true, qs: [{ opts: x.opts, a: x.a }],
        script: `<b>${esc(x.q)}</b><br>` + x.opts.map((o, i) => `(${L[i]}) ${esc(o)}`).join("<br>")
      }));
      case "L3": return T.L3.map((x) => ({
        head: `<div class="note">${esc(x.title)} · Đọc trước câu hỏi, rồi bấm nghe.</div>`,
        play: (st) => playLines(x.lines, st), qs: x.qs,
        script: x.lines.map(([w, t]) => `<b>${w === "M" ? "Man" : "Woman"}:</b> ${esc(t)}`).join("<br>")
      }));
      case "L4": return T.L4.map((x) => ({
        head: `<div class="note">${esc(x.title)}</div>`,
        play: (st) => playSeq([x.text], st), qs: x.qs, script: esc(x.text)
      }));
      case "R5": return T.R5.map((x) => ({ head: "", qs: [{ q: x.q, opts: x.opts, a: x.a, ex: x.ex }] }));
      case "R6": return T.R6.map((x) => ({
        head: `<div class="passage"><b>${esc(x.title)}</b>\n\n${esc(x.text).replace(/\[(\d)\]/g, "<b class='blank'>($1) _____</b>")}</div>`,
        qs: x.qs.map((q, i) => Object.assign({ q: `Chỗ trống (${i + 1})` }, q))
      }));
      case "R7": return T.R7.map((x) => ({ head: `<div class="passage"><b>${esc(x.title)}</b>\n\n${esc(x.text)}</div>`, qs: x.qs }));
    }
    return [];
  }
  async function playSeq(texts, st) { for (const t of texts) { if (st.stop) return; await App.speak(t); } }

  function renderPart(part) {
    const sets = buildSets(part);
    runSets({
      title: header(`${part[0] === "L" ? "🎧" : "📖"} ${PARTS[part].name}`),
      tip: T.tips[part], sets, exam: false,
      onFinish: (right, total) => {
        const pct = Math.round((right / total) * 100);
        data.best[part] = Math.max(data.best[part] || 0, pct); saveData();
        return `<h2 style="margin-top:0">Kết quả: ${right}/${total} (${pct}%)</h2>`;
      },
      again: () => renderPart(part)
    });
  }

  // Trình chạy chung: luyện tập (có phản hồi ngay) hoặc thi thử (chấm cuối bài)
  function runSets(o) {
    let si = 0, right = 0, total = 0;
    const log = [];
    const st = { stop: false };
    onLeave(() => { st.stop = true; });
    $app.innerHTML = `${o.title}${o.tip ? `<div class="scenario">💡 ${esc(o.tip)}</div>` : ""}${o.bar || ""}<section id="pane" style="margin-top:12px"></section>`;
    wireGo($app);
    const pane = $app.querySelector("#pane");
    o.api && o.api({ finish: (timeUp) => finish(timeUp) });

    function draw() {
      if (si >= o.sets.length) return finish(false);
      const set = o.sets[si];
      st.stop = false;
      let answered = 0, played = 0;
      pane.innerHTML = `<p class="note">Phần ${si + 1}/${o.sets.length}${o.exam ? "" : ` · Đúng ${right}/${total}`}</p>
        <div class="card">${set.head}
          ${set.play ? `<div class="row" style="margin:10px 0"><button class="btn ghost" id="play">▶ Nghe</button>${o.exam ? `<span class="note">Thi thật chỉ được nghe 1 lần</span>` : `<button class="btn ghost" id="stopa">⏹</button>`}</div>` : ""}
          ${set.qs.map((q, qi) => `<div class="tq" data-q="${qi}">
            ${q.q ? `<div class="quiz-q">${esc(q.q)}</div>` : ""}
            <div class="options ${set.letterOnly ? "letters" : ""}">${q.opts.map((op, oi) => `<button class="opt" data-o="${oi}">(${L[oi]})${set.letterOnly ? "" : " " + esc(op)}</button>`).join("")}</div>
            <div class="result"></div></div>`).join("")}
          <div id="script"></div>
          <div class="row" style="margin-top:10px"><span class="spacer"></span><button class="btn" id="next" ${o.exam ? "" : "hidden"}>Tiếp ➜</button></div>
        </div>`;
      const playBtn = pane.querySelector("#play");
      if (playBtn) {
        playBtn.onclick = async () => {
          if (o.exam && played) return;
          played++; if (o.exam) playBtn.disabled = true;
          st.stop = false; await set.play(st);
        };
        const sb = pane.querySelector("#stopa"); if (sb) sb.onclick = () => { st.stop = true; speechSynthesis.cancel(); };
        if (set.letterOnly || o.exam) setTimeout(() => playBtn.click(), 300);
      }
      const picks = new Array(set.qs.length).fill(null);
      pane.querySelectorAll(".tq").forEach((qel) => {
        const qi = +qel.dataset.q, q = set.qs[qi];
        qel.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
          if (o.exam) {
            picks[qi] = +b.dataset.o;
            qel.querySelectorAll(".opt").forEach((x) => x.classList.toggle("picked", x === b));
            return;
          }
          if (picks[qi] != null) return;
          picks[qi] = +b.dataset.o; answered++; total++;
          const ok = picks[qi] === q.a; if (ok) right++;
          qel.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.o === q.a) x.classList.add("right"); });
          if (!ok) b.classList.add("wrong");
          qel.querySelector(".result").innerHTML = `${ok ? "✅ Chính xác!" : `❌ Đáp án đúng: (${L[q.a]})`}${q.ex ? `<div class="note">${esc(q.ex)}</div>` : ""}`;
          if (answered === set.qs.length) {
            if (set.script) pane.querySelector("#script").innerHTML = `<details open class="fb" style="margin-top:10px"><summary><b>📜 Script</b></summary>${set.script}</details>`;
            pane.querySelector("#next").hidden = false;
          }
        });
      });
      pane.querySelector("#next").onclick = () => {
        st.stop = true; speechSynthesis.cancel();
        if (o.exam) set.qs.forEach((q, qi) => { const ok = picks[qi] === q.a; log.push({ set, q, pick: picks[qi], ok }); });
        si++; draw(); window.scrollTo(0, 0);
      };
    }
    function finish(timeUp) {
      st.stop = true; speechSynthesis.cancel();
      if (o.exam) for (; si < o.sets.length; si++) o.sets[si].qs.forEach((q) => log.push({ set: o.sets[si], q, pick: null, ok: false }));
      si = o.sets.length;
      pane.innerHTML = `<div class="card" style="text-align:center">${o.onFinish(right, total, log, timeUp)}
        <div class="row" style="justify-content:center"><button class="btn" id="again">Làm lại</button><button class="btn ghost" data-go="#/toeic">Về trang TOEIC</button></div></div>
        ${o.exam ? review(log) : ""}`;
      wireGo(pane);
      pane.querySelector("#again").onclick = o.again;
    }
    draw();
  }

  function review(log) {
    const wrong = log.filter((x) => !x.ok);
    if (!wrong.length) return "";
    return `<h2>Xem lại ${wrong.length} câu sai</h2><div class="vocab">${wrong.map((x) => `
      <div class="card">${x.q.q ? `<b>${esc(x.q.q)}</b><br>` : ""}
        Bạn chọn: ${x.pick == null ? "<i>bỏ trống</i>" : `(${L[x.pick]}) ${esc(x.q.opts[x.pick])}`}<br>
        <span style="color:var(--good)">Đáp án: (${L[x.q.a]}) ${esc(x.q.opts[x.q.a])}</span>
        ${x.q.ex ? `<div class="note">${esc(x.q.ex)}</div>` : ""}
        ${x.set.script ? `<details class="note"><summary>Script</summary>${x.set.script}</details>` : ""}</div>`).join("")}</div>`;
  }

  // ---------- Đề rút gọn L&R ----------
  function renderMock() {
    const pick = (arr, n) => App.shuffle(arr).slice(0, n);
    const all = (p) => buildSets(p);
    const lSets = [...pick(all("L1"), 3), ...pick(all("L2"), 6), ...pick(all("L3"), 2), ...pick(all("L4"), 1)];
    const rSets = [...pick(all("R5"), 10), ...pick(all("R6"), 1), ...pick(all("R7"), 2)];
    lSets.forEach((s) => s.skill = "L"); rSets.forEach((s) => s.skill = "R");
    const sets = [...lSets, ...rSets];
    const nq = sets.reduce((s, x) => s + x.qs.length, 0);
    $app.innerHTML = `${header("⏱️ Đề rút gọn Listening & Reading")}
      <div class="card"><p>Đề gồm <b>${nq} câu</b>: Listening Part 1–4 trước, sau đó Reading Part 5–7.</p>
      <ul><li>Thời gian: <b>25 phút</b>. Hết giờ sẽ tự nộp bài.</li><li>Mỗi đoạn nghe chỉ được phát <b>1 lần</b>, như thi thật.</li><li>Đáp án và giải thích hiện sau khi nộp bài.</li><li>Điểm ước tính chỉ để tham khảo (thang 10–990).</li></ul>
      <p class="note">Nên đeo tai nghe và ngồi ở nơi yên tĩnh.</p>
      <button class="btn" id="start">Bắt đầu làm bài</button></div>`;
    wireGo($app);
    $app.querySelector("#start").onclick = () => {
      let api;
      runSets({
        title: header("⏱️ Đề rút gọn L&R"), sets, exam: true,
        bar: `<div class="timerbar">⏱️ Còn lại <b id="clock">25:00</b><span class="spacer"></span><button class="btn ghost" id="submit">Nộp bài</button></div>`,
        api: (a) => { api = a; },
        onFinish: (_r, _t, log, timeUp) => {
          stopClock();
          const sk = (k) => { const x = log.filter((e) => e.set.skill === k); return { r: x.filter((e) => e.ok).length, n: x.length }; };
          const l = sk("L"), r = sk("R");
          const Ls = scaled(l.r / l.n), Rs = scaled(r.r / r.n);
          data.mock.push({ date: new Date().toISOString().slice(0, 10), L: Ls, R: Rs }); data.mock = data.mock.slice(-20); saveData();
          return `${timeUp ? "<p class='err'>⏰ Hết giờ – bài đã được nộp tự động.</p>" : ""}
            <h2 style="margin-top:0">Điểm ước tính: ${Ls + Rs} / 990</h2>
            <div class="stats" style="justify-content:center"><div class="stat"><b>${Ls}</b><span>Listening (${l.r}/${l.n})</span></div><div class="stat"><b>${Rs}</b><span>Reading (${r.r}/${r.n})</span></div></div>
            <p class="note">Ước tính tuyến tính từ tỉ lệ đúng; điểm thi thật được quy đổi theo bảng riêng của từng đề.</p>`;
        },
        again: renderMock
      });
      const stopClock = countdown(25 * 60, $app.querySelector("#clock"), () => api.finish(true));
      $app.querySelector("#submit").onclick = () => { if (confirm("Nộp bài ngay? Câu chưa làm sẽ tính là sai.")) api.finish(false); };
    };
  }

  // ---------- Speaking ----------
  function renderSpeaking(task) {
    const t = S_TASKS[task]; if (!t) return renderHub();
    const items = T.S[task];
    $app.innerHTML = `${header(`🗣️ Speaking – ${t.name}`)}<div class="scenario">💡 ${esc(T.tips.S)}</div>
      ${!App.hasSR ? `<p class="err">Trình duyệt này không hỗ trợ nhận dạng giọng nói. Bạn vẫn luyện được bằng cách nói to rồi gõ lại câu trả lời.</p>` : ""}
      <div class="row" style="margin:12px 0">${items.map((_, i) => `<button class="btn ghost" data-i="${i}">Đề ${i + 1}</button>`).join("")}</div>
      <section id="pane"></section>`;
    wireGo($app);
    const pane = $app.querySelector("#pane");
    const open = (i) => {
      $app.querySelectorAll("[data-i]").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
      cleanup.forEach((f) => f()); cleanup = [];
      speakingItem(pane, task, items[i]);
    };
    $app.querySelectorAll("[data-i]").forEach((b) => b.onclick = () => open(+b.dataset.i));
    open(0);
  }

  function speakingItem(pane, task, it) {
    // Gom thành danh sách các lượt nói (một số dạng có nhiều câu hỏi)
    let turns, head = "";
    if (task === "readAloud") turns = [{ show: `<div class="passage">${esc(it.text)}</div>`, prep: it.prep, time: it.time, target: it.text, sample: null, task: "Read the text aloud.", content: it.text }];
    else if (task === "picture") turns = [{ show: `<div class="scene"><div class="emoji">${it.emoji}</div><div class="note">🖼️ ${esc(it.scene)}</div></div>`, prep: it.prep, time: it.time, sample: it.sample, task: "Describe the picture in as much detail as possible.", content: "Picture (described in Vietnamese): " + it.scene }];
    else if (task === "opinion") turns = [{ show: `<div class="quiz-q">${esc(it.q)}</div>`, say: it.q, prep: it.prep, time: it.time, sample: it.sample, task: "Express an opinion with reasons and examples.", content: it.q }];
    else if (task === "respond") { head = `<div class="scenario">${esc(it.context)}</div>`; turns = it.qs.map((q) => ({ show: `<div class="quiz-q">${esc(q.q)}</div>`, say: q.q, prep: q.prep, time: q.time, sample: q.sample, task: "Respond to the question.", content: q.q })); }
    else if (task === "info") { head = `<div class="passage">${esc(it.table)}</div><p class="note">Người gọi: “${esc(it.intro)}”. Câu hỏi chỉ được đọc (không hiện chữ) như thi thật – bấm “Hiện câu hỏi” nếu cần.</p>`; turns = it.qs.map((q) => ({ hideQ: true, show: `<div class="quiz-q">${esc(q.q)}</div>`, say: q.q, prep: q.prep, time: q.time, sample: q.sample, task: "Respond using the information provided.", content: "Information:\n" + it.table + "\nQuestion: " + q.q })); }

    pane.innerHTML = `<div class="card">${head}<div id="turns"></div></div>`;
    const box = pane.querySelector("#turns");
    turns.forEach((tn, i) => {
      const el = document.createElement("div");
      el.className = "turn";
      el.innerHTML = `${turns.length > 1 ? `<h3>Câu ${i + 1}</h3>` : ""}
        ${tn.hideQ ? `<details class="note"><summary>Hiện câu hỏi</summary>${tn.show}</details>` : tn.show}
        <div class="row" style="margin:10px 0">
          <button class="btn" data-a="start">▶ Bắt đầu (chuẩn bị ${tn.prep}s · nói ${tn.time}s)</button>
          ${tn.say ? `<button class="btn ghost" data-a="hear">🔊 Nghe câu hỏi</button>` : ""}
        </div>
        <div class="timerbar" hidden><span data-r="phase"></span><b data-r="clock"></b><span class="spacer"></span><button class="btn ghost" data-a="skip"></button></div>
        <label>Câu trả lời của bạn <span class="note">(tự ghi lại khi nói; có thể sửa hoặc gõ)</span></label>
        <textarea data-r="ans" rows="4" placeholder="Bấm Bắt đầu rồi nói, hoặc gõ câu trả lời..."></textarea>
        <div class="row" style="margin-top:8px">
          ${task === "readAloud" ? `<button class="btn ghost" data-a="check">📊 So với đoạn văn</button>` : ""}
          ${tn.sample ? `<button class="btn ghost" data-a="sample">📄 Bài mẫu</button>` : ""}
          <button class="btn ghost" data-a="ai">🤖 AI chấm bài</button>
        </div>
        <div data-r="out"></div>`;
      box.appendChild(el);
      const $ = (sel) => el.querySelector(sel);
      const ans = $("[data-r=ans]"), out = $("[data-r=out]"), bar = $(".timerbar"), clock = $("[data-r=clock]"), phase = $("[data-r=phase]"), skip = $("[data-a=skip]");
      if ($("[data-a=hear]")) $("[data-a=hear]").onclick = () => App.speak(tn.say);
      let stopTimer = null, rec = null;
      const endSpeak = async () => {
        if (stopTimer) stopTimer();
        bar.hidden = true; $("[data-a=start]").disabled = false;
        if (rec) { const text = await rec.stop(); rec = null; if (text) ans.value = text; }
      };
      const startSpeak = () => {
        if (stopTimer) stopTimer();
        clock.classList.remove("warn");
        phase.textContent = "🔴 Đang nói… "; skip.textContent = "⏹ Dừng";
        ans.value = "";
        rec = App.listenLong((txt) => { ans.value = txt; });
        stopTimer = countdown(tn.time, clock, endSpeak);
        skip.onclick = endSpeak;
      };
      onLeave(() => { if (rec) rec.stop(); });
      $("[data-a=start]").onclick = async () => {
        $("[data-a=start]").disabled = true; out.innerHTML = "";
        if (tn.say) await App.speak(tn.say);
        bar.hidden = false; clock.classList.remove("warn");
        phase.textContent = "⏳ Chuẩn bị… "; skip.textContent = "Nói ngay ➜";
        stopTimer = countdown(tn.prep, clock, startSpeak);
        skip.onclick = startSpeak;
      };
      if ($("[data-a=check]")) $("[data-a=check]").onclick = () => {
        if (!ans.value.trim()) return;
        const r = App.bestOf(tn.target, [ans.value]);
        out.innerHTML = `<div class="fb"><b>${r.score}%</b> ${App.verdict(r.score)} – các từ gạch đỏ là chỗ máy không nghe thấy hoặc bạn đọc thiếu:<br>${r.marked}</div>`;
      };
      if ($("[data-a=sample]")) $("[data-a=sample]").onclick = () => {
        out.innerHTML = `<div class="fb"><b>Bài mẫu:</b> ${esc(tn.sample)} <button class="iconbtn" data-say>🔊</button></div>`;
        out.querySelector("[data-say]").onclick = () => App.speak(tn.sample);
      };
      $("[data-a=ai]").onclick = () => aiGrade(out, "speaking", S_TASKS[task], tn.task, tn.content, ans.value, tn.sample);
    });
  }

  // ---------- Writing ----------
  function renderWriting(task) {
    const t = W_TASKS[task]; if (!t) return renderHub();
    const items = T.W[task];
    $app.innerHTML = `${header(`✍️ Writing – ${t.name}`)}<div class="scenario">💡 ${esc(T.tips.W)}</div>
      <div class="row" style="margin:12px 0">${items.map((_, i) => `<button class="btn ghost" data-i="${i}">Đề ${i + 1}</button>`).join("")}</div>
      <section id="pane"></section>`;
    wireGo($app);
    const pane = $app.querySelector("#pane");
    const open = (i) => {
      $app.querySelectorAll("[data-i]").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
      cleanup.forEach((f) => f()); cleanup = [];
      writingItem(pane, task, items[i]);
    };
    $app.querySelectorAll("[data-i]").forEach((b) => b.onclick = () => open(+b.dataset.i));
    open(0);
  }

  function writingItem(pane, task, it) {
    let prompt, content, taskText, minWords = 0;
    if (task === "sentence") {
      prompt = `<div class="scene"><div class="emoji">${it.emoji}</div><div class="note">🖼️ ${esc(it.scene)}</div></div><p>Viết <b>một câu</b> mô tả tranh, có dùng 2 từ: <b>${esc(it.words[0])}</b> / <b>${esc(it.words[1])}</b> (được đổi dạng từ, thứ tự tùy ý).</p>`;
      taskText = `Write ONE sentence based on the picture using both words: "${it.words[0]}" and "${it.words[1]}" (word forms may change).`;
      content = "Picture (described in Vietnamese): " + it.scene;
    } else if (task === "email") {
      prompt = `<div class="passage">${esc(it.email)}</div><p><b>Yêu cầu:</b> ${esc(it.task)}</p>`;
      taskText = "Respond to the e-mail. " + it.task; content = it.email; minWords = 50;
    } else {
      prompt = `<div class="quiz-q">${esc(it.q)}</div><p class="note">Bài luận nên có ít nhất 300 từ.</p>`;
      taskText = "Write an opinion essay of at least 300 words."; content = it.q; minWords = 300;
    }
    pane.innerHTML = `<div class="card">${prompt}
      ${it.time ? `<div class="timerbar"><span>⏱️ Thời gian làm bài: </span><b id="clock">${fmt(it.time * 60)}</b><span class="spacer"></span><button class="btn ghost" id="tstart">Bắt đầu tính giờ</button></div>` : ""}
      <textarea id="ans" rows="${task === "sentence" ? 2 : task === "email" ? 10 : 16}" placeholder="Viết câu trả lời bằng tiếng Anh..." spellcheck="false" autocapitalize="sentences"></textarea>
      <div class="row" style="margin-top:6px"><span class="note" id="wc">0 từ</span><span class="spacer"></span>
        <button class="btn ghost" id="check">✔ Kiểm tra nhanh</button>
        <button class="btn ghost" id="sample">📄 Bài mẫu</button>
        <button class="btn" id="ai">🤖 AI chấm bài</button></div>
      <div id="out"></div></div>`;
    const ans = pane.querySelector("#ans"), out = pane.querySelector("#out"), wc = pane.querySelector("#wc");
    const words = () => (ans.value.trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
    ans.oninput = () => { const n = words(); wc.textContent = `${n} từ${minWords ? ` / tối thiểu ${minWords}` : ""}`; wc.style.color = minWords && n < minWords ? "var(--bad)" : ""; };
    const ts = pane.querySelector("#tstart");
    if (ts) ts.onclick = () => { ts.disabled = true; countdown(it.time * 60, pane.querySelector("#clock"), () => { out.innerHTML = `<p class="err">⏰ Hết giờ! Trong phòng thi bạn sẽ không viết thêm được nữa.</p>`; }); };
    pane.querySelector("#check").onclick = () => {
      const v = ans.value.trim(); const msgs = [];
      if (!v) return;
      if (task === "sentence") {
        const lw = v.toLowerCase();
        it.words.forEach((w) => { const stem = w.toLowerCase().replace(/e$/, ""); msgs.push(lw.includes(stem) ? `✅ Có dùng “${w}”` : `❌ Chưa dùng “${w}”`); });
        const sentences = v.split(/[.!?]+/).filter((x) => x.trim()).length;
        msgs.push(sentences === 1 ? "✅ Đúng một câu" : "⚠️ Đề yêu cầu chỉ viết MỘT câu");
      } else {
        msgs.push(words() >= minWords ? `✅ Đủ độ dài (${words()} từ)` : `⚠️ Mới ${words()} từ, nên viết ít nhất ${minWords} từ`);
        const paras = v.split(/\n\s*\n/).filter((x) => x.trim()).length;
        msgs.push(paras >= (task === "email" ? 3 : 4) ? `✅ Có ${paras} đoạn` : `⚠️ Mới có ${paras} đoạn: nên chia mở bài / thân bài / kết bài rõ ràng`);
        if (task === "email") msgs.push(/^(dear|hi|hello)\b/i.test(v) ? "✅ Có lời chào" : "⚠️ Nên mở đầu bằng “Dear …,”");
        if (task === "email") msgs.push(/(regards|sincerely|best|thank)/i.test(v.slice(-120)) ? "✅ Có lời kết" : "⚠️ Nên kết thúc bằng “Best regards, …”");
        if (task === "essay") msgs.push(/(for example|for instance|such as)/i.test(v) ? "✅ Có ví dụ minh họa" : "⚠️ Nên thêm ví dụ: “For example, …”");
        if (task === "essay") msgs.push(/(in conclusion|to sum up|in summary|overall)/i.test(v) ? "✅ Có đoạn kết luận" : "⚠️ Nên có kết luận: “In conclusion, …”");
      }
      if (window.FreeTutor) {
        const g = window.FreeTutor.checkGrammar(v);
        msgs.push(g.notes.length ? `<b>Lỗi ngữ pháp phát hiện được (miễn phí):</b>` + g.notes.map((n) => `<div><span class="miss">${esc(n.wrong)}</span> → <b class="ok">${esc(n.right)}</b> <span class="note">${esc(n.why)}</span></div>`).join("") : "✅ Không thấy lỗi ngữ pháp phổ biến (bộ kiểm tra miễn phí chỉ bắt các lỗi hay gặp)");
      }
      out.innerHTML = `<div class="fb">${msgs.join("<br>")}</div>`;
    };
    pane.querySelector("#sample").onclick = () => { out.innerHTML = `<div class="fb"><b>Bài mẫu:</b>\n${esc(it.sample)}</div>`; };
    pane.querySelector("#ai").onclick = () => aiGrade(out, "writing", W_TASKS[task], taskText, content, ans.value, it.sample);
  }

  // ---------- AI chấm bài ----------
  async function aiGrade(out, kind, t, taskText, content, answer, sample) {
    if (!answer.trim()) { out.innerHTML = `<p class="err">Bạn chưa có câu trả lời để chấm.</p>`; return; }
    if (!window.ClaudeAI || !window.ClaudeAI.hasKey()) {
      out.innerHTML = `<p class="err">Cần khóa API để AI chấm bài. <a href="#/tutor/ai">Vào mục Gia sư → Gia sư AI</a> → Cài đặt gia sư AI để nhập khóa. Trong lúc chờ, bạn có thể so sánh với bài mẫu.</p>`;
      return;
    }
    out.innerHTML = `<p class="note">🤖 Đang chấm…</p>`;
    const system = `You are an experienced TOEIC ${kind === "speaking" ? "Speaking" : "Writing"} rater and a supportive teacher for Vietnamese learners (a bridge and road engineer).
Grade the learner's response to ONE task using the official task scale 0–${t.scale}.
${kind === "speaking" ? "The response is a speech-recognition transcript: do not penalize punctuation or capitalization, and say you cannot judge pronunciation directly; comment only on what the transcript shows (content, completeness, grammar, vocabulary, fluency signs such as very short answers)." : "Judge grammar, vocabulary, organization, and whether every part of the task is completed."}
Write the whole review in Vietnamese, except the English corrections and the improved version. Use this format exactly:
ĐIỂM: <n>/${t.scale}
NHẬN XÉT: <2–3 câu tổng quan>
ĐIỂM MẠNH: <gạch đầu dòng>
LỖI CẦN SỬA: <gạch đầu dòng, mỗi dòng: câu sai → câu đúng (giải thích ngắn)>
BÀI VIẾT LẠI: <an improved English version at the learner's level>
MẸO: <1 mẹo để tăng điểm cho dạng câu hỏi này>`;
    const user = `Task type: ${t.name}\nTask: ${taskText}\n\nTask material:\n${content}\n\n${sample ? `Reference sample answer (for the rater only):\n${sample}\n\n` : ""}Learner's response:\n${answer}`;
    try {
      const txt = await window.ClaudeAI.grade(system, user);
      const m = txt.match(/ĐIỂM:\s*([\d.]+)\s*\/\s*(\d+)/);
      out.innerHTML = `${m ? `<div class="bigscore">${m[1]}<small>/${m[2]}</small></div>` : ""}<div class="fb">${esc(txt.replace(/^ĐIỂM:.*\n?/m, "")).replace(/^(NHẬN XÉT|ĐIỂM MẠNH|LỖI CẦN SỬA|BÀI VIẾT LẠI|MẸO):/gm, "<b>$1:</b>")}</div>`;
    } catch (err) { out.innerHTML = `<p class="err">${esc(err.message)}</p>`; }
  }

  // ---------- Điều hướng ----------
  window.renderToeic = function (root, app, parts) {
    App = app; $app = root; esc = app.esc;
    cleanup.forEach((f) => f()); cleanup = [];
    data = App.loadData(KEY, { best: {}, mock: [] });
    App.touchStreak();
    const [a, b] = parts;
    if (PARTS[a]) return renderPart(a);
    if (a === "mock") return renderMock();
    if (a === "S") return renderSpeaking(b || "readAloud");
    if (a === "W") return renderWriting(b || "sentence");
    renderHub();
  };
  // Dọn timer/ghi âm khi rời trang
  window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#/toeic")) { cleanup.forEach((f) => f()); cleanup = []; } });
  if (location.hash.startsWith("#/toeic") && window.App) window.App.route();
})();
