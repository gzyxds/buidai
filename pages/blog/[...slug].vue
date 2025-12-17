<template>
  <div class="min-h-screen bg-white">
    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 h-1 bg-[#6541f8] z-50 transition-all duration-300" :style="{ width: `${scrollProgress}%` }"></div>

    <article v-if="post" class="pt-24 pb-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <!-- Left Sidebar: TOC (Desktop) -->
          <div class="hidden lg:block lg:col-span-3 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto">
            <div class="space-y-4">
              <div class="flex items-center gap-2 text-gray-900 font-semibold mb-4">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                目录导航
              </div>
              <nav class="text-sm text-gray-600 space-y-2">
                <div v-for="link in post.body?.toc?.links" :key="link.id" class="pl-0">
                  <a :href="`#${link.id}`" class="block hover:text-[#6541f8] transition-colors line-clamp-1" :class="{'text-[#6541f8] font-medium': activeId === link.id}">
                    {{ link.text }}
                  </a>
                  <div v-if="link.children" class="pl-4 mt-2 space-y-2 border-l border-gray-100">
                    <a v-for="child in link.children" :key="child.id" :href="`#${child.id}`" class="block hover:text-[#6541f8] transition-colors line-clamp-1" :class="{'text-[#6541f8] font-medium': activeId === child.id}">
                      {{ child.text }}
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-100">
              <NuxtLink to="/blog" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#6541f8] transition-colors">
                <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                返回列表
              </NuxtLink>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-9 max-w-4xl">
            <!-- Header -->
            <div class="mb-12">
              <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span class="px-3 py-1 rounded-full font-medium bg-[#6541f8]/10 text-[#6541f8]">
                  {{ post.category }}
                </span>
                <span>{{ formatDate(post.date) }}</span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{{ readingTime }} 分钟阅读</span>
              </div>

              <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                {{ post.title }}
              </h1>

              <p class="text-xl text-gray-500 leading-relaxed font-light">
                {{ post.description }}
              </p>
            </div>

            <!-- Featured Image -->
            <div v-if="post.image" class="mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img :src="post.image" :alt="post.title" class="w-full h-auto" />
            </div>

            <!-- Content -->
            <div class="prose prose-lg prose-indigo max-w-none prose-headings:scroll-mt-32">
              <ContentRenderer :value="post" />
            </div>

            <!-- Tags & Share -->
            <div class="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100">
                  #{{ tag }}
                </span>
              </div>

              <div class="flex items-center gap-4">
                <span class="text-gray-500 font-medium text-sm">分享文章</span>
                <div class="flex gap-2">
                  <button class="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-all">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button class="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#0077B5] hover:text-white transition-all">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Related Posts -->
      <div class="bg-gray-50 mt-24 py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">相关文章推荐</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <NuxtLink
                v-for="related in relatedPosts"
                :key="related.path"
                :to="related.path"
                class="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div class="text-sm text-[#6541f8] font-medium mb-2">{{ related.category }}</div>
                <h4 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{{ related.title }}</h4>
                <p class="text-gray-500 text-sm line-clamp-2">{{ related.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">文章未找到</h1>
        <NuxtLink to="/blog" class="text-[#6541f8] hover:underline">返回博客首页</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Fetch Post
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const activeId = ref('')

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

const readingTime = computed(() => {
  if (!post.value?.body) return 1
  const text = JSON.stringify(post.value.body)
  const words = text.length
  const wordsPerMinute = 500 // Chinese reading speed
  return Math.ceil(words / wordsPerMinute)
})

// Scroll Progress
const scrollProgress = ref(0)
const updateScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

// SEO
if (post.value) {
  useSeoMeta({
    title: `${post.value.title} - BuidAI 博客`,
    description: post.value.description,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogImage: post.value.image
  })
}

// Related Posts (Simple implementation based on category)
const { data: relatedPosts } = await useAsyncData('related-' + route.path, () => {
  if (!post.value) return Promise.resolve([])
  return queryCollection('blog')
    .where('category', '=', post.value.category)
    .where('path', '<>', route.path)
    .limit(3)
    .all()
})

const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped lang="postcss">
/* Custom Prose Styles for better readability */
:deep(.prose h2) {
  @apply text-2xl font-bold text-gray-900 mt-12 mb-6;
}
:deep(.prose h3) {
  @apply text-xl font-bold text-gray-900 mt-8 mb-4;
}
:deep(.prose p) {
  @apply text-gray-600 leading-8 mb-6;
}
:deep(.prose ul) {
  @apply list-disc list-outside ml-6 mb-6 text-gray-600;
}
:deep(.prose pre) {
  @apply bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-8;
}
:deep(.prose code) {
  @apply text-[#6541f8] bg-[#6541f8]/5 px-1.5 py-0.5 rounded text-sm font-mono;
}
:deep(.prose pre code) {
  @apply text-inherit bg-transparent p-0;
}
:deep(.prose blockquote) {
  @apply border-l-4 border-[#6541f8] pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg;
}
</style>
