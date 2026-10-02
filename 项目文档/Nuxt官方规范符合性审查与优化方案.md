# Nuxt 4 官方规范符合性审查与优化方案

> 审查对象：Nuxt 4.5.2 静态站点（`nuxt generate` → dist，模块：@nuxt/ui v4、@nuxt/content v3、@nuxtjs/sitemap）
> 审查依据：`项目文档/Nuxt官网文档/`（2026-10-02 抓取的 nuxt.com 官方文档存档，含 directory-structure / getting-started / guide / api 四大板块）
> 审查日期：2026-10-03
> 审查方式：5 路并行深审（目录骨架 / 路由-SEO-预渲染 / 组件-水合 / composables-数据层 / 工程化-性能-可访问性），逐条对照官方文档原文，关键结论已对源码与 `dist/` 产物双重核实
> 前置关系：`项目文档/项目代码审计与清理方案.md`（2026-10-02，已全部完成）覆盖代码级清理；本报告聚焦**官方规范符合性**，已核实前一轮结论无回退，不重复已修复项

---

## 一、结论总览

**项目整体规范符合度较高**：数据获取选型、SSR 安全、预渲染链路、TypeScript 姿势、SEO 基础设施均与官方推荐一致。共发现 **6 个 P1、12 个 P2、15 个 P3** 问题，无 P0（无阻断构建/部署的违规）。

最值得优先处理的三件事：

1. **og:image 相对路径**——社交抓取器无法解析，16 个产品页 + 全部博客页分享无图（一行代码修复）
2. **`<html>` 缺 `lang` 属性**——官方文档明确示例要求，且是 WCAG 硬性条款（一行配置）
3. **Sidebar 递归实例共享 `useAsyncData` key**——叶子实例会把共享缓存与 `_payload.json` 里的文档列表覆写为 `[]`，dev 下触发官方 E3004 诊断

### 问题清单（按优先级）

| # | 优先级 | 问题 | 一句话改法 |
| --- | --- | --- | --- |
| 1 | **P1** | og:image 输出相对路径，社交抓取器无法解析 | usePageSeo 统一归一化为绝对 URL |
| 2 | **P1** | `<html>` 缺 `lang` 属性 | nuxt.config `app.head.htmlAttrs` |
| 3 | **P1** | ESLint 手写 auto-import 白名单，未用官方 @nuxt/eslint | 迁移 `withNuxt()` 模式 |
| 4 | **P1** | Sidebar 递归实例共享 useAsyncData key，payload 被覆写为 `[]` | handler 纯化，props 判断移出 |
| 5 | **P1** | public/ 95MB 图片未优化，最大单图 6MB | 一次性离线压缩脚本 |
| 6 | **P1** | 博客日期 formatDate 时区敏感，hydration mismatch 风险 | 补 `timeZone: 'UTC'` |
| 7 | P2 | twitter:card 全站缺失 | usePageSeo 默认派生 |
| 8 | P2 | og:url 除 demo 外全站缺失 | 与 canonical 同源派生 |
| 9 | P2 | 404.html 是空壳 SPA shell，error.vue 内容需 JS 启动后才出现 | `experimental.prerenderErrorPages: true` |
| 10 | P2 | createError 404 缺 `fatal: true`，客户端导航到失效 slug 不会出全屏错误页 | 加 `fatal: true` |
| 11 | P2 | createError 用已弃用的 statusCode/中文 statusMessage | 改 `status` + `message` |
| 12 | P2 | `<Market :limit="8">` 传入未声明 prop，静默失效 | 改 `:default-limit` |
| 13 | P2 | UChangelogVersions 侵占 @nuxt/ui 的 U 前缀命名空间 | 重命名 AppChangelogVersions |
| 14 | P2 | 构建期 Node 工具混在 app 的 utils/ 自动导入目录 | 移到根级 build/ |
| 15 | P2 | entities.ts 内嵌 jiti 兼容 hack，双运行时耦合 | 拆成 app / 构建期两层 |
| 16 | P2 | QR 弹窗用 window 事件总线，未用官方 useState | useState 共享状态 |
| 17 | P2 | blog/changelog 列表 queryCollection 未 .select()，整份 markdown AST 进 payload | 补 .select() |
| 18 | P2 | 缺 NuxtRouteAnnouncer 与 skip link | app.vue + layouts 补齐 |
| 19 | P2 | 全局 scroll-behavior: smooth 未尊重 prefers-reduced-motion | 包 @media 查询 |
| 20 | P2 | engines 允许 Node 20.19，官方要求 22.x+ | `>=22.0.0` |
| 21 | P2 | 托管缓存策略缺失：`_nuxt/`（带 hash）与 HTML 未区分 | esa.jsonc / CDN 规则 |
| 22 | P2 | og:image 兜底图为 SVG，主流社交平台不渲染 | 换 1200×630 PNG |
| 23 | P2 | 组件命名一致性欠账（4 处） | 按官方命名规则统一 |
| 24 | P2 | 目录结构停留在 Nuxt 3 根级布局（决策项） | 迁移 app/ 或显式声明保留 |
| 25 | P3 | 全站无 titleTemplate，18 页标题手写全串、风格不一 | app.vue 设 titleTemplate |
| 26 | P3 | demo.vue 绕过 usePageSeo 裸写 useHead，且与 sitemap exclude 口径矛盾 | 统一走 usePageSeo |
| 27 | P3 | AppFooter 友链内链用原生 `<a>`；含自站"外链"与 `#` 死链 | NuxtLink 化 + 清理 |
| 28 | P3 | frameSides 自定义 pageMeta 未做类型增强 | declare module PageMeta |
| 29 | P3 | env.d.ts 冗余（零消费的 vite/client 引用） | 删除 |
| 30 | P3 | package.json 细节偏离官方模板（postinstall / nuxt 位置 / Nuxt.js 旧称 / 脚本重复） | 按官方模板对齐 |
| 31 | P3 | 仅一个 layout，官方建议并入 app.vue（可选） | 上提合并 |
| 32 | P3 | app.vue 内联三段 JSON-LD（可选 plugin 化） | 抽 plugin |
| 33 | P3 | FallingText 正文不进 SSR HTML（SEO 降级）；首屏外区块未用官方 Lazy Hydration | 文本层 SSR / hydrate-on-visible |
| 34 | P3 | props/emits 声明风格 2 处不一致 | 统一 TS 泛型 + tuple 语法 |
| 35 | P3 | 裸 `<img>` 属性缺口清单（CLS / 反用 lazy） | 按清单补齐 |
| 36 | P3 | 测试环境手工 mock vue 生命周期与 window | happy-dom / @nuxt/test-utils |
| 37 | P3 | 跑马灯随机化被 SSR 一致性牺牲，onNuxtReady 是官方适用点 | onNuxtReady 恢复随机 |
| 38 | P3 | content.config.ts 两个集合日期类型不一致（z.date vs z.string） | 统一 z.string + ISO |
| 39 | P3 | getDocsRoutes 对 `/docs` 无去重 | 返回前 Set 去重 |
| 40 | P3 | payloadExtraction: true 为 Nuxt 4 默认值，显式声明冗余 | 删除或注释意图 |
| 41 | P3 | README 工程化声明与现状矛盾（2 处） | 同步 |
| 42 | P3 | robots.txt 与 sitemap exclude 口径不一致（/demo） | Disallow /demo |
| 43 | P3 | 官方 CLI 能力未利用（nuxt cleanup / analyze） | 加 scripts |
| 44 | P3 | AppBanner 用 localStorage，官方推荐 useCookie（备忘） | 日后迁移 useCookie |

---

## 二、P1 — 确凿缺陷（有可观察的线上后果）

### 1. og:image 输出相对路径，社交抓取器无法解析 ⭐ 一行修复、收益最大

**定位**：`composables/usePageSeo.ts:58-59`（`const ogImage = rest.ogImage ?? DEFAULT_OG_IMAGE` —— 显式传入的相对路径被原样透传）；传入方：`pages/blog/[...slug].vue:302`（frontmatter `image: '/blog/blog.webp'`）、`data/products/detail/*.ts` 16 个产品文件（`ogImage: '/product/xxx.png'`）。

**产物证据**：`dist/product/banana/index.html` 实测 `property="og:image" content="/product/human-1.png"`；`dist/blog/1/index.html` 实测 `content="/blog/blog.webp"`。

**官方依据**：`api/composables/use-seo-meta.md` 示例 ogImage 使用绝对 URL；OG 协议要求 og:image 为绝对 URL——Facebook/X/微信等抓取器对相对路径直接忽略。

**影响**：16 个产品详情页 + 全部博客详情页分享到社交平台无缩略图；而项目明明配了图。

**改法**（`usePageSeo.ts` 内一处归一化，覆盖全部调用方）：

```ts
/** og:image / twitter:image 协议要求绝对 URL，相对路径转绝对 */
const toAbsoluteUrl = (u: string) => /^https?:\/\//.test(u) ? u : new URL(u, SITE_URL).href

const ogImage = rest.ogImage ? toAbsoluteUrl(rest.ogImage) : DEFAULT_OG_IMAGE
const twitterImage = rest.twitterImage ? toAbsoluteUrl(rest.twitterImage) : ogImage
```

改后重点验证 `dist/product/banana/index.html` 与 `dist/blog/1/index.html` 的 og:image 变为 `https://www.buidai.com/...` 全 URL。

---

### 2. `<html>` 缺 `lang` 属性

**定位**：`nuxt.config.ts:111-137`（`app.head` 无 `htmlAttrs`）；产物实测 `dist/index.html`、`dist/about/index.html` 均为裸 `<html>`。全仓 grep `htmlAttrs` 零命中。

**官方依据**：`getting-started/seo-meta.md:21-29` —— "It's good practice to set tags here that won't change such as your site title default, **language** and favicon"，官方示例即 `htmlAttrs: { lang: 'en' }`；同时是 WCAG 3.1.1（Language of Page）硬性要求。

**改法**：

```ts
app: {
  head: {
    htmlAttrs: { lang: 'zh-CN' },
    title: SITE_TITLE,
    ...
  }
}
```

---

### 3. ESLint 未采用官方 @nuxt/eslint 集成，手写白名单已现漂移

**定位**：`eslint.config.js:14-40`（`collectComposableNames()` 正则扫描 composables）、`:47-66`（`vueAutoImports` 手工罗列 60+ Vue 导出）、`:69-121`（`nuxtRuntimeApis` 手工罗列 50+ Nuxt/Content API）。

**漂移证据**：`nuxtRuntimeApis` 中 `definePageMeta` 已重复出现两次——这正是手工白名单的典型漂移征兆。Nuxt 升级新增 API、@nuxt/content 更新 `queryCollection*` 系列时都需人工同步；模块自带的 Nuxt/Vue 规则集全部缺失。

**官方依据**：`guide/concepts/code-style.md:12` —— "The recommended approach for Nuxt is to enable ESLint support using the `@nuxt/eslint` module, that will setup **project-aware** ESLint configuration for you"。

**改法**（官方姿势，CI 的 `eslint .` 命令无需变）：

```bash
npx nuxt module add @nuxt/eslint
```

```js
// eslint.config.js 迁移后
import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // 原有团队自定义规则（no-console、eqeqeq 等）保留在此，
  // 删除 collectComposableNames、vueAutoImports、nuxtRuntimeApis、
  // 手工 tseslint/vuePlugin/parser 接线
})
```

迁移后 devDependencies 中 `@eslint/js`、`typescript-eslint`、`eslint-plugin-vue`、`vue-eslint-parser`、`globals` 大多可移除（以 `npm run lint` 通过为准）。若短期内不迁移，至少先把 `definePageMeta` 重复项清掉。

---

### 4. Sidebar 递归实例共享 useAsyncData key，叶子实例把共享数据覆写为 `[]`

**定位**：`components/docs/Sidebar.vue:162-173` —— `useAsyncData('sidebar-docs', ...)` 的 handler 内 `if (props.level !== 0 || props.navigation) { return [] }`；`:44`、`:77` 模板递归 `<DocsSidebar :navigation="item.children" :level="level + 1" />`，每个分类组都会实例化一个 level>0 的实例。

**官方依据**：`api/composables/use-async-data.md`「Shared State and Option Consistency」——"The following options **must be consistent** across all calls with the same key: **handler function**…"；`getting-started/data-fetching.md` 同节："If you need independent instances, use different keys." dev 模式下同 key 不同 handler 会触发官方诊断 `NUXT_E3004`。

**影响**（按 Nuxt 4.5.2 源码链路核实）：父实例 resolve 后缓存释放，递归实例重跑叶子 handler 返回 `[]`，`nuxtApp.payload.data['sidebar-docs']` 被覆写为 `[]` 并序列化进 `_payload.json` → 客户端水合时 `items` 为空且无重取机制；生产产物数据错误，无报错。

**改法**：handler 只做纯查询（所有实例一致），props 判断移到消费侧：

```ts
// handler 全实例统一，满足官方「同 key 必须同 handler」
const { data: fetchedDocs } = useAsyncData('sidebar-docs', () =>
  queryCollection('docs')
    .select('title', 'path', 'category', 'order', 'navigation')
    .order('order', 'ASC')
    .all()
)

// items computed 中按 props 过滤：
const items = computed(() => {
  if (props.navigation) return props.navigation
  if (props.level !== 0 || !fetchedDocs.value) return []
  return groupByCategory(fetchedDocs.value)
})
```

**验证**：dev 下 DevTools Payload 面板 `sidebar-docs` 应为完整文档列表；`NUXT_E3004` 警告消失；`dist/docs/framework/define/index.html` 同名 `_payload.json` 中该 key 非空。

---

### 5. public/ 95MB 图片未优化，最大单图 6MB

**定位**（Top 大头，合计约 60MB）：

| 文件 | 体积 | 文件 | 体积 |
| --- | --- | --- | --- |
| `product/FeatureSteps-1.png` | 5.99MB | `product/human-3.png` | 4.07MB |
| `images/agent/Fullstack.png` | 5.89MB | `product/human.png` | 3.06MB |
| `images/agent/privatization.png` | 5.84MB | `plugin/article-img.png` | 2.44MB |
| `images/agent/Outofthebox.png` | 5.73MB | `agent.svg` | 1.4MB（内嵌位图） |
| `images/agent/Network-wide.png` | 5.67MB | `images/placeholder.webp` | **1.49MB 的占位图**（还是 ProductShowcase 的 error fallback，`ProductShowcase.vue:162`） |

**官方依据**：`guide/best-practices/performance.md` —— "Unoptimized images can have a significant negative impact on your website performance, specifically the Largest Contentful Paint (LCP) score"；`getting-started/assets.md` —— public/ 内容原样服务、不参与构建处理。`nuxt.config.ts:82` 的 `compressPublicAssets: true` 只生成 .gz/.br，对 PNG 位图几乎无收益（PNG 本身已是压缩格式）。

**改法**（一次性离线资产瘦身，不引入 @nuxt/image 的手动替代）：

1. 批量转 WebP + 按显示尺寸重采样（页面实际显示宽约 460–720px，2x 即 ≤1440px，5.9MB 截图通常可压到 10% 以下）。一次性脚本（devDependency 安装 sharp）：

```js
// scripts/optimize-images.mjs（跑一次后删除或纳入 CI 检查）
import sharp from 'sharp'
import { globSync } from 'node:fs'
for (const f of globSync('public/**/*.png')) {
  const out = f.replace(/\.png$/, '.webp')
  await sharp(f).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out)
}
```

2. `images/placeholder.webp` 单独压到 <50KB（占位图无需画质）。
3. `agent.svg`（1.4MB）栅格化或瘦身。
4. `plugin/即梦AI绘画.png`、`艺创aigc.png` 等中文文件名改 ASCII（URL 编码 / CDN 兼容风险）。
5. 替换引用路径后，把 `scripts/unused-images.mjs` 的检查纳入 CI，防止无主资产再膨胀。
6. 预期收益：public/ 从 95MB 降至 ~15-20MB，LCP 显著改善。

---

### 6. 博客日期 formatDate 时区敏感，存在 hydration mismatch

**定位**：`pages/blog/index.vue:147-155`、`pages/blog/[...slug].vue:306-314`，模板中直接调用。

```ts
const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
```

**官方依据**：`guide/best-practices/hydration.md`「Dynamic Content Based on Time」——基于时间/环境差异的内容，SSR 与客户端渲染不一致会强制整树重渲染。

**影响**：frontmatter 为 date-only 字符串（`content/blog/4.md: date: 2025-12-18`），`new Date('2025-12-18')` 按 **UTC 零点**解析，`toLocaleDateString` 按**运行环境时区**输出：服务器（Vercel/CI，UTC）渲染「12月18日」，UTC-5 时区的浏览器水合时得到「12月17日」→ 文本 mismatch。

**改法**（两处同样处理）：

```ts
return new Date(dateString).toLocaleDateString('zh-CN', {
  year: 'numeric', month: 'long', day: 'numeric',
  timeZone: 'UTC'   // 与 date-only 字符串的解析时区一致
})
```

---

## 三、P2 — 官方明确支持但缺失 / 行为不符预期

### 7. twitter:card 全站缺失，派生的 twitter 标签被浪费

**定位**：`composables/usePageSeo.ts:56-69` 派生了 `twitterTitle/twitterDescription/twitterImage`，但从未设置 `twitterCard`；仅 `pages/product/index.vue:15`、`pages/product/[slug].vue:24`、`pages/demo.vue:112` 手写。产物证据：`dist/about/index.html` 有 `twitter:title/image` 但无 `twitter:card`。

**官方依据**：`getting-started/seo-meta.md:106-114` 官方 useSeoMeta 标准示例包含 `twitterCard: 'summary_large_image'`。缺它时 X 平台降级为无大图 summary。

**改法**：`usePageSeo.ts` 的 useSeoMeta 调用加一行：

```ts
twitterCard: rest.twitterCard ?? 'summary_large_image',
```

### 8. og:url 除 demo 外全站缺失

**定位**：`usePageSeo.ts:47-70` 未派生 ogUrl；产物 `dist/index.html`、`dist/about/index.html`、`dist/blog/1/index.html` 均无 og:url（仅 demo 页手写了）。

**官方依据**：`getting-started/seo-meta.md` og:* 系列完整用法；项目已有逐页 canonical（`usePageSeo.ts:46`），ogUrl 应与其同源。

**改法**：`useSeoMeta({ ogUrl: resolvedCanonical, ... })` 一行。

### 9. 404.html 是空壳，error.vue 内容要等 JS 启动后才出现

**定位**：产物实测 `dist/404.html` 与 `dist/200.html` 完全相同（各 8265 字节，无「页面未找到」文案，纯 SPA shell）；`nuxt.config.ts` 未启用预渲染错误页。

**官方依据**：`guide/concepts/rendering.md:143-149` —— "By default 404.html is an empty shell… You can prerender it instead: `experimental: { prerenderErrorPages: true }`"，构建期用合成 404 渲染 error.vue 写入 404.html。已核实 error.vue 的 `useRouter`/`history` 仅在点击回调中执行，无请求路径依赖，满足该选项前提。

**改法**：

```ts
experimental: {
  payloadExtraction: true,
  prerenderErrorPages: true   // 静态托管 404 fallback 直接呈现完整错误页
}
```

### 10. createError 404 缺 `fatal: true`

**定位**：`pages/blog/[...slug].vue:236`、`pages/docs/[...slug].vue:152`、`pages/product/[slug].vue:12`。

**官方依据**：`api/utils/create-error.md:22-23` —— "on client-side, it will throw a **non-fatal** error… If you need to trigger a full-screen error page, then you can do this by setting `fatal: true`"。本站直接访问不存在 URL 由托管 404.html 兜底，但**客户端 NuxtLink 导航**到失效 slug（旧 sitemap 链接、被删文章的相邻推荐）时，非 fatal 错误只留空渲染。

**改法**：三处统一 `throw createError({ status: 404, message: '…不存在', fatal: true })`。

### 11. createError 使用已弃用 API 且 statusMessage 为非 ASCII

**定位**：同上三处（`statusCode` + 中文 `statusMessage`）；`error.vue:80` 读 `error.statusCode`。

**官方依据**：`directory-structure/app/error.md:36-48` —— `statusCode`/`statusMessage` 标注为 legacy/deprecated；`getting-started/error-handling.md:185-188` —— statusMessage 只应含 ASCII，非 ASCII 内容必须用 `message`。

**改法**：随第 10 条一并改 `status`/`message`；`error.vue` 改读 `error.status`（保留 `?? error.statusCode` 兼容亦可）。

### 12. `<Market :limit="8">` 传入未声明的 prop，静默失效

**定位**：`pages/buidai.vue:28`；`components/Market.vue:142-152` 的 props 仅 `defaultLimit`/`category`。

**影响**：`limit` 落入 attrs 透传到根 `<section>` 成为无效 HTML 属性；因默认值恰为 8 无可见差异，但意图失效且污染 DOM。

**官方依据**：Vue SFC props 契约（未声明 prop 进 attrs）；`guide/concepts/auto-imports.md` 强调类型保全。

**改法**：改 `:default-limit="8"`（若意图就是 8 可直接删除该属性）。

### 13. UChangelogVersions 侵占 @nuxt/ui 的 U 前缀命名空间

**定位**：`components/UChangelogVersions.vue`；`.nuxt/components.d.ts` 中 @nuxt/ui 已注册 `UChangelogVersion`（单数）等 U* 组件——本组件与库组件仅差一个 `s`。

**官方依据**：`directory-structure/app/components.md`——前缀是命名空间隔离机制，`U*` 是 @nuxt/ui 的保留段；未来库新增同名组件时项目组件优先，问题极难排查。

**改法**：重命名 `components/AppChangelogVersions.vue`，同步 `pages/changelog.vue:94` 引用。

### 14. 构建期 Node 工具混在 app 的 utils/ 自动导入目录

**定位**：`utils/getDocsRoutes.ts:1-2`（`import fs from 'node:fs'`、`node:path`）、`utils/getSitemapRoutes.ts`；消费方是 `nuxt.config.ts:4-5,46-47,90`（Node 上下文）与 tests/，运行时应用代码零使用。

**官方依据**：`directory-structure/app/utils.md` —— "These utils are **only available within the Vue part of your app**"，且导出会进入自动导入表与 IDE 补全。任何组件误用这些符号会在浏览器因 `node:fs` 直接崩溃；语义上它们是构建期工具而非 Vue app 工具。

**改法**：两个文件移到根级 `build/`（或 `scripts/`），`nuxt.config.ts` 与 `tests/` 的相对导入同步更新。迁移 app/ 目录时它们天然留在根级，边界清晰。

### 15. entities.ts 内嵌 jiti 兼容 hack，双运行时耦合（项目最脆的一段代码）

**定位**：`data/products/entities.ts:28-51`（`typeof require === 'function' && typeof __dirname === 'string'` 的 fs.readdirSync 分支 + `import.meta.glob` 分支）；上游：`nuxt.config.ts:47`（sitemap → getSitemapRoutes → data/products）与浏览器端 `pages/product/[slug].vue:2`、`pages/plugin.vue:242`。

**官方依据**：`directory-structure/shared.md`「Nitro Code in the Vue App」——共享代码不得携带任一侧运行时专有 API，否则破坏客户端构建或泄漏服务端逻辑到客户端 bundle。

**改法**（与第 14 条联动，拆两层）：

- app 侧 `data/products/entities.ts` 只保留 `import.meta.glob`（纯 Vite 语义），删除 `require`/`__dirname`/fs 分支
- 构建期需要的 productSlugs 由 `build/`（或 `scripts/`）下独立的 fs 扫描工具提供，`nuxt.config.ts` 不再 import app 数据模块

### 16. QR 弹窗全局状态用 window 事件总线，未用官方 useState

**定位**：`utils/qrModal.ts:14-18`（`window.dispatchEvent(new CustomEvent(...))`）、`composables/useQrModal.ts:37-51`（dispatch）、`components/BackToTop.vue:114-120`（`window.addEventListener(QR_MODAL_EVENT)` 接收端）。

**官方依据**：`getting-started/state-management.md` —— "Nuxt provides the useState composable to create a reactive and SSR-friendly shared state across components"；跨组件共享可变状态的官方指定路径是 useState（或 provide/inject）。window 在 SSR 不存在，迫使 dispatch 的调用契约只能是隐式的（仅限 client 回调）；测试也不得不手工 stub window。

**改法**：

```ts
// composables/useQrModalState.ts
export const useQrModalState = () => useState<QrModalConfig | null>('qr-modal', () => null)
```

useQrModal 写入 state，BackToTop 读取并在关闭时置 null；`utils/qrModal.ts` 与 `QR_MODAL_EVENT` 整体删除，useQrModal 测试不再需要 window stub。

### 17. blog/changelog 列表 queryCollection 未 .select()，整份 markdown AST 进 payload

**定位**：`pages/blog/index.vue:121-124`（`queryCollection('blog').order('date','DESC').all()`）、`pages/changelog.vue:116-118`（同模式）；对照正面示例 `pages/docs/index.vue:83-89` 已用 `.select(...)`。两页模板都只消费 `path/title/description/category/date/image/tags` 等元数据、不渲染正文。

**官方依据**：`getting-started/data-fetching.md`「Minimize payload size」——只取需要的字段，"will prevent unwanted data from being added to the payload"。

**影响**：每篇文章完整 `body`（Markdown AST）被拉进页面数据并写入 `_payload.json`，体积随文章数线性膨胀。

**改法**：与 docs/index.vue 对齐：

```ts
// blog/index.vue
.select('title', 'description', 'category', 'date', 'image', 'tags', 'path')
// changelog.vue
.select('title', 'description', 'date', 'image', 'to', 'target', 'isMajor', 'authors')
```

### 18. 缺 NuxtRouteAnnouncer 与 skip link（官方可访问性清单两处硬要求）

**定位**：`app.vue:1-13`（UApp 内无 announcer）；`layouts/default.vue:16`（`<main>` 无 id/tabindex，模板前无跳转链接）。

**官方依据**：`guide/best-practices/accessibility.md`——"Route Announcements"：客户端路由后屏幕阅读器无法感知翻页，应在 app.vue 放 `<NuxtRouteAnnouncer />`；"Focus Management"：skip link 应为首个 tab stop，`<main>` 需 `tabindex="-1"` 才能接受焦点。

**改法**：

```vue
<!-- app.vue -->
<UApp>
  <NuxtRouteAnnouncer />
  <NuxtLayout>...
```

```vue
<!-- layouts/default.vue 模板最前 -->
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 ...">跳到主要内容</a>
...
<main id="main" tabindex="-1">
```

### 19. 全局 scroll-behavior: smooth 未尊重 prefers-reduced-motion

**定位**：`assets/css/main.css:44`。组件级动画已处理 reduced-motion（如 `HeroSection.vue:451`），唯独全局平滑滚动漏了。

**官方依据**：`guide/best-practices/accessibility.md`「Scroll Behavior」——"smooth scrolling should respect the user's `prefers-reduced-motion` setting"。

**改法**：

```css
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

### 20. engines 允许 Node 20.19，低于官方 22.x 要求，三处版本声明不一致

**定位**：`package.json:7-9`（`"node": ">=20.19.0"`）；`.nvmrc` = 22；`.github/workflows/ci.yml` node-version: 22。

**官方依据**：`getting-started/installation.md:25` —— "**Node.js - 22.x or newer**"。

**改法**：engines 改 `">=22.0.0"`；CI 改 `node-version-file: .nvmrc` 消除第三处声明。

### 21. 托管缓存策略缺失：`_nuxt/`（带 hash）与 HTML 未区分

**定位**：`esa.jsonc` 仅 name/installCommand/assets.directory/notFoundStrategy 四项，无缓存配置。

**官方依据**：`getting-started/assets.md`（public/ 文件名保持原样、无 hash）与 Nuxt 产物模型（`_nuxt/*` 带 content hash 可永久缓存；HTML/sitemap/robots 为构建期可变内容）；`getting-started/deployment.md` 静态部署模型。

**改法**（EdgeOne 控制台或 esa.jsonc 若支持 headers）：

| 资产 | Cache-Control |
| --- | --- |
| `/_nuxt/*` | `public, max-age=31536000, immutable` |
| `*.html`、`robots.txt`、`sitemap.xml`、`_payload.json` | `no-cache`（或短 max-age + 协商缓存） |

同时确认 `compressPublicAssets` 生成的 `.br/.gz` 被 CDN 以正确 `Content-Encoding` 分发，避免双重压缩。

### 22. og:image 兜底图为 SVG，主流社交平台不渲染

**定位**：`usePageSeo.ts:38` `DEFAULT_OG_IMAGE = ${SITE_URL}/ogImage.svg`（产物实测生效于未传图的页面）。

**官方依据**：Open Graph / Twitter Card 平台（微信/X/Facebook）只渲染位图；官方 useSeoMeta 示例 og:image 用 png。项目 demo 页自己都改用了 `.png`（`pages/demo.vue:97`）。

**改法**：把 ogImage 卡片导出一张 1200×630 PNG（<300KB）为 `public/ogImage.png`，`DEFAULT_OG_IMAGE` 指向它（可保留 svg 作为站内展示）。

### 23. 组件命名一致性欠账（4 处）

**官方依据**：`directory-structure/app/components.md`——「we recommend that the component's filename matches its name」；路径前缀（pathPrefix）与目录约定。

| 问题 | 定位 | 改法 |
| --- | --- | --- |
| 文件名与注册名不一致 | `components/docs/Sidebar.vue` → 注册名 `DocsSidebar` | 改名 `DocsSidebar.vue` |
| landing/ 目录全部 14 个文件名不带前缀（agent/、buidai/ 等目录都带） | `components/landing/HeroSection.vue` → `LandingHeroSection` | 文件名补 `Landing` 前缀；或改用分组目录 `(landing)/` 去前缀（二选一，全站引用同步） |
| 显式 import 绕过自动导入，与全站不一致 | `pages/buidai.vue:10` import ProductShowcase，同文件 `:29` 使用 | 删 import，改 `<LandingProductShowcase />` |
| 全站唯一单词组件名 + 官方多词规则被整体关闭 | `components/Market.vue`；`eslint.config.js:176` `vue/multi-word-component-names: 'off'` | 改名 `AppMarket.vue`（或 MarketShowcase），恢复该 lint 规则 |

### 24. 目录结构停留在 Nuxt 3 根级布局（决策项，官方允许保留）

**定位**：`pages/ components/ composables/ layouts/ utils/ assets/ data/`、`app.vue`、`error.vue`、`app.config.ts` 全部在根级，无 `app/` 目录；实测 `.nuxt/tsconfig.app.json` include `../**/*`，v3 兼容回退生效、当前结构工作正常。

**官方依据**：`getting-started/upgrade.md`——Nuxt 4 默认 srcDir 为 `app/`，但 "migration is **not required**. If you wish to keep your current folder structure, Nuxt should auto-detect it"。官方列出的保留代价：根级结构使 FS watcher 扫描 `.git/`、`node_modules/`，"significantly delay startup on non-Mac OSes"。

**改法（若迁移，官方步骤）**：

1. 新建 `app/`，移入：`assets/ components/ composables/ layouts/ pages/`、运行时的 `utils/`（剩余 5 个）、`data/`（16 处 `~/data/site` 引用依赖 `~` 别名随 srcDir 走）、`app.vue`、`error.vue`、`app.config.ts`
2. 留在根级：`nuxt.config.ts`、`content/`、`public/`、`tests/`、`scripts/`、新增的 `build/`
3. nuxt.config.ts 需改 3 个相对导入：`'./data/site'` → `'./app/data/site'`，`'./utils/getDocsRoutes'`、`'./utils/getSitemapRoutes'` → 新位置（node 上下文不走 `~`）；`css: ['~/assets/css/main.css']` 无需改（`~` 自动指向新 srcDir）
4. 工具链同步：eslint 扫描路径（若未先完成 @nuxt/eslint 迁移）、`vitest.config.ts` 的 `~`/`@` alias → `'./app'`
5. 官方 codemod 一键化：`npx codemod@latest nuxt/4/file-structure`

**若决定永久保留**：按官方给出的 force-v3 配置显式声明意图（`srcDir: '.'` + `dir: { app: 'app' }`），避免日后自动检测歧义；且**迁移完成前切勿手工新建 app/ 目录放零散文件**。

> 建议：本项目无 server/ 目录，保留的收益差异只剩 dev 启动速度一项，可在下一个大版本节点再做；届时与第 14/15 条（构建期工具移出、entities 拆层）一起做，一次迁完。

---

## 四、P3 — 一致性与优化机会

### 25. 全站无 titleTemplate，18 页标题手写全串、风格不一

**定位**：grep 全站无 titleTemplate；`pages/about.vue:218`（`'关于我们 - 智言AI - 智言万象 | 赋能企业构建智能未来'`）与 `pages/changelog.vue:107`（`'智言AI - 更新日志 - …'`）等顺序混乱。
**官方依据**：`getting-started/seo-meta.md:222-242、314-339`——"recommended instead to set it within your app.vue where it will apply to all pages"。
**改法**：app.vue 设 `useHead({ titleTemplate: (t) => t ? `${t} - 智言AI` : SITE_TITLE })`，各页只写短标题（需同步核对各页视觉标题宽度）。

### 26. demo.vue 绕过 usePageSeo 裸写 useHead，且与 sitemap exclude 口径矛盾

**定位**：`pages/demo.vue:102-140`（手写 canonical/og/twitter/JSON-LD）；`nuxt.config.ts:66-68` sitemap `exclude: ['/demo']` vs `pages/demo.vue:116` `robots: 'index, follow'` + 自指 canonical。
**官方依据**：`api/composables/use-seo-meta.md:13`——useSeoMeta 是官方推荐的 meta 写法。
**改法**：改用 usePageSeo；口径二选一——sitemap 收回 /demo，或页面改 `robots: 'noindex'`。

### 27. AppFooter 友链内链用原生 `<a>`；含自站「外链」与 `#` 死链

**定位**：`components/AppFooter.vue:98-106` 渲染 `utils/link.ts:19-39`——11 条站内路径（`/product/banana` 等）与外链混排全部输出原生 `<a>`（丢失 NuxtLink 的视口内 prefetch）；`components/buidai/BuidaiHero.vue:60`、`components/solutions/SolutionsHero.vue:26`、`components/landing/CtaSection.vue:18-21`、`components/AppNavigation.vue:58,207` 以 `<a target="_blank">` 指向 `https://www.buidai.com`——即本站首页，点「外链」开新标签页回到自己；`AppFooter.vue:13,17,123-125` 为 `<a href="#">` 死链。
**官方依据**：`api/components/nuxt-link.md:11`（drop-in replacement，且自动补 rel="noopener noreferrer"）、`:57-93`（同域资源用 external prop 而非裸 `<a>`）。
**改法**：链接渲染改 `<NuxtLink :to="link.url" target="_blank">`；自站「外链」确认意图（若指真实 Web 应用应换应用域名）；无落地页的 `#` 链接移除或补目标。

### 28. frameSides 自定义 pageMeta 未做类型增强

**定位**：`layouts/default.vue:31`（`(route.meta as Record<string, unknown>).frameSides`）；各页 `definePageMeta({ frameSides: true })`。
**官方依据**：`directory-structure/app/pages.md:398`——自定义页面元数据应做类型安全增强。
**改法**：`declare module '#app' { interface PageMeta { frameSides?: boolean } }`，去掉强转。

### 29. env.d.ts 冗余

**定位**：`env.d.ts:1` 仅一行 `/// <reference types="vite/client" />`；实测全仓零 asset import、零 `import.meta.env`，`.nuxt` 类型未引用它。
**官方依据**：`getting-started/upgrade.md`「TypeScript Configuration Splitting」——类型增强应放入对应上下文目录；根级 `.d.ts` 在迁移 app/ 后会脱离 app 类型上下文。
**改法**：直接删除；日后以 ES import 引入图片时再按官方规则放 `app/` 下的 `.d.ts`。

### 30. package.json 细节偏离官方模板

**定位与官方依据**（`directory-structure/package.md` 官方最小模板 + `getting-started/installation.md`）：

| 项 | 现状 | 改法 |
| --- | --- | --- |
| `postinstall` 脚本 | 缺失 | 补 `"postinstall": "nuxt prepare"` |
| `nuxt` 依赖位置 | devDependencies | 官方模板在 dependencies（vue/vue-router 已在 dependencies，符合） |
| description | "built with Nuxt.js"（Nuxt 2 时代旧称） | 改 "built with Nuxt" |
| scripts | `build` 与 `generate` 完全重复 | 二者留一或注明等价 |
| tests/ 目录名 | 官方推荐单数 `test/`（`directory-structure.md`）；实测 `.nuxt/tsconfig.node.json` 双扫描，`tests/` 可正常工作 | 可保留，仅命名偏离 |

### 31. 仅一个 layout，官方建议并入 app.vue（可选）

**定位**：`layouts/default.vue` 是全项目唯一 layout + `app.vue:3-11` 薄壳。
**官方依据**：`directory-structure/app/layouts.md`——"**If you only have a single layout in your application, we recommend using `app.vue` instead.**"
**改法**：上提合并并删除 layouts/；若未来计划 docs 独立布局则保留现状完全合理。**建议保留**（docs 布局拆分是合理预期）。

### 32. app.vue 内联三段 JSON-LD（可选 plugin 化）

**定位**：`app.vue:28-85`。官方语义上全局 JSON-LD 放 app.vue **符合规范**（`directory-structure/app/app.md`："Anything you add to it… will be global"）。
**改法（可选）**：若希望根组件只承担渲染骨架，抽为 `app/plugins/seo-structured-data.ts`（`defineNuxtPlugin` 内 `useHead`），行为等价。

### 33. FallingText 正文不进 SSR HTML；首屏外区块未用官方 Lazy Hydration

**定位**：`components/FallingText.vue:357-365`（spans 由 JS 填充，SSR HTML 无文本，SEO/无 JS 降级损失；现状水合安全，无 mismatch）；`pages/index.vue:2-13` 首屏仅 Hero + ProductShowcase，12 个区块全部同步水合；同类 `pages/agent.vue`、`pages/buidai.vue`（16 区块）。
**官方依据**：`guide/best-practices/performance.md`「Lazy Hydration」+ `directory-structure/app/components.md`「Delayed (or Lazy) Hydration」（`hydrate-on-visible` 等，注意官方警告：勿用于首屏内容）。
**改法**：a) FallingText 文本层直接写进模板 SSR 渲染、物理层保持客户端，顺带可去掉手写 IntersectionObserver（官方 `hydrate-on-visible` 可替代）；b) 首屏外、低交互区块（LandingValueProps/ScenarioSection/UserReviews/FAQ/AIArsenal/CtaSection、buidai 页下半部）加 `hydrate-on-visible`，全局常挂的 BackToTop 用 `hydrate-on-idle`。

### 34. props/emits 声明风格 2 处不一致

**定位**：`components/docs/Sidebar.vue:136-153` 用 runtime `PropType` 声明（全站其余 18 处均 TS 泛型 + withDefaults）；`components/demo/DemoMobileTabs.vue:12` 用旧 call-signature emits（其余用 tuple 语法）。
**官方依据**：Vue SFC 官方推荐 type-based 声明（编译期常量提升 + 更优类型推断）；`guide/concepts/vuejs-development.md`。
**改法**：Sidebar 迁 `withDefaults(defineProps<{...}>(), {...})`；DemoMobileTabs 改 `defineEmits<{ 'select-category': [id: string] }>`。

### 35. 裸 `<img>` 属性缺口清单

**官方依据**：`api/components/nuxt-img.md`（NuxtImg 是原生 img 的 drop-in 替换）；`guide/best-practices/performance.md`（LCP 图 eager + `fetchpriority="high"`，其余 `loading="lazy"`；width/height 防 CLS）。已决策不引入 @nuxt/image，以下为手动达标清单：

- **真实 CLS 风险**（无宽高且无 aspect 容器兜底）：`components/UChangelogVersions.vue:89`、`pages/blog/[...slug].vue:63`
- **无宽高但有 aspect 容器兜底**（仍建议补齐）：`Market.vue:24`、`PluginCard.vue:25,96`、`landing/FeatureCarousel.vue:59`、`landing/ValueProps.vue:20`、`agent/AgentFeatures.vue:227`、`buidai/BuidaiScenarios.vue:154`、`landing/FeatureSteps.vue:59`、`demo/DemoProductDetail.vue:24`、`blog/index.vue:46`、`product/index.vue:223`、`product/[slug].vue:94,218`、`landing/HeroSection.vue:214,233`
- **缺 loading="lazy"**：`ContactConnect.vue:12,26,40,54`、`BackToTop.vue:174,331,347`、`about.vue:58`、`blog/[...slug].vue:189,196,203`
- **首屏图反用 lazy**（与官方 LCP 建议相悖）：`landing/HeroSection.vue:138-149,159-170` 桌面端首屏跑马灯；对比 `AppNavigation.vue:12-19` logo 用 `fetchpriority="high"` 是正确示范

### 36. 测试环境手工 mock vue 生命周期与 window

**定位**：`vitest.config.ts:13-16` 全局 `environment: 'node'`；`tests/useToc.test.ts:11-18` `vi.mock('vue')` 整体替换生命周期、`:58-65` 手工 stub window/document/history；`tests/useQrModal.test.ts:6-21` 同类。
**官方依据**：`getting-started/testing.md`——官方推荐 `@nuxt/test-utils` + `environment: 'nuxt'`（自带 DOM 与 IntersectionObserver mock）；纯单测走 node 允许，DOM 型单测的官方轻量替代是 `happy-dom`。
**改法（低成本版）**：vitest 改 projects——纯数据测试（getDocsRoutes/getSitemapRoutes/icons/products）留 node；`useToc`/`useQrModal` 两文件标 `// @vitest-environment happy-dom`，删除全部 `vi.stubGlobal` 与 `vi.mock('vue')`。进阶：引入 `@nuxt/test-utils` 放 `test/nuxt/`，后续可补 `mountSuspended` 组件测试。

### 37. 跑马灯随机化被 SSR 一致性牺牲，onNuxtReady 是官方适用点

**定位**：`components/landing/HeroSection.vue:267-286`——首屏顺序固定（防 hydration mismatch 的取舍），随机化只在 resize 断点变化后发生，产品意图（随机跑马灯）正常访问下从不生效。
**官方依据**：`api/utils/on-nuxt-ready.md`——"onNuxtReady only runs on the client-side. It is ideal for running code that should not block the initial rendering"。
**改法**：`onMounted` 内 `checkDevice()` 后加 `onNuxtReady(() => { if (!hasInteracted) generateMarqueeGroups() })`（水合完成后执行，天然无 mismatch）。

### 38. content.config.ts 两个集合日期类型不一致

**定位**：`content.config.ts:13`（blog `date: z.date()`）vs `:40`（update `date: z.string()`）；`order('date','DESC')` 对字符串是字典序，当前靠「全部零填充 YYYY-MM-DD」的格式纪律才正确。
**官方依据**：`directory-structure/content.md`（两种类型均合法，属一致性/健壮性问题）。
**改法**：统一 `z.string()` + 约定 ISO 格式（写入侧加格式校验），并同步 `formatDate` 兼容。

### 39. getDocsRoutes 对 `/docs` 无去重

**定位**：`utils/getDocsRoutes.ts:40-41,52`——traverse 命中 `index.md` 会 push 一次 `/docs`，`:52` 又无条件 push；下游 sitemap 有 Set 去重，但 `prerender.routes` 收到重复路由。
**官方依据**：`getting-started/prerendering.md`——`prerender.routes` 应由调用方保证唯一。
**改法**：返回前 `Array.from(new Set(routes))`（与 getSitemapRoutes 对齐）。

### 40. payloadExtraction: true 是 Nuxt 4 默认值

**定位**：`nuxt.config.ts:22`。
**官方依据**：`guide/going-further/experimental-features.md:249`——"The default is `true`, or `'client'` when `compatibilityVersion: 5`"；`getting-started/prerendering.md:150-154`——`'client'` 模式把首次加载 payload 内联进 HTML、无额外网络请求。
**改法**：删除该行（或保留并注明「显式声明意图」）；对全静态营销站可实测评估 `payloadExtraction: 'client'`（省掉首屏一次 `_payload.json` 请求，代价是 HTML 变大）。

### 41. README 工程化声明与现状矛盾

**定位**：`README.md:138`（"package.json 未声明 engines 字段"——实际已声明）、`README.md:150`（"当前无 .npmrc"——实际已存在）。
**改法**：同步 3.1/3.2 两节。

### 42. robots.txt 与 sitemap exclude 口径不一致

**定位**：`nuxt.config.ts:66-68` exclude `/demo`，但 `public/robots.txt` 允许爬全站。
**官方依据**：`guide/modules/ecosystem.md`——@nuxtjs/robots 与已装 sitemap 同属 nuxt SEO 模块族，可共享 exclude 配置并互注 Sitemap。
**改法**：可选引入 `@nuxtjs/robots`；若维持手写，至少把 `/demo` 加入 Disallow（与 demo 页 noindex 联动，见第 26 条）；`Disallow: /_nuxt/` 可删。

### 43. 官方 CLI 能力未利用

**定位**：package.json scripts 无 clean/analyze。
**官方依据**：`api/commands/cleanup.md`（清理 `.nuxt/.output/dist/.vite/.cache`）、`api/commands/analyze.md` + `guide/best-practices/performance.md` "Nuxi Analyze"（官方推荐 bundle 分析入口）。
**改法**：scripts 加 `"clean": "nuxt cleanup"`；排查产物体积时优先 `nuxt analyze`。

### 44. AppBanner 用 localStorage（备忘）

**定位**：`components/AppBanner.vue:15-21`（`import.meta.client` 下 removeItem）。现状无 mismatch，不是缺陷；官方推荐 `useCookie`（服务端可读、两端一致，`guide/best-practices/hydration.md`）。日后做「关闭后 N 天隐藏」记忆功能时迁移 useCookie，勿继续堆 localStorage。

---

## 五、已符合规范的部分（核实通过，无需改动）

以下为本次审查的**正面确认清单**，均经源码与产物双重核实：

1. **数据获取选型正确**：全站无 useFetch、无已废弃的 queryContent；@nuxt/content 场景用 `useAsyncData` 包裹正是官方推荐（`getting-started/data-fetching.md`）；`queryCollection` 链式 API（`.where/.path/.first/.select/.order/.all`、`queryCollectionItemSurroundings`）均为 content v3 现行 API；docs 详情页双查询 Promise.all 并行写法符合「Making parallel requests」；`useAsyncData(route.path, ...)` 与官方 content 文档示例逐字一致；key 全部唯一显式，404 走 createError 无软 404。
2. **SSR 安全全面达标**：全站 window/document/localStorage 访问全部位于 onMounted、事件回调或 `import.meta.client` 内（AppNavigation 还有 `typeof document === 'undefined'` 守卫）；模块顶层无可变 ref，无官方警告的跨请求状态泄漏反模式；useState（Sidebar 折叠态）用法正确。
3. **composables 规范**：8 个文件全部 use 前缀、顶层 named export、返回 ref 或普通函数（无 reactive 返回），符合 `directory-structure/app/composables.md` 全部规则。
4. **水合安全**：HeroSection 跑马灯固定顺序初始化 + 仅断点切换时 shuffle 的防 mismatch 处理正确；打字机 SSR 空串 + onMounted 起定时器，两端首帧一致；FAQ 用原生 `<details>`，无 JS 也可展开。
5. **预渲染与部署链路规范**：`preset: 'static'` + crawlLinks + routes 注入 + failOnError 符合 `getting-started/prerendering.md`；40 条 sitemap URL 与页面一一对应、`/demo` 正确排除；`_payload.json` 正常产出；`compressPublicAssets` 的 .gz/.br 齐全；`200.html/404.html` 已生成且 esa.jsonc `notFoundStrategy: "404Page"` 语义对齐。
6. **TypeScript 姿势完全对齐官方**：`typeCheck: false` + 独立 `nuxt typecheck`（CI 第一道门禁）正是官方推荐；tsconfig project references 与 `directory-structure/tsconfig.md` 模板逐字一致；strict 已在 `.nuxt/tsconfig.app.json` 生效；全站 `as any` 零命中。
7. **nuxt.config 关键项正确**：`compatibilityDate` 已设（语义见 `api/nuxt-config.md`）；`$development` 环境覆盖是官方模式；`nitro.output.publicDir` 官方支持；全局 canonical 已移除改逐页派生（上轮审计项核实无回退，dist 各页 canonical 均为正确绝对 URL）；sitemap lastmod 固定保证产物确定性。
8. **CSS 架构符合 Tailwind v4 / @nuxt/ui v4 CSS-first 约定**：`@import "tailwindcss"` + `@import "@nuxt/ui"` + `@layer` 分层清晰；`ui.fonts: false` 消除远程字体依赖，符合 performance.md 字体策略。
9. **组件与通信规范**：19 处 defineProps 中 18 处 TS 泛型声明；defineEmits 全部带类型；0 处 provide/inject；跨组件通信收敛为类型化 CustomEvent（见第 16 条改进项）；`v-html` 仅 2 处且数据源为本地静态图标、带 eslint-disable 注释。
10. **图片通用实践良好**：45 个 `<img>` 普遍带 `loading="lazy" decoding="async"`；AppNavigation LCP logo 属性齐备（`fetchpriority="high"` 是全站正确示范）；两处动画已处理 prefers-reduced-motion。
11. **a11y 细节到位（组件级）**：AppNavigation/BackToTop/弹窗的 aria-label/aria-expanded、`useListKeyboardNav` 键盘导航、error.vue 单一 `<h1>` + robots noindex。
12. **CI 完整**：typecheck/lint/test/build 四道门禁齐全，npm ci + 缓存；`.npmrc` 锁 registry、`.nvmrc` 已补。
13. **SEO 基础设施完整**：JSON-LD 三件套（useHead innerHTML 官方安全用法，内容为静态常量无 XSS 面）、canonical 逐页派生、sitemap/robots 联动、`.mcp.json` 已接 Nuxt UI MCP（与 `guide/ai/mcp.md` 方向一致）。
14. **上轮审计修复项零回退**：useQrModal/useToc/useFaqAccordion/usePageSeo 合并、normalizePath 中文 slug、ogImage 兜底、FallingText 单 rAF 循环、useScrollProgress 重构——均确认落地。

---

## 六、建议执行批次

按「一行级 → 数据层 → 组件一致性 → a11y/SEO 增强 → 工程化 → 决策项」排序，每批独立可提交：

**批次 A：一行级修复（零风险，半天）**
#2 html lang、#7 twitterCard、#8 ogUrl、#1 og:image 归一化、#9 prerenderErrorPages、#10+11 createError（fatal + status/message）、#20 engines、#19 prefers-reduced-motion、#6 formatDate 时区、#39 getDocsRoutes 去重、#38 content 日期类型、#12 Market :limit、#42 robots.txt /demo、#29 env.d.ts、#41 README

**批次 B：数据层修复（需回归 docs/blog/changelog 页）**
#4 Sidebar useAsyncData、#17 queryCollection select、#16 qrModal useState、#14 构建工具移出 utils/、#15 entities 拆层

**批次 C：组件一致性（需全局改名同步）**
#13 UChangelogVersions 重命名、#23 命名四项（含 Market 重命名 + 恢复多词 lint）、#34 props/emits 统一、#25 titleTemplate

**批次 D：a11y 与 SEO 增强**
#18 NuxtRouteAnnouncer + skip link、#22 og 兜底 PNG、#26 demo.vue、#27 AppFooter 链接、#28 frameSides 类型

**批次 E：工程化（独立 PR）**
#3 @nuxt/eslint 迁移、#5 图片瘦身脚本、#21 esa 缓存策略、#36 测试环境、#43 CLI scripts

**批次 F：决策项（建议下个版本节点）**
#24 app/ 目录迁移（与 #14/#15 联动）、#31 layout 并入（建议保留现状）、#32 JSON-LD plugin 化（可选）、#33 Lazy Hydration、#37 onNuxtReady 随机化、#40 payloadExtraction 'client' 评估、#44 useCookie 备忘

## 七、验证方式

```bash
npm run typecheck    # 类型检查
npm run lint         # ESLint（#3 迁移后验证新配置）
npm run test         # vitest
npm run build        # nuxt generate，核对产物
```

**重点回归清单**：

- **产物抽查**（批次 A 后）：任意 HTML 的 `<html lang="zh-CN">`、og:image 为绝对 URL、og:url/twitter:card 存在、`dist/404.html` 含「页面未找到」文案而非 SPA shell
- **docs 侧栏**（批次 B 后）：文档树完整渲染、`_payload.json` 中 `sidebar-docs` 非空、dev 控制台无 NUXT_E3004
- **payload 体积对比**（批次 B 后）：`dist/blog/*/index.html` 同目录 `_payload.json` 显著缩小
- **QR 弹窗**（批次 B 后）：9 处入口（首页/产品/价格/plugin 等）弹窗文案逐个核对
- **客户端导航 404**（批次 A 后）：从内链点击不存在的 slug 出全屏错误页
- **图片**（批次 E 后）：LCP 图 eager、抽查 CLS、public/ 总体积
- **a11y**（批次 D 后）：Tab 首停为 skip link、屏幕阅读器路由播报
- **改名同步**（批次 C 后）：全站构建无 unresolved component 警告，`/buidai`、`/changelog`、`/docs` 页面视觉与交互不变

## 八、审查覆盖范围与局限

- 已逐文件审查：18 个页面、60 个组件（重点 20 个精读）、8 个 composables、7 个 utils、data/ 全部、content.config.ts、6 个测试、全部配置文件与 CI
- 官方文档存档的 `examples/` 板块未逐条对照（与规范无直接关系）；`guide/modules/`（模块开发）与 `api/kit/` 不适用于本项目，仅生态清单部分使用
- 部分结论基于 dist/ 产物实测（og:image、404.html、payload、_nuxt hash），与源码交叉验证
