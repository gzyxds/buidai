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
  seo: {
    title: '艺创AI聊天绘画系统 - AI对话+AI绘画融合源码 | 智言AI-智言万象',
    description:
      '艺创AI聊天绘画系统，实现AI对话与AI绘画的融合使用，涵盖AI智能对话、AI创作模型、AI绘画、分销推广等能力，源码完整交付，支持二次开发与私有化部署。',
    keywords:
      'AI聊天,AI绘画,智能对话,绘画系统源码,AI创作模型,分销推广,AI问答,私有化部署,智言AI,智言万象',
    ogTitle: '艺创AI聊天绘画系统 - AI对话+AI绘画 | 智言AI-智言万象',
    ogDescription:
      '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广。',
    ogImage: '/plugin/ai.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '艺创AI聊天绘画系统 - AI对话+AI绘画 | 智言AI-智言万象',
    twitterDescription:
      '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广。',
    twitterImage: '/plugin/ai.webp'
  },
  hero: {
    badge: '聊天绘画双引擎',
    h1Leading: '艺创 ',
    h1Highlight: 'AI聊天绘画',
    h1Suffix: '系统',
    description:
      '实现 AI 对话与 AI 绘画的融合使用。<br class="hidden sm:block" />涵盖 AI 智能对话、AI 创作模型、AI 绘画、分销推广。',
    primaryBtn: '咨询方案',
    secondaryBtn: '在线体验',
    demoImage: '/plugin/ai.webp',
    demoAlt: '艺创AI聊天绘画系统展示'
  },
  featuresGrid: {
    title: '对话与绘画一体的 AI 创作系统',
    description:
      '集 AI 智能对话、创作模型、AI 绘画、分销推广于一体，一套源码即可快速搭建自己的 AI 创作平台'
  },
  features: [
    {
      title: 'AI 智能对话',
      desc: '接入主流大模型，支持多轮上下文对话，智能问答流畅自然。',
      icon: 'i-heroicons-chat-bubble-left-right'
    },
    {
      title: 'AI 绘画',
      desc: '多种绘画模型与风格可选，输入描述即可生成高质量图像。',
      icon: 'i-heroicons-photo'
    },
    {
      title: '创作模型',
      desc: '内置多款 AI 创作模型，写作、绘画按需切换，一站满足创作需求。',
      icon: 'i-heroicons-cpu-chip'
    },
    {
      title: '会员与积分',
      desc: '内置会员等级与积分计费体系，支持按次、按量灵活扣费。',
      icon: 'i-heroicons-ticket'
    },
    {
      title: '分销推广',
      desc: '内置分销与邀请机制，助力平台快速裂变获客。',
      icon: 'i-heroicons-user-group'
    },
    {
      title: '源码交付',
      desc: '源码完整交付，文档齐全，支持二次开发与私有化部署。',
      icon: 'i-heroicons-code-bracket'
    }
  ],
  featureDetails: [
    {
      title: 'AI 对话与绘画，一站融合',
      desc: '在同一平台内实现智能对话与 AI 绘画的融合使用：聊天中即可召唤绘画能力，创作灵感不打断，用户留存与付费转化双提升。',
      activePoint: 0,
      points: [
        { title: '多轮对话', desc: '支持多轮上下文连续对话，问答体验流畅自然。' },
        { title: '文生图像', desc: '输入描述即可生成图像，所见即所得。' },
        { title: '模型切换', desc: '对话与绘画模型按需切换，创作方式更灵活。' },
        { title: '场景联动', desc: '聊天中直接调用绘画能力，灵感不打断。' }
      ],
      image: '/plugin/ai.webp'
    },
    {
      title: '多模型接入，创作能力可扩展',
      desc: '内置多款主流大模型与绘画模型，后台可自由配置与扩展，按需上架新模型，让平台能力持续进化。',
      activePoint: 0,
      points: [
        { title: '多模型管理', desc: '主流大模型与绘画模型统一接入、统一管理。' },
        { title: '自定义配置', desc: '后台自由配置模型参数与扣费策略。' },
        { title: '模型扩展', desc: '新模型按需上架，平台能力持续进化。' },
        { title: '渠道密钥', desc: '多渠道密钥池管理，负载均衡更稳定。' }
      ],
      image: '/plugin/ai.webp'
    },
    {
      title: '分销裂变，商业闭环自带',
      desc: '内置会员、积分与分销推广体系，从获客、转化到复购形成完整商业闭环，让 AI 平台自生长。',
      activePoint: 0,
      points: [
        { title: '会员体系', desc: '会员等级与权益体系完善，付费转化路径清晰。' },
        { title: '积分计费', desc: '积分按次按量计费，成本收益精细可控。' },
        { title: '分销裂变', desc: '分销与邀请机制，用户自发裂变获客。' },
        { title: '数据看板', desc: '运营数据可视化看板，经营状况一目了然。' }
      ],
      image: '/plugin/ai.webp'
    }
  ],
  cta: {
    title: '准备好搭建自己的 AI 创作平台了吗？',
    description:
      '立即联系我们，获取艺创AI聊天绘画系统完整源码与部署方案，快速上线对话与绘画一体化的 AI 平台。'
  },
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
