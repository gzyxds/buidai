---
title: "Auto-imports"
description: "Nuxt Kit provides a set of utilities to help you work with auto-imports. These functions allow you to register your own utils, composables and Vue APIs."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/autoimports"
---
# Auto-imports

> Nuxt Kit provides a set of utilities to help you work with auto-imports. These functions allow you to register your own utils, composables and Vue APIs.

Nuxt auto-imports helper functions, composables and Vue APIs to use across your application without explicitly importing them. Based on the directory structure, every Nuxt application can also use auto-imports for its own composables and plugins.

With Nuxt Kit you can also add your own auto-imports. `addImports` and `addImportsDir` allow you to add imports to the Nuxt application. `addImportsSources` allows you to add listed imports from 3rd party packages to the Nuxt application.

These utilities are powered by [`unimport`](https://github.com/unjs/unimport), which provides the underlying auto-import mechanism used in Nuxt.

::note
These functions are designed for registering your own utils, composables and Vue APIs. For pages, components and plugins, please refer to the specific sections: [Pages](https://nuxt.com/docs/4.x/api/kit/pages), [Components](https://nuxt.com/docs/4.x/api/kit/components), [Plugins](https://nuxt.com/docs/4.x/api/kit/plugins).
::

::tip{icon="i-lucide-video" target="_blank" to="https://vueschool.io/lessons/expanding-nuxt-s-auto-imports?friend=nuxt"}
Watch Vue School video about Auto-imports Nuxt Kit utilities.
::

## `addImports`

Add imports to the Nuxt application. It makes your imports available in the Nuxt app context without the need to import them manually.

::tip
To add imports for the Nitro server context, refer to the [`addServerImports`](https://nuxt.com/docs/4.x/api/kit/nitro#addserverimports) function.
::

### Usage

```tstwoslash
import { addImports, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    const names = [
      'useStoryblok',
      'useStoryblokApi',
      'useStoryblokBridge',
      'renderRichText',
      'RichTextSchema',
    ]

    names.forEach(name =>
      addImports({ name, as: name, from: '@storyblok/vue' }),
    )
  },
})
```

### Type

```ts
function addImports (imports: NuxtImport | NuxtImport[]): void
```

### Parameters

`imports`: An object or an array of objects with the following properties:

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
        name
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
      Import name to be detected.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        from
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
      Module specifier to import from.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        priority
      </code>
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Priority of the import; if multiple imports have the same name, the one with the highest priority will be used.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        disabled
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
      If this import is disabled.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        meta
      </code>
    </td>
    
    <td>
      <code>
        Record<string, any>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Metadata of the import.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        type
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
      If this import is a pure type import.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        typeFrom
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
      Use this as the <code>
        from
      </code>
      
       value when generating type declarations.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        as
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
      Import as this name.
    </td>
  </tr>
</tbody>
</table>

## `addImportsDir`

Add imports from a directory to the Nuxt application. It will automatically import all files from the directory and make them available in the Nuxt application without the need to import them manually.

### Usage

```tstwoslash
import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@vueuse/motion',
    configKey: 'motion',
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime/composables'))
  },
})
```

### Type

```ts
function addImportsDir (dirs: string | string[], options?: { prepend?: boolean }): void
```

### Parameters

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
        dirs
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          string
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          string[]
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      A string or an array of strings with the path to the directory to import from.
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
        <span class="sDfIl">
          {
        </span>
        
        <span class="sZSNi">
          prepend
        </span>
        
        <span class="sDfIl">
          ?:
        </span>
        
        <span class="sZSNi">
          boolean
        </span>
        
        <span class="sDfIl">
          }
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Options to pass to the import. If <code>
        prepend
      </code>
      
       is set to <code>
        true
      </code>
      
      , the imports will be prepended to the list of imports.
    </td>
  </tr>
</tbody>
</table>

## `addImportsSources`

Add listed imports to the Nuxt application.

### Usage

```tstwoslash
import { addImportsSources, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    addImportsSources([
      { package: '@vueuse/core' },
      {
        from: 'h3',
        imports: [
          'defineEventHandler',
          'getQuery',
          'getRouterParams',
          'readBody',
          'sendRedirect',
        ],
      },
    ])
  },
})
```

### Type

```ts
function addImportsSources (importSources: NuxtImportPresetSource | NuxtImportPresetSource[]): void
```

### Parameters

**importSources**: An object or an array of objects with the following properties:

- `NuxtImportPreset`

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
        from
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
      Module specifier to import from.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        imports
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          (NuxtImportEntry
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          NuxtImportPreset)[]
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      An array of entries, which can be import names, import objects or nested presets.
    </td>
  </tr>
</tbody>
</table>

- `NuxtPackageImportPreset`

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
        package
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
      Name of the package.
    </td>
  </tr>
</tbody>
</table>

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/imports.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
