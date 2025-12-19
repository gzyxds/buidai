<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <div class="py-12 lg:py-16">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">文档中心</h1>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">
            探索 BuidAI 的详细文档，快速构建您的 AI 应用。
          </p>
        </div>

        <div v-if="pending" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
        </div>

        <div v-else-if="error" class="text-center py-12">
          <div class="text-red-500 mb-4">加载文档导航失败</div>
          <div class="text-xs text-gray-400 mb-4">{{ error }}</div>
          <button @click="() => refresh()" class="text-primary-600 hover:underline">重试</button>
        </div>

        <UPageGrid v-else>
          <UPageCard
            v-for="section in navigation"
            :key="section.title"
            class="relative group border border-gray-200 dark:border-gray-800"
            :ui="{
              body: 'flex-1'
            }"
          >
            <div class="absolute top-6 right-6 z-10">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-400/10 text-primary-500 dark:text-primary-400">
                {{ section.children.length }} 篇
              </span>
            </div>

            <div class="mb-4">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                {{ section.title }}
              </h2>
            </div>

            <ul class="space-y-3">
              <li v-for="item in section.children" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="group/link flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 group-hover/link:bg-primary-500 transition-colors"></span>
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </UPageCard>
        </UPageGrid>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 文档中心首页
 *
 * 展示文档导航结构，方便用户快速查找和搜索引擎爬取。
 */

// SEO Meta
useSeoMeta({
  title: '文档中心 - BuidAI',
  description: 'BuidAI 官方文档中心，提供详细的指南、API 参考和最佳实践。'
})

// Fetch All Docs for Crawling and Index
const { data: docs, pending, error, refresh } = await useAsyncData('docs-list', () => queryCollection('docs').all())

// Group by directory (simple implementation)
const navigation = computed(() => {
  if (!docs.value) return []

  const groups: Record<string, any[]> = {}

  docs.value.forEach(doc => {
    // Extract section from path (e.g., /docs/section/page -> section)
    // Clean path first: remove numbers from segments
    const cleanPath = doc.path.split('/').map(p => p.replace(/^\d+\./, '')).join('/')
    const parts = cleanPath.split('/').filter(Boolean)
    const section = parts.length > 1 && parts[1] ? parts[1] : 'General'

    if (!groups[section]) {
      groups[section] = []
    }

    // Add clean path to doc object for linking
    // Ensure we don't link to /docs/1.introduce/1.index but /docs/introduce
    const linkPath = cleanPath.replace(/\/index$/, '')

    groups[section].push({
      ...doc,
      path: linkPath
    })
  })

  return Object.entries(groups).map(([title, items]) => ({
    title: title.charAt(0).toUpperCase() + title.slice(1),
    children: items
  }))
})
</script>
