---
title: "Server"
description: "Build full-stack applications with Nuxt's server framework. You can fetch data from your database or another server, create APIs, or even generate static server-side content like a sitemap or a RSS feed - all from a single codebase."
canonical_url: "https://nuxt.com/docs/4.x/getting-started/server"
---
# Server

> Build full-stack applications with Nuxt's server framework. You can fetch data from your database or another server, create APIs, or even generate static server-side content like a sitemap or a RSS feed - all from a single codebase.

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/server"}## Powered by Nitro

![Server engine](https://nuxt.com/assets/docs/getting-started/server.svg)

Nuxt's server is [Nitro](https://github.com/nitrojs/nitro). It was originally created for Nuxt but is now part of [UnJS](https://unjs.io) and open for other frameworks - and can even be used on its own.

Using Nitro gives Nuxt superpowers:

- Full control of the server-side part of your app
- Universal deployment on any provider (many zero-config)
- Hybrid rendering

Nitro is internally using [h3](https://github.com/h3js/h3), a minimal H(TTP) framework built for high performance and portability.

:video-accordion{title="Watch a video from Alexander Lichter to understand the responsibilities of Nuxt and Nitro in your application" video-id="DkvgJa-X31k"}## Server Endpoints & Middleware

You can easily manage the server-only part of your Nuxt app, from API endpoints to middleware.

Both endpoints and middleware can be defined like this:

```ts [server/api/test.ts]twoslash
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
})
```

And you can directly return `text`, `json`, `html` or even a `stream`.

Out-of-the-box, it supports **hot module replacement** and **auto-import** like the other parts of your Nuxt application.

:read-more{to="https://nuxt.com/docs/4.x/directory-structure/server"}## Universal Deployment

Nitro offers the ability to deploy your Nuxt app anywhere, from a bare metal server to the edge network, with a start time of just a few milliseconds. That's fast!

:read-more{to="https://nuxt.com/blog/nuxt-on-the-edge"}There are more than 15 presets to build your Nuxt app for different cloud providers and servers, including:

- [Cloudflare Workers](https://workers.cloudflare.com)
- [Netlify Functions](https://www.netlify.com/platform/core/functions/)
- [Vercel Cloud](https://vercel.com/home)

Or for other runtimes:

::card-group
:card{icon="i-logos-deno" target="_blank" title="Deno" to="https://deno.com"}:card{icon="i-logos-bun" target="_blank" title="Bun" to="https://bun.com"}
::

:read-more{to="https://nuxt.com/docs/4.x/getting-started/deployment"}## Hybrid Rendering

Nuxt has a powerful feature called `routeRules` which allows you to define a set of rules to customize how each route of your Nuxt app is rendered (and more). Nuxt compiles the rules, and the default server builder (Nitro) applies the server-side ones.

```ts [nuxt.config.ts]twoslash
export default defineNuxtConfig({
  routeRules: {
    // Generated at build time for SEO purpose
    '/': { prerender: true },
    // Cached for 1 hour
    '/api/*': { cache: { maxAge: 60 * 60 } },
    // Redirection to avoid 404
    '/old-page': {
      redirect: { to: '/new-page', statusCode: 302 },
    },
    // ...
  },
})
```

::read-more{to="https://nuxt.com/docs/4.x/guide/concepts/rendering#hybrid-rendering"}
Learn about all the route rules available to customize the rendering mode of your routes.
::

In addition, there are some route rules (for example, `ssr`, `appMiddleware`, and `noScripts`) that are Nuxt specific to change the behavior when rendering your pages to HTML.

Some route rules (`appMiddleware`, `redirect` and `prerender`) also affect client-side behavior.

Nitro is used to build the app for server side rendering, as well as pre-rendering.

:read-more{to="https://nuxt.com/docs/4.x/guide/concepts/rendering"}


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
