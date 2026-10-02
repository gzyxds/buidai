<script setup lang="ts">
/**
 * 定价页面
 * 组装头部 Hero、定价方案、信任背书与 FAQ 区块（grid-border 三段式布局）
 */

// SEO 元数据配置
usePageSeo({
  title: '智言AI - 价格方案 - 智言万象 | 灵活透明的 AI 平台订阅计划',
  description: '智言AI-智言万象提供基础版、标准版、专业版及企业定制版等多种价格方案，满足个人开发者、初创团队及大型企业的不同 AI 应用开发需求。',
  keywords: '智言万象AI价格, 智言万象价格, AI平台定价, 订阅计划, 企业级AI, AI积分, 私有化部署, 免费AI工具, 开发者套餐',
  ogTitle: '智言AI - 价格方案 - 智言万象 | 灵活透明的 AI 平台订阅计划',
  ogDescription: '智言AI-智言万象提供基础版、标准版、专业版及企业定制版等多种价格方案，满足个人开发者、初创团队及大型企业的不同 AI 应用开发需求。',
  ogType: 'website'
})

// 开启两侧竖带装饰层（grid-border 设计系统）
definePageMeta({
  frameSides: true
})
</script>

<template>
  <!-- 底色与 grid-border 令牌对齐（--grid-bg: 亮 #fff / 暗 #171717=neutral-900） -->
  <section class="overflow-hidden min-h-screen bg-white dark:bg-neutral-900">
    <div class="grid-border-container">
      <div class="grid-border-row" />

      <!-- 头部 Hero 区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div class="text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ui-primary/10 mb-6">
              <span class="text-xs font-medium text-ui-primary">定价方案</span>
            </div>
            <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
              选择适合你的方案
            </h1>
            <p class="text-base text-gray-500 dark:text-gray-400">
              从个人开发者到企业团队，我们提供灵活的定价选择
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 定价方案区块 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-10 sm:py-10 lg:py-12">
          <PricingPlans />
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 信任背书 / 跑马灯 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-12">
          <p class="text-center text-xs text-gray-400 dark:text-gray-500 mb-8">受到众多创新团队信赖</p>
          <UMarquee :overlay="false" class="opacity-40 grayscale">
            <div v-for="i in 2" :key="i" class="flex items-center">
              <UIcon name="i-simple-icons-github" class="size-8 mx-10" />
              <UIcon name="i-simple-icons-discord" class="size-8 mx-10" />
              <UIcon name="i-simple-icons-x" class="size-8 mx-10" />
              <UIcon name="i-simple-icons-instagram" class="size-8 mx-10" />
              <UIcon name="i-simple-icons-linkedin" class="size-8 mx-10" />
              <UIcon name="i-simple-icons-google" class="size-8 mx-10" />
            </div>
          </UMarquee>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 常见问题区块 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-10 sm:py-10 lg:py-12">
          <PricingFaq />
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 底部品牌摘要 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight dark:text-white">智言AI</span>
          <span class="w-8 h-px sm:w-px sm:h-6 bg-neutral-200 dark:bg-neutral-700" />
          <span class="text-base sm:text-lg text-neutral-600 font-medium dark:text-neutral-300">一站式 AI 解决方案，助力企业智能化转型</span>
        </div>
      </div>

      <div class="grid-border-row" />
    </div>
  </section>
  <!-- CTA 底部行动召唤区域 -->
  <LandingCtaSection />
</template>

<style scoped>
/* 移动端适配：1fr 网格轨道默认不小于内容的 min-content 宽度，
   页面内跑马灯的 min-w 定宽组会把整页轨道撑到 1536px 导致窄屏裁切，
   改为 minmax(0, 1fr) 允许轨道收缩到视口宽度 */
.grid-border-container {
  grid-template-columns: minmax(0, 1fr);
}
</style>
