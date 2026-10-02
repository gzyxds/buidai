---
title: "nuxt prepare"
description: "The prepare command creates a .nuxt directory in your application and generates types."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/prepare"
---
# nuxt prepare

> The prepare command creates a .nuxt directory in your application and generates types.

```bash [Terminal]
npx nuxt prepare [ROOTDIR] [--dotenv] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--envName] [-e, --extends=<layer-name>]
```

The `prepare` command creates a [`.nuxt`](https://nuxt.com/docs/4.x/directory-structure/nuxt) directory in your application and generates types. This can be useful in a CI environment or as a `postinstall` command in your [`package.json`](https://nuxt.com/docs/4.x/directory-structure/package).

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
        --envName
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      The environment to use when resolving configuration overrides (default is <code>
        production
      </code>
      
       when building, and <code>
        development
      </code>
      
       when running the dev server)
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
</tbody>
</table>

::note
This command sets `process.env.NODE_ENV` to `production`.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/prepare.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
