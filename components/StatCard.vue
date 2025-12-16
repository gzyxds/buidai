<template>
  <div class="text-center">
    <div class="text-4xl sm:text-5xl font-bold gradient-text mb-2">
      {{ number }}
    </div>
    <div class="text-gray-600 dark:text-gray-300 font-medium">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: string
  label: string
}

defineProps<Props>()
</script>
