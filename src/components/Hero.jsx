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
      className="relative flex items-center min-h-[100svh] overflow-hidden border-b border-slate-800/80 bg-slate-950"
    >
      {/* Background layer with crisp clarity and subtle smooth parallax - scaled slightly (scale-105) to naturally crop out bottom-right watermark */}
      <div 
        data-parallax
        data-parallax-speed="0.05"
        className="absolute -inset-3 will-change-transform pointer-events-none scale-[1.04] origin-center"
        style={{
          backgroundImage: `url('/hero-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Ultra-soft localized text vignette (left only) so 90% of the futuristic background stays crisp and clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/10 to-transparent pointer-events-none" />

      {/* Discrete bottom-right corner gradient to ensure watermark logo is 100% concealed */}
      <div className="absolute bottom-0 right-0 w-32 h-20 bg-gradient-to-tl from-slate-950 via-slate-950/70 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 w-full flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-[100svh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6">
          {/* Content area with NO background box as requested */}
          <div className="reveal-scale-up max-w-xl text-left">

            {/* SINGLE H1 ON ENTIRE LANDING PAGE - High Contrast & Standout */}
            <h1 
              className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-black text-white tracking-tight leading-[1.2] mb-4 reveal-fade-right"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 4px 20px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 0, 0, 0.9)"
              }}
            >
              Website luôn ổn định mà{" "}
              <span 
                className="text-[#FF4545] inline-block"
                style={{
                  textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 0 24px rgba(236, 20, 32, 0.6), 0 4px 18px rgba(0, 0, 0, 0.95)"
                }}
              >
                không cần nuôi đội kỹ thuật.
              </span>
            </h1>

            {/* Concise Subheadline */}
            <p 
              className="text-sm sm:text-base text-white font-semibold leading-relaxed mb-6 reveal-fade-right" 
              style={{ 
                transitionDelay: '100ms',
                textShadow: "0 2px 8px rgba(0, 0, 0, 1), 0 4px 16px rgba(0, 0, 0, 0.95)"
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto reveal-fade-up" style={{ transitionDelay: '200ms' }}>
              <button
                onClick={handleAuditCTA}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.98] shadow-[0_4px_20px_rgba(236,20,32,0.5)] hover:shadow-[0_6px_25px_rgba(236,20,32,0.7)] rounded-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 border border-brand-400/40"
              >
                <span>Gửi website để kiểm tra</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handlePricingCTA}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/70 hover:bg-slate-800/90 active:scale-[0.98] border border-white/30 shadow-lg rounded-xl transition-all cursor-pointer backdrop-blur-md"
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
