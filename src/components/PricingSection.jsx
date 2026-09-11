import React, { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  Info, 
  TableProperties 
} from "lucide-react";
import { 
  PRICING_PACKAGES, 
  COMPARISON_CRITERIA, 
  EXCLUSIONS_DATA 
} from "../data/maintenanceData";
import { trackCtaClick, trackPackageSelect } from "../utils/tracking";

export default function PricingSection({ onSelectPackage }) {
  const [showFullTable, setShowFullTable] = useState(false);

  const handleSelectPackageCTA = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg.name);
    }
    trackPackageSelect(pkg.name, pkg.price);
    trackCtaClick("pricing_card", `Chọn gói ${pkg.name}`, "#audit-form");
    
    const el = document.getElementById("audit-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFullTable = () => {
    const nextState = !showFullTable;
    setShowFullTable(nextState);
    
    if (nextState) {
      setTimeout(() => {
        const el = document.getElementById("pricing-full-table");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      setTimeout(() => {
        const el = document.getElementById("pricing");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <section 
      id="pricing" 
      className={`snap-section scroll-reveal-section ${
        showFullTable ? "min-h-screen h-auto py-10 md:py-14" : ""
      } bg-[#6B1117] text-white border-b border-[#500B10] relative transition-all duration-300 overflow-hidden`}
    >
      <div className={showFullTable ? "w-full" : "internal-scroll-container flex flex-col justify-center min-h-[100svh]"}>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full py-5 sm:py-6 flex flex-col justify-center h-full">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-2xl mx-auto mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-white text-[10.5px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-xs">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>BẢNG GIÁ DỊCH VỤ THEO THÁNG</span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-[26px] font-extrabold text-white tracking-tight mb-1">
              Định mức rõ ràng — Chi phí minh bạch
            </h2>
            <p className="text-[11.5px] sm:text-xs text-red-100 leading-normal max-w-lg mx-auto">
              3 gói chăm sóc được thiết kế tối ưu vừa vặn ngân sách, đảm bảo an toàn kỹ thuật cao nhất.
            </p>
          </div>

          {/* 3 Angled 2-Tone Cards Grid with Directional Storytelling Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 items-stretch mb-3 pt-1" data-reveal-container>
            
            {/* CARD 1: CƠ BẢN (Slides in from Left) */}
            <div className="reveal-fade-left group bg-white rounded-2xl shadow-xl flex flex-col justify-between hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(244,63,94,0.25)] hover:border-rose-300 transition-all duration-300 overflow-hidden border border-rose-100 cursor-pointer">
              <div className="flex-grow">
                {/* Top Colored Header Block with Angled Cut */}
                <div className="bg-gradient-to-b from-[#FB5A7D] to-[#F43F5E] p-3 pb-5 text-white text-center relative [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] group-hover:brightness-105 transition-all">
                  <p className="text-[10px] font-medium text-white/90 tracking-wide mb-0.5">
                    Web ít cập nhật • Duy trì cơ bản
                  </p>
                  <h3 className="text-base sm:text-lg font-black tracking-wider uppercase mb-1">
                    CƠ BẢN
                  </h3>
                  <div className="flex items-baseline justify-center gap-0.5 my-0.5">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight">500.000</span>
                    <span className="text-[11px] font-bold text-white/90">đ/tháng</span>
                  </div>

                  {/* Commitment Badges */}
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-semibold text-white mt-1 border border-white/25">
                    <span>SLA: 24h</span>
                    <span>•</span>
                    <span>Hạn mức: 1h/tháng</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="p-3.5 sm:p-4 space-y-2 text-[11.5px] text-slate-700">
                  <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                    <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Kiểm tra & Backup: <strong>1 lần/tháng</strong></span>
                  </div>
                  <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                    <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Phản hồi ban đầu: <strong>Trong 24h</strong></span>
                  </div>
                  <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                    <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Sửa lỗi kỹ thuật: <strong>Tối đa 1h/tháng</strong></span>
                  </div>
                  <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                    <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Đăng nội dung: <strong>2 yêu cầu/tháng</strong></span>
                  </div>
                  <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                    <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Tối ưu ảnh: <strong>Tối đa 10 ảnh</strong> + SSL</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-3.5 pt-0">
                <button
                  onClick={() => handleSelectPackageCTA(PRICING_PACKAGES[0])}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md group-hover:bg-[#F43F5E] cursor-pointer"
                >
                  <span>Chọn gói Cơ bản</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Angled Decorative Accent */}
              <div className="h-2.5 bg-[#F43F5E] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
            </div>

            {/* CARD 2: TIÊU CHUẨN (Scales Up with Radiant Halo in Center) */}
            <div className="reveal-scale-up group bg-white rounded-2xl shadow-[0_15px_35px_rgba(2,132,199,0.3)] hover:shadow-[0_25px_50px_rgba(2,132,199,0.45)] flex flex-col justify-between md:-translate-y-1.5 hover:md:-translate-y-3 z-20 relative ring-3 ring-cyan-400 hover:ring-4 hover:ring-cyan-400 transition-all duration-300 cursor-pointer">
              {/* Top Featured Golden Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 text-[10px] font-black tracking-wider uppercase shadow-md shadow-amber-500/40 border border-white flex items-center gap-1.5 whitespace-nowrap group-hover:scale-105 transition-transform">
                <Sparkles className="w-3 h-3 text-amber-900 fill-amber-900 animate-pulse" />
                <span>ĐƯỢC CHỌN NHIỀU NHẤT</span>
              </div>

              <div className="overflow-hidden rounded-2xl flex flex-col justify-between h-full">
                <div className="flex-grow">
                  {/* Top Colored Header Block with Angled Cut */}
                  <div className="bg-gradient-to-b from-[#00C2FF] via-[#0284C7] to-[#0369A1] pt-4 p-3 pb-5 text-white text-center relative [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] group-hover:brightness-105 transition-all">
                    <p className="text-[10px] font-semibold text-white/95 tracking-wide mb-0.5">
                      Web hoạt động thường xuyên • Vận hành ổn định
                    </p>
                    <h3 className="text-base sm:text-lg font-black tracking-wider uppercase mb-1 drop-shadow-xs">
                      TIÊU CHUẨN
                    </h3>
                    <div className="flex items-baseline justify-center gap-0.5 my-0.5">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight">1.500.000</span>
                      <span className="text-[11px] font-bold text-white/95">đ/tháng</span>
                    </div>

                    {/* Commitment Badges */}
                    <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-semibold text-white mt-1 border border-white/25">
                      <span>SLA: 12h</span>
                      <span>•</span>
                      <span>Hạn mức: 3h/tháng</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="p-3.5 sm:p-4 space-y-2 text-[11.5px] text-slate-700">
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Kiểm tra <strong>2 lần/tháng</strong> • Backup <strong>1 lần/tuần</strong></span>
                    </div>
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Theo dõi uptime tự động • Phản hồi <strong>trong 12h</strong></span>
                    </div>
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Sửa lỗi: <strong>3h/tháng</strong> • Giao diện: <strong>2h/tháng</strong></span>
                    </div>
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Đăng nội dung: <strong>6 yêu cầu</strong> • <strong>30 ảnh</strong></span>
                    </div>
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Quét bảo mật + Tối ưu cache + SEO kỹ thuật</span>
                    </div>
                    <div className="flex items-start gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="w-4 h-4 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">Tư vấn <strong>1 buổi/tháng</strong> + Báo cáo tháng</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="p-3.5 pt-0">
                  <button
                    onClick={() => handleSelectPackageCTA(PRICING_PACKAGES[1])}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#00C2FF] to-[#0284C7] hover:brightness-110 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-cyan-500/30 cursor-pointer"
                  >
                    <span>Chọn gói Tiêu chuẩn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Angled Decorative Accent */}
                <div className="h-2.5 bg-[#0284C7] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
              </div>
            </div>

            {/* CARD 3: CAO CẤP (Slides in from Right) */}
            <div className="reveal-fade-right group bg-white rounded-2xl shadow-xl flex flex-col justify-between hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] hover:border-purple-300 transition-all duration-300 overflow-hidden border border-purple-100 cursor-pointer">
              <div className="flex-grow">
                {/* Top Colored Header Block with Angled Cut */}
                <div className="bg-gradient-to-b from-[#A855F7] to-[#7C3AED] p-3 pb-5 text-white text-center relative [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] group-hover:brightness-105 transition-all">
                  <p className="text-[10px] font-medium text-purple-100 tracking-wide mb-0.5">
                    Gói Tối ưu chuyên sâu
                  </p>
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-white mb-1 uppercase">
                    Cao cấp
                  </h3>
                  
                  {/* Price Tag */}
                  <div className="flex items-baseline justify-center gap-1 my-0.5">
                    <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      3.000.000
                    </span>
                    <span className="text-[11px] font-semibold text-purple-100">
                      đ/tháng
                    </span>
                  </div>

                  {/* Commitment Badges */}
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-semibold text-white mt-1 border border-white/25">
                    <span>SLA: 4h</span>
                    <span>•</span>
                    <span>Hạn mức: 10h/tháng</span>
                  </div>
                </div>

                {/* Scope Feature List */}
                <div className="p-3.5 sm:p-4 space-y-2 text-slate-700 text-xs">
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Giám sát Uptime & SSL <strong>24/7 Ưu tiên số 1</strong></span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Backup <strong>Hằng ngày (Daily) lên Cloud riêng</strong></span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Cập nhật Core & Plugin <strong>Hằng tuần an toàn</strong></span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Đăng bài / banner: <strong>Không giới hạn trong hạn mức giờ</strong></span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="leading-tight">Rà soát code/server, Tư vấn <strong>60p</strong> + Backlog</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-3.5 pt-0">
                <button
                  onClick={() => handleSelectPackageCTA(PRICING_PACKAGES[2])}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md group-hover:bg-[#7C3AED] cursor-pointer"
                >
                  <span>Chọn gói Cao cấp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Angled Decorative Accent */}
              <div className="h-2.5 bg-[#7C3AED] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
            </div>

          </div>

          {/* Note bar & Expandable Table Trigger Button */}
          <div className="reveal-fade-up flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-red-100 px-2" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-1.5 text-center sm:text-left">
              <Info className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>* Hạn mức reset hằng tháng, không cộng dồn. DUDI không sử dụng cam kết không giới hạn.</span>
            </div>

            <button
              onClick={toggleFullTable}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 border border-white/30 px-4 py-1.5 rounded-full transition-all cursor-pointer shadow-sm shrink-0 active:scale-95"
            >
              <TableProperties className="w-3.5 h-3.5 text-white" />
              <span>{showFullTable ? "Ẩn bảng chi tiết 15 tiêu chí" : "Xem bảng đối chiếu 15 tiêu chí & Loại trừ"}</span>
              {showFullTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expandable Section: Full 15 Criteria Table & Exclusions (Appears Smoothly Below) */}
          {showFullTable && (
            <div id="pricing-full-table" className="mt-5 space-y-4 animate-fadeIn transition-all duration-300">
              
              {/* 15 Criteria Table with Cyber Dark Tech Theme */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/95 backdrop-blur-md overflow-hidden shadow-2xl">
                <div className="p-3.5 sm:p-4 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <TableProperties className="w-4 h-4 text-cyan-400" />
                    <span>Bảng đối chiếu chi tiết 15 tiêu chí phạm vi dịch vụ</span>
                  </h3>
                  <span className="text-[10.5px] text-slate-400 font-semibold hidden sm:inline">
                    3 Gói dịch vụ định kỳ
                  </span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-800 text-white font-bold border-b border-slate-700 text-[11px] sm:text-xs">
                      <tr>
                        <th className="p-3">Hạng mục kỹ thuật</th>
                        <th className="p-3 text-center text-rose-300">Cơ bản (500k)</th>
                        <th className="p-3 text-center bg-sky-950/60 text-cyan-300">Tiêu chuẩn (1.5tr)</th>
                        <th className="p-3 text-center text-purple-300">Cao cấp (3tr)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-[11.5px]">
                      {COMPARISON_CRITERIA.map((row, idx) => (
                        <tr key={row.id} className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-850/50"}>
                          <td className="p-3 font-semibold text-white">{row.name}</td>
                          <td className="p-3 text-center text-slate-400">{row.basic}</td>
                          <td className="p-3 text-center font-semibold text-cyan-300 bg-sky-950/30">{row.standard}</td>
                          <td className="p-3 text-center font-medium text-purple-200">{row.premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Exclusions Box */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl mb-4">
                <div className="flex items-center gap-2 mb-2.5 text-white font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>10 Hạng mục không bao gồm trong gói định kỳ (Cần báo giá riêng nếu phát sinh)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-300">
                  {EXCLUSIONS_DATA.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Collapse Button */}
              <div className="text-center pt-2 pb-6">
                <button
                  onClick={toggleFullTable}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/25 px-5 py-2 rounded-full transition-all cursor-pointer shadow-md hover:border-cyan-400 active:scale-95"
                >
                  <ChevronUp className="w-4 h-4 text-cyan-400" />
                  <span>Thu gọn bảng 15 tiêu chí & trở lại bảng giá</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

