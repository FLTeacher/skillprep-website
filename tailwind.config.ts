import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1e2c3a", deep: "#141f2a" },
        purple: {
          DEFAULT: "#6d5bab",
          bright: "#8b73cc",
          dark: "#5a469b",
          muted: "#aea4cd",
        },
        cyan: { brand: "#33b3d9" },
        lime: { brand: "#d8e710" },
        coral: { brand: "#fd6261" },
        blue: { brand: "#0a86df" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        stat: ["var(--font-stat)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "glass-edge":
          "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 40%)",
        "brand-gradient": "linear-gradient(135deg, #6d5bab 0%, #33b3d9 100%)",
      },
      keyframes: {
        orb: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(30px,-40px,0) scale(1.08)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        orb: "orb 18s ease-in-out infinite",
        shimmer: "shimmer 2.2s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
