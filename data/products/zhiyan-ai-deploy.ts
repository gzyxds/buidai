import type { Product } from './types'

/**
 * 产品实体：智言AI部署服务
 */
const product: Product = {
  slug: 'zhiyan-ai-deploy',
  /** 显示名 */
  name: '智言AI部署服务',
  /** 通用短描述 */
  description: '官方技术专家，帮您部署 智言AI 平台框架，支持本地部署或服务器部署',
  /** 图标名 */
  icon: 'i-lucide-video',
  /** 封面图 */
  image: '/images/buidai.webp',
  /** 市场视图（原 pluginData 数字 id: 0） */
  market: {
    id: 0,
    /** 市场视图专属文案（营销口吻） */
    description: '官方技术专家，帮您部署 智言AI 平台框架，支持本地部署或服务器部署',
    category: 'video',
    originalPrice: 1398,
    discountPrice: 500,
    date: '2025/11/14'
  }
}

export default product
