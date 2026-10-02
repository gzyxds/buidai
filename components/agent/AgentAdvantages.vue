<script setup lang="ts">
/**
 * 为什么选择智言AI区块：grid-border 三段式 + 优势卡片网格
 */
// 类型定义：优势
interface Advantage {
  title: string
  desc: string
  icon: string
}

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    desc: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: 'i-heroicons-cube'
  },
  {
    title: '独特的 QA 结构',
    desc: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: '可视化工作流',
    desc: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: 'i-heroicons-arrows-right-left'
  },
  {
    title: '无限扩展',
    desc: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: 'i-heroicons-puzzle-piece'
  },
  {
    title: '便于调试',
    desc: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: 'i-heroicons-wrench-screwdriver'
  },
  {
    title: '支持多种模型',
    desc: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: 'i-heroicons-wrench'
  }
]
</script>

<template>
  <!-- 核心优势 -->
  <section class="overflow-hidden bg-white">
    <div class="grid-border-container">
      <!-- 标题区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div class="mb-6 sm:mb-8">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Why 智言AI
              </span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              为什么选择 智言AI ?
            </h2>
            <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
              从底层架构到上层应用，我们提供全栈式的 AI 解决方案，助您在智能时代保持领先
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 优势卡片区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(adv, idx) in advantages"
              :key="idx"
              class="group relative flex flex-col gap-4 border border-neutral-200/80 bg-white p-6 transition-all duration-200 ease-out hover:border-indigo-200 hover:shadow-sm hover:bg-indigo-50/20"
            >
              <!-- 图标区域 -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 shrink-0">
                <UIcon
:name="adv.icon"
                  class="h-5 w-5 text-indigo-600"
                />
              </div>

              <!-- 内容区域 -->
              <div class="flex-1">
                <h3 class="text-base font-bold text-neutral-900 mb-2">
                  {{ adv.title }}
                </h3>
                <p class="text-sm leading-relaxed text-neutral-600">
                  {{ adv.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 底部信息 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8">
          <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
          <span class="w-px h-6 bg-neutral-200" />
          <span class="text-base sm:text-lg text-neutral-600 font-medium">全栈式 AI 解决方案</span>
        </div>
      </div>

      <!-- 底部边框行 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>
