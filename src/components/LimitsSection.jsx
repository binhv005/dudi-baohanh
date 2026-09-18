import React from "react";
import { 
  Calculator, 
  FileText, 
  Clock, 
  Palette, 
  CheckCircle2, 
  AlertOctagon, 
  Layers,
  Check,
  Info
} from "lucide-react";

export default function LimitsSection() {
  const limitsData = [
    {
      number: "01",
      tag: "Một yêu cầu nội dung",
      icon: FileText,
      color: "rose",
      bgLight: "bg-rose-50 text-rose-600 border-rose-200",
      badgeColor: "bg-rose-100 text-rose-700",
      accentBorder: "group-hover:border-rose-300",
      summary: "Áp dụng cho 01 trang đơn lẻ (< 500 từ) kèm hình ảnh theo hạn mức của gói.",
      points: ["1 trang / 1 bài viết", "Nhiều trang tính riêng"],
    },
    {
      number: "02",
      tag: "Một giờ kỹ thuật",
      icon: Clock,
      color: "blue",
      bgLight: "bg-blue-50 text-blue-600 border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700",
      accentBorder: "group-hover:border-blue-300",
      summary: "Thời gian kỹ sư DUDI phân tích, sửa code, kiểm thử và deploy thực tế.",
      points: ["Ghi log thời gian thực", "Báo trước khi vượt giờ"],
    },
    {
      number: "03",
      tag: "Chỉnh giao diện nhỏ",
      icon: Palette,
      color: "purple",
      bgLight: "bg-purple-50 text-purple-600 border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700",
      accentBorder: "group-hover:border-purple-300",
      summary: "Đổi màu, font, banner, nút bấm hoặc căn chỉnh bố cục component có sẵn.",
      points: ["Trong hạn mức giờ gói", "Không gồm vẽ lại toàn trang"],
    },
    {
      number: "04",
      tag: "Lỗi thuộc phạm vi",
      icon: CheckCircle2,
      color: "emerald",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700",
      accentBorder: "group-hover:border-emerald-300",
      summary: "Lỗi mã nguồn & CMS do DUDI trực tiếp quản lý, tái hiện được trên môi trường test.",
      points: ["Lỗi CMS, theme & plugin", "Sự cố server ngoài tính riêng"],
    },
    {
      number: "05",
      tag: "Sự cố nghiêm trọng",
      icon: AlertOctagon,
      color: "amber",
      bgLight: "bg-amber-50 text-amber-600 border-amber-200",
      badgeColor: "bg-amber-100 text-amber-700",
      accentBorder: "group-hover:border-amber-300",
      summary: "Website downtime, hỏng kênh bán/form hoặc bị tấn công — tiếp nhận xử lý ngay.",
      points: ["Ưu tiên P1 khẩn cấp", "Tiếp nhận tức thì"],
    },
    {
      number: "06",
      tag: "Phát triển tính năng mới",
      icon: Layers,
      color: "slate",
      bgLight: "bg-slate-100 text-slate-700 border-slate-200",
      badgeColor: "bg-slate-200 text-slate-800",
      accentBorder: "group-hover:border-slate-400",
      summary: "Thêm trang mới, tích hợp API ngoài, cổng thanh toán hoặc module phức tạp.",
      points: ["Ngoài gói định kỳ", "Khảo sát & báo giá riêng"],
    },
  ];

  return (
    <section id="limits" className="snap-section bg-[#B91C1C] text-white border-b border-red-800 relative overflow-hidden">
      <div className="internal-scroll-container flex flex-col justify-center relative">
        <div className="max-w-7xl 2xl:max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-4 sm:mb-5 2xl:mb-6">
            <h2 className="text-[clamp(1.3rem,2.2vw,2.15rem)] font-black text-white tracking-tight mb-1 drop-shadow-xs">
              Cách tính hạn mức công việc hàng tháng
            </h2>
            <p className="text-[clamp(0.82rem,0.95vw,1.05rem)] text-white/90 leading-snug font-medium max-w-xl mx-auto">
              DUDI công khai cách tính minh bạch để hai bên luôn chủ động và tối ưu hiệu quả vận hành.
            </p>
          </div>

          {/* 6 Compact Crisp Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 2xl:gap-5" data-reveal-container>
            {limitsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="reveal-stagger-item group relative bg-white text-slate-800 rounded-xl 2xl:rounded-2xl p-[clamp(0.85rem,1.3vw,1.25rem)] border border-white/90 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar: Icon + Number badge */}
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 2xl:w-9 2xl:h-9 rounded-lg border flex items-center justify-center ${item.bgLight}`}>
                        <Icon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 stroke-[2]" />
                      </div>
                      <span className="text-[10.5px] 2xl:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/70">
                        {item.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-[13px] 2xl:text-[14.5px] font-bold text-slate-900 uppercase tracking-tight mb-1.5 group-hover:text-brand-600 transition-colors">
                      {item.tag}
                    </h3>

                    {/* Shortened concise summary */}
                    <p className="text-[11.5px] sm:text-xs 2xl:text-[13px] text-slate-600 leading-snug mb-2.5">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bottom Highlight Pills */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.points.map((pt, pIdx) => (
                      <span 
                        key={pIdx}
                        className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11px] 2xl:text-[12px] font-medium text-slate-700 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md"
                      >
                        <Check className="w-3 h-3 text-emerald-500 stroke-[2.5]" />
                        <span>{pt}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="reveal-fade-up text-center mt-3 sm:mt-4">
            <div className="inline-flex items-center gap-2 text-xs 2xl:text-[13px] text-white bg-black/25 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/25 shadow-2xs font-medium">
              <Info className="w-4 h-4 text-white/90 shrink-0" />
              <span>Toàn bộ hạn mức công việc được làm mới (reset) vào đầu chu kỳ mỗi tháng và không cộng dồn.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

