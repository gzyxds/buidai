<template>
  <div class="flex items-start space-x-4">
    <div class="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <SparklesIcon class="w-3 h-3 text-white" />
    </div>
    <div>
      <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ title }}</h4>
      <p class="text-gray-600 dark:text-gray-300 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SparklesIcon } from '@heroicons/vue/24/solid'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

