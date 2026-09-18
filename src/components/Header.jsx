import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackCtaClick, trackPhoneClick, trackZaloClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";
import { navigateToSection } from "../utils/navigationHelper";

export default function Header({ onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [webMenuOpen, setWebMenuOpen] = useState(false);
  const [mobileWebMenuOpen, setMobileWebMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      setIsScrolled(scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setWebMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinksBefore = [
    { name: "Dịch vụ", href: "#services" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Hạn mức", href: "#limits" },
    { name: "Quy trình", href: "#process" },
    { name: "SLA", href: "#sla" },
  ];

  const webSystemLinks = [
    { name: "Cập nhật", href: "https://dudi-page.vercel.app/" },
    { name: "Đơn giá", href: "https://dudi-dongia.vercel.app/" },
    { name: "Bán hàng", href: "https://dudi-banhang.vercel.app/" },
    { name: "Dịch vụ", href: "https://dudi-gioithieu.vercel.app/" },
    { name: "SEO", href: "https://dudisoftwareseo.vercel.app/" },
    { name: "Bảo trì", href: "https://dudi-baotri.vercel.app/" },
    { name: "Tổng hợp", href: "https://dudi-tonghop.vercel.app/" },
  ];

  const handleNavClick = (href, name) => {
    setMobileMenuOpen(false);
    setWebMenuOpen(false);
    trackCtaClick("header_nav", name, href);
    navigateToSection(href);
  };

  const handleAuditClick = () => {
    setMobileMenuOpen(false);
    setWebMenuOpen(false);
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
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Legal Entity */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-0.5 shrink-0"
            aria-label="Trang chủ DUDI Software"
          >
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-tight text-white tracking-tight flex items-center gap-1">
                DUDI <span className="text-brand-500 font-bold text-xs sm:text-sm 2xl:text-base">Software</span>
              </span>
              <span className="text-[9.5px] sm:text-[10px] 2xl:text-[11px] text-slate-300 font-medium tracking-wider uppercase leading-none truncate max-w-[150px] sm:max-w-none">
                Chăm sóc & Vận hành Website
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5">
            {navLinksBefore.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.name)}
                className="px-2.5 xl:px-3 2xl:px-3.5 py-1.5 text-xs xl:text-[13px] 2xl:text-[14.5px] font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown: Hệ thống web */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setWebMenuOpen(!webMenuOpen)}
                onMouseEnter={() => setWebMenuOpen(true)}
                aria-expanded={webMenuOpen}
                className={`flex items-center gap-1 px-2.5 xl:px-3 2xl:px-3.5 py-1.5 text-xs xl:text-[13px] 2xl:text-[14.5px] font-bold rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 whitespace-nowrap ${
                  webMenuOpen
                    ? "text-brand-400 bg-white/15"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>Hệ thống web</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    webMenuOpen ? "rotate-180 text-brand-400" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Popup Menu */}
              {webMenuOpen && (
                <div
                  onMouseLeave={() => setWebMenuOpen(false)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-slate-200/90 py-1.5 z-50 animate-fadeIn overflow-hidden"
                >
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Hệ sinh thái website DUDI
                  </div>
                  {webSystemLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setWebMenuOpen(false);
                        trackCtaClick("header_web_system", item.name, item.href);
                      }}
                      className="block px-4 py-2 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-brand-600 hover:bg-slate-50 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ Nav Link */}
            <a
              href="#faq"
              onClick={() => handleNavClick("#faq", "FAQ")}
              className="px-2.5 xl:px-3 2xl:px-3.5 py-1.5 text-xs xl:text-[13px] 2xl:text-[14.5px] font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden sm:flex items-center shrink-0">
            {/* Main CTA */}
            <button
              onClick={handleAuditClick}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 2xl:px-5 py-2 2xl:py-2.5 text-xs xl:text-[13px] 2xl:text-[14px] font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-[0.98] shadow-brand-sm hover:shadow-brand rounded-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 border border-brand-400/40 whitespace-nowrap"
            >
              <span>Gửi website để kiểm tra</span>
              <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              onClick={handleAuditClick}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-lg shadow-xs whitespace-nowrap"
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
          <div className="px-4 pt-3 pb-5 space-y-1.5 max-h-[calc(100svh-80px)] overflow-y-auto">
            {navLinksBefore.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.name)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Dropdown: Hệ thống web */}
            <div className="rounded-lg bg-slate-850/60 border border-slate-800/80 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileWebMenuOpen(!mobileWebMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-brand-400 hover:text-white"
              >
                <span>Hệ thống web</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileWebMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileWebMenuOpen && (
                <div className="px-3 pb-2 pt-0.5 space-y-1 bg-slate-900/80 border-t border-slate-800">
                  {webSystemLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        trackCtaClick("header_mobile_web_system", item.name, item.href);
                      }}
                      className="block px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile FAQ Nav Link */}
            <a
              href="#faq"
              onClick={() => handleNavClick("#faq", "FAQ")}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
            >
              FAQ
            </a>

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
