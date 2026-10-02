import type { Product } from '../types'

/**
 * 产品实体：打造您的 专属数字分身
 */
const product: Product = {
  slug: 'human',
  /** 显示名 */
  name: '打造您的 专属数字分身',
  /** 通用短描述（阶段 3 合并市场/演示视图时再行精简） */
  description:
    '智言AI-智言万象 数字人平台提供一站式 AI 虚拟形象解决方案。支持 4K 超清画质、5 秒声音克隆、多语种合成及 SSML 语音标记。基于开源技术构建，私有化部署首选，助力企业低成本打造专属数字分身。',
  /** 图标名 */
  icon: 'i-lucide-tv',
  /** 封面图 */
  image: '/plugin/AI直播短视频数字人.webp',
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
        {
          title: '4K 超清画质',
          desc: '采用影院级渲染引擎，支持 4K 分辨率输出，发丝级细节清晰可见，为您呈现最真实的视觉体验。'
        },
        {
          title: '表情自然生动',
          desc: '基于深度学习的情感驱动算法，精准捕捉面部微表情，让数字人的喜怒哀乐如真人般自然流露。'
        },
        {
          title: '动作流畅逼真',
          desc: '融合动作捕捉与运动生成技术，肢体语言丰富协调，拒绝僵硬机械感，交互表现更具亲和力。'
        },
        {
          title: '支持多种服饰替换',
          desc: '内置海量服装库，支持一键换装，满足商务、休闲、国潮等多种场景需求，打造百变形象。'
        }
      ],
      image: '/product/human-1.png'
    },
    {
      title: '声音克隆，复刻完美声线',
      desc: '有声播报、个性体验，仅需 1 句话，快速克隆你的音色，配合文案即可生成专属口播语音！',
      activePoint: 0,
      points: [
        {
          title: '5秒快速克隆',
          desc: '仅需录制 5 秒有效语音，即可快速提取声纹特征，生成高保真个人音色模型，即刻拥有专属 AI 语音。'
        },
        {
          title: '情感丰富多变',
          desc: '支持快乐、悲伤、愤怒、激动等多种情感风格合成，让语音表达更加生动富有感染力，拒绝平铺直叙。'
        },
        {
          title: '支持多语种合成',
          desc: '打通语言壁垒，支持中、英、日、韩等 20+ 种语言混合合成，轻松实现内容的全球化传播与分发。'
        },
        {
          title: '跨语言音色保持',
          desc: '即使跨越不同语言，也能完美保留说话人的原始音色特征，实现"原声"外语播报，亲切感不打折。'
        }
      ],
      image: '/product/human-2.png'
    },
    {
      title: '声音合成，文字即刻发声',
      desc: '视频配音、IP 专属声音，高度还原真人音色，不仅情感丰富，而且可以自由调整语速，配合数字分身创建出您的专属数字人！',
      activePoint: 0,
      points: [
        {
          title: '海量音色库',
          desc: '内置 1000+ 精品音色，涵盖新闻播音、有声阅读、二次元、方言等多种风格，满足全场景配音需求。'
        },
        {
          title: '情绪参数调节',
          desc: '支持对音高、语速、停顿、音量等参数进行精细化调节，像导演一样掌控语音的每一个细节。'
        },
        {
          title: '多角色对话生成',
          desc: '支持在同一段文本中插入不同角色音色，一键生成多人对话场景，非常适用于广播剧、有声书制作。'
        },
        {
          title: 'SSML 标记支持',
          desc: '完整支持 SSML 语音合成标记语言，通过代码精确控制发音、重音和韵律，实现专业级语音合成效果。'
        }
      ],
      image: '/product/human-3.png'
    }
  ],
  cta: {
    title: '准备好开始创作了吗？',
    description:
      '立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。'
  },
  /** 市场视图（原 pluginData 数字 id: 11） */
  market: {
    id: 11,
    /** 市场视图专属文案（营销口吻） */
    description:
      '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
    category: 'video',
    originalPrice: 1999,
    discountPrice: 1999,
    date: '2025/11/15'
  },
  /** 演示视图（原 demoProducts id: human） */
  demo: {
    status: 'online',
    category: 'extension',
    /** 演示视图显示名 */
    title: 'AI直播短视频数字人',
    /** 演示视图副标题 */
    subtitle: '7x24小时无人直播',
    /** 演示视图专属描述 */
    description:
      '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
    /** 演示视图图标 */
    icon: 'i-heroicons-user',
    /** 演示视图封面 */
    image: '/plugin/AI直播短视频数字人.webp',
    /** 演示视图标签 */
    tags: ['数字人', '无人直播', '短视频'],
    features: ['7x24小时直播', '数字人带货', '低成本', '高回报', '超级主播'],
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
      },
      {
        title: 'H5演示',
        icon: 'i-heroicons-device-phone-mobile',
        url: 'https://www.gmlart.cn/',
        account: '自行注册',
        password: '自行注册'
      }
    ]
  }
}

export default product
