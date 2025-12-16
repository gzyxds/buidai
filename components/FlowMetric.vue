<template>
  <div class="glass-effect rounded-xl p-6 text-center text-white">
    <div class="text-2xl mb-2">{{ icon }}</div>
    <div class="text-3xl font-bold mb-2">{{ value }}</div>
    <div class="text-purple-200 font-medium mb-1">{{ label }}</div>
    <div class="text-purple-100 text-sm">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  value: string
  label: string
  description: string
}

defineProps<Props>()
</script>

