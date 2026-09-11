import React from "react";
import { CASES_DATA } from "../data/cases";
import { CheckCircle, Monitor, ExternalLink, ShieldCheck } from "lucide-react";
import { trackCtaClick } from "../utils/tracking";

export default function CaseStudies({ onSelectPackage }) {
  const handleCaseAction = (title) => {
    trackCtaClick("case_study", `Tư vấn dự án tương tự: ${title}`, "#lead-form");
    if (onSelectPackage) onSelectPackage("Chưa rõ");
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cases" className="py-12 md:py-14 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-1/3 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S07 — Mô hình dự án tiêu chuẩn
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
            Showcase cấu trúc giao diện theo tiêu chuẩn kỹ thuật DUDI
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-3xl mx-auto">
            Mẫu kiến trúc và tính năng tham khảo được thiết lập tối ưu theo từng nhóm ngành nghề thực tế.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {CASES_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              {/* Card Header & Industry Tag */}
              <div className="p-5 sm:p-6">
                {/* Mandatory Disclaimer Badge */}
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-400 bg-brand-950/60 border border-brand-800/60 px-2 py-0.5 rounded-full mb-3">
                  <ShieldCheck className="w-3 h-3 text-brand-400" />
                  <span>{item.badge}</span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Ngành nghề: {item.industry}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>

                {/* Problem */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-4 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Bài toán: </span>
                  {item.problem}
                </div>

                {/* Page Count */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 pb-2.5 border-b border-slate-800">
                  <Monitor className="w-3.5 h-3.5 text-brand-400" />
                  <span>Quy mô: <strong className="text-white">{item.pageCount}</strong></span>
                </div>

                {/* Feature List */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                    Chức năng chính:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Status & Action */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{item.status}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCaseAction(item.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>Tư vấn mẫu này</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
