---
title: "Northflank"
description: "Deploy your Nuxt Application to Northflank infrastructure."
canonical_url: "https://nuxt.com/deploy/northflank"
---
# Northflank

> Deploy your Nuxt Application to Northflank infrastructure.

Nuxt supports deploying on [Northflank](https://www.northflank.com) with minimal configuration.

## Setup

1. Link your [Git provider](https://northflank.com/docs/v1/application/getting-started/link-your-git-account) and [create a new project](https://northflank.com/docs/v1/application/getting-started/create-a-project) in Northflank.
2. In your project, create a [Service](https://northflank.com/docs/v1/application/getting-started/build-and-deploy-your-code) and connect it to your Nuxt repository.
3. Ensure your package.json includes a start script that runs the Nuxt production server.

```json [package.json]
{
  "scripts": {
    "start": "node .output/server/index.mjs"
  }
}
```

1. Click "Create Service" to build and deploy your Nuxt app.

::read-more{target="_blank" to="https://northflank.com/docs"}
For more information, refer to the **Northflank documentation**.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
