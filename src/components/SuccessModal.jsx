import React from "react";
import { CheckCircle, Phone, MessageSquare, X, Copy, Check } from "lucide-react";
import { trackZaloClick, trackPhoneClick } from "../utils/tracking";
import { handleHotlineClick } from "../utils/phoneHelper";

export default function SuccessModal({ isOpen, onClose, leadId, phone }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyLeadId = () => {
    if (leadId) {
      navigator.clipboard.writeText(leadId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Đóng thông báo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Success Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10" />
        </div>

        {/* Modal Content */}
        <div className="text-center space-y-3 mb-6">
          <h3 id="success-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
            DUDI Software đã nhận yêu cầu của bạn!
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            Đội ngũ chuyên viên sẽ xem xét kỹ nhu cầu và chủ động liên hệ trực tiếp qua số điện thoại/Zalo để tư vấn phương án tối ưu nhất.
          </p>
        </div>

        {/* Lead Reference Code */}
        {leadId && (
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between mb-6">
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Mã tra cứu yêu cầu (Lead ID)
              </div>
              <div className="text-xs font-mono font-bold text-slate-800">
                {leadId}
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyLeadId}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Sao chép mã"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Đã chép" : "Chép mã"}</span>
            </button>
          </div>
        )}

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <a
            href="tel:0909163821"
            onClick={(e) => {
              trackPhoneClick("success_modal");
              handleHotlineClick(e, "0909 163 821", "0909163821");
            }}
            title="Gọi ngay hoặc bấm để sao chép"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 shadow-brand-sm transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi ngay 0909 163 821</span>
          </a>

          <a
            href="https://zalo.me/0909163821"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackZaloClick("success_modal")}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Nhắn tin qua Zalo</span>
          </a>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer"
        >
          Đóng và quay lại trang chủ
        </button>
      </div>
    </div>
  );
}
