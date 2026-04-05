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
        primary: "#FF6B00",
        secondary: "#FF3CAC",
        dark: "#1A1A1A",
        light: "#F2F2F7",
        "card-bg": "#ffffff",
        "text-dark": "#1C1C1E",
        "text-muted": "#8E8E93",
        success: "#10B981",
        warning: "#FF9F0A",
        danger: "#FF3B30",
        info: "#007AFF",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'Segoe UI'", "sans-serif"],
      },
      borderRadius: {
        "2xl": "18px",
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",
        "card-lg": "0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
