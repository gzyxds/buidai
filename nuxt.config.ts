export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      title: 'Vibe Coding - Where Creativity Meets Code',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Build beautiful digital experiences with tools that inspire. Where aesthetics meet algorithms in perfect harmony.' },
        { property: 'og:title', content: 'Vibe Coding - Where Creativity Meets Code' },
        { property: 'og:description', content: 'Build beautiful digital experiences with tools that inspire. Where aesthetics meet algorithms in perfect harmony.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
