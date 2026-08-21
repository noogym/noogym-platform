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
      backgroundImage: {
        "radial-lime": "radial-gradient(circle at 30% 10%, rgba(182, 255, 0, 0.18), transparent 34%)",
        "panel": "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
      },
      opacity: {
        1: "0.01",
        2: "0.02",
        3: "0.03",
        4: "0.04",
        6: "0.06",
        7: "0.07",
        8: "0.08",
        11: "0.11",
        12: "0.12",
        13: "0.13",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        18: "0.18",
        26: "0.26",
        27: "0.27",
        28: "0.28",
        34: "0.34",
        35: "0.35",
        42: "0.42",
        44: "0.44",
        45: "0.45",
        55: "0.55",
        56: "0.56",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        65: "0.65",
        66: "0.66",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
      },
    },
  },
  plugins: [],
};

export default config;
