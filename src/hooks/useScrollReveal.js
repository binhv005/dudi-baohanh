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
  "[data-reveal-container]",
  "[data-reveal]"
].join(", ");

/**
 * Modern GPU-accelerated Scroll Reveal Hook
 * - Reveals each section individually as it enters the viewport (opacity: 0 -> 1, translateY: 35-45px -> 0)
 * - Staggers inner headings, texts, cards, and CTA buttons for an ultra-smooth high-tech feel
 * - Works naturally when scrolling up and down
 */
export function useScrollReveal() {
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Immediately reveal everything if user prefers reduced motion
    if (isReducedMotion) {
      document
        .querySelectorAll("section, footer, .snap-section, .scroll-reveal-section, " + REVEAL_ELEMENT_SELECTORS)
        .forEach((el) => {
          el.classList.add("is-revealed", "revealed");
        });
      return;
    }

    const observedSections = new WeakSet();
    const observedElements = new WeakSet();

    // 1. Section Intersection Observer
    const sectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;

        if (entry.isIntersecting) {
          // Add staggered delay to inner children BEFORE adding revealed class to avoid instant flush
          const innerRevealItems = section.querySelectorAll(REVEAL_ELEMENT_SELECTORS);
          innerRevealItems.forEach((item, index) => {
            const customDelay = item.getAttribute("data-stagger-delay");
            const delay = customDelay ? parseInt(customDelay, 10) : Math.min(index * 90 + 70, 650);
            item.style.transitionDelay = `${delay}ms`;
            item.classList.add("revealed");
          });

          section.classList.add("is-revealed");
        } else {
          // If the section scrolled below the visible screen (user scrolled back up past it)
          if (entry.boundingClientRect.top > window.innerHeight) {
            section.classList.remove("is-revealed");
            const innerRevealItems = section.querySelectorAll(REVEAL_ELEMENT_SELECTORS);
            innerRevealItems.forEach((item) => {
              item.classList.remove("revealed");
              item.style.transitionDelay = "";
            });
          }
        }
      });
    };

    const sectionObserver = new IntersectionObserver(sectionObserverCallback, {
      root: null,
      rootMargin: "0px 0px -70px 0px",
      threshold: 0.08,
    });

    // 2. Individual Elements Observer (for items outside sections or dynamically rendered)
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("revealed");
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            el.classList.remove("revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      }
    );

    const scanAndObserve = () => {
      const allSections = document.querySelectorAll("section, footer, .snap-section, .scroll-reveal-section");
      
      allSections.forEach((sec, idx) => {
        // Hero section (first section on screen load) is revealed immediately
        if (idx === 0 && window.scrollY < 100) {
          sec.classList.add("is-revealed");
          sec.querySelectorAll(REVEAL_ELEMENT_SELECTORS).forEach((el, elIdx) => {
            el.style.transitionDelay = `${elIdx * 70 + 40}ms`;
            el.classList.add("revealed");
          });
        }

        if (!observedSections.has(sec)) {
          observedSections.add(sec);
          sectionObserver.observe(sec);
        }
      });

      const standaloneElements = document.querySelectorAll(REVEAL_ELEMENT_SELECTORS);
      standaloneElements.forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el);
          elementObserver.observe(el);
        }
      });
    };

    // Initial scan
    scanAndObserve();

    // DOM Mutation Watcher for dynamic content
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 3. Subtle Parallax for [data-parallax] elements
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
      sectionObserver.disconnect();
      elementObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
