import type { Product } from './types'

/**
 * 产品实体：AI证件照
 */
const product: Product = {
  slug: 'id-photo',
  /** 显示名 */
  name: 'AI证件照',
  /** 通用短描述 */
  description:
    '各种证件照类型，尺寸自定义，生成图片导出。无需跑照相馆，在家即可轻松制作专业证件照。',
  /** 图标名 */
  icon: 'i-lucide-user',
  /** 封面图 */
  image: '/plugin/AI证件照.png',
  /** 市场视图（原 pluginData 数字 id: 6） */
  market: {
    id: 6,
    /** 市场视图专属文案（营销口吻） */
    description:
      '各种证件照类型，尺寸自定义，生成图片导出。无需跑照相馆，在家即可轻松制作专业证件照。',
    category: 'video',
    originalPrice: 998,
    discountPrice: 998,
    date: '2025/11/14'
  }
}

export default product
