// Nuxt 全局类型声明
// 用于 ESLint 识别 Nuxt 3/4 的全局函数

declare global {
  // Nuxt 页面元数据
  const definePageMeta: (meta: Record<string, unknown>) => void
  
  // SEO 相关
  const useSeoMeta: (meta: Record<string, unknown>) => void
  const useHead: (head: Record<string, unknown>) => void
  
  // 路由相关
  const useRouter: typeof import('vue-router').useRouter
  const useRoute: typeof import('vue-router').useRoute
  const navigateTo: (path: string, options?: Record<string, unknown>) => void
  
  // 状态管理
  const useState: <T>(key: string, init?: () => T) => T
  const useFetch: <T>(url: string, options?: Record<string, unknown>) => Promise<T>
  const useAsyncData: <T>(key: string, fn: () => Promise<T>) => Promise<T>
  
  // Vue 组合式 API
  const ref: typeof import('vue').ref
  const computed: typeof import('vue').computed
  const watch: typeof import('vue').watch
  const onMounted: typeof import('vue').onMounted
  const onUnmounted: typeof import('vue').onUnmounted
  const reactive: typeof import('vue').reactive
  
  // Nuxt 错误处理
  const clearError: (options?: { redirect?: string }) => void
  const setResponseStatus: (code: number, message?: string) => void
  
  // Nuxt Content v3 API
  const queryCollection: (collection: string) => unknown
  const queryCollectionItemSurroundings: (collection: string, path: string) => unknown
}

export {}
