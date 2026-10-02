import { defineNuxtConfig } from 'nuxt/config'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from './data/site'
import type { SitemapUrl } from '@nuxtjs/sitemap'
import { getDocsRoutes } from './build/getDocsRoutes'
import { getSitemapRoutes } from './build/getSitemapRoutes'

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
  // payloadExtraction 在 Nuxt 4 默认即为 true（@nuxt/schema @default 注释），
  // 显式声明已删除。官方文档的 experimental.prerenderErrorPages（预渲染 404.html）
  // 需要高于本项目的 Nuxt 4.5.2 才可用，待升级后再启用

  // 启用的 Nuxt 模块
  modules: [
    '@nuxt/ui',       // UI 组件库 (基于 Tailwind CSS)
    '@nuxt/content',  // 内容管理模块 (Markdown 支持)
    '@nuxtjs/sitemap', // 网站地图生成模块
    '@nuxt/eslint'    // 项目感知的 ESLint 集成（生成 .nuxt/eslint.config.mjs，code-style.md 官方推荐）
  ],

  // 站点只使用系统字体。@nuxt/ui 默认会自动注册 @nuxt/fonts（启动时联网拉取
  // 字体元数据库），显式关闭以消除该网络依赖；本项目不加载任何远程/网页字体
  ui: {
    fonts: false
  },

  // Sitemap 网站地图配置
  site: {
    url: SITE_URL // 网站基础 URL
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
        if (['/pricing', '/product', '/download', '/contact'].includes(route)) {
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
      // 固定日期而非 new Date()：构建期时间戳会破坏产物确定性，
      // 导致 CDN 缓存无法命中、git diff 每次构建都变化。内容大更新时手动更新此值
      lastmod: '2026-10-02'
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
      crawlLinks: true, // 爬取页面链接自动发现预渲染路由，避免遗漏
      routes: getDocsRoutes() // 注入动态生成的文档路由
    }
  },

  // 开发环境覆盖：dev 模式下输出目录回到默认位置，
  // 避免 nuxt dev 启动时清空 dist/（generate 的静态产物），
  // 同时消除 Vite 监视器对 dist 下 html 文件删除事件的 page reload 噪音日志
  $development: {
    nitro: {
      output: {
        publicDir: '.output/public'
      }
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
      // 全站 title 由 app.vue 的 titleTemplate 统一管理（页面短标题 + 品牌后缀），
      // 此处不再设置全局 title，避免与模板叠加
      // 页面语言：官方 seo-meta.md 建议将不变的站点级标签（标题/语言/图标）静态声明于此，
      // 同时是 WCAG 3.1.1（Language of Page）硬性要求
      htmlAttrs: { lang: 'zh-CN' },
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
        { rel: 'apple-touch-icon', href: '/icon.png' }
        // canonical 不在全局声明：各页面由 usePageSeo 按 route.path 派生各自页面 URL，
        // 全局硬编码会让所有内页继承首页 canonical（SEO 错误）
      ]
    }
  },

  // 全局 CSS 文件
  css: ['~/assets/css/main.css', '~/assets/css/grid-border.css']
})
