// Nội dung bài học: mỗi chủ đề gồm từ vựng, mẫu câu và hội thoại 1-1 (A = đối tác, B = bạn).
// v: [english, ipa, vietnamese, example]
// p: [english, vietnamese]
// d: [speaker, english, vietnamese]
window.TOPICS = [
  // ===================== GIAO TIẾP CHUNG =====================
  {
    id: "intro", group: "general", icon: "👋",
    title: "Giới thiệu bản thân & công việc", en: "Introducing Yourself",
    scenario: "Bạn gặp kỹ sư tư vấn người Úc lần đầu tại buổi khởi động dự án.",
    v: [
      ["civil engineer", "/ˈsɪv.əl ˌen.dʒɪˈnɪər/", "kỹ sư xây dựng dân dụng", "I'm a civil engineer specializing in bridges and roads."],
      ["site engineer", "/saɪt ˌen.dʒɪˈnɪər/", "kỹ sư hiện trường", "I work as a site engineer for the main contractor."],
      ["contractor", "/ˈkɒn.træk.tər/", "nhà thầu", "Our company is the main contractor for this package."],
      ["consultant", "/kənˈsʌl.tənt/", "tư vấn", "The consultant will review our shop drawings."],
      ["client / employer", "/ˈklaɪ.ənt/ /ɪmˈplɔɪ.ər/", "chủ đầu tư", "The employer is the provincial Department of Transport."],
      ["experience", "/ɪkˈspɪə.ri.əns/", "kinh nghiệm", "I have eight years of experience in highway projects."],
      ["responsible for", "/rɪˈspɒn.sə.bəl fɔːr/", "chịu trách nhiệm về", "I'm responsible for the foundation works."],
      ["package", "/ˈpæk.ɪdʒ/", "gói thầu", "We are working on Package 3 of the expressway."],
      ["background", "/ˈbæk.ɡraʊnd/", "lý lịch, nền tảng", "My background is in structural engineering."],
      ["colleague", "/ˈkɒl.iːɡ/", "đồng nghiệp", "Let me introduce my colleague, Minh."]
    ],
    p: [
      ["Nice to meet you. I'm ___, the site engineer of ___.", "Rất vui được gặp anh. Tôi là ___, kỹ sư hiện trường của ___."],
      ["I've been working in bridge construction for ___ years.", "Tôi đã làm thi công cầu được ___ năm."],
      ["I'm mainly in charge of ___.", "Tôi chủ yếu phụ trách ___."],
      ["Let me introduce you to ___.", "Để tôi giới thiệu anh với ___."],
      ["Could you tell me a bit about your role?", "Anh có thể cho tôi biết một chút về vai trò của anh không?"],
      ["Here's my business card. Feel free to contact me anytime.", "Đây là danh thiếp của tôi. Cứ liên hệ bất cứ lúc nào."]
    ],
    d: [
      ["A", "Good morning. I'm David Clarke, the resident engineer from the supervision consultant.", "Chào buổi sáng. Tôi là David Clarke, kỹ sư thường trú của tư vấn giám sát."],
      ["B", "Good morning, David. Nice to meet you. I'm Nam, the site engineer for the contractor.", "Chào anh David. Rất vui được gặp anh. Tôi là Nam, kỹ sư hiện trường của nhà thầu."],
      ["A", "Nice to meet you too, Nam. What are you responsible for on this project?", "Tôi cũng rất vui được gặp anh, Nam. Anh chịu trách nhiệm gì trong dự án này?"],
      ["B", "I'm mainly in charge of the bridge substructure, especially the bored piles and pile caps.", "Tôi chủ yếu phụ trách kết cấu phần dưới của cầu, đặc biệt là cọc khoan nhồi và bệ cọc."],
      ["A", "Great. How long have you been working in bridge construction?", "Tốt quá. Anh làm thi công cầu được bao lâu rồi?"],
      ["B", "About seven years. Before this, I worked on two river bridges in the Mekong Delta.", "Khoảng bảy năm. Trước đây tôi đã làm hai cây cầu vượt sông ở Đồng bằng sông Cửu Long."],
      ["A", "That's very useful experience. We'll be working closely together then.", "Kinh nghiệm rất hữu ích. Vậy chúng ta sẽ làm việc chặt chẽ với nhau."],
      ["B", "I look forward to it. Here's my card. Please feel free to call me anytime.", "Tôi rất mong đợi. Đây là danh thiếp của tôi. Anh cứ gọi bất cứ lúc nào."]
    ]
  },
  {
    id: "smalltalk", group: "general", icon: "☕",
    title: "Trò chuyện xã giao", en: "Small Talk at Work",
    scenario: "Giờ nghỉ trưa, bạn nói chuyện với kỹ sư người Nhật ở văn phòng công trường.",
    v: [
      ["weekend", "/ˌwiːkˈend/", "cuối tuần", "How was your weekend?"],
      ["weather", "/ˈweð.ər/", "thời tiết", "The weather has been really hot this week."],
      ["rainy season", "/ˈreɪ.ni ˈsiː.zən/", "mùa mưa", "The rainy season might delay the earthworks."],
      ["hometown", "/ˈhəʊm.taʊn/", "quê nhà", "My hometown is in Nghe An province."],
      ["get used to", "/ɡet juːst tuː/", "quen với", "Have you got used to Vietnamese food yet?"],
      ["recommend", "/ˌrek.əˈmend/", "giới thiệu, gợi ý", "I recommend trying bun cha near the site."],
      ["hobby", "/ˈhɒb.i/", "sở thích", "What do you usually do in your free time?"],
      ["exhausting", "/ɪɡˈzɔː.stɪŋ/", "mệt mỏi", "Night shifts can be exhausting."],
      ["busy", "/ˈbɪz.i/", "bận rộn", "It's been a busy week with the concrete pours."],
      ["catch up", "/kætʃ ʌp/", "trò chuyện cập nhật", "Let's catch up over coffee later."]
    ],
    p: [
      ["How's it going?", "Dạo này thế nào?"],
      ["Did you do anything interesting over the weekend?", "Cuối tuần anh có làm gì thú vị không?"],
      ["How are you finding life in Vietnam?", "Anh thấy cuộc sống ở Việt Nam thế nào?"],
      ["It's been a long week, hasn't it?", "Tuần này dài thật nhỉ?"],
      ["Would you like to grab lunch together?", "Anh có muốn đi ăn trưa cùng không?"],
      ["Sounds good! / That sounds great.", "Nghe hay đấy!"]
    ],
    d: [
      ["A", "Hi Nam, how's it going? You look tired today.", "Chào Nam, dạo này thế nào? Hôm nay trông anh mệt nhỉ."],
      ["B", "Hi Kenji. Yes, a bit. We had a night pour for the deck slab last night.", "Chào Kenji. Ừ, hơi mệt. Tối qua bọn tôi đổ bê tông bản mặt cầu ban đêm."],
      ["A", "Oh, that must have been exhausting. Did everything go smoothly?", "Ồ, chắc là mệt lắm. Mọi thứ có suôn sẻ không?"],
      ["B", "Yes, thankfully. It finished around 4 a.m. How was your weekend?", "Có, may quá. Xong khoảng 4 giờ sáng. Cuối tuần của anh thế nào?"],
      ["A", "Quite relaxing. I went to Ha Long Bay with my family.", "Khá thư giãn. Tôi đi Vịnh Hạ Long với gia đình."],
      ["B", "Nice! How are you finding life in Vietnam so far?", "Hay quá! Đến giờ anh thấy cuộc sống ở Việt Nam thế nào?"],
      ["A", "I love it, but I'm still getting used to the traffic.", "Tôi rất thích, nhưng vẫn đang tập quen với giao thông."],
      ["B", "Ha, everyone says that. Would you like to grab some pho for lunch?", "Haha, ai cũng nói vậy. Anh có muốn đi ăn phở trưa không?"],
      ["A", "Sounds great. Let's go.", "Nghe tuyệt đấy. Đi thôi."]
    ]
  },
  {
    id: "meeting", group: "general", icon: "📋",
    title: "Họp tiến độ dự án", en: "Progress Meetings",
    scenario: "Họp tiến độ hàng tuần với tư vấn giám sát. Bạn báo cáo tình hình thi công.",
    v: [
      ["agenda", "/əˈdʒen.də/", "chương trình họp", "Let's go through the agenda."],
      ["progress", "/ˈprəʊ.ɡres/", "tiến độ", "Overall progress is 62 percent."],
      ["behind schedule", "/bɪˈhaɪnd ˈʃedʒ.uːl/", "chậm tiến độ", "The abutment works are two weeks behind schedule."],
      ["ahead of schedule", "/əˈhed əv ˈʃedʒ.uːl/", "vượt tiến độ", "The piling is slightly ahead of schedule."],
      ["milestone", "/ˈmaɪl.stəʊn/", "mốc quan trọng", "The next milestone is deck completion in June."],
      ["action item", "/ˈæk.ʃən ˈaɪ.təm/", "việc cần làm", "Let's note that as an action item."],
      ["minutes", "/ˈmɪn.ɪts/", "biên bản họp", "I'll circulate the minutes by tomorrow."],
      ["look-ahead schedule", "/ˈlʊk.əˌhed/", "kế hoạch ngắn hạn", "Here is our three-week look-ahead schedule."],
      ["bottleneck", "/ˈbɒt.əl.nek/", "điểm nghẽn", "The main bottleneck is the supply of rebar."],
      ["recovery plan", "/rɪˈkʌv.ər.i plæn/", "kế hoạch bù tiến độ", "We will submit a recovery plan next week."]
    ],
    p: [
      ["Let me give you a quick update on ___.", "Để tôi cập nhật nhanh về ___."],
      ["We're currently ___ days behind schedule due to ___.", "Hiện chúng tôi chậm ___ ngày do ___."],
      ["To catch up, we plan to ___.", "Để bù tiến độ, chúng tôi dự định ___."],
      ["Could we move on to the next item?", "Chúng ta chuyển sang mục tiếp theo được không?"],
      ["Sorry, could you repeat that, please?", "Xin lỗi, anh nhắc lại được không?"],
      ["Just to clarify, do you mean ___?", "Để làm rõ, ý anh là ___ phải không?"]
    ],
    d: [
      ["A", "Okay, let's start. Nam, could you give us an update on the bridge works?", "Được, bắt đầu nhé. Nam, anh cập nhật tình hình thi công cầu được không?"],
      ["B", "Sure. All 48 bored piles have been completed, and we've cast four out of six pile caps.", "Vâng. Đã hoàn thành toàn bộ 48 cọc khoan nhồi, và đã đổ được bốn trên sáu bệ cọc."],
      ["A", "Good. What about the piers? Last week you were behind schedule.", "Tốt. Còn trụ thì sao? Tuần trước các anh bị chậm."],
      ["B", "Yes, we're still about five days behind because of heavy rain and a delay in rebar delivery.", "Vâng, chúng tôi vẫn chậm khoảng năm ngày do mưa lớn và thép về chậm."],
      ["A", "How do you plan to catch up?", "Các anh định bù tiến độ thế nào?"],
      ["B", "We'll add a second formwork set and work two shifts. We expect to recover by the end of the month.", "Chúng tôi sẽ bổ sung một bộ ván khuôn và làm hai ca. Dự kiến bù kịp vào cuối tháng."],
      ["A", "Please include that in a written recovery plan.", "Vui lòng đưa nội dung đó vào kế hoạch bù tiến độ bằng văn bản."],
      ["B", "Understood. I'll submit it by Friday, along with the updated three-week look-ahead.", "Đã rõ. Tôi sẽ nộp trước thứ Sáu, kèm kế hoạch ba tuần cập nhật."]
    ]
  },
  {
    id: "phone", group: "general", icon: "📞",
    title: "Gọi điện & viết email", en: "Phone Calls & Emails",
    scenario: "Bạn gọi điện cho nhà cung cấp bê tông để đặt lịch giao hàng và xác nhận qua email.",
    v: [
      ["supplier", "/səˈplaɪ.ər/", "nhà cung cấp", "I'm calling the concrete supplier."],
      ["delivery", "/dɪˈlɪv.ər.i/", "giao hàng", "Can you confirm the delivery time?"],
      ["confirm", "/kənˈfɜːm/", "xác nhận", "Please confirm by email."],
      ["hold on", "/həʊld ɒn/", "giữ máy, chờ chút", "Hold on a second, please."],
      ["put through", "/pʊt θruː/", "nối máy", "Could you put me through to the plant manager?"],
      ["attachment", "/əˈtætʃ.mənt/", "tệp đính kèm", "Please find the drawing in the attachment."],
      ["regarding", "/rɪˈɡɑː.dɪŋ/", "liên quan đến", "I'm writing regarding the pour on Monday."],
      ["urgent", "/ˈɜː.dʒənt/", "khẩn cấp", "This is quite urgent."],
      ["reschedule", "/ˌriːˈʃedʒ.uːl/", "dời lịch", "We need to reschedule the delivery."],
      ["cc", "/ˌsiːˈsiː/", "đồng gửi", "I'll cc the project manager."]
    ],
    p: [
      ["Hello, this is ___ from ___. May I speak to ___?", "Xin chào, tôi là ___ từ ___. Cho tôi gặp ___ được không?"],
      ["I'm calling about ___.", "Tôi gọi về việc ___."],
      ["Sorry, the line is bad. Could you speak up a bit?", "Xin lỗi, đường truyền kém. Anh nói to hơn chút được không?"],
      ["Let me read that back to you.", "Để tôi đọc lại cho anh kiểm tra."],
      ["I'm writing to confirm ___.", "Tôi viết email để xác nhận ___."],
      ["Please let me know if you have any questions.", "Nếu có câu hỏi gì xin vui lòng cho tôi biết."]
    ],
    d: [
      ["A", "Good afternoon, Sunrise Concrete. How can I help you?", "Chào buổi chiều, Bê tông Sunrise xin nghe. Tôi có thể giúp gì?"],
      ["B", "Hi, this is Nam from Thang Long Construction. I'm calling about our pour on Monday.", "Chào chị, tôi là Nam từ Xây dựng Thăng Long. Tôi gọi về đợt đổ bê tông thứ Hai."],
      ["A", "Sure. Could you give me the order number?", "Vâng. Anh cho tôi số đơn hàng được không?"],
      ["B", "It's TL-2048. We need 120 cubic meters of C40 concrete, starting at 6 a.m.", "Là TL-2048. Chúng tôi cần 120 mét khối bê tông C40, bắt đầu lúc 6 giờ sáng."],
      ["A", "Got it. How many trucks per hour do you need?", "Đã rõ. Anh cần bao nhiêu xe mỗi giờ?"],
      ["B", "About four trucks per hour. And the slump should be 18 plus or minus 2 centimeters.", "Khoảng bốn xe mỗi giờ. Độ sụt cần là 18 cộng trừ 2 cm."],
      ["A", "Let me read that back: 120 cubic meters, C40, 6 a.m. Monday, four trucks per hour, slump 18 plus or minus 2.", "Để tôi đọc lại: 120 m³, C40, 6 giờ sáng thứ Hai, bốn xe mỗi giờ, độ sụt 18 ± 2."],
      ["B", "That's correct. I'll send you a confirmation email shortly. Thank you!", "Chính xác. Tôi sẽ gửi email xác nhận ngay. Cảm ơn chị!"]
    ]
  },
  {
    id: "present", group: "general", icon: "📊",
    title: "Thuyết trình kỹ thuật", en: "Technical Presentations",
    scenario: "Bạn trình bày biện pháp thi công dầm Super-T trước chủ đầu tư và tư vấn.",
    v: [
      ["method statement", "/ˈmeθ.əd ˈsteɪt.mənt/", "biện pháp thi công", "Today I'll present our method statement for girder erection."],
      ["overview", "/ˈəʊ.və.vjuː/", "tổng quan", "First, a brief overview of the project."],
      ["sequence", "/ˈsiː.kwəns/", "trình tự", "This slide shows the construction sequence."],
      ["highlight", "/ˈhaɪ.laɪt/", "nhấn mạnh", "I'd like to highlight three key risks."],
      ["illustrate", "/ˈɪl.ə.streɪt/", "minh họa", "This diagram illustrates the lifting plan."],
      ["crawler crane", "/ˈkrɔː.lər kreɪn/", "cần cẩu bánh xích", "We will use a 250-tonne crawler crane."],
      ["launching gantry", "/ˈlɔːn.tʃɪŋ ˈɡæn.tri/", "giàn lao dầm", "For spans over water, we'll use a launching gantry."],
      ["mitigation", "/ˌmɪt.ɪˈɡeɪ.ʃən/", "giảm thiểu (rủi ro)", "Here are our mitigation measures."],
      ["in summary", "/ɪn ˈsʌm.ər.i/", "tóm lại", "In summary, the work will take 45 days."],
      ["feedback", "/ˈfiːd.bæk/", "phản hồi", "We welcome your feedback."]
    ],
    p: [
      ["Today I'm going to talk about ___.", "Hôm nay tôi sẽ trình bày về ___."],
      ["My presentation is divided into three parts.", "Bài trình bày của tôi chia làm ba phần."],
      ["As you can see on this slide, ___.", "Như các anh chị thấy trên slide này, ___."],
      ["Let's move on to ___.", "Chúng ta chuyển sang ___."],
      ["That's a good question. ___", "Câu hỏi rất hay. ___"],
      ["Thank you for your attention. Are there any questions?", "Cảm ơn sự chú ý của mọi người. Có câu hỏi nào không?"]
    ],
    d: [
      ["B", "Good morning, everyone. Today I'm going to present our method statement for Super-T girder erection.", "Chào mọi người. Hôm nay tôi trình bày biện pháp thi công lao lắp dầm Super-T."],
      ["B", "As you can see on this slide, the girders will be lifted by two 250-tonne crawler cranes in a tandem lift.", "Như mọi người thấy trên slide, dầm sẽ được cẩu bằng hai cẩu xích 250 tấn phối hợp."],
      ["A", "Excuse me, what's the maximum weight of each girder?", "Xin lỗi, trọng lượng lớn nhất của mỗi dầm là bao nhiêu?"],
      ["B", "Good question. Each girder weighs about 95 tonnes, so each crane works at around 70 percent of its capacity.", "Câu hỏi hay. Mỗi dầm nặng khoảng 95 tấn, nên mỗi cẩu làm việc ở khoảng 70% sức nâng."],
      ["A", "And how will you ensure the ground can support the cranes?", "Và các anh đảm bảo nền đất chịu được cẩu như thế nào?"],
      ["B", "We'll build a compacted crane platform and use steel mats. The bearing capacity has been checked by plate load tests.", "Chúng tôi sẽ làm nền đặt cẩu đầm chặt và dùng tấm thép lót. Sức chịu tải đã được kiểm tra bằng thí nghiệm bàn nén."],
      ["A", "That sounds reasonable. Please include the test results in the submission.", "Nghe hợp lý. Vui lòng đưa kết quả thí nghiệm vào hồ sơ trình."],
      ["B", "Certainly. In summary, we expect to erect all 36 girders in 45 days. Thank you. Any other questions?", "Chắc chắn rồi. Tóm lại, chúng tôi dự kiến lao lắp 36 dầm trong 45 ngày. Cảm ơn. Còn câu hỏi nào khác không?"]
    ]
  },
  {
    id: "negotiate", group: "general", icon: "🤝",
    title: "Thương lượng & xử lý bất đồng", en: "Negotiation & Disagreement",
    scenario: "Tư vấn yêu cầu đập bỏ một đoạn bê tông; bạn thương lượng giải pháp khác một cách lịch sự.",
    v: [
      ["concern", "/kənˈsɜːn/", "mối lo ngại", "I understand your concern."],
      ["propose", "/prəˈpəʊz/", "đề xuất", "We'd like to propose an alternative."],
      ["alternative", "/ɒlˈtɜː.nə.tɪv/", "phương án thay thế", "Is there an alternative to demolition?"],
      ["compromise", "/ˈkɒm.prə.maɪz/", "thỏa hiệp", "Can we reach a compromise?"],
      ["justify", "/ˈdʒʌs.tɪ.faɪ/", "chứng minh là hợp lý", "Can you justify that requirement?"],
      ["specification", "/ˌspes.ɪ.fɪˈkeɪ.ʃən/", "chỉ dẫn kỹ thuật", "According to the specification, ..."],
      ["remedial work", "/rɪˈmiː.di.əl wɜːk/", "công tác khắc phục", "We'll carry out remedial work at our cost."],
      ["core test", "/kɔːr test/", "thí nghiệm khoan lõi", "We suggest doing core tests first."],
      ["agree to disagree", "", "chấp nhận bất đồng", "Let's not agree to disagree yet."],
      ["on the same page", "", "cùng quan điểm", "I want to make sure we're on the same page."]
    ],
    p: [
      ["I see your point, but ___.", "Tôi hiểu ý anh, nhưng ___."],
      ["With respect, I'm not sure that's the best solution.", "Với sự tôn trọng, tôi không chắc đó là giải pháp tốt nhất."],
      ["Would you consider ___?", "Anh có cân nhắc ___ không?"],
      ["What if we ___?", "Nếu chúng ta ___ thì sao?"],
      ["Could you show me which clause requires that?", "Anh chỉ giúp điều khoản nào yêu cầu việc đó được không?"],
      ["I think we can both agree that ___.", "Tôi nghĩ cả hai chúng ta đều đồng ý rằng ___."]
    ],
    d: [
      ["A", "Nam, the 7-day strength of the column at P5 is below the requirement. I think it needs to be demolished.", "Nam, cường độ 7 ngày của cột trụ P5 thấp hơn yêu cầu. Tôi nghĩ cần phải đập bỏ."],
      ["B", "I understand your concern, David. But 7-day results don't always reflect the final strength.", "Tôi hiểu mối lo ngại của anh, David. Nhưng kết quả 7 ngày không phải lúc nào cũng phản ánh cường độ cuối cùng."],
      ["A", "It reached only 60 percent of the design strength. That's quite low.", "Nó chỉ đạt 60% cường độ thiết kế. Khá thấp."],
      ["B", "That's true. Would you consider waiting for the 28-day results before deciding?", "Đúng vậy. Anh có cân nhắc chờ kết quả 28 ngày rồi mới quyết định không?"],
      ["A", "And if the 28-day results also fail?", "Nếu kết quả 28 ngày cũng không đạt thì sao?"],
      ["B", "Then we propose core tests on site. If the cores fail too, we'll demolish and recast at our own cost.", "Khi đó chúng tôi đề xuất khoan lõi tại hiện trường. Nếu mẫu lõi cũng không đạt, chúng tôi sẽ đập bỏ và đổ lại bằng chi phí của mình."],
      ["A", "Okay, that's fair. But please stop loading that pier until we have the results.", "Được, vậy là công bằng. Nhưng vui lòng không chất tải lên trụ đó cho tới khi có kết quả."],
      ["B", "Agreed. I'll confirm this in writing so we're all on the same page.", "Đồng ý. Tôi sẽ xác nhận bằng văn bản để chúng ta thống nhất."]
    ]
  },

  // ===================== CHUYÊN MÔN CẦU ĐƯỜNG =====================
  {
    id: "bridge", group: "tech", icon: "🌉",
    title: "Kết cấu cầu", en: "Bridge Components",
    scenario: "Bạn dẫn một kỹ sư nước ngoài đi tham quan công trường cầu và giải thích các bộ phận.",
    v: [
      ["superstructure", "/ˈsuː.pə.strʌk.tʃər/", "kết cấu phần trên", "The superstructure consists of girders and deck slab."],
      ["substructure", "/ˈsʌbˌstrʌk.tʃər/", "kết cấu phần dưới", "The substructure includes piers, abutments and foundations."],
      ["abutment", "/əˈbʌt.mənt/", "mố cầu", "The abutment supports the end of the bridge."],
      ["pier", "/pɪər/", "trụ cầu", "Pier P3 is in the middle of the river."],
      ["girder", "/ˈɡɜː.dər/", "dầm chủ", "We use precast prestressed concrete girders."],
      ["deck slab", "/dek slæb/", "bản mặt cầu", "The deck slab is 200 mm thick."],
      ["bearing", "/ˈbeə.rɪŋ/", "gối cầu", "Elastomeric bearings are placed on the pier cap."],
      ["expansion joint", "/ɪkˈspæn.ʃən dʒɔɪnt/", "khe co giãn", "Expansion joints allow the deck to move."],
      ["pier cap / pier head", "/pɪər kæp/", "xà mũ trụ", "The pier cap carries the girders."],
      ["span", "/spæn/", "nhịp", "The main span is 120 meters long."],
      ["cable-stayed bridge", "/ˈkeɪ.bəl steɪd/", "cầu dây văng", "Can Tho Bridge is a cable-stayed bridge."],
      ["box girder", "/bɒks ˈɡɜː.dər/", "dầm hộp", "The main span uses a cast-in-place box girder."],
      ["balanced cantilever", "/ˈbæl.ənst ˈkæn.tɪˌliː.vər/", "đúc hẫng cân bằng", "We'll build the main span by balanced cantilever."],
      ["diaphragm", "/ˈdaɪ.ə.fræm/", "dầm ngang", "Diaphragms connect the girders."],
      ["railing / parapet", "/ˈreɪ.lɪŋ/ /ˈpær.ə.pet/", "lan can", "The parapet is designed for vehicle impact."]
    ],
    p: [
      ["This bridge has ___ spans with a total length of ___ meters.", "Cầu này có ___ nhịp với tổng chiều dài ___ m."],
      ["The superstructure is made of ___.", "Kết cấu phần trên làm bằng ___."],
      ["The load is transferred from the deck to the girders, then to the bearings and piers.", "Tải trọng truyền từ bản mặt cầu xuống dầm, rồi đến gối và trụ."],
      ["We're currently working on ___.", "Hiện chúng tôi đang thi công ___."],
      ["The design load is ___.", "Tải trọng thiết kế là ___."],
      ["Watch your step here, please.", "Xin cẩn thận bước chân ở đây."]
    ],
    d: [
      ["A", "So, can you give me an overview of the bridge?", "Vậy anh có thể giới thiệu tổng quan về cây cầu không?"],
      ["B", "Of course. It's a five-span bridge with a total length of 210 meters. The main span is 70 meters.", "Tất nhiên. Đây là cầu năm nhịp, tổng chiều dài 210 m. Nhịp chính dài 70 m."],
      ["A", "What type of superstructure is used for the main span?", "Nhịp chính dùng loại kết cấu phần trên nào?"],
      ["B", "It's a prestressed concrete box girder, built by the balanced cantilever method.", "Đó là dầm hộp bê tông dự ứng lực, thi công bằng phương pháp đúc hẫng cân bằng."],
      ["A", "And the side spans?", "Còn các nhịp biên?"],
      ["B", "They use precast Super-T girders, 38 meters long, with a cast-in-place deck slab.", "Dùng dầm Super-T đúc sẵn dài 38 m, với bản mặt cầu đổ tại chỗ."],
      ["A", "What kind of bearings are you using?", "Các anh dùng loại gối nào?"],
      ["B", "Pot bearings for the main span and elastomeric bearings for the side spans.", "Gối chậu cho nhịp chính và gối cao su cho các nhịp biên."],
      ["A", "Interesting. Which part are you working on now?", "Thú vị. Hiện các anh đang làm hạng mục nào?"],
      ["B", "We're casting segment K5 on pier P2. Please watch your step here, the platform is a bit slippery.", "Chúng tôi đang đúc đốt K5 trên trụ P2. Xin cẩn thận bước chân, sàn công tác hơi trơn."]
    ]
  },
  {
    id: "road", group: "tech", icon: "🛣️",
    title: "Thiết kế & kết cấu đường", en: "Road Design & Pavement",
    scenario: "Bạn thảo luận với tư vấn thiết kế về bình đồ, trắc dọc và kết cấu áo đường.",
    v: [
      ["alignment", "/əˈlaɪn.mənt/", "tuyến (bình đồ)", "The horizontal alignment avoids the village."],
      ["longitudinal profile", "/ˌlɒn.dʒɪˈtjuː.dɪ.nəl ˈprəʊ.faɪl/", "trắc dọc", "Please check the longitudinal profile at Km 12."],
      ["cross section", "/krɒs ˈsek.ʃən/", "mặt cắt ngang", "The typical cross section has four lanes."],
      ["carriageway", "/ˈkær.ɪdʒ.weɪ/", "phần xe chạy", "Each carriageway is 7.5 meters wide."],
      ["shoulder", "/ˈʃəʊl.dər/", "lề đường", "The hard shoulder is 2.5 meters."],
      ["median", "/ˈmiː.di.ən/", "dải phân cách giữa", "A concrete median separates the two directions."],
      ["superelevation", "/ˌsuː.pər.el.ɪˈveɪ.ʃən/", "siêu cao", "The superelevation on this curve is 6 percent."],
      ["gradient / slope", "/ˈɡreɪ.di.ənt/", "độ dốc", "The maximum gradient is 4 percent."],
      ["subgrade", "/ˈsʌb.ɡreɪd/", "nền đường", "The subgrade must reach K98 compaction."],
      ["sub-base", "/ˈsʌb.beɪs/", "lớp móng dưới", "The sub-base is 30 cm of crushed aggregate."],
      ["base course", "/beɪs kɔːs/", "lớp móng trên", "The base course is cement-treated aggregate."],
      ["asphalt concrete", "/ˈæs.fælt ˈkɒŋ.kriːt/", "bê tông nhựa", "The wearing course is 5 cm of asphalt concrete."],
      ["embankment", "/ɪmˈbæŋk.mənt/", "nền đắp", "The embankment height is about 4 meters."],
      ["cut", "/kʌt/", "nền đào", "This section is in cut through rock."],
      ["chainage / station", "/ˈtʃeɪ.nɪdʒ/", "lý trình", "The interchange is at chainage Km 25+300."]
    ],
    p: [
      ["At chainage Km ___, the design speed is ___ km/h.", "Tại lý trình Km ___, tốc độ thiết kế là ___ km/h."],
      ["The pavement structure consists of ___ layers.", "Kết cấu áo đường gồm ___ lớp."],
      ["The minimum radius of the horizontal curve is ___ meters.", "Bán kính đường cong nằm tối thiểu là ___ m."],
      ["We suggest raising the profile by ___ to avoid flooding.", "Chúng tôi đề xuất nâng trắc dọc thêm ___ để tránh ngập."],
      ["The CBR of the subgrade is only ___ percent.", "CBR của nền đường chỉ đạt ___%."],
      ["Could you send me the revised drawings?", "Anh gửi tôi bản vẽ sửa đổi được không?"]
    ],
    d: [
      ["A", "Nam, we've reviewed the profile between Km 8 and Km 10. It seems quite low.", "Nam, chúng tôi đã xem trắc dọc từ Km 8 đến Km 10. Có vẻ khá thấp."],
      ["B", "Yes, we noticed that too. The local people told us this area floods almost every year.", "Vâng, chúng tôi cũng thấy vậy. Người dân địa phương nói khu này năm nào cũng ngập."],
      ["A", "What's the design flood level there?", "Mực nước thiết kế ở đó là bao nhiêu?"],
      ["B", "The design flood level is plus 3.2 meters, but the edge of the pavement is only plus 3.4.", "Mực nước thiết kế là +3,2 m, nhưng mép mặt đường chỉ ở +3,4."],
      ["A", "That leaves very little freeboard. What do you propose?", "Vậy chỉ còn rất ít độ cao an toàn. Anh đề xuất gì?"],
      ["B", "We suggest raising the profile by 50 centimeters and adding two box culverts.", "Chúng tôi đề xuất nâng trắc dọc 50 cm và bổ sung hai cống hộp."],
      ["A", "That will increase the embankment volume. Have you checked the settlement?", "Việc đó sẽ tăng khối lượng đắp. Anh đã kiểm tra lún chưa?"],
      ["B", "Not yet. The soft soil there is about 12 meters deep, so we may need prefabricated vertical drains.", "Chưa. Đất yếu ở đó dày khoảng 12 m, nên có thể cần bấc thấm."],
      ["A", "Okay, please prepare a proposal with the settlement analysis.", "Được, vui lòng chuẩn bị đề xuất kèm phân tích lún."]
    ]
  },
  {
    id: "material", group: "tech", icon: "🧱",
    title: "Vật liệu xây dựng", en: "Construction Materials",
    scenario: "Bạn trao đổi với kỹ sư QA về cấp phối bê tông, cốt thép và cáp dự ứng lực.",
    v: [
      ["mix design", "/mɪks dɪˈzaɪn/", "thiết kế cấp phối", "The mix design for C50 concrete was approved."],
      ["cement", "/sɪˈment/", "xi măng", "We use PC40 Portland cement."],
      ["aggregate", "/ˈæɡ.rɪ.ɡət/", "cốt liệu", "The coarse aggregate is crushed stone 10–20 mm."],
      ["admixture", "/ədˈmɪks.tʃər/", "phụ gia", "A retarding admixture is added in hot weather."],
      ["water-cement ratio", "/ˈwɔː.tər sɪˈment ˈreɪ.ʃi.əʊ/", "tỷ lệ nước/xi măng", "The water-cement ratio must not exceed 0.4."],
      ["slump", "/slʌmp/", "độ sụt", "The slump was 16 cm."],
      ["compressive strength", "/kəmˈpres.ɪv streŋθ/", "cường độ chịu nén", "The 28-day compressive strength is 52 MPa."],
      ["rebar / reinforcement", "/ˈriː.bɑːr/", "cốt thép", "The rebar is grade CB400."],
      ["prestressing strand", "/priːˈstres.ɪŋ strænd/", "cáp dự ứng lực", "Each tendon has 19 strands of 15.2 mm."],
      ["curing", "/ˈkjʊə.rɪŋ/", "bảo dưỡng", "Curing must continue for at least 7 days."],
      ["cover", "/ˈkʌv.ər/", "lớp bê tông bảo vệ", "The concrete cover is 50 mm."],
      ["mill certificate", "/mɪl səˈtɪf.ɪ.kət/", "chứng chỉ xuất xưởng", "Please provide the mill certificates for the steel."],
      ["bitumen", "/ˈbɪtʃ.ə.mən/", "nhựa đường", "The bitumen grade is 60/70."],
      ["honeycomb", "/ˈhʌn.i.kəʊm/", "rỗ tổ ong", "There is some honeycombing at the bottom of the wall."],
      ["crack", "/kræk/", "vết nứt", "The crack width is less than 0.2 mm."]
    ],
    p: [
      ["The concrete grade for ___ is ___.", "Mác bê tông cho ___ là ___."],
      ["Have the materials been tested and approved?", "Vật liệu đã được thí nghiệm và chấp thuận chưa?"],
      ["The test results meet the specification.", "Kết quả thí nghiệm đáp ứng chỉ dẫn kỹ thuật."],
      ["We took ___ sets of cube samples.", "Chúng tôi đã lấy ___ tổ mẫu lập phương."],
      ["The temperature of the fresh concrete must not exceed ___ °C.", "Nhiệt độ bê tông tươi không được vượt quá ___ °C."],
      ["This batch was rejected because ___.", "Mẻ này bị loại vì ___."]
    ],
    d: [
      ["A", "Nam, what concrete grade are you using for the pier columns?", "Nam, các anh dùng mác bê tông nào cho thân trụ?"],
      ["B", "C40, with a maximum aggregate size of 20 millimeters and a water-cement ratio of 0.38.", "C40, cỡ hạt cốt liệu lớn nhất 20 mm, tỷ lệ nước/xi măng 0,38."],
      ["A", "It's very hot these days. How will you control the concrete temperature?", "Dạo này trời rất nóng. Các anh kiểm soát nhiệt độ bê tông thế nào?"],
      ["B", "We'll use chilled water and a retarding admixture, and pour in the early morning.", "Chúng tôi sẽ dùng nước lạnh và phụ gia chậm đông kết, đổ vào sáng sớm."],
      ["A", "Good. What about the rebar? Have the mill certificates been submitted?", "Tốt. Còn cốt thép? Đã nộp chứng chỉ xuất xưởng chưa?"],
      ["B", "Yes, and we've done tensile and bending tests at an independent lab. All passed.", "Rồi, và chúng tôi đã thí nghiệm kéo và uốn ở phòng thí nghiệm độc lập. Tất cả đều đạt."],
      ["A", "And how long will you cure the columns?", "Các anh bảo dưỡng thân trụ trong bao lâu?"],
      ["B", "At least seven days, using wet hessian and plastic sheets.", "Ít nhất bảy ngày, dùng bao tải ướt và màng ni-lông."]
    ]
  },
  {
    id: "foundation", group: "tech", icon: "🏗️",
    title: "Nền móng & địa kỹ thuật", en: "Foundations & Geotechnics",
    scenario: "Bạn báo cáo sự cố sập thành hố khoan cọc nhồi và bàn biện pháp xử lý.",
    v: [
      ["bored pile", "/bɔːd paɪl/", "cọc khoan nhồi", "The bored piles are 1.5 m in diameter."],
      ["driven pile", "/ˈdrɪv.ən paɪl/", "cọc đóng", "We use driven precast piles for the culvert."],
      ["pile cap", "/paɪl kæp/", "bệ cọc", "Each pile cap sits on nine piles."],
      ["casing", "/ˈkeɪ.sɪŋ/", "ống vách", "The steel casing is 12 meters long."],
      ["bentonite / polymer slurry", "/ˈben.tə.naɪt/", "dung dịch bentonite/polymer", "Bentonite slurry keeps the borehole stable."],
      ["borehole collapse", "/ˈbɔː.həʊl kəˈlæps/", "sập thành hố khoan", "We had a borehole collapse at pile P2-05."],
      ["tremie pipe", "/ˈtrem.i paɪp/", "ống đổ bê tông (tremie)", "The tremie pipe must stay embedded in the concrete."],
      ["soil investigation", "/sɔɪl ɪnˌves.tɪˈɡeɪ.ʃən/", "khảo sát địa chất", "The soil investigation shows soft clay."],
      ["bearing capacity", "/ˈbeə.rɪŋ kəˈpæs.ə.ti/", "sức chịu tải", "The pile bearing capacity is 800 tonnes."],
      ["static load test", "/ˈstæt.ɪk ləʊd test/", "thử tải tĩnh", "We'll do a static load test on the trial pile."],
      ["PDA test", "/ˌpiː.diːˈeɪ/", "thí nghiệm PDA (biến dạng lớn)", "A PDA test was done on 5% of the piles."],
      ["sonic test / CSL", "/ˈsɒn.ɪk/", "siêu âm cọc", "Sonic tests check the pile integrity."],
      ["soft soil", "/sɒft sɔɪl/", "đất yếu", "The soft soil layer is 15 m thick."],
      ["settlement", "/ˈset.əl.mənt/", "độ lún", "The settlement after six months is 35 cm."],
      ["vertical drain (PVD)", "/ˈvɜː.tɪ.kəl dreɪn/", "bấc thấm", "PVDs are installed at 1.2 m spacing."]
    ],
    p: [
      ["We've reached the design toe level at ___.", "Chúng tôi đã khoan đến cao độ mũi cọc thiết kế ở ___."],
      ["The borehole was inspected and cleaned before concreting.", "Hố khoan đã được kiểm tra và vệ sinh trước khi đổ bê tông."],
      ["The soil condition is different from the borehole log.", "Điều kiện đất khác với hình trụ lỗ khoan."],
      ["We need a decision on ___ as soon as possible.", "Chúng tôi cần quyết định về ___ sớm nhất có thể."],
      ["The test results are within the allowable limits.", "Kết quả thí nghiệm nằm trong giới hạn cho phép."],
      ["We'll backfill the hole and re-drill it.", "Chúng tôi sẽ lấp hố và khoan lại."]
    ],
    d: [
      ["B", "David, I need to report an issue. We had a partial borehole collapse at pile P2-05 last night.", "David, tôi cần báo cáo một sự cố. Tối qua hố khoan cọc P2-05 bị sập thành một phần."],
      ["A", "At what depth did it happen?", "Sập ở độ sâu bao nhiêu?"],
      ["B", "At about 18 meters, in a loose sand layer just below the casing.", "Khoảng 18 m, trong lớp cát rời ngay dưới chân ống vách."],
      ["A", "Was anyone hurt? And what caused it?", "Có ai bị thương không? Nguyên nhân là gì?"],
      ["B", "No one was hurt. We think the slurry level dropped when the pump failed for about twenty minutes.", "Không ai bị thương. Chúng tôi nghĩ mực dung dịch bị tụt khi bơm hỏng khoảng hai mươi phút."],
      ["A", "What do you propose to do?", "Anh đề xuất xử lý thế nào?"],
      ["B", "We'll backfill the hole with lean concrete, extend the casing to 22 meters, and re-drill after three days.", "Chúng tôi sẽ lấp hố bằng bê tông nghèo, kéo dài ống vách đến 22 m, và khoan lại sau ba ngày."],
      ["A", "Okay. Also, add a standby pump and check the slurry properties every two hours.", "Được. Ngoài ra, bổ sung bơm dự phòng và kiểm tra chỉ tiêu dung dịch mỗi hai giờ."],
      ["B", "Understood. I'll send you an incident report and the revised procedure today.", "Đã rõ. Hôm nay tôi sẽ gửi anh báo cáo sự cố và quy trình sửa đổi."]
    ]
  },
  {
    id: "site", group: "tech", icon: "🚧",
    title: "Thi công hiện trường & thiết bị", en: "Site Works & Equipment",
    scenario: "Bạn hướng dẫn đội thi công và quản đốc nước ngoài về kế hoạch ngày làm việc.",
    v: [
      ["excavator", "/ˈek.skə.veɪ.tər/", "máy xúc", "Two excavators are working at the cut section."],
      ["bulldozer", "/ˈbʊlˌdəʊ.zər/", "máy ủi", "The bulldozer spreads the fill material."],
      ["vibratory roller", "/ˈvaɪ.brə.tər.i ˈrəʊ.lər/", "lu rung", "Compact each layer with a 25-tonne vibratory roller."],
      ["dump truck", "/dʌmp trʌk/", "xe ben", "We need ten more dump trucks."],
      ["paver", "/ˈpeɪ.vər/", "máy rải", "The asphalt paver lays 6 meters wide."],
      ["concrete pump", "/ˈkɒŋ.kriːt pʌmp/", "máy bơm bê tông", "The concrete pump has a 42-meter boom."],
      ["formwork", "/ˈfɔːm.wɜːk/", "ván khuôn", "Strip the formwork after 24 hours."],
      ["scaffolding / falsework", "/ˈskæf.əl.dɪŋ/ /ˈfɔːls.wɜːk/", "giàn giáo / đà giáo", "The falsework must be checked before the pour."],
      ["compaction", "/kəmˈpæk.ʃən/", "đầm nén", "The degree of compaction must be at least 95 percent."],
      ["layer thickness", "/ˈleɪ.ər ˈθɪk.nəs/", "chiều dày lớp", "The maximum layer thickness is 30 cm."],
      ["breakdown", "/ˈbreɪk.daʊn/", "hỏng hóc", "The crane had a breakdown this morning."],
      ["shift", "/ʃɪft/", "ca làm việc", "We work two shifts a day."],
      ["foreman", "/ˈfɔː.mən/", "đội trưởng / quản đốc", "Ask the foreman to come to the office."],
      ["setting out", "/ˈset.ɪŋ aʊt/", "định vị, cắm tuyến", "The surveyors will do the setting out first."],
      ["daily report", "/ˈdeɪ.li rɪˈpɔːt/", "báo cáo ngày", "Please submit the daily report by 5 p.m."]
    ],
    p: [
      ["Today's plan is to ___.", "Kế hoạch hôm nay là ___."],
      ["Make sure ___ before you start.", "Đảm bảo ___ trước khi bắt đầu."],
      ["How many ___ do we have on site today?", "Hôm nay trên công trường có bao nhiêu ___?"],
      ["The ___ broke down. When can it be repaired?", "___ bị hỏng. Khi nào sửa được?"],
      ["Let's stop work until ___.", "Tạm dừng thi công cho đến khi ___."],
      ["Please keep the access road clear.", "Vui lòng giữ đường công vụ thông thoáng."]
    ],
    d: [
      ["A", "Morning, Nam. What's the plan for today?", "Chào Nam. Kế hoạch hôm nay thế nào?"],
      ["B", "Morning. Today we'll place and compact the third embankment layer from Km 3+200 to Km 3+600.", "Chào anh. Hôm nay chúng ta rải và đầm lớp đắp thứ ba từ Km 3+200 đến Km 3+600."],
      ["A", "How many machines do we have?", "Mình có bao nhiêu máy?"],
      ["B", "Two excavators, one bulldozer, two vibratory rollers and twelve dump trucks.", "Hai máy xúc, một máy ủi, hai lu rung và mười hai xe ben."],
      ["A", "What's the layer thickness?", "Chiều dày lớp là bao nhiêu?"],
      ["B", "No more than 30 centimeters loose. And please make sure the moisture content is close to optimum before rolling.", "Không quá 30 cm ở trạng thái rời. Và hãy đảm bảo độ ẩm gần độ ẩm tối ưu trước khi lu."],
      ["A", "Got it. One roller had a hydraulic leak yesterday, though.", "Rõ. Nhưng hôm qua một lu bị rò dầu thủy lực."],
      ["B", "I know. The mechanic will fix it this morning. Until then, reduce the placing rate.", "Tôi biết. Thợ máy sẽ sửa sáng nay. Trong lúc đó, giảm tốc độ rải."],
      ["A", "Okay. When will the lab do the density tests?", "Được. Khi nào phòng thí nghiệm kiểm tra độ chặt?"],
      ["B", "This afternoon, around 3 p.m. Please call me when the layer is ready.", "Chiều nay khoảng 3 giờ. Khi lớp xong thì gọi tôi nhé."]
    ]
  },
  {
    id: "safety", group: "tech", icon: "⛑️",
    title: "An toàn lao động (HSE)", en: "Health, Safety & Environment",
    scenario: "Bạn chủ trì buổi họp an toàn đầu ca (toolbox talk) và xử lý vi phạm an toàn.",
    v: [
      ["PPE", "/ˌpiː.piːˈiː/", "đồ bảo hộ cá nhân", "Everyone must wear full PPE on site."],
      ["hard hat", "/hɑːd hæt/", "mũ bảo hộ", "Put your hard hat on, please."],
      ["safety harness", "/ˈseɪf.ti ˈhɑː.nɪs/", "dây an toàn toàn thân", "Use a safety harness when working at height."],
      ["working at height", "/ˈwɜː.kɪŋ ət haɪt/", "làm việc trên cao", "Working at height needs a permit."],
      ["toolbox talk", "/ˈtuːl.bɒks tɔːk/", "họp an toàn đầu ca", "We hold a toolbox talk every morning."],
      ["near miss", "/nɪər mɪs/", "sự cố suýt xảy ra", "Please report all near misses."],
      ["hazard", "/ˈhæz.əd/", "mối nguy", "Identify the hazards before starting work."],
      ["risk assessment", "/rɪsk əˈses.mənt/", "đánh giá rủi ro", "The risk assessment must be approved."],
      ["permit to work", "/ˈpɜː.mɪt tə wɜːk/", "giấy phép làm việc", "Hot work needs a permit to work."],
      ["barricade", "/ˌbær.ɪˈkeɪd/", "rào chắn", "Put barricades around the excavation."],
      ["lifting operation", "/ˈlɪf.tɪŋ ˌɒp.əˈreɪ.ʃən/", "công tác cẩu lắp", "No one stands under a lifting operation."],
      ["signal man / banksman", "/ˈbæŋks.mən/", "người xi-nhan cẩu", "The banksman guides the crane operator."],
      ["first aid", "/ˌfɜːst ˈeɪd/", "sơ cứu", "The first aid kit is in the site office."],
      ["life jacket", "/ˈlaɪf ˌdʒæk.ɪt/", "áo phao", "Wear a life jacket when working over water."],
      ["housekeeping", "/ˈhaʊsˌkiː.pɪŋ/", "vệ sinh, gọn gàng công trường", "Good housekeeping prevents trips and falls."]
    ],
    p: [
      ["Safety first. Stop work if it's unsafe.", "An toàn là trên hết. Dừng việc nếu không an toàn."],
      ["Where is your ___? You must wear it at all times.", "___ của anh đâu? Anh phải đeo nó mọi lúc."],
      ["Today's main hazards are ___.", "Mối nguy chính hôm nay là ___."],
      ["Please keep clear of the swing area of the crane.", "Vui lòng tránh xa vùng quay của cẩu."],
      ["If you see anything unsafe, report it immediately.", "Nếu thấy gì không an toàn, hãy báo ngay."],
      ["Has the permit been signed?", "Giấy phép đã được ký chưa?"]
    ],
    d: [
      ["B", "Good morning, everyone. Let's start today's toolbox talk. Today we'll be lifting girders over the river.", "Chào mọi người. Bắt đầu họp an toàn đầu ca. Hôm nay chúng ta sẽ cẩu dầm qua sông."],
      ["B", "The main hazards are falling from height, falling into water, and being hit by suspended loads.", "Mối nguy chính là ngã từ trên cao, rơi xuống nước và bị vật treo va trúng."],
      ["A", "What PPE do we need on the deck?", "Trên mặt cầu cần đồ bảo hộ gì?"],
      ["B", "Hard hat, safety shoes, a full-body harness, and a life jacket. Always hook your harness on the lifeline.", "Mũ bảo hộ, giày bảo hộ, dây an toàn toàn thân và áo phao. Luôn móc dây an toàn vào dây cứu sinh."],
      ["A", "Who will be the banksman today?", "Hôm nay ai làm người xi-nhan cẩu?"],
      ["B", "Mr. Hung. Only he gives signals to the crane operator. Nobody stands under the load.", "Anh Hùng. Chỉ anh ấy ra tín hiệu cho người lái cẩu. Không ai đứng dưới tải."],
      ["A", "What if the wind gets too strong?", "Nếu gió quá mạnh thì sao?"],
      ["B", "If the wind speed exceeds 10 meters per second, we stop lifting immediately. Any questions? Okay, let's work safely.", "Nếu tốc độ gió vượt 10 m/s, dừng cẩu ngay. Có câu hỏi không? Được rồi, làm việc an toàn nhé."]
    ]
  },
  {
    id: "qaqc", group: "tech", icon: "✅",
    title: "Kiểm tra chất lượng & nghiệm thu", en: "QA/QC & Inspection",
    scenario: "Bạn mời tư vấn nghiệm thu cốt thép bệ trụ trước khi đổ bê tông.",
    v: [
      ["inspection", "/ɪnˈspek.ʃən/", "kiểm tra, nghiệm thu", "We'd like to request an inspection at 2 p.m."],
      ["request for inspection (RFI)", "/rɪˈkwest fər ɪnˈspek.ʃən/", "phiếu yêu cầu nghiệm thu", "I've submitted the RFI for the pile cap rebar."],
      ["hold point", "/həʊld pɔɪnt/", "điểm dừng kiểm tra", "Rebar inspection is a hold point."],
      ["non-conformance report (NCR)", "/ˌnɒn.kənˈfɔː.məns/", "báo cáo không phù hợp", "The consultant issued an NCR for the cracks."],
      ["tolerance", "/ˈtɒl.ər.əns/", "dung sai", "The tolerance for bar spacing is ±10 mm."],
      ["spacing", "/ˈspeɪ.sɪŋ/", "khoảng cách (cốt thép)", "The spacing of the stirrups is 150 mm."],
      ["lap length", "/læp leŋθ/", "chiều dài nối chồng", "The lap length should be 40 times the bar diameter."],
      ["spacer", "/ˈspeɪ.sər/", "con kê", "Add more spacers to keep the cover."],
      ["as-built drawing", "/ˌæz ˈbɪlt/", "bản vẽ hoàn công", "Please submit the as-built drawings."],
      ["ITP (inspection and test plan)", "/ˌaɪ.tiːˈpiː/", "kế hoạch kiểm tra & thí nghiệm", "Follow the ITP for each activity."],
      ["approve / reject", "/əˈpruːv/ /rɪˈdʒekt/", "chấp thuận / từ chối", "The work was approved with comments."],
      ["rectify", "/ˈrek.tɪ.faɪ/", "khắc phục, sửa", "Please rectify the defects before the pour."],
      ["defect", "/ˈdiː.fekt/", "khuyết tật", "List all defects in the punch list."],
      ["handover", "/ˈhænd.əʊ.vər/", "bàn giao", "The handover is planned for December."],
      ["sign off", "/saɪn ɒf/", "ký nghiệm thu", "Could you sign off the inspection form?"]
    ],
    p: [
      ["We'd like to request an inspection of ___ at ___.", "Chúng tôi muốn yêu cầu nghiệm thu ___ lúc ___."],
      ["Everything is ready for your inspection.", "Mọi thứ đã sẵn sàng để anh kiểm tra."],
      ["This is within the tolerance.", "Cái này nằm trong dung sai."],
      ["We'll rectify it right away and call you back.", "Chúng tôi sẽ sửa ngay và gọi lại anh."],
      ["Can we proceed with the pour after that?", "Sau đó chúng tôi có thể tiến hành đổ bê tông không?"],
      ["Could you sign the inspection form, please?", "Anh ký vào biên bản nghiệm thu giúp được không?"]
    ],
    d: [
      ["B", "Hi David, the rebar for pile cap P3 is ready. We'd like to request your inspection at 2 p.m.", "Chào David, cốt thép bệ cọc P3 đã xong. Chúng tôi muốn mời anh nghiệm thu lúc 2 giờ chiều."],
      ["A", "Okay, have you done your internal check?", "Được, các anh đã tự kiểm tra nội bộ chưa?"],
      ["B", "Yes, our QC team checked it this morning. Here's the checklist.", "Rồi, tổ QC của chúng tôi đã kiểm tra sáng nay. Đây là phiếu kiểm tra."],
      ["A", "The spacing of the top bars here looks too wide. It's about 180 millimeters.", "Khoảng cách thép lớp trên chỗ này có vẻ quá rộng. Khoảng 180 mm."],
      ["B", "You're right. The drawing shows 150. That's outside the tolerance. We'll add bars there.", "Anh nói đúng. Bản vẽ là 150. Như vậy vượt dung sai. Chúng tôi sẽ bổ sung thanh ở đó."],
      ["A", "Also, the concrete cover at the side seems less than 75 millimeters.", "Ngoài ra, lớp bảo vệ ở mặt bên có vẻ nhỏ hơn 75 mm."],
      ["B", "We'll add more spacers. Can you come back in about an hour?", "Chúng tôi sẽ thêm con kê. Khoảng một tiếng nữa anh quay lại được không?"],
      ["A", "Sure. If it's okay, I'll sign off and you can pour tomorrow morning.", "Được. Nếu ổn tôi sẽ ký nghiệm thu và các anh có thể đổ sáng mai."],
      ["B", "Thank you. I'll call you as soon as it's fixed.", "Cảm ơn anh. Sửa xong tôi sẽ gọi anh ngay."]
    ]
  },
  {
    id: "contract", group: "tech", icon: "📑",
    title: "Hợp đồng FIDIC & thanh toán", en: "Contracts, Claims & Payment",
    scenario: "Bạn thảo luận với Kỹ sư (The Engineer) về phát sinh khối lượng và thanh toán.",
    v: [
      ["variation order", "/ˌveə.riˈeɪ.ʃən ˈɔː.dər/", "lệnh thay đổi", "The design change requires a variation order."],
      ["claim", "/kleɪm/", "khiếu nại, yêu cầu bồi thường", "We'll submit a claim for extension of time."],
      ["extension of time (EOT)", "/ɪkˈsten.ʃən əv taɪm/", "gia hạn thời gian", "We are entitled to an extension of time."],
      ["bill of quantities (BOQ)", "/bɪl əv ˈkwɒn.tə.tiz/", "bảng khối lượng", "This item is not in the BOQ."],
      ["unit rate", "/ˈjuː.nɪt reɪt/", "đơn giá", "We propose a new unit rate for this work."],
      ["interim payment certificate", "/ˈɪn.tər.ɪm ˈpeɪ.mənt səˈtɪf.ɪ.kət/", "chứng chỉ thanh toán tạm", "Interim Payment Certificate No. 12 was issued."],
      ["advance payment", "/ədˈvɑːns ˈpeɪ.mənt/", "tạm ứng", "The advance payment is 10 percent."],
      ["retention", "/rɪˈten.ʃən/", "tiền giữ lại (bảo hành)", "Five percent retention is deducted."],
      ["liquidated damages", "/ˈlɪk.wɪ.deɪ.tɪd ˈdæm.ɪ.dʒɪz/", "tiền phạt chậm tiến độ", "Delay may result in liquidated damages."],
      ["notice", "/ˈnəʊ.tɪs/", "thông báo", "We must give notice within 28 days."],
      ["clause", "/klɔːz/", "điều khoản", "According to Sub-Clause 20.1, ..."],
      ["site handover", "/saɪt ˈhænd.əʊ.vər/", "bàn giao mặt bằng", "The delay in site handover affected our schedule."],
      ["measurement", "/ˈmeʒ.ə.mənt/", "đo đạc khối lượng", "Joint measurement will be done on Friday."],
      ["entitlement", "/ɪnˈtaɪ.təl.mənt/", "quyền được hưởng", "We believe we have an entitlement to additional cost."],
      ["defects notification period", "/ˈdiː.fekts ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/", "thời hạn thông báo sai sót (bảo hành)", "The defects notification period is 24 months."]
    ],
    p: [
      ["We'd like to notify you of ___ under Sub-Clause ___.", "Chúng tôi xin thông báo về ___ theo điều khoản ___."],
      ["This work is outside the original scope.", "Công việc này nằm ngoài phạm vi ban đầu."],
      ["We will submit the detailed particulars within ___ days.", "Chúng tôi sẽ nộp chi tiết cụ thể trong vòng ___ ngày."],
      ["Could you clarify when the payment will be released?", "Anh làm rõ khi nào khoản thanh toán được giải ngân được không?"],
      ["We propose to use the existing rate for ___.", "Chúng tôi đề xuất dùng đơn giá hiện có cho ___."],
      ["Let's do a joint measurement to agree the quantities.", "Hãy cùng đo đạc để thống nhất khối lượng."]
    ],
    d: [
      ["B", "David, I'd like to discuss the additional soft soil treatment at Km 9.", "David, tôi muốn trao đổi về phần xử lý đất yếu bổ sung tại Km 9."],
      ["A", "Yes, I saw your letter. You consider it a variation?", "Vâng, tôi đã xem thư của anh. Anh coi đó là thay đổi?"],
      ["B", "Yes. The soft soil depth is 12 meters, but the tender drawings showed only 5. It's an unforeseeable condition.", "Đúng. Chiều dày đất yếu là 12 m, nhưng bản vẽ đấu thầu chỉ thể hiện 5 m. Đó là điều kiện không thể lường trước."],
      ["A", "Did you give notice in time?", "Anh có thông báo đúng hạn không?"],
      ["B", "Yes, we sent the notice on March 3rd, within 28 days, under Sub-Clause 4.12.", "Có, chúng tôi gửi thông báo ngày 3/3, trong vòng 28 ngày, theo điều khoản 4.12."],
      ["A", "Okay. How do you propose to value the work?", "Được. Anh đề xuất xác định giá trị công việc thế nào?"],
      ["B", "For PVDs, we can use the existing BOQ rate. For the extra surcharge, we propose a new rate based on actual cost.", "Với bấc thấm, có thể dùng đơn giá BOQ hiện có. Với phần gia tải thêm, chúng tôi đề xuất đơn giá mới dựa trên chi phí thực tế."],
      ["A", "Please submit the detailed breakdown, and let's arrange a joint measurement next week.", "Vui lòng nộp bảng phân tích chi tiết, và tuần sau mình tổ chức đo đạc chung."],
      ["B", "Sure. We'll also include our request for a 30-day extension of time.", "Vâng. Chúng tôi cũng sẽ đưa vào đề nghị gia hạn 30 ngày."]
    ]
  },
  {
    id: "survey", group: "tech", icon: "📐",
    title: "Khảo sát & trắc địa", en: "Surveying",
    scenario: "Bạn làm việc với đội trắc địa của tư vấn để kiểm tra mốc và cao độ.",
    v: [
      ["total station", "/ˈtəʊ.təl ˈsteɪ.ʃən/", "máy toàn đạc", "We check the coordinates with a total station."],
      ["level / leveling", "/ˈlev.əl/", "máy thủy bình / đo cao", "Leveling shows the elevation is correct."],
      ["benchmark", "/ˈbentʃ.mɑːk/", "mốc cao độ", "Benchmark BM-05 was damaged."],
      ["control point", "/kənˈtrəʊl pɔɪnt/", "mốc khống chế", "Please verify the control points."],
      ["coordinate", "/kəʊˈɔː.dɪ.nət/", "tọa độ", "The pier center coordinates are given in VN-2000."],
      ["elevation / level", "/ˌel.ɪˈveɪ.ʃən/", "cao độ", "The top of the pile cap is at elevation +2.500."],
      ["offset", "/ˈɒf.set/", "khoảng lệch", "There is a 15 mm offset from the design position."],
      ["centerline", "/ˈsen.tə.laɪn/", "tim tuyến", "Mark the centerline every 20 meters."],
      ["GPS / GNSS", "/ˌdʒiː.piːˈes/", "định vị vệ tinh", "We use RTK GNSS for the topographic survey."],
      ["deviation", "/ˌdiː.viˈeɪ.ʃən/", "sai lệch", "The deviation is within the allowable limit."],
      ["topographic survey", "/ˌtɒp.əˈɡræf.ɪk/", "khảo sát địa hình", "The topographic survey was done last year."],
      ["verticality", "/ˌvɜː.tɪˈkæl.ə.ti/", "độ thẳng đứng", "Check the verticality of the column."]
    ],
    p: [
      ["Could we do a joint survey of ___?", "Chúng ta khảo sát chung ___ được không?"],
      ["The measured elevation is ___, the design is ___.", "Cao độ đo được là ___, thiết kế là ___."],
      ["The difference is ___ millimeters.", "Chênh lệch là ___ mm."],
      ["Which coordinate system are we using?", "Chúng ta đang dùng hệ tọa độ nào?"],
      ["Please re-establish the damaged benchmark.", "Vui lòng khôi phục mốc bị hỏng."],
      ["Let's close the traverse to check the error.", "Hãy khép đường chuyền để kiểm tra sai số."]
    ],
    d: [
      ["A", "Nam, we checked pier P4 yesterday. The center is offset by 35 millimeters to the east.", "Nam, hôm qua chúng tôi kiểm tra trụ P4. Tim trụ lệch 35 mm về phía đông."],
      ["B", "Really? Our survey showed only 10 millimeters. Which control point did you use?", "Thật sao? Đo của chúng tôi chỉ lệch 10 mm. Anh dùng mốc khống chế nào?"],
      ["A", "We set up at CP-07 and took a backsight to CP-08.", "Chúng tôi đặt máy ở CP-07 và ngắm về CP-08."],
      ["B", "Ah, I think CP-08 was disturbed by the excavator last week. We now use CP-09.", "À, tôi nghĩ CP-08 bị máy xúc làm xê dịch tuần trước. Giờ chúng tôi dùng CP-09."],
      ["A", "That could explain the difference. Shall we do a joint survey this afternoon?", "Điều đó có thể giải thích chênh lệch. Chiều nay mình khảo sát chung nhé?"],
      ["B", "Good idea. We'll also re-establish CP-08 and close a traverse to check the error.", "Ý hay. Chúng tôi cũng sẽ khôi phục CP-08 và khép đường chuyền để kiểm tra sai số."],
      ["A", "What's the allowable tolerance for the pier position?", "Dung sai cho phép vị trí trụ là bao nhiêu?"],
      ["B", "Plus or minus 20 millimeters according to the specification.", "Cộng trừ 20 mm theo chỉ dẫn kỹ thuật."]
    ]
  },
  {
    id: "traffic", group: "tech", icon: "🚦",
    title: "Giao thông & thoát nước", en: "Traffic Management & Drainage",
    scenario: "Bạn trình phương án phân luồng giao thông và hệ thống thoát nước với cảnh sát giao thông và tư vấn.",
    v: [
      ["traffic management plan", "/ˈtræf.ɪk ˈmæn.ɪdʒ.mənt plæn/", "phương án phân luồng", "The traffic management plan was approved."],
      ["detour / diversion", "/ˈdiː.tʊər/ /daɪˈvɜː.ʃən/", "đường tránh, phân luồng", "Traffic will use a temporary detour."],
      ["lane closure", "/leɪn ˈkləʊ.ʒər/", "đóng làn", "We need a lane closure at night."],
      ["flagman", "/ˈflæɡ.mən/", "người cầm cờ điều tiết", "Two flagmen will control traffic."],
      ["traffic cone", "/ˈtræf.ɪk kəʊn/", "cọc tiêu nón", "Place traffic cones every 10 meters."],
      ["signage", "/ˈsaɪ.nɪdʒ/", "biển báo", "Install warning signage 200 m before the work zone."],
      ["interchange", "/ˈɪn.tə.tʃeɪndʒ/", "nút giao khác mức", "The interchange connects to National Highway 1."],
      ["intersection", "/ˌɪn.təˈsek.ʃən/", "nút giao (cùng mức)", "The intersection will have traffic lights."],
      ["culvert", "/ˈkʌl.vət/", "cống", "A 2x2 m box culvert is needed here."],
      ["side ditch", "/saɪd dɪtʃ/", "rãnh dọc", "The side ditch is lined with concrete."],
      ["catch basin / manhole", "/kætʃ ˈbeɪ.sən/", "hố thu / hố ga", "Clean the catch basins before the rainy season."],
      ["outlet", "/ˈaʊt.let/", "cửa xả", "The culvert outlet needs erosion protection."],
      ["guardrail", "/ˈɡɑːd.reɪl/", "hộ lan tôn sóng", "Install guardrails on high embankments."],
      ["road marking", "/rəʊd ˈmɑː.kɪŋ/", "vạch sơn kẻ đường", "Thermoplastic road marking will be applied."]
    ],
    p: [
      ["During construction, traffic will be diverted to ___.", "Trong thi công, giao thông sẽ được chuyển sang ___."],
      ["We plan to close one lane from ___ to ___.", "Chúng tôi dự kiến đóng một làn từ ___ đến ___."],
      ["Warning signs will be placed ___ meters before the work zone.", "Biển cảnh báo sẽ được đặt cách vùng thi công ___ m."],
      ["The drainage capacity is designed for a ___-year flood.", "Khả năng thoát nước thiết kế cho lũ ___ năm."],
      ["We'll inform local residents in advance.", "Chúng tôi sẽ thông báo trước cho người dân địa phương."],
      ["Is a night-time closure acceptable?", "Đóng đường ban đêm có được chấp nhận không?"]
    ],
    d: [
      ["A", "Nam, how will you manage traffic when you build the new overpass across the highway?", "Nam, các anh sẽ tổ chức giao thông thế nào khi thi công cầu vượt mới qua quốc lộ?"],
      ["B", "We'll build a temporary diversion road on the right side, about 400 meters long.", "Chúng tôi sẽ làm đường tránh tạm bên phải, dài khoảng 400 m."],
      ["A", "And during girder erection?", "Còn khi lao lắp dầm?"],
      ["B", "We'll fully close the highway for short periods, only between 11 p.m. and 4 a.m.", "Chúng tôi sẽ đóng hoàn toàn quốc lộ trong thời gian ngắn, chỉ từ 11 giờ đêm đến 4 giờ sáng."],
      ["A", "How will drivers know?", "Lái xe sẽ biết bằng cách nào?"],
      ["B", "We'll put warning signs 500 meters before the site, use flagmen, and announce the closure in local news one week ahead.", "Chúng tôi đặt biển cảnh báo cách công trường 500 m, bố trí người cầm cờ và thông báo trên báo địa phương trước một tuần."],
      ["A", "What about drainage? The diversion road may block the existing ditch.", "Còn thoát nước? Đường tránh có thể chặn rãnh hiện hữu."],
      ["B", "Good point. We'll install two 1-meter pipe culverts under the diversion road to keep the water flowing.", "Ý hay. Chúng tôi sẽ đặt hai cống tròn đường kính 1 m dưới đường tránh để nước vẫn thoát được."]
    ]
  },
  // ===================== ĐỜI SỐNG HÀNG NGÀY =====================
  {
    id: "restaurant", group: "daily", icon: "🍜", roles: ["Phục vụ", "Bạn"],
    title: "Nhà hàng & gọi món", en: "Eating Out",
    scenario: "Bạn đi ăn tối ở một nhà hàng, gọi món, hỏi về món ăn và thanh toán.",
    v: [
      ["menu", "/ˈmen.juː/", "thực đơn", "Could we see the menu, please?"],
      ["reservation", "/ˌrez.əˈveɪ.ʃən/", "đặt bàn trước", "I have a reservation for two at seven."],
      ["order", "/ˈɔː.dər/", "gọi món", "Are you ready to order?"],
      ["starter / appetizer", "/ˈstɑː.tər/ /ˈæp.ə.taɪ.zər/", "món khai vị", "We'll share a starter."],
      ["main course", "/meɪn kɔːs/", "món chính", "For the main course, I'll have the steak."],
      ["dessert", "/dɪˈzɜːt/", "món tráng miệng", "Would you like any dessert?"],
      ["spicy", "/ˈspaɪ.si/", "cay", "Is this dish very spicy?"],
      ["allergic to", "/əˈlɜː.dʒɪk tuː/", "dị ứng với", "I'm allergic to peanuts."],
      ["medium / well-done", "/ˈmiː.di.əm/ /ˌwel ˈdʌn/", "chín vừa / chín kỹ", "Medium, please."],
      ["recommend", "/ˌrek.əˈmend/", "gợi ý, giới thiệu", "What do you recommend?"],
      ["bill / check", "/bɪl/ /tʃek/", "hóa đơn", "Could we have the bill, please?"],
      ["tip", "/tɪp/", "tiền boa", "Is the tip included?"],
      ["takeaway / to go", "/ˈteɪk.ə.weɪ/", "mang về", "Can I get this to go?"],
      ["split the bill", "/splɪt ðə bɪl/", "chia tiền", "Can we split the bill?"]
    ],
    p: [
      ["A table for ___, please.", "Cho tôi một bàn ___ người."],
      ["I'd like ___, please.", "Cho tôi ___."],
      ["Could I have it without ___?", "Cho tôi món đó không có ___ được không?"],
      ["What's in this dish?", "Món này có những gì?"],
      ["Excuse me, this isn't what I ordered.", "Xin lỗi, đây không phải món tôi gọi."],
      ["Can I pay by card?", "Tôi trả bằng thẻ được không?"]
    ],
    d: [
      ["A", "Good evening. Do you have a reservation?", "Chào buổi tối. Anh có đặt bàn trước không?"],
      ["B", "Yes, a table for two under the name Nam.", "Có, bàn hai người tên Nam."],
      ["A", "This way, please. Here's the menu. Can I get you something to drink?", "Mời đi lối này. Đây là thực đơn. Anh muốn uống gì không?"],
      ["B", "Two glasses of orange juice, please. What do you recommend for the main course?", "Cho hai ly nước cam. Món chính anh gợi ý món gì?"],
      ["A", "Our grilled salmon is very popular, and the beef stew is excellent too.", "Cá hồi nướng của chúng tôi rất được ưa chuộng, và bò hầm cũng rất ngon."],
      ["B", "I'll have the salmon. Does it come with any nuts? My wife is allergic to peanuts.", "Tôi lấy cá hồi. Món đó có hạt gì không? Vợ tôi dị ứng đậu phộng."],
      ["A", "No, there are no nuts in it. And for your wife?", "Không, món đó không có hạt. Còn chị nhà dùng gì?"],
      ["B", "She'll have the beef stew, please.", "Cô ấy dùng bò hầm."],
      ["A", "Great. Anything else?", "Vâng. Còn gì nữa không ạ?"],
      ["B", "That's all for now, thanks. And could we have the bill at the end? We'll pay by card.", "Bây giờ vậy thôi, cảm ơn. Lát nữa cho chúng tôi hóa đơn nhé, chúng tôi trả bằng thẻ."]
    ]
  },
  {
    id: "shopping", group: "daily", icon: "🛍️", roles: ["Người bán", "Bạn"],
    title: "Mua sắm", en: "Shopping",
    scenario: "Bạn đi mua quần áo ở trung tâm thương mại, hỏi cỡ, thử đồ, mặc cả và đổi trả.",
    v: [
      ["size", "/saɪz/", "cỡ, kích thước", "Do you have this in a larger size?"],
      ["try on", "/traɪ ɒn/", "mặc thử", "Can I try this on?"],
      ["fitting room", "/ˈfɪt.ɪŋ ruːm/", "phòng thử đồ", "Where's the fitting room?"],
      ["fit", "/fɪt/", "vừa (kích cỡ)", "It doesn't fit me."],
      ["suit", "/suːt/", "hợp (màu, kiểu)", "That color really suits you."],
      ["discount", "/ˈdɪs.kaʊnt/", "giảm giá", "Is there a discount on this?"],
      ["on sale", "/ɒn seɪl/", "đang giảm giá", "These shoes are on sale."],
      ["cash", "/kæʃ/", "tiền mặt", "Do you take cash?"],
      ["receipt", "/rɪˈsiːt/", "biên lai", "Can I have the receipt, please?"],
      ["refund", "/ˈriː.fʌnd/", "hoàn tiền", "I'd like a refund."],
      ["exchange", "/ɪksˈtʃeɪndʒ/", "đổi hàng", "Can I exchange this for a smaller one?"],
      ["cashier", "/kæʃˈɪər/", "quầy thu ngân", "Please pay at the cashier."],
      ["expensive / cheap", "/ɪkˈspen.sɪv/ /tʃiːp/", "đắt / rẻ", "It's a bit too expensive."],
      ["just looking", "/dʒʌst ˈlʊk.ɪŋ/", "chỉ xem thôi", "I'm just looking, thanks."]
    ],
    p: [
      ["How much is this?", "Cái này bao nhiêu tiền?"],
      ["Do you have this in ___?", "Cái này có màu/cỡ ___ không?"],
      ["Can you give me a better price?", "Bớt cho tôi chút được không?"],
      ["I'll take it.", "Tôi lấy cái này."],
      ["I'm just looking, thanks.", "Tôi chỉ xem thôi, cảm ơn."],
      ["I'd like to return this. It doesn't fit.", "Tôi muốn trả lại cái này. Nó không vừa."]
    ],
    d: [
      ["A", "Hi there. Can I help you with anything?", "Xin chào. Tôi có thể giúp gì cho anh?"],
      ["B", "Yes, I'm looking for a shirt for work. Something formal.", "Vâng, tôi đang tìm áo sơ mi đi làm. Kiểu lịch sự."],
      ["A", "These white and light blue shirts are very popular. What size are you?", "Mấy chiếc trắng và xanh nhạt này rất được ưa chuộng. Anh mặc cỡ nào?"],
      ["B", "Usually medium. Can I try the blue one on?", "Thường là cỡ M. Tôi mặc thử chiếc xanh được không?"],
      ["A", "Of course. The fitting room is over there.", "Tất nhiên. Phòng thử đồ ở đằng kia."],
      ["B", "It's a little tight around the shoulders. Do you have it in a large?", "Hơi chật ở vai. Có cỡ L không?"],
      ["A", "Yes, here you are. And it's 20 percent off this week.", "Có, đây ạ. Tuần này đang giảm 20%."],
      ["B", "Great, this one fits well. I'll take it. Can I pay by card?", "Tuyệt, chiếc này vừa. Tôi lấy. Trả bằng thẻ được không?"],
      ["A", "Sure. Here's your receipt. You can exchange it within 30 days.", "Được ạ. Đây là biên lai. Anh có thể đổi trong vòng 30 ngày."]
    ]
  },
  {
    id: "directions", group: "daily", icon: "🧭", roles: ["Người đi đường", "Bạn"],
    title: "Hỏi đường & đi lại", en: "Directions & Transport",
    scenario: "Bạn đi công tác ở nước ngoài, hỏi đường đến ga tàu và mua vé.",
    v: [
      ["turn left / right", "/tɜːn left/", "rẽ trái / phải", "Turn left at the traffic lights."],
      ["go straight", "/ɡəʊ streɪt/", "đi thẳng", "Go straight for about 200 meters."],
      ["intersection / crossroads", "/ˈkrɒs.rəʊdz/", "ngã tư", "It's at the next intersection."],
      ["opposite", "/ˈɒp.ə.zɪt/", "đối diện", "The bank is opposite the post office."],
      ["next to", "/nekst tuː/", "bên cạnh", "It's next to the supermarket."],
      ["block", "/blɒk/", "dãy nhà (khoảng giữa 2 ngã tư)", "Walk two blocks."],
      ["far / within walking distance", "/fɑːr/", "xa / đi bộ được", "Is it within walking distance?"],
      ["subway / underground", "/ˈsʌb.weɪ/", "tàu điện ngầm", "Take the subway to Central Station."],
      ["platform", "/ˈplæt.fɔːm/", "sân ga", "The train leaves from platform 3."],
      ["one-way / return ticket", "/ˈwʌn.weɪ/ /rɪˈtɜːn/", "vé một chiều / khứ hồi", "A return ticket to Osaka, please."],
      ["get off", "/ɡet ɒf/", "xuống (xe)", "Get off at the third stop."],
      ["transfer / change", "/trænsˈfɜːr/", "chuyển tuyến", "You need to change at Shinjuku."],
      ["fare", "/feər/", "giá vé", "How much is the fare?"],
      ["lost", "/lɒst/", "lạc đường", "Excuse me, I think I'm lost."]
    ],
    p: [
      ["Excuse me, how do I get to ___?", "Xin lỗi, đi đến ___ bằng cách nào?"],
      ["Is it far from here?", "Chỗ đó có xa đây không?"],
      ["Could you show me on the map?", "Anh chỉ giúp trên bản đồ được không?"],
      ["Which bus goes to ___?", "Xe buýt nào đi đến ___?"],
      ["Where should I get off?", "Tôi nên xuống ở đâu?"],
      ["Sorry, could you say that again more slowly?", "Xin lỗi, anh nói lại chậm hơn được không?"]
    ],
    d: [
      ["B", "Excuse me, sorry to bother you. How do I get to the central train station?", "Xin lỗi đã làm phiền. Đi đến ga tàu trung tâm bằng cách nào ạ?"],
      ["A", "Oh, it's not far. Go straight down this street for two blocks, then turn right.", "À, không xa đâu. Đi thẳng phố này hai dãy nhà, rồi rẽ phải."],
      ["B", "Two blocks, then right. And then?", "Hai dãy nhà rồi rẽ phải. Rồi sao nữa ạ?"],
      ["A", "You'll see a big shopping mall. The station is opposite the mall.", "Anh sẽ thấy một trung tâm thương mại lớn. Ga nằm đối diện trung tâm đó."],
      ["B", "Is it within walking distance?", "Đi bộ được không ạ?"],
      ["A", "Yes, about ten minutes on foot. Or you can take bus number 12.", "Được, khoảng mười phút đi bộ. Hoặc anh có thể đi xe buýt số 12."],
      ["B", "I'll walk. Do you know where I can buy a train ticket to the airport?", "Tôi đi bộ. Anh có biết mua vé tàu ra sân bay ở đâu không?"],
      ["A", "There are ticket machines inside the station, or you can use a card.", "Trong ga có máy bán vé, hoặc anh có thể dùng thẻ."],
      ["B", "Thank you so much for your help!", "Cảm ơn anh rất nhiều!"],
      ["A", "You're welcome. Have a nice trip!", "Không có gì. Chúc anh đi vui vẻ!"]
    ]
  },
  {
    id: "airport", group: "daily", icon: "✈️", roles: ["Nhân viên", "Bạn"],
    title: "Sân bay & xuất nhập cảnh", en: "At the Airport",
    scenario: "Bạn làm thủ tục check-in và trả lời câu hỏi của nhân viên xuất nhập cảnh khi đi công tác.",
    v: [
      ["check in", "/tʃek ɪn/", "làm thủ tục", "Where do I check in for flight VN301?"],
      ["passport", "/ˈpɑːs.pɔːt/", "hộ chiếu", "May I see your passport?"],
      ["boarding pass", "/ˈbɔː.dɪŋ pɑːs/", "thẻ lên máy bay", "Here's your boarding pass."],
      ["luggage / baggage", "/ˈlʌɡ.ɪdʒ/", "hành lý", "How many pieces of luggage do you have?"],
      ["carry-on / hand luggage", "/ˈkær.i ɒn/", "hành lý xách tay", "Is this your carry-on?"],
      ["aisle / window seat", "/aɪl/ /ˈwɪn.dəʊ siːt/", "ghế lối đi / cửa sổ", "Could I have an aisle seat?"],
      ["gate", "/ɡeɪt/", "cửa ra máy bay", "Boarding is at gate 15."],
      ["delayed", "/dɪˈleɪd/", "bị hoãn, trễ", "Our flight is delayed by an hour."],
      ["connecting flight", "/kəˈnek.tɪŋ flaɪt/", "chuyến bay nối chuyến", "I have a connecting flight to Sydney."],
      ["immigration", "/ˌɪm.ɪˈɡreɪ.ʃən/", "xuất nhập cảnh", "Go through immigration first."],
      ["customs", "/ˈkʌs.təmz/", "hải quan", "Do you have anything to declare at customs?"],
      ["purpose of visit", "/ˈpɜː.pəs əv ˈvɪz.ɪt/", "mục đích chuyến đi", "What's the purpose of your visit?"],
      ["business trip", "/ˈbɪz.nɪs trɪp/", "chuyến công tác", "I'm here on a business trip."],
      ["overweight", "/ˌəʊ.vəˈweɪt/", "quá cân", "Your bag is 3 kilos overweight."]
    ],
    p: [
      ["I'd like to check in for my flight to ___.", "Tôi muốn làm thủ tục chuyến bay đi ___."],
      ["Could I have a window seat, please?", "Cho tôi ghế cửa sổ được không?"],
      ["What time does boarding start?", "Mấy giờ bắt đầu lên máy bay?"],
      ["I'm here for ___ days on business.", "Tôi ở đây ___ ngày để công tác."],
      ["I'm staying at ___ hotel.", "Tôi ở khách sạn ___."],
      ["My luggage hasn't arrived.", "Hành lý của tôi chưa đến."]
    ],
    d: [
      ["A", "Good morning. May I see your passport, please?", "Chào buổi sáng. Cho tôi xem hộ chiếu."],
      ["B", "Here you are.", "Đây ạ."],
      ["A", "What's the purpose of your visit?", "Mục đích chuyến đi của anh là gì?"],
      ["B", "I'm here on a business trip. I'm attending a bridge engineering conference.", "Tôi đi công tác. Tôi dự hội thảo về kỹ thuật cầu."],
      ["A", "How long will you be staying?", "Anh sẽ ở bao lâu?"],
      ["B", "Five days. I'm flying back next Sunday.", "Năm ngày. Chủ nhật tuần sau tôi bay về."],
      ["A", "Where are you staying?", "Anh ở đâu?"],
      ["B", "At the Harbor View Hotel, near the convention center.", "Ở khách sạn Harbor View, gần trung tâm hội nghị."],
      ["A", "Do you have a return ticket?", "Anh có vé khứ hồi không?"],
      ["B", "Yes, here's my itinerary.", "Có, đây là lịch trình của tôi."],
      ["A", "Thank you. Enjoy your stay.", "Cảm ơn. Chúc anh có chuyến đi vui vẻ."]
    ]
  },
  {
    id: "hotel", group: "daily", icon: "🏨", roles: ["Lễ tân", "Bạn"],
    title: "Khách sạn", en: "At the Hotel",
    scenario: "Bạn nhận phòng khách sạn, hỏi dịch vụ và phàn nàn khi phòng có vấn đề.",
    v: [
      ["check in / check out", "/tʃek ɪn/ /tʃek aʊt/", "nhận phòng / trả phòng", "What time is check-out?"],
      ["booking", "/ˈbʊk.ɪŋ/", "đặt phòng", "I have a booking under the name Tran."],
      ["single / double room", "/ˈsɪŋ.ɡəl/ /ˈdʌb.əl/", "phòng đơn / đôi", "I booked a single room."],
      ["key card", "/kiː kɑːd/", "thẻ phòng", "My key card doesn't work."],
      ["front desk / reception", "/frʌnt desk/", "quầy lễ tân", "Please call the front desk."],
      ["breakfast included", "/ˈbrek.fəst ɪnˈkluː.dɪd/", "bao gồm ăn sáng", "Is breakfast included?"],
      ["Wi-Fi password", "/ˈwaɪ.faɪ ˈpɑːs.wɜːd/", "mật khẩu Wi-Fi", "What's the Wi-Fi password?"],
      ["air conditioner", "/eər kənˈdɪʃ.ən.ər/", "máy lạnh", "The air conditioner isn't working."],
      ["towel", "/taʊəl/", "khăn tắm", "Could I have some extra towels?"],
      ["laundry service", "/ˈlɔːn.dri ˈsɜː.vɪs/", "dịch vụ giặt ủi", "Do you have a laundry service?"],
      ["wake-up call", "/ˈweɪk.ʌp kɔːl/", "gọi báo thức", "I'd like a wake-up call at 6 a.m."],
      ["noisy", "/ˈnɔɪ.zi/", "ồn ào", "My room is very noisy."],
      ["late check-out", "/leɪt ˈtʃek.aʊt/", "trả phòng muộn", "Is late check-out possible?"],
      ["deposit", "/dɪˈpɒz.ɪt/", "tiền đặt cọc", "There's a deposit of 50 dollars."]
    ],
    p: [
      ["I have a reservation under the name ___.", "Tôi đã đặt phòng tên ___."],
      ["What time is breakfast served?", "Bữa sáng phục vụ lúc mấy giờ?"],
      ["Could you call a taxi for me?", "Gọi giúp tôi một chiếc taxi được không?"],
      ["There's a problem with my room. ___", "Phòng tôi có vấn đề. ___"],
      ["Could I change to another room?", "Tôi đổi sang phòng khác được không?"],
      ["Can I leave my luggage here after check-out?", "Tôi gửi hành lý ở đây sau khi trả phòng được không?"]
    ],
    d: [
      ["A", "Good evening, welcome to the Riverside Hotel. How can I help you?", "Chào buổi tối, chào mừng đến khách sạn Riverside. Tôi giúp gì được ạ?"],
      ["B", "Hi, I have a reservation under the name Tran Nam, for three nights.", "Chào chị, tôi đặt phòng tên Trần Nam, ba đêm."],
      ["A", "Yes, a single room with breakfast. Could I see your passport and a credit card for the deposit?", "Vâng, phòng đơn có ăn sáng. Cho tôi xem hộ chiếu và thẻ tín dụng để đặt cọc."],
      ["B", "Sure. What time is breakfast served?", "Đây ạ. Bữa sáng phục vụ lúc mấy giờ?"],
      ["A", "From 6:30 to 10 a.m. on the second floor. Here's your key card. Room 815.", "Từ 6:30 đến 10 giờ sáng ở tầng hai. Đây là thẻ phòng. Phòng 815."],
      ["B", "Thank you. And what's the Wi-Fi password?", "Cảm ơn. Mật khẩu Wi-Fi là gì?"],
      ["A", "It's on the back of your key card holder.", "Ở mặt sau bìa đựng thẻ phòng ạ."],
      ["B", "Great. One more thing, could I have a wake-up call at 6 tomorrow morning?", "Tuyệt. Còn một việc, sáng mai gọi báo thức cho tôi lúc 6 giờ được không?"],
      ["A", "Of course. Enjoy your stay, Mr. Tran.", "Tất nhiên. Chúc anh Trần nghỉ ngơi vui vẻ."]
    ]
  },
  {
    id: "doctor", group: "daily", icon: "🩺", roles: ["Bác sĩ", "Bạn"],
    title: "Khám bệnh & hiệu thuốc", en: "Doctor & Pharmacy",
    scenario: "Bạn bị ốm khi đang ở nước ngoài, đi khám bác sĩ và mua thuốc.",
    v: [
      ["symptom", "/ˈsɪmp.təm/", "triệu chứng", "What are your symptoms?"],
      ["headache", "/ˈhed.eɪk/", "đau đầu", "I've had a headache since yesterday."],
      ["fever", "/ˈfiː.vər/", "sốt", "I have a high fever."],
      ["sore throat", "/sɔːr θrəʊt/", "đau họng", "I have a sore throat and a cough."],
      ["cough", "/kɒf/", "ho", "My cough is getting worse."],
      ["stomachache", "/ˈstʌm.ək.eɪk/", "đau bụng", "I have a stomachache after eating."],
      ["dizzy", "/ˈdɪz.i/", "chóng mặt", "I feel dizzy when I stand up."],
      ["prescription", "/prɪˈskrɪp.ʃən/", "đơn thuốc", "Here's your prescription."],
      ["pharmacy", "/ˈfɑː.mə.si/", "hiệu thuốc", "Is there a pharmacy nearby?"],
      ["painkiller", "/ˈpeɪnˌkɪl.ər/", "thuốc giảm đau", "Can I buy painkillers without a prescription?"],
      ["side effect", "/saɪd ɪˈfekt/", "tác dụng phụ", "Are there any side effects?"],
      ["twice a day", "/twaɪs ə deɪ/", "hai lần một ngày", "Take two tablets twice a day after meals."],
      ["appointment", "/əˈpɔɪnt.mənt/", "lịch hẹn", "I'd like to make an appointment."],
      ["insurance", "/ɪnˈʃɔː.rəns/", "bảo hiểm", "Does my insurance cover this?"]
    ],
    p: [
      ["I don't feel well.", "Tôi thấy không khỏe."],
      ["I've had ___ for ___ days.", "Tôi bị ___ được ___ ngày rồi."],
      ["It hurts here.", "Tôi đau ở chỗ này."],
      ["Is it serious?", "Có nghiêm trọng không?"],
      ["How often should I take this medicine?", "Thuốc này uống bao nhiêu lần?"],
      ["Do you have something for ___?", "Có thuốc nào trị ___ không?"]
    ],
    d: [
      ["A", "Hello, please have a seat. What seems to be the problem?", "Chào anh, mời ngồi. Anh bị sao vậy?"],
      ["B", "I don't feel well. I've had a fever and a sore throat for two days.", "Tôi thấy không khỏe. Tôi bị sốt và đau họng hai ngày nay."],
      ["A", "Do you have a cough or a headache?", "Anh có ho hay đau đầu không?"],
      ["B", "Yes, a bit of a cough, and I feel very tired.", "Có, hơi ho, và tôi thấy rất mệt."],
      ["A", "Let me check your temperature... It's 38.5. Open your mouth, please. Your throat is quite red.", "Để tôi đo nhiệt độ... 38,5 độ. Anh há miệng ra. Họng anh khá đỏ."],
      ["B", "Is it serious?", "Có nghiêm trọng không ạ?"],
      ["A", "No, it looks like a throat infection. I'll prescribe some antibiotics.", "Không, có vẻ là viêm họng. Tôi sẽ kê kháng sinh."],
      ["B", "How often should I take them?", "Tôi uống bao nhiêu lần ạ?"],
      ["A", "One tablet three times a day after meals, for five days. Drink plenty of water and get some rest.", "Mỗi lần một viên, ngày ba lần sau ăn, trong năm ngày. Uống nhiều nước và nghỉ ngơi."],
      ["B", "Thank you, doctor. Can I go back to work tomorrow?", "Cảm ơn bác sĩ. Mai tôi đi làm lại được không?"],
      ["A", "I'd suggest resting for at least two days.", "Tôi khuyên anh nghỉ ít nhất hai ngày."]
    ]
  },
  {
    id: "family", group: "daily", icon: "👨‍👩‍👧", roles: ["Bạn mới", "Bạn"],
    title: "Gia đình & sở thích", en: "Family & Hobbies",
    scenario: "Bạn trò chuyện với một người bạn mới quen về gia đình, quê hương và sở thích.",
    v: [
      ["married / single", "/ˈmær.id/ /ˈsɪŋ.ɡəl/", "đã kết hôn / độc thân", "Are you married?"],
      ["son / daughter", "/sʌn/ /ˈdɔː.tər/", "con trai / con gái", "I have a son and a daughter."],
      ["siblings", "/ˈsɪb.lɪŋz/", "anh chị em ruột", "Do you have any siblings?"],
      ["parents", "/ˈpeə.rənts/", "bố mẹ", "My parents live in the countryside."],
      ["grow up", "/ɡrəʊ ʌp/", "lớn lên", "I grew up in a small town."],
      ["hobby", "/ˈhɒb.i/", "sở thích", "My hobby is fishing."],
      ["free time", "/friː taɪm/", "thời gian rảnh", "What do you do in your free time?"],
      ["be into", "/biː ˈɪn.tuː/", "thích, mê", "I'm really into football."],
      ["go jogging", "/ɡəʊ ˈdʒɒɡ.ɪŋ/", "chạy bộ", "I go jogging every morning."],
      ["cook", "/kʊk/", "nấu ăn", "My wife is a great cook."],
      ["travel", "/ˈtræv.əl/", "du lịch", "We love to travel as a family."],
      ["spend time with", "/spend taɪm wɪð/", "dành thời gian với", "I try to spend more time with my kids."],
      ["get along with", "/ɡet əˈlɒŋ wɪð/", "hòa hợp với", "I get along well with my brother."],
      ["relax", "/rɪˈlæks/", "thư giãn", "Reading helps me relax."]
    ],
    p: [
      ["Where are you from originally?", "Quê gốc anh ở đâu?"],
      ["I have ___ children. My son is ___ years old.", "Tôi có ___ con. Con trai tôi ___ tuổi."],
      ["What do you like doing on weekends?", "Cuối tuần anh thích làm gì?"],
      ["I'm really into ___.", "Tôi rất thích ___."],
      ["How often do you ___?", "Anh có thường ___ không?"],
      ["Me too! / Really? That's interesting.", "Tôi cũng vậy! / Thật à? Thú vị đấy."]
    ],
    d: [
      ["A", "So, Nam, where are you from originally?", "Nam này, quê gốc anh ở đâu?"],
      ["B", "I'm from Thanh Hoa, but I've lived in Hanoi for ten years.", "Tôi quê Thanh Hóa, nhưng đã sống ở Hà Nội mười năm."],
      ["A", "Do you have a family?", "Anh có gia đình chưa?"],
      ["B", "Yes, I'm married with two kids. My son is eight and my daughter is five.", "Rồi, tôi đã kết hôn và có hai con. Con trai tám tuổi, con gái năm tuổi."],
      ["A", "That's lovely. Do you get to spend much time with them? Engineers work long hours.", "Thích quá. Anh có nhiều thời gian với các cháu không? Kỹ sư làm việc nhiều giờ lắm."],
      ["B", "Not as much as I'd like. When I'm on site, I only go home on weekends.", "Không nhiều như tôi muốn. Khi ở công trường, tôi chỉ về nhà cuối tuần."],
      ["A", "What do you like doing on weekends?", "Cuối tuần anh thích làm gì?"],
      ["B", "We usually go to the park, and I'm really into badminton. How about you?", "Chúng tôi thường đi công viên, và tôi rất mê cầu lông. Còn anh?"],
      ["A", "I love hiking. Maybe we can go hiking together sometime.", "Tôi thích leo núi. Hôm nào mình đi leo núi cùng nhé."],
      ["B", "That sounds great! Let me know when you're free.", "Nghe tuyệt đấy! Khi nào rảnh thì báo tôi nhé."]
    ]
  },
  {
    id: "invite", group: "daily", icon: "🎉", roles: ["Bạn bè", "Bạn"],
    title: "Mời, hẹn gặp & từ chối", en: "Invitations & Making Plans",
    scenario: "Đồng nghiệp mời bạn đi ăn tối cuối tuần; bạn hẹn giờ, đổi lịch và từ chối lịch sự.",
    v: [
      ["invite", "/ɪnˈvaɪt/", "mời", "I'd like to invite you to dinner."],
      ["be free", "/biː friː/", "rảnh", "Are you free on Saturday?"],
      ["make plans", "/meɪk plænz/", "lên kế hoạch", "Have you made any plans for the weekend?"],
      ["hang out", "/hæŋ aʊt/", "đi chơi", "Do you want to hang out tonight?"],
      ["join", "/dʒɔɪn/", "tham gia cùng", "Would you like to join us?"],
      ["pick up", "/pɪk ʌp/", "đón", "I'll pick you up at seven."],
      ["postpone", "/pəʊstˈpəʊn/", "hoãn lại", "Can we postpone it to next week?"],
      ["cancel", "/ˈkæn.səl/", "hủy", "Sorry, I have to cancel."],
      ["running late", "/ˈrʌn.ɪŋ leɪt/", "đến muộn", "Sorry, I'm running late. I'll be there in 10 minutes."],
      ["birthday party", "/ˈbɜːθ.deɪ ˈpɑː.ti/", "tiệc sinh nhật", "It's my daughter's birthday party."],
      ["housewarming", "/ˈhaʊsˌwɔː.mɪŋ/", "tân gia", "We're having a housewarming party."],
      ["another time", "/əˈnʌð.ər taɪm/", "dịp khác", "Maybe another time."],
      ["looking forward to", "/ˈlʊk.ɪŋ ˈfɔː.wəd tuː/", "mong chờ", "I'm looking forward to it."],
      ["treat", "/triːt/", "mời, bao (trả tiền)", "It's my treat tonight."]
    ],
    p: [
      ["Would you like to ___ with us?", "Anh có muốn ___ với chúng tôi không?"],
      ["I'd love to! What time?", "Rất sẵn lòng! Mấy giờ?"],
      ["I'm afraid I can't. I have ___.", "Tiếc là tôi không đi được. Tôi có ___."],
      ["How about ___ instead?", "Thay vào đó ___ thì sao?"],
      ["Let's meet at ___ at ___.", "Gặp nhau ở ___ lúc ___ nhé."],
      ["Thanks for inviting me.", "Cảm ơn đã mời tôi."]
    ],
    d: [
      ["A", "Hey Nam, are you free this Saturday evening?", "Này Nam, tối thứ Bảy này anh rảnh không?"],
      ["B", "I think so. Why?", "Chắc là rảnh. Sao vậy?"],
      ["A", "A few of us are going out for a barbecue. Would you like to join us?", "Mấy người bọn tôi đi ăn nướng. Anh muốn đi cùng không?"],
      ["B", "I'd love to! What time and where?", "Rất sẵn lòng! Mấy giờ và ở đâu?"],
      ["A", "At seven, at a place near West Lake. I can pick you up if you like.", "Bảy giờ, ở một quán gần Hồ Tây. Tôi đón anh nếu anh muốn."],
      ["B", "That would be great, thanks. Oh wait, I just remembered, I have my son's school event at six.", "Thế thì tốt quá, cảm ơn. À khoan, tôi vừa nhớ ra, sáu giờ tôi có buổi sự kiện ở trường con trai."],
      ["A", "No problem. Could you come a bit later?", "Không sao. Anh đến muộn hơn chút được không?"],
      ["B", "How about eight instead? I can get there by taxi.", "Tám giờ thì sao? Tôi có thể đi taxi đến."],
      ["A", "Perfect. I'll send you the location.", "Hoàn hảo. Tôi sẽ gửi anh địa chỉ."],
      ["B", "Thanks for inviting me. I'm looking forward to it!", "Cảm ơn đã mời tôi. Tôi rất mong chờ!"]
    ]
  },
  {
    id: "services", group: "daily", icon: "🏦", roles: ["Nhân viên", "Bạn"],
    title: "Ngân hàng, SIM & dịch vụ", en: "Bank, Phone & Services",
    scenario: "Bạn mới sang nước ngoài làm việc: mở tài khoản ngân hàng, mua SIM điện thoại.",
    v: [
      ["open an account", "/ˈəʊ.pən ən əˈkaʊnt/", "mở tài khoản", "I'd like to open a bank account."],
      ["withdraw", "/wɪðˈdrɔː/", "rút tiền", "I want to withdraw 200 dollars."],
      ["deposit", "/dɪˈpɒz.ɪt/", "gửi tiền vào", "I'd like to deposit this cheque."],
      ["transfer money", "/trænsˈfɜːr ˈmʌn.i/", "chuyển tiền", "How can I transfer money to Vietnam?"],
      ["exchange rate", "/ɪksˈtʃeɪndʒ reɪt/", "tỷ giá", "What's the exchange rate today?"],
      ["fee", "/fiː/", "phí", "Is there a fee for this?"],
      ["ATM", "/ˌeɪ.tiːˈem/", "máy rút tiền", "Is there an ATM nearby?"],
      ["proof of address", "/pruːf əv əˈdres/", "giấy tờ chứng minh địa chỉ", "Do you need proof of address?"],
      ["PIN", "/pɪn/", "mã PIN", "Please enter your PIN."],
      ["SIM card", "/ˈsɪm kɑːd/", "thẻ SIM", "I need a local SIM card."],
      ["data plan", "/ˈdeɪ.tə plæn/", "gói dữ liệu", "Which data plan do you recommend?"],
      ["top up", "/tɒp ʌp/", "nạp tiền", "Where can I top up my phone?"],
      ["prepaid / postpaid", "/ˌpriːˈpeɪd/", "trả trước / trả sau", "I'd like a prepaid plan."],
      ["form", "/fɔːm/", "mẫu đơn", "Please fill in this form."]
    ],
    p: [
      ["What documents do I need?", "Tôi cần giấy tờ gì?"],
      ["How long does it take?", "Mất bao lâu?"],
      ["Could you explain the fees?", "Anh giải thích giúp các khoản phí được không?"],
      ["My card got stuck in the ATM.", "Thẻ tôi bị kẹt trong máy ATM."],
      ["I'd like a plan with ___ GB of data.", "Tôi muốn gói có ___ GB dữ liệu."],
      ["Where do I sign?", "Tôi ký ở đâu?"]
    ],
    d: [
      ["A", "Good morning. How can I help you today?", "Chào buổi sáng. Hôm nay tôi giúp gì được anh?"],
      ["B", "Hi. I've just moved here for work, and I'd like to open a bank account.", "Chào chị. Tôi mới chuyển sang đây làm việc và muốn mở tài khoản ngân hàng."],
      ["A", "Sure. Do you have your passport, work visa and proof of address?", "Vâng. Anh có hộ chiếu, thị thực lao động và giấy tờ chứng minh địa chỉ không?"],
      ["B", "I have my passport and visa. For the address, is a rental contract okay?", "Tôi có hộ chiếu và thị thực. Về địa chỉ, hợp đồng thuê nhà có được không?"],
      ["A", "Yes, that's fine. Please fill in this form.", "Được ạ. Anh điền vào mẫu đơn này."],
      ["B", "Are there any monthly fees?", "Có phí hàng tháng không?"],
      ["A", "There's no fee if your salary is paid into the account.", "Không mất phí nếu lương được trả vào tài khoản."],
      ["B", "Great. And can I transfer money to Vietnam online?", "Tuyệt. Tôi có thể chuyển tiền về Việt Nam trực tuyến không?"],
      ["A", "Yes, through our app. The fee is 5 dollars per transfer.", "Được, qua ứng dụng của chúng tôi. Phí 5 đô mỗi lần chuyển."],
      ["B", "Perfect. How long until I get my card?", "Tuyệt. Bao lâu thì tôi nhận được thẻ?"],
      ["A", "About five working days. We'll send it to your address.", "Khoảng năm ngày làm việc. Chúng tôi sẽ gửi đến địa chỉ của anh."]
    ]
  },
  {
    id: "home", group: "daily", icon: "🏠", roles: ["Chủ nhà", "Bạn"],
    title: "Thuê nhà & sửa chữa", en: "Renting & Home Problems",
    scenario: "Bạn đi xem căn hộ để thuê, hỏi điều kiện hợp đồng và báo hỏng hóc cho chủ nhà.",
    v: [
      ["apartment / flat", "/əˈpɑːt.mənt/ /flæt/", "căn hộ", "I'm looking for a two-bedroom apartment."],
      ["landlord", "/ˈlænd.lɔːd/", "chủ nhà", "I'll call the landlord."],
      ["rent", "/rent/", "tiền thuê; thuê", "The rent is 500 dollars a month."],
      ["lease / contract", "/liːs/", "hợp đồng thuê", "The lease is for one year."],
      ["security deposit", "/sɪˈkjʊə.rə.ti dɪˈpɒz.ɪt/", "tiền đặt cọc", "The deposit is two months' rent."],
      ["utilities", "/juːˈtɪl.ə.tiz/", "điện nước, tiện ích", "Are utilities included in the rent?"],
      ["furnished", "/ˈfɜː.nɪʃt/", "có sẵn nội thất", "Is the apartment furnished?"],
      ["leak", "/liːk/", "rò rỉ", "There's a leak under the sink."],
      ["broken", "/ˈbrəʊ.kən/", "bị hỏng", "The washing machine is broken."],
      ["blocked / clogged", "/blɒkt/ /klɒɡd/", "bị tắc", "The toilet is blocked."],
      ["fix / repair", "/fɪks/ /rɪˈpeər/", "sửa", "When can someone fix it?"],
      ["plumber / electrician", "/ˈplʌm.ər/ /ɪˌlekˈtrɪʃ.ən/", "thợ nước / thợ điện", "I'll send a plumber tomorrow."],
      ["neighbor", "/ˈneɪ.bər/", "hàng xóm", "My neighbors are very friendly."],
      ["move in / move out", "/muːv ɪn/", "dọn vào / dọn đi", "When can I move in?"]
    ],
    p: [
      ["How much is the rent per month?", "Tiền thuê mỗi tháng bao nhiêu?"],
      ["What's included in the rent?", "Tiền thuê đã bao gồm những gì?"],
      ["Is there parking for a motorbike?", "Có chỗ để xe máy không?"],
      ["The ___ isn't working.", "___ không hoạt động."],
      ["Could you send someone to fix it?", "Anh cho người đến sửa được không?"],
      ["It's quite urgent.", "Việc này khá gấp."]
    ],
    d: [
      ["A", "Hello, Nam? This is the apartment. Come in and have a look.", "Chào, Nam phải không? Đây là căn hộ. Mời vào xem."],
      ["B", "Thank you. It's very bright. How much is the rent per month?", "Cảm ơn. Căn hộ sáng sủa quá. Tiền thuê mỗi tháng bao nhiêu ạ?"],
      ["A", "It's 600 dollars, and the deposit is one month's rent.", "600 đô, và tiền cọc là một tháng tiền thuê."],
      ["B", "Are utilities included?", "Đã bao gồm điện nước chưa ạ?"],
      ["A", "Water and internet are included, but you pay for electricity separately.", "Đã gồm nước và internet, nhưng tiền điện anh trả riêng."],
      ["B", "I see. Is it furnished?", "Tôi hiểu. Có sẵn nội thất không?"],
      ["A", "Yes, it comes with a bed, a sofa, a fridge and a washing machine.", "Có, có giường, sofa, tủ lạnh và máy giặt."],
      ["B", "And if something breaks, who pays for the repairs?", "Nếu có gì hỏng thì ai trả tiền sửa?"],
      ["A", "I'll cover major repairs. Just call me and I'll send a plumber or electrician.", "Tôi chịu các sửa chữa lớn. Cứ gọi tôi, tôi sẽ cho thợ nước hoặc thợ điện đến."],
      ["B", "Sounds good. I'd like to sign a one-year lease. When can I move in?", "Nghe ổn. Tôi muốn ký hợp đồng một năm. Khi nào tôi dọn vào được?"],
      ["A", "From the first of next month.", "Từ mùng một tháng sau."]
    ]
  }
];

// Gợi ý chủ đề hội thoại tự do với AI (chế độ Luyện nói 1-1)
window.AI_SCENARIOS = [
  { id: "free", label: "Trò chuyện tự do", prompt: "Have a friendly, open conversation with the learner about their work and daily life as a bridge and road engineer." },
  { id: "interview", label: "Phỏng vấn xin việc (nhà thầu quốc tế)", prompt: "You are an HR manager and a senior engineer at an international contractor interviewing the learner for a Bridge Site Engineer position. Ask one interview question at a time." },
  { id: "meeting", label: "Họp tiến độ với tư vấn giám sát", prompt: "You are David, the Resident Engineer of the supervision consultant (FIDIC contract). Run a weekly progress meeting and ask the learner (contractor's site engineer) about progress, delays and recovery plans." },
  { id: "inspection", label: "Nghiệm thu cốt thép / bê tông", prompt: "You are the consultant's inspector checking rebar and formwork before a concrete pour. Point out realistic defects (spacing, cover, lap length, cleanliness) and ask the learner how they will fix them." },
  { id: "claim", label: "Thương lượng phát sinh / gia hạn", prompt: "You are the Engineer under a FIDIC contract. The learner wants a variation and extension of time due to unforeseen soft soil. Be professional but challenge them on notices, evidence and valuation." },
  { id: "safety", label: "Kiểm tra an toàn công trường", prompt: "You are an HSE manager doing a site safety walk. Ask the learner about PPE, work at height, lifting operations and emergency procedures, and react to their answers." },
  { id: "daily", label: "Đời sống: trò chuyện hàng ngày", prompt: "You are a friendly new neighbor. Chat casually with the learner about everyday life: family, hometown, food, weekend plans, hobbies and the weather." },
  { id: "restaurant", label: "Đời sống: gọi món ở nhà hàng", prompt: "You are a waiter at a restaurant. Greet the learner, help them order food and drinks, answer questions about dishes and allergies, and handle the bill." },
  { id: "travel", label: "Đời sống: sân bay & khách sạn", prompt: "Play staff the learner meets while travelling abroad: first an immigration officer, then a hotel receptionist. Ask realistic questions and handle a small problem with the room." },
  { id: "doctor", label: "Đời sống: đi khám bác sĩ", prompt: "You are a doctor at a clinic abroad. Ask the learner about their symptoms, give simple advice and explain how to take the medicine." },
  { id: "shopping", label: "Đời sống: mua sắm & đổi trả", prompt: "You are a shop assistant in a clothing or electronics store. Help the learner choose a product, discuss price and discounts, and handle a return or exchange." },
  { id: "design", label: "Thảo luận thiết kế cầu/đường", prompt: "You are a design engineer discussing bridge and road design (alignment, profile, pavement, bridge type, foundations) with the learner. Ask for their opinion and reasons." }
];
