<script setup lang="ts">
/**
 * 产品核心优势区块：grid-border 三段式 + 功能折叠列表
 */
import { ref } from 'vue'
// 类型定义：核心特性
interface Feature {
  title: string
  desc: string
  icon: string
  image: string
  points: { title: string; desc: string }[]
  activePoint: number
}

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features = ref<Feature[]>([
  {
    title: '全栈赋能',
    desc: '最新的大模型，丰富的资源库，提供 AI Agent 开发所需的全部核心技术。',
    icon: 'i-heroicons-cube',
    image: '/images/agent/Fullstack.png',
    points: [
      { title: '多模型接入', desc: '支持 GPT-4、Claude、Gemini 等全球主流大模型' },
      { title: '知识库管理', desc: '强大的 RAG 检索增强，支持多种文档格式' },
      { title: '工作流编排', desc: '可视化拖拽，零代码构建复杂 AI 流程' }
    ],
    activePoint: 0
  },
  {
    title: '开箱即用',
    desc: '健全的应用模板和编排框架，用最低的成本开发最专业的 AI Agent。',
    icon: 'i-heroicons-wrench-screwdriver',
    image: '/images/agent/Outofthebox.png',
    points: [
      { title: '丰富模板', desc: '预置 50+ 行业场景模板，一键快速部署' },
      { title: '智能体市场', desc: '海量优质 Agent 应用，即装即用' },
      { title: '插件生态', desc: '丰富的工具插件，扩展无限可能' }
    ],
    activePoint: 0
  },
  {
    title: '安全可信',
    desc: '覆盖 Agent 开发全生命周期安全保障，满足企业级安全需求。',
    icon: 'i-heroicons-puzzle-piece',
    image: '/images/agent/privatization.png',
    points: [
      { title: '私有化部署', desc: '数据本地化存储，完全自主可控' },
      { title: '权限管理', desc: '细粒度访问控制，保障数据安全' },
      { title: '审计日志', desc: '完整操作记录，合规可追溯' }
    ],
    activePoint: 0
  },
  {
    title: '全网发布',
    desc: '点击一下，全平台上线！APP、网页、小程序统统搞定。',
    icon: 'i-heroicons-rocket-launch',
    image: '/images/agent/Network-wide.png',
    points: [
      { title: '多端适配', desc: '一次开发，自动适配 Web、iOS、Android' },
      { title: '一键发布', desc: '无需配置服务器，快速上线运营' },
      { title: '持续集成', desc: '自动化部署流程，版本迭代无忧' }
    ],
    activePoint: 0
  }
])
</script>

<template>
  <!-- 产品优势 -->
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
                核心功能
              </span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              产品核心优势
            </h2>
            <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
              为您提供一站式的 AI 解决方案，助力企业实现业务效率的质变与创新
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 功能展示区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div class="flex flex-col gap-16 md:gap-24">
        <div
          v-for="(feature, idx) in features"
          :key="idx"
          class="group"
        >
          <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <!-- 文本内容 -->
            <div
              class="flex flex-col gap-4"
              :class="{ 'lg:order-last': idx % 2 === 1 }"
            >
              <!-- 标签 -->
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium w-fit mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16">
                  <path fill="currentColor" fill-opacity="0.8" d="m10.5 6.882-5.98 5.98a.47.47 0 0 1-.665 0l-1.217-1.215a.47.47 0 0 1 0-.665L8.618 5z"/>
                  <path fill="currentColor" d="M14.5 9.375a.46.46 0 0 1-.136.324.47.47 0 0 1-.327.134h-.926v.917a.46.46 0 0 1-.135.324.466.466 0 0 1-.655 0 .46.46 0 0 1-.136-.324v-.917h-.926a.47.47 0 0 1-.327-.134.456.456 0 0 1 .327-.782h.926V8a.465.465 0 0 1 .926 0v.917h.926c.123 0 .24.048.327.134a.46.46 0 0 1 .136.324M3.39 4.792h.925v.916a.465.465 0 0 0 .926 0v-.916h.926c.123 0 .24-.049.327-.135a.456.456 0 0 0-.327-.782h-.926v-.917a.46.46 0 0 0-.136-.324.465.465 0 0 0-.79.324v.917H3.39a.47.47 0 0 0-.327.134.456.456 0 0 0 .327.783m7.406 6.875h-.462v-.459a.46.46 0 0 0-.136-.324.466.466 0 0 0-.79.324v.459h-.463a.47.47 0 0 0-.328.134.456.456 0 0 0 .328.782h.463v.459c0 .121.048.238.135.324a.466.466 0 0 0 .79-.324v-.459h.463c.123 0 .241-.048.328-.134a.456.456 0 0 0-.328-.782M12.84 5.25l-8.062 7.981a.93.93 0 0 1-1.309 0l-1.198-1.184a.92.92 0 0 1-.2-1 .9.9 0 0 1 .2-.297l8.063-7.981a.93.93 0 0 1 1.009-.2.9.9 0 0 1 .3.2l1.197 1.184a.915.915 0 0 1 .2 1 .9.9 0 0 1-.2.297M9.678 7.083 8.482 5.898l-5.556 5.5 1.197 1.185zm2.507-2.481-1.197-1.185L9.136 5.25l1.198 1.185z"/>
                </svg>
                核心功能
              </div>

              <!-- 标题 -->
              <h3 class="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight mb-3">
                {{ feature.title }}
              </h3>

              <!-- 功能折叠列表 -->
              <div class="flex flex-col gap-1">
                <div
                  v-for="(point, pIndex) in feature.points"
                  :key="pIndex"
                  class="rounded-xl flex gap-3 w-full group/item transition-all duration-300 pr-3 cursor-pointer"
                  :class="feature.activePoint === pIndex ? 'bg-indigo-50/50' : ''"
                  @mouseenter="feature.activePoint = pIndex"
                >
                  <div class="flex flex-col pl-3 py-3 items-center gap-[2px]">
                    <!-- Icon -->
                    <div class="relative w-4 h-4 mt-1 shrink-0 flex items-center justify-center text-indigo-500">
                      <!-- 活动图标 -->
                      <svg v-if="feature.activePoint === pIndex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="absolute inset-0 transition-opacity duration-300">
                        <path fill="currentColor" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7m3.073 5.766-3.769 3.769a.54.54 0 0 1-.762 0L4.927 8.919a.539.539 0 0 1 .762-.761l1.234 1.235 3.388-3.39a.54.54 0 0 1 .92.382.54.54 0 0 1-.158.38"/>
                      </svg>
                      <!-- Inactive Icon -->
                      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16" class="absolute inset-0 transition-opacity duration-300 opacity-30 group-hover/item:opacity-50">
                        <circle cx="8" cy="8" r="7.25"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg>
                    </div>

                    <!--连接线 -->
                    <div
                      v-if="pIndex < feature.points.length - 1"
                      class="w-[2px] grow bg-neutral-100 rounded-full relative overflow-hidden min-h-[16px]"
                    >
                      <!--活动进度条 -->
                      <div
                        class="absolute top-0 left-0 w-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
                        :style="{ height: feature.activePoint === pIndex ? '100%' : '0%' }"
                        :class="{ 'opacity-0': feature.activePoint > pIndex }"
                      />
                    </div>
                  </div>

                  <div class="grow">
                    <div class="relative transition-all duration-300 ease-out">
                      <h4
                        class="flex items-center gap-3 font-medium leading-normal p-3 pl-0 transition-colors duration-300 text-base"
                        :class="feature.activePoint === pIndex ? 'text-neutral-900' : 'text-neutral-500 group-hover/item:text-neutral-700'"
                      >
                        {{ point.title }}
                      </h4>

                      <div
                        class="grid transition-[grid-template-rows] duration-300 ease-out"
                        :class="feature.activePoint === pIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                      >
                        <div class="overflow-hidden">
                          <div
                            class="text-sm text-neutral-500 leading-relaxed pt-0 pb-3 opacity-0 -translate-y-1 transition-all duration-300 delay-75"
                            :class="{ 'opacity-100 translate-y-0': feature.activePoint === pIndex }"
                          >
                            {{ point.desc }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA 按钮 -->
              <div class="mt-2">
                <a
                  href="https://www.gmlart.cn"
                  target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all duration-200 shadow-md shadow-indigo-500/20 hover:-translate-y-0.5"
                >
                  立即体验
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-5 h-5 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- 视频演示 -->
            <div class="relative h-full">
              <div class="relative p-2 rounded-3xl bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 h-full">
                <div class="relative rounded-2xl overflow-hidden border border-neutral-100 shadow-sm bg-white aspect-video">
                  <img
                    :src="feature.image"
                    :alt="feature.title"
                    class="w-full h-full object-cover"
                  />
                  <!-- 图片遮罩 -->
                  <div class="absolute inset-0 bg-linear-to-tr from-neutral-500/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
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
          <span class="text-base sm:text-lg text-neutral-600 font-medium">全栈赋能，开箱即用，安全可信，全网发布</span>
        </div>
      </div>

      <!-- 底部边框行 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>
