<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- 跳转链接：首个 tab stop，键盘/读屏用户可跳过导航直达正文（accessibility.md Focus Management） -->
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
    >
      跳到主要内容
    </a>

    <!-- 全局竖带装饰层：仅声明 frameSides 的页面显示（超宽屏两侧网格纹理带） -->
    <div v-if="showFrameSides" aria-hidden="true">
      <div class="gb-frame-side gb-frame-side-left" />
      <div class="gb-frame-side gb-frame-side-right" />
    </div>

    <!-- 顶部横幅 -->
    <AppBanner />

    <!-- 导航 -->
    <AppNavigation />

    <!-- 主要内容 -->
    <main id="main" tabindex="-1" class="focus:outline-none">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- 返回顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
// 页面通过 definePageMeta({ frameSides: true }) 声明开启两侧竖带装饰
// （PageMeta 已在 page-meta.d.ts 中做类型增强）
const route = useRoute()
const showFrameSides = computed(() => Boolean(route.meta.frameSides))
</script>
