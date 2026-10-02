---
title: "useHydration"
description: "Allows full control of the hydration cycle to set and receive data from the server."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-hydration"
---
# useHydration

> Allows full control of the hydration cycle to set and receive data from the server.

`useHydration` is a built-in composable that provides a way to set data on the server side every time a new HTTP request is made and receive that data on the client side. This way `useHydration` allows you to take full control of the hydration cycle.

::note
This is an advanced composable, primarily designed for use within plugins, mostly used by Nuxt modules.
::

::note
`useHydration` is designed to **ensure state synchronization and restoration during SSR**. If you need to create a globally reactive state that is SSR-friendly in Nuxt, [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state) is the recommended choice.
::

## Usage

The data returned from the `get` function on the server is stored in `nuxtApp.payload` under the unique key provided as the first parameter to `useHydration`. During hydration, this data is then retrieved on the client, preventing redundant computations or API calls.

::code-group
```ts [With useHydration]
export default defineNuxtPlugin((nuxtApp) => {
  const myStore = new MyStore()

  useHydration(
    'myStoreState',
    () => myStore.getState(),
    data => myStore.setState(data),
  )
})
```

```ts [Without useHydration]
export default defineNuxtPlugin((nuxtApp) => {
  const myStore = new MyStore()

  if (import.meta.server) {
    nuxt.hooks.hook('app:rendered', () => {
      nuxtApp.payload.myStoreState = myStore.getState()
    })
  }

  if (import.meta.client) {
    nuxt.hooks.hook('app:created', () => {
      myStore.setState(nuxtApp.payload.myStoreState)
    })
  }
})
```
::

## Type

```ts [Signature]
export function useHydration<T> (key: string, get: () => T, set: (value: T) => void): void
```

## Parameters

<table>
<thead>
  <tr>
    <th>
      Parameter
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
        key
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      A unique key that identifies the data in your Nuxt application.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        get
      </code>
    </td>
    
    <td>
      <code>
        () => T
      </code>
    </td>
    
    <td>
      A function executed <strong>
        only on the server
      </strong>
      
       (called when SSR rendering is done) to set the initial value.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        set
      </code>
    </td>
    
    <td>
      <code>
        (value: T) => void
      </code>
    </td>
    
    <td>
      A function executed <strong>
        only on the client
      </strong>
      
       (called when initial Vue instance is created) to receive the data.
    </td>
  </tr>
</tbody>
</table>

## Return Values

This composable does not return any value.

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/hydrate.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
