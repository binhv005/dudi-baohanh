import React from "react";
import {
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

// Helper component for Triple Chevron indicators
function TripleChevron({ direction = "right", className = "" }) {
  if (direction === "left") {
    return (
      <div className={`flex items-center text-rose-500 font-black ${className}`}>
        <ChevronLeft className="w-3.5 h-3.5 stroke-[3] -mr-2" />
        <ChevronLeft className="w-3.5 h-3.5 stroke-[3] -mr-2" />
        <ChevronLeft className="w-3.5 h-3.5 stroke-[3]" />
      </div>
    );
  }

  if (direction === "right") {
    return (
      <div className={`flex items-center text-rose-500 font-black ${className}`}>
        <ChevronRight className="w-3.5 h-3.5 stroke-[3] -mr-2" />
        <ChevronRight className="w-3.5 h-3.5 stroke-[3] -mr-2" />
        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
      </div>
    );
  }

  if (direction === "up") {
    return (
      <div className={`flex flex-col items-center text-rose-500 font-black ${className}`}>
        <ChevronUp className="w-3.5 h-3.5 stroke-[3] -mb-2" />
        <ChevronUp className="w-3.5 h-3.5 stroke-[3] -mb-2" />
        <ChevronUp className="w-3.5 h-3.5 stroke-[3]" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-rose-500 font-black ${className}`}>
      <ChevronDown className="w-3.5 h-3.5 stroke-[3] -mb-2" />
      <ChevronDown className="w-3.5 h-3.5 stroke-[3] -mb-2" />
      <ChevronDown className="w-3.5 h-3.5 stroke-[3]" />
    </div>
  );
}

export default function CasesSection() {
  const casesData = [
    {
      id: "01",
      keyword: "KHÔI PHỤC",
      color: "bg-[#E11D48]",
      icon: <TrendingUp className="w-4 h-4 text-white stroke-[2.2]" />,
      problem: "Lỗi trắng trang sau cập nhật hệ thống.",
      solution: "Khôi phục bản backup an toàn trong 45p.",
      result: "Bảo toàn 100% dữ liệu bài viết & đơn hàng",
    },
    {
      id: "02",
      keyword: "FORM & EMAIL",
      color: "bg-[#EAB308]",
      icon: <Lightbulb className="w-4 h-4 text-white stroke-[2.2]" />,
      problem: "Không nhận email khi khách điền form.",
      solution: "Cấu hình chuẩn SMTP & API gửi nhận.",
      result: "Email gửi nhận tức thì, tin cậy tuyệt đối",
    },
    {
      id: "03",
      keyword: "TỐC ĐỘ ẢNH",
      color: "bg-[#0F3A66]",
      icon: <Zap className="w-4 h-4 text-white stroke-[2.2]" />,
      problem: "Ảnh gốc 4–8MB làm web tải rất chậm.",
      solution: "Nén WebP chuẩn hóa toàn bộ hình ảnh.",
      result: "Giảm 68% dung lượng, lướt cực mượt",
    },
    {
      id: "04",
      keyword: "LỖI 500 & 404",
      color: "bg-[#0284C7]",
      icon: <BarChart3 className="w-4 h-4 text-white stroke-[2.2]" />,
      problem: "Phát sinh liên kết 404 & lỗi máy chủ 500.",
      solution: "Sửa cấu hình route, thiết lập redirect 301.",
      result: "Triệt tiêu lỗi, bảo toàn lưu lượng SEO",
    }
  ];

  return (
    <section 
      id="cases" 
      className="snap-section bg-[#FDFBF7] border-b border-slate-200/90 relative overflow-hidden min-h-[100svh] flex flex-col justify-center py-8 sm:py-12 lg:py-16"
    >
      <div className="internal-scroll-container relative z-10 flex flex-col justify-center w-full my-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">

          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              4 tình huống xử lý kỹ thuật trước / sau tiêu biểu
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Minh chứng thực tế về năng lực ứng cứu và tối ưu hóa website chuyên nghiệp của đội ngũ kỹ sư DUDI.
            </p>
          </div>

          {/* 1-ROW HORIZONTAL 4-CARD LAYOUT */}
          <div className="relative max-w-6xl xl:max-w-[1240px] mx-auto w-full px-2 sm:px-4">

            {/* 4 Cards Grid - 1 Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4.5 relative z-10" data-reveal-container>

              {/* CARD 01 - (RED) */}
              <div className="relative reveal-stagger-item group">
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-2.5 z-20 pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-[#E11D48] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {casesData[0].icon}
                  </div>
                </div>

                <div className="rounded-3xl bg-[#E11D48] text-white p-4.5 sm:p-5 lg:p-5.5 shadow-lg shadow-rose-600/15 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between h-full min-h-[250px] sm:min-h-[270px] lg:min-h-[290px]">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
                        {casesData[0].id}
                      </span>
                      <span className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-white/95">
                        {casesData[0].keyword}
                      </span>
                    </div>

                    <div className="h-[1.5px] bg-white/40 w-full mb-3 rounded-full" />

                    <div className="space-y-2 text-xs sm:text-[12.5px] lg:text-[13px] text-white/90 leading-relaxed">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        {casesData[0].problem}
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án: </strong>
                        {casesData[0].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/20 flex items-start gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-white/10 px-2.5 py-2 rounded-xl backdrop-blur-xs leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{casesData[0].result}</span>
                  </div>
                </div>
              </div>

              {/* CARD 02 - (AMBER) */}
              <div className="relative reveal-stagger-item group">
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-2.5 z-20 pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-[#EAB308] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {casesData[1].icon}
                  </div>
                </div>

                <div className="rounded-3xl bg-[#EAB308] text-white p-4.5 sm:p-5 lg:p-5.5 shadow-lg shadow-amber-500/15 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between h-full min-h-[250px] sm:min-h-[270px] lg:min-h-[290px]">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
                        {casesData[1].id}
                      </span>
                      <span className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-white/95">
                        {casesData[1].keyword}
                      </span>
                    </div>

                    <div className="h-[1.5px] bg-white/40 w-full mb-3 rounded-full" />

                    <div className="space-y-2 text-xs sm:text-[12.5px] lg:text-[13px] text-white/90 leading-relaxed">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        {casesData[1].problem}
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án: </strong>
                        {casesData[1].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/20 flex items-start gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-white/10 px-2.5 py-2 rounded-xl backdrop-blur-xs leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-950 shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{casesData[1].result}</span>
                  </div>
                </div>
              </div>

              {/* CARD 03 - (DARK NAVY) */}
              <div className="relative reveal-stagger-item group">
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-2.5 z-20 pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-[#0F3A66] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {casesData[2].icon}
                  </div>
                </div>

                <div className="rounded-3xl bg-[#0F3A66] text-white p-4.5 sm:p-5 lg:p-5.5 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between h-full min-h-[250px] sm:min-h-[270px] lg:min-h-[290px]">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
                        {casesData[2].id}
                      </span>
                      <span className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-white/95">
                        {casesData[2].keyword}
                      </span>
                    </div>

                    <div className="h-[1.5px] bg-white/30 w-full mb-3 rounded-full" />

                    <div className="space-y-2 text-xs sm:text-[12.5px] lg:text-[13px] text-white/90 leading-relaxed">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        {casesData[2].problem}
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án: </strong>
                        {casesData[2].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/20 flex items-start gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-white/10 px-2.5 py-2 rounded-xl backdrop-blur-xs leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{casesData[2].result}</span>
                  </div>
                </div>
              </div>

              {/* CARD 04 - (SKY BLUE) */}
              <div className="relative reveal-stagger-item group">
                <div className="hidden sm:flex items-center gap-2 absolute -top-3.5 -right-2.5 z-20 pointer-events-none">
                  <div className="w-9 h-9 rounded-xl bg-[#0284C7] shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {casesData[3].icon}
                  </div>
                </div>

                <div className="rounded-3xl bg-[#0284C7] text-white p-4.5 sm:p-5 lg:p-5.5 shadow-lg shadow-sky-600/15 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between h-full min-h-[250px] sm:min-h-[270px] lg:min-h-[290px]">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none text-white">
                        {casesData[3].id}
                      </span>
                      <span className="text-xs sm:text-[13px] font-black tracking-wider uppercase text-white/95">
                        {casesData[3].keyword}
                      </span>
                    </div>

                    <div className="h-[1.5px] bg-white/40 w-full mb-3 rounded-full" />

                    <div className="space-y-2 text-xs sm:text-[12.5px] lg:text-[13px] text-white/90 leading-relaxed">
                      <p>
                        <strong className="text-white font-bold">Vấn đề: </strong>
                        {casesData[3].problem}
                      </p>
                      <p>
                        <strong className="text-white font-bold">Phương án: </strong>
                        {casesData[3].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/20 flex items-start gap-1.5 text-[11px] sm:text-xs font-bold text-white bg-white/10 px-2.5 py-2 rounded-xl backdrop-blur-xs leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 stroke-[2.5] mt-0.5" />
                    <span>{casesData[3].result}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}