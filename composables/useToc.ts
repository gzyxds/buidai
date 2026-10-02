/**
 * 目录（TOC）滚动联动 composable
 *
 * 收敛长文页（博客/文档/更新日志）三处重复的「点击跳转 + 滚动高亮」逻辑。
 *
 * 职责：
 * 1. `scrollToId` —— 平滑滚动到目标元素，并同步 URL hash 与 activeId
 * 2. 观察器 —— 目标元素进入视口时更新 activeId，卸载时自动断开
 *
 * 各页差异通过参数注入：目标来源、id 解析方式、观察器边距、是否写 hash。
 */
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { SCROLL } from '~/utils/ui'

export interface UseTocOptions {
  /**
   * 返回需要观察的元素列表。
   * 返回 null / 空数组表示暂无内容（如正文未加载），观察器会跳过。
   */
  resolveTargets: () => HTMLElement[] | null
  /**
   * 由命中元素推导高亮标识；返回 null 表示该元素不参与高亮。
   * 默认取元素的 id。
   */
  resolveActiveId?: (el: Element) => string | null
  /**
   * 点击跳转前的额外回调（如关闭移动端菜单）。
   * 在滚动与状态更新之前触发。
   */
  onBeforeNavigate?: (id: string) => void
  /**
   * 跳转时的顶部偏移量（像素），用于避开固定头部。
   * 可传函数以支持响应式断点。
   * 默认取 SCROLL.HEADING_OFFSET。
   */
  headingOffset?: number | (() => number)
  /** 是否把目标 id 写入 URL hash，默认 true */
  syncHash?: boolean
  /** IntersectionObserver 的 rootMargin，默认沿用文档页既有取值 */
  rootMargin?: string
  /** IntersectionObserver 的 threshold */
  threshold?: number
}

export interface UseTocReturn {
  /** 当前高亮的元素 id */
  activeId: Ref<string>
  /** 滚动到指定 id 的元素 */
  scrollToId: (id: string) => void
}

/** 计算元素相对文档顶部的位置，并按偏移量滚动 */
function scrollToElement(el: HTMLElement, offset: number): void {
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = el.getBoundingClientRect().top
  const offsetPosition = elementRect - bodyRect - offset

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
}

export function useToc(options: UseTocOptions): UseTocReturn {
  const {
    resolveTargets,
    resolveActiveId = el => el.id,
    onBeforeNavigate,
    headingOffset = SCROLL.HEADING_OFFSET,
    syncHash = true,
    rootMargin = `${SCROLL.TOC_OBSERVER_TOP_MARGIN} 0px ${SCROLL.TOC_OBSERVER_BOTTOM_MARGIN} 0px`,
    threshold
  } = options

  const activeId = ref('')
  let observer: IntersectionObserver | null = null

  const resolveOffset = () =>
    typeof headingOffset === 'function' ? headingOffset() : headingOffset

  /**
   * 滚动到指定 id 的元素，并更新高亮状态
   * @param id 目标元素 id
   */
  const scrollToId = (id: string): void => {
    const element = document.getElementById(id)
    if (!element) {return}

    onBeforeNavigate?.(id)

    scrollToElement(element, resolveOffset())

    // 同步 URL hash，但不触发浏览器跳转（避免与平滑滚动冲突）
    if (syncHash) {
      history.pushState(null, '', `#${id}`)
    }
    activeId.value = id
  }

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') {return}

    const targets = resolveTargets()
    if (!targets || targets.length === 0) {return}

    observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {continue}
          const id = resolveActiveId(entry.target)
          if (id) {
            activeId.value = id
          }
        }
      },
      { rootMargin, ...(threshold !== undefined ? { threshold } : {}) }
    )

    targets.forEach(el => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { activeId, scrollToId }
}