<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-gray-500">Redirecting to documentation...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('docs-nav-root', () => {
  return queryCollectionNavigation('docs')
})

onMounted(() => {
  if (navigation.value && navigation.value.length > 0) {
    const firstItem = navigation.value[0]
    // 如果第一个项目有子项，导航到第一个子项
    if (firstItem.children && firstItem.children.length > 0) {
      navigateTo(firstItem.children[0].path)
    } else {
      navigateTo(firstItem.path)
    }
  } else {
    // Fallback if no docs found
    navigateTo('/')
  }
})
</script>
