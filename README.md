# 智言万象（智言AI）

智言万象（[buidai.com](https://www.buidai.com)）的官方网站，基于 Nuxt 4 + Vue 3 构建的静态站点，包含营销落地页、产品页、文档中心、博客与更新日志。

---

## 技术栈

| 类别   | 技术                                                                      | 说明                                      |
| :----- | :------------------------------------------------------------------------ | :---------------------------------------- |
| 框架   | [Nuxt 4](https://nuxt.com) 4.2                                            | 静态站点生成（SSG）                       |
| 视图层 | [Vue 3](https://vuejs.org)                                                | Composition API + `<script setup>`        |
| 语言   | [TypeScript](https://www.typescriptlang.org) 5.5                          | 全量类型标注                              |
| UI     | [Nuxt UI](https://ui.nuxt.com) 4.x                                        | 基于 Reka UI + Tailwind 的组件库          |
| 样式   | [Tailwind CSS](https://tailwindcss.com) 4.x                               | CSS-first 配置（无 `tailwind.config.js`） |
| 内容   | [Nuxt Content](https://content.nuxt.com) 3.x                              | Markdown + SQLite，集合与 schema 校验     |
| SEO    | `useSeoMeta` + [@nuxtjs/sitemap](https://github.com/nuxt-modules/sitemap) | 页面级元数据与站点地图                    |
| 构建   | Nitro                                                                     | `preset: 'static'`，输出到 `dist/`        |

## 环境要求

- **Node.js `^20.19.0 || >=22.12.0`**（Nuxt 4.2 的硬性要求，Node 18 无法启动）
- npm（仓库内含 `.npmrc`，设置了 `legacy-peer-deps=true`）

## 快速开始

```bash
npm install       # 安装依赖
npm run dev       # 启动开发服务器 → http://localhost:3000
npm run build     # 生产构建，输出到 dist/
npm run preview   # 本地预览构建产物
```

### 质量检查

```bash
npm run typecheck    # vue-tsc 类型检查
npm run lint         # ESLint
npm run lint:fix     # ESLint 自动修复
npm run format       # Prettier 格式化
npm run format:check # Prettier 检查
```

> ⚠️ `npm run test:sitemap` 当前不可用——它指向 `scripts/test-sitemap.mjs`，但 `scripts/` 目录为空。仓库已安装 vitest 与 @nuxt/test-utils，但尚无任何测试文件。

## 目录结构

```text
├── app.vue                 # 应用根组件（NuxtLayout + NuxtPage + JSON-LD）
├── app.config.ts           # Nuxt UI 主题色与图标别名
├── nuxt.config.ts          # 核心配置：模块、SEO、sitemap、prerender
├── content.config.ts       # Content 集合与 schema 定义
├── assets/css/             # 全局样式（main.css、grid-border.css）
├── components/
│   ├── landing/            # 落地页区块组件（首页专用）
│   ├── docs/               # 文档相关组件
│   └── *.vue               # 全局组件（导航、页脚、返回顶部等）
├── content/                # 内容源（Markdown）
│   ├── blog/               # 博客文章
│   ├── docs/               # 文档中心
│   └── update/             # 更新日志
├── data/products.ts        # 产品页数据（供 pages/product/[slug].vue 使用）
├── layouts/default.vue     # 默认布局（横幅 + 导航 + 主体 + 页脚）
├── pages/                  # 路由页面
├── public/                 # 静态资源（原样复制到输出目录）
├── types/                  # 全局类型声明
└── utils/                  # 工具函数与常量
```

## 架构要点

### 渲染与输出

全站静态预渲染，`nitro.preset: 'static'` 且强制输出到 `dist/`（而非默认的 `.output/public`），以适配静态托管平台。

预渲染路由由 `nuxt.config.ts` 的 `nitro.prerender.routes` 注入，其余路由通过链接爬取（`crawlLinks`）发现。

> ⚠️ `nitro.prerender.failOnError` 当前为 `false`，意味着预渲染失败的页面会被**静默跳过**而不中断构建。排查缺失页面时需查看构建日志中的 `[404]` 行。

### 文档路由机制（重要）

文档的文件名遵循 `{序号}.{slug}.md` 约定，例如 `content/docs/introduction/1.start.md`：

- **数字前缀仅用于排序，不会出现在 URL 中**——`getDocsRoutes()` 会剥离 `^\d+\.`，该文件对外的 URL 是 `/docs/introduction/start`
- Nuxt Content 内部存储的 `path` **保留**数字前缀，因此 `pages/docs/[...slug].vue` 内含一层「精确匹配失败则清洗路径后回退匹配」的逻辑来弥合差异
- 修改数字前缀不会改变公开 URL，但**同一目录下的序号必须唯一**，重复会导致排序不确定

### 文档排序（重要）

文档侧边栏（`components/docs/Sidebar.vue`）与文档索引页（`pages/docs/index.vue`）的排序**由 frontmatter 的 `order` 字段决定**，而非文件名序号：

- `order` 控制**同一 `category` 分组内**的先后
- 分组之间的顺序由两个文件里硬编码的 `categoryOrder` 数组决定，当前为 `['入门指南', '进阶教程', '未分类']`

因此**新增文档必须同时设置 `category` 与 `order`**，否则排序将落入未定义状态。

### 内容集合

在 `content.config.ts` 中定义，三个集合的 frontmatter 要求如下：

**`blog`** — `source: blog/*.md`

| 字段                    | 类型                              | 必填               |
| :---------------------- | :-------------------------------- | :----------------- |
| `tags`                  | `string[]`                        | ✅                 |
| `category`              | `string`                          | ✅                 |
| `date`                  | `date`（YAML 日期，**不加引号**） | ✅                 |
| `image`                 | `string`                          | —                  |
| `title` / `description` | `string`                          | ✅（Content 内置） |

**`docs`** — `source: docs/**/*.md`

| 字段          | 类型                           | 必填                 |
| :------------ | :----------------------------- | :------------------- |
| `title`       | `string`                       | ✅                   |
| `description` | `string`                       | ✅                   |
| `category`    | `string`                       | 建议填写（分组依据） |
| `order`       | `number`                       | 建议填写（组内排序） |
| `links`       | `{label, icon, to, target?}[]` | —                    |

**`update`** — `source: update/*.md`

| 字段                                  | 类型                          | 必填 |
| :------------------------------------ | :---------------------------- | :--- |
| `title`                               | `string`                      | ✅   |
| `description`                         | `string`                      | ✅   |
| `date`                                | `string`（**需加引号**）      | ✅   |
| `image` / `to` / `target` / `isMajor` | —                             | —    |
| `authors`                             | `{name, avatar:{src, alt}}[]` | —    |

> ⚠️ 两个集合的 `date` 类型不一致：`blog` 用 `z.date()`（YAML 裸日期），`update` 用 `z.string()`（带引号字符串）。填写时注意区分。
>
> ⚠️ schema 仅用于生成 SQL 列，**不做运行时校验**。frontmatter 缺字段不会在构建期报错，而是存为 NULL，并在读取时可能抛错。请务必填写必填字段。

### 产品页

12 个产品页由 `pages/product/[slug].vue` 统一渲染，数据来自 `data/products.ts` 的 `ProductPageData[]`。新增产品只需在数组中追加一项（`slug` 字段即 URL），无需新建页面文件。

站点地图会自动包含所有产品页（`utils/getSitemapRoutes.ts` 会展开 `productSlugs`）。

### 主题与图标

- 品牌色在 `app.config.ts` 的 `ui.colors.primary` 定义，全局图标别名（`i-ph-*`）也在该文件映射
- `assets/css/main.css` 覆盖了 `--ui-primary` 等 CSS 变量，并封装 `.text-ui-primary`、`.bg-ui-primary-*` 等桥接类
- 项目同时存在三套图标用法：`@nuxt/ui` 的 class 图标（推荐）、`lucide-vue-next` 组件、`@heroicons/vue` 组件

## 部署

构建产物为纯静态文件（`dist/`），可部署到任意静态托管。

仓库内同时存在两套平台配置：

- `esa.jsonc` —— 阿里云 ESA Pages（`assets.directory: ./dist`）
- `nuxt.config.ts` 的 `nitro.output.publicDir: 'dist'` —— 注释说明是为适配 Vercel 默认配置

> 部署前请确认实际使用的是哪一套，避免两处配置各自演进。

## 开发规范

- 使用 Vue 3 Composition API + `<script setup lang="ts">`
- 组件命名语义化；全局单例组件用 `App*` 前缀，其余按领域命名并归入对应子目录
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)（`feat` / `fix` / `refactor` / `docs` / `chore` / `style`）
- **不要提交敏感信息**：本仓库为公开仓库，且站点为静态生成，源码中的任何内容都会公开
- 图片等静态资源请先压缩再入库（当前 `public/` 体积已较大）

## 待办与已知问题

完整的架构走查结论、缺陷清单与改进路线图见 **[架构评审报告.md](./架构评审报告.md)**。

其中影响较大的几项：

- 页脚社交图标与「服务条款 / 隐私政策 / Cookie 设置」链接指向 `#`，需补真实地址或页面
- `content/docs` 内有 16 处失效内链（指向 Nuxt Content 官方文档的 URL 结构），导致预渲染产生 404
- 项目**无 CI 配置**，`typecheck` / `lint` / `build` 均未在提交时自动执行
- `data/products.ts`、`demo.vue`、`utils/pluginData.ts` 三处各自维护了一份产品数据，存在漂移风险

## 许可证

本项目声明采用 MIT License。

> 注：仓库中**尚无 `LICENSE` 文件**，如需正式生效请补充。
