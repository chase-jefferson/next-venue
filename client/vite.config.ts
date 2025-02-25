import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // https://vitejs.dev/config/
  plugins: [tailwindcss()],
});
