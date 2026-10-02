<script setup lang="ts">
/**
 * 演示页桌面侧栏：可展开折叠的产品分类导航
 */
import type { ProductCategory, ProductDemo } from '~/data/products'

const props = defineProps<{
  categories: ProductCategory[]
  selectedCategoryId: string
  selectedProduct: ProductDemo | null
  expandedCategories: Record<string, boolean>
}>()

const emit = defineEmits<{
  (e: 'toggle-category', categoryId: string): void
  (e: 'select', product: ProductDemo, categoryId: string): void
}>()
</script>

<template>
  <!-- 左侧产品导航栏 - 可展开折叠 -->
  <aside class="hidden lg:block w-60 xl:w-64 flex-shrink-0">
    <div class="sticky top-24 bg-white rounded-xl border border-neutral-200 shadow-sm">
      <!-- 导航标题 -->
      <div class="px-4 py-3 border-b border-neutral-200">
        <h2 class="text-sm font-semibold text-neutral-900">产品分类</h2>
      </div>

      <!-- 产品分类列表 -->
      <nav class="p-2">
        <div v-for="category in props.categories" :key="category.id" class="mb-1">
          <!-- 分类标题 - 可点击展开折叠 -->
          <button
            class="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-600 uppercase tracking-wider rounded-lg transition-colors"
            :class="props.selectedCategoryId === category.id ? 'bg-neutral-100 text-neutral-900' : 'hover:bg-neutral-50'"
            @click="emit('toggle-category', category.id)"
          >
            <UIcon :name="category.icon" class="w-4 h-4 flex-shrink-0" :class="props.selectedCategoryId === category.id ? 'text-indigo-600' : 'text-neutral-400'" />
            <span class="truncate flex-1 text-left">{{ category.name }}</span>
            <span class="text-[10px] text-neutral-400">{{ category.products.length }}</span>
            <UIcon
:name="props.expandedCategories[category.id] ? 'i-heroicons-chevron-down' : 'i-heroicons-chevron-right'"
              class="w-3.5 h-3.5 flex-shrink-0 text-neutral-400"
            />
          </button>

          <!-- 产品列表 - 带展开动画 -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-show="props.expandedCategories[category.id]" class="overflow-hidden">
              <div class="pl-2 py-1">
                <div class="space-y-0.5">
                  <button
                    v-for="product in category.products"
                    :key="product.id"
                    class="group w-full flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors text-left relative"
                    :class="props.selectedProduct?.id === product.id ? 'bg-indigo-50 text-indigo-700' : 'text-neutral-600 hover:bg-neutral-50'"
                    @click="emit('select', product, category.id)"
                  >
                    <!-- 选中左侧指示条 -->
                    <div
                      class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r transition-all"
                      :class="props.selectedProduct?.id === product.id ? 'bg-indigo-500' : 'bg-transparent'"
                    />

                    <!-- 产品图标 -->
                    <UIcon
:name="product.icon"
                      class="w-4 h-4 flex-shrink-0 transition-colors"
                      :class="props.selectedProduct?.id === product.id ? 'text-indigo-600' : 'text-neutral-400 group-hover:text-neutral-500'"
                    />

                    <span class="truncate flex-1">{{ product.title }}</span>
                    <span
                      v-if="product.status === 'beta'"
                      class="flex-shrink-0 px-1.5 py-0.5 text-[10px] rounded bg-neutral-200 text-neutral-600"
                    >
                      Beta
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
/* 自定义滚动条样式 */
nav::-webkit-scrollbar {
  width: 5px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
