import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://devsor.us",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  server: {
    port: 3001,
  },
  output: "hybrid",
});
