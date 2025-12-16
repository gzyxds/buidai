<template>
  <div class="pt-48 pb-24 bg-white min-h-screen font-sans">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="text-blue-600">
            选择更适合你的版本
          </span>
        </h1>
        <p class="text-gray-500 text-lg mb-8">
          免费使用或升级更高的套餐
        </p>

        <!-- Tabs -->
        <div class="inline-flex p-1 rounded-full bg-gray-100 border border-gray-200 mb-8 relative">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            @click="activeTab = tab.key"
            class="px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10"
            :class="[
              activeTab === tab.key
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-900'
            ]"
          >
            {{ tab.name }}
          </button>
          <!-- Sliding Background -->
          <div
            class="absolute top-1 bottom-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
            :style="{
              left: activeTab === 'cloud' ? '4px' : '50%',
              width: 'calc(50% - 4px)',
              transform: activeTab === 'self' ? 'translateX(-2px)' : 'none'
            }"
          ></div>
        </div>

        <!-- Billing Toggle -->
        <div v-if="activeTab === 'cloud'" class="flex items-center justify-center gap-4 mb-12">
          <span class="text-sm" :class="!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'">按月</span>
          <button
            @click="isYearly = !isYearly"
            class="w-12 h-6 bg-gray-300 rounded-full relative transition-colors duration-200 focus:outline-none"
            :class="{ 'bg-blue-600': isYearly }"
          >
            <span
              class="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200"
              :class="{ 'translate-x-6': isYearly }"
            ></span>
          </button>
          <span class="text-sm" :class="isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'">按年</span>
          <span class="text-xs text-pink-500 italic ml-2">支付10个月，畅享一年！</span>
        </div>
      </div>

      <!-- Cloud Plans Grid -->
      <div v-if="activeTab === 'cloud'" class="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
        <!-- Free Plan -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col transition-colors shadow-sm hover:shadow-md">
          <h3 class="text-gray-900 font-bold mb-2">免费版</h3>
          <div class="text-4xl font-bold text-gray-900 mb-4">¥0</div>
          <p class="text-gray-500 text-xs mb-6 h-10">核心功能免费试用。30 天未登录，将会清空知识库。</p>

          <button class="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors mb-8">
            开始使用
          </button>

          <ul class="space-y-3 flex-1">
            <li v-for="(feature, index) in freeFeatures" :key="index" class="flex items-start gap-3 text-gray-600 text-xs">
              <CheckIcon class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Basic Plan -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col transition-colors shadow-sm hover:shadow-md">
          <h3 class="text-gray-900 font-bold mb-2">基础版</h3>
          <div class="text-4xl font-bold text-gray-900 mb-4">¥{{ isYearly ? 990 : 99 }}</div>
          <p class="text-gray-500 text-xs mb-6 h-10">可解锁 BuidAI完整功能</p>

          <button class="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors mb-8">
            升级套餐
          </button>

          <ul class="space-y-3 flex-1">
            <li v-for="(feature, index) in basicFeatures" :key="index" class="flex items-start gap-3 text-gray-600 text-xs">
              <CheckIcon class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Premium Plan -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col transition-colors shadow-sm hover:shadow-md">
          <h3 class="text-gray-900 font-bold mb-2">高级版</h3>
          <div class="text-4xl font-bold text-gray-900 mb-4">¥{{ isYearly ? 5990 : 599 }}</div>
          <p class="text-gray-500 text-xs mb-6 h-10">适合企业级的生产工具</p>

          <button class="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors mb-8">
            升级套餐
          </button>

          <ul class="space-y-3 flex-1">
            <li v-for="(feature, index) in premiumFeatures" :key="index" class="flex items-start gap-3 text-gray-600 text-xs">
              <CheckIcon class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Custom Plan -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col transition-colors shadow-sm hover:shadow-md">
          <h3 class="text-gray-900 font-bold mb-2">定制版</h3>
          <div class="text-4xl font-bold text-gray-900 mb-4 tracking-tighter">定制化计费</div>
          <p class="text-gray-500 text-xs mb-6 h-10">助力中大型企业构建核心竞争力</p>

          <button class="w-full py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium transition-colors mb-8">
            联系商务
          </button>

          <ul class="space-y-3 flex-1">
            <li v-for="(feature, index) in customFeatures" :key="index" class="flex items-start gap-3 text-gray-600 text-xs">
              <CheckIcon class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Self-hosted Plan (Placeholder based on design logic) -->
      <div v-if="activeTab === 'self'" class="flex justify-center mb-24">
        <div class="bg-white rounded-2xl p-8 border border-gray-200 max-w-md w-full transition-colors text-center shadow-sm hover:shadow-md">

          <h3 class="text-gray-900 font-bold mb-2 text-xl">企业私有化部署</h3>
          <p class="text-gray-500 text-sm mb-8">数据安全，专属定制</p>
          <button class="w-full py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium transition-colors mb-8">
            咨询详情
          </button>
           <ul class="space-y-3 text-left inline-block">
            <li class="flex items-center gap-3 text-gray-600 text-sm">
              <CheckIcon class="w-5 h-5 text-blue-500" />
              <span>源码交付 / 镜像部署</span>
            </li>
            <li class="flex items-center gap-3 text-gray-600 text-sm">
              <CheckIcon class="w-5 h-5 text-blue-500" />
              <span>专属品牌定制</span>
            </li>
             <li class="flex items-center gap-3 text-gray-600 text-sm">
              <CheckIcon class="w-5 h-5 text-blue-500" />
              <span>企业级权限管理</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">FAQ</h2>
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span class="text-gray-900 font-medium">{{ item.question }}</span>
              <span class="text-gray-500 transition-transform duration-200" :class="{ 'rotate-180': item.isOpen }">
                <MinusIcon v-if="item.isOpen" class="w-5 h-5" />
                <PlusIcon v-else class="w-5 h-5" />
              </span>
            </button>
            <div
              v-show="item.isOpen"
              class="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'

const activeTab = ref('cloud')
const isYearly = ref(false)

const tabs = [
  { name: '云服务', key: 'cloud' },
  { name: '私有部署', key: 'self' }
]

const freeFeatures = [
  '100 AI 积分',
  '600 组知识库索引',
  '1 个团队成员',
  '3 个知识库',
  '30 天对话记录保留',
  '30 QPM'
]

const basicFeatures = [
  '4000 AI 积分',
  '6000 组知识库索引',
  '5 个团队成员',
  '50 个 Agent',
  '30 个知识库',
  '180 天对话记录保留',
  '300 QPM',
  '站点同步最大 500 页',
  '48 小时工单支持响应'
]

const premiumFeatures = [
  '25000 AI 积分',
  '36000 组知识库索引',
  '50 个团队成员',
  '200 个 Agent',
  '100 个知识库',
  '360 天对话记录保留',
  '720 天团队操作日志记录',
  '1500 QPM',
  '站点同步最大 500 页',
  '24 小时工单支持响应',
  '3 个应用备案'
]

const customFeatures = [
  '优先深度技术支持',
  '弹性资源配置',
  '安全可控',
  '专属客户经理'
]

const faqs = ref([
  {
    question: '是否切换订阅套餐？',
    answer: '套餐使用采用覆盖更新的逻辑。因此，购买新套餐后将立即生效，剩余套餐额度将被清除，请务必谨慎操作。',
    isOpen: false
  },
  {
    question: '在哪里查看已订阅套餐？',
    answer: '在【个人中心 - 套餐详情】中可以查看当前套餐的生效时间和剩余额度。当付费套餐过期后将自动恢复为免费版。',
    isOpen: false
  },
  {
    question: '什么是AI积分？',
    answer: '每次调用AI模型时，将会消耗一定AI积分。具体计算标准参考上方的“AI积分计算标准”。系统会优先采用模型厂商的高级Token计费方式，Token=0.75中文汉字=0.9英文单词。',
    isOpen: false
  },
  {
    question: 'AI积分过期怎么办？',
    answer: '会过期。当前套餐过期后，AI积分将会清零，并重置为新套餐的AI积分。年度套餐的AI积分时长为1年，而不是每个月。',
    isOpen: false
  },
  {
    question: '知识库存储怎么计算？',
    answer: '1条知识库存储等于1条知识库索引。一条分块数据，通常对应多条索引，可以在单个知识库集合中查阅“W组索引”。',
    isOpen: false
  },
  {
    question: '知识库索引超出删除了么？',
    answer: '不会。但知识库索引超出时，无法插入和更新知识库内容。',
    isOpen: false
  },
  {
    question: '额外资源包可以叠加么？',
    answer: '可以的。每次购买的资源包都是独立的，在其有效期内将会叠加使用。AI积分会优先扣除最大过期的资源包。',
    isOpen: false
  },
  {
    question: '免费版数据会清除么？',
    answer: '免费版团队（免费版且未购买额外套餐）连续 30 天未登录系统，系统会自动清除该团队下所有知识库内容。',
    isOpen: false
  }
])

/**
 * 切换 FAQ 问题的展开/收起状态。
 *
 * @param index - 要切换的 FAQ 项目在数组中的索引。
 */
const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style scoped>
/* Custom Scrollbar for FAQ if needed, though not explicitly requested */
</style>
