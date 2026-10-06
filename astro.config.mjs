// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { motionStudio } from 'motion-studio';

// https://astro.build/config
export default defineConfig({
  site: 'https://aulia.dev',
  vite: {
    plugins: [
      motionStudio({ serverUrl: 'http://localhost:5200' }),
      tailwindcss(),
    ],
  },
});
