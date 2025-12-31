<template>
  <section class="py-16 bg-gray-50/50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div class="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="mx-auto max-w-2xl text-center mb-12">
        <h2 class="text-base font-semibold text-ui-primary leading-7">多场景覆盖</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          BuidAI 灵活适配您的业务需求
        </p>
        <p class="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          从内部提效到外部服务，全面覆盖企业智能化需求，助力企业快速落地 AI 应用。
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <div
          v-for="(item, index) in scenarios"
          :key="index"
          :class="[item.colSpan, 'relative group transition-transform duration-300 hover:-translate-y-1']"
        >
          <!-- 卡片背景与边框 (渐变 + 毛玻璃) -->
          <div :class="['absolute inset-0 rounded-2xl border backdrop-blur-xl shadow-sm transition-all duration-300 group-hover:shadow-xl opacity-80 group-hover:opacity-100', item.gradientClass]"></div>

          <div class="relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8">
            <!-- 头部：图标与标签 -->
            <div class="flex items-start justify-between mb-6">
              <div :class="['flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 bg-white/60 shadow-sm']">
                <UIcon :name="item.icon" class="h-6 w-6 text-gray-800" />
              </div>
              <span class="text-xs font-medium text-gray-700 px-2.5 py-1 rounded-md bg-white/40 border border-white/50 backdrop-blur-sm">
                {{ item.subtitle }}
              </span>
            </div>

            <!-- 内容区域 -->
            <div class="flex flex-col grow">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ item.title }}
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ScenarioItem {
  title: string
  subtitle: string
  desc: string
  icon: string
  colSpan: string
  gradientClass: string
}

const scenarios: ScenarioItem[] = [
  {
    title: '全开源 & DIY 装修',
    subtitle: '自主可控',
    desc: 'BuidAI 项目代码完全公开，支持私有化部署到企业服务器。同时支持自定义首页、登录界面、加载动画的 Logo，打造专属品牌形象。',
    icon: 'i-heroicons-code-bracket-square',
    colSpan: 'lg:col-span-3',
    gradientClass: 'bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 border-blue-100/50'
  },
  {
    title: '导入 Dify & 扣子 工作流',
    subtitle: '无缝集成',
    desc: 'BuidAI 支持导入 Dify、扣子（Coze）等第三方工作流，打破平台局限，让你的 AI Agent 能力得到充分施展。',
    icon: 'i-heroicons-cpu-chip',
    colSpan: 'lg:col-span-3',
    gradientClass: 'bg-gradient-to-br from-purple-50/80 via-white to-purple-50/30 border-purple-100/50'
  },
  {
    title: '企业级组织管理',
    subtitle: '权限管控',
    desc: '根据业务需求灵活配置角色权限，为不同部门分配编辑与阅读权限，高效实现数据隔离与安全协作。',
    icon: 'i-heroicons-building-office-2',
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 border-emerald-100/50'
  },
  {
    title: '多模态交互支持',
    subtitle: '极致体验',
    desc: '支持语音、图像、视频等多种模态交互，打破单一文本限制，为用户提供身临其境的 AI 使用体验。',
    icon: 'i-heroicons-chat-bubble-bottom-center-text',
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 border-amber-100/50'
  },
  {
    title: '实时数据洞察',
    subtitle: '数据驱动',
    desc: '全方位监控应用运行指标，提供可视化的数据报表与分析看板，助力企业基于数据优化业务决策。',
    icon: 'i-heroicons-chart-bar',
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-cyan-50/80 via-white to-cyan-50/30 border-cyan-100/50'
  }
]
</script>

<style scoped>
/* 移除不需要的样式 */
</style>
