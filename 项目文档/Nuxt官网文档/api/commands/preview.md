---
title: "nuxt preview"
description: "The preview command starts a server to preview your application after the build command."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/preview"
---
# nuxt preview

> The preview command starts a server to preview your application after the build command.

```bash [Terminal]
npx nuxt preview [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--envName] [-e, --extends=<layer-name>] [-p, --port] [--dotenv]
```

The `preview` command starts a server to preview your Nuxt application after running the `build` command. The `start` command is an alias for `preview`. When running your application in production refer to the [Deployment section](https://nuxt.com/docs/4.x/getting-started/deployment).

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
        -p, --port
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Port to listen on
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
</tbody>
</table>

If `--port` is not provided, the `NUXT_PORT`, `NITRO_PORT` and `PORT` environment variables are used, in that order.

This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a `.env` file or as command-line argument.

::note
For convenience, in preview mode, your [`.env`](https://nuxt.com/docs/4.x/directory-structure/env) file will be loaded into `process.env`. (However, in production you will need to ensure your environment variables are set yourself. For example, with Node.js 20+ you could do this by running `NODE_ENV=production node --env-file .env .output/server/index.mjs` to start your server.)
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/preview.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
