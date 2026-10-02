import type { Product } from './types'

/**
 * 产品实体：打造您的 专属 AI 音乐
 */
const product: Product = {
  slug: 'music',
  /** 显示名 */
  name: '打造您的 专属 AI 音乐',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 AI音乐是一款以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具,旨在降低门槛、提升效率,支持个人娱乐与商用配乐的"人机协同"。基于开源技术构建,提供完整源码与私有化部署支持。',
  seo: {
    title: 'AI音乐 - 开源免费的 AI 音乐生成系统 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 AI音乐是一款以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具,旨在降低门槛、提升效率,支持个人娱乐与商用配乐的"人机协同"。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      'AI音乐,音乐生成,文生音乐,歌词生成,哼唱生成,乐谱生成,智言AI,智言万象,音乐创作工具,开源AI系统,私有化部署,音乐源码',
    ogTitle: 'AI音乐 - 一键生成 AI 音乐 | 智言AI-智言万象',
    ogDescription:
      '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐。降低门槛、提升效率,支持个人娱乐与商用配乐。',
    ogImage: '/product/AI音乐.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI音乐 - 一键生成 AI 音乐 | 智言AI-智言万象',
    twitterDescription:
      '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐,降低门槛、提升效率。',
    twitterImage: '/product/AI音乐.png'
  },
  hero: {
    badge: 'AI音乐 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属 AI 音乐',
    description:
      '新一代 AI 音乐生成工具,以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲。<br class="hidden sm:block" />降低门槛、提升效率,支持个人娱乐与商用配乐的"人机协同"。',
    primaryBtn: '开始创作',
    secondaryBtn: '查看示例',
    demoImage: '/product/AI音乐.png',
    demoAlt: 'AI音乐生成展示'
  },
  featuresGrid: {
    title: '全能型 AI 音乐生成平台',
    description: '集文本生成、哼唱生成、乐谱生成于一体,为您提供一站式音乐创作解决方案'
  },
  features: [
    {
      title: '文本生成',
      desc: '支持以文本/歌词为输入,快速生成完整歌曲,让创作更简单高效。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '哼唱生成',
      desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。',
      icon: 'i-heroicons-microphone'
    },
    {
      title: '乐谱生成',
      desc: '支持乐谱输入,快速生成音乐作品,满足专业音乐创作需求。',
      icon: 'i-heroicons-musical-note'
    },
    {
      title: '多种输出',
      desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足不同场景需求。',
      icon: 'i-heroicons-speaker-wave'
    },
    {
      title: '商用授权',
      desc: '支持个人娱乐与商用配乐,提供完整的商用授权支持。',
      icon: 'i-heroicons-shield-check'
    },
    {
      title: '快速生成',
      desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。',
      icon: 'i-heroicons-bolt'
    }
  ],
  featureDetails: [
    {
      title: '文本生成,文字即刻成曲',
      desc: '支持以文本/歌词为输入,快速生成完整歌曲。降低创作门槛,提升效率,让音乐创作更简单高效。',
      activePoint: 0,
      points: [
        {
          title: '文本输入',
          desc: '支持以文本/歌词为输入,只需输入文字描述,即可快速生成完整歌曲。'
        },
        { title: '歌词生成', desc: '支持歌词输入,快速生成与歌词匹配的音乐作品,提升创作质量。' },
        { title: '快速生成', desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。' },
        { title: '高质量输出', desc: '生成的音乐质量高,音质清晰,旋律优美,满足专业级创作需求。' }
      ],
      image: '/product/AI音乐.png'
    },
    {
      title: '哼唱生成,旋律即刻成曲',
      desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲。降低创作门槛,让不懂乐理的用户也能创作音乐。',
      activePoint: 0,
      points: [
        { title: '哼唱输入', desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。' },
        { title: '智能识别', desc: '智能识别哼唱旋律,准确捕捉音乐元素,生成高质量音乐作品。' },
        { title: '风格保持', desc: '从哼唱中学习风格和情感,生成与原哼唱风格协调的音乐。' },
        {
          title: '灵活创作方式',
          desc: '支持文本、歌词、哼唱、乐谱多种方式,满足不同用户的创作习惯。'
        }
      ],
      image: '/product/AI音乐.png'
    },
    {
      title: '多种输出,满足不同场景',
      desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足个人娱乐与商用配乐的不同需求。提供完整的商用授权支持。',
      activePoint: 0,
      points: [
        { title: '完整歌曲', desc: '支持生成完整歌曲,包含人声和伴奏,满足个人娱乐需求。' },
        { title: '伴奏输出', desc: '支持生成纯伴奏音乐,方便用户添加自己的人声或进行二次创作。' },
        { title: '人声输出', desc: '支持生成纯人声,方便用户进行混音和后期处理。' },
        { title: '商用授权', desc: '提供完整的商用授权支持,支持个人娱乐与商用配乐,满足商业需求。' }
      ],
      image: '/product/AI音乐.png'
    }
  ],
  cta: {
    title: '准备好开始创作 AI 音乐了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 音乐生成技术带来的无限可能。降低门槛、提升效率，支持个人娱乐与商用配乐。'
  },
  /** 市场视图（原 pluginData 数字 id: 21） */
  market: {
    id: 21,
    /** 市场视图专属文案（营销口吻） */
    description:
      'AI音乐是一款以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，旨在降低门槛、提升效率，支持个人娱乐与商用配乐的“人机协同”',
    category: 'video',
    originalPrice: 1399,
    discountPrice: 1399,
    date: '2025/12/27'
  },
  /** 演示视图（原 demoProducts id: music） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: 'AI音乐',
    /** 演示视图副标题 */
    subtitle: 'AI音乐生成系统',
    /** 演示视图专属描述 */
    description:
      '以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，降低门槛、提升效率。',
    /** 演示视图图标 */
    icon: 'i-heroicons-musical-note',
    /** 演示视图封面 */
    image: '/plugin/AI音乐.png',
    /** 演示视图标签 */
    tags: ['文本生成', '哼唱生成', '乐谱生成'],
    features: ['文本生成', '哼唱生成', '乐谱生成', '多种输出', '商用授权'],
    platforms: [
      {
        title: 'PC演示',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://www.gmlart.cn',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '管理后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.gmlart.cn/',
        account: 'admin',
        password: '123456'
      }
    ]
  }
}

export default product
