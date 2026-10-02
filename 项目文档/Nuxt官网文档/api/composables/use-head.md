---
title: "useHead"
description: "useHead customizes the head properties of individual pages of your Nuxt app."
canonical_url: "https://nuxt.com/docs/4.x/api/composables/use-head"
---
# useHead

> useHead customizes the head properties of individual pages of your Nuxt app.

## Usage

The `useHead` composable allows you to manage your head tags in a programmatic and reactive way, powered by [Unhead](https://unhead.unjs.io). It lets you customize the meta tags, links, scripts, and other elements in the `<head>` section of your HTML document.

```vue [app/app.vue]
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }],
})
</script>
```

::warning
If the data comes from a user or other untrusted source, we recommend you check out [`useHeadSafe`](https://nuxt.com/docs/4.x/api/composables/use-head-safe).
::

::note
The properties of `useHead` can be dynamic, accepting `ref`, `computed` and `reactive` properties. The `meta` parameter can also accept a function returning an object to make the entire object reactive.
::

## Type

```ts [Signature]
export function useHead (meta: MaybeComputedRef<MetaObject>): ActiveHeadEntry<UseHeadInput>

interface MetaObject {
  title?: string
  titleTemplate?: string | ((title?: string) => string)
  base?: Base
  link?: Link[]
  meta?: Meta[]
  style?: Style[]
  script?: Script[]
  noscript?: Noscript[]
  htmlAttrs?: HtmlAttributes
  bodyAttrs?: BodyAttributes
}

interface ActiveHeadEntry<Input> {
  /**
   * Updates the entry with new input.
   *
   * Will first clear any side effects for previous input.
   */
  patch: (input: Input) => void
  /**
   * Dispose the entry, removing it from the active head.
   *
   * Will queue side effects for removal.
   */
  dispose: () => void
}
```

See [@unhead/schema](https://github.com/unjs/unhead/blob/main/packages/vue/src/types/schema.ts) for more detailed types.

## Parameters

`meta`: An object accepting head metadata properties to customize the page's `<head>` section. All properties support reactive values (`ref`, `computed`, `reactive`) or can be a function returning the metadata object.

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
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        title
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      Sets the page title.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        titleTemplate
      </code>
    </td>
    
    <td>
      <code>
        string | ((title?: string) => string)
      </code>
    </td>
    
    <td>
      Configures a dynamic template to customize the page title. Can be a string with <code>
        %s
      </code>
      
       placeholder or a function.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        base
      </code>
    </td>
    
    <td>
      <code>
        Base
      </code>
    </td>
    
    <td>
      Sets the <code>
        <base>
      </code>
      
       tag for the document.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        link
      </code>
    </td>
    
    <td>
      <code>
        Link[]
      </code>
    </td>
    
    <td>
      Array of link objects. Each element is mapped to a <code>
        <link>
      </code>
      
       tag, where object properties correspond to HTML attributes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        meta
      </code>
    </td>
    
    <td>
      <code>
        Meta[]
      </code>
    </td>
    
    <td>
      Array of meta objects. Each element is mapped to a <code>
        <meta>
      </code>
      
       tag, where object properties correspond to HTML attributes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        style
      </code>
    </td>
    
    <td>
      <code>
        Style[]
      </code>
    </td>
    
    <td>
      Array of style objects. Each element is mapped to a <code>
        <style>
      </code>
      
       tag, where object properties correspond to HTML attributes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        script
      </code>
    </td>
    
    <td>
      <code>
        Script[]
      </code>
    </td>
    
    <td>
      Array of script objects. Each element is mapped to a <code>
        <script>
      </code>
      
       tag, where object properties correspond to HTML attributes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        noscript
      </code>
    </td>
    
    <td>
      <code>
        Noscript[]
      </code>
    </td>
    
    <td>
      Array of noscript objects. Each element is mapped to a <code>
        <noscript>
      </code>
      
       tag, where object properties correspond to HTML attributes.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        htmlAttrs
      </code>
    </td>
    
    <td>
      <code>
        HtmlAttributes
      </code>
    </td>
    
    <td>
      Sets attributes of the <code>
        <html>
      </code>
      
       tag. Each object property is mapped to the corresponding attribute.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bodyAttrs
      </code>
    </td>
    
    <td>
      <code>
        BodyAttributes
      </code>
    </td>
    
    <td>
      Sets attributes of the <code>
        <body>
      </code>
      
       tag. Each object property is mapped to the corresponding attribute.
    </td>
  </tr>
</tbody>
</table>

## Return Values

This composable does not return any value. It registers the head metadata with Unhead, which manages the actual DOM updates.

## Example

### Basic Meta Tags

```vue [app/pages/about.vue]
<script setup lang="ts">
useHead({
  title: 'About Us',
  meta: [
    { name: 'description', content: 'Learn more about our company' },
    { property: 'og:title', content: 'About Us' },
    { property: 'og:description', content: 'Learn more about our company' },
  ],
})
</script>
```

### Reactive Meta Tags

```vue [app/pages/profile.vue]
<script setup lang="ts">
const profile = ref({ name: 'John Doe' })

useHead({
  title: computed(() => profile.value.name),
  meta: [
    {
      name: 'description',
      content: computed(() => `Profile page for ${profile.value.name}`),
    },
  ],
})
</script>
```

### Using a Function for Full Reactivity

```vue [app/pages/dynamic.vue]
<script setup lang="ts">
const count = ref(0)

useHead(() => ({
  title: `Count: ${count.value}`,
  meta: [
    { name: 'description', content: `Current count is ${count.value}` },
  ],
}))
</script>
```

### Adding External Scripts and Styles

```vue [app/pages/external.vue]
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.example.com/styles.css',
    },
  ],
  script: [
    {
      src: 'https://cdn.example.com/script.js',
      async: true,
    },
  ],
})
</script>
```

### Body and HTML Attributes

```vue [app/pages/themed.vue]
<script setup lang="ts">
const isDark = ref(true)

useHead({
  htmlAttrs: {
    lang: 'en',
    class: computed(() => isDark.value ? 'dark' : 'light'),
  },
  bodyAttrs: {
    class: 'themed-page',
  },
})
</script>
```

:read-more{to="https://nuxt.com/docs/4.x/getting-started/seo-meta"}---

- [Source](https://github.com/unjs/unhead/blob/main/packages/vue/src/composables.ts)


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
