import { describe, expect, it } from 'vitest'
import {
  getProductBySlug,
  productSlugs,
  products,
  type Product,
  type ProductDetail
} from '../data/products'

/** 具备详情视图的产品（detail 实体） */
const detailProducts = products.filter(p => p.seo && p.hero) as ProductDetail[]

function expectNonEmptyString(value: unknown, label: string) {
  expect(typeof value, `${label} 应为字符串`).toBe('string')
  expect((value as string).trim().length, `${label} 不应为空`).toBeGreaterThan(0)
}

function validateProduct(product: Product) {
  expectNonEmptyString(product.slug, `${product.slug}.slug`)
  // 详情视图字段必须齐全
  expect(product.seo, `${product.slug}.seo 应存在`).toBeDefined()
  expect(product.hero, `${product.slug}.hero 应存在`).toBeDefined()
  expect(product.features, `${product.slug}.features 应存在`).toBeDefined()
  expect(product.featureDetails, `${product.slug}.featureDetails 应存在`).toBeDefined()
  expect(product.cta, `${product.slug}.cta 应存在`).toBeDefined()

  const p = product as ProductDetail
  expectNonEmptyString(p.seo.title, `${p.slug}.seo.title`)
  expectNonEmptyString(p.seo.description, `${p.slug}.seo.description`)
  expectNonEmptyString(p.hero.h1Leading + p.hero.h1Highlight, `${p.slug}.hero 标题`)
  expectNonEmptyString(p.hero.demoImage, `${p.slug}.hero.demoImage`)

  // 回归防护：demoImage 曾误写为 /public/plugin/... 导致 404
  expect(
    p.hero.demoImage.startsWith('/public/'),
    `${p.slug}.hero.demoImage 不应含 /public/ 前缀`
  ).toBe(false)
  expect(p.seo.ogImage.startsWith('/public/'), `${p.slug}.seo.ogImage 不应含 /public/ 前缀`).toBe(
    false
  )

  expect(p.features.length, `${p.slug}.features 不应为空`).toBeGreaterThan(0)
  expect(p.featureDetails.length, `${p.slug}.featureDetails 不应为空`).toBeGreaterThan(0)
  expectNonEmptyString(p.cta.title, `${p.slug}.cta.title`)
}

describe('products 数据', () => {
  it('实体总数 28、详情产品 12、slug 唯一', () => {
    expect(products).toHaveLength(28)
    expect(detailProducts).toHaveLength(12)
    expect(new Set(products.map(p => p.slug)).size).toBe(products.length)
  })

  it('getProductBySlug 能查回每个产品', () => {
    for (const slug of productSlugs) {
      const product = getProductBySlug(slug)
      expect(product, `应能查到 ${slug}`).toBeDefined()
      expect(product!.slug).toBe(slug)
    }
  })

  it('未知 slug 返回 undefined', () => {
    expect(getProductBySlug('not-exists')).toBeUndefined()
  })

  it('每个详情产品的数据完整（SEO/hero/features/cta 无空值、图片路径无 /public/ 前缀）', () => {
    for (const product of detailProducts) {
      validateProduct(product)
    }
  })

  it('featureDetails 的 activePoint 初值合法', () => {
    for (const p of detailProducts) {
      for (const detail of p.featureDetails) {
        expect(detail.points.length, `${p.slug} 的 featureDetails.points 不应为空`).toBeGreaterThan(
          0
        )
      }
    }
  })
})
