<script setup lang="ts">
/**
 * 定价页面组件
 * 展示不同等级的订阅计划及其功能对比，包含计费周期切换、FAQ 等模块。
 */
import { ref, computed } from 'vue'
import { CheckIcon, XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

// 类型定义
interface PricingFeature {
  label: string
  key: string
  tooltip?: string
}

interface PricingPlan {
  title: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  button: {
    label: string
    variant: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
    color: any
  }
  highlight?: boolean
  badge?: string
  features: Record<string, string | boolean>
}

/**
 * 切换计费周期
 * @param {boolean} value - 是否为年付
 */
const toggleBilling = (value: boolean) => {
  isYearly.value = value
}

// 状态管理
const isYearly = ref(true)

// 功能项定义（左侧Label列）
const featuresList: PricingFeature[] = [
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

// 价格方案数据
const plans: PricingPlan[] = [
  {
    title: '基础版',
    price: { monthly: '¥0', yearly: '¥0' },
    description: '先人一步体验 AI 生产力',
    button: { label: '开始使用', variant: 'soft', color: 'primary' },
    features: {
      ai_points: '每日签到',
      custom_model: false,
      apps: '3个',
      kb_capacity: '100M',
      kb_count: '2,000条',
      kb_import_limit: false,
      db_rows: '5千行',
      remote_db: false,
      plugins: '3个',
      workflows: '2个',
      dashboard: false,
      channels: false,
      client_mgmt: false,
      rate_limit: false,
      human_handoff: false,
      conversation_mgmt: false,
      team_space: false,
      api: false, // 基础
      support: '社区支持'
    }
  },
  {
    title: '标准版',
    price: { monthly: '¥268', yearly: '¥2680' },
    description: '适合开发者和小型团队',
    button: { label: '开始使用', variant: 'solid', color: 'primary' },
    highlight: true,
    features: {
      ai_points: '36万',
      custom_model: true,
      apps: '10个',
      kb_capacity: '500M',
      kb_count: '20,000条',
      kb_import_limit: false,
      db_rows: '5万行',
      remote_db: false,
      plugins: '10个',
      workflows: '6个',
      dashboard: true,
      channels: true,
      client_mgmt: true,
      rate_limit: true,
      human_handoff: false,
      conversation_mgmt: false,
      team_space: false,
      api: true, // 高级
      support: '客服支持'
    }
  },
  {
    title: '专业版',
    price: { monthly: '¥998', yearly: '¥9980' },
    description: '专业团队和组织首选',
    button: { label: '开始使用', variant: 'solid', color: 'primary' },
    features: {
      ai_points: '100万',
      custom_model: true,
      apps: '30个',
      kb_capacity: '3G',
      kb_count: '100,000条',
      kb_import_limit: false,
      db_rows: '20万行',
      remote_db: true,
      plugins: '30个',
      workflows: '15个',
      dashboard: true,
      channels: true, // 图标展示
      client_mgmt: true,
      rate_limit: true,
      human_handoff: true,
      conversation_mgmt: true,
      team_space: '10人',
      api: true, // 高级
      support: '专属服务群'
    }
  },
  {
    title: '企业版',
    price: { monthly: '咨询顾问', yearly: '咨询顾问' },
    description: '中大型企业拥抱 AI 的最佳选择',
    button: { label: '立即咨询', variant: 'solid', color: 'primary' },
    features: {
      ai_points: '专业版所有权益', // 特殊处理
      custom_model: true,
      apps: '接入渠道客户管理',
      kb_capacity: '自定义企业LOGO',
      kb_count: '自定义企业应用广场',
      kb_import_limit: '按需定制空间成员数量',
      db_rows: '按需定制功能权益容量',
      remote_db: '最高优先级性能保障',
      plugins: '智能训练调优服务',
      workflows: '可支持私有化部署',
      dashboard: true,
      channels: true,
      client_mgmt: true,
      rate_limit: true,
      human_handoff: true,
      conversation_mgmt: true,
      team_space: true,
      api: true,
      support: '优先性能保障'
    }
  }
]

// FAQ 数据
const faqItems = [
  {
    label: '是否切换订阅套餐？',
    content: '套餐使用采用覆盖更新的逻辑。因此，购买新套餐后将立即生效，剩余套餐额度将被清除，请务必谨慎操作。'
  },
  {
    label: '在哪里查看已订阅套餐？',
    content: '在【个人中心 - 套餐详情】中可以查看当前套餐的生效时间和剩余额度。当付费套餐过期后将自动恢复为免费版。'
  },
  {
    label: '什么是AI积分？',
    content: '每次调用AI模型时，将会消耗一定AI积分。具体计算标准参考上方的“AI积分计算标准”。系统会优先采用模型厂商的高级Token计费方式，Token=0.75中文汉字=0.9英文单词。'
  },
  {
    label: '知识库存储怎么计算？',
    content: '1条知识库存储等于1条知识库索引。一条分块数据，通常对应多条索引，可以在单个知识库集合中查阅“W组索引”。'
  }
]
</script>

<template>
  <div class="py-20 sm:py-28 lg:py-36 bg-white dark:bg-gray-950 min-h-screen relative overflow-hidden font-sans">
    <!-- 背景装饰：图片背景 -->
    <div class="absolute inset-x-0 top-0 h-[600px] md:h-[800px] z-0 pointer-events-none select-none">
      <img src="/pricing.png" alt="" class="w-full h-full object-cover object-top" />
      <!-- 底部渐变遮罩，使背景图平滑过渡到页面背景 -->
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-white/20 to-white dark:via-gray-950/20 dark:to-gray-950"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- 头部 Hero 区域 -->
      <div class="text-center mb-20 lg:mb-32">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ui-primary/10 border border-ui-primary/20 mb-8 animate-fade-in-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ui-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-ui-primary"></span>
          </span>
          <span class="text-xs font-bold tracking-widest uppercase text-ui-primary">Pricing & Plans</span>
        </div>
        <h1 class="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-8 leading-[1.1]">
          简单的定价 <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-linear-to-r from-ui-primary to-blue-600">伴随你成长</span>
        </h1>
        <p class="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          无论您是个人开发者、初创团队还是成熟企业，我们都有为您量身定制的 AI 解决方案。
        </p>
      </div>

      <!-- 定价内容区域 -->
      <div class="flex flex-col items-center">
        <!-- 计费周期切换 -->
        <div class="relative flex items-center justify-center mb-20">
          <div class="flex p-1.5 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 backdrop-blur-xl shadow-inner">
            <button
              @click="toggleBilling(false)"
              class="relative px-8 py-2.5 text-sm font-bold transition-all duration-500 rounded-lg outline-none z-10"
              :class="[
                !isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xl scale-100'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 scale-95'
              ]"
            >
              按月付费
            </button>
            <button
              @click="toggleBilling(true)"
              class="relative px-8 py-2.5 text-sm font-bold transition-all duration-500 rounded-lg outline-none z-10"
              :class="[
                isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xl scale-100'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 scale-95'
              ]"
            >
              按年付费
            </button>
          </div>

          <!-- 优惠提示 -->
          <div class="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block">
            <div class="flex items-center gap-2">
              <svg class="w-12 h-12 text-orange-400" viewBox="0 0 48 48" fill="none">
                <path d="M4 12C4 12 12 12 16 16C20 20 20 28 24 32C28 36 36 36 36 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4" />
                <path d="M32 32L36 36L32 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-800/50 uppercase tracking-tighter">
                立省 25%
              </div>
            </div>
          </div>
        </div>

        <!-- 定价卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          <div
            v-for="(plan, index) in plans"
            :key="plan.title"
            class="flex flex-col rounded-3xl transition-all duration-500 relative group"
            :class="[
              plan.highlight
                ? 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 z-10 xl:-mt-6 xl:mb-6'
                : 'bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 backdrop-blur-sm'
            ]"
          >
            <!-- 顶部装饰 -->
            <div v-if="plan.highlight" class="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span class="inline-flex items-center rounded-full bg-linear-to-r from-ui-primary to-blue-600 px-6 py-1.5 text-xs font-black text-white shadow-xl ring-4 ring-white dark:ring-gray-950 uppercase tracking-widest">
                Most Popular
              </span>
            </div>

            <!-- 卡片头部 -->
            <div class="p-10 pb-0 flex flex-col items-center text-center">
              <span class="text-xs font-black text-ui-primary uppercase tracking-[0.3em] mb-6">{{ plan.title }}</span>

              <div class="flex items-baseline gap-1">
                <span class="text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                  {{ isYearly ? plan.price.yearly : plan.price.monthly }}
                </span>
                <span v-if="plan.price.monthly !== '咨询顾问'" class="text-sm font-bold text-gray-400 dark:text-gray-500">
                  /{{ isYearly ? '年' : '月' }}
                </span>
              </div>

              <p class="mt-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400 min-h-[48px] px-2">{{ plan.description }}</p>

              <div class="mt-10 w-full">
                 <UButton
                  block
                  size="xl"
                  :label="plan.button.label"
                  :variant="plan.button.variant"
                  :color="plan.button.color"
                  class="w-full font-black py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-ui-primary/20"
                />
              </div>
            </div>

            <!-- 分割线 -->
            <div class="px-10 mt-10">
              <div class="h-px w-full bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
            </div>

            <!-- 功能列表 -->
            <div class="p-10 pt-8 grow">
              <p class="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-8">What's included</p>
              <ul role="list" class="space-y-4">
                <li v-for="feature in featuresList" :key="feature.key" class="flex justify-between items-center group/item">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="text-sm text-gray-600 dark:text-gray-400 truncate group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{{ feature.label }}</span>
                    <UPopover v-if="feature.tooltip" mode="hover">
                      <QuestionMarkCircleIcon class="h-4 w-4 text-gray-300 dark:text-gray-600 cursor-help hover:text-ui-primary transition-colors" />
                      <template #content>
                        <div class="p-3 max-w-xs text-xs leading-relaxed text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 rounded-lg">
                          {{ feature.tooltip }}
                        </div>
                      </template>
                    </UPopover>
                  </div>

                  <div class="text-right shrink-0">
                    <template v-if="index === 3">
                      <span class="text-xs font-black text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{{ plan.features[feature.key] === true ? '支持' : (plan.features[feature.key] || '定制') }}</span>
                    </template>
                    <template v-else>
                      <template v-if="typeof plan.features[feature.key] === 'string'">
                        <span class="text-xs font-black text-gray-900 dark:text-white">{{ plan.features[feature.key] }}</span>
                      </template>
                      <template v-else-if="plan.features[feature.key] === true">
                        <div class="rounded-full bg-ui-primary/10 p-1">
                          <CheckIcon class="h-3.5 w-3.5 text-ui-primary" />
                        </div>
                      </template>
                      <template v-else>
                        <XMarkIcon class="h-4 w-4 text-gray-200 dark:text-gray-800" />
                      </template>
                    </template>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 信任背书 / 跑马灯 -->
      <div class="mt-40 lg:mt-56 py-16 border-y border-gray-100 dark:border-gray-800/50">
        <p class="text-center text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] mb-16">Trusted by innovators worldwide</p>
        <UMarquee :overlay="false" class="max-w-6xl mx-auto opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
          <div v-for="i in 2" :key="i" class="flex items-center">
            <UIcon name="i-simple-icons-github" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-discord" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-x" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-instagram" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-linkedin" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-facebook" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-google" class="size-10 mx-16" />
            <UIcon name="i-simple-icons-amazon" class="size-10 mx-16" />
          </div>
        </UMarquee>
      </div>

      <!-- 常见问题区域 -->
      <div class="mt-40 lg:mt-56 pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <!-- 左侧：标题与描述 -->
          <div class="lg:col-span-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ui-primary/10 border border-ui-primary/20 mb-6">
              <span class="text-[10px] font-bold tracking-widest uppercase text-ui-primary">Support & FAQ</span>
            </div>
            <h2 class="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8 leading-tight">
              常见问题 <br /><span class="text-ui-primary">深度解答</span>
            </h2>
            <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
              我们在下方列出了用户最常关心的问题。如果您仍有疑虑，我们的技术顾问随时待命为您提供 1 对 1 咨询。
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton
                label="联系技术专家"
                size="xl"
                color="primary"
                icon="i-heroicons-chat-bubble-left-right"
                class="font-black px-10 rounded-xl"
              />
              <UButton
                label="查阅开发文档"
                size="xl"
                variant="ghost"
                color="neutral"
                icon="i-heroicons-document-text"
                class="font-black px-10 rounded-xl"
              />
            </div>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:col-span-7">
            <UAccordion
              :items="faqItems"
              multiple
              :ui="{
                root: 'divide-y divide-gray-100 dark:divide-gray-800 border-t border-gray-100 dark:border-gray-800',
                item: 'py-8',
                content: 'pb-8 text-base text-gray-500 dark:text-gray-400 leading-loose'
              }"
            >
              <template #default="{ item, open }">
                <div class="flex items-center justify-between w-full cursor-pointer group">
                  <span class="text-lg font-black text-gray-900 dark:text-white group-hover:text-ui-primary transition-colors">{{ item.label }}</span>
                  <UIcon
                    :name="open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                    class="size-5 text-gray-400 group-hover:text-ui-primary transition-all duration-300"
                    :class="{ 'rotate-180': open }"
                  />
                </div>
              </template>
            </UAccordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
