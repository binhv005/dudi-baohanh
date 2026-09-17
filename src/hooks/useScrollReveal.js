import { useEffect } from "react";

const REVEAL_ELEMENT_SELECTORS = [
  ".reveal-fade-up",
  ".reveal-fade-down",
  ".reveal-fade-left",
  ".reveal-fade-right",
  ".reveal-scale-up",
  ".reveal-zoom-in",
  ".reveal-blur-in",
  ".reveal-stagger-item",
  ".reveal-on-scroll",
  "[data-reveal]"
].join(", ");

/**
 * Modern GPU-accelerated Scroll Reveal Hook
 * - Triggers smooth fade-in and translation as each card, header, or element enters viewport
 * - Automatic cascading stagger for cards and list items
 * - Re-animates when user scrolls past and back for an engaging dynamic experience
 */
export function useScrollReveal() {
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal everything immediately if user prefers reduced motion
    if (isReducedMotion) {
      document
        .querySelectorAll(REVEAL_ELEMENT_SELECTORS)
        .forEach((el) => {
          el.classList.add("revealed");
        });
      return;
    }

    const observedElements = new WeakSet();

    // IntersectionObserver for elements and containers
    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          // If this is a container with stagger items
          if (el.hasAttribute("data-reveal-container") || el.classList.contains("reveal-stagger-container")) {
            const staggerItems = el.querySelectorAll(".reveal-stagger-item, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up");
            staggerItems.forEach((item, index) => {
              const customDelay = item.getAttribute("data-stagger-delay");
              const delay = customDelay ? parseInt(customDelay, 10) : Math.min(index * 110 + 60, 800);
              item.style.transitionDelay = `${delay}ms`;
              item.classList.add("revealed");
            });
          }

          el.classList.add("revealed");
        } else {
          // If scrolled out of view past the bottom (user scrolling up above it)
          if (entry.boundingClientRect.top > window.innerHeight) {
            el.classList.remove("revealed");
            el.style.transitionDelay = "";

            if (el.hasAttribute("data-reveal-container") || el.classList.contains("reveal-stagger-container")) {
              const staggerItems = el.querySelectorAll(".reveal-stagger-item, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up");
              staggerItems.forEach((item) => {
                item.classList.remove("revealed");
                item.style.transitionDelay = "";
              });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: "0px 0px -45px 0px", // triggers cleanly when 45px into screen
      threshold: 0.08,
    });

    const scanAndObserve = () => {
      // Find all revealable elements
      const elements = document.querySelectorAll(
        `${REVEAL_ELEMENT_SELECTORS}, [data-reveal-container], .reveal-stagger-container`
      );

      elements.forEach((el) => {
        // Elements already in initial visible viewport on page load reveal smoothly with subtle initial stagger
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && window.scrollY < 120) {
          el.classList.add("revealed");
        }

        if (!observedElements.has(el)) {
          observedElements.add(el);
          observer.observe(el);
        }
      });
    };

    // Run initial scan
    scanAndObserve();

    // Observe DOM changes
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Parallax handler for background elements
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll("[data-parallax]");
          if (parallaxElements.length > 0) {
            parallaxElements.forEach((el) => {
              const speed = parseFloat(el.getAttribute("data-parallax-speed")) || 0.05;
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = Math.min(Math.max((window.innerHeight / 2 - rect.top) * speed, -40), 40);
                el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

