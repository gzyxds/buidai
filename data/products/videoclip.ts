import type { Product } from './types'

/**
 * 产品实体：一键生成 混剪视频
 */
const product: Product = {
  slug: 'videoclip',
  /** 显示名 */
  name: '一键生成 混剪视频',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 视频混剪助手是一款高效易用的视频剪辑软件,专为短视频创作者、Vlogger及营销人员设计。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,提供海量模板与素材库,一键生成节奏感强、视觉冲击力大的混剪视频。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容,大幅降低剪辑门槛与时间成本。基于开源技术构建,提供完整源码与私有化部署支持。',
  seo: {
    title: '视频混剪助手 - 开源免费的视频剪辑软件 | 智言AI-智言万象',
    description:
      '智言AI-智言万象 视频混剪助手是一款高效易用的视频剪辑软件,专为短视频创作者、Vlogger及营销人员设计。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,提供海量模板与素材库,一键生成节奏感强、视觉冲击力大的混剪视频。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容,大幅降低剪辑门槛与时间成本。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords:
      '视频混剪,视频剪辑,批量剪辑,智能转场,滤镜调色,字幕添加,背景音乐,智言AI,智言万象,视频制作工具,开源AI系统,私有化部署,视频剪辑源码',
    ogTitle: '视频混剪助手 - 一键生成混剪视频 | 智言AI-智言万象',
    ogDescription:
      '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配。一键生成节奏感强、视觉冲击力大的混剪视频。',
    ogImage: '/product/videoclip-1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '视频混剪助手 - 一键生成混剪视频 | 智言AI-智言万象',
    twitterDescription:
      '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,大幅降低剪辑门槛与时间成本。',
    twitterImage: '/product/videoclip-1.png'
  },
  hero: {
    badge: 'AI音乐 发布',
    h1Leading: '一键生成 ',
    h1Highlight: '混剪视频',
    description:
      '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配。<br class="hidden sm:block" />一键生成节奏感强、视觉冲击力大的混剪视频,大幅降低剪辑门槛与时间成本。',
    primaryBtn: '开始创作',
    secondaryBtn: '查看示例',
    demoImage: '/plugin/video-mix.png',
    demoAlt: '视频混剪助手展示'
  },
  featuresGrid: {
    title: '全能型视频混剪助手',
    description:
      '集批量剪辑、智能转场、滤镜调色、字幕添加、背景音乐于一体,为您提供一站式视频剪辑解决方案'
  },
  features: [
    {
      title: '批量剪辑',
      desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。',
      icon: 'i-heroicons-film'
    },
    {
      title: '智能转场',
      desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: '滤镜调色',
      desc: '提供丰富的滤镜和调色功能,一键美化视频画面,打造专业视觉效果。',
      icon: 'i-heroicons-adjustments-horizontal'
    },
    {
      title: '字幕添加',
      desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。',
      icon: 'i-lucide-closed-caption'
    },
    {
      title: '背景音乐',
      desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。',
      icon: 'i-heroicons-musical-note'
    },
    {
      title: '海量模板',
      desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。',
      icon: 'i-heroicons-rectangle-stack'
    }
  ],
  featureDetails: [
    {
      title: '批量剪辑,效率倍增',
      desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容。',
      activePoint: 0,
      points: [
        {
          title: '自动化批量剪辑',
          desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。'
        },
        { title: '智能场景识别', desc: '智能识别视频场景,自动匹配最佳剪辑方案,提升剪辑质量。' },
        { title: '快速导出', desc: '支持快速导出多种格式,大幅缩短等待时间,提升创作效率。' },
        { title: '高质量输出', desc: '生成的视频质量高,画面清晰,节奏感强,满足专业级创作需求。' }
      ],
      image:
        'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/29d316a12e2de4ed57396acbe5019bd9.png~tplv-2zwwjm3azk-image.image'
    },
    {
      title: '智能转场,流畅自然',
      desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。支持多种转场风格,满足不同创作需求。',
      activePoint: 0,
      points: [
        { title: '智能转场匹配', desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。' },
        {
          title: '多种转场风格',
          desc: '支持多种转场风格,如淡入淡出、滑动、缩放等,满足不同场景需求。'
        },
        { title: '自动场景识别', desc: '自动识别视频场景,智能推荐最佳转场效果,提升剪辑质量。' },
        { title: '流畅衔接', desc: '视频衔接流畅自然,节奏感强,视觉冲击力大,提升观看体验。' }
      ],
      image:
        'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/103ba53a1feb6150655a8928356f448e.png~tplv-2zwwjm3azk-image.webp'
    },
    {
      title: '滤镜调色与字幕添加,专业级制作',
      desc: '提供丰富的滤镜和调色功能,一键美化视频画面。支持智能字幕添加,让视频信息传达更加清晰。提供海量模板与素材库,一键生成专业级视频。',
      activePoint: 0,
      points: [
        { title: '滤镜调色', desc: '提供丰富的滤镜和调色功能,一键美化视频画面,打造专业视觉效果。' },
        {
          title: '智能字幕添加',
          desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。'
        },
        { title: '背景音乐匹配', desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。' },
        {
          title: '海量模板与素材库',
          desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。'
        }
      ],
      image:
        'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/9046c049b429b7e163d400f2fd6e9d95.png~tplv-2zwwjm3azk-image.webp'
    }
  ],
  cta: {
    title: '准备好开始创作混剪视频了吗？',
    description:
      '立即加入 智言万象，体验前沿视频混剪技术带来的无限可能。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配，大幅降低剪辑门槛与时间成本。'
  }
}

export default product
