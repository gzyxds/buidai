<template>
  <div class="card card-hover p-8 relative group">
    <div v-if="badge" class="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
      {{ badge }}
    </div>
    
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
        <component :is="icon" class="w-8 h-8 text-white" />
      </div>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: any
  title: string
  description: string
  badge?: string
}

defineProps<Props>()
</script>
