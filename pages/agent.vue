<script setup lang="ts">
/**
 * AI 智能体页面
 * 组装 Hero、核心功能、行业方案、路线图、核心优势与 FAQ 区块
 */
// SEO 元数据配置
usePageSeo({
  title: '智言AI - 企业级 AI Agent 智能体构建平台',
  description:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。全方位赋能企业 AI 转型，打造智能高效的业务闭环。',
  keywords: 'AI Agent, 智能体, 企业级AI, AI应用平台, 智言AI, Workflow, RAG',
  ogTitle: '智言AI - 企业级 AI Agent 智能体构建平台',
  ogDescription:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <AgentHero />

    <!-- 核心功能 步骤展示 - 使用独立组件 -->
    <LandingFeatureSteps />

    <!-- 全行业解决方案 -->
    <AIIndustry />

    <!-- 开源路线图 -->
    <LandingOpenSourceRoadmap />

    <AgentFeatures />
    <AgentAdvantages />
    <AgentFaq />

    <!-- CTA 底部行动召唤区域 -->
    <LandingCtaSection />
  </div>
</template>
