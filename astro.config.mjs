import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://devsor.us',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind(), react()],
  server: {
    port: 3001,
  },
});
