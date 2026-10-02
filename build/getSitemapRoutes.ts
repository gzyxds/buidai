import fs from 'node:fs'
import path from 'node:path'
import { getDocsRoutes } from './getDocsRoutes'

/**
 * 构建期扫描产品详情实体，生成 /product/:slug 路由
 *
 * 本文件运行于 Node 上下文（nuxt.config 加载期），不能 import 应用侧的
 * data/products（其 entities.ts 依赖 import.meta.glob，属 Vite 语义）。
 * 实体约定「文件名 === slug」（products.test.ts 保障），故直接扫描
 * data/products/detail/ 目录文件名即可，与 productSlugs 同源。
 */
const getProductSlugs = (): string[] => {
  const detailDir = path.resolve(process.cwd(), 'data/products/detail')
  if (!fs.existsSync(detailDir)) {return []}
  return fs.readdirSync(detailDir)
    .filter(f => f.endsWith('.ts'))
    .map(f => f.replace(/\.ts$/, ''))
}

/**
 * 生成网站地图路由列表
 *
 * @description
 * 汇总所有需要生成 sitemap 的路由路径，包括：
 * - 静态页面路由
 * - 动态文档路由（通过 getDocsRoutes 获取）
 * - 动态产品路由（通过 productSlugs 生成）
 *
 * @returns {string[]} 返回包含所有路由路径的字符串数组
 *
 * @example
 * // 返回示例:
 * // ['/', '/agent', '/docs', '/docs/introduction', '/product', '/product/banana', '/blog', ...]
 */
export const getSitemapRoutes = (): string[] => {
  // 定义静态路由列表
  const staticRoutes: string[] = [
    '/',              // 首页
    '/agent',         // AI智能体页面
    '/buidai',        // 私有部署页面
    '/solutions',     // 解决方案页面
    '/plugin',        // 应用中心页面
    '/product',       // 产品中心页面
    '/pricing',       // 定价方案页面
    '/changelog',     // 更新日志页面
    '/blog',          // 博客列表页面
    '/resources',     // 资源下载页面
    '/contact',       // 联系我们页面
    '/about',         // 关于我们页面
    '/download'       // 下载页面
  ]

  // 获取动态文档路由
  const docsRoutes = getDocsRoutes()

  // 获取动态产品路由
  const productRoutes = getProductSlugs().map(slug => `/product/${slug}`)

  // 合并所有路由
  const allRoutes = [...staticRoutes, ...docsRoutes, ...productRoutes]

  // 去重并排序
  return Array.from(new Set(allRoutes)).sort()
}
