<script setup lang="ts">
/**
 * AI 赋能企业通用场景区块：sticky 卡片栈
 */
import type { Component } from 'vue'
import {
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  DocumentTextIcon,
} from '@heroicons/vue/24/outline'

/** 场景统计数据 */
const scenarioStats = [
  { value: '9+', label: '应用场景', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  { value: '50+', label: '行业模板', bg: 'bg-blue-50', color: 'text-blue-600' },
  { value: '24h', label: '快速部署', bg: 'bg-purple-50', color: 'text-purple-600' },
]

interface Scenario {
  title: string
  items: string[]
  icon: Component
  iconBg: string
  image: string
  index: string
}

const scenarios: Scenario[] = [
  {
    title: 'Nanobanana',
    items: ['基于 Gemini 3 Pro Image Preview 模型，支持文生图、图生图及多图融合', '保持角色一致性，支持文本渲染，生成速度极快', '预置多个模板开箱即用，后台可自由配置提示词和参考图'],
    icon: ChatBubbleLeftRightIcon, iconBg: 'bg-blue-50 text-blue-600', image: '/plugin/Nanobanana.png', index: '01',
  },
  {
    title: '企业智能体系统',
    items: ['支持创建具备记忆、目标和工具使用能力的智能体，实现自主任务执行', '通过 AI 之间的分工合作，精准、稳定地解决复杂业务问题', '可视化工作流编排，降低使用门槛，提高开发效率'],
    icon: UserGroupIcon, iconBg: 'bg-indigo-50 text-indigo-600', image: '/product/model-1.png', index: '02',
  },
  {
    title: '企业 AI 客服系统',
    items: ['一键即可将 AI 技术与企业知识库相连，全面支持 PDF、Word、Excel 等文档格式', '轻松通过 API 将 AI 融入企业系统，提升内部知识检索效率', '支持多渠道接入，如网站、微信、APP 等，提供 7×24 小时智能客服服务'],
    icon: BookOpenIcon, iconBg: 'bg-emerald-50 text-emerald-600', image: '/plugin/writing-assist.png', index: '03',
  },
  {
    title: 'AI 漫剧创意系统',
    items: ['快速搭建支持剧本智能创作、角色形象生成、漫剧素材库管理的系统', '适配分镜设计与台词优化，显著降低漫剧创作门槛', '支持创建无限量剧本和小说，提供丰富的剧情模板和冲突框架'],
    icon: SparklesIcon, iconBg: 'bg-purple-50 text-purple-600', image: '/plugin/wanxiang.png', index: '04',
  },
  {
    title: 'AI 数字人系统',
    items: ['上传视频即可克隆专属形象，1:1 还原真人表情与动作，支持 4K 超清画质', '仅需一段语音即可克隆声音音色，支持多语种合成及 SSML 语音标记', '用于直播带货、企业代言、教育培训等场景，打造逼真数字形象'],
    icon: UserGroupIcon, iconBg: 'bg-rose-50 text-rose-600', image: '/product/human-1.png', index: '05',
  },
  {
    title: 'AI 视频剪辑系统',
    items: ['支持自动化批量剪辑、智能转场、滤镜调色，大幅提升视频制作效率', '智能字幕添加与背景音乐匹配，一键生成节奏感强的混剪视频', '提供海量模板与素材库，轻松制作门店营销、产品带货等专业级视频内容'],
    icon: SparklesIcon, iconBg: 'bg-amber-50 text-amber-600', image: '/plugin/video-mix.png', index: '06',
  },
  {
    title: 'AI 简历生成系统',
    items: ['通过智能问答快速收集个人信息，一键生成结构完整的专业简历', '提供数十款专业模板，涵盖不同行业和职位，支持在线编辑与下载', '深度解析简历亮点并提供优化建议，显著提升简历质量与影响力'],
    icon: DocumentTextIcon, iconBg: 'bg-teal-50 text-teal-600', image: '/product/resume-1.png', index: '07',
  },
  {
    title: 'AI PPT 演示系统',
    items: ['根据主题或大纲自动生成结构清晰、设计美观的 PPT 演示文稿', '内置多种模板与图表，支持智能配色、字体搭配与动画效果优化', '一键生成演讲备注，支持实时预览与云端存储，满足各类展示需求'],
    icon: CommandLineIcon, iconBg: 'bg-cyan-50 text-cyan-600', image: '/plugin/aippt.png', index: '08',
  },
  {
    title: 'AI音乐创作系统',
    items: ['以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐', '降低音乐创作门槛，支持个人娱乐与商用配乐，提供完整商用授权'],
    icon: SparklesIcon, iconBg: 'bg-violet-50 text-violet-600', image: '/plugin/AI音乐.png', index: '09',
  },
]
</script>

<template>
  <!-- AI赋能企业通用场景 -->
  <section class="py-8 sm:py-12 lg:py-20 bg-neutral-50/50">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="text-center mb-8 sm:mb-10 md:mb-14">
        <span class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-3 sm:mb-4">
          <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
          解决方案
        </span>

        <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--brand-text)] mb-3 sm:mb-4 tracking-tight">
          AI 赋能企业<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">通用场景</span>
        </h2>

        <p class="text-neutral-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
          基于智言AI强大的工作流引擎与多模型集成能力，为企业打造智能化转型全栈解决方案。
          覆盖内容创作、客户服务、数字营销等核心场景，助力企业降本增效，开启AI驱动新增长。
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-8">
          <div v-for="stat in scenarioStats" :key="stat.label" class="flex items-center gap-2">
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" :class="stat.bg">
              <span class="font-bold text-xs sm:text-sm" :class="stat.color">{{ stat.value }}</span>
            </div>
            <span class="text-neutral-600 text-xs sm:text-sm">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="scenario-stack">
        <div
          v-for="(scenario, idx) in scenarios"
          :key="idx"
          class="scenario-card"
          :style="{ '--card-top': '100px', zIndex: idx + 1 }"
        >
          <div class="scenario-number">{{ scenario.index }}</div>

          <div class="relative z-10 pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 md:pt-10 md:pb-10 md:px-8 lg:pt-12 lg:pb-12 lg:px-10">
            <div
              class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-stretch relative z-10"
              :class="idx % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- 左侧内容 -->
              <div class="w-full lg:w-2/5 flex flex-col order-2 lg:order-1">
                <div class="flex-1 bg-neutral-50 rounded-xl border border-neutral-100 p-4 sm:p-6 md:p-8 flex flex-col">
                  <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0" :class="scenario.iconBg">
                      <component :is="scenario.icon" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 class="text-base sm:text-lg md:text-xl font-bold text-neutral-900 leading-tight">{{ scenario.title }}</h3>
                  </div>

                  <div class="w-full h-px bg-neutral-200 mb-4 sm:mb-6" />

                  <ul class="space-y-2 sm:space-y-3 flex-1">
                    <li v-for="(item, i) in scenario.items" :key="i" class="flex items-start gap-2 sm:gap-3 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      <CheckCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>

                  <div class="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-neutral-200">
                    <a
                      href="https://www.gmlart.cn/"
                      target="_blank" rel="noopener noreferrer"
                      class="group/btn inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
                    >
                      立即体验
                      <ArrowRightIcon class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- 右侧图片 -->
              <div class="w-full lg:w-3/5 order-1 lg:order-2">
                <div class="relative w-full h-full min-h-[200px] sm:min-h-[240px] lg:min-h-0">
                  <div class="relative w-full h-full aspect-video lg:aspect-auto lg:h-full">
                    <div class="absolute inset-0 w-full h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-neutral-200 p-2 sm:p-3 md:p-5">
                      <img
                        :src="scenario.image"
                        :alt="scenario.title"
                        loading="lazy"
                        decoding="async"
                        class="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scenario-stack {
  display: flex;
  flex-direction: column;
  position: relative;
}

.scenario-card {
  position: sticky;
  top: var(--card-top);
  width: 100%;
  min-height: auto;
  margin-bottom: 32px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.scenario-number {
  position: absolute;
  left: 24px;
  top: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #9CA3AF;
  font-size: 12px;
  font-weight: 500;
  font-family: 'SF Mono', Monaco, monospace;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  z-index: 20;
}

.scenario-card:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .scenario-card {
    top: calc(var(--card-top) * 0.7);
    border-radius: 10px;
  }
  .scenario-number {
    left: 20px;
    top: 20px;
    width: 28px;
    height: 28px;
    font-size: 11px;
  }
}

@media (max-width: 767px) {
  .scenario-stack {
    gap: 16px;
    overflow: hidden;
  }
  .scenario-card {
    position: relative;
    top: auto;
    border-radius: 12px;
    margin-bottom: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  }
  .scenario-number {
    left: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
}

@media (max-width: 479px) {
  .scenario-stack {
    gap: 12px;
  }
  .scenario-card {
    border-radius: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
