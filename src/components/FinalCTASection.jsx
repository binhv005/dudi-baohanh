import React from "react";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackCtaClick, trackPhoneClick, trackZaloClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";
import { navigateToSection } from "../utils/navigationHelper";

export default function FinalCTASection() {
  const handleScrollToForm = () => {
    trackCtaClick("final_cta", "Cho DUDI biết tình trạng website của bạn", "#audit-form");
    navigateToSection("#audit-form");
  };

  return (
    <section 
      id="final-cta" 
      className="snap-section bg-[#F8FAFC] text-slate-800 border-b border-slate-200/90 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Outer wrapper giving generous side spacing */}
      <div className="max-w-6xl 2xl:max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12 w-full relative z-10">
        
        {/* Main Framed Card with decorative sample pattern at corners */}
        <div className="reveal-scale-up relative bg-[#FFF9F6] border border-orange-200/80 rounded-3xl sm:rounded-[36px] 2xl:rounded-[44px] shadow-[0_15px_45px_-10px_rgba(15,23,42,0.08),0_0_30px_rgba(249,115,22,0.08)] overflow-hidden py-[clamp(2rem,4vw,3.25rem)] 2xl:py-16 px-4 sm:px-8 2xl:px-14 text-center">
          
          {/* Subtle Grid Pattern Overlay matching reference sample */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(226, 232, 240, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.8) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* =========================================================================
              DECORATIVE CORNER ARTWORK
             ========================================================================= */}

          {/* 1. TOP-LEFT CORNER: Layered Organic Fluid Blobs */}
          <div className="absolute top-0 left-0 w-[clamp(80px,14vw,200px)] 2xl:w-[240px] h-[clamp(80px,14vw,200px)] 2xl:h-[240px] pointer-events-none select-none z-0">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M0 0 L140 0 C120 45 105 70 70 85 C35 100 20 135 0 160 Z"
                fill="#FDE8E8"
              />
              <path
                d="M0 0 L100 0 C90 35 110 65 95 95 C80 125 45 140 30 180 C20 205 10 215 0 220 Z"
                fill="#F97316"
              />
              <path
                d="M0 0 L55 0 C45 30 70 60 55 90 C40 120 15 145 0 175 Z"
                fill="#1E1B4B"
              />
              <path
                d="M30 20 C60 10 95 35 70 60 C45 85 85 105 110 75 C125 55 105 25 80 40"
                stroke="#1E1B4B"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* 2. TOP-RIGHT CORNER */}
          <div className="absolute top-0 right-0 w-[clamp(80px,14vw,200px)] 2xl:w-[240px] h-[clamp(80px,14vw,200px)] 2xl:h-[240px] pointer-events-none select-none z-0">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M240 0 L130 0 C145 35 180 50 170 85 C160 120 195 150 240 165 Z"
                fill="#1E1B4B"
              />
              <path
                d="M240 0 L175 0 C185 30 210 45 200 75 C190 105 215 130 240 140 Z"
                fill="#F97316"
              />
              <g stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round">
                <line x1="165" y1="25" x2="185" y2="40" />
                <line x1="155" y1="35" x2="175" y2="50" />
                <line x1="145" y1="45" x2="165" y2="60" />
                <line x1="135" y1="55" x2="150" y2="67" />
                <line x1="125" y1="65" x2="140" y2="77" />
              </g>
              <path
                d="M210 90 C225 85 235 95 230 110 C225 125 210 130 200 120 C190 110 195 95 210 90 Z"
                fill="#FB923C"
                stroke="#1E1B4B"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 3. BOTTOM-LEFT CORNER */}
          <div className="absolute bottom-0 left-0 w-[clamp(80px,14vw,200px)] 2xl:w-[240px] h-[clamp(80px,14vw,200px)] 2xl:h-[240px] pointer-events-none select-none z-0">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M0 240 L0 120 C35 135 60 165 50 195 C40 225 70 235 90 240 Z"
                fill="#F97316"
              />
              <path
                d="M0 240 L0 165 C25 175 45 195 35 220 C30 235 50 238 65 240 Z"
                fill="#1E1B4B"
              />
              <path
                d="M15 105 C30 95 45 105 40 125 C35 145 15 145 5 135 C-5 125 0 115 15 105 Z"
                fill="#FB923C"
                stroke="#1E1B4B"
                strokeWidth="2"
              />
              <g stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round">
                <line x1="30" y1="165" x2="50" y2="180" />
                <line x1="40" y1="175" x2="60" y2="190" />
                <line x1="50" y1="185" x2="70" y2="200" />
                <line x1="60" y1="195" x2="80" y2="210" />
              </g>
            </svg>
          </div>

          {/* 4. BOTTOM-RIGHT CORNER */}
          <div className="absolute bottom-0 right-0 w-[clamp(80px,14vw,200px)] 2xl:w-[240px] h-[clamp(80px,14vw,200px)] 2xl:h-[240px] pointer-events-none select-none z-0">
            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M240 240 L130 240 C145 205 170 190 205 175 C230 160 238 135 240 120 Z"
                fill="#FDE8E8"
              />
              <path
                d="M240 240 L160 240 C175 210 200 195 220 180 C235 170 238 150 240 140 Z"
                fill="#F97316"
              />
              <path
                d="M240 240 L195 240 C205 220 220 205 235 195 C238 190 240 180 240 170 Z"
                fill="#1E1B4B"
              />
              <path
                d="M165 210 C145 180 180 160 200 185 C220 210 210 235 185 225 C160 215 190 190 215 200"
                stroke="#1E1B4B"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M178 160 Q180 168 188 170 Q180 172 178 180 Q176 172 168 170 Q176 168 178 160 Z"
                fill="#1E1B4B"
              />
            </svg>
          </div>

          {/* =========================================================================
              CENTER CARD CONTENT
             ========================================================================= */}
          <div className="relative z-10 max-w-2xl 2xl:max-w-3xl mx-auto">
            
            {/* Main Headline */}
            <h2 className="text-[clamp(1.35rem,2.8vw,2.4rem)] 2xl:text-[2.65rem] font-black text-slate-900 tracking-tight leading-[1.2] mb-2 sm:mb-3 2xl:mb-4">
              Website của bạn đang được ai theo dõi?
            </h2>

            {/* Subheadline */}
            <p className="text-[clamp(0.75rem,1vw,0.95rem)] 2xl:text-[1.1rem] text-slate-600 font-medium max-w-xl 2xl:max-w-2xl mx-auto mb-6 sm:mb-8 2xl:mb-10 leading-relaxed">
              Cho DUDI biết tình trạng website để bên mình kiểm tra và đề xuất gói phù hợp từ{" "}
              <span className="font-extrabold text-brand-600">
                500.000đ/tháng
              </span>.
            </p>

            {/* Primary High-Impact CTA Button */}
            <div className="mb-5 sm:mb-7 2xl:mb-8 flex justify-center">
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 2xl:gap-3 px-[clamp(1.25rem,2.5vw,2rem)] 2xl:px-10 py-[clamp(0.75rem,1.5vh,0.95rem)] 2xl:py-4 text-[clamp(11.5px,0.9vw,14px)] 2xl:text-base font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-[0.98] shadow-[0_10px_30px_rgba(236,20,32,0.35)] hover:shadow-[0_14px_38px_rgba(236,20,32,0.5)] rounded-2xl 2xl:rounded-3xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 border border-brand-400/40 whitespace-nowrap"
              >
                <span>Cho DUDI biết tình trạng website của bạn</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 2xl:w-5 2xl:h-5" />
              </button>
            </div>

            {/* Secondary Direct Contact Actions */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 2xl:gap-4 text-xs">
              <a
                href={COMPANY_INFO.hotlineHref}
                onClick={(e) => {
                  trackPhoneClick("final_cta");
                  handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
                }}
                title="Gọi Hotline hoặc click để sao chép"
                className="inline-flex items-center gap-1.5 sm:gap-2 2xl:gap-2.5 px-3 sm:px-4 2xl:px-5 py-2 sm:py-2.5 2xl:py-3 rounded-xl 2xl:rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95 text-[clamp(11px,0.8vw,12.5px)] 2xl:text-sm"
              >
                <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-brand-500" />
                <span>Hotline: {COMPANY_INFO.hotlineFormatted}</span>
              </a>

              <a
                href={COMPANY_INFO.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackZaloClick("final_cta")}
                className="inline-flex items-center gap-1.5 sm:gap-2 2xl:gap-2.5 px-3 sm:px-4 2xl:px-5 py-2 sm:py-2.5 2xl:py-3 rounded-xl 2xl:rounded-2xl bg-blue-50/90 hover:bg-blue-100/90 text-blue-700 font-semibold border border-blue-200/80 shadow-2xs hover:shadow-xs transition-all active:scale-95 text-[clamp(11px,0.8vw,12.5px)] 2xl:text-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-blue-600" />
                <span>Chat Zalo tư vấn trực tiếp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
