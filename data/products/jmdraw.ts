import type { Product } from './types'

/**
 * 产品实体：打造您的 专属 AI 绘画
 */
const product: Product = {
  slug: 'jmdraw',
  /** 显示名 */
  name: '打造您的 专属 AI 绘画',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 即梦AI绘画是一个基于即梦AI绘画的快速绘图工具,能够通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词或参考图来生成图片,支持多种图片比例以及1K和2K分辨率设置。基于开源技术构建,提供完整源码与私有化部署支持。',
  seo: {
    title: '即梦AI绘画 - AI绘画系统,AI系统源码,AI绘画生成系统 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 即梦AI绘画是一个基于即梦AI绘画的快速绘图工具,能够通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词或参考图来生成图片,支持多种图片比例以及1K和2K分辨率设置。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      '即梦AI,AI绘画,文生图,图生图,AI绘画工具,智言AI,智言万象,图片生成,开源AI系统,私有化部署,即梦4.0,绘画源码',
    ogTitle: '即梦AI绘画 - 一键生成 AI 图片 | 智言AI-智言万象',
    ogDescription:
      '通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词、多种图片比例和分辨率,让创作更简单。',
    ogImage: '/product/jmdraw-2.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '即梦AI绘画 - 一键生成 AI 图片 | 智言AI-智言万象',
    twitterDescription:
      '通过简单提示词快速生成高质量图像,风格覆盖广泛,支持纯文本提示词和多种图片比例。',
    twitterImage: '/product/jmdraw-2.png'
  },
  hero: {
    badge: '即梦AI 2.0 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属 AI 绘画',
    description:
      '新一代 AI 绘画生成工具,输入文字描述或上传参考图即可快速生成高质量图像。<br class="hidden sm:block" />风格覆盖广泛,写实、卡通、插画等皆可驾驭,充分释放您的创作潜能。',
    primaryBtn: '开始创作',
    secondaryBtn: '查看示例',
    demoImage: '/plugin/即梦AI绘画.png',
    demoAlt: '即梦AI绘画生成展示'
  },
  featuresGrid: {
    title: '全能型 AI 绘画生成平台',
    description: '集文生图、图生图、多种分辨率于一体,为您提供一站式绘画生成解决方案'
  },
  features: [
    {
      title: '文生图',
      desc: '支持纯文本提示词来生成图片,只需输入文字描述即可快速生成高质量图像。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '图生图',
      desc: '上传参考图来生成图片,支持多张图片融合,让创作更加灵活多样。',
      icon: 'i-heroicons-photo'
    },
    {
      title: '多种分辨率',
      desc: '支持生成不同的图片比例和分辨率,包括 1K、2K,满足不同场景需求。',
      icon: 'i-heroicons-adjustments-horizontal'
    },
    {
      title: '批量生成',
      desc: '用户可以选择每次生成1-4张图片,分别对应不同的积分,提升创作效率。',
      icon: 'i-heroicons-queue-list'
    },
    {
      title: '提示词示例',
      desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛。',
      icon: 'i-heroicons-light-bulb'
    },
    {
      title: '灵感广场',
      desc: '后台可配置灵感广场的示例图片,为用户提供创作灵感和参考。',
      icon: 'i-heroicons-sparkles'
    }
  ],
  featureDetails: [
    {
      title: '文生图,文字即刻成画',
      desc: '支持纯文本提示词来生成图片,用户只需输入文字描述,即可快速生成高质量图像。风格覆盖广泛,写实、卡通、插画等皆可驾驭,充分释放您的创作潜能。',
      activePoint: 0,
      points: [
        {
          title: '纯文本提示词',
          desc: '支持纯文本提示词来生成图片,只需输入文字描述,即可快速生成高质量图像。'
        },
        {
          title: '风格多样',
          desc: '支持多种图片风格,如写实、卡通、插画等,满足不同场景和创作需求。'
        },
        {
          title: '快速生成',
          desc: '生成速度非常快,大幅缩短等待时间,提升创作效率,让创意快速落地。'
        },
        { title: '高质量输出', desc: '生成的图片质量高,细节丰富,色彩饱满,满足专业级创作需求。' }
      ],
      image: '/plugin/即梦AI绘画.png'
    },
    {
      title: '图生图,参考图智能融合',
      desc: '上传参考图来生成图片,支持多张图片融合。让创作更加灵活多样,轻松实现从一张图片到多张图片的创意转换。',
      activePoint: 0,
      points: [
        {
          title: '多图参考输入',
          desc: '支持上传参考图来生成图片,提供更丰富的创作素材和灵感来源。'
        },
        {
          title: '智能图片融合',
          desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。'
        },
        {
          title: '风格保持一致',
          desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新图片。'
        },
        {
          title: '灵活创作方式',
          desc: '支持纯文本提示词和上传参考图两种方式,满足不同用户的创作习惯。'
        }
      ],
      image: '/product/jmdraw-2.png'
    },
    {
      title: '后台管理与配置,灵活可控',
      desc: '后台可以配置提示词示例和灵感广场,支持自定义积分消耗,可自由修改应用在前台显示的名称。提供完整的后台管理功能,满足企业级应用需求。',
      activePoint: 0,
      points: [
        {
          title: '提示词示例配置',
          desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛,提升用户体验。'
        },
        {
          title: '灵感广场示例',
          desc: '后台可配置灵感广场的示例图片,为用户提供创作灵感和参考,激发创作灵感。'
        },
        {
          title: '生成记录与积分管理',
          desc: '后台可查看生成记录和积分消耗情况,支持自定义积分消耗,方便运营管理。'
        },
        {
          title: '自定义应用名称',
          desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验,满足个性化需求。'
        }
      ],
      image: '/product/jmdraw-3.png'
    }
  ],
  cta: {
    title: '准备好开始创作 AI 绘画了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 绘画生成技术带来的无限可能。无需复杂的配置，快速生成高质量图像。'
  },
  /** 市场视图（原 pluginData 数字 id: 14） */
  market: {
    id: 14,
    /** 市场视图专属文案（营销口吻） */
    description:
      '文本生成图片，艺术创作，风格迁移，释放你的想象力。无论是二次元还是写实风，都能轻松驾驭。',
    category: 'video',
    originalPrice: 999,
    discountPrice: 999,
    date: '2025/11/15'
  }
}

export default product
