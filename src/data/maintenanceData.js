/**
 * Dữ liệu nghiệp vụ chuẩn hóa cho Landing Page:
 * Dịch vụ chăm sóc & vận hành website theo tháng
 * Công ty TNHH Giải Pháp Phần Mềm DUDI
 */

export const COMPANY_INFO = {
  name: "Công ty TNHH Giải Pháp Phần Mềm DUDI",
  brandName: "DUDI Software",
  taxId: "0319641544",
  hotline: "0909 163 821",
  hotlineFormatted: "0909 163 821",
  hotlineHref: "tel:0909163821",
  email: "contact@dudisoftware.com",
  emailHref: "mailto:contact@dudisoftware.com",
  address: "49/2 Đường 14, Phường Thủ Đức, TP.HCM",
  zaloHref: "https://zalo.me/0909163821",
  workingHours: "Thứ 2 - Thứ 6: 08:30 - 17:30 | Thứ 7: 08:30 - 12:00",
};

// S03: Dấu hiệu website cần chăm sóc (7 cards / checklist)
export const SIGNS_DATA = [
  {
    id: 1,
    title: "Website đôi lúc không truy cập được",
    description: "Tình trạng chập chờn, tải trang thất thường nhưng không có hệ thống cảnh báo kịp thời.",
    impact: "Mất khách hàng tiềm năng khi họ ghé thăm đúng lúc hệ thống gián đoạn.",
  },
  {
    id: 2,
    title: "Form liên hệ không gửi được",
    description: "Khách điền form hoặc đặt lịch nhưng email không về, thông tin liên hệ bị thất lạc.",
    impact: "Lãng phí ngân sách quảng cáo và bỏ lỡ các cơ hội kinh doanh trực tiếp.",
  },
  {
    id: 3,
    title: "Plugin & mã nguồn quá hạn cập nhật",
    description: "Hệ thống nhiều tháng không được kiểm tra phiên bản mới, dễ phát sinh xung đột phần mềm.",
    impact: "Lỗ hổng bảo mật và nguy cơ lỗi giao diện khi trình duyệt cập nhật chuẩn mới.",
  },
  {
    id: 4,
    title: "Nội dung cũ chưa được làm mới",
    description: "Banner khuyến mãi cũ, thông tin dịch vụ thay đổi nhưng chưa có người đăng tải.",
    impact: "Tạo cảm giác doanh nghiệp ngưng hoạt động hoặc thiếu chuyên nghiệp trong mắt đối tác.",
  },
  {
    id: 5,
    title: "Ảnh quá nặng làm trang tải chậm",
    description: "Nhân viên tự tải ảnh dung lượng vài MB chưa qua nén và tối ưu kích thước chuẩn.",
    impact: "Tốc độ tải trang chậm khiến khách thoát trang sớm và điểm trải nghiệm giảm sút.",
  },
  {
    id: 6,
    title: "Không có bản backup định kỳ",
    description: "Chưa từng sao lưu dữ liệu website hoặc chỉ phụ thuộc vào cơ chế tự động không rõ ràng của host.",
    impact: "Nguy cơ mất trắng toàn bộ dữ liệu bài viết và giao diện khi máy chủ gặp sự cố.",
  },
  {
    id: 7,
    title: "Không ai chịu trách nhiệm theo dõi website",
    description: "Doanh nghiệp không có nhân sự chuyên môn phụ trách kiểm tra, rà soát sức khỏe website hằng tuần.",
    impact: "Khi xảy ra sự cố không biết xử lý từ đâu, tốn nhiều thời gian và chi phí tìm người sửa.",
  },
];

// S04: 6 Nhóm dịch vụ DUDI thực hiện
export const SERVICES_GROUP = [
  {
    number: "01",
    title: "Giám sát",
    shortDesc: "Theo dõi tình trạng website và uptime theo gói.",
    details: "Rà soát tính khả dụng của tên miền, chứng chỉ SSL và thời gian hoạt động để phát hiện sớm các gián đoạn.",
  },
  {
    number: "02",
    title: "Backup",
    shortDesc: "Backup theo tần suất của từng gói.",
    details: "Sao lưu toàn bộ cơ sở dữ liệu và mã nguồn định kỳ, lưu trữ an toàn để sẵn sàng khôi phục khi cần thiết.",
  },
  {
    number: "03",
    title: "Sửa lỗi",
    shortDesc: "Xử lý lỗi thuộc phạm vi và hạn mức.",
    details: "Khắc phục các lỗi mã nguồn, liên kết gãy, lỗi hiển thị giao diện và form liên hệ trong giới hạn giờ quy định.",
  },
  {
    number: "04",
    title: "Cập nhật",
    shortDesc: "Cập nhật nội dung, hệ thống và các thành phần trong phạm vi.",
    details: "Đăng tải bài viết, thay đổi banner, cập nhật phiên bản plugin và theme tương thích an toàn.",
  },
  {
    number: "05",
    title: "Bảo mật cơ bản",
    shortDesc: "SSL, cập nhật an toàn, quét và xử lý trong phạm vi gói.",
    details: "Duy trì chứng chỉ SSL hoạt động liên tục, quét mã độc định kỳ và kiểm tra các cấu hình phân quyền cơ bản.",
  },
  {
    number: "06",
    title: "Báo cáo & tư vấn",
    shortDesc: "Báo cáo công việc và tư vấn theo hạn mức.",
    details: "Tổng hợp các hạng mục đã hoàn thành trong tháng, thống kê lỗi đã xử lý và tư vấn định hướng cải tiến.",
  },
];

// S05: 3 Gói chăm sóc website chính xác
export const PRICING_PACKAGES = [
  {
    id: "basic",
    name: "Cơ bản",
    price: "500.000",
    priceUnit: "đ/tháng",
    suitableFor: "Web ít cập nhật",
    goal: "Duy trì cơ bản",
    badge: null,
    isPopular: false,
    summary: "Dành cho website giới thiệu ít biến động, cần duy trì ổn định và sao lưu dữ liệu an toàn.",
    keyPoints: [
      "Kiểm tra hệ thống: 1 lần/tháng",
      "Backup dữ liệu: 1 lần/tháng",
      "Phản hồi ban đầu: Trong 24 giờ làm việc",
      "Giờ sửa lỗi: Tối đa 1 giờ/tháng",
      "Cập nhật nội dung: 2 yêu cầu/tháng",
      "Tối ưu ảnh: Tối đa 10 ảnh/tháng",
      "SSL & cập nhật an toàn cơ bản",
      "Báo cáo tóm tắt công việc tháng",
    ],
    ctaText: "Chọn gói Cơ bản — 500.000đ/tháng",
  },
  {
    id: "standard",
    name: "Tiêu chuẩn",
    price: "1.500.000",
    priceUnit: "đ/tháng",
    suitableFor: "Web hoạt động thường xuyên",
    goal: "Vận hành ổn định",
    badge: "Được chọn nhiều",
    isPopular: true,
    summary: "Giải pháp tối ưu cho doanh nghiệp có hoạt động kinh doanh, tin tức và cập nhật thường xuyên.",
    keyPoints: [
      "Kiểm tra hệ thống: 2 lần/tháng",
      "Backup dữ liệu: 1 lần/tuần",
      "Theo dõi uptime: Tự động định kỳ (Cảnh báo Email)",
      "Phản hồi ban đầu: Trong 12 giờ làm việc",
      "Giờ sửa lỗi: Tối đa 3 giờ/tháng",
      "Cập nhật nội dung: 6 yêu cầu/tháng",
      "Chỉnh giao diện nhỏ: Trong hạn mức 2 giờ/tháng",
      "Tối ưu ảnh: Tối đa 30 ảnh/tháng",
      "Quét bảo mật định kỳ + Tối ưu cache",
      "Hỗ trợ SEO kỹ thuật: Meta + sitemap + index cơ bản",
      "Tư vấn 1 buổi/tháng (tối đa 30 phút)",
      "Báo cáo tháng cơ bản & theo dõi domain/hosting",
    ],
    ctaText: "Chọn gói Tiêu chuẩn — 1.500.000đ/tháng",
  },
  {
    id: "premium",
    name: "Cao cấp",
    price: "3.000.000",
    priceUnit: "đ/tháng",
    suitableFor: "Web là kênh kinh doanh chính",
    goal: "Ưu tiên vận hành & cải tiến",
    badge: null,
    isPopular: false,
    summary: "Dành cho website thương mại hoặc cổng dịch vụ quan trọng cần giám sát 24/7 và hỗ trợ ưu tiên.",
    keyPoints: [
      "Kiểm tra hệ thống: 1 lần/tuần",
      "Backup: Hằng ngày (nếu hosting hỗ trợ)",
      "Theo dõi uptime: Tự động 24/7 (Email + Zalo giờ hỗ trợ)",
      "Phản hồi ban đầu: Trong 2–4 giờ làm việc",
      "Giờ sửa lỗi: Tối đa 6 giờ/tháng",
      "Cập nhật nội dung: 12 yêu cầu/tháng",
      "Chỉnh giao diện nhỏ: Trong hạn mức 4 giờ/tháng",
      "Tối ưu ảnh: Tối đa 60 ảnh/tháng",
      "Rà soát code/server & Audit SEO kỹ thuật on-page",
      "Giám sát & xử lý sự cố trong phạm vi",
      "Tư vấn 1 buổi/tháng (tối đa 60 phút)",
      "Báo cáo chi tiết + backlog ưu tiên",
    ],
    ctaText: "Chọn gói Cao cấp — 3.000.000đ/tháng",
  },
];

// S05: Bảng so sánh 15 tiêu chí chi tiết
export const COMPARISON_CRITERIA = [
  {
    id: 1,
    name: "Kiểm tra hệ thống",
    basic: "1 lần/tháng",
    standard: "2 lần/tháng",
    premium: "1 lần/tuần",
  },
  {
    id: 2,
    name: "Backup dữ liệu",
    basic: "1 lần/tháng",
    standard: "1 lần/tuần",
    premium: "Hằng ngày (nếu hosting hỗ trợ)",
  },
  {
    id: 3,
    name: "Theo dõi uptime",
    basic: "Không",
    standard: "Tự động định kỳ",
    premium: "Tự động 24/7",
  },
  {
    id: 4,
    name: "Cảnh báo sự cố",
    basic: "Không",
    standard: "Email",
    premium: "Email + Zalo trong giờ hỗ trợ",
  },
  {
    id: 5,
    name: "Phản hồi ban đầu",
    basic: "Trong 24 giờ làm việc",
    standard: "Trong 12 giờ làm việc",
    premium: "Trong 2–4 giờ làm việc",
  },
  {
    id: 6,
    name: "Giờ sửa lỗi kỹ thuật",
    basic: "Tối đa 1 giờ/tháng",
    standard: "Tối đa 3 giờ/tháng",
    premium: "Tối đa 6 giờ/tháng",
  },
  {
    id: 7,
    name: "Cập nhật nội dung",
    basic: "2 yêu cầu/tháng",
    standard: "6 yêu cầu/tháng",
    premium: "12 yêu cầu/tháng",
  },
  {
    id: 8,
    name: "Chỉnh giao diện nhỏ",
    basic: "Không",
    standard: "Trong hạn mức 2 giờ/tháng",
    premium: "Trong hạn mức 4 giờ/tháng",
  },
  {
    id: 9,
    name: "Tối ưu ảnh tải lên",
    basic: "Tối đa 10 ảnh/tháng",
    standard: "Tối đa 30 ảnh/tháng",
    premium: "Tối đa 60 ảnh/tháng",
  },
  {
    id: 10,
    name: "Kiểm tra tốc độ",
    basic: "Kiểm tra lỗi rõ ràng",
    standard: "Cache + tối ưu cơ bản",
    premium: "Rà soát code/server trong quyền truy cập",
  },
  {
    id: 11,
    name: "Bảo mật",
    basic: "SSL + cập nhật an toàn cơ bản",
    standard: "Quét định kỳ + cập nhật",
    premium: "Giám sát + xử lý sự cố trong phạm vi",
  },
  {
    id: 12,
    name: "SEO kỹ thuật",
    basic: "Không",
    standard: "Meta + sitemap + lỗi index cơ bản",
    premium: "Audit on-page/kỹ thuật và đề xuất",
  },
  {
    id: 13,
    name: "Báo cáo định kỳ",
    basic: "Tóm tắt công việc",
    standard: "Báo cáo tháng cơ bản",
    premium: "Báo cáo chi tiết + backlog ưu tiên",
  },
  {
    id: 14,
    name: "Tư vấn chuyên môn",
    basic: "Không",
    standard: "1 buổi/tháng (tối đa 30 phút)",
    premium: "1 buổi/tháng (tối đa 60 phút)",
  },
  {
    id: 15,
    name: "Quản lý domain & hosting",
    basic: "Nhắc hạn nếu có dữ liệu",
    standard: "Theo dõi + hỗ trợ cấu hình",
    premium: "Theo dõi + phối hợp xử lý sự cố",
  },
];

// S05: Danh mục loại trừ (Không bao gồm)
export const EXCLUSIONS_DATA = [
  "Phí duy trì tên miền (domain), hosting, máy chủ và dịch vụ email doanh nghiệp.",
  "Phí bản quyền plugin, theme hoặc giấy phép (license) trả phí của bên thứ ba.",
  "Chi phí tích hợp dịch vụ bên thứ ba (cổng thanh toán, SMS OTP, AI API, CDN...).",
  "Viết mới nội dung bài viết chuẩn SEO hoặc biên tập văn bản thay cho khách hàng.",
  "Thiết kế lại toàn bộ giao diện website (Redesign) hoặc thay đổi kiến trúc website.",
  "Lập trình xây dựng tính năng mới hoặc module chức năng phức tạp.",
  "Di chuyển toàn bộ hệ thống sang nhà cung cấp máy chủ mới (Website Migration).",
  "Xử lý và dọn dẹp mã độc tồn đọng có sẵn từ trước thời điểm ký hợp đồng chăm sóc.",
  "Khôi phục dữ liệu trong trường hợp hệ thống không có bất kỳ bản sao lưu (backup) nào.",
  "Các công việc kỹ thuật vượt quá hạn mức giờ hoặc số lượng yêu cầu quy định trong tháng.",
];

// S06: Định nghĩa cách tính hạn mức
export const LIMITS_EXPLANATION = [
  {
    tag: "Một yêu cầu nội dung",
    title: "Quy chuẩn 01 yêu cầu đăng tải nội dung",
    description: "Một lần gửi tối đa cho 01 trang đơn lẻ, độ dài văn bản dưới 500 từ, số lượng hình ảnh theo hạn mức của gói đăng ký và khách hàng cung cấp nội dung hoàn chỉnh. Gửi cập nhật nhiều trang khác nhau sẽ được tính thành nhiều yêu cầu riêng biệt.",
  },
  {
    tag: "Một giờ kỹ thuật",
    title: "Cách tính thời lượng xử lý kỹ thuật",
    description: "Là thời gian làm việc thực tế của kỹ sư DUDI để phân tích nguyên nhân, viết mã sửa lỗi, kiểm thử trên môi trường thử nghiệm, triển khai (deploy) và ghi nhận log. DUDI luôn thông báo ước lượng trước cho khách nếu công việc dự kiến vượt quá hạn mức.",
  },
  {
    tag: "Chỉnh giao diện nhỏ",
    title: "Phạm vi chỉnh sửa giao diện",
    description: "Bao gồm thay đổi màu sắc, thay đổi văn bản, căn chỉnh khoảng cách (margin/padding), thay ảnh banner, thay đổi nút bấm hoặc sắp xếp lại bố cục nhỏ trong component hiện có. Không bao gồm thiết kế lại giao diện toàn trang hoặc làm lại component mới.",
  },
  {
    tag: "Lỗi thuộc phạm vi",
    title: "Định nghĩa lỗi nằm trong gói hỗ trợ",
    description: "Là các lỗi mã nguồn và cấu hình đang được DUDI trực tiếp quản lý và có thể tái hiện được trên môi trường tiêu chuẩn. Các lỗi phát sinh từ hạ tầng máy chủ bên thứ ba, sự cố mạng hoặc do bên ngoài can thiệp sẽ cần phối hợp và báo giá riêng.",
  },
  {
    tag: "Sự cố nghiêm trọng",
    title: "Quy chuẩn tiếp nhận sự cố khẩn cấp",
    description: "Các sự cố như website không truy cập được (downtime), cổng thanh toán bị lỗi, form đăng ký/kênh bán chính bị gián đoạn hoặc có dấu hiệu tấn công rõ ràng. Mức độ ưu tiên cao đồng nghĩa tiếp nhận ngay, không đồng nghĩa chắc chắn sửa xong trong mốc phản hồi ban đầu.",
  },
  {
    tag: "Phát triển tính năng mới",
    title: "Hạng mục phát triển bổ sung",
    description: "Bao gồm việc thêm trang giao diện mới, tạo template mới, tích hợp API ngoài, bổ sung phương thức thanh toán, hệ thống booking, phân quyền người dùng phức tạp hoặc tái cấu trúc kiến trúc. Các hạng mục này luôn được phân tích, ước lượng và báo giá riêng.",
  },
];

// S07: Quy trình tiếp nhận và xử lý 7 bước
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tiếp nhận ticket",
    desc: "Ghi nhận yêu cầu qua hệ thống ticket hoặc email chính thức để đảm bảo lưu vết và thông tin minh bạch.",
  },
  {
    step: "02",
    title: "Phân loại ưu tiên",
    desc: "Đánh giá mức độ ảnh hưởng (P1 đến P4) theo đúng cam kết SLA đã quy định trong hợp đồng.",
  },
  {
    step: "03",
    title: "Ước lượng & thông báo",
    desc: "Dự toán thời gian xử lý và kiểm tra hạn mức tháng. Nếu có khả năng vượt hạn mức, DUDI sẽ xin duyệt trước.",
  },
  {
    step: "04",
    title: "Xử lý kỹ thuật",
    desc: "Kỹ sư DUDI tiến hành sửa lỗi hoặc cập nhật trên môi trường an toàn theo quy chuẩn kỹ thuật.",
  },
  {
    step: "05",
    title: "Kiểm thử (Testing)",
    desc: "Kiểm tra kỹ lưỡng chức năng, tính tương thích responsive trên các trình duyệt và thiết bị phổ biến.",
  },
  {
    step: "06",
    title: "Khách hàng xác nhận",
    desc: "Thông báo kết quả hoàn thành để khách hàng nghiệm thu trực tiếp và đóng yêu cầu xử lý.",
  },
  {
    step: "07",
    title: "Ghi nhận báo cáo",
    desc: "Lưu trữ lịch sử xử lý vào nhật ký hệ thống và tổng hợp vào bảng báo cáo vận hành cuối tháng.",
  },
];

// S08: SLA và điều kiện hỗ trợ
export const SLA_LEVELS = [
  {
    level: "P1",
    name: "Nghiêm trọng",
    situation: "Website ngừng hoạt động (downtime), form hoặc kênh bán chính hỏng, dấu hiệu tấn công rõ ràng.",
    responseTarget: "Gói Cao cấp: 2–4 giờ làm việc. Gói khác: theo mốc phản hồi của gói.",
    output: "Khoanh vùng nguyên nhân, khôi phục tạm thời an toàn hoặc đưa phương án khắc phục ngay.",
    color: "red",
  },
  {
    level: "P2",
    name: "Mức độ cao",
    situation: "Lỗi chức năng quan trọng ảnh hưởng trải nghiệm người dùng nhưng website vẫn truy cập được.",
    responseTarget: "Theo mốc phản hồi ban đầu của gói đăng ký.",
    output: "Ước lượng thời gian sửa chữa và xếp lịch ưu tiên xử lý trong ngày làm việc.",
    color: "amber",
  },
  {
    level: "P3",
    name: "Bình thường",
    situation: "Chỉnh sửa nội dung, thay ảnh, cập nhật banner hoặc khắc phục lỗi hiển thị nhỏ trên giao diện.",
    responseTarget: "Theo mốc phản hồi ban đầu của gói đăng ký.",
    output: "Xử lý tuần tự theo lịch công việc định kỳ trong tháng.",
    color: "blue",
  },
  {
    level: "P4",
    name: "Cải tiến & tính năng",
    situation: "Tối ưu hóa hiệu năng, đề xuất nâng cấp hoặc yêu cầu phát triển thêm chức năng mới.",
    responseTarget: "Xác nhận phạm vi và trao đổi trong 1–2 ngày làm việc.",
    output: "Lập danh sách backlog hoặc gửi báo giá và lộ trình triển khai độc lập.",
    color: "emerald",
  },
];

export const SLA_CONDITIONS = [
  "Thời gian phản hồi và xử lý SLA chỉ tính trong khung giờ làm việc chính thức của DUDI.",
  "Hỗ trợ trực ngoài giờ chỉ áp dụng khi có thỏa thuận bằng văn bản hoặc phụ lục hợp đồng riêng.",
  "Đồng hồ cam kết SLA được tạm dừng khi chờ khách hàng cung cấp quyền truy cập máy chủ/website.",
  "Đồng hồ tạm dừng trong thời gian chờ khách hàng phản hồi xác nhận nội dung hoặc gửi tư liệu.",
  "Đồng hồ tạm dừng khi chờ thanh toán phí dịch vụ cho nhà cung cấp bên thứ ba (domain/hosting/plugin).",
  "DUDI tuyệt đối không bao giờ yêu cầu khách hàng nhập mật khẩu quản trị qua form đăng ký công khai.",
];

// S09: 4 Tình huống kỹ thuật thực tế
export const TECHNICAL_CASES = [
  {
    id: "01",
    title: "Khôi phục dữ liệu từ bản sao lưu (Backup Restore)",
    problem: "Website phát sinh lỗi trắng trang hoặc xung đột file sau khi khách tự động cập nhật hệ thống.",
    solution: "Kỹ sư DUDI truy xuất bản backup gần nhất, kiểm tra tính toàn vẹn và tiến hành khôi phục an toàn trong 45 phút.",
    result: "Hệ thống hoạt động ổn định trở lại, bảo toàn 100% dữ liệu bài viết và đơn hàng hiện có.",
  },
  {
    id: "02",
    title: "Khắc phục sự cố form liên hệ không gửi email",
    problem: "Khách điền thông tin tư vấn trên website nhưng hộp thư doanh nghiệp không nhận được thông báo.",
    solution: "Rà soát cấu hình SMTP, kiểm tra nhật ký gửi mail của máy chủ và cấu hình lại API xác thực bảo mật.",
    result: "Email gửi thử nghiệm thành công ngay lập tức, tỷ lệ nhận thông tin đạt độ tin cậy tuyệt đối.",
  },
  {
    id: "03",
    title: "Tối ưu hóa dung lượng hình ảnh nặng",
    problem: "Doanh nghiệp đăng tải nhiều ảnh chụp sản phẩm gốc dung lượng 4–8MB khiến trang tải rất chậm.",
    solution: "Chuyển đổi định dạng sang WebP chuẩn nén thế hệ mới, tối ưu kích thước hiển thị đúng tỷ lệ màn hình.",
    result: "Dung lượng tải trang giảm hơn 68%, tốc độ hiển thị hình ảnh trên điện thoại mượt mà rõ rệt.",
  },
  {
    id: "04",
    title: "Xử lý trang lỗi 500 & liên kết gãy 404",
    problem: "Người dùng truy cập vào các đường dẫn cũ bị báo lỗi 404, một số trang dịch vụ phát sinh lỗi máy chủ 500.",
    solution: "Kiểm tra log lỗi máy chủ, sửa cấu hình route và thiết lập chuyển hướng 301 tự động về trang đích chính xác.",
    result: "Triệt tiêu lỗi 500, trải nghiệm người dùng liền mạch và không bị mất lưu lượng truy cập tìm kiếm.",
  },
];

// S10: Câu hỏi thường gặp FAQ (10 câu hỏi chuẩn xác)
export const FAQS_DATA = [
  {
    id: 1,
    question: "DUDI có xử lý mọi lỗi trong phí tháng không?",
    answer: "Không. Phí gói chỉ bao gồm các công việc trong hạn mức giờ kỹ thuật và phạm vi dịch vụ đã chốt. Các yêu cầu làm tính năng mới, lỗi phát sinh do hạ tầng bên thứ ba hoặc công việc vượt quá hạn mức tháng sẽ được DUDI ước lượng và xin duyệt báo giá trước khi làm.",
  },
  {
    id: 2,
    question: "Thời gian phản hồi có phải thời gian sửa xong không?",
    answer: "Không. Thời gian phản hồi là mốc cam kết DUDI tiếp nhận, phân loại mức độ và đưa ra bước xử lý đầu tiên. Thời gian hoàn tất thực tế phụ thuộc vào nguyên nhân sự cố, quyền truy cập được cung cấp và mức độ phức tạp của từng trường hợp.",
  },
  {
    id: 3,
    question: "Phí gói đã gồm chi phí hosting, domain và plugin chưa?",
    answer: "Chưa. Các chi phí bản quyền tên miền, máy chủ lưu trữ (hosting) và plugin/theme trả phí sẽ do khách hàng thanh toán riêng cho nhà cung cấp hoặc DUDI báo trước chi phí mua/gia hạn minh bạch trước khi thực hiện.",
  },
  {
    id: 4,
    question: "Website đang nhiễm mã độc có nhận ngay theo gói chăm sóc không?",
    answer: "DUDI cần thực hiện kiểm tra sơ bộ ban đầu. Việc dọn dẹp mã độc, vá lỗ hổng hoặc khôi phục hệ thống đã bị tổn hại từ trước khi ký hợp đồng có thể được báo giá xử lý một lần, sau đó website mới chuyển sang chế độ chăm sóc định kỳ.",
  },
  {
    id: 5,
    question: "Hạn mức giờ và yêu cầu còn dư có được cộng dồn sang tháng sau không?",
    answer: "Mặc định toàn bộ hạn mức sẽ được làm mới (reset) vào đầu mỗi chu kỳ tháng và không cộng dồn sang tháng tiếp theo, trừ trường hợp hợp đồng ký kết giữa hai bên có thỏa thuận điều khoản riêng bằng văn bản.",
  },
  {
    id: 6,
    question: "DUDI có yêu cầu nhập mật khẩu qua form đăng ký trên website không?",
    answer: "Tuyệt đối không. Form đăng ký công khai của DUDI chỉ thu thập thông tin tên miền và nhu cầu hỗ trợ. Quyền truy cập quản trị website sẽ được bàn giao qua kênh trao đổi bảo mật riêng sau khi hai bên đã xác minh thông tin pháp lý.",
  },
  {
    id: 7,
    question: "Tôi đang dùng mã nguồn WordPress thì DUDI có hỗ trợ không?",
    answer: "Có. DUDI hỗ trợ đầy đủ các hệ thống website phổ biến như WordPress, Laravel, React, Node.js cũng như các website viết bằng mã nguồn riêng sau khi chuyên viên kỹ thuật tiến hành khảo sát cấu trúc hệ thống.",
  },
  {
    id: 8,
    question: "Tôi có thể nâng cấp hoặc thay đổi gói trong quá trình sử dụng không?",
    answer: "Có. Quý khách có thể yêu cầu chuyển đổi hoặc nâng cấp gói dịch vụ bất kỳ lúc nào để phù hợp với quy mô phát triển của doanh nghiệp. Hạn mức mới sẽ được áp dụng ngay từ chu kỳ thanh toán tiếp theo.",
  },
  {
    id: 9,
    question: "Công việc vượt quá hạn mức giờ hoặc số lượng yêu cầu được tính thế nào?",
    answer: "Khi một yêu cầu có khả năng vượt hạn mức tháng, kỹ sư DUDI sẽ phân tích và gửi thông báo ước lượng thời gian bổ sung. DUDI chỉ triển khai sau khi khách hàng đã xem xét và đồng ý với phương án chi phí đề xuất.",
  },
  {
    id: 10,
    question: "Doanh nghiệp có thể tạm dừng hoặc chấm dứt dịch vụ như thế nào?",
    answer: "Quý khách chỉ cần thông báo trước cho DUDI bằng văn bản hoặc email tối thiểu 15 ngày làm việc trước khi chu kỳ tiếp theo bắt đầu. DUDI sẽ bàn giao đầy đủ báo cáo, bản backup mới nhất và thu hồi quyền quản trị an toàn.",
  },
];
