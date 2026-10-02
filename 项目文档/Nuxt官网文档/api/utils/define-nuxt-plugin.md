---
title: "defineNuxtPlugin"
description: "defineNuxtPlugin() is a helper function for creating Nuxt plugins."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/define-nuxt-plugin"
---
# defineNuxtPlugin

> defineNuxtPlugin() is a helper function for creating Nuxt plugins.

`defineNuxtPlugin` is a helper function for creating Nuxt plugins with enhanced functionality and type safety. This utility normalizes different plugin formats into a consistent structure that works seamlessly within Nuxt's plugin system.

```ts [plugins/hello.ts]twoslash
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
})
```

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/app/plugins#creating-plugins"}## Type

```ts [Signature]
export function defineNuxtPlugin<T extends Record<string, unknown>> (plugin: Plugin<T> | ObjectPlugin<T>): Plugin<T> & ObjectPlugin<T>

type Plugin<T> = (nuxt: NuxtApp) => Promise<void> | Promise<{ provide?: T }> | void | { provide?: T }

interface ObjectPlugin<T> {
  name?: string
  enforce?: 'pre' | 'default' | 'post'
  dependsOn?: string[]
  order?: number
  parallel?: boolean
  setup?: Plugin<T>
  hooks?: Partial<RuntimeNuxtHooks>
  env?: {
    islands?: boolean
  }
}
```

## Parameters

**plugin**: A plugin can be defined in two ways:

1. **Function Plugin**: A function that receives the [`NuxtApp`](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxtapp-interface) instance and can return a promise with a potential object with a [`provide`](https://nuxt.com/docs/4.x/directory-structure/app/plugins#providing-helpers) property if you want to provide a helper on [`NuxtApp`](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxtapp-interface) instance.
2. **Object Plugin**: An object that can include various properties to configure the plugin's behavior, such as `name`, `enforce`, `dependsOn`, `order`, `parallel`, `setup`, `hooks`, and `env`.

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
        false
      </code>
    </td>
    
    <td>
      Optional name for the plugin, useful for debugging and dependency management.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        enforce
      </code>
    </td>
    
    <td>
      <code>
        'pre'
      </code>
      
       | <code>
        'default'
      </code>
      
       | <code>
        'post'
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Controls when the plugin runs relative to other plugins.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dependsOn
      </code>
    </td>
    
    <td>
      <code>
        string[]
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Array of plugin names this plugin depends on. Ensures proper execution order.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        order
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
      This allows more granular control over plugin order and should only be used by advanced users. <strong>
        It overrides the value of <code>
          enforce
        </code>
        
         and is used to sort plugins.
      </strong>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        parallel
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
      Whether to execute the plugin in parallel with other parallel plugins.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        setup
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          Plugin
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          T
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
      The main plugin function, equivalent to a function plugin.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        hooks
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          Partial
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          RuntimeNuxtHooks
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
      Nuxt app runtime hooks to register directly.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        env
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          {
        </span>
        
        <span class="sZSNi">
          islands
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
      Set this value to <code>
        false
      </code>
      
       if you don't want the plugin to run when rendering server-only or island components.
    </td>
  </tr>
</tbody>
</table>

:video-accordion{title="Watch a video from Alexander Lichter about the Object Syntax for Nuxt plugins" video-id="2aXZyXB1QGQ"}## Example

### Basic Usage

The example below demonstrates a simple plugin that adds global functionality:

```ts [plugins/hello.ts]twoslash
export default defineNuxtPlugin((nuxtApp) => {
  // Add a global method
  return {
    provide: {
      hello: (name: string) => `Hello ${name}!`,
    },
  }
})
```

### Object Syntax Plugin

The example below shows the object syntax with advanced configuration:

```ts [plugins/advanced.ts]twoslash
export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre',
  async setup (nuxtApp) {
    // Plugin setup logic
    const data = await $fetch('/api/config')

    return {
      provide: {
        config: data,
      },
    }
  },
  hooks: {
    'app:created' () {
      console.log('App created!')
    },
  },
})
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
