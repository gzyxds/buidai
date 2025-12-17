<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b"
    :class="headerClasses"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Left: Logo -->
        <div class="flex items-center gap-10">
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
            <NuxtLink
              v-for="item in items"
              :key="item.to"
              :to="item.to"
              class="h-9 px-4 rounded-full text-[15px] font-medium flex items-center justify-center transition-all duration-200"
              :class="getItemClass(item)"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Right: Actions & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <!-- Desktop Actions -->
          <div class="hidden md:flex items-center gap-3">
            <NuxtLink
              to="/docs"
              class="h-10 px-6 rounded-full text-[15px] font-medium transition-colors duration-200 flex items-center justify-center"
              :class="isTransparent ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100'"
            >
              文档中心
            </NuxtLink>
            <NuxtLink
              to="https://cloud.buidai.com/login"
              target="_blank"
              class="h-10 px-6 rounded-full text-[15px] font-medium transition-all duration-200 flex items-center justify-center"
              :class="isTransparent ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-[#1e2129] text-white hover:bg-[#2c2f3a]'"
            >
              登录必定
            </NuxtLink>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            class="md:hidden p-2 rounded-lg transition-colors duration-200"
            :class="isTransparent ? 'text-white/80 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle menu"
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
        class="md:hidden absolute top-full left-0 right-0 border-t py-6 px-6 shadow-xl h-[calc(100vh-72px)] overflow-y-auto"
        :class="isTransparent ? 'border-white/10 bg-black/95 backdrop-blur-xl' : 'border-gray-200 bg-white'"
      >
        <div class="flex flex-col space-y-6">
          <div class="flex flex-col space-y-2">
            <NuxtLink
              v-for="item in items"
              :key="item.to"
              :to="item.to"
              class="text-lg font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-between group min-h-[48px]"
              :class="getMobileItemClass(item)"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
              <span class="text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                 →
              </span>
            </NuxtLink>
          </div>

          <div class="flex flex-col space-y-4 pt-6 border-t" :class="isTransparent ? 'border-white/10' : 'border-gray-100'">
            <NuxtLink
              to="https://cloud.buidai.com/login"
              target="_blank"
              class="w-full h-12 rounded-xl text-base font-medium border active:scale-[0.98] transition-all flex items-center justify-center"
              :class="isTransparent ? 'text-white border-white/20 hover:bg-white/10' : 'text-gray-700 border-gray-200 hover:bg-gray-50'"
            >
              登录必定
            </NuxtLink>
            <button class="w-full h-12 rounded-xl bg-primary-600 text-white text-base font-medium hover:bg-primary-700 active:scale-[0.98] transition-all shadow-lg shadow-primary-600/20">
              立即体验
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// Types
interface NavigationItem {
  label: string
  to: string
  active?: boolean
}

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Navigation Configuration
const items = computed<NavigationItem[]>(() => [
  { label: '首页', to: '/', active: route.path === '/' },
  { label: 'BuidAI', to: '/agent', active: route.path.startsWith('/agent') },
  { label: '必定空间', to: '/solutions', active: route.path.startsWith('/solutions') },
  { label: '应用中心', to: '/plugin', active: route.path.startsWith('/plugin') },
  { label: '产品定价', to: '/pricing', active: route.path.startsWith('/pricing') },
  { label: '资源中心', to: '/resources', active: route.path.startsWith('/resources') }
])

// Computed States
const isHome = computed(() => route.path === '/')
const isTransparent = computed(() => isHome.value && !isScrolled.value)

const headerClasses = computed(() =>
  isTransparent.value
    ? 'bg-transparent border-transparent'
    : 'bg-white/80 backdrop-blur-lg border-black/5 shadow-sm'
)

// Helper Functions
const getItemClass = (item: NavigationItem) => {
  if (isTransparent.value) {
    return item.active ? 'text-white font-bold' : 'text-white/80 hover:text-white hover:bg-white/10'
  }
  return item.active ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
}

const getMobileItemClass = (item: NavigationItem) => {
  if (isTransparent.value) {
    return item.active ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
  }
  return item.active ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
}

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
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  if (window.scrollY > 10) isScrolled.value = true
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Route Watcher
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
