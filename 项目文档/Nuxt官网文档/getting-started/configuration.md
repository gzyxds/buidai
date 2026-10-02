---
title: "Configuration"
description: "Nuxt is configured with sensible defaults to make you productive."
canonical_url: "https://nuxt.com/docs/4.x/getting-started/configuration"
---
# Configuration

> Nuxt is configured with sensible defaults to make you productive.

By default, Nuxt is configured to cover most use cases. The [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file can override or extend this default configuration.

## Nuxt Configuration

The [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file is located at the root of a Nuxt project and can override or extend the application's behavior.

A minimal configuration file exports the `defineNuxtConfig` function containing an object with your configuration. The `defineNuxtConfig` helper is globally available without import.

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  // My Nuxt config
})
```

This file will often be mentioned in the documentation, for example to add custom scripts, register modules or change rendering modes.

::read-more{to="https://nuxt.com/docs/4.x/api/configuration/nuxt-config"}
Every option is described in the **Configuration Reference**.
::

::note
You don't have to use TypeScript to build an application with Nuxt. However, it is strongly recommended to use the `.ts` extension for the `nuxt.config` file. This way you can benefit from hints in your IDE to avoid typos and mistakes while editing your configuration.
::

### Environment Overrides

You can configure fully typed, per-environment overrides in your nuxt.config

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true },
    },
  },
  $development: {
    //
  },
  $env: {
    staging: {
      //
    },
  },
})
```

To select an environment when running a Nuxt CLI command, simply pass the name to the `--envName` flag, like so: `nuxt build --envName staging`.

To learn more about the mechanism behind these overrides, please refer to the `c12` documentation on [environment-specific configuration](https://github.com/unjs/c12?tab=readme-ov-file#environment-specific-configuration).

:video-accordion{title="Watch a video from Alexander Lichter about the env-aware nuxt.config.ts" video-id="DFZI2iVCrNc"}::note
If you're authoring layers, you can also use the `$meta` key to provide metadata that you or the consumers of your layer might use.
::

### Environment Variables and Private Tokens

The `runtimeConfig` API exposes values like environment variables to the rest of your application. By default, these keys are only available server-side. The keys within `runtimeConfig.public` and `runtimeConfig.app` (which is used by Nuxt internally) are also available client-side.

Those values should be defined in `nuxt.config` and can be overridden using environment variables.

::code-group
```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
})
```

```ini [.env]
# This will override the value of apiSecret
NUXT_API_SECRET=api_secret_token
```
::

These variables are exposed to the rest of your application using the [`useRuntimeConfig()`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) composable.

```vue [app/pages/index.vue]
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
```

:read-more{to="https://nuxt.com/docs/4.x/guide/going-further/runtime-config"}## App Configuration

The `app.config.ts` file, located in the source directory (by default `app/`), is used to expose public variables that can be determined at build time. Contrary to the `runtimeConfig` option, these cannot be overridden using environment variables.

A minimal configuration file exports the `defineAppConfig` function containing an object with your configuration. The `defineAppConfig` helper is globally available without import.

```ts [app/app.config.ts]
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
})
```

These variables are exposed to the rest of your application using the [`useAppConfig`](https://nuxt.com/docs/4.x/api/composables/use-app-config) composable.

```vue [app/pages/index.vue]
<script setup lang="ts">
const appConfig = useAppConfig()
</script>
```

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/app/app-config"}## `runtimeConfig` vs. `app.config`

As stated above, `runtimeConfig` and `app.config` are both used to expose variables to the rest of your application. To determine whether you should use one or the other, here are some guidelines:

- `runtimeConfig`: Private or public tokens that need to be specified after build using environment variables.
- `app.config`: Public tokens that are determined at build time, website configuration such as theme variant, title and any project config that are not sensitive.

<table>
<thead>
  <tr>
    <th>
      Feature
    </th>
    
    <th>
      <code>
        runtimeConfig
      </code>
    </th>
    
    <th>
      <code>
        app.config
      </code>
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Client-side
    </td>
    
    <td>
      Hydrated
    </td>
    
    <td>
      Bundled
    </td>
  </tr>
  
  <tr>
    <td>
      Environment variables
    </td>
    
    <td>
      ✅ Yes
    </td>
    
    <td>
      ❌ No
    </td>
  </tr>
  
  <tr>
    <td>
      Reactive
    </td>
    
    <td>
      ✅ Yes
    </td>
    
    <td>
      ✅ Yes
    </td>
  </tr>
  
  <tr>
    <td>
      Types support
    </td>
    
    <td>
      ✅ Partial
    </td>
    
    <td>
      ✅ Yes
    </td>
  </tr>
  
  <tr>
    <td>
      Configuration per request
    </td>
    
    <td>
      ❌ No
    </td>
    
    <td>
      ✅ Yes
    </td>
  </tr>
  
  <tr>
    <td>
      Hot module replacement
    </td>
    
    <td>
      ❌ No
    </td>
    
    <td>
      ✅ Yes
    </td>
  </tr>
  
  <tr>
    <td>
      Non-primitive JS types
    </td>
    
    <td>
      ❌ No
    </td>
    
    <td>
      ✅ Yes
    </td>
  </tr>
</tbody>
</table>

## External Configuration Files

Nuxt uses [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file as the single source of truth for configurations and skips reading external configuration files. During the course of building your project, you may have a need to configure those. The following table highlights common configurations and, where applicable, how they can be configured with Nuxt.

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Config File
    </th>
    
    <th>
      How To Configure
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://nitro.build" rel="nofollow">
        Nitro
      </a>
    </td>
    
    <td>
      <del>
        <code>
          nitro.config.ts
        </code>
      </del>
    </td>
    
    <td>
      Use <a href="https://nuxt.com/docs/4.x/api/nuxt-config#nitro">
        <code>
          nitro
        </code>
      </a>
      
       key in <code>
        nuxt.config
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://postcss.org" rel="nofollow">
        PostCSS
      </a>
    </td>
    
    <td>
      <del>
        <code>
          postcss.config.js
        </code>
      </del>
    </td>
    
    <td>
      Use <a href="https://nuxt.com/docs/4.x/api/nuxt-config#postcss">
        <code>
          postcss
        </code>
      </a>
      
       key in <code>
        nuxt.config
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://vite.dev" rel="nofollow">
        Vite
      </a>
    </td>
    
    <td>
      <del>
        <code>
          vite.config.ts
        </code>
      </del>
    </td>
    
    <td>
      Use <a href="https://nuxt.com/docs/4.x/api/nuxt-config#vite">
        <code>
          vite
        </code>
      </a>
      
       key in <code>
        nuxt.config
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://webpack.js.org" rel="nofollow">
        webpack
      </a>
    </td>
    
    <td>
      <del>
        <code>
          webpack.config.ts
        </code>
      </del>
    </td>
    
    <td>
      Use <a href="https://nuxt.com/docs/4.x/api/nuxt-config#webpack-1">
        <code>
          webpack
        </code>
      </a>
      
       key in <code>
        nuxt.config
      </code>
    </td>
  </tr>
</tbody>
</table>

Here is a list of other common config files:

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Config File
    </th>
    
    <th>
      How To Configure
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="https://www.typescriptlang.org" rel="nofollow">
        TypeScript
      </a>
    </td>
    
    <td>
      <code>
        tsconfig.json
      </code>
    </td>
    
    <td>
      <a href="https://nuxt.com/docs/4.x/directory-structure/tsconfig">
        More Info
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://eslint.org" rel="nofollow">
        ESLint
      </a>
    </td>
    
    <td>
      <code>
        eslint.config.js
      </code>
    </td>
    
    <td>
      <a href="https://eslint.org/docs/latest/use/configure/configuration-files" rel="nofollow">
        More Info
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://prettier.io" rel="nofollow">
        Prettier
      </a>
    </td>
    
    <td>
      <code>
        prettier.config.js
      </code>
    </td>
    
    <td>
      <a href="https://prettier.io/docs/configuration.html" rel="nofollow">
        More Info
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://stylelint.io" rel="nofollow">
        Stylelint
      </a>
    </td>
    
    <td>
      <code>
        stylelint.config.js
      </code>
    </td>
    
    <td>
      <a href="https://stylelint.io/user-guide/configure/" rel="nofollow">
        More Info
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://tailwindcss.com" rel="nofollow">
        TailwindCSS
      </a>
    </td>
    
    <td>
      <code>
        tailwind.config.js
      </code>
    </td>
    
    <td>
      <a href="https://tailwindcss.nuxtjs.org/tailwindcss/configuration/" rel="nofollow">
        More Info
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="https://vitest.dev" rel="nofollow">
        Vitest
      </a>
    </td>
    
    <td>
      <code>
        vitest.config.ts
      </code>
    </td>
    
    <td>
      <a href="https://vitest.dev/config/" rel="nofollow">
        More Info
      </a>
    </td>
  </tr>
</tbody>
</table>

## Vue Configuration

### With Vite

If you need to pass options to `@vitejs/plugin-vue` or `@vitejs/plugin-vue-jsx`, you can do this in your `nuxt.config` file.

- `vite.vue` for `@vitejs/plugin-vue`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue).
- `vite.vueJsx` for `@vitejs/plugin-vue-jsx`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx).

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
})
```

:read-more{to="https://nuxt.com/docs/4.x/api/configuration/nuxt-config#vue"}### With webpack

If you use webpack and need to configure `vue-loader`, you can do this using `webpack.loaders.vue` key inside your `nuxt.config` file. The available options are [defined here](https://github.com/vuejs/vue-loader/blob/main/src/index.ts#L32-L62).

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
})
```

:read-more{to="https://nuxt.com/docs/4.x/api/configuration/nuxt-config#loaders"}### Enabling Experimental Vue Features

You may need to enable experimental features in Vue, such as `propsDestructure`. Nuxt provides an easy way to do that in `nuxt.config.ts`, no matter which builder you are using:

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  vue: {
    propsDestructure: true,
  },
})
```

#### experimental `reactivityTransform` migration from Vue 3.4 and Nuxt 3.9

Since Nuxt 3.9 and Vue 3.4, `reactivityTransform` has been moved from Vue to Vue Macros which has a [Nuxt integration](https://vue-macros.dev/guide/nuxt-integration.html).

:read-more{to="https://nuxt.com/docs/4.x/api/configuration/nuxt-config#vue-1"}


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
