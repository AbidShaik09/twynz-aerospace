import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffffff", // link color
        primaryHover: "#c59230", // link hover
        bgDark: "#242424", // dark background
        bgLight: "#242424", // light background
        btnDark: "#1a1a1a", // button dark
        btnLight: "#1a1a1a", // button light

        secondary: "#c59230",
      },
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["3.2em", { lineHeight: "1.1" }],
      },
      borderRadius: {
        btn: "0.5rem", // 8px
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
  experimental: { css: { engine: "js" } }, // force JS engine
});
