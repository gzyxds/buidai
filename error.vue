<template>
  <UApp>
    <NuxtLayout name="default">
      <div class="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10 dark:opacity-5">
          <span class="text-[20rem] font-black text-neutral-900 dark:text-white transform -rotate-12">404</span>
        </div>

      <!-- 主要内容 -->
      <div class="relative z-10 space-y-8 max-w-lg mx-auto backdrop-blur-sm">
        <div class="space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
            页面未找到
          </h1>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            抱歉，您访问的页面不存在或已被移除。<br>
            请检查链接是否正确，或返回首页继续浏览。
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            color="primary"
            variant="solid"
            icon="i-ph-house"
            @click="handleError"
            class="w-full sm:w-auto justify-center"
          >
            返回首页
          </UButton>

          <UButton
            size="xl"
            color="neutral"
            variant="ghost"
            icon="i-ph-arrow-left"
            @click="goBack"
            class="w-full sm:w-auto justify-center"
          >
            返回上一页
          </UButton>
        </div>

          <!-- 错误详情（仅在开发环境显示） -->
          <div v-if="isDev && error" class="mt-8 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg text-left text-sm border border-red-100 dark:border-red-900/20">
            <p class="font-mono text-red-600 dark:text-red-400 break-all">
              {{ error.message }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { type PropType } from 'vue'

/**
 * 404 错误页面组件 (Error Page)
 *
 * 用于处理全站的 404 及其他未捕获错误。
 * 继承默认布局，保持导航栏和页脚的一致性。
 */

const props = defineProps({
  /**
   * Nuxt 传递的错误对象
   */
  error: {
    type: Object as PropType<NuxtError>,
    default: () => ({})
  }
})

// 判断是否为开发环境
const isDev = process.dev

/**
 * 清除错误状态并重定向到首页
 *
 * @returns {void} 无返回值
 */
const handleError = () => {
  clearError({ redirect: '/' })
}

/**
 * 返回上一页
 * 如果没有历史记录则返回首页
 *
 * @returns {void} 无返回值
 */
const goBack = () => {
  const router = useRouter()
  if (window.history.length > 1) {
    router.back()
  } else {
    handleError()
  }
}

// 设置页面元数据
useHead({
  title: '404 - 页面未找到',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
