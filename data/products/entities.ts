/// <reference types="vite/client" />
/**
 * 统一产品数据中心 —— 实体收集层
 *
 * 单一事实来源：每个产品一个实体文件（detail/market/demo 三视图），
 * 按主视图分目录存放；本文件自动收集全部实体，
 * 新增实体即自动注册，无需手工登记（防漏登记回归）。
 *
 * 实体目录约定：
 * - detail/  产品中心：三视图齐全的 12 个实体
 * - market/  应用中心：16 个市场专属实体
 * - demo/    演示中心：2 个演示专属实体
 */
import type { Product, ProductDetail } from './types'

type EntityModules = Record<string, { default: Product }>

/** 实体子目录（新增分组目录时在此登记） */
const ENTITY_DIRS = ['detail', 'market', 'demo']

/**
 * 收集全部实体文件。
 *
 * Vite 环境（dev/build/测试）走 import.meta.glob 静态字面量调用
 * （Vite 在转换期静态替换该调用，必须保持完整调用形式，不能经变量/类型断言间接引用）。
 * jiti 环境（nuxt.config 加载期，无 import.meta.glob）用 fs + require 兜底。
 */
function collectEntities(): EntityModules {
  if (typeof require === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require('node:fs')
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require('node:path')
    const baseDir = path.join(__dirname, '.')
    const out: EntityModules = {}
    for (const dir of ENTITY_DIRS) {
      for (const file of fs.readdirSync(path.join(baseDir, dir))) {
        if (!file.endsWith('.ts')) {
          continue
        }
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        out[`./${dir}/${file}`] = require(path.join(baseDir, dir, file))
      }
    }
    return out
  }
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
