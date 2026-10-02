<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
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
    <main>
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
const route = useRoute()
const showFrameSides = computed(() => Boolean((route.meta as Record<string, unknown>).frameSides))
</script>
