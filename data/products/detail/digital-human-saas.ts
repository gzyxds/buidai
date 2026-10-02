import type { Product } from '../types'

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
  seo: {
    title: '超级IP数字人SaaS系统 - 真人形象声音克隆短视频源码 | 智言AI-智言万象',
    description:
      '超级IP数字人SaaS系统，为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音克隆与形象克隆，文案一键合成数字人短视频，内置SaaS多租户运营体系，提供完整源码与私有化部署支持。',
    keywords:
      '数字人系统,数字人源码,形象克隆,声音克隆,AI短视频,数字人SaaS,短视频IP,私有化部署,智言AI,智言万象',
    ogTitle: '超级IP数字人SaaS系统 - 真人克隆短视频 | 智言AI-智言万象',
    ogDescription:
      '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
    ogImage: '/plugin/saas.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '超级IP数字人SaaS系统 - 真人克隆短视频 | 智言AI-智言万象',
    twitterDescription:
      '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
    twitterImage: '/plugin/saas.webp'
  },
  hero: {
    badge: '数字人 SaaS 2.0 发布',
    h1Leading: '超级IP ',
    h1Highlight: '数字人',
    h1Suffix: ' SaaS系统',
    description:
      '为企业主、个人博主打造短视频IP的数字人源码系统。<br class="hidden sm:block" />支持真人声音+形象克隆，文案一键合成数字人短视频。',
    primaryBtn: '咨询方案',
    secondaryBtn: '在线体验',
    demoImage: '/plugin/saas.webp',
    demoAlt: '超级IP数字人SaaS系统展示'
  },
  featuresGrid: {
    title: '一站式数字人短视频创作平台',
    description:
      '集形象克隆、声音克隆、视频合成、SaaS运营于一体，为企业和个人博主提供低成本、高效率的短视频内容生产方案'
  },
  features: [
    {
      title: '真人声音克隆',
      desc: '上传少量语音样本即可克隆真人音色，让数字人开口即"本人"。',
      icon: 'i-heroicons-microphone'
    },
    {
      title: '形象克隆',
      desc: '基于真人视频快速克隆数字形象，口型、表情、动作自然逼真。',
      icon: 'i-heroicons-user'
    },
    {
      title: '一键合成',
      desc: '输入文案即可一键合成数字人短视频，批量产出降本增效。',
      icon: 'i-heroicons-film'
    },
    {
      title: 'SaaS 多租户',
      desc: '内置会员、套餐与多租户体系，支持快速开展数字人 SaaS 业务。',
      icon: 'i-heroicons-building-office'
    },
    {
      title: '多端覆盖',
      desc: 'PC 管理后台与移动端齐备，随时随地创作与管理数字人内容。',
      icon: 'i-heroicons-device-phone-mobile'
    },
    {
      title: '源码交付',
      desc: '源码完整交付，支持二次开发与私有化部署，商业自主可控。',
      icon: 'i-heroicons-code-bracket'
    }
  ],
  featureDetails: [
    {
      title: '真人克隆，打造专属数字分身',
      desc: '上传一段真人视频与语音样本，即可克隆专属数字形象与音色。口型精准对齐、表情自然生动，让数字人短视频具备真人般的亲和力。',
      activePoint: 0,
      points: [
        { title: '形象克隆', desc: '基于真人视频快速克隆数字形象，形象逼真、辨识度高。' },
        { title: '声音克隆', desc: '少量语音样本即可克隆真人音色，音色自然、情感丰富。' },
        { title: '口型同步', desc: '口型与语音精准对齐，数字人开口说话自然流畅。' },
        { title: '表情驱动', desc: '表情与动作智能驱动，告别僵硬的"机器人脸"。' }
      ],
      image: '/plugin/saas.webp'
    },
    {
      title: '一键合成，短视频批量产出',
      desc: '输入文案即可一键合成数字人短视频，支持批量任务与多账号管理，让内容产能成倍提升，轻松维持日更节奏。',
      activePoint: 0,
      points: [
        { title: '文案转视频', desc: '输入文案一键合成数字人短视频，无需拍摄与剪辑。' },
        { title: '批量合成', desc: '支持批量任务队列，一次提交、成批产出。' },
        { title: '多账号管理', desc: '多账号统一管理，矩阵化运营短视频 IP。' },
        { title: '快速产出', desc: '分钟级出片，轻松维持日更节奏与热点响应。' }
      ],
      image: '/plugin/ai-digital-human-live.webp'
    },
    {
      title: 'SaaS 架构，源码级商业运营',
      desc: '内置会员体系、套餐计费与多租户架构，开箱即可开展数字人 SaaS 业务；完整源码交付，支持深度二开与私有化部署。',
      activePoint: 0,
      points: [
        { title: '会员体系', desc: '内置会员等级与权益管理，运营体系开箱即用。' },
        { title: '套餐计费', desc: '套餐与计费灵活配置，快速跑通商业模式。' },
        { title: '多租户架构', desc: 'SaaS 多租户设计，一套系统服务众多客户。' },
        { title: '源码交付', desc: '完整源码交付，支持深度二次开发与私有化部署。' }
      ],
      image: '/plugin/ai-digital-human-live.webp'
    }
  ],
  cta: {
    title: '准备好打造你的数字人 IP 了吗？',
    description:
      '立即联系我们，获取超级IP数字人SaaS系统完整源码与部署方案，开启低成本、高效率的短视频内容生产。'
  },
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
    description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
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
