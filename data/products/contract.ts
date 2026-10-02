import type { Product } from './types'

/**
 * 产品实体：AI合同
 */
const product: Product = {
  slug: 'contract',
  /** 显示名 */
  name: 'AI合同',
  /** 通用短描述 */
  description:
    '智能合同审查与生成，降低法律风险，提高签约效率。专业的法律助手，为您的商业合作保驾护航。',
  /** 图标名 */
  icon: 'i-lucide-signature',
  /** 封面图 */
  image: '/plugin/AI合同.png',
  /** 市场视图（原 pluginData 数字 id: 9） */
  market: {
    id: 9,
    /** 市场视图专属文案（营销口吻） */
    description:
      '智能合同审查与生成，降低法律风险，提高签约效率。专业的法律助手，为您的商业合作保驾护航。',
    category: 'enterprise',
    originalPrice: 1399,
    discountPrice: 1399,
    date: '2025/11/15'
  }
}

export default product
