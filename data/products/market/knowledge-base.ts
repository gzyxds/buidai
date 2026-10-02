import type { Product } from '../types'

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
  },
  /** 演示视图（原 demoProducts id: knowledge-base） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: '企业全能AI',
    /** 演示视图副标题 */
    subtitle: '智能文档问答系统',
    /** 演示视图专属描述 */
    description:
      '能够自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。支持多种文档格式，实现企业知识的高效管理与检索。',
    /** 演示视图图标 */
    icon: 'i-heroicons-book-open',
    /** 演示视图封面 */
    image: '/plugin/work.webp',
    /** 演示视图标签 */
    tags: ['文档解析', '向量索引', '智能问答'],
    features: ['文档自动解析', '向量索引构建', '精准问答', '多格式支持', '权限管理'],
    platforms: [
      {
        title: '演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://www.cnai.art',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '体验后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.cnai.art/admin',
        account: 'admin',
        password: '123456'
      },
      {
        title: 'API文档',
        icon: 'i-heroicons-document-text',
        url: 'https://www.cnai.art/doc',
        account: '联系客服',
        password: '联系客服'
      },
      {
        title: '移动端',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://www.cnai.art/mobile',
        account: '联系客服',
        password: '联系客服'
      }
    ]
  }
}

export default product
