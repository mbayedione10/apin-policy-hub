import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist", "public"),
    emptyOutDir: true,
  },
  server: {
    host: "7f395763-4459-4bf5-a8ec-75f7f65ed18f-00-2c67nu4d2rqgk.picard.replit.dev",
    port: 5000,
    strictPort: true,
    watch: {
      ignored: ["**/vite.config.ts.timestamp-*", "**/node_modules/**"],
    },
  },
}));
