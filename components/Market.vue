<template>
  <section class="py-12 md:py-16 bg-linear-to-b from-white to-neutral-50/50">
    <div class="container mx-auto px-4">
      <!-- 标题区域 -->
      <div class="text-center mb-8 md:mb-10">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
          <span class="text-indigo-600">智言AI</span> vs 其它产品的<span class="text-indigo-600">特有优势</span>：通过AI应用市场，无限释放搭建想象力。
        </h2>
        <p class="text-sm text-neutral-500 max-w-3xl mx-auto">
          依托于强大的扩展机制，智言AI 构建了开放的积木式AI应用市场。同时我们欢迎以及鼓励AI开发者上架销售自研AI应用。
        </p>
      </div>

      <!-- 商品卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
        <div
          v-for="(app, index) in displayApps"
          :key="app.id"
          class="group bg-white rounded-2xl border border-neutral-200 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <!-- 卡片图片区域 -->
          <div class="aspect-video bg-linear-to-br from-neutral-50 to-neutral-100 relative p-2 rounded-t-2xl overflow-hidden">
            <img
              :src="app.image"
              :alt="app.name"
              class="w-full h-full object-cover rounded-xl border border-neutral-200/50"
              loading="lazy"
              decoding="async"
            />
            <!-- 分类标签 -->
            <div class="absolute top-2.5 left-2.5">
              <span class="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-medium text-neutral-600 shadow-sm border border-neutral-200/50">
                {{ getCategoryName(app.category) }}
              </span>
            </div>
            <!-- 源码版标签 -->
            <div v-if="app.category === 'independent'" class="absolute top-2.5 right-2.5">
              <span class="px-2 py-0.5 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-full text-[10px] font-medium text-white shadow-lg">
                源码版
              </span>
            </div>
          </div>
          
          <!-- 卡片内容 -->
          <div class="p-4 flex-1 flex flex-col">
            <!-- 图标和名称 -->
            <div class="flex items-center gap-2.5 mb-2">
              <div class="w-7 h-7 rounded-lg bg-neutral-50 border border-neutral-200/60 text-neutral-600 flex items-center justify-center shrink-0">
                <UIcon :name="app.icon" class="w-3.5 h-3.5" />
              </div>
              <h3 class="text-sm font-bold text-neutral-900 truncate group-hover:text-indigo-600 transition-colors">
                {{ app.name }}
              </h3>
            </div>
            
            <p class="text-xs text-neutral-500 line-clamp-2 mb-3 flex-1 leading-relaxed">
              {{ app.description }}
            </p>
            
            <!-- 价格信息和购买按钮 -->
            <div class="pt-3 border-t border-neutral-100">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-1.5">
                  <span v-if="app.originalPrice !== app.discountPrice" class="text-xs text-neutral-400 line-through">¥{{ app.originalPrice.toFixed(2) }}</span>
                  <span v-if="app.originalPrice !== app.discountPrice" class="text-sm font-bold text-indigo-600">¥{{ app.discountPrice.toFixed(2) }}</span>
                  <span v-else class="text-sm font-bold text-neutral-900">¥{{ app.originalPrice.toFixed(2) }}</span>
                </div>
                <button class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-medium rounded-lg flex items-center gap-1 transition-colors">
                  <UIcon name="i-lucide-shopping-bag" class="w-3 h-3" />
                  购买
                </button>
              </div>
              
              <!-- 认证标签 -->
              <div class="flex items-center justify-between mt-2.5">
                <div class="flex items-center gap-1">
                  <UIcon name="i-lucide-circle-check" class="w-3 h-3 text-green-500" />
                  <span class="text-[10px] text-neutral-400">官方认证</span>
                </div>
                <div class="flex items-center gap-1">
                  <UIcon name="i-lucide-refresh-cw" class="w-3 h-3 text-blue-500" />
                  <span class="text-[10px] text-neutral-400">永久升级</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 查看更多按钮 -->
      <div v-if="!showAll && apps.length > defaultLimit" class="flex justify-center mb-6">
        <button
          class="group px-6 py-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 flex items-center gap-2"
          @click="showAll = true"
        >
          查看更多
          <UIcon name="i-lucide-chevron-down" class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      <!-- 收起按钮 -->
      <div v-else-if="showAll && apps.length > defaultLimit" class="flex justify-center mb-6">
        <button
          class="group px-6 py-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 flex items-center gap-2"
          @click="showAll = false"
        >
          收起
          <UIcon name="i-lucide-chevron-up" class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <!-- 底部分隔线 -->
      <div class="border-t border-neutral-200 my-6" />

      <!-- 底部按钮 -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 shadow-sm"
          @click="handlePublishApp"
        >
          我要上架应用
        </button>
        <button
          class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all duration-200 flex items-center justify-center gap-2 group"
          @click="handleGoToMarket"
        >
          前往应用市场
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { marketApps as apps, marketCategories as categories, type MarketApp as AppData } from '~/data/products'

/**
 * 市场组件 Props 定义
 */
interface Props {
  /** 默认显示的应用数量 */
  defaultLimit?: number
  /** 按分类筛选 */
  category?: string
}

const props = withDefaults(defineProps<Props>(), {
  defaultLimit: 8,
  category: undefined
})

/**
 * 是否显示全部应用
 */
const showAll = ref(false)

/**
 * 获取分类名称
 */
const getCategoryName = (categoryId: string): string => {
  const category = categories.find(c => c.id === categoryId)
  return category?.name || categoryId
}

/**
 * 根据条件筛选并限制显示的应用
 */
const displayApps = computed<AppData[]>(() => {
  let filtered = apps
  
  // 如果指定了分类，按分类筛选
  if (props.category) {
    filtered = apps.filter(app => app.category === props.category)
  }
  
  // 如果不显示全部，则限制数量
  if (!showAll.value) {
    return filtered.slice(0, props.defaultLimit)
  }
  
  return filtered
})

/**
 * 处理"我要上架应用"按钮点击
 * 上架应用需商务对接，跳转联系页
 */
const handlePublishApp = () => {
  navigateTo('/contact')
}

/**
 * 处理"前往应用市场"按钮点击
 */
const handleGoToMarket = () => {
  navigateTo('/agent')
}
</script>

<style scoped>
/* 组件样式 */
</style>
