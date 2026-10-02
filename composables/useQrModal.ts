/**
 * 二维码弹窗 composable
 *
 * 收敛各页面/组件中重复的 `openQrModal(type)` 样板逻辑。
 * 实际弹窗由 utils/qrModal.ts 的全局事件总线驱动，接收端为 BackToTop 组件。
 *
 * 用法：
 *   // 完全自定义（各页面文案不同）
 *   const openQrModal = useQrModal({
 *     coupon: { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' },
 *     wechat: { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
 *   })
 *
 *   // 多数页面沿用默认文案，仅覆盖个别key
 *   const openQrModal = useQrModal({
 *     coupon: { desc: '扫码获取五折优惠' }   // title / image 继承默认值
 *   })
 */
import { dispatchQrModal, type QrModalConfig } from '~/utils/qrModal'

/** 默认文案：优惠码（type 键与调用方传入的一致） */
const DEFAULT_PRESET: Record<string, QrModalConfig> = {
  coupon: { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' },
  wechat: { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
}

/** 支持局部覆盖的预设类型 */
type QrModalPreset = Record<string, Partial<QrModalConfig> | undefined>

/**
 * 生成二维码弹窗触发函数
 *
 * @param preset 文案预设。为函数名时默认回退到 DEFAULT_PRESET 的同名键；
 *              值为 undefined 的键会被忽略（避免传入 undefined 覆盖默认值）
 * @returns (type: string) => void 派发全局弹窗事件
 */
export function useQrModal(preset: QrModalPreset = {}) {
  return (type: string): void => {
    const custom = preset[type]
    // 自定义优先，缺省字段回退默认
    const base = DEFAULT_PRESET[type] ?? DEFAULT_PRESET.wechat!
    if (custom === undefined) {
      dispatchQrModal(base)
      return
    }
    dispatchQrModal({
      title: custom.title ?? base.title,
      desc: custom.desc ?? base.desc,
      image: custom.image ?? base.image
    })
  }
}