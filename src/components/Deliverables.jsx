import React from "react";
import { DELIVERABLES_DATA } from "../data/deliverables";
import { Layout, Palette, Smartphone, Send, Database, Search, BookOpen, KeyRound } from "lucide-react";

export default function Deliverables() {
  const getDeliverableIcon = (id) => {
    switch (id) {
      case "pages": return <Layout className="w-4 h-4 text-brand-500" />;
      case "ui": return <Palette className="w-4 h-4 text-purple-600" />;
      case "responsive": return <Smartphone className="w-4 h-4 text-blue-600" />;
      case "form": return <Send className="w-4 h-4 text-emerald-600" />;
      case "cms": return <Database className="w-4 h-4 text-amber-600" />;
      case "seo": return <Search className="w-4 h-4 text-cyan-600" />;
      case "blog": return <BookOpen className="w-4 h-4 text-indigo-600" />;
      case "handover": return <KeyRound className="w-4 h-4 text-emerald-600" />;
      default: return <Layout className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <section id="deliverables" className="py-12 md:py-14 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S05 — Phạm vi bàn giao
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Sản phẩm & tiêu chuẩn website khách hàng nhận được
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Mọi hạng mục đầu ra đều được định nghĩa rõ ràng, nghiệm thu dựa trên tiêu chuẩn kỹ thuật thực tế.
          </p>
        </div>

        {/* 8 Deliverables Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {DELIVERABLES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getDeliverableIcon(item.id)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Cam kết chuẩn bàn giao</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
