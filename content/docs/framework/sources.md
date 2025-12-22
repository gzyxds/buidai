---
category: 进阶教程
title: 集合源
navigation:
  title: 源
  icon: i-lucide-upload
description: 了解如何在 Nuxt Content 集合中导入文件。
---

Nuxt Content 提供了多种方法将内容文件导入到您的集合中。您可以通过在 `defineCollection` 中使用 `source` 属性来配置源：

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: '**',
      type: 'page'
    })
  }
})
```

## `source`

`source` 属性可以定义为字符串（遵循 glob 模式）或对象，允许为内容文件夹中的目标目录和文件进行更详细的源配置。

**示例：**

- `source: '**'` 包含内容目录及其子目录中的所有文件。
- `source: '**/*.md'` 包含内容目录及其子目录中的所有 Markdown 文件。
- `source: 'docs/**/*.yml'` 包含 `content/docs` 及其子目录中的所有 YML 文件。
- `source: '**/*.{json,yml}'` 包含内容目录及其所有子目录中的 JSON 或 YML 文件。
- `source: '*.json'` 仅包含直接位于内容目录中的 JSON 文件，不包括任何子目录。

### `include`（必需）

内容文件夹中目标存储库和文件的 Glob 模式。

### `exclude`

用于从导入中排除内容的 Glob 模式。

### `prefix`

此配置仅适用于与您网站上的页面存在 1 对 1 关系的 **page** 类型。

它代表网站上相应页面的路径前缀（基础 URL）。

::prose-warning
`prefix` 必须以前导斜杠 `/` 开头。
::

默认情况下，模块会提取 `source`（或 `source.include`）的静态前缀，并将其用作内容路径的前缀。例如，如果您定义 `/en/**` 源，模块会自动将 `prefix` 填充为 `/en`。您可以手动提供前缀来覆盖此行为。通过在集合源中设置 `prefix: '/'` 可以删除前缀。

```ts
defineCollection({
  type: "page",
  source: {
    include: "en/**",
    exclude: ["en/index.md"],
    prefix: '/'
  }
})
```

### `cwd`

用于内容匹配的根目录。

**示例：**

如果您想包含内容目录外的文件夹中的文件，请将该文件夹的绝对路径设置为 `cwd` 属性。

```ts
source: {
  cwd: path.resolve('packages/my-pkg/docs'),
  include: '**/*.md',
}
```

### `repository`

表示远程 git 仓库 URL 的外部源（例如，<https://github.com/nuxt/content>）。

定义外部源时，您还必须定义 `include` 选项。`include` 模式对于模块了解集合使用哪些文件至关重要。

```js
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/nuxt/content',
        include: 'docs/content/**',
      },
    })
  }
})
```

### `authToken`

用于私有仓库的认证令牌（例如，GitHub 个人访问令牌）。

::warning{icon="i-lucide-shield-alert"}
切勿直接在代码中提交认证令牌或凭据。使用环境变量或其他安全方法在运行时提供这些值。
::

### `authBasic`

用于私有仓库的基本认证（例如，Bitbucket 用户名和密码）。

```ts
defineCollection({
  type: 'page',
  source: {
    repository: 'https://bitbucket.org/username/repo',
    authBasic: {
      username: 'username',
      password: 'password',
    },
  },
})
```
