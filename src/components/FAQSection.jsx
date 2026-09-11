import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FAQS_DATA } from "../data/maintenanceData";

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Split FAQs into 2 columns for a balanced, compact viewport fit
  const col1 = FAQS_DATA.slice(0, 5);
  const col2 = FAQS_DATA.slice(5, 10);

  return (
    <section
      id="faq"
      className="snap-section relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden flex flex-col justify-center"
    >
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh] relative">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full py-4 sm:py-6 flex flex-col justify-center relative z-10 h-full">
          
          {/* Compact Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-2.5 sm:mb-3.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/90 text-brand-700 text-[10.5px] font-bold uppercase tracking-wider mb-1.5 shadow-2xs backdrop-blur-xs">
              <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
              <span>Giải đáp thắc mắc</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
              Câu hỏi thường gặp về dịch vụ chăm sóc website
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-normal max-w-xl mx-auto">
              Mọi quy định về chi phí, hạn mức và cơ chế hỗ trợ kỹ thuật được giải thích rõ ràng và minh bạch.
            </p>
          </div>

          {/* 2-Column Responsive Compact Grid (Fits completely in 1 screen height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 max-h-[calc(100svh-175px)] sm:max-h-none overflow-y-auto pr-1" data-reveal-container>
            {/* Column 1 */}
            <div className="space-y-2 sm:space-y-2.5">
              {col1.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`reveal-stagger-item rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-brand-300 shadow-sm ring-1 ring-brand-500/15"
                        : "bg-white hover:bg-slate-50/80 border-slate-200/90 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full p-2.5 sm:p-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
                    >
                      <span className="text-[11.5px] sm:text-xs font-bold text-slate-900 pr-2 leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`p-1 rounded-md shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-brand-50 text-brand-600 rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        className="px-2.5 pb-2.5 pt-0 sm:px-3 sm:pb-3 text-[11px] sm:text-[11.5px] text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-2 sm:space-y-2.5">
              {col2.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`reveal-stagger-item rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-brand-300 shadow-sm ring-1 ring-brand-500/15"
                        : "bg-white hover:bg-slate-50/80 border-slate-200/90 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full p-2.5 sm:p-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
                    >
                      <span className="text-[11.5px] sm:text-xs font-bold text-slate-900 pr-2 leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`p-1 rounded-md shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-brand-50 text-brand-600 rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        className="px-2.5 pb-2.5 pt-0 sm:px-3 sm:pb-3 text-[11px] sm:text-[11.5px] text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Help Footer Hint */}
          <div className="reveal-fade-up text-center mt-2.5 sm:mt-3">
            <p className="text-[11px] text-slate-600 inline-flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-full border border-slate-200/70 shadow-2xs">
              <MessageSquare className="w-3 h-3 text-brand-600" />
              <span>Bạn có câu hỏi riêng cho website của mình?</span>
              <a
                href="#audit-form"
                className="font-bold text-brand-600 hover:text-brand-700 hover:underline cursor-pointer"
              >
                Gửi khảo sát nhận tư vấn &rarr;
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
