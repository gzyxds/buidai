<template>
  <div class="card card-hover p-6 text-center group">
    <div class="relative inline-block mb-6">
      <img 
        :src="avatar" 
        :alt="name"
        class="w-24 h-24 rounded-2xl object-cover border-4 border-gray-100 dark:border-gray-700 group-hover:border-primary-200 dark:group-hover:border-primary-600 transition-all duration-300"
      />
      <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-xs font-bold">✨</span>
      </div>
    </div>
    
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
      {{ name }}
    </h3>
    <p class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
      {{ role }}
    </p>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
      {{ bio }}
    </p>
    
    <!-- Social links -->
    <div class="flex justify-center space-x-3">
      <a 
        v-for="(handle, platform) in social" 
        :key="platform"
        :href="getSocialUrl(platform, handle)"
        class="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-lg flex items-center justify-center transition-colors duration-200"
        :title="`${name} on ${platform}`"
      >
        <component :is="getSocialIcon(platform)" class="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  GlobeAltIcon, 
  UserIcon 
} from '@heroicons/vue/24/outline'

interface Props {
  name: string
  role: string
  bio: string
  avatar: string
  social: Record<string, string>
}

defineProps<Props>()

const getSocialIcon = (platform: string) => {
  // For simplicity, using a generic icon
  // In a real app, you'd import specific social icons
  return UserIcon
}

const getSocialUrl = (platform: string, handle: string) => {
  const urls = {
    twitter: `https://twitter.com/${handle.replace('@', '')}`,
    github: `https://github.com/${handle}`,
    linkedin: `https://linkedin.com/in/${handle}`,
    dribbble: `https://dribbble.com/${handle}`
  }
  return urls[platform] || '#'
}
</script>
