# 🌉 Engineer English 1-1

Ứng dụng web học **tiếng Anh giao tiếp 1-1** dành cho **kỹ sư cầu đường**: từ vựng chuyên ngành, mẫu câu, hội thoại mẫu, đóng vai bằng giọng nói và gia sư AI.

## Tính năng

| Phần | Nội dung |
|---|---|
| 📖 Từ vựng | Từ, phiên âm IPA, nghĩa tiếng Việt, câu ví dụ, nút nghe 🔊, luyện phát âm 🎤, đánh dấu từ khó ⭐ |
| 💡 Mẫu câu | Câu dùng ngay trong công việc, có chỗ trống `___` để bạn điền thông tin của mình |
| 🎧 Hội thoại | Đoạn hội thoại 1-1 mẫu có song ngữ, nghe cả đoạn, nghe chậm, chế độ ẩn chữ để luyện nghe |
| 🎭 Đóng vai 1-1 | App đọc lời đối tác, bạn **nói** lời của mình bằng micro (hoặc gõ). App chấm điểm và tô đỏ từ bị thiếu/sai. Có thể đổi vai |
| 🃏 Flashcard | Lật thẻ Anh ↔ Việt, ôn lại từ chưa nhớ |
| 📝 Kiểm tra | 4 dạng câu hỏi: Anh→Việt, Việt→Anh, điền từ, nghe chọn từ. Câu sai tự thêm vào danh sách từ khó |
| 🔁 Ôn tập | Ôn tổng hợp tất cả chủ đề hoặc chỉ các từ khó |
| 🎯 Luyện thi TOEIC | **Listening** Part 1–4 (máy đọc, hội thoại 2 giọng nam/nữ, hiện script sau khi trả lời) · **Reading** Part 5–7 (có giải thích đáp án tiếng Việt) · **Speaking** 11 câu (đếm giờ chuẩn bị/trả lời như thi thật, tự ghi lại lời nói, bài mẫu) · **Writing** 8 câu (đếm giờ, đếm từ, kiểm tra nhanh cấu trúc, bài mẫu) · **Đề rút gọn L&R** 40 câu/25 phút, nghe 1 lần, ước tính điểm thang 990, xem lại câu sai. Có khóa API thì AI chấm Speaking/Writing theo thang điểm TOEIC |
| 👩‍🏫 Gia sư riêng (AI) | Gia sư chỉ dạy riêng bạn: dựa trên **hồ sơ** (tên, công việc, mục tiêu, sở thích, điểm yếu), tự ghi **sổ tay** từ mới và lỗi sai rồi ôn lại ở các buổi sau. Giúp **nghe hiểu**: nghe chậm, xem dịch, từ khó kèm nghĩa, chế độ luyện nghe ẩn chữ, nút *Tôi chưa hiểu*. Giúp **nói tiếp**: 3 câu gợi ý để trả lời, nút *Nói tiếng Việt* để gia sư dạy cách nói câu đó bằng tiếng Anh. Có tổng kết và bài tập về nhà sau mỗi buổi, cùng các tình huống đóng vai (phỏng vấn, họp, nghiệm thu, nhà hàng, sân bay…) |

Tiến độ (từ đã thuộc, điểm kiểm tra, điểm đóng vai, chuỗi ngày học) được lưu trong trình duyệt.

## 26 chủ đề

**Giao tiếp công việc:** Giới thiệu bản thân · Trò chuyện xã giao · Họp tiến độ · Gọi điện & email · Thuyết trình kỹ thuật · Thương lượng & xử lý bất đồng

**Chuyên môn cầu đường:** Kết cấu cầu · Thiết kế & kết cấu đường · Vật liệu xây dựng · Nền móng & địa kỹ thuật · Thi công hiện trường & thiết bị · An toàn lao động (HSE) · Kiểm tra chất lượng & nghiệm thu (QA/QC) · Hợp đồng FIDIC & thanh toán · Khảo sát & trắc địa · Giao thông & thoát nước

**Đời sống hàng ngày:** Nhà hàng & gọi món · Mua sắm · Hỏi đường & đi lại · Sân bay & xuất nhập cảnh · Khách sạn · Khám bệnh & hiệu thuốc · Gia đình & sở thích · Mời, hẹn gặp & từ chối · Ngân hàng, SIM & dịch vụ · Thuê nhà & sửa chữa

## Cách chạy

Không cần cài đặt hay build. Cách đơn giản nhất: mở file `index.html` bằng **Chrome** hoặc **Edge**.

Để dùng micro ổn định (trình duyệt chỉ cho phép micro trên `https` hoặc `localhost`), nên chạy qua máy chủ cục bộ:

```bash
python3 -m http.server 8000
```

Sau đó mở http://localhost:8000.

### Dùng trên iPhone (GitHub Pages)

1. Repo phải ở chế độ **Public** (GitHub Pages miễn phí không chạy với repo Private): *Settings → General → Danger Zone → Change visibility → Public*. Repo không chứa khóa API hay dữ liệu cá nhân nào.
2. *Settings → Pages → Build and deployment → Source: Deploy from a branch* → chọn nhánh chứa app (ví dụ `main` hoặc `claude/determined-cray-h5pl4t`), thư mục `/ (root)` → **Save**.
3. Đợi 1–2 phút, link có dạng `https://<tên-tài-khoản>.github.io/App-E/`.
4. Trên iPhone mở link bằng **Safari** → nút Chia sẻ → **Thêm vào Màn hình chính**. App sẽ có icon riêng và chạy toàn màn hình.

Lưu ý trên iPhone: lần đầu bấm 🎤, Safari sẽ hỏi quyền dùng micro và nhận dạng giọng nói, hãy chọn Cho phép. Nếu micro không hoạt động khi mở từ icon ở màn hình chính, hãy mở link trực tiếp trong Safari.

## Gia sư AI

1. Tạo khóa API tại [console.anthropic.com](https://console.anthropic.com/).
2. Vào tab **Gia sư AI** → *Cài đặt gia sư AI* → dán khóa → Lưu.
3. Chọn tình huống, trình độ (A2–C1) và bấm **Bắt đầu cuộc hội thoại mới**.

Mặc định dùng Claude Opus 5.5; có thể đổi sang Sonnet 5.5 hoặc Haiku 5.5 (nhanh và rẻ hơn) trong phần cài đặt. Khóa API chỉ lưu trong trình duyệt của bạn và được gửi thẳng tới API của Anthropic, vì vậy không lưu khóa trên máy dùng chung. Gia sư AI cần Internet; các phần học khác chạy offline.

## Thêm nội dung

Toàn bộ bài học nằm trong `js/data.js`. Mỗi chủ đề có:

```js
{
  id, group: "general" | "tech" | "daily", icon, title, en, scenario,
  roles: ["Tên vai A", "Tên vai B"],             // tùy chọn, mặc định "Đối tác" / "Bạn"
  v: [[english, ipa, vietnamese, example], ...],   // từ vựng
  p: [[english, vietnamese], ...],                 // mẫu câu
  d: [["A" | "B", english, vietnamese], ...]       // hội thoại (A = đối tác, B = bạn)
}
```

Tình huống cho gia sư AI nằm trong `window.AI_SCENARIOS` ở cùng file.

## Cấu trúc

```
index.html        Khung trang
css/style.css     Giao diện (hỗ trợ sáng/tối, điện thoại)
js/data.js        Nội dung bài học
js/app.js         Từ vựng, hội thoại, đóng vai, flashcard, kiểm tra, ôn tập, cài đặt
js/tutor.js       Gia sư AI (Claude)
js/toeic-data.js  Ngân hàng câu hỏi TOEIC (tự soạn theo format đề thi)
js/toeic.js       Luyện thi TOEIC 4 kỹ năng, đề rút gọn, AI chấm bài
```
