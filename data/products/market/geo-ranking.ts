import type { Product } from '../types'

/**
 * 产品实体：GEO优化排名工具
 */
const product: Product = {
  slug: 'geo-ranking',
  /** 显示名 */
  name: 'GEO优化排名工具',
  /** 通用短描述 */
  description: '基于地理位置的SEO优化工具，提升本地搜索排名。精准锁定目标客户，让生意自动找上门。',
  /** 图标名 */
  icon: 'i-lucide-map-pin',
  /** 封面图 */
  image: '/plugin/geo-rank-tool.webp',
  /** 市场视图（原 pluginData 数字 id: 13） */
  market: {
    id: 13,
    /** 市场视图专属文案（营销口吻） */
    description:
      '基于地理位置的SEO优化工具，提升本地搜索排名。精准锁定目标客户，让生意自动找上门。',
    category: 'enterprise',
    originalPrice: 1599,
    discountPrice: 1599,
    date: '2025/11/15'
  }
}

export default product
