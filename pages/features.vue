<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
    <!-- Hero Section -->
    <section class="pt-48 pb-20 relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>BuidAI V4.6.8 strong release</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
          BuidAI - 企业级 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Agent</span> 构建平台
        </h1>

        <p class="text-lg sm:text-xl text-gray-500 mb-10 max-w-3xl mx-auto">
         可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            Github
          </button>
          <button class="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(59,130,246,0.3)]">
            查看文档
          </button>
        </div>
      </div>
    </section>

    <!-- Demo Video Section -->
    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-lg font-medium text-gray-500 mb-6 flex items-center justify-center gap-2">
          观看演示 <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        </h2>

        <div class="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl aspect-video group cursor-pointer">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>

          <!-- Mock UI for Video Placeholder -->
          <div class="absolute inset-0 p-4 flex flex-col">
            <div class="flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            <div class="flex-1 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900">产品特性介绍</h2>

        <div class="flex flex-col gap-12">
          <div v-for="(feature, idx) in features" :key="idx"
               class="rounded-3xl p-8 lg:p-12 border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 group">
            <div class="flex flex-col lg:flex-row gap-12 items-center justify-between">
              <!-- Left Content -->
              <div class="w-full lg:w-1/3 flex flex-col gap-8 xl:ml-4">
                <!-- Icon -->
                <div class="w-20 h-20 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                  <component :is="feature.icon" class="w-10 h-10" :class="feature.iconColor" />
                </div>

                <div>
                  <h3 class="text-3xl font-bold mb-6 text-gray-900">{{ feature.title }}</h3>
                  <p class="text-lg text-gray-500 leading-relaxed">
                    {{ feature.desc }}
                  </p>
                </div>
              </div>

              <!-- Right Image -->
              <div class="w-full lg:w-2/3">
                <div class="relative rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50">
                   <img :src="feature.image" :alt="feature.title" class="w-full h-auto" />
                   <!-- Overlay Gradient -->
                   <div class="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 text-gray-900">优势</h2>
          <p class="text-gray-500">为什么选择 BuidAI?</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(adv, idx) in advantages" :key="idx"
               class="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-500/30 hover:shadow-md transition-all group">
            <component :is="adv.icon" class="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition-colors mb-4" />
            <h3 class="text-lg font-bold mb-2 text-gray-900">{{ adv.title }}</h3>
            <p class="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">{{ adv.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 text-gray-900">常见问题</h2>
          <p class="text-gray-500">关于 BuidAI 的常见疑问解答</p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx" class="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button @click="toggleFaq(idx)" class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
              <span class="font-medium text-gray-900">{{ faq.question }}</span>
              <PlusIcon :class="{'rotate-45': activeFaq === idx}" class="w-5 h-5 text-gray-400 transition-transform duration-300" />
            </button>
            <div v-show="activeFaq === idx" class="px-6 pb-4 pt-0 text-gray-600 text-sm">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="py-20 relative overflow-hidden bg-white border-t border-gray-100">
      <!-- Footer Gradient -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div class="text-center lg:text-left">
            <h2 class="text-3xl font-bold mb-4 text-gray-900">现在开始构建您的 AI Agent</h2>
            <p class="text-lg text-gray-500">BuidAI, 让 AI Agent 构建触手可及</p>
          </div>

          <div class="flex items-center gap-4">
            <button class="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-all shadow-sm">
              演示环境
            </button>
            <button class="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/20">
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
  PlusIcon
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'BuidAI - 企业级 AI Agent 构建平台',
  meta: [
    { name: 'description', content: 'BuidAI 是一个基于 LLM 大语言模型的知识库问答系统，提供开箱即用的数据处理、模型调用等能力。' }
  ]
})

/**
 * 优势列表数据
 */
const features = [
  {
    title: '特定领域 AI 客服',
    desc: '通过导入文档或问答对来训练 AI 模型，使其能够基于特定领域知识库进行交互式对话，构建特定领域的 AI 智能客服。',
    icon: ChatBubbleBottomCenterTextIcon,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    image: '/1.png'
  },
  {
    title: '自动化数据预处理',
    desc: '提供手动输入、直接分段、LLM 自动处理等多种数据导入方式，自动完成文本预处理、向量化和 QA 分割，节省手动训练时间，提高效率。',
    icon: CircleStackIcon,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    image: '/2.png'
  },
  {
    title: '工作流编排',
    desc: '支持工作流（AI Workflow）编排，可以基于可视化的拖拽界面设计更加复杂的问答流程，如查询数据库、查询库存、预约实验室等。',
    icon: ArrowsRightLeftIcon,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-50',
    image: '/3.png'
  },
  {
    title: '强大的 API 集成',
    desc: '提供与 OpenAI 官方接口对齐的 API，直接接入现有 GPT 应用，轻松集成企业微信、公众号、飞书等平台。',
    icon: CommandLineIcon,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    image: '/4.png'
  }
]

/**
 * 优势列表数据
 */
const advantages = [
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
 * 常见问题列表数据
 */
const faqs = [
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
 * @param idx - 点击的 FAQ 索引
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<style scoped>
/* 自定义动画或样式补充 */
</style>
