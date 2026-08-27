import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          soft: "#111214",
          border: "#232427",
        },
        smoke: {
          DEFAULT: "#f4f2ee",
          soft: "#eae7e1",
          border: "#d9d5cc",
        },
        navy: {
          50: "#eef2f8",
          100: "#d7e1ef",
          200: "#b0c3df",
          300: "#93aad1",
          400: "#6e89bb",
          500: "#4f6ea3",
          600: "#375683",
          700: "#233d63",
          800: "#172a47",
          900: "#0d1b30",
          950: "#081020",
        },
      },
      fontFamily: {
        peyda: ["var(--font-peyda)", "Tahoma", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
