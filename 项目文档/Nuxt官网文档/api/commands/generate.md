---
title: "nuxt generate"
description: "Pre-renders every route of the application and stores the result in plain HTML files."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/generate"
---
# nuxt generate

> Pre-renders every route of the application and stores the result in plain HTML files.

```bash [Terminal]
npx nuxt generate [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--preset] [--dotenv] [--envName] [-e, --extends=<layer-name>] [--profile[=verbose]]
```

The `generate` command pre-renders every route of your application and stores the result in plain HTML files that you can deploy on any static hosting services. The command triggers the `nuxt build` command with the `prerender` argument set to `true`

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
        --preset
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Nitro server preset
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
  
  <tr>
    <td>
      <code>
        --profile[=verbose]
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Profile performance. Use <code>
        --profile
      </code>
      
       for CPU only, <code>
        --profile=verbose
      </code>
      
       for full report.
    </td>
  </tr>
</tbody>
</table>

::read-more{to="https://nuxt.com/docs/4.x/getting-started/deployment#static-hosting"}
Read more about pre-rendering and static hosting.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/generate.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
