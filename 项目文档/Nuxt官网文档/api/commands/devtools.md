---
title: "nuxt devtools"
description: "The devtools command allows you to enable or disable Nuxt DevTools on a per-project basis."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/devtools"
---
# nuxt devtools

> The devtools command allows you to enable or disable Nuxt DevTools on a per-project basis.

```bash [Terminal]
npx nuxt devtools <COMMAND> [ROOTDIR] [--cwd=<directory>]
```

Running `nuxt devtools enable` will install the Nuxt DevTools globally, and also enable it within the particular project you are using. It is saved as a preference in your user-level `.nuxtrc`. If you want to remove devtools support for a particular project, you can run `nuxt devtools disable`.

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
        COMMAND
      </code>
    </td>
    
    <td>
      Command to run (options: <enable|disable>)
    </td>
  </tr>
  
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

::read-more{icon="i-simple-icons-nuxtdotjs" target="\_blank" to="https://devtools.nuxt.com"}
Read more about the **Nuxt DevTools**.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/devtools.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
