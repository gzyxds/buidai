/**
 * 统一产品数据中心（唯一入口）
 *
 * 单一事实来源：每个产品一个实体文件（detail/market/demo 三视图），
 * entities.ts 自动收集实体，market.ts / demo.ts 派生两套兼容视图，
 * 本文件仅做 re-export，消费方 import 路径保持不变。
 */
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

export { products, getProductBySlug, getProductDetailBySlug, productSlugs } from './entities'

export type { MarketApp } from './market'
export { marketCategories, marketApps } from './market'

export type { ProductDemo, ProductCategory } from './demo'
export {
  demoCategories,
  DEFAULT_PRODUCT_IMAGE,
  getStatusText,
  getStatusClass,
  getProductImageUrl,
  handleImageError
} from './demo'
