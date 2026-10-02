import type { Product } from './types'

/**
 * 产品实体：打造您的 专属爆款笔记
 */
const product: Product = {
  slug: 'xhs',
  /** 显示名 */
  name: '打造您的 专属爆款笔记',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言万象 小红书助手是专为小红书平台内容创作者打造的运营工具,涵盖笔记创作、排版优化、标签推荐等功能。支持一键生成爆款标题与风格化推广文案、AI生成配图、视频封面制作,帮助用户提升笔记曝光与互动率。基于开源技术构建,提供完整源码与私有化部署支持。',
  seo: {
    title: '小红书热门内容创作助手 - 开源免费的 AI 文案生成系统 | 智言万象',
    description:
      '智言万象 小红书助手是专为小红书平台内容创作者打造的运营工具,涵盖笔记创作、排版优化、标签推荐等功能。支持一键生成爆款标题与风格化推广文案、AI生成配图、视频封面制作,帮助用户提升笔记曝光与互动率。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      '小红书助手,小红书创作,AI文案生成,小红书爆款标题,小红书配图,内容创作工具,小红书运营,笔记生成,AI写作,小红书标签推荐,开源AI系统,私有化部署',
    ogTitle: '小红书热门内容创作助手 - 打造爆款笔记的神器 | 智言万象',
    ogDescription:
      '专为小红书创作者打造,一键生成爆款标题与风格化推广文案。支持 AI 生成配图、视频封面制作、智能匹配热门标签,提升笔记曝光与互动率。',
    ogImage: '/product/xiaohongshu.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '小红书热门内容创作助手 - 打造爆款笔记的神器 | 智言万象',
    twitterDescription:
      '专为小红书创作者打造,一键生成爆款标题与风格化推广文案,支持 AI 生成配图与智能标签推荐。',
    twitterImage: '/product/xiaohongshu.png'
  },
  hero: {
    badge: '小红书助手 2.0 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属爆款笔记',
    description:
      '专为小红书创作者打造的 AI 内容创作工具,一键生成爆款文案与配图。<br class="hidden sm:block" />智能匹配热门标签,提升笔记曝光与互动率,开启智能运营新时代。',
    primaryBtn: '开始构建',
    secondaryBtn: '查看案例',
    demoImage: '/product/xiaohongshu.png',
    demoAlt: '小红书'
  },
  featuresGrid: {
    title: '全能型小红书创作平台',
    description: '集文案生成、配图制作、标签推荐于一体,为您提供一站式解决方案'
  },
  features: [
    {
      title: '一键生成文案',
      desc: '输入产品信息,自动生成爆款标题与风格化推广文案,快速打造吸引人的笔记内容。',
      icon: 'i-heroicons-pencil'
    },
    {
      title: 'AI 生成配图',
      desc: '根据文案智能推荐图片风格与构图,一键生成高质量配图,提升笔记视觉效果。',
      icon: 'i-heroicons-photo'
    },
    {
      title: '智能标签推荐',
      desc: '根据内容自动生成并推荐相关话题与热门标签,提升笔记曝光率与互动量。',
      icon: 'i-heroicons-hashtag'
    },
    {
      title: '排版效果预览',
      desc: '在线查看生成文案在小红书 App 内的真实排版效果,所见即所得。',
      icon: 'i-heroicons-eye'
    },
    {
      title: '历史记录管理',
      desc: '永久保存历史记录,支持草稿编辑与复用,方便内容迭代与优化。',
      icon: 'i-heroicons-clock'
    },
    {
      title: '自定义收费',
      desc: '后台自定义设置模型计费,灵活配置价格策略,满足不同商业需求。',
      icon: 'i-heroicons-currency-dollar'
    }
  ],
  featureDetails: [
    {
      title: '一键生成小红书文案,打造爆款笔记',
      desc: '输入产品信息,自动生成爆款标题与风格化推广文案。AI 深度学习小红书爆款笔记特征,快速生成吸引人的标题和内容,让您的笔记脱颖而出。',
      activePoint: 0,
      points: [
        {
          title: '爆款标题自动生成',
          desc: '基于小红书平台爆款笔记数据分析,自动生成高点击率标题,提升笔记曝光量。'
        },
        {
          title: '风格化推广文案',
          desc: '支持多种文案风格,如种草风、测评风、教程风等,满足不同内容创作需求。'
        },
        {
          title: '产品信息智能提取',
          desc: '输入产品名称或链接,自动提取关键信息,快速生成符合小红书调性的推广文案。'
        },
        {
          title: '多版本文案生成',
          desc: '一次生成多个版本文案,支持对比选择,找到最适合的表达方式。'
        }
      ],
      image: '/product/xiaohongshu.png'
    },
    {
      title: 'AI 生成配图与视频封面,提升视觉吸引力',
      desc: '根据文案智能推荐图片风格与构图,一键生成高质量配图和视频封面。让您的笔记在视觉上更具吸引力,提升用户点击率和互动率。',
      activePoint: 0,
      points: [
        {
          title: '智能风格推荐',
          desc: '根据文案内容和目标受众,智能推荐最适合的图片风格,如清新、复古、简约等。'
        },
        {
          title: '构图优化建议',
          desc: 'AI 分析小红书热门图片构图,提供专业构图建议,让配图更具吸引力。'
        },
        {
          title: '一键生成配图',
          desc: '基于文案内容,一键生成高质量配图,无需专业设计技能,快速完成视觉创作。'
        },
        {
          title: '视频封面制作',
          desc: '支持制作视频封面,适配小红书视频笔记格式,提升视频内容的点击率。'
        }
      ],
      image: '/product/xhs-2.png'
    },
    {
      title: '智能标签与历史管理,提升运营效率',
      desc: '根据内容自动生成并推荐相关话题与热门标签,永久保存历史记录,支持草稿编辑与复用。实现内容创作与流量变现的高效结合。',
      activePoint: 0,
      points: [
        {
          title: '智能标签推荐',
          desc: '根据内容自动生成并推荐相关话题与热门标签,提升笔记曝光率与互动量。'
        },
        { title: '历史记录管理', desc: '永久保存历史记录,支持草稿编辑与复用,方便内容迭代与优化。' },
        {
          title: '排版效果预览',
          desc: '在线查看生成文案在小红书 App 内的真实排版效果,所见即所得。'
        },
        {
          title: '自定义收费设置',
          desc: '后台自定义设置模型计费,灵活配置价格策略,满足不同商业需求。'
        }
      ],
      image: '/product/xhs-3.png'
    }
  ],
  cta: {
    title: '准备好开始创作了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
  },
  /** 市场视图（原 pluginData 数字 id: 17） */
  market: {
    id: 17,
    /** 市场视图专属文案（营销口吻） */
    description:
      '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
    category: 'writing',
    originalPrice: 1398,
    discountPrice: 1398,
    date: '2025/11/15'
  },
  /** 演示视图（原 demoProducts id: xhs） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: '小红书内容复刻',
    /** 演示视图副标题 */
    subtitle: '热门内容创作工具',
    /** 演示视图专属描述 */
    description:
      '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
    /** 演示视图图标 */
    icon: 'i-heroicons-hashtag',
    /** 演示视图封面 */
    image: '/plugin/xiaohongshu.png',
    /** 演示视图标签 */
    tags: ['文案生成', 'AI配图', '标签推荐'],
    features: ['一键提取', '智能仿写', '爆款文案', '流量密码', '快速产出'],
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
