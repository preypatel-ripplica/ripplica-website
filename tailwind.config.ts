import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        muted: "#626262",
        line: "#E7E4DE",
        surface: "#FAF8F3",
        brand: {
          DEFAULT: "#215B4F",
          dark: "#163E36",
          light: "#DDECE6",
        },
        accent: {
          DEFAULT: "#D86E3F",
          soft: "#F8DCCA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(20, 20, 20, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
