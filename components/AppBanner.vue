<template>
  <UBanner
    id="sora2-banner"
    color="primary"
    icon="i-ph-video"
    title="Sora2短剧创作-25秒高质量视频."
    to="#"
    target="_blank"
    :close="true"
  />
</template>

<script setup lang="ts">
// 每次刷新页面时清除 banner 的关闭状态，确保其总是显示
if (import.meta.client) {
  try {
    localStorage.removeItem('banner-sora2-banner')
  } catch (e) {
    // 忽略可能的存储访问错误
  }
}
</script>
