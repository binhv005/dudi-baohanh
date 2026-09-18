import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FAQS_DATA } from "../data/maintenanceData";

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

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
      <div className="internal-scroll-container flex flex-col justify-center relative">
        <div className="max-w-6xl 2xl:max-w-[1460px] mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-10 w-full flex flex-col justify-center relative z-10">
          
          {/* Compact Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-2 sm:mb-3 2xl:mb-5">
            <h2 className="text-[clamp(1.15rem,2.2vw,1.65rem)] 2xl:text-[2rem] font-extrabold text-slate-900 tracking-tight mb-0.5">
              Câu hỏi thường gặp về dịch vụ chăm sóc website
            </h2>
            <p className="text-[clamp(0.72rem,0.9vw,0.8125rem)] 2xl:text-[0.9375rem] text-slate-600 leading-normal max-w-xl 2xl:max-w-2xl mx-auto">
              Mọi quy định về chi phí, hạn mức và cơ chế hỗ trợ kỹ thuật được giải thích rõ ràng và minh bạch.
            </p>
          </div>

          {/* 2-Column Responsive Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 2xl:gap-4" data-reveal-container>
            {/* Column 1 */}
            <div className="space-y-1.5 sm:space-y-2 2xl:space-y-3">
              {col1.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`reveal-stagger-item rounded-xl 2xl:rounded-2xl border transition-all duration-200 overflow-hidden ${
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
                      className="w-full p-2.5 sm:p-3 2xl:p-4 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
                    >
                      <span className="text-[clamp(11px,0.82vw,12.5px)] 2xl:text-[14.5px] font-bold text-slate-900 pr-2 leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`p-1 2xl:p-1.5 rounded-md shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-brand-50 text-brand-600 rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        className="px-2.5 pb-2.5 pt-0 sm:px-3 sm:pb-3 2xl:px-4 2xl:pb-4 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13.5px] text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-1.5 sm:space-y-2 2xl:space-y-3">
              {col2.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`reveal-stagger-item rounded-xl 2xl:rounded-2xl border transition-all duration-200 overflow-hidden ${
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
                      className="w-full p-2.5 sm:p-3 2xl:p-4 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
                    >
                      <span className="text-[clamp(11px,0.82vw,12.5px)] 2xl:text-[14.5px] font-bold text-slate-900 pr-2 leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`p-1 2xl:p-1.5 rounded-md shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-brand-50 text-brand-600 rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        className="px-2.5 pb-2.5 pt-0 sm:px-3 sm:pb-3 2xl:px-4 2xl:pb-4 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13.5px] text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
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
          <div className="reveal-fade-up text-center mt-2.5 sm:mt-3 2xl:mt-5">
            <p className="text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-sm text-slate-600 inline-flex items-center gap-1.5 2xl:gap-2 bg-white/70 px-3 2xl:px-4 py-1 2xl:py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
              <MessageSquare className="w-3 h-3 2xl:w-4 2xl:h-4 text-brand-600" />
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
