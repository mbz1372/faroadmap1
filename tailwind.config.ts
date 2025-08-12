import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1e88e5",
          green: "#00b894",
          yellow: "#ffd166",
          gray: "#f3f4f6"
        }
      }
    },
  },
  plugins: [],
};
export default config;
