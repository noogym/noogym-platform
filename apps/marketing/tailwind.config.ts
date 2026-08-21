import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noogym: {
          green: "#B6FF00",
          lime: "#A6FF00",
          dark: "#020403",
          panel: "#080b0a",
          border: "#1f2937",
        },
      },
      boxShadow: {
        neon: "0 0 32px rgba(182, 255, 0, 0.26)",
        "neon-soft": "0 0 70px rgba(166, 255, 0, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-green":
          "radial-gradient(circle at 50% 0%, rgba(182,255,0,0.16), transparent 36%)",
      },
    },
  },
  plugins: [],
};

export default config;
