import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },


  alias: {
    'styled-system': resolve('./styled-system'),
    'data': resolve('./data'),
  },
 
  css: [
    '@/assets/css/global.css',
  ],
 
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    }
  }
})
