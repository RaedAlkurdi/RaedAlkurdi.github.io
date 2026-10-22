// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages: GITHUB_PAGES=true prerenders every page to plain HTML.
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(isGhPages
      ? { prerender: { enabled: true, crawlLinks: true }, router: { basepath: basePath } }
      : {}),
  },
  ...(isGhPages ? { vite: { base: basePath } } : {}),
});
