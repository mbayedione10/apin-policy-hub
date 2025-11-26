import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, type ViteDevServer } from "vite";
import { type Server } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [express] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  // Utiliser le middleware Vite pour servir les fichiers statiques et gérer le HMR
  app.use(vite.middlewares);

  // Gérer toutes les routes non-API pour le routage côté client
  app.use(async (req, res, next) => {
    // Ignorer les routes API et les fichiers statiques
    if (req.originalUrl.startsWith('/api') || 
        req.originalUrl.includes('.') || 
        req.originalUrl.startsWith('/@')) {
      return next();
    }

    const url = req.originalUrl;

    try {
      let template;

      if (vite.config.mode === "development") { // Utiliser vite.config.mode au lieu de isDevelopment
        template = fs.readFileSync(
          path.resolve(__dirname, "../client/index.html"),
          "utf-8",
        );
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(
          path.resolve(__dirname, "../dist/public/index.html"),
          "utf-8",
        );
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e: any) {
      if (vite.config.mode === "development" && vite) { // Utiliser vite.config.mode au lieu de isDevelopment
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  if (!fs.existsSync(distPath)) {
    log(`Static files not found at ${distPath}, skipping static middleware`);
    return;
  }

  app.use(express.static(distPath));

  app.use((req, res) => {
    // Ne servir index.html que si ce n'est pas une route API ou un fichier statique
    if (!req.originalUrl.startsWith('/api') && !req.originalUrl.includes('.')) {
      res.sendFile(path.resolve(distPath, "index.html"));
    }
  });
}