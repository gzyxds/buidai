<script setup lang="ts">
/**
 * 为什么选择我们区块
 */
const whyChooseUs = [
  { title: '完全开源', description: '基于 Apache-2.0 协议，支持私有部署和自定义二次开发', icon: 'i-lucide-lock-open', class: 'lg:row-span-2' },
  { title: '极致灵活', description: '流程、组件、模型都可自由组合，满足各类 AI 应用需求', icon: 'i-lucide-puzzle', class: 'lg:col-span-2' },
  { title: '上手快速', description: '无需写代码也能搭建复杂流程，技术人员可嵌入脚本模块灵活控制', icon: 'i-lucide-zap' },
  { title: '社区驱动', description: '不断壮大的开发者生态，众多插件和社区案例持续涌现', icon: 'i-lucide-users' },
]
</script>

<template>
  <!-- 为什么选择我们 -->
  <section class="py-16 md:py-24 bg-neutral-50/50 relative overflow-hidden">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-neutral-400/30 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="why-choose-us-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#why-choose-us-grid)" />
    </svg>
    <div class="container mx-auto px-4">
      <SectionHeading eyebrow="为什么选择我们" title-size="lg" description="从个人开发者探索到企业级部署，智言AI 提供强大的工作流引擎与多模型集成能力">
        为什么选择 智言AI？
      </SectionHeading>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UPageCard v-for="item in whyChooseUs" :key="item.title" v-bind="item" />
      </div>
    </div>
  </section>
</template>
