import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://devsor.us',
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind(), react()],
  server: {
    port: 3001,
  },
});
