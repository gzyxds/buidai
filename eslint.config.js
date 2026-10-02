// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import { withNuxt } from './.nuxt/eslint.config.mjs'

/**
 * ESLint 配置（@nuxt/eslint 集成）
 *
 * Nuxt auto-import 的全部 globals（Vue 运行时 API、Nuxt/Content composables、
 * 项目内 composables/utils）与 Vue/TypeScript 推荐规则集由 @nuxt/eslint
 * 从 .nuxt/eslint.config.mjs 自动生成（code-style.md 官方推荐的项目感知配置），
 * 升级 Nuxt 或新增 composable 时自动同步，无需手工维护白名单。
 *
 * withNuxt(...) 的参数会追加在生成的项目配置之后，此处只保留团队自定义规则。
 */
export default withNuxt(
  // 项目特有忽略目录（node_modules/.nuxt/.output/dist 等由 @nuxt/eslint 默认忽略）
  {
    ignores: [
      'coverage/',
      '.vscode/',
      '.idea/',
      '.vercel/',
      '参考设计/'
    ]
  },

  // Prettier 配置（禁用与 Prettier 冲突的规则）
  eslintConfigPrettier,

  // 自定义规则
  {
    files: ['**/*.{vue,ts,js}'],
    rules: {
      // Vue 相关规则
      'vue/require-default-prop': 'off',
      // Vue 3 允许多根节点模板，且标签自闭合风格由 Prettier 统一，两者不在此配置
      'vue/no-v-html': 'warn',

      // TypeScript 相关规则
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',

      // 通用规则
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'eqeqeq': ['warn', 'always'],
      'curly': ['warn', 'all']
    }
  },

  // Node 环境脚本（scripts/ 下的构建与维护工具，不属于浏览器运行时）
  {
    files: ['scripts/**/*.{js,mjs,cjs}'],
    rules: {
      // CLI 工具的输出本就是终端内容
      'no-console': 'off'
    }
  },

  // 多词组件名豁免：app.vue / error.vue 是框架固定入口，
  // pages/ 与 layouts/ 是路由组件（文件名即路由名），不受 Vue 风格指南多词约束；
  // components/ 下组件仍强制多词（避免与原生 HTML 元素冲突）
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
