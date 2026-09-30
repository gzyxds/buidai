/**
 * 产品页面数据中心
 *
 * 汇集全部 12 个产品页面的差异化数据，由 pages/product/[slug].vue 统一渲染。
 * 每个产品包含：SEO 元信息、首屏 Hero 文案、功能网格、功能详情和底部 CTA。
 */

export interface FeatureItem {
  title: string
  desc: string
  icon: string
}

export interface FeaturePoint {
  title: string
  desc: string
}

export interface FeatureDetail {
  title: string
  desc: string
  activePoint: number
  points: FeaturePoint[]
  image: string
}

export interface HeroData {
  /** NEW 徽章后的文本 */
  badge: string
  /** h1 标题中高亮词之前的部分 */
  h1Leading: string
  /** h1 标题中的高亮词 */
  h1Highlight: string
  /** h1 标题中高亮词之后的部分（可选） */
  h1Suffix?: string
  /** 标题下方的描述段落（支持 <br>） */
  description: string
  /** 主按钮文案 */
  primaryBtn: string
  /** 次按钮文案 */
  secondaryBtn: string
  /** 演示截图 */
  demoImage: string
  /** 演示截图替代文本 */
  demoAlt: string
}

export interface FeaturesGridData {
  /** 功能网格区段标题 */
  title: string
  /** 功能网格区段描述 */
  description: string
}

export interface CtaData {
  /** CTA 标题 */
  title: string
  /** CTA 描述 */
  description: string
}

export interface SeoData {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogType: 'website' | 'article' | 'book' | 'profile'
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

export interface ProductPageData {
  slug: string
  seo: SeoData
  hero: HeroData
  featuresGrid: FeaturesGridData
  features: FeatureItem[]
  featureDetails: FeatureDetail[]
  cta: CtaData
}

export const products: ProductPageData[] = [
  // ============================================================
  // 1. banana — 香蕉绘画
  // ============================================================
  {
    slug: 'banana',
    seo: {
      title: 'Nanobanana 香蕉绘画 - 开源免费的 AI 图像生成系统 | 智言万象',
      description:
        '智言万象 Nanobanana 香蕉绘画平台提供一站式 AI 图像创作解决方案。基于 Gemini 3 Pro Image Preview 模型,支持高质量文生图、图生图及多图融合。预置多个模板开箱即用,保持角色一致性,支持文本渲染,生成速度极快。提供完整源码与私有化部署支持,助力企业低成本打造专属 AI 绘画应用。',
      keywords:
        'Nanobanana,香蕉绘画,AI绘画,文生图,图生图,多图融合,Gemini 3 Pro,图像生成模型,智言万象,开源AI系统,私有化部署,AI绘画工具',
      ogTitle: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | 智言万象',
      ogDescription:
        '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合。预置模板开箱即用,保持角色一致性,生成速度极快,提供完整源码。',
      ogImage: '/product/human-1.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | 智言万象',
      twitterDescription:
        '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合,预置模板开箱即用。',
      twitterImage: '/product/human-1.png'
    },
    hero: {
      badge: 'Nanobanana 香蕉绘画 2.0 发布',
      h1Leading: '打造您的 ',
      h1Highlight: '专属 AI 绘画世界',
      description:
        '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,一键生成高质量图像。<br class="hidden sm:block" />预置模板开箱即用,保持角色一致性,开启智能绘画创作新时代。',
      primaryBtn: '开始构建',
      secondaryBtn: '查看案例',
      demoImage: '/plugin/Nanobanana.png',
      demoAlt: '香蕉绘画展示'
    },
    featuresGrid: {
      title: '全能型 Nanobanana 香蕉绘画平台',
      description: '集文生图、图生图、多图融合于一体,为您提供一站式解决方案'
    },
    features: [
      {
        title: '文生图（Text-to-Image）',
        desc: '基于 Gemini 3 Pro Image Preview 模型,只需输入自然语言提示词,即可生成高质量图像。',
        icon: 'i-heroicons-document-text'
      },
      {
        title: '图生图（Image-to-Image）',
        desc: '上传 1-5 张参考图片,结合提示词生成新图像,保持风格与主体一致性。',
        icon: 'i-heroicons-photo'
      },
      {
        title: '多图融合',
        desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。',
        icon: 'i-heroicons-sparkles'
      },
      {
        title: '角色一致性保持',
        desc: '有效保持角色一致性,支持固定角色、画风与色调,沉淀品牌专属视觉资产。',
        icon: 'i-heroicons-user'
      },
      {
        title: '文本渲染',
        desc: '强大的文本渲染能力,支持在图像中生成清晰准确的文字内容。',
        icon: 'i-heroicons-pencil'
      },
      {
        title: '预置模板开箱即用',
        desc: '预置多个绘画模板,开箱即用,后台可自由配置提示词、封面和参考图数量。',
        icon: 'i-heroicons-cube'
      }
    ],
    featureDetails: [
      {
        title: '文生图：用文字直接创造精美图像',
        desc: '基于 Gemini 3 Pro Image Preview 模型的文生图能力,只需输入提示词,即可生成高质量图像。生成速度极快,让创意瞬间变为现实。',
        activePoint: 0,
        points: [
          { title: '自然语言提示词', desc: '支持自然语言描述,无需专业绘画技能,用文字即可表达创意想法。' },
          { title: '高质量图像输出', desc: '基于 Gemini 3 Pro Image Preview 模型,生成细节丰富、色彩饱满的高质量图像。' },
          { title: '极速生成体验', desc: '生成速度非常快,大幅缩短等待时间,提升创作效率。' },
          { title: '风格与角色可复用', desc: '支持固定角色、画风与色调,沉淀品牌专属视觉资产,持续迭代系列内容。' }
        ],
        image: '/product/Nanobanana-1.png'
      },
      {
        title: '图生图：让参考图成为创作起点',
        desc: '支持上传 1-5 张参考图片,结合提示词生成新图像。保持角色一致性,理解图片中物体的逻辑关系,让创作更加精准。',
        activePoint: 0,
        points: [
          { title: '多图参考输入', desc: '支持上传 1-5 张参考图片,提供更丰富的创作素材和灵感来源。' },
          { title: '角色一致性保持', desc: '有效保持角色一致性,确保生成图像中的角色特征与参考图高度一致。' },
          { title: '智能逻辑理解', desc: '能够理解图片中物体的逻辑关系,生成更加合理、自然的画面。' },
          { title: '风格与细节传承', desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新图像。' }
        ],
        image: '/product/Nanobanana-2.png'
      },
      {
        title: '模板配置与后台管理：开箱即用的企业级方案',
        desc: '预置多个绘画模板,开箱即用。后台支持自由配置提示词、封面和参考图数量,可查看生成记录和积分消耗情况,满足企业级管理需求。',
        activePoint: 0,
        points: [
          { title: '预置模板开箱即用', desc: '预置多个绘画模板,无需配置即可使用,快速上手,降低学习成本。' },
          { title: '灵活的模板配置', desc: '后台可自由配置生图模板的提示词、封面和参考图数量,满足不同场景需求。' },
          { title: '生成记录与积分管理', desc: '后台可查看生成记录和积分消耗情况,支持配置用户生成消耗积分和是否免费。' },
          { title: '自定义应用名称', desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验。' }
        ],
        image: '/product/Nanobanana-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
    }
  },

  // ============================================================
  // 2. drama — AI 短剧小说创作
  // ============================================================
  {
    slug: 'drama',
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
          { title: '丰富剧情模板', desc: '内置多种剧情模板,涵盖搞笑段子、情感剧场、品牌微剧等类型,快速上手创作。' },
          { title: '角色设定管理', desc: '完善的角色卡功能,记录人物性格、外貌、背景等设定,保持角色一致性。' },
          { title: '冲突框架构建', desc: '提供专业的冲突框架模板,帮助用户构建引人入胜的故事冲突和情节转折。' },
          { title: '无限量创作空间', desc: '支持创建无限量剧本和小说,满足自媒体创作者、编剧、网络作家的多样化创作需求。' }
        ],
        image: '/product/drama-1.png'
      },
      {
        title: '章节可视化拖拽与大纲管理,系统化创作流程',
        desc: '章节顺序可视化拖拽,灵活调整剧情结构。完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容,让创作流程更加直观高效。',
        activePoint: 0,
        points: [
          { title: '章节可视化拖拽', desc: '支持章节顺序可视化拖拽,灵活调整剧情结构,让创作流程更加直观高效。' },
          { title: '大纲细纲记录', desc: '完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容。' },
          { title: '故事设定管理', desc: '支持世界观、背景设定等故事元素管理,构建完整的故事世界。' },
          { title: '灵活调整结构', desc: '随时调整章节顺序和内容结构,支持草稿编辑与复用,方便内容迭代与优化。' }
        ],
        image: '/product/drama-2.png'
      },
      {
        title: 'AI 智能辅助写作,提升创作效率与质量',
        desc: '正文支持选中文本进行扩写、润色、改写、续写。后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。正文一键排版、复制全文,可调节字号大小。',
        activePoint: 0,
        points: [
          { title: 'AI 扩写续写', desc: '选中文本即可进行扩写和续写,AI 根据上下文智能生成连贯内容,提升创作效率。' },
          { title: 'AI 润色改写', desc: '支持对文本进行润色和改写,优化语言表达,提升内容质量和可读性。' },
          { title: '多种风格配置', desc: '后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。' },
          { title: '便捷编辑工具', desc: '正文一键排版、复制全文,可调节字号大小,提供舒适的写作和阅读体验。' }
        ],
        image: '/product/drama-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
    }
  },

  // ============================================================
  // 3. human — AI 数字人系统
  // ============================================================
  {
    slug: 'human',
    seo: {
      title: 'AI数字人系统 - 开源免费的虚拟形象克隆系统 | 智言AI',
      description:
        '智言AI-智言万象 数字人平台提供一站式 AI 虚拟形象解决方案。支持 4K 超清画质、5 秒声音克隆、多语种合成及 SSML 语音标记。基于开源技术构建，私有化部署首选，助力企业低成本打造专属数字分身。',
      keywords:
        'AI数字人,虚拟数字人,声音克隆,数字分身,开源AI系统,私有化部署,智言AI,虚拟形象生成,AI视频制作,TTS语音合成',
      ogTitle: 'AI 数字人生成引擎 - 打造您的专属数字分身 | 智言AI',
      ogDescription:
        '一键克隆形象与声音，支持 4K 画质与多语种合成。基于开源生态构建的新一代 AI 数字人生成平台，让创作更简单，让表达更生动。',
      ogImage: '/product/human.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: 'AI 数字人生成引擎 - 打造您的专属数字分身 | 智言万象',
      twitterDescription:
        '一键克隆形象与声音，支持 4K 画质与多语种合成。基于开源生态构建的新一代 AI 数字人生成平台。',
      twitterImage: '/product/human.png'
    },
    hero: {
      badge: '数字人生成引擎 2.0 发布',
      h1Leading: '打造您的 ',
      h1Highlight: '专属数字分身',
      description:
        '新一代 AI 数字人生成平台，一键克隆形象与声音。<br class="hidden sm:block" />让创作更简单，让表达更生动，开启智能交互新体验。',
      primaryBtn: '开始构建',
      secondaryBtn: '查看案例',
      demoImage: '/product/human.png',
      demoAlt: '知识库展示'
    },
    featuresGrid: {
      title: '全能型 AI 数字人平台',
      description: '集形象克隆、声音合成、视频生成于一体，为您提供一站式解决方案'
    },
    features: [
      {
        title: '数字分身',
        desc: '上传视频即可克隆专属形象，1:1 还原真人表情与动作。',
        icon: 'i-heroicons-user'
      },
      {
        title: '声音克隆',
        desc: '仅需一段语音即可克隆声音的音色，支持多种语言与情感。',
        icon: 'i-heroicons-microphone'
      },
      {
        title: '声音合成',
        desc: '根据文案生成所选音色的语音，可自由调节语速、音调。',
        icon: 'i-heroicons-speaker-wave'
      },
      {
        title: '移动端自适应',
        desc: '完美适配各种移动设备，随时随地进行创作与管理。',
        icon: 'i-heroicons-device-phone-mobile'
      },
      {
        title: '自定义装修',
        desc: '灵活配置页面风格，打造符合品牌调性的专属平台。',
        icon: 'i-heroicons-paint-brush'
      },
      {
        title: '多租户管理',
        desc: '支持多租户独立部署与管理，适合企业级应用场景。',
        icon: 'i-heroicons-building-office-2'
      }
    ],
    featureDetails: [
      {
        title: '数字分身，为您分身有术',
        desc: '轻松创建你的 AI 虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！不再需要长时间拍摄，让 AI 替你出镜。',
        activePoint: 0,
        points: [
          { title: '4K 超清画质', desc: '采用影院级渲染引擎，支持 4K 分辨率输出，发丝级细节清晰可见，为您呈现最真实的视觉体验。' },
          { title: '表情自然生动', desc: '基于深度学习的情感驱动算法，精准捕捉面部微表情，让数字人的喜怒哀乐如真人般自然流露。' },
          { title: '动作流畅逼真', desc: '融合动作捕捉与运动生成技术，肢体语言丰富协调，拒绝僵硬机械感，交互表现更具亲和力。' },
          { title: '支持多种服饰替换', desc: '内置海量服装库，支持一键换装，满足商务、休闲、国潮等多种场景需求，打造百变形象。' }
        ],
        image: '/product/human-1.png'
      },
      {
        title: '声音克隆，复刻完美声线',
        desc: '有声播报、个性体验，仅需 1 句话，快速克隆你的音色，配合文案即可生成专属口播语音！',
        activePoint: 0,
        points: [
          { title: '5秒快速克隆', desc: '仅需录制 5 秒有效语音，即可快速提取声纹特征，生成高保真个人音色模型，即刻拥有专属 AI 语音。' },
          { title: '情感丰富多变', desc: '支持快乐、悲伤、愤怒、激动等多种情感风格合成，让语音表达更加生动富有感染力，拒绝平铺直叙。' },
          { title: '支持多语种合成', desc: '打通语言壁垒，支持中、英、日、韩等 20+ 种语言混合合成，轻松实现内容的全球化传播与分发。' },
          { title: '跨语言音色保持', desc: '即使跨越不同语言，也能完美保留说话人的原始音色特征，实现"原声"外语播报，亲切感不打折。' }
        ],
        image: '/product/human-2.png'
      },
      {
        title: '声音合成，文字即刻发声',
        desc: '视频配音、IP 专属声音，高度还原真人音色，不仅情感丰富，而且可以自由调整语速，配合数字分身创建出您的专属数字人！',
        activePoint: 0,
        points: [
          { title: '海量音色库', desc: '内置 1000+ 精品音色，涵盖新闻播音、有声阅读、二次元、方言等多种风格，满足全场景配音需求。' },
          { title: '情绪参数调节', desc: '支持对音高、语速、停顿、音量等参数进行精细化调节，像导演一样掌控语音的每一个细节。' },
          { title: '多角色对话生成', desc: '支持在同一段文本中插入不同角色音色，一键生成多人对话场景，非常适用于广播剧、有声书制作。' },
          { title: 'SSML 标记支持', desc: '完整支持 SSML 语音合成标记语言，通过代码精确控制发音、重音和韵律，实现专业级语音合成效果。' }
        ],
        image: '/product/human-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
    }
  },

  // ============================================================
  // 4. jimeng — 即梦AI 视频
  // ============================================================
  {
    slug: 'jimeng',
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
          { title: '纯文本提示词', desc: '支持纯文本提示词来生成视频,只需输入文字描述,即可快速生成风格多样的短视频。' },
          { title: '风格多样', desc: '支持多种视频风格,如写实、卡通、动漫等,满足不同场景和创作需求。' },
          { title: '快速生成', desc: '生成速度非常快,大幅缩短等待时间,提升创作效率,让创意快速落地。' },
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
          { title: '多图参考输入', desc: '支持上传参考图来生成视频,提供更丰富的创作素材和灵感来源。' },
          { title: '智能图片融合', desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。' },
          { title: '风格保持一致', desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新视频。' },
          { title: '灵活创作方式', desc: '支持纯文本提示词和上传参考图两种方式,满足不同用户的创作习惯。' }
        ],
        image:
          'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/7180d53252802aa2e3b3f81e546d7252.png~tplv-2zwwjm3azk-image.image'
      },
      {
        title: '后台管理与配置,灵活可控',
        desc: '后台可以配置提示词示例和灵感广场,支持自定义积分消耗,可自由修改应用在前台显示的名称。提供完整的后台管理功能,满足企业级应用需求。',
        activePoint: 0,
        points: [
          { title: '提示词示例配置', desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛,提升用户体验。' },
          { title: '灵感广场示例', desc: '后台可配置灵感广场的示例视频,为用户提供创作灵感和参考,激发创作灵感。' },
          { title: '生成记录与积分管理', desc: '后台可查看生成记录和积分消耗情况,支持自定义积分消耗,方便运营管理。' },
          { title: '自定义应用名称', desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验,满足个性化需求。' }
        ],
        image: '/product/jimeng-4.png'
      }
    ],
    cta: {
      title: '准备好开始创作 AI 视频了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 视频生成技术带来的无限可能。无需复杂的配置，快速生成风格多样的短视频。'
    }
  },

  // ============================================================
  // 5. jmdraw — 即梦AI 绘画
  // ============================================================
  {
    slug: 'jmdraw',
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
          { title: '纯文本提示词', desc: '支持纯文本提示词来生成图片,只需输入文字描述,即可快速生成高质量图像。' },
          { title: '风格多样', desc: '支持多种图片风格,如写实、卡通、插画等,满足不同场景和创作需求。' },
          { title: '快速生成', desc: '生成速度非常快,大幅缩短等待时间,提升创作效率,让创意快速落地。' },
          { title: '高质量输出', desc: '生成的图片质量高,细节丰富,色彩饱满,满足专业级创作需求。' }
        ],
        image: '/plugin/即梦AI绘画.png'
      },
      {
        title: '图生图,参考图智能融合',
        desc: '上传参考图来生成图片,支持多张图片融合。让创作更加灵活多样,轻松实现从一张图片到多张图片的创意转换。',
        activePoint: 0,
        points: [
          { title: '多图参考输入', desc: '支持上传参考图来生成图片,提供更丰富的创作素材和灵感来源。' },
          { title: '智能图片融合', desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。' },
          { title: '风格保持一致', desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新图片。' },
          { title: '灵活创作方式', desc: '支持纯文本提示词和上传参考图两种方式,满足不同用户的创作习惯。' }
        ],
        image: '/product/jmdraw-2.png'
      },
      {
        title: '后台管理与配置,灵活可控',
        desc: '后台可以配置提示词示例和灵感广场,支持自定义积分消耗,可自由修改应用在前台显示的名称。提供完整的后台管理功能,满足企业级应用需求。',
        activePoint: 0,
        points: [
          { title: '提示词示例配置', desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛,提升用户体验。' },
          { title: '灵感广场示例', desc: '后台可配置灵感广场的示例图片,为用户提供创作灵感和参考,激发创作灵感。' },
          { title: '生成记录与积分管理', desc: '后台可查看生成记录和积分消耗情况,支持自定义积分消耗,方便运营管理。' },
          { title: '自定义应用名称', desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验,满足个性化需求。' }
        ],
        image: '/product/jmdraw-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作 AI 绘画了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 绘画生成技术带来的无限可能。无需复杂的配置，快速生成高质量图像。'
    }
  },

  // ============================================================
  // 6. model — 电商试衣换装
  // ============================================================
  {
    slug: 'model',
    seo: {
      title: '电商试衣换装 - 开源免费的AI模特换装系统 | 智言AI-智言万象',
      description:
        '智言AI-智言万象 电商试衣换装是一款专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术，即可实现「商品一键适配模特上身」与「背景智能替换」两大核心功能，让您的商品在众多竞争者中脱颖而出。基于开源技术构建，提供完整源码与私有化部署支持。',
      keywords:
        '电商试衣,AI换装,AI模特,背景替换,商品主图,电商视觉优化,智言AI,智言万象,AI系统,AI源码,开源代码,试衣换装源码',
      ogTitle: '电商试衣换装 - AI模特多场景切换 | 智言AI-智言万象',
      ogDescription:
        '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。',
      ogImage: '/product/model-1.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: '电商试衣换装 - AI模特多场景切换 | 智言AI-智言万象',
      twitterDescription:
        '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。',
      twitterImage: '/product/model-1.png'
    },
    hero: {
      badge: '电商试衣换装 2.0 发布',
      h1Leading: 'AI模特 ',
      h1Highlight: '多场景切换',
      description:
        '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。<br class="hidden sm:block" />无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。',
      primaryBtn: '开始试衣',
      secondaryBtn: '查看示例',
      demoImage: '/plugin/fashion-ai.png',
      demoAlt: '电商试衣换装展示'
    },
    featuresGrid: {
      title: '全能型电商试衣换装平台',
      description:
        '集智能模特匹配、AI换背景、服装贴合处理、AI生模特、AI生背景图于一体，为您提供一站式电商视觉优化解决方案'
    },
    features: [
      {
        title: '智能模特匹配',
        desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用。',
        icon: 'i-heroicons-user'
      },
      {
        title: 'AI换背景',
        desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择。',
        icon: 'i-heroicons-photo'
      },
      {
        title: '服装贴合处理',
        desc: 'AI自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果。',
        icon: 'i-heroicons-sparkles'
      },
      {
        title: 'AI生模特',
        desc: '通过AI智能生成用户想要的虚拟模特形象，满足个性化需求。',
        icon: 'i-heroicons-face-smile'
      },
      {
        title: 'AI生背景图',
        desc: '通过AI生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换。',
        icon: 'i-heroicons-globe-alt'
      },
      {
        title: '简洁易用',
        desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手。',
        icon: 'i-heroicons-lightning-bolt'
      }
    ],
    featureDetails: [
      {
        title: '智能模特匹配，一键上身',
        desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用。AI自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果。通过AI智能生成用户想要的虚拟模特形象，满足个性化需求。',
        activePoint: 0,
        points: [
          { title: '智能模特匹配', desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用，快速完成模特匹配。' },
          { title: '服装贴合处理', desc: 'AI自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果，真实自然。' },
          { title: 'AI生模特', desc: '通过AI智能生成用户想要的虚拟模特形象，满足个性化需求，打造专属模特。' },
          { title: '批量处理', desc: '支持批量上传服装图片，自动匹配模特并生成上身效果图，大幅提升工作效率。' }
        ],
        image: '/product/model-1.png'
      },
      {
        title: 'AI换背景，多场景切换',
        desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择。通过AI生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换，让商品在众多竞争者中脱颖而出。',
        activePoint: 0,
        points: [
          { title: 'AI换背景', desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择，快速切换背景。' },
          { title: 'AI生背景图', desc: '通过AI生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换，满足多样化需求。' },
          { title: '智能场景识别', desc: 'AI智能识别服装风格，自动推荐最佳背景场景，提升视觉效果和转化率。' },
          { title: '高清输出', desc: '支持高清图片输出，确保商品细节清晰可见，满足电商平台要求。' }
        ],
        image: '/product/model-2.png'
      },
      {
        title: '简洁易用，高效便捷',
        desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手。无需复杂拍摄与高昂成本，通过AI技术，即可实现商品一键适配模特上身与背景智能替换，大幅提升商品主图的吸引力与转化率。',
        activePoint: 0,
        points: [
          { title: '简洁易用', desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手，快速上手。' },
          { title: '一键操作', desc: '无需复杂操作，一键即可完成模特匹配和背景替换，大幅提升工作效率。' },
          { title: '实时预览', desc: '支持实时预览功能，随时查看效果，及时调整优化，确保满意效果。' },
          { title: '云端存储', desc: '支持云端存储，随时随地访问和管理您的商品图片，方便快捷。' }
        ],
        image: '/product/model-3.png'
      }
    ],
    cta: {
      title: '准备好开始试衣换装了吗？',
      description:
        '立即加入 智言万象，体验前沿电商试衣换装技术带来的无限可能。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换，大幅提升商品主图的吸引力与转化率。'
    }
  },

  // ============================================================
  // 7. music — AI 音乐
  // ============================================================
  {
    slug: 'music',
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
      { title: '文本生成', desc: '支持以文本/歌词为输入,快速生成完整歌曲,让创作更简单高效。', icon: 'i-heroicons-document-text' },
      { title: '哼唱生成', desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。', icon: 'i-heroicons-microphone' },
      { title: '乐谱生成', desc: '支持乐谱输入,快速生成音乐作品,满足专业音乐创作需求。', icon: 'i-heroicons-musical-note' },
      { title: '多种输出', desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足不同场景需求。', icon: 'i-heroicons-speaker-wave' },
      { title: '商用授权', desc: '支持个人娱乐与商用配乐,提供完整的商用授权支持。', icon: 'i-heroicons-shield-check' },
      { title: '快速生成', desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。', icon: 'i-heroicons-bolt' }
    ],
    featureDetails: [
      {
        title: '文本生成,文字即刻成曲',
        desc: '支持以文本/歌词为输入,快速生成完整歌曲。降低创作门槛,提升效率,让音乐创作更简单高效。',
        activePoint: 0,
        points: [
          { title: '文本输入', desc: '支持以文本/歌词为输入,只需输入文字描述,即可快速生成完整歌曲。' },
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
          { title: '灵活创作方式', desc: '支持文本、歌词、哼唱、乐谱多种方式,满足不同用户的创作习惯。' }
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
    }
  },

  // ============================================================
  // 8. ppt — AI PPT
  // ============================================================
  {
    slug: 'ppt',
    seo: {
      title: 'AI PPT - 开源免费的智能演示文稿制作工具 | 智言AI-智言万象',
      description:
        '智言AI-智言万象 AI PPT是一款智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化，还可一键生成演讲备注。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。基于开源技术构建，提供完整源码与私有化部署支持。',
      keywords:
        'AI PPT,智能演示文稿,自动生成PPT,模板图表,智能配色,字体搭配,动画效果,智言AI,智言万象,PPT制作工具,开源AI系统,私有化部署,PPT源码',
      ogTitle: 'AI PPT - 一键直出幻灯片 | 智言AI-智言万象',
      ogDescription:
        '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。',
      ogImage: '/plugin/aippt.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: 'AI PPT - 一键直出幻灯片 | 智言AI-智言万象',
      twitterDescription:
        '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，显著提升制作效率与视觉表现力。',
      twitterImage: '/plugin/aippt.png'
    },
    hero: {
      badge: 'AI PPT 2.0 发布',
      h1Leading: '一键直出 ',
      h1Highlight: '幻灯片',
      description:
        '智能演示文稿制作工具，根据主题或大纲自动生成 PPT。<br class="hidden sm:block" />内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。',
      primaryBtn: '开始制作',
      secondaryBtn: '查看示例',
      demoImage: '/plugin/aippt.png',
      demoAlt: 'AI PPT展示'
    },
    featuresGrid: {
      title: '全能型 AI PPT 制作平台',
      description: '集智能生成、模板图表、智能配色、字体搭配、动画效果于一体，为您提供一站式演示文稿制作解决方案'
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
        icon: 'i-heroicons-font'
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
          { title: '主题自动生成', desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，大幅提升制作效率。' },
          { title: '智能内容扩展', desc: '基于 AI 算法，自动扩展和优化内容，确保演示文稿内容丰富、逻辑清晰。' },
          { title: '快速导出', desc: '支持快速导出多种格式，大幅缩短等待时间，提升创作效率。' },
          { title: '高质量输出', desc: '生成的 PPT 质量高，设计美观，结构清晰，满足专业级创作需求。' }
        ],
        image: '/plugin/aippt.png'
      },
      {
        title: '模板图表，专业设计',
        desc: '内置多种模板与图表，满足不同场景需求。支持智能配色、字体搭配与动画效果优化，让您的演示文稿更加专业美观。',
        activePoint: 0,
        points: [
          { title: '丰富模板库', desc: '内置多种模板与图表，涵盖商务、教育、科技等多个领域，满足不同场景需求。' },
          { title: '智能配色', desc: '支持智能配色方案，自动匹配最佳色彩组合，提升视觉表现力。' },
          { title: '字体搭配', desc: '智能推荐字体搭配方案，确保排版美观专业，提升阅读体验。' },
          { title: '动画效果', desc: '支持动画效果优化，让演示更加生动有趣，增强观众参与感。' }
        ],
        image: '/plugin/aippt.png'
      },
      {
        title: '演讲备注，掌控全场',
        desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容。支持多种输出格式，满足不同场景需求。',
        activePoint: 0,
        points: [
          { title: '智能备注生成', desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容，提升演讲效果。' },
          { title: '多种输出格式', desc: '支持多种输出格式，如 PDF、PPTX 等，满足不同场景需求。' },
          { title: '实时预览', desc: '支持实时预览功能，随时查看演示效果，及时调整优化。' },
          { title: '云端存储', desc: '支持云端存储，随时随地访问和编辑您的演示文稿。' }
        ],
        image: '/plugin/aippt.png'
      }
    ],
    cta: {
      title: '准备好开始制作 PPT 了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI PPT 技术带来的无限可能。根据主题或大纲自动生成 PPT，内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。'
    }
  },

  // ============================================================
  // 9. resume — AI 简历
  // ============================================================
  {
    slug: 'resume',
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
      description: '集智能问答、简历模板、在线编辑、模块管理、AI分析于一体，为您提供一站式简历制作解决方案'
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
          { title: '智能问答', desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。' },
          { title: '快速生成', desc: '通过简单的基本信息输入，即可快速生成结构完整的个人简历，大幅提升制作效率。' },
          { title: '内容优化', desc: '基于AI算法，自动优化简历内容，确保语言表达专业、逻辑清晰。' },
          { title: '多格式导出', desc: '支持多种格式导出，如 PDF、Word 等，满足不同投递需求。' }
        ],
        image: '/plugin/AI简历.png'
      },
      {
        title: '简历模板，专业设计',
        desc: '提供数十款专业简历模板，涵盖不同行业和职位。支持在线编辑与下载，实时预览效果，随时调整优化内容。',
        activePoint: 0,
        points: [
          { title: '丰富模板库', desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。' },
          { title: '在线编辑', desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。' },
          { title: '模块管理', desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。' },
          { title: '自定义样式', desc: '支持自定义简历样式，包括字体、颜色、布局等，打造个性化简历。' }
        ],
        image: '/plugin/AI简历.png'
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
        image: '/product/resume-3.png'
      }
    ],
    cta: {
      title: '准备好开始制作简历了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 简历技术带来的无限可能。通过简单的基本信息输入，即可快速生成结构完整的个人简历，显著提升简历质量与影响力。'
    }
  },

  // ============================================================
  // 10. sora — Sora 视频
  // ============================================================
  {
    slug: 'sora',
    seo: {
      title: 'Sora 视频生成引擎 - 开源免费的 AI 视频创作系统 | 智言万象',
      description:
        '智言万象 Sora 视频生成平台提供一站式 AI 视频创作解决方案。支持高质量文生视频、图生视频及长视频生成。基于开源 Sora 技术构建，提供 Sora 源码与私有化部署支持，助力企业低成本打造专属 AI 视频应用。',
      keywords:
        'Sora,Sora视频,Sora源码,AI视频生成,文生视频,视频生成模型,智言万象,开源AI系统,私有化部署,OpenAI Sora,视频大模型',
      ogTitle: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | 智言万象',
      ogDescription:
        '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台，提供完整源码，让创意无限延伸。',
      ogImage: '/product/sora.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | 智言万象',
      twitterDescription:
        '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台。',
      twitterImage: '/product/sora.png'
    },
    hero: {
      badge: 'Sora 视频生成引擎 2.0 发布',
      h1Leading: '打造您的 ',
      h1Highlight: '专属 AI 视频世界',
      description:
        '新一代 Sora 视频生成平台，一键生成电影级视频。<br class="hidden sm:block" />让创意无限延伸，让画面栩栩如生，开启智能视频创作新时代。',
      primaryBtn: '开始构建',
      secondaryBtn: '查看案例',
      demoImage: '/plugin/Sora2短剧视频创作.png',
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
          { title: '导演级镜头控制', desc: '在提示词中描述运动方式、景别和情绪，Sora 按导演意图生成连贯镜头。' },
          { title: '复杂场景一键拆分', desc: '长文案自动拆分为多个镜头片段，逐段驱动 Sora 生成，同时保持人物与场景一致。' },
          { title: '风格与角色可复用', desc: '支持固定角色、画风与色调，沉淀品牌专属视觉资产，持续迭代系列内容。' },
          { title: '结构化脚本适配', desc: '支持导入分镜脚本或大纲，按段落驱动 Sora 生成对应场景，清晰映射创意结构。' }
        ],
        image: '/product/sora-1.png'
      },
      {
        title: '图生视频：让静态素材在 Sora 中"活"起来',
        desc: '针对电商海报、产品渲染图、分镜草图优化的图生视频能力，让原有设计资产在 Sora 中快速变成动态画面。',
        activePoint: 0,
        points: [
          { title: '单图到多镜头视频', desc: '上传单张图片，在 Sora 中生成多视角运动镜头，营造环绕、推进等丰富空间感。' },
          { title: '多图场景串联', desc: '将多张草图或分镜图串联为连贯故事视频，自动补足中间过渡镜头。' },
          { title: '镜头运动与构图预设', desc: '内置多种镜头运动与构图模板，一键应用，即可获得专业感十足的动效画面。' },
          { title: '品牌素材资产化', desc: '将已有 KV、海报和 IP 角色在 Sora 中扩展为系列短视频内容。' }
        ],
        image: '/product/sora-2.png'
      },
      {
        title: 'Sora 视频增强与编辑：从出片到成片一站打通',
        desc: '内置围绕 Sora 生成素材的增强与轻量编辑能力，从清晰度、节奏到字幕配音，帮助团队快速产出可直接投放的成片。',
        activePoint: 0,
        points: [
          { title: '面向大屏的画质增强', desc: '对 Sora 生成素材进行分辨率提升与细节补偿，保证在大屏与高清场景中依然细腻。' },
          { title: '节奏与时长精细调节', desc: '结合时间轴工具控制镜头节奏与停留时长，让画面节奏与文案、配乐高度对齐。' },
          { title: '配音与字幕一体化', desc: '与 智言万象 语音、字幕能力集成，一键生成多语种配音与字幕轨道，降低后期成本。' },
          { title: '多渠道发布适配', desc: '按平台比例与时长导出多版本视频，覆盖短视频平台、官网与线下大屏等多种发布场景。' }
        ],
        image: '/product/sora-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
    }
  },

  // ============================================================
  // 11. videoclip — 视频混剪助手
  // ============================================================
  {
    slug: 'videoclip',
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
      description: '集批量剪辑、智能转场、滤镜调色、字幕添加、背景音乐于一体,为您提供一站式视频剪辑解决方案'
    },
    features: [
      { title: '批量剪辑', desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。', icon: 'i-heroicons-film' },
      { title: '智能转场', desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。', icon: 'i-heroicons-sparkles' },
      { title: '滤镜调色', desc: '提供丰富的滤镜和调色功能,一键美化视频画面,打造专业视觉效果。', icon: 'i-heroicons-adjustments-horizontal' },
      { title: '字幕添加', desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。', icon: 'i-heroicons-closed-captioning' },
      { title: '背景音乐', desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。', icon: 'i-heroicons-musical-note' },
      { title: '海量模板', desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。', icon: 'i-heroicons-rectangle-stack' }
    ],
    featureDetails: [
      {
        title: '批量剪辑,效率倍增',
        desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容。',
        activePoint: 0,
        points: [
          { title: '自动化批量剪辑', desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。' },
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
          { title: '多种转场风格', desc: '支持多种转场风格,如淡入淡出、滑动、缩放等,满足不同场景需求。' },
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
          { title: '智能字幕添加', desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。' },
          { title: '背景音乐匹配', desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。' },
          { title: '海量模板与素材库', desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。' }
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
  },

  // ============================================================
  // 12. xhs — 小红书助手
  // ============================================================
  {
    slug: 'xhs',
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
          { title: '爆款标题自动生成', desc: '基于小红书平台爆款笔记数据分析,自动生成高点击率标题,提升笔记曝光量。' },
          { title: '风格化推广文案', desc: '支持多种文案风格,如种草风、测评风、教程风等,满足不同内容创作需求。' },
          { title: '产品信息智能提取', desc: '输入产品名称或链接,自动提取关键信息,快速生成符合小红书调性的推广文案。' },
          { title: '多版本文案生成', desc: '一次生成多个版本文案,支持对比选择,找到最适合的表达方式。' }
        ],
        image: '/product/xiaohongshu.png'
      },
      {
        title: 'AI 生成配图与视频封面,提升视觉吸引力',
        desc: '根据文案智能推荐图片风格与构图,一键生成高质量配图和视频封面。让您的笔记在视觉上更具吸引力,提升用户点击率和互动率。',
        activePoint: 0,
        points: [
          { title: '智能风格推荐', desc: '根据文案内容和目标受众,智能推荐最适合的图片风格,如清新、复古、简约等。' },
          { title: '构图优化建议', desc: 'AI 分析小红书热门图片构图,提供专业构图建议,让配图更具吸引力。' },
          { title: '一键生成配图', desc: '基于文案内容,一键生成高质量配图,无需专业设计技能,快速完成视觉创作。' },
          { title: '视频封面制作', desc: '支持制作视频封面,适配小红书视频笔记格式,提升视频内容的点击率。' }
        ],
        image: '/product/xhs-2.png'
      },
      {
        title: '智能标签与历史管理,提升运营效率',
        desc: '根据内容自动生成并推荐相关话题与热门标签,永久保存历史记录,支持草稿编辑与复用。实现内容创作与流量变现的高效结合。',
        activePoint: 0,
        points: [
          { title: '智能标签推荐', desc: '根据内容自动生成并推荐相关话题与热门标签,提升笔记曝光率与互动量。' },
          { title: '历史记录管理', desc: '永久保存历史记录,支持草稿编辑与复用,方便内容迭代与优化。' },
          { title: '排版效果预览', desc: '在线查看生成文案在小红书 App 内的真实排版效果,所见即所得。' },
          { title: '自定义收费设置', desc: '后台自定义设置模型计费,灵活配置价格策略,满足不同商业需求。' }
        ],
        image: '/product/xhs-3.png'
      }
    ],
    cta: {
      title: '准备好开始创作了吗？',
      description:
        '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
    }
  }
]

/**
 * 根据 slug 查找产品数据
 */
export function getProductBySlug(slug: string): ProductPageData | undefined {
  return products.find((p) => p.slug === slug)
}

/**
 * 所有产品 slug 列表
 */
export const productSlugs = products.map((p) => p.slug)
