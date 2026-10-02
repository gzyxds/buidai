---
title: "public"
description: "The public/ directory is used to serve your website's static assets."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/public"
---
# public

> The public/ directory is used to serve your website's static assets.

Files contained within the `public/` directory are served at the root and are not modified by the build process. This is suitable for files that have to keep their names (e.g. `robots.txt`) *or* likely won't change (e.g. `favicon.ico`).

```bash [Directory structure]
-| public/
---| favicon.ico
---| og-image.png
---| robots.txt
```

```vue [app/app.vue]
<script setup lang="ts">
useSeoMeta({
  ogImage: '/og-image.png',
})
</script>
```

::tip{target="_blank" to="https://v2.nuxt.com/docs/directory-structure/static/"}
This is known as the [`static/`] directory in Nuxt 2.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
