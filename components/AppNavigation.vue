<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-200">
    <div class="max-w-7xl mx-auto container-padding">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
            <span class="text-white font-bold text-lg">V</span>
          </div>
          <span class="font-bold text-xl bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Vibe Coding</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.href"
            :to="item.href" 
            class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right side buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <ColorModeButton />
          <button class="btn-secondary">
            Log In
          </button>
          <button class="btn-primary">
            Start Vibing
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <ColorModeButton />
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400': $route.path === item.href }"
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
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
]

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
