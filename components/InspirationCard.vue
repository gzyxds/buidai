<template>
  <div class="card card-hover p-6 text-center group">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-800 dark:to-accent-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span class="text-2xl">🎨</span>
      </div>
    </div>
    
    <div class="inline-block bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-xs font-medium px-2 py-1 rounded-full mb-3">
      {{ type }}
    </div>
    
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  type: string
}

defineProps<Props>()
</script>

