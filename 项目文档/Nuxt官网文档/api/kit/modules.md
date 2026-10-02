---
title: "Modules"
description: "Nuxt Kit provides a set of utilities to help you create and use modules. You can use these utilities to create your own modules or to reuse existing modules."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/modules"
---
# Modules

> Nuxt Kit provides a set of utilities to help you create and use modules. You can use these utilities to create your own modules or to reuse existing modules.

Modules are the building blocks of Nuxt. Kit provides a set of utilities to help you create and use modules. You can use these utilities to create your own modules or to reuse existing modules. For example, you can use the `defineNuxtModule` function to define a module and specify dependencies using the `moduleDependencies` option.

## `defineNuxtModule`

Define a Nuxt module, automatically merging defaults with user provided options, installing any hooks that are provided, and calling an optional setup function for full control.

### Usage

```tstwoslash
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {
    enabled: true,
  },
  setup (options) {
    if (options.enabled) {
      console.log('My Nuxt module is enabled!')
    }
  },
})
```

### Type

```tstwoslash
// @errors: 2391
import type { ModuleDefinition, ModuleOptions, NuxtModule } from '@nuxt/schema'
// ---cut---
export function defineNuxtModule<TOptions extends ModuleOptions> (
  definition?: ModuleDefinition<TOptions, Partial<TOptions>, false> | NuxtModule<TOptions, Partial<TOptions>, false>,
): NuxtModule<TOptions, TOptions, false>

export function defineNuxtModule<TOptions extends ModuleOptions> (): {
  with: <TOptionsDefaults extends Partial<TOptions>> (
    definition: ModuleDefinition<TOptions, TOptionsDefaults, true> | NuxtModule<TOptions, TOptionsDefaults, true>,
  ) => NuxtModule<TOptions, TOptionsDefaults, true>
}
```

### Parameters

**definition**: A module definition object or a module function. The module definition object should contain the following properties:

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
        meta
      </code>
    </td>
    
    <td>
      <code>
        ModuleMeta
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Metadata of the module. It defines the module name, version, config key and compatibility.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        defaults
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sZSNi">
          T
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
          nuxt
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Nuxt
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          T)
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Default options for the module. If a function is provided, it will be called with the Nuxt instance as the first argument.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schema
      </code>
    </td>
    
    <td>
      <code>
        T
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Schema for the module options. If provided, options will be applied to the schema.
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
          NuxtHooks
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
      Hooks to be installed for the module. If provided, the module will install the hooks.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        moduleDependencies
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
          ModuleDependency
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
          nuxt
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Nuxt
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
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
          ModuleDependency
        </span>
        
        <span class="sDfIl">
          >
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
      Dependencies on other modules with version constraints and configuration. Can be an object or a function that receives the Nuxt instance. See <a href="https://nuxt.com/docs/4.x/api/kit/modules#specifying-module-dependencies">
        example
      </a>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        onInstall
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          nuxt
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Nuxt
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          Awaitable
        </span>
        
        <span class="sDfIl">
          <void>
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Lifecycle hook called when the module is first installed. Requires <code>
        meta.name
      </code>
      
       and <code>
        meta.version
      </code>
      
       to be defined.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        onUpgrade
      </code>
    </td>
    
    <td>
      <code className="language-ts shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight" language="ts" style="">
        <span class="sDfIl">
          (
        </span>
        
        <span class="s1nJG">
          nuxt
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Nuxt
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="s1nJG">
          options
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          T
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="s1nJG">
          previousVersion
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          string
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          Awaitable
        </span>
        
        <span class="sDfIl">
          <void>
        </span>
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Lifecycle hook called when the module is upgraded to a newer version. Requires <code>
        meta.name
      </code>
      
       and <code>
        meta.version
      </code>
      
       to be defined.
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
        <span class="sDfIl">
          (
        </span>
        
        <span class="s8R28">
          this
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          void
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="s1nJG">
          resolvedOptions
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          T
        </span>
        
        <span class="sDfIl">
          ,
        </span>
        
        <span class="s1nJG">
          nuxt
        </span>
        
        <span class="sDfIl">
          :
        </span>
        
        <span class="s52Pk">
          Nuxt
        </span>
        
        <span class="sDfIl">
          )
        </span>
        
        <span class="smZ93">
          =>
        </span>
        
        <span class="sZSNi">
          Awaitable
        </span>
        
        <span class="sDfIl">
          <void
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sbKd-">
          false
        </span>
        
        <span class="sDfIl">
          |
        </span>
        
        <span class="sZSNi">
          ModuleSetupInstallResult
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
      Setup function for the module. If provided, the module will call the setup function.
    </td>
  </tr>
</tbody>
</table>

### Example

#### Using `configKey` to Make Your Module Configurable

When defining a Nuxt module, you can set a `configKey` to specify how users should configure the module in their `nuxt.config`.

```ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {
    // Module options
    enabled: true,
  },
  setup (options) {
    if (options.enabled) {
      console.log('My Nuxt module is enabled!')
    }
  },
})
```

Users can provide options for this module under the corresponding key in `nuxt.config`.

```ts
export default defineNuxtConfig({
  myModule: {
    enabled: false,
  },
})
```

Users can also completely disable a module by setting the config key to `false`. This prevents the module's setup function from running while still generating types for module options.

```ts
export default defineNuxtConfig({
  // Disable the module entirely
  myModule: false,
})
```

::tip
This is particularly useful when you want to disable modules inherited from [Nuxt layers](https://nuxt.com/docs/4.x/guide/going-further/layers#disabling-modules-from-layers).
::

#### Defining Module Compatibility Requirements

If you're developing a Nuxt module and using APIs that are only supported in specific Nuxt versions, it's highly recommended to include `compatibility.nuxt`.

```ts
export default defineNuxtModule({
  meta: {
    name: '@nuxt/icon',
    configKey: 'icon',
    compatibility: {
      // Required nuxt version in semver format.
      nuxt: '>=3.0.0', // or use '^3.0.0'
    },
  },
  setup () {
    const resolver = createResolver(import.meta.url)
    // Implement
  },
})
```

If the user tries to use your module with an incompatible Nuxt version, they will receive a warning in the console.

```terminal
WARN  Module @nuxt/icon is disabled due to incompatibility issues:
 - [nuxt] Nuxt version ^3.1.0 is required but currently using 3.0.0
```

#### Type Safety for Resolved Options with `.with()`

When you need type safety for your resolved/merged module options, you can use the `.with()` method. This enables TypeScript to properly infer the relationship between your module's defaults and the final resolved options that your setup function receives.

```ts
import { defineNuxtModule } from '@nuxt/kit'

// Define your module options interface
interface ModuleOptions {
  apiKey: string
  baseURL: string
  timeout?: number
  retries?: number
}

export default defineNuxtModule<ModuleOptions>().with({
  meta: {
    name: '@nuxtjs/my-api',
    configKey: 'myApi',
  },
  defaults: {
    baseURL: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
  },
  setup (resolvedOptions, nuxt) {
    // resolvedOptions is properly typed as:
    // {
    //   apiKey: string          // Required, no default provided
    //   baseURL: string         // Required, has default value
    //   timeout: number         // Optional, has default value
    //   retries: number         // Optional, has default value
    // }

    console.log(resolvedOptions.baseURL) // ✅ TypeScript knows this is always defined
    console.log(resolvedOptions.timeout) // ✅ TypeScript knows this is always defined
    console.log(resolvedOptions.retries) // ✅ TypeScript knows this is always defined
  },
})
```

Without using `.with()`, the `resolvedOptions` parameter would be typed as the raw `ModuleOptions` interface, where `timeout` and `retries` could be `undefined` even when defaults are provided. The `.with()` method enables TypeScript to understand that default values make those properties non-optional in the resolved options.

#### Using Lifecycle Hooks for Module Installation and Upgrade

You can define lifecycle hooks that run when your module is first installed or upgraded to a new version. These hooks are useful for performing one-time setup tasks, database migrations, or cleanup operations.

::important
For lifecycle hooks to work, you **must** provide both `meta.name` and `meta.version` in your module definition. The hooks use these values to track the module's installation state in the project's `.nuxtrc` file.
::

Lifecycle hooks run before the main `setup` function, and if a hook throws an error, it's logged but doesn't stop the build process.

**onInstall** runs only once when the module is first added to a project.

**onUpgrade** runs each time the module version increases (using semver comparison) — but only once for each version bump.

##### Example

```ts
import { defineNuxtModule } from '@nuxt/kit'
import { isLess } from 'verkit'

export default defineNuxtModule({
  meta: {
    name: 'my-awesome-module',
    version: '1.2.0', // Required for lifecycle hooks
    configKey: 'myAwesomeModule',
  },
  defaults: {
    apiKey: '',
    enabled: true,
  },

  onInstall (nuxt) {
    // This runs only when the module is first installed
    console.log('Setting up my-awesome-module for the first time!')

    // You might want to:
    // - Create initial configuration files
    // - Set up database schemas
    // - Display welcome messages
    // - Perform initial data migration
  },

  onUpgrade (nuxt, options, previousVersion) {
    // This runs when the module is upgraded to a newer version
    console.log(`Upgrading my-awesome-module from ${previousVersion} to 1.2.0`)

    // You might want to:
    // - Migrate configuration files
    // - Update database schemas
    // - Clean up deprecated files
    // - Display upgrade notes

    if (isLess(previousVersion, '1.1.0')) {
      console.log('⚠️  Breaking changes in 1.1.0 - please check the migration guide')
    }
  },

  setup (options, nuxt) {
    // Regular setup logic runs on every build
    if (options.enabled) {
      // Configure the module
    }
  },
})
```

#### Specifying Module Dependencies

You can use the `moduleDependencies` option to declare dependencies on other modules. This provides a robust way to ensure proper setup order, version compatibility, and configuration management.

The `moduleDependencies` option can be either an object or a function that receives the Nuxt instance:

##### Example

```ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
  },
  moduleDependencies: {
    '@nuxtjs/tailwindcss': {
      // Specify a version constraint (semver format)
      version: '>=6.0.0',
      // Configuration that overrides user settings
      overrides: {
        exposeConfig: true,
      },
      // Configuration that sets defaults but respects user settings
      defaults: {
        config: {
          darkMode: 'class',
        },
      },
    },
    '@nuxtjs/fontaine': {
      // Optional dependencies won't be installed but ensure that options
      // can be set if they _are_ installed
      optional: true,
      defaults: {
        fonts: [
          {
            family: 'Roboto',
            fallbacks: ['Impact'],
          },
        ],
      },
    },
  },
  setup (options, nuxt) {

  },
})
```

You can also use a function to dynamically determine dependencies based on the Nuxt configuration:

```ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
  },
  moduleDependencies (nuxt) {
    const dependencies: Record<string, any> = {
      '@nuxtjs/tailwindcss': {
        version: '>=6.0.0',
      },
    }

    // Conditionally add dependencies based on Nuxt config
    if (nuxt.options.experimental?.someFeature) {
      dependencies['@nuxtjs/fontaine'] = {
        optional: true,
      }
    }

    return dependencies
  },
  setup (options, nuxt) {
    // Your setup logic runs after all dependencies are initialized
  },
})
```

## `installModule`

::callout{type="warning"}
**Deprecated:** Use the [`moduleDependencies`](https://nuxt.com/docs/4.x/api/kit/modules#specifying-module-dependencies) option in `defineNuxtModule` instead. The `installModule` function will be removed (or may become non-blocking) in a future version.
::

Install specified Nuxt module programmatically. This is helpful when your module depends on other modules. You can pass the module options as an object to `inlineOptions` and they will be passed to the module's `setup` function.

### Usage

```tstwoslash
import { defineNuxtModule, installModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup () {
    // will install @nuxtjs/fontaine with Roboto font and Impact fallback
    await installModule('@nuxtjs/fontaine', {
      // module configuration
      fonts: [
        {
          family: 'Roboto',
          fallbacks: ['Impact'],
          fallbackName: 'fallback-a',
        },
      ],
    })
  },
})
```

### Type

```ts
async function installModule (moduleToInstall: string | NuxtModule, inlineOptions?: any, nuxt?: Nuxt)
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
        moduleToInstall
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
          NuxtModule
        </span>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      The module to install. Can be either a string with the module name or a module object itself.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        inlineOptions
      </code>
    </td>
    
    <td>
      <code>
        any
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      An object with the module options to be passed to the module's <code>
        setup
      </code>
      
       function.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nuxt
      </code>
    </td>
    
    <td>
      <code>
        Nuxt
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Nuxt instance. If not provided, it will be retrieved from the context via <code>
        useNuxt()
      </code>
      
       call.
    </td>
  </tr>
</tbody>
</table>

### Example

```ts
import { defineNuxtModule, installModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup (options, nuxt) {
    // will install @nuxtjs/fontaine with Roboto font and Impact fallback
    await installModule('@nuxtjs/fontaine', {
      // module configuration
      fonts: [
        {
          family: 'Roboto',
          fallbacks: ['Impact'],
          fallbackName: 'fallback-a',
        },
      ],
    })
  },
})
```

---

- [Source](https://github.com/nuxt/nuxt/tree/main/packages/kit/src/module)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
