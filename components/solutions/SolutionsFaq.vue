<script setup lang="ts">
/**
 * FAQ 区块：左标题与联系入口 + 右折叠面板列表
 */
import { ref } from 'vue'
import { dispatchQrModal } from '~/utils/qrModal'

// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  dispatchQrModal(config)
}

/**
 * 常见问题接口
 */
interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

/**
 * FAQ 常见问题数据
 */
const faqs = ref<FaqItem[]>([
  { question: '怎么下载导出智言AI生成的PPT、文档、表格、设计？', answer: '智言AI生成好后，你可以直接选择导出下载，支持常见的PPTX、DOCX、PDF、XLSX、JPG、PNG格式。', open: true },
  { question: '智言AI是免费使用吗？', answer: '智言AI提供免费的基础版，包含大部分核心功能。对于高级功能和更多存储空间，我们提供灵活的付费订阅方案。', open: false },
  { question: '智言AI可以把PDF/图片/网站/报告/论文内容改成PPT吗？', answer: '可以。您可以上传 PDF、图片或输入网址，AI 会自动提取关键信息并生成结构清晰、设计精美的 PPT 演示文稿。', open: false },
  { question: '我没有设计基础，可以让智言AI做设计吗？', answer: '完全没问题。智言AI内置了专业的设计引擎，您只需输入文字描述，AI 就能自动生成海报、Banner、配图等高质量设计作品。', open: false },
  { question: '智言AI可以帮我创作自媒体内容吗？', answer: '当然。我们提供专门的自媒体创作工具，支持从选题策划、文案生成到排版配图的全流程辅助，助您高效产出爆款内容。', open: false }
])
</script>

<template>
  <!-- 5. 常见问题区域 -->
  <section class="py-12 md:py-24 bg-[#F7F8FC]">
     <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full">
            <h1 class="text-2xl md:text-4xl font-bold text-[var(--brand-text)] mb-4">常见问题</h1>
            <p class="text-neutral-500 text-sm md:text-base mb-6">关于智言AI的常见疑问解答</p>
            <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button class="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation" @click="openQrModal('coupon')">
                <UIcon name="i-heroicons-ticket" class="w-4 h-4" />
                获取优惠码
              </button>
              <button class="px-6 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation" @click="openQrModal('wechat')">
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
                联系客服
              </button>
            </div>
          </div>

          <!-- 右侧：折叠面板列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
             <div v-for="(faq, i) in faqs" :key="i" class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-200">
                <button class="w-full flex items-start justify-between p-6 text-left active:bg-gray-50 transition-colors touch-manipulation min-h-[60px]" @click="faq.open = !faq.open">
                   <span class="text-base md:text-lg font-medium text-[var(--brand-text)] pr-8">{{ faq.question }}</span>
                   <UIcon name="i-heroicons-chevron-down" class="w-5 h-5 text-gray-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-180': faq.open }" />
                </button>
                <div
                  class="grid transition-all duration-300 ease-in-out"
                  :class="faq.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                >
                  <div class="overflow-hidden">
                    <div class="px-6 pb-6 text-sm md:text-[15px] text-[var(--brand-muted)] leading-relaxed">
                       {{ faq.answer }}
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
     </div>
  </section>
</template>
