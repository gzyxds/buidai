---
title: "Components"
description: "Nuxt Kit provides a set of utilities to help you work with components. You can register components globally or locally, and also add directories to be scanned for components."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/components"
---
# Components

> Nuxt Kit provides a set of utilities to help you work with components. You can register components globally or locally, and also add directories to be scanned for components.

Components are the building blocks of your Nuxt application. They are reusable Vue instances that can be used to create a user interface. In Nuxt, components from the components directory are automatically imported by default. However, if you need to import components from an alternative directory or wish to selectively import them as needed, `@nuxt/kit` provides the `addComponentsDir` and `addComponent` methods. These utils allow you to customize the component configuration to better suit your needs.

::tip{icon="i-lucide-video" target="_blank" to="https://vueschool.io/lessons/injecting-components-and-component-directories?friend=nuxt"}
Watch Vue School video about injecting components.
::

## `addComponentsDir`

Register a directory to be scanned for components and imported only when used. Keep in mind, that this does not register components globally, until you specify `global: true` option.

### Usage

```ts
export default defineNuxtModule({
  meta: {
    name: '@nuxt/ui',
    configKey: 'ui',
  },
  setup () {
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: 'U',
      pathPrefix: false,
    })
  },
})
```

### Type

```ts
function addComponentsDir (dir: ComponentsDir, opts: { prepend?: boolean } = {}): void
```

### Parameters

`dir` An object with the following properties:

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
        path
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
      Path (absolute or relative) to the directory containing your components. You can use Nuxt aliases (~ or @) to refer to directories inside project or directly use an npm package path similar to require.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pattern
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
        false
      </code>
    </td>
    
    <td>
      Accept Pattern that will be run against specified path.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        ignore
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
      Ignore patterns that will be run against specified path.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        prefix
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
      Prefix all matched components with this string.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pathPrefix
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
      Prefix component name by its path.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        prefetch
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
      These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on <a href="https://webpack.js.org/api/module-methods/#magic-comments" rel="nofollow">
        webpack documentation
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        preload
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
      These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on <a href="https://webpack.js.org/api/module-methods/#magic-comments" rel="nofollow">
        webpack documentation
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        isAsync
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
      This flag indicates, component should be loaded async (with a separate chunk) regardless of using Lazy prefix or not.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        extendComponent
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          component
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Component
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="s52Pk">
          Promise
        </span>
        
        <span class="sDfIl">
          <
        </span>
        
        <span class="sZSNi">
          Component
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sDfIl">
          void>
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          (Component
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sDfIl">
          void
        </span>
        
        <span class="sZSNi">
          )
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      A function that will be called for each component found in the directory. It accepts a component object and should return a component object or a promise that resolves to a component object.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        global
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
      If enabled, registers components to be globally available.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        island
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
      If enabled, registers components as islands. You can read more about islands in <a href="https://nuxt.com/docs/4.x/api/components/nuxt-island">
        <code>
          <NuxtIsland/>
        </code>
      </a>
      
       component description.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        watch
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
      Watch specified path for changes, including file additions and file deletions.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        extensions
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
      Extensions supported by Nuxt builder.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        transpile
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          '
        </span>
        
        <span class="sGFVr">
          auto
        </span>
        
        <span class="sDfIl">
          '
        </span>
        
        <span class="sDfIl">
          |
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
      Transpile specified path using build.transpile. If set to <code>
        'auto'
      </code>
      
      , it will set <code>
        transpile: true
      </code>
      
       if <code>
        node_modules/
      </code>
      
       is in path.
    </td>
  </tr>
</tbody>
</table>

`opts`

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
        prepend
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
      
      , the directory will be prepended to the array with <code>
        unshift()
      </code>
      
       instead of <code>
        push()
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

## `addComponent`

Register a component to be automatically imported.

### Usage

```ts
import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@nuxt/image',
    configKey: 'image',
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'NuxtImg',
      filePath: resolver.resolve('./runtime/components/NuxtImg.vue'),
    })

    addComponent({
      name: 'NuxtPicture',
      filePath: resolver.resolve('./runtime/components/NuxtPicture.vue'),
    })
  },
})
```

### Type

```ts
function addComponent (options: AddComponentOptions): void
```

### Parameters

`options`: An object with the following properties:

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
      Component name.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        filePath
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
      Path to the component.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        declarationPath
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
      Path to component's declaration file. It is used to generate components' <a href="https://nuxt.com/docs/4.x/api/kit/templates#addtypetemplate">
        type templates
      </a>
      
      ; if not provided, <code>
        filePath
      </code>
      
       is used instead.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pascalName
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
      Pascal case component name. If not provided, it will be generated from the component name.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        kebabName
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
      Kebab case component name. If not provided, it will be generated from the component name.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        export
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
      Specify named or default export. If not provided, it will be set to <code>
        'default'
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        shortPath
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
      Short path to the component. If not provided, it will be generated from the component path.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        chunkName
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
      Chunk name for the component. If not provided, it will be generated from the component name.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        prefetch
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
      These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on <a href="https://webpack.js.org/api/module-methods/#magic-comments" rel="nofollow">
        webpack documentation
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        preload
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
      These properties (prefetch/preload) are used in production to configure how components with Lazy prefix are handled by webpack via its magic comments. Learn more on <a href="https://webpack.js.org/api/module-methods/#magic-comments" rel="nofollow">
        webpack documentation
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        global
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
      If enabled, registers component to be globally available.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        island
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
      If enabled, registers component as island. You can read more about islands in <a href="https://nuxt.com/docs/4.x/api/components/nuxt-island">
        <code>
          <NuxtIsland/>
        </code>
      </a>
      
       component description.
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
          client
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
          all
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
      This options indicates if component should render on client, server or both. By default, it will render on both client and server.
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
      Priority of the component, if multiple components have the same name, the one with the highest priority will be used.
    </td>
  </tr>
</tbody>
</table>

### Example

If you want to auto-import a component from an npm package, and the component is a named export (rather than the default), you can use the `export` option to specify it.

```ts
import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup () {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'
    addComponent({
      name: 'MyAutoImportedComponent',
      export: 'MyComponent',
      filePath: 'my-npm-package',
    })
  },
})
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/kit/src/components.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
