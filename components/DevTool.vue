<template>
  <div class="card card-hover p-8">
    <div class="flex items-center mb-6">
      <div 
        class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
        :class="`bg-gradient-to-r ${gradient}`"
      >
        <CommandLineIcon class="w-6 h-6 text-white" />
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ title }}</h3>
    </div>
    
    <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
      {{ description }}
    </p>
    
    <ul class="space-y-3">
      <li 
        v-for="feature in features" 
        :key="feature"
        class="flex items-center text-gray-600 dark:text-gray-300"
      >
        <CheckIcon class="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
        <span class="text-sm">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CommandLineIcon, CheckIcon } from '@heroicons/vue/24/outline'

interface Props {
  title: string
  description: string
  features: string[]
  gradient: string
}

defineProps<Props>()
</script>
