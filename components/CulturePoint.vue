<template>
  <div class="flex items-start space-x-3">
    <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
      <CheckIcon class="w-4 h-4 text-white" />
    </div>
    <div>
      <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ title }}</h4>
      <p class="text-gray-600 dark:text-gray-300 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>
