---
title: "Azure"
description: "Deploy your Nuxt Application to Azure infrastructure."
canonical_url: "https://nuxt.com/deploy/azure"
---
# Azure

> Deploy your Nuxt Application to Azure infrastructure.

## Azure Static Web Apps

::tip
**Zero Configuration ✨**

:brIntegration with Azure Static Web Apps provider is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers).
::

Azure Static Web Apps are designed to be deployed continuously in a [GitHub Actions workflow](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow). By default, Nuxt will detect this deployment environment to enable the `azure` preset.

### Local preview

Install [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) if you want to test locally.

You can invoke a development environment to preview before deploying.

```bash [Terminal]
npx nuxi build --preset=azure
npx @azure/static-web-apps-cli start .output/public --api-location .output/server
```

### Configuration

Azure Static Web Apps are [configured](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration) using the `staticwebapp.config.json` file.

Nuxt automatically generates this configuration file whenever the application is built with the `azure` preset.

It adds the following properties based on the following criteria:

<table>
<thead>
  <tr>
    <th>
      Property
    </th>
    
    <th>
      Criteria
    </th>
    
    <th>
      Default
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#platform" rel="nofollow">
          platform.apiRuntime
        </a>
      </strong>
    </td>
    
    <td>
      Will automatically set to <code>
        node:16
      </code>
      
       or <code>
        node:14
      </code>
      
       depending on your package configuration.
    </td>
    
    <td>
      <code>
        node:16
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes" rel="nofollow">
          navigationFallback.rewrite
        </a>
      </strong>
    </td>
    
    <td>
      Is always <code>
        /api/server
      </code>
    </td>
    
    <td>
      <code>
        /api/server
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#routes" rel="nofollow">
          routes
        </a>
      </strong>
    </td>
    
    <td>
      All prerendered routes are added. Additionally, if you do not have an <code>
        index.html
      </code>
      
       file an empty one is created for you for compatibility purposes and also requests to <code>
        /index.html
      </code>
      
       are redirected to the root directory which is handled by <code>
        /api/server
      </code>
      
      .
    </td>
    
    <td>
      <code>
        []
      </code>
    </td>
  </tr>
</tbody>
</table>

### Custom Configuration

You can alter the generated configuration using `azure.config` option. For instance, if you wanted to specify a Node runtime for your Azure Functions, edit your `nuxt.config.ts` file to the following:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // ...
  nitro: {
    azure: {
      config: {
        // ...
        platform: {
          apiRuntime: 'node:18'
        }
      }
    }
  }
})
```

Custom routes will be added and matched first. In the case of a conflict (determined if an object has the same route property), custom routes will override generated ones.

### Deploy from CI/CD via GitHub Actions

When you link your GitHub repository to Azure Static Web Apps, a workflow file is added to the repository.

When you are asked to select your framework, select custom and provide the following information:

<table>
<thead>
  <tr>
    <th>
      Input
    </th>
    
    <th>
      Value
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        app_location
      </strong>
    </td>
    
    <td>
      '/'
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        api_location
      </strong>
    </td>
    
    <td>
      '.output/server'
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        output_location
      </strong>
    </td>
    
    <td>
      '.output/public'
    </td>
  </tr>
</tbody>
</table>

If you miss this step, you can always find the build configuration section in your workflow and update the build configuration:

```yaml [.github/workflows/azure-static-web-apps-<RANDOM_NAME>.yml]
###### Repository/Build Configurations ######
app_location: '/'
api_location: '.output/server'
output_location: '.output/public'
###### End of Repository/Build Configurations ######
```

::callout
That's it! Now Azure Static Web Apps will automatically deploy your Nitro-powered application on push.
::

If you are using `runtimeConfig`, you will likely want to configure the corresponding [environment variables on Azure](https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings).

## More options

::read-more{target="_blank" to="https://nitro.unjs.io/deploy/providers/azure"}
Learn about the other Azure deployment presets on Nitro documentation.
::


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
