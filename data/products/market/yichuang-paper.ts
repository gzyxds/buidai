import type { Product } from '../types'

/**
 * 产品实体：艺创AI论文写作系统
 */
const product: Product = {
  slug: 'yichuang-paper',
  /** 显示名 */
  name: '艺创AI论文写作系统',
  /** 通用短描述 */
  description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲',
  /** 图标名 */
  icon: 'i-lucide-pen-tool',
  /** 封面图 */
  image: '/plugin/thesis.webp',
  /** 市场视图（原 pluginData 数字 id: 53） */
  market: {
    id: 53,
    /** 市场视图专属文案（营销口吻） */
    description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲',
    category: 'independent',
    originalPrice: 4698,
    discountPrice: 3200,
    date: '2025/12/20'
  },
  /** 演示视图（原 demoProducts id: yichuang-paper） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: '艺创AI论文写作',
    /** 演示视图副标题 */
    subtitle: 'PHP源码版',
    /** 演示视图专属描述 */
    description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲。',
    /** 演示视图图标 */
    icon: 'i-heroicons-document-text',
    /** 演示视图封面 */
    image: '/plugin/lw.svg',
    /** 演示视图标签 */
    tags: ['PHP源码', '论文写作', 'AI生成'],
    features: ['快速生成', '主题大纲', '长文写作', 'AI辅助', '源码交付'],
    platforms: [
      {
        title: '演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://paper.buidai.com',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '体验后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://paper.buidai.com/admin/',
        account: 'admin',
        password: '123456'
      },
      {
        title: '移动端',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://paper.buidai.com/mobile',
        account: '自行注册',
        password: '自行注册'
      }
    ]
  }
}

export default product
