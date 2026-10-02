---
title: "nuxt upgrade"
description: "The upgrade command upgrades Nuxt to the latest version."
canonical_url: "https://nuxt.com/docs/4.x/api/commands/upgrade"
---
# nuxt upgrade

> The upgrade command upgrades Nuxt to the latest version.

```bash [Terminal]
npx nuxt upgrade [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dedupe] [-f, --force] [-ch, --channel=<stable|nightly|v3|v4|v4-nightly|v3-nightly>]
```

The `upgrade` command upgrades Nuxt to the latest version.

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
        --dedupe
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Dedupe dependencies after upgrading
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        -f, --force
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Force upgrade to recreate lockfile and node_modules
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        -ch, --channel=<stable|nightly|v3|v4|v4-nightly|v3-nightly>
      </code>
    </td>
    
    <td>
      <code>
        stable
      </code>
    </td>
    
    <td>
      Specify a channel to install from (default: stable)
    </td>
  </tr>
</tbody>
</table>

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/upgrade.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
