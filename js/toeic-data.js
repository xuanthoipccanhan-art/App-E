// Ngân hàng câu hỏi luyện TOEIC (tự soạn theo format đề thi, không phải đề thi thật của ETS).
// a = chỉ số đáp án đúng (0 = A). ex = giải thích tiếng Việt.
window.TOEIC = {
  // ================= LISTENING =================
  tips: {
    L1: "Part 1 – Mô tả tranh (6 câu). Nghe 4 câu mô tả, chọn câu đúng nhất với bức tranh. Bẫy thường gặp: từ phát âm giống nhau, đúng vật nhưng sai hành động, thì bị động hoàn thành (has been placed) khi không có người.",
    L2: "Part 2 – Hỏi đáp (25 câu). Nghe 1 câu hỏi và 3 câu trả lời. Chú ý từ để hỏi (Who/When/Where/Why/How). Đáp án đúng thường là câu trả lời gián tiếp; câu lặp lại từ trong câu hỏi thường là bẫy.",
    L3: "Part 3 – Đoạn hội thoại (39 câu). Đọc trước câu hỏi trước khi nghe. Câu hỏi thường theo thứ tự thông tin trong bài: chủ đề → chi tiết → việc sẽ làm tiếp theo.",
    L4: "Part 4 – Bài nói ngắn (30 câu). Thông báo, tin nhắn thoại, quảng cáo, hướng dẫn. Xác định ai nói, nói với ai, mục đích, và yêu cầu người nghe làm gì.",
    R5: "Part 5 – Điền câu chưa hoàn chỉnh (30 câu). Nhìn 4 đáp án trước: nếu cùng gốc từ → câu hỏi từ loại; nếu khác nghĩa → câu hỏi từ vựng. Mỗi câu chỉ nên mất khoảng 20 giây.",
    R6: "Part 6 – Điền đoạn văn (16 câu). Giống Part 5 nhưng phải đọc ngữ cảnh cả đoạn; có câu chọn cả một câu văn phù hợp để chèn vào.",
    R7: "Part 7 – Đọc hiểu (54 câu). Email, thông báo, quảng cáo, bài báo, đoạn chat. Đọc câu hỏi trước, rồi tìm từ khóa trong bài. Cẩn thận với câu hỏi NOT TRUE và câu suy luận (suggested/implied).",
    S: "TOEIC Speaking – 11 câu, khoảng 20 phút. Chấm theo thang 0–200. Nói rõ, đủ ý, đúng thời gian; không cần hoàn hảo nhưng phải mạch lạc.",
    W: "TOEIC Writing – 8 câu, khoảng 60 phút. Chấm theo thang 0–200. Viết câu đúng ngữ pháp, trả lời đủ các yêu cầu của đề, bài luận nên có mở bài, 2 lý do kèm ví dụ, và kết luận."
  },

  L1: [
    { emoji: "👷‍♂️🦺🪜🧱", scene: "Một công nhân đội mũ bảo hộ đang trèo lên thang dựa vào bức tường gạch.", opts: ["The man is painting a fence.", "The man is climbing a ladder.", "The ladder is lying on the ground.", "The man is taking off his helmet."], a: 1 },
    { emoji: "🪑🪑🪑📽️🏢", scene: "Một phòng họp trống, các ghế được xếp ngay ngắn quanh bàn, có máy chiếu trên trần.", opts: ["People are attending a meeting.", "A projector is being installed.", "Chairs have been arranged around a table.", "Some documents are scattered on the floor."], a: 2 },
    { emoji: "👩‍💼📄🖨️", scene: "Một người phụ nữ đang lấy giấy từ máy photocopy.", opts: ["She's removing paper from a copier.", "She's repairing a printer.", "She's typing on a keyboard.", "She's filing some folders in a cabinet."], a: 0 },
    { emoji: "🚧🚚🛣️", scene: "Xe tải đỗ bên đường, có các cọc tiêu giao thông đặt dọc làn đường đang sửa chữa.", opts: ["A truck is being loaded with boxes.", "Workers are crossing the road.", "The road is crowded with cars.", "Traffic cones have been placed along a lane."], a: 3 },
    { emoji: "👨‍🔧👨‍🔧📐🗺️", scene: "Hai người đàn ông đang cùng xem một bản vẽ trải trên bàn ngoài công trường.", opts: ["They're folding a map.", "They're looking at a drawing together.", "They're shaking hands.", "One of the men is writing on a whiteboard."], a: 1 },
    { emoji: "🌉🚤🌊", scene: "Một chiếc thuyền đang đi qua dưới gầm một cây cầu.", opts: ["A bridge is being built over a river.", "People are swimming near the shore.", "A boat is passing under a bridge.", "A boat is tied to a dock."], a: 2 }
  ],

  L2: [
    { q: "When will the concrete be delivered?", opts: ["To the north site.", "Early tomorrow morning.", "Yes, it was delivered."], a: 1 },
    { q: "Who is in charge of the safety inspection?", opts: ["Ms. Park from the HSE team.", "It was inspected last week.", "In the main office."], a: 0 },
    { q: "Why was the meeting postponed?", opts: ["At three o'clock.", "The room on the second floor.", "The client couldn't attend."], a: 2 },
    { q: "Would you like me to send you the report?", opts: ["Yes, please email it to me.", "He reported it yesterday.", "A monthly report."], a: 0 },
    { q: "Where can I find the updated drawings?", opts: ["They were drawn by hand.", "They're on the shared drive.", "About two weeks ago."], a: 1 },
    { q: "How long will the road be closed?", opts: ["It's about 3 kilometers long.", "Close the door, please.", "Until the end of the month."], a: 2 },
    { q: "Didn't you already submit the payment request?", opts: ["I'm still waiting for the final figures.", "Payment by credit card.", "Yes, it's a good request."], a: 0 },
    { q: "Should we use the crane or the excavator first?", opts: ["Yes, we should.", "Let's start with the crane.", "It's a very heavy crane."], a: 1 },
    { q: "The site manager is visiting today, isn't he?", opts: ["The site is quite large.", "We managed it well.", "Actually, his visit was moved to Friday."], a: 2 },
    { q: "Why don't we review the budget after lunch?", opts: ["Sure, that works for me.", "Because it was too expensive.", "I had a sandwich."], a: 0 },
    { q: "How many workers do we need for the night shift?", opts: ["At about 10 p.m.", "At least twelve.", "Yes, they worked hard."], a: 1 },
    { q: "Has the consultant approved the method statement?", opts: ["A consulting company.", "The method is quite simple.", "Not yet. He has a few comments."], a: 2 }
  ],

  L3: [
    {
      title: "Hội thoại 1 – Giao hàng chậm",
      lines: [
        ["W", "Hi Tom, this is Linda from the site office. The steel bars we ordered were supposed to arrive this morning, but nothing has come yet."],
        ["M", "I'm sorry about that, Linda. Our truck had a mechanical problem on the highway. We're sending another truck now."],
        ["W", "When can we expect it? We're planning to start the column work this afternoon."],
        ["M", "It should be there by two o'clock. And to make up for the delay, we'll waive the delivery fee for this order."]
      ],
      qs: [
        { q: "What is the problem?", opts: ["An order was incorrect.", "A delivery has not arrived.", "A meeting was canceled.", "Some workers are absent."], a: 1 },
        { q: "What caused the problem?", opts: ["Bad weather.", "A wrong address.", "A vehicle breakdown.", "A shortage of materials."], a: 2 },
        { q: "What does the man offer to do?", opts: ["Cancel a fee.", "Give a refund.", "Visit the site.", "Send extra steel bars."], a: 0 }
      ]
    },
    {
      title: "Hội thoại 2 – Đặt phòng họp",
      lines: [
        ["M", "Excuse me, I'd like to book the large conference room for next Tuesday afternoon. We have a design review with the client."],
        ["W", "Let me check... I'm afraid it's already reserved on Tuesday. But it's available on Wednesday morning."],
        ["M", "Hmm, I'll need to check with the client first. Can you hold it for me until the end of the day?"],
        ["W", "Sure. Just call me back before five, and I'll confirm the booking."]
      ],
      qs: [
        { q: "Why does the man want to book a room?", opts: ["To interview applicants.", "To hold a training session.", "To meet with a client.", "To celebrate an event."], a: 2 },
        { q: "What does the woman say about Tuesday?", opts: ["The room is not available.", "The office will be closed.", "The client is busy.", "The price is higher."], a: 0 },
        { q: "What will the man probably do next?", opts: ["Cancel the meeting.", "Contact the client.", "Visit another office.", "Send an invoice."], a: 1 }
      ]
    },
    {
      title: "Hội thoại 3 – Thay đổi thiết kế",
      lines: [
        ["W", "Kevin, did you see the email from the design consultant? They want to change the bearing type on the main span."],
        ["M", "Yes, I read it this morning. They're replacing elastomeric bearings with pot bearings. That will affect our schedule."],
        ["W", "Right. Pot bearings take about six weeks to manufacture. Should we ask for an extension of time?"],
        ["M", "I think so. Let's prepare a letter today and attach the supplier's quotation as evidence."]
      ],
      qs: [
        { q: "What are the speakers discussing?", opts: ["A new employee.", "A design change.", "A safety accident.", "A delayed payment."], a: 1 },
        { q: "According to the woman, what will take six weeks?", opts: ["Approving a design.", "Hiring a supplier.", "Manufacturing some parts.", "Repairing a bridge."], a: 2 },
        { q: "What will the speakers do today?", opts: ["Write a letter.", "Visit a factory.", "Call a consultant.", "Order new equipment."], a: 0 }
      ]
    },
    {
      title: "Hội thoại 4 – Chuyến công tác",
      lines: [
        ["M", "Anna, are you ready for the trip to Da Nang next week?"],
        ["W", "Almost. I've booked the flight, but I haven't found a hotel near the project site yet."],
        ["M", "Our company has a contract with the Riverside Hotel. It's only ten minutes from the site, and the rate is discounted."],
        ["W", "That's perfect. Could you forward me the booking details?"]
      ],
      qs: [
        { q: "What is the woman preparing for?", opts: ["A business trip.", "A job interview.", "A company party.", "A product launch."], a: 0 },
        { q: "What has the woman not done yet?", opts: ["Booked a flight.", "Found accommodation.", "Visited the site.", "Talked to her manager."], a: 1 },
        { q: "What does the man say about the Riverside Hotel?", opts: ["It is fully booked.", "It has a conference room.", "It offers a special rate.", "It is next to the airport."], a: 2 }
      ]
    }
  ],

  L4: [
    {
      title: "Bài nói 1 – Thông báo an toàn",
      text: "Good morning, everyone. Before we start today's work, I'd like to remind you about a few safety rules. First, the area under the bridge deck is now a restricted zone, because we'll be lifting girders all day. Only workers with a red pass may enter. Second, please make sure your harness is attached at all times when working above two meters. Finally, the canteen will open thirty minutes later than usual today, at twelve thirty, due to a delivery. Thank you, and work safely.",
      qs: [
        { q: "Who most likely is the speaker?", opts: ["A hotel manager.", "A site supervisor.", "A tour guide.", "A news reporter."], a: 1 },
        { q: "Why is an area restricted?", opts: ["It is being cleaned.", "It is flooded.", "Lifting work will take place.", "An inspection is scheduled."], a: 2 },
        { q: "What does the speaker say about the canteen?", opts: ["It will open later.", "It has a new menu.", "It will be closed.", "It has moved."], a: 0 }
      ]
    },
    {
      title: "Bài nói 2 – Tin nhắn thoại",
      text: "Hi Mr. Lee, this is Sarah Chen from Delta Engineering. I'm calling about the soil investigation report you requested. We've finished the field tests, but the laboratory results for two of the boreholes will take a few more days. We expect to send you the complete report by next Thursday. In the meantime, I can email you the preliminary results today, so you can start your foundation design. Please call me back at 555-0198 if that works for you.",
      qs: [
        { q: "What is the purpose of the call?", opts: ["To request a payment.", "To give an update on a report.", "To schedule a site visit.", "To introduce a new service."], a: 1 },
        { q: "What is causing the delay?", opts: ["Some lab results are not ready.", "A staff member is sick.", "The equipment is broken.", "The weather has been bad."], a: 0 },
        { q: "What does the speaker offer to do?", opts: ["Reduce a price.", "Visit the client's office.", "Send early results.", "Redo some tests."], a: 2 }
      ]
    },
    {
      title: "Bài nói 3 – Thông báo giao thông",
      text: "This is a traffic update from City Radio. Drivers heading downtown should expect delays on Harbor Road this weekend. One lane will be closed from Friday night until Monday morning while crews repair the expansion joints on the Harbor Bridge. Drivers are advised to use Park Avenue instead. Public buses will continue to run, but some stops will be moved. For a full list of changes, please visit the city transport website.",
      qs: [
        { q: "What is the announcement mainly about?", opts: ["A new bus route.", "A road closure.", "A weather warning.", "A city festival."], a: 1 },
        { q: "What will crews do on the bridge?", opts: ["Paint the railings.", "Install new lights.", "Repair some joints.", "Widen the lanes."], a: 2 },
        { q: "What are listeners encouraged to do?", opts: ["Take a different road.", "Stay at home.", "Buy bus tickets online.", "Call the radio station."], a: 0 }
      ]
    }
  ],

  // ================= READING =================
  R5: [
    { q: "All visitors must wear a hard hat ___ entering the construction site.", opts: ["when", "during", "while", "before"], a: 3, ex: "“before entering” = trước khi vào. “during” phải đi với danh từ; “when/while entering” về nghĩa không hợp bằng vì yêu cầu là đội mũ trước khi vào." },
    { q: "The project manager asked us to submit the report ___ Friday.", opts: ["until", "by", "in", "at"], a: 1, ex: "“by + thời điểm” = trước hạn (deadline). “until” = kéo dài cho đến khi, không dùng cho hạn nộp." },
    { q: "Ms. Tran is ___ for coordinating with the subcontractors.", opts: ["responsible", "responsibility", "responsibly", "respond"], a: 0, ex: "Sau “be” cần tính từ: be responsible for = chịu trách nhiệm về." },
    { q: "The new bridge was completed ___ ahead of schedule.", opts: ["significant", "significance", "significantly", "signify"], a: 2, ex: "Bổ nghĩa cho cụm “ahead of schedule” cần trạng từ: significantly." },
    { q: "Neither the engineer ___ the inspector noticed the crack.", opts: ["or", "and", "but", "nor"], a: 3, ex: "Cấu trúc cố định: neither … nor." },
    { q: "If the weather ___ good tomorrow, we will pour the concrete.", opts: ["is", "will be", "was", "were"], a: 0, ex: "Câu điều kiện loại 1: If + hiện tại đơn, will + V." },
    { q: "The contractor ___ the foundation work by the end of last month.", opts: ["has finished", "had finished", "finishes", "will finish"], a: 1, ex: "“by the end of last month” – hành động hoàn tất trước một mốc trong quá khứ → quá khứ hoàn thành." },
    { q: "Please read the safety instructions ___ before operating the machine.", opts: ["care", "careful", "carefully", "caring"], a: 2, ex: "Bổ nghĩa cho động từ “read” cần trạng từ: carefully." },
    { q: "The meeting has been ___ until next Monday because the client is unavailable.", opts: ["postponed", "canceled", "advanced", "attended"], a: 0, ex: "postpone until = hoãn đến. Có “until next Monday” nên chọn postponed." },
    { q: "Applicants ___ have at least five years of experience in road design.", opts: ["could", "should", "would", "might"], a: 1, ex: "Yêu cầu tuyển dụng dùng “should/must”. Các đáp án khác mang nghĩa khả năng." },
    { q: "The report, ___ was prepared by the design team, is very detailed.", opts: ["who", "what", "which", "whose"], a: 2, ex: "Mệnh đề quan hệ không xác định (có dấu phẩy), thay cho vật → which." },
    { q: "We are looking forward to ___ with your company on future projects.", opts: ["work", "working", "worked", "be worked"], a: 1, ex: "look forward to + V-ing." },
    { q: "The supplier offered a 10 percent ___ for orders over 500 tons.", opts: ["discount", "account", "amount", "count"], a: 0, ex: "discount = giảm giá." },
    { q: "Construction costs have increased ___ the rising price of steel.", opts: ["because", "due to", "although", "so that"], a: 1, ex: "Phía sau là cụm danh từ (the rising price) → due to. “because” cần cả một mệnh đề." },
    { q: "This is the ___ bridge ever built in the province.", opts: ["long", "longer", "longest", "most long"], a: 2, ex: "So sánh nhất với tính từ ngắn: the longest." },
    { q: "The inspection team will arrive ___ 9:00 a.m. on Tuesday.", opts: ["on", "in", "at", "by"], a: 2, ex: "Giờ cụ thể dùng at." },
    { q: "All invoices must be ___ by the finance department before payment.", opts: ["approve", "approving", "approval", "approved"], a: 3, ex: "Bị động: must be + V3 → approved." },
    { q: "Mr. Kim gave a very ___ presentation on the new tunnel project.", opts: ["inform", "informative", "information", "informatively"], a: 1, ex: "Trước danh từ “presentation” cần tính từ: informative." },
    { q: "___ the heavy rain, the team completed the work on time.", opts: ["Despite", "Although", "Because", "However"], a: 0, ex: "Despite + cụm danh từ = mặc dù. “Although” phải đi với mệnh đề." },
    { q: "The number of accidents on site ___ dropped since the new rules were introduced.", opts: ["have", "has", "are", "were"], a: 1, ex: "“The number of + N số nhiều” → động từ số ít; có “since” → hiện tại hoàn thành: has dropped." }
  ],

  R6: [
    {
      title: "Email – Thông báo bảo trì",
      text: "To: All Staff\nSubject: Elevator Maintenance\n\nPlease be advised that the elevators in Building B will be [1] for maintenance this Saturday from 8 a.m. to 4 p.m. During this time, staff are asked to use the stairs. [2]. We apologize for any [3] this may cause. If you have any questions, please [4] the facilities office at extension 204.",
      qs: [
        { opts: ["closed", "closing", "close", "closure"], a: 0, ex: "will be + V3 (bị động): will be closed." },
        { opts: ["The cafeteria serves lunch daily.", "Employees who need assistance may contact security.", "The elevators were installed in 2010.", "Our company has three buildings."], a: 1, ex: "Câu chèn phải liên quan việc dùng cầu thang khi thang máy dừng: người cần hỗ trợ liên hệ bảo vệ." },
        { opts: ["convenient", "inconvenience", "convenience", "inconvenient"], a: 1, ex: "apologize for any + danh từ, nghĩa tiêu cực: inconvenience (sự bất tiện)." },
        { opts: ["contact", "contacting", "contacted", "to contact"], a: 0, ex: "Câu mệnh lệnh: please + V nguyên mẫu." }
      ]
    },
    {
      title: "Thông báo – Mở cầu mới",
      text: "The City Department of Transport is pleased to announce that the new Riverside Bridge will open to traffic on June 1. The bridge [1] travel time between the east and west districts by about 20 minutes. [2] the opening day, a short ceremony will be held at 9 a.m. Residents are welcome to attend. [3]. For more information, please visit our website. We thank the public for its [4] during the construction period.",
      qs: [
        { opts: ["reduced", "will reduce", "has reduced", "reducing"], a: 1, ex: "Cầu chưa thông xe → sự việc tương lai: will reduce." },
        { opts: ["In", "At", "On", "By"], a: 2, ex: "on + ngày cụ thể (the opening day)." },
        { opts: ["The bridge was designed in 2019.", "Parking will be available near the east entrance.", "Traffic jams are common in big cities.", "The mayor lives in the west district."], a: 1, ex: "Câu chèn hợp ngữ cảnh mời người dân đến dự lễ: thông tin về chỗ đỗ xe." },
        { opts: ["patient", "patiently", "patience", "patients"], a: 2, ex: "Sau tính từ sở hữu “its” cần danh từ: patience (sự kiên nhẫn)." }
      ]
    }
  ],

  R7: [
    {
      title: "Quảng cáo tuyển dụng",
      text: "BRIDGE SITE ENGINEER – Full Time\n\nGlobal Infra Co. is seeking an experienced Site Engineer for a new cable-stayed bridge project in Can Tho.\n\nResponsibilities:\n• Supervise daily construction activities\n• Prepare method statements and daily reports\n• Coordinate with the client's consultants\n\nRequirements:\n• Bachelor's degree in Civil Engineering\n• At least 5 years of experience in bridge construction\n• Good English communication skills (TOEIC 650 or above preferred)\n\nWe offer a competitive salary, housing allowance and annual leave of 15 days.\nSend your CV to hr@globalinfra.example by March 31. Only shortlisted candidates will be contacted.",
      qs: [
        { q: "What is the purpose of the advertisement?", opts: ["To announce a new bridge.", "To recruit an engineer.", "To promote a training course.", "To introduce a consulting service."], a: 1 },
        { q: "What is NOT mentioned as a responsibility?", opts: ["Writing reports.", "Working with consultants.", "Designing the bridge.", "Supervising site work."], a: 2 },
        { q: "What is suggested about English ability?", opts: ["It is not required.", "A TOEIC score is helpful.", "Applicants must take a test.", "Training will be provided."], a: 1 },
        { q: "What will happen after March 31?", opts: ["Selected applicants will be contacted.", "The project will start.", "The salary will increase.", "The office will move."], a: 0 }
      ]
    },
    {
      title: "Email – Phàn nàn chất lượng",
      text: "From: Minh Nguyen <minh.nguyen@thanglong.example>\nTo: Customer Service <service@rapidmix.example>\nDate: May 12\nSubject: Concrete delivery on May 10\n\nDear Sir or Madam,\n\nI am writing about the concrete delivered to our site at Km 12 on May 10 (Order No. RM-5521). Three of the eight trucks arrived more than one hour late, and the slump of the concrete in those trucks was well below the required value. As a result, we had to reject them, and the pour was delayed until the next day.\n\nThis delay cost us additional labor and equipment charges. I would appreciate it if you could investigate the matter and contact me by Friday to discuss compensation.\n\nSincerely,\nMinh Nguyen\nSite Manager, Thang Long Construction",
      qs: [
        { q: "Why did Mr. Nguyen write the email?", opts: ["To place a new order.", "To complain about a delivery.", "To request a price list.", "To cancel a contract."], a: 1 },
        { q: "How many trucks were rejected?", opts: ["One", "Three", "Five", "Eight"], a: 1 },
        { q: "What happened to the concrete pour?", opts: ["It was finished early.", "It was canceled permanently.", "It was moved to another site.", "It was postponed."], a: 3 },
        { q: "What does Mr. Nguyen ask the company to do?", opts: ["Contact him by Friday.", "Send more trucks.", "Reduce future prices.", "Visit the site on May 10."], a: 0 }
      ]
    },
    {
      title: "Tin nhắn trao đổi (chat)",
      text: "Lan Pham (9:02 A.M.): Hi Daniel, are we still meeting the consultant at 2 today?\nDaniel Ross (9:05 A.M.): Yes, but it's been moved to the site office instead of the head office.\nLan Pham (9:06 A.M.): OK. Should I bring the test results for the piles?\nDaniel Ross (9:08 A.M.): Definitely. Also print two copies of the updated schedule.\nLan Pham (9:09 A.M.): Will do. I'll leave here at 1 to avoid traffic.\nDaniel Ross (9:10 A.M.): Great. See you there.",
      qs: [
        { q: "What has changed about the meeting?", opts: ["The time.", "The date.", "The location.", "The participants."], a: 2 },
        { q: "At 9:08 A.M., what does Mr. Ross mean when he writes “Definitely”?", opts: ["He is sure the meeting will happen.", "He wants Ms. Pham to bring the results.", "He has already printed the schedule.", "He agrees to change the time."], a: 1 },
        { q: "What will Ms. Pham most likely do at 1 P.M.?", opts: ["Leave for the site office.", "Call the consultant.", "Have lunch with Mr. Ross.", "Test the piles."], a: 0 }
      ]
    }
  ],

  // ================= SPEAKING =================
  S: {
    readAloud: [
      { text: "Welcome to the Riverside Bridge visitor center. Today's tour will last about forty-five minutes. We will start with a short video, then walk along the pedestrian path, and finish at the observation deck. Please stay with your guide, wear your safety vest, and keep your camera strap around your neck at all times.", prep: 45, time: 45 },
      { text: "Attention, all passengers. Due to road maintenance on Highway 5, buses to the airport will depart from Gate 3 instead of Gate 1 this week. Travel time may increase by fifteen minutes. We recommend that you arrive early, check the display screens, and ask our staff if you need any assistance.", prep: 45, time: 45 },
      { text: "Thank you for calling Delta Engineering. Our office hours are Monday through Friday, from eight a.m. to five p.m. If you would like to request a quotation, press one. For project inquiries, press two. To speak with a member of our technical team, please stay on the line.", prep: 45, time: 45 }
    ],
    picture: [
      { emoji: "👷‍♂️👷‍♀️🏗️🌤️", scene: "Một công trường xây dựng ngoài trời, nắng đẹp. Ở giữa là một cần cẩu đang nâng dầm thép. Bên trái, hai công nhân mặc áo phản quang và đội mũ bảo hộ đang nhìn lên. Phía sau có vài xe tải và một tòa nhà đang xây dở.", prep: 45, time: 30,
        sample: "This picture was taken at a construction site on a sunny day. In the middle of the picture, a large crane is lifting a steel beam. On the left, two workers wearing safety vests and hard hats are looking up at the crane. In the background, I can see some trucks and a building under construction. It seems like the work is going smoothly." },
      { emoji: "👩‍💼👨‍💼💻☕", scene: "Một văn phòng hiện đại. Một người phụ nữ ngồi trước máy tính xách tay đang chỉ vào màn hình, một người đàn ông đứng cạnh cầm cốc cà phê. Trên bàn có giấy tờ và bản vẽ. Cửa sổ lớn phía sau.", prep: 45, time: 30,
        sample: "This is a picture of a modern office. In the foreground, a woman is sitting in front of a laptop and pointing at the screen. Next to her, a man is standing and holding a cup of coffee. There are some papers and drawings on the desk. Behind them, there is a large window. They are probably discussing a project." }
    ],
    respond: [
      { context: "Hãy tưởng tượng một công ty nghiên cứu thị trường đang gọi điện cho bạn. Bạn đồng ý trả lời một cuộc khảo sát về việc đi lại.",
        qs: [
          { q: "How do you usually get to work, and how long does it take?", prep: 3, time: 15, sample: "I usually ride my motorbike to work. It takes about twenty-five minutes, depending on the traffic." },
          { q: "Have you ever used public transportation in your city? Why or why not?", prep: 3, time: 15, sample: "Yes, I sometimes take the bus when it rains. It's cheap and I don't have to worry about parking." },
          { q: "What would encourage more people in your city to use public transportation?", prep: 3, time: 30, sample: "I think more people would use public transportation if buses were more frequent and on time. Also, the city should build more metro lines and safe parking areas near stations. If the service is fast and comfortable, people will leave their motorbikes at home." }
        ] },
      { context: "Hãy tưởng tượng bạn đang nói chuyện điện thoại với một người bạn về việc học kỹ năng mới.",
        qs: [
          { q: "When was the last time you took a course, and what was it about?", prep: 3, time: 15, sample: "The last time I took a course was last year. It was an online course about bridge design software." },
          { q: "Do you prefer studying online or in a classroom?", prep: 3, time: 15, sample: "I prefer studying online because I work on site and my schedule is not fixed." },
          { q: "What skill would you like to learn in the future, and why?", prep: 3, time: 30, sample: "I would like to improve my English speaking skills, because my company works with many foreign consultants. If I can communicate better, I will have more chances to join international projects and get promoted." }
        ] }
    ],
    info: [
      { title: "Lịch hội thảo kỹ thuật", table: "Bridge Engineering Workshop\nDate: Thursday, October 15 · Venue: Hanoi Convention Center, Room B\nRegistration fee: $50 (includes lunch)\n\n9:00 – 9:30   Registration\n9:30 – 10:30  Keynote: Cable-Stayed Bridges in Vietnam (Dr. Hoang Linh)\n10:45 – 12:00 Workshop: Bored Pile Quality Control (Mr. Tan Wei)\n12:00 – 1:00  Lunch\n1:00 – 2:30   Workshop: Bridge Inspection with Drones (Ms. Sara Jones)\n2:30 – 3:00   Closing remarks",
        intro: "Hi, I'm interested in the workshop, but I have a few questions.",
        qs: [
          { q: "Where is the workshop being held, and what time does it start?", prep: 3, time: 15, sample: "The workshop will be held at the Hanoi Convention Center, in Room B. Registration starts at nine a.m." },
          { q: "I heard I need to pay extra for lunch. Is that right?", prep: 3, time: 15, sample: "Actually, no. The registration fee is fifty dollars, and it already includes lunch." },
          { q: "I'm interested in technical sessions. Could you tell me about the sessions in the afternoon?", prep: 3, time: 30, sample: "Sure. After lunch, from one to two thirty, there is a workshop on bridge inspection with drones, led by Ms. Sara Jones. Then, from two thirty to three, there will be the closing remarks." }
        ] }
    ],
    opinion: [
      { q: "Some people think it is better to work for a large international company, while others prefer a small local company. Which do you prefer and why? Give specific reasons and examples.", prep: 45, time: 60,
        sample: "In my opinion, working for a large international company is better, especially for young engineers. First, international companies usually manage big projects, so I can learn modern technology and international standards such as FIDIC contracts. For example, my friend joined a Japanese contractor and learned a lot about quality control. Second, these companies offer better salaries and training programs, including English courses. Of course, small companies can be more flexible, but for career development, I would choose a large international company." },
      { q: "Do you agree or disagree with the following statement? \"Employees should be allowed to work from home at least two days a week.\" Give reasons and examples.", prep: 45, time: 60,
        sample: "I partly agree with this statement. For office jobs, working from home can save commuting time and help people focus. For example, my colleagues in the design department can finish drawings at home without interruptions. However, for site engineers like me, it's not practical, because we need to supervise the work and check quality every day. So I think companies should decide based on the type of job." },
      { q: "What is the most important quality of a good manager? Give reasons and examples.", prep: 45, time: 60,
        sample: "I believe the most important quality of a good manager is good communication. First, a manager must explain goals and instructions clearly so the team knows what to do. For instance, on my project, our manager holds a short meeting every morning, so mistakes are reduced. Second, a good communicator listens to employees' problems and solves them quickly. That makes the team more motivated. Therefore, communication is the key quality." }
    ]
  },

  // ================= WRITING =================
  W: {
    sentence: [
      { emoji: "👷‍♂️📋🏗️", scene: "Một kỹ sư cầm bảng kẹp hồ sơ đứng trước công trình đang xây.", words: ["engineer", "check"], sample: "The engineer is checking the work on the construction site." },
      { emoji: "🚚📦🏭", scene: "Một chiếc xe tải đang được chất hàng trước nhà kho.", words: ["truck", "while"], sample: "Boxes are being loaded onto the truck while a worker watches." },
      { emoji: "👩‍💼👨‍💼🤝", scene: "Hai người mặc vest bắt tay nhau trong phòng họp.", words: ["shake", "after"], sample: "The two people are shaking hands after the meeting." },
      { emoji: "🌧️☂️🚶", scene: "Mọi người cầm ô đi bộ trên phố khi trời mưa.", words: ["umbrella", "because"], sample: "People are carrying umbrellas because it is raining." },
      { emoji: "👩‍🏫📊👥", scene: "Một người phụ nữ đứng thuyết trình trước biểu đồ, vài người ngồi nghe.", words: ["presentation", "give"], sample: "A woman is giving a presentation to her colleagues." }
    ],
    email: [
      { time: 10, email: "From: Jessica Brown, HR Department\nTo: All Project Staff\nSubject: English training program\n\nOur company will offer an English training program for project staff next month. To help us plan, please reply and tell us: (1) which skills you most want to improve, (2) what days and times are convenient for you, and (3) whether you prefer online or in-person classes.\n\nThank you,\nJessica",
        task: "Trả lời email. Trong email của bạn, trả lời cả 3 câu hỏi của Jessica.",
        sample: "Dear Jessica,\n\nThank you for organizing the English training program. I am very interested in joining.\n\nFirst, I would most like to improve my speaking and listening skills, because I often attend meetings with foreign consultants. Second, weekday evenings after 6 p.m. or Saturday mornings would be convenient for me, since I work on site during the day. Finally, I would prefer online classes, as our site is far from the head office.\n\nPlease let me know if you need any further information.\n\nBest regards,\nNam" },
      { time: 10, email: "From: Mark Davis, Rapid Equipment Rental\nTo: Site Manager\nSubject: Crane rental request\n\nThank you for your inquiry about renting a crawler crane. Before I can send you a quotation, could you please give me two pieces of information about your needs and ask me one question about our services?\n\nBest regards,\nMark Davis",
        task: "Trả lời email. Cung cấp HAI thông tin về nhu cầu của bạn và hỏi MỘT câu về dịch vụ.",
        sample: "Dear Mr. Davis,\n\nThank you for your quick reply. Here is the information you requested.\n\nWe need a 250-tonne crawler crane to lift precast girders for a bridge project in Long An province. We would like to rent it for about two months, starting from June 1.\n\nI also have a question: does the rental price include an operator and transportation to the site?\n\nI look forward to receiving your quotation.\n\nKind regards,\nNam Tran\nSite Manager" }
    ],
    essay: [
      { time: 30, q: "Some people believe that the best way to learn a job is by working, while others think formal education is more important. Which view do you agree with? Give reasons or examples to support your opinion.",
        sample: "People have different opinions about how to learn a job. In my view, practical work experience is more valuable than formal education, although both are necessary.\n\nFirst, many skills can only be learned on the job. For example, when I started as a site engineer, I knew the theory of concrete, but I did not know how to organize a night pour, deal with suppliers or solve problems when a pump broke down. I learned these things from experienced colleagues.\n\nSecond, working helps people develop soft skills such as communication and teamwork. At university, students mainly work alone and focus on exams. On a construction site, however, engineers must coordinate with workers, consultants and clients every day.\n\nOf course, formal education gives a strong foundation in theory, which is important for safety and quality. However, without practical experience, this knowledge is not enough.\n\nIn conclusion, I believe that working is the best way to learn a job, and education should support it." },
      { time: 30, q: "Do you agree or disagree with the following statement? \"Cities should spend more money on public transportation than on building new roads.\" Use specific reasons and examples to support your answer.",
        sample: "As a road engineer, I agree that cities should invest more in public transportation than in new roads.\n\nThe first reason is that new roads often attract more vehicles, so traffic jams return after a few years. For instance, several ring roads in big cities became crowded soon after they opened. Public transportation, on the other hand, can move many more people using less space.\n\nThe second reason is the environment. Buses and metro trains produce less pollution per passenger than private cars and motorbikes. This would improve air quality, which is a serious problem in many Asian cities.\n\nHowever, roads are still necessary, especially in rural areas and for transporting goods. Therefore, cities should not stop building roads completely, but they should give priority to public transport.\n\nIn conclusion, spending more on public transportation is a more sustainable solution for growing cities." }
    ]
  }
};
