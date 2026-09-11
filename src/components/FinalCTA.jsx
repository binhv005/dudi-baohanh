import React from "react";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { trackCtaClick, trackZaloClick, trackPhoneClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function FinalCTA({ onSelectPackage }) {
  const handleScrollToForm = () => {
    if (onSelectPackage) onSelectPackage("Chưa rõ");
    trackCtaClick("final_cta", "Nhận tư vấn gói website phù hợp", "#lead-form");
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-14 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white relative overflow-hidden">
      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
          <span>Website giới thiệu doanh nghiệp chỉ từ 3.000.000đ</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
          Cho DUDI biết ngành nghề và website bạn cần
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Đội ngũ kỹ thuật DUDI sẽ tư vấn cấu trúc sitemap, phong cách giao diện và báo giá chuẩn xác theo đúng phạm vi bạn cần.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-[0.98] shadow-brand-sm hover:shadow-brand rounded-xl transition-all cursor-pointer"
          >
            <span>Nhận tư vấn gói website phù hợp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:0909163821"
              onClick={(e) => {
                trackPhoneClick("final_cta");
                handleHotlineClick(e, "0909 163 821", "0909163821");
              }}
              title="Gọi Hotline hoặc click để sao chép"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>0909 163 821</span>
            </a>

            <a
              href="https://zalo.me/0909163821"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackZaloClick("final_cta")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-blue-300 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-xl transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Zalo</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
