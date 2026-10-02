<script setup lang="ts">
/**
 * 定价页面
 * 组装头部 Hero、定价方案、信任背书与 FAQ 区块
 */
interface PricingFeature {
  label: string
  key: string
  tooltip?: string
}

/**
 * 功能项定义
 * 当前使用权益分类展示，保留用于未来功能对比表扩展
 */
const _featuresList: PricingFeature[] = [
  { label: 'AI积分', key: 'ai_points', tooltip: '用于调用AI模型的积分消耗' },
  { label: '自定义AI大模型', key: 'custom_model', tooltip: '支持接入私有大模型' },
  { label: '应用', key: 'apps' },
  { label: '知识库文件容量', key: 'kb_capacity', tooltip: '上传文件的总大小限制' },
  { label: '知识库条数', key: 'kb_count' },
  { label: '知识库导入限制', key: 'kb_import_limit' },
  { label: '内置数据库行数', key: 'db_rows' },
  { label: '远程数据库', key: 'remote_db' },
  { label: '自定义插件', key: 'plugins' },
  { label: '工作流', key: 'workflows' },
  { label: '数据看板', key: 'dashboard' },
  { label: '渠道接入', key: 'channels' },
  { label: '客户端管理', key: 'client_mgmt' },
  { label: '对话限流配置', key: 'rate_limit' },
  { label: '智能转人工', key: 'human_handoff' },
  { label: '聚合对话管理', key: 'conversation_mgmt' },
  { label: '团队空间', key: 'team_space' },
  { label: '开放 API', key: 'api' },
  { label: '服务', key: 'support' }
]
// 使用void消除未使用变量警告
void _featuresList

// SEO 元数据配置
useSeoMeta({
  title: '智言AI - 价格方案 - 智言万象 | 灵活透明的 AI 平台订阅计划',
  description: '智言AI-智言万象提供基础版、标准版、专业版及企业定制版等多种价格方案，满足个人开发者、初创团队及大型企业的不同 AI 应用开发需求。',
  keywords: '智言万象AI价格, 智言万象价格, AI平台定价, 订阅计划, 企业级AI, AI积分, 私有化部署, 免费AI工具, 开发者套餐',
  ogTitle: '智言AI - 价格方案 - 智言万象 | 灵活透明的 AI 平台订阅计划',
  ogDescription: '智言AI-智言万象提供基础版、标准版、专业版及企业定制版等多种价格方案，满足个人开发者、初创团队及大型企业的不同 AI 应用开发需求。',
  ogType: 'website'
})
</script>

<template>
  <div class="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- 头部 Hero 区域 -->
      <div class="text-center mb-16 lg:mb-24">
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

      <!-- 定价方案区块 -->
      <PricingPlans />

      <!-- 信任背书 / 跑马灯 -->
      <div class="mt-24 lg:mt-32 py-12 border-y border-gray-100 dark:border-gray-800">
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

      <!-- 常见问题区块 -->
      <PricingFaq />
    </div>
  </div>
  <!-- CTA 底部行动召唤区域 -->
  <LandingCtaSection />
</template>
