---
title: "nuxt analyze"
description: "Analyze the production bundle or your Nuxt application."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/analyze"
---
# nuxt analyze

> Analyze the production bundle or your Nuxt application.

```bash [Terminal]
npx nuxt analyze [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [-e, --extends=<layer-name>] [--name=<name>] [--no-serve]
```

The `analyze` command builds Nuxt and analyzes the production bundle (experimental).

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
        --name=<name>
      </code>
    </td>
    
    <td>
      <code>
        default
      </code>
    </td>
    
    <td>
      Name of the analysis
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --no-serve
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Skip serving the analysis results
    </td>
  </tr>
</tbody>
</table>

::note
This command sets `process.env.NODE_ENV` to `production`.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/analyze.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
