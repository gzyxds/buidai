import type { Product } from '../types'

/**
 * 产品实体：思维导图
 */
const product: Product = {
  slug: 'mindmap',
  /** 显示名 */
  name: '思维导图',
  /** 通用短描述 */
  description: '各种结构的思维导图，支持自由导图样式，修改前台显示名称，帮助您理清思路，激发创意。',
  /** 图标名 */
  icon: 'i-lucide-git-branch',
  /** 封面图 */
  image: '/plugin/AI思维导图.png',
  /** 市场视图（原 pluginData 数字 id: 4） */
  market: {
    id: 4,
    /** 市场视图专属文案（营销口吻） */
    description:
      '各种结构的思维导图，支持自由导图样式，修改前台显示名称，帮助您理清思路，激发创意。',
    category: 'efficiency',
    originalPrice: 1198,
    discountPrice: 1198,
    date: '2025/11/14'
  }
}

export default product
