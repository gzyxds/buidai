<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"></div>

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
                <ChevronRightIcon class="h-4 w-4 mx-2 text-gray-400" />
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
                    @click="isTocOpen = !isTocOpen"
                    class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 focus:outline-none"
                  >
                    <span>本页目录</span>
                    <ChevronDownIcon
                      :class="[isTocOpen ? 'rotate-180' : '', 'h-5 w-5 text-gray-500 transition-transform duration-200']"
                    />
                  </button>
                  <div v-show="isTocOpen" class="border-t border-gray-200 px-4 pb-4 pt-2">
                    <nav class="space-y-1">
                      <div v-for="link in page.body.toc.links" :key="link.id">
                        <a
                          :href="`#${link.id}`"
                          class="block py-1.5 text-sm transition-colors truncate"
                          :class="activeId === link.id ? 'text-primary-600 font-medium' : 'text-gray-500 hover:text-gray-900'"
                          @click.prevent="scrollToHeading(link.id); isTocOpen = false"
                        >
                          {{ link.text }}
                        </a>
                        <div v-if="link.children" class="pl-4 mt-1 space-y-1">
                          <a
                            v-for="child in link.children"
                            :key="child.id"
                            :href="`#${child.id}`"
                            class="block py-1 text-xs transition-colors truncate"
                            :class="activeId === child.id ? 'text-primary-600 font-medium' : 'text-gray-500 hover:text-gray-900'"
                            @click.prevent="scrollToHeading(child.id); isTocOpen = false"
                          >
                            {{ child.text }}
                          </a>
                        </div>
                      </div>
                    </nav>
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
                      <ArrowLeftIcon class="h-4 w-4 mr-1" />
                      Previous
                    </div>
                    <div class="font-semibold text-gray-900 group-hover:text-primary-700">{{ surround[0].title }}</div>
                  </NuxtLink>
                  <div v-else></div>

                  <!-- Next -->
                  <NuxtLink
                    v-if="surround?.[1]"
                    :to="surround[1].path"
                    class="group border border-gray-200 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-sm hover:bg-primary-50/30 transition-all block text-right"
                  >
                    <div class="flex items-center justify-end text-sm text-gray-500 mb-2 group-hover:text-primary-600">
                      Next
                      <ArrowRightIcon class="h-4 w-4 ml-1" />
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
                <button @click="clearError" class="text-primary-600 mt-4 inline-block hover:underline">重试</button>
              </div>
            </template>
          </NuxtErrorBoundary>
        </main>

        <!-- Right Sidebar (TOC) -->
        <aside class="hidden xl:block xl:col-span-2 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-8 pl-4 border-l border-gray-100/50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div v-if="page?.body?.toc?.links?.length">
            <h3 class="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">本页目录</h3>
            <nav class="space-y-1 relative">
              <div v-for="link in page.body.toc.links" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  class="block py-1.5 text-sm transition-colors truncate"
                  :class="activeId === link.id ? 'text-primary-600 font-medium pl-3 border-l-2 border-primary-600 -ml-[17px]' : 'text-gray-500 hover:text-gray-900'"
                  @click.prevent="scrollToHeading(link.id)"
                >
                  {{ link.text }}
                </a>
                <div v-if="link.children" class="pl-3 mt-1 space-y-1">
                  <a
                    v-for="child in link.children"
                    :key="child.id"
                    :href="`#${child.id}`"
                    class="block py-1 text-xs transition-colors truncate"
                    :class="activeId === child.id ? 'text-primary-600 font-medium' : 'text-gray-400 hover:text-gray-900'"
                    @click.prevent="scrollToHeading(child.id)"
                  >
                    {{ child.text }}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { SCROLL } from '~/utils/ui'

const route = useRoute()
const currentPath = computed(() => {
  const path = route.path
  // 处理 URL 编码 (例如中文路径)
  const decodedPath = decodeURIComponent(path)
  // 移除尾部斜杠 (除非是根路径)
  return decodedPath.endsWith('/') && decodedPath !== '/'
    ? decodedPath.slice(0, -1)
    : decodedPath
})

// Parallel Data Fetching
// Navigation is now handled internally by DocsSidebar
// const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'))

const [{ data: page }, { data: surround }] = await Promise.all([
  // @ts-ignore: Nuxt Content v3 Alpha type mismatch
  useAsyncData(`docs-${currentPath.value}`, async () => {
    // Try exact match first
    const exact = await queryCollection('docs').where('path', '=', currentPath.value).first()
    if (exact) return exact

    // Fallback: fetch all paths and match by cleaning them
    // This handles cases where file system has numbers (1.introduce) but URL is clean (introduce)
    const allDocs = await queryCollection('docs').select('path').all()
    const found = allDocs.find(doc => {
      // Clean the doc path: remove numbers from segments, remove .md, remove /index
      // e.g. /docs/1.introduce/1.index -> /docs/introduce
      const cleanPath = doc.path
        .split('/')
        .map(p => p.replace(/^\d+\./, ''))
        .join('/')
        .replace(/\/index$/, '')

      // Also clean the current path just in case, though it should be clean
      const cleanCurrent = currentPath.value.replace(/\/$/, '')

      return cleanPath === cleanCurrent
    })

    if (found) {
      return queryCollection('docs').where('path', '=', found.path).first()
    }

    return null
  }),
  // @ts-ignore: Nuxt Content v3 Alpha type mismatch
  useAsyncData(`docs-surround-${currentPath.value}`, () => queryCollectionItemSurroundings('docs', currentPath.value, {
    fields: ['title', 'path']
  }))
])

// Handle 404
if (!page.value) {
  setResponseStatus(404)
}

const activeId = ref('')
const isTocOpen = ref(false)
let observer: IntersectionObserver | null = null

/**
 * 平滑滚动到指定的标题元素。
 *
 * @param id - 目标标题元素的 ID。
 */
const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - SCROLL.HEADING_OFFSET

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    history.pushState(null, '', `#${id}`)
    activeId.value = id
  }
}

// Observer for TOC
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: `${SCROLL.TOC_OBSERVER_TOP_MARGIN} 0px ${SCROLL.TOC_OBSERVER_BOTTOM_MARGIN} 0px` }
  )

  document.querySelectorAll('h2, h3').forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

useSeoMeta({
  title: page.value ? `${page.value.title} - 文档中心` : '文档中心',
  description: page.value?.description || 'BuidAI 文档中心'
})
</script>

<style lang="postcss" scoped>
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
