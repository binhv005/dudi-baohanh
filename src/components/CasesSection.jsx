import React from "react";
import {
  Sparkles,
  TrendingUp,
  Lightbulb,
  Zap,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  CheckCircle2
} from "lucide-react";
import { TECHNICAL_CASES } from "../data/maintenanceData";

// Helper component for Triple Chevron indicators
function TripleChevron({ direction = "right", className = "" }) {
  if (direction === "left") {
    return (
      <div className={`flex items-center text-rose-500 font-black ${className}`}>
        <ChevronLeft className="w-4 h-4 stroke-[3] -mr-2.5" />
        <ChevronLeft className="w-4 h-4 stroke-[3] -mr-2.5" />
        <ChevronLeft className="w-4 h-4 stroke-[3]" />
      </div>
    );
  }

  if (direction === "right") {
    return (
      <div className={`flex items-center text-rose-500 font-black ${className}`}>
        <ChevronRight className="w-4 h-4 stroke-[3] -mr-2.5" />
        <ChevronRight className="w-4 h-4 stroke-[3] -mr-2.5" />
        <ChevronRight className="w-4 h-4 stroke-[3]" />
      </div>
    );
  }

  if (direction === "up") {
    return (
      <div className={`flex flex-col items-center text-rose-500 font-black ${className}`}>
        <ChevronUp className="w-4 h-4 stroke-[3] -mb-2.5" />
        <ChevronUp className="w-4 h-4 stroke-[3] -mb-2.5" />
        <ChevronUp className="w-4 h-4 stroke-[3]" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-rose-500 font-black ${className}`}>
      <ChevronDown className="w-4 h-4 stroke-[3] -mb-2.5" />
      <ChevronDown className="w-4 h-4 stroke-[3] -mb-2.5" />
      <ChevronDown className="w-4 h-4 stroke-[3]" />
    </div>
  );
}

export default function CasesSection() {
  const caseConfigs = [
    {
      id: "01",
      keyword: "KHÔI PHỤC",
      color: "bg-[#E11D48]",
      icon: <TrendingUp className="w-5 h-5 text-white stroke-[2.2]" />,
      bulbPos: "top-right",
      chevronDir: "left",
      data: TECHNICAL_CASES[0]
    },
    {
      id: "02",
      keyword: "FORM & EMAIL",
      color: "bg-[#EAB308]",
      icon: <Lightbulb className="w-5 h-5 text-white stroke-[2.2]" />,
      bulbPos: "bottom-right",
      chevronDir: "up",
      data: TECHNICAL_CASES[1]
    },
    {
      id: "03",
      keyword: "TỐC ĐỘ ẢNH",
      color: "bg-[#0F3A66]",
      icon: <Zap className="w-5 h-5 text-white stroke-[2.2]" />,
      bulbPos: "top-left",
      chevronDir: "down",
      data: TECHNICAL_CASES[2]
    },
    {
      id: "04",
      keyword: "LỖI 500 & 404",
      color: "bg-[#0284C7]",
      icon: <BarChart3 className="w-5 h-5 text-white stroke-[2.2]" />,
      bulbPos: "bottom-left",
      chevronDir: "right",
      data: TECHNICAL_CASES[3]
    }
  ];

  // Infinite ambient floating bubbles config - Monochromatic & Sparse
  const ambientBubbles = [
    { size: 28, left: "7%", duration: 14, delay: -3 },
    { size: 48, left: "22%", duration: 18, delay: -9 },
    { size: 20, left: "38%", duration: 12, delay: -5 },
    { size: 54, left: "55%", duration: 20, delay: -14 },
    { size: 24, left: "72%", duration: 13, delay: -7 },
    { size: 42, left: "88%", duration: 16, delay: -11 },
  ];

  return (
    <section id="cases" className="snap-section bg-[#FDFBF7] border-b border-slate-200/90 relative overflow-hidden h-[100svh] max-h-[100svh] flex flex-col justify-center py-2 sm:py-3">
      
      {/* Infinite Floating Ambient Bubbles Layer (Single Color & Sparse) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {ambientBubbles.map((b, idx) => (
          <div
            key={idx}
            className="absolute bottom-[-60px] rounded-full animate-bubble-rise pointer-events-none"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: b.left,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(244,63,94,0.18) 55%, rgba(225,29,72,0.06) 100%)`,
              border: `1.5px solid rgba(244,63,94,0.45)`,
              boxShadow: `inset -2px -2px 6px rgba(225,29,72,0.12), 0 6px 18px rgba(225,29,72,0.12)`
            }}
          >
            {/* 3D Specular Highlight Dot */}
            <span 
              className="rounded-full bg-white/95 absolute"
              style={{
                width: `${Math.max(b.size * 0.2, 4)}px`,
                height: `${Math.max(b.size * 0.2, 4)}px`,
                top: `${Math.max(b.size * 0.15, 3)}px`,
                left: `${Math.max(b.size * 0.18, 3)}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="internal-scroll-container relative z-10 flex flex-col justify-center h-full w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center h-full">

          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-xl mx-auto mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold uppercase tracking-wider mb-1 shadow-2xs">
              <Sparkles className="w-3 h-3 text-rose-600" />
              <span>S09 — TÌNH HUỐNG KỸ THUẬT THỰC TẾ</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              4 tình huống xử lý kỹ thuật trước / sau tiêu biểu
            </h2>
          </div>

          {/* INFOGRAPHIC 2x2 PINWHEEL LAYOUT */}
          <div className="relative max-w-3xl lg:max-w-[760px] mx-auto w-full px-2 sm:px-4">

            {/* Top Chevrons */}
            <div className="hidden lg:flex justify-end px-6 mb-1">
              <TripleChevron direction="left" />
            </div>

            {/* Left Chevron indicator */}
            <div className="hidden lg:block absolute left-0 top-1/4 -translate-y-1/2 z-20">
              <TripleChevron direction="down" />
            </div>

            {/* Right Chevron indicator */}
            <div className="hidden lg:block absolute right-0 bottom-1/4 translate-y-1/2 z-20">
              <TripleChevron direction="up" />
            </div>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">

              {/* CARD 01 - TOP LEFT (RED) */}
              <div className="relative reveal-stagger-item group">
                {/* Floating Bulb (Top-Right) */}
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-3.5 lg:-top-4 lg:-right-4 z-20 pointer-events-none">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-[#E11D48] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {caseConfigs[0].icon}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="rounded-[20px] sm:rounded-[24px] bg-[#E11D48] text-white p-3.5 sm:p-4 lg:p-4.5 shadow-lg shadow-rose-600/15 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header: Large Number + Keyword */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                        01
                      </span>
                      <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white/95">
                        {caseConfigs[0].keyword}
                      </span>
                    </div>

                    {/* Divider Line */}
                    <div className="h-[1.5px] bg-white/40 w-full mb-1.5 rounded-full" />

                    {/* Problem / Solution Content */}
                    <div className="space-y-1 text-[11px] sm:text-[11.5px] text-white/90 leading-snug">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        Website lỗi trắng trang, xung đột sau khi tự cập nhật hệ thống.
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án DUDI: </strong>
                        Truy xuất bản backup gần nhất, khôi phục an toàn trong 45 phút.
                      </p>
                    </div>
                  </div>

                  {/* Result Bottom Badge */}
                  <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0 stroke-[2.5]" />
                    <span className="truncate">Kết quả: Bảo toàn 100% dữ liệu bài viết & đơn</span>
                  </div>
                </div>
              </div>

              {/* CARD 02 - TOP RIGHT (YELLOW/AMBER) */}
              <div className="relative reveal-stagger-item group">
                {/* Floating Bulb (Bottom-Right) */}
                <div className="hidden sm:flex items-center gap-2 absolute -bottom-3.5 -right-3.5 lg:-bottom-4 lg:-right-4 z-20 pointer-events-none">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-[#EAB308] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {caseConfigs[1].icon}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="rounded-[20px] sm:rounded-[24px] bg-[#EAB308] text-white p-3.5 sm:p-4 lg:p-4.5 shadow-lg shadow-amber-500/15 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header: Large Number + Keyword */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                        02
                      </span>
                      <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white/95">
                        {caseConfigs[1].keyword}
                      </span>
                    </div>

                    {/* Divider Line */}
                    <div className="h-[1.5px] bg-white/40 w-full mb-1.5 rounded-full" />

                    {/* Problem / Solution Content */}
                    <div className="space-y-1 text-[11px] sm:text-[11.5px] text-white/90 leading-snug">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        Khách điền tư vấn nhưng hộp thư doanh nghiệp không nhận mail.
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án DUDI: </strong>
                        Rà soát cấu hình SMTP, nhật ký máy chủ và cấu hình lại API.
                      </p>
                    </div>
                  </div>

                  {/* Result Bottom Badge */}
                  <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-950 shrink-0 stroke-[2.5]" />
                    <span className="truncate">Kết quả: Email gửi thành công ngay, tin cậy tuyệt đối</span>
                  </div>
                </div>
              </div>

              {/* CARD 03 - BOTTOM LEFT (DARK NAVY) */}
              <div className="relative reveal-stagger-item group">
                {/* Floating Bulb (Top-Left) */}
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -left-3.5 lg:-top-4 lg:-left-4 z-20 pointer-events-none">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0F3A66] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {caseConfigs[2].icon}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="rounded-[20px] sm:rounded-[24px] bg-[#0F3A66] text-white p-3.5 sm:p-4 lg:p-4.5 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header: Large Number + Keyword */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                        03
                      </span>
                      <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white/95">
                        {caseConfigs[2].keyword}
                      </span>
                    </div>

                    {/* Divider Line */}
                    <div className="h-[1.5px] bg-white/30 w-full mb-1.5 rounded-full" />

                    {/* Problem / Solution Content */}
                    <div className="space-y-1 text-[11px] sm:text-[11.5px] text-white/90 leading-snug">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        Ảnh chụp gốc 4–8MB làm trang tải rất chậm, giảm trải nghiệm.
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án DUDI: </strong>
                        Chuyển đổi sang WebP chuẩn nén thế hệ mới, tối ưu hiển thị.
                      </p>
                    </div>
                  </div>

                  {/* Result Bottom Badge */}
                  <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0 stroke-[2.5]" />
                    <span className="truncate">Kết quả: Dung lượng giảm hơn 68%, lướt mượt mà</span>
                  </div>
                </div>
              </div>

              {/* CARD 04 - BOTTOM RIGHT (SKY BLUE) */}
              <div className="relative reveal-stagger-item group">
                {/* Floating Bulb (Bottom-Left) */}
                <div className="hidden sm:flex items-center gap-2 absolute -bottom-3.5 -left-3.5 lg:-bottom-4 lg:-left-4 z-20 pointer-events-none">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-[#0284C7] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {caseConfigs[3].icon}
                  </div>
                </div>

                {/* Main Card Body */}
                <div className="rounded-[20px] sm:rounded-[24px] bg-[#0284C7] text-white p-3.5 sm:p-4 lg:p-4.5 shadow-lg shadow-sky-600/15 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Header: Large Number + Keyword */}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-white">
                        04
                      </span>
                      <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white/95">
                        {caseConfigs[3].keyword}
                      </span>
                    </div>

                    {/* Divider Line */}
                    <div className="h-[1.5px] bg-white/40 w-full mb-1.5 rounded-full" />

                    {/* Problem / Solution Content */}
                    <div className="space-y-1 text-[11px] sm:text-[11.5px] text-white/90 leading-snug">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        Đường dẫn cũ bị 404, một số trang dịch vụ phát sinh lỗi máy chủ 500.
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án DUDI: </strong>
                        Kiểm tra log lỗi, sửa cấu hình route và thiết lập redirect 301.
                      </p>
                    </div>
                  </div>

                  {/* Result Bottom Badge */}
                  <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0 stroke-[2.5]" />
                    <span className="truncate">Kết quả: Triệt tiêu lỗi 500, bảo toàn lưu lượng SEO</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Chevrons */}
            <div className="hidden lg:flex justify-start px-6 mt-1.5">
              <TripleChevron direction="right" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}