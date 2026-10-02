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
import { SITE_DESCRIPTION } from '~/data/site'
definePageMeta({})

usePageSeo({
  // 首页不设 title：由 app.vue 的 titleTemplate 回退为完整站点标题 SITE_TITLE
  description: SITE_DESCRIPTION,
  keywords: '智言AI,智言万象,AI创意生产力平台,智能体,香蕉绘画Nanobanana,AI绘画,AI视频,AI对话,Sora2,知识库,内容总结,PDF解析工具,文档问答,爆款文章生成'
  // ogTitle / ogDescription / twitterTitle / twitterDescription 由 composable 派生
})
</script>
