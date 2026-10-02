/**
 * 页面 SEO composable
 *
 * 三个职责：
 * 1. 补回 keywords —— unhead v3 的类型中移除了 keywords 等非标准 flat key，
 *    但运行时仍会将其渲染为 `<meta name="keywords">`，这里补回类型定义。
 *    类型直接取自 auto-import 的 useSeoMeta 签名，避免引入其他 unhead 副本的类型。
 * 2. 派生 og/twitter 字段 —— 多数页面只需写 title 与 description，
 *    社交分享所需的 ogTitle/ogDescription/twitterTitle/twitterDescription
 *    语义相同，逐处手写造成字符串重复。此处自动补全，
 *    调用方显式传入的值优先。
 * 3. 派生 canonical —— 全局 head 里硬编码 canonical 会让所有内页指向首页。
 *    此处按 route.path 派生各页面自己的 canonical URL（尾斜杠与 URL 编码已规范化），
 *    调用方可通过 canonicalUrl 显式覆盖。
 */
import { SITE_URL } from '../data/site'
import { normalizePath } from '../utils/normalizePath'

/** useSeoMeta 入参中，title / description 等既接受字符串也接受 getter 的字段类型 */
type ResolvableMetaValue = NonNullable<Parameters<typeof useSeoMeta>[0]>['ogTitle']

/**
 * 页面 SEO 入参
 *
 * 交叉类型而非 interface：useSeoMeta 的参数类型是解析后的对象类型，
 * interface 无法 extends 条件类型/映射类型，故此处用交叉。
 */
export type PageSeoInput = Parameters<typeof useSeoMeta>[0] & {
  /** 非标准 meta key，unhead 类型中已移除，需手动声明 */
  keywords?: string
  /** 显式指定 canonical URL；缺省时按 SITE_URL + 当前路由路径派生 */
  canonicalUrl?: string
}

export function usePageSeo(input: PageSeoInput) {
  const { keywords, canonicalUrl, ...rest } = input

  // canonical 按当前页面路径派生（而非全局硬编码首页），保证每个内页指向自身 URL。
  // normalizePath 处理 URL 编码与尾斜杠，使 canonical 与 sitemap 的路由格式一致
  const route = useRoute()
  const resolvedCanonical = canonicalUrl ?? `${SITE_URL}${normalizePath(route.path)}`
  useHead({
    link: [{ rel: 'canonical', href: resolvedCanonical }]
  })

  // 仅在未显式指定时由 title/description 派生，避免覆盖调用方的意图。
  // ogTitle 与 twitterTitle 在 unhead 中接受 ResolvableTitle（string | Ref | getter），
  // 故派生结果需保持该类型而非收窄为 string。
  const ogTitle = (rest.ogTitle ?? rest.title) as ResolvableMetaValue
  const ogDescription = (rest.ogDescription ?? rest.description) as ResolvableMetaValue
  const twitterTitle = (rest.twitterTitle ?? rest.title) as ResolvableMetaValue
  const twitterDescription = (rest.twitterDescription ?? rest.description) as ResolvableMetaValue

  return useSeoMeta({
    ...rest,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    ...(keywords ? { keywords } : {})
  })
}