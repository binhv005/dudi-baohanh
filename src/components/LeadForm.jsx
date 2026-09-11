import React, { useState, useEffect } from "react";
import { validateLeadForm, sanitizeInput } from "../utils/validation";
import { trackEvent } from "../utils/tracking";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import SuccessModal from "./SuccessModal";

export default function LeadForm({ selectedPackage, onSelectPackage }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    companyName: "",
    industry: "",
    interestedPackage: selectedPackage || "Chưa rõ",
    estimatedPages: "Chưa rõ",
    features: [],
    referenceUrl: "",
    description: "",
    agreeConsent: false,
    website_company_fax: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formStatus, setFormStatus] = useState("idle");
  const [submittedLeadId, setSubmittedLeadId] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, interestedPackage: selectedPackage }));
    }
  }, [selectedPackage]);

  const featureOptions = [
    { id: "blog", label: "Module Blog / Tin tức" },
    { id: "cms", label: "Trang quản trị (CMS)" },
    { id: "portfolio", label: "Showcase Dự án" },
    { id: "custom_form", label: "Form thu lead riêng" },
    { id: "multilang", label: "Đa ngôn ngữ" },
    { id: "other", label: "Tính năng riêng khác" }
  ];

  const industryOptions = [
    "Công nghệ thông tin / Dịch vụ IT",
    "Kiến trúc / Xây dựng / Nội thất",
    "Sản xuất / Xuất nhập khẩu / Cơ khí",
    "Y tế / Phòng khám / Dược phẩm",
    "Tài chính / Kế toán / Luật",
    "Giáo dục / Đào tạo / Trung tâm",
    "Nhà hàng / Dịch vụ ăn uống / F&B",
    "Du lịch / Khách sạn / Nghỉ dưỡng",
    "Thương mại / Phân phối bán sỉ",
    "Khác"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validation = validateLeadForm(formData);
    if (validation.errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validation.errors[field] }));
    }
  };

  const handleFeatureToggle = (featureId) => {
    setFormData((prev) => {
      const exists = prev.features.includes(featureId);
      const updated = exists
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId];
      return { ...prev, features: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.website_company_fax && formData.website_company_fax.trim() !== "") {
      setFormStatus("success");
      return;
    }

    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setFormStatus("error");

      const firstErrorField = Object.keys(validation.errors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();

      trackEvent("form_error", { error_fields: Object.keys(validation.errors).join(",") });
      return;
    }

    setFormStatus("submitting");
    trackEvent("form_submit", {
      package_name: formData.interestedPackage,
      industry: formData.industry,
      page_count: formData.estimatedPages
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const generatedLeadId = `LEAD-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
      setSubmittedLeadId(generatedLeadId);
      setFormStatus("success");
      setShowSuccessModal(true);

      trackEvent("form_success", {
        lead_id: generatedLeadId,
        source: "landing_page_lead_form"
      });

    } catch (err) {
      setFormStatus("error");
      setErrors({ form: "Có lỗi khi gửi dữ liệu. Vui lòng thử lại hoặc gọi Hotline 0909 163 821." });
    }
  };

  return (
    <section 
      id="lead-form" 
      className="snap-section border-b border-slate-800 relative bg-[#0B1120]"
    >
      <div className="internal-scroll-container flex flex-col justify-center min-h-[100svh] py-12 md:py-14 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        
        {/* Section Title */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
            S11 — Nhận tư vấn & Báo giá
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Gửi yêu cầu website doanh nghiệp của bạn
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Điền thông tin bên dưới để DUDI Software phân tích yêu cầu và liên hệ tư vấn giải pháp sát với ngân sách của bạn nhất.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-card">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Honeypot hidden input */}
            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                name="website_company_fax"
                value={formData.website_company_fax}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            {/* GROUP 1: THÔNG TIN LIÊN HỆ */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-[11px] font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Thông tin liên hệ
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Họ và tên <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.fullName && touched.fullName
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone / Zalo */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Điện thoại / Zalo <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    placeholder="Ví dụ: 0909 163 821"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.phone && touched.phone
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="companyName" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Tên doanh nghiệp / Cơ sở kinh doanh <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("companyName")}
                    placeholder="Ví dụ: Công ty TNHH Giải Pháp X"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.companyName && touched.companyName
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.companyName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* GROUP 2: NHU CẦU WEBSITE */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-100">
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-[11px] font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  Nhu cầu website
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ngành nghề hoạt động <span className="text-brand-500">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    onBlur={() => handleBlur("industry")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors bg-white ${
                      errors.industry && touched.industry
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  >
                    <option value="">-- Chọn ngành nghề của bạn --</option>
                    {industryOptions.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* Interested Package */}
                <div>
                  <label htmlFor="interestedPackage" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Gói website quan tâm <span className="text-brand-500">*</span>
                  </label>
                  <select
                    id="interestedPackage"
                    name="interestedPackage"
                    required
                    value={formData.interestedPackage}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-brand-500 text-xs sm:text-sm focus:outline-none bg-white font-medium text-slate-900"
                  >
                    <option value="Chưa rõ">Chưa rõ — Cần DUDI tư vấn gói phù hợp</option>
                    <option value="Cơ bản">Gói Cơ bản — từ 3.000.000đ</option>
                    <option value="Tiêu chuẩn">Gói Tiêu chuẩn — từ 7.000.000đ (Khuyên dùng)</option>
                    <option value="Cao cấp">Gói Cao cấp — Báo giá theo yêu cầu</option>
                  </select>
                </div>

                {/* Estimated Pages */}
                <div>
                  <label htmlFor="estimatedPages" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Số trang dự kiến (Tùy chọn)
                  </label>
                  <select
                    id="estimatedPages"
                    name="estimatedPages"
                    value={formData.estimatedPages}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-brand-500 text-xs sm:text-sm focus:outline-none bg-white"
                  >
                    <option value="Chưa rõ">Chưa rõ (DUDI tư vấn sitemap)</option>
                    <option value="1–4">1 – 4 trang (Phù hợp gói Cơ bản)</option>
                    <option value="5–6">5 – 6 trang (Phù hợp gói Tiêu chuẩn)</option>
                    <option value="7–12">7 – 12 trang (Phù hợp gói Cao cấp)</option>
                  </select>
                </div>

                {/* Reference Website URL */}
                <div>
                  <label htmlFor="referenceUrl" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Website mẫu bạn thích (Tùy chọn)
                  </label>
                  <input
                    id="referenceUrl"
                    name="referenceUrl"
                    type="url"
                    value={formData.referenceUrl}
                    onChange={handleChange}
                    onBlur={() => handleBlur("referenceUrl")}
                    placeholder="https://example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.referenceUrl
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  {errors.referenceUrl && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.referenceUrl}
                    </p>
                  )}
                </div>

                {/* Features Checkboxes */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tính năng mong muốn tích hợp:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {featureOptions.map((feat) => {
                      const isChecked = formData.features.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => handleFeatureToggle(feat.id)}
                          className={`p-2 rounded-lg border text-xs text-left font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                            isChecked
                              ? "bg-brand-50 border-brand-500 text-brand-700"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 text-[10px] ${
                            isChecked ? "bg-brand-500 border-brand-500 text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isChecked && "✓"}
                          </span>
                          <span className="truncate">{feat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Requirement Description */}
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mô tả sơ bộ nhu cầu & yêu cầu cụ thể <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={() => handleBlur("description")}
                    placeholder="Mô tả mục tiêu của website, các nội dung chính bạn đã chuẩn bị, phong cách mong muốn..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.description && touched.description
                        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                        : "border-slate-200 hover:border-slate-300 focus:border-brand-500"
                    }`}
                  />
                  <div className="flex items-center justify-between mt-1">
                    {errors.description ? (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        {errors.description}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[10px] text-slate-400">
                      {formData.description.length}/1.000 ký tự
                    </span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="sm:col-span-2 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      id="agreeConsent"
                      name="agreeConsent"
                      type="checkbox"
                      required
                      checked={formData.agreeConsent}
                      onChange={handleChange}
                      className="w-3.5 h-3.5 mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      Tôi đồng ý để <strong>Công ty TNHH Giải Pháp Phần Mềm DUDI</strong> liên hệ tư vấn giải pháp website theo thông tin đã cung cấp.
                    </span>
                  </label>
                  {errors.agreeConsent && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {errors.agreeConsent}
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* General Form Error */}
            {errors.form && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                {errors.form}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`w-full py-3 px-6 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-brand-sm hover:shadow-brand ${
                  formStatus === "submitting"
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-brand-500 hover:bg-brand-600 active:scale-[0.99]"
                }`}
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang gửi yêu cầu tiếp nhận...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi yêu cầu nhận tư vấn & báo giá chi tiết</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Bảo mật thông tin 100% • Phản hồi tư vấn nhanh chóng</span>
              </div>
            </div>

          </form>
        </div>

      </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        leadId={submittedLeadId}
        phone={formData.phone}
      />
    </section>
  );
}
