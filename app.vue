<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/**
 * 全局应用入口文件
 *
 * 功能:
 * - 渲染全局布局 (NuxtLayout)
 * - 渲染页面内容 (NuxtPage)
 * - 作为应用的根组件
 */
import { initAOS } from '~/utils/aos' // 引入 AOS 初始化工具函数

onMounted(() => {
  initAOS()
})
</script>
