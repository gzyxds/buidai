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
  },
  /** 演示视图（原 demoProducts id: digital-human-saas） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: '超级IP数字人',
    /** 演示视图副标题 */
    subtitle: 'PHP源码版',
    /** 演示视图专属描述 */
    description:
      '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
    /** 演示视图图标 */
    icon: 'i-heroicons-user',
    /** 演示视图封面 */
    image: '/plugin/saas.webp',
    /** 演示视图标签 */
    tags: ['PHP源码', '数字人', 'SaaS系统'],
    features: ['真人声音克隆', '形象克隆', '一键合成', 'SaaS架构', '源码交付'],
    platforms: [
      {
        title: '演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://v.cnai.art/',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '体验后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://demo.cnai.art/admin/',
        account: 'admin',
        password: '123456'
      },
      {
        title: '移动端',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://v.cnai.art/mobile/',
        account: '自行注册',
        password: '自行注册'
      }
    ]
  }
}

export default product
