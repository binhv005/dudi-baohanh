import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackCtaClick, trackPhoneClick, trackZaloClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";
import { navigateToSection } from "../utils/navigationHelper";

export default function Header({ onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      setIsScrolled(scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dịch vụ", href: "#services" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Hạn mức", href: "#limits" },
    { name: "Quy trình", href: "#process" },
    { name: "SLA", href: "#sla" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href, name) => {
    setMobileMenuOpen(false);
    trackCtaClick("header_nav", name, href);
    navigateToSection(href);
  };

  const handleAuditClick = () => {
    setMobileMenuOpen(false);
    if (onSelectPackage) onSelectPackage("Chưa rõ");
    trackCtaClick("header_primary", "Gửi website để kiểm tra", "#audit-form");
    navigateToSection("#audit-form");
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/90 py-2.5"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent border-b border-white/10 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Legal Entity */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-0.5"
            aria-label="Trang chủ DUDI Software"
          >
            <img
              src="/logo.webp"
              alt="Logo DUDI Software"
              className="w-9 h-9 object-contain shadow-xs group-hover:scale-105 transition-transform duration-200"
              width="36"
              height="36"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg leading-tight text-white tracking-tight flex items-center gap-1">
                DUDI <span className="text-brand-500 font-bold text-xs sm:text-sm">Software</span>
              </span>
              <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase leading-none truncate max-w-[200px] sm:max-w-none">
                Chăm sóc & Vận hành Website
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.name)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden sm:flex items-center">
            {/* Main CTA */}
            <button
              onClick={handleAuditClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-[0.98] shadow-brand-sm hover:shadow-brand rounded-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 border border-brand-400/40"
            >
              <span>Gửi website để kiểm tra</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleAuditClick}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-lg shadow-xs"
            >
              Kiểm tra web
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900/98 backdrop-blur-xl shadow-2xl animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.name)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={COMPANY_INFO.hotlineHref}
                  onClick={(e) => {
                    trackPhoneClick("header_mobile");
                    handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-400" />
                  <span>{COMPANY_INFO.hotlineFormatted}</span>
                </a>
                <a
                  href={COMPANY_INFO.zaloHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackZaloClick("header_mobile")}
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-blue-300 bg-blue-950/40 border border-blue-800/60 rounded-lg hover:bg-blue-900/50"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                  <span>Chat Zalo</span>
                </a>
              </div>

              <button
                onClick={handleAuditClick}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-brand-sm"
              >
                <span>Gửi website để kiểm tra</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
