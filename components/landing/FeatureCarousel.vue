<template>
  <section class="py-24 bg-black overflow-hidden relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        BuildingAI 可以帮你做什么
      </h2>
      <p class="text-gray-400 text-lg tracking-wide">
        部署 BuildingAI 无限拓展应用场景
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full">
      <div
        class="flex gap-8 overflow-x-auto pb-20 pt-10 px-[50vw] scrollbar-hide perspective-container select-none"
        :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
        ref="scrollContainer"
        @scroll="handleScroll"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex-shrink-0 w-[360px] perspective-item will-change-transform"
          :ref="(el) => { if(el) cardRefs[index] = el as HTMLElement }"
        >
          <div class="group relative h-[480px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-primary-900/20">

            <!-- Content -->
            <div class="p-8 h-full flex flex-col relative z-10">
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {{ card.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-6">
                {{ card.desc }}
              </p>

              <div class="mt-auto rounded-lg overflow-hidden h-40 relative">
                 <img
                   :src="card.image"
                   :alt="card.title"
                   class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                   loading="lazy"
                   draggable="false"
                 />
                 <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
              </div>
            </div>

            <!-- Hover Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- Fade Edges (Dark) -->
      <div class="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      <div class="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const cards = [
  {
    title: '信息流投放',
    desc: '部署开源 BuildingAI，批量生成信息流组图、视频从未如此简单快速!无论是写实人物还是动漫卡通风格，微电影还是连环故事剧情形式，BuildingAI 都能通过各种应用来满足你的需求!',
    image: '/1.png'
  },
  {
    title: '智能硬件',
    desc: '语音唤醒、AI对话、意图识别、长期记忆...，BuildingAI计划探索多模态情感智能体与硬件结合的可能性。敬请期待。',
    image: '/1.png'
  },
  {
    title: 'AI应用开发',
    desc: '部署开源 BuildingAI ，模型对话、模型管理、上下文工程知识库、MCP、工作流、微信支付、支付宝支付、组织权限等基础模块一步到位，结合强大的插件机制设计，助力开发者成功转型AI应用开发。',
    image: '/1.png'
  },
  {
    title: '生产力平台',
    desc: '部署开源 BuildingAI，通过应用市场，企业可自行安装符合不同业务部门需求的AI应用。无需学习，开箱即用。后台管理，前台使用，架构清晰，拖拉拽DIY构建企业私有AI生产力平台。',
    image: '/1.png'
  },
  {
    title: '人工智能教育',
    desc: '部署开源 BuildingAI，即可获得完整的项目代码。BuildingAI持续迭代，涵盖全球前沿AI技术而封装的功能模块。代码结构清晰易懂，优雅简洁，不仅可以作为人工智能教学素材演示，更可以基于源码进行二次开发来作为实战练习。',
    image: '/1.png'
  },
  {
    title: '后端即服务',
    desc: '部署开源 BuildingAI，前后端分离设计，统一预留对外API，结合可扩展的插件机制。无论第三方调用还是系统集成，都可快速融合AI能力。结合API，甚至可以重新定义自己团队专属的UI交互界面哦。',
    image: '/1.png'
  },
  {
    title: '电商设计',
    desc: '部署开源 BuildingAI，无论是产品实拍，广告图，人物换装，还是虚拟模特，主图视频，都可以使用 BuildingAI 灵活的AI工具组合来完成！风格百变，批量输出，任君挑选。想怎么改，就怎么改！打造店铺专属AI美工！',
    image: '/1.png'
  },
  {
    title: 'AI智能体',
    desc: '部署开源 BuildingAI，无需关注底层技术细节，即可零代码轻松搭建具备不同功能、不同特性的AI智能体。值得一提，BuildingAI 现已支持对接 Dify, Coze等第三方智能体，实现多智能体协作聚合。',
    image: '/1.png'
  },
  {
    title: 'AI知识博主',
    desc: '部署开源 BuildingAI，让学员都能用上带有你品牌标识专属的AI平台。打造私域流量！通过会员订阅服务，让知识收益源源不断！想要贴合课程计划，随时在 BuildingAI 应用市场获取最新的AI应用来做场景演示！',
    image: '/1.png'
  },
  {
    title: 'AI产品落地',
    desc: '部署开源 BuildingAI，让想法落地，让创新发生。无论是内部效率工具，还是面向客户的SaaS产品，BuildingAI 都能提供坚实的技术底座，助你快速验证市场，抢占先机。',
    image: '/1.png'
  }
]

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
      // Calculate total width of items
      // Simple approximation: first item width * count
      // Better: Scroll to index 3 (middle)
      const cardWidth = 360 + 32 // width + gap
      container.scrollLeft = (cardWidth * cards.length) / 2 - window.innerWidth / 2 + cardWidth / 2

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
