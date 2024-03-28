import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        scroll: {
          "0%": { translate: "0%" },
          "100%": { translate: "-50%" },
        },
        slideDown: {
          "0%": { translate: "0 -200%" },
          "33%": { translate: "0 10%" },
          "66%": { translate: "0 -10%" },
          "100%": { translate: "0 0%" },
        },
        slideLeft: {
          "0%": { translate: "300% 0" },
          "50%": { translate: "300% 0" },
          "66%": { translate: "-10% 0" },
          "82%": { translate: "10% 0" },
          "100%": { translate: "0 0%" },
        },
        bounceSide: {
          "0%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        neon: {
          "0%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "45%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "45.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "48%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "48.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "50.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "52%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "52.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "58%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "58.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "59.9%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },

          "60%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "67%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "96%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
          },
          "96.1%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
          "100%": {
            filter:
              "drop-shadow(0 0 5px rgba(255,255,255,0)) drop-shadow(0 0 5px rgba(255,255,255,0))",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 100ms ease-in-out",
        bounceSide: "bounceSide 1s infinite",
        slideDown: "slideDown 500ms",
        slideLeft: "slideLeft 1000ms",
        neon: "neon 10000ms infinite",
        // scroll: "scroll 20s linear"
      },
    },
  },
  plugins: [],
};
export default config;
