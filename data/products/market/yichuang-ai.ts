import type { Product } from '../types'

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
  },
  /** 演示视图（原 demoProducts id: yichuang-ai） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: 'AI聊天绘画',
    /** 演示视图副标题 */
    subtitle: 'PHP源码版',
    /** 演示视图专属描述 */
    description:
      '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广。',
    /** 演示视图图标 */
    icon: 'i-heroicons-photo',
    /** 演示视图封面 */
    image: '/plugin/ai.webp',
    /** 演示视图标签 */
    tags: ['PHP源码', 'AI对话', 'AI绘画'],
    features: ['AI智能对话', 'AI绘画', '创作模型', '分销推广', '源码交付'],
    platforms: [
      {
        title: '演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://cnai.art/',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '体验后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://chat-demo.chatmoney.cn/admin/',
        account: 'admin',
        password: '123456'
      },
      {
        title: '移动端',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://cnai.art/mobile',
        account: '自行注册',
        password: '自行注册'
      }
    ]
  }
}

export default product
