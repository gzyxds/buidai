import type { Product } from '../types'

/**
 * 产品实体：打造您的 专属爆款短剧
 */
const product: Product = {
  slug: 'drama',
  /** 显示名 */
  name: '打造您的 专属爆款短剧',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 网文短剧写作是一款专注于短剧本和网络小说创作的辅助工具,适合自媒体创作者、编剧、网络作家及内容团队使用。提供丰富的剧情模板、角色设定和冲突框架,支持创建无限量剧本、章节可视化拖拽、AI 扩写润色改写续写。基于开源技术构建,提供完整源码与私有化部署支持。',
  /** 图标名 */
  icon: 'i-lucide-book-open',
  /** 封面图 */
  image: '/plugin/AI短剧小说创作.png',
  seo: {
    title: 'AI短剧小说创作 - 开源免费的网文短剧写作系统 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 网文短剧写作是一款专注于短剧本和网络小说创作的辅助工具,适合自媒体创作者、编剧、网络作家及内容团队使用。提供丰富的剧情模板、角色设定和冲突框架,支持创建无限量剧本、章节可视化拖拽、AI 扩写润色改写续写。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      'AI短剧创作,网文写作,短剧本创作,网络小说,AI写作工具,智言AI,智言万象,小说创作,剧本生成,AI扩写,AI润色,开源AI系统,私有化部署',
    ogTitle: 'AI 短剧小说创作 - 打造爆款短剧的神器 | 智言AI-智言万象',
    ogDescription:
      '专为自媒体创作者、编剧、网络作家打造,支持创建无限量剧本、角色设定、章节可视化拖拽、AI 扩写润色改写续写。让短剧创作更高效、更系统。',
    ogImage: '/product/drama-1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI 短剧小说创作 - 打造爆款短剧的神器 | 智言AI-智言万象',
    twitterDescription:
      '专为自媒体创作者、编剧、网络作家打造,支持创建无限量剧本、角色设定、章节可视化拖拽、AI 扩写润色改写续写。',
    twitterImage: '/product/drama-1.png'
  },
  hero: {
    badge: 'AI 短剧小说创作 2.0 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属爆款短剧',
    description:
      '专为自媒体创作者、编剧、网络作家打造的 AI 写作工具,支持无限量剧本创作。<br class="hidden sm:block" />AI 扩写润色改写续写,章节可视化拖拽,开启智能创作新时代。',
    primaryBtn: '开始构建',
    secondaryBtn: '查看案例',
    demoImage: '/plugin/AI短剧小说创作.png',
    demoAlt: 'AI短剧小说创作'
  },
  featuresGrid: {
    title: '全能型 AI 短剧小说创作平台',
    description: '集剧本创作、角色设定、AI 辅助写作于一体,为您提供一站式解决方案'
  },
  features: [
    {
      title: '无限量剧本创作',
      desc: '支持创建无限量剧本和小说,满足自媒体创作者、编剧、网络作家的多样化创作需求。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '角色设定管理',
      desc: '完善的角色卡和故事设定功能,帮助用户构建丰富的人物形象和世界观。',
      icon: 'i-heroicons-user-group'
    },
    {
      title: '章节可视化拖拽',
      desc: '章节顺序可视化拖拽,灵活调整剧情结构,让创作流程更加直观高效。',
      icon: 'i-heroicons-arrows-right-left'
    },
    {
      title: 'AI 扩写润色',
      desc: '正文支持选中文本进行扩写、润色、改写、续写,提升内容质量和创作效率。',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: '大纲细纲记录',
      desc: '完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容。',
      icon: 'i-heroicons-clipboard-document-list'
    },
    {
      title: '多种风格配置',
      desc: '后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。',
      icon: 'i-heroicons-cog-6-tooth'
    }
  ],
  featureDetails: [
    {
      title: '无限量剧本创作,构建完整故事世界',
      desc: '支持创建无限量剧本和小说,提供丰富的剧情模板、角色设定和冲突框架。帮助自媒体创作者、编剧、网络作家快速构思情节、对话和分镜,让短剧创作更高效、更系统。',
      activePoint: 0,
      points: [
        {
          title: '丰富剧情模板',
          desc: '内置多种剧情模板,涵盖搞笑段子、情感剧场、品牌微剧等类型,快速上手创作。'
        },
        {
          title: '角色设定管理',
          desc: '完善的角色卡功能,记录人物性格、外貌、背景等设定,保持角色一致性。'
        },
        {
          title: '冲突框架构建',
          desc: '提供专业的冲突框架模板,帮助用户构建引人入胜的故事冲突和情节转折。'
        },
        {
          title: '无限量创作空间',
          desc: '支持创建无限量剧本和小说,满足自媒体创作者、编剧、网络作家的多样化创作需求。'
        }
      ],
      image: '/product/drama-1.png'
    },
    {
      title: '章节可视化拖拽与大纲管理,系统化创作流程',
      desc: '章节顺序可视化拖拽,灵活调整剧情结构。完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容,让创作流程更加直观高效。',
      activePoint: 0,
      points: [
        {
          title: '章节可视化拖拽',
          desc: '支持章节顺序可视化拖拽,灵活调整剧情结构,让创作流程更加直观高效。'
        },
        {
          title: '大纲细纲记录',
          desc: '完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容。'
        },
        { title: '故事设定管理', desc: '支持世界观、背景设定等故事元素管理,构建完整的故事世界。' },
        {
          title: '灵活调整结构',
          desc: '随时调整章节顺序和内容结构,支持草稿编辑与复用,方便内容迭代与优化。'
        }
      ],
      image: '/product/drama-2.png'
    },
    {
      title: 'AI 智能辅助写作,提升创作效率与质量',
      desc: '正文支持选中文本进行扩写、润色、改写、续写。后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。正文一键排版、复制全文,可调节字号大小。',
      activePoint: 0,
      points: [
        {
          title: 'AI 扩写续写',
          desc: '选中文本即可进行扩写和续写,AI 根据上下文智能生成连贯内容,提升创作效率。'
        },
        {
          title: 'AI 润色改写',
          desc: '支持对文本进行润色和改写,优化语言表达,提升内容质量和可读性。'
        },
        {
          title: '多种风格配置',
          desc: '后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。'
        },
        {
          title: '便捷编辑工具',
          desc: '正文一键排版、复制全文,可调节字号大小,提供舒适的写作和阅读体验。'
        }
      ],
      image: '/product/drama-3.png'
    }
  ],
  cta: {
    title: '准备好开始创作了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
  },
  /** 市场视图（原 pluginData 数字 id: 12） */
  market: {
    id: 12,
    /** 市场视图专属文案（营销口吻） */
    description:
      '辅助短剧剧本创作，小说续写，激发创作灵感。从灵感到剧本，AI全程陪伴，让创作变得简单有趣。',
    category: 'writing',
    originalPrice: 1598,
    discountPrice: 1198,
    date: '2025/11/15'
  },
  /** 演示视图（原 demoProducts id: drama） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: 'AI短剧小说创作',
    /** 演示视图副标题 */
    subtitle: '网文短剧写作系统',
    /** 演示视图专属描述 */
    description:
      '专注于短剧本和网络小说创作的辅助工具，提供丰富的剧情模板、角色设定和冲突框架，支持 AI 扩写润色改写续写。',
    /** 演示视图图标 */
    icon: 'i-heroicons-pencil-square',
    /** 演示视图封面 */
    image: '/plugin/AI短剧小说创作.png',
    /** 演示视图标签 */
    tags: ['剧本创作', '角色设定', 'AI扩写'],
    features: ['无限量剧本', '角色设定', '章节拖拽', 'AI扩写润色', '大纲管理'],
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
