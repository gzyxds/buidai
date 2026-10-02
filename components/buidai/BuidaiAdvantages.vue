<script setup lang="ts">
/**
 * 平台优势区块
 */
interface Advantage {
  title: string
  description: string
  icon: string
  class?: string
  variant?: 'solid' | 'outline' | 'soft'
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  image?: { path: string; width: number; height: number }
}

const advantages: Advantage[] = [
  {
    title: '开源优势', description: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。', icon: 'i-lucide-box',
    class: 'lg:col-span-2',
    image: { path: 'https://ui2.nuxt.com/illustrations/color-palette', width: 363, height: 152 },
    orientation: 'horizontal',
  },
  {
    title: '独特的 QA 结构', description: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。', icon: 'i-lucide-sparkles',
    variant: 'soft', class: 'bg-indigo-500 text-white [&_[data-slot=title]]:text-white [&_[data-slot=description]]:text-indigo-100',
  },
  {
    title: '可视化工作流', description: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。', icon: 'i-lucide-git-branch',
    variant: 'soft', class: 'bg-indigo-500 text-white [&_[data-slot=title]]:text-white [&_[data-slot=description]]:text-indigo-100',
  },
  {
    title: '无限扩展', description: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。', icon: 'i-lucide-puzzle',
    class: 'lg:col-span-2',
    image: { path: 'https://ui2.nuxt.com/illustrations/icon-library', width: 362, height: 184 },
    orientation: 'horizontal', reverse: true,
  },
  { title: '便于调试', description: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。', icon: 'i-lucide-bug' },
  { title: '支持多种模型', description: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。', icon: 'i-lucide-server' },
  {
    title: '对接支付渠道', description: '智言万象 已打通微信与支付宝渠道，通过设置会员套餐，用户充值使用 AI 功能，实现产品商业化完整闭环。',
    icon: 'i-lucide-credit-card', variant: 'soft',
  },
]
</script>

<template>
  <!-- 平台优势 -->
  <section class="py-16 md:py-24 bg-neutral-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4">平台优势</span>
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">平台核心优势</h2>
        <p class="text-neutral-500 text-lg leading-relaxed">构建在先进架构之上的企业级 AI 解决方案，助力企业快速落地 AI 应用</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UPageCard
          v-for="item in advantages"
          :key="item.title"
          v-bind="item"
        >
          <template v-if="item.image" #image>
            <img
              :src="item.image.path"
              :alt="item.title"
              :width="item.image.width"
              :height="item.image.height"
              class="object-contain w-full h-full"
            />
          </template>
        </UPageCard>
      </div>
    </div>
  </section>
</template>
