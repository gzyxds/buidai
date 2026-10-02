<template>
  <div class="bg-white min-h-screen">
    <LandingHeroSection />
    <LandingProductShowcase />
    <LandingFeatureCarousel />
    <LandingValueProps />
    <LandingScenarioSection />
    <LandingProductFeatures />
    <LandingProductDesign />
    <LandingUserReviews />
    <LandingFAQ />
    <LandingCallToAction />
    <LandingAIArsenal />
    <LandingCtaSection />
  </div>
</template>

<script setup lang="ts">
import { SITE_TITLE, SITE_DESCRIPTION } from '~/data/site'
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: SITE_TITLE,
  description:
    SITE_DESCRIPTION,
  keywords:
    '智言AI,智言万象,AI创意生产力平台,智能体,香蕉绘画Nanobanana,AI绘画,AI视频,AI对话,Sora2,知识库,内容总结,PDF解析工具,文档问答,爆款文章生成',
  ogTitle: SITE_TITLE,
  ogDescription:
    SITE_DESCRIPTION,
  ogType: 'website'
})
</script>
