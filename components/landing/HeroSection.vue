<template>
  <section
    class="relative min-h-[80dvh] flex items-center overflow-hidden bg-white text-black pt-24 pb-16 md:py-24"
  >
    <!-- AI 主题背景：极光网格 + 六边形电路 + 扩散波纹 -->
    <div class="ai-bg absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- 基础色层 -->
      <div class="absolute inset-0 bg-[#fafbff]" />

      <!-- 六边形网格纹理 -->
      <svg class="hex-grid absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
            <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="rgba(99,102,241,.06)" stroke-width="0.6"/>
            <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="rgba(99,102,241,.04)" stroke-width="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <!-- 极光渐变流动层 -->
      <div class="ai-aurora ai-aurora-1" />
      <div class="ai-aurora ai-aurora-2" />

      <!-- 电路走线 SVG（静态装饰） -->
      <svg class="circuit-lines absolute inset-0 w-full h-full" aria-hidden="true">
        <g fill="none" stroke-width="1" stroke-linecap="round" opacity="0.6">
          <path d="M0,35% H12% L15%,32% H28%" stroke="rgba(99,102,241,.12)" />
          <circle cx="28%" cy="32%" r="2.5" fill="rgba(99,102,241,.2)" class="ai-dot-pulse" />
          <path d="M0,55% H8% L10%,52% H22% L24%,55% H32%" stroke="rgba(139,92,246,.1)" />
          <circle cx="32%" cy="55%" r="2" fill="rgba(139,92,246,.15)" class="ai-dot-pulse" style="animation-delay:1s" />
          <path d="M100%,42% H88% L85%,45% H72%" stroke="rgba(99,102,241,.12)" />
          <circle cx="72%" cy="45%" r="2.5" fill="rgba(99,102,241,.2)" class="ai-dot-pulse" style="animation-delay:.5s" />
          <path d="M100%,68% H90% L88%,65% H78% L76%,68% H68%" stroke="rgba(6,182,212,.1)" />
          <circle cx="68%" cy="68%" r="2" fill="rgba(6,182,212,.15)" class="ai-dot-pulse" style="animation-delay:1.5s" />
          <path d="M45%,0 V12% L48%,15% V25%" stroke="rgba(99,102,241,.1)" />
          <circle cx="48%" cy="25%" r="2" fill="rgba(99,102,241,.15)" class="ai-dot-pulse" style="animation-delay:2s" />
        </g>
      </svg>

      <!-- 扩散波纹环 -->
      <div class="ai-ripple ai-ripple-1" />

      <!-- 底部渐变过渡 -->
      <div class="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
    <div
      class="container mx-auto container-padding relative z-10 w-full"
      :class="props.ui.container"
    >
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div
          class="relative space-y-6 md:space-y-8 text-center lg:text-left"
          :class="props.ui.content"
        >

          <div class="flex justify-center lg:justify-start">
            <div
              class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-black/5 border border-black/10"
            >
              <span
                class="px-1.5 py-0.5 rounded bg-ui-primary text-[11px] md:text-xs font-bold text-white tracking-wider"
              >
                NEW
              </span>
              <span class="text-xs md:text-sm text-gray-600">Nanobanana视频生成全新升级</span>
            </div>
          </div>

          <slot name="title">
            <div class="space-y-3 md:space-y-5" :class="props.ui.title">
              <h1
                class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-black"
              >
                <span class="text-ui-primary">企业级一体化</span>
                生成创作平台
              </h1>
              <p class="text-sm sm:text-base lg:text-lg text-black/60 leading-relaxed">
                面向
                <span class="text-ui-primary font-semibold">AI开发者</span>
                ·
                <span class="text-ui-primary font-semibold">AI创业者</span>
                ·
                <span class="text-ui-primary font-semibold">先进组织</span>
              </p>
            </div>
          </slot>

          <slot name="description">
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed min-h-[1.75em]"
              :class="props.ui.description"
            >
              {{ typeWriterText }}
              <span
                class="animate-blink ml-1 border-r-2 border-ui-primary h-[1.2em] align-middle inline-block"
              />
            </p>
          </slot>

          <slot name="links">
            <div
              class="mt-6 sm:mt-8 lg:mt-10 flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 w-full sm:w-auto px-3 sm:px-0"
              :class="props.ui.links"
            >
              <a
                href="https://www.gmlart.cn"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-1 sm:gap-2 touch-manipulation min-h-[40px] sm:min-h-[44px]"
              >
                <UIcon
                  name="i-heroicons-rocket-launch"
                  class="shrink-0 size-4 sm:size-5"
                  aria-hidden="true"
                />
                开始使用
              </a>
              <a
                href="https://www.gmlart.cn"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs sm:text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all flex items-center justify-center gap-1 sm:gap-2 touch-manipulation min-h-[40px] sm:min-h-[44px]"
              >
                <UIcon
                  name="i-heroicons-sparkles"
                  class="shrink-0 size-4 sm:size-5"
                  aria-hidden="true"
                />
                立即创造
              </a>
            </div>

            <!-- Falling Text 动画组件 -->
            <div
              class="pt-2 md:pt-4 w-full max-w-2xl mx-auto lg:mx-0 lg:-ml-8 h-[160px] md:h-[200px] pointer-events-auto"
            >
              <LazyFallingText
                text="TypeScript 智言AI NestJS Vue Nuxt 开源"
                :word-colors="[
                  { word: 'TypeScript', color: 'text-blue-600' },
                  { word: '智言AI', color: 'text-cyan-600' },
                  { word: 'NestJS', color: 'text-indigo-500' },
                  { word: 'Vue', color: 'text-emerald-600' },
                  { word: 'Nuxt', color: 'text-lime-600' },
                  { word: '开源', color: 'text-purple-600' }
                ]"
                trigger="scroll"
                background-color="transparent"
                :wireframes="false"
                :gravity="0.1"
                :mouse-constraint-stiffness="0.3"
              />
            </div>
          </slot>
        </div>

        <div
          class="relative w-full z-10 mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:top-0 lg:bottom-0 lg:w-[50vw] lg:h-auto flex flex-col justify-center"
          :class="props.ui.imageSection"
        >
          <div class="absolute inset-0 -z-10 pointer-events-none">
            <div
              class="mx-auto w-[90%] md:w-[85%] h-[60%] rounded-[40px] bg-linear-to-br from-black/5 via-black/2 to-black/5 blur-2xl"
            />
          </div>

          <!-- Desktop: Vertical Marquee -->
          <div class="hidden lg:grid grid-cols-2 gap-6 w-full pl-12 pr-4">
            <UMarquee
              orientation="vertical"
              :overlay="false"
              :ui="{
                root: '[--duration:34s] relative h-[720px]'
              }"
            >
              <img
                v-for="(img, index) in marqueeImageGroups.first"
                :key="img"
                :src="img"
                width="460"
                height="258"
                :alt="`智言万象 插件预览 ${index + 1}`"
                loading="lazy"
                decoding="async"
                class="aspect-video border border-default rounded-[12px] bg-white shadow-sm"
                @error="handleImageError"
              />
            </UMarquee>
            <UMarquee
              reverse
              orientation="vertical"
              :overlay="false"
              :ui="{
                root: '[--duration:38s] relative h-[720px]'
              }"
            >
              <img
                v-for="(img, index) in marqueeImageGroups.second"
                :key="img"
                :src="img"
                width="460"
                height="258"
                :alt="`智言万象 插件预览 ${index + 1}`"
                loading="lazy"
                decoding="async"
                class="aspect-video border border-default rounded-[12px] bg-white shadow-sm"
                @error="handleImageError"
              />
            </UMarquee>
          </div>

          <!-- Mobile: Horizontal Marquee -->
          <div class="flex flex-col gap-4 lg:hidden w-screen -ml-[calc(50vw-50%)]">
            <UMarquee
              orientation="horizontal"
              :overlay="false"
              :ui="{
                root: '[--duration:30s] relative py-2'
              }"
            >
              <img
                v-for="img in marqueeImageGroups.first"
                :key="img"
                :src="img"
                class="h-[140px] w-auto aspect-video border border-default rounded-[12px] bg-white shadow-sm mx-2"
                alt="智言万象 插件预览"
                loading="lazy"
                decoding="async"
                @error="handleImageError"
              />
            </UMarquee>
            <UMarquee
              reverse
              orientation="horizontal"
              :overlay="false"
              :ui="{
                root: '[--duration:35s] relative py-2'
              }"
            >
              <img
                v-for="img in marqueeImageGroups.second"
                :key="img"
                :src="img"
                class="h-[140px] w-auto aspect-video border border-default rounded-[12px] bg-white shadow-sm mx-2"
                alt="智言万象 插件预览"
                loading="lazy"
                decoding="async"
                @error="handleImageError"
              />
            </UMarquee>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { apps } from '~/utils/pluginData'
import { LAYOUT, ANIMATION, MARQUEE } from '~/utils/ui'

const marqueeImages = apps.map(app => app.image)

interface HeroSectionProps {
  orientation?: 'horizontal' | 'vertical'
  ui?: {
    container?: string
    title?: string
    description?: string
    links?: string
    content?: string
    imageSection?: string
  }
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  orientation: 'horizontal',
  ui: () => ({
    container: 'pb-0 sm:pb-0 lg:py-0',
    title: '',
    description: 'text-balance',
    links: '',
    content: '',
    imageSection: ''
  })
})

const isMobile = ref(false)

// ── 打字机效果 ──
const typeWriterText = ref('')
const sentences = [
  '它能够助您快速开发AI应用，缩短80%项目交付周期',
  '它拥有开箱即用的丰富AI应用',
  '它正在努力成为AI应用落地的首选方案',
  '它能够助您快速落地MVP，验证AI应用商业价值'
]
let sentenceIndex = 0
let charIndex = 0
let isDeleting = false
let typeTimeout: ReturnType<typeof setTimeout> | null = null

const typeWriter = () => {
  const currentSentence = sentences[sentenceIndex]
  if (!currentSentence) return

  if (isDeleting) {
    typeWriterText.value = currentSentence.substring(0, charIndex - 1)
    charIndex--
  } else {
    typeWriterText.value = currentSentence.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed: number = isDeleting
    ? ANIMATION.TYPEWRITER_DELETING_SPEED
    : ANIMATION.TYPEWRITER_TYPING_SPEED

  if (!isDeleting && charIndex === currentSentence.length) {
    typeSpeed = ANIMATION.TYPEWRITER_PAUSE_AFTER_COMPLETE
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    sentenceIndex = (sentenceIndex + 1) % sentences.length
    typeSpeed = ANIMATION.TYPEWRITER_PAUSE_BEFORE_NEW
  }

  typeTimeout = setTimeout(typeWriter, typeSpeed)
}

// ── 跑马灯图片分组 ──
const shuffleArray = (array: string[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j]!, newArray[i]!]
  }
  return newArray
}

const splitGroups = (selected: string[]) => {
  const half = Math.ceil(selected.length / 2)
  return { first: selected.slice(0, half), second: selected.slice(half) }
}

const initMarqueeGroups = () =>
  splitGroups(marqueeImages.slice(0, MARQUEE.DESKTOP_IMAGE_COUNT))

const marqueeImageGroups = ref(initMarqueeGroups())

const generateMarqueeGroups = () => {
  const total = isMobile.value ? MARQUEE.MOBILE_IMAGE_COUNT : MARQUEE.DESKTOP_IMAGE_COUNT
  marqueeImageGroups.value = splitGroups(shuffleArray(marqueeImages).slice(0, total))
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img) img.style.display = 'none'
}

// ── 响应式设备检测 ──
const checkDevice = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < LAYOUT.MOBILE_BREAKPOINT
  }
}

let resizeTicking = false
const throttledCheckDevice = () => {
  if (resizeTicking) return
  resizeTicking = true
  requestAnimationFrame(() => {
    const prev = isMobile.value
    checkDevice()
    if (isMobile.value !== prev) generateMarqueeGroups()
    resizeTicking = false
  })
}

onMounted(() => {
  if (typeTimeout) clearTimeout(typeTimeout)
  checkDevice()
  generateMarqueeGroups()
  window.addEventListener('resize', throttledCheckDevice)
  typeWriter()
})

onUnmounted(() => {
  window.removeEventListener('resize', throttledCheckDevice)
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>

<style scoped>
/* ── AI 主题 CSS 变量 ── */
.ai-bg {
  --ai-primary: rgba(99, 102, 241, 0.15);
  --ai-secondary: rgba(139, 92, 246, 0.12);
  --ai-accent: rgba(6, 182, 212, 0.1);
}

/* ── 六边形网格 ── */
.hex-grid { opacity: 0.8; }

/* ── 极光渐变流动（用径向渐变模拟模糊，零 filter 开销） ── */
.ai-aurora {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
  contain: layout style paint;
}
.ai-aurora-1 {
  width: 900px; height: 600px;
  top: -18%; left: -12%;
  background: radial-gradient(ellipse 60% 50%, rgba(99,102,241,.1) 0%, rgba(139,92,246,.04) 40%, transparent 70%);
  animation: aurora-drift-1 20s ease-in-out infinite;
}
.ai-aurora-2 {
  width: 700px; height: 500px;
  bottom: -12%; right: -8%;
  background: radial-gradient(ellipse 55% 45%, rgba(6,182,212,.09) 0%, rgba(59,130,246,.04) 40%, transparent 70%);
  animation: aurora-drift-2 25s ease-in-out infinite;
}

@keyframes aurora-drift-1 {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(60px, 40px, 0); }
}
@keyframes aurora-drift-2 {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-50px, -40px, 0); }
}

/* ── 电路节点脉冲（仅 opacity，走合成层） ── */
.ai-dot-pulse {
  animation: dot-pulse 3s ease-in-out infinite;
}
@keyframes dot-pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.9; }
}

/* ── 扩散波纹环（仅 1 个，translate3d 强制 GPU） ── */
.ai-ripple {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(99,102,241,.07);
  will-change: transform, opacity;
  contain: layout style;
}
.ai-ripple-1 {
  width: 300px; height: 300px;
  top: 30%; left: 20%;
  animation: ripple-expand 8s ease-out infinite;
}

@keyframes ripple-expand {
  0% { transform: scale(0.5); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

/* ── 打字光标闪烁 ── */
.animate-blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── 移动端简化动画 ── */
@media (max-width: 767px) {
  .ai-aurora { animation: none; }
  .ai-ripple { display: none; }
  .hex-grid { opacity: 0.4; }
  .circuit-lines { display: none; }
  .ai-dot-pulse { animation: none; opacity: 0.4; }
}

/* ── 无障碍：尊重用户减少动画偏好 ── */
@media (prefers-reduced-motion: reduce) {
  .ai-aurora,
  .ai-dot-pulse,
  .ai-ripple,
  .animate-blink {
    animation: none !important;
    opacity: 0.5;
  }
}
</style>
