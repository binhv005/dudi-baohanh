import React, { useState } from "react";
import { 
  User, 
  MapPin, 
  BarChart3, 
  Monitor, 
  Database, 
  CheckCircle2, 
  FileSpreadsheet,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Check
} from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Tiếp nhận ticket",
      subtitle: "Ghi nhận & Lưu vết",
      desc: "Ghi nhận yêu cầu qua ticket/email chính thức để lưu vết thông tin minh bạch, phân công kỹ thuật viên phụ trách.",
      badge: "Kênh Ticket & Email",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <User className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Ticket Portal / Email support",
        output: "Mã ticket tiếp nhận & thời gian ghi nhận",
        slaNote: "Xác nhận tiếp nhận trong 15-30 phút"
      }
    },
    {
      step: "02",
      title: "Phân loại ưu tiên",
      subtitle: "Đánh giá mức độ SLA",
      desc: "Đánh giá mức độ ảnh hưởng sự cố từ P1 (Khẩn cấp) đến P4 (Tiêu chuẩn) theo đúng cam kết SLA hợp đồng.",
      badge: "Khung SLA P1 - P4",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <MapPin className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Hệ thống phân luồng DUDI",
        output: "Cấp độ ưu tiên (P1, P2, P3, P4)",
        slaNote: "Định tuyến kỹ sư chuyên trách phù hợp"
      }
    },
    {
      step: "03",
      title: "Ước lượng & Duyệt",
      subtitle: "Dự toán giờ & Chi phí",
      desc: "Dự toán thời gian xử lý và hạn mức tháng. Nếu có khả năng vượt hạn mức sẽ xin xác nhận duyệt trước khi thực hiện.",
      badge: "Không phát sinh ẩn",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <BarChart3 className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Xác nhận văn bản / Ticket",
        output: "Bản ước lượng số giờ & thời hạn hoàn thành",
        slaNote: "Khách hàng duyệt mới tiến hành xử lý"
      }
    },
    {
      step: "04",
      title: "Xử lý kỹ thuật",
      subtitle: "Triển khai an toàn",
      desc: "Kỹ sư DUDI trực tiếp sửa lỗi, tối ưu tốc độ hoặc cập nhật tính năng trên môi trường staging chuẩn hóa.",
      badge: "Môi trường Staging",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <Monitor className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Dev Environment / Git Versioning",
        output: "Source code & bản vá lỗi hoàn thiện",
        slaNote: "Không tác động trực tiếp lên database live"
      }
    },
    {
      step: "05",
      title: "Kiểm thử & Backup",
      subtitle: "An toàn dữ liệu 100%",
      desc: "Kiểm thử kỹ lưỡng tính năng, giao diện đa thiết bị và tự động tạo snapshot sao lưu an toàn trước khi bàn giao.",
      badge: "Sao lưu Snapshot",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <Database className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Automated QA & Cloud Storage",
        output: "Bản backup database & source trước update",
        slaNote: "Sẵn sàng rollback tức thì nếu có sự cố"
      }
    },
    {
      step: "06",
      title: "Bàn giao & Nghiệm thu",
      subtitle: "Xác nhận hoàn tất",
      desc: "Bàn giao kết quả để khách hàng nghiệm thu trực tiếp và xác nhận đóng ticket khi đã hoàn toàn hài lòng.",
      badge: "Nghiệm thu chuẩn chỉ",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "Ticket Portal / Live Website",
        output: "Biên bản nghiệm thu & đóng ticket",
        slaNote: "Bảo hành các lỗi phát sinh liên quan"
      }
    },
    {
      step: "07",
      title: "Báo cáo chu kỳ",
      subtitle: "Tổng kết & Khuyến nghị",
      desc: "Gửi báo cáo định kỳ chi tiết nhật ký vận hành, tình trạng uptime, bảo mật và khuyến nghị nâng cấp hiệu suất.",
      badge: "Báo cáo minh bạch",
      color: "from-brand-600 via-brand-500 to-rose-600",
      accentHex: "#EC1420",
      glowBg: "rgba(236, 20, 32, 0.15)",
      borderColor: "border-brand-500/40",
      textColor: "text-brand-600",
      badgeBg: "bg-brand-50 text-brand-700 border-brand-200",
      icon: <FileSpreadsheet className="w-5 h-5 text-brand-600" />,
      detail: {
        channel: "PDF Report & Dashboard",
        output: "Báo cáo số giờ sử dụng & trạng thái uptime",
        slaNote: "Tự động gửi đầu mỗi tháng"
      }
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <section id="process" className="snap-section bg-white text-slate-800 border-b border-slate-200/90 relative overflow-hidden">
      <div className="internal-scroll-container flex flex-col justify-center relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-2.5 sm:mb-3.5">
            <h2 className="text-[clamp(1.2rem,2.2vw,1.75rem)] font-extrabold text-slate-900 tracking-tight mb-1">
              Quy trình tiếp nhận & xử lý 7 bước minh bạch
            </h2>
            <p className="text-[clamp(0.72rem,0.9vw,0.8125rem)] text-slate-600 leading-relaxed max-w-xl mx-auto">
              Mọi yêu cầu kỹ thuật đều được kiểm soát nghiêm ngặt từ khâu tiếp nhận, đánh giá SLA, sao lưu an toàn đến nghiệm thu và báo cáo định kỳ.
            </p>
          </div>

          {/* INTERACTIVE TIMELINE PIPELINE BAR */}
          <div className="reveal-fade-up mb-2.5 sm:mb-3">
            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-2 sm:p-2.5 shadow-xs overflow-x-auto scrollbar-thin">
              {/* Connecting Track Line */}
              <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-1 bg-slate-200 rounded-full z-0 overflow-hidden">
                <div 
                  className="h-full bg-brand-600 transition-all duration-500 ease-out"
                  style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {/* Stepper Buttons */}
              <div className="relative z-10 flex lg:grid lg:grid-cols-7 gap-1 sm:gap-1.5 min-w-[540px] lg:min-w-0">
                {steps.map((item, index) => {
                  const isActive = activeStep === index;
                  const isPassed = activeStep > index;

                  return (
                    <button
                      key={item.step}
                      onClick={() => setActiveStep(index)}
                      className={`flex-1 flex flex-col items-center group text-center p-1 sm:p-1.5 rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "bg-brand-50/60 ring-2 ring-brand-500/50 shadow-xs scale-102" 
                          : "hover:bg-slate-50/70"
                      }`}
                    >
                      {/* Step Node Circle */}
                      <div 
                        className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center font-black text-[11px] sm:text-xs transition-all duration-300 mb-1 ${
                          isActive 
                            ? "bg-brand-600 text-white scale-105 ring-2 ring-white shadow-md shadow-brand/30" 
                            : isPassed
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              : "bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-800"
                        }`}
                      >
                        {isPassed ? (
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 stroke-[2.5]" />
                        ) : (
                          item.step
                        )}
                      </div>

                      {/* Step Label */}
                      <span className={`text-[clamp(10px,0.8vw,11.5px)] font-bold transition-colors line-clamp-1 ${
                        isActive ? "text-brand-700" : "text-slate-600 group-hover:text-slate-900"
                      }`}>
                        {item.title}
                      </span>
                      <span className="text-[clamp(9px,0.7vw,10px)] text-slate-400 font-medium line-clamp-1">
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ACTIVE STEP SPOTLIGHT HERO CARD */}
          <div className="reveal-fade-up mb-2">
            <div 
              className="p-[clamp(0.875rem,1.8vw,1.375rem)] rounded-2xl bg-brand-600 border border-brand-700 text-white transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-6 items-center">
                {/* Left Highlight Info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <span 
                      className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-black text-xs text-brand-600 bg-white shadow-xs"
                    >
                      {currentStep.step}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30"
                      >
                        {currentStep.badge}
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] text-red-100 font-medium">Bước {activeStep + 1} / 7</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-[19px] font-black text-white mb-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span>{currentStep.title}</span>
                    <span className="text-xs font-bold text-red-100">
                      • {currentStep.subtitle}
                    </span>
                  </h3>

                  <p className="text-[clamp(11px,0.85vw,12.5px)] text-red-50/90 leading-relaxed mb-3 font-normal">
                    {currentStep.desc}
                  </p>

                  {/* Micro Actions Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                      className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-xs font-bold text-white transition-all cursor-pointer border border-white/25 shadow-2xs"
                    >
                      ← Trước
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-black text-brand-600 transition-all duration-300 cursor-pointer flex items-center gap-1 bg-white hover:bg-red-50 shadow-md active:scale-95"
                    >
                      <span>Tiếp theo</span>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>

                {/* Right Detail Matrix Box */}
                <div className="lg:col-span-5 bg-black/15 border border-white/20 rounded-xl p-3 sm:p-3.5 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/15">
                    <span className="text-[10.5px] sm:text-[11px] font-black text-white uppercase tracking-wider">Thông số vận hành</span>
                    <div className="p-1 rounded-lg bg-white/20 text-white shadow-2xs">
                      {React.cloneElement(currentStep.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-red-100 block font-medium">Kênh / Môi trường:</span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-white">{currentStep.detail.channel}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-red-100 block font-medium">Kết quả bàn giao:</span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-white">{currentStep.detail.output}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-red-100 block font-medium">Cam kết tiêu chuẩn:</span>
                    <span className="text-[11.5px] sm:text-xs font-bold text-white flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0 stroke-[2.5]" />
                      {currentStep.detail.slaNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
