<template>
  <header
    class="sticky top-0 inset-x-0 z-50 transition-all duration-300 border-b"
    :class="headerClasses"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Left: Logo -->
        <div class="flex items-center gap-10 flex-1">
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0" aria-label="BuidAI Home">
            <img
              :src="isTransparent ? '/logo.svg' : '/logo-full.svg'"
              alt="BuidAI Logo"
              width="120"
              height="32"
              class="h-8 w-auto object-contain transition-opacity duration-300"
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
            <UButton
              to="https://doc.buidai.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              color="neutral"
              class="h-10 rounded-full px-4 sm:px-6 font-medium transition-colors duration-200"
              :class="[isTransparent ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50']"
            >
              <template #leading>
                <BookOpenIcon class="w-4 h-4" />
              </template>
              文档中心
            </UButton>

            <UButton
              to="https://cloud.buidai.com/login"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              color="neutral"
              class="h-10 rounded-full px-4 sm:px-6 font-medium transition-all duration-200"
              :class="[isTransparent ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-black text-white hover:bg-gray-800']"
            >
              <template #leading>
                <ArrowRightOnRectangleIcon class="w-4 h-4" />
              </template>
              登录必定
            </UButton>
          </div>

          <!-- Mobile Menu Toggle -->
          <UButton
            class="md:hidden"
            variant="ghost"
            color="neutral"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="isTransparent ? 'text-white/80 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </UButton>
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
            <UButton
              to="https://doc.buidai.com/"
              target="_blank"
              rel="noopener noreferrer"
              block
              color="neutral"
              variant="ghost"
              class="flex-1 h-12 rounded-xl text-base font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all leading-relaxed justify-center"
            >
              <template #leading>
                <BookOpenIcon class="w-5 h-5" />
              </template>
              文档中心
            </UButton>

            <UButton
              to="https://cloud.buidai.com/login"
              target="_blank"
              rel="noopener noreferrer"
              block
              color="neutral"
              variant="ghost"
              class="flex-1 h-12 rounded-xl bg-black text-white text-base font-medium hover:bg-gray-800 active:scale-[0.98] transition-all leading-relaxed justify-center"
            >
              <template #leading>
                <ArrowRightOnRectangleIcon class="w-5 h-5" />
              </template>
              登录必定
            </UButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon, BookOpenIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
import type { NavigationMenuItem } from '@nuxt/ui'
import { SCROLL } from '~/utils/ui'

/**
 * AppNavigation Component
 *
 * Main header navigation for the application.
 * Features:
 * - Responsive design (Desktop/Mobile)
 * - Transparent/Solid background states based on scroll or route
 * - Mobile menu toggle with transition
 * - Integrated Nuxt UI components
 */

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation Items Configuration
// Uses nested arrays for grouping if needed, or simple array
const items = computed<NavigationMenuItem[][]>(() => [
  [
    { label: '首页', to: '/', icon: 'i-lucide-house' },
    { label: '必定AI', to: '/agent', icon: 'i-lucide-bot' },
    { label: '私有部署', to: '/buidai', icon: 'i-lucide-server' },
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
    { label: '定价方案', to: '/pricing', icon: 'i-lucide-tag' },
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

/**
 * Computed state for transparency.
 * Currently defaults to false, but can be extended to check route meta or scroll position.
 */
const isTransparent = computed(() => {
  // Example: return route.path === '/' && !isScrolled.value
  return false
})

/**
 * Dynamic header classes based on transparency and scroll state.
 */
const headerClasses = computed(() => {
  if (isTransparent.value) {
    return isScrolled.value ? 'bg-white/90 backdrop-blur-md border-gray-200/50' : 'bg-transparent border-transparent'
  }
  return 'bg-white border-gray-100' // Enterprise clean look
})

/**
 * UI Configuration for Desktop Navigation Menu
 * Adapts to transparent/solid states.
 */
const navigationMenuUi = computed(() => ({
  link: isTransparent.value
    ? 'text-base text-white/80 hover:text-white hover:bg-white/10 font-medium rounded-lg px-3 py-2'
    : 'text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg px-3 py-2',
  linkActive: isTransparent.value
    ? 'text-white font-bold bg-white/10 rounded-lg'
    : 'text-primary font-bold bg-primary-50 text-primary-600 rounded-lg',
  linkLeadingIcon: isTransparent.value
    ? 'text-white/60 group-hover:text-white'
    : 'text-gray-400 group-hover:text-gray-500 group-[.router-link-active]:text-primary-600',
  childLinkDescription: 'text-xs text-gray-500'
}))

/**
 * UI Configuration for Mobile Navigation Menu
 * Larger touch targets and cleaner spacing.
 */
const mobileNavigationMenuUi = computed(() => ({
  link: 'text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg px-3 py-3 min-h-[48px] flex items-center leading-relaxed',
  linkActive: 'text-primary-600 font-bold bg-primary-50 rounded-lg px-3 py-3 min-h-[48px] flex items-center',
  linkLeadingIcon: 'text-gray-400 group-hover:text-gray-500 group-[.router-link-active]:text-primary-600 w-5 h-5 mr-3',
  childLinkDescription: 'text-sm text-gray-500 mt-1'
}))

// --- Scroll Handling ---

let ticking = false
/**
 * Optimized scroll handler using requestAnimationFrame
 */
const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY > SCROLL.THRESHOLD
      if (isScrolled.value !== scrolled) {
        isScrolled.value = scrolled
      }
      ticking = false
    })
    ticking = true
  }
}

// --- Lifecycle & Watchers ---

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Lock body scroll when mobile menu is open
watch(mobileMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>
