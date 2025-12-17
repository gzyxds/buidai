---
title: CSV
description: 如何定义、写入和查询 CSV 数据。
---

## 定义集合

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    authors: defineCollection({
      type: 'data',
      source: 'authors/**.csv',
      schema: z.object({
        name: z.string(),
        email: z.string(),
        avatar: z.string()
      })
    })
  }
})

```

## 创建 `.csv` 文件

在 `content/authors/` 目录中创建作者文件。

::code-group
```csv [users.csv]
id,name,email
1,John Doe,john@example.com
2,Jane Smith,jane@example.com
3,Alice Johnson,alice@example.com
```

```csv [team.csv]
name,role,avatar
John Doe,Developer,https://avatars.githubusercontent.com/u/1?v=4
Jane Smith,Designer,https://avatars.githubusercontent.com/u/2?v=4
```
::

::warning
每个 CSV 文件应该有一个定义列名的标题行，这些列名将用作解析时的对象键。
::

## 查询数据

现在我们可以查询作者：

```vue
<script lang="ts" setup>
// 查找单个作者
const { data: author } = await useAsyncData('john-doe', () => {
  return queryCollection('authors')
    .where('name', '=', 'John Doe')
    .first()
})

// 获取所有作者
const { data: authors } = await useAsyncData('authors', () => {
  return queryCollection('authors')
    .order('name', 'ASC')
    .all()
})
</script>

<template>
  <ul>
    <li v-for="author in authors" :key="author.id">
      {{ author.name }} ({{ author.email }})
    </li>
  </ul>
</template>
```

## 配置

您可以在 `nuxt.config.ts` 中配置 CSV 文件的解析方式：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      csv: {
        // 将 CSV 数据转换为 JSON 对象
        json: true,
        // 指定自定义分隔符（默认为 ','）
        delimiter: ','
      }
    }
  }
})
```

在配置中使用 `json: true`，每一行将转换为使用标题行作为键的 JavaScript 对象：

```json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

## 自定义分隔符

如果您的 CSV 文件使用不同的分隔符，您可以在配置中指定：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      csv: {
        delimiter: ';' // 使用分号作为分隔符
      }
    }
  }
})
```

这将解析如下格式的 CSV 文件：

```csv [semicolon-data.csv]
id;name;email
1;John Doe;john@example.com
2;Jane Smith;jane@example.com
```

::note
如果您不需要 CSV 支持，可以通过在配置中设置 `csv: false` 来禁用 CSV 解析器。
::