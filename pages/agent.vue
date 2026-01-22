<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>BuidAI V4.6.8 strong release</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight">
必创AI <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400 block sm:inline">企业级 AI </span>应用构建平台
        </h1>

        <p class="text-base sm:text-xl text-neutral-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
         可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a href="https://cloud.buidai.com/" target="_blank" class="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </a>
          <a href="https://doc.buidai.com/" target="_blank" class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation">
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </a>
        </div>
      </div>
    </section>

    <!-- 核心功能 卡片网格 -->
    <section class="py-12 md:py-20 bg-neutral-50/50">
      <div class="container mx-auto px-4">
        <!-- 标题区域 -->
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">核心功能</h2>
          <p class="text-lg text-neutral-500 max-w-2xl mx-auto">
            全方位赋能企业 AI 转型，打造智能高效的业务闭环
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(item, index) in featureCards" :key="index" class="group relative flex flex-col h-full">

            <!-- 顶部装饰线条 -->
            <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-neutral-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- 卡片主体 -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 flex-1 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden z-10">

              <!-- 背景光晕装饰 -->
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-neutral-50 rounded-full blur-3xl group-hover:bg-neutral-100/50 transition-colors duration-500 z-0"></div>

              <!-- 头部信息 -->
              <div class="relative z-10 flex items-start justify-between mb-6">
                 <!-- 类别标签 -->
                 <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200 group-hover:text-neutral-900 transition-colors">
                  {{ item.category }}
                </span>
                <!-- 功能标签 -->
                <span class="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                  {{ item.tag }}
                </span>
              </div>

              <!-- 标题与描述 -->
              <div class="relative z-10 mb-6 flex-1">
                <h3 class="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-900 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                  {{ item.desc }}
                </p>
              </div>

              <!-- 图像区域 -->
              <div class="relative z-10 mt-auto rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 aspect-video group-hover:border-neutral-200 transition-colors duration-300">
                <img
                  :src="item.image"
                  :alt="item.title"
                  loading="lazy"
                  class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全行业解决方案 -->
    <AIIndustry />

    <!-- 产品优势 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 md:mb-20">
          <span class="inline-block py-1 px-3 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 text-sm font-semibold mb-4">Core Strengths</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">产品核心优势</h2>
          <p class="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            为您提供一站式的 AI 解决方案，助力企业实现业务效率的质变与创新
          </p>
        </div>

        <div class="flex flex-col gap-16 md:gap-24">
          <div v-for="(feature, idx) in features" :key="idx"
               class="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24"
               :class="{ 'lg:flex-row-reverse': idx % 2 === 1 }"
          >
            <!-- 文本内容 -->
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div class="w-16 h-16 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" class="w-8 h-8 text-neutral-900" />
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{{ feature.title }}</h3>
              <p class="text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
                {{ feature.desc }}
              </p>

              <!-- 装饰线条 -->
              <div class="w-20 h-1 bg-neutral-100 rounded-full group-hover:w-32 group-hover:bg-neutral-900 transition-all duration-300"></div>
            </div>

            <!-- 视频演示 -->
            <div class="w-full lg:w-1/2">
              <div class="relative rounded-2xl overflow-hidden shadow-xl shadow-neutral-200 border border-neutral-100 bg-white aspect-video group-hover:-translate-y-2 transition-transform duration-300">
                <video
                  :src="feature.video"
                  autoplay
                  loop
                  muted
                  playsinline
                  class="w-full h-full object-cover"
                ></video>
                <!-- 视频遮罩 -->
                <div class="absolute inset-0 bg-linear-to-tr from-neutral-500/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 md:mb-20">
          <UBadge label="Why 必创AI" variant="subtle" color="neutral" class="mb-4 px-3 py-1" />
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">为什么选择 必创AI ?</h2>
          <p class="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            从底层架构到上层应用，我们提供全栈式的 AI 解决方案，助您在智能时代保持领先
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(adv, idx) in advantages" :key="idx"
               class="group p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200">

            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors duration-200">
                <component :is="adv.icon" class="w-7 h-7 text-neutral-600 dark:text-neutral-300 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors duration-200" />
              </div>

              <h3 class="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">{{ adv.title }}</h3>
              <p class="text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--常见问题部分 -->
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full text-center lg:text-left">
            <h2 class="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">常见问题</h2>
            <p class="text-neutral-500 text-sm md:text-base mb-6">关于必创AI的常见疑问解答</p>
            <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-center lg:justify-start">
              <button @click="openQrModal('coupon')" class="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
                <TicketIcon class="w-4 h-4" />
                获取优惠码
              </button>
              <button @click="openQrModal('wechat')" class="px-6 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation">
                <ChatBubbleLeftRightIcon class="w-4 h-4" />
                联系客服
              </button>
            </div>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              <button
                @click="toggleFaq(idx)"
                class="w-full flex items-start justify-between p-6 text-left focus:outline-none hover:bg-neutral-50 active:bg-neutral-100 transition-colors touch-manipulation min-h-[44px]"
              >
                <span class="text-base md:text-lg font-medium text-neutral-900 pr-4 md:pr-8">{{ faq.question }}</span>
                <span class="text-neutral-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-45': activeFaq === idx }">
                  <PlusIcon class="w-5 h-5" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-sm md:text-[15px] text-neutral-500 leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-neutral-900">
      <!-- 装饰背景 -->
      <div class="absolute inset-0 bg-linear-to-b from-transparent to-neutral-50/50 dark:to-neutral-800/50 pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/30">
          <!-- 左侧文案 -->
          <div class="text-center lg:text-left max-w-2xl">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight leading-tight">
              现在开始构建您的 <span class="text-transparent bg-clip-text bg-[linear-gradient(to_right,#2055FA,#1B52F8,#A07CFE,#ADB9FF)]">AI Agent</span>
            </h2>
            <p class="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              加入数万开发者的行列，使用 必创AI 释放智能体的无限潜能，让 AI 触手可及。
            </p>
          </div>

          <!-- 右侧按钮组 -->
          <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <UButton
              label="立即使用"
              size="lg"
              variant="ghost"
              color="neutral"
              class="w-full sm:w-auto justify-center px-6 py-3 font-medium rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
            />
            <UButton
              label="开始构建"
              size="lg"
              color="neutral"
              variant="solid"
              class="w-full sm:w-auto justify-center px-6 py-3 font-medium rounded-xl shadow-md hover:-translate-y-0.5 transition-all bg-neutral-900 text-white hover:bg-neutral-800"
              icon="i-heroicons-rocket-launch"
            />
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
  ArrowRightIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

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
  video: string
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

// SEO 元数据配置
useSeoMeta({
  title: '必创AI - 企业级 AI Agent 智能体构建平台',
  description: '必创AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。全方位赋能企业 AI 转型，打造智能高效的业务闭环。',
  keywords: 'AI Agent, 智能体, 企业级AI, AI应用平台, 必创AI, Workflow, RAG',
  ogTitle: '必创AI - 企业级 AI Agent 智能体构建平台',
  ogDescription: '必创AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。',
  ogType: 'website'
})

/**
 * 功能卡片数据列表
 * 展示不同场景下的 AI 应用案例
 */
const featureCards: FeatureCard[] = [
  {
    category: 'AI 核心',
    tag: '多模态模型',
    title: '大语言模型',
    desc: '集成全球领先的 LLM 模型，支持 GPT-4o、Claude 3.5、Gemini Pro 等主流模型，提供稳定、高速的 API 调用服务，满足对话、写作、翻译等多种场景需求。',
    image: '/images/大语言模型.jpeg'
  },
  {
    category: '知识管理',
    tag: '高效检索',
    title: 'RAF知识库',
    desc: '构建企业级 RAF 知识库，支持 PDF、Word、Markdown 等多格式文档导入，自动分段与向量化，实现精准的语义检索与问答，让 AI 懂你的业务。',
    image: '/images/知识库.jpg'
  },
  {
    category: '流程自动化',
    tag: '可视化编排',
    title: '工作流编排',
    desc: '强大的可视化 Workflow 编排引擎，通过拖拽即可将大模型、插件、知识库等组件连接起来，构建复杂的业务流程，实现从简单对话到复杂任务的自动化处理。',
    image: '/images/工作流编排.jpg'
  },
  {
    category: '协议标准',
    tag: '模型上下文',
    title: 'MCP服务',
    desc: '全面支持 Model Context Protocol (MCP)，实现模型与数据的无缝连接。标准化的接口协议，让智能体能够安全、高效地访问本地文件、数据库及第三方 API 服务。',
    image: '/images/MCP服务.jpeg'
  }
]

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features: Feature[] = [
  {
    title: '全栈赋能',
    desc: '最新的大模型，丰富的资源库，提供 AI Agent 开发所需的全部核心技术。',
    icon: CubeIcon,
    video: 'https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_5947ecf038587e21912f7a7f0c29723a.mp4'
  },
  {
    title: '开箱即用',
    desc: '健全的应用模板和编排框架，用最低的成本开发最专业的 AI Agent。',
    icon: WrenchScrewdriverIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7a2291113013f873_1749556611819.mp4'
  },
  {
    title: '安全可信',
    desc: '覆盖 Agent 开发全生命周期安全保障，满足企业级安全需求。',
    icon: PuzzlePieceIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d2dabbdbb1d7fbae_1765444399839.mp4'
  },
  {
    title: '全网发布',
    desc: '点击一下，全平台上线！APP、网页、小程序统统搞定。',
    icon: RocketLaunchIcon,
    video: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58508b9898be7111_1749556627094.mp4'
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
    question: '什么是 AI Agent，它与普通聊天机器人有什么区别？',
    answer: 'AI Agent（智能体）不仅能进行对话，还能自主规划任务、使用工具并执行复杂操作。相比仅能被动回复的聊天机器人，Agent 具备更强的自主性与执行力，能真正协助您完成业务工作。'
  },
  {
    question: '我可以使用自己的企业数据训练 AI 吗？',
    answer: '可以。BuidAI 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。'
  },
  {
    question: '构建一个 AI 应用需要编程基础吗？',
    answer: '完全不需要。BuidAI 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。'
  },
  {
    question: '我的数据安全吗？会不会被用于模型训练？',
    answer: '您的数据绝对安全。BuidAI 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。'
  },
  {
    question: '平台支持哪些大语言模型？',
    answer: '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。'
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
