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

/** 监听页面滚动进度，返回 0-100 的响应式百分比 */
export function useScrollProgress(): Ref<number> {
  const progress = ref(0)
  let ticking = false

  const update = () => {
    if (ticking) {return}
    ticking = true
    window.requestAnimationFrame(() => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      progress.value = height > 0 ? (winScroll / height) * 100 : 0
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

  return progress
}
