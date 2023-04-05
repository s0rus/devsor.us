import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from '@astrojs/image';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://devsor.us',
  integrations: [mdx(), sitemap(), tailwind(), react(), image()],
  server: {
    port: 3001,
  },
  output: 'server',
  adapter: vercel(),
});
