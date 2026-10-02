import type { Product } from './types'

/**
 * 产品实体：万象漫剧短剧创作
 */
const product: Product = {
  slug: 'wanxiang',
  /** 显示名 */
  name: '万象漫剧短剧创作',
  /** 通用短描述 */
  description:
    '万象漫剧是一款智能A视频生成工具，支持自定义角色与场景，一键生成完整视频内容。通过设定起始与结束画面，自动生成流畅的动态视频。无需专业门槛，即可轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。',
  /** 图标名 */
  icon: 'i-lucide-image-plus',
  /** 封面图 */
  image: '/plugin/wanxiang.png',
  /** 市场视图（原 pluginData 数字 id: 5） */
  market: {
    id: 5,
    /** 市场视图专属文案（营销口吻） */
    description:
      '万象漫剧是一款智能A视频生成工具，支持自定义角色与场景，一键生成完整视频内容。通过设定起始与结束画面，自动生成流畅的动态视频。无需专业门槛，即可轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。',
    category: '漫剧创作',
    originalPrice: 1198,
    discountPrice: 1198,
    date: '2025/11/14'
  }
}

export default product
