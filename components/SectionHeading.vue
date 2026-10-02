<script setup lang="ts">
/**
 * 通用区块标题：eyebrow 徽章 + 标题（支持高亮 slot）+ 可选描述
 */
const props = withDefaults(defineProps<{
  /** 徽章文案，不传则不渲染 */
  eyebrow?: string
  /** 描述文案，不传则不渲染 */
  description?: string
  /** 标题字号档位：sm（区块内小节）/ md（常规）/ lg（大区块） */
  titleSize?: 'sm' | 'md' | 'lg'
}>(), {
  titleSize: 'md'
})

const titleClass = computed(() => {
  switch (props.titleSize) {
    case 'sm':
      return 'text-xl md:text-2xl font-bold text-neutral-900 mb-3'
    case 'lg':
      return 'text-3xl md:text-4xl font-bold text-neutral-900 mb-6'
    default:
      return 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight'
  }
})
</script>

<template>
  <div class="text-center max-w-3xl mx-auto mb-16">
    <span
      v-if="props.eyebrow"
      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4"
    >
      {{ props.eyebrow }}
    </span>
    <h2 :class="titleClass">
      <slot />
    </h2>
    <p v-if="props.description" class="mt-3.5 text-base text-neutral-500 leading-relaxed max-w-2xl mx-auto">
      {{ props.description }}
    </p>
  </div>
</template>
