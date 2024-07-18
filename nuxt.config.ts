// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
  '@nuxt/ui',
  'nuxt-swiper' ],
  css: [
    "~/assets/style/main.scss",
    'swiper/swiper-bundle.css'
    ],
    
})