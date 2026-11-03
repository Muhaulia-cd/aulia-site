// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import { motionStudio } from 'motion-studio';

// https://astro.build/config
export default defineConfig({
  site: 'https://aulia.dev',
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      motionStudio({ serverUrl: 'http://localhost:5200' }),
      tailwindcss(),
    ],
  },
});