import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// qrModal依赖 window（CustomEvent），在 node 环境下需桩
const listeners = new Map<string, Set<(e: Event) => void>>()

beforeEach(() => {
  listeners.clear()
  vi.stubGlobal('window', {
    dispatchEvent: (event: Event) => {
      const set = listeners.get(event.type)
      if (set) {
        for (const fn of set) {fn(event)}
      }
      return true
    },
    addEventListener: (type: string, fn: (e: Event) => void) => {
      if (!listeners.has(type)) {listeners.set(type, new Set())}
      listeners.get(type)!.add(fn)
    }
  })
})

afterEach(() => {
  vi.unstubAllGlobals()
})

/** 收集二维码弹窗事件的实际派发内容 */
async function captureOpenQrModal(preset?: Parameters<typeof import('../composables/useQrModal')['useQrModal']>[0]) {
  const { useQrModal } = await import('../composables/useQrModal')
  const received: unknown[] = []
  const handler = (e: Event) => received.push((e as CustomEvent).detail)
  listeners.set('showQRCodeModal', new Set([handler]))

  const openQrModal = useQrModal(preset)
  return { openQrModal, received }
}

describe('useQrModal', () => {
  it('无预设时使用默认文案（coupon）', async () => {
    const { openQrModal, received } = await captureOpenQrModal()
    openQrModal('coupon')
    expect(received).toEqual([
      { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    ])
  })

  it('无预设时使用默认文案（wechat）', async () => {
    const { openQrModal, received } = await captureOpenQrModal()
    openQrModal('wechat')
    expect(received).toEqual([
      { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
    ])
  })

  it('局部覆盖只替换指定字段，其余继承默认', async () => {
    const { openQrModal, received } = await captureOpenQrModal({
      coupon: { desc: '扫码获取五折优惠' }
    })
    openQrModal('coupon')
    expect(received).toEqual([
      { title: '获取优惠码', desc: '扫码获取五折优惠', image: '/qrcode.png' }
    ])
  })

  it('可完全自定义未知 type 键（solution / consult）', async () => {
    const { openQrModal, received } = await captureOpenQrModal({
      solution: { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' },
      consult: { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
    })
    openQrModal('solution')
    openQrModal('consult')
    expect(received).toEqual([
      { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' },
      { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
    ])
  })

  it('预设值为 undefined 时回退默认，不产生 undefined 字段', async () => {
    const { openQrModal, received } = await captureOpenQrModal({
      coupon: undefined,
      wechat: { title: '联系技术专家', desc: '扫码添加微信顾问' }
    })
    openQrModal('coupon')
    openQrModal('wechat')
    expect(received).toEqual([
      { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' },
      { title: '联系技术专家', desc: '扫码添加微信顾问', image: '/wechat.png' }
    ])
  })

  it('未知 type 且无预设时回退 wechat 默认配置，不抛错', async () => {
    const { openQrModal, received } = await captureOpenQrModal()
    openQrModal('not-exist')
    expect(received).toEqual([
      { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
    ])
  })
})