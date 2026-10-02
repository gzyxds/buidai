---
title: "Plugins"
description: "Nuxt Kit provides a set of utilities to help you create and use plugins. You can add plugins or plugin templates to your module using these functions."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/plugins"
---
# Plugins

> Nuxt Kit provides a set of utilities to help you create and use plugins. You can add plugins or plugin templates to your module using these functions.

Plugins are self-contained code that usually add app-level functionality to Vue. In Nuxt, plugins are automatically imported from the `app/plugins/` directory. However, if you need to ship a plugin with your module, Nuxt Kit provides the `addPlugin` and `addPluginTemplate` methods. These utils allow you to customize the plugin configuration to better suit your needs.

## `addPlugin`

Registers a Nuxt plugin and adds it to the plugins array.

::tip{icon="i-lucide-video" target="_blank" to="https://vueschool.io/lessons/injecting-plugins?friend=nuxt"}
Watch Vue School video about `addPlugin`.
::

### Usage

```tstwoslash
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('runtime/plugin.js'),
      mode: 'client',
    })
  },
})
```

### Type

```ts
function addPlugin (plugin: NuxtPlugin | string, options?: AddPluginOptions): NuxtPlugin
```

### Parameters

**plugin**: A plugin object or a string with the path to the plugin. If a string is provided, it will be converted to a plugin object with `src` set to the string value.

If a plugin object is provided, it must have the following properties:

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
        true
      </code>
    </td>
    
    <td>
      Path to the plugin file.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        mode
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          '
        </span>
        
        <span class="sGFVr">
          all
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
          server
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
          client
        </span>
        
        <span class="sDfIl">
          '
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If set to <code>
        'all'
      </code>
      
      , the plugin will be included in both client and server bundles. If set to <code>
        'server'
      </code>
      
      , the plugin will only be included in the server bundle. If set to <code>
        'client'
      </code>
      
      , the plugin will only be included in the client bundle. You can also use <code>
        .client
      </code>
      
       and <code>
        .server
      </code>
      
       modifiers when specifying <code>
        src
      </code>
      
       option to use plugin only in client or server side.
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
      Order of the plugin. This allows more granular control over plugin order and should only be used by advanced users. Lower numbers run first, and user plugins default to <code>
        0
      </code>
      
      . It's recommended to set <code>
        order
      </code>
      
       to a number between <code>
        -20
      </code>
      
       for <code>
        pre
      </code>
      
      -plugins (plugins that run before Nuxt plugins) and <code>
        20
      </code>
      
       for <code>
        post
      </code>
      
      -plugins (plugins that run after Nuxt plugins).
    </td>
  </tr>
</tbody>
</table>

::warning
Avoid using `order` unless necessary. Use `append` if you simply need to register plugins after Nuxt defaults.
::

**options**: Optional object with the following properties:

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
        append
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
      If <code>
        true
      </code>
      
      , the plugin will be appended to the plugins array. If <code>
        false
      </code>
      
      , it will be prepended. Defaults to <code>
        false
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

### Example

::code-group
```ts [module.ts]
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('runtime/plugin.js'),
      mode: 'client',
    })
  },
})
```

```ts [runtime/plugin.ts]
export default defineNuxtPlugin((nuxtApp) => {
  const colorMode = useColorMode()

  nuxtApp.hook('app:mounted', () => {
    if (colorMode.preference !== 'dark') {
      colorMode.preference = 'dark'
    }
  })
})
```
::

## `addPluginTemplate`

Adds a template and registers as a nuxt plugin. This is useful for plugins that need to generate code at build time.

::tip{icon="i-lucide-video" target="_blank" to="https://vueschool.io/lessons/injecting-plugin-templates?friend=nuxt"}
Watch Vue School video about `addPluginTemplate`.
::

### Usage

```tstwoslash
import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options) {
    addPluginTemplate({
      filename: 'module-plugin.mjs',
      getContents: () => `import { defineNuxtPlugin } from '#app/nuxt'
export default defineNuxtPlugin({
  name: 'module-plugin',
  setup (nuxtApp) {
    ${options.log ? 'console.log("Plugin install")' : ''}
  }
})`,
    })
  },
})
```

### Type

```ts
function addPluginTemplate (pluginOptions: NuxtPluginTemplate, options?: AddPluginOptions): NuxtPlugin
```

### Parameters

**pluginOptions**: A plugin template object with the following properties:

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
        mode
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          '
        </span>
        
        <span class="sGFVr">
          all
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
          server
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
          client
        </span>
        
        <span class="sDfIl">
          '
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If set to <code>
        'all'
      </code>
      
      , the plugin will be included in both client and server bundles. If set to <code>
        'server'
      </code>
      
      , the plugin will only be included in the server bundle. If set to <code>
        'client'
      </code>
      
      , the plugin will only be included in the client bundle. You can also use <code>
        .client
      </code>
      
       and <code>
        .server
      </code>
      
       modifiers when specifying <code>
        src
      </code>
      
       option to use plugin only in client or server side.
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
          :
        </span>
        
        <span class="s52Pk">
          Record
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="s52Pk">
          string
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="s52Pk">
          any
        </span>
        
        <span class="sDfIl">
          >)
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
      Order of the plugin. This allows more granular control over plugin order and should only be used by advanced users. Lower numbers run first, and user plugins default to <code>
        0
      </code>
      
      . It's recommended to set <code>
        order
      </code>
      
       to a number between <code>
        -20
      </code>
      
       for <code>
        pre
      </code>
      
      -plugins (plugins that run before Nuxt plugins) and <code>
        20
      </code>
      
       for <code>
        post
      </code>
      
      -plugins (plugins that run after Nuxt plugins).
    </td>
  </tr>
</tbody>
</table>

::warning
Prefer using `getContents` for dynamic plugin generation. Avoid setting `order` unless necessary.
::

**options**: Optional object with the following properties:

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
        append
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
      If <code>
        true
      </code>
      
      , the plugin will be appended to the plugins array. If <code>
        false
      </code>
      
      , it will be prepended. Defaults to <code>
        false
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

### Example

#### Generate a plugin template with different options

Use `addPluginTemplate` when you need to generate plugin code dynamically at build time. This allows you to generate different plugin contents based on the options passed to it. For example, Nuxt internally uses this function to generate Vue app configurations.

```ts [module.ts]twoslash
import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (_, nuxt) {
    if (nuxt.options.vue.config && Object.values(nuxt.options.vue.config).some(v => v !== null && v !== undefined)) {
      addPluginTemplate({
        filename: 'vue-app-config.mjs',
        write: true,
        getContents: () => `import { defineNuxtPlugin } from '#app/nuxt'
export default defineNuxtPlugin({
  name: 'nuxt:vue-app-config',
  enforce: 'pre',
  setup (nuxtApp) {
    ${Object.keys(nuxt.options.vue.config!)
        .map(k => `nuxtApp.vueApp.config[${JSON.stringify(k)}] = ${JSON.stringify(nuxt.options.vue.config![k as 'idPrefix'])}`)
        .join('\n')
    }
  }
})`,
      })
    }
  },
})
```

This generates different plugin code depending on the provided configuration.

::code-group
```ts [nuxt.config.ts]
export default defineNuxtConfig({
  vue: {
    config: {
      idPrefix: 'nuxt',
    },
  },
})
```

```ts [#build/vue-app-config.mjs]
import { defineNuxtPlugin } from '#app/nuxt'

export default defineNuxtPlugin({
  name: 'nuxt:vue-app-config',
  enforce: 'pre',
  setup (nuxtApp) {
    nuxtApp.vueApp.config.idPrefix = 'nuxt'
  },
})
```
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/plugin.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
