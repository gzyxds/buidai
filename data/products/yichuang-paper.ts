import type { Product } from './types'

/**
 * 产品实体：艺创AI论文写作系统
 */
const product: Product = {
  slug: 'yichuang-paper',
  /** 显示名 */
  name: '艺创AI论文写作系统',
  /** 通用短描述 */
  description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲',
  /** 图标名 */
  icon: 'i-lucide-pen-tool',
  /** 封面图 */
  image: '/plugin/thesis.webp',
  /** 市场视图（原 pluginData 数字 id: 53） */
  market: {
    id: 53,
    /** 市场视图专属文案（营销口吻） */
    description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲',
    category: 'independent',
    originalPrice: 4698,
    discountPrice: 3200,
    date: '2025/12/20'
  }
}

export default product
