---
title: "nuxt build-module"
description: "Nuxt command to build your Nuxt module before publishing."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/build-module"
---
# nuxt build-module

> Nuxt command to build your Nuxt module before publishing.

```bash [Terminal]
npx nuxt build-module [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--build] [--stub] [--sourcemap] [--prepare]
```

The `build-module` command runs `@nuxt/module-builder` to generate `dist` directory within your `rootDir` that contains the full build for your **nuxt-module**.

## Arguments

<table>
<thead>
  <tr>
    <th>
      Argument
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
        ROOTDIR="."
      </code>
    </td>
    
    <td>
      Specifies the working directory (default: <code>
        .
      </code>
      
      )
    </td>
  </tr>
</tbody>
</table>

## Options

<table>
<thead>
  <tr>
    <th>
      Option
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
        --cwd=<directory>
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Specify the working directory, this takes precedence over ROOTDIR (default: <code>
        .
      </code>
      
      )
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --logLevel=<silent|info|verbose>
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Specify build-time log level
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --build
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Build module for distribution
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --stub
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Stub dist instead of actually building it for development
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --sourcemap
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Generate sourcemaps
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --prepare
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Prepare module for local development
    </td>
  </tr>
</tbody>
</table>

::read-more{icon="i-simple-icons-github" target="\_blank" to="https://github.com/nuxt/module-builder"}
Read more about `@nuxt/module-builder`.
::

---

- [Source](https://github.com/nuxt/module-builder/blob/main/src/cli.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
