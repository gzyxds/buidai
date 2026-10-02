---
title: "nuxt test"
description: "The test command runs tests using @nuxt/test-utils."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/test"
---
# nuxt test

> The test command runs tests using @nuxt/test-utils.

```bash [Terminal]
npx nuxt test [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dev] [--watch]
```

The `test` command runs tests using [`@nuxt/test-utils`](https://nuxt.com/docs/4.x/getting-started/testing). This command sets `process.env.NODE_ENV` to `test` if not already set.

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
        --dev
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Run in dev mode
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --watch
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Watch mode
    </td>
  </tr>
</tbody>
</table>

::note
This command sets `process.env.NODE_ENV` to `test`.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/test.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
