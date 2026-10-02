import fs from 'node:fs'
import path from 'node:path'

/**
 * 遍历 content/docs 目录生成文档路由列表
 *
 * 文件名即最终 slug（排序由 frontmatter 的 order 字段控制，见 components/docs/Sidebar.vue），
 * 用于 Nitro 预渲染配置，确保所有文档页面都能被静态生成。
 *
 * @returns {string[]} 返回包含所有文档页面路径的字符串数组
 *
 * @example
 * // 目录结构: content/docs/introduction/index.md
 * // 返回: ['/docs', '/docs/introduction']
 */
export const getDocsRoutes = () => {
  const routes: string[] = []
  const docsDir = path.resolve(process.cwd(), 'content/docs')

  // 如果文档目录不存在，直接返回空数组
  if (!fs.existsSync(docsDir)) {return routes}

  /**
   * 递归遍历目录函数
   * @param {string} dir 当前遍历的目录绝对路径
   * @param {string} urlPrefix 当前目录对应的 URL 前缀
   */
  const traverse = (dir: string, urlPrefix: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // 递归处理子目录
        traverse(path.join(dir, entry.name), `${urlPrefix}/${entry.name}`)
      } else if (entry.name.endsWith('.md')) {
        // 处理 Markdown 文件，去除 .md 后缀
        const cleanName = entry.name.replace(/\.md$/, '')

        // 如果文件名是 index，则路由为当前目录路径
        if (cleanName === 'index') {
          routes.push(urlPrefix)
        } else {
          // 否则路由为 "当前目录/文件名"
          routes.push(`${urlPrefix}/${cleanName}`)
        }
      }
    }
  }

  // 从 /docs 根路径开始遍历
  traverse(docsDir, '/docs')
  routes.push('/docs') // 确保 /docs 索引页面也被包含
  // prerender.routes 要求由调用方保证唯一（prerendering.md）：
  // traverse 命中 content/docs/index.md 时已 push 过一次 /docs，此处去重
  return Array.from(new Set(routes))
}
