<script setup lang="ts">
/**
 * 定价方案区块：计费周期切换 + 四档方案卡片
 */
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
  icon?: string
  level: 'free' | 'pro' | 'master' | 'enterprise'
  subtitle: string
  features: Record<string, string | boolean>
}

const isYearly = ref(true)

/**
 * 切换计费周期
 * @param {boolean} value - 是否为年付
 */
const toggleBilling = (value: boolean) => {
  isYearly.value = value
}

// 价格方案数据
const plans: PricingPlan[] = [
  {
    title: '基础版',
    price: { monthly: '¥0', yearly: '¥0' },
    originalPrice: { monthly: '', yearly: '' },
    description: '先人一步体验 AI 生产力',
    button: { label: '开始使用', variant: 'soft', color: 'neutral' },
    icon: 'i-heroicons-solid-sparkles',
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
    icon: 'i-heroicons-solid-rocket-launch',
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
    icon: 'i-heroicons-solid-building-office',
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
    icon: 'i-heroicons-solid-cloud',
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
</script>

<template>
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
</template>
