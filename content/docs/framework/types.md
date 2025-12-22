---
category: 进阶教程
title: 集合类型
navigation:
  title: 类型
  icon: i-lucide-file-text
description: 了解您可以在 Nuxt Content 中定义的两种集合类型。
---

在 Nuxt Content 中，您可以根据集合文件的预期用途为每个集合指定类型。集合可以定义为 **page**（页面）或 **data**（数据）类型。

对于这两种类型，都会生成内置字段。每个集合都包含这些默认字段：

- `id`：唯一内容标识符
- `stem`：不带扩展名的文件路径（用于排序和定位）
- `extension`：文件扩展名
- `meta`：未在集合模式中定义的自定义字段

## 页面类型

```ts
defineCollection({
  source: '**/*.md',
  type: 'page'
})
```

::tip
如果内容文件与您网站上的页面之间存在 1 对 1 的关系，请使用 **page** 类型。
::

### 路径生成

Nuxt Content 将为集合中的每个文件自动生成路径，从而轻松创建 URL 映射。

以下是基于文件结构生成的路径示例：

|                                  |                       |
| -------------------------------- | --------------------- |
|                                  |                       |
| 文件                             | 路径                  |
| `content/index.md`               | `/`                   |
| `content/about.md`               | `/about`              |
| `content/blog/index.md`          | `/blog`               |
| `content/blog/hello.md`          | `/blog/hello`         |
| `content/1.guide/2.installation` | `/guide/installation` |

::note
您可以使用帮助工具 [`queryCollection('COLLECTION').path('PATH')`](/docs/utils/query-collection) 通过特定路径检索内容。
::

### 模式覆盖

当您使用 **page** 类型时，Nuxt Content 会生成几个常用于网页的标准字段。这些字段提供了结构，并**自动**应用于集合的模式：

- `path`：生成的路由路径
- `title`：页面标题
- `description`：页面描述
- `seo`：SEO 元数据（与 Nuxt 的 `useSeoMeta` 组合式函数一起使用）
- `body`：解析为 AST 的页面内容
- `navigation`：页面导航配置（用于 [queryCollectionNavigation](/docs/utils/query-collection-navigation)）

以下是应用的相应模式：

```ts
  path: z.string(),
  title: z.string(),
  description: z.string(),
  seo: z.intersection(
    z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      meta: z.array(z.record(z.string(), z.any())).optional(),
      link: z.array(z.record(z.string(), z.any())).optional(),
    }),
    z.record(z.string(), z.any()),
  ).optional().default({}),
  body: z.object({
    type: z.string(),
    children: z.any(),
    toc: z.any(),
  }),
  navigation: z.union([
    z.boolean(),
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ]).default(true),
```

::note
您可以通过在集合的模式中定义这些字段来覆盖它们中的任何一个。
::

## 数据类型

```ts
defineCollection({
  source: 'authors/**.yml',
  type: 'data'
})
```

数据类型适用于不直接对应网页但表示您可能希望在应用程序中查询和显示的结构化数据的内容。

对于数据集合，您可以完全控制模式，允许您定义自定义结构。

::note
集合类型和文件扩展名之间没有严格的关系。例如，**page** 集合可以使用 [Markdown](/docs/files/markdown)、[YAML](/docs/files/yaml) 或 [JSON](/docs/files/json) 文件，而 **data** 集合也可以使用这些格式中的任何一种。
::

## 文件排序

对于这两种类型，您可能希望控制列表中的显示顺序。在文件和目录名称中使用数字前缀来指定顺序。Nuxt Content 在对内容列表进行排序时会使用这些数字。

::note
Nuxt Content 使用字母顺序进行排序，因此如果您想使用数字顺序，需要在单个数字前面加上 `0`。例如，如果没有 `0` 前缀，`10.foo.md` 会排在 `2.bar.md` 之前。
::

```text [目录结构]
content/
  1.frameworks/
    1.vue.md
    2.nuxt.md
    ...
  2.examples/
    01.nuxthub.md
    02.vercel.md
    03.netlify.md
    04.heroku.md
    ...
    10.cloudflare.md
    index.md
```

::warning
使用 `.` 字符将数字与文件名分开。使用任何其他分隔符都不会生效。
::
