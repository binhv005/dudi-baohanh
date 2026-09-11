import React from "react";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { trackPhoneClick, trackZaloClick, trackCtaClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          
          {/* Col 1: Brand & Legal Entity Name (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.webp"
                alt="Logo DUDI Software"
                className="w-9 h-9 rounded-lg object-contain"
                width="36"
                height="36"
              />
              <div>
                <span className="font-display font-extrabold text-base text-white tracking-tight flex items-center gap-1">
                  DUDI <span className="text-brand-500 font-semibold text-xs">Software</span>
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Đơn vị phát triển giải pháp website doanh nghiệp
                </span>
              </div>
            </div>

            {/* MANDATORY EXACT LEGAL NAME */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Pháp nhân đăng ký:
              </div>
              <div className="text-xs font-bold text-white leading-snug">
                Công ty TNHH Giải Pháp Phần Mềm DUDI
              </div>
              <div className="text-slate-400 text-[10px] flex items-center gap-1">
                <FileCheck className="w-3 h-3 text-brand-400" />
                <span>Mã số thuế: <strong className="text-slate-200">0319641544</strong></span>
              </div>
            </div>

            <p className="text-slate-500 text-[11px] leading-relaxed">
              DUDI cam kết đem lại các sản phẩm website đạt chuẩn kỹ thuật, tối ưu trải nghiệm người dùng và phục vụ thiết thực cho hoạt động kinh doanh của doanh nghiệp.
            </p>
          </div>

          {/* Col 2: Contact Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              Thông tin liên hệ & Hỗ trợ
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ: </strong>
                  49/2 Đường 14, Phường Thủ Đức, TP.HCM
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>
                  <strong>Hotline: </strong>
                  <a
                    href="tel:0909163821"
                    onClick={(e) => {
                      trackPhoneClick("footer");
                      handleHotlineClick(e, "0909 163 821", "0909163821");
                    }}
                    title="Gọi Hotline hoặc click để sao chép"
                    className="text-white hover:text-brand-400 transition-colors font-semibold cursor-pointer"
                  >
                    0909 163 821
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>
                  <strong>Email: </strong>
                  <a
                    href="mailto:contact@dudisoftware.com"
                    className="text-white hover:text-brand-400 transition-colors"
                  >
                    contact@dudisoftware.com
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[9px]">
                  Z
                </span>
                <span>
                  <strong>Zalo Official: </strong>
                  <a
                    href="https://zalo.me/0909163821"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackZaloClick("footer")}
                    className="text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    0909 163 821
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              Liên kết nhanh
            </div>

            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Trang chủ</a>
              </li>
              <li>
                <a href="#audience" className="hover:text-white transition-colors">Đối tượng phù hợp</a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-white transition-colors">Phạm vi bàn giao</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Bảng giá 3 gói</a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">Mô hình dự án</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Quy trình 6 bước</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Câu hỏi thường gặp</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            Copyright © 2026 <strong>Công ty TNHH Giải Pháp Phần Mềm DUDI</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Bảo mật thông tin khách hàng</span>
            <span>•</span>
            <span>Điều khoản dịch vụ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
