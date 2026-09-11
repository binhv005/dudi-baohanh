// Data Layer Event Tracking helper for GA4 / GTM (No PII data included)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString()
    });
    // Console logger in development mode
    if (import.meta.env?.DEV) {
      console.log(`[Tracking Event] ${eventName}:`, params);
    }
  }
};

export const trackCtaClick = (position, label, target) => {
  trackEvent("cta_click", { position, label, target });
};

export const trackPackageSelect = (packageName, displayPrice) => {
  trackEvent("package_select", { package_name: packageName, display_price: displayPrice });
};

export const trackZaloClick = (position) => {
  trackEvent("zalo_click", { position, page_path: typeof window !== "undefined" ? window.location.pathname : "" });
};

export const trackPhoneClick = (position) => {
  trackEvent("phone_click", { position, page_path: typeof window !== "undefined" ? window.location.pathname : "" });
};

export const trackFormStart = (formName = "website_audit_form") => {
  trackEvent("form_start", { form_name: formName });
};

export const trackFormSubmit = (packageName, platform) => {
  trackEvent("form_submit", { package_name: packageName, platform });
};

export const trackFormSuccess = (packageName) => {
  trackEvent("form_success", { package_name: packageName });
};

export const trackFormError = (errorField, errorMessage) => {
  trackEvent("form_error", { error_field: errorField, error_message: errorMessage });
};
