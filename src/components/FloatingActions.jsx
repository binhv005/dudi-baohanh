import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, Send } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackPhoneClick, trackZaloClick, trackCtaClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";
import { navigateToSection } from "../utils/navigationHelper";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToForm = () => {
    trackCtaClick("floating_widget", "Kiểm tra web", "#audit-form");
    navigateToSection("#audit-form");
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-2 sm:gap-2.5 pointer-events-auto">

      {/* Zalo Button */}
      <a
        href={COMPANY_INFO.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackZaloClick("floating_button")}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        title="Chat Zalo hỗ trợ kỹ thuật"
        aria-label="Chat Zalo với DUDI Software"
      >
        <MessageSquare className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
      </a>

      {/* Hotline Button */}
      <a
        href={COMPANY_INFO.hotlineHref}
        onClick={(e) => {
          trackPhoneClick("floating_button");
          handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
        }}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        title="Gọi hotline DUDI (Click để sao chép trên máy tính)"
        aria-label="Gọi hotline DUDI Software"
      >
        <Phone className="w-4.5 h-4.5 sm:w-6 sm:h-6 animate-pulse" />
      </a>

      {/* Scroll to Top button (At the bottom, same size) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200/90 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 cursor-pointer animate-fadeIn"
          aria-label="Cuộn lên đầu trang"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
