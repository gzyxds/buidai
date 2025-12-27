<template>
  <div class="min-h-screen bg-white pb-24">
    <!-- 进度条 -->
    <div class="fixed top-0 left-0 h-1 bg-primary-600 z-50 transition-all duration-300" :style="{ width: `${scrollProgress}%` }"></div>

    <div class="container mx-auto px-4 pt-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- 主要内容区域 (左侧/中间) -->
        <main class="lg:col-span-8">
          <!-- 面包屑导航 -->
          <nav class="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
            <NuxtLink to="/" class="hover:text-primary-600 transition-colors">首页</NuxtLink>
            <span class="mx-2 text-gray-300">/</span>
            <NuxtLink to="/blog" class="hover:text-primary-600 transition-colors flex items-center gap-1">
              <BookOpenIcon class="w-4 h-4" />
              技术博客
            </NuxtLink>
            <span class="mx-2 text-gray-300">/</span>
            <span class="text-gray-900 font-medium truncate" v-if="post">{{ post.title }}</span>
          </nav>

          <article v-if="post">
            <!-- 文章头部 Header -->
            <header class="mb-10 border-b border-gray-100 pb-10">
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-600 border border-primary-500/20">
                  {{ post.category }}
                </span>
                <time class="text-sm text-gray-500 flex items-center gap-1">
                  <CalendarIcon class="w-4 h-4" />
                  {{ formatDate(post.date) }}
                </time>
                <span class="text-gray-300">|</span>
                <span class="text-sm text-gray-500 flex items-center gap-1">
                  <ClockIcon class="w-4 h-4" />
                  {{ readingTime }} 分钟阅读
                </span>
              </div>

              <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                {{ post.title }}
              </h1>

              <p class="text-xl text-gray-500 leading-relaxed font-light mb-8">
                {{ post.description }}
              </p>

              <!-- 作者信息 (模拟/预留) -->
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                   <UserIcon class="w-6 h-6" />
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-900">BuidAI Team</div>
                  <div class="text-gray-500">@buidai_official</div>
                </div>
              </div>
            </header>

            <!-- 特色图片 -->
            <div v-if="post.image" class="mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img :src="post.image" :alt="post.title" class="w-full h-auto object-cover" />
            </div>

            <!-- 文章内容 Body -->
            <div class="prose prose-lg prose-indigo max-w-none prose-headings:scroll-mt-32">
              <ContentRenderer :value="post" />
            </div>

            <!-- 底部操作栏 Footer -->
            <div class="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <NuxtLink
                to="/blog"
                class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeftIcon class="w-4 h-4 mr-2" />
                返回博客列表
              </NuxtLink>

              <div class="flex items-center gap-3">
                <button
                  @click="copyLink"
                  class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  :class="copied ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'"
                >
                  <component :is="copied ? CheckIcon : LinkIcon" class="w-4 h-4 mr-2" />
                  {{ copied ? '已复制链接' : '复制链接' }}
                </button>
              </div>
            </div>

            <!-- 上一篇/下一篇导航 (Surround) -->
            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" v-if="surround">
              <!-- 下一篇 (时间上是旧的，但在列表逻辑中 usually Prev/Next depends on sort. Let's say Prev is newer, Next is older or vice versa. Here we map explicitly) -->
              <!-- 实际上 queryCollection 排序通常是 DESC (最新的在前)。
                   所以 index - 1 是更新的文章 (Previous in list, Newer in time)
                   index + 1 是更旧的文章 (Next in list, Older in time)
                   通常博客底部 "Previous Post" 指的是 "上一篇你可能想看的旧文章" 还是 "列表里的上一篇"?
                   习惯上: 左边放 "Newer/上一篇", 右边放 "Older/下一篇"。或者反过来。
                   这里我们根据 surround 数据来渲染。
              -->

              <NuxtLink
                v-if="surround.newer"
                :to="surround.newer.path"
                class="group p-6 rounded-xl border border-gray-200 hover:border-primary-500/30 hover:shadow-md transition-all text-left block"
              >
                <div class="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <ArrowLeftIcon class="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  上一篇
                </div>
                <div class="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {{ surround.newer.title }}
                </div>
              </NuxtLink>
              <div v-else class="hidden md:block"></div> <!-- 占位 -->

              <NuxtLink
                v-if="surround.older"
                :to="surround.older.path"
                class="group p-6 rounded-xl border border-gray-200 hover:border-primary-500/30 hover:shadow-md transition-all text-right block"
              >
                <div class="text-xs text-gray-500 mb-2 flex items-center gap-1 justify-end">
                  下一篇
                  <ArrowRightIcon class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div class="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {{ surround.older.title }}
                </div>
              </NuxtLink>
            </div>

          </article>

          <div v-else class="py-20 text-center">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">文章未找到</h1>
            <NuxtLink to="/blog" class="text-primary-600 hover:underline">返回博客首页</NuxtLink>
          </div>
        </main>

        <!-- 右侧边栏 (TOC) -->
        <aside class="hidden lg:block lg:col-span-4 pl-8">
          <div class="sticky top-32">
            <div class="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 backdrop-blur-sm">
              <div class="flex items-center gap-2 text-gray-900 font-bold mb-6">
                <ListBulletIcon class="w-5 h-5 text-primary-600" />
                目录导航
              </div>

              <nav v-if="post?.body?.toc?.links?.length" class="space-y-1 relative">
                <!-- 激活指示条 (可选) -->
                <!-- <div class="absolute left-0 w-0.5 bg-primary-600 transition-all duration-300" :style="{ top: activeTop + 'px', height: activeHeight + 'px' }"></div> -->

                <div v-for="link in post.body.toc.links" :key="link.id">
                  <a
                    :href="`#${link.id}`"
                    class="block py-1.5 px-3 text-sm rounded-lg transition-colors duration-200"
                    :class="activeId === link.id ? 'bg-primary-500/10 text-primary-600 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
                    @click.prevent="scrollToHeading(link.id)"
                  >
                    {{ link.text }}
                  </a>
                  <div v-if="link.children" class="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
                    <a
                      v-for="child in link.children"
                      :key="child.id"
                      :href="`#${child.id}`"
                      class="block py-1 text-xs transition-colors duration-200"
                      :class="activeId === child.id ? 'text-primary-600 font-medium' : 'text-gray-500 hover:text-gray-900'"
                      @click.prevent="scrollToHeading(child.id)"
                    >
                      {{ child.text }}
                    </a>
                  </div>
                </div>
              </nav>
              <div v-else class="text-sm text-gray-400 italic">
                暂无目录
              </div>

              <!-- 右侧底部二维码 -->
              <div class="mt-8 pt-6 border-t border-gray-200/60">
                <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">关注我们</div>
                <div class="grid grid-cols-3 gap-3">
                  <!-- 微信公众号二维码 -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
                      <img src="/qrcode.png" alt="微信公众号" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-xs text-gray-500 text-center leading-tight">微信公众号</span>
                  </div>
                  <!-- 微信客服二维码 -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
                      <img src="/qrcode.png" alt="微信客服" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-xs text-gray-500 text-center leading-tight">微信客服</span>
                  </div>
                  <!-- 微信交流群二维码 -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden mb-2">
                      <img src="/qrcode.png" alt="微信交流群" class="w-full h-full object-cover" />
                    </div>
                    <span class="text-xs text-gray-500 text-center leading-tight">微信交流群</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkIcon,
  CheckIcon,
  BookOpenIcon,
  ListBulletIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()

// Fetch Post
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

// Fetch Surround (Older/Newer posts)
// 手动实现 Surround 逻辑：获取所有文章的简要信息，然后计算相邻
const { data: surround } = await useAsyncData(`surround-${route.path}`, async () => {
  const allPosts = await queryCollection('blog')
    .order('date', 'DESC')
    .select('title', 'path', 'date')
    .all()

  const currentIndex = allPosts.findIndex(p => p.path === route.path)
  if (currentIndex === -1) return null

  return {
    newer: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    older: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  }
})

const activeId = ref('')
const copied = ref(false)

// Scroll Handling
const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100 // 头部偏移量
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    // Update URL hash without jumping
    history.pushState(null, '', `#${id}`)
    activeId.value = id
  }
}

// Copy Link
const copyLink = () => {
  const url = window.location.href
  navigator.clipboard.writeText(url).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
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
  @apply text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-32;
}

:deep(.prose h3) {
  @apply text-xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-32;
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
  @apply text-primary-600 bg-primary-500/5 px-1.5 py-0.5 rounded text-sm font-mono;
}

:deep(.prose pre code) {
  @apply text-inherit bg-transparent p-0;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-primary-500 pl-6 italic text-gray-700 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg;
}
</style>
