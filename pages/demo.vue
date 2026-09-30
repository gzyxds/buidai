<script setup lang="ts">
import type { Component } from 'vue'
import { onErrorCaptured } from 'vue'
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  UserIcon,
  SparklesIcon,
  FilmIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  ClipboardDocumentIcon,
  PlayIcon,
  SwatchIcon,
  HashtagIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

/**
 * 演示平台接口定义
 * @property title - 平台名称
 * @property icon - 平台图标组件
 * @property url - 演示链接
 * @property account - 演示账号
 * @property password - 演示密码
 */
interface DemoPlatform {
  title: string
  icon: Component
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
interface ProductDemo {
  id: string
  title: string
  subtitle: string
  description: string
  icon: Component
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
interface ProductCategory {
  id: string
  name: string
  icon: Component
  products: ProductDemo[]
}

/**
 * 产品分类数据
 * 参考 pluginData.ts 的分类方式
 */
const categories: ProductCategory[] = [
  {
    id: 'independent',
    name: '独立系统',
    icon: ShoppingBagIcon,
    products: [

      {
        id: 'knowledge-base',
        title: '企业全能AI',
        subtitle: '智能文档问答系统',
        description: '能够自动解析文档、构建向量索引的智能知识库，为企业提供精准的问答服务。支持多种文档格式，实现企业知识的高效管理与检索。',
        icon: BookOpenIcon,
        image: '/plugin/work.webp',
        status: 'online',
        tags: ['文档解析', '向量索引', '智能问答'],
        features: ['文档自动解析', '向量索引构建', '精准问答', '多格式支持', '权限管理'],
        platforms: [
          { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://www.cnai.art', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: Cog6ToothIcon, url: 'https://www.cnai.art/admin', account: 'admin', password: '123456' },
          { title: 'API文档', icon: DocumentTextIcon, url: 'https://www.cnai.art/doc', account: '联系客服', password: '联系客服' },
          { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://www.cnai.art/mobile', account: '联系客服', password: '联系客服' }
        ]
      },
      {
        id: 'digital-human-saas',
        title: '超级IP数字人',
        subtitle: 'PHP源码版',
        description: '为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成。',
        icon: UserIcon,
        image: '/plugin/saas.webp',
        status: 'online',
        tags: ['PHP源码', '数字人', 'SaaS系统'],
        features: ['真人声音克隆', '形象克隆', '一键合成', 'SaaS架构', '源码交付'],
        platforms: [
          { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://v.cnai.art/', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: Cog6ToothIcon, url: 'https://demo.cnai.art/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://v.cnai.art/mobile/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'yichuang-ai',
        title: 'AI聊天绘画',
        subtitle: 'PHP源码版',
        description: '实现了AI对话+AI绘画的融合使用。系统功能包括：AI智能对话、AI创作模型、AI绘画、分销推广。',
        icon: PhotoIcon,
        image: '/plugin/ai.webp',
        status: 'online',
        tags: ['PHP源码', 'AI对话', 'AI绘画'],
        features: ['AI智能对话', 'AI绘画', '创作模型', '分销推广', '源码交付'],
        platforms: [
          { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://cnai.art/', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: Cog6ToothIcon, url: 'https://chat-demo.chatmoney.cn/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://cnai.art/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'yichuang-paper',
        title: '艺创AI论文写作',
        subtitle: 'PHP源码版',
        description: '10分钟可生成几万字长文的系统。只需要输入主题关键词，AI即可快速为您生成主题大纲。',
        icon: DocumentTextIcon,
        image: '/plugin/lw.svg',
        status: 'online',
        tags: ['PHP源码', '论文写作', 'AI生成'],
        features: ['快速生成', '主题大纲', '长文写作', 'AI辅助', '源码交付'],
        platforms: [
          { title: '演示前台', icon: ComputerDesktopIcon, url: 'https://paper.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '体验后台', icon: Cog6ToothIcon, url: 'https://paper.gmlart.cn/admin/', account: 'admin', password: '123456' },
          { title: '移动端', icon: DevicePhoneMobileIcon, url: 'https://paper.gmlart.cn/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'zhiyan-ai-deploy',
        title: '智言AI框架部署服务',
        subtitle: '官方技术专家部署服务',
        description: '官方技术专家，帮您部署智言AI平台框架，支持本地部署或服务器部署。',
        icon: Cog6ToothIcon,
        image: '/images/buidai.webp',
        status: 'online',
        tags: ['部署服务', '技术支持', '本地部署'],
        features: ['本地部署', '服务器部署', '技术支持', '环境配置', '性能优化'],
        platforms: [
          { title: '联系客服', icon: ChatBubbleLeftRightIcon, url: 'https://buidai.com/contact', account: '联系客服', password: '联系客服' }
        ]
      }
    ]
  },
  {
    id: 'extension',
    name: '扩展应用',
    icon: SparklesIcon,
    products: [
      {
        id: 'chat-bot',
        title: '智言AI',
        subtitle: '智能客服与对话系统',
        description: '基于大语言模型的智能客服与对话系统，支持多轮对话、上下文理解与意图识别。提供完整的对话管理、知识库集成和数据分析能力。',
        icon: ChatBubbleLeftRightIcon,
        image: '/plugin/Nanobanana.png',
        status: 'online',
        tags: ['大语言模型', '智能客服', '多轮对话'],
        features: ['多轮对话', '上下文理解', '意图识别', '知识库集成', '数据分析'],
        platforms: [
          { title: 'PC演示前台', icon: ComputerDesktopIcon, url: 'https://gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '站点管理端', icon: Cog6ToothIcon, url: 'https://gmlart.cn/admin', account: 'demo', password: 'demo123' },
          { title: 'SaaS平台端', icon: Cog6ToothIcon, url: 'https://gmlart.cn/saas', account: '联系客服', password: '联系客服' },
          { title: 'WAP演示', icon: DevicePhoneMobileIcon, url: 'https://gmlart.cn/mobile', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'Image',
        title: '图像创作',
        subtitle: 'AI智能生成工具',
        description: '图像创作是一个综合型的AI绘画应用，对接 gpt-image-2、即梦、可灵等多家主流 AI 绘画模型。支持多参考图融合创作，自由自定义图片尺寸与分辨率；内置 AI 提示词扩写、同款生成、再次生成等实用能力，一键高清下载作品，零基础轻松创作插画、头像、壁纸等多元创意画作。',
        icon: FilmIcon,
        image: '/plugin/Sora2短剧视频创作.png',
        status: 'online',
        tags: ['短剧创作', 'AI视频', '文生视频'],
        features: ['文字生成视频', '短剧创作', '创意转化', '高效生成', '优质输出'],
        platforms: [
          { title: '联系客服', icon: ChatBubbleLeftRightIcon, url: 'https://www.gmlart.cn/', account: '联系客服', password: '联系客服' }
        ]
      },
      {
        id: 'nanobanana',
        title: 'Nanobanana',
        subtitle: '香蕉绘画平台',
        description: '香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性。',
        icon: SwatchIcon,
        image: '/plugin/Nanobanana.png',
        status: 'online',
        tags: ['Gemini 3 Pro', '角色一致', '文生图'],
        features: ['预置模版', '开箱即用', '角色一致性', '文生图', '图生图'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'jmdraw',
        title: '即梦AI绘画',
        subtitle: '高质量AI图像生成',
        description: '基于即梦AI绘画的快速绘图工具，能够通过简单提示词快速生成高质量图像，风格覆盖广泛，写实、卡通、插画等皆可驾驭。',
        icon: PhotoIcon,
        image: '/plugin/即梦AI绘画.png',
        status: 'online',
        tags: ['文生图', '图生图', '多分辨率'],
        features: ['文生图', '图生图', '多种分辨率', '批量生成', '灵感广场'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' },
          { title: 'H5演示', icon: DevicePhoneMobileIcon, url: 'https://www.gmlart.cn/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'jimeng',
        title: '即梦AI视频',
        subtitle: 'AI视频生成工具',
        description: '快速生成视频的工具，用户只需输入文字描述或上传参考图，即可快速生成风格多样的短视频，支持多种视频比例和分辨率。',
        icon: VideoCameraIcon,
        image: '/plugin/即梦AI视频.png',
        status: 'online',
        tags: ['文生视频', '图生视频', '多分辨率'],
        features: ['文生视频', '图生视频', '多种分辨率', '视频下载', '灵感广场'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'human',
        title: 'AI直播短视频数字人',
        subtitle: '7x24小时无人直播',
        description: '7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。',
        icon: UserIcon,
        image: '/plugin/AI直播短视频数字人.webp',
        status: 'online',
        tags: ['数字人', '无人直播', '短视频'],
        features: ['7x24小时直播', '数字人带货', '低成本', '高回报', '超级主播'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' },
          { title: 'H5演示', icon: DevicePhoneMobileIcon, url: 'https://www.gmlart.cn/', account: '自行注册', password: '自行注册' }
        ]
      },
      {
        id: 'videoclip',
        title: '热门视频混剪',
        subtitle: '智能视频剪辑软件',
        description: '智能抓取热门素材，自动混剪，快速生成短视频。紧跟热点趋势，轻松制作出爆款短视频。',
        icon: PlayIcon,
        image: '/plugin/video-mix.png',
        status: 'online',
        tags: ['批量剪辑', '智能转场', '热门素材'],
        features: ['智能抓取', '自动混剪', '热门素材', '快速生成', '爆款视频'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'drama',
        title: 'AI短剧小说创作',
        subtitle: '网文短剧写作系统',
        description: '专注于短剧本和网络小说创作的辅助工具，提供丰富的剧情模板、角色设定和冲突框架，支持 AI 扩写润色改写续写。',
        icon: PencilSquareIcon,
        image: '/plugin/AI短剧小说创作.png',
        status: 'online',
        tags: ['剧本创作', '角色设定', 'AI扩写'],
        features: ['无限量剧本', '角色设定', '章节拖拽', 'AI扩写润色', '大纲管理'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'ppt',
        title: 'AI PPT',
        subtitle: '智能演示文稿制作',
        description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，一键生成演讲备注。',
        icon: ClipboardDocumentIcon,
        image: '/plugin/aippt.png',
        status: 'online',
        tags: ['智能生成', '模板图表', '智能配色'],
        features: ['智能生成', '模板图表', '智能配色', '字体搭配', '动画效果'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'resume',
        title: 'AI简历',
        subtitle: '智能简历生成系统',
        description: '致力于高效生成与深度优化个人简历，通过简单的基本信息输入，即可快速生成结构完整的个人简历，并提供专业优化建议。',
        icon: DocumentTextIcon,
        image: '/plugin/AI简历.png',
        status: 'online',
        tags: ['智能问答', '简历模板', 'AI分析'],
        features: ['智能问答', '简历模板', '在线编辑', '模块管理', 'AI分析'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'xhs',
        title: '小红书内容复刻',
        subtitle: '热门内容创作工具',
        description: '一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。',
        icon: HashtagIcon,
        image: '/plugin/xiaohongshu.png',
        status: 'online',
        tags: ['文案生成', 'AI配图', '标签推荐'],
        features: ['一键提取', '智能仿写', '爆款文案', '流量密码', '快速产出'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      },
      {
        id: 'music',
        title: 'AI音乐',
        subtitle: 'AI音乐生成系统',
        description: '以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，降低门槛、提升效率。',
        icon: MusicalNoteIcon,
        image: '/plugin/AI音乐.png',
        status: 'online',
        tags: ['文本生成', '哼唱生成', '乐谱生成'],
        features: ['文本生成', '哼唱生成', '乐谱生成', '多种输出', '商用授权'],
        platforms: [
          { title: 'PC演示', icon: ComputerDesktopIcon, url: 'https://www.gmlart.cn', account: '自行注册', password: '自行注册' },
          { title: '管理后台', icon: Cog6ToothIcon, url: 'https://www.gmlart.cn/', account: 'admin', password: '123456' }
        ]
      }
    ]
  }
]

/**
 * 当前选中的产品
 * 默认选中第一个分类的第一个产品，添加空值安全检查
 */
const selectedProduct = ref<ProductDemo | null>(categories[0]?.products[0] ?? null)

/**
 * 当前选中的分类ID
 * 用于高亮左侧导航，添加空值安全检查
 */
const selectedCategoryId = ref<string>(categories[0]?.id ?? '')

/**
 * 分类展开状态
 * 记录每个分类的展开/折叠状态
 */
const expandedCategories = ref<Record<string, boolean>>({
  independent: true,
  extension: true
})

/**
 * 切换分类展开状态
 * @param categoryId - 分类ID
 */
function toggleCategory(categoryId: string): void {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

/**
 * 默认产品图片路径
 * 当产品图片加载失败时显示
 */
const DEFAULT_PRODUCT_IMAGE = '/images/buidai.webp'

/**
 * 获取产品图片URL
 * 如果路径为空则返回默认图片
 * @param path - 图片路径
 * @returns 处理后的图片URL
 */
function getProductImageUrl(path: string | undefined): string {
  return path || DEFAULT_PRODUCT_IMAGE
}

/**
 * 处理图片加载错误
 * 将错误图片替换为默认图片
 * @param event - 错误事件对象
 */
function handleImageError(event: Event): void {
  const img = event.target as HTMLImageElement
  if (img) {
    img.src = DEFAULT_PRODUCT_IMAGE
  }
}

/**
 * 选择产品
 * @param product - 要选中的产品
 * @param categoryId - 产品所属分类ID
 */
function selectProduct(product: ProductDemo, categoryId: string): void {
  selectedProduct.value = product
  selectedCategoryId.value = categoryId
}

/**
 * 当前分类的产品列表
 * 根据选中的分类ID返回对应的产品数组
 */
const currentCategoryProducts = computed<ProductDemo[]>(() => {
  const category = categories.find(c => c.id === selectedCategoryId.value)
  return category?.products || []
})

/**
 * 滚动到指定分类区域
 * 用于移动端点击底部标签栏时自动选择该分类的第一个产品
 * @param categoryId - 分类ID
 */
function scrollToCategory(categoryId: string): void {
  const category = categories.find(c => c.id === categoryId)
  if (category && category.products.length > 0) {
    // 如果当前选中的产品不在新分类中，则自动选择新分类的第一个产品
    const currentProductInCategory = category.products.find(p => p.id === selectedProduct.value?.id)
    if (!currentProductInCategory) {
      const firstProduct = category.products[0]
      if (firstProduct) {
        selectedProduct.value = firstProduct
      }
    }
  }
}

/**
 * 状态文本映射表
 * 提取到模块级别避免每次调用时重复创建对象
 */
const STATUS_TEXT_MAP: Record<string, string> = {
  online: '已上线',
  beta: 'Beta',
  coming: '即将上线'
}

/**
 * 状态样式类映射表
 * 提取到模块级别避免每次调用时重复创建对象
 */
const STATUS_CLASS_MAP: Record<string, string> = {
  online: 'bg-green-500 text-white',
  beta: 'bg-indigo-500 text-white',
  coming: 'bg-neutral-400 text-white'
}

/**
 * 获取状态显示文本
 * @param status - 产品状态
 * @returns 状态显示文本
 */
function getStatusText(status: string): string {
  return STATUS_TEXT_MAP[status] || status
}

/**
 * 获取状态样式类
 * @param status - 产品状态
 * @returns 状态样式类名
 */
function getStatusClass(status: string): string {
  return STATUS_CLASS_MAP[status] || 'bg-neutral-400 text-white'
}

/**
 * 错误边界处理
 * 捕获组件渲染过程中的错误，防止整个页面崩溃
 * @param err - 错误对象
 * @param instance - 发生错误的组件实例
 * @param info - 错误信息
 */
onErrorCaptured((_err, _instance, _info) => {
  // 错误处理逻辑
  // 可以在这里添加错误上报逻辑，例如发送到监控服务
  // reportError({ error: _err, component: 'demo', info: _info })

  // 返回 false 阻止错误向上传播
  return false
})

/**
 * SEO 配置常量
 */
const siteName = '智言万象'
const baseUrl = 'https://buidai.com'
const pageTitle = '产品演示中心 - 智言万象 | 在线体验AI产品'
const pageDescription = '智言万象产品演示中心，在线体验智言AI智能客服、企业知识库、AI绘画、AI视频、AI数字人等AI产品。支持PC端、移动端、后台管理等多平台演示。'
const canonicalUrl = `${baseUrl}/demo`
const ogImage = `${baseUrl}/images/og-demo.png`

/**
 * SEO 元数据配置
 */
useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: siteName },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '产品演示中心',
        description: pageDescription,
        url: canonicalUrl,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: '产品演示', item: canonicalUrl }
          ]
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white py-8 lg:pb-8 pb-20">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[500px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"/>

    <!-- 移动端底部标签栏 - 切换产品分类 (悬浮胶囊风) -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div class="px-4 pb-[calc(16px+env(safe-area-inset-bottom,0px))] pt-12 bg-linear-to-t from-white/90 via-white/50 to-transparent flex justify-center">
        <div class="flex items-center p-1.5 bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15)] border border-neutral-200/50 rounded-full w-full max-w-[340px] pointer-events-auto">
          <button
            v-for="category in categories"
            :key="category.id"
            class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ease-out"
            :class="selectedCategoryId === category.id
              ? 'text-white bg-indigo-600 shadow-md shadow-indigo-500/20'
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80'"
            @click="selectedCategoryId = category.id; scrollToCategory(category.id)"
          >
            <component
              :is="category.icon"
              class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
              :class="selectedCategoryId === category.id ? 'scale-110' : ''"
            />
            <span class="text-sm font-semibold tracking-wide">{{ category.name }}</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- 顶部 Hero 区域 -->
    <section class="relative pt-8 pb-4 md:pt-12 md:pb-12 overflow-hidden z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <!-- 徽章 -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-neutral-200 shadow-sm mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"/>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"/>
            </span>
            <span class="text-xs font-medium text-neutral-600">智言AI · 产品演示</span>
          </div>

          <!-- 标题 -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-text)] tracking-tight leading-[1.2] mb-4">
            在线 <span class="text-indigo-500">体验</span> AI 产品
          </h1>

          <!-- 副标题 -->
          <p class="text-base sm:text-lg text-[var(--brand-muted)] max-w-2xl mx-auto leading-relaxed">
            探索智言AI全系产品，涵盖智能对话、AI绘画、视频生成、数字人等多个领域，即刻开启您的AI之旅
          </p>
        </div>

        <!-- 移动端产品选择器 - 横向滚动标签栏 -->
        <div class="lg:hidden mt-4 sm:mt-6">
          <div class="flex items-center gap-2 px-0 py-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
            <button
              v-for="product in currentCategoryProducts"
              :key="product.id"
              class="flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap border"
              :class="selectedProduct?.id === product.id
                ? 'bg-indigo-500 text-white border-indigo-500 shadow-sm'
                : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'"
              @click="selectProduct(product, selectedCategoryId)"
            >
              <component :is="product.icon" class="w-4 h-4 flex-shrink-0" />
              <span class="truncate max-w-[100px] sm:max-w-[120px]">{{ product.title }}</span>
              <span
                v-if="product.status === 'beta'"
                class="ml-0.5 px-1 py-0 text-[8px] rounded bg-white/20 flex-shrink-0"
              >
                β
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 主体内容区域 - 使用 container 包裹左右布局 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex gap-6 lg:gap-8">
        <!-- 左侧产品导航栏 - 可展开折叠 -->
        <aside class="hidden lg:block w-60 xl:w-64 flex-shrink-0">
          <div class="sticky top-24 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <!-- 导航标题 -->
            <div class="px-4 py-3 border-b border-neutral-200">
              <h2 class="text-sm font-semibold text-neutral-900">产品分类</h2>
            </div>

            <!-- 产品分类列表 -->
            <nav class="p-2">
              <div v-for="category in categories" :key="category.id" class="mb-1">
                <!-- 分类标题 - 可点击展开折叠 -->
                <button
                  class="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-600 uppercase tracking-wider rounded-lg transition-colors"
                  :class="selectedCategoryId === category.id ? 'bg-neutral-100 text-neutral-900' : 'hover:bg-neutral-50'"
                  @click="toggleCategory(category.id)"
                >
                  <component :is="category.icon" class="w-4 h-4 flex-shrink-0" :class="selectedCategoryId === category.id ? 'text-indigo-600' : 'text-neutral-400'" />
                  <span class="truncate flex-1 text-left">{{ category.name }}</span>
                  <span class="text-[10px] text-neutral-400">{{ category.products.length }}</span>
                  <component
                    :is="expandedCategories[category.id] ? ChevronDownIcon : ChevronRightIcon"
                    class="w-3.5 h-3.5 flex-shrink-0 text-neutral-400"
                  />
                </button>

                <!-- 产品列表 - 带展开动画 -->
                <Transition
                  enter-active-class="transition-all duration-200 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-[500px]"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-[500px]"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-show="expandedCategories[category.id]" class="overflow-hidden">
                    <div class="pl-2 py-1">
                      <div class="space-y-0.5">
                        <button
                          v-for="product in category.products"
                          :key="product.id"
                          class="group w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors text-left relative"
                          :class="selectedProduct?.id === product.id ? 'bg-indigo-50 text-indigo-700' : 'text-neutral-600 hover:bg-neutral-50'"
                          @click="selectProduct(product, category.id)"
                        >
                          <!-- 选中左侧指示条 -->
                          <div
                            class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r transition-all"
                            :class="selectedProduct?.id === product.id ? 'bg-indigo-500' : 'bg-transparent'"
                          />

                          <!-- 产品图标 -->
                          <component
                            :is="product.icon"
                            class="w-4 h-4 flex-shrink-0 transition-colors"
                            :class="selectedProduct?.id === product.id ? 'text-indigo-600' : 'text-neutral-400 group-hover:text-neutral-500'"
                          />

                          <span class="truncate flex-1">{{ product.title }}</span>
                          <span
                            v-if="product.status === 'beta'"
                            class="flex-shrink-0 px-1.5 py-0.5 text-[10px] rounded bg-neutral-200 text-neutral-600"
                          >
                            Beta
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </nav>
          </div>
        </aside>



        <!-- 右侧内容区域 -->
        <main v-if="selectedProduct" class="flex-1 min-w-0">
          <!-- 产品详情卡片 -->
          <div class="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
            <!-- 产品头部 -->
            <div class="relative">
              <!-- 封面图 -->
              <div
                class="h-40 sm:h-48 md:h-52 flex items-center justify-center relative overflow-hidden"
              >
                <!-- 背景图 -->
                <img
                  :src="getProductImageUrl(selectedProduct.image)"
                  :alt="selectedProduct.title"
                  class="absolute inset-0 w-full h-full object-cover"
                  @error="handleImageError"
                />
                <!-- 遮罩层 -->
                <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-black/40" />

                <div class="relative z-10 text-center px-3 sm:px-4">
                  <div
                    class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <component
                      :is="selectedProduct.icon"
                      class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    />
                  </div>
                  <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">
                    {{ selectedProduct.title }}
                  </h2>
                  <p class="mt-0.5 text-xs sm:text-sm text-white/80 line-clamp-1">
                    {{ selectedProduct.subtitle }}
                  </p>
                </div>

                <!-- 状态标签 -->
                <div class="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                  <span
                    class="px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full"
                    :class="getStatusClass(selectedProduct.status)"
                  >
                    {{ getStatusText(selectedProduct.status) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 产品内容 -->
            <div class="p-4 sm:p-5 md:p-6">
              <!-- 标签 -->
              <div class="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                <span
                  v-for="tag in selectedProduct.tags"
                  :key="tag"
                  class="px-2 py-0.5 text-[10px] sm:text-xs text-neutral-600 bg-neutral-100 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- 描述 -->
              <div class="mb-4 sm:mb-5">
                <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {{ selectedProduct.description }}
                </p>
              </div>

              <!-- 核心功能 -->
              <div class="mb-4 sm:mb-5">
                <h3 class="text-[10px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2 sm:mb-3">
                  核心功能
                </h3>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span
                    v-for="feature in selectedProduct.features"
                    :key="feature"
                    class="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-neutral-700 bg-neutral-50 rounded-lg"
                  >
                    <div class="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span class="truncate max-w-[150px] sm:max-w-none">{{ feature }}</span>
                  </span>
                </div>
              </div>

              <!-- 演示平台 -->
              <div>
                <h3 class="text-[10px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2 sm:mb-3">
                  演示环境
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <a
                    v-for="platform in selectedProduct.platforms"
                    :key="platform.title"
                    :href="platform.url"
                    target="_blank" rel="noopener noreferrer"
                    class="group block p-2.5 sm:p-3 bg-white rounded-lg border border-neutral-200 hover:border-indigo-500/30 transition-colors duration-200"
                    :class="{ 'sm:col-span-2': selectedProduct.platforms.length === 1 }"
                  >
                    <div class="flex items-center gap-2 sm:gap-3">
                      <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors shrink-0">
                        <component :is="platform.icon" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <div class="flex-1 min-w-0 overflow-hidden">
                        <h4 class="text-xs sm:text-sm font-medium text-neutral-900 group-hover:text-indigo-500 transition-colors truncate">
                          {{ platform.title }}
                        </h4>
                        <p class="text-[10px] sm:text-xs text-neutral-400 truncate">
                          {{ platform.url }}
                        </p>
                      </div>
                      <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 底部 CTA -->
          <div class="mt-4 sm:mt-6 text-center">
            <p class="text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-3">需要定制化解决方案？</p>
            <a
              href="/contact"
              class="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-indigo-500 text-white text-xs sm:text-sm font-medium hover:bg-indigo-600 transition-colors"
            >
              联系我们
              <ArrowRightIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </main>
      </div>
    </div>
  </div>
<!-- CTA 底部行动召唤区域 -->
<LandingCtaSection />

</template>

<style scoped>
/* 自定义滚动条样式 */
nav::-webkit-scrollbar {
  width: 5px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 隐藏滚动条但保持滚动功能 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* 底部安全区域适配 */
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

/* 多行文本截断 */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 页面进入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  animation: fadeIn 0.5s ease-out;
}

/* 平台卡片进入动画 */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

a[class*="group block"] {
  animation: slideUp 0.4s ease-out forwards;
}
</style>
