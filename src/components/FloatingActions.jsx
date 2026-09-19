import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackPhoneClick, trackZaloClick, trackCtaClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";
import { navigateToSection } from "../utils/navigationHelper";
import AIChatModal from "./AIChatModal";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    navigateToSection("");
  };

  return (
    <>
      {/* Floating AI Chatbot Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-[9999] flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">

        {/* 1. Scroll to Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200/90 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 cursor-pointer animate-fadeIn"
            aria-label="Cuộn lên đầu trang"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        )}

        {/* 2. Floating Robot Mascot AI Chat Button */}
        <div className="relative flex items-center group">
          {/* Tooltip on Desktop */}
          <span className="hidden md:flex items-center gap-1.5 absolute right-full mr-2.5 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-bold rounded-lg shadow-md border border-slate-700/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-blue-400">Trợ lý Kỹ thuật DUDI</span>
          </span>

          <button
            type="button"
            data-chat-toggle="true"
            onClick={() => setIsChatOpen((prev) => !prev)}
            aria-label="Mở Trợ lý Kỹ thuật DUDI"
            title="Chat với Trợ lý Kỹ thuật DUDI"
            className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/35 hover:shadow-blue-500/55 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none ${
              isChatOpen ? 'ring-2 ring-blue-400 scale-105' : ''
            }`}
          >
            <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
              <img
                src="/robot-mascot.webp"
                alt="Trợ lý Kỹ thuật DUDI"
                className="w-full h-full object-contain hover:rotate-6 transition-transform duration-300 drop-shadow-xs"
              />
            </div>
            
            {/* Online Green Indicator Dot */}
            <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
          </button>
        </div>

        {/* 3. Hotline Button */}
        <div className="relative flex items-center group">
          <span className="hidden md:flex items-center gap-1.5 absolute right-full mr-2.5 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-bold rounded-lg shadow-md border border-slate-700/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <span>Hotline: {COMPANY_INFO.hotlineFormatted}</span>
          </span>

          <a
            href={COMPANY_INFO.hotlineHref}
            onClick={(e) => {
              trackPhoneClick("floating_button");
              handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
            }}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            title={`Gọi hotline DUDI: ${COMPANY_INFO.hotlineFormatted} (Desktop: Sao chép)`}
            aria-label="Gọi hotline DUDI Software"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-pulse" />
          </a>
        </div>

        {/* 4. Zalo Button */}
        <div className="relative flex items-center group">
          <span className="hidden md:flex items-center gap-1.5 absolute right-full mr-2.5 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-bold rounded-lg shadow-md border border-slate-700/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <span>Chat Zalo</span>
          </span>

          <a
            href={COMPANY_INFO.zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackZaloClick("floating_button")}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            title="Chat Zalo hỗ trợ kỹ thuật"
            aria-label="Chat Zalo với DUDI Software"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
        </div>

      </div>
    </>
  );
}