import { defineNuxtConfig } from 'nuxt/config'
import fs from 'node:fs'
import path from 'node:path'

// 用于生成内容文件路由以进行预渲染的辅助函数
const getDocsRoutes = () => {
  const routes: string[] = []
  const docsDir = path.resolve(process.cwd(), 'content/docs')

  if (!fs.existsSync(docsDir)) return routes

  const traverse = (dir: string, urlPrefix: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const cleanName = entry.name.replace(/^\d+\./, '')
        traverse(path.join(dir, entry.name), `${urlPrefix}/${cleanName}`)
      } else if (entry.name.endsWith('.md')) {
        const cleanName = entry.name.replace(/^\d+\./, '').replace(/\.md$/, '')
        if (cleanName === 'index') {
          routes.push(urlPrefix)
        } else {
          routes.push(`${urlPrefix}/${cleanName}`)
        }
      }
    }
  }

  traverse(docsDir, '/docs')
  routes.push('/docs') // 确保索引页面被预渲染
  return routes
}

export default defineNuxtConfig({
  compatibilityDate: '2025-12-19',
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/content'
  ],
  // @ts-ignore
  fonts: {
    providers: {
      google: false,
      googleicons: false
    }
  },
  // @ts-ignore
  content: {
    database: {
      type: 'sqlite'
    }
  },
  nitro: {
    // preset: 'vercel-static',
    output: {
      publicDir: 'dist'
    },
    prerender: {
      failOnError: false,
      routes: getDocsRoutes()
    }
  },
  // @ts-ignore
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
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
