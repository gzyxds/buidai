<script setup lang="ts">
/**
 * 解决方案页面
 * 组装 Hero、特征网格、场景展示、快速入门、卖点、FAQ 与底部 CTA 区块
 */
// 设置页面布局
definePageMeta({
  layout: 'default'
})

// SEO 元数据配置
useSeoMeta({
  title: '智言AI - 全能AI办公空间 | AI PPT、AI写作、AI设计、AI编程',
  description: '智言AI旗下新一代AI办公平台，集成AI PPT生成、深度写作、智能设计、AI编程及数据分析等功能。让创作与协作更高效，释放你的职场生产力。',
  keywords: '智言AI, AI办公, AI PPT, AI写作, AI设计, AI编程, 智能办公, 自动化办公, AI工具, 效率工具',
  ogTitle: '智言AI - 全能AI办公空间 | AI PPT、AI写作、AI设计、AI编程',
  ogDescription: '智言AI旗下新一代AI办公平台，集成AI PPT生成、深度写作、智能设计、AI编程及数据分析等功能。让创作与协作更高效，释放你的职场生产力。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen bg-[#F3F4F6] font-sans selection:bg-[var(--brand-primary)] selection:text-white">
    <SolutionsHero />
    <SolutionsFeatureGrid />
    <SolutionsShowcase />
    <SolutionsQuickStart />
    <SolutionsSellingPoints />
    <SolutionsFaq />
    <SolutionsCta />
  </div>
</template>
