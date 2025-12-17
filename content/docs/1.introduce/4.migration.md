---
title: 迁移指南
description: 如何从 v2 迁移到 v3
---

Nuxt Content v3 是从零开始重新构建的，带来了功能更强大的新库。虽然我们以与 Content v2 类似的方式重新设计了概念和组件，但破坏性变更仍然不可避免。

不用担心，您不需要修改您的内容文件。我们确保 Content v3 以与 Content v2 相同的方式处理内容。

## 变更

### Vue 工具

- `queryContent()` API 已被新的 `queryCollection()` 替代

::prose-tip
新 API 由 SQL 支持，内容查询在特定集合内进行。
::

- `fetchContentNavigation()` API 已被新的 `queryCollectionNavigation()` 替代
- 周围内容现在有了自己独立的 API `queryCollectionItemSurroundings()`
- 文档驱动模式已被移除：Markdown 文件不再自动转换为 Nuxt 页面，您需要创建页面，[查看此部分了解如何操作](/docs/components/content-renderer#example-usage)。
- `useContent()` 组合式函数已被移除
- `searchContent()` 已被新的 `queryCollectionSearchSections` API 替代
- 全文搜索可以使用 `queryCollectionSearchSections` API 轻松完成，[查看此部分了解如何操作](/docs/advanced/fulltext-search)

### 组件

- 所有内容都应使用 `<ContentRenderer>` 组件渲染。`<ContentDoc>`、`<ContentList>`、`<ContentNavigation>` 和 `<ContentQuery>` 组件在 v3 中已被移除。
- `<ContentSlot>` 和 `<MDCSlot>` 组件在 v3 中不受支持。相反，组件可以直接使用 Vue 的原生 `<slot>` 组件

::prose-note
`<ContentSlot>` 和 `<MDCSlot>` 最初用于在渲染前操作内容并从插槽内容中移除包裹段落。现在，这种解包裹行为通过 `<slot>` 组件中的 `mdc-unwrap` 属性支持。示例：`<slot mdc-unwrap="p" />`
::

- 在 `components/content` 目录下创建的组件不再自动注册为全局组件。如果您使用 [动态渲染](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components) 在 Markdown 文件外部渲染这些组件，则必须在 Nuxt 应用中手动注册它们。查看 [Nuxt - 自定义组件目录](https://nuxt.com/docs/guide/directory-structure/components#custom-directories) 文档了解如何执行此操作。

### 类型

- `import type { NavItem } from '@nuxt/content/dist/runtime/types'` 已被 `import type { ContentNavigationItem } from '@nuxt/content'` 替代

### 常规

- `_dir.yml` 文件已重命名为 `.navigation.yml`
- 模块选项中没有源选项，相反，您可以在 `content.config.ts` 中为集合定义 [多个源](/docs/collections/sources)。
- 文档的 `._path` 现在已重命名为 `.path`，同样，所有带有 `_` 前缀的内部字段都已移除或重命名。
- `useContentHelpers()` 已被移除
- 模块默认不忽略点文件，您可以通过在集合源的 `exclude` 选项中添加 `ignore: ['**/.*']` 来忽略它们。
- 由于 SQL 限制，排序顺序现在使用字母顺序而不是数字顺序。查看 [文件排序](/docs/collections/types#ordering-files) 部分了解更多信息。
- 模块选项已从 v2 更改。查看 [配置页面](/docs/getting-started/configuration) 了解详细信息。

## 在 v3 中实现文档驱动模式

在 Content v3 中实现文档驱动模式非常简单。您只需要在 Nuxt 中创建一个捕获所有页面并基于路由路径获取内容即可。

```vue [pages/[...slug\].vue]
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div>
    <header><!-- ... --></header>

    <ContentRenderer v-if="page" :value="page" />

    <footer><!-- ... --></footer>
  </div>
</template>
```

## 将 `queryContent` 转换为 `queryCollections`

正如我们上面提到的，`queryContent` 已被新的基于集合的 `queryCollection` 替代。这两者之间有两个主要区别：

1. `queryCollection` 正在为 SQL 数据库构建查询。
2. `queryCollection` 仅在指定的集合内搜索。您应该知道集合的名称（配置中的键）。

```ts [使用路径查找内容]
// Content v2
const v2Query = await queryContent(route.path).findOne()
// Content v3 - 不要忘记在 `content.config.ts` 中创建 `content` 集合
const v3Query = await queryCollection('content').path(route.path).first()
```

```ts [使用自定义过滤器查找内容]
// Content v2
const v2Query = await queryContent()
  .where({ path: /^\/hello\/.*/ })
  .find()
// Content v3 - 不要忘记在 `content.config.ts` 中创建 `content` 集合
const v3Query = await queryCollection('content')
  .where('path', 'LIKE', '/hello%')
  .first()
```

::prose-note{to="/docs/collections/define"}
查看专门的部分了解更多关于集合的信息
::

## 转换 `queryContent().findSurround()`

周围内容现在有了自己独立的 API。

```ts
const targetPath = '/docs'

// Content v2
const v2Surround = await queryContent(targetPath)
  .only(['title', 'description', 'navigation'])
  .findSurround(withoutTrailingSlash(route.path))

// Content v3 - 不要忘记在 `content.config.ts` 中创建 `content` 集合
const v3Surround = await queryCollectionItemSurroundings(
  'content',
  targetPath,
  {
    fields: ['title', 'description', 'navigation']
  }
)
```

::prose-note
查看专门的部分了解更多信息
::

## 合并 `ProsePre`, `ProseCode`, 和 `ProseCodeInline` 组件

许多 `ProsePre` 组件是 `ProseCode` 组件的简单包装器。我们已将这三个组件合并为两个组件。现在 `ProsePre` 和多行代码块之间没有区别。

1. MDC 现在会将单个反引号 `` ` `` 映射并解析为 `ProseCode` 而不是 `ProseCodeInline`。
2. MDC 现在会将以三个反引号 ` ``` ` 开头的块代码映射并解析为 `ProsePre` 组件。

**建议的更改：**

1. 您当前的 `ProseCode` 逻辑应移至 `ProsePre`
2. 将您的 `ProseCodeInline` 组件重命名为 `ProseCode`

## `_dir.yml` 文件已重命名为 `.navigation.yml`

在 Content v3 中，我们将 `_dir.yml` 重命名为 `.navigation.yml`。新名称更好地反映了这些文件的用途。
模块使用这些文件收集有关目录的信息以生成导航。

请注意，为了使这些文件对模块可用，您应该以包含这些文件的方式定义集合的源。例如，`source: '**'` 和 `source: '**/*.{md,yml}'` 会将这些文件包含在集合中，但 `source: '**/*.md'` 不会包含它们。

## 忽略点文件

默认情况下，Content v3 不会忽略点文件。如果您想忽略它们，可以在集合源的 `exclude` 选项中添加 `ignore: ['**/.*']`。

```ts
defineCollection({
  source: {
    include: '**',
    exclude: ['**/.*']
  }
})
```

请注意，上述模式也会将 `.navigation.yml` 文件从集合中排除。如果您使用 `.navigation.yml` 并想保留它们，您可以使用 `**/.(!(navigation.yml))` 模式排除所有点文件，除了 `.navigation.yml`。

```ts
defineCollection({
  source: {
    include: '**',
    exclude: ['**/.!(navigation.yml)']
  }
})
```