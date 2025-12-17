# 项目规则

## 1. 项目概述
- **类型**: Nuxt 3 Web 应用程序
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **包管理器**: npm

## 2. 技术栈
- **框架**: [Nuxt 3](https://nuxt.com)
- **UI 库**: [Tailwind CSS](https://tailwindcss.com)
- **图标**: `@heroicons/vue`, `lucide-vue-next`
- **状态管理**: `useState` (Nuxt 3 原生状态管理)

## 3. 目录结构
- `assets/`: 全局资源 (CSS, 图片, 字体)。
  - `assets/css/main.css`: 全局样式入口。
- `components/`: Vue 组件。
  - 按功能或领域分组组件 (例如 `components/landing/`)。
  - 组件文件名使用 PascalCase (例如 `HeroSection.vue`)。
- `layouts/`: 应用程序布局 (例如 `default.vue`)。
- `pages/`: 应用程序路由/页面。
- `public/`: 静态文件 (图片, favicon 等)。
- `types/`: (可选) 共享 TypeScript 类型定义。

## 4. 编码规范

### 4.1. Vue 组件
- 使用 **Composition API** 和 `<script setup lang="ts">`。
- **文件名**: PascalCase (例如 `FeatureCard.vue`)。
- **Props**: 使用 `defineProps<PropsType>()` 定义 props 以获得更好的类型推断。
- **Emits**: 使用 `defineEmits<{ ... }>()` 定义 emits。

### 4.3. 样式 (Tailwind CSS)
- 主要使用 Utility classes。
- **布局一致性**: 每个页面部分的主要内容宽度使用 `container mx-auto px-4`，以确保整个应用程序的对齐一致性。
- 使用 `tailwind.config.js` 中配置的主题颜色:
  - `primary`: 主要品牌颜色。
  - `accent`: 强调/高亮颜色。
  - `secondary`: 中性/背景颜色。
- 除非为了处理 Tailwind 难以处理的复杂动画或伪元素，否则避免使用 `<style scoped>`。
- 暗黑模式通过 `class` 策略配置 (`darkMode: 'class'`)。

### 4.4. 注释与文档
- **语言**: 所有注释 (包括代码注释和 HTML 注释) 必须使用 **中文**。
- **函数级注释**: 每个函数必须有一个注释块，说明:
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
- **自动导入**: 利用 Nuxt 的自动导入功能来使用 Vue 组合式函数 (`ref`, `computed` 等) 和 Nuxt 工具函数 (`useRouter`, `useState`)。
- **性能**: 使用 `<NuxtLink>` 进行内部导航。使用 `<img>` 或 `<NuxtImg>` (如果已配置) 显示图片。
- **响应式**: 使用 Tailwind 的断点 (`sm`, `md`, `lg`, `xl`) 进行移动优先设计。

## 7. 限制
- **测试**: 除非明确要求，否则 **不要** 生成单元测试或测试目录 (例如 `tests/`)。

