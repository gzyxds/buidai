<template>
  <header
    class="sticky top-0 inset-x-0 z-50 transition-all duration-300 border-b"
    :class="headerClasses"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Left: Logo -->
        <div class="flex items-center gap-10 flex-1">
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
            <img
              :src="isTransparent ? '/logo.svg' : '/logo-full.svg'"
              alt="BuidAI"
              width="120"
              height="32"
              class="h-8 w-auto object-contain"
            />
          </NuxtLink>

          <!-- Center: Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1">
            <UNavigationMenu
              highlight
              highlight-color="primary"
              orientation="horizontal"
              :items="items"
              :ui="navigationMenuUi"
              class="justify-center data-[orientation=horizontal]:border-b border-transparent"
            />
          </nav>
        </div>

        <!-- Right: Actions & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            to="/docs"
            class="h-10 px-6 rounded-full text-[15px] font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            :class="isTransparent ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'"
          >
            <BookOpenIcon class="w-4 h-4" />
            文档中心
          </NuxtLink>
          <NuxtLink
            to="https://cloud.buidai.com/login"
            target="_blank"
            rel="noopener noreferrer"
            class="h-10 px-6 rounded-full text-[15px] font-medium transition-all duration-200 flex items-center justify-center gap-2"
            :class="isTransparent ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-black text-white hover:bg-gray-800'"
          >
            <ArrowRightOnRectangleIcon class="w-4 h-4" />
            登录必定
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors duration-200"
          :class="isTransparent ? 'text-white/80 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          aria-controls="mobile-menu-panel"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="mobileMenuOpen"
        id="mobile-menu-panel"
        class="md:hidden absolute top-full left-0 right-0 border-t border-gray-200 bg-white shadow-xl h-[calc(100dvh-72px)] overflow-y-auto pb-[env(safe-area-inset-bottom)]"
      >
        <div class="flex flex-col space-y-4 p-4">
          <UNavigationMenu
            orientation="vertical"
            :items="items"
            :ui="mobileNavigationMenuUi"
            class="w-full"
          />

          <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
            <NuxtLink
              to="/docs"
              class="flex-1 h-12 rounded-xl text-base font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 leading-relaxed"
            >
              <BookOpenIcon class="w-5 h-5" />
              文档中心
            </NuxtLink>
            <NuxtLink
              to="https://cloud.buidai.com/login"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 h-12 rounded-xl bg-black text-white text-base font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 leading-relaxed"
            >
              <ArrowRightOnRectangleIcon class="w-5 h-5" />
              登录必定
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon, BookOpenIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation Configuration for UNavigationMenu
const items = computed<NavigationMenuItem[][]>(() => [
  [
    { label: '首页', to: '/', icon: 'i-lucide-house' },
    { label: 'BuidAI', to: '/agent', icon: 'i-lucide-bot' },
    {
      label: '必定空间',
      icon: 'i-lucide-box',
      children: [
        {
          label: '解决方案',
          description: '探索 BuidAI 的行业解决方案',
          icon: 'i-lucide-lightbulb',
          to: '/solutions'
        },
        {
          label: '应用中心',
          description: '丰富的 AI 应用插件',
          icon: 'i-lucide-grid',
          to: '/plugin'
        }
      ]
    },
    { label: '产品定价', to: '/pricing', icon: 'i-lucide-tag' },
    {
      label: '资源中心',
      icon: 'i-lucide-library',
      children: [
        {
          label: '更新日志',
          description: '查看产品最新动态',
          icon: 'i-lucide-history',
          to: '/changelog'
        },
        {
          label: '技术博客',
          description: '深入了解 AI 技术与实践',
          icon: 'i-lucide-newspaper',
          to: '/blog'
        },
        {
          label: '文档中心',
          description: '详细的使用指南和开发文档',
          icon: 'i-lucide-book-open',
          to: '/docs'
        },
        {
          label: '资源下载',
          description: '获取设计资源和开发工具',
          icon: 'i-lucide-download',
          to: '/resources'
        }
      ]
    }
  ]
])

// Removed unused mobileItems

// Computed States
const isHome = computed(() => false)
const isTransparent = computed(() => false)

const headerClasses = computed(() => 'bg-white border-black/5')

// UI Config for UNavigationMenu to match previous styles
const navigationMenuUi = computed(() => ({
  link: isTransparent.value
    ? 'text-base text-white/80 hover:text-white hover:bg-white/10 font-medium rounded-lg'
    : 'text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg',
  linkActive: isTransparent.value
    ? 'text-white font-bold bg-white/10 rounded-lg'
    : 'text-ui-primary font-bold bg-ui-primary-weak rounded-lg',
  linkLeadingIcon: isTransparent.value
    ? 'text-white/60 group-hover:text-white'
    : 'text-gray-400 group-hover:text-gray-500 group-[.router-link-active]:text-black dark:group-[.router-link-active]:text-white',
  childLinkDescription: 'text-xs text-gray-500'
}))

// Dedicated Mobile UI Config for cleaner look and larger touch targets
const mobileNavigationMenuUi = computed(() => ({
  link: 'text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg px-3 py-3 min-h-[48px] flex items-center leading-relaxed',
  linkActive: 'text-ui-primary font-bold bg-ui-primary-weak rounded-lg px-3 py-3 min-h-[48px] flex items-center',
  linkLeadingIcon: 'text-gray-400 group-hover:text-gray-500 group-[.router-link-active]:text-black dark:group-[.router-link-active]:text-white w-5 h-5 mr-3',
  childLinkDescription: 'text-sm text-gray-500 mt-1'
}))

// Helper Functions
// getMobileItemClass removed as it's no longer used

// Optimized Scroll Handler
let ticking = false
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > 10
      if (isScrolled.value !== scrolled) {
        isScrolled.value = scrolled
      }
      ticking = false
    })
    ticking = true
  }
}

// Lifecycle Hooks
onMounted(() => {})

onUnmounted(() => {})

// Route Watcher
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
watch(mobileMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>
