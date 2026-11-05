/// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 告诉 Vite 忽略 .vs 和 node_modules 文件夹
  vite: {
    server: {
      watch: {
        ignored: ['**/.vs/**', '**/node_modules/**', '**/dist/**']
      }
    }
  }
});