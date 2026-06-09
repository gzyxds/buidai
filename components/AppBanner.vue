<template>
  <UBanner
    id="sora2-banner"
    color="neutral"
    icon="i-ph-video"
    title="🎉seedance 2.0视频应用上线 | 点击体验"
    to="https://www.cnai.art/seedance"
    target="_blank"
    :close="true"
  />
</template>

<script setup lang="ts">
// 每次刷新页面时清除 banner 的关闭状态，确保其总是显示
if (import.meta.client) {
  try {
    localStorage.removeItem('banner-sora2-banner')
  } catch {
    // 忽略可能的存储访问错误
  }
}
</script>
