import type { Product } from '../types'

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
  },
  /** 演示视图（原 demoProducts id: zhiyan-ai-deploy） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: '智言AI框架部署服务',
    /** 演示视图副标题 */
    subtitle: '官方技术专家部署服务',
    /** 演示视图专属描述 */
    description: '官方技术专家，帮您部署智言AI平台框架，支持本地部署或服务器部署。',
    /** 演示视图图标 */
    icon: 'i-heroicons-cog-6-tooth',
    /** 演示视图封面 */
    image: '/images/buidai.webp',
    /** 演示视图标签 */
    tags: ['部署服务', '技术支持', '本地部署'],
    features: ['本地部署', '服务器部署', '技术支持', '环境配置', '性能优化'],
    platforms: [
      {
        title: '联系客服',
        icon: 'i-heroicons-chat-bubble-left-right',
        url: 'https://buidai.com/contact',
        account: '联系客服',
        password: '联系客服'
      }
    ]
  }
}

export default product
