<template>
  <div class="card card-hover p-6 text-center">
    <div class="flex justify-center mb-4">
      <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
        <component :is="icon" class="w-6 h-6 text-white" />
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
