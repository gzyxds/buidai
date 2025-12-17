<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      (isHome && !isScrolled)
        ? 'bg-transparent border-b border-transparent'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg'
    ]"
    :style="isScrolled ? 'border-bottom: 0.5px solid rgba(0, 0, 0, 0.1)' : ''"
  >
    <div class="w-full px-6">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Left Section: Logo + Nav -->
        <div class="flex items-center gap-10">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
            <img
              :src="(isHome && !isScrolled) ? '/logo.svg' : '/logo-full.svg'"
              alt="BuidAI"
              class="h-8 w-auto"
            />
          </NuxtLink>

          <!-- 桌面导航 -->
          <div class="hidden md:flex items-center gap-1">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              class="h-9 px-4 rounded-full text-[16px] font-normal flex items-center justify-center transition-all duration-200"
              :class="[
                (isHome && !isScrolled)
                  ? ($route.path === item.href ? 'text-white font-medium' : 'text-white/80 hover:text-white hover:bg-white/10')
                  : ($route.path === item.href ? 'text-[#080d1ee6] font-medium' : 'text-gray-600 hover:text-[#080d1ee6] hover:bg-indigo-50')
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- 右侧按钮 -->
        <div class="hidden md:flex items-center gap-3">
          <button
            class="h-10 px-6 rounded-full text-[15px] font-normal transition-colors duration-200 outline-none flex items-center justify-center"
            :class="[
              (isHome && !isScrolled)
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100'
            ]"
          >
            文档中心
          </button>
          <div>
            <button
              class="h-10 px-6 rounded-full text-[15px] font-normal leading-none pt-[2px] transition-all duration-200 outline-none flex items-center justify-center"
              :class="[
                (isHome && !isScrolled)
                  ? 'bg-white text-gray-900 hover:bg-gray-50'
                  : 'bg-[#1e2129] text-white hover:bg-[#2c2f3a]'
              ]"
            >
              登录必定
            </button>
          </div>
        </div>

        <!-- 移动菜单按钮 -->
        <div class="md:hidden flex items-center space-x-2">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg transition-colors duration-200"
            :class="[
              (isHome && !isScrolled)
                ? 'text-white/80 hover:bg-white/10'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- 移动导航菜单 -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t py-4"
          :class="[
            (isHome && !isScrolled)
              ? 'border-white/10 bg-black/90 backdrop-blur-xl'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
          ]"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="text-sm font-medium py-2 transition-colors duration-200"
              :class="[
                (isHome && !isScrolled)
                  ? ($route.path === item.href ? 'text-white' : 'text-[#737373] hover:text-white')
                  : ($route.path === item.href ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400')
              ]"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="flex flex-col space-y-3 pt-4 border-t" :class="(isHome && !isScrolled) ? 'border-white/10' : 'border-gray-200 dark:border-gray-700'">
              <button class="btn-secondary w-full" :class="(isHome && !isScrolled) ? 'text-white' : ''">
                Log In
              </button>
              <button class="btn-primary w-full">
                Start Vibing
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const isHome = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial scroll position
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { name: '首页', href: '/' },
  { name: '应用中心', href: '/plugin' },
  { name: 'BuidAI', href: '/agent' },
  { name: '必定空间', href: '/solutions' },
  { name: '产品定价', href: '/pricing' },
  { name: '资源中心', href: '/resources' },
]

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.start-btn {
  background: linear-gradient(180deg, #f9bdfd, #80b8ff);
  color: #122f6d;
  width: 6rem;
  font-size: 0.85em;
  height: 2.2rem;
}
</style>
