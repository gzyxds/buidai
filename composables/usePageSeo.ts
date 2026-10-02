/**
 * useSeoMeta 的兼容包装：unhead v3 的类型中移除了 keywords 等非标准 flat key，
 * 但运行时仍会将其渲染为 <meta name="keywords">，这里补回类型定义。
 * 类型直接取自 auto-import 的 useSeoMeta 签名，避免引入其他 unhead 副本的类型。
 */
export function usePageSeo(input: Parameters<typeof useSeoMeta>[0] & { keywords?: string }) {
  return useSeoMeta(input)
}
