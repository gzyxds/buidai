---
title: "SST"
description: "Deploy your Nuxt Application to AWS with SST."
canonical_url: "https://nuxt.com/deploy/sst"
---
# SST

> Deploy your Nuxt Application to AWS with SST.

Nuxt supports deploying on [SST](https://sst.dev/) with minimal configuration.

## Quick start

1. Create a Nuxt project.
2. Init SST in your project.
```bash
npx sst@latest init
```
3. It should detect that your are using Nuxt and ask you to update your `nuxt.config.ts` file.
```ts
nitro: {
  preset: 'aws-lambda'
}
```
4. Once you are ready to deploy, run.
```bash
npx sst deploy --stage production
```

You can [read the full Nuxt on SST tutorial here](https://sst.dev/docs/start/aws/nuxt).

## More options

You can also deploy Nuxt to a container using SST. Head over to the [SST docs to learn more](https://sst.dev/docs/start/aws/nuxt).


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
