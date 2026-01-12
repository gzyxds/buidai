<template>
  <div class="w-full py-12 sm:py-24 font-sans bg-white">
    <div class="container mx-auto px-4">
      <!-- 顶部标题 -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
          全场景 <span class="text-transparent bg-clip-text bg-[linear-gradient(to_right,#2055FA,#1B52F8,#A07CFE,#ADB9FF)]">AI 解决方案</span>
        </h2>
        <p class="text-lg sm:text-xl text-neutral-500 max-w-3xl mx-auto">
          赋能企业与个人的超级智能体平台，助力业务数智化升级
        </p>
      </div>

      <!-- 主体卡片容器 -->
      <div
        class="relative rounded-3xl overflow-hidden border border-white/50 shadow-2xl shadow-neutral-200/50 min-h-[600px] flex flex-col lg:flex-row transition-all duration-500 backdrop-blur-xl bg-white/40"
      >
        <!-- 背景装饰 -->
        <div class="absolute inset-0 z-0 bg-linear-to-br from-white/60 via-neutral-50/40 to-white/60"></div>

        <!-- 装饰性光晕 -->
        <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-neutral-200/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-neutral-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <!-- 导航区域 -->
        <aside class="relative z-10 w-full lg:w-1/4 bg-white/30 border-b lg:border-b-0 lg:border-r border-white/40 backdrop-blur-md flex flex-col">
          <!-- 移动端横向滚动/桌面端垂直列表 -->
          <div class="flex-1 overflow-x-auto lg:overflow-y-auto scrollbar-hide">
            <div class="flex lg:flex-col p-2 lg:p-4 gap-2">
              <button
                v-for="(t, idx) in tabs"
                :key="t.name"
                @click="setActive(idx)"
                @mouseenter="handleMouseEnter(idx)"
                class="group relative flex items-center px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 min-w-[140px] lg:min-w-0 text-left outline-none"
                :class="[
                  active === idx
                    ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                ]"
              >
                <!-- 激活指示条 -->
                <div
                  class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-neutral-900 rounded-r-full transition-all duration-300"
                  :class="active === idx ? 'opacity-100' : 'opacity-0'"
                ></div>

                <component
                  :is="t.icon"
                  class="h-5 w-5 mr-3 transition-colors shrink-0"
                  :class="active === idx ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'"
                />
                <span class="text-sm font-medium truncate">{{ t.name }}</span>

                <!-- 箭头 -->
                <ChevronRightIcon
                  class="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 hidden lg:block"
                  :class="active === idx ? 'opacity-100 translate-x-0 text-neutral-400' : ''"
                />
              </button>
            </div>
          </div>
        </aside>

        <!-- 内容面板 -->
        <section class="relative z-10 flex-1 p-6 sm:p-8 lg:p-12 flex flex-col">
          <!-- 头部信息 -->
          <div class="mb-8 animate-slide-up">
            <h3 class="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 flex items-center gap-3">
              {{ currentTab?.title }}
            </h3>
            <div class="h-1 w-20 bg-linear-to-r from-neutral-900 to-neutral-600 rounded-full"></div>
          </div>

          <!-- 功能网格 -->
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 content-start mb-8">
            <div
              v-for="(f, i) in currentTab?.features"
              :key="i"
              class="group flex gap-4 p-4 -ml-4 rounded-2xl hover:bg-neutral-50 transition-colors duration-300 border border-transparent hover:border-neutral-100"
            >
              <div class="shrink-0">
                <div class="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform duration-300">
                  <component :is="f.icon" class="h-5 w-5" />
                </div>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-1 text-neutral-900 group-hover:text-neutral-900 transition-colors">{{ f.title }}</h4>
                <p class="text-sm text-neutral-500 leading-relaxed">{{ f.desc }}</p>
              </div>
              <div class="shrink-0">
                <a href="https://chat.buidai.com" target="_blank" rel="noopener noreferrer" class="px-3 py-1 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-all shadow-sm">
                  立即创作
                </a>
              </div>
            </div>
          </div>

          <!-- 底部操作栏 -->
          <div class="mt-auto pt-6 border-t border-neutral-100 flex flex-wrap gap-4">
            <button @click="openQrModal('solution')" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-all shadow-lg shadow-neutral-200 hover:-translate-y-0.5">
              了解方案详情
              <ArrowRightIcon class="ml-2 h-4 w-4" />
            </button>

            <button @click="openQrModal('consult')" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full transition-all hover:border-neutral-300 hover:-translate-y-0.5 shadow-sm">
              联系售前咨询
              <ChatBubbleLeftRightIcon class="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  SparklesIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  MegaphoneIcon,
  PresentationChartLineIcon,
  MicrophoneIcon,
  PhotoIcon,
  DevicePhoneMobileIcon,
  ShareIcon,
  CloudArrowUpIcon,
  ArrowPathIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  CommandLineIcon
} from '@heroicons/vue/24/outline'

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'solution' | 'consult') => {
  const config = type === 'solution'
    ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
    : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

/**
 * AI Industry Solutions Component
 * 展示 AI 行业解决方案
 */

// 数据源
const tabs = [
  {
    name: 'AI 视觉创作',
    title: 'AI 视觉与创意生成解决方案',
    icon: PhotoIcon,
    features: [
      { icon: VideoCameraIcon, title: 'Sora2视频', desc: '新一代视频生成模型，支持长视频创作' },
      { icon: PhotoIcon, title: '香蕉绘画Nanobanana', desc: '专业级AI绘画工具，精准控制画面细节' },
      { icon: SparklesIcon, title: 'AI视频 & AI绘画', desc: '一站式智能视频与图像生成平台' },
      { icon: CodeBracketIcon, title: '艺术二维码', desc: '融合品牌元素的个性化艺术二维码生成' },
      { icon: PhotoIcon, title: '豆包文生图', desc: '基于字节跳动豆包模型的图像生成能力' },
      { icon: ArrowPathIcon, title: 'AI改图', desc: '智能图像编辑，支持局部重绘与风格迁移' },
      { icon: MicrophoneIcon, title: 'AI配音工具', desc: '逼真的语音合成，支持多种情感与音色' },
    ]
  },
  {
    name: '智能对话 Agent',
    title: '智能体与对话交互系统',
    icon: ChatBubbleLeftRightIcon,
    features: [
      { icon: CpuChipIcon, title: '智能体', desc: '自定义专属AI智能体，满足个性化需求' },
      { icon: ChatBubbleLeftRightIcon, title: 'AI对话', desc: '基于大语言模型的流畅自然交互体验' },
      { icon: CodeBracketIcon, title: '对话html预览', desc: '实时预览对话中生成的HTML代码效果' },
      { icon: CloudArrowUpIcon, title: '对话上传文件', desc: '支持在对话中直接上传并解析文件内容' },
      { icon: CommandLineIcon, title: '智能体DSL', desc: '通过DSL灵活编排智能体工作流' },
      { icon: SparklesIcon, title: '对话文案AI补全', desc: '智能预测并补全用户输入内容' },
      { icon: MicrophoneIcon, title: '语音播报', desc: '将对话回复自动转换为语音播报' },
      { icon: ShareIcon, title: '分享对话', desc: '一键生成链接，便捷分享精彩对话' },
    ]
  },
  {
    name: '知识库与文档',
    title: '企业级知识库与文档处理',
    icon: DocumentTextIcon,
    features: [
      { icon: DocumentTextIcon, title: '知识库', desc: '构建企业私有知识库，数据安全可控' },
      { icon: CloudArrowUpIcon, title: '文件导入导出', desc: '支持多种格式文档的批量导入与导出' },
      { icon: ArrowPathIcon, title: '问答对导入', desc: '快速导入QA问答对，优化模型回复' },
      { icon: ChartBarIcon, title: '拆分问答对', desc: '智能拆分长文档为独立的问答对片段' },
      { icon: DocumentTextIcon, title: '文档问答', desc: '基于文档内容的精准问答与检索' },
      { icon: DocumentTextIcon, title: 'PDF解析工具', desc: '高效提取PDF文档中的文本与表格' },
      { icon: DocumentTextIcon, title: '文件生成', desc: '自动生成报告、合同等标准化文档' },
    ]
  },
  {
    name: '模型与数据能力',
    title: '多模型管理与数据解析',
    icon: CpuChipIcon,
    features: [
      { icon: CpuChipIcon, title: 'MCP', desc: '支持模型上下文协议，增强模型能力' },
      { icon: CpuChipIcon, title: '模型管理', desc: '统一管理与调度各类大语言模型' },
      { icon: PhotoIcon, title: '大模型视觉识别', desc: '赋予模型强大的图像理解与分析能力' },
      { icon: GlobeAltIcon, title: '网页解析', desc: '智能提取网页正文与关键信息' },
      { icon: PhotoIcon, title: '图文解析', desc: '多模态内容深度理解与结构化提取' },
      { icon: DocumentTextIcon, title: '内容总结', desc: '快速提炼长文核心观点与摘要' },
      { icon: ChartBarIcon, title: '图表生成', desc: '根据数据自动生成可视化图表' },
    ]
  },
  {
    name: '营销与应用集成',
    title: '全渠道营销与应用生态集成',
    icon: MegaphoneIcon,
    features: [
      { icon: ChatBubbleLeftRightIcon, title: '发布至微信公众号', desc: '一键推送文章至微信公众号平台' },
      { icon: PhotoIcon, title: '发布至朋友圈海报', desc: '自动生成适合朋友圈传播的营销海报' },
      { icon: ChatBubbleLeftRightIcon, title: '发布至企业微信', desc: '无缝打通企业微信，赋能内部办公' },
      { icon: CpuChipIcon, title: '发布至影刀RPA', desc: '集成RPA能力，实现业务流程自动化' },
      { icon: PresentationChartLineIcon, title: '思维导图', desc: '一键生成结构清晰的思维导图' },
      { icon: ChartBarIcon, title: 'GEO排名', desc: '基于地理位置的搜索排名优化工具' },
      { icon: PresentationChartLineIcon, title: 'AI PPT', desc: '输入主题即可自动生成精美PPT' },
      { icon: SparklesIcon, title: '爆款文章生成', desc: '辅助创作高流量、高转化的爆款文章' },
    ]
  }
]

const active = ref(0)
const currentTab = computed(() => tabs[active.value] || tabs[0])

const setActive = (index: number) => {
  active.value = index
}

const handleMouseEnter = (index: number) => {
  active.value = index
}

// 映射背景图片
const getBackgroundImage = (tabName: string | undefined): string => {
  if (!tabName) return '/images/home-bg.png'
  const imageMap: { [key: string]: string } = {
    'AI 视觉创作': '/plugin/即梦AI绘画.png',
    '智能对话 Agent': '/plugin/AI直播短视频数字人.png',
    '知识库与文档': '/plugin/AI简历.png',
    '模型与数据能力': '/plugin/GEO优化排名工具.png',
    '营销与应用集成': '/plugin/AI商图秀.png'
  }
  return imageMap[tabName] || '/images/home-bg.png'
}
</script>

<style scoped>
/* 隐藏滚动条但允许滚动 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
