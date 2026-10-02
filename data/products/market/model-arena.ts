import type { Product } from '../types'

/**
 * 产品实体：大模型擂台
 */
const product: Product = {
  slug: 'model-arena',
  /** 显示名 */
  name: '大模型擂台',
  /** 通用短描述 */
  description:
    '主流大模型能力评测与对比，助你选择最适合的模型。客观公正的评测数据，助您做出明智的技术选型。',
  /** 图标名 */
  icon: 'i-lucide-trophy',
  /** 封面图 */
  image: '/plugin/arena-model.png',
  /** 市场视图（原 pluginData 数字 id: 16） */
  market: {
    id: 16,
    /** 市场视图专属文案（营销口吻） */
    description:
      '主流大模型能力评测与对比，助你选择最适合的模型。客观公正的评测数据，助您做出明智的技术选型。',
    category: 'enterprise',
    originalPrice: 1198,
    discountPrice: 1198,
    date: '2025/11/15'
  }
}

export default product
