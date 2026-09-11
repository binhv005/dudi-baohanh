import React from "react";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackCtaClick, trackPhoneClick, trackZaloClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function FinalCTASection() {
  const handleScrollToForm = () => {
    trackCtaClick("final_cta", "Cho DUDI biết tình trạng website của bạn", "#audit-form");
    const el = document.getElementById("audit-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="final-cta" className="snap-section bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh] relative">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="reveal-scale-up max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/40 text-brand-300 text-xs font-semibold mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Bảo vệ vận hành 24/7 cho website của bạn</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Website của bạn đang được ai theo dõi?
          </h2>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Cho DUDI biết tình trạng website để bên mình kiểm tra và đề xuất gói phù hợp từ{" "}
            <span className="font-extrabold text-red-500">
              500.000đ/tháng
            </span>.
          </p>

          {/* Primary CTA button */}
          <div className="mb-8">
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-[0.98] shadow-brand hover:shadow-brand-lg rounded-2xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Cho DUDI biết tình trạng website của bạn</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Secondary Contact Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href={COMPANY_INFO.hotlineHref}
              onClick={(e) => {
                trackPhoneClick("final_cta");
                handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
              }}
              title="Gọi Hotline hoặc click để sao chép"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 backdrop-blur-sm transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>Hotline: {COMPANY_INFO.hotlineFormatted}</span>
            </a>

            <a
              href={COMPANY_INFO.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackZaloClick("final_cta")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 backdrop-blur-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Chat Zalo tư vấn trực tiếp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
