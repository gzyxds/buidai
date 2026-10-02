<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

/**
 * 导航下拉面板分组外壳
 *
 * 产品中心（4 列）与资源中心（2 列）两个 Mega Menu 面板共用的外壳结构：
 * 分组标题 + 卡片列表 + 可选底部入口，保证两面板排版完全一致。
 */
defineProps<{
  groups: NavigationMenuItem[]
  columns: 2 | 4
  footer?: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="sm:w-[760px]">
    <div class="grid gap-1" :class="columns === 2 ? 'grid-cols-2' : 'grid-cols-4'">
      <div v-for="group in groups" :key="group.label" class="min-w-0">
        <p class="px-3 pt-1.5 pb-2 text-xs font-medium text-dimmed">
          {{ group.label }}
        </p>
        <ul class="space-y-1">
          <li v-for="item in group.children" :key="item.to as string">
            <AppNavPanelItem :item="item" />
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部入口（可选）：查看全部产品 / 应用中心 -->
    <div v-if="footer?.length" class="mt-2 flex items-center gap-1 border-t border-default pt-2">
      <AppNavPanelItem
        v-for="link in footer"
        :key="link.to as string"
        :item="link"
        class="flex-1"
      />
    </div>
  </div>
</template>
