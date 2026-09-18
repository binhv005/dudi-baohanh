import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { COMPANY_INFO } from "../data/maintenanceData";
import { trackPhoneClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function FooterSection() {
  const currentYear = 2024;

  return (
    <footer id="footer" className="bg-[#0B0E14] text-slate-400 text-xs border-t border-slate-850 relative pt-[clamp(1.75rem,3vw,2.5rem)] 2xl:pt-12 pb-[clamp(1.25rem,2vw,1.75rem)] 2xl:pb-8">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 w-full">

          {/* Main 3-Column Footer Content */}
          <div className="reveal-fade-up grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 2xl:gap-14 pb-5 sm:pb-6 2xl:pb-8">

            {/* Column 1: Company Logo & Identity Box */}
            <div className="md:col-span-5 space-y-3.5 2xl:space-y-4">
              {/* Logo / Brand Name */}
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white tracking-tight">
                  DUDI Software
                </span>
              </div>

              {/* Slogan / Short description */}
              <p className="text-slate-300 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm leading-relaxed max-w-md 2xl:max-w-lg font-normal">
                Công ty phần mềm hàng đầu với các giải pháp công nghệ hiện đại và sáng tạo, giúp doanh nghiệp phát triển bền vững.
              </p>

              {/* Blue Left-Accented Company Legal Box */}
              <div className="border-l-2 border-blue-500 pl-3.5 2xl:pl-4 space-y-1 pt-0.5">
                <h4 className="text-xs sm:text-[13px] 2xl:text-sm font-bold text-white uppercase tracking-wide">
                  CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI
                </h4>
                <p className="text-[11px] sm:text-[11.5px] 2xl:text-xs text-slate-400 font-medium">
                  DUDI SOFTWARE SOLUTION CO., LTD
                </p>
                <p className="text-[11px] sm:text-[11.5px] 2xl:text-xs text-slate-400 font-medium">
                  MST: 0319641544
                </p>
              </div>
            </div>

            {/* Column 2: DANH MỤC */}
            <div className="md:col-span-3">
              <h4 className="text-xs sm:text-sm 2xl:text-base font-bold uppercase tracking-wider text-white mb-1">
                DANH MỤC
              </h4>
              {/* Red Accent Underline */}
              <div className="w-7 2xl:w-9 h-[2px] 2xl:h-[3px] bg-red-500 rounded-full mb-3 2xl:mb-4" />

              <ul className="space-y-1.5 sm:space-y-2 2xl:space-y-2.5 text-[clamp(11px,0.85vw,12px)] 2xl:text-sm">
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
              <h4 className="text-xs sm:text-sm 2xl:text-base font-bold uppercase tracking-wider text-white mb-1">
                LIÊN HỆ
              </h4>
              {/* Blue Accent Underline */}
              <div className="w-7 2xl:w-9 h-[2px] 2xl:h-[3px] bg-blue-500 rounded-full mb-3 2xl:mb-4" />

              <ul className="space-y-2.5 sm:space-y-3 2xl:space-y-3.5 text-[clamp(11px,0.85vw,12px)] 2xl:text-sm">
                {/* Address 1 */}
                <li className="flex items-start gap-2.5 2xl:gap-3">
                  <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-slate-300" />
                  </div>
                  <span className="leading-snug text-slate-300 pt-0.5">
                    232 Đường Nguyễn Thị Minh Khai, phường Xuân Hòa, TP.Hồ Chí Minh
                  </span>
                </li>

                {/* Address 2 */}
                <li className="flex items-start gap-2.5 2xl:gap-3">
                  <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-slate-300" />
                  </div>
                  <span className="leading-snug text-slate-300 pt-0.5">
                    49/2 Đường 14, Phường Thủ Đức, TP.Hồ Chí Minh
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-2.5 2xl:gap-3">
                  <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-slate-300" />
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
                <li className="flex items-center gap-2.5 2xl:gap-3">
                  <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 rounded-full bg-slate-850 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-slate-300" />
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

          {/* Bottom Copyright & Website Pill Bar */}
          <div className="pt-4 2xl:pt-6 border-t border-slate-850/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] sm:text-[11.5px] 2xl:text-xs">
            <div>
              © {currentYear} CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI. All rights reserved.
            </div>
            <div>
              <a
                href="https://dudisoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 2xl:px-4 py-1.5 2xl:py-2 rounded-lg border border-slate-800 bg-[#0F1420]/80 hover:bg-slate-800/90 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs 2xl:text-sm font-medium shadow-2xs group"
              >
                <Globe className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 text-red-500 group-hover:scale-110 transition-transform duration-200" />
                <span>dudisoftware.com</span>
              </a>
            </div>
          </div>

        </div>
      </footer>
    );
}
