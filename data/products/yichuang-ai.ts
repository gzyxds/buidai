import type { Product } from './types'

/**
 * 产品实体：艺创AI聊天绘画系统
 */
const product: Product = {
  slug: 'yichuang-ai',
  /** 显示名 */
  name: '艺创AI聊天绘画系统',
  /** 通用短描述 */
  description:
    '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广',
  /** 图标名 */
  icon: 'i-lucide-palette',
  /** 封面图 */
  image: '/plugin/ai.webp',
  /** 市场视图（原 pluginData 数字 id: 52） */
  market: {
    id: 52,
    /** 市场视图专属文案（营销口吻） */
    description:
      '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广',
    category: 'independent',
    originalPrice: 3800,
    discountPrice: 2999,
    date: '2025/12/20'
  }
}

export default product
