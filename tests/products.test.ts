import { describe, expect, it } from 'vitest'
import { getProductBySlug, productSlugs, products, type ProductPageData } from '../data/products'

function expectNonEmptyString(value: unknown, label: string) {
  expect(typeof value, `${label} 应为字符串`).toBe('string')
  expect((value as string).trim().length, `${label} 不应为空`).toBeGreaterThan(0)
}

function validateProduct(product: ProductPageData) {
  expectNonEmptyString(product.slug, `${product.slug}.slug`)
  expectNonEmptyString(product.seo.title, `${product.slug}.seo.title`)
  expectNonEmptyString(product.seo.description, `${product.slug}.seo.description`)
  expectNonEmptyString(product.hero.h1Leading + product.hero.h1Highlight, `${product.slug}.hero 标题`)
  expectNonEmptyString(product.hero.demoImage, `${product.slug}.hero.demoImage`)

  // 回归防护：demoImage 曾误写为 /public/plugin/... 导致 404
  expect(product.hero.demoImage.startsWith('/public/'), `${product.slug}.hero.demoImage 不应含 /public/ 前缀`).toBe(false)
  expect(product.seo.ogImage.startsWith('/public/'), `${product.slug}.seo.ogImage 不应含 /public/ 前缀`).toBe(false)

  expect(product.features.length, `${product.slug}.features 不应为空`).toBeGreaterThan(0)
  expect(product.featureDetails.length, `${product.slug}.featureDetails 不应为空`).toBeGreaterThan(0)
  expectNonEmptyString(product.cta.title, `${product.slug}.cta.title`)
}

describe('products 数据', () => {
  it('共有 12 个产品，slug 唯一', () => {
    expect(products).toHaveLength(12)
    expect(new Set(productSlugs).size).toBe(productSlugs.length)
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

  it('每个产品的数据完整（SEO/hero/features/cta 无空值、图片路径无 /public/ 前缀）', () => {
    for (const product of products) {
      validateProduct(product)
    }
  })

  it('featureDetails 的 activePoint 初值合法', () => {
    for (const product of products) {
      for (const detail of product.featureDetails) {
        expect(detail.points.length, `${product.slug} 的 featureDetails.points 不应为空`).toBeGreaterThan(0)
      }
    }
  })
})
