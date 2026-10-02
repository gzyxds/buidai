<script setup lang="ts">
/**
 * 演示页 Hero 区块：徽章 + 标题 + 移动端产品选择器
 */
import type { ProductDemo } from '~/data/products'

const props = defineProps<{
  currentCategoryProducts: ProductDemo[]
  selectedCategoryId: string
  selectedProduct: ProductDemo | null
}>()

const emit = defineEmits<{
  (e: 'select', product: ProductDemo, categoryId: string): void
}>()
</script>

<template>
  <!-- 顶部 Hero 区域 -->
  <section class="relative pt-8 pb-4 md:pt-12 md:pb-12 overflow-hidden z-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <!-- 徽章 -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-neutral-200 shadow-sm mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"/>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"/>
          </span>
          <span class="text-xs font-medium text-neutral-600">智言AI · 产品演示</span>
        </div>

        <!-- 标题 -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-text)] tracking-tight leading-[1.2] mb-4">
          在线 <span class="text-indigo-500">体验</span> AI 产品
        </h1>

        <!-- 副标题 -->
        <p class="text-base sm:text-lg text-[var(--brand-muted)] max-w-2xl mx-auto leading-relaxed">
          探索智言AI全系产品，涵盖智能对话、AI绘画、视频生成、数字人等多个领域，即刻开启您的AI之旅
        </p>
      </div>

      <!-- 移动端产品选择器 - 横向滚动标签栏 -->
      <div class="lg:hidden mt-4 sm:mt-6">
        <div class="flex items-center gap-2 px-0 py-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
          <button
            v-for="product in props.currentCategoryProducts"
            :key="product.id"
            class="flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap border"
            :class="props.selectedProduct?.id === product.id
              ? 'bg-indigo-500 text-white border-indigo-500 shadow-sm'
              : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'"
            @click="emit('select', product, props.selectedCategoryId)"
          >
            <component :is="product.icon" class="w-4 h-4 flex-shrink-0" />
            <span class="truncate max-w-[100px] sm:max-w-[120px]">{{ product.title }}</span>
            <span
              v-if="product.status === 'beta'"
              class="ml-0.5 px-1 py-0 text-[8px] rounded bg-white/20 flex-shrink-0"
            >
              β
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .scrollbar-hide 已收敛至 assets/css/main.css 的工具类层 */
</style>
