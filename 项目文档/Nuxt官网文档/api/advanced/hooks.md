---
title: "Lifecycle Hooks"
description: "Nuxt provides a powerful hooking system to expand almost every aspect using hooks."
canonical_url: "https://nuxt.com/docs/4.x/api/advanced/hooks"
---
# Lifecycle Hooks

> Nuxt provides a powerful hooking system to expand almost every aspect using hooks.

:read-more{to="https://nuxt.com/docs/4.x/guide/going-further/hooks"}## App Hooks (Runtime)

Check the [app source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/nuxt.ts#L37) for all available hooks.

<table>
<thead>
  <tr>
    <th>
      Hook
    </th>
    
    <th>
      Arguments
    </th>
    
    <th>
      Environment
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
        app:created
      </code>
    </td>
    
    <td>
      <code>
        vueApp
      </code>
    </td>
    
    <td>
      Server & Client
    </td>
    
    <td>
      Called when initial <code>
        vueApp
      </code>
      
       instance is created.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:error
      </code>
    </td>
    
    <td>
      <code>
        err
      </code>
    </td>
    
    <td>
      Server & Client
    </td>
    
    <td>
      Called when a fatal error occurs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:error:cleared
      </code>
    </td>
    
    <td>
      <code>
        { redirect? }
      </code>
    </td>
    
    <td>
      Server & Client
    </td>
    
    <td>
      Called when a fatal error occurs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vue:setup
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Server & Client
    </td>
    
    <td>
      Called when the setup of Nuxt root is initialized. This callback must be synchronous.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vue:error
      </code>
    </td>
    
    <td>
      <code>
        err, target, info
      </code>
    </td>
    
    <td>
      Server & Client
    </td>
    
    <td>
      Called when a vue error propagates to the root component. <a href="https://vuejs.org/api/composition-api-lifecycle#onerrorcaptured" rel="nofollow">
        Learn More
      </a>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:rendered
      </code>
    </td>
    
    <td>
      <code>
        renderContext
      </code>
    </td>
    
    <td>
      Server
    </td>
    
    <td>
      Called when SSR rendering is done.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:redirected
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Server
    </td>
    
    <td>
      Called before SSR redirection.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:beforeMount
      </code>
    </td>
    
    <td>
      <code>
        vueApp
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called before mounting the app, called only on client side.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:mounted
      </code>
    </td>
    
    <td>
      <code>
        vueApp
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called when Vue app is initialized and mounted in browser.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:suspense:resolve
      </code>
    </td>
    
    <td>
      <code>
        appComponent
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      On <a href="https://vuejs.org/guide/built-ins/suspense#suspense" rel="nofollow">
        Suspense
      </a>
      
       resolved event.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:manifest:update
      </code>
    </td>
    
    <td>
      <code>
        { id, timestamp }
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called when there is a newer version of your app detected.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:data:refresh
      </code>
    </td>
    
    <td>
      <code>
        keys?
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called when <code>
        refreshNuxtData
      </code>
      
       is called.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        link:prefetch
      </code>
    </td>
    
    <td>
      <code>
        to
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called when a <code>
        <NuxtLink>
      </code>
      
       is observed to be prefetched.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:start
      </code>
    </td>
    
    <td>
      <code>
        pageComponent?
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called on <a href="https://vuejs.org/guide/built-ins/suspense#suspense" rel="nofollow">
        Suspense
      </a>
      
       inside of <code>
        NuxtPage
      </code>
      
       pending event.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:finish
      </code>
    </td>
    
    <td>
      <code>
        pageComponent?
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called on <a href="https://vuejs.org/guide/built-ins/suspense#suspense" rel="nofollow">
        Suspense
      </a>
      
       inside of <code>
        NuxtPage
      </code>
      
       resolved event.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:loading:start
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called when a route navigation begins (before resolution) or when the page key changes. May fire without the page component's <code>
        setup()
      </code>
      
       re-running if the page is reused (e.g. with a static <code>
        key
      </code>
      
       in <code>
        definePageMeta
      </code>
      
      ).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:loading:end
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called after <code>
        page:finish
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:transition:finish
      </code>
    </td>
    
    <td>
      <code>
        pageComponent?
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      After page transition <a href="https://vuejs.org/guide/built-ins/transition#javascript-hooks" rel="nofollow">
        onAfterLeave
      </a>
      
       event.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        dev:ssr-logs
      </code>
    </td>
    
    <td>
      <code>
        logs
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called with an array of server-side logs that have been passed to the client (if <code>
        features.devLogs
      </code>
      
       is enabled).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        page:view-transition:start
      </code>
    </td>
    
    <td>
      <code>
        transition
      </code>
    </td>
    
    <td>
      Client
    </td>
    
    <td>
      Called after <code>
        document.startViewTransition
      </code>
      
       is called when <a href="https://nuxt.com/docs/4.x/getting-started/transitions#view-transitions-api-experimental">
        experimental viewTransition support is enabled
      </a>
      
      . The <code>
        transition
      </code>
      
       argument is a <a href="https://developer.mozilla.org/en-US/docs/Web/API/ViewTransition" rel="nofollow">
        <code>
          ViewTransition
        </code>
      </a>
      
       object with a <code>
        types
      </code>
      
       property (<a href="https://developer.mozilla.org/en-US/docs/Web/API/ViewTransitionTypeSet" rel="nofollow">
        <code>
          ViewTransitionTypeSet
        </code>
      </a>
      
      ) that can be read or modified.
    </td>
  </tr>
</tbody>
</table>

## Nuxt Hooks (Build Time)

Check the [schema source code](https://github.com/nuxt/nuxt/blob/main/packages/schema/src/types/hooks.ts#L83) for all available hooks.

<table>
<thead>
  <tr>
    <th>
      Hook
    </th>
    
    <th>
      Arguments
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
        kit:compatibility
      </code>
    </td>
    
    <td>
      <code>
        compatibility, issues
      </code>
    </td>
    
    <td>
      Allows extending compatibility checks.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        ready
      </code>
    </td>
    
    <td>
      <code>
        nuxt
      </code>
    </td>
    
    <td>
      Called after Nuxt initialization, when the Nuxt instance is ready to work.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        close
      </code>
    </td>
    
    <td>
      <code>
        nuxt
      </code>
    </td>
    
    <td>
      Called when Nuxt instance is gracefully closing.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        restart
      </code>
    </td>
    
    <td>
      <code>
        { hard?: boolean }
      </code>
    </td>
    
    <td>
      To be called to restart the current Nuxt instance.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        modules:before
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called during Nuxt initialization, before installing user modules.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        modules:done
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called during Nuxt initialization, after installing user modules.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        module:before
      </code>
    </td>
    
    <td>
      <code>
        module
      </code>
    </td>
    
    <td>
      Called immediately before each individual module is set up.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        module:done
      </code>
    </td>
    
    <td>
      <code>
        module
      </code>
    </td>
    
    <td>
      Called immediately after each individual module has been set up, including how long it took.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:resolve
      </code>
    </td>
    
    <td>
      <code>
        app
      </code>
    </td>
    
    <td>
      Called after resolving the <code>
        app
      </code>
      
       instance.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:templates
      </code>
    </td>
    
    <td>
      <code>
        app
      </code>
    </td>
    
    <td>
      Called during <code>
        NuxtApp
      </code>
      
       generation, to allow customizing, modifying or adding new files to the build directory (either virtually or to written to <code>
        .nuxt
      </code>
      
      ).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        app:templatesGenerated
      </code>
    </td>
    
    <td>
      <code>
        app
      </code>
    </td>
    
    <td>
      Called after templates are compiled into the <a href="https://nuxt.com/docs/4.x/directory-structure/nuxt">
        virtual file system
      </a>
      
       (vfs).
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        build:before
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called before Nuxt bundle builder.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        build:done
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called after Nuxt bundle builder is complete.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        build:manifest
      </code>
    </td>
    
    <td>
      <code>
        manifest
      </code>
    </td>
    
    <td>
      Called during the manifest build by Vite and webpack. This allows customizing the manifest that Nitro will use to render <code>
        <script>
      </code>
      
       and <code>
        <link>
      </code>
      
       tags in the final HTML.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        builder:generateApp
      </code>
    </td>
    
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      Called before generating the app.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        builder:watch
      </code>
    </td>
    
    <td>
      <code>
        event, path
      </code>
    </td>
    
    <td>
      Called at build time in development when the watcher spots a change to a file or directory in the project.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pages:extend
      </code>
    </td>
    
    <td>
      <code>
        pages
      </code>
    </td>
    
    <td>
      Called after page routes are scanned from the file system.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pages:resolved
      </code>
    </td>
    
    <td>
      <code>
        pages
      </code>
    </td>
    
    <td>
      Called after page routes have been augmented with scanned metadata.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pages:routerOptions
      </code>
    </td>
    
    <td>
      <code>
        { files: Array<{ path: string, optional?: boolean }> }
      </code>
    </td>
    
    <td>
      Called when resolving <code>
        router.options
      </code>
      
       files. Later items in the array override earlier ones.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        server:routes
      </code>
    </td>
    
    <td>
      <code>
        routes
      </code>
      
      , <code>
        context
      </code>
    </td>
    
    <td>
      Called when Nuxt needs the full set of route handlers the server will serve, so that it can type <code>
        $fetch
      </code>
      
       and <code>
        useFetch
      </code>
      
       against them.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        server:devHandler
      </code>
    </td>
    
    <td>
      <code>
        handler
      </code>
    </td>
    
    <td>
      Called when the dev middleware is being registered on the Nitro dev server.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        imports:sources
      </code>
    </td>
    
    <td>
      <code>
        presets
      </code>
    </td>
    
    <td>
      Called at setup allowing modules to extend sources.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        imports:extend
      </code>
    </td>
    
    <td>
      <code>
        imports
      </code>
    </td>
    
    <td>
      Called at setup allowing modules to extend imports.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        imports:context
      </code>
    </td>
    
    <td>
      <code>
        context
      </code>
    </td>
    
    <td>
      Called when the <a href="https://github.com/unjs/unimport" rel="nofollow">
        unimport
      </a>
      
       context is created.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        imports:dirs
      </code>
    </td>
    
    <td>
      <code>
        dirs
      </code>
    </td>
    
    <td>
      Allows extending import directories.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        components:dirs
      </code>
    </td>
    
    <td>
      <code>
        dirs
      </code>
    </td>
    
    <td>
      Called within <code>
        app:resolve
      </code>
      
       allowing to extend the directories that are scanned for auto-importable components.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        components:extend
      </code>
    </td>
    
    <td>
      <code>
        components
      </code>
    </td>
    
    <td>
      Allows extending new components.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nitro:config
      </code>
    </td>
    
    <td>
      <code>
        nitroConfig
      </code>
    </td>
    
    <td>
      Called before initializing Nitro, allowing customization of Nitro's configuration.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nitro:init
      </code>
    </td>
    
    <td>
      <code>
        nitro
      </code>
    </td>
    
    <td>
      Called after Nitro is initialized, which allows registering Nitro hooks and interacting directly with Nitro.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nitro:build:before
      </code>
    </td>
    
    <td>
      <code>
        nitro
      </code>
    </td>
    
    <td>
      Called before building the Nitro instance.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        nitro:build:public-assets
      </code>
    </td>
    
    <td>
      <code>
        nitro
      </code>
    </td>
    
    <td>
      Called after copying public assets. Allows modifying public assets before Nitro server is built.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        prerender:routes
      </code>
    </td>
    
    <td>
      <code>
        ctx
      </code>
    </td>
    
    <td>
      Allows extending the routes to be pre-rendered.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        build:error
      </code>
    </td>
    
    <td>
      <code>
        error
      </code>
    </td>
    
    <td>
      Called when an error occurs at build time.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        prepare:types
      </code>
    </td>
    
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      Called before <code>
        @nuxt/cli
      </code>
      
       writes TypeScript configuration files (<code>
        .nuxt/tsconfig.app.json
      </code>
      
      , <code>
        .nuxt/tsconfig.server.json
      </code>
      
      , etc.) and <code>
        .nuxt/nuxt.d.ts
      </code>
      
      , allowing addition of custom references and declarations in <code>
        nuxt.d.ts
      </code>
      
      , or directly modifying the options in generated configurations
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        listen
      </code>
    </td>
    
    <td>
      <code>
        listenerServer, listener
      </code>
    </td>
    
    <td>
      Called when the dev server is loading.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schema:extend
      </code>
    </td>
    
    <td>
      <code>
        schemas
      </code>
    </td>
    
    <td>
      Allows extending default schemas.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schema:resolved
      </code>
    </td>
    
    <td>
      <code>
        schema
      </code>
    </td>
    
    <td>
      Allows extending resolved schema.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schema:beforeWrite
      </code>
    </td>
    
    <td>
      <code>
        schema
      </code>
    </td>
    
    <td>
      Called before writing the given schema.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schema:written
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called after the schema is written.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vite:extend
      </code>
    </td>
    
    <td>
      <code>
        viteBuildContext
      </code>
    </td>
    
    <td>
      Allows extending Vite default context.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vite:extendConfig
      </code>
    </td>
    
    <td>
      <code>
        viteInlineConfig, env
      </code>
    </td>
    
    <td>
      Allows extending Vite default config. <strong>
        Deprecated in Nuxt 5+.
      </strong>
      
       In Nuxt 5, this operates on a shared configuration rather than separate client/server configs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vite:configResolved
      </code>
    </td>
    
    <td>
      <code>
        viteInlineConfig, env
      </code>
    </td>
    
    <td>
      Allows reading the resolved Vite config. <strong>
        Deprecated in Nuxt 5+.
      </strong>
      
       In Nuxt 5, this operates on a shared configuration rather than separate client/server configs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vite:serverCreated
      </code>
    </td>
    
    <td>
      <code>
        viteServer, env
      </code>
    </td>
    
    <td>
      Called when the Vite server is created.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        vite:compiled
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called after Vite server is compiled.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:config
      </code>
    </td>
    
    <td>
      <code>
        webpackConfigs
      </code>
    </td>
    
    <td>
      Called before configuring the webpack compiler.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:configResolved
      </code>
    </td>
    
    <td>
      <code>
        webpackConfigs
      </code>
    </td>
    
    <td>
      Allows reading the resolved webpack config.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:compile
      </code>
    </td>
    
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      Called right before compilation.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:compiled
      </code>
    </td>
    
    <td>
      <code>
        options
      </code>
    </td>
    
    <td>
      Called after resources are loaded.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:change
      </code>
    </td>
    
    <td>
      <code>
        shortPath
      </code>
    </td>
    
    <td>
      Called on <code>
        change
      </code>
      
       on WebpackBar.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:error
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called on <code>
        done
      </code>
      
       if has errors on WebpackBar.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:done
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called on <code>
        allDone
      </code>
      
       on WebpackBar.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        webpack:progress
      </code>
    </td>
    
    <td>
      <code>
        statesArray
      </code>
    </td>
    
    <td>
      Called on <code>
        progress
      </code>
      
       on WebpackBar.
    </td>
  </tr>
</tbody>
</table>

## Nitro App Hooks (Runtime, Server-Side)

See [Nitro](https://nitro.build/guide/plugins#available-hooks) for all available hooks.

<table>
<thead>
  <tr>
    <th>
      Hook
    </th>
    
    <th>
      Arguments
    </th>
    
    <th>
      Description
    </th>
    
    <th>
      Types
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        dev:ssr-logs
      </code>
    </td>
    
    <td>
      <code>
        { path, logs }
      </code>
    </td>
    
    <td>
      Server
    </td>
    
    <td>
      Called at the end of a request cycle with an array of server-side logs.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        render:response
      </code>
    </td>
    
    <td>
      <code>
        response, { event }
      </code>
    </td>
    
    <td>
      Called before sending the response.
    </td>
    
    <td>
      <a href="https://github.com/nuxt/nuxt/blob/71ef8bd3ff207fd51c2ca18d5a8c7140476780c7/packages/nuxt/src/core/runtime/nitro/renderer.ts#L24" rel="nofollow">
        response
      </a>
      
      , <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        render:html
      </code>
    </td>
    
    <td>
      <code>
        html, { event }
      </code>
    </td>
    
    <td>
      Called before constructing the HTML.
    </td>
    
    <td>
      <a href="https://github.com/nuxt/nuxt/blob/71ef8bd3ff207fd51c2ca18d5a8c7140476780c7/packages/nuxt/src/core/runtime/nitro/renderer.ts#L15" rel="nofollow">
        html
      </a>
      
      , <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        render:island
      </code>
    </td>
    
    <td>
      <code>
        islandResponse, { event, islandContext }
      </code>
    </td>
    
    <td>
      Called before constructing the island HTML.
    </td>
    
    <td>
      <a href="https://github.com/nuxt/nuxt/blob/e50cabfed1984c341af0d0c056a325a8aec26980/packages/nuxt/src/core/runtime/nitro/renderer.ts#L28" rel="nofollow">
        islandResponse
      </a>
      
      , <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
      
      , <a href="https://github.com/nuxt/nuxt/blob/e50cabfed1984c341af0d0c056a325a8aec26980/packages/nuxt/src/core/runtime/nitro/renderer.ts#L38" rel="nofollow">
        islandContext
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        close
      </code>
    </td>
    
    <td>
      -
    </td>
    
    <td>
      Called when Nitro is closed.
    </td>
    
    <td>
      -
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
        error, { event? }
      </code>
    </td>
    
    <td>
      Called when an error occurs.
    </td>
    
    <td>
      <a href="https://github.com/nitrojs/nitro/blob/d20ffcbd16fc4003b774445e1a01e698c2bb078a/src/types/runtime/nitro.ts#L48" rel="nofollow">
        error
      </a>
      
      , <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        request
      </code>
    </td>
    
    <td>
      <code>
        event
      </code>
    </td>
    
    <td>
      Called when a request is received.
    </td>
    
    <td>
      <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        beforeResponse
      </code>
    </td>
    
    <td>
      <code>
        event, { body }
      </code>
    </td>
    
    <td>
      Called before sending the response.
    </td>
    
    <td>
      <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
      
      , unknown
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        afterResponse
      </code>
    </td>
    
    <td>
      <code>
        event, { body }
      </code>
    </td>
    
    <td>
      Called after sending the response.
    </td>
    
    <td>
      <a href="https://github.com/h3js/h3/blob/f6ceb5581043dc4d8b6eab91e9be4531e0c30f8e/src/types.ts#L38" rel="nofollow">
        event
      </a>
      
      , unknown
    </td>
  </tr>
</tbody>
</table>


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
