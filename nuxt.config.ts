import { defineNuxtConfig } from 'nuxt/config'
import { SITE_TITLE, SITE_DESCRIPTION } from './data/site'
import type { SitemapUrl } from '@nuxtjs/sitemap'
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

  // Nuxt 实验性功能
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  // 启用的 Nuxt 模块
  modules: [
    '@nuxt/ui',       // UI 组件库 (基于 Tailwind CSS)
    '@nuxt/content',  // 内容管理模块 (Markdown 支持)
    '@nuxtjs/sitemap' // 网站地图生成模块
  ],

  // @nuxt/fonts（由 @nuxt/ui 注册）— 关闭 Google 字体源，避免构建期访问 fonts.google.com
  fonts: {
    providers: {
      google: false,
      googleicons: false
    }
  },

  // Sitemap 网站地图配置
  site: {
    url: 'https://www.buidai.com' // 网站基础 URL（请根据实际域名修改）
  },

  // Sitemap 模块配置
  sitemap: {
    // 自动生成路由，并按页面类型设置优先级
    urls: () =>
      getSitemapRoutes().map((route): SitemapUrl => {
        if (route === '/') {
          return { loc: route, priority: 1, changefreq: 'daily' }
        }
        if (route.startsWith('/docs')) {
          return { loc: route, priority: 0.9, changefreq: 'weekly' }
        }
        if (route.startsWith('/blog')) {
          return { loc: route, priority: 0.8, changefreq: 'weekly' }
        }
        if (route.startsWith('/changelog')) {
          return { loc: route, priority: 0.6, changefreq: 'monthly' }
        }
        if (['/pricing', '/download', '/contact'].includes(route)) {
          return { loc: route, priority: 0.9, changefreq: 'weekly' }
        }
        return { loc: route, priority: 0.7, changefreq: 'daily' }
      }),
    // 排除的路由
    exclude: [
      '/demo' // 排除演示页面
    ],
    // 默认配置
    defaults: {
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  },

  // Nitro 服务端引擎配置
  nitro: {
    preset: 'static', // 强制使用通用静态输出，禁用 Vercel 自动检测
    compressPublicAssets: true, // 启用公共资源压缩
    output: {
      publicDir: 'dist' // 强制输出目录为 'dist' 以适配 Vercel 默认配置
    },
    // 预渲染配置
    prerender: {
      failOnError: true, // 预渲染失败时中断构建，避免坏页面静默发布
      routes: getDocsRoutes() // 注入动态生成的文档路由
    }
  },

  // 颜色模式配置
  colorMode: {
    classSuffix: '' // 移除类名后缀 (即使用 'dark' 而不是 'dark-mode')
  },

  // 应用全局配置
  app: {
    // HTML Head 配置
    head: {
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'keywords', content: '智言AI, 智言万象, AI创意生产力平台, 智能体,香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成' },


        // Open Graph 社交分享标签
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        // 网站图标配置
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'apple-touch-icon', href: '/icon.png' },
        // 规范标签 (Canonical URL)
        { rel: 'canonical', href: 'https://www.buidai.com' }

        // 字体使用系统默认，不加载远程 Google Fonts
        // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  // 全局 CSS 文件
  css: ['~/assets/css/main.css', '~/assets/css/grid-border.css']
})
