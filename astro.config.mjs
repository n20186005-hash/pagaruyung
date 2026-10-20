import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical production origin; an explicit environment value can override previews.
const site = new URL(process.env.PUBLIC_SITE_URL?.trim() || "https://pagaruyung.com").href;

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
