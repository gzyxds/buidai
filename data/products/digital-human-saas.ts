import type { Product } from './types'

/**
 * 产品实体：超级IP数字人SaaS系统
 */
const product: Product = {
  slug: 'digital-human-saas',
  /** 显示名 */
  name: '超级IP数字人SaaS系统',
  /** 通用短描述 */
  description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成',
  /** 图标名 */
  icon: 'i-lucide-tv',
  /** 封面图 */
  image: '/plugin/saas.webp',
  /** 市场视图（原 pluginData 数字 id: 51） */
  market: {
    id: 51,
    /** 市场视图专属文案（营销口吻） */
    description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成',
    category: 'independent',
    originalPrice: 9800,
    discountPrice: 6600,
    date: '2025/12/20'
  }
}

export default product
