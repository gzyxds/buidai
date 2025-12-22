<template>
  <div v-if="error" class="text-red-500 text-sm p-2">
    导航加载失败: {{ error }}
  </div>
  <!-- 骨架屏：仅在顶层且数据未加载时显示 -->
  <div v-else-if="pending && level === 0 && !navigation" class="animate-pulse space-y-3 p-2">
    <div class="h-4 bg-gray-200 rounded w-1/3"></div>
    <div class="space-y-2 pl-4">
      <div class="h-3 bg-gray-100 rounded w-3/4"></div>
      <div class="h-3 bg-gray-100 rounded w-2/3"></div>
    </div>
  </div>
  <component v-else :is="level === 0 ? 'nav' : 'div'" aria-label="文档导航">
    <ul :class="level === 0 ? 'space-y-3' : 'space-y-1'">
      <li v-for="item in items" :key="item.path || item.title">
        <!-- Level 0: 分组标题 (Section Headers) -->
        <!-- 仅在顶层且有子项时渲染为折叠面板 -->
        <template v-if="level === 0 && item.children">
          <button
            @click="toggleSection(item.title)"
            class="flex w-full items-center justify-between gap-2 font-bold text-gray-900 dark:text-gray-100 mb-2 px-3 py-1 text-sm tracking-tight select-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
            :aria-expanded="!collapsedSections[item.title]"
          >
            <div class="flex items-center gap-2">
              <UIcon
                v-if="item.icon"
                :name="item.icon"
                class="w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
              <span>{{ item.title }}</span>
            </div>
            <!-- 折叠指示箭头：默认向下，折叠时旋转 -90度 -->
            <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-4 h-4 text-gray-400 transition-transform duration-200"
              :class="{ '-rotate-90': collapsedSections[item.title] }"
            />
          </button>

          <!-- 子项容器：使用 v-show 控制显示/隐藏 -->
          <div v-show="!collapsedSections[item.title]" class="transition-all duration-200">
            <!-- 递归调用自身渲染子级 -->
            <DocsSidebar :navigation="item.children" :level="level + 1" />
          </div>
        </template>

        <!-- Level > 0: 具体链接或嵌套分组 -->
        <template v-else>
          <!-- 嵌套分组 (Nested Group) -->
          <!-- 目前逻辑：即使有子项也视为普通链接处理（未来可扩展为多级折叠） -->
          <div v-if="item.children?.length">
             <NuxtLink
              :to="item.path"
              class="group flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200"
              :class="[
                isActive(item.path)
                  ? 'text-ui-primary bg-primary-50 dark:bg-primary-900/10'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
            >
              <span class="flex items-center gap-2">
                <UIcon
                  v-if="item.icon"
                  :name="item.icon"
                  class="w-4 h-4 shrink-0 transition-colors"
                  :class="isActive(item.path) ? 'text-ui-primary' : 'text-gray-400 group-hover:text-gray-500'"
                  aria-hidden="true"
                />
                {{ item.title }}
              </span>
            </NuxtLink>

            <!-- 递归渲染子项 -->
            <div class="mt-1 ml-3 pl-3 border-l border-gray-100 dark:border-gray-800">
               <DocsSidebar :navigation="item.children" :level="level + 1" />
            </div>
          </div>

          <!-- 叶子节点链接 (Leaf Link) -->
          <NuxtLink
            v-else
            :to="item.path"
            class="group flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors duration-200 relative"
            :class="[
              isActive(item.path)
                ? 'text-ui-primary font-medium bg-primary-50 dark:bg-primary-900/10'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
            ]"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="w-4 h-4 shrink-0 transition-colors"
              :class="isActive(item.path) ? 'text-ui-primary' : 'text-gray-400 group-hover:text-gray-500'"
              aria-hidden="true"
            />
            {{ item.title }}
          </NuxtLink>
        </template>
      </li>
    </ul>
  </component>
</template>

<script setup lang="ts">
/**
 * DocsSidebar 组件
 *
 * 渲染文档侧边栏导航树。
 * 主要功能：
 * - 递归渲染多级导航结构
 * - 响应式设计，集成 Nuxt UI
 * - 无障碍支持 (A11y attributes)
 * - 自动高亮当前激活路由
 * - 自动从 Content 集合获取并按 category 分组文档（如果未提供 navigation prop）
 * - 支持分组折叠/展开，并根据当前路由自动展开对应分组
 *
 * @component
 */

import type { PropType } from 'vue'

/**
 * 导航项结构接口
 */
interface NavigationItem {
  title: string
  path: string
  icon?: string
  children?: NavigationItem[]
  [key: string]: any
}

const props = defineProps({
  /**
   * 导航树数据
   * 可选：如果未提供，组件将自动从 content 集合中获取
   */
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    default: undefined
  },
  /**
   * 当前嵌套层级
   * 用于递归渲染时的样式调整（如缩进）和逻辑判断
   */
  level: {
    type: Number,
    default: 0
  }
})

const route = useRoute()

// --- 数据获取 (Data Fetching) ---

// 仅在根层级且未提供 navigation 属性时，自动获取文档列表
// 使用 useAsyncData 避免阻塞客户端导航
const { data: fetchedDocs, pending, error } = useAsyncData('sidebar-docs', async () => {
  if (props.level !== 0 || props.navigation) return []

  try {
    // 查询所有文档，获取必要字段用于生成导航
    const docs = await queryCollection('docs')
      .select('title', 'path', 'category', 'order', 'navigation')
      .order('order', 'ASC') // 按 order 字段升序排列
      .all()

    return docs
  } catch (e) {
    console.error('Error fetching sidebar docs:', e)
    throw e
  }
})

// --- 分组与列表逻辑 (Grouping & Items Logic) ---

/**
 * 计算最终显示的导航项列表
 * 如果传入了 navigation prop 则直接使用，否则根据 fetchedDocs 进行分类聚合
 */
const items = computed<NavigationItem[]>(() => {
  if (props.navigation) return props.navigation

  if (props.level === 0 && fetchedDocs.value) {
    const groups: Record<string, NavigationItem[]> = {}

    // 遍历文档进行分组
    fetchedDocs.value.forEach(doc => {
      // 优先使用 front-matter 中的 category，否则归为 "未分类"
      const cat = doc.category || '未分类'
      if (!groups[cat]) groups[cat] = []

      // 安全地处理 navigation 字段（可能是 boolean 或 object）
      let icon = undefined
      if (typeof doc.navigation === 'object' && doc.navigation !== null) {
        // @ts-ignore: 动态访问 navigation 属性
        icon = doc.navigation.icon
      }

      // 将文档添加至对应分组
      groups[cat].push({
        title: doc.title,
        path: doc.path,
        icon: icon,
        children: [] // 在这种扁平转分组模式下，叶子节点暂无子项
      })
    })

    // 定义分类的显示顺序
    const categoryOrder = ['指南', '框架', '未分类']

    // 将分组对象转换为数组，并进行排序
    return Object.entries(groups)
      .sort(([a], [b]) => {
        const idxA = categoryOrder.indexOf(a)
        const idxB = categoryOrder.indexOf(b)
        // 都在预定义列表中，按列表顺序
        if (idxA !== -1 && idxB !== -1) return idxA - idxB
        // 只有 A 在列表中，A 优先
        if (idxA !== -1) return -1
        // 只有 B 在列表中，B 优先
        if (idxB !== -1) return 1
        // 都不在列表中，按字母顺序
        return a.localeCompare(b)
      })
      .map(([title, children]) => ({
        title,
        path: '', // 分组标题没有实际路径
        children,
        icon: undefined
      }))
  }

  return []
})

// --- 折叠逻辑 (Collapse Logic) ---

// 跟踪折叠状态 (key: 分组标题, value: 是否折叠)
// 使用 useState 确保状态在组件重渲染时保持（如路由切换但未离开布局）
const collapsedSections = useState<Record<string, boolean>>('sidebar-collapsed-state', () => ({}))

// 初始化折叠状态：
// 1. 默认所有分组均为折叠状态 (true)
// 2. 自动检测并展开包含当前激活路由的分组
watch([items, () => route.path], ([newItems, currentPath]) => {
  if (props.level !== 0) return // 仅处理根层级

  newItems.forEach(section => {
    // 检查该分组下是否有子项匹配当前路径
    const isActiveSection = section.children?.some(child => child.path === currentPath)

    if (isActiveSection) {
      // 如果包含当前页面，则展开 (false)
      collapsedSections.value[section.title] = false
    } else {
      // 如果不包含，且未设置过状态，则初始化为折叠 (true)
      // 如果已设置过（用户手动交互过），则保持原样
      if (collapsedSections.value[section.title] === undefined) {
        collapsedSections.value[section.title] = true
      }
    }
  })
}, { immediate: true })

/**
 * 切换分组的折叠/展开状态
 * @param title 分组标题
 */
const toggleSection = (title: string) => {
  collapsedSections.value[title] = !collapsedSections.value[title]
}

// --- 辅助函数 (Helper) ---

/**
 * 检查给定路径是否为当前激活路由
 * @param path 待检查的路径
 * @returns true 如果路径匹配
 */
const isActive = (path: string): boolean => {
  if (!path) return false
  return route.path === path
}
</script>

<style scoped>
/* 可选：如果需要更复杂的过渡动画，可在此添加 */
</style>
