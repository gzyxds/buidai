---
title: "<DevOnly>"
description: "Render components only during development with the <DevOnly> component."
canonical_url: "https://nuxt.com/docs/4.x/api/components/dev-only"
---
# <DevOnly>

> Render components only during development with the <DevOnly> component.

Nuxt provides the `<DevOnly>` component to render a component only during development.

The content will not be included in production builds.

```vue [app/pages/example.vue]
<template>
  <div>
    <Sidebar />
    <DevOnly>
      <!-- this component will only be rendered during development -->
      <LazyDebugBar />

      <!-- if you ever require to have a replacement during production -->
      <!-- be sure to test these using `nuxt preview` -->
      <template #fallback>
        <div><!-- empty div for flex.justify-between --></div>
      </template>
    </DevOnly>
  </div>
</template>
```

## Slots

- `#fallback`: if you ever require to have a replacement during production.

```vue
<template>
  <div>
    <Sidebar />
    <DevOnly>
      <!-- this component will only be rendered during development -->
      <LazyDebugBar />
      <!-- be sure to test these using `nuxt preview` -->
      <template #fallback>
        <div><!-- empty div for flex.justify-between --></div>
      </template>
    </DevOnly>
  </div>
</template>
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/dev-only.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
