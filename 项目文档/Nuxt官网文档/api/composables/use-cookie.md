---
title: "useCookie"
description: "useCookie is an SSR-friendly composable to read and write cookies."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-cookie"
---
# useCookie

> useCookie is an SSR-friendly composable to read and write cookies.

## Usage

Within your pages, components, and plugins, you can use `useCookie` to read and write cookies in an SSR-friendly way.

```ts [Usage]
const cookie = useCookie(name, options)
```

::note
`useCookie` only works in the [Nuxt context](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app#the-nuxt-context).
::

::tip
The returned ref will automatically serialize and deserialize cookie values to JSON.
::

## Type

```ts [Signature]
import type { Ref } from 'vue'
import type { CookieParseOptions, CookieSerializeOptions } from 'cookie-es'

export interface CookieOptions<T = any> extends Omit<CookieSerializeOptions & CookieParseOptions, 'decode' | 'encode'> {
  decode?(value: string): T
  encode?(value: T): string
  default?: () => T | Ref<T>
  watch?: boolean | 'shallow'
  readonly?: boolean
  refresh?: boolean
}

export interface CookieRef<T> extends Ref<T> {}

export function useCookie<T = string | null | undefined> (
  name: string,
  options?: CookieOptions<T>,
): CookieRef<T>
```

## Parameters

`name`: The name of the cookie.

`options`: Options to control cookie behavior. The object can have the following properties:

Most of the options will be directly passed to the [cookie](https://github.com/jshttp/cookie) package.

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
        decode
      </code>
    </td>
    
    <td>
      <code>
        (value: string) => T
      </code>
    </td>
    
    <td>
      <code>
        decodeURIComponent
      </code>
      
       + <a href="https://github.com/unjs/destr" rel="nofollow">
        destr
      </a>
      
      .
    </td>
    
    <td>
      Custom function to decode the cookie value.  Since the value of a cookie has a limited character set (and must be a simple string), this function can be used to decode a previously encoded cookie value into a JavaScript string or other object. <br />
      
       <strong>
        Note:
      </strong>
      
       If an error is thrown from this function, the original, non-decoded cookie value will be returned as the cookie's value.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        encode
      </code>
    </td>
    
    <td>
      <code>
        (value: T) => string
      </code>
    </td>
    
    <td>
      <code>
        JSON.stringify
      </code>
      
       + <code>
        encodeURIComponent
      </code>
    </td>
    
    <td>
      Custom function to encode the cookie value. Since the value of a cookie has a limited character set (and must be a simple string), this function can be used to encode a value into a string suited for a cookie's value.
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
        () => T | Ref<T>
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Function returning the default value if the cookie does not exist.  The function can also return a <code>
        Ref
      </code>
      
      .
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
        boolean | 'shallow'
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
    
    <td>
      Whether to watch for changes and update the cookie. <code>
        true
      </code>
      
       for deep watch, <code>
        'shallow'
      </code>
      
       for shallow watch, i.e. data changes for only top level properties, <code>
        false
      </code>
      
       to disable. <br />
      
       <strong>
        Note:
      </strong>
      
       Refresh <code>
        useCookie
      </code>
      
       values manually when a cookie has changed with <a href="https://nuxt.com/docs/4.x/api/utils/refresh-cookie">
        <code>
          refreshCookie
        </code>
      </a>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        refresh
      </code>
      
       <badge className="align-middle" color="info" size="xs">
        v4.4
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
      If <code>
        true
      </code>
      
      , the cookie expiration will be refreshed on every explicit write (e.g. <code>
        cookie.value = cookie.value
      </code>
      
      ), even if the value itself hasn’t changed. Note: the expiration is not refreshed automatically — you must assign to <code>
        .value
      </code>
      
       to trigger it.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        readonly
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
      If <code>
        true
      </code>
      
      , disables writing to the cookie, on both server and client. A <code>
        default
      </code>
      
       value is still returned by the composable but is never persisted to the browser.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        maxAge
      </code>
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Max age in seconds for the cookie, i.e. the value for the <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.2" rel="nofollow">
        <code>
          Max-Age
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . The given number will be converted to an integer by rounding down. By default, no maximum age is set.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        expires
      </code>
    </td>
    
    <td>
      <code>
        Date | (() => Date | undefined)
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Expiration date for the cookie, or a getter that returns one. When a function is provided, it is evaluated on every cookie write, so the expiration can be refreshed when the value is re-set. Returning <code>
        undefined
      </code>
      
       creates a session cookie. The getter should be pure (no side effects). By default, no expiration is set. Most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application. <br />
      
       <strong>
        Note:
      </strong>
      
       The <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.3" rel="nofollow">
        cookie storage model specification
      </a>
      
       states that if both <code>
        expires
      </code>
      
       and <code>
        maxAge
      </code>
      
       is set, then <code>
        maxAge
      </code>
      
       takes precedence, but not all clients may obey this, so if both are set, they should point to the same date and time! <br />
      
      If neither of <code>
        expires
      </code>
      
       and <code>
        maxAge
      </code>
      
       is set, the cookie will be session-only and removed when the user closes their browser.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        httpOnly
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
      Sets the HttpOnly attribute. <br />
      
       <strong>
        Note:
      </strong>
      
       Be careful when setting this to <code>
        true
      </code>
      
      , as compliant clients will not allow client-side JavaScript to see the cookie in <code>
        document.cookie
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        secure
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
      Sets the <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.5" rel="nofollow">
        <code>
          Secure
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . <br />
      
      <strong>
        Note:
      </strong>
      
       Be careful when setting this to <code>
        true
      </code>
      
      , as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection. This can lead to hydration errors.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        partitioned
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
      Sets the <a href="https://datatracker.ietf.org/doc/html/draft-cutler-httpbis-partitioned-cookies#section-2.1" rel="nofollow">
        <code>
          Partitioned
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . <br />
      
      <strong>
        Note:
      </strong>
      
       This is an attribute that has not yet been fully standardized, and may change in the future. <br />
      
      This also means many clients may ignore this attribute until they understand it.<br />
      
      More information can be found in the <a href="https://github.com/privacycg/CHIPS" rel="nofollow">
        proposal
      </a>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        domain
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Sets the <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.3" rel="nofollow">
        <code>
          Domain
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . By default, no domain is set, and most clients will consider applying the cookie only to the current domain.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        path
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        '/'
      </code>
    </td>
    
    <td>
      Sets the <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.2.4" rel="nofollow">
        <code>
          Path
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . By default, the path is considered the <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4" rel="nofollow">
        "default path"
      </a>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        sameSite
      </code>
    </td>
    
    <td>
      <code>
        boolean | string
      </code>
    </td>
    
    <td>
      <code>
        undefined
      </code>
    </td>
    
    <td>
      Sets the <a href="https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7" rel="nofollow">
        <code>
          SameSite
        </code>
        
         <code>
          Set-Cookie
        </code>
        
         attribute
      </a>
      
      . <br />
      
      - <code>
        true
      </code>
      
       will set the <code>
        SameSite
      </code>
      
       attribute to <code>
        Strict
      </code>
      
       for strict same-site enforcement.<br />
      
      - <code>
        false
      </code>
      
       will not set the <code>
        SameSite
      </code>
      
       attribute.<br />
      
      - <code>
        'lax'
      </code>
      
       will set the <code>
        SameSite
      </code>
      
       attribute to <code>
        Lax
      </code>
      
       for lax same-site enforcement.<br />
      
      - <code>
        'none'
      </code>
      
       will set the <code>
        SameSite
      </code>
      
       attribute to <code>
        None
      </code>
      
       for an explicit cross-site cookie.<br />
      
      - <code>
        'strict'
      </code>
      
       will set the <code>
        SameSite
      </code>
      
       attribute to <code>
        Strict
      </code>
      
       for strict same-site enforcement.
    </td>
  </tr>
</tbody>
</table>

## Return Values

Returns a Vue `Ref<T>` representing the cookie value. Updating the ref will update the cookie (unless `readonly` is set). The ref is SSR-friendly and will work on both client and server.

## Example

### Basic Usage

The example below creates a cookie called `counter`. If the cookie doesn't exist, it is initially set to a random value. Whenever we update the `counter` variable, the cookie will be updated accordingly.

```vue [app/app.vue]
<script setup lang="ts">
const counter = useCookie('counter')

counter.value ||= Math.round(Math.random() * 1000)
</script>

<template>
  <div>
    <h1>Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">
      reset
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>
```

### Readonly Cookies

```vue [app/app.vue]
<script setup lang="ts">
const user = useCookie(
  'userInfo',
  {
    default: () => ({ score: -1 }),
    watch: false,
  },
)

if (user.value) {
  // the actual `userInfo` cookie will not be updated
  user.value.score++
}
</script>

<template>
  <div>User score: {{ user?.score }}</div>
</template>
```

### Writable Cookies

```vue [app/app.vue]
<script setup lang="ts">
const list = useCookie(
  'list',
  {
    default: () => [],
    watch: 'shallow',
  },
)

function add () {
  list.value?.push(Math.round(Math.random() * 1000))
  // list cookie won't be updated with this change
}

function save () {
  // the actual `list` cookie will be updated
  list.value &&= [...list.value]
}
</script>

<template>
  <div>
    <h1>List</h1>
    <pre>{{ list }}</pre>
    <button @click="add">
      Add
    </button>
    <button @click="save">
      Save
    </button>
  </div>
</template>
```

### Refreshing Cookies

```vue [app/app.vue]
<script setup lang="ts">
const session = useCookie(
  'session', {
    maxAge: 60 * 60, // 1 hour
    refresh: true,
    default: () => 'active',
  })

// Even if the value does not change,
// the cookie expiration will be refreshed
// every time the setter is called
session.value = 'active'
</script>

<template>
  <div>Session: {{ session }}</div>
</template>
```

### Dynamic Expiration with a Getter

Use a function for `expires` when you want a fresh expiration date every time the cookie is written (for example, sliding sessions or tokens):

```vue
<script setup lang="ts">
const token = useCookie('token', {
  // Re-evaluated on every write — keep this getter pure
  expires: () => new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
})

// Assigning a new value also refreshes the cookie expiration
token.value = 'new-token'
</script>
```

### Cookies in API Routes

You can use `getCookie` and `setCookie` from [`h3`](https://github.com/h3js/h3) package to set cookies in server API routes.

```ts [server/api/counter.ts]
export default defineEventHandler((event) => {
  // Read counter cookie
  let counter = getCookie(event, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(event, 'counter', ++counter)

  // Send JSON response
  return { counter }
})
```

:link-example{to="https://nuxt.com/docs/4.x/examples/advanced/use-cookie"}---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/cookie.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
