---
title: "useRequestEvent"
description: "Access the incoming request event with the useRequestEvent composable."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-request-event"
---
# useRequestEvent

> Access the incoming request event with the useRequestEvent composable.

Within the [Nuxt context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context) you can use `useRequestEvent` to access the incoming request.

```ts
// Get underlying request event
const event = useRequestEvent()

// Get the path of the incoming request
const path = event?.path

// Read a request header
const userAgent = event?.headers.get('user-agent')
```

::tip
In the browser, `useRequestEvent` will return `undefined`.
::

## Type

```ts
function useRequestEvent (nuxtApp?: NuxtApp): NuxtRequestEvent | undefined
```

`NuxtRequestEvent` is the event in the shape your configured [server builder](https://nuxt.com/docs/4.x/guide/going-further/builders) provides. With the default `@nuxt/nitro-server`, that is h3 v1's `H3Event`, which is why the example above reads `event.path` rather than `event.url`.

When no server builder contributes an event type, the event resolves to `RequestEvent`, the web-standard part every server runtime provides:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Type
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
        req
      </code>
    </td>
    
    <td>
      <code>
        Request
      </code>
    </td>
    
    <td>
      The incoming request, including its <code>
        headers
      </code>
      
      , <code>
        method
      </code>
      
       and body.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        url
      </code>
    </td>
    
    <td>
      <code>
        URL
      </code>
    </td>
    
    <td>
      The parsed request URL.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        res
      </code>
    </td>
    
    <td>
      <code>
        { status?, statusText?, headers }
      </code>
    </td>
    
    <td>
      The response status and headers to be sent.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        context
      </code>
    </td>
    
    <td>
      <code>
        RequestEventContext
      </code>
    </td>
    
    <td>
      Per-request state, including Nuxt's own state under <code>
        context.nuxt
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

Code that should work whichever server builder is configured (a module's server handler, for example) should only read these properties.

::read-more{to="https://nuxt.com/docs/4.x/guide/going-further/server-imports"}
Read more about writing portable server code with `nuxt/server`.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/ssr.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
