/**
 * 二维码弹窗事件总线
 *
 * 通过 window CustomEvent 触发全局二维码模态框（接收端为 BackToTop 组件）。
 * 事件名与配置类型集中定义，避免散落各处的裸字符串与不一致的 payload。
 */

export interface QrModalConfig {
  title: string
  desc?: string
  image?: string
}

export const QR_MODAL_EVENT = 'showQRCodeModal'

export function dispatchQrModal(config: QrModalConfig): void {
  window.dispatchEvent(new CustomEvent<QrModalConfig>(QR_MODAL_EVENT, { detail: config }))
}
