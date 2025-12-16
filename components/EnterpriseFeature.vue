<template>
  <div class="text-center">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
        <component :is="icon" class="w-8 h-8 text-gray-700 dark:text-gray-300" />
      </div>
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
  icon: any
  title: string
  description: string
}

defineProps<Props>()
</script>
