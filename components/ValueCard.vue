<template>
  <div class="card card-hover p-8 text-center">
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
        <component :is="icon" class="w-8 h-8 text-white" />
      </div>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
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
