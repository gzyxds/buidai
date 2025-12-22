---
category: 进阶教程
title: 定义内容集合
navigation:
  title: 定义
  icon: i-lucide-file-text
description: 了解如何在 Nuxt 应用中定义和配置内容集合。
---

Nuxt Content 模块会自动解析位于 Nuxt 应用根目录下 `content/` 目录中的所有内容文件。这种设置允许您自由地组织文件夹结构以适应项目需求。

为了更好地组织内容，您可以考虑使用内容集合（Content Collections），它可以让您更有效地对内容进行分类和管理。这些集合在 `content.config.ts` 文件中定义。

::warning
如果没有 `content.config.ts` 文件，默认会解析并导入内容文件夹中的所有文件。但是，一旦添加了配置文件，只有与集合中定义的路径模式匹配的文件才会被导入。
::

## 什么是内容集合？

内容集合用于组织 Nuxt Content 项目中的相关项目。它们提供了一种结构化的方式来管理内容，使查询、显示和维护网站数据变得更加容易。

主要功能包括：

- **逻辑分组**：将相似内容分组在一起，如博客文章、产品页面或文档文章
- **共享配置**：对集合内的所有项目应用通用设置和验证
- **改进的查询**：高效地获取和筛选相关内容项目
- **自动类型推断**：在开发环境中获得类型安全和自动补全
- **灵活的结构**：按内容类型、类别或任何其他适合您需求的逻辑分组来组织集合

## 定义集合

在项目的根目录中创建一个 `content.config.ts` 文件。这个特殊文件用于配置您的集合数据库、工具类型和内容处理。

以下是一个基本示例：

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      // 指定此集合中的内容类型
      type: 'page',
      // 加载 `content` 目录内的所有文件
      source: '**',
    })
  }
})
```

::warning
目前，一个文档只能存在于一个集合中。如果一个文件在多个集合中被引用，实时重载将无法正常工作。为了避免这种情况，建议使用 `exclude` 属性通过适当的正则表达式模式明确地将文档从其他集合中排除。

这个主题在以下问题中仍在讨论：[nuxt/content#2966](https://github.com/nuxt/content/issues/2966)。
::

### 集合模式

模式（Schema）在集合内强制执行数据一致性，并作为 TypeScript 类型的真实来源。

除了内置字段外，您可以通过使用 [`zod`](https://zod.dev) 模式向集合添加 `schema` 属性来定义自定义模式：

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      // 为博客集合定义自定义模式
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
```

::note
`@nuxt/content` 暴露了一个 `z` 对象，其中包含一组用于常见数据类型的 Zod 模式。查看 [Zod 的 README](https://github.com/colinhacks/zod) 以获取有关 Zod 工作原理和可用功能的完整文档。
::

::tip
您可以定义任意数量的集合来组织不同类型的内容。
::

### 数据库索引

通过在集合列上定义索引来优化查询性能。索引对于用于筛选、排序或查找的字段特别有用。

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/*.json',
      schema: z.object({
        sku: z.string(),
        price: z.number(),
        category: z.string(),
        inStock: z.boolean(),
      }),
      indexes: [
        // 单列索引
        { columns: ['category'] },
        { columns: ['price'] },

        // 用于类别 + 价格筛选的复合索引
        { columns: ['category', 'price'] },

        // 确保 SKU 唯一性的唯一索引
        { columns: ['sku'], unique: true },

        // 自定义索引名称（可选）
        { columns: ['inStock', 'category'], name: 'idx_stock_category' },
      ],
    }),
  },
})
```

::note
索引在生成数据库模式时自动创建。它们适用于所有支持的数据库：SQLite、Cloudflare D1、PostgreSQL、LibSQL 和 PGlite。
::

::tip{icon="i-ph-lightbulb"}
**Cloudflare D1 成本优化**：使用索引时，对索引列的 `WHERE` 子句在只有一个匹配项时仅计为 1 次行读取。如果没有索引，D1 会计算表中扫描的所有行，这会显著增加您的读取成本。索引可以极大地减少您的 D1 账单。
::

**索引配置选项：**

- **`columns`**（必需）：要包含在索引中的列名数组
- **`unique`**（可选）：设置为 `true` 以创建唯一索引（默认：`false`）
- **`name`**（可选）：自定义索引名称。如果省略，会自动生成为 `idx_{collection}_{column1}_{column2}`

**性能提示：**

- 为 `where()` 查询中使用的列创建索引以加快筛选速度
- 为 `sort()` 中使用的列创建索引以优化排序
- 对按多个列进行筛选/排序的查询使用复合索引
- 唯一索引自动强制数据唯一性约束

## 查询集合

使用 [`queryCollection`](/docs/utils/query-collection) 工具从集合中获取一个或所有项目：

```vue [pages/blog.vue]
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <div>
    <h1>博客</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
```

::note{to="/docs/utils/query-collection"}
在我们的 `queryCollections` API 文档中了解更多可用的查询选项。
::

## defineCollection()

`defineCollection` 函数用于在内容配置中定义一个集合。以下是其 TypeScript 签名：

```ts
function defineCollection(collection: Collection): DefinedCollection

type Collection = {
  // 确定内容如何处理
  type: 'page' | 'data'
  // 指定内容位置
  source?: string | CollectionSource
  // 用于内容验证和类型的 Zod 模式
  schema?: ZodObject<T>
  // 用于查询优化的数据库索引
  indexes?: CollectionIndex[]
}

type CollectionIndex = {
  // 要包含在索引中的列名
  columns: string[]
  // 可选的自定义索引名称
  name?: string
  // 这是否是唯一索引（默认：false）
  unique?: boolean
}
```

::note{to="/docs/collections/types"}
了解有关集合类型的更多信息。
::

```ts
type CollectionSource = {
  // 用于内容匹配的 Glob 模式
  include: string
  // .path 前缀（仅适用于 'page' 类型）
  prefix?: string
  // 用于排除内容的 Glob 模式
  exclude?: string[]
  // 用于内容匹配的根目录
  cwd?: string
  // 远程 git 仓库 URL（例如，https://github.com/nuxt/content）
  repository?: string
  // 私有仓库的认证令牌（例如，GitHub 个人访问令牌）
  authToken?: string
}
```

::note{to="/docs/collections/sources"}
了解有关集合源的更多信息。
::

该函数返回已定义的集合对象。
