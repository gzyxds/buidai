---
title: "nuxt module"
description: "Search and remove modules in your Nuxt application with the command line."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/module"
---
# nuxt module

> Search and remove modules in your Nuxt application with the command line.

Nuxt provides a few utilities to work with [Nuxt modules](https://nuxt.com/modules) seamlessly.

::read-more{to="https://nuxt.com/docs/4.x/api/commands/add"}
Read more about `nuxt add`, which installs modules into your application.
::

## `nuxt module remove`

```bash [Terminal]
npx nuxt module remove [MODULENAME] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--skipInstall] [--skipConfig]
```

### Arguments

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
        MODULENAME
      </code>
    </td>
    
    <td>
      Specify one or more modules to remove by name, separated by spaces
    </td>
  </tr>
</tbody>
</table>

### Options

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
      <code>
        .
      </code>
    </td>
    
    <td>
      Specify the working directory
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
        --skipInstall
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Skip dependency uninstall
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --skipConfig
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Skip nuxt.config.ts update
    </td>
  </tr>
</tbody>
</table>

The command uninstalls the module (unless `--skipInstall` is set) and removes it from your [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file (unless `--skipConfig` is set). If no module name is passed, you will be prompted to select from the modules registered in your `nuxt.config`. A module name is required when `--skipConfig` is set.

**Example:**

```bash [Terminal]
npx nuxt module remove pinia
```

## `nuxt module search`

```bash [Terminal]
npx nuxt module search <QUERY> [--cwd=<directory>] [--nuxtVersion=<2|3>]
```

### Arguments

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
        QUERY
      </code>
    </td>
    
    <td>
      keywords to search for
    </td>
  </tr>
</tbody>
</table>

### Options

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
      <code>
        .
      </code>
    </td>
    
    <td>
      Specify the working directory
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --nuxtVersion=<2|3>
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Filter by Nuxt version and list compatible modules only (auto detected by default)
    </td>
  </tr>
</tbody>
</table>

The command searches for Nuxt modules matching your query that are compatible with your Nuxt version.

**Example:**

```bash [Terminal]
npx nuxt module search pinia
```

---

- [Source](https://github.com/nuxt/cli/tree/3.x/packages/nuxi/src/commands/module)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
