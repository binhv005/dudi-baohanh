/**
 * Smooth Section Navigation & Transition Helper
 * Handles smooth scrolling with navbar offset, progress bar indicator, and target highlight.
 */

let isNavigating = false;

export const navigateToSection = (targetId, options = {}) => {
  if (typeof window === "undefined") return;

  const id = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const targetEl = document.getElementById(id);
  if (!targetEl) return;

  // Trigger top transition indicator event if any
  window.dispatchEvent(new CustomEvent("page:transition-start"));

  // Calculate navbar offset (Header is ~65-80px)
  const header = document.getElementById("header");
  const headerOffset = header ? header.offsetHeight + 10 : 80;
  const elementPosition = targetEl.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  isNavigating = true;
  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: "smooth"
  });

  // Force reveal of target section & stagger children if using scroll reveal
  targetEl.classList.add("is-revealed", "revealed");
  const revealItems = targetEl.querySelectorAll(".reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up, .reveal-stagger-item");
  revealItems.forEach((item, idx) => {
    item.style.transitionDelay = `${idx * 60}ms`;
    item.classList.add("revealed");
  });

  // Highlight effect
  targetEl.classList.remove("target-section-highlight");
  // Reflow
  void targetEl.offsetWidth;
  targetEl.classList.add("target-section-highlight");

  setTimeout(() => {
    isNavigating = false;
    window.dispatchEvent(new CustomEvent("page:transition-end"));
  }, 700);
};

/**
 * Initializes global handler for all anchor links pointing to "#section-id"
 */
export const initAnchorTransitions = () => {
  if (typeof window === "undefined") return () => {};

  const handleAnchorClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    // If target exists in page, use smooth transition
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      navigateToSection(targetId);
    }
  };

  document.addEventListener("click", handleAnchorClick);
  return () => {
    document.removeEventListener("click", handleAnchorClick);
  };
};
