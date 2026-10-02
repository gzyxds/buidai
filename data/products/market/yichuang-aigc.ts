import type { Product } from '../types'

/**
 * 产品实体：艺创AIGC
 */
const product: Product = {
  slug: 'yichuang-aigc',
  /** 显示名 */
  name: '艺创AIGC',
  /** 通用短描述 */
  description:
    '艺创AIGC一站式AI创作与智能应用平台覆盖AI生图、AI视频、数字人、AI写作、语音克隆、智能体等主流AI应用，源码交付，支持私有化部署和持续迭代更新。',
  /** 图标名 */
  icon: 'i-lucide-palette',
  /** 封面图 */
  image: '/plugin/yichuang-aigc.webp',
  /** 市场视图（原 pluginData 数字 id: 22） */
  market: {
    id: 22,
    /** 市场视图专属文案（营销口吻） */
    description:
      '艺创AIGC一站式AI创作与智能应用平台覆盖AI生图、AI视频、数字人、AI写作、语音克隆、智能体等主流AI应用，源码交付，支持私有化部署和持续迭代更新。',
    category: 'video',
    originalPrice: 1399,
    discountPrice: 1399,
    date: '2025/12/27'
  }
}

export default product
