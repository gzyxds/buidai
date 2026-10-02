/**
 * 统一产品数据中心
 *
 * 单一事实来源：每个产品一个实体文件（detail/market/demo 三视图），
 * 本文件汇总并提供查询工具。
 */
import type { Product, ProductDetail } from './types'

import articleImg from './article-img'
import banana from './banana'
import contract from './contract'
import digitalHumanSaas from './digital-human-saas'
import drama from './drama'
import geoRanking from './geo-ranking'
import human from './human'
import idPhoto from './id-photo'
import image2 from './image-2'
import jimeng from './jimeng'
import jmdraw from './jmdraw'
import knowledgeBase from './knowledge-base'
import mindmap from './mindmap'
import model from './model'
import modelArena from './model-arena'
import moyi from './moyi'
import music from './music'
import ppt from './ppt'
import resume from './resume'
import sora from './sora'
import videoclip from './videoclip'
import wanxiang from './wanxiang'
import writingAssistant from './writing-assistant'
import xhs from './xhs'
import yichuangAi from './yichuang-ai'
import yichuangAigc from './yichuang-aigc'
import yichuangPaper from './yichuang-paper'
import zhiyanDeploy from './zhiyan-ai-deploy'

export type {
  Product,
  ProductDetail,
  SeoData,
  HeroData,
  FeatureItem,
  FeatureDetail,
  MarketView,
  DemoView
} from './types'

export const products: Product[] = [
  banana,
  drama,
  human,
  jimeng,
  jmdraw,
  model,
  music,
  ppt,
  resume,
  sora,
  videoclip,
  xhs,
  // 市场专属实体
  articleImg,
  contract,
  digitalHumanSaas,
  geoRanking,
  idPhoto,
  image2,
  knowledgeBase,
  mindmap,
  modelArena,
  moyi,
  wanxiang,
  writingAssistant,
  yichuangAi,
  yichuangAigc,
  yichuangPaper,
  zhiyanDeploy
]

/** 按 slug 查询产品 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

/** 按 slug 查询具备完整详情视图的产品（缺详情字段视为不存在） */
export function getProductDetailBySlug(slug: string): ProductDetail | undefined {
  const product = products.find(p => p.slug === slug)
  if (
    !product ||
    !product.seo ||
    !product.hero ||
    !product.featuresGrid ||
    !product.features ||
    !product.featureDetails ||
    !product.cta
  ) {
    return undefined
  }
  return product as ProductDetail
}

/** 具备详情页的产品 slug 列表（站点地图与路由用，市场专属实体无详情页不在此列） */
export const productSlugs = products.filter(p => p.seo && p.hero).map(p => p.slug)

// ============ 市场视图派生层（兼容旧 utils/pluginData 的消费方） ============

/** 市场应用（形状兼容旧 AppData） */
export interface MarketApp {
  id: number
  name: string
  description: string
  icon: string
  image: string
  category: string
  originalPrice: number
  discountPrice: number
  date: string
}

/** 市场分类（原 pluginData categories） */
export const marketCategories = [
  { id: 'all', name: '全部应用' },
  { id: 'recommend', name: '官方推荐' },
  { id: 'independent', name: '独立系统' },
  { id: 'extension', name: '扩展应用' },
  { id: 'video', name: '图像视频' },
  { id: 'writing', name: '智能写作' },
  { id: 'enterprise', name: '企业工具' },
  { id: 'efficiency', name: '效率工具' }
]

/** 市场应用列表（按原数字 id 排序，id >= 50 为 PHP 源码系统） */
export const marketApps: MarketApp[] = products
  .filter(p => p.market && p.market.id !== undefined)
  .sort((a, b) => (a.market!.id ?? 0) - (b.market!.id ?? 0))
  .map(p => ({
    id: p.market!.id!,
    name: p.name,
    description: p.market!.description ?? p.description,
    icon: p.icon ?? '',
    image: p.image ?? '',
    category: p.market!.category,
    originalPrice: p.market!.originalPrice,
    discountPrice: p.market!.discountPrice,
    date: p.market!.date ?? ''
  }))

// ============ 演示视图派生层（兼容旧 data/demoProducts 的消费方） ============

/** 演示平台（形状兼容旧 DemoPlatform） */
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
  platforms: {
    title: string
    icon: string
    url: string
    account: string
    password: string
  }[]
}

/** 演示分类（形状兼容旧 ProductCategory） */
export interface ProductCategory {
  id: string
  name: string
  icon: string
  products: ProductDemo[]
}

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

const DEMO_CATEGORY_META = [
  { id: 'independent', name: '独立系统', icon: 'i-heroicons-shopping-bag' },
  { id: 'extension', name: '扩展应用', icon: 'i-heroicons-sparkles' }
]

/** 演示分类列表（形状兼容旧 categories） */
export const demoCategories: ProductCategory[] = DEMO_CATEGORY_META.map(cat => ({
  ...cat,
  products: products
    .filter(p => p.demo && p.demo.category === cat.id)
    .map(p => ({
      id: p.slug,
      title: p.demo!.title ?? p.name,
      subtitle: p.demo!.subtitle ?? '',
      description: p.demo!.description ?? p.description,
      icon: p.demo!.icon ?? p.icon ?? '',
      image: p.demo!.image ?? p.image ?? '',
      status: p.demo!.status,
      tags: p.demo!.tags ?? p.tags ?? [],
      features: p.demo!.features,
      platforms: p.demo!.platforms
    }))
}))
