import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    // 与 Nuxt 的 `~` / `@` 根目录别名保持一致，
    // 使被测模块内部使用别名导入时（如 composables 引用 ~/utils/*）可被解析
    alias: {
      '~': fileURLToPath(new URL('.', import.meta.url)),
      '@': fileURLToPath(new URL('.', import.meta.url))
    }
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node'
  }
})