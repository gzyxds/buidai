import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'

// useQrModal 经 useState（auto-import）写入共享状态，
// node 测试环境下用全局桩提供 useState 实现
const qrState = ref<{ title: string, desc?: string, image?: string } | null>(null)

beforeEach(() => {
  qrState.value = null
  vi.stubGlobal('useState', () => qrState)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

/** 收集二维码弹窗请求的实际写入内容 */
async function captureOpenQrModal(preset?: Parameters<typeof import('../composables/useQrModal')['useQrModal']>[0]) {
  const { useQrModal } = await import('../composables/useQrModal')
  return { openQrModal: useQrModal(preset) }
}

describe('useQrModal', () => {
  it('无预设时使用默认文案（coupon）', async () => {
    const { openQrModal } = await captureOpenQrModal()
    openQrModal('coupon')
    expect(qrState.value).toEqual({
      title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png'
    })
  })

  it('无预设时使用默认文案（wechat）', async () => {
    const { openQrModal } = await captureOpenQrModal()
    openQrModal('wechat')
    expect(qrState.value).toEqual({
      title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png'
    })
  })

  it('局部覆盖只替换指定字段，其余继承默认', async () => {
    const { openQrModal } = await captureOpenQrModal({
      coupon: { desc: '扫码获取五折优惠' }
    })
    openQrModal('coupon')
    expect(qrState.value).toEqual({
      title: '获取优惠码', desc: '扫码获取五折优惠', image: '/qrcode.png'
    })
  })

  it('可完全自定义未知 type 键（solution / consult）', async () => {
    const { openQrModal } = await captureOpenQrModal({
      solution: { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' },
      consult: { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
    })
    openQrModal('solution')
    expect(qrState.value).toEqual({
      title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png'
    })
    qrState.value = null
    openQrModal('consult')
    expect(qrState.value).toEqual({
      title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png'
    })
  })

  it('预设值为 undefined 时回退默认，不产生 undefined 字段', async () => {
    const { openQrModal } = await captureOpenQrModal({
      coupon: undefined,
      wechat: { title: '联系技术专家', desc: '扫码添加微信顾问' }
    })
    openQrModal('coupon')
    expect(qrState.value).toEqual({
      title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png'
    })
    qrState.value = null
    openQrModal('wechat')
    expect(qrState.value).toEqual({
      title: '联系技术专家', desc: '扫码添加微信顾问', image: '/wechat.png'
    })
  })

  it('未知 type 且无预设时回退 wechat 默认配置，不抛错', async () => {
    const { openQrModal } = await captureOpenQrModal()
    openQrModal('not-exist')
    expect(qrState.value).toEqual({
      title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png'
    })
  })
})
