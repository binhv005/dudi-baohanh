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
  const [formTouched, setFormTouched] = useState(false);

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
    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      trackFormError(firstError, errors[firstError]);
      return;
    }

    setIsSubmitting(true);
    trackFormSubmit(formData.packageInterest, formData.platform);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackFormSuccess(formData.packageInterest);
    }, 900);
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
      className="snap-section relative min-h-[100svh] overflow-hidden border-b border-slate-200/90 bg-slate-900 flex items-center py-8 sm:py-12 lg:py-16"
    >
      {/* Background Image Layer with smooth parallax */}
      <div 
        data-parallax
        data-parallax-speed="0.05"
        className="absolute -inset-2 will-change-transform pointer-events-none scale-[1.03] origin-center"
        style={{
          backgroundImage: `url('/tải xuống.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Discrete bottom-right corner gradient to conceal any corner mark */}
      <div className="absolute bottom-0 right-0 w-28 h-16 bg-gradient-to-tl from-slate-900/60 via-slate-900/30 to-transparent pointer-events-none z-0" />

      <div className="internal-scroll-container relative z-10 w-full flex items-center my-auto py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center justify-center md:justify-start">
        
          {/* Form Card Positioned Over the Left Consultation Intake Zone - Enlarged & Spacious */}
          <div className="w-full max-w-[430px] sm:max-w-[480px] lg:max-w-[510px] mx-auto md:mx-0 md:ml-4 lg:ml-8 xl:ml-12">
            <div className="reveal-scale-up relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5.5 lg:p-6 shadow-2xl border border-white/80 ring-1 ring-slate-900/10 text-slate-900 overflow-hidden">
              
              {/* Top Mech Accent Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 rounded-b-md shadow-[0_0_8px_#EC1420]" />
              
              {/* Tech Side Grips */}
              <div className="absolute top-5 left-0 w-0.5 h-5 bg-brand-500 rounded-r-sm" />
              <div className="absolute top-5 right-0 w-0.5 h-5 bg-brand-500 rounded-l-sm" />

              {/* Form Title */}
              <div className="text-center mb-3 pt-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight">
                  Đăng ký <span className="text-brand-600 font-extrabold">Khảo sát Website</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-1">
                  Nhận kết quả kiểm tra sơ bộ & đề xuất phương án bảo trì trong 30 phút
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-5 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-xs">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">
                    Gửi thông tin thành công!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto mb-3.5 leading-relaxed">
                    Kỹ thuật viên DUDI đã tiếp nhận và sẽ liên hệ hỗ trợ bạn qua SĐT/Zalo ngay.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      handleReset();
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Gửi thêm website khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
                  
                  {/* Field 1: Website URL */}
                  <div>
                    <label htmlFor="websiteUrl" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                      <Globe className="w-3.5 h-3.5 text-brand-600" />
                      <span>Địa chỉ Website: <span className="text-rose-600">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="websiteUrl"
                        placeholder="yourdomain.com hoặc https://yourdomain.com"
                        value={formData.websiteUrl}
                        onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                        className={`w-full px-3 py-1.5 text-xs sm:text-[13px] h-8.5 sm:h-9 rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.websiteUrl
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                    </div>
                    {errors.websiteUrl && (
                      <p className="mt-1 text-[10px] text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.websiteUrl}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2 & 3: Platform & Package Interest (Side-by-side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="platform" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        <Layers className="w-3.5 h-3.5 text-brand-600" />
                        <span>Nền tảng website:</span>
                      </label>
                      <select
                        id="platform"
                        value={formData.platform}
                        onChange={(e) => handleInputChange("platform", e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs sm:text-[13px] h-8.5 sm:h-9 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-medium cursor-pointer shadow-2xs"
                      >
                        <option value="WordPress">WordPress</option>
                        <option value="Code riêng">Mã nguồn riêng</option>
                        <option value="Khác">Khác (Haravan...)</option>
                        <option value="Chưa rõ">Chưa rõ nền tảng</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="packageInterest" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Gói quan tâm:</span>
                      </label>
                      <select
                        id="packageInterest"
                        value={formData.packageInterest}
                        onChange={(e) => {
                          handleInputChange("packageInterest", e.target.value);
                          if (onSelectPackage) onSelectPackage(e.target.value);
                        }}
                        className="w-full px-2.5 py-1.5 text-xs sm:text-[13px] h-8.5 sm:h-9 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all font-semibold text-brand-700 cursor-pointer shadow-2xs"
                      >
                        <option value="Cơ bản">Cơ bản (500k/tháng)</option>
                        <option value="Tiêu chuẩn">Tiêu chuẩn (1.5tr/tháng)</option>
                        <option value="Cao cấp">Cao cấp (3tr/tháng)</option>
                        <option value="Chưa rõ">Nhờ tư vấn gói</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4 & 5: Full Name & Phone Number (Side-by-side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="fullName" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        <User className="w-3.5 h-3.5 text-brand-600" />
                        <span>Họ và tên: <span className="text-rose-600">*</span></span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className={`w-full px-3 py-1.5 text-xs sm:text-[13px] h-8.5 sm:h-9 rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[10px] text-rose-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        <Phone className="w-3.5 h-3.5 text-brand-600" />
                        <span>Số ĐT / Zalo: <span className="text-rose-600">*</span></span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="0909 163 821"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full px-3 py-1.5 text-xs sm:text-[13px] h-8.5 sm:h-9 rounded-xl bg-white border text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-rose-500 focus:ring-rose-500/20"
                            : "border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-brand-500/20 shadow-2xs"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[10px] text-rose-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Field 6: Website Situation Pill Checkboxes */}
                  <div>
                    <label className="block text-[10.5px] sm:text-[11px] font-bold text-slate-700 mb-1">
                      Tình trạng website cần hỗ trợ:
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {situationOptions.map((opt) => {
                        const checked = formData.situations.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleSituation(opt)}
                            className={`px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer border ${
                              checked
                                ? "bg-brand-50 border-brand-300 text-brand-700 font-bold shadow-2xs"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs"
                            }`}
                          >
                            {checked ? (
                              <CheckSquare className="w-3 h-3 text-brand-600 shrink-0" />
                            ) : (
                              <Square className="w-3 h-3 text-slate-300 shrink-0" />
                            )}
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Consent & Security Guarantee */}
                  <div className="pt-0.5 flex items-center justify-between gap-1">
                    <label className="flex items-center gap-1.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => handleInputChange("consent", e.target.checked)}
                        className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="text-[10px] sm:text-[10.5px] text-slate-600 font-medium">
                        Đồng ý để DUDI liên hệ báo kết quả kiểm tra
                      </span>
                    </label>

                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 shrink-0 font-medium">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>Bảo mật 100%</span>
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-1 flex items-center gap-2">
                    {/* Primary Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 hover:from-brand-500 hover:to-rose-500 active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-brand hover:shadow-brand-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed h-9 sm:h-10"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Gửi kiểm tra website</span>
                        </>
                      )}
                    </button>

                    {/* Secondary Reset Button */}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-2 px-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 active:scale-[0.98] text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs h-9 sm:h-10"
                      title="Làm mới form"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden sm:inline text-[11px]">Làm mới</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
