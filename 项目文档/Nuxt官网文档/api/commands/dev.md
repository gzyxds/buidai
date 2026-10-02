---
title: "nuxt dev"
description: "The dev command starts a development server with hot module replacement at http://localhost:3000"
canonical_url: "https://nuxt.com/docs/4.x/api/commands/dev"
---
# nuxt dev

> The dev command starts a development server with hot module replacement at http://localhost:3000

```bash [Terminal]
npx nuxt dev [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [--envName] [-e, --extends=<layer-name>] [--clear] [--no-f, --no-fork] [-p, --port] [-h, --host] [--clipboard] [-o, --open] [--https] [--publicURL] [--qr] [--public] [--tunnel] [--profile[=verbose]] [--sslCert] [--sslKey]
```

The `dev` command starts a development server with hot module replacement at [http://localhost:3000](https://localhost:3000)

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
        --clear
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Clear console on restart
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --no-f, --no-fork
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Disable forked mode
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
      Port to listen on (default: <code>
        NUXT_PORT || NITRO_PORT || PORT || nuxtOptions.devServer.port
      </code>
      
      )
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        -h, --host
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Host to listen on (default: <code>
        NUXT_HOST || NITRO_HOST || HOST || nuxtOptions.devServer?.host
      </code>
      
      )
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --clipboard
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Copy the URL to the clipboard
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        -o, --open
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Open the URL in the browser
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --https
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Enable HTTPS
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --publicURL
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Displayed public URL (used for QR code)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --qr
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Display The QR code of public URL when available
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --public
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Listen to all network interfaces
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --tunnel
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      Open a tunnel using <a href="https://github.com/unjs/untun" rel="nofollow">
        https://github.com/unjs/untun
      </a>
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
  
  <tr>
    <td>
      <code>
        --sslCert
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      (DEPRECATED) Use <code>
        --https.cert
      </code>
      
       instead.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        --sslKey
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      (DEPRECATED) Use <code>
        --https.key
      </code>
      
       instead.
    </td>
  </tr>
</tbody>
</table>

The port and host can also be set via NUXT_PORT, PORT, NUXT_HOST or HOST environment variables.

Additionally to the above options, `@nuxt/cli` can pass options through to `listhen`, e.g. `--no-qr` to turn off the dev server QR code. You can find the list of `listhen` options in the [unjs/listhen](https://github.com/unjs/listhen) docs.

This command sets `process.env.NODE_ENV` to `development`.

::note
If you are using a self-signed certificate in development, you will need to set `NODE_TLS_REJECT_UNAUTHORIZED=0` in your environment.
::

---

- [Source](https://github.com/nuxt/cli/blob/3.x/packages/nuxi/src/commands/dev.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
