import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * useToc 的生命周期钩子以静态 import 方式使用，
 * 此处 mock 掉 vue 的 onMounted / onUnmounted 以捕获注册并手动触发，
 * 使纯逻辑 composable 无需 DOM 环境即可测试。
 */
const mountHooks: Array<() => void> = []
const unmountHooks: Array<() => void> = []

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue')>()
  return {
    ...actual,
    onMounted: (fn: () => void) => { mountHooks.push(fn) },
    onUnmounted: (fn: () => void) => { unmountHooks.push(fn) }
  }
})

const { useToc } = await import('../composables/useToc')

/** IntersectionObserver 桩：记录被观察元素，并暴露回调以便手动触发 */
const observedElements: Element[] = []
let observerCallback: (entries: Array<{ isIntersecting: boolean, target: Element }>) => void = () => {}

class IntersectionObserverStub {
  constructor(
    private cb: (entries: Array<{ isIntersecting: boolean, target: Element }>) => void
  ) {
    observerCallback = cb
  }

  observe(el: Element) {
    observedElements.push(el)
  }

  disconnect() {
    observedElements.length = 0
  }

  unobserve() {}
  takeRecords() { return [] }
}

let scrollToMock: ReturnType<typeof vi.fn>
let pushStateMock: ReturnType<typeof vi.fn>
let targetElements: Map<string, HTMLElement>

beforeEach(() => {
  mountHooks.length = 0
  unmountHooks.length = 0
  observedElements.length = 0
  observerCallback = () => {}
  targetElements = new Map()
  scrollToMock = vi.fn()
  pushStateMock = vi.fn()

  vi.stubGlobal('IntersectionObserver', IntersectionObserverStub)
  vi.stubGlobal('window', { innerWidth: 1280, scrollTo: scrollToMock })
  vi.stubGlobal('history', { pushState: pushStateMock })
  vi.stubGlobal('document', {
    getElementById: (id: string) => targetElements.get(id) ?? null,
    body: { getBoundingClientRect: () => ({ top: 0 }) },
    querySelectorAll: () => []
  })
})

/** 触发 mount 钩子 */
function mount(): void {
  mountHooks.forEach(fn => fn())
}

/** 触发 unmount 钩子 */
function unmount(): void {
  unmountHooks.forEach(fn => fn())
}

/** 创建带指定 id 与 top 位置的元素桩 */
function createHeading(id: string, top: number): HTMLElement {
  return {
    id,
    getBoundingClientRect: () => ({ top })
  } as unknown as HTMLElement
}

describe('useToc', () => {
  it('scrollToId 按偏移量计算位置并平滑滚动，同时写入 hash', () => {
    targetElements.set('h-1', createHeading('h-1', 500))

    const { scrollToId, activeId } = useToc({ resolveTargets: () => [], headingOffset: 100 })
    scrollToId('h-1')

    expect(scrollToMock).toHaveBeenCalledWith({ top: 400, behavior: 'smooth' })
    expect(pushStateMock).toHaveBeenCalledWith(null, '', '#h-1')
    expect(activeId.value).toBe('h-1')
  })

  it('syncHash 为 false 时不写 hash（更新日志页行为）', () => {
    targetElements.set('v-0', createHeading('v-0', 300))

    const { scrollToId } = useToc({ resolveTargets: () => [], headingOffset: 100, syncHash: false })
    scrollToId('v-0')

    expect(scrollToMock).toHaveBeenCalledWith({ top: 200, behavior: 'smooth' })
    expect(pushStateMock).not.toHaveBeenCalled()
  })

  it('headingOffset 传函数时按调用时的值计算（响应式断点偏移）', () => {
    targetElements.set('x', createHeading('x', 400))

    const { scrollToId } = useToc({ resolveTargets: () => [], headingOffset: () => 120 })
    scrollToId('x')

    expect(scrollToMock).toHaveBeenCalledWith({ top: 280, behavior: 'smooth' })
  })

  it('目标元素不存在时不滚动也不写 hash', () => {
    const { scrollToId, activeId } = useToc({ resolveTargets: () => [] })
    scrollToId('missing')

    expect(scrollToMock).not.toHaveBeenCalled()
    expect(pushStateMock).not.toHaveBeenCalled()
    expect(activeId.value).toBe('')
  })

  it('onBeforeNavigate 在滚动之前触发（移动端收起目录）', () => {
    targetElements.set('h-2', createHeading('h-2', 200))
    const order: string[] = []

    const { scrollToId } = useToc({
      resolveTargets: () => [],
      headingOffset: 0,
      onBeforeNavigate: () => { order.push('before') }
    })
    scrollToId('h-2')

    expect(order).toEqual(['before'])
    expect(scrollToMock).toHaveBeenCalled()
  })

  it('观察器命中元素时按 resolveActiveId 更新 activeId', () => {
    const el = createHeading('version-2', 100)
    const { activeId } = useToc({ resolveTargets: () => [el] })

    mount()
    observerCallback([{ isIntersecting: true, target: el }])

    expect(activeId.value).toBe('version-2')
  })

  it('resolveActiveId 返回 null 的元素不更新 activeId', () => {
    const el = createHeading('skip', 100)
    const { activeId } = useToc({ resolveTargets: () => [el], resolveActiveId: () => null })

    mount()
    observerCallback([{ isIntersecting: true, target: el }])

    expect(activeId.value).toBe('')
  })

  it('未命中的条目不改变 activeId', () => {
    const el = createHeading('h-3', 100)
    const { activeId } = useToc({ resolveTargets: () => [el] })

    mount()
    observerCallback([{ isIntersecting: true, target: el }])
    observerCallback([{ isIntersecting: false, target: el }])

    expect(activeId.value).toBe('h-3')
  })

  it('resolveTargets 返回空数组时不注册观察目标', () => {
    useToc({ resolveTargets: () => [] })
    mount()
    expect(observedElements).toHaveLength(0)
  })

  it('resolveTargets 返回 null 时跳过观察器创建', () => {
    useToc({ resolveTargets: () => null })
    mount()
    expect(observedElements).toHaveLength(0)
  })

  it('挂载时观察全部目标元素', () => {
    const a = createHeading('a', 10)
    const b = createHeading('b', 20)
    useToc({ resolveTargets: () => [a, b] })

    mount()
    expect(observedElements).toEqual([a, b])
  })

  it('卸载时断开观察器', () => {
    const el = createHeading('h-4', 100)
    useToc({ resolveTargets: () => [el] })

    mount()
    expect(observedElements).toHaveLength(1)

    unmount()
    expect(observedElements).toHaveLength(0)
  })
})