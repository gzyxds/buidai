<template>
  <!-- AI应用系统展示组件 -->
  <section class="bg-neutral-50">
    <!-- 主内容区域 -->
    <div class="container mx-auto px-4 py-14 md:py-20">
      <!-- 标题 -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold text-neutral-900 md:text-3xl">
          使用智言AI可以<span class="text-indigo-600">积木式轻松搭建</span>如下AI应用系统
        </h2>
        <p class="mt-3 text-neutral-500">智言AI同样致力于在AI时代打造备受青睐的、可快速搭建AI应用系统的开源解决方案</p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <!-- 左侧展示卡片 -->
        <div class="md:col-span-2 lg:col-span-2 lg:row-span-3 bg-white rounded-xl overflow-hidden flex flex-col border border-neutral-200">
          <!-- 图片区域 - 添加触摸事件支持 -->
          <div 
            class="relative w-full bg-neutral-50 p-3 touch-pan-y"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @touchcancel="handleTouchCancel"
          >
            <div class="relative w-full overflow-hidden rounded-lg" style="aspect-ratio: 16/5.5;">
              <!-- 预加载下一张图片 -->
              <img
                v-for="system in systemsList"
                :key="`preload-${system.id}`"
                :src="system.demoImage"
                :alt="system.name"
                class="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                loading="lazy"
              />
              <!-- 当前显示图片 -->
              <img
                :src="currentSystem?.demoImage || '/images/CtaSection.jpg'"
                :alt="currentSystem?.name"
                loading="eager"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out rounded-lg"
                :class="isTransitioning ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'"
                @error="handleImageError"
              />
            </div>
          </div>
          
          <!-- 信息栏 -->
          <div class="px-4 py-2.5 flex items-center justify-between bg-white">
            <h3 class="font-medium text-sm text-neutral-800">{{ currentSystem?.name }}</h3>
            <!-- 圆点指示器 -->
            <div class="flex items-center gap-1.5">
              <button
                v-for="(system, idx) in systemsList"
                :key="`dot-${system.id}`"
                class="rounded-full transition-all duration-300"
                :class="activeIndex === idx
                  ? 'bg-indigo-500 w-4 h-1.5'
                  : 'bg-neutral-300 hover:bg-neutral-400 w-1.5 h-1.5'"
                :aria-label="`切换到 ${system.name}`"
                @click="selectSystem(idx)"
                @mouseenter="pauseAutoPlay"
                @mouseleave="resumeAutoPlay"
              />
            </div>
          </div>
          
          <!-- 进度条 -->
          <div class="h-0.5 bg-neutral-100 relative overflow-hidden">
            <div 
              class="h-full bg-indigo-500 absolute left-0 top-0 transition-none"
              :style="progressBarStyle"
            />
          </div>
        </div>

        <!-- 右侧列表 -->
        <div
          v-for="(system, index) in systemsList"
          :key="system.id"
          class="px-3.5 py-4 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-center border"
          :class="activeIndex === index 
            ? 'border-indigo-200 bg-indigo-50/50' 
            : 'border-neutral-200 hover:border-indigo-200 bg-white'"
          @click="selectSystem(index)"
          @mouseenter="pauseAutoPlay"
          @mouseleave="resumeAutoPlay"
        >
          <div class="flex items-start gap-3">
            <div 
              class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
              :class="activeIndex === index 
                ? 'bg-indigo-500 text-white' 
                : 'bg-neutral-100 text-neutral-400'"
            >
              <component :is="system.icon" class="w-4.5 h-4.5"/>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-medium text-sm leading-tight transition-colors duration-200" :class="activeIndex === index ? 'text-indigo-600' : 'text-neutral-800'">
                {{ system.name }}
              </h4>
              <p class="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">{{ system.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, shallowRef } from 'vue'
import type { Component } from 'vue'
import {
  Palette, Bot, MessageCircleCode, Lightbulb, BookOpenText,
  School, ChevronsLeftRightEllipsis, BadgeCheck, ShoppingCart,
  Map, FileText, HeartPulse
} from 'lucide-vue-next'

// 类型定义
export interface AIApplicationSystem {
  id: number | string
  name: string
  description: string
  icon: Component
  demoImage: string
}

interface Props {
  systems?: AIApplicationSystem[]
  autoPlayInterval?: number
  autoPlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  systems: () => [],
  autoPlayInterval: 4000,
  autoPlay: true
})

// 默认数据
const defaultSystems: AIApplicationSystem[] = [
  { id: 1, name: 'AI聊天绘画系统', description: '可快速搭建集成全球所有顶级大语言模型并且兼容主流AIGC图片模型，具备智能对话，图片生成，用户管理，算力计费，会员订阅等模块的AI应用系统', icon: Palette, demoImage: '/images/Modelbackground.png' },
  { id: 2, name: '企业智能体系统', description: '可快速搭建企业级智能体，支持业务流程自动化、数据分析汇总、决策辅助，可对接企业现有系统，扩展权限分级管理，提升企业运营效率的AI应用系统', icon: Bot, demoImage: '/images/Modelbackground.png' },
  { id: 3, name: '企业AI客服系统', description: '可快速搭建集成多轮对话模型，支持7*24小时智能知识库应答、常见问题解答，可扩展工单流转与客户画像管理能力，降低企业客服运营成本的AI应用系统', icon: MessageCircleCode, demoImage: '/images/buidai-1.webp' },
  { id: 4, name: 'AI漫剧创意系统', description: '可快速搭建支持剧本智能创作、角色形象生成、漫剧素材库管理，适配分镜设计与台词优化，显著降低漫剧创作门槛，适配个人创作者与工作室的AI应用系统', icon: Lightbulb, demoImage: '/images/buidai-2.webp' },
  { id: 5, name: 'AI论文学术系统', description: '可快速搭建提供文献检索、论文框架构建、查重辅助与格式校对功能，集成学术大模型答疑和参考文献管理，助力科研人员提升论文撰写效率的AI应用系统', icon: BookOpenText, demoImage: '/images/buidai-3.webp' },
  { id: 6, name: 'AI校园助手系统', description: '可快速搭建包含校园信息查询、选课咨询、成绩查询、校园导航等AI智能体功能，提升校园管理与服务效率的AI应用系统', icon: School, demoImage: '/images/buidai-4.webp' },
  { id: 7, name: '智能体在线实训系统', description: '支持智能体开发实训、大模型对话操练、知识库内容清洗', icon: ChevronsLeftRightEllipsis, demoImage: '/images/buidai-4.webp' },
  { id: 8, name: 'AI工业质检辅助系统', description: '集成高精度图像识别模型，支持多品类产品缺陷检测', icon: BadgeCheck, demoImage: '/images/buidai-5.webp' },
  { id: 9, name: 'AI电商素材系统', description: '支持商品文案智能生成、主图/详情图多风格AIGC创作', icon: ShoppingCart, demoImage: '/images/buidai-6.webp' },
  { id: 10, name: 'AI文旅导览系统', description: '提供多语言数字人语音导览、景点深度讲解、行程规划', icon: Map, demoImage: '/images/buidai-7.webp' },
  { id: 11, name: 'AI法律文书系统', description: '支持多类型文书起草、法律条文检索、合规性审核', icon: FileText, demoImage: '/images/Modelbackground.png' },
  { id: 12, name: 'AI医疗咨询系统', description: '提供权威健康知识科普、症状问询与风险分级、就医建议', icon: HeartPulse, demoImage: '/images/Modelbackground.png' }
]

// 状态 - 使用 shallowRef 提升性能
const systemsList = computed(() => props.systems?.length ? props.systems : defaultSystems)
const activeIndex = shallowRef(0)
const progress = shallowRef(0)
const isTransitioning = shallowRef(false)
const isPaused = shallowRef(false)

// 触摸滑动相关状态
let touchStartX = 0
let touchStartY = 0
let touchEndX = 0
const minSwipeDistance = 50

let autoPlayTimer: ReturnType<typeof setTimeout> | null = null
let progressStartTime = 0
let progressRafId: number | null = null

// 计算属性
const currentSystem = computed(() => systemsList.value[activeIndex.value])

// 进度条样式 - 统一使用 JS 控制
const progressBarStyle = computed(() => ({
  width: `${progress.value}%`,
  transition: isPaused.value || isTransitioning.value ? 'none' : 'width 100ms linear'
}))

// 方法
const selectSystem = (index: number) => {
  if (index < 0 || index >= systemsList.value.length || index === activeIndex.value) {
    return
  }

  isTransitioning.value = true
  progress.value = 0

  // 使用 requestAnimationFrame 确保动画流畅
  requestAnimationFrame(() => {
    activeIndex.value = index

    // 等待过渡动画完成
    setTimeout(() => {
      isTransitioning.value = false
      resetAutoPlay()
    }, 500)
  })
}

const pauseAutoPlay = () => { 
  isPaused.value = true 
  cancelProgressAnimation()
}

const resumeAutoPlay = () => { 
  isPaused.value = false
  resetAutoPlay()
}

// 使用 requestAnimationFrame 替代 setInterval 实现更流畅的进度条
const startProgressAnimation = () => {
  if (!props.autoPlay) {
    return
  }

  progressStartTime = performance.now()
  const duration = props.autoPlayInterval

  const animate = (currentTime: number) => {
    if (isPaused.value || isTransitioning.value) {
      progressRafId = requestAnimationFrame(animate)
      return
    }

    const elapsed = currentTime - progressStartTime
    progress.value = Math.min((elapsed / duration) * 100, 100)

    if (elapsed < duration) {
      progressRafId = requestAnimationFrame(animate)
    }
  }

  progressRafId = requestAnimationFrame(animate)
}

const cancelProgressAnimation = () => {
  if (progressRafId) {
    cancelAnimationFrame(progressRafId)
    progressRafId = null
  }
}

// 自动播放 - 使用单个定时器管理
const startAutoPlay = () => {
  if (!props.autoPlay) {
    return
  }

  startProgressAnimation()

  autoPlayTimer = setTimeout(() => {
    if (!isPaused.value) {
      const nextIndex = (activeIndex.value + 1) % systemsList.value.length
      selectSystem(nextIndex)
    }
  }, props.autoPlayInterval)
}

const stopAutoPlay = () => {
  cancelProgressAnimation()
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  progress.value = 0
  startAutoPlay()
}

// 预加载图片 - 优先加载当前和相邻图片
const preloadImages = (priorityIndices: number[]) => {
  priorityIndices.forEach(index => {
    const system = systemsList.value[index]
    if (system?.demoImage) {
      const img = new Image()
      // 静默处理加载结果，避免控制台输出
      img.src = system.demoImage
    }
  })
}

// 处理触摸开始事件
const handleTouchStart = (event: TouchEvent): void => {
  touchStartX = event.touches[0]?.clientX ?? 0
  touchStartY = event.touches[0]?.clientY ?? 0
  pauseAutoPlay()
}

// 处理触摸移动事件
const handleTouchMove = (event: TouchEvent): void => {
  const currentX = event.touches[0]?.clientX ?? 0
  const currentY = event.touches[0]?.clientY ?? 0
  const deltaX = Math.abs(currentX - touchStartX)
  const deltaY = Math.abs(currentY - touchStartY)
  
  // 如果水平滑动距离大于垂直滑动，阻止默认行为
  if (deltaX > deltaY && deltaX > 10) {
    event.preventDefault()
  }
}

// 处理触摸结束事件
const handleTouchEnd = (event: TouchEvent): void => {
  touchEndX = event.changedTouches[0]?.clientX ?? 0
  handleSwipe()
  resumeAutoPlay()
}

// 处理触摸取消事件
const handleTouchCancel = (): void => {
  touchStartX = 0
  touchEndX = 0
  touchStartY = 0
  resumeAutoPlay()
}

// 处理滑动逻辑
const handleSwipe = (): void => {
  const swipeDistance = touchEndX - touchStartX
  
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      // 向右滑动，切换到上一个
      const prevIndex = (activeIndex.value - 1 + systemsList.value.length) % systemsList.value.length
      selectSystem(prevIndex)
    } else {
      // 向左滑动，切换到下一个
      const nextIndex = (activeIndex.value + 1) % systemsList.value.length
      selectSystem(nextIndex)
    }
  }
}

// 处理键盘导航事件
const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    const prevIndex = (activeIndex.value - 1 + systemsList.value.length) % systemsList.value.length
    selectSystem(prevIndex)
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    const nextIndex = (activeIndex.value + 1) % systemsList.value.length
    selectSystem(nextIndex)
  }
}

// 处理页面可见性变化
const handleVisibilityChange = (): void => {
  if (document.hidden) {
    pauseAutoPlay()
  } else {
    resumeAutoPlay()
  }
}

// 处理图片加载错误
const handleImageError = (event: Event): void => {
  const img = event.target as HTMLImageElement
  img.src = '/images/placeholder.webp'
}

onMounted(() => {
  // 优先加载当前和下一张图片
  const current = activeIndex.value
  const next = (current + 1) % systemsList.value.length
  preloadImages([current, next])
  
  // 延迟加载其他图片
  setTimeout(() => {
    const others = systemsList.value
      .map((_, i) => i)
      .filter(i => i !== current && i !== next)
    preloadImages(others)
  }, 2000)
  
  // 添加事件监听
  window.addEventListener('keydown', handleKeydown)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
  // 移除事件监听
  window.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 触摸优化 */
.touch-pan-y {
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

/* 圆点指示器基础尺寸 */
:deep(button[class*='rounded-full']) {
  min-width: 6px;
}
</style>
