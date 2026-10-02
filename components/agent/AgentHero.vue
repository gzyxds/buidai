<script setup lang="ts">
/**
 * Agent 页 Hero 区块：网格背景 + 打字机标题 + CTA
 */
import { ref } from 'vue'
import { DocumentTextIcon, RocketLaunchIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

// 打字机效果相关
const texts = ['智言AI 领先的AI创作平台', '可视化 Workflow 编排', '超易用 AI 知识库', '创新 RAG 检索', '轻松构建强大 AI 应用']
const { text: displayText } = useTypewriter(texts, {
  typingSpeed: 75,
  pauseAfterComplete: 1500,
  startDelay: 1000
})
const showCursor = ref(true)
</script>

<template>
  <div>
    <!-- 背景装饰：左上角网格 -->
    <div
      class="absolute top-0 left-0 z-0 h-100 w-full bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] md:h-150"
    />

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>智言万象 V4.6.8 strong release</span>
        </div>

        <h1
          class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight min-h-[1.2em]"
        >
          <span class="typewriter-text">{{ displayText }}</span>
          <span
            class="typewriter-cursor inline-block w-[3px] h-[1em] bg-indigo-600 ml-1 align-middle"
            :class="{ 'animate-blink': showCursor }"
          />
        </h1>

        <p class="text-base sm:text-xl text-neutral-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="https://www.gmlart.cn"
            target="_blank" rel="noopener noreferrer"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </a>
          <a
            href="https://www.gmlart.cn"
            target="_blank" rel="noopener noreferrer"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 打字机光标闪烁动画 */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 0.8s infinite;
}
</style>
