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
      title: '必定AI,BuidAI - 降低企业 AI 应用开发门槛',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '必定AI,BuidAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。' },
        { name: 'keywords', content: 'AI智能体,AI对话,MCP模型,AI绘画,AI视频,语音播报,智能对话,文件处理,内容生成,图像识别,文档解析,AI工具集成,多模态AI,创意生成,工作效率,智能助手' },
        { property: 'og:title', content: '必定AI,BuidAI - 降低企业 AI 应用开发门槛' },
        { property: 'og:description', content: '必定AI,BuidAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。' },
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
