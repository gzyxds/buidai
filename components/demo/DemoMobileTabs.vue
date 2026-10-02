<script setup lang="ts">
/**
 * 演示页移动端底部标签栏：悬浮胶囊风分类切换
 */
import type { ProductCategory } from '~/data/demoProducts'

const props = defineProps<{
  categories: ProductCategory[]
  selectedCategoryId: string
}>()

const emit = defineEmits<{
  (e: 'select-category', categoryId: string): void
}>()
</script>

<template>
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
    <div class="px-4 pb-[calc(16px+env(safe-area-inset-bottom,0px))] pt-12 bg-linear-to-t from-white/90 via-white/50 to-transparent flex justify-center">
      <div class="flex items-center p-1.5 bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15)] border border-neutral-200/50 rounded-full w-full max-w-[340px] pointer-events-auto">
        <button
          v-for="category in props.categories"
          :key="category.id"
          class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ease-out"
          :class="props.selectedCategoryId === category.id
            ? 'text-white bg-indigo-600 shadow-md shadow-indigo-500/20'
            : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80'"
          @click="emit('select-category', category.id)"
        >
          <component
            :is="category.icon"
            class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
            :class="props.selectedCategoryId === category.id ? 'scale-110' : ''"
          />
          <span class="text-sm font-semibold tracking-wide">{{ category.name }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>
