/**
 * 统一产品数据中心
 *
 * 单一事实来源：每个产品一个实体文件（detail/market/demo 三视图），
 * 本文件汇总并提供查询工具。
 */
import type { Product, ProductDetail } from './types'

import banana from './banana'
import drama from './drama'
import human from './human'
import jimeng from './jimeng'
import jmdraw from './jmdraw'
import model from './model'
import music from './music'
import ppt from './ppt'
import resume from './resume'
import sora from './sora'
import videoclip from './videoclip'
import xhs from './xhs'

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
  xhs
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

/** 所有产品 slug 列表（站点地图与路由用） */
export const productSlugs = products.map(p => p.slug)
