---
title: "nuxt add"
description: "Add modules to your Nuxt application with the command line."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/add"
---
# nuxt add

> Add modules to your Nuxt application with the command line.

```bash [Terminal]
npx nuxt add <MODULENAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--skipInstall] [--skipConfig] [--dev]
```

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
        MODULENAME
      </code>
    </td>
    
    <td>
      Specify one or more modules to install by name, separated by spaces
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
      Skip npm install
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
  
  <tr>
    <td>
      <code>
        --dev
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Install modules as dev dependencies
    </td>
  </tr>
</tbody>
</table>

The command lets you install [Nuxt modules](https://nuxt.com/modules) in your application with no manual work.

When running the command, it will:

- install the module as a dependency using your package manager (unless `--skipInstall` is set)
- add it to your [package.json](https://nuxt.com/docs/4.x/directory-structure/package) file (unless `--skipInstall` is set)
- update your [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file (unless `--skipConfig` is set)

If no module name is passed, you will be prompted to search for and select modules to add.

**Example:**

Installing the [`Pinia`](https://nuxt.com/modules/pinia) module

```bash [Terminal]
npx nuxt add pinia
```

::note
`nuxt module add` is an alias for `nuxt add`.
::

::read-more{to="https://nuxt.com/docs/4.x/api/commands/module"}
Read more about the other `nuxt module` commands.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/module/add.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
