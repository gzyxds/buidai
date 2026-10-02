import { nextTick } from 'vue'

interface ListKeyboardNavOptions {
  /** 激活后迁移焦点的元素 id 前缀（如 'feature-tab-'），不传则不动焦点 */
  focusIdPrefix?: string
}

/**
 * 列表键盘导航（WAI-ARIA tablist 惯例）：
 * ArrowDown/ArrowUp 移动到相邻项，Home/End 跳到首尾
 */
export function useListKeyboardNav(
  getLength: () => number,
  onActivate: (index: number) => void,
  options: ListKeyboardNavOptions = {}
) {
  const { focusIdPrefix } = options

  const activate = (index: number) => {
    onActivate(index)
    if (focusIdPrefix) {
      nextTick(() => document.getElementById(`${focusIdPrefix}${index}`)?.focus())
    }
  }

  const handleKeydown = (event: KeyboardEvent, currentIndex: number) => {
    const actions: Record<string, () => void> = {
      ArrowDown: () => currentIndex < getLength() - 1 && activate(currentIndex + 1),
      ArrowUp: () => currentIndex > 0 && activate(currentIndex - 1),
      Home: () => activate(0),
      End: () => activate(getLength() - 1)
    }

    const action = actions[event.key]
    if (action) {
      event.preventDefault()
      action()
    }
  }

  return { handleKeydown }
}
