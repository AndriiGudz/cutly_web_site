// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: change to the correct domain
  site: 'https://cutly.gudz-andrii.com',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});