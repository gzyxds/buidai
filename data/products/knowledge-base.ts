import type { Product } from './types'

/**
 * 产品实体：企业全能AI知识库
 */
const product: Product = {
  slug: 'knowledge-base',
  /** 显示名 */
  name: '企业全能AI知识库',
  /** 通用短描述 */
  description: '全能AI知识库系统PHP版，基于前后端分离架构以及Vue3、uni-app、SpringBoot2.5技术栈',
  /** 图标名 */
  icon: 'i-lucide-book-open',
  /** 封面图 */
  image: '/plugin/cnai.webp',
  /** 市场视图（原 pluginData 数字 id: 50） */
  market: {
    id: 50,
    /** 市场视图专属文案（营销口吻） */
    description: '全能AI知识库系统PHP版，基于前后端分离架构以及Vue3、uni-app、SpringBoot2.5技术栈',
    category: 'independent',
    originalPrice: 6800,
    discountPrice: 4999,
    date: '2025/12/20'
  }
}

export default product
