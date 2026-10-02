---
title: "defineNuxtComponent"
description: "defineNuxtComponent() is a helper function for defining type safe components with Options API."
canonical_url: "https://nuxt.com/docs/4.x/api/utils/define-nuxt-component"
---
# defineNuxtComponent

> defineNuxtComponent() is a helper function for defining type safe components with Options API.

::note
`defineNuxtComponent()` is a helper function for defining type safe Vue components using options API similar to [`defineComponent()`](https://vuejs.org/api/general#definecomponent). `defineNuxtComponent()` wrapper also adds support for `asyncData` and `head` component options.
::

::note
Using `<script setup lang="ts">` is the recommended way of declaring Vue components in Nuxt.
::

:read-more{to="https://nuxt.com/docs/4.x/getting-started/data-fetching"}## `asyncData()`

If you choose not to use `setup()` in your app, you can use the `asyncData()` method within your component definition:

```vue [app/pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  asyncData () {
    return {
      data: {
        greetings: 'hello world!',
      },
    }
  },
})
</script>
```

## `head()`

If you choose not to use `setup()` in your app, you can use the `head()` method within your component definition:

```vue [app/pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  head (nuxtApp) {
    return {
      title: 'My site',
    }
  },
})
</script>
```

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/component.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
