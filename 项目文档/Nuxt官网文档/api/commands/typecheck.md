---
title: "nuxt typecheck"
description: "The typecheck command runs vue-tsc or Golar to check types throughout your app."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/typecheck"
---
# nuxt typecheck

> The typecheck command runs vue-tsc or Golar to check types throughout your app.

```bash [Terminal]
npx nuxt typecheck [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [-e, --extends=<layer-name>] [--checker]
```

The `typecheck` command runs [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc) or [Golar](https://golar.dev/languages/vue/) to check types throughout your app. If neither is installed, you will be prompted to install one, or shown installation instructions when running in a non-interactive terminal.

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
        --dotenv
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Path to <code>
        .env
      </code>
      
       file to load, relative to the root directory
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        -e, --extends=<layer-name>
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Extend from a Nuxt layer
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --checker
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Type checker to use (<code>
        vue-tsc
      </code>
      
       or <code>
        golar
      </code>
      
      )
    </td>
  </tr>
</tbody>
</table>

::note
This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a [`.env`](https://nuxt.com/docs/4.x/directory-structure/env) file or as a command-line argument.
::

::read-more{to="https://nuxt.com/docs/4.x/guide/concepts/typescript#type-checking"}
Read more on how to enable type-checking at build or development time.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/typecheck.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
