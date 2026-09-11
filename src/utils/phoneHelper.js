// Utility for handling hotline phone clicks across desktop & mobile

/**
 * Checks if the current client is a mobile device
 */
export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  
  // Check user agent
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || "";
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  // Check touch capabilities + screen size
  const isTouch = (window.matchMedia && window.matchMedia("(max-width: 1024px) and (pointer: coarse)").matches);

  return isMobileUA || isTouch;
}

/**
 * Shows a toast popup notifying the user that the phone number has been copied
 */
export function showHotlineToast(phoneNumber = "0909 163 821") {
  if (typeof document === "undefined") return;

  const existingToast = document.getElementById("hotline-copy-toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.id = "hotline-copy-toast";
  toast.className = "fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2.5 px-4 py-3 bg-slate-900/95 text-white rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5),0_0_15px_rgba(236,20,32,0.3)] border border-slate-700/80 backdrop-blur-md transition-all duration-300 transform scale-95 opacity-0 pointer-events-none";
  toast.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div class="flex flex-col text-left pr-1">
      <span class="text-xs font-bold text-white leading-tight">Đã sao chép số Hotline</span>
      <span class="text-[11px] font-mono text-brand-400 font-bold leading-tight">${phoneNumber}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Trigger entrance animation
  requestAnimationFrame(() => {
    toast.classList.remove("scale-95", "opacity-0");
    toast.classList.add("scale-100", "opacity-100");
  });

  // Auto remove after 2.6s
  setTimeout(() => {
    toast.classList.remove("scale-100", "opacity-100");
    toast.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2600);
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopy(text) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    showHotlineToast(text);
  } catch (err) {
    console.error("Could not copy phone number:", err);
  }
}

/**
 * Unified handler for hotline clicks:
 * - Desktop: Copies phone number to clipboard and displays a sleek toast
 * - Mobile: Directs user to tel: dialer
 */
export function handleHotlineClick(e, formattedPhone = "0909 163 821", rawPhone = "0909163821") {
  if (isMobileDevice()) {
    // On mobile, let the default tel: link execute or explicitly call window.location
    return true;
  }

  // On desktop, prevent default tel: app trigger
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formattedPhone)
      .then(() => showHotlineToast(formattedPhone))
      .catch(() => fallbackCopy(formattedPhone));
  } else {
    fallbackCopy(formattedPhone);
  }

  return false;
}
