---
title: "Layout"
description: "Nuxt Kit provides a set of utilities to help you work with layouts."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/layout"
---
# Layout

> Nuxt Kit provides a set of utilities to help you work with layouts.

Layouts is used to be a wrapper around your pages. It can be used to wrap your pages with common components, for example, a header and a footer. Layouts can be registered using `addLayout` utility.

## `addLayout`

Register template as layout and add it to the layouts.

::note
In Nuxt 2 `error` layout can also be registered using this utility. In Nuxt 3+ `error` layout [replaced](https://nuxt.com/docs/4.x/getting-started/error-handling#error-page) with `error.vue` page in project root.
::

### Usage

```tstwoslash
import { addLayout, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addLayout({
      src: resolve('templates/custom-layout.ts'),
      filename: 'custom-layout.ts',
    }, 'custom')
  },
})
```

### Type

```ts
function addLayout (layout: NuxtTemplate | string, name: string): void
```

### Parameters

**layout**: A template object or a string with the path to the template. If a string is provided, it will be converted to a template object with `src` set to the string value. If a template object is provided, it must have the following properties:

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
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          Record
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="sZSNi">
          any
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
</tbody>
</table>

**name**: The name to register the layout under (e.g., `default`, `custom`, etc.).

### Example

This will register a layout named `custom` that wraps pages with a header and footer.

```tstwoslash
import { addLayout, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addLayout({
      write: true,
      filename: 'my-layout.vue',
      getContents: () => `<template>
  <div>
    <header>My Header</header>
    <slot />
    <footer>My Footer</footer>
  </div>
</template>`,
    }, 'custom')
  },
})
```

You can then use this layout in your pages:

```vue [app/pages/about.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div>About Page</div>
</template>
```

::warning
Due to the lack of support for virtual `.vue` files by `@vitejs/plugin-vue`, you can work around this limitation by passing `write: true` to the first argument of `addLayout`.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/layout.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
