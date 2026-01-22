<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <div class="py-12 lg:py-16">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">文档中心</h1>
          <p class="text-xl text-gray-500 max-w-2xl mx-auto">
            探索 必创AI 的详细文档，快速构建您的 AI 应用。
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
  title: '文档中心 - 必创AI - BuidAI | 开发指南、API文档与最佳实践',
  description: '必创AI 官方文档中心，提供从入门到精通的完整开发指南、详细的 API 参考手册、SDK 使用说明及企业级 AI 应用构建的最佳实践。',
  keywords: '必创AI文档, AI开发指南, API参考, SDK文档, 最佳实践, AI应用构建, 技术手册, 开发者文档'
})

// Fetch All Docs for Crawling and Index
const { data: docs, pending, error, refresh } = await useAsyncData('docs-list', () => {
  return queryCollection('docs')
    .select('title', 'path', 'category', 'order')
    .order('order', 'ASC')
    .all()
})

// Group by category (consistent with Sidebar logic)
const navigation = computed(() => {
  if (!docs.value) return []

  const groups: Record<string, any[]> = {}

  docs.value.forEach(doc => {
    // Use category from front-matter, fallback to '未分类'
    const section = doc.category || '未分类'

    if (!groups[section]) {
      groups[section] = []
    }

    groups[section].push({
      ...doc,
      // Ensure path is used as-is (assuming clean paths from file system)
      path: doc.path
    })
  })

  // Sort logic: Consistent with Sidebar
  const categoryOrder = ['指南', '框架', '未分类']

  return Object.entries(groups)
    .sort(([a], [b]) => {
      const idxA = categoryOrder.indexOf(a)
      const idxB = categoryOrder.indexOf(b)
      // If both in list, sort by index
      if (idxA !== -1 && idxB !== -1) return idxA - idxB
      // If a in list, it comes first
      if (idxA !== -1) return -1
      // If b in list, it comes first
      if (idxB !== -1) return 1
      // Otherwise alphabetical
      return a.localeCompare(b)
    })
    .map(([title, items]) => ({
      title,
      children: items
    }))
})
</script>
