<template>
  <section class="overflow-hidden bg-white">
    <div class="grid-border-container">
      <div class="grid-border-row" />
      <!-- 标题区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />

        <!-- 标题区域内容 -->
        <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 relative">
          <!-- Falling Text 动画组件 -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[520px] h-[240px] md:w-[720px] md:h-[320px] pointer-events-auto">
            <LazyFallingText
              text="智言万象 AI 企业级 开源 Agent Workflow 知识库 RAG 检索"
              :highlight-words="['AI', 'Agent','企业级','开源','Workflow', 'RAG']"
              trigger="scroll"
              background-color="transparent"
              :wireframes="false"
              :gravity="0.2"
              font-size="1.5rem"
              :mouse-constraint-stiffness="0.9"
            />
          </div>

          <div class="relative z-10 mb-6 sm:mb-8">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Quick Start
              </span>
            </div>
            <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
              五步上手，轻松开启 AI 业务
            </h2>
          </div>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="grid-border-divider" />
      <!-- 内容区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />
        <!-- 内容区域内容 -->
        <div class="grid-border-content px-0">
          <div class="grid grid-cols-1 overflow-hidden rounded-md lg:grid-cols-2">
            <div
              class="relative order-1 w-full h-full overflow-hidden lg:order-2"
              @mouseenter="pauseAutoplay"
              @mouseleave="resumeAutoplay"
            >
              <div class="relative w-full h-full min-h-[320px] sm:min-h-[400px] overflow-hidden bg-neutral-900">
                <div class="absolute inset-0 z-0">
                  <img
                    src="/images/FeatureSteps.webp"
                    alt=""
                    class="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <Transition name="slide-in" mode="out-in">
                  <img
                    :key="activeCard"
                    :src="currentCard.image"
                    :alt="currentCard.title"
                    loading="lazy"
                    decoding="async"
                    class="absolute inset-0 h-full w-full object-contain z-10 translate-x-4 sm:translate-x-6"
                  />
                </Transition>

                <div class="absolute inset-x-0 bottom-0 z-30 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5">
                  <div class="flex items-end justify-between gap-4">
                    <div class="min-w-0 flex-1">
                      <div class="flex items-center gap-2 mb-1.5">
                        <span class="flex items-center justify-center w-6 h-6 rounded bg-white/20 text-[10px] font-bold text-white">
                          {{ cardIndex }}
                        </span>
                        <span class="text-[10px] font-medium text-white/60 uppercase tracking-wider">
                          {{ currentCard.tag }}
                        </span>
                      </div>
                      <h3 class="text-sm font-semibold text-white leading-tight sm:text-base">
                        {{ currentCard.title }}
                      </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                      <button
                        v-for="(_, index) in featureCards"
                        :key="index"
                        type="button"
                        :class="[
                          'h-1.5 rounded-full transition-all duration-300',
                          activeCard === index ? 'w-5 bg-indigo-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                        ]"
                        :aria-label="`切换到第 ${index + 1} 个功能`"
                        :aria-current="activeCard === index"
                        @click="setActiveCard(index)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 内容区域内容 -->
            <div class="order-2 flex flex-col rounded-md bg-white lg:order-1" role="tablist" aria-label="功能步骤列表">
              <button
                v-for="(item, index) in featureCards"
                :id="`feature-tab-${index}`"
                :key="index"
                type="button"
                role="tab"
                :aria-selected="activeCard === index"
                :aria-controls="`feature-panel-${index}`"
                :class="[
                  'group relative flex w-full cursor-pointer flex-col justify-center gap-2 border-b border-neutral-100 pl-0 pr-4 py-4 text-left transition-all duration-200 ease-out last:border-b-0 sm:pr-5 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset',
                  activeCard === index ? 'bg-neutral-50/50' : 'hover:bg-neutral-50/30'
                ]"
                tabindex="0"
                @click="setActiveCard(index)"
                @keydown="handleKeydown($event, index)"
              >
                <div class="absolute left-0 top-4 bottom-4 w-1 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    :class="[
                      'w-full rounded-full transition-all duration-500 ease-out',
                      activeCard === index
                        ? 'h-full bg-linear-to-b from-indigo-400 to-indigo-600'
                        : 'h-0 bg-neutral-300'
                    ]"
                  />
                </div>
                <div class="relative flex flex-col pl-3 sm:pl-4">
                  <div class="flex items-center gap-3">
                    <span
                      :class="[
                        'flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold transition-all duration-200 shrink-0',
                        activeCard === index
                          ? 'bg-indigo-500 text-white'
                          : 'bg-neutral-100 text-neutral-500'
                      ]"
                    >
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <div class="flex flex-col">
                      <h3
                        :class="[
                          'text-sm font-semibold leading-tight transition-colors duration-200',
                          activeCard === index ? 'text-indigo-600' : 'text-neutral-800'
                        ]"
                      >
                        {{ item.title }}
                      </h3>
                      <span
                        :class="[
                          'text-[10px] font-medium transition-colors duration-200 mt-0.5',
                          activeCard === index ? 'text-indigo-400' : 'text-neutral-400'
                        ]"
                      >
                        {{ item.tag }}
                      </span>
                    </div>
                  </div>
                  <p
                    :class="[
                      'mt-2 text-xs leading-relaxed text-left transition-all duration-200 max-h-20 opacity-100',
                      activeCard === index ? 'text-neutral-600' : 'text-neutral-400'
                    ]"
                  >
                    {{ item.desc }}
                  </p>
                </div>
                <!-- 内容区域内容 -->
                <div class="absolute bottom-0 left-0 right-0">
                  <div class="h-px w-full bg-neutral-100">
                    <div v-if="activeCard === index" :key="`progress-${activeCard}`" class="feature-progress h-full bg-neutral-400" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="grid-border-divider" />
      <!-- 内容区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />
        <!-- 内容区域内容 -->
        <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
          <span class="w-8 h-px sm:w-px sm:h-6 bg-neutral-200" />
          <span class="text-base sm:text-lg text-neutral-600 font-medium">一站式 AI 解决方案，助力企业智能化转型</span>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="grid-border-divider" />
      <!-- 标题区域 -->
      <div class="grid-border-row" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

/**
 * 自动轮播间隔时间（毫秒）
 */
const AUTOPLAY_INTERVAL = 4500

/**
 * 恢复自动轮播延迟时间（毫秒）
 */
const RESUME_DELAY = 5000

/**
 * 功能卡片数据接口
 * @interface FeatureCard
 */
interface FeatureCard {
  /** 分类名称 */
  category: string
  /** 标签文本 */
  tag: string
  /** 标题 */
  title: string
  /** 描述 */
  desc: string
  /** 图片地址 */
  image: string
}

/**
 * 功能卡片数据列表
 * 热门功能展示
 */
const featureCards: FeatureCard[] = [
  {
    category: 'AI绘画',
    tag: '文生图 · 图生图',
    title: 'Nanobanana 香蕉绘画',
    desc: '基于 Gemini 3 Pro Image Preview 模型的一站式 AI 图像创作平台，支持高质量文生图、图生图及多图融合，预置模板开箱即用，生成速度极快。',
    image: '/product/FeatureSteps-1.png'
  },
  {
    category: 'AI视频',
    tag: '文生视频 · 图生视频',
    title: '即梦AI 视频生成',
    desc: '输入文字描述或上传参考图，即可快速生成风格多样的短视频。支持多种视频比例和分辨率（720P、1080P），让创意瞬间变为现实。',
    image: '/product/FeatureSteps-2.png'
  },
  {
    category: 'AI数字人',
    tag: '形象克隆 · 声音克隆',
    title: 'AI数字人系统',
    desc: '一键克隆形象与声音，支持 4K 超清画质、5 秒声音克隆、多语种合成。上传视频即可克隆专属形象，1:1 还原真人表情与动作。',
    image: '/product/FeatureSteps-3.jpg'
  },
  {
    category: 'AI创作',
    tag: '短剧 · 小说 · 剧本',
    title: 'AI短剧小说创作',
    desc: '专为自媒体创作者、编剧、网络作家打造，支持创建无限量剧本、角色设定、章节可视化拖拽、AI 扩写润色改写续写，让创作更高效。',
    image: '/product/FeatureSteps-4.png'
  },
  {
    category: 'AI工具',
    tag: '音乐 · PPT · 简历',
    title: '多元化 AI 创作工具',
    desc: '涵盖 AI 音乐生成、智能 PPT 制作、简历生成分析等多款工具。支持文生音乐、一键生成演示文稿、智能简历优化，满足多样化创作需求。',
    image: '/product/FeatureSteps-5.png'
  }
]

// 当前激活的功能卡片索引
const activeCard = ref(0)

// 当前显示的功能卡片
const currentCard = computed(() => featureCards[activeCard.value]!)

// 当前卡片序号（格式化为两位数字）
const cardIndex = computed(() => String(activeCard.value + 1).padStart(2, '0'))

// 自动轮播定时器
let autoplayTimer: ReturnType<typeof setInterval> | null = null

// 恢复自动轮播定时器
let autoplayResumeTimer: ReturnType<typeof setTimeout> | null = null

/**
 * 停止自动轮播
 */
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

/**
 * 开始自动轮播
 */
const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    activeCard.value = (activeCard.value + 1) % featureCards.length
  }, AUTOPLAY_INTERVAL)
}

/**
 * 暂停自动轮播（鼠标进入时）
 */
const pauseAutoplay = () => {
  stopAutoplay()
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
    autoplayResumeTimer = null
  }
}

/**
 * 恢复自动轮播（鼠标离开时）
 */
const resumeAutoplay = () => {
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }
  autoplayResumeTimer = setTimeout(startAutoplay, RESUME_DELAY)
}

/**
 * 设置当前激活的功能卡片
 * @param index - 目标卡片索引
 */
const setActiveCard = (index: number) => {
  activeCard.value = index
  resumeAutoplay()
}

/**
 * 处理键盘导航事件
 * @param event - 键盘事件对象
 * @param currentIndex - 当前按钮索引
 */
const handleKeydown = (event: KeyboardEvent, currentIndex: number) => {
  const actions: Record<string, () => void> = {
    ArrowDown: () => currentIndex < featureCards.length - 1 && setActiveCard(currentIndex + 1),
    ArrowUp: () => currentIndex > 0 && setActiveCard(currentIndex - 1),
    Home: () => setActiveCard(0),
    End: () => setActiveCard(featureCards.length - 1)
  }

  const action = actions[event.key]
  if (action) {
    event.preventDefault()
    action()
    nextTick(() => document.getElementById(`feature-tab-${activeCard.value}`)?.focus())
  }
}

// 组件挂载时启动自动轮播
onMounted(startAutoplay)

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoplay()
  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }
})
</script>

<style scoped>
/**
 * 图片切换动画
 */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease;
}

.slide-in-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-in-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/**
 * 进度条动画
 */
.feature-progress {
  animation: progress 4.5s linear;
}

@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}
</style>
