---
title: "Programmatic Usage"
description: "Nuxt Kit provides a set of utilities to help you work with Nuxt programmatically. These functions allow you to load Nuxt, build Nuxt, and load Nuxt configuration."
canonical_url: "https://nuxt.com/docs/4.x/api/kit/programmatic"
---
# Programmatic Usage

> Nuxt Kit provides a set of utilities to help you work with Nuxt programmatically. These functions allow you to load Nuxt, build Nuxt, and load Nuxt configuration.

Programmatic usage can be helpful when you want to use Nuxt programmatically, for example, when building a [CLI tool](https://github.com/nuxt/cli) or [test utils](https://github.com/nuxt/test-utils).

## `loadNuxt`

Load Nuxt programmatically. It will load the Nuxt configuration, instantiate and return the promise with Nuxt instance.

### Type

```ts
function loadNuxt (loadOptions?: LoadNuxtOptions): Promise<Nuxt>
```

### Parameters

**loadOptions**: Loading conditions for Nuxt. `loadNuxt` uses [`c12`](https://github.com/unjs/c12) under the hood, so it accepts the same options as `c12.loadConfig` with some additional options:

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
        dev
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
      
      , Nuxt will be loaded in development mode.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        ready
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      If set to <code>
        true
      </code>
      
      , Nuxt will be ready to use after the <code>
        loadNuxt
      </code>
      
       call. If set to <code>
        false
      </code>
      
      , you will need to call <code>
        nuxt.ready()
      </code>
      
       to make sure Nuxt is ready to use.
    </td>
  </tr>
</tbody>
</table>

## `buildNuxt`

Build Nuxt programmatically. It will invoke the builder (currently [@nuxt/vite-builder](https://github.com/nuxt/nuxt/tree/main/packages/vite) or [@nuxt/webpack-builder](https://github.com/nuxt/nuxt/tree/main/packages/webpack)) to bundle the application.

### Type

```ts
function buildNuxt (nuxt: Nuxt): Promise<any>
```

### Parameters

**nuxt**: Nuxt instance to build. It can be retrieved from the context via `useNuxt()` call.

## `loadNuxtConfig`

Load Nuxt configuration. It will return the promise with the configuration object.

### Type

```ts
function loadNuxtConfig (options: LoadNuxtConfigOptions): Promise<NuxtOptions>
```

### Parameters

**options**: Options controlling how configuration is located, merged and loaded.

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
      Default
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
        cwd
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        process.cwd()
      </code>
    </td>
    
    <td>
      Directory to load <code>
        nuxt.config
      </code>
      
       from.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        configFile
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        'nuxt.config'
      </code>
    </td>
    
    <td>
      Name of the config file to load, without an extension.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        rcFile
      </code>
    </td>
    
    <td>
      <code>
        string | false
      </code>
    </td>
    
    <td>
      <code>
        '.nuxtrc'
      </code>
    </td>
    
    <td>
      Name of the <code>
        .rc
      </code>
      
       file to load alongside the config file, or <code>
        false
      </code>
      
       to load none.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        globalRc
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Also load the user-level and workspace-level <code>
        .nuxtrc
      </code>
      
       files.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        overrides
      </code>
    </td>
    
    <td>
      <code>
        NuxtConfig
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Configuration applied above every layer, including the root project's own <code>
        nuxt.config
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        defaults
      </code>
    </td>
    
    <td>
      <code>
        NuxtConfig
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Configuration applied below every layer, before schema defaults.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dotenv
      </code>
    </td>
    
    <td>
      <code>
        boolean | NuxtDotenvOptions
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Load <code>
        .env
      </code>
      
       files into <code>
        process.env
      </code>
      
       before resolving configuration. Set to <code>
        false
      </code>
      
       when the environment has already been populated.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        envName
      </code>
    </td>
    
    <td>
      <code>
        string | false
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Environment name used to select <code>
        $env.*
      </code>
      
       configuration overrides. Takes precedence over <code>
        envName
      </code>
      
       set in <code>
        nuxt.config
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        resolve
      </code>
    </td>
    
    <td>
      <code>
        (source, context) => ResolvedNuxtLayer | nullish
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Resolve an <code>
        extends
      </code>
      
       entry to a layer yourself. Return a nullish value to fall back to the default resolution for that source.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        import
      </code>
    </td>
    
    <td>
      <code>
        (id: string) => Promise<unknown>
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Import config files with a custom loader rather than the default one, for example to load TypeScript config without Nuxt reaching for <code>
        jiti
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        onConfigResolved
      </code>
    </td>
    
    <td>
      <code>
        (context: ResolvedNuxtConfigContext) => void
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Called once, and awaited, after configuration has loaded successfully. Not called if loading throws.
    </td>
  </tr>
</tbody>
</table>

### `onConfigResolved`

The context passed to `onConfigResolved` describes what was loaded:

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
        rawConfig
      </code>
    </td>
    
    <td>
      <code>
        NuxtConfig
      </code>
    </td>
    
    <td>
      User configuration merged across all layers, with no schema defaults applied and with <code>
        overrides
      </code>
      
      , <code>
        defaults
      </code>
      
       and <code>
        defaultConfig
      </code>
      
       excluded, so repeated loads of an unchanged project produce an unchanged snapshot.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        layers
      </code>
    </td>
    
    <td>
      <code>
        NuxtConfigLayer[]
      </code>
    </td>
    
    <td>
      Resolved config layers, highest priority first.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        configFile
      </code>
    </td>
    
    <td>
      <code>
        string?
      </code>
    </td>
    
    <td>
      Absolute path of the root <code>
        nuxt.config
      </code>
      
       file, if one was found.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cwd
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      Directory the configuration was loaded from.
    </td>
  </tr>
</tbody>
</table>

## `diffNuxtConfig`

Compare two `rawConfig` snapshots (as provided to `onConfigResolved`) and return the differences between them. This is useful when you watch config files yourself and need to know which keys changed before deciding whether to restart.

### Type

```ts
function diffNuxtConfig (oldConfig: NuxtConfig, newConfig: NuxtConfig): NuxtConfigDiffEntry[]
```

### Parameters

**oldConfig**: The previous `rawConfig` snapshot.

**newConfig**: The current `rawConfig` snapshot.

### Return Value

An array of entries, one per difference. Each entry has:

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
        type
      </code>
    </td>
    
    <td>
      <code>
        'added' | 'removed' | 'changed'
      </code>
    </td>
    
    <td>
      How the value changed.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        path
      </code>
    </td>
    
    <td>
      <code>
        Array<string | number>
      </code>
    </td>
    
    <td>
      Property path of the changed value, with array indices as numbers, such as <code>
        ['runtimeConfig', 'public', 'foo']
      </code>
      
      . Prefer this when reading the value back out of a config object.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        label
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        path
      </code>
      
       written as a property accessor, for display or for matching against a known key, such as <code>
        runtimeConfig.public.foo
      </code>
      
       or <code>
        modules[0]
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        newValue
      </code>
    </td>
    
    <td>
      <code>
        unknown
      </code>
    </td>
    
    <td>
      Present for <code>
        added
      </code>
      
       and <code>
        changed
      </code>
      
       entries.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        oldValue
      </code>
    </td>
    
    <td>
      <code>
        unknown
      </code>
    </td>
    
    <td>
      Present for <code>
        removed
      </code>
      
       and <code>
        changed
      </code>
      
       entries.
    </td>
  </tr>
</tbody>
</table>

Functions whose source is unchanged are not reported as changes, so a config that declares inline functions does not diff against itself on every load.

### Example

```ts
import { diffNuxtConfig, loadNuxtConfig } from '@nuxt/kit'

let previous

async function load () {
  await loadNuxtConfig({
    cwd: process.cwd(),
    onConfigResolved ({ rawConfig }) {
      if (previous) {
        for (const entry of diffNuxtConfig(previous, rawConfig)) {
          console.log(`${entry.label} was ${entry.type}`)
        }
      }
      previous = rawConfig
    },
  })
}
```

## `writeTypes`

Generates `tsconfig.json` and writes it to the project buildDir.

### Type

```ts
function writeTypes (nuxt?: Nuxt): void
```

### Parameters

**nuxt**: Nuxt instance to build. It can be retrieved from the context via `useNuxt()` call.

---

- [Source](https://github.com/nuxt/nuxt/tree/main/packages/kit/src/loader)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
