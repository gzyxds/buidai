import type { Product } from '../types'

/**
 * 产品实体：打造您的 专属 AI 视频世界
 */
const product: Product = {
  slug: 'sora',
  /** 显示名 */
  name: '打造您的 专属 AI 视频世界',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言万象 Sora 视频生成平台提供一站式 AI 视频创作解决方案。支持高质量文生视频、图生视频及长视频生成。基于开源 Sora 技术构建，提供 Sora 源码与私有化部署支持，助力企业低成本打造专属 AI 视频应用。',
  seo: {
    title: 'Sora 视频生成引擎 - 开源免费的 AI 视频创作系统 | 智言万象',
    description:
      '智言万象 Sora 视频生成平台提供一站式 AI 视频创作解决方案。支持高质量文生视频、图生视频及长视频生成。基于开源 Sora 技术构建，提供 Sora 源码与私有化部署支持，助力企业低成本打造专属 AI 视频应用。',
    keywords:
      'Sora,Sora视频,Sora源码,AI视频生成,文生视频,视频生成模型,智言万象,开源AI系统,私有化部署,OpenAI Sora,视频大模型',
    ogTitle: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | 智言万象',
    ogDescription:
      '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台，提供完整源码，让创意无限延伸。',
    ogImage: '/product/sora.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | 智言万象',
    twitterDescription:
      '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台。',
    twitterImage: '/product/sora.webp'
  },
  hero: {
    badge: 'Sora 视频生成引擎 2.0 发布',
    h1Leading: '打造您的 ',
    h1Highlight: '专属 AI 视频世界',
    description:
      '新一代 Sora 视频生成平台，一键生成电影级视频。<br class="hidden sm:block" />让创意无限延伸，让画面栩栩如生，开启智能视频创作新时代。',
    primaryBtn: '开始构建',
    secondaryBtn: '查看案例',
    demoImage: '/plugin/sora2-drama.png',
    demoAlt: '知识库展示'
  },
  featuresGrid: {
    title: '全能型 Sora 视频生成平台',
    description: '集文生视频、图生视频、视频编辑于一体，为您提供一站式解决方案'
  },
  features: [
    {
      title: '文生视频（Prompt-to-Video）',
      desc: '基于 Sora 视频模型，只需输入自然语言提示词，即可生成具有电影感的镜头序列。',
      icon: 'i-heroicons-document-text'
    },
    {
      title: '图生视频（Image-to-Video）',
      desc: '将品牌海报、分镜草图等静态素材转化为动态视频，保持主体与画风一致。',
      icon: 'i-heroicons-photo'
    },
    {
      title: '长视频生成与编排',
      desc: '通过场景片段与时间轴编排，稳定生成分钟级长视频，适配故事、教程与广告场景。',
      icon: 'i-heroicons-clock'
    },
    {
      title: '多模态控制',
      desc: '同时利用文本、图片、音频等多模态输入精细控制镜头运动、节奏与氛围。',
      icon: 'i-heroicons-sparkles'
    },
    {
      title: 'Sora 工作流自动化',
      desc: '与 智言万象 工作流引擎深度集成，从脚本生成到多端分发全流程自动化。',
      icon: 'i-heroicons-command-line'
    },
    {
      title: '企业级 Sora 部署',
      desc: '支持开源 Sora 源码接入与私有化部署，满足安全合规与弹性扩展需求。',
      icon: 'i-heroicons-building-office-2'
    }
  ],
  featureDetails: [
    {
      title: '文生视频：用 Sora 把脚本直接变成镜头',
      desc: '基于 Sora 视频生成模型的文生视频能力，只需输入脚本或提示词，即可生成具有镜头语言和节奏感的成片，适合广告、讲解、剧情等多种场景。',
      activePoint: 0,
      points: [
        {
          title: '导演级镜头控制',
          desc: '在提示词中描述运动方式、景别和情绪，Sora 按导演意图生成连贯镜头。'
        },
        {
          title: '复杂场景一键拆分',
          desc: '长文案自动拆分为多个镜头片段，逐段驱动 Sora 生成，同时保持人物与场景一致。'
        },
        {
          title: '风格与角色可复用',
          desc: '支持固定角色、画风与色调，沉淀品牌专属视觉资产，持续迭代系列内容。'
        },
        {
          title: '结构化脚本适配',
          desc: '支持导入分镜脚本或大纲，按段落驱动 Sora 生成对应场景，清晰映射创意结构。'
        }
      ],
      image: '/product/sora-1.png'
    },
    {
      title: '图生视频：让静态素材在 Sora 中"活"起来',
      desc: '针对电商海报、产品渲染图、分镜草图优化的图生视频能力，让原有设计资产在 Sora 中快速变成动态画面。',
      activePoint: 0,
      points: [
        {
          title: '单图到多镜头视频',
          desc: '上传单张图片，在 Sora 中生成多视角运动镜头，营造环绕、推进等丰富空间感。'
        },
        {
          title: '多图场景串联',
          desc: '将多张草图或分镜图串联为连贯故事视频，自动补足中间过渡镜头。'
        },
        {
          title: '镜头运动与构图预设',
          desc: '内置多种镜头运动与构图模板，一键应用，即可获得专业感十足的动效画面。'
        },
        {
          title: '品牌素材资产化',
          desc: '将已有 KV、海报和 IP 角色在 Sora 中扩展为系列短视频内容。'
        }
      ],
      image: '/product/sora-2.webp'
    },
    {
      title: 'Sora 视频增强与编辑：从出片到成片一站打通',
      desc: '内置围绕 Sora 生成素材的增强与轻量编辑能力，从清晰度、节奏到字幕配音，帮助团队快速产出可直接投放的成片。',
      activePoint: 0,
      points: [
        {
          title: '面向大屏的画质增强',
          desc: '对 Sora 生成素材进行分辨率提升与细节补偿，保证在大屏与高清场景中依然细腻。'
        },
        {
          title: '节奏与时长精细调节',
          desc: '结合时间轴工具控制镜头节奏与停留时长，让画面节奏与文案、配乐高度对齐。'
        },
        {
          title: '配音与字幕一体化',
          desc: '与 智言万象 语音、字幕能力集成，一键生成多语种配音与字幕轨道，降低后期成本。'
        },
        {
          title: '多渠道发布适配',
          desc: '按平台比例与时长导出多版本视频，覆盖短视频平台、官网与线下大屏等多种发布场景。'
        }
      ],
      image: '/product/sora-3.webp'
    }
  ],
  cta: {
    title: '准备好开始创作了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
  }
}

export default product
