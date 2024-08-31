import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import exp from "constants";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
