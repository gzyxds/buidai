<template>
  <div class="card p-8">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
      {{ description }}
    </p>
    <ul class="space-y-3">
      <li 
        v-for="feature in features" 
        :key="feature"
        class="flex items-center text-gray-600 dark:text-gray-300"
      >
        <CheckIcon class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'

interface Props {
  title: string
  description: string
  features: string[]
}

defineProps<Props>()
</script>
