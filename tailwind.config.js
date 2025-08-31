import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff", // link color
        primaryHover: "#535bf2", // link hover
        bgDark: "#242424", // dark background
        bgLight: "#ffffff", // light background
        btnDark: "#1a1a1a", // button dark
        btnLight: "#f9f9f9", // button light

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
