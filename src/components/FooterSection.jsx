import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackPhoneClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function FooterSection() {
  const currentYear = 2026;

  return (
    <footer id="footer" className="snap-section scroll-reveal-section snap-section-footer bg-[#0B0E14] text-slate-400 text-xs border-t border-slate-850 relative">
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh]">
        <div className="reveal-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 w-full">

          {/* Main 3-Column Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10">

            {/* Column 1: Company Logo & Identity Box */}
            <div className="md:col-span-5 space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.webp"
                  alt="Logo DUDI Software"
                  className="w-8 h-8 rounded-lg object-contain shadow-xs"
                  width="32"
                  height="32"
                />
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  DUDI Software
                </span>
              </div>

              {/* Slogan / Short description */}
              <p className="text-slate-300 text-xs leading-relaxed max-w-md font-normal">
                Công ty phần mềm hàng đầu với các giải pháp công nghệ hiện đại và sáng tạo, giúp doanh nghiệp phát triển bền vững.
              </p>

              {/* Blue Left-Accented Company Legal Box */}
              <div className="border-l-2 border-blue-500 pl-3.5 space-y-1 pt-0.5">
                <h4 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wide">
                  CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI
                </h4>
                <p className="text-[11.5px] text-slate-400 font-medium">
                  DUDI SOFTWARE SOLUTION CO., LTD
                </p>
                <p className="text-[11.5px] text-slate-400 font-medium">
                  MST: 0319641544
                </p>
              </div>
            </div>

            {/* Column 2: DANH MỤC */}
            <div className="md:col-span-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-1">
                DANH MỤC
              </h4>
              {/* Red Accent Underline */}
              <div className="w-7 h-[2px] bg-red-500 rounded-full mb-3.5" />

              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#signs" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    Vấn đề
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    Giải pháp
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    Case thực tế
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    Quy trình
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    Bảng giá
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: LIÊN HỆ */}
            <div className="md:col-span-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-1">
                LIÊN HỆ
              </h4>
              {/* Blue Accent Underline */}
              <div className="w-7 h-[2px] bg-blue-500 rounded-full mb-3.5" />

              <ul className="space-y-3 text-xs">
                {/* Address 1 */}
                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <span className="leading-snug text-slate-300 pt-0.5">
                    232 Đường Nguyễn Thị Minh Khai, phường Xuân Hòa, TP.Hồ Chí Minh
                  </span>
                </li>

                {/* Address 2 */}
                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <span className="leading-snug text-slate-300 pt-0.5">
                    49/2 Đường 14, Phường Thủ Đức, TP.Hồ Chí Minh
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <a
                    href={COMPANY_INFO.hotlineHref}
                    onClick={(e) => {
                      trackPhoneClick("footer");
                      handleHotlineClick(e, COMPANY_INFO.hotlineFormatted, COMPANY_INFO.hotline);
                    }}
                    title="Gọi Hotline hoặc bấm để sao chép"
                    className="text-white hover:text-blue-400 font-bold tracking-wide transition-colors cursor-pointer"
                  >
                    (+84) 909 163 821
                  </a>
                </li>

                {/* Email */}
                <li className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <a
                    href="mailto:contact@dudisoftware.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    contact@dudisoftware.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Policy Links Bar */}
          <div className="pt-5 border-t border-slate-850/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11.5px]">
            <div>
              © {currentYear} CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI. All rights reserved.
            </div>
            <div className="flex items-center gap-2.5 text-slate-400">
              <a href="#privacy" className="hover:text-slate-200 transition-colors">
                Chính sách bảo mật
              </a>
              <span className="text-slate-600">|</span>
              <a href="#terms" className="hover:text-slate-200 transition-colors">
                Điều khoản dịch vụ
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

