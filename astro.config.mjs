// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Keep pre-v7 HTML-aware spacing so inline text does not collapse.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});