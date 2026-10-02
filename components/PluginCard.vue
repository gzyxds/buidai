<script setup lang="ts">
import type { MarketApp } from '~/data/products/market'

/**
 * 应用市场卡片
 *
 * grid / list 两套视图共用同一组件，viewMode 只切换根元素布局 class。
 * 分类标签文案由父级传入（categoryLabel），组件不依赖页面的分类映射表。
 */
defineProps<{
  app: MarketApp
  viewMode: 'grid' | 'list'
  categoryLabel: string
}>()
</script>

<template>
  <!-- Grid 视图卡片 -->
  <div
    v-if="viewMode === 'grid'"
    class="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <!-- App Preview Image -->
    <div class="aspect-video bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 relative p-2 rounded-t-2xl overflow-hidden">
      <img
        :src="app.image"
        :alt="app.name"
        class="w-full h-full object-cover rounded-xl border border-neutral-200/50 dark:border-neutral-700/50"
        loading="lazy"
        decoding="async"
      />
      <!-- 分类标签 -->
      <div class="absolute top-2.5 left-2.5">
        <span class="px-2.5 py-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
          {{ categoryLabel }}
        </span>
      </div>
      <!-- 独立系统标签 -->
      <div v-if="app.category === 'independent'" class="absolute top-2.5 right-2.5">
        <span class="px-2.5 py-1 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-full text-xs font-medium text-white shadow-lg">
          源码版
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex-1 flex flex-col">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 flex items-center justify-center shrink-0">
           <UIcon :name="app.icon" class="w-4 h-4" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-indigo-500 transition-colors">{{ app.name }}</h3>
        </div>
      </div>

      <p class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-4 flex-1 leading-relaxed">
        {{ app.description }}
      </p>

      <!-- 价格和信息 -->
      <div class="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span v-if="app.originalPrice !== app.discountPrice" class="text-base text-neutral-400 line-through">¥{{ app.originalPrice.toFixed(2) }}</span>
            <span v-if="app.originalPrice !== app.discountPrice" class="px-2 py-1 bg-neutral-900 dark:bg-white rounded text-xs font-medium text-yellow-500">折后价 ¥{{ app.discountPrice.toFixed(2) }}</span>
            <span v-else class="text-xl font-bold text-neutral-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
          </div>
          <button class="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors">
            <UIcon name="i-lucide-shopping-bag" class="w-3.5 h-3.5" />
            购买
          </button>
        </div>

        <div class="flex items-center justify-between text-xs text-neutral-400">
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-check-circle" class="w-3.5 h-3.5 text-green-500" />
            <span>官方认证</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-arrow-path" class="w-3.5 h-3.5 text-blue-500" />
            <span>永久升级</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- List 视图卡片 -->
  <div
    v-else
    class="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"
  >
    <!-- 应用程序预览图像 -->
    <div class="w-full sm:w-48 aspect-video sm:aspect-auto sm:h-40 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 relative p-2 shrink-0 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none overflow-hidden">
      <img
        :src="app.image"
        :alt="app.name"
        class="w-full h-full object-cover rounded-xl border border-neutral-200/50 dark:border-neutral-700/50"
        loading="lazy"
        decoding="async"
      />
    </div>

    <!-- 内容 -->
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <div class="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 flex items-center justify-center shrink-0">
             <UIcon :name="app.icon" class="w-4 h-4" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="font-bold text-neutral-900 dark:text-white group-hover:text-indigo-500 transition-colors">{{ app.name }}</h3>
              <span class="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 rounded text-xs text-neutral-500 dark:text-neutral-400">{{ categoryLabel }}</span>
              <span v-if="app.category === 'independent'" class="px-2 py-0.5 bg-linear-to-r from-indigo-500 to-indigo-600 rounded text-xs text-white">源码版</span>
            </div>
          </div>
        </div>

        <p class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {{ app.description }}
        </p>
      </div>

      <div class="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <div class="flex items-center gap-2">
          <span v-if="app.originalPrice !== app.discountPrice" class="text-base text-neutral-400 line-through">¥{{ app.originalPrice.toFixed(2) }}</span>
          <span v-if="app.originalPrice !== app.discountPrice" class="px-2 py-1 bg-neutral-900 dark:bg-white rounded text-xs font-medium text-yellow-500">折后价 ¥{{ app.discountPrice.toFixed(2) }}</span>
          <span v-else class="text-lg font-bold text-neutral-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
        </div>
        <div class="flex items-center gap-3">
          <button class="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors">
            <UIcon name="i-lucide-shopping-bag" class="w-3.5 h-3.5" />
            购买
          </button>
          <div class="flex items-center gap-1 text-xs text-neutral-400">
            <UIcon name="i-heroicons-check-circle" class="w-3.5 h-3.5 text-green-500" />
            <span>官方认证</span>
          </div>
          <div class="flex items-center gap-1 text-xs text-neutral-400">
            <UIcon name="i-heroicons-arrow-path" class="w-3.5 h-3.5 text-blue-500" />
            <span>永久升级</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
