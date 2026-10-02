<template>
  <UApp>
    <NuxtLayout>
      <!--
        page-key 用 route.path 而非 route.fullPath：
        path 变化时（如 /product/a → /product/b）重建组件，避免复用旧的 setup 状态；
        而 fullPath 含 query，用它会让 /plugin?category=video 这类仅筛选条件变化
        的跳转也整页重挂载，丢失筛选状态与滚动位置
      -->
      <NuxtPage :page-key="(route) => route.path" />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
/**
 * 全局应用入口文件
 *
 * 功能:
 * - 渲染全局布局 (NuxtLayout)
 * - 渲染页面内容 (NuxtPage)
 * - 作为应用的根组件
 * - 添加 JSON-LD 结构化数据
 */
import { SITE_URL } from '~/data/site'

// JSON-LD 结构化数据
useHead({
  script: [
    // Organization 结构化数据
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '智言 AI',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description: '企业级 AI 应用构建平台，提供可视化 Workflow 编排、AI 知识库、RAG 检索等核心能力',
        sameAs: [
          'https://github.com/buidai',
          'https://twitter.com/buidai'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'support@buidai.com',
          availableLanguage: ['Chinese', 'English']
        }
      })
    },
    // WebSite 结构化数据
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '智言 AI',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    },
    // SoftwareApplication 结构化数据
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '智言 AI',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web, Windows, macOS, Linux',
        description: '企业级 AI 应用构建平台，提供可视化 Workflow 编排、AI 知识库、RAG 检索等核心能力',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CNY'
        }
      })
    }
  ]
})
</script>
