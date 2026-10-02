/** 默认产品图片路径 */
export const DEFAULT_PRODUCT_IMAGE = '/images/buidai.webp'

/** 状态文本映射 */
const STATUS_TEXT_MAP: Record<string, string> = {
  online: '已上线',
  beta: 'Beta',
  coming: '即将上线'
}

/** 状态样式类映射 */
const STATUS_CLASS_MAP: Record<string, string> = {
  online: 'bg-green-500 text-white',
  beta: 'bg-indigo-500 text-white',
  coming: 'bg-neutral-400 text-white'
}

export function getStatusText(status: string): string {
  return STATUS_TEXT_MAP[status] || status
}

export function getStatusClass(status: string): string {
  return STATUS_CLASS_MAP[status] || 'bg-neutral-400 text-white'
}

/** 产品图片缺失时回退到默认图 */
export function getProductImageUrl(path: string | undefined): string {
  return path || DEFAULT_PRODUCT_IMAGE
}

/** 图片加载失败时替换为默认图 */
export function handleImageError(event: Event): void {
  const img = event.target as HTMLImageElement
  if (img) {
    img.src = DEFAULT_PRODUCT_IMAGE
  }
}

/**
 * 演示平台接口定义
 * @property title - 平台名称
 * @property icon - 平台图标组件
 * @property url - 演示链接
 * @property account - 演示账号
 * @property password - 演示密码
 */
export interface DemoPlatform {
  title: string
  icon: string
  url: string
  account: string
  password: string
}

/**
 * 产品演示接口定义
 * @property id - 产品唯一标识
 * @property title - 产品名称
 * @property subtitle - 产品副标题
 * @property description - 产品描述
 * @property icon - 产品图标组件
 * @property image - 产品封面图
 * @property status - 产品状态
 * @property tags - 产品标签
 * @property features - 产品核心功能
 * @property platforms - 演示平台列表
 */
export interface ProductDemo {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  image: string
  status: 'online' | 'beta' | 'coming'
  tags: string[]
  features: string[]
  platforms: DemoPlatform[]
}

/**
 * 产品分类接口定义
 * @property id - 分类唯一标识
 * @property name - 分类名称
 * @property icon - 分类图标组件
 * @property products - 该分类下的产品列表
 */
export interface ProductCategory {
  id: string
  name: string
  icon: string
  products: ProductDemo[]
}

/**
 * 产品分类数据
 * 参考 pluginData.ts 的分类方式
 */
export const categories: ProductCategory[] = [
  {
    id: 'independent',
    name: '独立系统',
    icon: 'i-heroicons-shopping-bag',
    products: [

      {
        id: 'knowledge-base',
        title: '企业全能AI',
        subtitle: '智能文档问答系统',
        description: '能够自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。支持多种文档格式，实现企业知识的高效管理与检索。',
        icon: 'i-heroicons-book-open',
        image: '/plugin/work.webp',
        status: 'online',
        tags: ['文档解析', '向量索引', '智能问答'],
        features: ['文档自动解析', '向量索引构建', '精准问答', '多格式支持', '权限管理'],
        platforms: [
          { title: '演示前台', icon: 'i-heroicons-computer-desktop', url: 'https://www.cnai.art', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.cnai.art/admin', account: 'admin', password: '123456' },
          { title: 'API文档', icon: 'i-heroicons-document-text', url: 'https://www.cnai.art/doc', account: '联系客服', password: '联系客服' },
          { title: '移动端', icon: 'i-heroicons-device-phone-mobile', url: 'https://www.cnai.art/mobile', account: '联系客服', password: '联系客服' }
        ]
      },
      {
        id: 'digital-human-saas',
        title: '超级IP数字人',
        subtitle: 'PHP源码版',
        description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
        icon: 'i-heroicons-user',
        image: '/plugin/saas.webp',
        status: 'online',
        tags: ['PHP源码', '数字人', 'SaaS系统'],
        features: ['真人声音克隆', '形象克隆', '一键合成', 'SaaS架构', '源码交付'],
        platforms: [
          { title: '演示前台', icon: 'i-heroicons-computer-desktop', url: 'https://v.cnai.art/', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://demo.cnai.art/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: 'i-heroicons-device-phone-mobile', url: 'https://v.cnai.art/mobile/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'yichuang-ai',
        title: 'AI聊天绘画',
        subtitle: 'PHP源码版',
        description: '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广。',
        icon: 'i-heroicons-photo',
        image: '/plugin/ai.webp',
        status: 'online',
        tags: ['PHP源码', 'AI对话', 'AI绘画'],
        features: ['AI智能对话', 'AI绘画', '创作模型', '分销推广', '源码交付'],
        platforms: [
          { title: '演示前台', icon: 'i-heroicons-computer-desktop', url: 'https://cnai.art/', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://chat-demo.chatmoney.cn/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: 'i-heroicons-device-phone-mobile', url: 'https://cnai.art/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'yichuang-paper',
        title: '艺创AI论文写作',
        subtitle: 'PHP源码版',
        description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲。',
        icon: 'i-heroicons-document-text',
        image: '/plugin/lw.svg',
        status: 'online',
        tags: ['PHP源码', '论文写作', 'AI生成'],
        features: ['快速生成', '主题大纲', '长文写作', 'AI辅助', '源码交付'],
        platforms: [
          { title: '演示前台', icon: 'i-heroicons-computer-desktop', url: 'https://paper.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://paper.gmlart.cn/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: 'i-heroicons-device-phone-mobile', url: 'https://paper.gmlart.cn/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'zhiyan-ai-deploy',
        title: '智言AI框架部署服务',
        subtitle: '官方技术专家部署服务',
        description: '官方技术专家，帮您部署智言AI平台框架，支持本地部署或服务器部署。',
        icon: 'i-heroicons-cog-6-tooth',
        image: '/images/buidai.webp',
        status: 'online',
        tags: ['部署服务', '技术支持', '本地部署'],
        features: ['本地部署', '服务器部署', '技术支持', '环境配置', '性能优化'],
        platforms: [
          { title: '联系客服', icon: 'i-heroicons-chat-bubble-left-right', url: 'https://buidai.com/contact', account: '联系客服', password: '联系客服' }
        ]
      }
    ]
  },
  {
    id: 'extension',
    name: '扩展应用',
    icon: 'i-heroicons-sparkles',
    products: [
      {
        id: 'chat-bot',
        title: '智言AI',
        subtitle: '智能客服与对话系统',
        description: '基于大语言模型的智能客服与对话系统，支持多轮对话、上下文理解与意图识别。提供完整的对话管理、知识库集成和数据分析能力。',
        icon: 'i-heroicons-chat-bubble-left-right',
        image: '/plugin/Nanobanana.png',
        status: 'online',
        tags: ['大语言模型', '智能客服', '多轮对话'],
        features: ['多轮对话', '上下文理解', '意图识别', '知识库集成', '数据分析'],
        platforms: [
          { title: 'PC演示前台', icon: 'i-heroicons-computer-desktop', url: 'https://gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '站点管理端', icon: 'i-heroicons-cog-6-tooth', url: 'https://gmlart.cn/admin', account: 'demo', password: 'demo123' },
          { title: 'SaaS平台端', icon: 'i-heroicons-cog-6-tooth', url: 'https://gmlart.cn/saas', account: '联系客服', password: '联系客服' },
          { title: 'WAP演示', icon: 'i-heroicons-device-phone-mobile', url: 'https://gmlart.cn/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'Image',
        title: '图像创作',
        subtitle: 'AI智能生成工具',
        description: '图像创作是一个综合型的AI绘画应用，对接 gpt-image-2、即梦、可灵等多家主流 AI 绘画模型。支持多参考图融合创作，自由自定义图片尺寸与分辨率；内置 AI 提示词扩写、同款生成、再次生成等实用能力，一键高清下载作品，零基础轻松创作插画、头像、壁纸等多元创意画作。',
        icon: 'i-heroicons-film',
        image: '/plugin/Sora2短剧视频创作.png',
        status: 'online',
        tags: ['短剧创作', 'AI视频', '文生视频'],
        features: ['文字生成视频', '短剧创作', '创意转化', '高效生成', '优质输出'],
        platforms: [
          { title: '联系客服', icon: 'i-heroicons-chat-bubble-left-right', url: 'https://www.gmlart.cn/', account: '联系客服', password: '联系客服' }
        ]
      },
      {
        id: 'nanobanana',
        title: 'Nanobanana',
        subtitle: '香蕉绘画平台',
        description: '香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性。',
        icon: 'i-heroicons-swatch',
        image: '/plugin/Nanobanana.png',
        status: 'online',
        tags: ['Gemini 3 Pro', '角色一致', '文生图'],
        features: ['预置模版', '开箱即用', '角色一致性', '文生图', '图生图'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'jmdraw',
        title: '即梦AI绘画',
        subtitle: '高质量AI图像生成',
        description: '基于即梦AI绘画的快速绘图工具，能够通过简单提示词快速生成高质量图像，风格覆盖广泛，写实、卡通、插画等皆可驾驭。',
        icon: 'i-heroicons-photo',
        image: '/plugin/即梦AI绘画.png',
        status: 'online',
        tags: ['文生图', '图生图', '多分辨率'],
        features: ['文生图', '图生图', '多种分辨率', '批量生成', '灵感广场'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' },
          { title: 'H5演示', icon: 'i-heroicons-device-phone-mobile', url: 'https://www.gmlart.cn/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'jimeng',
        title: '即梦AI视频',
        subtitle: 'AI视频生成工具',
        description: '快速生成视频的工具，用户只需输入文字描述或上传参考图，即可快速生成风格多样的短视频，支持多种视频比例和分辨率。',
        icon: 'i-heroicons-video-camera',
        image: '/plugin/即梦AI视频.png',
        status: 'online',
        tags: ['文生视频', '图生视频', '多分辨率'],
        features: ['文生视频', '图生视频', '多种分辨率', '视频下载', '灵感广场'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'human',
        title: 'AI直播短视频数字人',
        subtitle: '7x24小时无人直播',
        description: '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
        icon: 'i-heroicons-user',
        image: '/plugin/AI直播短视频数字人.webp',
        status: 'online',
        tags: ['数字人', '无人直播', '短视频'],
        features: ['7x24小时直播', '数字人带货', '低成本', '高回报', '超级主播'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' },
          { title: 'H5演示', icon: 'i-heroicons-device-phone-mobile', url: 'https://www.gmlart.cn/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'videoclip',
        title: '热门视频混剪',
        subtitle: '智能视频剪辑软件',
        description: '智能抓取热门素材，自动混剪，快速生成短视频。紧跟热点趋势，轻松制作出爆款短视频。',
        icon: 'i-heroicons-play',
        image: '/plugin/video-mix.png',
        status: 'online',
        tags: ['批量剪辑', '智能转场', '热门素材'],
        features: ['智能抓取', '自动混剪', '热门素材', '快速生成', '爆款视频'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'drama',
        title: 'AI短剧小说创作',
        subtitle: '网文短剧写作系统',
        description: '专注于短剧本和网络小说创作的辅助工具，提供丰富的剧情模板、角色设定和冲突框架，支持 AI 扩写润色改写续写。',
        icon: 'i-heroicons-pencil-square',
        image: '/plugin/AI短剧小说创作.png',
        status: 'online',
        tags: ['剧本创作', '角色设定', 'AI扩写'],
        features: ['无限量剧本', '角色设定', '章节拖拽', 'AI扩写润色', '大纲管理'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'ppt',
        title: 'AI PPT',
        subtitle: '智能演示文稿制作',
        description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，一键生成演讲备注。',
        icon: 'i-heroicons-clipboard-document',
        image: '/plugin/aippt.png',
        status: 'online',
        tags: ['智能生成', '模板图表', '智能配色'],
        features: ['智能生成', '模板图表', '智能配色', '字体搭配', '动画效果'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'resume',
        title: 'AI简历',
        subtitle: '智能简历生成系统',
        description: '致力于高效生成与深度优化个人简历，通过简单的基本信息输入，即可快速生成结构完整的个人简历，并提供专业优化建议。',
        icon: 'i-heroicons-document-text',
        image: '/plugin/AI简历.png',
        status: 'online',
        tags: ['智能问答', '简历模板', 'AI分析'],
        features: ['智能问答', '简历模板', '在线编辑', '模块管理', 'AI分析'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'xhs',
        title: '小红书内容复刻',
        subtitle: '热门内容创作工具',
        description: '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
        icon: 'i-heroicons-hashtag',
        image: '/plugin/xiaohongshu.png',
        status: 'online',
        tags: ['文案生成', 'AI配图', '标签推荐'],
        features: ['一键提取', '智能仿写', '爆款文案', '流量密码', '快速产出'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'music',
        title: 'AI音乐',
        subtitle: 'AI音乐生成系统',
        description: '以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，降低门槛、提升效率。',
        icon: 'i-heroicons-musical-note',
        image: '/plugin/AI音乐.png',
        status: 'online',
        tags: ['文本生成', '哼唱生成', '乐谱生成'],
        features: ['文本生成', '哼唱生成', '乐谱生成', '多种输出', '商用授权'],
        platforms: [
          { title: 'PC演示', icon: 'i-heroicons-computer-desktop', url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: 'i-heroicons-cog-6-tooth', url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      }
    ]
  }
]

