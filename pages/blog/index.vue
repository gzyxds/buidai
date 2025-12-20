<template>
  <div class="min-h-screen bg-gray-50 pt-48 pb-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">技术博客</h1>
          <p class="text-xl text-gray-600">分享技术见解、最佳实践和行业动态</p>
        </div>

        <!-- Search & Filter -->
        <div class="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div class="relative w-full md:w-96">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索文章..."
              class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
              :class="selectedCategory === cat ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Blog Grid -->
        <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="post in filteredPosts"
            :key="post.path"
            :to="post.path"
            class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div class="aspect-video bg-gray-100 overflow-hidden relative">
               <img
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500/5 to-purple-500/5">
                <svg class="w-12 h-12 text-primary-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-600 shadow-sm">
                  {{ post.category }}
                </span>
              </div>
            </div>

            <div class="p-6 flex flex-col grow">
              <div class="text-sm text-gray-500 mb-3 flex items-center gap-2">
                <span>{{ formatDate(post.date) }}</span>
                <span>·</span>
                <div class="flex gap-1">
                  <span v-for="tag in post.tags.slice(0, 2)" :key="tag" class="text-gray-400">#{{ tag }}</span>
                </div>
              </div>

              <h2 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {{ post.title }}
              </h2>

              <p class="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-6 grow">
                {{ post.description }}
              </p>

              <div class="flex items-center text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
                阅读全文
                <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900">未找到相关文章</h3>
          <p class="text-gray-500">尝试调整搜索关键词或分类</p>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// SEO
useSeoMeta({
  title: '必定AI - BuidAI | 技术博客、AI技术洞察、教程与最佳实践',
  description: '浏览 BuidAI 技术博客，获取最新的 AI 技术见解、深度开发教程、行业动态分析及企业级应用最佳实践。与我们一起探索人工智能的无限可能。',
  keywords: '必定AI博客, AI技术博客, 人工智能教程, AI开发实践, 机器学习, 大模型应用, 技术洞察, 行业动态'
})

// State
const searchQuery = ref('')
const selectedCategory = ref('全部')

// Fetch Posts
const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

// Categories
const categories = computed(() => {
  const cats = new Set(posts.value?.map(p => p.category) || [])
  return ['全部', ...Array.from(cats)]
})

// Filter Logic
const filteredPosts = computed(() => {
  if (!posts.value) return []

  return posts.value.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === '全部' || post.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

// Utils
const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
