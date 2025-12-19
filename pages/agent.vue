<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- Hero Section -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>BuidAI V4.6.8 strong release</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
          BuidAI企业级 <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 block sm:inline">Agent</span>构建平台
        </h1>

        <p class="text-base sm:text-xl text-gray-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
         可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </button>
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 active:scale-95 transition-all shadow-[0_4px_14px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 touch-manipulation">
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </button>
        </div>
      </div>
    </section>

    <!-- 演示视频部分(替换为功能卡) -->
    <section class="py-10 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(item, index) in featureCards" :key="index" class="flex flex-col gap-4">
            <!-- 类别标题药丸 -->
            <div class="relative w-full text-center bg-[#e6e9ff] rounded-lg p-[8px] md:p-[12px] mb-[16px] md:mb-[24px] text-black text-lg font-medium leading-[22px]">
              {{ item.category }}
              <!-- 底部小三角指示器 -->
              <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#e6e9ff] rotate-45"></div>
            </div>

            <!-- 功能卡片主体 -->
            <div class="bg-white rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 flex flex-col items-center text-center hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.99] transition-all duration-300 h-full touch-manipulation">
              <!-- Tag -->
              <div class="self-start mb-4">
                <span class="bg-indigo-50 text-indigo-600 text-[10px] sm:text-xs px-2.5 py-1 rounded-md font-bold">
                  {{ item.tag }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold text-gray-900 mb-3 px-2">{{ item.title }}</h3>

              <!-- 描述 -->
              <p class="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-4 px-1">
                {{ item.desc }}
              </p>

              <!-- 图像区域-->
              <div class="mt-auto w-full aspect-4/3 bg-gray-50 rounded-lg overflow-hidden relative group">
                <img :src="item.image" :alt="item.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能部分 -->
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-gray-900">Agent释放智能体无限潜能</h2>

        <div class="flex flex-col gap-8 md:gap-12">
          <div v-for="(feature, idx) in features" :key="idx"
               class="rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500 group">
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
              <!-- 左侧内容 -->
              <div class="w-full lg:w-1/3 flex flex-col gap-6 md:gap-8 xl:ml-4 text-center lg:text-left">
                <!-- 图标 -->
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm mx-auto lg:mx-0">
                  <component :is="feature.icon" class="w-8 h-8 md:w-10 md:h-10" :class="feature.iconColor" />
                </div>

                <div>
                  <h3 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">{{ feature.title }}</h3>
                  <p class="text-base md:text-lg text-gray-500 leading-relaxed">
                    {{ feature.desc }}
                  </p>
                </div>
              </div>

              <!-- 右侧图像 -->
              <div class="w-full lg:w-2/3">
                <div class="relative rounded-xl overflow-hidden bg-gray-50">
                   <img :src="feature.image" :alt="feature.title" loading="lazy" class="w-full h-auto" />
                   <!-- Overlay Gradient -->
                   <div class="absolute inset-0 bg-linear-to-t from-white/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 优势 -->
    <section class="py-10 md:py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10 md:mb-16">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">优势</h2>
          <p class="text-gray-500 text-sm md:text-base">为什么选择 BuidAI?</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(adv, idx) in advantages" :key="idx"
               class="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow transition-all group">
            <component :is="adv.icon" class="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition-colors mb-4" />
            <h3 class="text-lg font-bold mb-2 text-gray-900">{{ adv.title }}</h3>
            <p class="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">{{ adv.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full text-center lg:text-left">
            <h2 class="text-2xl md:text-4xl font-bold text-[#0F0F12] mb-4">常见问题</h2>
            <p class="text-gray-500 text-sm md:text-base">关于 BuidAI 的常见疑问解答</p>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                @click="toggleFaq(idx)"
                class="w-full flex items-start justify-between p-6 text-left focus:outline-none hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation min-h-[44px]"
              >
                <span class="text-base md:text-lg font-medium text-[#0F0F12] pr-4 md:pr-8">{{ faq.question }}</span>
                <span class="text-gray-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-45': activeFaq === idx }">
                  <PlusIcon class="w-5 h-5" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-sm md:text-[15px] text-[#5A5E6A] leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="py-10 md:py-20 relative overflow-hidden bg-white border-t border-gray-100">
      <!-- Footer Gradient -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] md:h-[300px] bg-linear-to-t from-blue-50 to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-8 mb-10 md:mb-20">
          <div class="text-center lg:text-left">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">现在开始构建您的 AI Agent</h2>
            <p class="text-base md:text-lg text-gray-500">BuidAI, 让 AI Agent 构建触手可及</p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button class="w-full sm:w-[200px] h-[50px] md:h-[60px] text-lg md:text-[22px] font-semibold px-10 py-3 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 active:scale-95 transition-all shadow-sm flex items-center justify-center">
              立即使用
            </button>
            <button class="w-full sm:w-[200px] h-[50px] md:h-[60px] text-lg md:text-[22px] font-semibold px-10 py-3 rounded-full bg-[#080d1ee6] text-white hover:bg-[#080d1e] active:scale-95 transition-all shadow-lg flex items-center justify-center">
              开始使用
            </button>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ArrowsRightLeftIcon,
  CommandLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PlusIcon,
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

// 类型定义：功能卡片
interface FeatureCard {
  category: string
  tag: string
  title: string
  desc: string
  image: string
}

// 类型定义：核心特性
interface Feature {
  title: string
  desc: string
  icon: any // HeroIcon component type
  iconColor: string
  iconBg: string
  image: string
}

// 类型定义：优势
interface Advantage {
  title: string
  desc: string
  icon: any // HeroIcon component type
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

// SEO Meta
useSeoMeta({
  title: 'BuidAI - 企业级 AI Agent 构建平台',
  description: 'BuidAI 是一个基于 LLM 大语言模型的知识库问答系统，提供开箱即用的数据处理、模型调用等能力。'
})

/**
 * 功能卡片数据列表
 * 展示不同场景下的 AI 应用案例
 */
const featureCards: FeatureCard[] = [
  {
    category: 'AI 写作',
    tag: '研究报告',
    title: '中国潮玩调研报告',
    desc: '写一份关于中国潮玩市场的详细的调研报告，并生成精美的网页',
    image: '/潮玩.png'
  },
  {
    category: 'AI PPT',
    tag: '行业调研',
    title: '二奢行业调研PPT',
    desc: '围绕 “二手奢侈品交易市场的发展现状” 制作调研 PPT，分析消费者对二手奢侈品的接受度、购买渠道偏好（线上平台、线下门店）及顾虑（真伪鉴定、价格评估等），现有交易平台的运营模式及优缺点，附市场规范发展建议。',
    image: '/PPT.png'
  },
  {
    category: 'AI 设计',
    tag: '海报创作',
    title: '主题活动海报设计',
    desc: '做一个活动海报，内容： 元气发电站市集 上班暂停，来元气发电站撒野啦 创意宇宙大爆发，美味能量补给站 手作DIY，塔罗占卜，香薰手作，视听盛宴 在这里都将有一场前所未有的体验 这个夏天，让我们一起在市集吃下元气释放无限可能！ 7.30-8.1 16:00-22:00 商业空间 B2北广场 12号线出口处',
    image: '/海报.png'
  },
  {
    category: 'AI 网站开发',
    tag: '提效工具',
    title: '图片主色提取工具',
    desc: '开发一个在线图片颜色提取工具，用户可以上传图片，工具能自动分析并提取图片中最主要的5-6种颜色，生成可视化调色盘，每个颜色块下方显示其HEX色号，并提供一键复制功能。',
    image: '/提取.png'
  }
]

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features: Feature[] = [
  {
    title: '必定开发平台',
    desc: '零基础开启 Agent 专业开发。必定开发平台是一站式 Al Agent 开发工具。提供各类最新大模型和工具、多种开发模式和框架，从开发到部署，为你提供最便捷的 Agent 开发环境。上万家企业、数百万开发者正在使用必定开发平台。',
    icon: CubeIcon,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    image: '/agent-1.png'
  },
  {
    title: '必定罗盘',
    desc: '让 Agent 开发调优不再迷航。必定罗盘是一个面向开发者，专注于 Al Agent 开发与运维的平台级解决方案。它可以解决 AlAgent 开发过程中面临的各种挑战，提供从开发、调试、评估、到监控的全生命周期管理能力。',
    icon: WrenchScrewdriverIcon,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    image: '/agent-2.gif'
  },
  {
    title: 'Eino 框架',
    desc: '让 Agent 开发从未如此简单。Eino 是基于Go 语言的 Al Agent 开源开发框架，提供了丰富的辅助 Al Agent 开发的原子组件、集成组件、组件编排、切面扩展等能力，可以帮助开发者更加简单便捷地开发出架构清晰、易维护、高可用的 Al Agent 和各类AI 应用。',
    icon: PuzzlePieceIcon,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-50',
    image: '/agent-3.png'
  }
]

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    desc: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: CubeIcon
  },
  {
    title: '独特的 QA 结构',
    desc: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: SparklesIcon
  },
  {
    title: '可视化工作流',
    desc: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: ArrowsRightLeftIcon
  },
  {
    title: '无限扩展',
    desc: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: PuzzlePieceIcon
  },
  {
    title: '便于调试',
    desc: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: WrenchScrewdriverIcon
  },
  {
    title: '支持多种模型',
    desc: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: WrenchIcon
  }
]

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '开源版和商业版有什么区别？',
    answer: '开源版遵循 Apache 2.0 协议，您可以免费用于商业项目。商业版提供更专业的技术支持和企业级特性。'
  },
  {
    question: 'BuidAI 私有部署对服务器配置有什么要求？',
    answer: '基础运行建议 2核 4G 内存以上。如果需要运行本地大模型，则需要高性能 GPU 服务器。'
  },
  {
    question: 'BuidAI 可以接入微信/飞书/钉钉吗？',
    answer: '可以。BuidAI 提供了标准的 API 接口，可以方便地接入各类 IM 工具和第三方应用。'
  },
  {
    question: '如何获取 API Key？',
    answer: '在控制台的应用设置中，您可以创建和管理 API Key。请妥善保管您的 Key。'
  }
]

// FAQ 展开/收起状态管理
const activeFaq = ref<number | null>(null)

/**
 * 切换 FAQ 展开状态
 * 使用索引控制当前展开的项，再次点击则收起
 * @param idx - 点击的 FAQ 索引
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<style scoped>
/* 自定义动画或样式补充 */
</style>
