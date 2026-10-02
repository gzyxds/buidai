import type { Product } from '../types'

/**
 * 产品实体：企业全能AI知识库
 */
const product: Product = {
  slug: 'knowledge-base',
  /** 显示名 */
  name: '企业全能AI知识库',
  /** 通用短描述 */
  description: '全能AI知识库系统PHP版，基于前后端分离架构以及Vue3、uni-app、SpringBoot2.5技术栈',
  /** 图标名 */
  icon: 'i-lucide-book-open',
  /** 封面图 */
  image: '/plugin/cnai.webp',
  seo: {
    title: '企业全能AI知识库 - 智能文档问答与知识管理系统源码 | 智言AI-智言万象',
    description:
      '企业全能AI知识库系统，基于前后端分离架构与 Vue3、uni-app 技术栈，自动解析文档、构建向量索引，为企业提供精准的智能问答服务。支持多种文档格式与权限管理，提供完整源码与私有化部署支持。',
    keywords:
      'AI知识库,企业知识库,智能问答,文档解析,向量索引,知识库系统源码,私有化部署,智言AI,智言万象',
    ogTitle: '企业全能AI知识库 - 智能文档问答系统 | 智言AI-智言万象',
    ogDescription:
      '自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。支持多种文档格式，实现企业知识的高效管理与检索。',
    ogImage: '/plugin/cnai.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '企业全能AI知识库 - 智能文档问答系统 | 智言AI-智言万象',
    twitterDescription:
      '自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务，实现企业知识的高效管理与检索。',
    twitterImage: '/plugin/cnai.webp'
  },
  hero: {
    badge: '企业知识库 3.0 全新升级',
    h1Leading: '企业全能 ',
    h1Highlight: 'AI知识库',
    description:
      '自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。<br class="hidden sm:block" />支持多种文档格式，实现企业知识的高效管理与检索。',
    primaryBtn: '咨询方案',
    secondaryBtn: '在线体验',
    demoImage: '/plugin/cnai.webp',
    demoAlt: '企业全能AI知识库系统展示'
  },
  featuresGrid: {
    title: '一站式企业智能知识库平台',
    description:
      '集文档解析、向量索引、智能问答、权限管理、多端访问于一体，为企业提供高效的知识管理与检索解决方案'
  },
  features: [
    {
      title: '文档自动解析',
      desc: '自动解析 Word、PDF、TXT 等多种文档格式，智能切分内容并构建知识条目。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '向量索引构建',
      desc: '基于向量检索技术构建语义索引，让企业知识检索又快又准。',
      icon: 'i-heroicons-cube-transparent'
    },
    {
      title: '精准智能问答',
      desc: '基于企业私有知识的大模型问答，答案有据可依，杜绝凭空编造。',
      icon: 'i-heroicons-chat-bubble-left-right'
    },
    {
      title: '多端覆盖',
      desc: '基于 uni-app 的移动端支持，PC、H5 多端随时随地访问知识库。',
      icon: 'i-heroicons-device-phone-mobile'
    },
    {
      title: '权限管理',
      desc: '细粒度的部门与角色权限控制，企业知识分级可见、安全可控。',
      icon: 'i-heroicons-lock-closed'
    },
    {
      title: '私有化部署',
      desc: '前后端分离架构，二次开发友好，支持企业内网私有化部署。',
      icon: 'i-heroicons-server-stack'
    }
  ],
  featureDetails: [
    {
      title: '文档自动解析，知识高效入库',
      desc: '支持 Word、PDF、TXT 等多种文档格式的自动解析，智能切分内容并构建向量索引，让企业知识快速沉淀为可检索、可问答的智能资产。',
      activePoint: 0,
      points: [
        { title: '多格式支持', desc: '支持 Word、PDF、TXT 等多种文档格式导入，覆盖企业常见知识载体。' },
        { title: '智能切分', desc: '自动解析文档结构并智能切分内容，知识条目条理清晰。' },
        { title: '向量索引', desc: '构建向量语义索引，检索速度快、召回准。' },
        { title: '批量导入', desc: '支持批量导入历史文档，企业知识一键沉淀。' }
      ],
      image: '/plugin/cnai.webp'
    },
    {
      title: '精准问答，答案有据可依',
      desc: '基于企业私有知识库的大模型问答服务，回答内容均可溯源至知识文档，为企业提供准确、可控的智能问答体验。',
      activePoint: 0,
      points: [
        { title: '语义检索', desc: '基于向量语义检索理解用户意图，而不是简单的关键词匹配。' },
        { title: '答案溯源', desc: '回答内容均可溯源至知识文档，准确可控、有据可依。' },
        { title: '多轮对话', desc: '支持多轮对话连续追问，复杂问题也能逐步拆解回答。' },
        { title: '持续积累', desc: '知识库持续更新积累，问答质量随企业知识沉淀不断提升。' }
      ],
      image: '/plugin/work.webp'
    },
    {
      title: '企业级管理，安全可控',
      desc: '提供完善的后台管理与权限体系，支持部门与角色分级授权、数据统计与 API 开放，满足企业级安全与合规要求。',
      activePoint: 0,
      points: [
        { title: '权限管理', desc: '部门与角色分级授权，企业知识分级可见、安全可控。' },
        { title: '数据统计', desc: '后台可视化统计问答与使用情况，运营状态一目了然。' },
        { title: 'API 开放', desc: '提供标准 API 文档，能力可轻松集成到企业现有系统。' },
        { title: '私有化部署', desc: '支持企业内网私有化部署，数据资产完全自主掌控。' }
      ],
      image: '/plugin/work.webp'
    }
  ],
  cta: {
    title: '准备好构建企业智能知识库了吗？',
    description:
      '立即联系我们，获取企业全能AI知识库完整源码与私有化部署方案，让企业知识真正为我所用。'
  },
  /** 市场视图（原 pluginData 数字 id: 50） */
  market: {
    id: 50,
    /** 市场视图专属文案（营销口吻） */
    description: '全能AI知识库系统PHP版，基于前后端分离架构以及Vue3、uni-app、SpringBoot2.5技术栈',
    category: 'independent',
    originalPrice: 6800,
    discountPrice: 4999,
    date: '2025/12/20'
  },
  /** 演示视图（原 demoProducts id: knowledge-base） */
  demo: {
    status: 'online',
    category: 'independent',
    /** 演示视图显示名 */
    title: '企业全能AI',
    /** 演示视图副标题 */
    subtitle: '智能文档问答系统',
    /** 演示视图专属描述 */
    description:
      '能够自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。支持多种文档格式，实现企业知识的高效管理与检索。',
    /** 演示视图图标 */
    icon: 'i-heroicons-book-open',
    /** 演示视图封面 */
    image: '/plugin/work.webp',
    /** 演示视图标签 */
    tags: ['文档解析', '向量索引', '智能问答'],
    features: ['文档自动解析', '向量索引构建', '精准问答', '多格式支持', '权限管理'],
    platforms: [
      {
        title: '演示前台',
        icon: 'i-heroicons-computer-desktop',
        url: 'https://www.cnai.art',
        account: '自行注册',
        password: '自行注册'
      },
      {
        title: '体验后台',
        icon: 'i-heroicons-cog-6-tooth',
        url: 'https://www.cnai.art/admin',
        account: 'admin',
        password: '123456'
      },
      {
        title: 'API文档',
        icon: 'i-heroicons-document-text',
        url: 'https://www.cnai.art/doc',
        account: '联系客服',
        password: '联系客服'
      },
      {
        title: '移动端',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://www.cnai.art/mobile',
        account: '联系客服',
        password: '联系客服'
      }
    ]
  }
}

export default product
