---
title: "useFetch"
description: "Fetch data from an API endpoint with an SSR-friendly composable."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-fetch"
---
# useFetch

> Fetch data from an API endpoint with an SSR-friendly composable.

This composable provides a convenient wrapper around [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) and [`$fetch`](https://nuxt.com/docs/4.x/api/utils/dollarfetch).
It automatically generates a key for the request, provides type hints for request url based on server routes, and infers API response type.

::note
`useFetch` is a composable meant to be called directly in a setup function, plugin, or route middleware. It returns reactive composables and handles adding responses to the Nuxt payload so they can be passed from server to client without re-fetching the data on client side when the page hydrates.
::

## Usage

```vue [app/pages/modules.vue]
<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch('/api/modules', {
  pick: ['title'],
})
</script>
```

::tip{to="https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#custom-usefetch-with-createusefetch"}
Need a custom `useFetch` with pre-defined defaults (like `baseURL` or auth headers)? Use `createUseFetch` to create a fully typed custom composable.
::

::note
You do not need to `await` `useFetch`. On the server, Nuxt waits for the promise to resolve before rendering in either case, so the returned HTML always contains the data. The `await` affects what happens after the call: with it, execution pauses until `data` is populated, and client-side navigation is blocked until the data is ready; without it, execution continues immediately, `data` starts as its default value until the request resolves, and on client-side navigation you handle the loading and error states yourself using the returned `status` and `error` refs. This has a similar effect to the [`lazy`](#parameters) option, though `lazy` is the explicit way to opt into non-blocking navigation.
::

::note
`data`, `status`, and `error` are Vue refs, and they should be accessed with `.value` when used within the `<script setup>`, while `refresh`/`execute` and `clear` are plain functions.
::

Using the `query` option, you can add search parameters to your query. This option is extended from [unjs/ofetch](https://github.com/unjs/ofetch) and is using [unjs/ufo](https://github.com/unjs/ufo) to create the URL. Objects are automatically stringified.

```ts [app/pages/index.vue]
const param1 = ref('value1')
const { data, status, error, refresh } = await useFetch('/api/modules', {
  query: { param1, param2: 'value2' },
})
```

The above example results in `https://api.nuxt.com/modules?param1=value1&param2=value2`.

You can also use [interceptors](https://github.com/unjs/ofetch#%EF%B8%8F-interceptors):

```ts [app/pages/index.vue]
const { data, status, error, refresh, clear } = await useFetch('/api/auth/login', {
  onRequest ({ request, options }) {
    // Set the request headers
    // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
    options.headers.set('Authorization', '...')
  },
  onRequestError ({ request, options, error }) {
    // Handle the request errors
  },
  onResponse ({ request, response, options }) {
    // Process the response data
    localStorage.setItem('token', response._data.token)
  },
  onResponseError ({ request, response, options }) {
    // Handle the response errors
  },
})
```

### Reactive Keys and Shared State

You can use a computed ref or a plain ref as the URL, allowing for dynamic data fetching that automatically updates when the URL changes:

```vue [app/pages/[id].vue]
<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.id)

// When the route changes and id updates, the data will be automatically refetched
const { data: post } = await useFetch(() => `/api/posts/${id.value}`)
</script>
```

The auto-generated key is unique to each call site, so calling `useFetch` with the same URL and options in different components will **not** share state and each call performs its own request. Multiple instances of the same component do share state, since they use the same call site. To share the same `data`, `error` and `status` refs across different components, provide the same explicit `key` to each call:

::code-group
```vue [app/components/ComponentA.vue]
<script setup lang="ts">
// shares the data with ComponentB - only one request is made
const { data } = await useFetch('/api/random', { key: 'random' })
</script>
```

```vue [app/components/ComponentB.vue]
<script setup lang="ts">
// shares the data with ComponentA - only one request is made
const { data } = await useFetch('/api/random', { key: 'random' })
</script>
```
::

::tip
Keyed state created using `useFetch` can be retrieved across your Nuxt application using [`useNuxtData`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-data).
::

::warning
`useFetch` is a reserved function name transformed by the compiler, so you should not name your own function `useFetch`. To create a custom variant with pre-defined options, use [`createUseFetch`](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#custom-usefetch-with-createusefetch) instead.
::

::warning
If you encounter the `data` variable destructured from a `useFetch` returns a string and not a JSON parsed object then make sure your component doesn't include an import statement like `import { useFetch } from '@vueuse/core`.
::

:video-accordion{title="Watch the video from Alexander Lichter to avoid using useFetch the wrong way" video-id="njsGVmcWviY"}:read-more{to="https://nuxt.com/docs/4.x/getting-started/data-fetching"}### Reactive Fetch Options

Fetch options can be provided as reactive, supporting `computed`, `ref` and [computed getters](https://vuejs.org/guide/essentials/computed). When a reactive fetch option is updated it will trigger a refetch using the updated resolved reactive value.

```ts [app/pages/index.vue]
const searchQuery = ref('initial')
const { data } = await useFetch('/api/search', {
  query: { q: searchQuery },
})
// triggers a refetch: /api/search?q=new%20search
searchQuery.value = 'new search'
```

If needed, you can opt out of this behavior using `watch: false`:

```ts [app/pages/index.vue]
const searchQuery = ref('initial')
const { data } = await useFetch('/api/search', {
  query: { q: searchQuery },
  watch: false,
})
// does not trigger a refetch
searchQuery.value = 'new search'
```

## Type

```ts [Signature]
export function useFetch<ResT, ErrorT = NuxtError<unknown>, DataT = ResT> (
  url: string | Request | Ref<string | Request> | (() => string | Request),
  options?: UseFetchOptions<ResT, DataT>,
): AsyncData<DataT, ErrorT> & Promise<AsyncData<DataT, ErrorT>>

type UseFetchOptions<ResT, DataT = ResT> = {
  key?: MaybeRefOrGetter<string>
  method?: MaybeRefOrGetter<string>
  query?: MaybeRefOrGetter<SearchParams>
  params?: MaybeRefOrGetter<SearchParams>
  body?: MaybeRefOrGetter<RequestInit['body'] | Record<string, any>>
  headers?: MaybeRefOrGetter<Record<string, string> | [key: string, value: string][] | Headers>
  baseURL?: MaybeRefOrGetter<string>
  cache?: false | 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload'
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  getCachedData?: (key: string, nuxtApp: NuxtApp, ctx: AsyncDataRequestContext) => DataT | undefined
  deep?: boolean
  dedupe?: 'cancel' | 'defer'
  timeout?: number
  enabled?: MaybeRefOrGetter<boolean>
  serialize?: boolean
  default?: () => DataT | Ref<DataT>
  transform?: (input: ResT) => DataT | Promise<DataT>
  pick?: string[]
  $fetch?: typeof globalThis.$fetch
  watch?: MultiWatchSources | false
}

type AsyncDataRequestContext = {
  /** The reason for this data request */
  cause: 'initial' | 'refresh:manual' | 'refresh:hook' | 'watch'
}

type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | undefined>
  pending: Ref<boolean>
  refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>
  execute: (opts?: AsyncDataExecuteOptions) => Promise<void>
  clear: () => void
  error: Ref<ErrorT | undefined>
  status: Ref<AsyncDataRequestStatus>
}

interface AsyncDataExecuteOptions {
  dedupe?: 'cancel' | 'defer'
  timeout?: number
  signal?: AbortSignal
}

type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
```

## Parameters

- `URL` (`string | Request | Ref<string | Request> | () => string | Request`): The URL or request to fetch. Can be a string, a Request object, a Vue ref, or a function returning a string/Request. Supports reactivity for dynamic endpoints.
- `options` (object): Configuration for the fetch request. Extends [unjs/ofetch](https://github.com/unjs/ofetch) options and [`AsyncDataOptions`](https://nuxt.com/docs/4.x/api/composables/use-async-data#parameters). All options can be a static value, a `ref`, or a computed value.

<table>
<thead>
  <tr>
    <th>
      Option
    </th>
    
    <th>
      Type
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
        key
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<string>
      </code>
    </td>
    
    <td>
      auto-gen
    </td>
    
    <td>
      Unique key for de-duplication. If not provided, generated from the URL, options and call site location in the source code.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        method
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<string>
      </code>
    </td>
    
    <td>
      <code>
        'GET'
      </code>
    </td>
    
    <td>
      HTTP request method.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        query
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<SearchParams>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Query/search params to append to the URL. Alias: <code>
        params
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        params
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<SearchParams>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Alias for <code>
        query
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        body
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<RequestInit['body'] | Record<string, any>>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Request body. Objects are automatically stringified.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        headers
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<Record<string, string> | [key, value][] | Headers>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Request headers.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        baseURL
      </code>
    </td>
    
    <td>
      <code>
        MaybeRefOrGetter<string>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Base URL for the request.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cache
      </code>
    </td>
    
    <td>
      <code>
        false | string
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Cache control. Boolean disables cache, or use Fetch API values: <code>
        default
      </code>
      
      , <code>
        no-store
      </code>
      
      , etc.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        server
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Whether to fetch on the server.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        lazy
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      If true, resolves after route loads (does not block navigation).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        immediate
      </code>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      If false, prevents request from firing immediately.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        default
      </code>
    </td>
    
    <td>
      <code>
        () => DataT
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Factory for default value of <code>
        data
      </code>
      
       before async resolves.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        timeout
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v4.2
      </badge>
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      A number in milliseconds to wait before timing out the request (defaults to <code>
        undefined
      </code>
      
      , which means no timeout)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        transform
      </code>
    </td>
    
    <td>
      <code>
        (input: DataT) => DataT | Promise<DataT>
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Function to transform the result after resolving.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getCachedData
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v3.8
      </badge>
    </td>
    
    <td>
      <code>
        (key, nuxtApp, ctx) => DataT | undefined
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Function to return cached data. See below for default.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pick
      </code>
    </td>
    
    <td>
      <code>
        string[]
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Only pick specified keys from the result.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        watch
      </code>
    </td>
    
    <td>
      <code>
        MultiWatchSources | false
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Array of reactive sources to watch and auto-refresh. <code>
        false
      </code>
      
       disables watching.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        deep
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v3.8
      </badge>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      Return data in a deep ref object. Defaults to <code>
        false
      </code>
      
       for improved performance (shallow ref object).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dedupe
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v3.9
      </badge>
    </td>
    
    <td>
      <code>
        'cancel' | 'defer'
      </code>
    </td>
    
    <td>
      <code>
        'cancel'
      </code>
    </td>
    
    <td>
      Avoid fetching same key more than once at a time.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        enabled
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v4.5
      </badge>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Barrier that gates whether the request may run. While <code>
        false
      </code>
      
      , every execution is blocked (initial fetch, <code>
        execute
      </code>
      
      /<code>
        refresh
      </code>
      
      , and watch triggers), and switching <code>
        true
      </code>
      
       → <code>
        false
      </code>
      
       cancels any in-flight request without clearing <code>
        data
      </code>
      
      . Re-enabling does not refetch on its own.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        serialize
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v4.6
      </badge>
    </td>
    
    <td>
      <code>
        boolean
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Whether to store resolved data in the Nuxt payload (<code>
        __NUXT_DATA__
      </code>
      
      ). When <code>
        false
      </code>
      
      , server-fetched data is kept out of the payload and the client will refetch after hydration if a component renders it. Pair with <a href="https://nuxt.com/docs/4.x/guide/best-practices/performance#lazy-hydration">
        lazy hydration
      </a>
      
       to avoid hydration mismatches and unnecessary client fetches.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        $fetch
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v3.2
      </badge>
    </td>
    
    <td>
      <code>
        typeof globalThis.$fetch
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Custom $fetch implementation. See <a href="https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch">
        Custom useFetch in Nuxt
      </a>
    </td>
  </tr>
</tbody>
</table>

::note
All fetch options can be given a `computed` or `ref` value. These will be watched and new requests made automatically with any new values if they are updated (unless `watch` is set to `false`).
::

**getCachedData default:**

```ts [Default getCachedData Implementation]
const getDefaultCachedData = (key, nuxtApp, ctx) => nuxtApp.isHydrating
  ? nuxtApp.payload.data[key]
  : nuxtApp.static.data[key]
```

This only caches data when `experimental.payloadExtraction` in `nuxt.config` is enabled.

## Return Values

This composable returns a `Promise` that can be awaited, which makes it possible to use `data` directly within the `<script setup>` (i.e. a value will be present, instead of being undefined). You can also directly pull the values without awaiting the return value, in which case `data` can be undefined within `<script setup>` until the fetch completes.

::tip
Even if you do not await the return value, during SSR Nuxt will wait for the request to finish and send the resolved data to the client.
::

::note
If you have not fetched data on the server (for example, with `server: false`), then the data *will not* be fetched until hydration completes. This means even if you await `useFetch` on client-side, `data` will remain undefined within `<script setup>`.
::

<table>
<thead>
  <tr>
    <th>
      Name
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
        data
      </code>
    </td>
    
    <td>
      <code>
        Ref<DataT | undefined>
      </code>
    </td>
    
    <td>
      The result of the asynchronous fetch.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        refresh
      </code>
    </td>
    
    <td>
      <code>
        (opts?: AsyncDataExecuteOptions) => Promise<void>
      </code>
    </td>
    
    <td>
      Function to manually refresh the data. By default, Nuxt waits until a <code>
        refresh
      </code>
      
       is finished before it can be executed again.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        execute
      </code>
    </td>
    
    <td>
      <code>
        (opts?: AsyncDataExecuteOptions) => Promise<void>
      </code>
    </td>
    
    <td>
      Alias for <code>
        refresh
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        error
      </code>
    </td>
    
    <td>
      <code>
        Ref<ErrorT | undefined>
      </code>
    </td>
    
    <td>
      Error object if the data fetching failed.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        status
      </code>
    </td>
    
    <td>
      <code>
        Ref<'idle' | 'pending' | 'success' | 'error'>
      </code>
    </td>
    
    <td>
      Status of the data request. Use it to distinguish <code>
        idle
      </code>
      
      , <code>
        pending
      </code>
      
      , <code>
        success
      </code>
      
      , and <code>
        error
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pending
      </code>
    </td>
    
    <td>
      <code>
        Ref<boolean>
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
      
       while a request is in flight. With <a href="https://nuxt.com/docs/4.x/guide/going-further/experimental-features#pendingwhenidle">
        <code>
          experimental.pendingWhenIdle
        </code>
      </a>
      
      , it is also <code>
        true
      </code>
      
       when <code>
        status
      </code>
      
       is <code>
        idle
      </code>
      
       and no cached data is available.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        clear
      </code>
    </td>
    
    <td>
      <code>
        () => void
      </code>
    </td>
    
    <td>
      Resets <code>
        data
      </code>
      
       to <code>
        undefined
      </code>
      
       (or the value of <code>
        options.default()
      </code>
      
       if provided), <code>
        error
      </code>
      
       to <code>
        undefined
      </code>
      
      , set <code>
        status
      </code>
      
       to <code>
        idle
      </code>
      
      , and cancels any pending requests.
    </td>
  </tr>
</tbody>
</table>

::tip
Functions from the `Promise` (`then`, `catch`, and `finally`) can safely be destructured, if you did not await the return value.
::

### Status Values

- `idle`: Request has not started (e.g. `{ immediate: false }` or `{ server: false }` on server render)
- `pending`: Request is in progress
- `success`: Request completed successfully
- `error`: Request failed

### Example

:link-example{to="https://nuxt.com/docs/4.x/examples/advanced/use-custom-fetch-composable"}:link-example{to="https://nuxt.com/docs/4.x/examples/features/data-fetching"}---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/fetch.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
