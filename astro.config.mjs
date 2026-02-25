// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cutly-app.com',
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          uk: 'uk',
          ru: 'ru',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});