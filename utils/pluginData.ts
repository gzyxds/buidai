import {
  Video as VideoIcon,
  Palette as PaletteIcon,
  FileText as FileTextIcon,
  GitBranch as GitBranchIcon,
  User as UserIcon,
  PenTool as PenToolIcon,
  MonitorPlay as PresentationIcon,
  FileSignature as FileSignatureIcon,
  ShoppingBag as ShoppingBagIcon,
  Tv as TvIcon,
  BookOpen as BookOpenIcon,
  MapPin as MapPinIcon,
  Image as ImageIcon,
  Film as FilmIcon,
  Trophy as TrophyIcon,
  Copy as CopyIcon,
  Shirt as ShirtIcon,
  Scissors as ScissorsIcon,
  ImagePlus as ImagePlusIcon
} from 'lucide-vue-next'

/**
 * 应用数据接口定义
 */
export interface AppData {
  id: number
  name: string
  description: string
  icon: any
  image: string
  category: string
  originalPrice: number
  discountPrice: number
  date: string
}

/**
 * 分类数据接口定义
 */
export interface Category {
  id: string
  name: string
}

export const categories: Category[] = [
  { id: 'all', name: '全部应用' },
  { id: 'recommend', name: '官方推荐' },
  { id: 'independent', name: '独立系统' },
  { id: 'extension', name: '扩展应用' },
  { id: 'video', name: '图像视频' },
  { id: 'writing', name: '智能写作' },
  { id: 'enterprise', name: '企业工具' },
  { id: 'efficiency', name: '效率工具' }
]

export const apps: AppData[] = [
  {
    id: 0,
    name: 'BuidAl部署服务',
    description: '官方技术专家，帮您部署 BuildAl 平台框架，支持本地部署或服务器部署',
    icon: VideoIcon,
    image: '/images/部署服务.png',
    category: 'video',
    originalPrice: 1398.00,
    discountPrice: 500.00,
    date: '2025/11/14'
  },
    {
    id: 1,
    name: 'Sora2短剧视频创作',
    description: 'Sora2短剧视频创作是一款聚焦高效优质短剧创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创意转化为精彩视频。',
    icon: VideoIcon,
    image: '/plugin/Sora2短剧视频创作.png',
    category: 'video',
    originalPrice: 1398.00,
    discountPrice: 699.00,
    date: '2025/11/14'
  },
  {
    id: 2,
    name: 'Nanobanana',
    description: '香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性。',
    icon: PaletteIcon,
    image: '/plugin/Nanobanana.png',
    category: 'video',
    originalPrice: 1398.00,
    discountPrice: 699.00,
    date: '2025/11/14'
  },
  {
    id: 3,
    name: 'AI简历',
    description: 'AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。',
    icon: FileTextIcon,
    image: '/plugin/AI简历.png',
    category: 'efficiency',
    originalPrice: 1598.00,
    discountPrice: 799.00,
    date: '2025/11/14'
  },
  {
    id: 4,
    name: '思维导图',
    description: '各种结构的思维导图，支持自由导图样式，修改前台显示名称，帮助您理清思路，激发创意。',
    icon: GitBranchIcon,
    image: '/plugin/思维导图.png',
    category: 'efficiency',
    originalPrice: 899.00,
    discountPrice: 499.00,
    date: '2025/11/14'
  },
  {
    id: 5,
    name: 'AI证件照',
    description: '各种证件照类型，尺寸自定义，生成图片导出。无需跑照相馆，在家即可轻松制作专业证件照。',
    icon: UserIcon,
    image: '/plugin/AI证件照.png',
    category: 'video',
    originalPrice: 599.00,
    discountPrice: 299.00,
    date: '2025/11/14'
  },
  {
    id: 6,
    name: '智能写作助手',
    description: '在线编辑，支持AI改写，自定义模板助手。无论是文案创作还是日常写作，都能助您一臂之力。',
    icon: PenToolIcon,
    image: '/plugin/智能写作助手.png',
    category: 'writing',
    originalPrice: 999.00,
    discountPrice: 499.00,
    date: '2025/11/14'
  },
  {
    id: 7,
    name: 'AI PPT',
    description: '智能生成PPT，一键排版，海量模板，让演示更出彩。告别繁琐的排版工作，专注于内容创作。',
    icon: PresentationIcon,
    image: '/plugin/aippt.png',
    category: 'efficiency',
    originalPrice: 1299.00,
    discountPrice: 599.00,
    date: '2025/11/15'
  },
  {
    id: 8,
    name: 'AI合同',
    description: '智能合同审查与生成，降低法律风险，提高签约效率。专业的法律助手，为您的商业合作保驾护航。',
    icon: FileSignatureIcon,
    image: '/plugin/AI合同.png',
    category: 'enterprise',
    originalPrice: 2999.00,
    discountPrice: 1499.00,
    date: '2025/11/15'
  },
  {
    id: 9,
    name: 'AI商图秀',
    description: '电商主图智能生成，模特替换，场景合成，提升点击率。无需专业摄影，也能制作出高质量的商品展示图。',
    icon: ShoppingBagIcon,
    image: '/plugin/AI商图秀.png',
    category: 'video',
    originalPrice: 899.00,
    discountPrice: 399.00,
    date: '2025/11/15'
  },
  {
    id: 10,
    name: 'AI直播短视频数字人',
    description: '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
    icon: TvIcon,
    image: '/plugin/AI直播短视频数字人.png',
    category: 'video',
    originalPrice: 3999.00,
    discountPrice: 1999.00,
    date: '2025/11/15'
  },
  {
    id: 11,
    name: 'AI短剧小说创作',
    description: '辅助短剧剧本创作，小说续写，激发创作灵感。从灵感到剧本，AI全程陪伴，让创作变得简单有趣。',
    icon: BookOpenIcon,
    image: '/plugin/AI短剧小说创作.png',
    category: 'writing',
    originalPrice: 699.00,
    discountPrice: 349.00,
    date: '2025/11/15'
  },
  {
    id: 12,
    name: 'GEO优化排名工具',
    description: '基于地理位置的SEO优化工具，提升本地搜索排名。精准锁定目标客户，让生意自动找上门。',
    icon: MapPinIcon,
    image: '/plugin/GEO优化排名工具.png',
    category: 'enterprise',
    originalPrice: 1599.00,
    discountPrice: 799.00,
    date: '2025/11/15'
  },
  {
    id: 13,
    name: '即梦AI绘画',
    description: '文本生成图片，艺术创作，风格迁移，释放你的想象力。无论是二次元还是写实风，都能轻松驾驭。',
    icon: ImageIcon,
    image: '/plugin/即梦AI绘画.png',
    category: 'video',
    originalPrice: 999.00,
    discountPrice: 499.00,
    date: '2025/11/15'
  },
  {
    id: 14,
    name: '即梦AI视频',
    description: '文本生成视频，静态图转视频，轻松制作创意短片。让静态的画面动起来，讲述更生动的故事。',
    icon: FilmIcon,
    image: '/plugin/即梦AI视频.png',
    category: 'video',
    originalPrice: 1499.00,
    discountPrice: 749.00,
    date: '2025/11/15'
  },
  {
    id: 15,
    name: '大模型擂台',
    description: '主流大模型能力评测与对比，助你选择最适合的模型。客观公正的评测数据，助您做出明智的技术选型。',
    icon: TrophyIcon,
    image: '/plugin/大模型擂台.png',
    category: 'enterprise',
    originalPrice: 1198.00,
    discountPrice: 1198.00,
    date: '2025/11/15'
  },
  {
    id: 16,
    name: '小红书内容复刻',
    description: '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
    icon: CopyIcon,
    image: '/plugin/小红书内容复刻.png',
    category: 'writing',
    originalPrice: 1398.00,
    discountPrice: 1398.00,
    date: '2025/11/15'
  },
  {
    id: 17,
    name: '模绘衣境',
    description: 'AI服装设计与展示，虚拟试衣，缩短设计周期。无需制作样衣，即可预览穿着效果，降低设计成本。',
    icon: ShirtIcon,
    image: '/plugin/模绘衣境.png',
    category: 'video',
    originalPrice: 1999.00,
    discountPrice: 999.00,
    date: '2025/11/15'
  },
  {
    id: 18,
    name: '热门视频混剪',
    description: '智能抓取热门素材，自动混剪，快速生成短视频。紧跟热点趋势，轻松制作出爆款短视频。',
    icon: ScissorsIcon,
    image: '/plugin/热门视频混剪.png',
    category: 'video',
    originalPrice: 899.00,
    discountPrice: 449.00,
    date: '2025/11/15'
  },
  {
    id: 19,
    name: '爆款文章自动配图',
    description: '根据文章内容自动匹配高质量图片，提升阅读体验。图文并茂，让您的文章更具吸引力。',
    icon: ImagePlusIcon,
    image: '/plugin/爆款文章自动配图.png',
    category: 'writing',
    originalPrice: 998.00,
    discountPrice: 998.00,
    date: '2025/11/15'
  },
  {
    id: 20,
    name: 'AI音乐',
    description: 'AI音乐是一款以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，旨在降低门槛、提升效率，支持个人娱乐与商用配乐的“人机协同”',
    icon: PaletteIcon,
    image: '/plugin/AI音乐.png',
    category: 'video',
    originalPrice: 1399.00,
    discountPrice: 1399.00,
    date: '2025/12/27'
  },
  {
    id: 50,
    name: '企业全能AI知识库「PHP源码版」',
    description: '全能AI知识库系统PHP版，基于前后端分离架构以及Vue3、uni-app、SpringBoot2.5技术栈',
    icon: BookOpenIcon,
    image: '/plugin/work.webp',
    category: 'independent',
    originalPrice: 6800.00,
    discountPrice: 4999.00,
    date: '2025/12/20'
  },
  {
    id: 51,
    name: '超级IP数字人SaaS系统「PHP源码版」',
    description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成',
    icon: TvIcon,
    image: '/plugin/saas.webp',
    category: 'independent',
    originalPrice: 9800.00,
    discountPrice: 6600.00,
    date: '2025/12/20'
  },
  {
    id: 52,
    name: '艺创AI聊天绘画系统「PHP源码版」',
    description: '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广',
    icon: PaletteIcon,
    image: '/plugin/ai.webp',
    category: 'independent',
    originalPrice: 3800.00,
    discountPrice: 2999.00,
    date: '2025/12/20'
  },
  {
    id: 53,
    name: '艺创AI论文写作系统「PHP源码版」',
    description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲',
    icon: PenToolIcon,
    image: '/plugin/lw.svg',
    category: 'independent',
    originalPrice: 4698.00,
    discountPrice: 3200.00,
    date: '2025/12/20'
  }
]
