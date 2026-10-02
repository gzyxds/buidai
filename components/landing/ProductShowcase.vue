<template>
  <section class="relative bg-neutral-50/50 overflow-x-hidden">
    <div class="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-24">
      <!-- 标题区域 -->
      <div class="text-center mb-6 sm:mb-10 lg:mb-16">
        <h2 class="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-2 sm:mb-4 tracking-tight leading-tight">
          <span class="block">搭建私有 AI 应用系统</span>
          <span class="text-[var(--brand-primary)] block mt-1 sm:mt-2">无需从零开发</span>
        </h2>
        <p class="text-sm sm:text-base lg:text-xl text-neutral-500 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
          专注集成 AI 应用落地所需的全场景功能，万千工具，自由组合
        </p>
      </div>

      <!-- 移动端：横向滚动标签栏 -->
      <div class="lg:hidden mb-3 sm:mb-4 overflow-x-auto scrollbar-hide -mx-3 sm:-mx-4 px-3 sm:px-4">
        <div class="flex gap-1.5 sm:gap-2 pb-2 min-w-max">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            class="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/30 touch-manipulation"
            :class="activeTab === index 
              ? 'bg-[var(--brand-primary)] text-white shadow-md' 
              : 'bg-white border border-neutral-200 text-neutral-600 hover:border-[var(--brand-primary)]/30'"
            @click="switchTab(index)"
          >
            <span class="text-[10px] sm:text-xs opacity-70">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="whitespace-nowrap">{{ tab.name }}</span>
          </button>
        </div>
      </div>

      <!-- Bento Grid 主容器 -->
      <div class="relative rounded-lg sm:rounded-xl lg:rounded-3xl border border-neutral-200/60 flex flex-col lg:flex-row bg-linear-to-br from-white via-[#f8f7ff] to-[#f0edff] overflow-hidden lg:min-h-[600px]">
        
        <!-- 桌面端：左侧功能导航列表 -->
        <div class="hidden lg:flex lg:w-[320px] xl:w-[380px] flex-col border-r border-neutral-200/60 bg-linear-to-b from-neutral-50/80 to-neutral-100/50 p-4 xl:p-5 flex-shrink-0">
          <div class="space-y-1.5 flex-1 overflow-y-auto custom-scrollbar min-h-0">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              class="group w-full flex flex-col text-left px-4 py-3.5 rounded-xl transition-all duration-200 relative overflow-hidden outline-none"
              :class="activeTab === index ? 'bg-white' : 'hover:bg-white/60'"
              @click="switchTab(index)"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="handleMouseLeave"
            >
              <!-- 激活指示条 -->
              <div
                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--brand-primary)] rounded-r-full transition-all duration-300"
                :class="activeTab === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
              />

              <div class="flex gap-3.5 items-center">
                <!-- 序号图标 -->
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0 text-sm font-semibold"
                  :class="activeTab === index ? 'bg-[var(--brand-primary)] text-white' : 'bg-white border border-neutral-200 text-neutral-400 group-hover:text-[var(--brand-primary)] group-hover:border-[var(--brand-primary)]/30'"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                
                <div class="flex-1 min-w-0">
                  <span
                    class="text-[15px] font-semibold transition-colors block"
                    :class="activeTab === index ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'"
                  >
                    {{ tab.name }}
                  </span>
                  <p
                    v-if="tab.description"
                    class="text-[13px] text-neutral-400 truncate mt-0.5 leading-tight"
                    :class="activeTab === index ? 'text-neutral-500' : ''"
                  >
                    {{ tab.description }}
                  </p>
                </div>

                <!-- 箭头 -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[var(--brand-primary)] transition-all duration-200 opacity-0 -translate-x-1"
                  :class="activeTab === index ? 'opacity-100 translate-x-0' : ''"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </button>
          </div>

          <!-- 底部进度信息 -->
          <div class="mt-4 pt-4 border-t border-neutral-200/60">
            <div class="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span class="flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                自动轮播
              </span>
              <span>{{ activeTab + 1 }} / {{ tabs.length }}</span>
            </div>
            <div class="h-1 w-full rounded-full bg-neutral-200 overflow-hidden">
              <div 
                class="h-full rounded-full bg-[var(--brand-primary)] transition-all duration-500 ease-out"
                :style="{ width: `${((activeTab + 1) / tabs.length) * 100}%` }"
              />
            </div>
          </div>
        </div>

        <!-- 右侧：截图展示 (浏览器窗口样式) -->
        <div class="flex-1 relative flex flex-col bg-neutral-50/30 min-w-0 lg:min-h-[540px]">
          <!-- 背景光晕装饰 -->
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none"/>
          <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"/>

          <!-- 顶部浏览器栏装饰 -->
          <div class="h-7 sm:h-10 lg:h-12 border-b border-neutral-200/60 flex items-center px-2 sm:px-4 lg:px-5 gap-1.5 sm:gap-2 shrink-0 bg-white z-20">
            <div class="flex gap-1 sm:gap-1.5 flex-shrink-0">
              <div class="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 rounded-full bg-red-400/80"/>
              <div class="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 rounded-full bg-amber-400/80"/>
              <div class="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 rounded-full bg-emerald-400/80"/>
            </div>
            <!-- 模拟地址栏 -->
            <div class="ml-1.5 sm:ml-2 lg:ml-3 flex-1 max-w-[120px] sm:max-w-[200px] lg:max-w-sm h-4 sm:h-6 lg:h-7 bg-neutral-100 rounded border sm:rounded-md border-neutral-200/50 flex items-center px-1.5 sm:px-2 lg:px-3 text-[9px] sm:text-[10px] lg:text-[11px] text-neutral-400 font-mono overflow-hidden">
              <svg class="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 text-neutral-400 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8m0 0a8 8 0 0016 0M8 8a8 8 0 00-8 8c0 2.472.345 4.865.99 7.131M8 8a8 8 0 0016 0M8 8v8m8-8v8"/>
              </svg>
              <span class="truncate">{{ currentTabUrl }}</span>
            </div>
          </div>

          <!-- 图片切换区域 - 移动端优化高度 -->
          <div 
            class="relative flex-1 p-1.5 sm:p-4 lg:p-8 xl:p-10 flex items-center justify-center bg-linear-to-br from-white via-white to-neutral-50/50 min-h-[160px] sm:min-h-[240px] lg:min-h-0 overflow-hidden touch-pan-y"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @touchcancel="handleTouchCancel"
          >
            <Transition
              name="showcase-fade"
              mode="out-in"
            >
              <div 
                v-if="tabs[activeTab]"
                :key="activeTab"
                class="relative w-full h-full flex items-center justify-center"
              >
                <img
                  :src="tabs[activeTab]?.image"
                  :alt="`${tabs[activeTab]?.name || ''} 功能预览`"
                  class="w-full h-auto max-h-[140px] sm:max-h-[220px] lg:max-h-none lg:max-w-full object-contain rounded sm:rounded-lg"
                  loading="lazy"
                  decoding="async"
                  @error="handleImageError"
                />

                <!-- 浮动功能标签 -->
                <div class="absolute bottom-1 left-1 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6">
                  <div class="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm border border-neutral-200/60 shadow-sm">
                    <span class="h-1 sm:h-1.5 lg:h-2 w-1 sm:w-1.5 lg:w-2 rounded-full bg-[var(--brand-primary)] animate-pulse flex-shrink-0" />
                    <span class="text-[9px] sm:text-[10px] lg:text-xs font-medium text-neutral-700 truncate max-w-[80px] sm:max-w-none">{{ tabs[activeTab]?.name }}</span>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- 左右切换按钮 (桌面端显示，移动端隐藏) -->
            <button
              class="hidden sm:flex absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/30"
              @click="prevTab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              class="hidden sm:flex absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/30"
              @click="nextTab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <!-- 移动端触摸提示 -->
            <div class="sm:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[9px] text-neutral-400 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>滑动</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>

          <!-- 底部指示器 -->
          <div class="absolute bottom-1.5 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 z-10">
            <button
              v-for="(_, index) in tabs"
              :key="index"
              class="h-0.5 sm:h-1 lg:h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/30 touch-manipulation"
              :class="activeTab === index ? 'w-2 sm:w-4 lg:w-6 bg-[var(--brand-primary)]' : 'w-0.5 sm:w-1 lg:w-1.5 bg-neutral-300 hover:bg-neutral-400'"
              @click="switchTab(index)"
            />
          </div>
        </div>
      </div>

      <!-- 底部特性卡片 -->
      <div class="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border border-neutral-200/60 p-3 sm:p-4 lg:p-5 transition-all duration-200 hover:border-neutral-300"
        >
          <div class="flex items-start gap-2.5 sm:gap-3 lg:gap-4">
            <div class="flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-md sm:rounded-lg lg:rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] transition-all duration-200 group-hover:bg-[var(--brand-primary)] group-hover:text-white">
              <UIcon :name="feature.icon" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-xs sm:text-sm font-semibold text-neutral-900 mb-0.5 sm:mb-1">{{ feature.title }}</h3>
              <p class="text-[10px] sm:text-[11px] lg:text-xs text-neutral-500 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA 区域 -->
      <div class="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-3 sm:px-0">
        <a 
          href="https://www.buidai.com/" 
          target="_blank" rel="noopener noreferrer" 
          class="w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-[var(--brand-primary)] text-white text-xs sm:text-sm font-semibold hover:bg-[var(--brand-primary-dark)] active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation min-h-[40px] sm:min-h-[44px]"
        >
          快速开始
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
        <a 
          href="https://doc.buidai.com/" 
          target="_blank" rel="noopener noreferrer" 
          class="w-full sm:w-auto px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation min-h-[40px] sm:min-h-[44px]"
        >
          查看文档
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, shallowRef } from 'vue'
// ==========================================
// 类型定义
// ==========================================

/** 标签项类型 */
interface TabItem {
  name: string
  description?: string
  image: string
  url: string
}

/** 功能特性类型 */
interface FeatureItem {
  title: string
  description: string
  icon: string
}

// ==========================================
// 数据配置
// ==========================================

/**
 * 标签配置 - 每个标签对应不同功能模块
 */
const tabs: TabItem[] = [
  {
    name: '智能体',
    description: 'AI Agent 工作流编排',
    image: '/images/buidai-1.webp',
    url: 'gmlart.cn/agents'
  },
  {
    name: '知识库',
    description: 'RAG 向量检索系统',
    image: '/images/buidai-2.webp',
    url: 'gmlart.cn/knowledge'
  },
  {
    name: '应用中心',
    description: '预置应用模板市场',
    image: '/images/buidai-3.webp',
    url: 'gmlart.cn/apps'
  },
  {
    name: '模型管理',
    description: '多模型接入与管理',
    image: '/images/buidai-4.webp',
    url: 'gmlart.cn/models'
  },
  {
    name: 'MCP',
    description: '模型上下文协议',
    image: '/images/buidai-5.webp',
    url: 'gmlart.cn/mcp'
  },
  {
    name: 'DIY中心',
    description: '可视化界面构建',
    image: '/images/buidai-6.webp',
    url: 'gmlart.cn/diy'
  },
  {
    name: '会员订阅',
    description: '灵活的计费方案',
    image: '/images/buidai-7.webp',
    url: 'gmlart.cn/billing'
  }
]

/**
 * 功能特性配置
 */
const features: FeatureItem[] = [
  {
    title: '本地化部署',
    description: '支持私有云和本地服务器部署，数据完全可控，满足企业安全合规要求。',
    icon: 'i-lucide-shield'
  },
  {
    title: '高性能架构',
    description: '采用分布式架构设计，支持高并发场景，毫秒级响应速度。',
    icon: 'i-lucide-zap'
  },
  {
    title: '模块化设计',
    description: '功能组件松耦合，按需启用，灵活扩展，降低系统复杂度。',
    icon: 'i-lucide-layers'
  }
]

// ==========================================
// 状态管理
// ==========================================

/** 当前激活的标签索引 - 使用 shallowRef 提升性能 */
const activeTab = shallowRef(0)

/** 触摸滑动相关状态 */
let touchStartX = 0
let touchEndX = 0
let touchStartY = 0
const minSwipeDistance = 50

/** 是否正在拖拽中 */
const isDragging = ref(false)

/**
 * 当前标签的模拟URL
 */
const currentTabUrl = computed(() => {
  return tabs[activeTab.value]?.url || 'gmlart.cn'
})

// ==========================================
// 方法定义
// ==========================================

/**
 * 切换到指定标签
 * @param index - 目标标签索引
 */
const switchTab = (index: number): void => {
  if (index < 0 || index >= tabs.length) {
    return
  }
  activeTab.value = index
  resetAutoPlay()
  // 预加载相邻图片
  preloadAdjacentImages()
}

/**
 * 切换到下一个标签
 */
const nextTab = (): void => {
  const nextIndex = (activeTab.value + 1) % tabs.length
  switchTab(nextIndex)
}

/**
 * 切换到上一个标签
 */
const prevTab = (): void => {
  const prevIndex = (activeTab.value - 1 + tabs.length) % tabs.length
  switchTab(prevIndex)
}

/**
 * 处理鼠标进入事件 - 暂停自动播放
 * @param index - 目标标签索引
 */
const handleMouseEnter = (index: number): void => {
  stopAutoPlay()
  activeTab.value = index
}

/**
 * 处理鼠标离开事件 - 恢复自动播放
 */
const handleMouseLeave = (): void => {
  startAutoPlay()
}

/**
 * 处理触摸开始事件
 * @param event - 触摸事件对象
 */
const handleTouchStart = (event: TouchEvent): void => {
  touchStartX = event.touches[0]?.clientX ?? 0
  touchStartY = event.touches[0]?.clientY ?? 0
  isDragging.value = true
  stopAutoPlay()
}

/**
 * 处理触摸移动事件
 * @param event - 触摸事件对象
 */
const handleTouchMove = (event: TouchEvent): void => {
  if (!isDragging.value) {
    return
  }
  
  const currentX = event.touches[0]?.clientX ?? 0
  const currentY = event.touches[0]?.clientY ?? 0
  const deltaX = Math.abs(currentX - touchStartX)
  const deltaY = Math.abs(currentY - touchStartY)
  
  // 如果水平滑动距离大于垂直滑动，阻止默认行为（防止页面滚动）
  if (deltaX > deltaY && deltaX > 10) {
    event.preventDefault()
  }
}

/**
 * 处理触摸结束事件
 * @param event - 触摸事件对象
 */
const handleTouchEnd = (event: TouchEvent): void => {
  touchEndX = event.changedTouches[0]?.clientX ?? 0
  isDragging.value = false
  handleSwipe()
  startAutoPlay()
}

/**
 * 处理触摸取消事件
 */
const handleTouchCancel = (): void => {
  touchStartX = 0
  touchEndX = 0
  touchStartY = 0
  isDragging.value = false
  startAutoPlay()
}

/**
 * 处理滑动逻辑
 */
const handleSwipe = (): void => {
  const swipeDistance = touchEndX - touchStartX
  
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      // 向右滑动，切换到上一个
      prevTab()
    } else {
      // 向左滑动，切换到下一个
      nextTab()
    }
  }
}

/**
 * 处理键盘导航事件
 * @param event - 键盘事件对象
 */
const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevTab()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextTab()
  }
}

/**
 * 处理页面可见性变化
 */
const handleVisibilityChange = (): void => {
  if (document.hidden) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

/**
 * 预加载相邻图片
 */
const preloadAdjacentImages = (): void => {
  const prevIndex = (activeTab.value - 1 + tabs.length) % tabs.length
  const nextIndex = (activeTab.value + 1) % tabs.length
  
  ;[prevIndex, nextIndex].forEach(index => {
    if (tabs[index]?.image) {
      const img = new Image()
      img.src = tabs[index].image
    }
  })
}

/**
 * 处理图片加载错误
 */
const handleImageError = (event: Event): void => {
  const img = event.target as HTMLImageElement
  // 可以设置一个默认的占位图
  img.src = '/images/placeholder.webp'
}

const { start: startAutoPlay, stop: stopAutoPlay, reset: resetAutoPlay } = useAutoPlay(nextTab, { interval: 4000 })

// ==========================================
// 生命周期钩子
// ==========================================

onMounted(() => {
  // 预加载第一张和相邻图片
  preloadAdjacentImages()
  // 添加键盘事件监听
  window.addEventListener('keydown', handleKeydown)
  // 添加页面可见性监听
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  // 移除键盘事件监听
  window.removeEventListener('keydown', handleKeydown)
  // 移除页面可见性监听
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
/* ==========================================
   截图切换过渡动画
   ========================================== */
.showcase-fade-enter-active,
.showcase-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.showcase-fade-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.showcase-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

/* ==========================================
   平滑过渡优化
   ========================================== */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ==========================================
   聚焦状态样式
   ========================================== */
button:focus-visible {
  outline: none;
}

/* ==========================================
   自定义滚动条 (桌面端)
   ========================================== */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

/* ==========================================
   隐藏滚动条但保持滚动功能 (移动端标签栏)
   ========================================== */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* ==========================================
   触摸优化
   ========================================== */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* ==========================================
   平板端适配 (768px - 1023px)
   ========================================== */
@media (max-width: 1023px) {
  .container {
    max-width: 100%;
  }
}

/* ==========================================
   移动端优化 (< 768px)
   ========================================== */
@media (max-width: 767px) {
  /* 确保图片区域不会溢出 */
  .showcase-fade-enter-active img,
  .showcase-fade-leave-active img {
    max-width: 100%;
    max-height: 100%;
  }
}

/* ==========================================
   超小屏幕优化 (< 480px)
   ========================================== */
@media (max-width: 479px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* ==========================================
   移动端图片防溢出
   ========================================== */
@media (max-width: 639px) {
  /* 确保图片不会撑破容器 */
  img {
    max-width: 100% !important;
    height: auto !important;
  }
  
  /* 隐藏横向滚动 */
  section {
    overflow-x: hidden;
  }
}
</style>
