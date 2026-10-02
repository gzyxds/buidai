---
title: ".gitignore"
description: "A .gitignore file specifies intentionally untracked files that git should ignore."
canonical_url: "https://nuxt.com/docs/4.x/directory-structure/gitignore"
---
# .gitignore

> A .gitignore file specifies intentionally untracked files that git should ignore.

A `.gitignore` file specifies intentionally untracked files that git should ignore.

:read-more{icon="i-simple-icons-git" target="_blank" title="the git documentation" to="https://git-scm.com/docs/gitignore"}We recommend having a `.gitignore` file that has **at least** the following entries present:

```bash [.gitignore]
# Nuxt dev/build outputs
.output
.data
.nuxt
.nitro
.cache
dist

# Node dependencies
node_modules

# Logs
logs
*.log

# Misc
.DS_Store

# Local env files
.env
.env.*
!.env.example
```


## Sitemap

See the full [sitemap](https://nuxt.com/sitemap.md) for all pages.
