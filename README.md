# 智言万象（buidai）官网项目说明书

> 本文件为**代码级项目说明书**，全部内容以当前仓库实际代码为唯一依据（含 `package.json`、`package-lock.json`、`nuxt.config.ts`、`content.config.ts`、`app.config.ts`、`eslint.config.js`、`.prettierrc.json`、`vitest.config.ts`、`.github/workflows/ci.yml`，以及全部 `pages/`、`components/`、`composables/`、`utils/`、`data/`、`content/` 源文件）。
>
> 凡本文件所述结论均可回溯到具体文件与行号；代码未体现的内容一律不臆测，差异与未落地部分统一收录至 [第 19 章「已知差异与技术债」](#19-已知差异与技术债)。
>
> 生成日期：2026-10-02 ｜ 仓库：`https://github.com/gzyxds/buidai.git`（分支 `main`）

---

## 目录

- [1. 项目概览](#1-项目概览)
- [2. 技术栈与版本](#2-技术栈与版本)
- [3. 运行环境要求](#3-运行环境要求)
- [4. 快速开始](#4-快速开始)
- [5. npm 脚本全解](#5-npm-脚本全解)
- [6. 质量检查体系](#6-质量检查体系)
- [7. 目录结构说明](#7-目录结构说明)
- [8. 架构要点](#8-架构要点)
- [9. 文档路由机制](#9-文档路由机制)
- [10. 内容集合定义与组织](#10-内容集合定义与组织)
- [11. 页面路由总表](#11-页面路由总表)
- [12. 组件体系](#12-组件体系)
- [13. 数据层与工具函数](#13-数据层与工具函数)
- [14. 组合式函数（Composables）](#14-组合式函数composables)
- [15. UI 设计规范](#15-ui-设计规范)
- [16. SEO 与站点资产](#16-seo-与站点资产)
- [17. 部署流程](#17-部署流程)
- [18. 开发规范](#18-开发规范)
- [19. 已知差异与技术债](#19-已知差异与技术债)
- [20. 附录：外部地址与命令速查](#20-附录外部地址与命令速查)

---

## 1. 项目概览

### 1.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| 包名 | `buidai` | `package.json:2` |
| 版本 | `1.0.0` | `package.json:3` |
| 描述 | `Modern buidai Pages template built with Nuxt.js` | `package.json:5` |
| 私有包 | `true`（不发布 npm） | `package.json:6` |
| 模块类型 | `"type": "module"`（ESM） | `package.json:4` |
| Git 远端 | `https://github.com/gzyxds/buidai.git` | `git remote -v` |
| 当前分支 | `main` | `git branch --show-current` |
| 锁文件版本 | `lockfileVersion 3`（npm v7+ 格式） | `package-lock.json` |

### 1.2 项目定位

这是一个**企业级 AI 应用平台官网模板**，品牌名为 **智言AI / 智言万象**，采用**纯静态站点生成（SSG）**方式构建，不含任何后端服务。站点承载四类职能：

1. **产品营销**：首页、产品页（12 个产品）、解决方案、定价、私有部署（`/buidai`）、AI 智能体（`/agent`）
2. **内容运营**：技术博客（2 篇）、文档中心（12 篇）、更新日志（3 条）
3. **应用市场**：应用中心 `/plugin`（27 个应用）、演示中心 `/demo`（2 组分类 / 17 个产品）
4. **转化触点**：联系我们、下载、关于我们、资源中心

### 1.3 核心设计取向（均可由代码印证）

| 取向 | 代码依据 |
|---|---|
| **零后端、纯静态** | `nuxt.config.ts:82` `nitro.preset = 'static'`；`package.json:11-12` build/generate 均为 `nuxt generate` |
| **构建失败零容忍** | `nuxt.config.ts:89` `prerender.failOnError: true` |
| **内容驱动 + 类型安全** | `content.config.ts` 三个集合全部使用 Zod 校验 |
| **UI 库优先，自定义 CSS 兜底** | `nuxt.config.ts:27-31` 引入 `@nuxt/ui`；`assets/css/` 仅 2 个文件 |
| **构建期不联网** | `ui.fonts: false` 关闭 @nuxt/ui 自动注册的 @nuxt/fonts（其启动时会联网拉取字体元数据库），站点仅用 `assets/css/main.css` 手写的系统字体栈 |
| **无 Store / 无 Server** | 全仓无 Pinia、无 `server/`、`middleware/`、`plugins/` 目录 |

---

## 2. 技术栈与版本

### 2.1 运行时依赖（`dependencies`，6 个）

| 包 | 声明版本 | 实际锁定版本 | 用途 |
|---|---|---|---|
| `@nuxt/content` | `^3.16.1` | **3.16.1** | 基于文件的内容管理（Markdown + SQLite 索引） |
| `@nuxt/ui` | `^4.11.3` | **4.11.3** | 企业级 UI 组件库（内置 Tailwind 与 `UIcon`） |
| `matter-js` | `^0.20.0` | **0.20.0** | 2D 物理引擎，仅用于 `FallingText` 文字坠落效果 |
| `vue` | `^3.4.31` | **3.5.43** | 前端框架（实际安装高于声明下界） |
| `vue-router` | `^5.3.1` | **5.3.1** | 官方路由（Nuxt 4 直接依赖） |

### 2.2 开发依赖（`devDependencies`，23 个）

| 包 | 声明版本 | 实际锁定版本 | 用途 |
|---|---|---|---|
| `nuxt` | `^4.5.2` | **4.5.2** | 元框架本体 |
| `@nuxtjs/sitemap` | `^7.5.0` | **7.5.0** | `sitemap.xml` 生成 |
| `@tailwindcss/vite` | `^4.3.3` | **4.3.3** | Tailwind CSS v4 的 Vite 插件（CSS-first 配置） |
| `tailwindcss` | `^4.3.3` | **4.3.3** | 原子化 CSS 框架 v4 |
| `typescript` | `^5.5.4` | **5.9.3** | 类型系统 |
| `vue-tsc` | `^3.3.0` | **3.3.0** | typecheck 底层执行器（含 Vue SFC 检查） |
| `typescript-eslint` | `^8.57.2` | **8.57.2** | TS Lint 规则集 |
| `eslint` | `^10.1.0` | **10.1.0** | 代码检查 |
| `@eslint/js` | `^10.0.1` | **10.0.1** | JS 推荐规则 |
| `eslint-plugin-vue` | `^10.8.0` | **10.8.0** | Vue 规则（flat/recommended） |
| `eslint-config-prettier` | `^10.1.8` | **10.1.8** | 关闭与 Prettier 冲突的规则 |
| `vue-eslint-parser` | `^10.4.0` | **10.4.0** | `.vue` 解析器 |
| `globals` | `^17.4.0` | **17.4.0** | ESLint 全局变量表 |
| `prettier` | `^3.8.1` | **3.8.1** | 代码格式化 |
| `vitest` | `^3.0.0` | **3.2.4** | 单元测试运行器 |
| `@tailwindcss/typography` | `^0.5.19` | **0.5.19** | `prose` 排版插件，用于 Markdown 渲染 |
| `better-sqlite3` | `^12.10.0` | **12.10.0** | Content 模块的 SQLite 驱动（原生模块） |
| `@types/matter-js` | `^0.20.2` | **0.20.2** | 物理引擎 TS 类型 |
| `@types/node` | `^25.0.2` | **25.9.9** | Node 类型 |
| `@iconify-json/lucide` | `^1.2.81` | **1.2.81** | 图标集（导航与文档 frontmatter 主要使用） |
| `@iconify-json/heroicons` | `^1.2.3` | **1.2.3** | 图标集（正文组件主要使用） |
| `@iconify-json/ph` | `^1.2.2` | **1.2.2** | Phosphor 图标集（`app.config.ts` 图标别名的目标） |
| `@iconify-json/simple-icons` | `^1.2.63` | **1.2.63** | 品牌 logo 图标（`pricing.vue` 走马灯使用） |

### 2.3 启用的 Nuxt 模块

`nuxt.config.ts:27-31` 仅注册 3 个模块：

```27:31:nuxt.config.ts
  // 启用的 Nuxt 模块
  modules: [
    '@nuxt/ui',       // UI 组件库 (基于 Tailwind CSS)
    '@nuxt/content',  // 内容管理模块 (Markdown 支持)
    '@nuxtjs/sitemap' // 网站地图生成模块
  ],
```

> color-mode 能力并非直接注册，而是由 `@nuxt/ui` 4.x 内部注册，`colorMode` 配置节依然生效。字体方面：`@nuxt/ui` 默认会自动注册 `@nuxt/fonts`（启动时联网拉取字体元数据库），本项目已通过 `ui.fonts: false` 显式关闭，仅使用系统字体栈；`@nuxt/fonts` 包本身只作为 `@nuxt/ui` 的传递依赖存在，不在顶层声明。

### 2.4 与旧版说明文档的依赖差异

仓库根目录另有一份 `BuidAI.md`（带 `trigger: always_on` frontmatter）。经逐项比对，其「技术栈」「项目结构」「配置说明」等章节与当前代码**存在多处不一致**，详见 [19.1](#191-buidaimd-与代码的实际差异)。**一切以代码为准。**

---

## 3. 运行环境要求

### 3.1 Node.js 版本

- `package.json` 声明 `engines.node: ">=22.0.0"`（与官方「Node.js 22.x or newer」对齐）
- CI 通过 `.github/workflows/ci.yml` → `node-version-file: .nvmrc` 读取版本（`.nvmrc` = 22），单一事实来源
- `@types/node` 锁定 **25.x**，要求运行时 Node ≥ 22
- 本机开发实测 Node v26.x，CI 为 22

**结论：Node 22 LTS 为标准运行环境（engines/.nvmrc/CI 三处一致）。**

### 3.2 包管理器

- 仓库根目录**存在 `package-lock.json`**，CI 使用 `npm ci`
- **必须使用 npm** 以保证与 CI 一致的依赖树；`pnpm` / `yarn` 会忽略 npm 锁文件，不建议混用
- 历史上曾启用 `--legacy-peer-deps`，已于提交 `e6ceb5f`（`chore: 移除 legacy-peer-deps 开关`）移除
- **`.npmrc` 已存在**，锁定 `registry=npmmirror`，消除锁文件混用官方源与镜像源导致的解析漂移

### 3.3 原生模块构建

`package.json:7-9` 声明了安装脚本白名单：

```7:9:package.json
	"allowScripts": [
		"better-sqlite3"
	],
```

`better-sqlite3` 为原生模块（node-gyp 编译），必须允许其执行安装脚本，否则 Content 模块的 SQLite 数据库不可用。若使用对此类白名单策略不同的包管理器，需确保其编译脚本被执行。

### 3.4 类型检查的前置条件

`tsconfig.json` 是**纯引用式配置**，自身不含任何编译选项：

```1:9:tsconfig.json
{
  "files": [],
  "references": [
    { "path": "./.nuxt/tsconfig.app.json" },
    { "path": "./.nuxt/tsconfig.server.json" },
    { "path": "./.nuxt/tsconfig.shared.json" },
    { "path": "./.nuxt/tsconfig.node.json" }
  ]
}
```

因此**首次执行 `npm run typecheck` 前必须先生成 `.nuxt/`**（执行一次 `npm run dev`，或显式执行 `npx nuxt prepare`），否则四个引用目标不存在，`vue-tsc` 会直接报错。

### 3.5 网络要求

- **构建期不访问外网**：`nuxt.config.ts:34-39` 已关闭 Google Fonts provider
- `better-sqlite3` 安装期需拉取预编译二进制或触发本地工具链编译

### 3.6 操作系统支持情况

| 环境 | 支持情况 | 依据 |
|---|---|---|
| Windows | 已验证（当前开发机 win32 / PowerShell） | 本机环境 |
| Linux | 已验证（CI `ubuntu-latest`） | `ci.yml:12` |
| macOS | 未验证，代码中无平台专属逻辑 | — |

---

## 4. 快速开始

```bash
# 1. 获取代码
git clone https://github.com/gzyxds/buidai.git
cd buidai

# 2. 安装依赖（务必用 npm ci，保证与 CI 依赖树一致）
npm ci

# 3. 生成 Nuxt 运行时类型（.nuxt 目录）——首次 typecheck 前必做
npx nuxt prepare

# 4. 启动开发服务器
npm run dev
# 访问 http://localhost:3000

# 5. 生产构建（静态生成到 dist/）
npm run build

# 6. 本地预览产物
npm run preview
```

### 推荐开发闭环

1. `npm run dev` 开发（HMR 热更新）
2. `npm run typecheck` 检查类型（构建期已关闭类型检查，必须手动执行）
3. `npm run lint` / `npm run lint:fix`
4. `npm run format`
5. `npm test` 运行单元测试
6. `npm run build` 验证 SSG 全链路（含 `failOnError: true` 的预渲染校验）

### 常见变更的后续动作

| 变更内容 | 需要的动作 |
|---|---|
| `content/docs/` 增删 `.md` | 重新构建；dev 需重启（`getDocsRoutes()` 在 `nuxt.config.ts` 加载期同步读文件系统） |
| 修改 `app.config.ts` 图标/颜色 | HMR 即时生效 |
| 修改 `data/*.ts`、`utils/*.ts` | HMR 即时生效 |
| 修改 `nuxt.config.ts` | dev server 需重启 |
| 增删 `components/*.vue` | Nuxt 自动重新扫描并重建类型，必要时 `npx nuxt prepare` |

---

## 5. npm 脚本全解

来源：`package.json:10-22`

| 脚本 | 命令 | 说明 |
|---|---|---|
| `dev` | `nuxt dev` | 启动开发服务器，默认 3000 端口，启用 DevTools（`nuxt.config.ts:12`） |
| `build` | `nuxt generate` | **生产构建**：全站静态预渲染，输出到 `dist/` |
| `generate` | `nuxt generate` | 与 `build` 完全等价的别名 |
| `preview` | `nuxt preview` | 预览已构建产物，用于上线前验证 |
| `typecheck` | `nuxt typecheck` | 调用 `vue-tsc` 做全量 TS + SFC 类型检查（构建期已关闭，需单独执行） |
| `lint` | `eslint --ext .vue,.ts,.js .` | 检查全仓 `.vue` / `.ts` / `.js` |
| `lint:fix` | `eslint --ext .vue,.ts,.js . --fix` | 自动修复可修复项 |
| `format` | `prettier --write .` | 全仓格式化 |
| `format:check` | `prettier --check .` | 只校验不写入（适合 CI / git hooks） |
| `test` | `vitest run` | 单次运行全部单元测试 |
| `test:watch` | `vitest` | 监视模式 |

> `build` 与 `generate` 的命令字符串完全相同；`preview` 必须在 `build` 成功之后执行。

---

## 6. 质量检查体系

### 6.1 类型检查（TypeScript）

构建期**主动关闭**类型检查以提速（`nuxt.config.ts:15-18`）：

```15:18:nuxt.config.ts
  // TypeScript 配置
  typescript: {
    // 禁用构建时的类型检查以加快构建速度 (建议通过 npm run typecheck 单独运行)
    typeCheck: false
  },
```

因此 `npm run build` **不会**暴露类型错误，类型安全完全依赖 `npm run typecheck`（CI 已强制执行）。检查范围由 `.nuxt/tsconfig.*.json` 决定，覆盖客户端、服务端、共享代码与 Node 侧四套配置。

### 6.2 ESLint（Flat Config）

来源：`eslint.config.js`，使用 `tseslint.config()` 扁平配置。

**继承的规则集**（`eslint.config.js:58-67`）：

1. `js.configs.recommended`
2. `tseslint.configs.recommended`
3. `pluginVue.configs['flat/recommended']`
4. `eslintConfigPrettier`（最后加载，负责关闭冲突规则）

**忽略目录**（`eslint.config.js:43-54`）：

```
node_modules/  dist/  .output/  .nuxt/  coverage/  .vscode/
scripts/       .idea/  .vercel/  参考设计/
```

> `scripts/` 被整目录忽略，即 `scripts/unused-images.mjs` 不受 lint 约束。

**Nuxt 全局变量白名单**（`eslint.config.js:9-38`）：手工声明了 `definePageMeta`、`useSeoMeta`、`useHead`、`useRouter`、`useRoute`、`useAsyncData`、`useState`、`queryCollection`、`queryCollectionNavigation`、`queryCollectionItemSurroundings` 等 29 个自动注入 API 以避免 `no-undef`；同时也声明了项目自定义组合式 `useTypewriter`、`useScrollThreshold`、`useScrollProgress`、`useAutoPlay`、`useListKeyboardNav`。

**自定义规则**（`eslint.config.js:94-123`）：

| 规则 | 级别 | 说明 |
|---|---|---|
| `vue/multi-word-component-names` | off | 允许单词名组件（如 `Market.vue`） |
| `vue/require-default-prop` | off | 不强制 props 默认值 |
| `vue/no-multiple-template-root` | off | 允许多根节点（Vue 3 fragments） |
| `vue/no-v-html` | **warn** | `v-html` 仅告警（项目确有使用，见 19.5） |
| `vue/html-self-closing` | **error** | 一律自闭合（void / normal / component 均为 `always`） |
| `@typescript-eslint/no-unused-vars` | warn | 忽略 `^_` 前缀的变量与参数 |
| `@typescript-eslint/no-explicit-any` | warn | 不推荐 `any` |
| `@typescript-eslint/no-non-null-assertion` | off | 允许 `!` 非空断言 |
| `no-console` | warn | — |
| `no-debugger` | warn | — |
| `prefer-const` | warn | — |
| `no-var` | **error** | 禁止 `var` |
| `eqeqeq` | warn | 强制全等 |
| `curly` | warn | 强制花括号 |

`.vue` 文件的解析器在 `eslint.config.js:70-77` 覆写为 `tseslint.parser`，以支持 TS 语法。

### 6.3 Prettier

来源：`.prettierrc.json`

| 选项 | 值 | 含义 |
|---|---|---|
| `semi` | `false` | 无分号 |
| `singleQuote` | `true` | 单引号 |
| `tabWidth` | `2` | 2 空格缩进 |
| `printWidth` | `100` | 行宽上限 100 |
| `trailingComma` | `"none"` | 无尾随逗号 |
| `arrowParens` | `"avoid"` | 单参箭头函数省略括号 |
| `bracketSpacing` | `true` | 对象字面量保留空格 |
| `endOfLine` | `"lf"` | LF 换行 |
| `htmlWhitespaceSensitivity` | `"ignore"` | 忽略 HTML 空白敏感性 |
| `vueIndentScriptAndStyle` | `false` | `<script>` / `<style>` 不额外缩进 |

> 建议 IDE 开启 Format On Save 并指定 Prettier 为默认格式化器。仓库中仍有少量片段未按该配置（如 `{return routes}` 缺空格），执行 `npm run format` 可一并修正。

### 6.4 单元测试（Vitest）

来源：`vitest.config.ts`

```1:8:vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node'
  }
})
```

- 未启用 `happy-dom` / `jsdom`，也未使用 `@vue/test-utils` —— 这两个包目前是**未被使用的依赖**
- 未启用 `happy-dom` / `jsdom`，也未使用 `@vue/test-utils` —— 这两个包目前是**未被使用的依赖**
- 若要开展组件级测试，需扩展 `include` 并将 `environment` 切至 `happy-dom`

**现有测试清单（3 个文件）**：

| 文件 | 覆盖对象 | 关键断言 |
|---|---|---|
| `tests/getDocsRoutes.test.ts` | `utils/getDocsRoutes.ts` | 目录不存在返回空数组；文件名即 slug；`index.md` 映射为父目录路由；目录名不剥离前缀；忽略非 `.md`；递归处理嵌套目录；始终包含 `/docs`。实现上用 `mkdtempSync` 建临时目录 + `vi.spyOn(process, 'cwd')` 做隔离 |
| `tests/getSitemapRoutes.test.ts` | `utils/getSitemapRoutes.ts` | 含 12 条静态路由；为 12 个产品各生成 `/product/:slug`；正确合并文档路由；去重（`/agent` 仅一份）；结果字典序排序；不含 `/demo` |
| `tests/products.test.ts` | `data/products.ts` | 共 12 个产品且 slug 唯一；`getProductBySlug` 可回查每项；未知 slug 返回 `undefined`；每个产品的 SEO / hero / features / cta 字段非空；**回归防护：`demoImage` 与 `ogImage` 不得含 `/public/` 前缀**；每个 `featureDetails.points` 非空 |

### 6.5 CI 流水线

来源：`.github/workflows/ci.yml`

| 项 | 值 |
|---|---|
| 触发条件 | `push` 到 `main`；`pull_request` 到 `main` |
| 运行环境 | `ubuntu-latest` |
| Node | `22`（启用 `cache: npm`） |

流水线步骤严格串行，任一失败即中断：

```21:34:.github/workflows/ci.yml
      - name: 安装依赖
        run: npm ci

      - name: 类型检查
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: 单元测试
        run: npm test

      - name: 构建（静态生成，failOnError=true）
        run: npm run build
```

> CI **未**执行 `format:check`，格式化一致性目前依赖开发者本地习惯。
> CI **未**包含任何环境变量 / secret，也无 staging 与 production 环境区分。

### 6.6 辅助脚本（非质量门禁）

`scripts/unused-images.mjs`（已被 ESLint 整目录忽略）：

- 遍历 `public/` 收集 `.png` / `.jpg` / `.jpeg` / `.webp` / `.svg` / `.gif` / `.ico` / `.avif`
- 扫描 `pages/ components/ content/ utils/ data/ assets/` 及 `app.config.ts`、`nuxt.config.ts`、`content.config.ts` 的全文内容
- 输出未被任何源码字符串引用到的图片清单（按体积降序）与总体积
- 运行方式：`node scripts/unused-images.mjs`
- 用途：清理 `public/` 冗余资源。**注意它基于字符串包含判断，动态拼接的路径会产生误报。**

---

## 7. 目录结构说明

```
buidai/
├── .github/workflows/ci.yml        # GitHub Actions：typecheck → lint → test → build
├── .vscode/settings.json           # 关闭 css/scss/less unknownAtRules 告警（适配 Tailwind v4）
├── 项目文档/
│   ├── README.md                   # ← 本文件
│   └── 产品数据模型合并方案.md       # 产品数据模型相关设计文档
├── assets/css/
│   ├── main.css                    # 全局变量 + @layer base/components/utilities
│   └── grid-border.css             # 网格边框设计系统（全局纯 CSS 类）
├── components/                     # 54 个 .vue，全部自动导入
│   ├── agent/          (4)         # 智言AI 产品页区块
│   ├── buidai/         (9)         # 私有部署页区块
│   ├── demo/           (4)         # 演示页区块（全部含严格 props/emits）
│   ├── docs/           (1)         # DocsSidebar 递归侧边栏
│   ├── landing/       (14)         # 首页与通用营销区块（最大子目录）
│   ├── pricing/        (2)         # 定价页区块
│   ├── solutions/      (7)         # 解决方案页区块
│   └── 根目录          (13)        # 全局骨架 + 跨页复用区块
├── composables/                    # 4 个自动导入的组合式函数
│   ├── useAutoPlay.ts
│   ├── useListKeyboardNav.ts
│   ├── useScroll.ts
│   └── useTypewriter.ts
├── content/                        # Markdown 内容源（17 个 .md）
│   ├── blog/           (2)         # 1.md、4.md
│   ├── docs/framework/ (5)         # define / prerequisites / sources / types / validators
│   ├── docs/introduction/ (7)      # bt / configuration / demo / docker-installation
│   │                               #   / manual-installation / migration / start
│   └── update/         (3)         # 2503.md、2504.md、2510.md
├── data/                           # 结构化 TS 数据模块
│   ├── demoProducts.ts             # 演示中心数据（2 组分类 / 17 个产品 / 41 个平台入口）
│   ├── products.ts                 # 12 个产品页的完整数据
│   └── site.ts                     # 站点级 SEO 常量
├── layouts/
│   └── default.vue                 # 唯一布局：Banner + Navigation + slot + Footer + BackToTop
├── pages/                          # 17 个页面文件，文件路由
│   ├── index.vue                   # /
│   ├── agent.vue buidai.vue solutions.vue pricing.vue plugin.vue
│   ├── about.vue changelog.vue contact.vue download.vue resources.vue
│   ├── demo.vue                    # /demo（被 sitemap exclude）
│   ├── blog/{index.vue, [...slug].vue}
│   ├── docs/{index.vue, [...slug].vue}
│   └── product/[slug].vue
├── public/                         # 静态资源（106 个文件，直接映射根路径）
│   ├── blog/ images/ plugin/ product/          # 分类图片资源
│   ├── agent.svg AIArsenal.svg AIArsenal-1.svg grid.svg logo.svg ogImage.svg
│   ├── favicon.ico favicon.svg icon.png
│   ├── qrcode.png wechat.png sell-point-1.png sell-point-2.png
│   └── robots.txt
├── scripts/unused-images.mjs       # 未引用图片巡检脚本
├── tests/                          # 3 个 Vitest 测试文件
├── utils/                          # 6 个工具 / 数据模块
│   ├── getDocsRoutes.ts            # 文档路由抓取（供 Nitro prerender）
│   ├── getSitemapRoutes.ts         # Sitemap 路由聚合
│   ├── link.ts                     # 19 条友情链接
│   ├── pluginData.ts               # 应用市场数据（27 apps / 8 categories）
│   ├── qrModal.ts                  # 二维码弹窗 CustomEvent 事件总线
│   └── ui.ts                       # UI 常量（SCROLL / LAYOUT / ANIMATION / MARQUEE）
├── app.config.ts                   # @nuxt/ui 全局配置（主色 + 42 个图标别名）
├── app.vue                         # 根组件：UApp + NuxtLayout + NuxtPage + 3 段 JSON-LD
├── content.config.ts               # Nuxt Content 集合定义（blog / docs / update）
├── env.d.ts                        # vite/client + @storybook/vue3 类型引用
├── error.vue                       # 全局错误页（区分 404 / 5xx）
├── eslint.config.js                # ESLint 扁平配置
├── nuxt.config.ts                  # Nuxt 主配置
├── package.json / package-lock.json
├── tsconfig.json                   # 仅引用 .nuxt/tsconfig.*.json
├── vitest.config.ts
├── esa.jsonc                       # Edge Static Assets 部署描述（assets 目录 ./dist）
├── .prettierrc.json
├── .gitignore
├── BuidAI.md                       # 旧版项目文档（部分内容已过期，见第 19 章）
└── README.md                       # 根目录 README：当前为空文件
```

### 被忽略或已产生的运行期目录

`.gitignore` 排除：`.output`、`.nuxt`、`.nitro`、`.cache`、`dist`、`node_modules`、`logs`、`*.log`、`.DS_Store`、`.fleet`、`.idea`、`.env` / `.env.*` / `.env.example`、`.备份目录`、`参考设计/`、`.output`。

仓库当前**存在**但已被忽略的运行期目录：`.nuxt/`、`.output/`、`.data/`（Content 的 SQLite 数据）、`.vercel/`（Vercel 构建产物，含 `output/static`）、`dist/`、`.claude/`。

---

## 8. 架构要点

### 8.1 整体渲染架构

```
浏览器请求
    │
    ▼
dist/ 静态文件（SSG 产物，由 nuxt generate 构建期生成）
    │
    ▼
app.vue
    └─ UApp                    ← @nuxt/ui 根容器（提供 Toast / Tooltip 等 portal 上下文）
        └─ NuxtLayout          → layouts/default.vue
            └─ NuxtPage        → pages/*.vue
                └─ 各区块组件（自动导入）
```

**关键点**：`app.vue` 为 `<NuxtPage>` 传入自定义 page-key：

```1:8:app.vue
<template>
  <UApp>
    <NuxtLayout>
      <!-- page-key 按完整路径区分：同一路由记录不同参数间跳转（如 /product/a → /product/b）时重建组件，避免复用旧的 setup 状态 -->
      <NuxtPage :page-key="(route) => route.fullPath" />
    </NuxtLayout>
  </UApp>
</template>
```

这是提交 `a8cefd9`（`fix: 修复产品页 SPA 切换不刷新数据`）的直接产物：Vue Router 默认按**路由记录**复用组件，导致 `/product/banana → /product/ppt` 这类同路由不同参数的跳转不会重跑 `setup()`，`useSeoMeta` 与 `featureDetails` 停留在旧值。改用 `route.fullPath` 作 key 强制重建组件，是当前最直接的修复方式。

### 8.2 应用外壳

| 组成 | 文件 | 职责 |
|---|---|---|
| 根组件 | `app.vue` | `UApp` 容器 + 3 段 JSON-LD 结构化数据 |
| 布局 | `layouts/default.vue` | `AppBanner` → `AppNavigation` → `<slot/>` → `AppFooter` → `BackToTop` |
| 错误页 | `error.vue` | 按 `statusCode` 区分 404 / 5xx，继承默认布局，`robots: noindex, nofollow` |

`layouts/default.vue` 全文件仅 20 行：

```1:20:layouts/default.vue
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <!-- 顶部横幅 -->
    <AppBanner />

    <!-- 导航 -->
    <AppNavigation />

    <!-- 主要内容 -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- 返回顶部按钮 -->
    <BackToTop />
  </div>
</template>
```

`error.vue` 的处理策略：

- 通过 `props.error.statusCode` 判断是否为 404（`error.vue:80-92`）
- 开发环境才展示具体错误信息（`import.meta.dev`）
- 「返回首页」调用 `clearError({ redirect: '/' })`，「返回上一页」在 `window.history.length > 1` 时才 `router.back()`（`error.vue:99-121`）
- 通过 `useHead` 写入 `robots: noindex, nofollow`

### 8.3 Nuxt 关键配置解读

| 配置 | 值 | 作用 |
|---|---|---|
| `compatibilityDate` | `'2025-12-19'` | 锁定 Nuxt 默认行为快照，升级 Nuxt 时避免行为突变 |
| `devtools.enabled` | `true` | 开发面板 |
| `typescript.typeCheck` | `false` | 构建期关闭类型检查以提速，由 `npm run typecheck` 补位 |
| `experimental.payloadExtraction` | `true` | 预渲染时抽取 payload 为独立 `_payload.json`，减小 HTML 体积 |
| `experimental.renderJsonPayloads` | `true` | payload 使用 JSON 而非 JS 字面量，可被 CDN 安全缓存 |
| `ui.fonts` | `false` | **构建期离线保障**：关闭 @nuxt/ui 自动注册的 @nuxt/fonts，杜绝启动时的字体元数据网络请求，站点仅用系统字体 |
| `colorMode.classSuffix` | `''` | 深色模式类名为 `.dark`（而非 `dark-mode`） |
| `site.url` | `https://www.buidai.com` | sitemap 绝对地址基准 |
| `nitro.preset` | `'static'` | **强制通用静态输出，禁用 Vercel preset 自动检测** |
| `nitro.compressPublicAssets` | `true` | 压缩产出公共资源 |
| `nitro.output.publicDir` | `'dist'` | 输出目录兜底为 `dist` |
| `nitro.prerender.failOnError` | `true` | 预渲染失败即中断构建，避免坏页面静默发布 |
| `nitro.prerender.routes` | `getDocsRoutes()` | 注入动态文档路由 |
| `css` | `['~/assets/css/main.css', '~/assets/css/grid-border.css']` | 全局样式入口及其顺序 |

### 8.4 静态生成（SSG）链路

```
nuxt generate
  ├─ 加载 nuxt.config.ts
  │     └─ getDocsRoutes()             ← node:fs 同步遍历 content/docs
  ├─ Content 模块将所有 .md 灌入 SQLite（better-sqlite3，落在 .data/）
  ├─ Nitro prerender 遍历路由：
  │     ├─ pages/ 文件静态路由（12 条 + /demo）
  │     ├─ getDocsRoutes() 得到的 13 条 /docs/* 路由
  │     └─ /product/:slug（12 条，数据源 data/products.ts）
  ├─ 任意路由抛错 → failOnError: true → 构建失败
  └─ 产出 dist/ + sitemap.xml
```

> `/blog/:slug` **未**加入 prerender routes，依赖 Nuxt 在预渲染过程中抓取已渲染 HTML 里的链接来自动发现。若博客列表页改动导致链接不可达，详情页存在漏渲染风险，详见 [19.3](#193-路由与内容层面的注意点)。

### 8.5 三种数据来源模式

项目没有后端 API，全部数据来自以下三类：

| 模式 | 载体 | 消费方式 | 代表数据 |
|---|---|---|---|
| ① 内容集合 | `content/**/*.md` | `queryCollection()` 在预渲染期 / 浏览器查询 SQLite | blog / docs / update |
| ② TS 数据模块 | `data/*.ts`、`utils/pluginData.ts` | 直接 `import`，编译进 bundle | 12 个产品页、27 个应用、19 条友情链接、演示中心数据 |
| ③ 组件内联常量 | 各 `.vue` 的 `<script setup>` | 组件私有 | 导航项、页脚分组、FAQ、定价套餐、解决方案卡片等 |

> 模式 ② 的特点：数据会被全部打进客户端 bundle，随数据量增长需关注首屏体积（见 19.5）。

### 8.6 交互与基础设施约定

| 机制 | 实现 | 说明 |
|---|---|---|
| **二维码弹窗跨组件通信** | `utils/qrModal.ts` 派发 `window` 上的 `CustomEvent('showQRCodeModal', { detail })`，`BackToTop.vue` 监听并渲染 | 免去引入全局 store；任意组件调用 `dispatchQrModal({ title, desc, image })` 即可弹窗 |
| **body 滚动锁定** | `AppNavigation.vue` 的 `lockBodyScroll` / `unlockBodyScroll` | 移动端抽屉打开时固定 body，并把 `scrollY` 保存到 `dataset` 以便恢复 |
| **路由变化关闭抽屉** | `AppNavigation.vue` 中 `watch(() => route.path, ...)` | 关闭移动端菜单并重置二级子菜单 |
| **rAF 节流滚动** | `composables/useScroll.ts` | 所有滚动监听统一 `requestAnimationFrame` + `{ passive: true }`，并在 `onUnmounted` 解绑 |
| **轮播自动播放** | `composables/useAutoPlay.ts` | 统一 start / pause / resume / reset 语义，卸载自动清理定时器 |
| **键盘导航** | `composables/useListKeyboardNav.ts` | 遵循 WAI-ARIA tablist：`ArrowDown` / `ArrowUp` / `Home` / `End` |
| **错误边界** | `NuxtErrorBoundary`（docs 详情页）、`onErrorCaptured(() => false)`（demo 页） | 子组件渲染异常时不至于白屏 |

---

## 9. 文档路由机制

文档系统是本项目自定义逻辑最密集的部分，涉及 **4 个源文件 + 1 个构建期注入点**。

### 9.1 构建期：生成路由清单

`utils/getDocsRoutes.ts`（在 `nuxt.config.ts:90` 被同步调用）：

```16:54:utils/getDocsRoutes.ts
export const getDocsRoutes = () => {
  const routes: string[] = []
  const docsDir = path.resolve(process.cwd(), 'content/docs')

  // 如果文档目录不存在，直接返回空数组
  if (!fs.existsSync(docsDir)) {return routes}

  const traverse = (dir: string, urlPrefix: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        traverse(path.join(dir, entry.name), `${urlPrefix}/${entry.name}`)
      } else if (entry.name.endsWith('.md')) {
        const cleanName = entry.name.replace(/\.md$/, '')
        if (cleanName === 'index') {
          routes.push(urlPrefix)
        } else {
          routes.push(`${urlPrefix}/${cleanName}`)
        }
      }
    }
  }

  traverse(docsDir, '/docs')
  routes.push('/docs')
  return routes
}
```

**规则总结**：

| 规则 | 说明 | 单测保障 |
|---|---|---|
| 递归遍历 | 目录 → `/docs/<dir>`；文件 → `/docs/<dir>/<file>` | `递归处理嵌套目录` |
| 文件名即 slug | **不做数字前缀剥离**，文件名原样成为 slug | `文件名即 slug`、`目录名原样保留` |
| `index.md` 特例 | 映射为父目录本身的路径 | `index.md 映射为父目录路由` |
| 忽略非 `.md` | 只处理 `.md` 后缀 | `忽略非 Markdown 文件` |
| 始终含 `/docs` | 最后无条件 push | `始终包含 /docs 索引路由` |
| 目录缺失兜底 | 返回空数组，不抛错 | `content/docs 目录不存在时返回空数组` |

> 与旧文档 `BuidAI.md` 描述的「`1.introduction.md` → `/docs/introduction`」**不一致**：当前实现**不剥离**数字前缀。实践中本仓库 `content/docs/` 下的文件名均**不带**数字前缀（如 `start.md`、`docker-installation.md`），所以两者目前恰好不冲突，但**新增文档时切忌加数字前缀**。

### 9.2 运行期：抓取文档正文

`pages/docs/[...slug].vue:179-193`：

```179:193:pages/docs/[...slug].vue
const [{ data: page }, { data: surround }] = await Promise.all([
  // 文件名即最终 slug（无数字前缀），直接精确匹配
  useAsyncData(`docs-${currentPath.value}`, async () => {
    const exact = await queryCollection('docs').where('path', '=', currentPath.value).first()
    return exact ?? null
  }),
  useAsyncData(`docs-surround-${currentPath.value}`, () => queryCollectionItemSurroundings('docs', currentPath.value, {
    fields: ['title', 'path']
  }))
])

// Handle 404：交由 Nuxt 错误页处理，避免返回 200 + 空内容（软 404）
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: '文档不存在' })
}
```

要点：

- **并行**拉取正文与上下篇（`Promise.all`）
- 路径先做 `decodeURIComponent` + 去尾斜杠归一化（`[...slug].vue:165-173`，支持中文路径）
- **软 404 防护**：查不到就抛 `createError({ statusCode: 404 })`，交给 `error.vue` 处理，保证返回真实的 404 状态码，而非 200 空页面
- `useAsyncData` 的 key 绑定 `currentPath`，切换文档时能正确命中新缓存

### 9.3 运行期：侧边栏导航树

`components/docs/Sidebar.vue` 是**递归自调用**组件（模板内写 `<DocsSidebar :navigation="item.children" :level="level + 1" />`）。

数据获取（仅在根层级且未传 prop 时执行，`Sidebar.vue:162-173`）：

```162:173:components/docs/Sidebar.vue
const { data: fetchedDocs, pending, error } = useAsyncData('sidebar-docs', async () => {
  if (props.level !== 0 || props.navigation) {return []}

  const docs = await queryCollection('docs')
    .select('title', 'path', 'category', 'order', 'navigation')
    .order('order', 'ASC') // 按 order 字段升序排列
    .all()

  return docs
})
```

分组与排序逻辑（`Sidebar.vue:184-235`）：

- 按 frontmatter 的 `category` 聚合，缺省归入 `未分类`
- 分类优先序表 `categoryOrder = ['入门指南', '进阶教程', '未分类']`：
  - 两者都在表中 → 按表内下标排序
  - 仅一个在表中 → 在表内者优先
  - 都不在 → `localeCompare` 字典序
- 组内成员顺序由 SQL 的 `ORDER BY order ASC` 决定
- 若文档 frontmatter 声明了 `navigation.icon`（如 `i-lucide-info`），侧边栏会渲染该图标（`Sidebar.vue:193-198`）

折叠状态（`Sidebar.vue:241-272`）：

- 用 `useState<Record<string, boolean>>('sidebar-collapsed-state')` 保存，**跨路由切换保持**
- 初始全部折叠；随后 `watch([items, () => route.path], ..., { immediate: true })` 自动展开包含当前路径的分组
- 已被用户手动操作过的分组保留用户选择，不被自动逻辑覆盖

### 9.4 文档首页分组卡片

`pages/docs/index.vue:80-129` 与侧边栏**重复实现**了同一套 category 分组 + `categoryOrder` 排序逻辑（因为首页需要 `UPageGrid` + `UPageCard` 的卡片形态，无法直接复用 Sidebar）。二者逻辑必须保持一致，改动时需同步修改两处（见 19.5）。

### 9.5 目录（TOC）高亮机制

`docs/[...slug].vue` 与 `blog/[...slug].vue` 使用同一套方案：

1. 用 `IntersectionObserver` 观察页面上所有 `h2, h3`
2. `rootMargin` 取自 `utils/ui.ts` 的 `SCROLL.TOC_OBSERVER_TOP_MARGIN`（`-100px`）与 `TOC_OBSERVER_BOTTOM_MARGIN`（`-66%`）
3. 进场者 → `activeId.value = target.id`
4. 点击 TOC 时调用 `scrollToHeading()`：手动偏移 `SCROLL.HEADING_OFFSET`（100px）以避开固定头部，并用 `history.pushState` 更新 hash 而不触发原生跳转
5. `onUnmounted` 中执行 `observer.disconnect()`

### 9.6 文档页面布局栅格

```
lg 断点：  Sidebar 3 列  |  正文 9 列  |  TOC 隐藏
xl 断点：  Sidebar 2 列  |  正文 8 列  |  TOC 2 列
```

移动 / 中屏下，TOC 折叠为可展开的「本页目录」卡片（`[...slug].vue:31-70`）。

---

## 10. 内容集合定义与组织

### 10.1 `content.config.ts` 结构

```1:15:content.config.ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 博客文章集合配置
    blog: defineCollection({
      type: 'page', // 集合类型：页面
      source: 'blog/*.md', // 数据源路径匹配规则
      schema: z.object({
        tags: z.array(z.string()), // 标签数组
        category: z.string(), // 分类名称
        date: z.date(), // 发布日期
        image: z.string().optional() // 封面图片（可选）
      })
    }),
```

三个集合（`blog`、`docs`、`update`）**均为 `type: 'page'`**（一对一映射到路由），**没有** `data` 类型集合。

### 10.2 Schema 字段表

**① `blog`**（源：`content/blog/*.md`，不递归）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `tags` | `z.array(z.string())` | 是 | 标签数组 |
| `category` | `z.string()` | 是 | 分类名称 |
| `date` | `z.date()` | 是 | 发布日期 |
| `image` | `z.string().optional()` | 否 | 封面图 |

**② `docs`**（源：`content/docs/**/*.md`，递归）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `title` | `z.string()` | 是 | 文档标题 |
| `description` | `z.string()` | 是 | 文档描述 |
| `category` | `z.string().optional()` | 否 | 侧边栏 / 首页分组依据，缺省归入 `未分类` |
| `order` | `z.number().optional()` | 否 | 组内排序权重（ASC） |
| `links` | `z.array(z.object({ label, icon, to, target? })).optional()` | 否 | 相关链接数组 |

**③ `update`**（源：`content/update/*.md`，不递归）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `title` | `z.string()` | 是 | 版本标题 |
| `description` | `z.string()` | 是 | 版本简介 |
| `date` | `z.string()` | 是 | **字符串类型**（区别于 blog 的 `z.date()`） |
| `image` | `z.string().optional()` | 否 | 版本配图 |
| `to` | `z.string().optional()` | 否 | 详情链接 |
| `target` | `z.string().optional()` | 否 | 链接打开方式 |
| `isMajor` | `z.boolean().optional()` | 否 | 是否主要版本（时间轴样式区分） |
| `authors` | `z.array(z.object({ name, avatar: { src, alt } })).optional()` | 否 | 作者列表 |

> 一致性提醒：`blog.date` 是 `Date`，`update.date` 是 `string`，两者不能复用同一个格式化 / 比较逻辑。

### 10.3 现有内容清单

**Blog（2 篇）**

| 文件 | 路由 | 分类 | 日期 | 封面 |
|---|---|---|---|---|
| `content/blog/1.md` | `/blog/1` | 产品动态 | 2024-12-17 | `/blog/blog.webp` |
| `content/blog/4.md` | `/blog/4` | — | — | — |

> 博客 slug 直接使用文件名。因为 `type: 'page'` + `source: 'blog/*.md'`，Nuxt Content 的默认 path 就是 `/blog/<文件名>`。

**Docs（12 篇）**

`introduction/`（7 篇，`category: 入门指南`）：

| order | 文件 | 路由 | title |
|---|---|---|---|
| 1 | `start.md` | `/docs/introduction/start` | 智言AI介绍 |
| 2 | `docker-installation.md` | `/docs/introduction/docker-installation` | Docker安装 |
| 3 | `bt.md` | `/docs/introduction/bt` | 宝塔面板部署 |
| 4 | `manual-installation.md` | `/docs/introduction/manual-installation` | 手动安装 |
| 5 | `demo.md` | `/docs/introduction/demo` | 演示环境 |
| 6 | `configuration.md` | `/docs/introduction/configuration` | 开源与商业化 |
| 7 | `migration.md` | `/docs/introduction/migration` | 迁移指南 |

`framework/`（5 篇，`category: 进阶教程`）：

| order | 文件 | 路由 | title |
|---|---|---|---|
| 1 | `prerequisites.md` | `/docs/framework/prerequisites` | 前置准备 |
| 2 | `define.md` | `/docs/framework/define` | 定义内容集合 |
| 3 | `sources.md` | `/docs/framework/sources` | 集合源 |
| 4 | `types.md` | `/docs/framework/types` | 集合类型 |
| 5 | `validators.md` | `/docs/framework/validators` | 模式验证器 |

**Update（3 条）**：`2503.md`、`2504.md`、`2510.md`。其中 `2510.md` 的 `title` 为「智言万象 25.1.0」，`isMajor: true`。

### 10.4 frontmatter 书写范例

```yaml
# 文档（docs）
---
order: 1
category: 入门指南
title: 智言AI介绍
navigation:
  title: 介绍
  icon: i-lucide-info
---

# 博客（blog）
---
title: '智言AI企业级开源智能体搭建平台'
description: '智言AI 是一款面向AI开发者、AI创业者和先进组织打造的企业级开源智能体搭建平台……'
date: 2024-12-17
category: '产品动态'
tags: ['智言AI', '开源', 'AI Agent', '智能体']
image: '/blog/blog.webp'
authors:
  - name: '智言AI 团队'
    username: '智言AI'
    avatar:
      src: '/logo.png'
---

# 更新日志（update）
---
title: '智言万象 25.1.0'
description: '新增会员订阅、应用中心及PC桌面端支持，优化多项体验与修复已知问题。'
date: '2025-12-20'
image: '/blog/blog-2.webp'
to: '#'
target: '_blank'
isMajor: true
authors:
  - name: '智言万象 Team'
    avatar:
      src: '/logo.svg'
      alt: 'Team'
---
```

> blog 的 `authors` 字段虽未在 Zod schema 中声明，但 Nuxt Content 的 `page` 类型会保留额外字段。当前 `blog/[...slug].vue` 未消费它，作者信息改为硬编码「智言万象 Team」。

### 10.5 内容查询调用点汇总

| 调用位置 | 表达式 | 用途 |
|---|---|---|
| `pages/docs/[...slug].vue:182` | `queryCollection('docs').where('path','=',p).first()` | 单篇正文 |
| `pages/docs/[...slug].vue:185` | `queryCollectionItemSurroundings('docs', p, { fields: ['title','path'] })` | 上下篇 |
| `components/docs/Sidebar.vue:167` | `queryCollection('docs').select(...).order('order','ASC').all()` | 侧边栏导航树 |
| `pages/docs/index.vue:82` | `queryCollection('docs').select(...).order('order','ASC').all()` | 首页分组卡片 |
| `pages/blog/index.vue:118` | `queryCollection('blog').order('date','DESC').all()` | 博客列表（搜索与分类过滤在客户端完成） |
| `pages/blog/[...slug].vue:225` | `queryCollection('blog').path(route.path).first()` | 博客详情 |
| `pages/blog/[...slug].vue:238` | `queryCollection('blog').order('date','DESC').select('title','path','date').all()` | 手写 newer / older 相邻计算 |
| `pages/changelog.vue:122` | `queryCollection('update').order('date','DESC').all()` | 更新日志时间轴 |

> `nuxt.config.ts` **未显式配置** `content.database.type`，使用 `@nuxt/content` v3 的默认 SQLite（`better-sqlite3`）。产物证据见 `.vercel/output/static/__nuxt_content/{blog,docs}/sql_dump.txt` 与同目录的 `sqlite3.*.wasm`。

---

## 11. 页面路由总表

共 **17 个页面文件**，派生约 **38 条 URL**（含 12 条产品动态路由）。

| 路由 | 文件 | 组件构成 / 说明 | `definePageMeta` | SEO 方式 |
|---|---|---|---|---|
| `/` | `pages/index.vue` | `LandingHeroSection` → `LandingProductShowcase` → `LandingFeatureCarousel` → `LandingValueProps` → `LandingScenarioSection` → `LandingProductFeatures` → `LandingProductDesign` → `LandingUserReviews` → `LandingFAQ` → `LandingCallToAction` → `LandingAIArsenal` → `LandingCtaSection`（12 个区块） | `layout: 'default'` | `useSeoMeta`（复用 `SITE_TITLE` / `SITE_DESCRIPTION`） |
| `/agent` | `pages/agent.vue` | `AgentHero` → `LandingFeatureSteps` → `AIIndustry` → `LandingOpenSourceRoadmap` → `AgentFeatures` → `AgentAdvantages` → `AgentFaq` → `LandingCtaSection` | 无 | `useSeoMeta` |
| `/buidai` | `pages/buidai.vue` | `BuidaiHero` → `BuidaiTechStack` → `AIApplicationSystems` → `Market`（`:limit="8"`）→ `ProductShowcase` → `BuidaiVibeCoding` → `BuidaiAdvantages` → `LLMModels` → `LandingOpenSourceRoadmap` → `BuidaiScenarios` → `BuidaiWhyChooseUs` → `BuidaiPartners` → `BuidaiTestimonials` → `BuidaiFaq` → `LandingCtaSection`（15 个区块，全仓最多） | 无 | `useSeoMeta` |
| `/solutions` | `pages/solutions.vue` | `SolutionsHero` → `SolutionsFeatureGrid` → `SolutionsShowcase` → `SolutionsQuickStart` → `SolutionsSellingPoints` → `SolutionsFaq` → `SolutionsCta` | `layout: 'default'` | `useSeoMeta` |
| `/pricing` | `pages/pricing.vue` | `PricingPlans` → `UMarquee`（simple-icons logo ×2）→ `PricingFaq` → `LandingCtaSection` | 无 | `useSeoMeta` |
| `/plugin` | `pages/plugin.vue` | 无子组件，全部内联；双视图（grid / list）；消费 `utils/pluginData` 的 27 个 app 与 8 个 category；支持搜索、分类过滤、`dispatchQrModal` | `layout: 'default'` | `useSeoMeta` |
| `/demo` | `pages/demo.vue` | `DemoMobileTabs` → `DemoHero` → `DemoSidebar` → `DemoProductDetail` → `LandingCtaSection`；消费 `data/demoProducts` | 无 | **`useHead`**（含 canonical、robots、twitter:* 与 **JSON-LD WebPage + BreadcrumbList**） |
| `/product/:slug` | `pages/product/[slug].vue` | 全部内联，数据来自 `getProductBySlug()`；Hero → 演示图 → 功能网格 → 功能详情（hover 切换 `activePoint`）→ `ProductFeatures` + `LandingUserReviews` → CTA | `layout: 'default'` | `useSeoMeta`（含 og / twitter 全字段，取自 `product.seo`） |
| `/docs` | `pages/docs/index.vue` | 按 category 渲染 `UPageGrid` + `UPageCard` 分组卡片，带 loading 与 error 态 | 无 | `useSeoMeta` |
| `/docs/*` | `pages/docs/[...slug].vue` | 三栏：`DocsSidebar` \| 正文 `ContentRenderer` \| TOC；含面包屑、`NuxtErrorBoundary`、上下篇导航 | 无 | `useSeoMeta` |
| `/blog` | `pages/blog/index.vue` | 客户端搜索 + 分类筛选 + 4 列响应式卡片网格 + 空状态 | 无 | `useSeoMeta` |
| `/blog/:slug` | `pages/blog/[...slug].vue` | 阅读进度条（`useScrollProgress`）+ 面包屑 + 封面图 + `prose` 正文 + 复制链接 + newer/older + 右栏 TOC + 二维码 | 无 | `useSeoMeta` |
| `/changelog` | `pages/changelog.vue` | 时间轴；`queryCollection('update')`；自绘 sticky 侧栏 + 移动端抽屉 + `IntersectionObserver` 高亮 | `layout: 'default'` | `useSeoMeta` |
| `/resources` | `pages/resources.vue` | 6 张资源卡（常量数组） | `layout: 'default'` | `useSeoMeta` |
| `/contact` | `pages/contact.vue` | `ContactConnect` + Hero + 三栏联系方式（`mailto:` / `tel:`）+ FAQ 手风琴 | `layout: 'default'` | `useSeoMeta` |
| `/about` | `pages/about.vue` | 静态文案 + 图片 + `LandingCtaSection` | 无 | `useSeoMeta` |
| `/download` | `pages/download.vue` | 仅 `AppDownload`（24 行，最简页面） | `layout: 'default'` | `useSeoMeta` |

### 11.1 产品动态路由（12 条）

`pages/product/[slug].vue` 由 `data/products.ts` 的 `products`（12 项）驱动，逐一生成 `/product/<slug>`：

`banana`（香蕉绘画 Nanobanana）、`drama`（网文短剧）、`human`（数字人）、`jimeng`（即梦AI视频）、`jmdraw`（即梦AI绘画）、`model`（电商试衣）、`music`（AI音乐）、`ppt`、`resume`、`sora`、`videoclip`、`xhs`

slug 不存在时主动抛错（`pages/product/[slug].vue:14-16`）：

```14:16:pages/product/[slug].vue
if (!product) {
  throw createError({ statusCode: 404, statusMessage: '产品页面未找到' })
}
```

### 11.2 路由层面的横向结论

- **布局方式**：没有任何页面使用 `<NuxtLayout>` 标签，全部依赖 `layouts/default.vue`。其中 6 个页面（`changelog`、`contact`、`download`、`plugin`、`resources`、`solutions`）显式声明了 `definePageMeta({ layout: 'default' })`，属冗余声明；其余 5 个未声明，效果相同
- **中间件**：项目没有 `middleware/` 目录，任何页面均未声明 middleware
- **SEO 覆盖**：16 个页面使用 `useSeoMeta`，仅 `demo.vue` 使用 `useHead`；`contact.vue` 与 `download.vue` 缺少 `ogType`
- **404 统一策略**：`docs`、`blog`、`product` 三处均采用「抛 `createError({ statusCode: 404 })`」而非渲染空态，杜绝软 404

---

## 12. 组件体系

`components/` 共 **54 个 `.vue`**，由 Nuxt 全盘自动导入；子目录参与命名前缀（如 `landing/HeroSection.vue` → `<LandingHeroSection>`）。

### 12.1 全局骨架组件（根目录 13 个）

| 组件 | 行数 | 职责 | Nuxt UI 依赖 |
|---|---|---|---|
| `AppNavigation.vue` | 541 | sticky 主导航；桌面二级下拉菜单；移动端抽屉（双列栅格 + 二级子视图）；路由高亮；滚动样式切换；body 滚动锁定 | `UNavigationMenu`、`UButton`×6、`UIcon`×10 |
| `AppFooter.vue` | 210 | 5 组页脚链接（移动端可折叠）+ 19 条友情链接 + ICP 备案号 + 二维码 | 无 |
| `AppBanner.vue` | 22 | 顶部促销横幅（外跳 `https://www.cnai.art/seedance`） | `UBanner` |
| `BackToTop.vue` | 396 | 右下悬浮按钮组：在线咨询 / 二维码 hover 卡 / 二维码弹窗（监听 `showQRCodeModal`）/ 售后菜单 + `Transition` | 无 |
| `FallingText.vue` | 391 | **Matter.js 物理文字坠落**。Props：`text`、`highlightWords`、`wordColors`、`trigger`（`auto`\|`scroll`\|`click`\|`hover`）、`backgroundColor`、`wireframes`、`gravity`、`mouseConstraintStiffness`、`fontSize`；默认值 `trigger: 'auto'`、`gravity: 0.1`、`mouseConstraintStiffness: 0.6`、`fontSize: '1rem'`。使用**动态 `await import('matter-js')`** 避免进入初始 bundle | 无 |
| `SectionHeading.vue` | 43 | 通用区块标题。Props：`eyebrow?`、`description?`、`titleSize?: 'sm'\|'md'\|'lg'` | 无 |
| `UChangelogVersions.vue` | 102 | 单个版本的变更日志条目（时间轴节点）。Props：`versions: ChangelogVersion[]` | 无 |
| `AppDownload.vue` | 119 | `#download` 下载区块（渐变背景 + 标题区） | 无 |
| `Market.vue` | 205 | 「智言AI 与其它产品对比优势」应用卡网格。Props：`defaultLimit`（默认 8）、`category` | `UIcon`×7 |
| `LLMModels.vue` | 247 | 内置大模型卡片网格，支持展开更多（`isExpanded`） | 无 |
| `AIIndustry.vue` | 413 | 行业方案 Tab 切换 + 自动轮播，采用 grid-border 布局 | `UIcon`×8 |
| `AIApplicationSystems.vue` | 112 | 应用中心已上架能力 / 应用卡网格 | 无 |
| `ContactConnect.vue` | 67 | 四宫格联系方式卡片 | `UIcon`×4 |

### 12.2 `landing/`（14 个，最大子目录）

| 组件 | 行数 | 职责 |
|---|---|---|
| `ProductShowcase.vue` | **690** | 全仓最大文件；Tab 切换 + 可拖拽轮播 + `currentTabUrl` 联动 |
| `HeroSection.vue` | 457 | 首页主视觉（极光网格 + 六边形电路背景）；**4 组 `UMarquee`** 图片跑马灯；`<LazyFallingText>` 物理文字 |
| `FeatureSteps.vue` | 334 | 分步功能卡 + 数字序号 + 预览区；内嵌 `<LazyFallingText>` |
| `UserReviews.vue` | 281 | 三列用户评价墙 |
| `FAQ.vue` | 261 | FAQ 区块（顶部分割线 + 手风琴） |
| `ProductDesign.vue` | 240 | 产品设计说明（使用 `h()` 渲染函数动态构建） |
| `FeatureCarousel.vue` | 233 | 可拖拽横向轮播（数据源 `pluginData.apps`） |
| `OpenSourceRoadmap.vue` | 195 | 开源 / 交付路线图卡网格，支持展开更多 |
| `ProductFeatures.vue` | 155 | 「覆盖主流 AI 应用」功能网格 |
| `AIArsenal.vue` | 128 | AI 工具库清单（渐变光斑背景） |
| `ScenarioSection.vue` | 130 | 应用场景卡片（模糊光斑装饰） |
| `CallToAction.vue` | 120 | 全屏背景图 CTA |
| `CtaSection.vue` | 53 | 中等高度 CTA 横幅（`/images/CtaSection.webp` 背景） |
| `ValueProps.vue` | 62 | 核心价值主张网格 |

### 12.3 `buidai/`（9 个）

`BuidaiHero`(138)、`BuidaiScenarios`(268)、`BuidaiFaq`(125)、`BuidaiTestimonials`(79)、`BuidaiAdvantages`(73)、`BuidaiPartners`(18)、`BuidaiTechStack`(37)、`BuidaiVibeCoding`(42)、`BuidaiWhyChooseUs`(34)

其中：`BuidaiPartners` 使用 `UPageLogos` 的 marquee 模式；`BuidaiAdvantages` / `BuidaiTestimonials` / `BuidaiWhyChooseUs` 使用 `UPageCard`；`BuidaiTestimonials` 额外使用 `UUser`。

### 12.4 `solutions/`（7 个）

`SolutionsHero`(135) → `SolutionsFeatureGrid`(151，含 `currentTab` 分类筛选) → `SolutionsShowcase`(216) → `SolutionsQuickStart`(58) → `SolutionsSellingPoints`(69) → `SolutionsFaq`(80) → `SolutionsCta`(28)

### 12.5 `demo/`（4 个，全部具备严格 props / emits 契约）

| 组件 | 行数 | Props | Emits |
|---|---|---|---|
| `DemoMobileTabs.vue` | 40 | `categories`、`selectedCategoryId` | `select-category` |
| `DemoHero.vue` | 80 | `currentCategoryProducts`、`selectedCategoryId`、`selectedProduct` | `select(product, categoryId)` |
| `DemoSidebar.vue` | 115 | `categories`、`selectedCategoryId`、`selectedProduct`、`expandedCategories` | `toggle-category`、`select` |
| `DemoProductDetail.vue` | 196 | `selectedProduct: ProductDemo` | 无 |

### 12.6 `agent/`（4 个）与 `pricing/`（2 个）

- `agent/`：`AgentHero`(86)、`AgentFeatures`(250)、`AgentAdvantages`(131)、`AgentFaq`(263)
- `pricing/`：`PricingPlans`(430，月付 / 年付切换 `isYearly`)、`PricingFaq`(149)

### 12.7 Nuxt UI 组件使用统计（实测）

全仓实际使用的 `U*` 组件**极为克制**，仅：

`UApp`、`UBanner`、`UButton`、`UIcon`（大量）、`UNavigationMenu`、`UMarquee`、`UUser`、`UPageCard`、`UPageGrid`、`UPageLogos`

> `components/UChangelogVersions.vue` 虽以 `U` 开头，但属本项目自定义组件，不是 Nuxt UI 内置组件。
> 除上述之外，绝大多数 UI 是**原生 HTML + Tailwind 手写**，因此自定义主题或组件替换成本较高，这也是本项目 Tailwind 类名较为冗长的原因。

### 12.8 仅 3 个组件使用 Nuxt 数据 / 状态组合式

| 组件 | 使用的组合式 |
|---|---|
| `components/docs/Sidebar.vue` | `useAsyncData('sidebar-docs')`、`useState('sidebar-collapsed-state')`、`useRoute` |
| `components/AppNavigation.vue` | `useRoute` |
| 其余 51 个组件 | 零 Nuxt 数据层依赖，纯展示组件 |

> 全仓 **54 个组件均未使用** `useSeoMeta` / `useHead` / `definePageMeta`。SEO 与页面元数据职责被严格限定在 `pages/` 层，这是一条被完整遵守的约定。

---

## 13. 数据层与工具函数

### 13.1 `data/` 模块

| 文件 | 导出内容 | 说明 |
|---|---|---|
| `site.ts` | `SITE_TITLE`、`SITE_DESCRIPTION` | 站点级 SEO 常量，被 `nuxt.config.ts:103-107` 与 `pages/index.vue` 复用，避免同一文案多处漂移 |
| `products.ts` | 接口 `ProductPageData`（含 `SeoData` / `HeroData` / `FeaturesGridData` / `FeatureItem` / `FeaturePoint` / `FeatureDetail` / `CtaData`）、`products: ProductPageData[]`（12 项）、`productSlugs`、`getProductBySlug(slug)` | 12 个产品页的唯一数据源 |
| `demoProducts.ts` | 接口 `ProductDemo` / `DemoPlatform` / `ProductCategory`、`categories: ProductCategory[]`（2 组：独立系统 / 扩展应用，共 17 个产品、41 个平台入口）、`getStatusText()`、`getStatusClass()`、`getProductImageUrl()`、`handleImageError()`、`DEFAULT_PRODUCT_IMAGE` | 演示中心数据，附状态映射与图片兜底助手 |

`demoProducts` 的状态体系：

```ts
online → getStatusText: '已上线'   getStatusClass: 'bg-green-500 text-white'
beta   → getStatusText: 'Beta'     getStatusClass: 'bg-indigo-500 text-white'
coming → getStatusText: '即将上线'  getStatusClass: 'bg-neutral-400 text-white'
```

`ProductDemo.status` 被约束为字面量联合类型 `'online' | 'beta' | 'coming'`。

### 13.2 `utils/` 模块

| 文件 | 导出 | 说明 |
|---|---|---|
| `getDocsRoutes.ts` | `getDocsRoutes()` | 构建期遍历 `content/docs`，供 Nitro prerender；已被单元测试完整覆盖 |
| `getSitemapRoutes.ts` | `getSitemapRoutes()` | 12 条静态路由 + docs 路由 + `/product/:slug`，去重后按字典序排序 |
| `link.ts` | 接口 `FriendLink`、`friendLinks[]`（**19 条**） | 页脚友情链接；前 11 条指向站内 `/product/*`，后 8 条为外站 |
| `pluginData.ts` | 接口 `AppData` / `Category`、`categories[]`（**8 个**）、`apps[]`（**27 个**） | 应用市场数据。`AppData` 含 `id / name / description / icon / image / category / originalPrice / discountPrice / date` |
| `qrModal.ts` | 接口 `QrModalConfig`、`QR_MODAL_EVENT = 'showQRCodeModal'`、`dispatchQrModal(config)` | 基于 `window.CustomEvent` 的轻量事件总线 |
| `ui.ts` | `SCROLL`、`LAYOUT`、`ANIMATION`、`MARQUEE` 四组 `as const` 常量 | 消除代码中魔法数字 |

`utils/ui.ts` 常量表：

```ts
SCROLL.THRESHOLD                 = 10        // 导航栏变样式阈值（px）
SCROLL.HEADING_OFFSET            = 100       // 锚点滚动偏移（px）
SCROLL.TOC_OBSERVER_TOP_MARGIN   = '-100px'  // TOC 观察器上边距
SCROLL.TOC_OBSERVER_BOTTOM_MARGIN= '-66%'    // TOC 观察器下边距
LAYOUT.HEADER_HEIGHT             = 72        // 顶部导航高度（px）
LAYOUT.MOBILE_BREAKPOINT         = 768       // 移动端断点（px）
ANIMATION.TYPEWRITER_TYPING_SPEED          = 100
ANIMATION.TYPEWRITER_DELETING_SPEED        = 30
ANIMATION.TYPEWRITER_PAUSE_AFTER_COMPLETE  = 2000
ANIMATION.TYPEWRITER_PAUSE_BEFORE_NEW      = 500
MARQUEE.MOBILE_IMAGE_COUNT       = 10        // 移动端跑马灯图片数
MARQUEE.DESKTOP_IMAGE_COUNT      = 16        // 桌面端跑马灯图片数
```

### 13.3 `dispatchQrModal` 调用点（8 处）

`AIIndustry.vue`、`agent/AgentFaq.vue`、`pricing/PricingFaq.vue`、`buidai/BuidaiFaq.vue`、`solutions/SolutionsFaq.vue`、`landing/CallToAction.vue`、`landing/AIArsenal.vue`、`landing/FAQ.vue`。

> 该模式的优点：零 store 依赖，任意层级组件均可触达。缺点：无编译期类型检查；且必须确保只在浏览器端调用（当前全部位于用户点击事件回调中，SSR 安全）。

---

## 14. 组合式函数（Composables）

`composables/` 下 4 个文件，由 Nuxt 自动导入；也因此被 `eslint.config.js:25-29` 声明为全局变量。

### 14.1 `useTypewriter(texts, options?)`

- 行为：循环打字。逐字输入 → 停顿 → 逐字删除 → 切换到下一句（`index = (index + 1) % texts.length`）
- 选项：`typingSpeed`、`deletingSpeed`、`pauseAfterComplete`、`pauseBeforeNew`、`startDelay`，默认值取自 `ANIMATION` 常量
- 生命周期：`onMounted` 启动定时器，`onUnmounted` 清理；组件卸载无需手动处理
- 返回：`{ text }`（`Ref<string>`）

### 14.2 `useScroll.ts`

导出两个函数，**均使用 rAF 节流 + `{ passive: true }` 监听 + 卸载自动解绑**：

| 函数 | 返回 | 说明 |
|---|---|---|
| `useScrollThreshold(threshold)` | `Ref<boolean>` | 滚动是否超过阈值，驱动导航栏 / Header 形态变化 |
| `useScrollProgress()` | `Ref<number>` | 0–100 的滚动百分比，驱动博客阅读进度条 |

### 14.3 `useAutoPlay(onAdvance, options?)`

- 选项：`interval`（默认 5000）、`resumeDelay`（默认 5000）、`onActiveChange` 回调（可用于驱动模板中的进度条动画）
- 返回：`{ stop, start, pause, resume, reset }`
- 生命周期：`onMounted(start)`；`onUnmounted` 清理 `setInterval` 与 `setTimeout`
- 语义区分：`pause` 立即停止并取消未决的恢复计时；`resume` 延迟后重启；`reset` 立刻重启

### 14.4 `useListKeyboardNav(getLength, onActivate, options?)`

- 选项：`focusIdPrefix?`（如 `'feature-tab-'`），激活后会把 DOM 焦点迁移到对应 id 的元素
- 键位映射：`ArrowDown`（下一项）、`ArrowUp`（上一项）、`Home`（首项）、`End`（末项）；命中后调用 `event.preventDefault()`
- 返回：`{ handleKeydown(event, currentIndex) }`

---

## 15. UI 设计规范

### 15.1 设计令牌（Design Tokens）

来源：`app.config.ts`、`assets/css/main.css:10-29`。

**① 颜色**

```css
:root {
  --ui-primary: oklch(58.5% .233 277.117);   /* 品牌主色：oklch 紫 */
  --ui-radius: 0.125rem;                      /* 全局圆角 */
  --brand-primary: var(--ui-primary);
  --brand-primary-dark: oklch(52.5% .233 277.117);
  --brand-text: #0F0F12;
  --brand-muted: #5A5E6A;
}

.dark {
  --ui-primary: white;                        /* 深色模式下 Nuxt UI 主色转为白色 */
  --brand-primary: oklch(58.5% .233 277.117); /* 品牌色在深色下保持紫，不跟随变白 */
}
```

搭配 `app.config.ts:18-20`：

```ts
colors: {
  primary: 'violet'
}
```

即 **Nuxt UI 的生成式主色 = violet**（自动派生 50–950 色阶），同时用 `--ui-primary` 精确覆盖为同一个 oklch 紫值，保证手写 Tailwind 类（`text-ui-primary` 等）与组件生成色在视觉上完全一致。

> 该统一由提交 `4f1e8bc`（`style: 品牌主色统一为 Nuxt UI 的 oklch 紫`）完成。

**② 排版**

```css
body {
  font-family: var(--font-sans);              /* 系统字体栈（main.css 手写定义，无远程字体） */
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  @apply bg-white text-gray-900;
}
```

- **不加载任何远程字体**（`ui.fonts: false` 已关闭 @nuxt/ui 的字体集成），仅使用系统无衬线字体栈
- `html { scroll-behavior: smooth }` —— 全局启用平滑滚动

**③ 圆角**：`--ui-radius: 0.125rem`（2px，偏硬朗的科技风），贯穿所有 Nuxt UI 组件

### 15.2 自定义组件类（`@layer components`）

来源：`assets/css/main.css:55-91`

| 类名 | 定义 | 用途 |
|---|---|---|
| `.text-ui-primary` | `color: var(--ui-primary)` | 品牌色文本 |
| `.border-ui-primary` | `border-color: var(--ui-primary)` | 品牌色描边 |
| `.bg-ui-primary` | `background-color: var(--ui-primary)` | 品牌色填充 |
| `.bg-ui-primary-weak` | `color-mix(in oklab, var(--ui-primary) 12%, transparent)` | 极浅底纹 |
| `.bg-ui-primary-glow-medium` | `color-mix(in oklab, var(--ui-primary) 10%, transparent)` | 中等强度光晕 |
| `.bg-ui-primary-glow-strong` | `color-mix(in oklab, var(--ui-primary) 15%, transparent)` | 高强度光晕 |
| `.card` | `bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-200 ease-in-out` | 基础卡片 |
| `.section-padding` | `py-16 sm:py-20 lg:py-24` | **区块统一垂直留白** |
| `.container-padding` | `px-4 sm:px-6 lg:px-8` | **容器统一水平留白** |

### 15.3 工具类（`@layer utilities`）

| 类名 | 定义 | 用途 |
|---|---|---|
| `.text-balance` | `text-wrap: balance` | 文本平衡换行，防止标题出现孤儿词 |
| `.animation-delay-200` | `animation-delay: 200ms` | 动画延迟 200ms |

### 15.4 网格边框设计系统

来源：`assets/css/grid-border.css`（全局样式，非 scoped），被 `FeatureSteps`、`OpenSourceRoadmap`、`agent/*`、`AIIndustry` 共用。

| 类名 | 作用 |
|---|---|
| `.grid-border-container` | `display: grid`；`grid-template-rows: auto 1fr auto`（上边框行 / 内容区 / 下边框行） |
| `.grid-border-wrapper` | 相对定位，承载左右装饰边框 |
| `.grid-border-content` | 内容区，`max-width: 1536px` 水平居中 |
| `.grid-border-divider` | 高 1rem 的双横线 + 315° `repeating-linear-gradient` 网格纹理（`background-size: 10px 10px`，`background-attachment: fixed`） |
| `.grid-border-side(-left/-right)` | 绝对定位左右装饰边，`width: calc((100% - 1536px) / 2)` |
| `.grid-border-side-*` 的 `::before` | 1rem 宽伪元素纹理 + 左右各 1px 描边 |
| `.grid-border-row` | 上 / 下装饰行，`min-height: 4rem` |
| `.content-footer` | 底部品牌摘要 flex 容器（移动端 `padding: 1.5rem 0`，≥640px 时 `2rem 0`） |

配色为硬编码：描边 `rgba(229, 229, 229, 0.7)`，纹理 `color-mix(in oklab, rgb(3,7,18) 5%, transparent)`，底色 `white`（**深色模式下尚未适配**，见 15.6）。

### 15.5 图标体系

- **图标引擎**：Nuxt UI 的 `UIcon`，底层基于 Iconify
- **已安装图标集**：Lucide、Heroicons、Phosphor（`i-ph-*`）、Simple Icons（品牌 logo）
- **`app.config.ts` 定义了 42 个图标别名**，统一映射到 Phosphor 风格，覆盖 Nuxt UI 组件内置的语义图标位：

| 分组 | 数量 | 别名 |
|---|---|---|
| 箭头与方向 | 10 | `arrowDown` / `arrowLeft` / `arrowRight` / `arrowUp`、`chevronDoubleLeft` / `chevronDoubleRight` / `chevronDown` / `chevronLeft` / `chevronRight` / `chevronUp` |
| 状态与反馈 | 8 | `caution` / `check` / `copyCheck` / `error` / `info` / `loading` / `success` / `warning` |
| 交互与操作 | 14 | `close` / `copy` / `drag` / `ellipsis` / `external` / `menu` / `minus` / `panelClose` / `panelOpen` / `plus` / `reload` / `search` / `stop` / `upload` |
| 界面元素 | 10 | `dark` / `light` / `eye` / `eyeOff` / `file` / `folder` / `folderOpen` / `hash` / `system` / `tip` |

业务代码中的实际写法混用两套：

```vue
<!-- 语义别名（由 Nuxt UI 组件内部按槽位使用）→ 实际渲染 i-ph-* -->
<!-- 直接 Iconify 名（业务图标） -->
<UIcon name="i-lucide-log-in" class="w-4 h-4" />
<UIcon name="i-heroicons-chevron-right" />
```

**现实约定**：导航优先使用 Lucide；正文组件优先使用 Heroicons；Nuxt UI 组件内置槽位走 Phosphor 别名。

### 15.6 深色模式

- 机制：`nuxt.config.ts:96` `colorMode.classSuffix = ''` → `<html class="dark">`
- Nuxt UI 语义色（`bg-default`、`text-muted`、`text-highlighted`、`text-dimmed`、`ring-default`、`bg-elevated`）会自动适配
- **`assets/css/grid-border.css` 未做深色适配**（硬编码 `background-color: white`），这是已知的不一致点
- 全局背景基色写在 `layouts/default.vue:2`：`bg-gray-50 dark:bg-gray-900`

### 15.7 布局骨架约定

| 约定 | 值 | 依据 |
|---|---|---|
| 顶部导航高度 | `h-[72px]`（对应 `LAYOUT.HEADER_HEIGHT`） | `AppNavigation.vue:8` |
| Sticky 偏移 | `top-[72px]`；文档侧栏高度 `h-[calc(100vh-72px)]` | `docs/[...slug].vue:10, 127` |
| 容器写法 | `container mx-auto px-4 sm:px-6 lg:px-8` | 全站统一 |
| 文档三栏 | lg 断点 3 / 9；xl 断点 2 / 8 / 2 | `docs/[...slug].vue:10-15, 127` |
| 博客两栏 | lg 断点 8 / 4 | `blog/[...slug].vue:7, 143` |
| 断点体系 | Tailwind 默认 `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536` | Tailwind v4 |
| 最大内容宽 | `max-w-screen-2xl`（文档）、`max-w-7xl`（常规区块） | 各页面 |

### 15.8 排版（Prose）覆写

`@nuxt/content` 渲染的 Markdown 由 `@tailwindcss/typography` 提供 `prose` 基类，再由具体页面用 `:deep()` 覆写：

| 页面 | 覆写位置 | 风格特征 |
|---|---|---|
| `docs/[...slug].vue:253-314` | `:deep(.doc-content)` | **亮色系**：标题带下边框、`code` 紫底紫字、`pre` 使用 `bg-slate-50`、`blockquote` 紫色左边框 |
| `blog/[...slug].vue:343-376` | `:deep(.prose)` | **暗色代码块**：`pre` 为 `bg-gray-900 text-gray-100`，行内 `code` 为紫色淡底 |

> 两者风格不同（文档偏亮、博客代码块偏暗），需向产品确认是有意区分还是历史遗留。

### 15.9 动效与过渡

| 类型 | 实现 | 位置 |
|---|---|---|
| 全局平滑滚动 | `html { scroll-behavior: smooth }` | `assets/css/main.css:36-38` |
| 卡片悬停上浮 | `hover:-translate-y-1 transition-all duration-300` | 博客卡片等 |
| 图片悬停缩放 | `group-hover:scale-105 transition-transform duration-500` | 博客封面图 |
| 呼吸 / 浮动 | `animate-pulse`、`animate-float`、`animation-delay-2000` | `product/[slug].vue:50-51` |
| 跑马灯 | `UMarquee` 组件（4 组） | `landing/HeroSection.vue`；`pricing.vue` 用 simple-icons logo |
| `Transition` 过渡 | 自定义 enter / leave class | `AppNavigation` 遮罩与抽屉、`BackToTop` 面板 |
| 物理动效 | Matter.js | `FallingText.vue`（`HeroSection`、`FeatureSteps` 消费） |
| 打字机 | `useTypewriter` | `AgentHero` 等常用开篇标题 |

主交互过渡时长基线：`transition-colors duration-200`（链接、按钮、菜单项）。

### 15.10 无障碍（A11y）既有实践

| 实践 | 示例代码 / 位置 |
|---|---|
| 语义化标签 | `<header>` / `<nav>` / `<main>` / `<article>` / `<aside>` / `<footer>` |
| `aria-label` | `<nav aria-label="文档导航">`（`docs/Sidebar.vue:13`）、`aria-label="智言万象 Home"`、移动端菜单按钮 `aria-label` 随状态切换 |
| `aria-expanded` | 移动端菜单按钮（`AppNavigation.vue:76`）、侧边栏折叠按钮（`Sidebar.vue:21`） |
| `aria-current` | `:aria-current="isActive(item.path) ? 'page' : undefined"`（`Sidebar.vue:61, 91`） |
| `aria-hidden` | 装饰性图标统一带 `aria-hidden="true"` |
| `sr-only` | 页脚社交图标的屏幕阅读器文本（`AppFooter.vue:14, 18`） |
| 键盘可达 | `useListKeyboardNav` 提供方向键 / Home / End 导航 |
| 图片 `alt` | 全站 `<img>` 基本均带 `alt` |
| 图片性能属性 | `loading="lazy" decoding="async"`（页脚二维码）；Logo 用 `fetchpriority="high"` |

### 15.11 尚未统一的规范（待办）

- **圆角两套并存**：按钮有 `rounded-full`（Hero / CTA 主按钮）与 Nuxt UI 默认 2px 两种；卡片有 `rounded-xl`（`.card`）与 `rounded-3xl`（产品演示图框）两种
- **悬停主色三种写法混用**：`text-primary-600`、`text-ui-primary`、`hover:text-primary-600`
- **部分区块直接内联颜色**（如 `bg-blue-50 text-blue-600`）未走品牌色变量
- **`--brand-*` 变量已定义但基本未被使用**，实际主色仍以 `--ui-primary` 为准

---

## 16. SEO 与站点资产

### 16.1 全局 Head

来源：`nuxt.config.ts:100-131`

| 类型 | 内容 |
|---|---|
| `title` | `SITE_TITLE`（智言AI - 智言万象新一代AI一站式创意生产力平台） |
| `charset` | `utf-8` |
| `viewport` | `width=device-width, initial-scale=1` |
| `description` | `SITE_DESCRIPTION`（长尾关键词描述，约 250 字） |
| `keywords` | 智言AI, 智言万象, AI创意生产力平台, 智能体, 香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成 |
| `og:title` / `og:description` / `og:type` | `SITE_TITLE` / `SITE_DESCRIPTION` / `website` |
| `link[rel=icon]` | `/favicon.ico`（x-icon 与 shortcut）、`/favicon.svg`（`type: image/svg+xml`，`sizes: any`）、`/icon.png`、`/apple-touch-icon` → `/icon.png` |
| `link[rel=canonical]` | `https://www.buidai.com`（**硬编码为单一值**） |

> `nuxt.config.ts` 中的 canonical 是静态单一值，严格来说只对首页正确。各内层页面中**只有 `demo.vue`** 通过 `useHead` 写入了自己的 canonical（`https://buidai.com/demo`）。若需完整 canonical 覆盖，建议统一在各页 `useHead` 或 `useSeoMeta` 中注入。

### 16.2 JSON-LD 结构化数据

`app.vue:21-78` 注入 **3 段** `application/ld+json`：

| 类型 | 关键字段 |
|---|---|
| `Organization` | `name`: 智言 AI、`url`: `https://www.buidai.com`、`logo`、`description`、`sameAs: [github.com/buidai, twitter.com/buidai]`、`contactPoint`（`support@buidai.com`，支持 Chinese / English） |
| `WebSite` | `name`、`url`、`potentialAction: SearchAction`，target 为 `https://www.buidai.com/search?q={search_term_string}` |
| `SoftwareApplication` | `applicationCategory: DeveloperApplication`、`operatingSystem: Web, Windows, macOS, Linux`、`offers: { price: '0', priceCurrency: 'CNY' }` |

`pages/demo.vue:98-136` 额外注入 **2 段**：`WebPage` 与 `BreadcrumbList`，同时写入 canonical、robots 与 `og:*` / `twitter:*`。

> **注意**：`WebSite.potentialAction` 指向的 `/search` 路由在项目中**并不存在**（无搜索页），属占位数据 —— 见 19.3。

### 16.3 Sitemap 生成规则

来源：`nuxt.config.ts:47-78`。`urls` 由 `getSitemapRoutes()` 映射，按路由前缀设定优先级：

| 路由条件 | priority | changefreq |
|---|---|---|
| `/` | **1.0** | daily |
| `/docs*` | 0.9 | weekly |
| `/blog*` | 0.8 | weekly |
| `/changelog*` | 0.6 | monthly |
| `/pricing`、`/download`、`/contact` | 0.9 | weekly |
| 其余（含 `/product/*`、`/agent`、`/buidai` 等） | 0.7 | daily |

`defaults`：

```73:77:nuxt.config.ts
    // 默认配置
    defaults: {
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
```

`exclude`：`'/demo'` —— 演示页不进入站点地图。

> `getSitemapRoutes()` 的 12 条静态路由表中**未显式列出 `/docs`**，但 `getDocsRoutes()` 会无条件 push `/docs`，因此最终结果仍然包含它。单测中「包含全部 12 个静态路由」与「合并文档路由」两条已分别覆盖。

### 16.4 `robots.txt`

`public/robots.txt`（**静态文件，非动态生成**）：

- 注释标注域名为 `www.buidai.com`，最后更新 `2026-10-02`
- 全局 `Allow: /`；针对 `Googlebot` / `Bingbot` / `Baiduspider` 显式放行
- `Disallow`：`/api/`、`/admin/`、`/_nuxt/`
- 显式 `Allow`：/docs、/blog、/changelog、/pricing、/download、/contact、/about、/solutions、/resources、/product
- `Sitemap: https://www.buidai.com/sitemap.xml`
- 屏蔽 `AhrefsBot`、`SemrushBot`、`DotBot`

### 16.5 站点视觉资产

`public/` 根目录：

`logo.svg`、`agent.svg`、`AIArsenal.svg`、`AIArsenal-1.svg`、`grid.svg`、`ogImage.svg`、`favicon.ico`、`favicon.svg`、`icon.png`、`qrcode.png`、`wechat.png`、`sell-point-1.png`、`sell-point-2.png`

子目录：`blog/`、`images/`（25 个文件：11 webp / 9 png / 4 jpg / 1 svg）、`plugin/`（29 个：23 png / 6 webp）、`product/`（35 个：34 png / 1 jpg）。

全站图片合计 106 个文件（71 png / 20 webp / 8 svg / 5 jpg / 1 ico / 1 其它）。

---

## 17. 部署流程

### 17.1 构建产物

```bash
npm ci
npm run build     # 等价于 nuxt generate
```

产出：

- 目录：`dist/`（由 `nitro.output.publicDir` 指定）
- 内容：全部预渲染 HTML、`_nuxt/` 打包资源、`__nuxt_content/{blog,docs}/sql_dump.txt`、`200.html` / `404.html`，以及 `public/` 下的全部静态文件
- 压缩：`compressPublicAssets: true`

预渲染路由合计约 **38 条**：

| 类别 | 数量 | 来源 |
|---|---|---|
| `pages/` 文件静态路由 | 13 | 文件路由（12 条 + `/demo`） |
| `/docs` 与 12 篇文档 | 13 | `getDocsRoutes()` |
| `/product/:slug` | 12 | `data/products.ts` |
| `/blog/:slug` | 2 | 依赖链接自动发现（**未显式注入**，见 19.3） |

### 17.2 Vercel 部署

仓库内含 Vercel 构建痕迹 `.vercel/output/`（`nitro.json` 显示 framework 为 `nuxt 4.2.2`、nitro `2.12.8`、preset `vercel-static`）。

**关键适配点**（`nuxt.config.ts:80-92` 的注释已说明）：

```80:92:nuxt.config.ts
  // Nitro 服务端引擎配置
  nitro: {
    preset: 'static', // 强制使用通用静态输出，禁用 Vercel 自动检测
    compressPublicAssets: true, // 启用公共资源压缩
    output: {
      publicDir: 'dist' // 强制输出目录为 'dist' 以适配 Vercel 默认配置
    },
    // 预渲染配置
    prerender: {
      failOnError: true, // 预渲染失败时中断构建，避免坏页面静默发布
      routes: getDocsRoutes() // 注入动态生成的文档路由
    }
  },
```

控制台推荐配置：

| 配置项 | 值 |
|---|---|
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node Version | `22`（与 CI 保持一致） |

> `.vercel/output/static/` 下现有的内容是 **2025-12-19 20:28:49** 的旧构建快照（`nitro.json` 的 `date` 字段），**不能当作当前产物**。每次部署请以 `npm run build` 新生成的 `dist/` 为准。

### 17.3 Edge Static Assets（`esa.jsonc`）

```1:8:esa.jsonc
{
  "name": "nuxt-template",
  "installCommand": "npm install",
  "assets": {
    "directory": "./dist",
    "notFoundStrategy": "404Page"
  }
}
```

- 静态资源目录：`./dist`
- 404 策略：`404Page`（未命中路由时返回 `404.html`）
- 安装命令用的是 `npm install` 而非 `npm ci`，与 CI 不一致，建议统一为 `npm ci`

### 17.4 Cloudflare Pages

| 配置项 | 值 |
|---|---|
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 环境变量 `NODE_VERSION` | `22` |
| 根目录 | `/` |

### 17.5 Netlify / Nginx / 子目录部署

- **Netlify**：Build command `npm run build`，Publish directory `dist`
- **Nginx**：将 `dist/` 作为站点 root，配置 `try_files $uri $uri/index.html /404.html;`
- **GitHub Pages 或子目录部署**：需在 `nuxt.config.ts` 追加
  ```ts
  app: {
    baseURL: '/<sub>/',
    buildAssetsDir: '/<sub>/_nuxt/'
  }
  ```
  同时 `nuxt.config.ts:43` 的 `site.url` 需同步追加子路径

### 17.6 部署前检查清单

- [ ] `npm run typecheck` 通过（`build` 本身不做类型检查）
- [ ] `npm run lint` 通过
- [ ] `npm test` 通过
- [ ] `npm run build` 通过，且**无预渲染失败**（`failOnError: true` 会直接中断）
- [ ] `nuxt.config.ts:43` 的 `site.url` 与实际域名一致
- [ ] `public/robots.txt` 的 Sitemap 行与实际域名一致
- [ ] `app.vue` 中 JSON-LD 的 `url` / `logo` 域名与实际一致
- [ ] `dist/` 下 HTML 数量与预期路由数（约 38 条）相符
- [ ] 演示账号凭据（见 20.1）对应的演示环境不含生产数据

---

## 18. 开发规范

### 18.1 命名约定（由现有代码归纳）

| 对象 | 规则 | 实例 |
|---|---|---|
| Vue 组件文件 | **PascalCase** | `AppNavigation.vue`、`HeroSection.vue` |
| 组件子目录 | 小写单词 | `landing/`、`solutions/`、`agent/` |
| 组合式函数 | `use` + PascalCase 动词短语 | `useTypewriter`、`useScrollProgress` |
| 工具 / 数据模块 | **camelCase** 文件名 | `getDocsRoutes.ts`、`pluginData.ts` |
| CSS 类 | **kebab-case** | `grid-border-container`、`section-padding` |
| CSS 变量 | `--ui-*`（Nuxt UI）/ `--brand-*`（自研） | `--ui-primary`、`--brand-muted` |
| 常量组 | **UPPER_SNAKE_CASE** + `as const` | `SCROLL`、`LAYOUT`、`ANIMATION`、`MARQUEE` |
| TypeScript 接口 | PascalCase，通常 export | `ProductPageData`、`AppData`、`NavigationItem` |
| 事件名常量 | camelCase 字符串常量 | `QR_MODAL_EVENT = 'showQRCodeModal'` |
| Markdown 文件 | `docs/` 用小写 kebab-case；`update/` 用数字版本号 | `docker-installation.md`、`2510.md` |

### 18.2 组件编写约定

1. **统一使用 `<script setup lang="ts">`**（全仓 54 个组件无例外）
2. Props 声明有两种并存写法：
   - 类型优先：`defineProps<FallingTextProps>()` + `withDefaults`（`FallingText.vue`、`HeroSection.vue`、`Market.vue`）
   - 运行时对象：`defineProps({ ... })`（`docs/Sidebar.vue` 因递归结构需要 `PropType`）
3. **导出内容必须有中文 JSDoc**：`utils/`、`data/`、`composables/` 中每个导出均已带 JSDoc，`getDocsRoutes.ts`、`FallingText.vue`、`Sidebar.vue` 是最佳范例
4. **必须清理副作用**：所有 `setTimeout` / `setInterval` / `addEventListener` / `IntersectionObserver` 均在 `onUnmounted` 中释放
5. **SSR 安全**：访问 `window` / `document` 必须在 `onMounted` 或事件回调中；多处还加了 `typeof document === 'undefined'` 守卫（如 `AppNavigation.vue:499`）
6. **组件不得写 SEO**：54 个组件均未使用 `useSeoMeta` / `useHead` / `definePageMeta`，该职责严格限定在 `pages/` 层

### 18.3 样式约定

1. 优先使用 Tailwind 工具类，复杂装饰才写 CSS
2. 自定义样式优先 `<style scoped>`；跨组件复用者才进 `assets/css/`
3. 需要穿透 `ContentRenderer` 生成的内容时使用 `:deep(...)`
4. 避免在组件内 `@apply` 一长串重复 Tailwind，应抽取到 `@layer components`
5. **魔法数字必须提到 `utils/ui.ts`**（滚动阈值、Header 高度、锚点偏移等）
6. 颜色优先引用语义变量（`var(--ui-primary)`）而非硬编码色值

### 18.4 TypeScript 约定

- 数据模型必须定义 `export interface`（`data/` 与 `utils/` 中 100% 覆盖）
- 常量集合用 `as const` 锁定字面量类型
- 允许 `any`（规则级别为 warn 而非 error），也允许 `!` 非空断言；但应尽量规避
- 有意忽略的变量用 `_` 前缀表达意图（已被 `@typescript-eslint/no-unused-vars` 的 `^_` 模式放行）

### 18.5 Git 提交规范

最近提交实际遵循 **Conventional Commits**：

```
280755b  docs: 新增产品数据模型合并方案
a8cefd9  fix: 修复产品页 SPA 切换不刷新数据；移除虚构的 aggregateRating
4f1e8bc  style: 品牌主色统一为 Nuxt UI 的 oklch 紫
e6ceb5f  chore: 移除 legacy-peer-deps 开关
e40e0c8  chore: 参考设计目录移出仓库跟踪
```

约定前缀：`feat` / `fix` / `docs` / `style` / `refactor` / `perf` / `test` / `chore`；正文使用中文；`scope` 可选。

> `fix` 提交中特别提到「移除虚构的 aggregateRating」——即**禁止编造评价 / 评分类结构化数据**，须保持数据真实性。

### 18.6 性能约定与现状

| 措施 | 现状 |
|---|---|
| SSG 全站预渲染 | 已落实（`nitro.preset: 'static'`） |
| Payload 外置 | 已落实（`payloadExtraction` + `renderJsonPayloads`） |
| 资源压缩 | 已落实（`compressPublicAssets`） |
| 第三方库按需加载 | 已落实（`matter-js` 动态 import；`<LazyFallingText>`） |
| 图片懒加载 | 部分（页脚二维码已用 `loading="lazy" decoding="async"`；Hero 图未全部覆盖） |
| WebP 格式 | 部分（已有 20 个 webp，仍有大量 png） |
| 图片尺寸声明 | 较好，多数 `<img>` 带 `width` / `height`，抑制 CLS |
| 远程字体 | 已彻底移除 |
| 滚动监听节流 | 已落实（rAF + passive） |

---

## 19. 已知差异与技术债

### 19.1 `BuidAI.md` 与代码的实际差异

仓库根目录的 `BuidAI.md`（带 `trigger: always_on` frontmatter）是早期版本的说明文档。以下条目**已与代码不符**，请以本文件为准：

| `BuidAI.md` 的描述 | 实际代码情况 |
|---|---|
| 依赖含 `@nuxtjs/color-mode` ^3.4.2、`aos` ^2.3.4、`lucide-vue-next` ^0.561.0、`vue-router` ^4.4.0 | 均**不在** `package.json` 中 |
| devDeps 含 `@headlessui/vue`、`@heroicons/vue`、`@storybook/vue3` | 均**不在** `package.json` 中 |
| 存在 `tailwind.config.js` | **不存在**。Tailwind v4 采用 CSS-first 配置，写在 `assets/css/main.css` |
| 存在 `stories/Plugin.stories.ts` | **不存在**。`env.d.ts:2` 仍残留 `/// <reference types="@storybook/vue3" />` |
| 显式配置了 `content.database.type: 'sqlite'` | **未配置**，使用 Content v3 默认值 |
| `prerender.failOnError: false` | 实际为 **`true`** |
| 文档路由「`1.introduction.md` → `/docs/introduction`」（剥离数字前缀） | 实际**不剥离**前缀。当前文件名恰好都无前缀，故暂不冲突 |
| 落地页为 8 个模块 | 实际 `landing/` 有 **14 个**组件 |
| 存在 `pages/智言万象.vue` | 实际为 `pages/buidai.vue` |
| `content/blog/` 有 4 篇（1–4.md） | 实际只有 **2 篇**（`1.md`、`4.md`） |
| `content/docs/` 含 framework(5) + introduction(7) | 一致，无差异 |
| 自定义动画 `animate-fade-in` / `animate-slide-up` / `animate-marquee-vertical` | CSS 中**未定义**这些类；仅定义 `.animation-delay-200`。实际使用的是 `animate-pulse`、`animate-float` 以及 `UMarquee` 组件 |
| 已定义 `.btn-primary` / `.btn-secondary` / `.btn-ghost` / `.card-hover` | **均未定义**；只有 `.card` |

### 19.2 依赖层面的冗余

审计确认后已从 `package.json` 移除 7 个无引用依赖（`@nuxt/devtools`、`@nuxt/fonts` 旧版、`@nuxt/schema`、`@nuxt/test-utils`、`@vue/test-utils`、`happy-dom`、`jsdom`），`env.d.ts` 的 `@storybook/vue3` 悬空类型引用也已删除。当前无未使用依赖。

### 19.3 路由与内容层面的注意点

| 项 | 说明 | 影响 |
|---|---|---|
| `/docs/introduction`、`/docs/framework` 无 `index.md` | `getDocsRoutes()` 不会生成这两条路由 | 访问会命中 catch-all 后走 404；不影响构建，但应避免产生指向它们的链接 |
| `/blog/:slug` 未进 prerender routes | 依赖链接自动发现 | 若博客列表页改动导致链接不可达，详情页可能漏渲染 |
| `robots.txt` 与实际站点域名不一致 | 见 19.4 | SEO 信号错乱 |
| `app.vue` JSON-LD 的 `SearchAction` 指向 `/search` | 该路由不存在 | 结构化数据中出现死链 |
| `pages/resources.vue` 中 4 张卡片占位指向 `/contact` | 资源未上线 | 用户点击跳转到错误页面 |
| `pages/plugin.vue` 的「购买」按钮无点击处理 | 功能占位 | 点击无响应 |

### 19.4 域名不一致问题

域名已统一为 `https://www.buidai.com`（2026-10-02，P3 规范符合性阶段）：

- `data/site.ts` 新增 `SITE_URL` 常量，`nuxt.config.ts`（site.url / sitemap）、`app.vue`（JSON-LD）、`pages/demo.vue`（canonical / og image）均引用该常量
- 全局 head 的 canonical 已移除，改由 `usePageSeo` 按 `route.path` 逐页派生（修复所有内页指向首页的 SEO 错误）
- 原 `gmlart.cn` 系列 50 处（components 20 + data/products 28 + 配置 2）统一替换为 `buidai.com`，子域结构保留（`api.` / `paper.` / 无 www 形态不变）
- robots.txt 的 Sitemap 已指向 `https://www.buidai.com/sitemap.xml`

### 19.5 其他技术债

1. **`pages/buidai.vue` 使用非 scoped `<style>` 设置 `html { overflow-x: clip }`**，属**全局副作用**，会污染其他页面。应迁移到 `assets/css/` 或改为 scoped 方案。
2. **`pages/pricing.vue` 模板存在两个根节点**（`div` 与位于其外的 `LandingCtaSection`）。Vue 3 fragments 允许这样写，但配合 `layouts/default.vue` 可能产生非预期布局。
3. **`v-html` 使用**：`pages/product/[slug].vue:65` 渲染 `product.hero.description`（内含 `<br class="hidden sm:block" />`）。ESLint 已设为 warn。数据源是本地 TS 文件而非用户输入，风险可控，但需确保 `products.ts` 始终由可信来源编辑。
4. **大体积数据模块全量进客户端 bundle**：`data/products.ts`、`utils/pluginData.ts`、`data/demoProducts.ts` 会被完整打包。数据量继续增长时应考虑按需 import 或改由内容集合承载。
5. **产品概念在三处重复定义**：`data/products.ts`（12 个产品页）、`utils/pluginData.ts`（27 个应用）、`data/demoProducts.ts`（17 个演示产品）存在重叠概念（Nanobanana、PPT、简历等均重复出现）。仓库中 `项目文档/产品数据模型合并方案.md` 正是针对此议题的方案文档，**尚未落地**。
6. **`devtools.enabled: true` 未按环境区分**。虽不影响生产产物，但建议改为按 `process.env.NODE_ENV` 条件开启。
7. **文档分组逻辑重复实现**：`components/docs/Sidebar.vue` 与 `pages/docs/index.vue` 各自维护了一份 `categoryOrder` 排序逻辑，改动时需同步两处，存在漂移风险。
8. **`grid-border.css` 未适配深色模式**（底色与描边硬编码为白色系）。
9. **根目录 `README.md` 为空文件**，建议与本说明书建立指向关系或填充摘要。

---

## 20. 附录：外部地址与命令速查

### 20.1 代码中出现的外部地址清单

| 地址 | 位置 | 用途 |
|---|---|---|
| `https://www.buidai.com` | `nuxt.config.ts:43, 124`；`app.vue` | 站点基准域名 / canonical / JSON-LD |
| `https://www.cnai.art/seedance` | `AppBanner.vue` | 顶部横幅跳转 |
| `https://www.buidai.com` | `AppNavigation.vue` | 「登录智言」按钮 |
| `https://api.buidai.com/` | `AppNavigation.vue` | 「智言API」按钮 |
| `https://www.cloudcvm.com` | `AppNavigation.vue:321`；`utils/link.ts:33` | 导航「优刻云计算」/ 友情链接 |
| `https://www.urlnet.cn`、`https://urlnet.cn` | `utils/link.ts:31, 35` | 友情链接 |
| `https://v.cnai.art` | `utils/link.ts:34` | 友情链接（AI数字人） |
| `https://paper.buidai.com` | `utils/link.ts` | 友情链接（论文创作） |
| `https://www.urlka.cn` | `utils/link.ts:37` | 友情链接（免费领卡） |
| `https://www.artaigc.cn` | `utils/link.ts:38` | 友情链接（AI系统源码） |
| `https://beian.miit.gov.cn/` | `AppFooter.vue:117` | ICP 备案查询（赣ICP备2023002309号） |
| `https://www.cnai.art`、`.../admin`、`.../doc`、`.../mobile` | `data/demoProducts.ts` | 演示平台入口（前台 / 后台 / API / 移动端，含演示账号 `admin` / 密码 `123456`） |
| `mailto:support@buidai.com` | `pages/contact.vue:41` | 客服邮箱 |
| `tel:400-123-4567` | `pages/contact.vue:53` | 客服电话（**占位号码**） |

> `data/demoProducts.ts` 中明文包含演示环境的账号密码（`admin` / `123456`），并且会被打进静态 bundle。它们属于公开演示环境凭据，**上线前应再次确认该演示环境不含任何生产数据**。

### 20.2 命令速查

```bash
# 环境准备
npm ci                      # 安装依赖（对齐 CI）
npx nuxt prepare            # 生成 .nuxt 类型；typecheck 的前置步骤

# 开发
npm run dev                 # 开发服务器，默认 http://localhost:3000
npm run preview             # 预览 dist/ 产物（需先 build）

# 质量检查
npm run typecheck           # TS + Vue SFC 类型检查
npm run lint                # ESLint 检查
npm run lint:fix            # ESLint 自动修复
npm run format              # Prettier 格式化
npm run format:check        # Prettier 校验（不写入）
npm test                    # Vitest 单次运行
npm run test:watch          # Vitest 监视模式

# 构建与部署
npm run build               # nuxt generate → dist/
node scripts/unused-images.mjs   # 巡检未被引用的 public 图片
```

### 20.3 关键文件速查

| 需求 | 修改位置 |
|---|---|
| 改站点标题 / 描述 | `data/site.ts` |
| 改 Sitemap 域名 | `nuxt.config.ts:43`（`site.url`） |
| 改全站主色 | `app.config.ts`（`colors.primary`）+ `assets/css/main.css`（`--ui-primary`） |
| 改图标别名 | `app.config.ts`（`ui.icons`） |
| 加 / 减导航菜单 | `components/AppNavigation.vue:284-323`（`items` computed） |
| 改页脚链接 | `components/AppFooter.vue:164-209`（`footerLinks`） |
| 改友情链接 | `utils/link.ts`（`friendLinks`） |
| 新增产品页数据 | `data/products.ts`（`products`） |
| 新增应用市场条目 | `utils/pluginData.ts`（`apps` / `categories`） |
| 新增演示产品 | `data/demoProducts.ts`（`categories`） |
| 调整滚动 / 动画常量 | `utils/ui.ts` |
| 修改 SEO 头信息 | 对应 `pages/*.vue` 的 `useSeoMeta` |
| 修改结构化数据 | `app.vue`（全局）、`pages/demo.vue`（演示页） |
| 调整 sitemap 优先级 | `nuxt.config.ts:49-67` |
| 调整 CI 流程 | `.github/workflows/ci.yml` |

---

**文档结束。**

> 本文档依据 `d:\github\buidai` 仓库截至 2026-10-02 的实际代码生成。若代码发生变更，请同步更新本文件的对应章节。





