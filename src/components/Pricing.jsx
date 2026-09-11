import React, { useState } from "react";
import { PACKAGES, PRICING_DISCLAIMER, GLOSSARY_TERMS } from "../data/packages";
import { Check, Info, HelpCircle, ArrowRight, Sparkles, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { trackPackageSelect, trackCtaClick } from "../utils/tracking";

export default function Pricing({ onSelectPackage }) {
  const [showGlossary, setShowGlossary] = useState(false);

  const handleSelect = (pkg) => {
    trackPackageSelect(pkg.name, pkg.price || "Liên hệ");
    if (onSelectPackage) {
      onSelectPackage(pkg.leadPackageVal);
    }
    trackCtaClick("pricing_card", pkg.ctaText, "#lead-form");

    // Smooth scroll to lead form and focus input
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.getElementById("fullName");
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S06 — Bảng giá & Định nghĩa phạm vi
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Minh bạch chi phí, rõ ràng từng hạng mục bàn giao
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Thanh toán một lần theo dự án, không phí duy trì định kỳ ngầm. Mọi tính năng đều được định nghĩa chính xác.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-8">
          {PACKAGES.map((pkg) => {
            const isStandard = pkg.recommended;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? "bg-gradient-to-b from-white via-white to-brand-50/30 border-2 border-brand-500 shadow-lg ring-2 ring-brand-500/10"
                    : "bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-slate-300"
                }`}
              >
                {/* Recommended Top Badge */}
                {isStandard && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold shadow-sm uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Non-recommended badge */}
                  {!isStandard && (
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Header: Name & Target */}
                  <div className="mb-3">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Gói {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dành cho: <span className="font-semibold text-slate-700">{pkg.target}</span>
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 mb-4">
                    <div className="flex items-baseline gap-1.5">
                      {pkg.price ? (
                        <>
                          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                            {pkg.priceLabel}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                            {pkg.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-black text-brand-600">
                          {pkg.priceLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      Mục tiêu: {pkg.objective}
                    </p>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Phạm vi chi tiết:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {pkg.scope.map((item, idx) => {
                        const isNegative = item.startsWith("Không có");
                        return (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                                isNegative
                                  ? "bg-slate-100 text-slate-400"
                                  : isStandard
                                  ? "bg-brand-50 text-brand-600 font-bold"
                                  : "bg-emerald-50 text-emerald-600 font-bold"
                              }`}
                            >
                              {isNegative ? "–" : "✓"}
                            </span>
                            <span className={isNegative ? "text-slate-400 italic text-[11px]" : "text-slate-700 text-[11px]"}>
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 ${
                    isStandard
                      ? "bg-brand-500 hover:bg-brand-600 text-white shadow-brand-sm hover:shadow-brand focus-visible:ring-brand-500"
                      : "bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-700"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* S06.1 — BẢNG DISCLAIMER GIÁ BẮT BUỘC */}
        <div className="rounded-xl bg-amber-50/70 border border-amber-200/90 p-4 sm:p-5 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-amber-900">
                {PRICING_DISCLAIMER.title}
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                {PRICING_DISCLAIMER.mainNote}
              </p>
              <div className="pt-1">
                <div className="text-[11px] font-bold text-amber-900 mb-1">
                  Chi phí trên CHƯA bao gồm:
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-[11px] text-amber-800">
                  {PRICING_DISCLAIMER.exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* S06.2 — CHUẨN HÓA THUẬT NGỮ CHUYÊN MÔN */}
        <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 sm:p-4">
          <button
            type="button"
            onClick={() => setShowGlossary(!showGlossary)}
            className="w-full flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
            aria-expanded={showGlossary}
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-bold text-slate-800">
                Giải thích chuẩn hóa thuật ngữ chuyên môn (CRUD, SEO, Giao diện có sẵn...)
              </span>
            </div>
            {showGlossary ? (
              <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            )}
          </button>

          {showGlossary && (
            <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {GLOSSARY_TERMS.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-white rounded-lg border border-slate-200/60">
                  <div className="text-xs font-bold text-brand-600 mb-0.5">
                    {item.term}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
