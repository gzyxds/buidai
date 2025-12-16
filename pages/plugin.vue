<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8">

        <!-- 侧边栏导航 -->
        <aside class="w-full lg:w-64 flex-shrink-0 space-y-6">
          <!-- 搜索框 -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索应用"
              class="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm"
            >
            <SearchIcon class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <!-- 分类列表 -->
          <nav class="space-y-1">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              class="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between group"
              :class="activeCategory === category.id
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
            >
              {{ category.name }}
            </button>
          </nav>
        </aside>

        <!-- 主要内容区域 -->
        <main class="flex-1 min-w-0">

          <!-- 促销横幅 -->
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 mb-10 shadow-lg group">
            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div class="space-y-2">
                <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Building应用市场上线啦!</h2>
                <p class="text-blue-100 text-sm sm:text-base">联系客服领取五折优惠码，数量有限，先到先得</p>
              </div>
              <button class="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap flex items-center gap-2">
                获取5折优惠码
                <ArrowRightIcon class="w-4 h-4" />
              </button>
            </div>

            <!-- 装饰元素 -->
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <!-- 3D 元素占位符（右侧） -->
            <div class="absolute right-4 bottom-4 lg:right-10 lg:bottom-1/2 lg:translate-y-1/2 opacity-20 lg:opacity-100 pointer-events-none">
              <div class="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 transform rotate-[-5deg]">
                 <div class="flex items-center gap-2">
                   <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400"></div>
                   <span class="font-bold italic">Building AI</span>
                 </div>
              </div>
            </div>
          </div>

          <!-- Section Title -->
          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white">全部应用</h2>
          </div>

          <!-- Apps Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="app in filteredApps"
              :key="app.id"
              class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <!-- App Preview Image -->
              <div class="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <!-- Placeholder Pattern -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                 <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                    <img
                      :src="app.image"
                      :alt="app.name"
                      class="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                 </div>
              </div>

              <!-- Content -->
              <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                       <component :is="app.icon" class="w-6 h-6" />
                    </div>
                    <h3 class="font-bold text-gray-900 dark:text-white line-clamp-1">{{ app.name }}</h3>
                  </div>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                  {{ app.description }}
                </p>

                <!-- 价格和信息 -->
                <div class="space-y-4">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-lg font-bold text-gray-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
                    <span class="px-2 py-0.5 bg-gray-900 dark:bg-gray-700 text-yellow-400 text-xs font-medium rounded">
                      折后 ¥{{ app.discountPrice.toFixed(2) }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div class="flex items-center gap-1">
                      <CheckBadgeIcon class="w-3.5 h-3.5" />
                      <span>官方认证</span>
                    </div>
                    <span>{{ app.date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredApps.length === 0" class="text-center py-20">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <InboxIcon class="w-8 h-8 text-gray-400" />
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">未找到相关应用</h3>
            <p class="text-gray-500 text-sm">换个搜索词试试看吧</p>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Search as SearchIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckBadgeIcon,
  Inbox as InboxIcon
} from 'lucide-vue-next'
import { apps, categories } from '~/utils/pluginData'
import type { AppData, Category } from '~/utils/pluginData'

definePageMeta({
  layout: 'default'
})

// --- 状态定义 ---

const searchQuery = ref('')
const activeCategory = ref('all')

// --- 计算属性 ---

/**
 * 根据搜索关键词和当前分类过滤应用列表
 */
const filteredApps = computed(() => {
  return apps.filter(app => {
    // 1. 根据搜索关键词过滤
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 2. 根据分类过滤
    const matchesCategory = activeCategory.value === 'all' || app.category === activeCategory.value ||
                            // 模拟 "官方推荐" 分类显示部分项目
                            (activeCategory.value === 'recommend' && app.id <= 3) ||
                            // 模拟 "独立应用" 分类
                            (activeCategory.value === 'independent' && app.id > 3)

    return matchesSearch && matchesCategory
  })
})

</script>

<style scoped>
/* 侧边栏自定义滚动条 */
aside::-webkit-scrollbar {
  width: 4px;
}
aside::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.1);
  border-radius: 4px;
}
</style>
