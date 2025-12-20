/**
 * 应用数据接口定义
 */
export interface AppData {
  name: string
  description: string
  image: string
}

export const apps: AppData[] = [
  {
    name: 'Sora2短剧视频创作',
    description: 'Sora2短剧视频创作是一款聚焦高效优质短剧创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创意转化为精彩视频。',
    image: '/plugin/Sora2短剧视频创作.png'
  },
  {
    name: 'Nanobanana',
    description: '香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性。',
    image: '/plugin/Nanobanana.png'
  },
  {
    name: 'AI简历',
    description: 'AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。',
    image: '/plugin/AI简历.png'
  },
  {
    name: '思维导图',
    description: '各种结构的思维导图，支持自由导图样式，修改前台显示名称，帮助您理清思路，激发创意。',
    image: '/plugin/思维导图.png'
  },
  {
    name: 'AI证件照',
    description: '各种证件照类型，尺寸自定义，生成图片导出。无需跑照相馆，在家即可轻松制作专业证件照。',
    image: '/plugin/AI证件照.png'
  },
  {
    name: '智能写作助手',
    description: '在线编辑，支持AI改写，自定义模板助手。无论是文案创作还是日常写作，都能助您一臂之力。',
    image: '/plugin/智能写作助手.png'
  },
  {
    name: 'AI PPT',
    description: '智能生成PPT，一键排版，海量模板，让演示更出彩。告别繁琐的排版工作，专注于内容创作。',
    image: '/plugin/aippt.png'
  },
  {
    name: 'AI合同',
    description: '智能合同审查与生成，降低法律风险，提高签约效率。专业的法律助手，为您的商业合作保驾护航。',
    image: '/plugin/AI合同.png'
  },
  {
    name: 'AI商图秀',
    description: '电商主图智能生成，模特替换，场景合成，提升点击率。无需专业摄影，也能制作出高质量的商品展示图。',
    image: '/plugin/AI商图秀.png'
  },
  {
    name: 'AI直播短视频数字人',
    description: '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
    image: '/plugin/AI直播短视频数字人.png'
  },
  {
    name: 'AI短剧小说创作',
    description: '辅助短剧剧本创作，小说续写，激发创作灵感。从灵感到剧本，AI全程陪伴，让创作变得简单有趣。',
    image: '/plugin/AI短剧小说创作.png'
  },
  {
    name: 'GEO优化排名工具',
    description: '基于地理位置的SEO优化工具，提升本地搜索排名。精准锁定目标客户，让生意自动找上门。',
    image: '/plugin/GEO优化排名工具.png'
  },
  {
    name: '即梦AI绘画',
    description: '文本生成图片，艺术创作，风格迁移，释放你的想象力。无论是二次元还是写实风，都能轻松驾驭。',
    image: '/plugin/即梦AI绘画.png'
  },
  {
    name: '即梦AI视频',
    description: '文本生成视频，静态图转视频，轻松制作创意短片。让静态的画面动起来，讲述更生动的故事。',
    image: '/plugin/即梦AI视频.png'
  },
  {
    name: '大模型擂台',
    description: '主流大模型能力评测与对比，助你选择最适合的模型。客观公正的评测数据，助您做出明智的技术选型。',
    image: '/plugin/大模型擂台.png'
  },
  {
    name: '小红书内容复刻',
    description: '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
    image: '/plugin/小红书内容复刻.png'
  },
  {
    name: '模绘衣境',
    description: 'AI服装设计与展示，虚拟试衣，缩短设计周期。无需制作样衣，即可预览穿着效果，降低设计成本。',
    image: '/plugin/模绘衣境.png'
  },
  {
    name: '热门视频混剪',
    description: '智能抓取热门素材，自动混剪，快速生成短视频。紧跟热点趋势，轻松制作出爆款短视频。',
    image: '/plugin/热门视频混剪.png'
  },
  {
    name: '豆包最强视频生成模型',
    description: '豆包最强视频生成模型，基于豆包大模型，提供强大的视频生成能力。',
    image: '/plugin/豆包视频生成模型.jpg'
  },
  {
    name: '营销素材生成',
    description: '批量高效生成广告素材，全面适配产品推广、品牌塑造及活动营销。',
    image: '/plugin/营销素材.jpg'
  },
  {
    name: '影视作品生成',
    description: '电影、动漫等影视制作场景，可支持影视作品图或者宣发海报等物料制作。',
    image: '/plugin/影视作品生成.jpg'
  },
  {
    name: '爆款文章自动配图',
    description: '根据文章内容自动匹配高质量图片，提升阅读体验。图文并茂，让您的文章更具吸引力。',
    image: '/plugin/爆款文章自动配图.png'
  }
]
