import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222222",
        pink: "#F06384",
        gray: {
          100: "#f5f5f5",
          200: "#F3F4F6",
          300: "#f0f2f6",
          500: "#666666",
          700: "#999999",
          900: "#f2f2f2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
