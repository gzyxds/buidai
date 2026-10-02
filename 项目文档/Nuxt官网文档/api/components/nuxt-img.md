---
title: "<NuxtImg>"
description: "Nuxt provides a <NuxtImg> component to handle automatic image optimization."
canonical_url: "https://nuxt.com/docs/4.x/api/components/nuxt-img"
---
# <NuxtImg>

> Nuxt provides a <NuxtImg> component to handle automatic image optimization.

`<NuxtImg>` is a drop-in replacement for the native `<img>` tag.

- Uses built-in provider to optimize local and remote images
- Converts `src` to provider-optimized URLs
- Automatically resizes images based on `width` and `height`
- Generates responsive sizes when providing `sizes` option
- Supports native lazy loading as well as other `<img>` attributes

## Setup

In order to use `<NuxtImg>` you should install and enable the Nuxt Image module:

```bash [Terminal]
npx nuxt module add image
```

## Usage

`<NuxtImg>` outputs a native `img` tag directly (without any wrapper around it). Use it like you would use the `<img>` tag:

```html
<NuxtImg src="/nuxt-icon.png" />
```

Will result in:

```html
<img src="/nuxt-icon.png" />
```

::read-more{target="_blank" to="https://image.nuxt.com/usage/nuxt-img"}
Read more about the `<NuxtImg>` component.
::

---

- [Source](https://github.com/nuxt/image/blob/main/src/runtime/components/NuxtImg.vue)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
