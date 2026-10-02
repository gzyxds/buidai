<script lang="ts" setup>
import { getProductDetailBySlug, handleImageError, productSlugs, type ProductDetail } from '~/data/products'

definePageMeta({})

// SEO 元数据
usePageSeo({
  title: '产品中心 - 开源 AI 产品与私有化部署方案 | 智言万象',
  description:
    '浏览 智言万象 全部开源 AI 产品：AI 绘画、AI 视频、数字人、AI 音乐、AI PPT、AI 简历等一站式解决方案，提供完整源码与私有化部署支持。',
  keywords: '产品中心,AI产品,开源AI系统,AI绘画,AI视频,数字人,AI音乐,AI PPT,AI简历,私有化部署,智言万象',
  ogTitle: '产品中心 - 开源 AI 产品与私有化部署方案 | 智言万象',
  ogDescription: '浏览 智言万象 全部开源 AI 产品，提供完整源码与私有化部署支持。',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

/** 具备详情页的产品列表（与导航"解决方案"下拉一致，实体文件名序稳定） */
const detailProducts = productSlugs
  .map(slug => getProductDetailBySlug(slug))
  .filter((p): p is ProductDetail => p !== undefined)

/**
 * 产品卡片的"矩阵光谱"强调色板：按索引循环取色，
 * 让相邻产品一眼可辨（颜色即导航地标），呼应"产品矩阵"概念。
 * 每个色板同时给出图标底、hover 边框与封面渐隐色。
 */
const PRODUCT_ACCENTS = [
  {
    iconBox: 'bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400',
    border: 'hover:border-violet-400/60',
    tag: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300'
  },
  {
    iconBox: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400',
    border: 'hover:border-indigo-400/60',
    tag: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
  },
  {
    iconBox: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400',
    border: 'hover:border-cyan-400/60',
    tag: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300'
  },
  {
    iconBox: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400',
    border: 'hover:border-emerald-400/60',
    tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
  },
  {
    iconBox: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
    border: 'hover:border-amber-400/60',
    tag: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
  },
  {
    iconBox: 'bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400',
    border: 'hover:border-rose-400/60',
    tag: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300'
  }
]

/** 按产品索引取强调色 */
function accentOf(index: number) {
  return PRODUCT_ACCENTS[index % PRODUCT_ACCENTS.length]!
}
</script>

<template>
  <div class="relative min-h-full font-sans text-gray-900 bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
    <!-- ========== 背景：矩阵光谱光场 ========== -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <!-- 顶部主光场（站点 indigo→violet→fuchsia 渐变语汇） -->
      <div class="absolute top-[-12%] left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-gradient-to-r from-indigo-300/25 via-violet-300/25 to-fuchsia-300/25 blur-[120px] dark:from-indigo-500/15 dark:via-violet-500/15 dark:to-fuchsia-500/15" />
      <!-- 两侧辅光斑：与卡片色板同源（cyan / amber） -->
      <div class="absolute top-48 -left-24 w-96 h-96 rounded-full bg-cyan-200/25 blur-[100px] dark:bg-cyan-500/10" />
      <div class="absolute top-72 -right-24 w-96 h-96 rounded-full bg-amber-200/25 blur-[100px] dark:bg-amber-500/10" />
      <!-- 底部收尾光斑（emerald，呼应 CTA 区之上） -->
      <div class="absolute bottom-24 left-1/3 w-80 h-80 rounded-full bg-emerald-200/15 blur-[100px] dark:bg-emerald-500/10" />
    </div>

    <!-- ========== 首屏区域 ========== -->
    <div class="relative pt-24 pb-14 md:pt-32 md:pb-20 z-10">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-4">
          12 款产品 · 全部开源免费 · 支持私有化部署
        </p>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          开源
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
            AI 产品矩阵
          </span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-5 leading-relaxed">
          从 AI 绘画到数字人，全部产品开源免费、开箱即用，提供完整源码与私有化部署支持。
        </p>
      </div>
    </div>

    <!-- ========== 产品网格 ========== -->
    <div class="relative z-10 pb-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(p, i) in detailProducts"
            :key="p.slug"
            :to="`/product/${p.slug}`"
            class="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            :class="accentOf(i).border"
          >
            <!-- 封面图：底部渐隐到卡面色，配图与卡片融为一体 -->
            <div class="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                :src="p.image || p.hero.demoImage"
                :alt="p.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent dark:from-gray-800/90" />
            </div>

            <div class="flex flex-col flex-1 p-6">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center" :class="accentOf(i).iconBox">
                  <UIcon :name="p.icon || 'i-lucide-box'" class="w-5 h-5" />
                </div>
                <h2 class="flex-1 text-lg font-bold line-clamp-2 leading-snug">{{ p.name }}</h2>
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="w-4 h-4 mt-1 text-gray-300 dark:text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>

              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {{ p.description }}
              </p>

              <div v-if="p.tags?.length" class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in p.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
                  :class="accentOf(i).tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ========== CTA 区域 ========== -->
    <div class="relative z-10 pb-24">
      <div class="container mx-auto px-4">
        <div class="text-center rounded-3xl border border-gray-200 dark:border-gray-700 px-6 py-16 bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-500/10 dark:via-gray-800 dark:to-gray-800">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">没有找到合适的产品？</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8">联系我们，获取定制化 AI 解决方案与私有化部署支持。</p>
          <UButton
            size="xl"
            color="primary"
            to="/contact"
            class="px-8 py-3.5 rounded-full justify-center text-base font-medium shadow-lg shadow-ui-primary/20"
          >
            联系我们
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
