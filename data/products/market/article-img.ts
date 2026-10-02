import type { Product } from '../types'

/**
 * 产品实体：爆款文章自动配图
 */
const product: Product = {
  slug: 'article-img',
  /** 显示名 */
  name: '爆款文章自动配图',
  /** 通用短描述 */
  description: '根据文章内容自动匹配高质量图片，提升阅读体验。图文并茂，让您的文章更具吸引力。',
  /** 图标名 */
  icon: 'i-lucide-image-plus',
  /** 封面图 */
  image: '/plugin/article-img.png',
  /** 市场视图（原 pluginData 数字 id: 20） */
  market: {
    id: 20,
    /** 市场视图专属文案（营销口吻） */
    description: '根据文章内容自动匹配高质量图片，提升阅读体验。图文并茂，让您的文章更具吸引力。',
    category: 'writing',
    originalPrice: 1198,
    discountPrice: 1198,
    date: '2025/11/15'
  }
}

export default product
