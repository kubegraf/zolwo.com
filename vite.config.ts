import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Path-based GitHub Pages: site lives at kubegraf.github.io/zolwo.com/
export default defineConfig({
  base: "/zolwo.com/",
  plugins: [react(), tailwindcss()],
});
