<template>
  <section
    class="relative min-h-[80dvh] flex items-center overflow-hidden bg-white text-black pt-24 pb-16 md:py-24"
  >
    <!-- 主题背景：晨昏天幕 —— 顶部落霞渐变 + 光格网格 + 星点 -->
    <div class="hero-bg absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <!-- 画布：纯白 -->
      <div class="hero-base absolute inset-0" />

      <!-- 落霞天幕：紫 / 橙 / 青三团渐变自顶部洒下，向下淡出 -->
      <div class="sky absolute inset-0" />

      <!-- agent.svg 点阵波纹插画：替换网格，贴顶部靠头部展示 -->
      <div class="agent-art" />

      <!-- 星点闪烁 -->
      <span class="sky-star" style="left: 18%; top: 12%" />
      <span class="sky-star" style="left: 42%; top: 20%; animation-delay: 1.3s" />
      <span class="sky-star" style="left: 64%; top: 9%; animation-delay: 0.6s" />
      <span class="sky-star" style="left: 84%; top: 24%; animation-delay: 1.9s" />
      <span class="sky-star" style="left: 52%; top: 34%; animation-delay: 2.4s" />
      <span class="sky-star" style="left: 26%; top: 66%; animation-delay: 1.7s" />

      <!-- 底部淡出到白：软化与下一节白色背景的切换 -->
      <div class="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-white to-transparent" />
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
            <CtaPair
              ui="flex-row items-center lg:justify-start"
              :class="props.ui.links"
              :primary="{ href: 'https://www.buidai.com', label: '开始使用', icon: 'i-heroicons-rocket-launch' }"
              :secondary="{ href: 'https://www.buidai.com', label: '立即创造', icon: 'i-heroicons-sparkles' }"
            />

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
                loading="eager"
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
                loading="eager"
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
import { marketApps as apps } from '~/data/products'
import { LAYOUT, MARQUEE } from '~/utils/ui'
import { handleImageError } from '~/utils/image'

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
const sentences = [
  '它能够助您快速开发AI应用，缩短80%项目交付周期',
  '它拥有开箱即用的丰富AI应用',
  '它正在努力成为AI应用落地的首选方案',
  '它能够助您快速落地MVP，验证AI应用商业价值'
]
const { text: typeWriterText } = useTypewriter(sentences)

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

/**
 * 跑马灯图片分组初始化（固定顺序）
 *
 * 服务端与客户端必须使用同一份计算结果，否则 hydration 时DOM 结构不一致，
 * 触发「Hydration completed but contains mismatches」并导致图片重复请求。
 */
const initMarqueeGroups = () =>
  splitGroups(marqueeImages.slice(0, MARQUEE.DESKTOP_IMAGE_COUNT))

const marqueeImageGroups = ref(initMarqueeGroups())

/**
 * 按当前设备重新生成跑马灯分组（随机顺序）
 *
 * 仅在移动端/桌面端断点切换时调用 —— 避免与 SSR 首屏顺序不一致。
 */
const generateMarqueeGroups = () => {
  const total = isMobile.value ? MARQUEE.MOBILE_IMAGE_COUNT : MARQUEE.DESKTOP_IMAGE_COUNT
  marqueeImageGroups.value = splitGroups(shuffleArray(marqueeImages).slice(0, total))
}

// ── 响应式设备检测 ──
const checkDevice = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < LAYOUT.MOBILE_BREAKPOINT
  }
}

let resizeTicking = false
const throttledCheckDevice = () => {
  if (resizeTicking) {return}
  resizeTicking = true
  requestAnimationFrame(() => {
    const prev = isMobile.value
    checkDevice()
    if (isMobile.value !== prev) {generateMarqueeGroups()}
    resizeTicking = false
  })
}

onMounted(() => {
  // 仅同步设备状态，不重排跑马灯：重排会与 SSR 首屏顺序不一致，
  // 导致 hydration mismatch 与图片重复请求。分组仅在断点切换时更新。
  checkDevice()
  window.addEventListener('resize', throttledCheckDevice)
  // 水合完成后在客户端空闲时机随机化首屏顺序（on-nuxt-ready.md 官方推荐场景：
  // 「不阻塞首屏渲染、客户端才执行的代码」），恢复随机跑马灯的产品意图；
  // 图片集合不变仅重排，无额外网络请求
  onNuxtReady(() => {
    generateMarqueeGroups()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', throttledCheckDevice)
})
</script>

<style scoped>
/* ── 晨昏天幕主题：亮彩渐变落在纯白画布上，黑字保持高对比 ── */

/* ── 画布 ── */
.hero-base {
  background: #ffffff;
}

/* ── 落霞天幕：紫 / 蓝紫 / 蓝三团亮彩大面积铺满画面，仅在近底部淡出 ── */
.sky {
  background:
    radial-gradient(
      ellipse 78% 125% at 12% -8%,
      oklch(72% 0.16 292 / 0.62) 0%,
      transparent 78%
    ),
    radial-gradient(
      ellipse 68% 118% at 88% -4%,
      oklch(70% 0.15 255 / 0.55) 0%,
      transparent 78%
    ),
    radial-gradient(
      ellipse 64% 108% at 50% -12%,
      oklch(74% 0.13 268 / 0.52) 0%,
      transparent 76%
    );
}

/* ── agent.svg 点阵波纹：铺满宽度贴顶部靠头部展示，multiply 让白底消隐、深点融入渐变 ──
   1400px 原始尺寸平铺（repeat-x）：点阵为原生密度；裁掉插画顶部留白，贴紧头部 ── */
.agent-art {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100vw;
  height: 278px;
  background: url("/agent.svg") center -88px / 1400px auto repeat-x;
  mix-blend-mode: multiply;
  opacity: 0.9;
}

/* ── 星点：白点带光晕，闪烁赋予天幕动感 ── */
.sky-star {
  position: absolute;
  width: 4px;
  height: 4px;
  margin: -2px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 7px 2px rgb(255 255 255 / 0.65);
  opacity: 0.4;
  animation: sky-twinkle 5s ease-in-out infinite;
}
@keyframes sky-twinkle {
  0%, 100% { opacity: 0.25; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.15); }
}

/* ── 打字光标闪烁 ── */
.animate-blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── 移动端：星点缩小（agent.svg 点阵铺满宽度规则已统一，无需覆盖） ── */
@media (max-width: 767px) {
  .sky-star { width: 3px; height: 3px; }
}

/* ── 无障碍：尊重用户减少动画偏好 ── */
@media (prefers-reduced-motion: reduce) {
  .sky-star,
  .animate-blink {
    animation: none !important;
  }
  .sky-star { opacity: 0.6; }
  .animate-blink { opacity: 1; }
}
</style>
