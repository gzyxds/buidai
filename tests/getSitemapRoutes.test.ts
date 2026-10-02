import { describe, expect, it, vi } from 'vitest'

import { getSitemapRoutes } from '../build/getSitemapRoutes'

vi.mock('../build/getDocsRoutes', () => ({
  getDocsRoutes: () => ['/docs', '/docs/introduction/start', '/agent']
}))

describe('getSitemapRoutes', () => {
  it('包含全部 13 个静态路由', () => {
    const routes = getSitemapRoutes()
    const expected = [
      '/',
      '/agent',
      '/buidai',
      '/solutions',
      '/plugin',
      '/product',
      '/pricing',
      '/changelog',
      '/blog',
      '/resources',
      '/contact',
      '/about',
      '/download'
    ]
    for (const route of expected) {
      expect(routes).toContain(route)
    }
  })

  it('为每个产品生成 /product/:slug 路由', () => {
    const routes = getSitemapRoutes()
    expect(routes).toContain('/product/banana')
    expect(routes).toContain('/product/ppt')
    expect(routes).toContain('/product/knowledge-base')
    expect(routes).toContain('/product/digital-human-saas')
    expect(routes).toContain('/product/yichuang-ai')
    expect(routes).toContain('/product/yichuang-paper')
    expect(routes.filter(r => r.startsWith('/product/'))).toHaveLength(16)
  })

  it('合并文档路由', () => {
    const routes = getSitemapRoutes()
    expect(routes).toContain('/docs')
    expect(routes).toContain('/docs/introduction/start')
  })

  it('去重（文档路由与静态路由重叠时只保留一份）', () => {
    const routes = getSitemapRoutes()
    expect(routes.filter(r => r === '/agent')).toHaveLength(1)
  })

  it('结果按字典序排序', () => {
    const routes = getSitemapRoutes()
    const sorted = [...routes].sort()
    expect(routes).toEqual(sorted)
  })

  it('不包含演示页（/demo 由 sitemap.exclude 排除，路由生成层不含该页）', () => {
    expect(getSitemapRoutes()).not.toContain('/demo')
  })
})
