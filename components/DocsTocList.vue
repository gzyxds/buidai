<script setup lang="ts">
/**
 * 文档页目录列表
 *
 * 移动端折叠面板与桌面侧栏共用同一份 toc.links 渲染：
 * variant 控制激活态样式（桌面端带左侧指示条）与子项缩进/颜色差异。
 */
export interface DocsTocLink {
  id: string
  text: string
  children?: DocsTocLink[]
}

defineProps<{
  links: DocsTocLink[]
  activeId: string
  variant?: 'mobile' | 'desktop'
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<template>
  <nav class="space-y-1">
    <div v-for="link in links" :key="link.id">
      <a
        :href="`#${link.id}`"
        class="block py-1.5 text-sm transition-colors truncate"
        :class="
          activeId === link.id
            ? `text-primary-600 font-medium${variant === 'desktop' ? ' pl-3 border-l-2 border-primary-600 -ml-[17px]' : ''}`
            : 'text-gray-500 hover:text-gray-900'
        "
        @click.prevent="emit('navigate', link.id)"
      >
        {{ link.text }}
      </a>
      <div v-if="link.children" class="mt-1 space-y-1" :class="variant === 'mobile' ? 'pl-4' : 'pl-3'">
        <a
          v-for="child in link.children"
          :key="child.id"
          :href="`#${child.id}`"
          class="block py-1 text-xs transition-colors truncate"
          :class="
            activeId === child.id
              ? 'text-primary-600 font-medium'
              : variant === 'desktop' ? 'text-gray-400 hover:text-gray-900' : 'text-gray-500 hover:text-gray-900'
          "
          @click.prevent="emit('navigate', child.id)"
        >
          {{ child.text }}
        </a>
      </div>
    </div>
  </nav>
</template>
