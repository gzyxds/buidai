<script setup lang="ts">
/**
 * FAQ 区块：左侧问题选项卡 + 右侧答案面板
 */
import { ref } from 'vue'
import { ArrowRightIcon, ChatBubbleLeftRightIcon, TicketIcon } from '@heroicons/vue/24/outline'
import { dispatchQrModal } from '~/utils/qrModal'

const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  dispatchQrModal(config)
}

const faqs = [
  { question: '官方技术专家能为我做什么？', answer: '我们提供官方认证的技术专家远程服务，可协助您完成 智言万象 平台框架的本地或服务器部署，包含环境配置、源码安装、插件调试及后续运维指导，一站式解决部署难题。' },
  { question: '我可以使用自己的企业数据训练 AI 吗？', answer: '可以。智言AI 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。' },
  { question: '构建一个 AI 应用需要编程基础吗？', answer: '完全不需要。智言AI 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。' },
  { question: '我的数据安全吗？会不会被用于模型训练？', answer: '您的数据绝对安全。智言AI 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。' },
  { question: '平台支持哪些大语言模型？', answer: '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。' },
  { question: '购买付费应用后有哪些注意事项？', answer: '请充分阅读产品说明后购买，如遇问题可咨询官方客服。为坚持开源社区定位，本站付费应用均为开源交付状态。为保护开发者知识产权，促进建立健康的应用市场生态，根据相关法规，源代码类数字化商品下载获取后不支持退款。如无特殊说明，付费应用均为购买后单次安装使用，切勿传播分享已购买付费应用，共同维护开发者权益。' },
  { question: '智言AI适合哪些使用场景？', answer: '智言AI适用于多种企业级场景：智能客服系统、企业知识库问答、内部培训助手、文档智能审核、数据分析报告生成、营销内容创作、代码辅助开发等。无论您是希望提升客户服务效率，还是构建企业内部AI中台，智言AI都能提供灵活的解决方案。支持多租户架构，适合集团型企业统一部署。' },
]

const activeFaq = ref<number>(0)
</script>

<template>
  <!-- 常见问题 -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="mb-12 lg:mb-16">
        <span class="text-sm font-medium tracking-[0.25em] text-neutral-400 uppercase mb-3 block">FAQ</span>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.05] mb-3">常见问题</h2>
            <p class="text-neutral-500 text-base md:text-lg leading-relaxed">关于智言AI的常见疑问解答，助您快速上手</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              class="group px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-neutral-700 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 flex items-center gap-2"
              @click="openQrModal('coupon')"
            >
              <TicketIcon class="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
              获取优惠码
            </button>
            <button
              class="group px-5 py-2.5 rounded-full border border-indigo-600 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all duration-200 flex items-center gap-2"
              @click="openQrModal('wechat')"
            >
              <ChatBubbleLeftRightIcon class="w-4 h-4" />
              联系客服
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div class="lg:w-72 xl:w-80 shrink-0">
          <nav class="flex flex-col gap-2">
            <button
              v-for="(faq, index) in faqs"
              :key="index"
              class="w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 group"
              :class="activeFaq === index
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-white border-neutral-200 text-neutral-600 hover:border-indigo-300 hover:bg-indigo-50'"
              @mouseenter="activeFaq = index"
            >
              <span class="text-xs font-medium tracking-[0.15em] shrink-0" :class="activeFaq === index ? 'text-white/70' : 'text-indigo-300'">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="text-sm font-medium leading-snug">{{ faq.question }}</span>
            </button>
          </nav>
        </div>

        <div class="flex-1 min-w-0">
          <div class="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 h-full">
            <div :key="activeFaq" class="animate-fade-in h-full flex flex-col">
              <div class="flex items-start justify-between gap-4 mb-4">
                <span class="text-xs font-medium tracking-[0.15em] text-indigo-300 uppercase">{{ String(activeFaq + 1).padStart(2, '0') }}</span>
                <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <span class="text-sm font-semibold text-indigo-600">{{ String(activeFaq + 1).padStart(2, '0') }}</span>
                </div>
              </div>
              <h3 class="text-2xl md:text-3xl font-medium text-neutral-900 leading-snug mb-4">{{ faqs[activeFaq]?.question }}</h3>
              <div class="w-10 h-[2px] bg-indigo-200 mb-6" />
              <p class="text-lg text-neutral-500 leading-relaxed">{{ faqs[activeFaq]?.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-12 border-t border-neutral-200">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p class="text-base text-neutral-400">还有其他问题？我们随时为您解答</p>
          <button
            class="text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2 group"
            @click="openQrModal('wechat')"
          >
            联系客服团队
            <ArrowRightIcon class="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 答案面板切换淡入（配合 :key 在切换时重播） */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
