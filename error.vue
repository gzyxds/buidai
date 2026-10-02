<template>
  <UApp>
    <NuxtLayout name="default">
      <div class="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative overflow-hidden">
        <!-- 背景装饰 -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10 dark:opacity-5">
          <span class="text-[20rem] font-black text-neutral-900 dark:text-white transform -rotate-12">{{ statusCode }}</span>
        </div>

      <!-- 主要内容 -->
      <div class="relative z-10 space-y-8 max-w-lg mx-auto backdrop-blur-sm">
        <div class="space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
            {{ title }}
          </h1>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            color="primary"
            variant="solid"
            icon="i-ph-house"
            class="w-full sm:w-auto justify-center"
            @click="handleError"
          >
            返回首页
          </UButton>

          <UButton
            size="xl"
            color="neutral"
            variant="ghost"
            icon="i-ph-arrow-left"
            class="w-full sm:w-auto justify-center"
            @click="goBack"
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
import type { PropType } from 'vue'

/**
 * 全局错误页面组件 (Error Page)
 *
 * 按状态码区分 404 与服务端错误，继承默认布局保持导航与页脚一致性。
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
const isDev = import.meta.dev

// status 是 NuxtError 的新字段（statusCode 为 deprecated 兼容别名），二者兼容读取
const statusCode = computed(() => props.error?.status || props.error?.statusCode || 500)

const isNotFound = computed(() => statusCode.value === 404)

const title = computed(() =>
  isNotFound.value ? '页面未找到' : '服务暂时不可用'
)

const description = computed(() =>
  isNotFound.value
    ? '抱歉，您访问的页面不存在或已被移除。请检查链接是否正确，或返回首页继续浏览。'
    : '服务器开小差了，请稍后重试。若问题持续存在，欢迎联系我们的客服团队。'
)

/**
 * 清除错误状态并重定向到首页
 *
 * @returns {void} 无返回值
 */
const handleError = () => {
  // clearError 和 navigateTo 是 Nuxt 全局函数，运行时自动注入
  if (typeof clearError !== 'undefined') {
    clearError({ redirect: '/' })
  } else {
    navigateTo('/')
  }
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
  title: () => `${statusCode.value} - ${title.value}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
