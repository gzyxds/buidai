/**
 * FAQ 手风琴 composable（单开模式）
 *
 * 收敛各FAQ 区块中重复的「用原生 `<details>` 承载展开态、JS 仅跟踪当前项」逻辑。
 *
 * 展开/收起动画完全交给浏览器原生行为，本 composable 只负责：
 * 1. 记录当前展开项的索引（用于高亮样式）
 * 2. 处理 toggle 事件带来的状态同步
 *
 * 之所以跟踪索引而非直接用 v-model，是因为原生 details 的展开态无法双向绑定，
 * 且关闭动画依赖原生实现，重建 DOM 会丢失动画。
 */

/**
 * FAQ手风琴控制器
 *
 * @returns activeIndex 当前展开项索引（无展开时为 null）、
 *   handleToggle 绑定到 `<details @toggle>`
 */
export function useFaqAccordion() {
  /** 当前展开的 FAQ 索引 */
  const activeIndex = ref<number | null>(null)

  /**
   * 处理 details 元素的 toggle 事件
   *
   * @param event - Toggle 事件对象
   * @param idx - FAQ 索引
   */
  const handleToggle = (event: Event, idx: number): void => {
    const details = event.target as HTMLDetailsElement
    if (details.open) {
      activeIndex.value = idx
    } else if (activeIndex.value === idx) {
      activeIndex.value = null
    }
  }

  return { activeIndex, handleToggle }
}