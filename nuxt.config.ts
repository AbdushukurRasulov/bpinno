// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Bpinno',
      titleTemplate: 'Bpinno | %s',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
      ],
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600],
        subsets: ['latin'],
      },
    ],
    defaults: {
      preload: true,
      styles: ['normal'],
      subsets: ['latin'],
    },
  },
  css: ['@/assets/css/main.css', '@/assets/css/fonts.css'],
  components: [{ path: '~/components/layouts', prefix: '' }, '~/components'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/fonts', '@nuxt/image'],
});
