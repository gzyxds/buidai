import type { Product } from '../types'

/**
 * 产品实体：智能写作助手
 */
const product: Product = {
  slug: 'writing-assistant',
  /** 显示名 */
  name: '智能写作助手',
  /** 通用短描述 */
  description:
    '在线编辑，支持AI改写，自定义模板助手。无论是文案创作还是日常写作，都能助您一臂之力。',
  /** 图标名 */
  icon: 'i-lucide-pen-tool',
  /** 封面图 */
  image: '/plugin/写作助手.png',
  /** 市场视图（原 pluginData 数字 id: 7） */
  market: {
    id: 7,
    /** 市场视图专属文案（营销口吻） */
    description:
      '在线编辑，支持AI改写，自定义模板助手。无论是文案创作还是日常写作，都能助您一臂之力。',
    category: 'writing',
    originalPrice: 1198,
    discountPrice: 1198,
    date: '2025/11/14'
  }
}

export default product
