// @ts-check
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

// Nuxt 全局变量
const nuxtGlobals = {
  definePageMeta: true,
  useSeoMeta: true,
  useHead: true,
  useRouter: true,
  useRoute: true,
  navigateTo: true,
  useState: true,
  useFetch: true,
  useAsyncData: true,
  ref: true,
  computed: true,
  watch: true,
  onMounted: true,
  onUnmounted: true,
  reactive: true,
  clearError: true,
  createError: true,
  showError: true,
  useError: true,
  setResponseStatus: true,
  queryCollection: true,
  queryCollectionNavigation: true,
  queryCollectionItemSurroundings: true
}

export default tseslint.config(
  // 全局忽略模式
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      'coverage/',
      '.vscode/',
      '.idea/',
      '.vercel/',
      '参考设计/'
    ]
  },

  // 基础 ESLint 推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // Vue 推荐规则
  ...pluginVue.configs['flat/recommended'],

  // Prettier 配置（禁用与 Prettier 冲突的规则）
  eslintConfigPrettier,

  // Vue 文件特定配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },

  // 自定义规则
  {
    files: ['**/*.{vue,ts,js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...nuxtGlobals
      },
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      // Vue 相关规则
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'warn',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }],

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
  }
)
