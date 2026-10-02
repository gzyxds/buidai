---
title: "useAsyncData"
description: "useAsyncData provides access to data that resolves asynchronously in an SSR-friendly composable."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-async-data"
---
# useAsyncData

> useAsyncData provides access to data that resolves asynchronously in an SSR-friendly composable.

Within your pages, components, and plugins you can use useAsyncData to get access to data that resolves asynchronously.

::note
[`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) is a composable meant to be called directly in the [Nuxt context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context). It returns reactive composables and handles adding responses to the Nuxt payload so they can be passed from server to client **without re-fetching the data on client side** when the page hydrates.
::

## Usage

```vue [app/pages/index.vue]
<script setup lang="ts">
const { data, status, pending, error, refresh, clear } = await useAsyncData(
  'mountains',
  (_nuxtApp, { signal }) => $fetch('https://api.nuxtjs.dev/mountains', { signal }),
)
</script>
```

::tip{to="https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch#custom-usefetch-with-createusefetch"}
Need a custom `useAsyncData` with pre-defined defaults? Use `createUseAsyncData` to create a fully typed custom composable. See the [custom useFetch recipe](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch) for details.
::

::note
You do not need to `await` `useAsyncData`. On the server, Nuxt waits for the promise to resolve before rendering in either case, so the returned HTML always contains the data. The `await` affects what happens after the call: with it, execution pauses until `data` is populated, and client-side navigation is blocked until the data is ready; without it, execution continues immediately, `data` starts as its default value until the request resolves, and on client-side navigation you handle the loading and error states yourself using the returned `status` and `error` refs. This has a similar effect to the [`lazy`](#parameters) option, though `lazy` is the explicit way to opt into non-blocking navigation.
::

::note
`data`, `status`, `pending`, and `error` are Vue refs. Access their values with `.value` in `<script setup>`. `refresh`/`execute` and `clear` are plain functions.
::

### Watch Parameters

The built-in `watch` option allows automatically rerunning the fetcher function when any changes are detected.

```vue [app/pages/index.vue]
<script setup lang="ts">
const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  (_nuxtApp, { signal }) => $fetch('https://fakeApi.com/posts', {
    params: {
      page: page.value,
    },
    signal,
  }), {
    watch: [page],
  },
)
</script>
```

### Reactive Keys

You can use a computed ref, plain ref or a getter function as the key, allowing for dynamic data fetching that automatically updates when the key changes:

```vue [app/pages/[id].vue]
<script setup lang="ts">
const route = useRoute()
const userId = computed(() => `user-${route.params.id}`)

// When the route changes and userId updates, the data will be automatically refetched
const { data: user } = useAsyncData(
  userId,
  () => fetchUserById(route.params.id),
)
</script>
```

### Make Your `handler` Abortable

You can make your `handler` function abortable by using the `signal` provided in the second argument. This is useful for cancelling requests when they are no longer needed, such as when a user navigates away from a page. `$fetch` natively supports abort signals.

```ts [app/pages/index.vue]
const { data, error } = await useAsyncData(
  'users',
  (_nuxtApp, { signal }) => $fetch('/api/users', { signal }),
)

refresh() // will actually cancel the $fetch request (if dedupe: cancel)
refresh() // will actually cancel the $fetch request (if dedupe: cancel)
refresh()

clear() // will cancel the latest pending handler
```

You can also pass an `AbortSignal` to the `refresh`/`execute` function to cancel individual requests manually.

```ts [app/pages/index.vue]
const { refresh } = await useAsyncData(
  'users',
  (_nuxtApp, { signal }) => $fetch('/api/users', { signal }),
)
let abortController: AbortController | undefined

function handleUserAction () {
  abortController = new AbortController()
  refresh({ signal: abortController.signal })
}

function handleCancel () {
  abortController?.abort() // aborts the ongoing refresh request
}
```

If your `handler` function does not support abort signals, you can implement your own abort logic using the `signal` provided.

```ts [app/pages/index.vue]
const { data, error } = await useAsyncData(
  'users',
  (_nuxtApp, { signal }) => {
    return new Promise((resolve, reject) => {
      signal?.addEventListener('abort', () => {
        reject(new Error('Request aborted'))
      })
      return Promise.resolve(callback.call(this, yourHandler)).then(resolve, reject)
    })
  },
)
```

The handler signal will be aborted when:

- A new request is made with `dedupe: 'cancel'`
- The `clear` function is called
- The `options.timeout` duration is exceeded

::warning
[`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) is a reserved function name transformed by the compiler, so you should not name your own function [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data).
::

:read-more{to="https://nuxt.com/docs/4.x/getting-started/data-fetching#useasyncdata"}## Type

```ts [Signature]
export type AsyncDataHandler<ResT> = (nuxtApp: NuxtApp, options: { signal: AbortSignal }) => Promise<ResT>

export function useAsyncData<ResT, DataE = unknown, DataT = ResT> (
  handler: AsyncDataHandler<ResT>,
  options?: AsyncDataOptions<ResT, DataT>,
): AsyncData<DataT, DataE> & Promise<AsyncData<DataT, DataE>>
export function useAsyncData<ResT, DataE = unknown, DataT = ResT> (
  key: MaybeRefOrGetter<string>,
  handler: AsyncDataHandler<ResT>,
  options?: AsyncDataOptions<ResT, DataT>,
): AsyncData<DataT, DataE> & Promise<AsyncData<DataT, DataE>>

type AsyncDataOptions<ResT, DataT = ResT> = {
  server?: boolean
  lazy?: boolean
  immediate?: boolean
  deep?: boolean
  dedupe?: 'cancel' | 'defer'
  default?: () => DataT | Ref<DataT>
  transform?: (input: ResT) => DataT | Promise<DataT>
  pick?: string[]
  watch?: MultiWatchSources
  getCachedData?: (key: string, nuxtApp: NuxtApp, ctx: AsyncDataRequestContext) => DataT | undefined
  timeout?: number
  enabled?: MaybeRefOrGetter<boolean>
  serialize?: boolean
}

type AsyncDataRequestContext = {
  /** The reason for this data request */
  cause: 'initial' | 'refresh:manual' | 'refresh:hook' | 'watch'
}

type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | undefined>
  refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>
  execute: (opts?: AsyncDataExecuteOptions) => Promise<void>
  clear: () => void
  error: Ref<ErrorT | undefined>
  status: Ref<AsyncDataRequestStatus>
  pending: Ref<boolean>
}

interface AsyncDataExecuteOptions {
  dedupe?: 'cancel' | 'defer'
  timeout?: number
  signal?: AbortSignal
}

type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
```

:read-more{to="https://nuxt.com/docs/4.x/getting-started/data-fetching"}## Parameters

- `key`: a unique key to ensure that data fetching can be properly de-duplicated across requests. If you do not provide a key, then a key that is unique to the file name and line number of the instance of `useAsyncData` will be generated for you.
- `handler`: an asynchronous function that must return a truthy value (for example, it should not be `undefined` or `null`) or the request may be duplicated on the client side.
::warning
The `handler` function should be **side-effect free** to ensure predictable behavior during SSR and CSR hydration. If you need to trigger side effects, use the [`callOnce`](https://nuxt.com/docs/4.x/api/utils/call-once) utility to do so.
::
- `options` (object): Configuration for the asynchronous function call. All options can be a static value, a `ref`, or a computed value.

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
      Whether to call the function on the server.
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
      If false, prevents function from being called immediately.
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
      A number in milliseconds to wait before timing out the call (defaults to <code>
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
        MultiWatchSources
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Array of reactive sources to watch and auto-refresh.
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
      Policy when triggering an execution more than once at a time.
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
      Barrier that gates whether the <code>
        handler
      </code>
      
       may run. While <code>
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
</tbody>
</table>

::note
All options can be given a `computed` or `ref` value. These will be watched and new requests made automatically with any new values if they are updated.
::

**getCachedData default:**

```ts [Default getCachedData Implementation]
const getDefaultCachedData = (key, nuxtApp, ctx) => nuxtApp.isHydrating
  ? nuxtApp.payload.data[key]
  : nuxtApp.static.data[key]
```

This only caches data when `experimental.payloadExtraction` in `nuxt.config` is enabled.

::note
Under the hood, `lazy: false` uses `<Suspense>` to block the loading of the route before the data has been fetched. Consider using `lazy: true` and implementing a loading state instead for a snappier user experience.
::

::read-more{to="https://nuxt.com/docs/4.x/api/composables/use-lazy-async-data"}
You can use `useLazyAsyncData` to have the same behavior as `lazy: true` with `useAsyncData`.
::

:video-accordion{title="Watch a video from Alexander Lichter about client-side caching with getCachedData" video-id="aQPR0xn-MMk"}### Shared State and Option Consistency

When multiple `useAsyncData` calls use the same key, they share the same `data`, `error`, `status`, and `pending` refs. Keep the options listed below consistent across these calls.

The following options **must be consistent** across all calls with the same key:

- `handler` function
- `deep` option
- `transform` function
- `pick` array
- `getCachedData` function
- `default` value

The following options **can differ** without triggering warnings:

- `server`
- `lazy`
- `immediate`
- `dedupe`
- `watch`
- `enabled`
- `serialize`

```ts [app/pages/index.vue]
// ❌ This will trigger a development warning
const { data: users1 } = useAsyncData('users', (_nuxtApp, { signal }) => $fetch('/api/users', { signal }), { deep: false })
const { data: users2 } = useAsyncData('users', (_nuxtApp, { signal }) => $fetch('/api/users', { signal }), { deep: true })

// ✅ This is allowed
const { data: users1 } = useAsyncData('users', (_nuxtApp, { signal }) => $fetch('/api/users', { signal }), { immediate: true })
const { data: users2 } = useAsyncData('users', (_nuxtApp, { signal }) => $fetch('/api/users', { signal }), { immediate: false })
```

::tip
Keyed state created using `useAsyncData` can be retrieved across your Nuxt application using [`useNuxtData`](https://nuxt.com/docs/4.x/api/composables/use-nuxt-data).
::

## Return Values

This composable returns a `Promise` that can be awaited, which makes it possible to use `data` directly within the `<script setup>` (i.e. a value will be present, instead of being undefined). You can also directly pull the values without awaiting the return value, in which case `data` can be undefined within `<script setup>` until the fetch completes.

::tip
Even if you do not await the return value, during SSR Nuxt will wait for the request to finish and send the resolved data to the client.
::

::note
If you have not fetched data on the server (for example, with `server: false`), then the data *will not* be fetched until hydration completes. This means even if you await [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data) on the client side, `data` will remain `undefined` within `<script setup>`.
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
      The result of the asynchronous function that is passed in.
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
      Error object if the asynchronous function threw an error.
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
      Status of the asynchronous function call. Use it to distinguish <code>
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
      
      , and cancels any pending calls.
    </td>
  </tr>
</tbody>
</table>

::tip
Functions from the `Promise` (`then`, `catch`, and `finally`) can safely be destructured, if you did not await the return value.
::

### Status Values

- `idle`: Function has not been called yet (e.g. `{ immediate: false }` or `{ server: false }` on server render)
- `pending`: Function has been called and the promise is pending
- `success`: Function returned a value
- `error`: Function threw an error

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/asyncData.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
