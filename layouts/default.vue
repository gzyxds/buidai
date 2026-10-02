<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- 全局竖带装饰层：超宽屏两侧网格纹理带（>1568px 视口显示，布局无关） -->
    <div aria-hidden="true">
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
// 此布局不需要额外的设置
</script>
