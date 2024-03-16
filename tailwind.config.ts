import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
      animation: {
        fadeIn: "fadeIn 100ms ease-in-out",
        // scroll: "scroll 20s linear"
      },
    },
  },
  plugins: [],
};
export default config;
