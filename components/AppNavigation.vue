<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      (isHome && !isScrolled)
        ? 'bg-transparent border-b border-transparent'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <img
            :src="(isHome && !isScrolled) ? '/logo.svg' : '/logo-full.svg'"
            alt="BuidAI"
            class="h-8 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 mr-auto ml-12">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="text-sm font-medium transition-colors duration-200"
            :class="[
              (isHome && !isScrolled)
                ? ($route.path === item.href ? 'text-white' : 'text-[#737373] hover:text-white')
                : ($route.path === item.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400')
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right side buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button
            class="text-sm font-medium px-4 py-2 transition-colors duration-200"
            :class="[
              (isHome && !isScrolled)
                ? 'text-[#737373] hover:text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
            ]"
          >
            登录
          </button>
          <button class="justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center gap-3 px-6 py-4 shadow-lg start-btn">
            免费使用
          </button>
        </div>

        <!-- Mobile menu button -->
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

      <!-- Mobile Navigation Menu -->
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
  { name: '应用市场', href: '/plugin' },
  { name: '产品', href: '/features' },
  { name: '解决方案', href: '/solutions' },
  { name: '定价', href: '/pricing' },
  { name: '资源', href: '/resources' },
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
