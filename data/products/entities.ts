/// <reference types="vite/client" />
/**
 * 统一产品数据中心 —— 实体收集层
 *
 * 单一事实来源：每个产品一个实体文件（detail/market/demo 三视图），
 * 按主视图分目录存放；本文件自动收集全部实体，
 * 新增实体即自动注册，无需手工登记（防漏登记回归）。
 *
 * 实体目录约定：
 * - detail/  产品中心：三视图齐全的 16 个实体
 * - market/  应用中心：12 个市场专属实体
 * - demo/    演示中心：2 个演示专属实体
 *
 * 本文件属应用侧代码，只走 Vite 的 import.meta.glob 静态收集。
 * 构建期（nuxt.config → sitemap）需要的产品 slug 由 build/getSitemapRoutes.ts
 * 以 fs 扫描 detail/ 文件名独立提供，两侧不共享运行时代码（shared.md 边界）。
 */
import type { Product, ProductDetail } from './types'

type EntityModules = Record<string, { default: Product }>

/**
 * 收集全部实体。
 *
 * import.meta.glob 是 Vite 的静态字面量调用：
 * Vite 在转换期静态替换该调用，必须保持完整调用形式，
 * 不能经变量/类型断言间接引用。
 */
function collectEntities(): EntityModules {
  return import.meta.glob('./*/*.ts', { eager: true }) as unknown as EntityModules
}

const entityModules = collectEntities()

/** 全部产品实体（按文件名排序，顺序稳定） */
export const products: Product[] = Object.keys(entityModules)
  .sort()
  .map(key => entityModules[key]!.default)

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
