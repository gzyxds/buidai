<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"/>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        <!-- Left Sidebar (Navigation) -->
        <aside class="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-8 pr-4 border-r border-gray-100 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <DocsSidebar />
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-9 xl:col-span-8 min-w-0 py-8 lg:px-4">
          <NuxtErrorBoundary>
            <article v-if="page" class="prose prose-slate max-w-none dark:prose-invert">
              <!-- Breadcrumbs -->
              <nav class="flex items-center text-sm text-gray-500 mb-6 not-prose">
                <NuxtLink to="/docs" class="hover:text-gray-900 transition-colors">Docs</NuxtLink>
                <UIcon name="i-heroicons-chevron-right" class="h-4 w-4 mx-2 text-gray-400" />
                <span class="font-medium text-gray-900 truncate">{{ page.title }}</span>
              </nav>

              <header class="mb-10 border-b border-gray-100 pb-10 not-prose">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">{{ page.title }}</h1>
                <p class="text-xl text-gray-500 leading-relaxed max-w-3xl">{{ page.description }}</p>
              </header>

              <!-- Mobile TOC -->
              <div v-if="page?.body?.toc?.links?.length" class="xl:hidden mb-8 not-prose">
                <div class="rounded-xl border border-gray-200 bg-gray-50/50 backdrop-blur-sm">
                  <button
                    class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 focus:outline-none"
                    @click="isTocOpen = !isTocOpen"
                  >
                    <span>本页目录</span>
                    <UIcon
name="i-heroicons-chevron-down"
                      :class="[isTocOpen ? 'rotate-180' : '', 'h-5 w-5 text-gray-500 transition-transform duration-200']"
                    />
                  </button>
                  <div v-show="isTocOpen" class="border-t border-gray-200 px-4 pb-4 pt-2">
                    <DocsTocList
                      :links="page.body.toc.links"
                      :active-id="activeId"
                      variant="mobile"
                      @navigate="scrollToHeading"
                    />
                  </div>
                </div>
              </div>

              <!-- Content Renderer -->
              <div class="doc-content">
                <ContentRenderer :value="page" />
              </div>

              <!-- Footer: Navigation -->
              <div class="mt-16 pt-8 border-t border-gray-100 not-prose">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Prev -->
                  <NuxtLink
                    v-if="surround?.[0]"
                    :to="surround[0].path"
                    class="group border border-gray-200 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-sm hover:bg-primary-50/30 transition-all block"
                  >
                    <div class="flex items-center text-sm text-gray-500 mb-2 group-hover:text-primary-600">
                      <UIcon name="i-heroicons-arrow-left" class="h-4 w-4 mr-1" />
                      Previous
                    </div>
                    <div class="font-semibold text-gray-900 group-hover:text-primary-700">{{ surround[0].title }}</div>
                  </NuxtLink>
                  <div v-else/>

                  <!-- Next -->
                  <NuxtLink
                    v-if="surround?.[1]"
                    :to="surround[1].path"
                    class="group border border-gray-200 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-sm hover:bg-primary-50/30 transition-all block text-right"
                  >
                    <div class="flex items-center justify-end text-sm text-gray-500 mb-2 group-hover:text-primary-600">
                      Next
                      <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 ml-1" />
                    </div>
                    <div class="font-semibold text-gray-900 group-hover:text-primary-700">{{ surround[1].title }}</div>
                  </NuxtLink>
                </div>
              </div>
            </article>

            <div v-else class="py-12 text-center">
              <h1 class="text-2xl font-bold text-gray-900">文档未找到</h1>
              <p class="text-gray-500 mt-2">请求的页面不存在。</p>
              <NuxtLink to="/docs" class="text-primary-600 mt-4 inline-block hover:underline">返回文档首页</NuxtLink>
            </div>

            <template #error="{ error, clearError }">
              <div class="py-12 text-center">
                <h1 class="text-2xl font-bold text-gray-900">加载文档出错</h1>
                <p class="text-gray-500 mt-2">{{ error }}</p>
                <button class="text-primary-600 mt-4 inline-block hover:underline" @click="clearError">重试</button>
              </div>
            </template>
          </NuxtErrorBoundary>
        </main>

        <!-- Right Sidebar (TOC) -->
        <aside class="hidden xl:block xl:col-span-2 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-8 pl-4 border-l border-gray-100/50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div v-if="page?.body?.toc?.links?.length">
            <h3 class="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">本页目录</h3>
            <DocsTocList
              :links="page.body.toc.links"
              :active-id="activeId"
              variant="desktop"
              @navigate="scrollToHeading"
            />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面级 meta 占位：需要两侧竖带装饰的页面可声明 frameSides: true（见 layouts/default.vue）
import { normalizePath } from '~/utils/normalizePath'

definePageMeta({})

const route = useRoute()
// URL 解码 + 去尾斜杠（逻辑收敛至 utils/normalizePath，与 blog 详情页共用）
const currentPath = computed(() => normalizePath(route.path))

// Parallel Data Fetching
// Navigation is now handled internally by DocsSidebar
// const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'))

const [{ data: page }, { data: surround }] = await Promise.all([
  // 文件名即最终 slug（无数字前缀），直接精确匹配
  useAsyncData(`docs-${currentPath.value}`, async () => {
    const exact = await queryCollection('docs').where('path', '=', currentPath.value).first()
    return exact ?? null
  }),
  useAsyncData(`docs-surround-${currentPath.value}`, () => queryCollectionItemSurroundings('docs', currentPath.value, {
    fields: ['title', 'path']
  }))
])

// Handle 404：交由 Nuxt 错误页处理，避免返回 200 + 空内容（软 404）
// fatal: true 使客户端路由跳转到失效 slug 时也渲染全屏错误页（create-error.md）
// 用 message 而非 statusMessage：后者仅限 ASCII（error-handling.md）
if (!page.value) {
  throw createError({ status: 404, message: '文档不存在', fatal: true })
}

const isTocOpen = ref(false)

/**
 * 目录联动：平滑跳转 + 滚动高亮
 *
 * 移动端点击目录项后自动收起折叠面板（onBeforeNavigate），
 * 桌面端点击时该回调同样生效但面板本就是展开态，无副作用。
 */
const { activeId, scrollToId: scrollToHeading } = useToc({
  resolveTargets: () => Array.from(document.querySelectorAll<HTMLElement>('h2, h3')),
  onBeforeNavigate: () => {
    isTocOpen.value = false
  }
})

usePageSeo({
  title: page.value ? `${page.value.title} - 文档中心` : '文档中心',
  description: page.value?.description || '智言万象 文档中心',
  ogType: 'article'
})
</script>

<style scoped>
/* 引入 Tailwind + Nuxt UI 主题上下文，使 @apply 可解析（v4 中 SFC 样式独立编译） */
@reference "../../assets/css/main.css";
/* Custom Prose Styles for Nuxt-like feel */
:deep(.doc-content) {
  @apply text-gray-700 dark:text-gray-300;
}

:deep(.doc-content h2) {
  @apply text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6 scroll-mt-24 tracking-tight border-b border-gray-100 dark:border-gray-800 pb-2;
}

:deep(.doc-content h3) {
  @apply text-xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4 scroll-mt-24 tracking-tight;
}

:deep(.doc-content p) {
  @apply leading-7 mb-5;
}

:deep(.doc-content ul) {
  @apply list-disc list-outside ml-6 mb-5 space-y-1;
}

:deep(.doc-content ol) {
  @apply list-decimal list-outside ml-6 mb-5 space-y-1;
}

:deep(.doc-content a) {
  @apply text-primary-600 dark:text-primary-400 font-medium no-underline border-b border-primary-600/30 dark:border-primary-400/30 hover:border-primary-600 dark:hover:border-primary-400 transition-colors;
}

:deep(.doc-content code) {
  @apply font-mono text-sm text-primary-700 bg-primary-50 dark:text-primary-300 dark:bg-primary-900/30 px-1.5 py-0.5 rounded-md before:content-[''] after:content-[''] border border-primary-100 dark:border-primary-800;
}

:deep(.doc-content pre) {
  @apply bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 rounded-xl p-5 overflow-x-auto mb-8 border border-slate-200 dark:border-slate-800 shadow-sm;
}

:deep(.doc-content pre code) {
  @apply bg-transparent p-0 text-inherit border-none text-sm;
}

:deep(.doc-content blockquote) {
  @apply border-l-4 border-primary-500 bg-primary-50/30 pl-4 py-1 pr-4 my-6 rounded-r-lg italic text-gray-700;
}

:deep(.doc-content img) {
  @apply rounded-xl border border-gray-100 shadow-sm my-8;
}

:deep(.doc-content table) {
  @apply w-full text-left border-collapse my-8;
}

:deep(.doc-content th) {
  @apply border-b border-gray-200 py-3 px-4 text-sm font-semibold text-gray-900 bg-gray-50;
}

:deep(.doc-content td) {
  @apply border-b border-gray-100 py-3 px-4 text-sm text-gray-600;
}
</style>
