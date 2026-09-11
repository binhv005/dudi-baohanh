import React from "react";
import { PROCESS_STEPS } from "../data/process";
import { ArrowRight, CheckCircle2, FileText, Layout, Code, ShieldCheck, Rocket } from "lucide-react";

export default function Process() {
  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <FileText className="w-4 h-4 text-brand-500" />;
      case 1: return <Layout className="w-4 h-4 text-blue-600" />;
      case 2: return <Layout className="w-4 h-4 text-purple-600" />;
      case 3: return <Code className="w-4 h-4 text-amber-500" />;
      case 4: return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 5: return <Rocket className="w-4 h-4 text-brand-500" />;
      default: return <FileText className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <section id="process" className="py-12 md:py-14 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S08 — Quy trình 6 bước minh bạch
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Quy trình phối hợp rõ ràng từ tiếp nhận đến bàn giao
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mx-auto">
            Nguyên tắc cốt lõi: <strong>Không lập trình toàn bộ website khi khách hàng chưa duyệt cấu trúc sitemap và giao diện chính.</strong>
          </p>
        </div>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-xl font-black text-slate-200 group-hover:text-brand-300 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                  {step.title}
                </h3>

                {/* Details Breakdown */}
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-700">Đầu vào: </span>
                    <span className="text-slate-600">{step.input}</span>
                  </div>

                  <div className="p-2 rounded-lg bg-brand-50/40 border border-brand-100/60">
                    <span className="font-semibold text-brand-900">Công việc DUDI: </span>
                    <span className="text-brand-800">{step.action}</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Đầu ra: </span>
                  <span>{step.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
