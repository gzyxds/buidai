---
title: "Templates"
description: "Nuxt Kit provides a set of utilities to help you work with templates. These functions allow you to generate extra files during development and build time."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/templates"
---
# Templates

> Nuxt Kit provides a set of utilities to help you work with templates. These functions allow you to generate extra files during development and build time.

Templates allow you to generate extra files during development and build time. These files will be available in virtual filesystem and can be used in plugins, layouts, components, etc. `addTemplate` and `addTypeTemplate` allow you to add templates to the Nuxt application. `updateTemplates` allows you to regenerate templates that match the filter.

## `addTemplate`

Renders given template during build into the virtual file system, and optionally to disk in the project `buildDir`

### Usage

```tstwoslash
import { addTemplate, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

export default defineNuxtModule({
  setup (options, nuxt) {
    const globalMeta = defu(nuxt.options.app.head, {
      charset: options.charset,
      viewport: options.viewport,
    })

    addTemplate({
      filename: 'meta.config.mjs',
      getContents: () => 'export default ' + JSON.stringify({ globalMeta, mixinKey: 'setup' }),
    })
  },
})
```

### Type

```tstwoslash
// @errors: 2391
import type { NuxtTemplate, ResolvedNuxtTemplate } from '@nuxt/schema'
// ---cut---
function addTemplate (template: NuxtTemplate | string): ResolvedNuxtTemplate
```

### Parameters

**template**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        src
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Path to the template. If <code>
        src
      </code>
      
       is not provided, <code>
        getContents
      </code>
      
       must be provided instead.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        filename
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Filename of the template. If <code>
        filename
      </code>
      
       is not provided, it will be generated from the <code>
        src
      </code>
      
       path. In this case, the <code>
        src
      </code>
      
       option is required.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dst
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Path to the destination file. If <code>
        dst
      </code>
      
       is not provided, it will be generated from the <code>
        filename
      </code>
      
       path and nuxt <code>
        buildDir
      </code>
      
       option.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      <code>
        Options
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Options to pass to the template.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getContents
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          data
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Options
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="s52Pk">
          Promise
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          >
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      A function that will be called with the <code>
        options
      </code>
      
       object. It should return a string or a promise that resolves to a string. If <code>
        src
      </code>
      
       is provided, this function will be ignored.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        write
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If set to <code>
        true
      </code>
      
      , the template will be written to the destination file. Otherwise, the template will be used only in virtual filesystem.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dependsOn
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          Array
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sDfIl">
          '
        </span>
        
        <span class="sGFVr">
          pages
        </span>
        
        <span class="sDfIl">
          '
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sDfIl">
          '
        </span>
        
        <span class="sGFVr">
          plugins
        </span>
        
        <span class="sDfIl">
          '
        </span>
        
        <span class="sDfIl">
          >
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          (
        </span>
        
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          change
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="sDfIl">
          {
        </span>
        
        <span class="sRlkE">
          event
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="sRlkE">
          path
        </span>
        
        <span class="sDfIl">
          },
        </span>
        
        <span class="s1nJG">
          ctx
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="sDfIl">
          {
        </span>
        
        <span class="sRlkE">
          nuxt
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="sRlkE">
          app
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="sRlkE">
          options
        </span>
        
        <span class="sDfIl">
          })
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          boolean)
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      The watched inputs the output of the template can depend on, beyond <code>
        nuxt.options
      </code>
      
       and the resolved structure of the app. Set to <code>
        []
      </code>
      
       if the template never reads the contents of a watched file, so that Nuxt can skip recompiling it in dev mode when a file changes without any file being added or removed. List well-known keys if the template reads those sources, or pass a function to decide per change. A template that declares nothing is regenerated on every change.
    </td>
  </tr>
</tbody>
</table>

### Example

#### Creating a Virtual File for Runtime Plugin

In this example, we merge an object inside a module and consume the result in a runtime plugin.

```ts [module.ts]twoslash
import { addTemplate, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

export default defineNuxtModule({
  setup (options, nuxt) {
    const globalMeta = defu(nuxt.options.app.head, {
      charset: options.charset,
      viewport: options.viewport,
    })

    addTemplate({
      filename: 'meta.config.mjs',
      getContents: () => 'export default ' + JSON.stringify({ globalMeta, mixinKey: 'setup' }),
    })
  },
})
```

#### Skipping Regeneration in Development

By default, Nuxt recompiles a template on every watched file event because it cannot know what
the template reads. If your template is built only from configuration and from which files exist,
declare that so Nuxt can leave it alone when a file is edited:

```ts [module.ts]twoslash
import { addTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    addTemplate({
      filename: 'my-module/config.mjs',
      dependsOn: [],
      getContents: () => 'export default ' + JSON.stringify(options),
    })
  },
})
```

If the template reads well-known sources, declare them by key:

```ts
addTemplate({
  filename: 'my-module/routes.mjs',
  dependsOn: ['pages'],
  getContents: ({ app }) => generateRoutes(app.pages),
})
```

And if it reads files Nuxt doesn't know about, say a set of YAML files you scan yourself, pass a
function instead:

```ts
addTemplate({
  filename: 'my-module/content.mjs',
  dependsOn: ({ path }) => path.endsWith('.yaml'),
  getContents: () => generateContents(),
})
```

In the module above, we generate a virtual file named `meta.config.mjs`. In the runtime plugin, we can import it using the `#build` alias:

```ts [runtime/plugin.ts]
import { createHead as createServerHead } from '@unhead/vue/server'
import { createHead as createClientHead } from '@unhead/vue/client'
import { defineNuxtPlugin } from '#imports'
// @ts-expect-error - virtual file
import metaConfig from '#build/meta.config.mjs'

export default defineNuxtPlugin((nuxtApp) => {
  const createHead = import.meta.server ? createServerHead : createClientHead
  const head = createHead()
  head.push(metaConfig.globalMeta)

  nuxtApp.vueApp.use(head)
})
```

## `addTypeTemplate`

Renders given template during build into the project buildDir, then registers it as types.

### Usage

```tstwoslash
import { addTypeTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addTypeTemplate({
      filename: 'types/markdown.d.ts',
      getContents: () => `declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}`,
    })
  },
})
```

### Type

```ts
function addTypeTemplate (template: NuxtTypeTemplate | string, context?: { nitro?: boolean, nuxt?: boolean }): ResolvedNuxtTemplate
```

### Parameters

**template**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        src
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Path to the template. If <code>
        src
      </code>
      
       is not provided, <code>
        getContents
      </code>
      
       must be provided instead.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        filename
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Filename of the template. If <code>
        filename
      </code>
      
       is not provided, it will be generated from the <code>
        src
      </code>
      
       path. In this case, the <code>
        src
      </code>
      
       option is required.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dst
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Path to the destination file. If <code>
        dst
      </code>
      
       is not provided, it will be generated from the <code>
        filename
      </code>
      
       path and nuxt <code>
        buildDir
      </code>
      
       option.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      <code>
        Options
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Options to pass to the template.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getContents
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          data
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Options
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="s52Pk">
          Promise
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          >
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      A function that will be called with the <code>
        options
      </code>
      
       object. It should return a string or a promise that resolves to a string. If <code>
        src
      </code>
      
       is provided, this function will be ignored.
    </td>
  </tr>
</tbody>
</table>

**context**: An optional context object can be passed to control where the type is added. If omitted, the type will only be added to the Nuxt context. This object supports the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        nuxt
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If set to <code>
        true
      </code>
      
      , the type will be added to the Nuxt context.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nitro
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If set to <code>
        true
      </code>
      
      , the type will be added to the Nitro context.
    </td>
  </tr>
</tbody>
</table>

### Example

#### Adding Type Templates to the Nitro Context

By default, －－ only adds the type declarations to the Nuxt context. To also add them to the Nitro context, set nitro to true.

```tstwoslash
import { addTypeTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addTypeTemplate({
      filename: 'types/auth.d.ts',
      getContents: () => `declare module '#auth-utils' {
  interface User {
    id: string;
    name: string;
  }

}`,
    }, {
      nitro: true,
    })
  },
})
```

This allows the `#auth-utils` module to be used within the Nitro context.

```ts [server/api/auth.ts]
import type { User } from '#auth-utils'

export default eventHandler(() => {
  const user: User = {
    id: '123',
    name: 'John Doe',
  }

  // do something with the user

  return user
})
```

## `addServerTemplate`

Adds a virtual file that can be used within the Nuxt Nitro server build.

### Usage

```tstwoslash
import { addServerTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addServerTemplate({
      filename: '#my-module/test.mjs',
      getContents () {
        return 'export const test = 123'
      },
    })
  },
})
```

### Type

```tstwoslash
// @errors: 2391
import type { NuxtServerTemplate } from '@nuxt/schema'
// ---cut---
function addServerTemplate (template: NuxtServerTemplate): NuxtServerTemplate
```

### Parameters

**template**: A template object. It must have the following properties:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        filename
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Filename of the template.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getContents
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          ()
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="s52Pk">
          Promise
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          >
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      A function that will be called with the <code>
        options
      </code>
      
       object. It should return a string or a promise that resolves to a string.
    </td>
  </tr>
</tbody>
</table>

### Example

### Creating a Virtual File for Nitro

In this example, we create a virtual file that can be used within the Nuxt Nitro server build.

```tstwoslash
import { addServerTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addServerTemplate({
      filename: '#my-module/test.mjs',
      getContents () {
        return 'export const test = 123'
      },
    })
  },
})
```

And then in a runtime file

```ts [server/api/test.ts]
import { test } from '#my-module/test.js'

export default eventHandler(() => {
  return test
})
```

## `updateTemplates`

Regenerate templates that match the filter. If no filter is provided, all templates will be regenerated.

### Usage

```ts
import { defineNuxtModule, updateTemplates } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup (options, nuxt) {
    const updateTemplatePaths = [
      resolve(nuxt.options.srcDir, 'pages'),
    ]
    // watch and rebuild routes template list when one of the pages changes
    nuxt.hook('builder:watch', async (event, relativePath) => {
      if (event === 'change') {
        return
      }

      const path = resolve(nuxt.options.srcDir, relativePath)
      if (updateTemplatePaths.some(dir => path.startsWith(dir))) {
        await updateTemplates({
          filter: template => template.filename === 'routes.mjs',
        })
      }
    })
  },
})
```

### Type

```ts
async function updateTemplates (options: UpdateTemplatesOptions): void
```

### Parameters

**options**: Options to pass to the template. This object can have the following property:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        filter
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          template
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          ResolvedNuxtTemplate
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          boolean
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      A function that will be called with the <code>
        template
      </code>
      
       object. It should return a boolean indicating whether the template should be regenerated. If <code>
        filter
      </code>
      
       is not provided, all templates will be regenerated.
    </td>
  </tr>
</tbody>
</table>

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/template.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
