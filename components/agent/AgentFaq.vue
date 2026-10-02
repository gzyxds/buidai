<script setup lang="ts">
/**
 * FAQ 区块：grid-border 三段式 + 左二维码入口 + 右 tablist 手风琴
 */
import { ref } from 'vue'
import { dispatchQrModal } from '~/utils/qrModal'

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config =
    type === 'coupon'
      ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
      : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  dispatchQrModal(config)
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '什么是 AI Agent，它与普通聊天机器人有什么区别？',
    answer:
      'AI Agent不仅能进行对话，还能自主规划任务、使用工具并执行复杂操作。相比仅能被动回复的聊天机器人，Agent 具备更强的自主性与执行力，能真正协助您完成业务工作。'
  },
  {
    question: '我可以使用自己的企业数据训练 AI 吗？',
    answer:
      '可以。智言万象 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。'
  },
  {
    question: '构建一个 AI 应用需要编程基础吗？',
    answer:
      '完全不需要。智言万象 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。'
  },
  {
    question: '我的数据安全吗？会不会被用于模型训练？',
    answer:
      '您的数据绝对安全。智言万象 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。'
  },
  {
    question: '平台支持哪些大语言模型？',
    answer:
      '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。'
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

const { handleKeydown: handleFaqKeydown } = useListKeyboardNav(() => faqs.length, toggleFaq)
</script>

<template>
  <!--常见问题部分 -->
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
                FAQ
              </span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              常见问题
            </h2>
            <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
              关于智言AI的常见疑问解答
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- FAQ 内容区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <div class="grid-border-content px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-px overflow-hidden rounded-md bg-neutral-200/70 lg:grid-cols-[320px_1fr]">
            <!-- 左侧：标题区 + 二维码按钮 -->
            <aside class="relative order-1 w-full overflow-hidden rounded-md bg-white lg:order-1 border-b lg:border-b-0 lg:border-r border-neutral-200/70 p-5 sm:p-6 lg:p-8">
              <div class="space-y-6">
                <!-- 左侧标题区 -->
                <div class="space-y-2">
                  <h3 class="text-base font-semibold text-neutral-900">
                    需要帮助？
                  </h3>
                  <p class="text-sm text-neutral-500 leading-relaxed">
                    扫码添加客服微信，获取更多产品信息和专属优惠
                  </p>
                </div>

                <!-- 二维码按钮区 -->
                <div class="flex flex-col gap-3">
                  <!-- 获取优惠码按钮 -->
                  <button
                    class="group relative inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    @click="openQrModal('coupon')"
                  >
                    <UIcon name="i-heroicons-ticket" class="relative mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    <span class="relative">获取优惠码</span>
                  </button>

                  <!-- 联系客服按钮 -->
                  <button
                    class="group inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-neutral-700 bg-white hover:bg-neutral-50 border-2 border-neutral-200 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    @click="openQrModal('wechat')"
                  >
                    <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2 h-4 w-4 text-neutral-500 group-hover:text-indigo-500 transition-all duration-200 group-hover:scale-110" />
                    <span class="group-hover:text-neutral-900 transition-colors duration-200">联系客服</span>
                  </button>
                </div>

                <!-- 服务承诺 -->
                <div class="pt-5 border-t border-neutral-200/60">
                  <div class="space-y-3">
                    <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">服务承诺</p>
                    <div class="space-y-2.5">
                      <div class="flex items-center gap-2 text-sm text-neutral-600">
                        <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>7×24小时在线</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm text-neutral-600">
                        <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>专属优惠码</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm text-neutral-600">
                        <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>一对一技术支持</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <!-- 右侧：FAQ 手风琴列表 -->
            <section class="relative order-2 flex flex-col rounded-md bg-white lg:order-2">
              <div
                v-for="(faq, idx) in faqs"
                :key="idx"
                class="group border-b border-neutral-200/90 transition-colors duration-200 last:border-b-0"
                :class="activeFaq === idx ? 'bg-indigo-50/30' : 'hover:bg-neutral-50/30'"
              >
                <!-- 问题行 -->
                <button
                  :id="`faq-tab-${idx}`"
                  type="button"
                  role="tab"
                  :aria-selected="activeFaq === idx"
                  :aria-controls="`faq-panel-${idx}`"
                  class="group relative flex w-full cursor-pointer items-center justify-between gap-4 py-5 px-5 sm:py-6 sm:px-6 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
                  tabindex="0"
                  @click="toggleFaq(idx)"
                  @keydown="handleFaqKeydown($event, idx)"
                >
                  <!-- 激活指示器 - 左侧竖线 -->
                  <div
                    class="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-full transition-all duration-200"
                    :class="activeFaq === idx ? 'bg-indigo-500' : 'bg-transparent'"
                  />

                  <span
                    class="pr-4 text-sm leading-relaxed text-neutral-800 transition-colors duration-200 sm:text-base"
                    :class="
                      activeFaq === idx
                        ? 'font-semibold text-indigo-900'
                        : 'group-hover:text-neutral-900'
                    "
                  >
                    {{ faq.question }}
                  </span>

                  <!-- chevron 图标 -->
                  <UIcon
name="i-heroicons-chevron-down"
                    class="h-5 w-5 shrink-0 text-neutral-400 transition-all duration-200"
                    :class="activeFaq === idx ? 'rotate-180 text-indigo-500' : 'group-hover:text-neutral-600'"
                  />
                </button>

                <!-- 答案区（grid 展开动画） -->
                <div
                  :id="`faq-panel-${idx}`"
                  role="tabpanel"
                  :aria-labelledby="`faq-tab-${idx}`"
                  class="grid transition-all duration-300 ease-in-out"
                  :class="
                    activeFaq === idx
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  "
                >
                  <div class="overflow-hidden">
                    <div
                      class="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-neutral-600"
                    >
                      {{ faq.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
          <span class="text-base sm:text-lg text-neutral-600 font-medium">更多问题？随时联系我们的客服团队</span>
        </div>
      </div>

      <!-- 底部边框行 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>
