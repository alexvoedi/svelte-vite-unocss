import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from '@unocss/svelte-scoped/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    unocss(),
  ],
  server: {
    host: true,
  },
})
