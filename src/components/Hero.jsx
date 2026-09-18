import React from "react";
import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "../utils/tracking";
import { navigateToSection } from "../utils/navigationHelper";

export default function Hero({ onSelectPackage }) {
  const handleAuditCTA = () => {
    if (onSelectPackage) onSelectPackage("Chưa rõ");
    trackCtaClick("hero_primary", "Gửi website để kiểm tra", "#audit-form");
    navigateToSection("#audit-form");
  };

  const handlePricingCTA = () => {
    trackCtaClick("hero_secondary", "Xem các gói", "#pricing");
    navigateToSection("#pricing");
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] h-[100svh] flex items-center overflow-hidden border-b border-slate-800/90 bg-slate-950"
    >
      {/* Full-bleed 100% background layer with responsive cover and mascot focal alignment */}
      <div 
        data-parallax
        data-parallax-speed="0.03"
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url('/hero-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: '82% 32%',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Localized left vignette to ensure 100% readability while keeping robot 100% vivid */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[68%] lg:w-[58%] bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />

      {/* Subtle top shade for header contrast */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent pointer-events-none" />

      {/* Bottom subtle edge transition */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none z-10" />

      {/* Main Responsive Content Layer */}
      <div className="relative z-10 w-full h-full flex items-center pt-[clamp(4.25rem,8vh,6rem)] pb-[clamp(1.5rem,3.5vh,2.75rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Content area constrained to left so it never overlaps robot on right */}
          <div className="reveal-scale-up max-w-[clamp(290px,52vw,660px)] text-left">

            {/* SINGLE H1 ON ENTIRE LANDING PAGE */}
            <h1 
              className="text-[clamp(1.55rem,2.8vw+0.4rem,2.85rem)] font-black text-white tracking-tight leading-[1.18] mb-[clamp(0.6rem,1.5vh,1.1rem)] reveal-fade-right"
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 1), 0 4px 24px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 0, 0, 0.9)"
              }}
            >
              Website luôn ổn định mà{" "}
              <span 
                className="text-[#FF4545] inline-block"
                style={{
                  textShadow: "0 2px 10px rgba(0, 0, 0, 1), 0 0 24px rgba(236, 20, 32, 0.65), 0 4px 20px rgba(0, 0, 0, 0.95)"
                }}
              >
                không cần nuôi đội kỹ thuật.
              </span>
            </h1>

            {/* Concise Subheadline */}
            <p 
              className="text-[clamp(0.8125rem,0.95vw+0.15rem,1.0625rem)] text-white font-semibold leading-relaxed mb-[clamp(1rem,2.2vh,1.6rem)] reveal-fade-right max-w-xl" 
              style={{ 
                transitionDelay: '100ms',
                textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 4px 18px rgba(0, 0, 0, 0.95)"
              }}
            >
              Kiểm tra, backup, sửa lỗi và cập nhật định kỳ chỉ từ{" "}
              <span 
                className="font-black text-amber-300"
                style={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 0 16px rgba(251, 191, 36, 0.6)"
                }}
              >
                500.000đ/tháng
              </span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto reveal-fade-up" style={{ transitionDelay: '200ms' }}>
              <button
                onClick={handleAuditCTA}
                className="inline-flex items-center justify-center gap-2 px-[clamp(1.15rem,2vw,1.65rem)] py-[clamp(0.68rem,1.35vh,0.9rem)] text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.98] shadow-[0_4px_20px_rgba(236,20,32,0.5)] hover:shadow-[0_6px_25px_rgba(236,20,32,0.7)] rounded-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 border border-brand-400/40 whitespace-nowrap"
              >
                <span>Gửi website để kiểm tra</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handlePricingCTA}
                className="inline-flex items-center justify-center gap-2 px-[clamp(1.15rem,2vw,1.65rem)] py-[clamp(0.68rem,1.35vh,0.9rem)] text-xs sm:text-sm font-semibold text-white bg-slate-900/75 hover:bg-slate-800/90 active:scale-[0.98] border border-white/30 shadow-lg rounded-xl transition-all cursor-pointer backdrop-blur-md whitespace-nowrap"
              >
                <span>Xem các gói dịch vụ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
