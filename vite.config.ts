import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: process.env.VITE_BASE || "/claudia-sofia-alvarez-portfolio/",
});
