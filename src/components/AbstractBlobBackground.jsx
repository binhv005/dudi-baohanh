import React from "react";

/**
 * Minimalist Modern Organic Background inspired by the reference images:
 * - Large, smooth corner organic blobs in muted slate-blue / soft lavender / sage-sand tones
 * - Minimalist floating solid accent dots
 * - Delicate hairline contour wave lines
 * - Subtle, non-intrusive opacities to enhance aesthetics without distracting from content
 */
export default function AbstractBlobBackground({ 
  position = "top-right", 
  variant = "slate-lavender", // 'slate-lavender' | 'ice-lilac' | 'sage-sand'
  opacity = "opacity-35", 
  className = "" 
}) {
  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");

  // Color theme definitions matching reference images
  const themes = {
    "slate-lavender": {
      primaryBlob: "#7E8FA6",    // Muted dusty slate blue
      secondaryBlob: "#DED6FA",  // Soft pastel lavender
      accentDot: "#475569",      // Deep slate dot
      strokeColor: "#94A3B8",    // Subtle hairline
    },
    "ice-lilac": {
      primaryBlob: "#B8D5E5",    // Soft powder ice blue
      secondaryBlob: "#C8B9D9",  // Dusty lilac
      accentDot: "#8E7D9E",      // Muted purple circle
      strokeColor: "#94A3B8",
    },
    "sage-sand": {
      primaryBlob: "#9EBAAB",    // Soft muted sage
      secondaryBlob: "#E2D3C1",  // Warm neutral sand
      accentDot: "#5C7667",      // Deep sage circle
      strokeColor: "#7A9687",
    }
  };

  const currentTheme = themes[variant] || themes["slate-lavender"];

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 overflow-hidden ${opacity} ${
        isRight ? "-right-8 sm:-right-4 md:right-0" : "-left-8 sm:-left-4 md:left-0"
      } ${
        isBottom ? "-bottom-10 sm:-bottom-6 md:bottom-0" : "-top-10 sm:-top-6 md:top-0"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width="440"
        height="340"
        viewBox="0 0 440 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[260px] sm:w-[340px] md:w-[420px] h-auto"
      >
        {isRight ? (
          <>
            {/* Top-Right Large Organic Blob (Matching Image 1 & 2) */}
            <path
              d="M 230 0 C 230 70, 290 120, 340 130 C 400 142, 430 200, 440 250 L 440 0 Z"
              fill={currentTheme.primaryBlob}
              fillOpacity="0.55"
            />

            {/* Secondary Soft Pastel Shape */}
            <path
              d="M 330 220 C 310 260, 330 310, 380 340 L 440 340 L 440 280 C 400 250, 360 200, 330 220 Z"
              fill={currentTheme.secondaryBlob}
              fillOpacity="0.65"
            />

            {/* Floating Minimalist Accent Circle Dot */}
            <circle cx="160" cy="90" r="16" fill={currentTheme.accentDot} fillOpacity="0.6" />

            {/* Subtle Delicate Hairline Wave Contour (Matching Image 3) */}
            <path
              d="M 120 0 C 150 90, 200 160, 280 210 C 350 250, 400 300, 440 330"
              stroke={currentTheme.strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 2"
              opacity="0.5"
            />
          </>
        ) : (
          <>
            {/* Bottom-Left Large Organic Blob (Matching Image 1 & 2) */}
            <path
              d="M 0 110 C 50 110, 110 140, 140 200 C 170 260, 150 310, 130 340 L 0 340 Z"
              fill={currentTheme.primaryBlob}
              fillOpacity="0.55"
            />

            {/* Secondary Soft Pastel Shape */}
            <path
              d="M 120 280 C 140 250, 200 260, 230 300 C 245 320, 235 335, 220 340 L 130 340 Z"
              fill={currentTheme.secondaryBlob}
              fillOpacity="0.65"
            />

            {/* Floating Minimalist Accent Circle Dot */}
            <circle cx="210" cy="220" r="18" fill={currentTheme.accentDot} fillOpacity="0.5" />

            {/* Subtle Delicate Hairline Wave Contour */}
            <path
              d="M 0 60 C 80 100, 140 180, 200 240 C 260 300, 320 320, 380 340"
              stroke={currentTheme.strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="4 2"
              opacity="0.5"
            />
          </>
        )}
      </svg>
    </div>
  );
}
