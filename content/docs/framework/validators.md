---
category: 进阶教程
title: 模式验证器
navigation:
  title: 验证器
  icon: i-lucide-check-circle
description: 使用您首选的验证器定义集合模式，并享受完整的类型安全。
---

Nuxt Content 支持使用多种验证器定义集合模式。默认情况下，这包括流行的库如 **Zod v3 / v4** 和 **Valibot**（示例如下）。该系统是可扩展的，可以通过 JSON Schema 适配器支持其他验证器。模式确保数据一致性，并驱动生成的类型和 Studio 表单。

## 使用 Zod v3

### 安装

```bash
pnpm add -D zod zod-to-json-schema
# 或
npm i -D zod zod-to-json-schema
```

建议直接从 `zod` 导入 `z`。

```ts [content.config.ts]
import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod' // 或 'zod/v3'（如果您的设置暴露了此子路径）

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
        image: z.object({
          src: property(z.string()).editor({ input: 'media' }),
          alt: z.string()
        })
      })
    })
  }
})
```

::note
日期在底层序列化为 ISO 字符串（JSON Schema `format: date-time`）。
::

::warning
从 `@nuxt/content` 重新导出的 `z` 已被弃用，并将在未来版本中移除。请改为从 `zod`（或 `zod/v3`）导入 `z`。
::

## 使用 Zod v4

Zod v4 提供了原生的 JSON Schema 导出功能。不需要 `zod-to-json-schema` 依赖。

### 安装 Zod

```bash
pnpm add -D zod
# 或
npm i -D zod
```

```ts [content.config.ts]
import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        updatedAt: z.date(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        hero: z.object({
          image: property(z.string()).editor({ input: 'media' }),
          caption: z.string().optional()
        })
      })
    })
  }
})
```

## 使用 Valibot

使用 Valibot 原语定义您的模式。

### 安装 Valibot

```bash
pnpm add -D valibot @valibot/to-json-schema
# 或
npm i -D valibot @valibot/to-json-schema
```

```ts [content.config.ts]
import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { object, string, boolean, array, date, optional } from 'valibot'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
      schema: object({
        title: string(),
        description: optional(string()),
        updatedAt: date(),
        draft: optional(boolean()),
        tags: optional(array(string())),
        hero: object({
          image: property(string()).editor({ input: 'media' }),
          caption: optional(string())
        })
      })
    })
  }
})
```

## 选择验证器

- **Zod v3**：经过实战检验，拥有丰富的生态系统；使用重新导出的 `z` 提供出色的开发体验。
- **Valibot**：轻量级且快速；从 `valibot` 引入您自己的导入器。

只安装和使用您需要的验证器。Nuxt Content 会自动检测已安装的支持的验证器。

## 支持其他验证器

Nuxt Content 内部将您的集合模式转换为 JSON Schema Draft-07。如果您首选的验证器可以转换为 Draft-07（或有兼容的适配器），它就可以被支持。目前，Zod（v3 和 v4）和 Valibot 会被自动检测。如果您希望获得对另一个验证器的一等支持，请考虑在 [Nuxt Content 仓库](https://github.com/nuxt/content) 中提交 issue 或 PR。

## 编辑器元数据（可选）

您可以通过 `property(...).editor({ ... })` 为 Studio 丰富字段，两种验证器都支持此功能。有关映射详情，请参阅 Studio 文档。

::tip{to="/docs/studio/content"}
了解编辑器元数据如何映射到 Studio 中的表单输入。
::
