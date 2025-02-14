// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Asegura que la salida sea estática
  base: '/san-valentin/', // Ajusta esto al nombre de tu repositorio
  devToolbar:{
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});