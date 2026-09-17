import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignsSection from "./components/SignsSection";
import ServicesGroup from "./components/ServicesGroup";
import PricingSection from "./components/PricingSection";
import LimitsSection from "./components/LimitsSection";
import ProcessSection from "./components/ProcessSection";
import SLASection from "./components/SLASection";
import CasesSection from "./components/CasesSection";
import FAQSection from "./components/FAQSection";
import AuditFormSection from "./components/AuditFormSection";
import FinalCTASection from "./components/FinalCTASection";
import FooterSection from "./components/FooterSection";
import FloatingActions from "./components/FloatingActions";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { initAnchorTransitions } from "./utils/navigationHelper";

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState("Chưa rõ");
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Initialize unified scroll reveal & gentle parallax
  useScrollReveal();

  useEffect(() => {
    // Reset scroll to top on page refresh/initial load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Initialize global smooth anchor links
    const cleanupAnchors = initAnchorTransitions();

    // Listen to custom transition events for the top progress indicator
    const handleTransitionStart = () => setIsTransitioning(true);
    const handleTransitionEnd = () => setIsTransitioning(false);

    window.addEventListener("page:transition-start", handleTransitionStart);
    window.addEventListener("page:transition-end", handleTransitionEnd);

    // Turn off initial mount loading indicator after 800ms
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 850);

    return () => {
      cleanupAnchors();
      window.removeEventListener("page:transition-start", handleTransitionStart);
      window.removeEventListener("page:transition-end", handleTransitionEnd);
      clearTimeout(timer);
    };
  }, []);

  const handleSelectPackage = (pkgName) => {
    setSelectedPackage(pkgName);
  };

  return (
    <>
      {/* S01: Header - Fixed at the very top of viewport */}
      <Header onSelectPackage={handleSelectPackage} />

      {/* Top High-Tech Page Transition & Loading Bar */}
      {isTransitioning && <div className="page-transition-bar" key={Date.now()} />}

      <div className="page-fade-in flex flex-col bg-[#0B1120] text-slate-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen">
        {/* Main Container with 12 Core Alternating Tech Sections */}
        <main className="flex-grow">
          {/* S02: Hero with Single H1 (Light Tech Space with 3D Mascot) */}
          <Hero onSelectPackage={handleSelectPackage} />

          {/* S03: Dấu hiệu website cần chăm sóc (Deep Tech Slate) */}
          <SignsSection />

          {/* S04: 6 Nhóm công việc DUDI thực hiện (Clean Crisp Light Tech) */}
          <ServicesGroup />

          {/* S05: Bảng 3 gói giá & Định mức 15 tiêu chí (Deep Tech Midnight Purple) */}
          <PricingSection onSelectPackage={handleSelectPackage} />

          {/* S06: Quy chuẩn tính hạn mức (Crisp Light Slate) */}
          <LimitsSection />

          {/* S07: Quy trình tiếp nhận & xử lý 7 bước (Cyber Dark Slate) */}
          <ProcessSection />

          {/* S08: Cam kết mức độ SLA & Điều kiện (Crisp Light Tech) */}
          <SLASection />

          {/* S09: Tình huống kỹ thuật thực tế (Deep Tech Navy Slate) */}
          <CasesSection />

          {/* S10: Câu hỏi thường gặp FAQ (Clean Light Tech) */}
          <FAQSection />

          {/* S11: Form kiểm tra website & Thu thập nhu cầu (Deep Cyber Tech) */}
          <AuditFormSection
            selectedPackage={selectedPackage}
            onSelectPackage={handleSelectPackage}
          />

          {/* S12: CTA cuối trang (Vibrant Tech Gradient) */}
          <FinalCTASection />
        </main>

        {/* S13: Footer pháp lý chuẩn xác (Deep Space Slate) */}
        <FooterSection />
      </div>

      {/* Quick Contact Widget - Pinned fixed to viewport */}
      <FloatingActions />
    </>
  );
}
