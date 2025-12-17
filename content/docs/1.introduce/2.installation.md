---
title: 安装
description: 在您的 Nuxt 应用中开始使用 Nuxt Content v3。
---

## 安装包

选择您喜欢的包管理器安装 Nuxt Content v3：

::code-group
```bash [pnpm]
pnpm add @nuxt/content
```

```bash [yarn]
yarn add @nuxt/content
```

```bash [npm]
npm install @nuxt/content
```

```bash [bun]
bun add @nuxt/content
```
::

## 注册模块

将 Nuxt Content 模块添加到您的 `nuxt.config.ts`：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## 自动设置

使用 `create-nuxt` CLI 启动新项目时，您可以从交互式模块选择器中简单地选择 `@nuxt/content`。这将自动为您安装和注册模块。

::code-group
```bash [npm]
npm create nuxt <project-name>
```

```bash [yarn]
yarn create nuxt <project-name>
```

```bash [pnpm]
pnpm create nuxt <project-name>
```

```bash [bun]
bun create nuxt <project-name>
```

```bash [deno]
deno -A npm:create-nuxt@latest <project-name>
```
::

::note{color="warning"}
在 Node.js 中运行项目时，Nuxt Content 会询问您要使用的数据库连接器。
您可以选择安装 `better-sqlite3` 或 `sqlite3` 包。

:br

如果您不想安装任何包，可以使用 Node.js\@v22.5.0 或更新版本中的原生 SQLite。
查看 [`experimental.nativeSqlite` 配置](/docs/getting-started/configuration#experimentalnativesqlite-deprecated-use-sqliteconnector)。
::

## 创建您的第一个集合

在项目根目录中创建一个 `content.config.ts` 文件：

```ts [content.config.ts]
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

此配置创建一个默认的 `content` 集合，处理位于项目 `content` 文件夹中的所有 Markdown 文件。您可以根据需要自定义集合设置。

::tip
`type: page` 表示内容文件与您网站上的页面之间存在 1 对 1 的关系。
::

::note{to="/docs/collections/define"}
在我们的 **集合指南** 中了解更多信息。
::

## 创建您的第一个 Markdown 页面

在项目根目录中创建一个 `content/index.md` 文件：

```md [content/index.md]
# 我的第一个页面

这是一些内容。
```

了解有关编写 [Markdown 页面](/docs/files/markdown) 的更多信息。

## 显示您的页面

创建一个 `pages/index.vue` 文件并显示页面内容：

```vue [pages/index.vue]
<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>未找到主页</div>
</template>
```

::note{icon="i-lucide-info"}
如果您在没有 `pages` 目录的新 Nuxt 项目中安装 Nuxt Content，您还需要更新 `app.vue` 文件，通过添加 `NuxtPage` 组件来允许渲染页面。（如果您的项目中已经有一些页面，那么您就可以开始了。）

```vue [app.vue]
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```
::

::tip{icon="i-lucide-rocket"}
就是这样！您现在已经创建了您的第一个 Nuxt Content 页面。
::
