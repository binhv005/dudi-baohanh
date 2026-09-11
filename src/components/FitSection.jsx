import React from "react";
import { FIT_CRITERIA } from "../data/fitCriteria";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { trackCtaClick } from "../utils/tracking";

export default function FitSection({ onSelectPackage }) {
  const handleCustomQuote = () => {
    if (onSelectPackage) onSelectPackage("Cao cấp");
    trackCtaClick("fit_section", "Yêu cầu báo giá hệ thống riêng", "#lead-form");
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="fit" className="py-12 md:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S09 — Bộ lọc phù hợp
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            DUDI có phải là đối tác phù hợp với dự án của bạn?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Sự rõ ràng từ đầu giúp tiết kiệm thời gian, chi phí và đảm bảo kết quả nghiệm thu đúng kỳ vọng.
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          
          {/* Column 1: Suitable for DUDI */}
          <div className="rounded-2xl bg-emerald-50/50 border border-emerald-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-emerald-950">
                  {FIT_CRITERIA.suitable.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {FIT_CRITERIA.suitable.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1">
              <span>✓ Đảm bảo triển khai đúng tiến độ và chi phí cam kết</span>
            </div>
          </div>

          {/* Column 2: Custom Systems Requiring Separate Quote */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center font-bold">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {FIT_CRITERIA.customScope.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {FIT_CRITERIA.customScope.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      !
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 italic">
                Cần khảo sát nghiệp vụ riêng
              </span>
              <button
                type="button"
                onClick={handleCustomQuote}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 cursor-pointer"
              >
                <span>Yêu cầu báo giá riêng</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
