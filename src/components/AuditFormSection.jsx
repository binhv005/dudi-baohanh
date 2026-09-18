import React, { useState, useEffect } from "react";
import { 
  Send, 
  RotateCcw,
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Globe, 
  User, 
  Phone, 
  Layers, 
  FileText, 
  CheckSquare, 
  Square, 
  Sparkles,
  Loader2,
  HelpCircle
} from "lucide-react";
import { 
  trackFormStart, 
  trackFormSubmit, 
  trackFormSuccess, 
  trackFormError 
} from "../utils/tracking";

export default function AuditFormSection({ selectedPackage, onSelectPackage }) {
  const initialFormData = {
    websiteUrl: "",
    platform: "WordPress",
    situations: ["Cần người vận hành"],
    packageInterest: selectedPackage || "Tiêu chuẩn",
    description: "",
    fullName: "",
    phone: "",
    consent: true,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formTouched, setFormTouched] = useState(false);

  // URL Web App của Google Apps Script (có thể định cấu hình qua file .env VITE_GOOGLE_SCRIPT_URL)
  const GOOGLE_SCRIPT_URL = 
    import.meta.env.VITE_GOOGLE_SCRIPT_URL || 
    "https://script.google.com/macros/s/AKfycbz..."; // Thay thế URL Web App của bạn ở đây

  useEffect(() => {
    if (selectedPackage && selectedPackage !== "Chưa rõ") {
      setFormData((prev) => ({ ...prev, packageInterest: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleInputChange = (field, value) => {
    if (!formTouched) {
      setFormTouched(true);
      trackFormStart("website_audit_form");
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  const toggleSituation = (item) => {
    const current = formData.situations;
    if (current.includes(item)) {
      setFormData((prev) => ({
        ...prev,
        situations: current.filter((s) => s !== item),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        situations: [...current, item],
      }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError("");
  };

  const validate = () => {
    const errs = {};

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;
    if (!formData.websiteUrl.trim()) {
      errs.websiteUrl = "Vui lòng nhập link website.";
    } else if (!urlPattern.test(formData.websiteUrl.trim())) {
      errs.websiteUrl = "Địa chỉ website chưa hợp lệ (ví dụ: domain.com).";
    }

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Vui lòng nhập họ tên.";
    }

    const phoneClean = formData.phone.replace(/[\s.-]/g, "");
    if (!phoneClean) {
      errs.phone = "Vui lòng nhập SĐT/Zalo.";
    } else if (phoneClean.length < 9 || phoneClean.length > 12) {
      errs.phone = "SĐT chưa hợp lệ (từ 9-12 số).";
    }

    if (!formData.consent) {
      errs.consent = "Cần tích đồng ý liên hệ.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      trackFormError(firstError, errors[firstError]);
      return;
    }

    setIsSubmitting(true);
    trackFormSubmit(formData.packageInterest, formData.platform);

    const payload = {
      websiteUrl: formData.websiteUrl.trim(),
      platform: formData.platform,
      packageInterest: formData.packageInterest,
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      situations: formData.situations,
      timestamp: new Date().toISOString(),
    };

    try {
      // Gửi request đến Google Apps Script
      // Sử dụng mode: 'no-cors' và Content-Type text/plain để tránh vướng CORS preflight từ Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      trackFormSuccess(formData.packageInterest);
    } catch (err) {
      console.error("Lỗi gửi form:", err);
      setIsSubmitting(false);
      setSubmitError("Có lỗi xảy ra khi gửi dữ liệu. Vui lòng thử lại hoặc liên hệ hotline!");
      trackFormError("network_error", err.message || "Failed to submit");
    }
  };

  const situationOptions = [
    "Lỗi kỹ thuật",
    "Tải chậm",
    "Chưa backup",
    "Cần vận hành",
    "Nội dung cũ",
  ];

  return (
    <section 
      id="audit-form" 
      className="snap-section relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FAFAFC] text-slate-800 flex items-center"
    >
      {/* Light Tech Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(226, 232, 240, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.8) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Soft Ambient Tech Glow Blobs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="internal-scroll-container relative z-10 w-full flex flex-col items-center justify-center">
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 w-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="reveal-fade-up text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-2.5 sm:mb-3.5 2xl:mb-6">
            <h2 className="text-[clamp(1.15rem,2.2vw,1.65rem)] 2xl:text-[2rem] font-black text-slate-900 tracking-tight leading-tight mb-0.5">
              Khảo sát sức khỏe website & tư vấn bảo trì miễn phí
            </h2>
            <p className="text-[clamp(0.72rem,0.9vw,0.8125rem)] 2xl:text-[0.9375rem] text-slate-600 leading-normal font-normal max-w-2xl 2xl:max-w-3xl mx-auto">
              Kỹ sư DUDI trực tiếp quét lỗi, kiểm tra bảo mật, đo tốc độ và đề xuất phương án tối ưu trong 30 phút.
            </p>
          </div>

          {/* 2-Column Responsive Grid: Mascot & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 2xl:gap-12 items-center">

            {/* LEFT: 3D Support Mascot Visual (+30% larger) */}
            <div className="lg:col-span-5 flex items-center justify-center reveal-fade-right">
              <div className="relative w-full max-w-[clamp(280px,36vw,495px)] 2xl:max-w-[560px] flex justify-center origin-center py-2">
                <img
                  src="/faq-mascot.webp"
                  alt="DUDI Robot hỗ trợ vận hành & kiểm tra website"
                  className="w-full h-auto max-h-[clamp(280px,42vh,495px)] 2xl:max-h-[560px] object-contain filter drop-shadow-[0_24px_48px_rgba(236,20,32,0.24)] animate-float-slow select-none hover:scale-105 transition-transform duration-300 cursor-pointer"
                  width="560"
                  height="560"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT: Form Card (7 cols) */}
            <div className="lg:col-span-7 flex justify-center reveal-fade-left">
              <div className="w-full max-w-xl lg:max-w-none">
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-[clamp(0.875rem,1.5vw,1.375rem)] 2xl:p-6 shadow-xl border border-slate-200/90 text-slate-900 overflow-hidden">
                  
                  {/* Top Mech Accent Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 2xl:w-28 h-1.5 2xl:h-2 bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 rounded-b-md shadow-[0_0_8px_#EC1420]" />
                  
                  {/* Tech Side Grips */}
                  <div className="absolute top-5 left-0 w-0.5 h-5 bg-brand-500 rounded-r-sm" />
                  <div className="absolute top-5 right-0 w-0.5 h-5 bg-brand-500 rounded-l-sm" />

              {/* Form Title */}
              <div className="text-center mb-2.5 2xl:mb-4 pt-0.5">
                <h3 className="text-[clamp(13px,1.1vw,16px)] 2xl:text-lg font-black text-slate-900 tracking-tight leading-tight">
                  Đăng ký <span className="text-brand-600 font-extrabold">Khảo sát Website</span>
                </h3>
                <p className="text-[clamp(10px,0.78vw,11px)] 2xl:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                  Nhận kết quả kiểm tra sơ bộ & đề xuất phương án bảo trì trong 30 phút
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-5 2xl:py-8 animate-fadeIn">
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-xs">
                    <CheckCircle2 className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="text-base 2xl:text-lg font-extrabold text-slate-900 mb-1">
                    Gửi thông tin thành công!
                  </h4>
                  <p className="text-xs 2xl:text-sm text-slate-600 max-w-xs 2xl:max-w-sm mx-auto mb-3.5 2xl:mb-5 leading-relaxed">
                    Kỹ thuật viên DUDI đã tiếp nhận và sẽ liên hệ hỗ trợ bạn qua SĐT/Zalo ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      handleReset();
                    }}
                    className="px-4 2xl:px-6 py-2 2xl:py-2.5 rounded-xl bg-slate-900 text-white text-xs 2xl:text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Gửi thêm website khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2 sm:space-y-2.5 2xl:space-y-3.5">
                  
                  {/* Field 1: Website URL */}
                  <div>
                    <label htmlFor="websiteUrl" className="flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13px] font-bold text-slate-800 mb-0.5 sm:mb-1">
                      <Globe className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-brand-600" />
                      <span>Địa chỉ Website: <span className="text-rose-600">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="websiteUrl"
                        placeholder="yourdomain.com hoặc https://yourdomain.com"
                        value={formData.websiteUrl}
                        onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                        className={`w-full px-3 2xl:px-4 py-1 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm h-[clamp(2.1rem,4.2vh,2.35rem)] 2xl:h-[2.65rem] rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.websiteUrl
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                    </div>
                    {errors.websiteUrl && (
                      <p className="mt-1 text-[10px] 2xl:text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 2xl:w-3.5 2xl:h-3.5" />
                        <span>{errors.websiteUrl}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2 & 3: Platform & Package Interest (Side-by-side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:gap-3">
                    <div>
                      <label htmlFor="platform" className="flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13px] font-bold text-slate-800 mb-0.5 sm:mb-1">
                        <Layers className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-brand-600" />
                        <span>Nền tảng website:</span>
                      </label>
                      <select
                        id="platform"
                        value={formData.platform}
                        onChange={(e) => handleInputChange("platform", e.target.value)}
                        className="w-full px-2.5 2xl:px-3.5 py-1 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm h-[clamp(2.1rem,4.2vh,2.35rem)] 2xl:h-[2.65rem] rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium cursor-pointer shadow-2xs"
                      >
                        <option value="WordPress">WordPress</option>
                        <option value="Code riêng">Mã nguồn riêng</option>
                        <option value="Khác">Khác (Haravan...)</option>
                        <option value="Chưa rõ">Chưa rõ nền tảng</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="packageInterest" className="flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13px] font-bold text-slate-800 mb-0.5 sm:mb-1">
                        <Sparkles className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-amber-500" />
                        <span>Gói quan tâm:</span>
                      </label>
                      <select
                        id="packageInterest"
                        value={formData.packageInterest}
                        onChange={(e) => {
                          handleInputChange("packageInterest", e.target.value);
                          if (onSelectPackage) onSelectPackage(e.target.value);
                        }}
                        className="w-full px-2.5 2xl:px-3.5 py-1 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm h-[clamp(2.1rem,4.2vh,2.35rem)] 2xl:h-[2.65rem] rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-semibold text-brand-700 cursor-pointer shadow-2xs"
                      >
                        <option value="Cơ bản">Cơ bản (500k/tháng)</option>
                        <option value="Tiêu chuẩn">Tiêu chuẩn (1.5tr/tháng)</option>
                        <option value="Cao cấp">Cao cấp (3tr/tháng)</option>
                        <option value="Chưa rõ">Nhờ tư vấn gói</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4 & 5: Full Name & Phone Number (Side-by-side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:gap-3">
                    <div>
                      <label htmlFor="fullName" className="flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13px] font-bold text-slate-800 mb-0.5 sm:mb-1">
                        <User className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-brand-600" />
                        <span>Họ và tên: <span className="text-rose-600">*</span></span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className={`w-full px-3 2xl:px-4 py-1 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm h-[clamp(2.1rem,4.2vh,2.35rem)] 2xl:h-[2.65rem] rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[10px] 2xl:text-xs text-rose-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="flex items-center gap-1.5 text-[clamp(10.5px,0.8vw,11.5px)] 2xl:text-[13px] font-bold text-slate-800 mb-0.5 sm:mb-1">
                        <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-brand-600" />
                        <span>Số ĐT / Zalo: <span className="text-rose-600">*</span></span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="0909 163 821"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full px-3 2xl:px-4 py-1 text-[clamp(11px,0.85vw,12.5px)] 2xl:text-sm h-[clamp(2.1rem,4.2vh,2.35rem)] 2xl:h-[2.65rem] rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[10px] 2xl:text-xs text-rose-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Field 6: Website Situation Pill Checkboxes */}
                  <div>
                    <label className="block text-[clamp(10px,0.78vw,11px)] 2xl:text-xs font-bold text-slate-700 mb-1 2xl:mb-1.5">
                      Tình trạng website cần hỗ trợ:
                    </label>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 2xl:gap-2">
                      {situationOptions.map((opt) => {
                        const checked = formData.situations.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleSituation(opt)}
                            className={`px-2 py-0.5 sm:py-1 2xl:px-3 2xl:py-1.5 rounded-lg text-[clamp(9.5px,0.75vw,10.5px)] 2xl:text-xs font-medium transition-all flex items-center gap-1 cursor-pointer border ${
                              checked
                                ? "bg-brand-50 border-brand-300 text-brand-700 font-bold shadow-2xs"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs"
                            }`}
                          >
                            {checked ? (
                              <CheckSquare className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 text-brand-600 shrink-0" />
                            ) : (
                              <Square className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 text-slate-300 shrink-0" />
                            )}
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-0.5 flex items-center">
                    <label className="flex items-center gap-1.5 2xl:gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 w-3.5 h-3.5 2xl:w-4 2xl:h-4 cursor-pointer"
                      />
                      <span className="text-[clamp(9.5px,0.75vw,10.5px)] 2xl:text-xs text-slate-600 font-medium">
                        Đồng ý để DUDI liên hệ báo kết quả kiểm tra
                      </span>
                    </label>
                  </div>

                  {/* Error Alert */}
                  {submitError && (
                    <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-[11px] 2xl:text-xs flex items-center gap-1.5 animate-fadeIn">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <div className="pt-0.5 sm:pt-1 2xl:pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2 px-4 2xl:py-3 2xl:px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 hover:from-brand-500 hover:to-rose-500 active:scale-[0.98] text-white text-[clamp(11.5px,0.9vw,13.5px)] 2xl:text-base font-bold shadow-brand hover:shadow-brand-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed h-[clamp(2.25rem,4.5vh,2.6rem)] 2xl:h-[3rem]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                          <span>Gửi kiểm tra website</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
