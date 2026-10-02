import { ANIMATION } from '~/utils/ui'

interface TypewriterOptions {
  typingSpeed: number
  deletingSpeed: number
  pauseAfterComplete: number
  pauseBeforeNew: number
  startDelay: number
}

/**
 * 循环打字机效果：逐字输入 → 停顿 → 逐字删除 → 换下一句
 *
 * 组件卸载时自动清理定时器，无需手动处理。
 * 默认速度取自 utils/ui.ts 的 ANIMATION 常量。
 */
export function useTypewriter(texts: string[], options: Partial<TypewriterOptions> = {}) {
  const {
    typingSpeed = ANIMATION.TYPEWRITER_TYPING_SPEED,
    deletingSpeed = ANIMATION.TYPEWRITER_DELETING_SPEED,
    pauseAfterComplete = ANIMATION.TYPEWRITER_PAUSE_AFTER_COMPLETE,
    pauseBeforeNew = ANIMATION.TYPEWRITER_PAUSE_BEFORE_NEW,
    startDelay = 0
  } = options

  const text = ref('')
  let index = 0
  let charIndex = 0
  let isDeleting = false
  let timer: ReturnType<typeof setTimeout> | null = null

  const tick = () => {
    const current = texts[index]
    if (!current) {return}

    if (isDeleting) {
      charIndex--
      text.value = current.substring(0, charIndex)
    } else {
      charIndex++
      text.value = current.substring(0, charIndex)
    }

    let delay: number
    if (!isDeleting && charIndex === current.length) {
      delay = pauseAfterComplete
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      index = (index + 1) % texts.length
      delay = pauseBeforeNew
    } else {
      delay = isDeleting ? deletingSpeed : typingSpeed
    }

    timer = setTimeout(tick, delay)
  }

  onMounted(() => {
    timer = setTimeout(tick, startDelay)
  })

  onUnmounted(() => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  })

  return { text }
}
