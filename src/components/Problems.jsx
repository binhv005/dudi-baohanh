import React from "react";
import { PROBLEMS_DATA } from "../data/problems";
import { GlobeX, Share2, ShieldAlert, Layers, HelpCircle, Lock } from "lucide-react";

export default function Problems() {
  const getProblemIcon = (id) => {
    switch (id) {
      case "no-website": return <GlobeX className="w-4 h-4 text-rose-500" />;
      case "scattered-info": return <Share2 className="w-4 h-4 text-amber-500" />;
      case "credibility": return <ShieldAlert className="w-4 h-4 text-red-500" />;
      case "no-catalog": return <Layers className="w-4 h-4 text-blue-500" />;
      case "no-lead-form": return <HelpCircle className="w-4 h-4 text-purple-500" />;
      case "social-dependency": return <Lock className="w-4 h-4 text-slate-600" />;
      default: return <GlobeX className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="problems" className="py-12 md:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S04 — Vấn đề thực tế
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Những rào cản khi doanh nghiệp chưa có website chuẩn mực
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Khách hàng và đối tác ngày càng chú trọng tính chuyên nghiệp và minh bạch trước khi quyết định hợp tác.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {PROBLEMS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                    {getProblemIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center gap-1 text-[10px] font-medium text-slate-400">
                <span className="w-1 h-1 rounded-full bg-rose-400" />
                <span>Nỗi đau thường gặp của doanh nghiệp</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
