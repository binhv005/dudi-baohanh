// Single Source of Truth for DUDI Pricing Packages according to Guide.md
export const PACKAGES = [
  {
    id: "basic",
    name: "Cơ bản",
    price: "3.000.000đ",
    priceLabel: "Từ",
    recommended: false,
    badge: "Tiết kiệm chi phí",
    target: "Hộ kinh doanh, cá nhân",
    objective: "Có website giới thiệu cơ bản, tinh gọn",
    scope: [
      "Tối đa 4 trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ",
      "UI dùng mẫu có sẵn: Đổi màu, font, ảnh, bố cục nhẹ",
      "Responsive toàn bộ phạm vi thiết bị",
      "Form liên hệ cơ bản nhận email/thông báo",
      "Không có trang quản trị (Admin CMS)",
      "Không có blog / tin tức",
      "Không có module dự án / khách hàng",
      "SEO kỹ thuật tối thiểu (Title, Meta, Sitemap, Robots, nén ảnh, lazy-load cơ bản)",
      "Khả năng mở rộng giới hạn theo mẫu có sẵn"
    ],
    ctaText: "Chọn gói Cơ bản — từ 3.000.000đ",
    leadPackageVal: "Cơ bản"
  },
  {
    id: "standard",
    name: "Tiêu chuẩn",
    price: "7.000.000đ",
    priceLabel: "Từ",
    recommended: true,
    badge: "Phổ biến & Khuyên dùng",
    target: "Doanh nghiệp nhỏ & vừa",
    objective: "Hình ảnh chuyên nghiệp, tự quản trị nội dung",
    scope: [
      "Tối đa 6 trang: Thêm Blog & Trang chi tiết dịch vụ",
      "Bố cục theo lĩnh vực, tinh chỉnh component chuyên sâu",
      "Responsive hoàn thiện đa thiết bị (Mobile, Tablet, Desktop)",
      "Form liên hệ theo nhu cầu, lưu nguồn lead",
      "Hệ thống CRUD bài viết/dịch vụ cơ bản (1 loại nội dung, field cố định, danh mục 1 cấp)",
      "Trang Blog kèm danh mục 1 cấp",
      "01 trang dự án/khách hàng tĩnh (nếu khách hàng cung cấp dữ liệu)",
      "SEO: Title, Meta, Heading, Canonical, Sitemap, Robots, tối ưu tài nguyên cơ bản",
      "Hỗ trợ gắn mã Google Analytics 4 (GA4) nếu khách cung cấp",
      "Khả năng mở rộng: Thêm module tương thích sau này"
    ],
    ctaText: "Chọn gói Tiêu chuẩn — từ 7.000.000đ",
    leadPackageVal: "Tiêu chuẩn"
  },
  {
    id: "premium",
    name: "Cao cấp",
    price: null,
    priceLabel: "Báo giá theo nhu cầu",
    recommended: false,
    badge: "Thiết kế & Tính năng riêng",
    target: "Doanh nghiệp cần phát triển & định vị",
    objective: "Định vị thương hiệu và tối ưu thu lead",
    scope: [
      "8–12 trang: Sitemap chốt theo nhu cầu (Landing dịch vụ, dự án, đối tác...)",
      "UI thiết kế riêng biệt theo bộ nhận diện thương hiệu cung cấp",
      "Responsive tối ưu luồng chuyển đổi người dùng (CRO)",
      "Luồng form thu lead riêng, logic tùy biến đã thống nhất",
      "CRUD nhiều loại nội dung: Quản lý đa trường, danh mục tối đa 2 cấp, trạng thái Draft/Published",
      "Module Blog đa cấp + Danh sách & chi tiết Dự án/Khách hàng",
      "SEO On-page toàn diện, cấu trúc Schema JSON-LD phù hợp, tối ưu kỹ thuật",
      "Tích hợp GA4 & tracking sự kiện CTA/Form nếu khách cung cấp",
      "Kiến trúc module hóa linh hoạt theo phạm vi ký kết"
    ],
    ctaText: "Gửi nhu cầu để nhận báo giá",
    leadPackageVal: "Cao cấp"
  }
];

export const PRICING_DISCLAIMER = {
  title: "Lưu ý quan trọng về chi phí & phạm vi:",
  mainNote: "Giá 3.000.000đ và 7.000.000đ là giá tham khảo trọn gói theo dự án, thanh toán một lần (không phải phí duy trì hàng tháng / không phải subscription). Gói Cao cấp được báo giá chính xác sau khi chốt sitemap, chức năng và phạm vi chi tiết.",
  exclusions: [
    "Tên miền (Domain), máy chủ lưu trữ (Hosting), Email doanh nghiệp.",
    "Chứng chỉ/giấy phép trả phí, plugin/theme license bản quyền bên thứ ba.",
    "Chi phí viết bài/chụp ảnh toàn bộ nội dung, dịch thuật đa ngôn ngữ, nhập liệu thủ công số lượng lớn.",
    "Chạy quảng cáo, dịch vụ SEO thứ hạng định kỳ.",
    "Các hệ thống nghiệp vụ phức tạp (Booking đặt lịch chuyên sâu, sàn TMĐT, cổng thanh toán ngân hàng, cổng thành viên/membership, ERP/CRM phức tạp)."
  ]
};

export const GLOSSARY_TERMS = [
  {
    term: "Giao diện có sẵn",
    meaning: "Template/component có sẵn, thay màu, font, ảnh, bố cục nhẹ. Không bao gồm thiết kế UI độc quyền từ đầu."
  },
  {
    term: "CRUD cơ bản",
    meaning: "Tạo, Xem, Sửa, Xóa 01 loại nội dung với trường dữ liệu cố định và danh mục 1 cấp."
  },
  {
    term: "CRUD nâng cao",
    meaning: "Nhiều loại nội dung, trường tùy biến đã chốt, danh mục tối đa 2 cấp, trạng thái Draft/Published. Không phải Visual Page Builder kéo thả tùy biến không giới hạn."
  },
  {
    term: "SEO cơ bản",
    meaning: "Cấu hình kỹ thuật Title, Meta description, Headings, Canonical, Sitemap.xml, Robots.txt, Alt ảnh, URL thân thiện."
  },
  {
    term: "SEO On-page",
    meaning: "Audit và cấu hình Technical/Content SEO trong phạm vi số trang đã chốt (không cam kết ranking, không kèm backlink hay bài viết định kỳ)."
  },
  {
    term: "Thu lead nâng cao",
    meaning: "Form đa trường, lưu UTM, Referrer, Event Tracking, chuyển lead về kênh thống nhất (không mặc định tặng kèm phần mềm CRM trả phí)."
  },
  {
    term: "Tối ưu tốc độ",
    meaning: "Nén ảnh, Lazy-load, tối ưu cache/CSS/JS. Tốc độ thực tế phụ thuộc hosting, chất lượng mạng và script bên thứ ba của khách hàng."
  }
];
