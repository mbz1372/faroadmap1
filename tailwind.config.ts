import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9",
          accent: "#22c55e",
          ink: "#0b1220",
        }
      },
      boxShadow: {
        card: "0 6px 20px -8px rgba(0,0,0,0.1)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
