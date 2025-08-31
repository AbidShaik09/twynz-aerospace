import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
  experimental: { css: { engine: "js" } }, // force JS engine
});
