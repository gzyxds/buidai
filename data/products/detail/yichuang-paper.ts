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
  seo: {
    title: '艺创AI论文写作系统 - 10分钟生成几万字长文源码 | 智言AI-智言万象',
    description:
      '艺创AI论文写作系统，10分钟可生成几万字长文。只需输入主题关键词，AI 即可快速生成主题大纲并逐章扩写，支持多种文体与格式导出，源码完整交付，支持二次开发与私有化部署。',
    keywords:
      'AI论文,论文写作系统,AI写作,长文生成,大纲生成,论文系统源码,私有化部署,智言AI,智言万象',
    ogTitle: '艺创AI论文写作系统 - 快速生成长文 | 智言AI-智言万象',
    ogDescription: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲。',
    ogImage: '/plugin/thesis.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '艺创AI论文写作系统 - 快速生成长文 | 智言AI-智言万象',
    twitterDescription:
      '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲。',
    twitterImage: '/plugin/thesis.webp'
  },
  hero: {
    badge: '论文写作系统',
    h1Leading: '艺创 ',
    h1Highlight: 'AI论文写作',
    h1Suffix: '系统',
    description:
      '10 分钟可生成几万字长文的系统。<br class="hidden sm:block" />只需输入主题关键词，AI 即可快速生成主题大纲。',
    primaryBtn: '咨询方案',
    secondaryBtn: '在线体验',
    demoImage: '/plugin/thesis.webp',
    demoAlt: '艺创AI论文写作系统展示'
  },
  featuresGrid: {
    title: '高效长文写作平台',
    description:
      '集大纲生成、逐章扩写、多文体支持、格式导出于一体，让长文创作从数天缩短到数分钟'
  },
  features: [
    {
      title: '主题大纲',
      desc: '输入主题关键词，AI 秒级生成结构化写作大纲，逻辑清晰可编辑。',
      icon: 'i-heroicons-list-bullet'
    },
    {
      title: '长文生成',
      desc: '10 分钟生成几万字长文，逐章扩写，内容连贯有深度。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '多文体支持',
      desc: '覆盖论文、报告、方案等多种文体，适配不同写作场景。',
      icon: 'i-heroicons-document-duplicate'
    },
    {
      title: '在线编辑',
      desc: '支持在线编辑与内容改写，随时调整结构与表述。',
      icon: 'i-heroicons-pencil'
    },
    {
      title: '多格式导出',
      desc: '支持 Word 等多种格式导出，排版规范即取即用。',
      icon: 'i-heroicons-arrow-down-tray'
    },
    {
      title: '源码交付',
      desc: '源码完整交付，支持二次开发与私有化部署。',
      icon: 'i-heroicons-code-bracket'
    }
  ],
  featureDetails: [
    {
      title: '关键词成文，10 分钟几万字',
      desc: '只需输入主题关键词，AI 即可快速生成结构化主题大纲，并按大纲逐章扩写成文，10 分钟产出几万字长文，大幅缩短创作周期。',
      activePoint: 0,
      points: [
        { title: '关键词生成', desc: '只需输入主题关键词，即可快速启动创作。' },
        { title: '大纲生成', desc: 'AI 秒级生成结构化主题大纲，逻辑清晰可编辑。' },
        { title: '逐章扩写', desc: '按大纲逐章扩写成文，内容连贯有深度。' },
        { title: '快速成文', desc: '10 分钟产出几万字长文，创作效率倍增。' }
      ],
      image: '/plugin/thesis.webp'
    },
    {
      title: '在线编辑，灵活改写',
      desc: '生成的长文支持在线编辑与改写，可调整大纲结构、润色章节内容，让 AI 初稿快速变成本稿。',
      activePoint: 0,
      points: [
        { title: '在线编辑', desc: '长文内容在线编辑，随时调整结构与表述。' },
        { title: '智能改写', desc: 'AI 辅助改写润色，表述更专业流畅。' },
        { title: '结构调整', desc: '大纲与章节可增删调序，成文结构随心掌控。' },
        { title: '实时预览', desc: '编辑内容实时预览，改完即见效果。' }
      ],
      image: '/plugin/thesis.webp'
    },
    {
      title: '多格式导出，开箱即用',
      desc: '支持 Word 等多种格式导出，排版规范、即取即用；后台支持积分计费与会员管理，快速开展写作服务业务。',
      activePoint: 0,
      points: [
        { title: '多格式导出', desc: '支持 Word 等多种格式导出，适配不同使用场景。' },
        { title: '排版规范', desc: '导出文档排版规范，即取即用无需二次整理。' },
        { title: '会员计费', desc: '后台积分与会员计费管理，快速开展写作服务。' },
        { title: '源码交付', desc: '完整源码交付，支持二次开发与私有化部署。' }
      ],
      image: '/plugin/thesis.webp'
    }
  ],
  cta: {
    title: '准备好体验高效长文写作了吗？',
    description:
      '立即联系我们，获取艺创AI论文写作系统完整源码与部署方案，10 分钟生成几万字长文。'
  },
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
    image: '/plugin/thesis.webp',
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
