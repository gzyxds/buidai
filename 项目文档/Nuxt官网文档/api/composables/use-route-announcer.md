---
title: "useRouteAnnouncer"
description: "This composable observes the page title changes and updates the announcer message accordingly."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-route-announcer"
---
# useRouteAnnouncer

> This composable observes the page title changes and updates the announcer message accordingly.

::important
This composable is available in Nuxt v3.12+.
::

## Description

A composable which observes the page title changes and updates the announcer message accordingly. Used by [`<NuxtRouteAnnouncer>`](https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer) and controllable.
It hooks into Unhead's `dom:rendered` hook to read the page's title and set it as the announcer message.

:read-more{title="Nuxt accessibility" to="https://nuxt.com/docs/4.x/guide/best-practices/accessibility#route-announcements"}## Parameters

- `politeness`: Sets the urgency for screen reader announcements: `off` (disable the announcement), `polite` (waits for silence), or `assertive` (interrupts immediately).  (default `polite`).

## Properties

### `message`

- **type**: `Ref<string>`
- **description**: The message to announce

### `politeness`

- **type**: `Ref<string>`
- **description**: Screen reader announcement urgency level `off`, `polite`, or `assertive`

## Methods

### `set(message, politeness = "polite")`

Sets the message to announce with its urgency level.

### `polite(message)`

Sets the message with `politeness = "polite"`

### `assertive(message)`

Sets the message with `politeness = "assertive"`

## Example

```vue [app/pages/index.vue]
<script setup lang="ts">
const { message, politeness, set, polite, assertive } = useRouteAnnouncer({
  politeness: 'assertive',
})
</script>
```

::callout
For announcing dynamic in-page content changes (form validation, toasts, loading states), use [`useAnnouncer`](https://nuxt.com/docs/4.x/api/composables/use-announcer) instead.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/route-announcer.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
