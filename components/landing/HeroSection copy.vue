<template>
  <section class="relative min-h-[80dvh] flex items-center overflow-hidden bg-white text-black pt-24 pb-16 md:py-24">
    <div class="container mx-auto container-padding relative z-10 w-full" :class="props.ui.container">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="relative space-y-6 md:space-y-8 text-center lg:text-left" :class="props.ui.content">
          <!-- 装饰背景 -->
          <div class="absolute inset-0 -z-10 overflow-visible pointer-events-none select-none">
            <!-- 1. 顶部聚焦光束 (增强可见度) -->
            <div class="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-1/4 -translate-y-1/3 w-[600px] h-[600px] bg-ui-primary/30 rounded-full blur-[80px] mix-blend-multiply"></div>

            <!-- 2. 科技网格背景 -->
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <!-- 3. 抽象几何点缀 (增强可见度) -->
            <div class="absolute top-20 right-10 w-32 h-32 bg-linear-to-br from-blue-400/50 to-transparent rounded-full blur-2xl animate-pulse"></div>
            <div class="absolute bottom-40 left-10 w-24 h-24 bg-linear-to-tr from-purple-400/40 to-transparent rounded-full blur-xl animate-float animation-delay-2000"></div>
          </div>

          <div class="flex justify-center lg:justify-start">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-black/5 border border-black/10">
              <span class="px-1.5 py-0.5 rounded bg-ui-primary text-[11px] md:text-xs font-bold text-white tracking-wider">NEW</span>
              <span class="text-xs md:text-sm text-gray-600">BuidAI 应用市场上线</span>
            </div>
          </div>

          <slot name="title">
            <div class="space-y-3 md:space-y-5" :class="props.ui.title">
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
                <span class="text-ui-primary">企业级开源智能体</span> 搭建平台
              </h1>
              <p class="text-sm sm:text-base lg:text-lg text-black/60 leading-relaxed">
                面向 <span class="text-ui-primary font-semibold">AI开发者</span> · <span class="text-ui-primary font-semibold">AI创业者</span> · <span class="text-ui-primary font-semibold">先进组织</span>
              </p>
            </div>
          </slot>

          <slot name="description">
            <p class="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed min-h-[1.75em]" :class="props.ui.description">
              {{ typeWriterText }}<span class="animate-blink ml-1 border-r-2 border-ui-primary h-[1.2em] align-middle inline-block"></span>
            </p>
          </slot>

          <slot name="links" :class="props.ui.links">
            <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 md:pt-4">
              <UButton
                size="xl"
                color="primary"
                label="开始使用"
                class="w-full sm:w-auto rounded-full px-8 py-3.5 text-lg justify-center"
              />
              <UButton
                size="xl"
                variant="solid"
                color="neutral"
                label="查看 Demo"
                class="w-full sm:w-auto rounded-full px-8 py-3.5 text-lg justify-center"
              />
            </div>

            <div class="pt-6 md:pt-8 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto lg:mx-0 space-y-4">
              <!-- 第一行 4个 -->
              <div class="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-cpu-chip" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">AI原生内核</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-building-office-2" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">组织管理</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-code-bracket-square" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">二次开发</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-paint-brush" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">自定义LOGO</span>
                </span>
              </div>

              <!-- 第二行 3个 -->
              <div class="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1.5">
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">简单易用</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-puzzle-piece" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">插件扩展无限可能</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <UIcon name="i-heroicons-check-badge" class="w-5 h-5 text-ui-primary shrink-0" />
                  <span class="whitespace-nowrap">开源所有代码</span>
                </span>
              </div>
            </div>
          </slot>
        </div>

          <div class="relative w-full z-10 mt-8 lg:mt-0" :class="props.ui.imageSection">
            <div class="absolute inset-0 -z-10 pointer-events-none">
              <div class="mx-auto w-[90%] md:w-[85%] h-[60%] rounded-[40px] bg-linear-to-br from-black/5 via-black/2 to-black/5 blur-2xl"></div>
            </div>

            <!-- Desktop: Vertical Marquee -->
            <div class="hidden lg:grid grid-cols-2 gap-6 w-[140%] -ml-[20%]">
              <UMarquee
                orientation="vertical"
                :overlay="false"
                :ui="{
                  root: '[--duration:34s] relative h-[720px]'
                }"
              >
                <img
                  v-for="(img, index) in marqueeImageGroups.first"
                  :key="index"
                  :src="img"
                  width="460"
                  height="258"
                  :alt="`BuidAI 插件预览 ${index + 1}`"
                  loading="lazy"
                  decoding="async"
                  class="aspect-video border border-default rounded-[12px] bg-white shadow-sm"
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
                  :key="index"
                  :src="img"
                  width="460"
                  height="258"
                  :alt="`BuidAI 插件预览 ${index + 1}`"
                  loading="lazy"
                  decoding="async"
                  class="aspect-video border border-default rounded-[12px] bg-white shadow-sm"
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
                  v-for="(img, index) in marqueeImageGroups.first"
                  :key="index"
                  :src="img"
                  class="h-[140px] w-auto aspect-video border border-default rounded-[12px] bg-white shadow-sm mx-2"
                  alt="BuidAI 插件预览"
                  loading="lazy"
                  decoding="async"
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
                  v-for="(img, index) in marqueeImageGroups.second"
                  :key="index"
                  :src="img"
                  class="h-[140px] w-auto aspect-video border border-default rounded-[12px] bg-white shadow-sm mx-2"
                  alt="BuidAI 插件预览"
                  loading="lazy"
                  decoding="async"
                />
              </UMarquee>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
// 导入应用数据：从 utils/scene.ts 中获取应用列表，用于提取图片生成跑马灯背景
import { apps } from '~/utils/scene'

/**
 * Hero Section Logic
 * 包含响应式状态检测，用于优化移动端体验（如禁用复杂的悬停效果）
 */

// Props定义，支持UI自定义配置
interface HeroSectionProps {
  /**
   * 组件方向
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * UI配置选项
   */
  ui?: {
    /**
     * 容器样式
     */
    container?: string
    /**
     * 标题样式
     */
    title?: string
    /**
     * 描述样式
     */
    description?: string
    /**
     * 链接/按钮样式
     */
    links?: string
    /**
     * 左侧内容样式
     */
    content?: string
    /**
     * 右侧图片展示区样式
     */
    imageSection?: string
  }
}

// 默认属性值
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

// 响应式状态
const isMobile = ref(false)

// 打字机效果逻辑
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
let typeTimeout: NodeJS.Timeout | null = null

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

  let typeSpeed = isDeleting ? 30 : 100

  if (!isDeleting && charIndex === currentSentence.length) {
    typeSpeed = 2000 // 句子打完后暂停2秒
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    sentenceIndex = (sentenceIndex + 1) % sentences.length
    typeSpeed = 500 // 开始新句子前暂停0.5秒
  }

  typeTimeout = setTimeout(typeWriter, typeSpeed)
}

// 插件图片配置 - 直接从 pluginData.ts 获取，实现自动同步
const allPluginImages = computed(() => apps.map(app => app.image))

/**
 * 随机打乱数组顺序的函数
 * @param array 需要打乱的数组
 * @returns 打乱后的新数组
 */
const shuffleArray = (array: string[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const ai = newArray[i]!
    const aj = newArray[j]!
    newArray[i] = aj
    newArray[j] = ai
  }
  return newArray
}

/**
 * 生成两组跑马灯展示图片。
 *
 * @returns 包含 `first` 与 `second` 两组图片数组的对象。移动端总计 10 张，桌面端总计 16 张，均匀拆分为两列并随机打乱。
 */
const marqueeImageGroups = computed(() => {
  const base = shuffleArray(allPluginImages.value)
  const total = isMobile.value ? 10 : 16
  const selected = base.slice(0, total)
  const half = Math.ceil(selected.length / 2)
  return {
    first: selected.slice(0, half),
    second: selected.slice(half)
  }
})

/**
 * 检测设备类型并更新移动端状态。
 *
 * @returns 无返回值。根据窗口宽度设置 `isMobile` 布尔值，宽度小于 768px 视为移动端。
 */
const checkDevice = () => {
  if (typeof window !== 'undefined') {
    const prev = isMobile.value
    isMobile.value = window.innerWidth < 768
    if (prev !== isMobile.value) {
      /* 依赖 isMobile 的计算属性会自动刷新 */
    }
  }
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
  typeWriter() // 启动打字机
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
