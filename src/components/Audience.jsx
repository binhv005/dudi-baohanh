import React from "react";
import { AUDIENCE_DATA } from "../data/audience";
import { ArrowRight, UserCheck, Building2, Award, Target } from "lucide-react";
import { trackCtaClick } from "../utils/tracking";

export default function Audience({ onSelectPackage }) {
  const getIcon = (id) => {
    switch (id) {
      case "individual": return <UserCheck className="w-5 h-5 text-brand-500" />;
      case "small-business": return <Building2 className="w-5 h-5 text-blue-600" />;
      case "branding": return <Award className="w-5 h-5 text-amber-500" />;
      case "lead-generation": return <Target className="w-5 h-5 text-emerald-600" />;
      default: return <UserCheck className="w-5 h-5 text-brand-500" />;
    }
  };

  const handleCardClick = (item) => {
    if (onSelectPackage) {
      onSelectPackage(item.suggestedPackageId === "basic" ? "Cơ bản" : item.suggestedPackageId === "standard" ? "Tiêu chuẩn" : "Cao cấp");
    }
    trackCtaClick("audience_card", `Chọn gói cho ${item.title}`, "#pricing");
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audience" className="py-12 md:py-14 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S03 — Phân loại đối tượng
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Giải pháp website thiết kế đúng nhu cầu từng mô hình doanh nghiệp
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Dù bạn là cá nhân khởi nghiệp hay doanh nghiệp mở rộng quy mô, DUDI đều có gói dịch vụ phù hợp với ngân sách và mục tiêu thực tế.
          </p>
        </div>

        {/* 4 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {AUDIENCE_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Icon + Number */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>

                {/* Need description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                  {item.need}
                </p>

                {/* Key Points */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Recommendation & CTA */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold leading-none mb-1">
                    Gói gợi ý
                  </div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span>Gói {item.suggestedPackage}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCardClick(item)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                >
                  <span>Xem chi tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
