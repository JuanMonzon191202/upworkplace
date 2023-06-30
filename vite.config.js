import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, "./client/public/"),
  root: path.resolve(__dirname, "./client/"),
  build: { outDir: path.resolve(__dirname, "dist"), emptyOutDir: true },
});
