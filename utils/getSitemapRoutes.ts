import { getDocsRoutes } from './getDocsRoutes'

/**
 * 生成网站地图路由列表
 * 
 * @description
 * 汇总所有需要生成 sitemap 的路由路径，包括：
 * - 静态页面路由
 * - 动态文档路由（通过 getDocsRoutes 获取）
 * 
 * @returns {string[]} 返回包含所有路由路径的字符串数组
 * 
 * @example
 * // 返回示例:
 * // ['/', '/agent', '/docs', '/docs/introduction', '/blog', ...]
 */
export const getSitemapRoutes = (): string[] => {
  // 定义静态路由列表
  const staticRoutes: string[] = [
    '/',              // 首页
    '/agent',         // AI智能体页面
    '/buidai',        // 私有部署页面
    '/solutions',     // 解决方案页面
    '/plugin',        // 应用中心页面
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
  
  // 合并所有路由
  const allRoutes = [...staticRoutes, ...docsRoutes]
  
  // 去重并排序
  return Array.from(new Set(allRoutes)).sort()
}
