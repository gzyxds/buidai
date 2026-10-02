/**
 * 二维码弹窗 composable
 *
 * 收敛各页面/组件中重复的 `openQrModal(type)` 样板逻辑。
 * 触发方式：写入全局共享状态 useQrModalState()——useState 是官方
 * state-management.md 指定的跨组件共享状态方案（原 window CustomEvent
 * 事件总线已废弃：SSR 无 window、契约隐式、测试需手工 stub）。
 * 接收端为 BackToTop 组件。
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

/** 二维码弹窗配置 */
export interface QrModalConfig {
  title: string
  desc?: string
  image?: string
}

/**
 * 全局二维码弹窗请求状态
 *
 * null = 无请求；非 null = 请求打开弹窗。
 * BackToTop 消费后置回 null，使相同配置可再次触发。
 */
export const useQrModalState = () => useState<QrModalConfig | null>('qr-modal', () => null)

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
 * @param preset 文案预设。键缺省时默认回退到 DEFAULT_PRESET 的同名键；
 *              值为 undefined 的键会被忽略（避免传入 undefined 覆盖默认值）
 * @returns (type: string) => void 写入全局弹窗请求状态
 */
export function useQrModal(preset: QrModalPreset = {}) {
  return (type: string): void => {
    const custom = preset[type]
    // 自定义优先，缺省字段回退默认
    const base = DEFAULT_PRESET[type] ?? DEFAULT_PRESET.wechat!
    const config: QrModalConfig
      = custom === undefined
        ? base
        : {
            title: custom.title ?? base.title,
            desc: custom.desc ?? base.desc,
            image: custom.image ?? base.image
          }
    useQrModalState().value = config
  }
}
