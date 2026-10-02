interface AutoPlayOptions {
  /** 自动前进的间隔（毫秒），默认 5000 */
  interval?: number
  /** 暂停后恢复的延迟（毫秒），默认 5000 */
  resumeDelay?: number
  /** 播放状态变化回调（如驱动模板中的进度条动画） */
  onActiveChange?: (active: boolean) => void
}

/**
 * 自动轮播逻辑：挂载即启动，支持暂停/延迟恢复/立即重启，卸载自动清理
 */
export function useAutoPlay(onAdvance: () => void, options: AutoPlayOptions = {}) {
  const { interval = 5000, resumeDelay = 5000, onActiveChange } = options

  let timer: ReturnType<typeof setInterval> | null = null
  let resumeTimer: ReturnType<typeof setTimeout> | null = null

  const stop = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    onActiveChange?.(false)
  }

  const start = () => {
    stop()
    onActiveChange?.(true)
    timer = setInterval(onAdvance, interval)
  }

  /** 暂停（鼠标进入等），同时取消未决的恢复计时 */
  const pause = () => {
    stop()
    if (resumeTimer) {
      clearTimeout(resumeTimer)
      resumeTimer = null
    }
  }

  /** 延迟恢复（鼠标离开、手动切换后等） */
  const resume = () => {
    if (resumeTimer) {
      clearTimeout(resumeTimer)
    }
    resumeTimer = setTimeout(start, resumeDelay)
  }

  /** 立即重启（用户交互后重置节奏） */
  const reset = () => {
    stop()
    start()
  }

  onMounted(start)

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
    }
    if (resumeTimer) {
      clearTimeout(resumeTimer)
    }
  })

  return { stop, start, pause, resume, reset }
}
