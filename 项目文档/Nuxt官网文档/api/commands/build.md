---
title: "nuxt build"
description: "Build your Nuxt application."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/build"
---
# nuxt build

> Build your Nuxt application.

```bash [Terminal]
npx nuxt build [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--prerender] [--preset] [--dotenv] [--envName] [-e, --extends=<layer-name>] [--profile[=verbose]]
```

The `build` command creates a `.output` directory with all your application, server and dependencies ready for production.

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
        --prerender
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Build Nuxt and prerender static routes
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

::note
This command sets `process.env.NODE_ENV` to `production`.
::

::note
`--prerender` will always set the `preset` to `static`
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/build.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
