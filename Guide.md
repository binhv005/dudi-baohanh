# MASTER PROMPT — BUILD DUDI WEBSITE CARE LANDING PAGE

Bạn là một **Senior Product Designer + Senior UI/UX Designer + Senior Frontend Engineer + Senior Backend Engineer + QA Engineer + Accessibility Specialist + Performance Specialist**.

Bạn đang làm việc trong **Google Antigravity**.

Dự án phải sử dụng và tuân thủ **UI/UX Pro Max** như một design intelligence system, không chỉ sử dụng nó như một nguồn tham khảo màu sắc.

Mục tiêu là xây dựng một landing page production-ready cho:

**Công ty TNHH Giải Pháp Phần Mềm DUDI**

Dịch vụ:

**Chăm sóc & vận hành website theo tháng**

---

# 0. CRITICAL EXECUTION RULES

## 0.1 KHÔNG CODE NGAY

Không được bắt đầu viết UI/code ngay khi đọc prompt.

Trước tiên phải:

1. Phân tích toàn bộ requirements.
2. Xác định product type.
3. Xác định target audience.
4. Xác định business goal.
5. Xác định primary conversion.
6. Xác định secondary conversion.
7. Xác định critical user flows.
8. Xác định content hierarchy.
9. Xác định visual direction.
10. Xác định UX risks.
11. Xác định accessibility requirements.
12. Xác định responsive requirements.
13. Xác định performance requirements.
14. Xác định technical stack.
15. Sau đó mới generate design system.

---

# 1. UI/UX PRO MAX — BẮT BUỘC SỬ DỤNG

UI/UX Pro Max phải được coi là **design intelligence engine chính của project**.

Không chỉ nói:

> "Use UI/UX Pro Max."

Mà phải thực sự thực hiện workflow của UI/UX Pro Max.

Workflow bắt buộc:

**Analyze Requirements**
→ **Generate Design System**
→ **Persist Design System**
→ **Detailed Domain Search**
→ **Stack-Specific Search**
→ **Information Architecture**
→ **UI Design**
→ **Implementation**
→ **UX Review**
→ **Accessibility Review**
→ **Performance Review**
→ **Responsive Review**
→ **Final QA**

UI/UX Pro Max khuyến nghị project mới phải bắt đầu bằng design-system generation, sử dụng các domain như product, style, color, landing và typography, sau đó bổ sung các domain cụ thể và stack-specific guidance.

---

# 2. UI/UX PRO MAX — PROJECT ANALYSIS

Trước khi tạo design system, hãy xác định:

## Product type

Service / B2B / SaaS-like website service / Website maintenance / Technical support / Subscription service.

## Industry

Software / IT Services / Website Maintenance / Digital Services.

## Target audience

* Chủ doanh nghiệp nhỏ
* Hộ kinh doanh
* Doanh nghiệp có website
* Người không có đội kỹ thuật nội bộ
* Người cần người theo dõi website
* Người cần bảo trì website định kỳ

## Primary user goal

Muốn biết:

> "Website của tôi có thể được DUDI chăm sóc như thế nào và tôi nên chọn gói nào?"

## Primary business goal

Thu lead bằng:

**Địa chỉ website + nhu cầu chăm sóc website**

## Secondary business goals

* Zalo
* Hotline

## UX tone

* Professional
* Trustworthy
* Technical but understandable
* Clear
* Calm
* Premium
* B2B
* Conversion-focused
* Transparent

Không tạo cảm giác:

* quá corporate
* quá lạnh
* quá futuristic
* AI-generated
* gaming
* crypto
* startup hype
* SaaS template generic

---

# 3. UI/UX PRO MAX — DESIGN DIRECTION

Không chọn style chỉ vì nó đang trendy.

Design direction phải dựa trên:

**Product + Audience + Business Goal + Content Density + Trust Requirement**

Thiết lập 3 design dials:

### Variance

Mức trung bình.

Khoảng:

**4–6 / 10**

Layout có hierarchy rõ nhưng không quá phá cách.

### Motion

Thấp đến trung bình.

Khoảng:

**2–4 / 10**

Animation chỉ phục vụ:

* feedback
* hierarchy
* transition
* orientation

Không dùng animation chỉ để trang trí.

### Density

Trung bình.

Khoảng:

**4–6 / 10**

Landing page phải có khoảng thở nhưng vẫn đủ information density để giải thích:

* pricing
* limits
* SLA
* scope
* exclusions

Không biến landing page thành dashboard.

---

# 4. GENERATE DESIGN SYSTEM — REQUIRED

Bắt buộc chạy UI/UX Pro Max design system generator trước implementation.

Sử dụng query giàu ngữ cảnh, không dùng query quá chung chung.

Query nên bao gồm:

* B2B
* website maintenance
* IT service
* SaaS-like service
* professional
* trustworthy
* conversion-focused
* technical support
* clean
* modern
* premium
* transparent pricing

Ví dụ concept query:

```text
B2B website maintenance IT service professional trustworthy modern premium transparent pricing conversion-focused
```

Sau đó sử dụng:

```bash
--design-system
```

Design system phải trả về / xác định:

* Product pattern
* UI style
* Color palette
* Typography
* Font pairing
* Spacing
* Border radius
* Shadows/elevation
* Buttons
* Cards
* Forms
* CTA hierarchy
* Landing structure
* Interaction
* Motion
* UX rules
* Anti-patterns

Không tự ý bỏ qua recommendations của UI/UX Pro Max.

Nếu requirement DUDI xung đột với recommendation UI/UX Pro Max:

**Business requirement của DUDI được ưu tiên.**

Nhưng phải giữ UX/accessibility quality.

---

# 5. PERSIST DESIGN SYSTEM

Sau khi generate design system:

Bắt buộc persist design system vào project.

Tạo:

```text
design-system/
```

và:

```text
design-system/MASTER.md
```

MASTER.md là:

**GLOBAL SOURCE OF TRUTH**

Nó phải chứa:

* visual direction
* design style
* color tokens
* semantic colors
* typography
* font pairing
* type scale
* line height
* spacing scale
* radius scale
* shadow/elevation scale
* button variants
* input variants
* card variants
* badge variants
* pricing-card rules
* CTA rules
* icon rules
* motion rules
* accessibility rules
* responsive rules
* layout rules
* anti-patterns
* implementation notes

Nếu UI/UX Pro Max version hiện tại yêu cầu output directory hoặc project slug, hãy đặt output vào **project root** và không ghi nhầm design-system sang thư mục làm việc khác. Tài liệu hiện tại cũng khuyến nghị đọc MASTER hiện có trước khi regenerate và không dùng `--force` nếu chưa được người dùng cho phép.

---

# 6. DESIGN SYSTEM — MASTER RULE

Mọi UI component sau đó phải tuân thủ:

```text
design-system/MASTER.md
```

Không được:

* tự chọn màu khác
* tự chọn font khác
* tự chọn radius khác
* tự chọn shadow khác
* tự tạo button style khác
* tự tạo card style khác
* tự tạo icon style khác

nếu không có lý do rõ ràng.

Nếu cần deviation:

ghi lại vào page-specific override.

---

# 7. PAGE-SPECIFIC DESIGN SYSTEM

Landing page này là:

```text
landing-page
```

Nếu UI/UX Pro Max hỗ trợ page-specific persistence:

tạo:

```text
design-system/pages/landing-page.md
```

File này chỉ chứa:

* deviation
* section-specific rules
* landing-specific behavior
* pricing-specific behavior
* hero-specific behavior
* form-specific behavior

Không duplicate toàn bộ MASTER.

Khi implement:

1. Đọc `MASTER.md`.
2. Kiểm tra `pages/landing-page.md`.
3. Nếu có page override → page override được ưu tiên.
4. Nếu không → dùng MASTER.

Đây là hierarchical retrieval pattern được UI/UX Pro Max khuyến nghị.

---

# 8. DETAILED UI/UX PRO MAX SEARCH

Sau design-system generation, phải supplement bằng các domain search phù hợp.

## Product search

Tìm guidance cho:

```text
B2B website maintenance IT service subscription
```

Domain:

```text
product
```

---

## Style search

Tìm style phù hợp:

```text
professional B2B IT service clean trustworthy premium
```

Domain:

```text
style
```

Không mặc định:

* glassmorphism
* neumorphism
* brutalism
* cyberpunk
* excessive gradient

chỉ vì chúng phổ biến.

---

# 9. COLOR SEARCH

Tìm palette phù hợp với:

* IT
* B2B
* technical service
* trustworthy
* professional
* conversion

Domain:

```text
color
```

Color system phải dùng semantic tokens:

```text
primary
primary-hover
primary-active
secondary
surface
surface-muted
background
text
text-secondary
border
focus
success
warning
error
info
```

Không hard-code raw colors khắp component.

UI/UX Pro Max khuyến nghị semantic color tokens thay vì raw hex trong component và yêu cầu kiểm tra contrast riêng cho foreground/background.

---

# 10. TYPOGRAPHY SEARCH

Search:

```text
professional modern B2B technology service typography
```

Domain:

```text
typography
```

Typography phải:

* dễ đọc
* professional
* không quá futuristic
* không decorative quá mức
* hỗ trợ tiếng Việt tốt

Phải xác định:

* display
* H1
* H2
* H3
* H4
* body
* body-small
* label
* caption
* button
* price
* badge

Body text:

ưu tiên khoảng:

**16px**

với line-height thoải mái.

Body copy nên giới hạn line length để tránh paragraph quá rộng.

UI/UX Pro Max cũng khuyến nghị hierarchy phải dựa trước hết vào size, weight, spacing và placement, thay vì phụ thuộc quá nhiều vào màu.

---

# 11. LANDING SEARCH

Search:

```text
B2B service landing page hero pricing CTA trust FAQ conversion
```

Domain:

```text
landing
```

Phải dùng kết quả để tối ưu:

* Hero
* CTA
* Pricing
* trust
* comparison
* FAQ
* final CTA
* conversion flow

Nhưng không được thay đổi business requirements của DUDI.

---

# 12. UX SEARCH

Bắt buộc search UX cho:

```text
landing page accessibility form validation pricing cards CTA FAQ responsive animation
```

Domain:

```text
ux
```

Phải đặc biệt tìm guidance về:

* accessibility
* touch targets
* form validation
* loading
* error handling
* feedback
* motion
* z-index
* responsive
* navigation
* CTA
* pricing
* reduced motion

Accessibility và touch/interaction phải được coi là critical priority. UI/UX Pro Max phân loại accessibility và touch/interaction ở mức ưu tiên cao nhất.

---

# 13. STACK SEARCH

Nếu project sử dụng React + Tailwind:

Bắt buộc tìm stack-specific guidance:

```text
responsive landing performance components forms accessibility
```

với:

```text
--stack react
```

và nếu có HTML/Tailwind-specific concerns:

```text
--stack html-tailwind
```

Không được giả định stack nếu repository đã có stack thực tế.

Hãy inspect project trước.

Nếu project là React:

ưu tiên React guidance.

Nếu project là Next.js:

ưu tiên Next.js guidance.

Nếu project dùng HTML/Tailwind:

ưu tiên HTML + Tailwind guidance.

UI/UX Pro Max hiện hỗ trợ các stack như React, Next.js, HTML+Tailwind và nhiều stack khác.

---

# 14. UI/UX PRO MAX ANTI-PATTERN CHECK

Không được sử dụng:

* emoji làm functional icon
* icon không cùng visual language
* random border radius
* random shadows
* random colors
* random fonts
* excessive gradients
* excessive glassmorphism
* excessive rounded cards
* decorative animation
* layout shift
* tiny text
* low contrast
* placeholder-only labels
* unclear error messages
* color-only status
* giant empty areas
* excessive cards
* excessive badges
* generic SaaS template appearance

Functional icons phải dùng:

**SVG / Lucide / consistent icon system**

Không dùng emoji như icon chức năng.

UI/UX Pro Max đặc biệt nhấn mạnh icon consistency và không dùng emoji làm functional icons.

---

# 15. ICON SYSTEM

Chỉ sử dụng một icon family nhất quán.

Nếu project đã có:

**Lucide React**

thì dùng Lucide.

Không trộn:

* Lucide
* Font Awesome
* emoji
* random SVG
* Material icons

trong cùng UI nếu không có lý do.

Icon phải thống nhất:

* stroke width
* size
* visual weight
* alignment
* corner treatment

---

# 16. SPACING SYSTEM

Không sử dụng spacing tùy ý.

Tạo spacing tokens.

Ví dụ:

```text
space-1
space-2
space-3
space-4
space-6
space-8
space-10
space-12
space-16
space-20
space-24
```

Các section phải có rhythm nhất quán.

Mobile spacing phải giảm hợp lý.

Desktop không được tạo khoảng trống khổng lồ chỉ để làm trang "premium".

---

# 17. LAYOUT SYSTEM

Landing page phải có:

* max-width container
* consistent horizontal gutters
* clear grid
* responsive breakpoints
* predictable section rhythm

Không hard-code layout theo một kích thước màn hình duy nhất.

Phải hỗ trợ:

* 360
* 390
* 768
* 1024
* 1440

---

# 18. RESPONSIVE DESIGN PRINCIPLES

Mobile không phải bản desktop thu nhỏ.

Phải thiết kế lại:

* navigation
* pricing
* hero
* cards
* tables
* FAQ
* form
* CTA

Pricing:

desktop:

3 columns.

Mobile:

1 column.

Comparison table nếu có:

phải có phương án mobile dễ đọc.

Không cho phép:

horizontal overflow toàn trang.

---

# 19. TOUCH INTERACTION

Touch target phải đủ lớn.

Không đặt:

* button quá nhỏ
* icon button quá nhỏ
* close button quá nhỏ
* link quá sát nhau

Mobile CTA phải dễ chạm.

Hover không được là cách duy nhất để hiểu trạng thái.

Phải có:

* hover
* focus
* active/pressed
* disabled
* loading

khi phù hợp.

---

# 20. STATE SYSTEM

Mỗi interactive component phải xác định:

* default
* hover
* focus
* active
* disabled
* loading
* success
* error

Form:

* idle
* focused
* invalid
* submitting
* success
* server error

Pricing CTA:

* default
* hover
* active
* focus
* loading nếu có

FAQ:

* collapsed
* expanded
* focus

---

# 21. MOTION SYSTEM

Motion phải purposeful.

Ưu tiên khoảng:

**150–300ms**

cho micro-interactions thông thường.

Không animate:

* layout-heavy properties
* width/height lớn nếu không cần
* toàn bộ page
* mọi element cùng lúc

Ưu tiên:

* opacity
* transform
* color
* shadow nhẹ

Phải hỗ trợ:

```css
prefers-reduced-motion
```

Nếu user bật reduced motion:

giảm hoặc loại bỏ decorative animation.

UI/UX Pro Max cũng khuyến nghị motion có mục đích, transition khoảng 150–300ms và phải có reduced-motion behavior.

---

# 22. TYPOGRAPHY RULES

Body:

khoảng 16px.

Line-height:

khoảng 1.5–1.75 nếu phù hợp với font.

Paragraph:

không quá rộng.

Heading:

hierarchy rõ.

Không dùng:

* quá nhiều font
* quá nhiều font-weight
* uppercase toàn bộ paragraph
* text quá nhỏ
* light gray text trên white background

Contrast phải đạt:

**WCAG AA**

Foreground/background thông thường:

ít nhất:

**4.5:1**

Text lớn có thể áp dụng yêu cầu tương ứng.

UI/UX Pro Max cũng đặt emphasis vào 4.5:1 AA / 7:1 AAA khi phù hợp.

---

# 23. SEMANTIC COLOR SYSTEM

Không sử dụng:

```css
color: #xxxxxx;
```

tràn lan trong components.

Thay vào đó:

```text
--color-primary
--color-primary-hover
--color-primary-active
--color-background
--color-surface
--color-surface-muted
--color-text
--color-text-secondary
--color-border
--color-focus
--color-success
--color-warning
--color-error
```

Các semantic colors phải được mapping từ design system.

---

# 24. FORM DESIGN

Form phải:

* label rõ
* helper text khi cần
* validation local
* error local
* focus visible
* success feedback
* loading state
* disabled state
* keyboard accessible

Không sử dụng:

> placeholder làm label duy nhất.

Error phải nằm gần field.

Không chỉ hiển thị:

> "Có lỗi xảy ra"

ở đầu trang.

Phải chỉ rõ field nào lỗi.

Forms và feedback là một trong các UX areas mà UI/UX Pro Max yêu cầu persistent labels, local errors, summaries và recovery.

---

# 25. PRICING UX

Pricing là critical conversion area.

Phải giúp user trả lời nhanh:

* Gói nào?
* Giá bao nhiêu?
* Phù hợp với ai?
* Có bao nhiêu giờ?
* Có bao nhiêu yêu cầu?
* Phản hồi bao lâu?
* Có gì không bao gồm?

Không dùng visual trick gây hiểu nhầm.

Gói Tiêu chuẩn nổi bật nhưng không được làm hai gói còn lại trông như disabled.

Highlight phải thể hiện:

**Recommended / Phù hợp nhiều website**

chứ không tạo cảm giác ép mua.

---

# 26. HERO UX

Hero phải trả lời trong vài giây:

1. DUDI làm gì?
2. Dành cho ai?
3. Giá từ bao nhiêu?
4. Tôi phải làm gì tiếp?

CTA chính phải rõ nhất.

Không dùng quá nhiều CTA cạnh tranh.

Hero visual phải hỗ trợ message.

Không để visual lấn át H1.

---

# 27. INFORMATION ARCHITECTURE

Landing page gồm đúng:

```text
S01 Header
S02 Hero
S03 Dấu hiệu cần chăm sóc
S04 DUDI thực hiện
S05 Bảng gói
S06 Cách tính hạn mức
S07 Quy trình xử lý
S08 Cam kết SLA
S09 Case / tình huống
S10 FAQ
S11 Form kiểm tra website
S12 CTA cuối
S13 Footer
```

Không tự ý xóa section.

Có thể cải thiện layout trong section nhưng không được làm mất nội dung.

---

# 28. BUSINESS REQUIREMENTS

## Dịch vụ

Landing page bán:

### Cơ bản

500.000đ/tháng

### Tiêu chuẩn

1.500.000đ/tháng

### Cao cấp

3.000.000đ/tháng

---

# 29. NGUYÊN TẮC BÁN GÓI

Dịch vụ được bán theo:

* hạn mức giờ
* số yêu cầu mỗi tháng
* tần suất kiểm tra
* tần suất backup

Không sử dụng:

**"không giới hạn"**

Không cam kết:

* uptime tuyệt đối
* chống mọi cuộc tấn công
* top Google
* PageSpeed tuyệt đối
* thời gian xử lý tuyệt đối

---

# 30. MỤC TIÊU CHUYỂN ĐỔI

Primary:

Khách gửi website để DUDI kiểm tra.

Secondary:

* Zalo
* hotline

Landing page phải giải thích:

* DUDI theo dõi gì
* DUDI bảo trì gì
* DUDI hỗ trợ gì
* phạm vi từng gói
* phản hồi khác hoàn tất
* thông tin cần cung cấp

---

# 31. S01 — HEADER

Mục tiêu:

* nhận diện
* liên hệ

Desktop:

* logo trái
* navigation giữa
* hotline/Zalo + CTA phải

Mobile:

* logo
* CTA
* collapsed menu

Yêu cầu:

* anchor không bị header che
* tel hoạt động
* mailto hoạt động
* Zalo hoạt động
* CTA tới đúng form

---

# 32. S02 — HERO

H1 duy nhất:

**“Website luôn ổn định mà không cần nuôi đội kỹ thuật.”**

Description:

**“DUDI kiểm tra, backup, sửa lỗi và cập nhật theo hạn mức rõ ràng.”**

Giá:

**Từ 500.000đ/tháng**

Primary CTA:

**“Gửi website để DUDI kiểm tra”**

Secondary CTA:

**“Xem các gói”**

Visual:

* website monitoring
* backup
* technical support
* dashboard

Không tạo visual thể hiện uptime tuyệt đối.

---

# 33. S03 — DẤU HIỆU CẦN CHĂM SÓC

Hiển thị 5–7 dấu hiệu:

1. Web đôi lúc không truy cập.
2. Form không gửi.
3. Plugin quá hạn.
4. Nội dung cũ.
5. Ảnh nặng.
6. Không có backup.
7. Không ai chịu trách nhiệm theo dõi website.

Không fear-mongering.

Không nói:

* chắc chắn bị hack
* chắc chắn mất dữ liệu
* không mua sẽ bị hack

---

# 34. S04 — DUDI THỰC HIỆN

6 nhóm:

1. Giám sát
2. Backup
3. Sửa lỗi
4. Cập nhật
5. Bảo mật cơ bản
6. Báo cáo/tư vấn

Mỗi nhóm phải liên kết logic với pricing.

Không mô tả ngoài phạm vi.

---

# 35. S05 — BẢNG GÓI

Ba card:

## Cơ bản

500.000đ/tháng

## Tiêu chuẩn

1.500.000đ/tháng

## Cao cấp

3.000.000đ/tháng

Tiêu chuẩn nổi bật.

Mỗi card:

* price
* suitable for
* goal
* limits
* response time
* scope
* CTA

CTA:

**“Chọn gói Cơ bản — 500.000đ/tháng”**

**“Chọn gói Tiêu chuẩn — 1.500.000đ/tháng”**

**“Chọn gói Cao cấp — 3.000.000đ/tháng”**

Click → form → auto-select package.

---

# 36. PHẠM VI 3 GÓI

Đây là SOURCE OF TRUTH.

| Hạng mục               | Cơ bản                        | Tiêu chuẩn                        | Cao cấp                                  |
| ---------------------- | ----------------------------- | --------------------------------- | ---------------------------------------- |
| Phù hợp                | Web ít cập nhật               | Web hoạt động thường xuyên        | Web là kênh kinh doanh chính             |
| Mục tiêu               | Duy trì cơ bản                | Vận hành ổn định                  | Ưu tiên vận hành & cải tiến              |
| Kiểm tra hệ thống      | 1 lần/tháng                   | 2 lần/tháng                       | 1 lần/tuần                               |
| Backup                 | 1 lần/tháng                   | 1 lần/tuần                        | Hằng ngày nếu hosting hỗ trợ             |
| Theo dõi uptime        | Không                         | Tự động định kỳ                   | Tự động 24/7                             |
| Cảnh báo               | Không                         | Email                             | Email + Zalo trong giờ hỗ trợ            |
| Phản hồi ban đầu       | Trong 24 giờ làm việc         | Trong 12 giờ làm việc             | Trong 2–4 giờ làm việc                   |
| Giờ sửa lỗi            | Tối đa 1 giờ/tháng            | Tối đa 3 giờ/tháng                | Tối đa 6 giờ/tháng                       |
| Cập nhật nội dung      | 2 yêu cầu/tháng               | 6 yêu cầu/tháng                   | 12 yêu cầu/tháng                         |
| Chỉnh giao diện nhỏ    | Không                         | Trong hạn mức 2 giờ/tháng         | Trong hạn mức 4 giờ/tháng                |
| Tối ưu ảnh             | Tối đa 10 ảnh/tháng           | Tối đa 30 ảnh/tháng               | Tối đa 60 ảnh/tháng                      |
| Tốc độ                 | Kiểm tra lỗi rõ ràng          | Cache + tối ưu cơ bản             | Rà soát code/server trong quyền truy cập |
| Bảo mật                | SSL + cập nhật an toàn cơ bản | Quét định kỳ + cập nhật           | Giám sát + xử lý sự cố trong phạm vi     |
| SEO kỹ thuật           | Không                         | Meta + sitemap + lỗi index cơ bản | Audit on-page/kỹ thuật và đề xuất        |
| Báo cáo                | Tóm tắt công việc             | Báo cáo tháng cơ bản              | Báo cáo chi tiết + backlog ưu tiên       |
| Tư vấn                 | Không                         | 1 buổi/tháng, tối đa 30 phút      | 1 buổi/tháng, tối đa 60 phút             |
| Quản lý domain/hosting | Nhắc hạn nếu có dữ liệu       | Theo dõi + hỗ trợ cấu hình        | Theo dõi + phối hợp xử lý sự cố          |
| Giá                    | 500.000đ/tháng                | 1.500.000đ/tháng                  | 3.000.000đ/tháng                         |

---

# 37. KHÔNG BAO GỒM

Không bao gồm:

* domain
* hosting
* email
* plugin/license
* dịch vụ bên thứ ba
* viết bài SEO
* thiết kế lại trang
* xây chức năng mới
* di chuyển hệ thống
* xử lý mã độc có sẵn trước khi ký
* khôi phục khi không có backup
* công việc ngoài hạn mức

Ngoài phạm vi:

**ước lượng → báo giá → khách duyệt → mới thực hiện**

---

# 38. S06 — CÁCH TÍNH HẠN MỨC

Giải thích:

* yêu cầu cập nhật
* giờ kỹ thuật
* lỗi thuộc phạm vi
* chỉnh giao diện nhỏ
* sự cố nghiêm trọng
* phát triển mới

Phải có ví dụ.

## Một yêu cầu

Một lần gửi:

* tối đa 1 trang
* 500 từ
* số ảnh theo hạn mức

Nhiều trang:

→ nhiều yêu cầu.

## Một giờ kỹ thuật

Bao gồm:

* phân tích
* sửa
* test
* deploy
* ghi nhận

## Chỉnh giao diện nhỏ

Bao gồm:

* màu
* chữ
* spacing
* ảnh
* nút
* bố cục nhỏ trong component hiện có

Không bao gồm:

* redesign
* component redesign
* branding redesign

## Lỗi thuộc phạm vi

Lỗi của:

* source code/config đang được DUDI quản lý
* có thể reproduce

Third-party/hosting:

→ phối hợp hoặc báo giá.

## Sự cố nghiêm trọng

Ví dụ:

* website down
* payment lỗi
* form chính lỗi
* security issue

Priority không đồng nghĩa guaranteed completion.

## Phát triển mới

Bao gồm:

* page
* template
* module
* API
* payment
* booking
* permission
* workflow
* architecture

→ estimate + quote riêng.

---

# 39. S07 — QUY TRÌNH

Hiển thị:

**Tiếp nhận ticket → phân loại ưu tiên → ước lượng → xử lý → test → xác nhận → ghi báo cáo**

Công việc vượt hạn mức:

**bắt buộc duyệt trước.**

---

# 40. S08 — SLA

Phải hiển thị:

* giờ làm việc
* response
* priority
* exclusions
* conditions

Critical rule:

**Response ≠ Completion**

---

# 41. SLA PRIORITY

## P1 — Nghiêm trọng

Ví dụ:

* website ngừng hoạt động
* form/kênh bán chính hỏng
* dấu hiệu bảo mật

Cao cấp:

**2–4 giờ làm việc**

Đầu ra đầu tiên:

* khoanh vùng
* khôi phục an toàn
* hoặc phương án

## P2 — Cao

Lỗi quan trọng nhưng website vẫn dùng được.

→ response theo package.

→ estimate + priority schedule.

## P3 — Thường

Ví dụ:

* content
* image
* small visual bug

→ response theo package.

→ xử lý trong monthly schedule.

## P4 — Cải tiến

Ví dụ:

* optimization
* recommendation
* new feature

Response:

**xác nhận scope trong 1–2 ngày làm việc**

Output:

* backlog
* separate quote

---

# 42. SLA CONDITIONS

Kênh chính:

phải chốt trong hợp đồng.

Zalo:

chỉ dùng để báo nhanh.

Ticket/email:

source of record.

SLA:

chỉ tính trong working hours.

Timer pause khi chờ:

* access
* confirmation
* data
* payment third-party

Không yêu cầu password qua public form.

Access:

trao đổi qua private channel sau verification.

---

# 43. S09 — CASE

Các case:

1. Restore backup
2. Fix form
3. Reduce image size
4. Fix broken page

Case structure:

* before
* problem
* action
* technical result

Không tự tạo:

* revenue
* growth
* conversion

nếu không có dữ liệu.

---

# 44. S10 — FAQ

8–10 câu.

Accordion:

* keyboard
* aria-expanded
* HTML content

40–90 từ/câu.

FAQ phải làm rõ:

* hosting
* domain
* license
* backup
* security
* SEO
* unused hours
* cancellation

Bắt buộc có:

### DUDI có xử lý mọi lỗi trong phí tháng không?

Không. Gói bao gồm công việc trong hạn mức giờ và phạm vi đã chốt. Tính năng mới, lỗi do bên thứ ba hoặc việc vượt hạn mức sẽ được ước lượng và xin duyệt trước.

### Thời gian phản hồi có phải thời gian sửa xong không?

Không. Đây là thời gian DUDI tiếp nhận, phân loại và đưa bước xử lý đầu tiên. Thời gian hoàn tất phụ thuộc nguyên nhân, quyền truy cập và mức độ phức tạp.

### Phí gói đã gồm hosting, domain và plugin chưa?

Chưa. Các chi phí này được thanh toán riêng cho nhà cung cấp hoặc báo lại cho khách trước khi mua/gia hạn.

### Website đang nhiễm mã độc có nhận ngay theo gói không?

DUDI cần kiểm tra ban đầu. Việc dọn mã độc hoặc khôi phục hệ thống có sẵn trước khi ký có thể được báo giá riêng, sau đó mới chuyển sang chăm sóc định kỳ.

### Hạn mức còn dư có cộng sang tháng sau không?

Mặc định không cộng dồn. Nếu hợp đồng có cơ chế khác, nội dung đó phải được ghi rõ bằng văn bản.

### DUDI có cần mật khẩu qua form đăng ký không?

Không. Form công khai chỉ nhận thông tin website và nhu cầu. Quyền truy cập được trao đổi qua kênh riêng sau khi hai bên xác minh.

Bổ sung FAQ còn thiếu để đạt 8–10 câu nhưng không thay đổi policy.

---

# 45. S11 — FORM

## Website

### Website URL

Required.

Valid HTTP/HTTPS URL.

Không yêu cầu login.

### Platform

* WordPress
* code riêng
* nền tảng khác
* chưa rõ

Optional.

### Tình trạng

Checkbox:

* Lỗi
* Chậm
* Nội dung cũ
* Không backup
* Cần người vận hành
* Khác

Required.

### Package

* Cơ bản
* Tiêu chuẩn
* Cao cấp
* Chưa rõ

Required.

### Description

10–1000 chars.

Required.

Hiển thị:

**Không nhập mật khẩu.**

---

# 46. CONTACT

### Name

Required.

2–80 chars.

### Phone/Zalo

Required.

9–12 normalized digits.

Accept +84.

### Business name

Optional.

Maximum 120 chars.

### Consent

Required.

---

# 47. FORM UX

CTA package:

→ scroll to form.

→ select package automatically.

Must have:

* client validation
* server validation
* loading
* success
* error
* preserve input

Error:

* local
* focus first invalid field
* preserve data

Success:

**“DUDI đã nhận thông tin. Bên mình sẽ kiểm tra website và liên hệ qua số điện thoại/Zalo bạn cung cấp.”**

---

# 48. BACKEND

Backend phải:

* validate
* sanitize
* dedupe
* rate limit
* honeypot

Không dùng paid anti-spam chưa được approve.

Không lưu password/token.

Lead phải lưu:

* website
* package
* contact information
* landing URL
* referrer
* UTM source
* UTM medium
* UTM campaign
* timestamp
* relevant form data

---

# 49. S12 — FINAL CTA

Headline:

**“Cho DUDI biết tình trạng website của bạn”**

Primary:

**“Gửi website để DUDI kiểm tra”**

Secondary:

* Zalo
* phone

Hiển thị:

**Giá từ 500.000đ/tháng**

Không tạo quá nhiều competing CTA.

---

# 50. S13 — FOOTER

Legal name:

**Công ty TNHH Giải Pháp Phần Mềm DUDI**

MST:

**0319641544**

Hotline:

**0909 163 821**

Email:

**[contact@dudisoftware.com](mailto:contact@dudisoftware.com)**

Address:

**49/2 Đường 14, Phường Thủ Đức, TP.HCM**

Trước production:

* verify MST
* verify address
* call hotline
* send test email

Tuyệt đối không dùng:

**Công ty TNHH Công Nghệ Phần Mềm DUDI**

---

# 51. CTA STANDARD

Hero:

**Gửi website để DUDI kiểm tra**

Basic:

**Chọn gói Cơ bản — 500.000đ/tháng**

Standard:

**Chọn gói Tiêu chuẩn — 1.500.000đ/tháng**

Premium:

**Chọn gói Cao cấp — 3.000.000đ/tháng**

Final:

**Cho DUDI biết tình trạng website của bạn**

Success:

**DUDI đã nhận thông tin. Bên mình sẽ kiểm tra website và liên hệ qua số điện thoại/Zalo bạn cung cấp.**

---

# 52. FUNCTIONAL REQUIREMENTS

## CTA / Anchor

Correct destination.

No hidden under header.

## Package selection

Auto-select package.

Emit:

```text
package_select
```

## Form

Client + server validation.

## FAQ

Keyboard + aria-expanded.

## Contact

Working:

* tel
* mailto
* Zalo

No `#`.

## Security

* HTTPS
* sanitize
* no secrets frontend
* no stack traces

---

# 53. TRACKING

Implement:

```text
cta_click
package_select
zalo_click
phone_click
form_start
form_submit
form_success
form_error
```

If GA4/GTM exists:

integrate appropriately.

If not:

create standardized event/dataLayer hooks.

Do not buy tools just for tracking.

---

# 54. SEO

Must have:

* exactly one H1
* title 50–60 chars
* meta 140–160 chars
* canonical
* OG
* OG image 1200x630
* sitemap
* robots
* Service schema
* Organization schema
* FAQ schema when appropriate

Do not keyword stuff.

Do not promise Google rankings.

---

# 55. ACCESSIBILITY

Target WCAG AA where applicable.

Must have:

* sufficient contrast
* labels
* visible focus
* logical tab order
* alt text
* keyboard interaction
* reduced motion
* semantic HTML

Treat accessibility issues that block task completion as release blockers.

---

# 56. PERFORMANCE

Images:

* WebP
* AVIF where appropriate

Below-fold:

lazy-load.

Avoid:

* unnecessary JS
* heavy widgets
* render-blocking resources
* layout shifts

Targets:

```text
LCP <= 2.5s
CLS <= 0.1
INP <= 200ms
```

These are measurement targets, not absolute guarantees.

Report:

* device
* browser
* network
* environment

when performance is measured.

---

# 57. IMAGE SYSTEM

Visual direction:

* website monitoring
* backup
* technical support
* website dashboard
* maintenance
* operations

No random stock photos.

No critical text embedded inside images.

Use appropriate:

* width
* height
* aspect ratio
* responsive source
* lazy loading

---

# 58. CONTENT RULE

Never change:

* pricing
* limits
* SLA
* scope
* exclusions
* legal identity

Do not invent claims.

Do not add:

* revenue claims
* SEO guarantees
* uptime guarantees
* security guarantees

---

# 59. COMMERCIAL POLICIES NOT YET APPROVED

Do NOT publish before DUDI approval:

* monthly prepayment policy
* minimum 3-month commitment
* working hours
* overtime hourly price
* cancellation notice
* data handling on cancellation
* after-hours support
* onboarding audit pricing

Mark internally:

**CẦN DUDI XÁC NHẬN**

Do not turn proposed policy into public policy.

---

# 60. CODE ARCHITECTURE

Keep architecture clean.

Separate:

```text
components/
sections/
ui/
forms/
services/
api/
validation/
tracking/
seo/
utils/
```

Do not create one giant component.

Pricing data:

single source of truth.

FAQ data:

single source of truth.

CTA package selection:

single source of truth.

Design tokens:

single source of truth.

---

# 61. REACT/Tailwind IMPLEMENTATION

If project uses React + Tailwind:

Use:

* reusable React components
* semantic HTML
* Tailwind based on design tokens
* consistent variants
* no duplicated UI logic

Do not randomly mix inline CSS and Tailwind without reason.

Do not create arbitrary Tailwind values everywhere if the design system already has tokens.

Prefer:

design tokens → component variants → section composition.

---

# 62. COMPONENT SYSTEM

Create reusable components for:

* Header
* Button
* Badge
* SectionHeading
* PricingCard
* FeatureList
* ServiceCard
* ProcessStep
* PriorityCard
* FAQItem
* FormField
* Select
* Checkbox
* Alert
* CTA
* Footer
* StatusBadge
* IconButton

Every component must follow MASTER design system.

---

# 63. DESIGN QA

Before declaring complete, inspect visually:

## Desktop

1440px

1024px

## Tablet

768px

## Mobile

390px

360px

Check:

* hierarchy
* spacing
* alignment
* typography
* contrast
* card consistency
* CTA visibility
* pricing readability
* form usability
* FAQ behavior
* footer
* no overflow

---

# 64. UI/UX PRO MAX REVIEW

Sau khi implementation xong:

không coi task hoàn thành ngay.

Thực hiện review theo UI/UX Pro Max.

Review:

### Accessibility

* contrast
* keyboard
* focus
* labels
* ARIA
* touch targets

### Interaction

* hover
* active
* focus
* loading
* disabled
* feedback

### Consistency

* colors
* typography
* icons
* radius
* shadows
* spacing

### Layout

* responsive
* overflow
* density
* alignment

### Typography

* scale
* line-height
* line length
* weight

### Motion

* unnecessary animation
* duration
* easing
* reduced motion

### Forms

* labels
* errors
* validation
* recovery
* loading
* success

### Performance

* images
* rendering
* layout stability
* unnecessary JS

---

# 65. UI/UX PRO MAX RELEASE BLOCKERS

Không được hoàn thành nếu còn:

* accessibility blocker
* broken form
* broken CTA
* broken navigation
* incorrect price
* incorrect package
* incorrect SLA
* incorrect legal name
* horizontal overflow
* unreadable text
* low contrast
* missing focus
* missing form labels
* broken FAQ
* console errors
* broken API
* exposed secret
* stack trace exposed
* dead link
* placeholder CTA
* fake business data

---

# 66. 7-DAY IMPLEMENTATION PLAN

## DAY 1

Chốt:

* package scope
* SLA
* service conditions
* legal
* lead channel

Output:

* copy
* wireframe
* UX analysis
* UI/UX Pro Max design system

## DAY 2

Design:

* desktop
* mobile
* pricing
* form states

Output:

approved mockup/system.

## DAY 3

Implement:

* Header
* Hero
* Dấu hiệu
* DUDI thực hiện

## DAY 4

Implement:

* Pricing
* Limits
* Process
* SLA
* Cases
* FAQ

## DAY 5

Integrate:

* form
* lead
* tracking
* SEO
* schema

## DAY 6

QA:

* responsive
* content
* links
* form
* performance
* accessibility
* UX review

## DAY 7

* final QA
* deploy
* test lead
* handover

---

# 67. ACCEPTANCE CHECKLIST

## Content

* [ ] Correct legal name
* [ ] Correct monthly pricing
* [ ] No unlimited claim
* [ ] No absolute guarantees

## Scope

* [ ] Hours clear
* [ ] Requests clear
* [ ] Definitions clear
* [ ] Exclusions clear
* [ ] Third-party costs clear

## SLA

* [ ] Response ≠ completion
* [ ] Working hours clear
* [ ] Priority clear
* [ ] Pause conditions clear

## CTA

* [ ] Correct anchor
* [ ] Package auto-select
* [ ] Zalo works
* [ ] Phone works
* [ ] Email works
* [ ] No # links

## Form

* [ ] No password
* [ ] Validation
* [ ] Spam protection
* [ ] Lead received
* [ ] Source captured

## Responsive

* [ ] 360
* [ ] 390
* [ ] 768
* [ ] 1024
* [ ] 1440
* [ ] No overflow
* [ ] Touch friendly

## SEO

* [ ] Title
* [ ] Meta
* [ ] One H1
* [ ] Canonical
* [ ] OG
* [ ] Schema
* [ ] Sitemap
* [ ] Robots

## Accessibility

* [ ] Labels
* [ ] Focus
* [ ] Keyboard
* [ ] Alt
* [ ] Contrast
* [ ] Reduced motion
* [ ] FAQ ARIA

## Technical

* [ ] HTTPS
* [ ] No secrets
* [ ] No 404
* [ ] No console errors
* [ ] Events working
* [ ] API working

## UI/UX Pro Max

* [ ] Design system generated
* [ ] MASTER.md created
* [ ] Page override checked
* [ ] Domain searches performed
* [ ] Stack guidance performed
* [ ] Semantic tokens used
* [ ] Icon system consistent
* [ ] Typography system consistent
* [ ] Spacing system consistent
* [ ] Radius consistent
* [ ] Elevation consistent
* [ ] Motion reviewed
* [ ] Accessibility reviewed
* [ ] Responsive reviewed
* [ ] UX anti-pattern review completed

---

# 68. FINAL EXECUTION ORDER

Thực hiện chính xác theo thứ tự:

```text
1. Inspect existing project
        ↓
2. Detect actual tech stack
        ↓
3. Analyze complete requirements
        ↓
4. Analyze product / audience / goals
        ↓
5. Run UI/UX Pro Max --design-system
        ↓
6. Persist design-system
        ↓
7. Read MASTER.md
        ↓
8. Check landing-page override
        ↓
9. Run product search
        ↓
10. Run style search
        ↓
11. Run color search
        ↓
12. Run typography search
        ↓
13. Run landing search
        ↓
14. Run UX search
        ↓
15. Run stack-specific search
        ↓
16. Synthesize recommendations
        ↓
17. Build information architecture
        ↓
18. Build component system
        ↓
19. Implement S01–S13
        ↓
20. Implement form
        ↓
21. Implement backend
        ↓
22. Implement tracking
        ↓
23. Implement SEO
        ↓
24. Implement accessibility
        ↓
25. Optimize performance
        ↓
26. Responsive QA
        ↓
27. UI/UX Pro Max review
        ↓
28. Security review
        ↓
29. Final acceptance checklist
        ↓
30. Production-ready
```

---

# 69. FINAL INSTRUCTION TO ANTIGRAVITY

Không được hiểu prompt này là:

> "hãy tạo một landing page đẹp."

Hãy hiểu đây là:

> **Một production landing page có business specification, design system, UX system, accessibility requirements, performance requirements, SEO requirements, security requirements, backend lead flow và QA requirements.**

UI/UX Pro Max phải được sử dụng ở **giai đoạn reasoning + design system + implementation guidance + review**, không chỉ dùng để chọn màu.

Ưu tiên theo thứ tự:

```text
1. Business correctness
2. Information clarity
3. Accessibility
4. Interaction quality
5. Design consistency
6. Performance
7. Conversion
8. Visual polish
9. Decorative effects
```

Nếu một hiệu ứng đẹp làm giảm:

* readability
* accessibility
* performance
* conversion
* trust

→ loại bỏ hiệu ứng đó.

Nếu một recommendation của UI/UX Pro Max mâu thuẫn với business requirement DUDI:

→ **DUDI specification wins.**

Nếu requirement không rõ:

→ không tự bịa policy.

→ ghi:

**CẦN DUDI XÁC NHẬN**

Nếu design system đã tồn tại:

→ đọc nó trước.

→ không regenerate/overwrite tùy tiện.

Nếu có page-specific override:

→ đọc và áp dụng override sau MASTER.

Nếu UI/UX Pro Max có recommendation phù hợp:

→ áp dụng.

Nếu recommendation không phù hợp với B2B/technical-service context:

→ giữ business context và ghi nhận lý do.

Không được bỏ qua bất kỳ phần nào trong specification này.

Không được kết thúc ở mockup.

Không được kết thúc ở static frontend.

Phải hoàn thành flow:

**Landing → Package → Form → Validation → Backend → Lead → Success/Error → Tracking**

và phải hoàn thành:

**Design → Build → Review → QA → Production-ready.**
