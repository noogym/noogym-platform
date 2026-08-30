import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050708",
          900: "#080C0E",
          850: "#0B0F10",
          800: "#111719",
        },
        limebrand: "#B6FF00",
        limebrand2: "#A7F000",
      },
      boxShadow: {
        glow: "0 0 42px rgba(182, 255, 0, 0.16)",
        card: "0 20px 70px rgba(0, 0, 0, 0.35)",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        16: "0.16",
        45: "0.45",
        58: "0.58",
        64: "0.64",
        72: "0.72",
      },
    },
  },
  plugins: [],
};

export default config;
