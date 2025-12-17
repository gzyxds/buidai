---
title: 配置
description: Nuxt Content 配置了合理的默认值。
---

要配置内容模块并自定义其行为，您可以在 `nuxt.config` 中使用 `content` 属性：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    // 选项
  }
})
```

::note{to="https://github.com/nuxt-modules/mdc#configurations"}
除了通过 `content.markdown` 进行配置外，您还可以使用 Markdown 组件 (MDC) 通过 `mdc` 属性自定义 Markdown 元素的渲染。
::

## `build`

Nuxt Content 在构建时读取并解析所有可用内容。此选项使您可以控制内容解析。

### `markdown`

配置 Markdown 解析器。

#### `toc`

::code-group
```ts [默认值]
toc: {
  depth: 2,
  searchDepth: 2
}
```

```ts [类型定义]
type Toc = {
  depth: number
  searchDepth: number
}
```
::

控制目录生成的行为。

值：

- `depth`：要包含在目录中的最大标题深度。
- `searchDepth`：搜索标题的嵌套标签的最大深度。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // 包含 h3 标题
        }
      }
    }
  }
})
```

#### `remarkPlugins`

::code-group
```ts [默认值]
remarkPlugins: {}
```

```ts [类型定义]
type RemarkPlugins = Record<string, false | MarkdownPlugin>
```
::

要使用的 [remark](https://github.com/remarkjs/remark) 插件列表。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        // 可以使用对象语法覆盖默认选项
        remarkPlugins: {
          // 覆盖 remark-emoji 选项
          'remark-emoji': {
            options: {
              emoticon: true
            }
          },
          // 禁用 remark-gfm
          'remark-gfm': false,
          // 添加 remark-oembed
          'remark-oembed': {
            // 选项
          }
        },
      }
    }
  }
})
```

#### `rehypePlugins`

::code-group
```ts [默认值]
rehypePlugins: {}
```

```ts [类型定义]
type RehypePlugins = object
```
::

要使用的 [rehype](https://github.com/remarkjs/remark-rehype) 插件列表。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        // 可以使用对象语法覆盖默认选项
        rehypePlugins: {
          'rehype-figure': {

          }
        },
      }
    }
  }
})
```

#### `contentHeading`

::code-group
```ts [默认值]
contentHeading: true
```

```ts [类型定义]
type ContentHeading = boolean
```
::

将此选项设置为 `false` 会禁用自动生成 `title` 和 `description` 字段，这些字段通常是从第一个 H1 标题及其后的段落中提取的。

#### `highlight`

::code-group
```ts [默认值]
highlight: false
```

```ts [类型定义]
type Highlight = false | object
```
::

Nuxt Content 使用 [Shiki](https://github.com/shikijs/shiki) 为 [`ProsePre`](/docs/components/prose#prosepre) 和 [`ProseCode`](/docs/components/prose#prosecode) 提供语法高亮。

| 选项 | 类型 | 描述 |
| - | - | - |
| `theme` | `ShikiTheme` 或 `Record<string, ShikiTheme>` | 要使用的 [颜色主题](https://github.com/shikijs/shiki/blob/main/docs/themes.md)。 |
| `langs` | `ShikiLang[]` | 可用于高亮的 [加载语言](https://github.com/shikijs/shiki/blob/main/docs/languages.md)。 |

- `highlight.theme`

主题可以通过单个字符串指定，也支持包含多个主题的对象。

此选项与 [颜色模式模块](https://color-mode.nuxtjs.org/) 兼容。

如果您使用多个主题，建议始终指定 `default` 主题。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        highlight: {
          // 所有配色方案中使用的主题。
          theme: 'github-light',
          // 或
          theme: {
            // 默认主题（与单个字符串相同）
            default: 'github-light',
            // 如果 `html.dark` 使用的主题
            dark: 'github-dark',
            // 如果 `html.sepia` 使用的主题
            sepia: 'monokai'
          }
        }
      }
    }
  }
})
```

- `highlight.langs`

默认情况下，该模块加载几种语言用于语法高亮：

```ts [默认值]
['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml']
```

如果您计划使用其他语言的代码示例，则需要在这些选项中定义该语言。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'c',
            'cpp',
            'java'
          ]
        }
      }
    }
  }
})
```

如果您想为不支持的语言添加高亮显示，可以通过加载该语言的语法文件来实现。

```ts [nuxt.config.ts]
import { readFileSync } from 'node:fs'

export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            // 了解有关 Shiki 语言的更多信息：https://shiki.style/guide/load-lang
            JSON.parse(
              readFileSync('./shiki/languages/gdscript.tmLanguage.json', 'utf-8'),
            ),
          ]
        }
      }
    }
  }
})
```

在 [Shiki 文档](https://github.com/shikijs/shiki/blob/main/docs/languages.md#adding-grammar) 中了解有关添加语言的更多信息。

### `pathMeta`

内容模块使用文件路径生成 slug、默认标题和内容顺序，您可以使用 `pathMeta` 选项自定义此行为。

#### `pathMeta.forceLeadingSlash`

如果设置为 `true`，路径将以斜杠为前缀。默认值为 `true`。

#### `pathMeta.slugifyOptions`

内容模块使用 [slugify](https://github.com/simov/slugify) 生成 slug，您可以使用此选项自定义 slugify 的行为。

查看 [slugify 选项](https://github.com/simov/slugify#options) 了解更多信息。

### `transformers`

Nuxt Content 为每种内容类型都有特定的转换器，用于解析原始内容并为查询和渲染做好准备。使用此选项，您可以定义自定义转换器来支持新的内容类型或改进支持的内容类型的功能。

::code-group
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    build: {
      transformers: [
        '~/transformers/title-suffix',
      ],
    },
  },
})
```

```ts [~/transformers/title-suffix.ts]
import { defineTransformer } from '@nuxt/content'

export default defineTransformer({
  name: 'title-suffix',
  extensions: ['.md'],
  transform(file) {
    return {
      ...file,
      title: file.title + ' (后缀)',
    }
  },
})
```

::

在 [转换器](/docs/advanced/transformers) 文档中了解有关转换器的更多信息。

## `database`

默认情况下，Nuxt Content 使用本地 SQLite 数据库来存储和查询内容。如果您想使用其他数据库或计划在 Cloudflare Workers 上部署，您可以修改此选项。

以下是支持的数据库适配器列表：

### `SQLite`

如果您想更改默认数据库位置并将其移动到其他地方，可以使用 `sqlite` 适配器。这是 `database` 选项的默认值。根据您的运行时环境，将使用不同的 sqlite 适配器（Node: better-sqlite-3，Bun: bun\:sqlite）。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'sqlite',
      filename: 'SQLITE_DB_LOCATION'
    }
  }
})
```

如果您无法使用正常的文件支持的 SQLite 数据库（例如由于只读文件系统或平台限制），您可以完全在内存中运行 SQLite。Nuxt Content 将在首次查询时从生成的转储中恢复数据库。在无服务器平台上，此数据库将在每次冷启动时重新创建；请尽可能预渲染多个路由以避免重复的运行时初始化。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:'
    }
  }
})
```

### `D1`

如果您计划将应用程序部署到 Cloudflare workers，则需要使用 `d1` 数据库适配器。在 Cloudflare 仪表板中创建 `d1` 绑定并填写 `bindingName` 字段。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'd1',
      bindingName: 'CF_BINDING_NAME'
    }
  }
})
```

### `Postgres`

如果您计划使用 PostgreSQL 数据库部署应用程序，则需要使用 `postgresql` 数据库适配器。

首先，确保安装 `pg` 包：

```bash [终端]
npm i pg
```

然后，在 `nuxt.config.ts` 中配置 `postgresql` 适配器：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'postgresql',
      url: process.env.POSTGRES_URL,
      /* 其他 `pg` 选项 */
    }
  }
})
```

### `LibSQL`

如果您计划使用 LibSQL 数据库部署应用程序，则需要使用 `libsql` 数据库适配器。

首先，确保安装 `@libsql/client` 包：

```bash [终端]
npm i @libsql/client
```

然后，在 `nuxt.config.ts` 中配置 `libsql` 适配器：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'libsql',
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    }
  }
})
```

::note
最流行的 LibSQL 托管服务是 [Turso](https://turso.tech/)。
::

### `PGlite`

如果您计划使用 PGlite 数据库部署应用程序，则需要使用 `pglite` 数据库适配器。

首先，确保安装 `@electric-sql/pglite` 包：

```bash [终端]
npm i @electric-sql/pglite
```

然后，在 `nuxt.config.ts` 中配置 `pglite` 适配器：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    database: {
      type: 'pglite',
      dataDir: '.data/content/pglite'
    }
  }
})
```

::note
我们建议仅在开发环境中使用 PGlite。
::

## `renderer`

配置内容渲染器。

### `anchorLinks`

::code-group
```ts [默认值]
{ h2: true, h3: true, h4: true }
```

```ts [类型定义]
type AnchorLinks = boolean | Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', boolean>
```
::

控制锚点链接生成，默认情况下，它为 `h2`、`h3` 和 `h4` 标题生成锚点链接

值：

- `false`：将禁用链接生成。
- `true`：将为所有标题启用链接生成。

### `alias`

::code-group
```ts [默认值]
alias: {}
```

```ts [类型定义]
type Alias = Record<string, string>
```
::

别名将用于替换 Markdown 组件并渲染自定义组件而不是默认组件。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    renderer: {
      alias: {
        p: 'MyCustomParagraph'
      }
    }
  }
})
```

## `watch`

```ts [默认值]
watch: {
  enabled: true
}
```

控制开发期间是否启用内容热重载。

**选项：**

- `enabled` (`boolean`)：编辑内容文件时启用或禁用热重载。  
  - `true`（默认）：开发期间自动重新加载应用程序中的内容更改。
  - `false`：禁用热重载；更改需要手动刷新。

::callout
内容观察器仅在开发环境中运行，并利用 Vite 开发服务器检测内容更新并向您的应用程序发送事件以进行实时更新。
::

## `experimental`

尚未稳定的实验性功能。

### `experimental.sqliteConnector`

SQLite 连接器在不同环境中有局限性。有些在无服务器环境中工作，而有些则不。Nuxt Content 支持三种不同的 SQLite 连接器来覆盖所有环境：

- `better-sqlite3`：适用于所有 Node 环境、GitHub CI、Vercel CI 和生产环境、Cloudflare CI 管道等。（**不适用于** WebContainers 和 StackBlitz）
- `sqlite3`：适用于 Node 环境、GitHub CI 和 StackBlitz。（**不适用于** Vercel 或 Cloudflare）
- `native`：从 Node.js v22.5.0 开始，`node:sqlite` 模块在 Node.js 中原生可用。此连接器适用于 Node.js 版本 22.5.0 或更新版本的所有 Node 环境。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    experimental: { sqliteConnector: 'native' },
  },
});
```

### `experimental.nativeSqlite`（已弃用，使用 `sqliteConnector`）

从 Node.js v22.5.0 开始，`node:sqlite` 模块在 Node.js 中原生可用。
这允许 Nuxt Content 使用 SQLite 作为数据库，而无需外部包。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    experimental: { nativeSqlite: true },
  },
});
```

::prose-note
此功能仅在 Node.js v22.5.0 及以上版本中可用。在旧版本中启用此功能不会有任何效果。
::
