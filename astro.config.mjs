import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// URL situs dikonfigurasi hanya di sini. Kosongkan untuk build lokal tanpa canonical, OG URL, atau sitemap.
const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? new URL(configuredSite) : undefined;

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["4321-iv5q2n1olz3a9b4rqhvsj-6820febc.us3.manus.computer"]
    }
  }
});
