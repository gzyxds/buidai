import type { Product } from '../types'

/**
 * 产品实体：一键生成 智能分析
 */
const product: Product = {
  slug: 'resume',
  /** 显示名 */
  name: '一键生成 智能分析',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI研发的智能文案生成平台。通过简单的基本信息输入，即可快速生成结构完整的个人简历。并可基于已有内容进行深度解析，评估亮点并提供优化建议。基于开源技术构建，提供完整源码与私有化部署支持。',
  /** 图标名 */
  icon: 'i-lucide-file-text',
  /** 封面图 */
  image: '/plugin/ai-resume.webp',
  seo: {
    title: 'AI简历 - 开源免费的智能简历生成与分析系统 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI研发的智能文案生成平台。通过简单的基本信息输入，即可快速生成结构完整的个人简历。并可基于已有内容进行深度解析，评估亮点并提供优化建议。基于开源技术构建，提供完整源码与私有化部署支持。',
    keywords:
      'AI简历,智能简历,简历生成,简历分析,简历优化,简历模板,智言AI,智言万象,简历制作工具,开源AI系统,私有化部署,简历源码',
    ogTitle: 'AI简历 - 一键生成智能分析 | 智言AI-智言万象',
    ogDescription:
      '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。通过简单的基本信息输入，即可快速生成结构完整的个人简历。',
    ogImage: '/product/resume-1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI简历 - 一键生成智能分析 | 智言AI-智言万象',
    twitterDescription:
      '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。',
    twitterImage: '/product/resume-1.png'
  },
  hero: {
    badge: 'AI简历 2.0 发布',
    h1Leading: '一键生成 ',
    h1Highlight: '智能分析',
    description:
      '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。<br class="hidden sm:block" />通过简单的基本信息输入，即可快速生成结构完整的个人简历。',
    primaryBtn: '开始制作',
    secondaryBtn: '查看示例',
    demoImage: '/product/resume-1.png',
    demoAlt: 'AI简历展示'
  },
  featuresGrid: {
    title: '全能型 AI 简历制作平台',
    description:
      '集智能问答、简历模板、在线编辑、模块管理、AI分析于一体，为您提供一站式简历制作解决方案'
  },
  features: [
    {
      title: '智能问答',
      desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。',
      icon: 'i-heroicons-chat-bubble-left-right'
    },
    {
      title: '简历模板',
      desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。',
      icon: 'i-heroicons-rectangle-stack'
    },
    {
      title: '在线编辑',
      desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。',
      icon: 'i-heroicons-pencil'
    },
    {
      title: '模块管理',
      desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。',
      icon: 'i-heroicons-squares-plus'
    },
    {
      title: 'AI分析',
      desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: '自定义配置',
      desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。',
      icon: 'i-heroicons-cog-6-tooth'
    }
  ],
  featureDetails: [
    {
      title: '智能问答，快速生成',
      desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。基于AI研发的智能文案生成平台，帮助您节省时间的同时，显著提升简历质量与影响力。',
      activePoint: 0,
      points: [
        {
          title: '智能问答',
          desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。'
        },
        {
          title: '快速生成',
          desc: '通过简单的基本信息输入，即可快速生成结构完整的个人简历，大幅提升制作效率。'
        },
        { title: '内容优化', desc: '基于AI算法，自动优化简历内容，确保语言表达专业、逻辑清晰。' },
        { title: '多格式导出', desc: '支持多种格式导出，如 PDF、Word 等，满足不同投递需求。' }
      ],
      image: '/plugin/ai-resume.webp'
    },
    {
      title: '简历模板，专业设计',
      desc: '提供数十款专业简历模板，涵盖不同行业和职位。支持在线编辑与下载，实时预览效果，随时调整优化内容。',
      activePoint: 0,
      points: [
        {
          title: '丰富模板库',
          desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。'
        },
        { title: '在线编辑', desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。' },
        { title: '模块管理', desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。' },
        {
          title: '自定义样式',
          desc: '支持自定义简历样式，包括字体、颜色、布局等，打造个性化简历。'
        }
      ],
      image: '/plugin/ai-resume.webp'
    },
    {
      title: 'AI分析，深度优化',
      desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。',
      activePoint: 0,
      points: [
        { title: 'AI分析', desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。' },
        { title: '优化建议', desc: '基于AI算法，提供针对性的优化建议，帮助提升简历质量和竞争力。' },
        { title: '自定义配置', desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。' },
        { title: '数据统计', desc: '后台可查看生成记录和积分消耗情况，全面掌握使用情况。' }
      ],
      image: '/product/resume-3.webp'
    }
  ],
  cta: {
    title: '准备好开始制作简历了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 简历技术带来的无限可能。通过简单的基本信息输入，即可快速生成结构完整的个人简历，显著提升简历质量与影响力。'
  },
  /** 市场视图（原 pluginData 数字 id: 3） */
  market: {
    id: 3,
    /** 市场视图专属文案（营销口吻） */
    description:
      'AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。',
    category: 'efficiency',
    originalPrice: 1298,
    discountPrice: 1298,
    date: '2025/11/14'
  },
  /** 演示视图（原 demoProducts id: resume） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: 'AI简历',
    /** 演示视图副标题 */
    subtitle: '智能简历生成系统',
    /** 演示视图专属描述 */
    description:
      '致力于高效生成与深度优化个人简历，通过简单的基本信息输入，即可快速生成结构完整的个人简历，并提供专业优化建议。',
    /** 演示视图图标 */
    icon: 'i-heroicons-document-text',
    /** 演示视图封面 */
    image: '/plugin/ai-resume.webp',
    /** 演示视图标签 */
    tags: ['智能问答', '简历模板', 'AI分析'],
    features: ['智能问答', '简历模板', '在线编辑', '模块管理', 'AI分析'],
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
