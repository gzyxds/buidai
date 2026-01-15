import { defineNuxtConfig } from 'nuxt/config'
import { getDocsRoutes } from './utils/getDocsRoutes'
import { getSitemapRoutes } from './utils/getSitemapRoutes'

export default defineNuxtConfig({
  // Nuxt 兼容性日期，用于锁定默认行为
  compatibilityDate: '2025-12-19',

  // 启用 Nuxt DevTools 开发工具
  devtools: { enabled: true },

  // TypeScript 配置
  typescript: {
    // 禁用构建时的类型检查以加快构建速度 (建议通过 npm run typecheck 单独运行)
    typeCheck: false
  },

  // 启用的 Nuxt 模块
  modules: [
    '@nuxt/ui',       // UI 组件库 (基于 Tailwind CSS)
    '@nuxt/content',  // 内容管理模块 (Markdown 支持)
    '@nuxtjs/sitemap' // 网站地图生成模块
  ],

  // @ts-ignore - 字体模块配置
  fonts: {
    // 禁用自动下载 Google Fonts，使用本地或手动引入
    providers: {
      google: false,
      googleicons: false
    }
  },

  // @ts-ignore - Content 模块配置
  content: {
    // 使用 SQLite 作为内容数据库
    database: {
      type: 'sqlite'
    }
  },

  // Sitemap 网站地图配置
  site: {
    url: 'https://www.buidai.com' // 网站基础 URL（请根据实际域名修改）
  },

  // @ts-ignore - Sitemap 模块配置
  sitemap: {
    // 自动生成的路由
    urls: () => getSitemapRoutes(),
    // 排除的路由
    exclude: [
      '/demo' // 排除演示页面
    ],
    // 默认配置
    defaults: {
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    },
    // 不同类型页面的优先级配置
    routes: async () => {
      const routes = getSitemapRoutes()
      return routes.map(route => {
        // 设置不同页面的优先级
        let priority = 0.7
        let changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'daily'

        if (route === '/') {
          priority = 1.0
          changefreq = 'daily'
        } else if (route.startsWith('/docs')) {
          priority = 0.9
          changefreq = 'weekly'
        } else if (route.startsWith('/blog')) {
          priority = 0.8
          changefreq = 'weekly'
        } else if (route.startsWith('/changelog')) {
          priority = 0.6
          changefreq = 'monthly'
        } else if (['/pricing', '/download', '/contact'].includes(route)) {
          priority = 0.9
          changefreq = 'weekly'
        }

        return {
          url: route,
          priority,
          changefreq
        }
      })
    }
  },

  // Nitro 服务端引擎配置
  nitro: {
    preset: 'static', // 强制使用通用静态输出，禁用 Vercel 自动检测
    output: {
      publicDir: 'dist' // 强制输出目录为 'dist' 以适配 Vercel 默认配置
    },
    // 预渲染配置
    prerender: {
      failOnError: false, // 遇到错误时不中断构建
      routes: getDocsRoutes() // 注入动态生成的文档路由
    }
  },

  // @ts-ignore - 颜色模式配置
  colorMode: {
    classSuffix: '' // 移除类名后缀 (即使用 'dark' 而不是 'dark-mode')
  },

  // 应用全局配置
  app: {
    // HTML Head 配置
    head: {
      title: '必定AI - BuidAI新一代AI一站式创意生产力平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '必定AI - BuidAI新一代AI一站式创意生产力平台，为您提供全方位的智能创作服务。从AI对话、AI绘画、AI视频到知识库查询、模型管理，再到文件导入导出、网页解析、内容总结、图表生成等强大功能，满足您在创意工作中的各种需求。更有AI配音工具、艺术二维码、PDF解析工具、图文解析、文档问答、豆包文生图、AI改图、图像识别、网页速读、快递查询、天气查询以及爆款文章生成等特色功能，助力您高效创作，提升生产力，开启智能创意新时代' },
        { name: 'keywords', content: '必定AI, BuidAI, AI创意生产力平台, 智能体,香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成' },

        // Open Graph 社交分享标签
        { property: 'og:title', content: '必定AI - BuidAI新一代AI一站式创意生产力平台' },
        { property: 'og:description', content: '必定AI - BuidAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        // 网站图标配置
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, // 优先使用 SVG
        { rel: 'apple-touch-icon', href: '/logo.svg' }, // iOS 图标

        // 字体预连接与加载
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  // 全局 CSS 文件
  css: ['~/assets/css/main.css']
})
