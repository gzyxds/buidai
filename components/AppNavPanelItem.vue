<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

/**
 * 导航面板卡片项
 *
 * 产品中心与资源中心两个下拉面板共用的统一卡片样式，
 * 保证图标尺寸、字号、间距与 hover 行为完全一致。
 */
defineProps<{
  item: NavigationMenuItem
}>()
</script>

<template>
  <NuxtLink
    :to="item.to!"
    class="group/item flex items-start gap-2.5 rounded-lg p-2.5 hover:bg-elevated transition-colors duration-150"
  >
    <UIcon
      :name="item.icon!"
      class="size-5 mt-px shrink-0 text-dimmed group-hover/item:text-muted transition-colors duration-150"
    />
    <span class="min-w-0">
      <span class="block text-sm font-semibold text-highlighted group-hover/item:text-primary transition-colors duration-150">
        {{ item.label }}
      </span>
      <span class="block text-xs text-muted leading-relaxed line-clamp-1">{{ item.description }}</span>
    </span>
  </NuxtLink>
</template>
