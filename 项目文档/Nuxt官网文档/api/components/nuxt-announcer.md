---
title: "<NuxtAnnouncer>"
description: "The <NuxtAnnouncer> component adds a hidden element to announce dynamic content changes to assistive technologies."
canonical_url: "https://nuxt.com/docs/4.x/api/components/nuxt-announcer"
---
# <NuxtAnnouncer>

> The <NuxtAnnouncer> component adds a hidden element to announce dynamic content changes to assistive technologies.

::important
This component is available in Nuxt v4.4.2+.
::

## Usage

Add `<NuxtAnnouncer/>` in your [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app) or [`app/layouts/`](https://nuxt.com/docs/4.x/directory-structure/app/layouts) to enable announcing dynamic content changes to screen readers. This is useful for form validation, toast notifications, loading states, and other in-page updates.

```vue [app/app.vue]
<template>
  <NuxtAnnouncer />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

Then use the [`useAnnouncer`](https://nuxt.com/docs/4.x/api/composables/use-announcer) composable anywhere in your app to announce messages:

```vue [app/pages/contact.vue]
<script setup lang="ts">
const { polite, assertive } = useAnnouncer()

async function submitForm () {
  try {
    await $fetch('/api/contact', { method: 'POST', body: formData })
    polite('Message sent successfully')
  } catch (error) {
    assertive('Error: Failed to send message')
  }
}
</script>
```

## Slots

You can pass custom HTML or components through the announcer's default slot.

```vue
<template>
  <NuxtAnnouncer>
    <template #default="{ message }">
      <p>{{ message }}</p>
    </template>
  </NuxtAnnouncer>
</template>
```

## Props

- `atomic`: Controls if screen readers announce only changes or the entire content. Set to true for full content readouts on updates, false for changes only. (default `true`)
- `politeness`: Sets the default urgency for screen reader announcements: `off` (disable the announcement), `polite` (waits for silence), or `assertive` (interrupts immediately). (default `polite`)

## Differences from `<NuxtRouteAnnouncer>`

<table>
<thead>
  <tr>
    <th>
      Aspect
    </th>
    
    <th>
      <code>
        <NuxtRouteAnnouncer>
      </code>
    </th>
    
    <th>
      <code>
        <NuxtAnnouncer>
      </code>
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Purpose
      </strong>
    </td>
    
    <td>
      Announces route/page changes
    </td>
    
    <td>
      Announces any dynamic content
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Trigger
      </strong>
    </td>
    
    <td>
      Automatic on navigation
    </td>
    
    <td>
      Manual via <code>
        polite()
      </code>
      
      /<code>
        assertive()
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Message source
      </strong>
    </td>
    
    <td>
      Page <code>
        <title>
      </code>
    </td>
    
    <td>
      Developer-provided
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        atomic default
      </strong>
    </td>
    
    <td>
      <code>
        false
      </code>
    </td>
    
    <td>
      <code>
        true
      </code>
    </td>
  </tr>
</tbody>
</table>

::callout
This component is optional. :br
To achieve full customization, you can implement your own one based on [its source code](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/nuxt-announcer.ts).
::

::callout
You can hook into the underlying announcer instance using [the `useAnnouncer` composable](https://nuxt.com/docs/4.x/api/composables/use-announcer), which allows you to set custom announcement messages.
::

---

- [Source](https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/nuxt-announcer.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
