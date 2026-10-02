---
title: "nuxt add-template"
description: "Scaffold an entity into your Nuxt application."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/add-template"
---
# nuxt add-template

> Scaffold an entity into your Nuxt application.

```bash [Terminal]
npx nuxt add-template <TEMPLATE> <NAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--force]
```

::note
`nuxt add <TEMPLATE> <NAME>` still works but is deprecated in favour of `nuxt add-template`.
::

::read-more{to="https://nuxt.com/docs/4.x/api/commands/add"}
Read more about `nuxt add`, which adds Nuxt modules to your application.
::

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
        TEMPLATE
      </code>
    </td>
    
    <td>
      Specify which template to generate (options: <api|app|app-config|component|composable|error|layer|layout|middleware|module|page|plugin|server-middleware|server-plugin|server-route|server-util>)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        NAME
      </code>
    </td>
    
    <td>
      Specify name of the generated file
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
        --force
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Force override file if it already exists
    </td>
  </tr>
</tbody>
</table>

**Modifiers:**

Some templates support additional modifier flags to add a suffix (like `.client` or `.get`) to their name.

Generated files are written relative to your [`srcDir`](https://nuxt.com/docs/4.x/api/nuxt-config#srcdir), which defaults to the root of your project. The paths below assume that default.

```bash [Terminal]
# Generates `/plugins/sockets.client.ts`
npx nuxt add-template plugin sockets --client
```

## `nuxt add-template component`

- Modifier flags: `--mode client|server` or `--client` or `--server`

```bash [Terminal]
# Generates `components/TheHeader.vue`
npx nuxt add-template component TheHeader
```

## `nuxt add-template composable`

```bash [Terminal]
# Generates `composables/foo.ts`
npx nuxt add-template composable foo
```

## `nuxt add-template layout`

```bash [Terminal]
# Generates `layouts/custom.vue`
npx nuxt add-template layout custom
```

## `nuxt add-template plugin`

- Modifier flags: `--mode client|server` or `--client` or `--server`

```bash [Terminal]
# Generates `plugins/analytics.ts`
npx nuxt add-template plugin analytics
```

## `nuxt add-template page`

```bash [Terminal]
# Generates `pages/about.vue`
npx nuxt add-template page about
```

```bash [Terminal]
# Generates `pages/category/[id].vue`
npx nuxt add-template page "category/[id]"
```

## `nuxt add-template middleware`

- Modifier flags: `--global`

```bash [Terminal]
# Generates `middleware/auth.ts`
npx nuxt add-template middleware auth
```

## `nuxt add-template api`

- Modifier flags: `--method` (can accept `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put` or `trace`) or alternatively you can directly use `--get`, `--post`, etc.

```bash [Terminal]
# Generates `server/api/hello.ts`
npx nuxt add-template api hello
```

## `nuxt add-template layer`

```bash [Terminal]
# Generates `layers/subscribe/nuxt.config.ts`
npx nuxt add-template layer subscribe
```

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/add-template.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
