import React, { useState, useRef, useEffect } from "react";
import { 
  AlertCircle, 
  WifiOff, 
  Send, 
  Puzzle, 
  FileText, 
  Image as ImageIcon, 
  DatabaseBackup, 
  UserX, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { SIGNS_DATA } from "../data/maintenanceData";

export default function SignsSection() {
  const scrollContainerRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const isPausedRef = useRef(false);

  // Keep isPausedRef accurately synchronized with hover and drag states
  useEffect(() => {
    isPausedRef.current = isHovered || isDragging;
  }, [isHovered, isDragging]);

  // Helper to get matching iconic vector with unique colors per card
  const getPlainCardIcon = (id) => {
    switch (id) {
      case 1:
        return <WifiOff className="w-7 h-7 text-rose-500 stroke-[1.8]" />;
      case 2:
        return <Send className="w-7 h-7 text-blue-500 stroke-[1.8]" />;
      case 3:
        return <Puzzle className="w-7 h-7 text-purple-500 stroke-[1.8]" />;
      case 4:
        return <FileText className="w-7 h-7 text-emerald-500 stroke-[1.8]" />;
      case 5:
        return <ImageIcon className="w-7 h-7 text-amber-500 stroke-[1.8]" />;
      case 6:
        return <DatabaseBackup className="w-7 h-7 text-cyan-500 stroke-[1.8]" />;
      case 7:
        return <UserX className="w-7 h-7 text-indigo-500 stroke-[1.8]" />;
      default:
        return <AlertCircle className="w-7 h-7 text-rose-500 stroke-[1.8]" />;
    }
  };

  const getShortKeyword = (id) => {
    switch (id) {
      case 1: return "TRUY CẬP";
      case 2: return "FORM LIÊN HỆ";
      case 3: return "MÃ NGUỒN";
      case 4: return "NỘI DUNG";
      case 5: return "TẢI TRANG";
      case 6: return "BACKUP";
      case 7: return "NHÂN SỰ";
      default: return "RỦI RO";
    }
  };

  // Duplicate 3 times for completely seamless infinite loop buffer
  const infiniteCards = [...SIGNS_DATA, ...SIGNS_DATA, ...SIGNS_DATA];

  // 60FPS Continuous High-Performance Auto-Scroll Engine
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTimestamp = performance.now();
    const scrollSpeed = 48; // pixels per second

    const autoScrollLoop = (currentTimestamp) => {
      const elapsed = Math.min((currentTimestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = currentTimestamp;

      if (!isPausedRef.current && container) {
        const singleSetWidth = container.scrollWidth / 3;
        
        if (singleSetWidth > 0) {
          container.scrollLeft += scrollSpeed * elapsed;
          
          // Seamless wrap around
          if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(autoScrollLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(autoScrollLoop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Window-level mouseup/touchend cleanup to ensure dragging never gets stuck
  useEffect(() => {
    const handleGlobalEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", handleGlobalEnd);
    window.addEventListener("touchend", handleGlobalEnd);

    return () => {
      window.removeEventListener("mouseup", handleGlobalEnd);
      window.removeEventListener("touchend", handleGlobalEnd);
    };
  }, []);

  // Manual Jump / Nudge
  const nudgeScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const distance = 310;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth"
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Swipe to Scroll handlers
  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    startXRef.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="signs" className="snap-section bg-[#F1F5F9] text-slate-800 border-b border-slate-200/80 relative overflow-hidden">
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5 sm:py-7 flex flex-col justify-center h-full">
          
          {/* Section Header & Navigation Controls */}
          <div className="reveal-fade-left flex flex-col md:flex-row md:items-end justify-between gap-3 mb-4">
            <div className="text-left max-w-2xl">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                Website không hỏng hẳn vẫn cần được theo dõi.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Nhiều rủi ro kỹ thuật diễn ra âm thầm, làm suy giảm trải nghiệm người dùng và thất thoát cơ hội bán hàng.
              </p>
            </div>

            {/* Quick Navigation Chevron Buttons */}
            <div className="flex items-center gap-1.5 self-end md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => nudgeScroll("left")}
                aria-label="Lướt sang trái"
                className="w-8 h-8 rounded-full bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 flex items-center justify-center shadow-2xs transition-all active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => nudgeScroll("right")}
                aria-label="Lướt sang phải"
                className="w-8 h-8 rounded-full bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 flex items-center justify-center shadow-2xs transition-all active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Infinite Seamless Scrolling Conveyor Ribbon */}
          <div 
            className="reveal-fade-up relative overflow-hidden py-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
            }}
          >
            {/* Left & Right ambient fade gradients for smooth conveyor visual */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-20 pointer-events-none" />

            {/* Continuous Native Scroll Container with Zero-lag Touch & Drag */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`flex items-center gap-0 overflow-x-auto select-none py-2 px-1 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                WebkitOverflowScrolling: "touch"
              }}
            >
              {infiniteCards.map((sign, index) => {
                const uniqueKey = `${sign.id}-${index}`;
                const isSelected = activeCardId === uniqueKey;

                return (
                  <div key={uniqueKey} className="flex items-center shrink-0">
                    {/* Sliding Interactive Card */}
                    <div 
                      onClick={() => setActiveCardId(isSelected ? null : uniqueKey)}
                      className={`w-[265px] sm:w-[290px] shrink-0 rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-between transition-all duration-300 min-h-[245px] sm:min-h-[258px] cursor-pointer ${
                        isSelected 
                          ? "bg-white text-slate-800 shadow-[0_12px_32px_rgba(245,158,11,0.2)] border-2 border-amber-400 scale-[1.03] -translate-y-2"
                          : "bg-white text-slate-700 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.15)] border border-slate-200/90 hover:-translate-y-1.5 hover:border-amber-300 hover:bg-amber-50/20"
                      }`}
                    >
                      <div>
                        {/* Outline Icon in Golden-Amber */}
                        <div className={`w-11 h-11 mx-auto rounded-xl flex items-center justify-center mb-2.5 transition-all duration-300 ${
                          isSelected ? "bg-amber-100/70 scale-110 shadow-xs" : "bg-slate-50"
                        }`}>
                          {getPlainCardIcon(sign.id)}
                        </div>

                        {/* BOLD UPPERCASE KEYWORD */}
                        <h3 className={`text-xs sm:text-[13px] font-black uppercase tracking-wider mb-1.5 transition-colors ${
                          isSelected ? "text-amber-600" : "text-slate-900"
                        }`}>
                          {getShortKeyword(sign.id)}
                        </h3>

                        {/* Problem Description */}
                        <p className="text-[11.5px] sm:text-xs text-slate-600 font-medium leading-relaxed mb-2.5">
                          {sign.description}
                        </p>
                      </div>

                      {/* Consequence / Impact Note */}
                      <div className="pt-2 border-t border-slate-100 text-[10.5px] sm:text-[11px] text-slate-700 text-left bg-rose-50/70 p-2 sm:p-2.5 rounded-xl border border-rose-100/90">
                        <span className="font-bold text-rose-600 block mb-0.5 text-[10px] uppercase tracking-wide">
                          Hệ quả:
                        </span>
                        <span className="leading-snug block text-slate-700">
                          {sign.impact}
                        </span>
                      </div>
                    </div>

                    {/* Distinctive Yellow Chevron Flow Arrow between all cards */}
                    <div className="shrink-0 px-2 sm:px-3 flex items-center justify-center z-10 select-none">
                      <div className="w-5 sm:w-6 h-8 sm:h-9 bg-gradient-to-r from-amber-400 to-amber-500 shadow-2xs [clip-path:polygon(0_0,60%_0,100%_50%,60%_100%,0_100%,40%_50%)] opacity-85" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
