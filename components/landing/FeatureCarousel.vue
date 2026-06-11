<template>
  <section class="py-16 md:py-24 bg-white overflow-hidden relative">
    <!-- 背景 -->
    <div class="absolute inset-x-0 top-0 h-[500px] pointer-events-none select-none overflow-hidden z-0">
        <div class="relative w-full h-full flex flex-col items-center pt-[27px] md:pt-[70px]">
            <div class="absolute inset-0 bg-[url('/agent.svg')] mask-[linear-gradient(to_bottom,white,transparent)] opacity-70"/>
            <div class="absolute inset-0 bg-linear-to-b from-blue-50/50 via-white/80 to-white -z-10"/>
        </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center relative z-10">
      <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
       智言AI - 探索无限可能
      </h2>
      <p class="text-gray-500 text-sm sm:text-lg tracking-wide max-w-xl mx-auto">
        覆盖多行业场景的智能解决方案
      </p>
    </div>

    <!-- 平面轮播容器 -->
    <div class="relative w-full">
      <div
        ref="scrollContainer"
        class="flex gap-4 sm:gap-6 overflow-x-auto pb-12 pt-8 md:pb-20 md:pt-10 px-4 sm:px-[calc(50vw-180px)] scrollbar-hide select-none"
        :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @touchstart.passive="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchEnd"
      >
        <div
          v-for="card in allCards"
          :key="card.uniqueKey"
          class="shrink-0 w-[85vw] sm:w-[360px]"
        >
          <div
            class="group relative rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white border border-gray-100"
          >
            <!-- 渐变背景 -->
            <div class="absolute inset-0 -z-10 opacity-20" :class="`bg-linear-to-b ${card.gradient}`"/>

            <!-- Content -->
            <div class="p-5">
              <!-- 标题 -->
              <h3 class="text-lg font-medium text-gray-900 mb-2 line-clamp-1">
                {{ card.title }}
              </h3>
              
              <!-- 描述 -->
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 h-[4.5em]">
                {{ card.desc }}
              </p>

              <!-- 图片 -->
              <div class="rounded-xl overflow-hidden aspect-video shadow-sm bg-gray-50">
                 <img
                   :src="card.image"
                   :alt="card.title"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   loading="lazy"
                   draggable="false"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 边缘淡入 -->
      <div class="absolute inset-y-0 left-0 w-8 md:w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10"/>
      <div class="absolute inset-y-0 right-0 w-8 md:w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { apps } from '~/utils/pluginData'

const gradients = [
  'from-[#E0F2FE] to-[#BAE6FD]', 'from-[#F3E8FF] to-[#E9D5FF]',
  'from-[#FFE4E6] to-[#FECDD3]', 'from-[#FEF3C7] to-[#FDE68A]',
  'from-[#D1FAE5] to-[#A7F3D0]', 'from-[#E0E7FF] to-[#C7D2FE]',
  'from-[#FFEDD5] to-[#FED7AA]', 'from-[#CCFBF1] to-[#99F6E4]',
  'from-[#FAE8FF] to-[#F5D0FE]', 'from-[#ECFEFF] to-[#A5F3FC]',
  'from-[#FEF9C3] to-[#FDE047]', 'from-[#FEE2E2] to-[#FECACA]',
  'from-[#EDE9FE] to-[#DDD6FE]', 'from-[#DBEAFE] to-[#BFDBFE]',
  'from-[#ECFCCB] to-[#D9F99D]'
]

const originalCards = apps.map((app, index) => ({
  title: app.name,
  desc: app.description,
  image: app.image,
  gradient: gradients[index % gradients.length]
}))

// 3组实现无限滚动
const TOTAL_SETS = 3
const cardsPerSet = originalCards.length
const allCards = Array.from({ length: cardsPerSet * TOTAL_SETS }, (_, i) => ({
  ...originalCards[i % cardsPerSet],
  uniqueKey: `card-${i}`
}))

const scrollContainer = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const initialScrollLeft = ref(0)

// 拖拽
const startDrag = (e: MouseEvent) => {
  isDragging.value = true
  stopAutoPlay()
  if (scrollContainer.value) {
    startX.value = e.pageX - scrollContainer.value.offsetLeft
    initialScrollLeft.value = scrollContainer.value.scrollLeft
  }
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !scrollContainer.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  scrollContainer.value.scrollLeft = initialScrollLeft.value - walk
}

const stopDrag = () => {
  isDragging.value = false
  startAutoPlay()
}

const handleTouchStart = () => {
  isDragging.value = true
  stopAutoPlay()
}

const handleTouchEnd = () => {
  isDragging.value = false
  startAutoPlay()
}

// 自动播放
let autoScrollFrameId: number | null = null
const AUTO_SCROLL_SPEED = 0.8

const autoScrollLoop = () => {
  if (scrollContainer.value && !isDragging.value) {
    scrollContainer.value.scrollLeft += AUTO_SCROLL_SPEED
    checkInfiniteScroll()
  }
  autoScrollFrameId = requestAnimationFrame(autoScrollLoop)
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoScrollFrameId = requestAnimationFrame(autoScrollLoop)
}

const stopAutoPlay = () => {
  if (autoScrollFrameId) {
    cancelAnimationFrame(autoScrollFrameId)
    autoScrollFrameId = null
  }
}

// 无限滚动
const checkInfiniteScroll = () => {
  if (!scrollContainer.value || isDragging.value) return

  const container = scrollContainer.value
  const isMobile = window.innerWidth < 768
  const cardWidth = isMobile ? window.innerWidth * 0.85 : 360
  const gap = isMobile ? 16 : 24
  const itemFullWidth = cardWidth + gap
  const singleSetWidth = itemFullWidth * cardsPerSet

  if (container.scrollLeft > singleSetWidth * 2.2) {
    container.scrollLeft -= singleSetWidth
  } else if (container.scrollLeft < singleSetWidth * 0.8) {
    container.scrollLeft += singleSetWidth
  }
}

// 页面可见性
const handleVisibilityChange = () => {
  if (document.hidden) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange)

  nextTick(() => {
    if (scrollContainer.value) {
      const container = scrollContainer.value
      const isMobile = window.innerWidth < 768
      const cardWidth = isMobile ? window.innerWidth * 0.85 : 360
      const gap = isMobile ? 16 : 24
      const itemFullWidth = cardWidth + gap
      const singleSetWidth = itemFullWidth * cardsPerSet

      // 初始化到中间组
      container.scrollLeft = isMobile ? singleSetWidth : singleSetWidth - window.innerWidth / 2 + cardWidth / 2 + gap

      startAutoPlay()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  stopAutoPlay()
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
