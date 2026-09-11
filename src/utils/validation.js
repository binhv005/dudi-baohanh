// Form validation rules and sanitization according to Guide.md

export const validatePhone = (phone) => {
  if (!phone) return false;
  const cleanPhone = phone.trim().replace(/[\s.-]/g, "");
  // Vietnam phone regex: starting with 0 or +84, followed by 9-11 digits (total 9-12 digits)
  const phoneRegex = /^(?:\+84|0)[3|5|7|8|9][0-9]{8}$/;
  return phoneRegex.test(cleanPhone);
};

export const validateUrl = (url) => {
  if (!url || url.trim() === "") return true; // Optional field
  try {
    const formatted = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    const parsed = new URL(formatted);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

export const validateLeadForm = (formData) => {
  const errors = {};

  // Full name
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Vui lòng nhập họ và tên (tối thiểu 2 ký tự)";
  } else if (formData.fullName.trim().length > 80) {
    errors.fullName = "Họ và tên không được vượt quá 80 ký tự";
  }

  // Phone
  if (!formData.phone || formData.phone.trim() === "") {
    errors.phone = "Vui lòng nhập số điện thoại hoặc Zalo liên hệ";
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Số điện thoại không hợp lệ (gồm 10 số, ví dụ 0909163821 hoặc +84909163821)";
  }

  // Company Name
  if (!formData.companyName || formData.companyName.trim().length < 2) {
    errors.companyName = "Vui lòng nhập tên doanh nghiệp / cơ sở kinh doanh (tối thiểu 2 ký tự)";
  } else if (formData.companyName.trim().length > 120) {
    errors.companyName = "Tên doanh nghiệp không được vượt quá 120 ký tự";
  }

  // Industry
  if (!formData.industry || formData.industry.trim() === "") {
    errors.industry = "Vui lòng chọn hoặc nhập ngành nghề kinh doanh";
  }

  // Package
  if (!formData.interestedPackage || formData.interestedPackage.trim() === "") {
    errors.interestedPackage = "Vui lòng chọn gói website bạn đang quan tâm";
  }

  // Website Reference (optional)
  if (formData.referenceUrl && formData.referenceUrl.trim() !== "") {
    if (!validateUrl(formData.referenceUrl)) {
      errors.referenceUrl = "Định dạng đường link website tham khảo chưa đúng (ví dụ: https://example.com)";
    }
  }

  // Requirement Description
  if (!formData.description || formData.description.trim().length < 10) {
    errors.description = "Vui lòng mô tả sơ bộ nhu cầu website của bạn (tối thiểu 10 ký tự)";
  } else if (formData.description.trim().length > 1000) {
    errors.description = "Mô tả không vượt quá 1.000 ký tự";
  }

  // Consent Checkbox
  if (!formData.agreeConsent) {
    errors.agreeConsent = "Bạn cần tích đồng ý để DUDI Software liên hệ tư vấn";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Simple XSS sanitization
export const sanitizeInput = (str) => {
  if (typeof str !== "string") return str;
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&#39;";
      case '"': return "&quot;";
      default: return c;
    }
  });
};
