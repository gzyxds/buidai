<template>
  <div class="bg-white min-h-screen pt-20">
    <AppDownload />
  </div>
</template>

<script setup lang="ts">
/**
 * Download Page
 *
 * 客户端下载页面，展示各平台下载入口
 */

definePageMeta({
  layout: 'default'
})

usePageSeo({
  title: '下载客户端 - 智言AI 智言万象 | Windows, macOS, Linux & 小程序',
  description: '下载 智言万象 客户端，支持 Windows、macOS、Linux 及微信小程序。跨平台无缝协作，体验更流畅的 AI 办公工作流。',
  keywords: '智言万象下载, 智言万象客户端, Windows版, macOS版, Linux版, 微信小程序',
})
</script>
