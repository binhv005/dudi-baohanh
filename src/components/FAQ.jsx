import React, { useState } from "react";
import { FAQ_DATA } from "../data/faq";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { trackEvent } from "../utils/tracking";

export default function FAQ() {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const toggleItem = (index, question) => {
    setOpenItems((prev) => {
      const newState = { ...prev, [index]: !prev[index] };
      if (newState[index]) {
        trackEvent("faq_expand", { question_index: index, question });
      }
      return newState;
    });
  };

  return (
    <section id="faq" className="py-12 md:py-14 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S10 — Câu hỏi thường gặp
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Giải đáp thắc mắc về dịch vụ thiết kế website
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Những thông tin giải đáp minh bạch giúp bạn nắm rõ quy trình và chính sách trước khi bắt đầu.
          </p>
        </div>

        {/* 8 Accordion Items */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = !!openItems[index];
            const contentId = `faq-answer-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(index, item.question)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-4 py-3 sm:py-3.5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl cursor-pointer"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <span className="p-1 rounded-full bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-4 pb-3.5 pt-0.5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 transition-all duration-200 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p className="pl-7">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
