import type { Product } from '../types'

/**
 * 产品实体：模绘衣境
 */
const product: Product = {
  slug: 'moyi',
  /** 显示名 */
  name: '模绘衣境',
  /** 通用短描述 */
  description:
    'AI服装设计与展示，虚拟试衣，缩短设计周期。无需制作样衣，即可预览穿着效果，降低设计成本。',
  /** 图标名 */
  icon: 'i-lucide-shirt',
  /** 封面图 */
  image: '/plugin/fashion-ai.webp',
  /** 市场视图（原 pluginData 数字 id: 18） */
  market: {
    id: 18,
    /** 市场视图专属文案（营销口吻） */
    description:
      'AI服装设计与展示，虚拟试衣，缩短设计周期。无需制作样衣，即可预览穿着效果，降低设计成本。',
    category: 'video',
    originalPrice: 1399,
    discountPrice: 1399,
    date: '2025/11/15'
  }
}

export default product
