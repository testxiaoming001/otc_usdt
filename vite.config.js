import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(), styleImport({
      resolves: [VantResolve()],
    }),],
    build: {
      publicDir: true,
      target: 'es2015',
      outDir: 'otc_usdt',
      assetsDir: 'assets',
    },
  }
})
