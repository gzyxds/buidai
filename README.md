# BuidAI (必定AI) - 企业级 AI 应用开发平台模板

BuidAI 是一个基于 Nuxt 4 + Vue 3 构建的现代化前端模板，面向 AI 应用开发平台、SaaS 产品官网与文档中心。项目集成 Nuxt UI、Tailwind CSS 与 Nuxt Content，兼顾开发效率、可维护性与 SEO。

## 核心特性

- **最新生态**：Nuxt 4、Vue 3、TypeScript、Tailwind CSS、Nuxt UI
- **内容驱动**：基于 Markdown 的文档与博客，内置集合与校验
- **组件化**：开箱即用的落地页与导航组件，响应式与无障碍
- **SEO 友好**：集中式 Head 管理、OG 标签与关键词配置
- **预渲染**：自动收集文档路由，SSG 输出，适配 Vercel Static

## 技术栈详情

| 类别 | 技术/库 | 说明 |
| :--- | :--- | :--- |
| **核心框架** | [Nuxt 4](https://nuxt.com) | 基于 Vue 3 的全栈框架，使用最新的 Nuxt 4 版本 |
| **前端框架** | [Vue 3](https://vuejs.org) | Composition API, `<script setup>` |
| **编程语言** | [TypeScript](https://www.typescriptlang.org) | 全面类型安全支持 |
| **UI 框架** | [Nuxt UI](https://ui.nuxt.com) | 基于 Headless UI 和 Tailwind CSS 的组件库 |
| **样式系统** | [Tailwind CSS v4](https://tailwindcss.com) | 原子化 CSS 框架，使用最新的 v4 引擎 |
| **内容管理** | [Nuxt Content v3](https://content.nuxt.com) | 基于文件(Markdown/YAML)的内容管理，使用 SQLite 数据库 |
| **构建/部署** | Nitro (SSG) | 静态站点生成，默认适配 Vercel Static |
| **图标库** | Heroicons, Lucide, Iconify | 多源图标支持，统一通过 Nuxt UI 或组件使用 |
| **动画** | AOS, Tailwind Animate | 滚动动画与 CSS 关键帧动画 |
| **SEO** | @nuxtjs/sitemap, useSeoMeta | 自动生成站点地图，页面级元数据管理 |
| **测试** | Vitest | 单元测试框架 |

## 目录结构

```text
e:\buidai.com\buidai/
├── assets/                 # 静态资源与全局样式
│   └── css/
│       └── main.css        # 全局样式与 CSS 变量、自定义组件类
├── components/             # 自动导入的 Vue 组件
│   ├── landing/            # 首页/营销落地页组件
│   ├── DocsSidebar.vue     # 文档侧边栏组件
│   ├── AppNavigation.vue   # 顶部导航
│   └── AppFooter.vue       # 页脚
├── content/                # 内容数据源 (Markdown)
│   ├── blog/               # 博客文章
│   └── docs/               # 文档中心 (多级目录 + .navigation.yml)
├── layouts/
│   └── default.vue         # 默认布局 (导航/主体/页脚)
├── pages/                  # 路由页面
│   ├── index.vue           # 首页
│   ├── docs/               # 文档路由 ([...slug].vue)
│   ├── blog/               # 博客路由 ([...slug].vue)
│   ├── pricing.vue         # 价格页
│   ├── solutions.vue       # 解决方案
│   ├── plugin.vue          # 应用中心
│   └── resources.vue       # 资源中心
├── app.vue                 # 应用根组件
├── app.config.ts           # Nuxt UI 全局配置 (主题/图标)
├── nuxt.config.ts          # Nuxt 核心配置 (模块/SEO/预渲染)
├── content.config.ts       # Nuxt Content 集合与 schema
├── tailwind.config.js      # Tailwind 主题扩展与动画
├── tsconfig.json           # TypeScript 配置
└── package.json            # 脚本与依赖管理
```

## 快速开始

- 环境要求：Node.js ≥ 18；包管理器：npm/yarn/pnpm
- 安装依赖：`npm install`
- 启动开发：`npm run dev`，访问 `http://localhost:3000`
- 构建生产：`npm run build`，输出至 `.output/`
- 预览生产：`npm run preview`
- 类型检查：`npm run typecheck`
- 网站地图测试：`npm run test:sitemap`

## 配置与架构

- Nuxt 模块：启用 `@nuxt/ui`、`@nuxt/content` 与 `@nuxtjs/sitemap`，见 `nuxt.config.ts:18-23`
- 预设与预渲染：Nitro `static` 预设；通过 `getDocsRoutes()` 自动遍历 `content/docs` 生成预渲染路由，见 `nuxt.config.ts:47-50`
- 网站地图：通过 `getSitemapRoutes()` 自动生成所有页面路由，支持优先级配置，见 `nuxt.config.ts:45-91`
  - 生成路径：`/sitemap.xml`
  - 测试命令：`npm run test:sitemap`
  - 配置文件：`utils/getSitemapRoutes.ts`
- 全局 Head：集中配置标题、描述、关键词与 OG 元信息，见 `nuxt.config.ts:60-85`
- 全局样式：`~/assets/css/main.css` 注入，见 `nuxt.config.ts:94`
- 类型检查：Nuxt 内联禁用类型检查（提升 Dev 速度），通过脚本独立执行，见 `nuxt.config.ts:12-15` 与 `package.json:6-12`

## 内容系统

- 集合定义：`content.config.ts` 定义 `blog` 与 `docs` 集合与校验 schema，见 `content.config.ts:4-29`
- 文档侧边导航：每级目录使用 `.navigation.yml` 提供分组标题与图标
- Frontmatter 示例：
  ```yaml
  ---
  title: '文章标题'
  description: '文章简介'
  date: '2025-04-15'
  category: '前端'
  tags: ['CSS', 'Tailwind']
  image: 'https://nuxt.com/assets/design-kit/icon-green.png'
  ---
  ```

## UI 与样式

- Tailwind 主题：扩展 `primary/accent/secondary` 色板与动画，见 `tailwind.config.js:12-77`
- 深色模式：采用 `class` 切换策略；`main.css` 中覆盖 Nuxt UI 主色变量，见 `assets/css/main.css:7-17`
- Nuxt UI 配置：`app.config.ts` 映射全局图标别名与品牌色，见 `app.config.ts:8-20,24-82`
- 导航组件：`AppNavigation.vue` 基于 `UNavigationMenu` 配置响应式菜单与透明/非透明样式，见 `components/AppNavigation.vue:21-105,190-226`
- 文档侧栏：`DocsSidebar.vue` 递归渲染分组与链接，见 `components/DocsSidebar.vue:1-52,55-76`

## 页面与布局

- 默认布局：包含导航、主体与页脚，见 `layouts/default.vue:1-18`
- 首页：组合落地页组件，见 `pages/index.vue:1-18`
- 博客：支持滚动进度、面包屑与文章结构，见 `pages/blog/[...slug].vue:1-29`
- 文档：通过 Catch-All 路由渲染 Markdown 内容，目录由 `.navigation.yml` 决定

## 开发规范与建议

- 代码风格：使用 Vue 3 Composition API；组件命名语义化；Tailwind 原子类保持可读性
- 可访问性：表意清晰的交互元素与焦点样式；合理的对比度与键盘可达性
- SEO：在页面级使用 `useSeoMeta` 设置标题与描述；合理配置 OG 标签
- 性能：优先静态化、预渲染；适度使用动画与图片优化
- 不要提交敏感信息：不要在仓库中存储密钥或私有数据

## 部署

- Vercel Static：默认 `nitro.preset='vercel-static'`，适合静态预渲染部署
- Cloudflare Pages：参考 `content/docs/6.deploy/4.cloudflare-pages.md` 的步骤（含 D1 数据库绑定说明）

## 测试与质量

- 类型检查：`npm run typecheck`（必须执行）
- 单元测试：已安装 `vitest` 与 `@nuxt/test-utils`，可按需添加测试文件与脚本
- Storybook：已安装 `@storybook/vue3`，示例见 `stories/Plugin.stories.ts`




## 许可证

[MIT License](LICENSE)
