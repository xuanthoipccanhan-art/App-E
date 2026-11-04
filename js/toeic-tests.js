// Các đề luyện TOEIC bổ sung (Đề 2–4). Câu hỏi tự soạn theo cấu trúc và dạng câu hỏi thường gặp
// trong đề thi TOEIC (không sao chép đề thi thật hay sách có bản quyền).
// Cấu trúc mỗi đề giống window.TOEIC: L1, L2, L3, L4, R5, R6, R7. a = chỉ số đáp án đúng (0 = A).
// L3/L4 có thể có "graphic" (bảng/biểu đồ dạng chữ) cho câu hỏi "Look at the graphic".
window.TOEIC_TESTS = [
  // =====================================================================
  {
    id: "t2", title: "Đề 2 – Văn phòng & dự án",
    L1: [
      { emoji: "👷‍♀️🔧🚿", scene: "Một người thợ đang quỳ xuống sửa đường ống dưới bồn rửa.", opts: ["She's washing some dishes.", "She's kneeling to fix a pipe.", "She's turning on a faucet.", "She's carrying a toolbox upstairs."], a: 1 },
      { emoji: "📚📚🪜🏛️", scene: "Các kệ sách cao chất đầy sách trong thư viện, một chiếc thang để cạnh kệ, không có người.", opts: ["A man is reading at a table.", "Books are being put into boxes.", "A ladder has been placed next to some shelves.", "The shelves are empty."], a: 2 },
      { emoji: "🚗🚗🅿️🌳", scene: "Một bãi đỗ xe có nhiều ô tô đỗ thành hàng dưới bóng cây.", opts: ["Cars are parked in a row.", "A car is being washed.", "Trees are being cut down.", "Drivers are waiting at a traffic light."], a: 0 }
    ],
    L2: [
      { q: "Where should I put these safety helmets?", opts: ["Yes, they're very safe.", "In the storage room, please.", "I bought them yesterday."], a: 1 },
      { q: "When is the deadline for the tender submission?", opts: ["At the client's office.", "About ten pages.", "It's next Monday at noon."], a: 2 },
      { q: "Why don't we take a short break?", opts: ["Good idea. I need some coffee.", "Because it's broken.", "No, I didn't take it."], a: 0 },
      { q: "Who's going to present the cost estimate?", opts: ["The estimate is too high.", "I think Mr. Lim volunteered.", "At the board meeting."], a: 1 },
      { q: "Is the printer on the third floor working again?", opts: ["He works on the third floor.", "Print two copies, please.", "Yes, the technician fixed it this morning."], a: 2 },
      { q: "How often do you inspect the scaffolding?", opts: ["Every morning before work starts.", "About thirty meters high.", "The inspector is here."], a: 0 },
      { q: "You've worked with this supplier before, haven't you?", opts: ["Yes, they supply cement.", "A couple of times, yes.", "No, I prefer working alone."], a: 1 },
      { q: "Would you rather meet on Tuesday or Wednesday?", opts: ["We met last week.", "That's a long meeting.", "Wednesday suits me better."], a: 2 },
      { q: "The quarterly report hasn't been approved yet.", opts: ["Should I remind the director?", "A quarter of the budget.", "Yes, it's a good report."], a: 0 },
      { q: "What did the client think of the new design?", opts: ["Design a new logo.", "She was very impressed.", "I think so, too."], a: 1 }
    ],
    L3: [
      {
        title: "Hội thoại 1 – Máy chiếu hỏng",
        lines: [
          ["M", "Hi, I'm in Meeting Room 4, and the projector won't turn on. Our presentation to the investors starts in fifteen minutes."],
          ["W", "Oh no. The bulb in that projector was replaced last week, so it might be a cable problem. I'll send someone from IT right away."],
          ["M", "Thanks. Is there another room we could use just in case?"],
          ["W", "Room 6 is free all afternoon, and it has a built-in screen. I'll unlock it for you now."]
        ],
        qs: [
          { q: "What problem does the man report?", opts: ["A room is too small.", "A device is not working.", "A meeting was canceled.", "Some investors are late."], a: 1 },
          { q: "What does the woman say happened last week?", opts: ["A part was replaced.", "A cable was ordered.", "A room was renovated.", "A presentation was given."], a: 0 },
          { q: "What will the woman do next?", opts: ["Call the investors.", "Buy a new projector.", "Open another room.", "Reschedule the meeting."], a: 2 }
        ]
      },
      {
        title: "Hội thoại 2 – Đặt vật liệu (có bảng)",
        graphic: "PRICE LIST – Paving Blocks (per square meter)\nStandard Grey ........ $9\nStandard Red ......... $11\nPremium Grey ......... $14\nPremium Red .......... $16",
        lines: [
          ["W", "Hi Daniel, I'm ordering the paving blocks for the park walkway. The client wants red blocks."],
          ["M", "Right, but our budget for this item is tight. The premium ones are much more expensive."],
          ["W", "True, and the standard type meets the specification for pedestrian areas anyway."],
          ["M", "Then let's go with the standard red. Please send me the order form before you submit it, so I can check the quantity."]
        ],
        qs: [
          { q: "What are the speakers mainly discussing?", opts: ["A park design.", "A materials order.", "A client meeting.", "A safety rule."], a: 1 },
          { q: "Look at the graphic. How much per square meter will the speakers pay?", opts: ["$9", "$11", "$14", "$16"], a: 1 },
          { q: "What does the man ask the woman to do?", opts: ["Contact the client.", "Visit the park.", "Send him a form.", "Lower the quantity."], a: 2 }
        ]
      },
      {
        title: "Hội thoại 3 – Tuyển nhân sự (3 người)",
        lines: [
          ["W", "Paul, Mike, have you finished reviewing the applications for the surveyor position?"],
          ["M", "I have. Two candidates stand out. Both have experience with drone surveys."],
          ["M", "I agree. But one of them can't start until September, and we need someone in July."],
          ["W", "Then let's interview the other candidate first. Mike, could you set up a video call with her this week?"]
        ],
        qs: [
          { q: "What position are the speakers hiring for?", opts: ["A driver.", "A surveyor.", "An accountant.", "A designer."], a: 1 },
          { q: "What concern is mentioned about one candidate?", opts: ["His salary request.", "His lack of experience.", "His start date.", "His location."], a: 2 },
          { q: "What is Mike asked to do?", opts: ["Arrange an interview.", "Write a job advertisement.", "Check some references.", "Buy a drone."], a: 0 }
        ]
      }
    ],
    L4: [
      {
        title: "Bài nói 1 – Tin nhắn từ khách sạn",
        text: "Hello, this message is for Mr. Hassan. This is Julia from the Grand Plaza Hotel. We received your booking for the engineering conference next month. Unfortunately, the standard room you requested is no longer available for those dates. However, we can offer you a deluxe room at the same price, since you are a conference participant. Please call us back by Friday to confirm, or we'll have to release the room. Thank you.",
        qs: [
          { q: "Why is the speaker calling?", opts: ["To confirm a payment.", "To explain a room issue.", "To invite a speaker.", "To change a conference date."], a: 1 },
          { q: "What does the speaker offer?", opts: ["A free breakfast.", "An airport shuttle.", "A room upgrade.", "A late check-out."], a: 2 },
          { q: "What is the listener asked to do by Friday?", opts: ["Return a call.", "Send a deposit.", "Register online.", "Cancel a booking."], a: 0 }
        ]
      },
      {
        title: "Bài nói 2 – Hướng dẫn đào tạo (có bảng)",
        graphic: "TRAINING SCHEDULE – Day 1\nRoom A ... Site Safety\nRoom B ... Crane Signals\nRoom C ... First Aid\nRoom D ... Quality Records",
        text: "Good morning and welcome to your first day of training. Before we begin, there's one change to the schedule you received. The crane signals session has been moved from Room B to Room D, because Room B's air conditioning is being repaired. That means the quality records session will now take place in Room B, which is fine because it's mainly paperwork. All other sessions are unchanged. Lunch will be served in the cafeteria at noon.",
        qs: [
          { q: "Who most likely are the listeners?", opts: ["Hotel guests.", "New employees.", "Crane manufacturers.", "Restaurant staff."], a: 1 },
          { q: "Why has a session been moved?", opts: ["A trainer is sick.", "A room is being repaired.", "More people registered.", "A crane is unavailable."], a: 1 },
          { q: "Look at the graphic. Which session will be held in Room D?", opts: ["Site Safety", "Crane Signals", "First Aid", "Quality Records"], a: 1 }
        ]
      }
    ],
    R5: [
      { q: "Mr. Patel will contact the supplier ___ he receives the revised drawings.", opts: ["as soon as", "in order to", "because of", "so that"], a: 0, ex: "“as soon as + mệnh đề” = ngay khi. “because of” và “in order to” không đi với mệnh đề." },
      { q: "The inspection report must be signed by ___ the engineer and the site manager.", opts: ["either", "both", "neither", "whether"], a: 1, ex: "Cặp liên từ: both … and." },
      { q: "Please keep all receipts ___ you can claim your travel expenses.", opts: ["so that", "even if", "unless", "although"], a: 0, ex: "so that = để mà (chỉ mục đích)." },
      { q: "Ms. Garcia has been ___ promoted to project director.", opts: ["recent", "recently", "recency", "more recent"], a: 1, ex: "Giữa trợ động từ và V3 cần trạng từ: has been recently promoted." },
      { q: "The new software allows engineers to work more ___.", opts: ["efficient", "efficiency", "efficiently", "efficiencies"], a: 2, ex: "Bổ nghĩa cho động từ “work” cần trạng từ." },
      { q: "Employees are reminded ___ their ID badges at all times.", opts: ["wear", "to wear", "wearing", "worn"], a: 1, ex: "be reminded to + V nguyên mẫu." },
      { q: "The tunnel project was delayed ___ unexpected rock conditions.", opts: ["since", "owing to", "unless", "while"], a: 1, ex: "owing to + cụm danh từ = do, bởi vì." },
      { q: "Each department is responsible for managing ___ own budget.", opts: ["it", "its", "it's", "their"], a: 1, ex: "“Each department” số ít, chỉ vật → tính từ sở hữu “its”." },
      { q: "The consultant's comments were ___ helpful in improving the design.", opts: ["extreme", "extremely", "extremity", "extremes"], a: 1, ex: "Bổ nghĩa cho tính từ “helpful” cần trạng từ." },
      { q: "We need to hire an engineer ___ has experience with steel bridges.", opts: ["which", "whom", "who", "whose"], a: 2, ex: "Đại từ quan hệ chỉ người, làm chủ ngữ → who." },
      { q: "The equipment will be delivered ___ the end of this week.", opts: ["until", "by", "since", "during"], a: 1, ex: "by + mốc thời gian = trước hoặc muộn nhất vào lúc đó." },
      { q: "Ms. Lee asked that the meeting ___ moved to Thursday.", opts: ["is", "was", "be", "being"], a: 2, ex: "Sau “ask/request/suggest that”, động từ ở dạng nguyên mẫu (giả định): be moved." },
      { q: "The road will remain closed ___ repairs are completed.", opts: ["until", "by", "during", "within"], a: 0, ex: "until + mệnh đề = cho đến khi." },
      { q: "Thank you for your ___ in our new training program.", opts: ["interest", "interested", "interesting", "interestingly"], a: 0, ex: "Sau tính từ sở hữu “your” cần danh từ." },
      { q: "Only ___ who have completed the safety course may operate the crane.", opts: ["that", "those", "these", "them"], a: 1, ex: "“those who …” = những người mà…" }
    ],
    R6: [
      {
        title: "Thư – Xác nhận hợp đồng",
        text: "Dear Ms. Nguyen,\n\nThank you for choosing Bright Light Electrical as the [1] for the lighting system at the Riverside Bridge. We are pleased to confirm that work will begin on May 3. [2]. Our team leader, Mr. Ken Ito, will be your main point of contact. He will visit the site next week to [3] the final cable routes with your engineers. Should you have any questions, please do not [4] to contact us.\n\nSincerely,\nAnna Brooks",
        qs: [
          { opts: ["subcontract", "subcontractor", "subcontracting", "subcontracted"], a: 1, ex: "Sau “as the” cần danh từ chỉ người/công ty: subcontractor (nhà thầu phụ)." },
          { opts: ["The bridge was opened in 1998.", "The installation is expected to take six weeks.", "Electricity prices have risen recently.", "Our office is closed on Sundays."], a: 1, ex: "Sau câu về ngày khởi công, câu hợp lý nhất nói về thời gian thi công." },
          { opts: ["confirm", "confirms", "confirmation", "confirming"], a: 0, ex: "to + V nguyên mẫu (chỉ mục đích)." },
          { opts: ["hesitate", "hesitation", "hesitant", "hesitantly"], a: 0, ex: "Cụm cố định: Please do not hesitate to contact us." }
        ]
      }
    ],
    R7: [
      {
        title: "Thông báo – Bảo trì hệ thống",
        text: "NOTICE TO ALL STAFF\n\nThe company's document management system will be unavailable from 8:00 P.M. on Friday, June 12, until 6:00 A.M. on Saturday, June 13, while we upgrade the servers. During this time, you will not be able to upload or download drawings.\n\nPlease save any files you need for weekend site work to your laptop before 7:00 P.M. on Friday. After the upgrade, you will need to reset your password the first time you log in.\n\nIf you experience any problems, contact the IT help desk at ext. 300.",
        qs: [
          { q: "What is the purpose of the notice?", opts: ["To announce new laptops.", "To explain a temporary service interruption.", "To introduce a new IT manager.", "To change a weekend schedule."], a: 1 },
          { q: "What are employees advised to do before 7:00 P.M. on Friday?", opts: ["Reset their passwords.", "Call the help desk.", "Save necessary files.", "Shut down their computers."], a: 2 },
          { q: "What will happen when employees first log in after the upgrade?", opts: ["They must change their password.", "They will receive new drawings.", "They must install software.", "They will be charged a fee."], a: 0 }
        ]
      },
      {
        title: "Hai đoạn – Quảng cáo & Email",
        text: "[Advertisement]\nPRO-SURVEY TRAINING CENTER\nOne-day courses for engineers:\n• Drone Mapping Basics – July 8 – $180\n• Total Station Advanced – July 15 – $150\n• GIS for Road Projects – July 22 – $200\nGroup discount: 10% off for 3 or more participants from the same company.\nRegister at prosurvey.example by July 1.\n\n[E-mail]\nTo: registration@prosurvey.example\nFrom: Hoa Le\nDate: June 25\nSubject: Registration\n\nHello,\nI would like to register four engineers from Delta Roads for the GIS course. I understand that we qualify for a discount. Could you also tell me whether lunch is included? Two of our engineers are vegetarian.\nThank you,\nHoa Le",
        qs: [
          { q: "What is indicated about the courses?", opts: ["They last one day.", "They are held online.", "They are free for groups.", "They start in June."], a: 0 },
          { q: "Which course does Ms. Le want her engineers to take?", opts: ["Drone Mapping Basics", "Total Station Advanced", "GIS for Road Projects", "All three courses"], a: 2 },
          { q: "How much will Delta Roads most likely pay per participant?", opts: ["$150", "$180", "$200", "$220"], a: 1 },
          { q: "What does Ms. Le ask about?", opts: ["Parking spaces.", "Meals.", "Course materials.", "Payment methods."], a: 1 }
        ]
      },
      {
        title: "Bài báo – Cầu mới",
        text: "HANH CITY — Construction of the new Lotus Bridge across the Red River reached a major milestone last week when the final segment of the main span was connected. — [1] —\n\nThe 1.2-kilometer bridge, designed by Asia Infra Consultants, will carry six lanes of traffic and a separate path for bicycles. — [2] — Project officials say the bridge will reduce travel time between the city center and the new industrial zone from 50 minutes to about 15.\n\nThe remaining work, including paving and lighting, is expected to be finished by December. — [3] — \"We are slightly ahead of schedule thanks to good weather this year,\" said project manager Tran Van Duc. — [4] —",
        qs: [
          { q: "What is the article mainly about?", opts: ["A bridge design competition.", "Progress on a construction project.", "A new industrial zone.", "Traffic problems in the city center."], a: 1 },
          { q: "What is mentioned about the bridge?", opts: ["It has a bicycle path.", "It is the longest in the country.", "It will have eight lanes.", "It was designed by the city."], a: 0 },
          { q: "According to Mr. Tran, why is the project ahead of schedule?", opts: ["More workers were hired.", "The design was simplified.", "The weather was favorable.", "Materials arrived early."], a: 2 },
          { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"The opening ceremony is planned for early January.\"", opts: ["[1]", "[2]", "[3]", "[4]"], a: 2 }
        ]
      }
    ]
  },

  // =====================================================================
  {
    id: "t3", title: "Đề 3 – Công trường & dịch vụ",
    L1: [
      { emoji: "🧑‍🔧🧱🧑‍🔧", scene: "Hai công nhân đang xếp gạch thành chồng trên pallet.", opts: ["They're stacking bricks on a pallet.", "They're painting a wall.", "They're loading bricks onto a truck.", "They're sitting on a pile of bricks."], a: 0 },
      { emoji: "🍽️🧑‍🍳🍳", scene: "Một đầu bếp đang khuấy món ăn trong chảo trên bếp.", opts: ["A chef is setting a table.", "A chef is washing a pan.", "A chef is stirring food in a pan.", "A chef is opening a refrigerator."], a: 2 },
      { emoji: "🚧🌉🌫️", scene: "Một cây cầu đang được xây dựng, phần dầm còn dang dở, các trụ đã đứng vững.", opts: ["Cars are crossing a bridge.", "A bridge is under construction.", "A bridge has been demolished.", "People are fishing under a bridge."], a: 1 }
    ],
    L2: [
      { q: "Has the concrete for the deck been ordered?", opts: ["The deck is very wide.", "Yes, it's coming at six tomorrow.", "In order of priority."], a: 1 },
      { q: "Which contractor won the tender?", opts: ["A local company from Hai Phong.", "It's very tender.", "Next week, probably."], a: 0 },
      { q: "Why is the north gate closed today?", opts: ["Close it after you leave.", "At about five thirty.", "They're repairing the road outside."], a: 2 },
      { q: "Could you show me how to use this level?", opts: ["It's on the second level.", "Sure, it's quite simple.", "Yes, I used it."], a: 1 },
      { q: "How much will the extra work cost?", opts: ["We're still preparing the estimate.", "Not very much work.", "About two weeks."], a: 0 },
      { q: "Do you want to walk to the site office or take the van?", opts: ["Yes, I want to.", "The office is very modern.", "Let's walk. It's not far."], a: 2 },
      { q: "Isn't the safety meeting at eight?", opts: ["It's been moved to eight thirty.", "Yes, it's very safe.", "I met him at the meeting."], a: 0 },
      { q: "I can't find the key to the storage container.", opts: ["It's a large container.", "Check with the security guard.", "I'll store it there."], a: 1 },
      { q: "When will the test results be available?", opts: ["At the laboratory.", "The test was difficult.", "By Thursday afternoon."], a: 2 },
      { q: "Who left these drawings on my desk?", opts: ["The design team dropped them off.", "On the left side.", "They're drawn to scale."], a: 0 }
    ],
    L3: [
      {
        title: "Hội thoại 1 – Mượn thiết bị",
        lines: [
          ["M", "Hi Rosa. Our vibratory roller broke down this morning. Could we borrow yours for a day or two?"],
          ["W", "We're using it today, but we'll finish the compaction on our section by four o'clock. You can have it after that."],
          ["M", "That's great. I'll send one of our operators to pick it up at four thirty."],
          ["W", "OK. Just make sure he brings the transfer form signed by your site manager."]
        ],
        qs: [
          { q: "What does the man want to do?", opts: ["Rent a truck.", "Borrow a machine.", "Hire an operator.", "Buy some fuel."], a: 1 },
          { q: "What will happen at four o'clock?", opts: ["A meeting will begin.", "Some work will be finished.", "A delivery will arrive.", "A repair will start."], a: 1 },
          { q: "What does the woman remind the man to bring?", opts: ["A signed document.", "A safety helmet.", "Some fuel.", "A spare key."], a: 0 }
        ]
      },
      {
        title: "Hội thoại 2 – Lịch họp (có bảng)",
        graphic: "MEETING ROOM BOOKINGS – Thursday\n9:00 – 10:30 ... Finance Team\n10:30 – 12:00 ... (available)\n1:00 – 2:30 ... Design Review\n3:00 – 4:30 ... (available)",
        lines: [
          ["W", "Mark, the client wants to discuss the variation order on Thursday. When's the meeting room free?"],
          ["M", "Let me check... The client's flight lands at eleven, so the morning slot won't work."],
          ["W", "Right. And the design review in the early afternoon can't be moved."],
          ["M", "Then we'll take the later slot. I'll book it now and send the client an invitation."]
        ],
        qs: [
          { q: "What will be discussed with the client?", opts: ["A flight schedule.", "A variation order.", "A new office.", "A design award."], a: 1 },
          { q: "Why is the morning slot unsuitable?", opts: ["The room is too small.", "The client will be traveling.", "The finance team needs it.", "The man is busy."], a: 1 },
          { q: "Look at the graphic. When will the meeting most likely start?", opts: ["9:00", "10:30", "1:00", "3:00"], a: 3 }
        ]
      },
      {
        title: "Hội thoại 3 – Đặt tiệc công ty",
        lines: [
          ["W", "Hello, I'm calling to book your banquet hall for our company's year-end party on December 20."],
          ["M", "Certainly. How many guests are you expecting?"],
          ["W", "Around 120. We'd also like a stage for a short awards ceremony."],
          ["M", "No problem. Our main hall holds up to 150 people and includes a stage and sound system. I'll e-mail you our menu options today."]
        ],
        qs: [
          { q: "What event is the woman planning?", opts: ["A product launch.", "A training session.", "A company party.", "A wedding."], a: 2 },
          { q: "What does the woman request?", opts: ["A stage.", "A discount.", "Free parking.", "A larger hall."], a: 0 },
          { q: "What will the man send?", opts: ["A contract.", "Menu choices.", "An invoice.", "A floor plan."], a: 1 }
        ]
      }
    ],
    L4: [
      {
        title: "Bài nói 1 – Thông báo tại sân bay",
        text: "Attention, passengers on Flight VN 216 to Singapore. Due to a technical check on the aircraft, departure has been delayed by approximately one hour. The new departure time is 3:45 P.M. Boarding will now take place at Gate 22 instead of Gate 18. Passengers can collect a meal voucher at the information desk near Gate 20. We apologize for the inconvenience and thank you for your patience.",
        qs: [
          { q: "What is the reason for the delay?", opts: ["Bad weather.", "A technical check.", "A crew change.", "Heavy traffic."], a: 1 },
          { q: "Where will passengers board?", opts: ["Gate 18", "Gate 20", "Gate 22", "Gate 26"], a: 2 },
          { q: "What are passengers offered?", opts: ["A hotel room.", "A meal voucher.", "A seat upgrade.", "A partial refund."], a: 1 }
        ]
      },
      {
        title: "Bài nói 2 – Họp nhóm",
        text: "OK everyone, let's get started. As you know, the client has asked us to finish the drainage works two weeks earlier than planned, so they can open the road before the Lunar New Year holiday. To do that, we'll add a night shift starting next Monday. I know that's not easy, so the company will provide transport and a meal allowance for night-shift workers. Please tell your supervisor by Wednesday if you're available.",
        qs: [
          { q: "What has the client requested?", opts: ["A lower price.", "An earlier completion.", "A new road design.", "More supervisors."], a: 1 },
          { q: "What will the company provide for night-shift workers?", opts: ["Extra vacation days.", "Transport and meal money.", "New uniforms.", "Accommodation."], a: 1 },
          { q: "What are listeners asked to do by Wednesday?", opts: ["Submit a report.", "Inform their supervisor.", "Attend a training.", "Sign a contract."], a: 1 }
        ]
      }
    ],
    R5: [
      { q: "The engineers worked late every day ___ the project could be completed on time.", opts: ["so that", "even though", "because of", "instead of"], a: 0, ex: "so that + mệnh đề = để (mục đích)." },
      { q: "Ms. Ono is ___ qualified to lead the inspection team.", opts: ["high", "highly", "height", "higher"], a: 1, ex: "highly qualified = có trình độ cao. Trạng từ bổ nghĩa cho tính từ." },
      { q: "Applications received after the deadline will not be ___.", opts: ["considered", "considering", "consider", "considerate"], a: 0, ex: "Bị động: will not be + V3." },
      { q: "The supplier has agreed to deliver the steel ___ additional charge.", opts: ["at", "without", "from", "until"], a: 1, ex: "without additional charge = không tính thêm phí." },
      { q: "___ you need help with the software, please call the IT desk.", opts: ["Should", "Would", "Had", "Unless"], a: 0, ex: "Đảo ngữ điều kiện loại 1: Should you need… = If you need…" },
      { q: "The new office is ___ larger than the old one.", opts: ["very", "much", "many", "so"], a: 1, ex: "Nhấn mạnh so sánh hơn dùng much/far/a lot, không dùng very." },
      { q: "All visitors must sign in at the reception desk ___ arrival.", opts: ["on", "in", "at", "for"], a: 0, ex: "Cụm cố định: on arrival = khi đến nơi." },
      { q: "The project team consists ___ engineers, surveyors, and technicians.", opts: ["in", "with", "of", "by"], a: 2, ex: "consist of = bao gồm." },
      { q: "It is ___ that all workers attend the safety briefing.", opts: ["essence", "essential", "essentially", "essentials"], a: 1, ex: "It is + tính từ + that…: essential (thiết yếu)." },
      { q: "Mr. Silva has worked for the company ___ fifteen years.", opts: ["since", "for", "during", "ago"], a: 1, ex: "for + khoảng thời gian; since + mốc thời gian." },
      { q: "The client was satisfied with the ___ of the finished pavement.", opts: ["qualify", "quality", "qualified", "qualifying"], a: 1, ex: "Sau “the” cần danh từ: quality (chất lượng)." },
      { q: "We will proceed with the pour ___ the weather is suitable.", opts: ["provided that", "in spite of", "rather than", "as well as"], a: 0, ex: "provided that = miễn là, với điều kiện là." },
      { q: "The manager asked the team to review the contract ___ before signing it.", opts: ["thorough", "thoroughly", "thoroughness", "more thorough"], a: 1, ex: "Bổ nghĩa cho động từ “review” → trạng từ." },
      { q: "None of the samples ___ the required strength.", opts: ["reaching", "reached", "to reach", "reach out"], a: 1, ex: "Câu cần động từ chính được chia: reached." },
      { q: "The company plans to ___ its operations to Cambodia next year.", opts: ["expand", "expansion", "expansive", "expanding"], a: 0, ex: "plan to + V nguyên mẫu." }
    ],
    R6: [
      {
        title: "Email – Thay đổi giờ làm",
        text: "To: All Site Staff\nFrom: HR Department\nSubject: Summer working hours\n\nDue to the high temperatures expected this summer, working hours on all sites will be [1] from June 1 to August 31. Work will start at 6:00 A.M. and finish at 3:00 P.M., with a two-hour break at midday. [2]. Supervisors should make sure that drinking water is [3] available at every work area. We appreciate your [4] in keeping our workplace safe.",
        qs: [
          { opts: ["adjust", "adjusted", "adjusting", "adjustment"], a: 1, ex: "Bị động: will be + V3 → adjusted." },
          { opts: ["This change is intended to reduce the risk of heat stress.", "The company was founded in 2005.", "Summer is a popular holiday season.", "Please return your uniforms by Friday."], a: 0, ex: "Câu chèn giải thích lý do thay đổi giờ làm, phù hợp ngữ cảnh." },
          { opts: ["constant", "constantly", "constancy", "constants"], a: 1, ex: "Bổ nghĩa cho tính từ “available” → trạng từ constantly." },
          { opts: ["cooperate", "cooperative", "cooperation", "cooperatively"], a: 2, ex: "Sau tính từ sở hữu “your” cần danh từ: cooperation." }
        ]
      }
    ],
    R7: [
      {
        title: "Biểu mẫu – Phiếu yêu cầu bảo trì",
        text: "MAINTENANCE REQUEST FORM\nDate: March 3\nRequested by: Le Thi Mai, Accounts Department, 4th floor\nProblem: The air conditioner in Room 405 makes a loud noise and does not cool the room properly. This started about a week ago.\nPreferred time for repair: Any weekday after 4:00 P.M. (the room is used for client meetings during the day)\nUrgency: □ Low ■ Medium □ High\n\nFOR MAINTENANCE USE ONLY\nAssigned to: T. Quang\nScheduled: March 5, 4:30 P.M.\nNote: Replacement fan motor ordered.",
        qs: [
          { q: "Why did Ms. Le submit the form?", opts: ["To book a meeting room.", "To report an equipment problem.", "To request a new office.", "To order a fan."], a: 1 },
          { q: "What is suggested about Room 405?", opts: ["It is on the 5th floor.", "It is used for meetings.", "It was recently renovated.", "It has no windows."], a: 1 },
          { q: "What will most likely happen on March 5?", opts: ["A part will be installed.", "A client will visit.", "Ms. Le will move offices.", "The form will be reviewed."], a: 0 }
        ]
      },
      {
        title: "Chuỗi tin nhắn",
        text: "Tuan Pham [2:10 P.M.]: The rebar delivery for Pier 3 just arrived, but the bars are 12 mm, not 16 mm as ordered.\nSophie Martin [2:12 P.M.]: Seriously? We're pouring that pier on Friday.\nTuan Pham [2:13 P.M.]: I know. I've already called the supplier. They can bring the right bars tomorrow morning.\nSophie Martin [2:15 P.M.]: OK, that still works. Make sure they take the wrong bars back at the same time.\nTuan Pham [2:16 P.M.]: Will do. I'll also ask for a written explanation.\nSophie Martin [2:17 P.M.]: Good. Copy me on the e-mail.",
        qs: [
          { q: "What problem does Mr. Pham report?", opts: ["A delivery is late.", "The wrong materials were delivered.", "A pier was damaged.", "The supplier is closed."], a: 1 },
          { q: "At 2:15 P.M., what does Ms. Martin mean when she writes, \"OK, that still works\"?", opts: ["The schedule will not be affected.", "The equipment is working again.", "She agrees to cancel the order.", "She will work late on Friday."], a: 0 },
          { q: "What will Mr. Pham most likely do next?", opts: ["Pour the concrete.", "Write to the supplier.", "Visit Pier 5.", "Order more concrete."], a: 1 }
        ]
      },
      {
        title: "Ba đoạn – Lịch, email & phản hồi",
        text: "[Schedule]\nCITY ENGINEERING EXPO – Exhibitor Setup\nHall A: Tuesday 8 A.M. – 6 P.M.\nHall B: Wednesday 8 A.M. – 12 P.M.\nHall C: Wednesday 1 P.M. – 6 P.M.\nExpo opens to the public Thursday 9 A.M.\n\n[E-mail 1]\nTo: Expo Office\nFrom: Kenji Mori, Nippon Bearings\nWe have been assigned Booth C-14. Unfortunately, our equipment will not arrive until Wednesday at 3 P.M. Will we still have enough time to set up?\n\n[E-mail 2]\nTo: Kenji Mori\nFrom: Expo Office\nDear Mr. Mori, you can continue setting up until 6 P.M. on the day of arrival. If you need more time, our staff can open your hall at 7 A.M. on Thursday for an additional fee of $50. Please let us know by Tuesday.",
        qs: [
          { q: "In which hall is Mr. Mori's booth located?", opts: ["Hall A", "Hall B", "Hall C", "The schedule does not say."], a: 2 },
          { q: "What is Mr. Mori concerned about?", opts: ["The size of his booth.", "The cost of the expo.", "Having enough time to set up.", "The number of visitors."], a: 2 },
          { q: "How many hours will Mr. Mori have on Wednesday after his equipment arrives?", opts: ["One", "Three", "Five", "Six"], a: 1 },
          { q: "What does the Expo Office offer?", opts: ["A larger booth.", "Early access for a fee.", "Free delivery.", "A refund."], a: 1 }
        ]
      }
    ]
  },

  // =====================================================================
  {
    id: "t4", title: "Đề 4 – Kinh doanh & đời sống",
    L1: [
      { emoji: "🧑‍💼📦🛒", scene: "Một người đàn ông đang đẩy xe chở các thùng hàng trong nhà kho.", opts: ["He's opening a box.", "He's pushing a cart with boxes.", "He's stacking boxes on a shelf.", "He's driving a forklift."], a: 1 },
      { emoji: "🌳🪑🪑🌳", scene: "Hai chiếc ghế dài đặt dọc lối đi trong công viên, không có ai ngồi.", opts: ["People are relaxing on benches.", "Benches are being painted.", "Some benches line a walkway.", "Trees are being planted along a path."], a: 2 },
      { emoji: "👩‍🔬🧪📋", scene: "Một nhân viên phòng thí nghiệm đang ghi chép bên cạnh các mẫu thí nghiệm.", opts: ["A woman is writing on a clipboard.", "A woman is cleaning some glasses.", "A woman is opening a window.", "A woman is pouring water into a sink."], a: 0 }
    ],
    L2: [
      { q: "What time does the bank open on Saturdays?", opts: ["At the corner of Main Street.", "From nine to noon.", "I opened an account."], a: 1 },
      { q: "Why hasn't the invoice been paid?", opts: ["It's missing a purchase order number.", "It costs about three hundred dollars.", "Yes, I paid it."], a: 0 },
      { q: "Should I print the slides in color?", opts: ["The slides are on the table.", "I prefer blue.", "Black and white is fine."], a: 2 },
      { q: "Where's the nearest pharmacy?", opts: ["There's one across from the hospital.", "Some cold medicine.", "It closes at nine."], a: 0 },
      { q: "Do you know if the train is on time?", opts: ["I usually take the bus.", "The board says it's delayed.", "Two tickets, please."], a: 1 },
      { q: "Can you recommend a good restaurant near the hotel?", opts: ["I recommended him for the job.", "Try the seafood place by the river.", "Yes, it's a nice hotel."], a: 1 },
      { q: "How was your business trip to Japan?", opts: ["Very productive, thanks.", "By plane.", "Next month."], a: 0 },
      { q: "Let's order lunch for the workshop participants.", opts: ["The workshop was useful.", "I ate at noon.", "How many people are there?"], a: 2 },
      { q: "Aren't you going to the training session?", opts: ["Yes, it's training.", "I've already attended it.", "The train is late."], a: 1 },
      { q: "Who should I send my expense report to?", opts: ["Last Friday.", "About two hundred dollars.", "The accounting department."], a: 2 }
    ],
    L3: [
      {
        title: "Hội thoại 1 – Đổi lịch khám",
        lines: [
          ["W", "Good morning, Riverside Dental Clinic."],
          ["M", "Hi, this is Lam Nguyen. I have an appointment tomorrow at ten, but I have to go to a site meeting. Could I change it?"],
          ["W", "Sure. We have an opening on Thursday at four thirty, or Friday morning at nine."],
          ["M", "Thursday is better. Oh, and do I need to bring my insurance card again?"],
          ["W", "No, we already have it on file."]
        ],
        qs: [
          { q: "Why is the man calling?", opts: ["To cancel his insurance.", "To reschedule an appointment.", "To ask for directions.", "To pay a bill."], a: 1 },
          { q: "When will the man most likely visit the clinic?", opts: ["Tomorrow at ten.", "Thursday afternoon.", "Friday morning.", "Next week."], a: 1 },
          { q: "What does the woman say about the insurance card?", opts: ["It has expired.", "It must be renewed.", "The clinic already has it.", "It is not accepted."], a: 2 }
        ]
      },
      {
        title: "Hội thoại 2 – Ra mắt sản phẩm (có bảng)",
        graphic: "SALES BY REGION – New Concrete Admixture (tons, Q1)\nNorth ...... 120\nCentral .... 85\nSouth ...... 210\nHighlands .. 40",
        lines: [
          ["M", "The first-quarter numbers for our new admixture are in. Sales in the south are excellent."],
          ["W", "Yes, but look at the region with the lowest sales. We should find out why."],
          ["M", "I think it's because we don't have a distributor there yet. Customers have to order directly from Hanoi."],
          ["W", "Then let's contact a few local building-supply companies next week."]
        ],
        qs: [
          { q: "What are the speakers discussing?", opts: ["Hiring new staff.", "Sales results.", "A new office.", "Product prices."], a: 1 },
          { q: "Look at the graphic. Which region does the woman want to investigate?", opts: ["North", "Central", "South", "Highlands"], a: 3 },
          { q: "What does the woman suggest doing?", opts: ["Lowering prices.", "Contacting local companies.", "Opening a factory.", "Advertising online."], a: 1 }
        ]
      },
      {
        title: "Hội thoại 3 – Thuê căn hộ",
        lines: [
          ["W", "I'm calling about the two-bedroom apartment you advertised. Is it still available?"],
          ["M", "Yes, it is. It's on the fifth floor, close to the metro station, and the rent is 12 million dong a month."],
          ["W", "That sounds good. I work night shifts sometimes, so I'd like somewhere quiet. Is the building noisy?"],
          ["M", "Not at all. Would you like to come and see it this Saturday morning?"]
        ],
        qs: [
          { q: "What is mentioned about the apartment?", opts: ["It has three bedrooms.", "It is near public transportation.", "It is on the ground floor.", "It is fully furnished."], a: 1 },
          { q: "Why is the woman concerned about noise?", opts: ["She works from home.", "She has young children.", "She sometimes works at night.", "She plays the piano."], a: 2 },
          { q: "What does the man invite the woman to do?", opts: ["Sign a lease.", "Pay a deposit.", "View the apartment.", "Meet the neighbors."], a: 2 }
        ]
      }
    ],
    L4: [
      {
        title: "Bài nói 1 – Quảng cáo",
        text: "Are you tired of slow internet at your construction site office? SiteNet offers portable 5G routers designed for remote locations. Set-up takes less than five minutes, and our devices work even in bad weather. This month only, new business customers get the first two months free. Visit sitenet.example or call our sales team today to find the plan that's right for your project.",
        qs: [
          { q: "What is being advertised?", opts: ["A weather service.", "An internet device.", "A construction company.", "A mobile phone."], a: 1 },
          { q: "What is said about the set-up?", opts: ["It requires a technician.", "It is quick.", "It costs extra.", "It takes one day."], a: 1 },
          { q: "What special offer is mentioned?", opts: ["A free router.", "Free service for two months.", "A 50% discount.", "Free installation."], a: 1 }
        ]
      },
      {
        title: "Bài nói 2 – Hướng dẫn tham quan (có bảng)",
        graphic: "FACTORY TOUR ROUTE\nStop 1 ... Raw Materials Yard\nStop 2 ... Casting Area\nStop 3 ... Curing Chambers\nStop 4 ... Quality Lab",
        text: "Welcome to Delta Precast. I'm Linh, and I'll be your guide today. We'll follow the route on your handout, but please note one change. We'll skip the third stop this morning because the chambers are full of newly cast girders and the temperature inside is very high. Instead, we'll spend extra time at our quality lab, where you can watch a compression test. Please keep your helmet and glasses on throughout the tour.",
        qs: [
          { q: "Where are the listeners?", opts: ["At a factory.", "At a museum.", "At a bridge.", "At a university."], a: 0 },
          { q: "Look at the graphic. Which stop will be skipped?", opts: ["Raw Materials Yard", "Casting Area", "Curing Chambers", "Quality Lab"], a: 2 },
          { q: "What will the listeners be able to see at the lab?", opts: ["A safety video.", "A product test.", "A new crane.", "A design meeting."], a: 1 }
        ]
      }
    ],
    R5: [
      { q: "The marketing team presented ___ findings at the monthly meeting.", opts: ["they", "them", "their", "theirs"], a: 2, ex: "Trước danh từ “findings” cần tính từ sở hữu: their." },
      { q: "Customers can return products ___ 30 days of purchase.", opts: ["within", "among", "between", "along"], a: 0, ex: "within + khoảng thời gian = trong vòng." },
      { q: "The hotel offers free shuttle service ___ the airport and the city center.", opts: ["among", "between", "through", "across"], a: 1, ex: "between A and B." },
      { q: "Ms. Kim's proposal was the most ___ of all the submissions.", opts: ["create", "creative", "creatively", "creation"], a: 1, ex: "the most + tính từ (so sánh nhất)." },
      { q: "Please ___ the attached document and send your comments by Friday.", opts: ["review", "reviewer", "reviewing", "reviewed"], a: 0, ex: "Câu mệnh lệnh: Please + V nguyên mẫu." },
      { q: "The store will be closed for ___ next Monday.", opts: ["renovate", "renovations", "renovated", "renovating"], a: 1, ex: "Sau giới từ “for” cần danh từ: renovations." },
      { q: "Sales have increased ___ since the new website was launched.", opts: ["steady", "steadily", "steadiness", "steadier"], a: 1, ex: "Bổ nghĩa cho động từ “increased” → trạng từ." },
      { q: "___ the director nor her assistant was available to answer questions.", opts: ["Either", "Both", "Neither", "Not only"], a: 2, ex: "Neither … nor." },
      { q: "The conference attracted ___ 500 participants from 20 countries.", opts: ["approximate", "approximately", "approximation", "approximating"], a: 1, ex: "Trạng từ bổ nghĩa cho số lượng: approximately 500." },
      { q: "If we ___ more staff, we could finish the project sooner.", opts: ["have", "had", "will have", "having"], a: 1, ex: "Câu điều kiện loại 2: If + quá khứ đơn, could + V." },
      { q: "The manager is looking for someone ___ to work on weekends.", opts: ["will", "willing", "willingly", "willingness"], a: 1, ex: "someone + tính từ: willing to (sẵn sàng)." },
      { q: "Our office is located ___ the third floor of the Sun Tower.", opts: ["in", "at", "on", "by"], a: 2, ex: "Tầng nhà dùng “on”: on the third floor." },
      { q: "Mr. Ahmed was praised for his ___ to customer service.", opts: ["dedicate", "dedicated", "dedication", "dedicating"], a: 2, ex: "Sau tính từ sở hữu “his” cần danh từ: dedication." },
      { q: "The prices listed on the website are ___ to change without notice.", opts: ["subject", "object", "likely", "due"], a: 0, ex: "Cụm cố định: be subject to change = có thể thay đổi." },
      { q: "Ms. Tran ___ for the company for ten years by the time she retires next year.", opts: ["works", "will have worked", "has worked", "worked"], a: 1, ex: "“by the time + hiện tại”, hành động hoàn tất trước mốc tương lai → tương lai hoàn thành." }
    ],
    R6: [
      {
        title: "Quảng cáo – Khai trương phòng gym",
        text: "FitZone is opening its newest location on Tran Phu Street on October 1! To celebrate, we are offering a [1] membership rate of just 400,000 dong per month for the first 100 members. [2]. Our modern facility includes a swimming pool, a sauna, and more than 50 machines. Personal trainers are available [3] request. Visit us during opening week for a free tour, and bring a friend [4] get a bonus month free!",
        qs: [
          { opts: ["special", "specially", "specialize", "specialty"], a: 0, ex: "Trước danh từ “membership rate” cần tính từ: special." },
          { opts: ["This offer is only valid until October 31.", "Swimming is good for your health.", "The building was constructed last year.", "Our staff wear blue uniforms."], a: 0, ex: "Câu chèn bổ sung điều kiện cho ưu đãi vừa nêu." },
          { opts: ["at", "in", "upon", "of"], a: 2, ex: "Cụm cố định: upon request / on request = khi có yêu cầu." },
          { opts: ["but", "and", "or", "so"], a: 1, ex: "Câu mệnh lệnh + and + kết quả: bring a friend and get…" }
        ]
      }
    ],
    R7: [
      {
        title: "Thư mời phỏng vấn",
        text: "Dear Mr. Vo,\n\nThank you for applying for the position of Junior Structural Engineer at Pacific Design Group. We were impressed by your experience with bridge inspection and would like to invite you to an interview.\n\nThe interview will take place on Monday, April 14, at 10:00 A.M. at our office on the 12th floor of Saigon Center. It will last about one hour and will include a short technical test. Please bring a copy of your degree certificate and a portfolio of your design work.\n\nKindly confirm your attendance by replying to this e-mail by April 10.\n\nBest regards,\nChloe Tan\nHuman Resources",
        qs: [
          { q: "What is the purpose of the letter?", opts: ["To offer a job.", "To arrange an interview.", "To request references.", "To reject an application."], a: 1 },
          { q: "What will Mr. Vo be asked to do at the interview?", opts: ["Give a presentation.", "Take a test.", "Meet the CEO.", "Visit a bridge."], a: 1 },
          { q: "What should Mr. Vo bring?", opts: ["A recommendation letter.", "Examples of his work.", "His passport.", "A laptop."], a: 1 },
          { q: "By when must Mr. Vo respond?", opts: ["April 10", "April 12", "April 14", "April 20"], a: 0 }
        ]
      },
      {
        title: "Hai đoạn – Đánh giá & phản hồi",
        text: "[Online review]\n★★☆☆☆ Posted by Hanh D.\nI stayed at the Ocean Breeze Hotel for three nights on a business trip. The location is great, right next to the convention center. However, the Wi-Fi in my room was extremely slow, so I had to work in the lobby every evening. Also, breakfast ended at 9:00 A.M., which is too early for many guests.\n\n[Response from the hotel]\nDear Ms. Hanh,\nThank you for your feedback. We are sorry about the Wi-Fi problem. We have since installed new routers on every floor. We have also extended breakfast hours until 10:30 A.M. on weekends. As a returning guest, you will receive 20% off your next stay. We hope to welcome you back soon.\nManager, Ocean Breeze Hotel",
        qs: [
          { q: "Why did Ms. Hanh stay at the hotel?", opts: ["For a vacation.", "For work.", "For a wedding.", "For a medical visit."], a: 1 },
          { q: "What did Ms. Hanh like about the hotel?", opts: ["Its location.", "Its breakfast.", "Its Wi-Fi.", "Its price."], a: 0 },
          { q: "What has the hotel changed since Ms. Hanh's stay?", opts: ["It moved to a new building.", "It improved its internet service.", "It hired new staff.", "It closed the lobby."], a: 1 },
          { q: "What is indicated about breakfast?", opts: ["It is now free.", "It ends later on weekends.", "It is served in the lobby.", "It was removed."], a: 1 }
        ]
      },
      {
        title: "Bài báo ngắn – Xe buýt điện",
        text: "DA NANG — The city's transport department announced on Tuesday that 60 new electric buses will begin operating on five major routes starting in March. The buses, which can carry up to 80 passengers each, will replace older diesel vehicles that have been in service for more than 15 years.\n\nOfficials expect the change to cut fuel costs by about 30 percent and significantly reduce air pollution in the city center. Passengers will also be able to pay fares using a mobile app, in addition to cash.\n\nThe department plans to convert all city buses to electric power by 2030.",
        qs: [
          { q: "What is the article mainly about?", opts: ["A new mobile app.", "The introduction of electric buses.", "Rising fuel prices.", "A new bus station."], a: 1 },
          { q: "What is NOT mentioned as a benefit of the change?", opts: ["Lower fuel costs.", "Cleaner air.", "Faster travel times.", "Easier fare payment."], a: 2 },
          { q: "What is the city's goal for 2030?", opts: ["To build five new routes.", "To make all buses electric.", "To double the number of passengers.", "To stop accepting cash."], a: 1 }
        ]
      }
    ]
  }
];
