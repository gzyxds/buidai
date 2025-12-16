<template>
  <section class="py-24 bg-black overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        BuidAI 可以帮你做什么
      </h2>
      <p class="text-gray-400 text-lg tracking-wide">
        部署 BuidAI 无限拓展应用场景
      </p>
    </div>

    <!-- 3D 轮播容器 -->
    <div class="relative w-full">
      <div
        class="flex gap-4 sm:gap-8 overflow-x-auto pb-20 pt-10 px-4 sm:px-[50vw] scrollbar-hide perspective-container select-none"
        :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
        ref="scrollContainer"
        @scroll="handleScroll"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @touchstart="stopDrag"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex-shrink-0 w-[85vw] sm:w-[360px] perspective-item will-change-transform"
          :ref="(el) => { if(el) cardRefs[index] = el as HTMLElement }"
        >
          <div
            class="group relative h-auto min-h-[400px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            :class="`bg-gradient-to-b ${card.gradient}`"
          >

            <!-- Content -->
            <div class="p-8 h-full flex flex-col relative z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 transition-colors">
                {{ card.title }}
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-6 font-medium">
                {{ card.desc }}
              </p>

              <div class="mt-2 rounded-lg overflow-hidden h-40 relative shadow-inner flex-shrink-0">
                 <img
                   :src="card.image"
                   :alt="card.title"
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                   loading="lazy"
                   draggable="false"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 淡入边缘（暗） -->
      <div class="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      <div class="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { apps } from '~/utils/pluginData'

const gradients = [
  'from-[#E0F2FE] to-[#BAE6FD]', // Sky Blue
  'from-[#F3E8FF] to-[#E9D5FF]', // Purple
  'from-[#FFE4E6] to-[#FECDD3]', // Rose
  'from-[#FEF3C7] to-[#FDE68A]', // Amber
  'from-[#D1FAE5] to-[#A7F3D0]', // Emerald
  'from-[#E0E7FF] to-[#C7D2FE]', // Indigo
  'from-[#FFEDD5] to-[#FED7AA]', // Orange
  'from-[#CCFBF1] to-[#99F6E4]', // Teal
  'from-[#FAE8FF] to-[#F5D0FE]', // Fuchsia
  'from-[#ECFEFF] to-[#A5F3FC]', // Cyan
  'from-[#FEF9C3] to-[#FDE047]', // Yellow
  'from-[#FEE2E2] to-[#FECACA]', // Red
  'from-[#EDE9FE] to-[#DDD6FE]', // Violet
  'from-[#DBEAFE] to-[#BFDBFE]', // Blue
  'from-[#ECFCCB] to-[#D9F99D]'  // Lime
]

const cards = apps.map((app, index) => ({
  title: app.name,
  desc: app.description,
  image: app.image,
  gradient: gradients[index % gradients.length]
}))

const scrollContainer = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
let animationFrameId: number | null = null

// Drag functionality
const isDragging = ref(false)
const startX = ref(0)
const initialScrollLeft = ref(0)

const startDrag = (e: MouseEvent) => {
  isDragging.value = true
  if (scrollContainer.value) {
    startX.value = e.pageX - scrollContainer.value.offsetLeft
    initialScrollLeft.value = scrollContainer.value.scrollLeft
  }
}

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !scrollContainer.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 1.5 // Scroll-fast
  scrollContainer.value.scrollLeft = initialScrollLeft.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}

const handleScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  animationFrameId = requestAnimationFrame(() => {
    updateTransforms()
  })
}

const updateTransforms = () => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  const viewportCenter = window.innerWidth / 2
  const containerRect = container.getBoundingClientRect()

  cardRefs.value.forEach((card) => {
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2

    // Calculate distance from center (normalized)
    // 1000px range for full rotation effect
    const range = 1000
    let dist = (cardCenter - viewportCenter) / range

    // Clamp distance
    if (dist < -1) dist = -1
    if (dist > 1) dist = 1

    // Easing for smoother curve
    const rotation = dist * 45 // Max 45 degrees rotation
    const translateZ = Math.abs(dist) * -200 // Push back up to 200px
    const scale = 1 - Math.abs(dist) * 0.1 // Scale down slightly at edges
    const opacity = 1 - Math.abs(dist) * 0.3 // Fade out slightly at edges

    card.style.transform = `perspective(1000px) rotateY(${rotation}deg) translateZ(${translateZ}px) scale(${scale})`
    card.style.opacity = `${opacity}`
  })
}

onMounted(() => {
  nextTick(() => {
    // Center the scroll initially
    if (scrollContainer.value) {
      const container = scrollContainer.value

      // Check if mobile (using simple width check)
      const isMobile = window.innerWidth < 640

      if (!isMobile) {
        const cardWidth = 360 + 32 // width + gap
        container.scrollLeft = (cardWidth * cards.length) / 2 - window.innerWidth / 2 + cardWidth / 2
      } else {
        // On mobile, maybe start at the beginning or slightly offset?
        // Let's just scroll to the second item to show there's more
        // container.scrollLeft = 0
      }

      updateTransforms()
    }

    window.addEventListener('resize', handleScroll)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleScroll)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
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
.perspective-container {
  perspective: 1000px;
  perspective-origin: center center;
}
.perspective-item {
  transform-style: preserve-3d;
  transition: transform 0.1s linear, opacity 0.1s linear; /* Short transition for smoothness during scroll */
}
</style>
