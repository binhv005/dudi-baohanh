import React, { useState } from "react";
import { 
  Activity, 
  Database, 
  Wrench, 
  RefreshCw, 
  ShieldCheck, 
  FileSpreadsheet, 
  ArrowRight
} from "lucide-react";
import { trackCtaClick } from "../utils/tracking";

export default function ServicesGroup() {
  const [activeNode, setActiveNode] = useState(null);

  const handlePricingScroll = () => {
    trackCtaClick("services_group", "Xem chi tiết định mức các gói", "#pricing");
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const serviceNodes = [
    {
      id: "01",
      title: "Giám sát Uptime",
      subtitle: "Theo dõi khả dụng & SSL",
      desc: "Rà soát tính khả dụng tên miền, theo dõi chứng chỉ SSL và cảnh báo sớm sự cố gián đoạn 24/7.",
      hexColor: "#F97316",
      icon: <Activity className="w-5 h-5 text-orange-500 stroke-[2.3]" />,
      highlights: ["Uptime 24/7", "SSL Check", "Cảnh báo sớm"],
    },
    {
      id: "02",
      title: "Sao lưu Dữ liệu",
      subtitle: "Backup mã nguồn & DB",
      desc: "Lưu trữ định kỳ mã nguồn và cơ sở dữ liệu trên đám mây an toàn, sẵn sàng khôi phục tức thì khi cần.",
      hexColor: "#65A30D",
      icon: <Database className="w-5 h-5 text-lime-600 stroke-[2.3]" />,
      highlights: ["Mã nguồn & DB", "Lưu Cloud", "Khôi phục tức thì"],
    },
    {
      id: "03",
      title: "Sửa lỗi Kỹ thuật",
      subtitle: "Xử lý mã nguồn & hiển thị",
      desc: "Khắc phục lỗi form liên hệ, liên kết gãy, xung đột plugin và sự cố hiển thị trong hạn mức giờ.",
      hexColor: "#E11D48",
      icon: <Wrench className="w-5 h-5 text-rose-500 stroke-[2.3]" />,
      highlights: ["Lỗi form & link", "Xung đột plugin", "Sửa theo giờ"],
    },
    {
      id: "04",
      title: "Cập nhật Nội dung",
      subtitle: "Đăng bài, banner & CMS",
      desc: "Đăng tải bài viết mới, thay đổi banner, cập nhật phiên bản plugin và tương thích CMS định kỳ an toàn.",
      hexColor: "#0284C7",
      icon: <RefreshCw className="w-5 h-5 text-sky-500 stroke-[2.3]" />,
      highlights: ["Đăng bài & banner", "Update CMS", "Tương thích an toàn"],
    },
    {
      id: "05",
      title: "Bảo mật Cơ bản",
      subtitle: "Quét mã độc & phân quyền",
      desc: "Quét lỗ hổng mã độc định kỳ, kiểm tra phân quyền tài khoản quản trị và bảo vệ máy chủ an toàn.",
      hexColor: "#8B5CF6",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500 stroke-[2.3]" />,
      highlights: ["Quét mã độc", "Kiểm tra quyền", "Bảo mật Server"],
    },
    {
      id: "06",
      title: "Báo cáo & Tư vấn",
      subtitle: "Đối soát nhật ký & tối ưu",
      desc: "Tổng hợp nhật ký xử lý trong tháng, thống kê thời gian phản hồi SLA và đề xuất phương án nâng cấp.",
      hexColor: "#475569",
      icon: <FileSpreadsheet className="w-5 h-5 text-slate-600 stroke-[2.3]" />,
      highlights: ["Nhật ký tháng", "Thống kê SLA", "Tư vấn nâng cấp"],
    },
  ];

  return (
    <section id="services" className="snap-section bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="internal-scroll-container flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-3 sm:mb-4">
            <h2 className="text-[clamp(1.15rem,2vw,1.65rem)] font-extrabold text-slate-900 tracking-tight mb-0.5">
              6 nhóm công việc DUDI thực hiện hằng tháng
            </h2>
            <p className="text-[clamp(0.72rem,0.9vw,0.8125rem)] text-slate-600 leading-normal max-w-lg mx-auto">
              Hệ sinh thái dịch vụ chuẩn hóa bài bản, đảm bảo website luôn được bảo vệ và vận hành ổn định.
            </p>
          </div>

          {/* MAIN LAYOUT: CLEAN 3D MASCOT (LEFT) + SERVICE GROUPS LIST (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center mb-3">
            
            {/* LEFT: 3D DUDI MASCOT ILLUSTRATION (+30% larger) */}
            <div className="lg:col-span-5 flex items-center justify-center relative reveal-scale-up">
              <div className="relative flex items-center justify-center w-full max-w-[clamp(320px,42vw,540px)] py-1 sm:py-2">
                {/* Soft subtle glow behind mascot */}
                <div className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-brand-500/20 via-rose-500/15 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Floating Mascot */}
                <div className="relative z-10 flex flex-col items-center animate-mascot-float w-full">
                  <img
                    src="/faq-mascot.webp"
                    alt="Linh vật chăm sóc website DUDI"
                    className="w-full h-auto max-h-[clamp(300px,45vh,480px)] object-contain filter drop-shadow-[0_20px_35px_rgba(236,20,32,0.22)] transition-transform duration-300 hover:scale-105 cursor-pointer select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: CONNECTED STEPPED TIMELINE LIST */}
            <div 
              onMouseLeave={() => setActiveNode(null)}
              className="lg:col-span-7 space-y-1 sm:space-y-1.5 relative border-l-2 border-dashed border-slate-200 pl-3.5 sm:pl-4 ml-1"
            >
              {serviceNodes.map((node, index) => {
                const isSelected = activeNode === index;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(index)}
                    onMouseEnter={() => setActiveNode(index)}
                    className={`reveal-fade-left group relative rounded-xl py-1.5 sm:py-2 px-3 sm:px-3.5 transition-all duration-300 cursor-pointer overflow-hidden ${
                      isSelected
                        ? "shadow-md translate-x-1.5 bg-white"
                        : "bg-white/70 hover:bg-white hover:translate-x-1 hover:shadow-sm"
                    }`}
                    style={{ 
                      transitionDelay: `${index * 80}ms`,
                      backgroundColor: isSelected ? "#FFFFFF" : undefined,
                      boxShadow: isSelected ? `0 8px 24px -4px ${node.hexColor}25, 0 2px 8px rgba(0,0,0,0.04)` : undefined
                    }}
                  >
                    {/* Stepped Node Dot on Timeline */}
                    <div 
                      className={`absolute -left-[21px] sm:-left-[23px] top-3 sm:top-3.5 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 shadow-xs ${
                        isSelected ? "scale-140 shadow-sm" : "scale-100 group-hover:scale-120"
                      }`}
                      style={{ 
                        backgroundColor: node.hexColor
                      }}
                    />

                    {/* Single Line Header: Group Title + Subtitle */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span 
                          className="text-[clamp(10.5px,0.85vw,12px)] font-black uppercase tracking-wide whitespace-nowrap transition-transform duration-200 group-hover:translate-x-0.5"
                          style={{ color: node.hexColor }}
                        >
                          NHÓM {node.id}: {node.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">•</span>
                        <span className={`text-[clamp(10px,0.8vw,11px)] font-semibold truncate hidden sm:inline transition-colors ${
                          isSelected ? "text-slate-800 font-bold" : "text-slate-500 group-hover:text-slate-700"
                        }`}>
                          {node.subtitle}
                        </span>
                      </div>

                      {/* Highlight Tags (Hidden by default, reveal on hover/selected) */}
                      <div className={`hidden md:flex items-center gap-1 shrink-0 transition-all duration-300 ${
                        isSelected 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}>
                        {node.highlights.slice(0, 2).map((h, i) => (
                          <span 
                            key={i}
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded transition-all duration-300 whitespace-nowrap"
                            style={{
                              backgroundColor: isSelected ? `${node.hexColor}18` : "#F1F5F9",
                              color: isSelected ? node.hexColor : "#64748B"
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Collapsible Details: Revealed smoothly on hover or when selected */}
                    <div 
                      className={`grid transition-all duration-300 ease-out ${
                        isSelected 
                          ? "grid-rows-[1fr] opacity-100 mt-1 sm:mt-1.5" 
                          : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-1 group-hover:sm:mt-1.5"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className={`text-[clamp(10px,0.8vw,11px)] leading-snug transition-colors duration-200 ${
                          isSelected ? "text-slate-800 font-medium" : "text-slate-600 group-hover:text-slate-700"
                        }`}>
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Quick Link to Pricing Comparison */}
          <div className="reveal-fade-up text-center" style={{ transitionDelay: '600ms' }}>
            <button
              onClick={handlePricingScroll}
              className="inline-flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs"
            >
              <span>So sánh chi tiết hạn mức của 6 nhóm dịch vụ trên 3 gói</span>
              <ArrowRight className="w-3 h-3 text-brand-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
