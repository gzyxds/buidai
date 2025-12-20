<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
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
