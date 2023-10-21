import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import libCss from "vite-plugin-libcss";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.jsx"),
      name: "DatePicker",
      fileName: (format) => `date-picker.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), libCss()],
});
