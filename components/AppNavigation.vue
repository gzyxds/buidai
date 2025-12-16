<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-transparent transition-colors duration-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5">
          <img src="/logo.svg" alt="BuidAI" class="h-8 w-auto" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 mr-auto ml-12">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="text-sm text-[#737373] hover:text-white font-medium transition-colors duration-200"
            :class="{ 'text-white': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right side buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="text-sm text-[#737373] hover:text-white font-medium px-4 py-2">
            登录
          </button>
          <button class="text-sm bg-primary-600 text-white px-4 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
            免费使用
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-white/80 hover:bg-white/10"
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
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.href"
              :to="item.href"
              @click="mobileMenuOpen = false"
              class="text-sm text-[#737373] hover:text-white font-medium py-2 transition-colors duration-200"
              :class="{ 'text-white': $route.path === item.href }"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button class="btn-secondary w-full">
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
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const navigation = [
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
