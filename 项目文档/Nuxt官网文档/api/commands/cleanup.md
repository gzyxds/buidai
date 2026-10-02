---
title: "nuxt cleanup"
description: "Remove common generated Nuxt files and caches."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/cleanup"
---
# nuxt cleanup

> Remove common generated Nuxt files and caches.

```bash [Terminal]
npx nuxt cleanup [ROOTDIR] [--cwd=<directory>]
```

The `cleanup` command removes common generated Nuxt files and caches, including:

- `.nuxt`
- `.output`
- `dist`
- `node_modules/.vite`
- `node_modules/.cache`

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
</tbody>
</table>

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/cleanup.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
