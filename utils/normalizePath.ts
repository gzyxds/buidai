/**
 * 规范化路由路径
 *
 * 1. URL 解码：浏览器会对中文 slug 编码（如 /blog/%E4%B8%AD%E6%96%87），
 *    content 集合查询需要解码后的原始路径才能命中，否则中文 slug 取不到内容
 * 2. 移除尾部斜杠：与 sitemap 的路由格式保持一致（除非是根路径）
 *
 * @param path 原始路由路径（通常来自 route.path）
 * @returns 解码且无尾斜杠的路径
 */
export function normalizePath(path: string): string {
  const decoded = decodeURIComponent(path)
  return decoded.endsWith('/') && decoded !== '/' ? decoded.slice(0, -1) : decoded
}
