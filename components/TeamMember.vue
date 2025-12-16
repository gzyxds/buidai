<template>
  <div class="card card-hover p-6 text-center">
    <div class="flex justify-center mb-4">
      <img 
        :src="avatar" 
        :alt="name"
        class="w-20 h-20 rounded-full object-cover border-4 border-gray-100 dark:border-gray-700"
      />
    </div>
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
      {{ name }}
    </h3>
    <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">
      {{ role }}
    </p>
    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  role: string
  description: string
  avatar: string
}

defineProps<Props>()
</script>
