/**
 * 滚动监听 composable —— 统一 rAF 节流、passive 监听与卸载清理
 */

/** 监听滚动是否超过阈值，返回响应式布尔值 */
export function useScrollThreshold(threshold: number): Ref<boolean> {
  const isPast = ref(false)
  let ticking = false

  const update = () => {
    if (ticking) {return}
    ticking = true
    window.requestAnimationFrame(() => {
      const value = window.scrollY > threshold
      if (isPast.value !== value) {
        isPast.value = value
      }
      ticking = false
    })
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return isPast
}

/**
 * 监听页面滚动进度，返回 0-1 的响应式值
 *
 * 消费方应使用 transform: scaleX() 渲染（width 百分比会每帧触发 layout）。
 * 可滚动高度缓存在闭包中，由 ResizeObserver 在文档高度变化（图片加载等）时重新测量，
 * 避免每次滚动都读 scrollHeight 强制同步 layout。
 */
export function useScrollProgress(): Ref<number> {
  const progress = ref(0)
  let ticking = false
  let scrollableHeight = 0
  let resizeObserver: ResizeObserver | null = null

  const measure = () => {
    scrollableHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
  }

  const update = () => {
    if (ticking) {return}
    ticking = true
    window.requestAnimationFrame(() => {
      const top = document.documentElement.scrollTop
      progress.value = scrollableHeight > 0 ? Math.min(top / scrollableHeight, 1) : 0
      ticking = false
    })
  }

  onMounted(() => {
    measure()
    resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(document.documentElement)
    window.addEventListener('scroll', update, { passive: true })
  })

  onUnmounted(() => {
    resizeObserver?.disconnect()
    resizeObserver = null
    window.removeEventListener('scroll', update)
  })

  return progress
}
