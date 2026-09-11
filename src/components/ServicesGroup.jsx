import React, { useState } from "react";
import { 
  Activity, 
  Database, 
  Wrench, 
  RefreshCw, 
  ShieldCheck, 
  FileSpreadsheet, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { trackCtaClick } from "../utils/tracking";

export default function ServicesGroup() {
  const [activeNode, setActiveNode] = useState(0);

  const handlePricingScroll = () => {
    trackCtaClick("services_group", "Xem chi tiết định mức các gói", "#pricing");
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const serviceNodes = [
    {
      id: "01",
      title: "Giám sát Uptime",
      subtitle: "Theo dõi khả dụng & SSL",
      desc: "Rà soát tính khả dụng tên miền, theo dõi chứng chỉ SSL và cảnh báo sớm sự cố gián đoạn 24/7.",
      hexColor: "#F97316",
      icon: <Activity className="w-5 h-5 text-orange-500 stroke-[2.3]" />,
      highlights: ["Uptime 24/7", "SSL Check", "Cảnh báo sớm"],
      nodeX: 202.5,
      nodeY: 52.1,
      pinX: 183.3,
      pinY: 104.8,
    },
    {
      id: "02",
      title: "Sao lưu Dữ liệu",
      subtitle: "Backup mã nguồn & DB",
      desc: "Lưu trữ định kỳ mã nguồn và cơ sở dữ liệu trên đám mây an toàn, sẵn sàng khôi phục tức thì khi cần.",
      hexColor: "#65A30D",
      icon: <Database className="w-5 h-5 text-lime-600 stroke-[2.3]" />,
      highlights: ["Mã nguồn & DB", "Lưu Cloud", "Khôi phục tức thì"],
      nodeX: 269.8,
      nodeY: 97.6,
      pinX: 228.2,
      pinY: 135.1,
    },
    {
      id: "03",
      title: "Sửa lỗi Kỹ thuật",
      subtitle: "Xử lý mã nguồn & hiển thị",
      desc: "Khắc phục lỗi form liên hệ, liên kết gãy, xung đột plugin và sự cố hiển thị trong hạn mức giờ.",
      hexColor: "#E11D48",
      icon: <Wrench className="w-5 h-5 text-rose-500 stroke-[2.3]" />,
      highlights: ["Lỗi form & link", "Xung đột plugin", "Sửa theo giờ"],
      nodeX: 308.0,
      nodeY: 169.4,
      pinX: 253.7,
      pinY: 182.9,
    },
    {
      id: "04",
      title: "Cập nhật Nội dung",
      subtitle: "Đăng bài, banner & CMS",
      desc: "Đăng tải bài viết mới, thay đổi banner, cập nhật phiên bản plugin và tương thích CMS định kỳ an toàn.",
      hexColor: "#0284C7",
      icon: <RefreshCw className="w-5 h-5 text-sky-500 stroke-[2.3]" />,
      highlights: ["Đăng bài & banner", "Update CMS", "Tương thích an toàn"],
      nodeX: 308.0,
      nodeY: 250.6,
      pinX: 253.7,
      pinY: 237.1,
    },
    {
      id: "05",
      title: "Bảo mật Cơ bản",
      subtitle: "Quét mã độc & phân quyền",
      desc: "Quét lỗ hổng mã độc định kỳ, kiểm tra phân quyền tài khoản quản trị và bảo vệ máy chủ an toàn.",
      hexColor: "#8B5CF6",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500 stroke-[2.3]" />,
      highlights: ["Quét mã độc", "Kiểm tra quyền", "Bảo mật Server"],
      nodeX: 269.8,
      nodeY: 322.4,
      pinX: 228.2,
      pinY: 284.9,
    },
    {
      id: "06",
      title: "Báo cáo & Tư vấn",
      subtitle: "Đối soát nhật ký & tối ưu",
      desc: "Tổng hợp nhật ký xử lý trong tháng, thống kê thời gian phản hồi SLA và đề xuất phương án nâng cấp.",
      hexColor: "#475569",
      icon: <FileSpreadsheet className="w-5 h-5 text-slate-600 stroke-[2.3]" />,
      highlights: ["Nhật ký tháng", "Thống kê SLA", "Tư vấn nâng cấp"],
      nodeX: 202.5,
      nodeY: 367.9,
      pinX: 183.3,
      pinY: 315.2,
    },
  ];

  return (
    <section id="services" className="snap-section bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5 sm:py-6 flex flex-col justify-center h-full">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-brand-200 text-brand-700 text-[10px] font-bold uppercase tracking-wider mb-1 shadow-2xs">
              <Sparkles className="w-3 h-3 text-brand-600" />
              <span>PHẠM VI DỊCH VỤ ĐỊNH KỲ</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-0.5">
              6 nhóm công việc DUDI thực hiện hằng tháng
            </h2>
            <p className="text-xs text-slate-600 leading-normal max-w-lg mx-auto">
              Hệ sinh thái dịch vụ chuẩn hóa bài bản, đảm bảo website luôn được bảo vệ và vận hành ổn định.
            </p>
          </div>

          {/* MAIN INFOGRAPHIC: ENLARGED RADIAL HUB (LEFT) + BALANCED TIMELINE (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-center mb-3">
            
            {/* LEFT: VECTOR RADIAL INFOGRAPHIC (viewBox: 0 0 420 420) */}
            <div className="lg:col-span-5 flex items-center justify-center relative reveal-scale-up">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] aspect-square relative select-none">
                
                <svg viewBox="0 0 420 420" className="w-full h-full overflow-visible">
                  <defs>
                    {/* Shadow Filter for Core */}
                    <filter id="hub-shadow-light" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#EF4444" floodOpacity="0.25" />
                    </filter>
                    
                    {/* Rich Red Core Gradient */}
                    <radialGradient id="hub-core-gradient" cx="38%" cy="32%" r="68%">
                      <stop offset="0%" stopColor="#F87171" />
                      <stop offset="45%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </radialGradient>

                    {/* Aura Glow Gradient */}
                    <radialGradient id="hub-aura-gradient" cx="50%" cy="50%" r="50%">
                      <stop offset="30%" stopColor="#EF4444" stopOpacity="0.32" />
                      <stop offset="70%" stopColor="#EF4444" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer Dotted Orbital Track Arc with Continuous Radar Dash Animation */}
                  <circle
                    cx="145"
                    cy="210"
                    r="115"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    className="animate-radar-orbit opacity-75"
                  />

                  {/* Hiệu ứng Loang / Glowing Aura Dispersion Waves */}
                  <circle
                    cx="145"
                    cy="210"
                    r="55"
                    fill="none"
                    stroke="#EF4444"
                    className="animate-aura-spread pointer-events-none"
                  />
                  <circle
                    cx="145"
                    cy="210"
                    r="55"
                    fill="none"
                    stroke="#F87171"
                    className="animate-aura-spread-delayed pointer-events-none"
                  />

                  {/* Soft Background Aura Glow */}
                  <circle
                    cx="145"
                    cy="210"
                    r="105"
                    fill="url(#hub-aura-gradient)"
                    className="pointer-events-none"
                  />

                  {/* Floating Energetic Tech Sparkle Particles */}
                  <circle cx="55" cy="230" r="3" fill="#EC1420" className="animate-float-particle-1 pointer-events-none opacity-80" />
                  <circle cx="230" cy="250" r="2.5" fill="#3B82F6" className="animate-float-particle-2 pointer-events-none opacity-80" />
                  <circle cx="70" cy="145" r="2" fill="#F59E0B" className="animate-float-particle-3 pointer-events-none opacity-80" />
                  <circle cx="220" cy="135" r="2.8" fill="#10B981" className="animate-float-particle-4 pointer-events-none opacity-80" />

                  {/* Connecting Spoke Lines & Pin Dots */}
                  {serviceNodes.map((node, index) => {
                    const isSelected = activeNode === index;
                    return (
                      <g key={node.id} className="transition-all duration-300">
                        {/* Spoke Base Line */}
                        <line
                          x1={node.pinX}
                          y1={node.pinY}
                          x2={node.nodeX}
                          y2={node.nodeY}
                          stroke={isSelected ? node.hexColor : "#CBD5E1"}
                          strokeWidth={isSelected ? "3" : "2"}
                        />

                        {/* Flowing Laser Line on Active Selected Spoke */}
                        {isSelected && (
                          <line
                            x1={node.pinX}
                            y1={node.pinY}
                            x2={node.nodeX}
                            y2={node.nodeY}
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="animate-laser-flow"
                          />
                        )}

                        {/* Track Pin Dot */}
                        <circle
                          cx={node.pinX}
                          cy={node.pinY}
                          r={isSelected ? "7" : "6"}
                          fill="white"
                          stroke={node.hexColor}
                          strokeWidth={isSelected ? "3" : "2.5"}
                          className="transition-all duration-200"
                        />
                        <circle
                          cx={node.pinX}
                          cy={node.pinY}
                          r={isSelected ? "3.5" : "2.8"}
                          fill={node.hexColor}
                          className="transition-all duration-200"
                        />
                      </g>
                    );
                  })}

                  {/* Center Ground Shadow with Dynamic Pulsing */}
                  <ellipse
                    cx="145"
                    cy="352"
                    rx="80"
                    ry="17"
                    fill="rgba(15, 23, 42, 0.18)"
                    className="animate-ground-shadow pointer-events-none filter blur-[2.5px]"
                  />
                  <ellipse
                    cx="145"
                    cy="350"
                    rx="56"
                    ry="10"
                    fill="#FECACA"
                    stroke="#F87171"
                    strokeWidth="1.2"
                    className="opacity-60 pointer-events-none"
                  />

                  {/* 3D DUDI Mascot Character with Enhanced Organic Floating & 3D Sway Animation */}
                  <g className="animate-mascot-float cursor-pointer transition-transform duration-300 hover:scale-[1.08] hover:-translate-y-2">
                    <image
                      href="/mascot-pointing.png"
                      x="5"
                      y="18"
                      width="280"
                      height="350"
                      preserveAspectRatio="xMidYMid meet"
                      className="filter drop-shadow-[0_20px_28px_rgba(236,20,32,0.3)]"
                    />
                  </g>
                </svg>

                {/* 6 Enlarged Interactive Satellite Node Buttons */}
                {serviceNodes.map((node, index) => {
                  const isSelected = activeNode === index;
                  // Exact coordinates relative to 420x420 viewBox
                  const leftPct = (node.nodeX / 420) * 100;
                  const topPct = (node.nodeY / 420) * 100;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(index)}
                      onMouseEnter={() => setActiveNode(index)}
                      aria-label={node.title}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-11.5 h-11.5 sm:w-12.5 sm:h-12.5 md:w-13 md:h-13 rounded-full bg-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md z-20 ${
                        isSelected
                          ? "scale-115 ring-3 ring-offset-1"
                          : "hover:scale-108 ring-2"
                      }`}
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        borderColor: node.hexColor,
                        boxShadow: isSelected ? `0 8px 20px ${node.hexColor}45` : "0 4px 10px rgba(0,0,0,0.08)",
                        ringColor: node.hexColor,
                        backgroundColor: "#FFFFFF"
                      }}
                    >
                      {/* Thick Colorful Border Ring */}
                      <div 
                        className="w-full h-full rounded-full flex items-center justify-center border-[3.5px] transition-colors"
                        style={{ borderColor: node.hexColor }}
                      >
                        <div className="flex items-center justify-center">
                          {node.icon}
                        </div>
                      </div>

                      {/* Number badge */}
                      <span 
                        className="absolute -top-1 -right-1 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full text-[8.5px] sm:text-[9px] font-black text-white flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: node.hexColor }}
                      >
                        {node.id}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* RIGHT: CONNECTED STEPPED TIMELINE LIST */}
            <div className="lg:col-span-7 space-y-1 sm:space-y-1.5 relative border-l-2 border-dashed border-slate-300 pl-3.5 sm:pl-4 ml-1">
              {serviceNodes.map((node, index) => {
                const isSelected = activeNode === index;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(index)}
                    onMouseEnter={() => setActiveNode(index)}
                    className={`reveal-fade-left group relative rounded-xl py-2 sm:py-2.5 px-3 sm:px-3.5 transition-all duration-300 cursor-pointer border overflow-hidden ${
                      isSelected
                        ? "shadow-md translate-x-1.5 ring-1"
                        : "bg-white/80 hover:bg-white border-slate-200/90 hover:translate-x-1 hover:shadow-sm"
                    }`}
                    style={{ 
                      transitionDelay: `${index * 80}ms`,
                      backgroundColor: isSelected ? `${node.hexColor}14` : undefined,
                      borderColor: isSelected ? node.hexColor : undefined,
                      boxShadow: isSelected ? `0 8px 22px -4px ${node.hexColor}30` : undefined,
                      ringColor: isSelected ? `${node.hexColor}40` : undefined
                    }}
                  >
                    {/* Left Accent Color Indicator Bar on Active/Hover */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                        isSelected ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50 group-hover:opacity-60 group-hover:scale-y-100"
                      }`}
                      style={{ backgroundColor: node.hexColor }}
                    />

                    {/* Stepped Node Dot on Timeline */}
                    <div 
                      className={`absolute -left-[21px] sm:-left-[23px] top-3.5 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 shadow-xs ${
                        isSelected ? "scale-140 ring-3 ring-offset-1" : "scale-100 group-hover:scale-120"
                      }`}
                      style={{ 
                        backgroundColor: node.hexColor,
                        ringColor: `${node.hexColor}50`
                      }}
                    />

                    {/* Single Line Header: Group Title + Subtitle + Tags */}
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span 
                          className="text-[11.5px] sm:text-xs font-black uppercase tracking-wide whitespace-nowrap transition-transform duration-200 group-hover:translate-x-0.5"
                          style={{ color: node.hexColor }}
                        >
                          NHÓM {node.id}: {node.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">•</span>
                        <span className={`text-[11px] font-semibold truncate hidden sm:inline transition-colors ${
                          isSelected ? "text-slate-800 font-bold" : "text-slate-500 group-hover:text-slate-700"
                        }`}>
                          {node.subtitle}
                        </span>
                      </div>

                      {/* Highlight Tags */}
                      <div className="hidden md:flex items-center gap-1 shrink-0">
                        {node.highlights.slice(0, 2).map((h, i) => (
                          <span 
                            key={i}
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded transition-all duration-300 whitespace-nowrap"
                            style={{
                              backgroundColor: isSelected ? `${node.hexColor}22` : "#F8FAFC",
                              color: isSelected ? node.hexColor : "#64748B",
                              border: `1px solid ${isSelected ? `${node.hexColor}50` : "#E2E8F0"}`
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Concise Description */}
                    <p className={`text-[11px] leading-snug line-clamp-2 transition-colors duration-200 ${
                      isSelected ? "text-slate-800" : "text-slate-600 group-hover:text-slate-800"
                    }`}>
                      {node.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Quick Link to Pricing Comparison */}
          <div className="reveal-fade-up text-center" style={{ transitionDelay: '600ms' }}>
            <button
              onClick={handlePricingScroll}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs"
            >
              <span>So sánh chi tiết hạn mức của 6 nhóm dịch vụ trên 3 gói</span>
              <ArrowRight className="w-3 h-3 text-brand-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
