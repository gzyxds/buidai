<script setup lang="ts">
/**
 * 演示页产品详情卡：封面 + 标签 + 描述 + 核心功能 + 演示平台 + CTA
 */
import { getProductImageUrl, getStatusClass, getStatusText, handleImageError, type ProductDemo } from '~/data/demoProducts'

const props = defineProps<{
  selectedProduct: ProductDemo
}>()
</script>

<template>
  <!-- 右侧内容区域 -->
  <main v-if="props.selectedProduct" class="flex-1 min-w-0">
    <!-- 产品详情卡片 -->
    <div class="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      <!-- 产品头部 -->
      <div class="relative">
        <!-- 封面图 -->
        <div
          class="h-40 sm:h-48 md:h-52 flex items-center justify-center relative overflow-hidden"
        >
          <!-- 背景图 -->
          <img
            :src="getProductImageUrl(props.selectedProduct.image)"
            :alt="props.selectedProduct.title"
            class="absolute inset-0 w-full h-full object-cover"
            @error="handleImageError"
          />
          <!-- 遮罩层 -->
          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-black/40" />

          <div class="relative z-10 text-center px-3 sm:px-4">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <UIcon
:name="props.selectedProduct.icon"
                class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
              />
            </div>
            <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">
              {{ props.selectedProduct.title }}
            </h2>
            <p class="mt-0.5 text-xs sm:text-sm text-white/80 line-clamp-1">
              {{ props.selectedProduct.subtitle }}
            </p>
          </div>

          <!-- 状态标签 -->
          <div class="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
            <span
              class="px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full"
              :class="getStatusClass(props.selectedProduct.status)"
            >
              {{ getStatusText(props.selectedProduct.status) }}
            </span>
          </div>
        </div>
      </div>

      <!-- 产品内容 -->
      <div class="p-4 sm:p-5 md:p-6">
        <!-- 标签 -->
        <div class="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
          <span
            v-for="tag in props.selectedProduct.tags"
            :key="tag"
            class="px-2 py-0.5 text-[10px] sm:text-xs text-neutral-600 bg-neutral-100 rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <!-- 描述 -->
        <div class="mb-4 sm:mb-5">
          <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {{ props.selectedProduct.description }}
          </p>
        </div>

        <!-- 核心功能 -->
        <div class="mb-4 sm:mb-5">
          <h3 class="text-[10px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2 sm:mb-3">
            核心功能
          </h3>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span
              v-for="feature in props.selectedProduct.features"
              :key="feature"
              class="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-neutral-700 bg-neutral-50 rounded-lg"
            >
              <div class="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
              <span class="truncate max-w-[150px] sm:max-w-none">{{ feature }}</span>
            </span>
          </div>
        </div>

        <!-- 演示平台 -->
        <div>
          <h3 class="text-[10px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2 sm:mb-3">
            演示环境
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <a
              v-for="platform in props.selectedProduct.platforms"
              :key="platform.title"
              :href="platform.url"
              target="_blank" rel="noopener noreferrer"
              class="group block p-2.5 sm:p-3 bg-white rounded-lg border border-neutral-200 hover:border-indigo-500/30 transition-colors duration-200"
              :class="{ 'sm:col-span-2': props.selectedProduct.platforms.length === 1 }"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors shrink-0">
                  <UIcon :name="platform.icon" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 group-hover:text-indigo-500 transition-colors" />
                </div>
                <div class="flex-1 min-w-0 overflow-hidden">
                  <h4 class="text-xs sm:text-sm font-medium text-neutral-900 group-hover:text-indigo-500 transition-colors truncate">
                    {{ platform.title }}
                  </h4>
                  <p class="text-[10px] sm:text-xs text-neutral-400 truncate">
                    {{ platform.url }}
                  </p>
                </div>
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-indigo-500 transition-colors shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 CTA -->
    <div class="mt-4 sm:mt-6 text-center">
      <p class="text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-3">需要定制化解决方案？</p>
      <a
        href="/contact"
        class="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-indigo-500 text-white text-xs sm:text-sm font-medium hover:bg-indigo-600 transition-colors"
      >
        联系我们
        <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </a>
    </div>
  </main>
</template>

<style scoped>
/* 多行文本截断 */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 页面进入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  animation: fadeIn 0.5s ease-out;
}

/* 平台卡片进入动画 */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

a[class*="group block"] {
  animation: slideUp 0.4s ease-out forwards;
}
</style>
