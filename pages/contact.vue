<template>
  <div class="bg-white min-h-screen">

    <!-- 1. Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden bg-neutral-50">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-blue-50/50 to-transparent"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
          联系我们
        </h1>
        <p class="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          无论您有任何问题或需求，都可以通过以下方式联系我们，<br class="hidden md:block"/>我们将竭诚为您服务。
        </p>
      </div>
    </section>

    <!-- 2. Main Contact Channels (Cards) -->
    <section class="py-16 md:py-24 relative z-20 -mt-10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <ContactConnect />
        </div>
      </div>
    </section>

    <!-- 3. Additional Contact Info -->
    <section class="py-20 border-t border-neutral-100 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <!-- Email -->
          <div class="text-center group">
            <div class="w-12 h-12 mx-auto bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-600 mb-5 group-hover:bg-ui-primary group-hover:text-white transition-colors duration-300">
              <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-neutral-900 mb-2">邮件支持</h3>
            <p class="text-sm text-neutral-400 mb-3">产品咨询与技术支持</p>
            <a href="mailto:support@buidai.com" class="text-base font-medium text-ui-primary hover:text-primary-700 transition-colors">
              support@buidai.com
            </a>
          </div>

          <!-- Business -->
          <div class="text-center group">
            <div class="w-12 h-12 mx-auto bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-600 mb-5 group-hover:bg-ui-primary group-hover:text-white transition-colors duration-300">
              <UIcon name="i-heroicons-briefcase" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-neutral-900 mb-2">商务合作</h3>
            <p class="text-sm text-neutral-400 mb-3">渠道合作与大客户咨询</p>
            <a href="tel:400-123-4567" class="text-base font-medium text-ui-primary hover:text-primary-700 transition-colors">
              400-123-4567
            </a>
          </div>

          <!-- Location -->
          <div class="text-center group">
            <div class="w-12 h-12 mx-auto bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-600 mb-5 group-hover:bg-ui-primary group-hover:text-white transition-colors duration-300">
              <UIcon name="i-heroicons-map-pin" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-bold text-neutral-900 mb-2">公司地址</h3>
            <p class="text-sm text-neutral-400 mb-3">欢迎莅临参观</p>
            <p class="text-base font-medium text-neutral-900">
              北京市朝阳区科技园 A 座 8 层
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FAQ Section -->
    <section class="py-24 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-neutral-900 mb-4">常见问题</h2>
          <p class="text-neutral-500">关于联系与合作的常见疑问</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <button
              @click="faq.isOpen = !faq.isOpen"
              class="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
            >
              <span class="font-medium text-neutral-900">{{ faq.question }}</span>
              <UIcon
                name="i-heroicons-chevron-down"
                class="w-5 h-5 text-neutral-400 transition-transform duration-300"
                :class="faq.isOpen ? 'rotate-180' : ''"
              />
            </button>
            <div
              v-show="faq.isOpen"
              class="px-5 pb-5 pt-0 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100/50"
            >
              <div class="pt-3">{{ faq.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/**
 * Contact Page
 *
 * 联系我们页面，展示联系方式和二维码
 */

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '联系我们 - BuidAI | 微信客服、商务合作与技术支持',
  description: '联系 BuidAI 团队，获取产品演示、技术支持或商务合作咨询。扫码添加微信客服、关注公众号或加入QQ交流群，我们随时为您服务。',
  keywords: '联系BuidAI, 微信客服, QQ客服, 商务合作, 技术支持, 产品演示, BuidAI地址'
})

const faqs = ref([
  {
    question: '工作时间是几点到几点？',
    answer: '我们的标准工作时间为周一至周五，上午 9:00 至下午 18:00（法定节假日除外）。非工作时间您可以留言，我们会在下一个工作日优先处理。',
    isOpen: true
  },
  {
    question: '如何申请产品演示？',
    answer: '您可以扫描上方的“获取演示”二维码，添加顾问微信进行预约。演示通常通过腾讯会议进行，时长约 30-45 分钟。',
    isOpen: false
  },
  {
    question: '企业版购买支持对公转账吗？',
    answer: '支持。您可以联系商务顾问获取合同与对公账户信息。我们提供增值税专用发票。',
    isOpen: false
  },
  {
    question: '是否有开发者交流群？',
    answer: '有的。请关注我们的官方公众号回复“入群”，或直接添加 QQ 群：12345678。',
    isOpen: false
  }
])
</script>
