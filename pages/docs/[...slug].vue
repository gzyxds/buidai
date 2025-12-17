<template>
  <div class="min-h-screen bg-white">
    <!-- 页眉间距 -->
    <div class="h-[72px]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        <!-- Left Sidebar (Navigation) -->
        <!-- 使用 sticky 定位替代 fixed，避免复杂的 left 计算问题 -->
        <aside class="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-8 pr-4 border-r border-gray-100">
          <DocsSidebar :navigation="navigation ?? []" />
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-9 xl:col-span-8 min-w-0 py-8 lg:px-4">
          <article v-if="page" class="prose prose-indigo max-w-none prose-headings:scroll-mt-24">
            <header class="mb-8 border-b border-gray-100 pb-8">
              <!-- <p class="text-sm font-semibold text-[#6541f8] mb-2">{{ page.category }}</p> -->
              <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">{{ page.title }}</h1>
              <p class="text-xl text-gray-500">{{ page.description }}</p>
            </header>

            <!-- Mobile TOC -->
            <div v-if="page?.body?.toc?.links?.length" class="xl:hidden mb-8">
              <div class="rounded-lg border border-gray-200 bg-gray-50">
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
                        :class="activeId === link.id ? 'text-[#6541f8] font-medium' : 'text-gray-500 hover:text-gray-900'"
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
                          :class="activeId === child.id ? 'text-[#6541f8] font-medium' : 'text-gray-400 hover:text-gray-900'"
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

            <ContentRenderer :value="page" />

            <div class="mt-12 pt-8 border-t border-gray-100 flex justify-between">
               <!-- Prev/Next Navigation placeholder, can be implemented similar to blog -->
            </div>
          </article>

          <div v-else class="py-12 text-center">
            <h1 class="text-2xl font-bold text-gray-900">文档未找到</h1>
            <p class="text-gray-500 mt-2">请求的页面不存在。</p>
            <NuxtLink to="/docs" class="text-[#6541f8] mt-4 inline-block hover:underline">返回文档首页</NuxtLink>
          </div>
        </main>

        <!-- Right Sidebar (TOC) -->
        <aside class="hidden xl:block xl:col-span-2 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto py-8 pl-4 border-l border-gray-100/50">
          <div v-if="page?.body?.toc?.links?.length">
            <h3 class="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">本页目录</h3>
            <nav class="space-y-1">
              <div v-for="link in page.body.toc.links" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  class="block py-1.5 text-sm transition-colors truncate"
                  :class="activeId === link.id ? 'text-[#6541f8] font-medium border-l-2 border-[#6541f8] pl-2 -ml-2.5' : 'text-gray-500 hover:text-gray-900'"
                  @click.prevent="scrollToHeading(link.id)"
                >
                  {{ link.text }}
                </a>
                <div v-if="link.children" class="pl-4 mt-1 space-y-1">
                  <a
                    v-for="child in link.children"
                    :key="child.id"
                    :href="`#${child.id}`"
                    class="block py-1 text-xs transition-colors truncate"
                    :class="activeId === child.id ? 'text-[#6541f8] font-medium' : 'text-gray-400 hover:text-gray-900'"
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
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

// Fetch Page
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

// Fetch Navigation
const { data: navigation } = await useAsyncData('docs-nav', () => {
  return queryCollectionNavigation('docs')
})

const activeId = ref('')
const isTocOpen = ref(false)

// Scroll Handling
const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-100px 0px -66% 0px' }
  )

  document.querySelectorAll('h2, h3').forEach((section) => {
    observer.observe(section)
  })
})

useSeoMeta({
  title: page.value ? `${page.value.title} - 文档中心` : '文档中心',
  description: page.value?.description || 'BuidAI 文档中心'
})
</script>

<style scoped lang="postcss">
/* Prose Customization */
:deep(.prose h2) {
  @apply scroll-mt-24 text-2xl font-bold text-gray-900 mt-12 mb-6;
}
:deep(.prose h3) {
  @apply scroll-mt-24 text-xl font-bold text-gray-900 mt-8 mb-4;
}
:deep(.prose code) {
  @apply text-[#6541f8] bg-[#6541f8]/5 px-1.5 py-0.5 rounded text-sm font-mono before:content-[''] after:content-[''];
}
:deep(.prose pre) {
  @apply bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-6;
}
:deep(.prose a) {
  @apply text-[#6541f8] no-underline hover:underline;
}
:deep(.prose ul) {
  @apply list-disc list-outside ml-6;
}
</style>
