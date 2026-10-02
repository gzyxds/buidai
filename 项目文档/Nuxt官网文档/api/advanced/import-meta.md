---
title: "Import meta"
description: "Understand where your code is running using `import.meta`."
canonical_url: "https://nuxt.com/docs/4.x/api/advanced/import-meta"
---
# Import meta

> Understand where your code is running using `import.meta`.

## The `import.meta` Object

With ES modules you can obtain some metadata from the code that imports or compiles your ES-module.
This is done through `import.meta`, which is an object that provides your code with this information.
Throughout the Nuxt documentation you may see snippets that use this already to figure out whether the
code is currently running on the client or server side.

::read-more{to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta"}
Read more about `import.meta`.
::

## Runtime (App) Properties

These values are statically injected and can be used for tree-shaking your runtime code.

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
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        import.meta.client
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when evaluated on the client side.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.browser
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when evaluated on the client side.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.server
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when evaluated on the server side.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.nitro
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when evaluated on the server side.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.dev
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when running the Nuxt dev server.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.envName
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v4.5
      </badge>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      The current Nuxt environment name, including custom values passed via <code>
        --envName
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.test
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when running in a test context.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.prerender
      </code>
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      True when rendering HTML on the server in the prerender stage of your build.
    </td>
  </tr>
</tbody>
</table>

## Builder Properties

These values are available both in modules and in your `nuxt.config`.

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
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        import.meta.env
      </code>
    </td>
    
    <td>
      object
    </td>
    
    <td>
      Equals <code>
        process.env
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import.meta.url
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Resolvable path for the current file.
    </td>
  </tr>
</tbody>
</table>

## Example

### Using `import.meta.url` to Resolve Files within Modules

```ts [modules/my-module/index.ts]
import { createResolver } from 'nuxt/kit'

// Resolve relative from the current file
const resolver = createResolver(import.meta.url)

export default defineNuxtModule({
  meta: { name: 'myModule' },
  setup () {
    addComponent({
      name: 'MyModuleComponent',
      // Resolves to '/modules/my-module/components/MyModuleComponent.vue'
      filePath: resolver.resolve('./components/MyModuleComponent.vue'),
    })
  },
})
```


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
