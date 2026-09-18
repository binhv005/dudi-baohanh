import React, { useState } from "react";
import { 
  Clock, 
  AlertOctagon, 
  AlertTriangle, 
  Sliders,
  Sparkles,
  Rocket,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { SLA_CONDITIONS } from "../data/maintenanceData";

export default function SLASection() {
  const [showConditions, setShowConditions] = useState(false);
  const slaCards = [
    {
      number: "01",
      level: "P1",
      title: "P1 • NGHIÊM TRỌNG",
      badgeBg: "bg-rose-500",
      titleColor: "text-rose-600",
      accentBorder: "group-hover:border-rose-300",
      accentShadow: "group-hover:shadow-[0_12px_28px_rgba(244,63,94,0.16)]",
      specsBg: "group-hover:bg-rose-50/70 group-hover:border-rose-100",
      icon: <AlertOctagon className="w-5 h-5 text-rose-500 stroke-[2.2] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />,
      response: "2–4h (Gói Cao cấp)",
      situation: "Website downtime, hỏng kênh bán hoặc bị tấn công.",
      output: "Khoanh vùng nguyên nhân & xử lý khẩn cấp ngay.",
    },
    {
      number: "02",
      level: "P2",
      title: "P2 • MỨC ĐỘ CAO",
      badgeBg: "bg-amber-500",
      titleColor: "text-amber-600",
      accentBorder: "group-hover:border-amber-300",
      accentShadow: "group-hover:shadow-[0_12px_28px_rgba(245,158,11,0.16)]",
      specsBg: "group-hover:bg-amber-50/70 group-hover:border-amber-100",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 stroke-[2.2] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />,
      response: "Theo gói (12h – 24h)",
      situation: "Lỗi chức năng quan trọng ảnh hưởng trải nghiệm khách.",
      output: "Ước lượng thời gian & ưu tiên xử lý trong ngày.",
    },
    {
      number: "03",
      level: "P3",
      title: "P3 • BÌNH THƯỜNG",
      badgeBg: "bg-sky-500",
      titleColor: "text-sky-600",
      accentBorder: "group-hover:border-sky-300",
      accentShadow: "group-hover:shadow-[0_12px_28px_rgba(14,165,233,0.16)]",
      specsBg: "group-hover:bg-sky-50/70 group-hover:border-sky-100",
      icon: <Sliders className="w-5 h-5 text-sky-500 stroke-[2.2] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />,
      response: "Theo mốc phản hồi gói",
      situation: "Chỉnh nội dung, thay ảnh banner, sửa lỗi hiển thị nhỏ.",
      output: "Xử lý tuần tự theo lịch công việc định kỳ.",
    },
    {
      number: "04",
      level: "P4",
      title: "P4 • CẢI TIẾN & MỚI",
      badgeBg: "bg-emerald-500",
      titleColor: "text-emerald-600",
      accentBorder: "group-hover:border-emerald-300",
      accentShadow: "group-hover:shadow-[0_12px_28px_rgba(16,185,129,0.16)]",
      specsBg: "group-hover:bg-emerald-50/70 group-hover:border-emerald-100",
      icon: <Rocket className="w-5 h-5 text-emerald-500 stroke-[2.2] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />,
      response: "Xác nhận 1–2 ngày",
      situation: "Tối ưu hiệu năng hoặc yêu cầu thêm tính năng mới.",
      output: "Lập backlog ưu tiên & gửi báo giá độc lập.",
    },
  ];

  return (
    <section id="sla" className="snap-section bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="internal-scroll-container flex flex-col justify-center">
        <div className="max-w-6xl 2xl:max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-2.5 sm:mb-3.5 2xl:mb-5">
            <h2 className="text-[clamp(1.15rem,2.2vw,1.65rem)] 2xl:text-[2rem] font-extrabold text-slate-900 tracking-tight mb-0.5">
              Phản hồi nhanh — Phân loại mức độ chuẩn xác
            </h2>
            <p className="text-[clamp(0.72rem,0.9vw,0.8125rem)] 2xl:text-[0.9375rem] text-slate-600 leading-normal max-w-xl 2xl:max-w-2xl mx-auto">
              DUDI cam kết mốc tiếp nhận ban đầu rõ ràng, đảm bảo xử lý sự cố có lộ trình an toàn và minh bạch.
            </p>
          </div>

          {/* 4 Curved Arched Infographic Cards Grid with Rich Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 2xl:gap-5 mb-3 sm:mb-4 2xl:mb-6 pt-1" data-reveal-container>
            {slaCards.map((item) => (
              <div key={item.number} className="reveal-stagger-item flex flex-col items-center group cursor-pointer">
                
                {/* Top Arched Hood with Center Number Circle */}
                <div className="relative flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className={`w-18 sm:w-20 2xl:w-24 h-5.5 sm:h-6 2xl:h-7 ${item.badgeBg} rounded-t-full shadow-xs flex items-start justify-center pt-0.5 transition-all duration-300 group-hover:brightness-105`}>
                    <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 -mt-2.5 sm:-mt-3 2xl:-mt-3.5 rounded-full bg-white shadow-sm border-2 border-slate-100 flex items-center justify-center font-black text-[9.5px] sm:text-[10px] 2xl:text-xs text-slate-900 group-hover:scale-105 transition-transform duration-300">
                      {item.number}
                    </div>
                  </div>
                </div>

                {/* Main White Card Body */}
                <div className={`w-full bg-white rounded-xl 2xl:rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] ${item.accentShadow} border border-slate-200/90 ${item.accentBorder} pt-4 sm:pt-5 2xl:pt-6 pb-2.5 sm:pb-3 2xl:pb-4 px-2.5 sm:px-3 2xl:px-4 text-center flex flex-col justify-between -mt-3 transition-all duration-300 group-hover:-translate-y-0.5`}>
                  
                  <div>
                    {/* Clean Icon with Hover Spin/Bounce */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 mx-auto flex items-center justify-center mb-1 2xl:mb-2">
                      {item.icon}
                    </div>

                    {/* BOLD UPPERCASE TITLE */}
                    <h3 className={`text-[clamp(10px,0.8vw,11.5px)] 2xl:text-[13.5px] font-black uppercase tracking-wider mb-1 2xl:mb-2 transition-transform duration-300 ${item.titleColor}`}>
                      {item.title}
                    </h3>

                    {/* Concise, Focused Specs Box */}
                    <div className={`space-y-0.5 2xl:space-y-1 text-[clamp(9.5px,0.75vw,10.5px)] 2xl:text-xs text-slate-600 mb-1.5 sm:mb-2 2xl:mb-3 text-left bg-slate-50/90 p-1.5 sm:p-2 2xl:p-2.5 rounded-lg 2xl:rounded-xl border border-slate-100 transition-colors duration-300 ${item.specsBg}`}>
                      <div className="flex items-start gap-1">
                        <span className="font-bold text-slate-900 shrink-0">Phản hồi:</span>
                        <span className="font-bold text-slate-900">{item.response}</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="font-bold text-slate-900 shrink-0">Tình huống:</span>
                        <span className="leading-tight text-slate-700">{item.situation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Output */}
                  <div className="pt-1.5 2xl:pt-2 border-t border-slate-100 text-[clamp(9px,0.7vw,10px)] 2xl:text-[11.5px] text-slate-500 text-left">
                    <span className="font-bold text-slate-700 block mb-0.5">Đầu ra xử lý:</span>
                    <span className="leading-tight block text-slate-600">{item.output}</span>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* SLA Conditions & Rules Box - Collapsible */}
          <div className="reveal-fade-up rounded-xl 2xl:rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md overflow-hidden transition-all duration-300">
            {/* Header Trigger Button */}
            <button
              type="button"
              onClick={() => setShowConditions(!showConditions)}
              className="w-full p-2.5 sm:p-3 2xl:p-4 flex items-center justify-between gap-2 text-left cursor-pointer hover:bg-slate-850 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
              aria-expanded={showConditions}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 2xl:w-5 2xl:h-5 text-blue-400 shrink-0" />
                <h3 className="text-[11.5px] sm:text-xs 2xl:text-sm font-bold text-white">
                  Điều kiện áp dụng và nguyên tắc tính thời gian SLA
                </h3>
              </div>

              <div className="flex items-center gap-1 shrink-0 text-[11px] 2xl:text-xs font-semibold text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 px-2.5 2xl:px-3 py-1 2xl:py-1.5 rounded-lg border border-blue-800/60 transition-all">
                <span>{showConditions ? "Thu gọn" : "Xem chi tiết"}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 2xl:w-4 2xl:h-4 transition-transform duration-300 ${
                    showConditions ? "rotate-180" : "rotate-0"
                  }`} 
                />
              </div>
            </button>

            {/* Collapsible Content */}
            <div 
              className={`grid transition-all duration-300 ease-out ${
                showConditions ? "grid-rows-[1fr] opacity-100 px-3 pb-3 2xl:px-4 2xl:pb-4 pt-0" : "grid-rows-[0fr] opacity-0 px-3 pb-0 pt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-2 2xl:pt-3 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-1.5 2xl:gap-2.5 text-[clamp(10px,0.78vw,11px)] 2xl:text-xs text-slate-300">
                  {SLA_CONDITIONS.map((cond, idx) => (
                    <div key={idx} className="flex items-start gap-2 2xl:gap-2.5 p-1.5 2xl:p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-colors">
                      <span className="w-4 h-4 2xl:w-5 2xl:h-5 rounded-full bg-blue-500/30 text-blue-300 flex items-center justify-center shrink-0 mt-0.5 text-[9px] 2xl:text-[11px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{cond}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


