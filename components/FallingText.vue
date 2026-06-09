<template>
  <div
    ref="containerRef"
    class="falling-text-container relative z-1 w-full h-full cursor-pointer text-center overflow-hidden"
    :class="{ 'pointer-events-none': effectStarted }"
    @click="handleTrigger"
    @mouseenter="handleTrigger"
  >
    <div
      ref="textRef"
      class="falling-text-content inline-block text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem]"
      :style="{
        lineHeight: 1.4,
      }"
    />
    <div ref="canvasContainerRef" class="falling-text-canvas absolute top-0 left-0 z-0" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import type MatterType from 'matter-js'

// Matter.js 动态导入
let Matter: typeof import('matter-js') | null = null

/**
 * 单词颜色配置接口
 * @property word - 单词文本
 * @property color - 颜色类名或自定义颜色
 */
interface WordColorConfig {
  word: string
  color: string
}

/**
 * 响应式字体大小配置接口
 * @property mobile - 移动端字体大小
 * @property tablet - 平板端字体大小
 * @property desktop - 桌面端字体大小
 */
interface ResponsiveFontSize {
  mobile?: string
  tablet?: string
  desktop?: string
}

/**
 * FallingText 组件 Props 接口定义
 * @property text - 要显示的文本内容
 * @property highlightWords - 需要高亮显示的单词列表
 * @property wordColors - 为特定单词指定颜色的配置数组
 * @property trigger - 触发方式：'auto' | 'scroll' | 'click' | 'hover'
 * @property backgroundColor - 画布背景颜色
 * @property wireframes - 是否显示线框模式
 * @property gravity - 重力系数
 * @property mouseConstraintStiffness - 鼠标拖拽约束的刚度
 * @property fontSize - 字体大小（字符串或响应式配置对象）
 */
interface FallingTextProps {
  text?: string
  highlightWords?: string[]
  wordColors?: WordColorConfig[]
  trigger?: 'auto' | 'scroll' | 'click' | 'hover'
  backgroundColor?: string
  wireframes?: boolean
  gravity?: number
  mouseConstraintStiffness?: number
  fontSize?: string | ResponsiveFontSize
}

// 定义组件 Props 默认值
const props = withDefaults(defineProps<FallingTextProps>(), {
  text: '',
  highlightWords: () => [],
  wordColors: () => [],
  trigger: 'auto',
  backgroundColor: 'transparent',
  wireframes: false,
  gravity: 0.1,
  mouseConstraintStiffness: 0.6,
  fontSize: '1rem',
})

// 组件内部状态
const containerRef = ref<HTMLDivElement | null>(null)
const textRef = ref<HTMLDivElement | null>(null)
const canvasContainerRef = ref<HTMLDivElement | null>(null)
const effectStarted = ref(false)

// Matter.js 相关引用
let engine: MatterType.Engine | null = null
let render: MatterType.Render | null = null
let runner: MatterType.Runner | null = null
let wordBodies: { elem: Element; body: MatterType.Body }[] = []
let animationFrameId: number | null = null
let observer: IntersectionObserver | null = null

/**
 * 初始化文本内容，将文本分割为单词并添加高亮样式
 */
const initText = () => {
  if (!textRef.value || !props.text) {
    return
  }

  const words = props.text.split(' ')
  const newHTML = words
    .map((word) => {
      // 优先检查 wordColors 配置
      const colorConfig = props.wordColors?.find((wc) => word.includes(wc.word))
      if (colorConfig) {
        return `<span
          class="falling-word inline-block mx-[3px] select-none font-black ${colorConfig.color}"
        >
          ${word}
        </span>`
      }
      // 其次检查 highlightWords
      const isHighlighted = props.highlightWords.some((hw) => word.includes(hw))
      return `<span
        class="falling-word inline-block mx-[3px] select-none font-black ${isHighlighted ? 'text-indigo-700' : 'text-neutral-900'}"
      >
        ${word}
      </span>`
    })
    .join(' ')

  textRef.value.innerHTML = newHTML
}

/**
 * 初始化滚动触发观察器
 */
const initScrollObserver = () => {
  if (props.trigger !== 'scroll' || !containerRef.value) {
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        startEffect()
        observer?.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
}

/**
 * 处理触发事件（点击或悬停）
 */
const handleTrigger = () => {
  if (!effectStarted.value && (props.trigger === 'click' || props.trigger === 'hover')) {
    startEffect()
  }
}

/**
 * 启动物理动画效果
 */
const startEffect = async () => {
  if (effectStarted.value) {
    return
  }

  // 动态加载 Matter.js
  if (!Matter) {
    try {
      const module = await import('matter-js')
      Matter = module.default || module
    } catch {
      return
    }
  }

  effectStarted.value = true

  nextTick(() => {
    initPhysics()
  })
}

/**
 * 初始化 Matter.js 物理引擎
 */
const initPhysics = () => {
  if (!Matter || !containerRef.value || !canvasContainerRef.value || !textRef.value) {
    return
  }
  const MatterLib = Matter

  const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = MatterLib

  const containerRect = containerRef.value.getBoundingClientRect()
  const width = containerRect.width
  const height = containerRect.height

  if (width <= 0 || height <= 0) {
    return
  }

  // 创建物理引擎
  engine = Engine.create()
  if (engine && engine.world) {
    engine.world.gravity.y = props.gravity
  }

  // 创建渲染器
  render = Render.create({
    element: canvasContainerRef.value,
    engine,
    options: {
      width,
      height,
      background: props.backgroundColor,
      wireframes: props.wireframes,
    },
  })

  // 创建边界（地板、墙壁、天花板）
  const boundaryOptions = {
    isStatic: true,
    render: { fillStyle: 'transparent' },
  }
  const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions)
  const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions)
  const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions)
  const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions)

  // 为每个单词创建物理体
  const wordSpans = textRef.value.querySelectorAll('.falling-word')
  wordBodies = Array.from(wordSpans).map((elem) => {
    const rect = elem.getBoundingClientRect()
    const x = rect.left - containerRect.left + rect.width / 2
    const y = rect.top - containerRect.top + rect.height / 2

    const body = Bodies.rectangle(x, y, rect.width, rect.height, {
      render: { fillStyle: 'transparent' },
      restitution: 0.8,
      frictionAir: 0.01,
      friction: 0.2,
    })

    // 设置初始速度和角速度
    MatterLib.Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 5,
      y: 0,
    })
    MatterLib.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05)

    return { elem, body }
  })

  // 将单词元素设置为绝对定位
  wordBodies.forEach(({ elem, body }) => {
    const htmlElem = elem as HTMLElement
    htmlElem.style.position = 'absolute'
    htmlElem.style.left = `${body.position.x}px`
    htmlElem.style.top = `${body.position.y}px`
    htmlElem.style.transform = 'translate(-50%, -50%)'
  })

  // 创建鼠标约束
  const mouse = Mouse.create(containerRef.value)
  if (!engine) {
    return
  }
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: props.mouseConstraintStiffness,
      render: { visible: false },
    },
  })
  if (render) {
    render.mouse = mouse
  }

  // 将所有物体添加到世界
  World.add(engine.world, [
    floor,
    leftWall,
    rightWall,
    ceiling,
    mouseConstraint,
    ...wordBodies.map((wb) => wb.body),
  ])

  // 运行引擎和渲染器
  runner = Runner.create()
  if (runner && engine) {
    Runner.run(runner, engine)
  }
  if (render) {
    Render.run(render)
  }

  // 更新循环：同步 DOM 元素位置与物理体位置
  const updateLoop = () => {
    if (!engine || !engine.world) {
      return
    }

    wordBodies.forEach(({ body, elem }) => {
      const { x, y } = body.position
      const htmlElem = elem as HTMLElement
      htmlElem.style.left = `${x}px`
      htmlElem.style.top = `${y}px`
      htmlElem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`
    })

    MatterLib.Engine.update(engine)
    animationFrameId = requestAnimationFrame(updateLoop)
  }
  updateLoop()
}

/**
 * 清理物理引擎资源
 */
const cleanup = () => {
  const MatterLib = Matter

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }

  if (render && MatterLib) {
    MatterLib.Render.stop(render)
    if (render.canvas && canvasContainerRef.value) {
      canvasContainerRef.value.removeChild(render.canvas)
    }
    render = null
  }

  if (runner && MatterLib) {
    MatterLib.Runner.stop(runner)
    runner = null
  }

  if (engine && MatterLib) {
    MatterLib.World.clear(engine.world, false)
    MatterLib.Engine.clear(engine)
    engine = null
  }

  if (observer) {
    observer.disconnect()
    observer = null
  }

  wordBodies = []
}

// 生命周期钩子
onMounted(() => {
  initText()

  if (props.trigger === 'auto') {
    startEffect()
  } else if (props.trigger === 'scroll') {
    initScrollObserver()
  }
})

onUnmounted(() => {
  cleanup()
})

// 监听文本变化
watch(() => props.text, () => {
  initText()
})
</script>

<style scoped>
.falling-text-container {
  touch-action: none;
}

.falling-text-canvas canvas {
  display: block;
}
</style>
