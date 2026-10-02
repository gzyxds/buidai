<template>
  <div class="min-h-screen bg-gray-50 pt-32 pb-16">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">资源中心</h1>
        <p class="text-xl text-gray-600 mb-8">获取最新的文档、教程和开发资源，助力您的 AI 应用开发之旅。</p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <UButton
            to="/docs"
            size="xl"
            class="justify-center px-6 py-3 text-base font-medium rounded-md"
          >
            <template #leading>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </template>
            快速开始
          </UButton>
          <UButton
            to="/docs"
            size="xl"
            color="neutral"
            variant="outline"
            class="justify-center px-6 py-3 text-base font-medium rounded-md"
          >
            了解更多
            <template #trailing>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </template>
          </UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="resource in resources"
          :key="resource.title"
          :to="resource.to"
          class="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start"
        >
          <div class="mb-6 p-3 rounded-xl bg-ui-primary-glow-medium text-ui-primary group-hover:bg-ui-primary-glow-strong transition-colors">
            <UIcon :name="resource.icon" class="w-8 h-8" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-ui-primary transition-colors">
            {{ resource.title }}
          </h3>

          <p class="text-gray-500 leading-relaxed mb-6 grow">
            {{ resource.description }}
          </p>

          <div class="text-ui-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
            了解详情
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({})

usePageSeo({
  title: '资源中心 - 开发者文档、教程与社区',
  description: '访问 智言万象 资源中心，获取全面的开发文档、API 参考手册、视频教程及 CLI 工具。加入开发者社区，探索技术博客，助力您高效构建企业级 AI 应用。',
  keywords: '智言万象资源中心, AI开发文档, API参考, AI教程, 开发者社区, CLI工具, 技术博客, AI应用开发, 智言AI',
  ogTitle: '智言AI - 智言万象资源中心 - 开发者文档、教程与社区 | AI应用开发指南',
  ogDescription: '访问 智言万象 资源中心，获取全面的开发文档、API 参考手册、视频教程及 CLI 工具。加入开发者社区，探索技术博客，助力您高效构建企业级 AI 应用。',
  ogType: 'website'
})

const resources = [
  {
    title: '文档中心',
    description: '全面的产品使用指南、API 文档和 SDK 说明，帮助您快速上手开发。',
    icon: 'i-heroicons-document-text',
    to: '/docs'
  },
  {
    title: 'API 参考',
    description: '详细的 REST API 接口定义、参数说明及调用示例。',
    icon: 'i-heroicons-code-bracket',
    to: '/contact'
  },
  {
    title: '视频教程',
    description: '从入门到精通的视频教学课程，直观演示操作流程。',
    icon: 'i-heroicons-video-camera',
    to: '/contact'
  },
  {
    title: '社区论坛',
    description: '加入开发者社区，与数万名开发者交流心得，解决技术难题。',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/contact'
  },
  {
    title: '技术博客',
    description: '深度技术文章、行业洞察及最佳实践分享。',
    icon: 'i-heroicons-newspaper',
    to: '/blog'
  },
  {
    title: 'CLI 工具',
    description: '强大的命令行工具，让开发、部署和管理更加高效。',
    icon: 'i-heroicons-command-line',
    to: '/contact'
  }
]
</script>
