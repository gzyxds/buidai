// @ts-check
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

/**
 * 扫描 composables/ 目录，收集所有导出的函数名
 *
 * Nuxt 会自动导入 composables/ 下的导出，但 ESLint 不感知 auto-import，
 * 未声明的 composable 会误报 no-undef。自动扫描可避免每新增一个
 * composable 就手工同步本文件。
 *
 * @returns {string[]} 导出的函数名列表
 */
function collectComposableNames() {
  const dir = path.join(rootDir, 'composables')
  if (!fs.existsSync(dir)) {return []}
  const names = []
  for (const file of fs.readdirSync(dir)) {
    if (!/\.(ts|js)$/.test(file)) {continue}
    const src = fs.readFileSync(path.join(dir, file), 'utf8')
    for (const m of src.matchAll(/export\s+(?:async\s+)?function\s+(\w+)/g)) {
      if (m[1]) {names.push(m[1])}
    }
    for (const m of src.matchAll(/export\s+const\s+(\w+)/g)) {
      if (m[1]) {names.push(m[1])}
    }
  }
  return names
}

/**
 * Vue 运行时 API —— Nuxt auto-import 的完整运行时导出集合
 *
 * 来源：`.nuxt/imports.d.ts` 中 `export { ... } from 'vue'` 语句
 * （仅含运行时值，类型如 Ref / PropType 走 TS 检查，不需声明）
 *
 * 注意：Nuxt 不 auto-import 第三方类型，`import type { PropType } from 'vue'` 仍需显式书写
 */
const vueAutoImports = [
  'withCtx', 'withDirectives', 'withKeys', 'withMemo', 'withModifiers', 'withScopeId',
  'onActivated', 'onBeforeMount', 'onBeforeUnmount', 'onBeforeUpdate', 'onDeactivated',
  'onErrorCaptured', 'onMounted', 'onRenderTracked', 'onRenderTriggered', 'onServerPrefetch',
  'onUnmounted', 'onUpdated', 'computed', 'customRef', 'isProxy', 'isReactive', 'isReadonly',
  'isRef', 'markRaw', 'proxyRefs', 'reactive', 'readonly', 'ref', 'shallowReactive',
  'shallowReadonly', 'shallowRef', 'toRaw', 'toRef', 'toRefs', 'triggerRef', 'unref',
  'watch', 'watchEffect', 'watchPostEffect', 'watchSyncEffect', 'onWatcherCleanup',
  'isShallow', 'effect', 'effectScope', 'getCurrentScope', 'onScopeDispose',
  'defineComponent', 'defineAsyncComponent', 'resolveComponent', 'getCurrentInstance',
  'h', 'inject', 'hasInjectionContext', 'nextTick', 'provide', 'toValue', 'useModel',
  'useAttrs', 'useCssModule', 'useSlots', 'useTransitionState', 'useId', 'useTemplateRef',
  'useShadowRoot', 'useCssVars'
]

/** Vue auto-import → eslint globals 映射 */
const vueGlobals = Object.fromEntries(vueAutoImports.map(name => [name, 'readonly']))

// Nuxt 自动导入的项目内 composable（自动扫描 composables/ 目录，避免手工同步遗漏）
const nuxtComposables = collectComposableNames()

// Nuxt / Vue Router / Content 提供的运行时 API
const nuxtRuntimeApis = [
  'definePageMeta',
  'useSeoMeta',
  'useHead',
  'useSeoHead',
  'useRouter',
  'useRoute',
  'useRequestRoute',
  'useRuntimeConfig',
  'useAppConfig',
  'useState',
  'useFetch',
  'useLazyFetch',
  'useAsyncData',
  'useLazyAsyncData',
  'useNuxtData',
  'refreshNuxtData',
  'clearNuxtData',
  'navigateTo',
  'abortNavigation',
  'defineNuxtRouteMiddleware',
  'addRouteMiddleware',
  'definePageMeta',
  'defineRouteRules',
  'createError',
  'showError',
  'clearError',
  'useError',
  'isNuxtError',
  'setResponseStatus',
  'setResponseHeader',
  'prerenderRoutes',
  'useRequestHeaders',
  'useRequestEvent',
  'useRequestURL',
  'useCookie',
  'updateCookie',
  'refreshCookie',
  'callOnce',
  'onNuxtReady',
  'onNuxtBeforeMount',
  'useNuxtApp',
  'tryUseNuxtApp',
  'defineNuxtPlugin',
  'definePayloadPlugin',
  'definePayloadReducer',
  'definePayloadReviver',
  'queryCollection',
  'queryCollectionNavigation',
  'queryCollectionItemSurroundings',
  'queryCollectionAll',
  'queryCollectionByFullPath',
  'queryCollectionByPath',
  'queryCollectionSearchSections',
  'useContent'
]

const nuxtGlobals = Object.fromEntries(
  [...nuxtRuntimeApis, ...nuxtComposables].map(name => [name, 'readonly'])
)

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

  // 自定义规则
  {
    files: ['**/*.{vue,ts,js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...vueGlobals,
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
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      // CLI 工具的输出本就是终端内容
      'no-console': 'off'
    }
  }
)
