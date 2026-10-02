/**
 * 统一产品模型类型
 *
 * 单一 Product 接口承载三个可选视图：
 * - 详情视图（detail 字段平铺，原 data/products.ts 的 ProductPageData）
 * - 市场视图（market，原 utils/pluginData.ts 的 AppData）
 * - 演示视图（demo，原 data/demoProducts.ts 的 ProductDemo）
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

/** 市场视图（应用中心/首页跑马灯） */
export interface MarketView {
  /** 旧 pluginData 数字 id（兼容引用处排序与筛选） */
  id?: number
  /** 市场视图专属文案（营销口吻，缺省回退通用 description） */
  description?: string
  category: string
  originalPrice: number
  discountPrice: number
  date?: string
  link?: string
  features?: string[]
}

/** 演示视图（演示中心） */
export interface DemoView {
  status: 'online' | 'beta' | 'coming'
  category: string
  subtitle?: string
  features: string[]
  platforms: {
    title: string
    icon: string
    url: string
    account: string
    password: string
  }[]
}

export interface Product {
  /** 统一标识（slug） */
  slug: string
  /** 显示名 */
  name: string
  /** 通用短描述 */
  description: string
  /** 图标名（i-xxx 格式） */
  icon?: string
  /** 封面图 */
  image?: string
  /** 标签 */
  tags?: string[]

  /** 详情视图（原 ProductPageData，平铺） */
  seo?: SeoData
  hero?: HeroData
  featuresGrid?: FeaturesGridData
  features?: FeatureItem[]
  featureDetails?: FeatureDetail[]
  cta?: CtaData

  /** 市场视图 */
  market?: MarketView

  /** 演示视图 */
  demo?: DemoView
}

/** 详情视图完整的产品（详情字段必填） */
export type ProductDetail = Product & {
  seo: SeoData
  hero: HeroData
  featuresGrid: FeaturesGridData
  features: FeatureItem[]
  featureDetails: FeatureDetail[]
  cta: CtaData
}
