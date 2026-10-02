<script setup lang="ts">
/**
 * 私有部署页面
 * 组装 Hero、技术栈、应用市场、氛围编程、平台优势、通用场景、选择理由、
 * 合作伙伴、用户评价与 FAQ 区块
 */
import ProductShowcase from '@/components/landing/ProductShowcase.vue'

/** SEO */
useSeoMeta({
  title: '智言AI - AI系统源码|企业级开源AI系统源码|私有化部署AI Agent平台',
  description: '智言AI(智言万象)提供全套开源AI系统源码，集成智能体Agent、RAG知识库、多模型管理(LLM)与工作流编排。基于Nuxt 3 + Vue 3开发，支持一键私有化部署，免费下载源代码，是企业构建专属AI中台的最佳选择。',
  keywords: '开源AI系统源码,AI系统源代码下载,企业级AI源码,AI Agent开发平台,私有化部署AI,RAG知识库源码,LLM大模型管理系统,Nuxt3 AI项目,Vue3 AI后台模板',
  ogTitle: '智言AI - 企业级开源AI系统源码 | 私有化部署AI Agent平台',
  ogDescription: '智言AI(智言万象)提供全套开源AI系统源码，集成智能体Agent、RAG知识库、多模型管理(LLM)与工作流编排。基于Nuxt 3 + Vue 3开发，支持一键私有化部署，免费下载源代码，是企业构建专属AI中台的最佳选择。',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <BuidaiHero />
    <BuidaiTechStack />
    <AIApplicationSystems />
    <Market :limit="8" />
    <ProductShowcase />
    <BuidaiVibeCoding />
    <BuidaiAdvantages />
    <LLMModels />
    <LandingOpenSourceRoadmap />
    <BuidaiScenarios />
    <BuidaiWhyChooseUs />
    <BuidaiPartners />
    <BuidaiTestimonials />
    <BuidaiFaq />
    <LandingCtaSection />
  </div>
</template>

<style>
html {
  overflow-x: clip;
}
</style>
