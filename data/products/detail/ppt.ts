import type { Product } from '../types'

/**
 * 产品实体：一键直出 幻灯片
 */
const product: Product = {
  slug: 'ppt',
  /** 显示名 */
  name: '一键直出 幻灯片',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 AI PPT是一款智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化，还可一键生成演讲备注。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。基于开源技术构建，提供完整源码与私有化部署支持。',
  /** 图标名 */
  icon: 'i-lucide-monitor-play',
  /** 封面图 */
  image: '/plugin/aippt.webp',
  seo: {
    title: 'AI PPT - 开源免费的智能演示文稿制作工具 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 AI PPT是一款智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化，还可一键生成演讲备注。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。基于开源技术构建，提供完整源码与私有化部署支持。',
    keywords:
      'AI PPT,智能演示文稿,自动生成PPT,模板图表,智能配色,字体搭配,动画效果,智言AI,智言万象,PPT制作工具,开源AI系统,私有化部署,PPT源码',
    ogTitle: 'AI PPT - 一键直出幻灯片 | 智言AI-智言万象',
    ogDescription:
      '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。',
    ogImage: '/plugin/aippt.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI PPT - 一键直出幻灯片 | 智言AI-智言万象',
    twitterDescription:
      '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，显著提升制作效率与视觉表现力。',
    twitterImage: '/plugin/aippt.webp'
  },
  hero: {
    badge: 'AI PPT 2.0 发布',
    h1Leading: '一键直出 ',
    h1Highlight: '幻灯片',
    description:
      '智能演示文稿制作工具，根据主题或大纲自动生成 PPT。<br class="hidden sm:block" />内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。',
    primaryBtn: '开始制作',
    secondaryBtn: '查看示例',
    demoImage: '/plugin/aippt.webp',
    demoAlt: 'AI PPT展示'
  },
  featuresGrid: {
    title: '全能型 AI PPT 制作平台',
    description:
      '集智能生成、模板图表、智能配色、字体搭配、动画效果于一体，为您提供一站式演示文稿制作解决方案'
  },
  features: [
    {
      title: '智能生成',
      desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: '模板图表',
      desc: '内置多种模板与图表，满足不同场景需求，快速搭建专业级演示文稿。',
      icon: 'i-heroicons-rectangle-stack'
    },
    {
      title: '智能配色',
      desc: '支持智能配色方案，自动匹配最佳色彩组合，提升视觉表现力。',
      icon: 'i-heroicons-paint-brush'
    },
    {
      title: '字体搭配',
      desc: '智能推荐字体搭配方案，确保排版美观专业，提升阅读体验。',
      icon: 'i-lucide-letter-text'
    },
    {
      title: '动画效果',
      desc: '支持动画效果优化，让演示更加生动有趣，增强观众参与感。',
      icon: 'i-heroicons-film'
    },
    {
      title: '演讲备注',
      desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容。',
      icon: 'i-heroicons-document-text'
    }
  ],
  featureDetails: [
    {
      title: '智能生成，一键直出',
      desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。',
      activePoint: 0,
      points: [
        {
          title: '主题自动生成',
          desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，大幅提升制作效率。'
        },
        {
          title: '智能内容扩展',
          desc: '基于 AI 算法，自动扩展和优化内容，确保演示文稿内容丰富、逻辑清晰。'
        },
        { title: '快速导出', desc: '支持快速导出多种格式，大幅缩短等待时间，提升创作效率。' },
        { title: '高质量输出', desc: '生成的 PPT 质量高，设计美观，结构清晰，满足专业级创作需求。' }
      ],
      image: '/plugin/aippt.webp'
    },
    {
      title: '模板图表，专业设计',
      desc: '内置多种模板与图表，满足不同场景需求。支持智能配色、字体搭配与动画效果优化，让您的演示文稿更加专业美观。',
      activePoint: 0,
      points: [
        {
          title: '丰富模板库',
          desc: '内置多种模板与图表，涵盖商务、教育、科技等多个领域，满足不同场景需求。'
        },
        { title: '智能配色', desc: '支持智能配色方案，自动匹配最佳色彩组合，提升视觉表现力。' },
        { title: '字体搭配', desc: '智能推荐字体搭配方案，确保排版美观专业，提升阅读体验。' },
        { title: '动画效果', desc: '支持动画效果优化，让演示更加生动有趣，增强观众参与感。' }
      ],
      image: '/plugin/aippt.webp'
    },
    {
      title: '演讲备注，掌控全场',
      desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容。支持多种输出格式，满足不同场景需求。',
      activePoint: 0,
      points: [
        {
          title: '智能备注生成',
          desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容，提升演讲效果。'
        },
        { title: '多种输出格式', desc: '支持多种输出格式，如 PDF、PPTX 等，满足不同场景需求。' },
        { title: '实时预览', desc: '支持实时预览功能，随时查看演示效果，及时调整优化。' },
        { title: '云端存储', desc: '支持云端存储，随时随地访问和编辑您的演示文稿。' }
      ],
      image: '/plugin/aippt.webp'
    }
  ],
  cta: {
    title: '准备好开始制作 PPT 了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI PPT 技术带来的无限可能。根据主题或大纲自动生成 PPT，内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。'
  },
  /** 市场视图（原 pluginData 数字 id: 8） */
  market: {
    id: 8,
    /** 市场视图专属文案（营销口吻） */
    description:
      '智能生成PPT，一键排版，海量模板，让演示更出彩。告别繁琐的排版工作，专注于内容创作。',
    category: 'efficiency',
    originalPrice: 1299,
    discountPrice: 1299,
    date: '2025/11/15'
  },
  /** 演示视图（原 demoProducts id: ppt） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: 'AI PPT',
    /** 演示视图副标题 */
    subtitle: '智能演示文稿制作',
    /** 演示视图专属描述 */
    description:
      '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，一键生成演讲备注。',
    /** 演示视图图标 */
    icon: 'i-heroicons-clipboard-document',
    /** 演示视图封面 */
    image: '/plugin/aippt.webp',
    /** 演示视图标签 */
    tags: ['智能生成', '模板图表', '智能配色'],
    features: ['智能生成', '模板图表', '智能配色', '字体搭配', '动画效果'],
    platforms: [
      {
        title: 'PC演示',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://www.buidai.com',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '管理后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.buidai.com/',
        account: 'admin',
        password: '123456'
      }
    ]
  }
}

export default product
