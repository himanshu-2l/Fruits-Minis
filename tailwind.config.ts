import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          leaf: "#1B7A38",
          "leaf-dark": "#145E2A",
          lime: "#84CC16",
          citrus: "#EA580C",
          "citrus-bright": "#F97316",
          mango: "#FBBF24",
          watermelon: "#E11D48",
          mint: "#10B981",
        },
        street: {
          black: "#111215",
          card: "#18191E",
          panel: "#22232A",
          border: "#32333D",
          yellow: "#FDE047",
          flame: "#FF6B00",
          red: "#EF4444",
        },
        paper: {
          DEFAULT: "#FBF9F4",
          50: "#FEFDFB",
          100: "#F7F4EC",
          200: "#ECE6D8",
          300: "#DFD7C2",
        },
        ink: {
          DEFAULT: "#18181B",
          primary: "#18181B",
          secondary: "#475569",
          muted: "#64748B",
          faint: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        sticker: "3px 3px 0px 0px rgba(0,0,0,0.85)",
        "sticker-lg": "5px 5px 0px 0px rgba(0,0,0,0.9)",
        "sticker-yellow": "4px 4px 0px 0px #FDE047",
        "sticker-orange": "4px 4px 0px 0px #EA580C",
        "sticker-green": "4px 4px 0px 0px #145E2A",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
