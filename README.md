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
| 🤖 Gia sư AI | Hội thoại tự do với Claude theo tình huống (phỏng vấn, họp với tư vấn, nghiệm thu, thương lượng FIDIC, kiểm tra an toàn…). Sau mỗi câu, gia sư sửa lỗi và gợi ý cách nói tự nhiên hơn bằng tiếng Việt |

Tiến độ (từ đã thuộc, điểm kiểm tra, điểm đóng vai, chuỗi ngày học) được lưu trong trình duyệt.

## 16 chủ đề

**Giao tiếp công việc:** Giới thiệu bản thân · Trò chuyện xã giao · Họp tiến độ · Gọi điện & email · Thuyết trình kỹ thuật · Thương lượng & xử lý bất đồng

**Chuyên môn cầu đường:** Kết cấu cầu · Thiết kế & kết cấu đường · Vật liệu xây dựng · Nền móng & địa kỹ thuật · Thi công hiện trường & thiết bị · An toàn lao động (HSE) · Kiểm tra chất lượng & nghiệm thu (QA/QC) · Hợp đồng FIDIC & thanh toán · Khảo sát & trắc địa · Giao thông & thoát nước

## Cách chạy

Không cần cài đặt hay build. Cách đơn giản nhất: mở file `index.html` bằng **Chrome** hoặc **Edge**.

Để dùng micro ổn định (trình duyệt chỉ cho phép micro trên `https` hoặc `localhost`), nên chạy qua máy chủ cục bộ:

```bash
python3 -m http.server 8000
```

Sau đó mở http://localhost:8000.

**Dùng trên điện thoại:** bật GitHub Pages cho repo (Settings → Pages → Deploy from branch), rồi mở link trên Chrome Android hoặc Safari iOS và chọn “Thêm vào màn hình chính”.

## Gia sư AI

1. Tạo khóa API tại [console.anthropic.com](https://console.anthropic.com/).
2. Vào tab **Gia sư AI** → *Cài đặt gia sư AI* → dán khóa → Lưu.
3. Chọn tình huống, trình độ (A2–C1) và bấm **Bắt đầu cuộc hội thoại mới**.

Mặc định dùng Claude Opus 5.5; có thể đổi sang Sonnet 5.5 hoặc Haiku 5.5 (nhanh và rẻ hơn) trong phần cài đặt. Khóa API chỉ lưu trong trình duyệt của bạn và được gửi thẳng tới API của Anthropic, vì vậy không lưu khóa trên máy dùng chung. Gia sư AI cần Internet; các phần học khác chạy offline.

## Thêm nội dung

Toàn bộ bài học nằm trong `js/data.js`. Mỗi chủ đề có:

```js
{
  id, group: "general" | "tech", icon, title, en, scenario,
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
```
