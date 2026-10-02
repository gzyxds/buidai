import type { Product } from './types'

/**
 * 产品实体：image-2图片创作
 */
const product: Product = {
  slug: 'image-2',
  /** 显示名 */
  name: 'image-2图片创作',
  /** 通用短描述 */
  description:
    'image-2图片创作是一款聚焦高效优质图片创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创意转化为精彩视频。',
  /** 图标名 */
  icon: 'i-lucide-video',
  /** 封面图 */
  image: '/plugin/img2.png',
  /** 市场视图（原 pluginData 数字 id: 1） */
  market: {
    id: 1,
    /** 市场视图专属文案（营销口吻） */
    description:
      'image-2图片创作是一款聚焦高效优质图片创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创意转化为精彩视频。',
    category: 'video',
    originalPrice: 1398,
    discountPrice: 1398,
    date: '2025/11/14'
  }
}

export default product
