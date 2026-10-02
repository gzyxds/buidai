import type { Product } from './types'

/**
 * 产品实体：打造您的 专属 AI 视频
 */
const product: Product = {
  slug: 'jimeng',
  /** 显示名 */
  name: '打造您的 专属 AI 视频',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 即梦AI是一款快速生成视频的工具,用户只需输入文字描述或上传参考图,即可快速生成风格多样的短视频。支持纯文本提示词或上传参考图来生成视频,支持生成不同的视频比例、分辨率(720P、1080P)。基于开源技术构建,提供完整源码与私有化部署支持。',
  seo: {
    title: '即梦AI - 开源免费的 AI 视频生成系统 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 即梦AI是一款快速生成视频的工具,用户只需输入文字描述或上传参考图,即可快速生成风格多样的短视频。支持纯文本提示词或上传参考图来生成视频,支持生成不同的视频比例、分辨率(720P、1080P)。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      '即梦AI,AI视频生成,文生视频,图生视频,视频生成工具,智言AI,智言万象,视频制作,开源AI系统,私有化部署,即梦4.0,视频生成源码',
    ogTitle: '即梦AI - 一键生成 AI 视频 | 智言AI-智言万象',
    ogDescription:
      '输入文字描述或上传参考图,即可快速生成风格多样的短视频。支持纯文本提示词、多种视频比例和分辨率,让创作更简单。',
    ogImage: '/product/jimeng-4.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '即梦AI - 一键生成 AI 视频 | 智言AI-智言万象',
    twitterDescription:
      '输入文字描述或上传参考图,即可快速生成风格多样的短视频,支持纯文本提示词和多种视频比例。',
    twitterImage: '/product/jimeng-4.png'
  },
  hero: {
    badge: '即梦AI 2.0 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属 AI 视频',
    description:
      '新一代 AI 视频生成工具,输入文字描述或上传参考图即可快速生成视频。<br class="hidden sm:block" />支持多种视频比例和分辨率,让创作更简单,开启智能视频创作新时代。',
    primaryBtn: '开始创作',
    secondaryBtn: '查看示例',
    demoImage: '/plugin/即梦AI视频.png',
    demoAlt: '即梦AI视频生成展示'
  },
  featuresGrid: {
    title: '全能型 AI 视频生成平台',
    description: '集文生视频、图生视频、多种分辨率于一体,为您提供一站式视频生成解决方案'
  },
  features: [
    {
      title: '文生视频',
      desc: '支持纯文本提示词来生成视频,只需输入文字描述即可快速生成风格多样的短视频。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '图生视频',
      desc: '上传参考图来生成视频,支持多张图片融合,让创作更加灵活多样。',
      icon: 'i-heroicons-photo'
    },
    {
      title: '多种分辨率',
      desc: '支持生成不同的视频比例和分辨率,包括 720P、1080P,满足不同场景需求。',
      icon: 'i-heroicons-film'
    },
    {
      title: '视频下载',
      desc: '生成的视频支持下载,方便用户保存和分享到各个平台。',
      icon: 'i-heroicons-arrow-down-tray'
    },
    {
      title: '提示词示例',
      desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛。',
      icon: 'i-heroicons-light-bulb'
    },
    {
      title: '灵感广场',
      desc: '后台可配置灵感广场的示例视频,为用户提供创作灵感和参考。',
      icon: 'i-heroicons-sparkles'
    }
  ],
  featureDetails: [
    {
      title: '文生视频,文字即刻成片',
      desc: '支持纯文本提示词来生成视频,用户只需输入文字描述,即可快速生成风格多样的短视频。让创意瞬间变为现实,开启智能视频创作新时代。',
      activePoint: 0,
      points: [
        {
          title: '纯文本提示词',
          desc: '支持纯文本提示词来生成视频,只需输入文字描述,即可快速生成风格多样的短视频。'
        },
        {
          title: '风格多样',
          desc: '支持多种视频风格,如写实、卡通、动漫等,满足不同场景和创作需求。'
        },
        {
          title: '快速生成',
          desc: '生成速度非常快,大幅缩短等待时间,提升创作效率,让创意快速落地。'
        },
        { title: '高质量输出', desc: '生成的视频质量高,细节丰富,色彩饱满,满足专业级创作需求。' }
      ],
      image:
        'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/51e77fefab4f94dda92bd263f62e59ff.png~tplv-2zwwjm3azk-image.webp'
    },
    {
      title: '图生视频,参考图智能融合',
      desc: '上传参考图来生成视频,支持多张图片融合。让创作更加灵活多样,轻松实现从静态到动态的转换。',
      activePoint: 0,
      points: [
        {
          title: '多图参考输入',
          desc: '支持上传参考图来生成视频,提供更丰富的创作素材和灵感来源。'
        },
        {
          title: '智能图片融合',
          desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。'
        },
        {
          title: '风格保持一致',
          desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新视频。'
        },
        {
          title: '灵活创作方式',
          desc: '支持纯文本提示词和上传参考图两种方式,满足不同用户的创作习惯。'
        }
      ],
      image:
        'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/7180d53252802aa2e3b3f81e546d7252.png~tplv-2zwwjm3azk-image.image'
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
          desc: '后台可配置灵感广场的示例视频,为用户提供创作灵感和参考,激发创作灵感。'
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
      image: '/product/jimeng-4.png'
    }
  ],
  cta: {
    title: '准备好开始创作 AI 视频了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 视频生成技术带来的无限可能。无需复杂的配置，快速生成风格多样的短视频。'
  }
}

export default product
