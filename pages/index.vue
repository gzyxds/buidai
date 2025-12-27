<template>
  <div class="bg-white min-h-screen">
    <LandingHeroSection />
    <LandingFeatureCarousel />
    <LandingValueProps />
    <LandingScenarioSection />
    <LandingProductFeatures />
    <LandingProductDesign />
    <LandingCallToAction />
    <LandingAIArsenal />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '必定AI - BuidAI新一代AI一站式创意生产力平台',
  description: '必定AI - BuidAI新一代AI一站式创意生产力平台，为您提供全方位的智能创作服务。从AI对话、AI绘画、AI视频到知识库查询、模型管理，再到文件导入导出、网页解析、内容总结、图表生成等强大功能，满足您在创意工作中的各种需求。更有AI配音工具、艺术二维码、PDF解析工具、图文解析、文档问答、豆包文生图、AI改图、图像识别、网页速读、快递查询、天气查询以及爆款文章生成等特色功能，助力您高效创作，提升生产力，开启智能创意新时代',
  keywords: '必定AI, BuidAI, AI创意生产力平台, 智能体,香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成',
  ogTitle: '必定AI - BuidAI新一代AI一站式创意生产力平台',
  ogDescription: '必定AI - BuidAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。',
  ogType: 'website'
})
</script>
