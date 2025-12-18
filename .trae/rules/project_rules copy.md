# 项目规则 (Project Rules)

## 1. 项目概览
- **类型**: Nuxt 4 Web 应用程序
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **包管理器**: npm
- **内容管理**: Nuxt Content v3

## 2. 技术栈
- **核心框架**: [Nuxt](https://nuxt.com) (v4)
- **UI 框架**: [Tailwind CSS](https://tailwindcss.com)
- **图标库**: `@heroicons/vue`, `lucide-vue-next`
- **内容引擎**: `@nuxt/content` (v3)
- **状态管理**: `useState` (Nuxt 原生状态管理)

## 3. 目录结构
- `assets/`: 全局静态资源 (CSS, 图片, 字体)。
  - `assets/css/main.css`: 全局样式入口文件。
- `components/`: Vue 组件。
  - 按功能或领域分组组件 (例如 `components/landing/`)。
  - 组件文件名必须使用 **PascalCase** (大驼峰命名法), 例如 `HeroSection.vue`。
- `content/`: 存放 Markdown 内容文件 (用于文档和博客)。
  - `blog/`: 博客文章。
  - `docs/`: 文档页面。
- `layouts/`: 应用布局文件 (例如 `default.vue`)。
- `pages/`: 应用程序路由/页面。
- `public/`: 纯静态文件 (图片, favicon 等)，直接映射到根路径。
- `utils/`: 工具函数。

## 4. 编码规范

### 4.1. Vue 组件
- 必须使用 **Composition API** 和 `<script setup lang="ts">`。
- **文件名**: 必须使用 PascalCase (例如 `FeatureCard.vue`)。
- **Props**: 使用 `defineProps<PropsType>()` 定义 props 以获得更好的类型推断。
- **Emits**: 使用 `defineEmits<{ ... }>()` 定义组件事件。

### 4.2. 图标 (Icons)
- **标准**: 首选使用 `@heroicons/vue/24/outline` 组件。
- **用法**: 必须将图标作为组件导入 (例如 `import { RocketLaunchIcon } from '@heroicons/vue/24/outline'`)，尽量避免使用原始 SVG 字符串，除非是自定义图标。

### 4.3. SEO
- **标准**: 页面级 SEO 请使用 `useSeoMeta` 设置元标签 (title, description, og:*, etc.)。
- **原因**: `useSeoMeta` 提供更好的类型安全和更扁平的结构。
- **全局配置**: 全局默认 SEO 在 `nuxt.config.ts` 的 `app.head` 中配置。

### 4.4. 样式 (Tailwind CSS)
- 主要使用 Utility classes (工具类)。
- **布局一致性**: 页面主要内容区域应使用 `container mx-auto px-4` 以确保跨页面的对齐一致性。
- **主题颜色**: 请使用 `tailwind.config.js` 中配置的主题颜色：
  - `primary`: 主品牌色 (Violet/Purple 系)。
  - `accent`: 强调/辅助色 (Blue 系)。
  - `secondary`: 中性/背景色 (Zinc 系)。
- 避免使用 `<style scoped>`，除非是 Tailwind 无法处理的复杂动画或伪元素。
- **深色模式**: 支持深色模式，配置为 `class` 策略 (`darkMode: 'class'`)。

### 4.5. 注释与文档
- **语言**: 所有注释 (包括代码注释和 HTML 注释) **必须使用中文**。
- **函数级注释**: 每个函数 **必须** 包含注释块，说明：
  - 功能描述。
  - 参数 (名称, 类型, 描述)。
  - 返回值 (类型, 描述)。

```typescript
/**
 * 计算包含税费的总价。
 *
 * @param price - 商品基础价格。
 * @param taxRate - 适用的税率（例如 0.1 表示 10%）。
 * @returns 包含税费的最终价格。
 */
const calculateTotal = (price: number, taxRate: number): number => { ... }
```

## 5. 最佳实践
- **自动导入**: 充分利用 Nuxt 的自动导入功能，无需手动导入 Vue 组合式函数 (`ref`, `computed`) 和 Nuxt 工具函数 (`useRouter`, `useState`, `useSeoMeta`)。
- **性能**: 内部导航必须使用 `<NuxtLink>`。图片尽可能使用优化的格式 (WebP)。
- **响应式设计**: 坚持 **Mobile-First** (移动优先) 设计原则，使用 Tailwind 的断点前缀 (`sm:`, `md:`, `lg:`, `xl:`)。
- **内容管理**: 文档和博客内容应通过 `content/` 目录下的 Markdown 文件管理，利用 Nuxt Content v3 的特性。

## 6. 限制
- **测试**: 除非明确要求，否则 **不要** 生成单元测试或测试目录 (如 `tests/`)。
