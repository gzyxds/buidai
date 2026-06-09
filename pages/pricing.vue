<script setup lang="ts">
/**
 * 定价页面组件
 * 展示不同等级的订阅计划及其功能对比，包含计费周期切换、FAQ 等模块。
 */
import { ref } from 'vue'
import type { Component } from 'vue'
import { RocketLaunchIcon, BuildingOfficeIcon, CloudIcon, SparklesIcon } from '@heroicons/vue/24/solid'

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系技术专家', desc: '扫码添加微信顾问', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

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
  originalPrice: {
    monthly: string
    yearly: string
  }
  description: string
  button: {
    label: string
    variant: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
    color: 'neutral' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  }
  highlight?: boolean
  badge?: string
  icon?: Component
  level: 'free' | 'pro' | 'master' | 'enterprise'
  subtitle: string
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



/**
 * 权益项类型定义
 */
interface BenefitItem {
  icon: string
  text: string
  tag?: string
  tagType?: 'default' | 'highlight' | 'red'
}

/**
 * 权益分类类型定义
 */
interface BenefitSection {
  title: string
  items: BenefitItem[]
}

// 价格方案数据
const plans: PricingPlan[] = [
  {
    title: '基础版',
    price: { monthly: '¥0', yearly: '¥0' },
    originalPrice: { monthly: '', yearly: '' },
    description: '先人一步体验 AI 生产力',
    button: { label: '开始使用', variant: 'soft', color: 'neutral' },
    icon: SparklesIcon,
    level: 'free',
    subtitle: '适合个人体验',
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
      api: false,
      support: '社区支持'
    }
  },
  {
    title: '标准版',
    price: { monthly: '¥268', yearly: '¥2680' },
    originalPrice: { monthly: '¥358', yearly: '¥3580' },
    description: '适合开发者和小型团队',
    button: { label: '立即开通', variant: 'solid', color: 'primary' },
    highlight: true,
    icon: RocketLaunchIcon,
    level: 'pro',
    subtitle: '22元/月起，超值性价比',
    badge: '最受欢迎',
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
      api: true,
      support: '客服支持'
    }
  },
  {
    title: '专业版',
    price: { monthly: '¥998', yearly: '¥9980' },
    originalPrice: { monthly: '¥1298', yearly: '¥12980' },
    description: '专业团队和组织首选',
    button: { label: '立即开通', variant: 'solid', color: 'primary' },
    icon: BuildingOfficeIcon,
    level: 'master',
    subtitle: '83元/月起，专业首选',
    badge: '限时特惠',
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
      channels: true,
      client_mgmt: true,
      rate_limit: true,
      human_handoff: true,
      conversation_mgmt: true,
      team_space: '10人',
      api: true,
      support: '专属服务群'
    }
  },
  {
    title: '私有部署',
    price: { monthly: '咨询顾问', yearly: '咨询顾问' },
    originalPrice: { monthly: '', yearly: '' },
    description: '中大型企业拥抱 AI 的最佳选择',
    button: { label: '联系顾问', variant: 'solid', color: 'warning' },
    icon: CloudIcon,
    level: 'enterprise',
    subtitle: '按需定制，专属服务',
    badge: '企业专属',
    features: {
      ai_points: '专业版所有权益',
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

/**
 * 获取权益分类列表
 * @param {string} level - 套餐等级
 * @returns {BenefitSection[]} 权益分类列表
 */
const getBenefitSections = (level: string): BenefitSection[] | undefined => {
  const commonBenefits: Record<string, BenefitSection[]> = {
    free: [
      {
        title: '基础权益',
        items: [
          { icon: 'i-heroicons-sparkles', text: '每日签到领积分' },
          { icon: 'i-heroicons-squares-2x2', text: '3个应用创建额度' },
          { icon: 'i-heroicons-circle-stack', text: '100M 知识库容量' },
          { icon: 'i-heroicons-table-cells', text: '5千行数据库额度' },
          { icon: 'i-heroicons-puzzle-piece', text: '3个自定义插件' }
        ]
      }
    ],
    pro: [
      {
        title: '核心权益',
        items: [
          { icon: 'i-heroicons-bolt', text: '36万 AI 积分/年', tag: '比充值便宜75%', tagType: 'highlight' },
          { icon: 'i-heroicons-squares-2x2', text: '10个应用创建额度' },
          { icon: 'i-heroicons-circle-stack', text: '500M 知识库容量' },
          { icon: 'i-heroicons-table-cells', text: '5万行数据库额度' },
          { icon: 'i-heroicons-puzzle-piece', text: '10个自定义插件' }
        ]
      },
      {
        title: '进阶功能',
        items: [
          { icon: 'i-heroicons-rectangle-group', text: '数据看板' },
          { icon: 'i-heroicons-signal', text: '渠道接入' },
          { icon: 'i-heroicons-users', text: '客户端管理' },
          { icon: 'i-heroicons-adjustments-horizontal', text: '对话限流配置' },
          { icon: 'i-heroicons-code-bracket', text: '开放 API 访问' }
        ]
      }
    ],
    master: [
      {
        title: '核心权益',
        items: [
          { icon: 'i-heroicons-bolt', text: '100万 AI 积分/年', tag: '比充值便宜81%', tagType: 'highlight' },
          { icon: 'i-heroicons-squares-2x2', text: '30个应用创建额度' },
          { icon: 'i-heroicons-circle-stack', text: '3G 知识库容量' },
          { icon: 'i-heroicons-table-cells', text: '20万行数据库额度' },
          { icon: 'i-heroicons-puzzle-piece', text: '30个自定义插件' }
        ]
      },
      {
        title: '团队功能',
        items: [
          { icon: 'i-heroicons-user-group', text: '10人团队空间', tag: '可扩展', tagType: 'default' },
          { icon: 'i-heroicons-arrow-path', text: '智能转人工' },
          { icon: 'i-heroicons-chat-bubble-left-right', text: '聚合对话管理' },
          { icon: 'i-heroicons-server', text: '远程数据库连接' }
        ]
      }
    ],
    enterprise: [
      {
        title: '企业定制',
        items: [
          { icon: 'i-heroicons-shield-check', text: '专业版所有权益' },
          { icon: 'i-heroicons-building-office', text: '自定义企业 LOGO' },
          { icon: 'i-heroicons-squares-plus', text: '自定义应用广场' },
          { icon: 'i-heroicons-users', text: '按需定制成员数量' },
          { icon: 'i-heroicons-cog', text: '按需定制功能容量' }
        ]
      },
      {
        title: '专属服务',
        items: [
          { icon: 'i-heroicons-rocket-launch', text: '最高优先级性能保障' },
          { icon: 'i-heroicons-academic-cap', text: '智能训练调优服务' },
          { icon: 'i-heroicons-server-stack', text: '私有化部署支持' },
          { icon: 'i-heroicons-phone', text: '7×24小时专属服务' },
          { icon: 'i-heroicons-wrench-screwdriver', text: '一对一技术顾问' }
        ]
      }
    ]
  }
  return commonBenefits[level] || commonBenefits.free
}

// FAQ 数据
const faqItems = [
  {
    label: '积分有效期规则',
    content: '会员积分：按月发放，自到账日起 31 天内有效，到期自动重置；充值积分：自购买日起 2 年内有效，不退不换；每日登录积分：赠送 20 积分，仅限当日使用，次日自动清零。'
  },
  {
    label: '0 积分生成说明',
    content: '关于会员购买后的退款政策：付费服务一经购买，除法定情形或重大平台过错外，不支持退费。0 积分生成不消耗积分，但可能因系统负载进入排队以保障平台稳定性；仅适用于正常会员使用场景。自动化脚本、多账号或多人共享、异常商业使用等行为违反平台规则，平台有权采取限制功能或封禁账号等措施。'
  },
  {
    label: '如何获取更多积分',
    content: '若当前积分不足，可通过以下方式补充：升级会员或叠加购买会员：购买后立即生效，积分即时到账；单独充值积分：按需购买，灵活补充。'
  },
  {
    label: '发票申请与联系方式',
    content: '发票可在「订阅与开票」→「购买记录」中自助申请。如需企业合作，请联系 bd@buidai.com；其他问题欢迎前往帮助中心查询。'
  },
  {
    label: '会员权益须知',
    content: '会员模型下载次数上限为每月 200 次；参与限免或促销活动的订单不支持退款。'
  },
  {
    label: '会员权益保护计划',
    content: '活动开启前 7 天内新购买年付会员（标准版、专业版、私有部署）的用户，平台也发放活动赠品（对应等级的免费次数）。'
  }
]

const activeFaq = ref<number | null>(null)

/**
 * 处理 details 元素的 toggle 事件
 * @param event - Toggle 事件对象
 * @param idx - FAQ 索引
 */
const handleFaqToggle = (event: Event, idx: number) => {
  const details = event.target as HTMLDetailsElement
  if (details.open) {
    activeFaq.value = idx
  } else if (activeFaq.value === idx) {
    activeFaq.value = null
  }
}

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

      <!-- 定价内容区域 -->
      <div class="flex flex-col items-center">
        <!-- 计费周期切换 -->
        <div class="flex items-center justify-center mb-12">
          <div class="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              class="relative px-6 py-2 text-sm font-medium transition-all duration-200 rounded-md"
              :class="[
                !isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              ]"
              @click="toggleBilling(false)"
            >
              月付
            </button>
            <button
              class="relative px-6 py-2 text-sm font-medium transition-all duration-200 rounded-md flex items-center gap-2"
              :class="[
                isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              ]"
              @click="toggleBilling(true)"
            >
              年付
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-ui-primary/10 text-ui-primary">省25%</span>
            </button>
          </div>
        </div>

        <!-- 定价卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
          <div
            v-for="(plan) in plans"
            :key="plan.title"
            class="flex flex-col rounded-2xl transition-all duration-300 relative group"
            :class="[
              plan.highlight
                ? 'bg-white dark:bg-gray-900 ring-1 ring-indigo-500 z-10 xl:-mt-3 xl:mb-3 shadow-lg shadow-indigo-500/10'
                : 'bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
            ]"
          >
            <!-- 顶部徽章 -->
            <div v-if="plan.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
              <span 
                class="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold text-white shadow-sm"
                :class="plan.level === 'pro' ? 'bg-indigo-500' : 'bg-amber-500'"
              >
                {{ plan.badge }}
              </span>
            </div>

            <!-- 卡片头部 -->
            <div class="p-6 pb-5">
              <!-- 方案图标和名称 -->
              <div class="flex items-center gap-3 mb-5">
                <div 
                  class="w-9 h-9 rounded-lg flex items-center justify-center"
                  :class="plan.level === 'free' ? 'bg-gray-100 dark:bg-gray-800' : plan.level === 'pro' ? 'bg-indigo-500/10' : plan.level === 'master' ? 'bg-amber-500/10' : 'bg-purple-500/10'"
                >
                  <UIcon 
                    :name="plan.level === 'free' ? 'i-heroicons-sparkles' : plan.level === 'pro' ? 'i-heroicons-rocket-launch' : plan.level === 'master' ? 'i-heroicons-building-office' : 'i-heroicons-cloud'"
                    class="w-4 h-4"
                    :class="plan.level === 'free' ? 'text-gray-500 dark:text-gray-400' : plan.level === 'pro' ? 'text-indigo-500' : plan.level === 'master' ? 'text-amber-500' : 'text-purple-500'"
                  />
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-white">{{ plan.title }}</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ plan.description }}</p>
                </div>
              </div>

              <!-- 价格区域 -->
              <div class="mb-5">
                <div class="flex items-baseline gap-1">
                  <span class="text-sm text-gray-400 dark:text-gray-500">¥</span>
                  <span class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {{ isYearly ? plan.price.yearly.replace('¥', '') : plan.price.monthly.replace('¥', '') }}
                  </span>
                  <span v-if="plan.price.monthly !== '咨询顾问'" class="text-sm text-gray-400 dark:text-gray-500">
                    /{{ isYearly ? '年' : '月' }}
                  </span>
                </div>
                <!-- 原价 -->
                <div v-if="plan.originalPrice.monthly && plan.originalPrice.monthly !== '¥'" class="mt-1">
                  <span class="text-sm text-gray-400 dark:text-gray-600 line-through">
                    {{ isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly }}
                  </span>
                  <span class="ml-2 text-xs text-ui-primary font-medium">{{ plan.level === 'pro' ? '省25%' : '省23%' }}</span>
                </div>
                <!-- 副标题 -->
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">{{ plan.subtitle }}</p>
              </div>

              <!-- CTA 按钮 -->
              <UButton
                block
                size="md"
                :label="plan.button.label"
                :variant="plan.level === 'free' ? 'solid' : plan.button.variant"
                :color="plan.level === 'pro' ? 'primary' : plan.level === 'free' ? 'neutral' : plan.button.color"
                class="w-full font-medium py-2.5 rounded-lg transition-all duration-200"
                :class="[
                  plan.level === 'pro' ? 'bg-indigo-500 hover:bg-indigo-600 shadow-sm shadow-indigo-500/20' : '',
                  plan.level === 'free' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100' : ''
                ]"
              />
            </div>

            <!-- 分割线 -->
            <div class="px-6">
              <div class="h-px w-full bg-gray-100 dark:bg-gray-800"/>
            </div>

            <!-- 权益列表 -->
            <div class="p-6 pt-5 grow">
              <div 
                v-for="(section, sIdx) in (getBenefitSections(plan.level) || [])" 
                :key="sIdx"
                class="mb-4 last:mb-0"
              >
                <h4 class="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2.5 flex items-center gap-2">
                  {{ section.title }}
                </h4>
                <ul class="space-y-2">
                  <li 
                    v-for="(item, iIdx) in section.items" 
                    :key="iIdx"
                    class="flex items-center gap-2.5"
                  >
                    <UIcon 
                      :name="item.icon" 
                      class="w-4 h-4 shrink-0"
                      :class="item.tag ? 'text-ui-primary' : 'text-gray-400 dark:text-gray-500'"
                    />
                    <span class="text-sm text-gray-600 dark:text-gray-300">{{ item.text }}</span>
                    <span 
                      v-if="item.tag" 
                      class="text-[10px] font-medium px-1.5 py-0.5 rounded bg-ui-primary/10 text-ui-primary"
                    >
                      {{ item.tag }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <!-- 常见问题区域 -->
      <div class="mt-24 lg:mt-32 pb-20">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <!-- 左侧：标题区 -->
          <div class="lg:border-r lg:border-gray-200 dark:lg:border-gray-800">
            <div class="pr-0 lg:pr-10">
              <!-- 标签 -->
              <span class="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-4">
                FAQ
              </span>
              <!-- 主标题 -->
              <h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
                常见问题解答
              </h2>
              <p class="text-base text-gray-500 dark:text-gray-400 mb-8">
                你需要知道的一切，都在这里找到答案。
              </p>

              <!-- 联系按钮区 -->
              <div class="pt-6">
                <p class="text-sm text-gray-500 mb-4 font-medium">还有其他问题？</p>
                <div class="flex flex-wrap gap-3">
                  <button
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all duration-200"
                    @click="openQrModal('coupon')"
                  >
                    <UIcon name="i-heroicons-ticket" class="w-4 h-4" />
                    获取优惠码
                  </button>
                  <button
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                    @click="openQrModal('wechat')"
                  >
                    <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
                    联系客服
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:pl-10">
            <div class="space-y-1">
              <!-- 分类标题 -->
              <h3 class="py-3 text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 dark:text-indigo-400">
                计费与权益
              </h3>
              
              <div
                v-for="(item, idx) in faqItems"
                :key="idx"
                class="group border-t border-gray-100 dark:border-gray-800"
              >
                <details
                  class="group"
                  :open="activeFaq === idx"
                  @toggle="handleFaqToggle($event, idx)"
                >
                  <!-- 问题行 -->
                  <summary
                    class="flex w-full cursor-pointer items-center justify-between gap-4 py-4 select-none list-none"
                  >
                    <span class="text-left text-base font-medium text-gray-800 dark:text-gray-200 group-open:text-indigo-600 dark:group-open:text-indigo-400 transition-colors">
                      {{ item.label }}
                    </span>
                    <!-- Plus 图标 -->
                    <UIcon 
                      name="i-heroicons-plus" 
                      class="w-5 h-5 text-gray-400 group-open:hidden shrink-0 transition-colors"
                    />
                    <!-- Minus 图标 -->
                    <UIcon 
                      name="i-heroicons-minus" 
                      class="w-5 h-5 text-indigo-600 hidden group-open:block shrink-0"
                    />
                  </summary>

                  <!-- 答案区 -->
                  <div class="pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {{ item.content }}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 <!-- CTA 底部行动召唤区域 -->
  <LandingCtaSection />
</template>
