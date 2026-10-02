<template>
  <header
    ref="headerRef"
    class="sticky top-0 inset-x-0 z-100 transition-all duration-300 border-b"
    :class="headerClasses"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[72px]">
        <!-- 左侧：Logo -->
        <div class="flex items-center gap-10 flex-1">
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0" aria-label="智言万象 Home">
            <img
              :src="isTransparent ? '/logo.svg' : '/logo.svg'"
              alt="智言万象 Logo"
              width="120"
              height="32"
              fetchpriority="high"
              class="h-8 w-auto object-contain transition-opacity duration-300"
            />
          </NuxtLink>

          <!-- 中间：桌面端导航 -->
          <nav class="hidden md:flex items-center gap-1">
            <UNavigationMenu
              highlight
              highlight-color="primary"
              orientation="horizontal"
              :items="items"
              :ui="navigationMenuUi"
              class="justify-center data-[orientation=horizontal]:border-b border-transparent"
            >
              <!-- 产品中心：分组 Mega Menu 面板 -->
              <template #products-content>
                <div class="sm:w-[760px] p-2">
                  <div class="grid grid-cols-4 gap-1">
                    <div v-for="group in productMenuGroups" :key="group.label" class="min-w-0">
                      <p class="px-3 pt-1.5 pb-2 text-xs font-semibold uppercase tracking-wider text-dimmed">
                        {{ group.label }}
                      </p>
                      <ul class="space-y-1">
                        <li v-for="product in group.children" :key="product.to as string">
                          <NuxtLink
                            :to="product.to!"
                            class="group/child flex items-start gap-2.5 rounded-lg p-2.5 hover:bg-elevated transition-colors duration-150"
                          >
                            <UIcon
                              :name="product.icon!"
                              class="size-5 mt-px shrink-0 text-dimmed group-hover/child:text-muted transition-colors duration-150"
                            />
                            <span class="min-w-0">
                              <span class="block text-sm font-semibold text-highlighted group-hover/child:text-primary transition-colors duration-150">
                                {{ product.label }}
                              </span>
                              <span class="block text-xs text-muted leading-relaxed line-clamp-1">{{ product.description }}</span>
                            </span>
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- 底部入口：查看全部产品 / 应用中心 -->
                  <div class="mt-2 flex items-center gap-1 border-t border-default pt-2">
                    <NuxtLink
                      v-for="link in productMenuFooter"
                      :key="link.to as string"
                      :to="link.to!"
                      class="group/child flex flex-1 items-center gap-2.5 rounded-lg p-2.5 hover:bg-elevated transition-colors duration-150"
                    >
                      <UIcon
                        :name="link.icon!"
                        class="size-5 shrink-0 text-dimmed group-hover/child:text-muted transition-colors duration-150"
                      />
                      <span class="min-w-0">
                        <span class="block text-sm font-semibold text-highlighted group-hover/child:text-primary transition-colors duration-150">
                          {{ link.label }}
                        </span>
                        <span class="block text-xs text-muted leading-relaxed line-clamp-1">{{ link.description }}</span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </UNavigationMenu>
          </nav>
        </div>

        <!-- 右侧：操作按钮和移动端菜单切换 -->
        <div class="flex items-center gap-3">
          <!-- 桌面端操作按钮 -->
          <div class="hidden md:flex items-center gap-3">
            <UButton
              to="https://www.gmlart.cn"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              color="neutral"
              class="h-10 rounded-full px-4 sm:px-6 font-medium transition-all duration-200"
              :class="[isTransparent ? 'bg-white text-gray-900 hover:bg-gray-50' : 'bg-black text-white hover:bg-gray-800']"
            >
              <template #leading>
                <UIcon name="i-lucide-log-in" class="w-4 h-4" />
              </template>
              登录智言
            </UButton>

            <UButton
              to="https://api.gmlart.cn/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              color="neutral"
              class="h-10 rounded-full px-4 sm:px-6 font-medium transition-colors duration-200"
              :class="[isTransparent ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50']"
            >
              <template #leading>
                <UIcon name="i-lucide-book-open" class="w-4 h-4" />
              </template>
              智言API
            </UButton>
          </div>

          <!-- 移动端菜单切换按钮 -->
          <UButton
            class="md:hidden"
            variant="ghost"
            color="neutral"
            :aria-label="mobileMenuOpen ? '关闭菜单' : '打开菜单'"
            :aria-expanded="mobileMenuOpen"
            :class="isTransparent ? 'text-white/80 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
          </UButton>
        </div>
      </div>
    </div>

    <!-- 移动端菜单遮罩层 -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="mobileMenuOpen"
        class="md:hidden fixed inset-0 bg-black/25 backdrop-blur-sm z-40"
        :style="mobileMaskStyle"
        @click="mobileMenuOpen = false"
      />
    </Transition>

    <!-- 移动端菜单面板 -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-[0.98]"
    >
      <div
        v-show="mobileMenuOpen"
        id="mobile-menu-panel"
        class="md:hidden fixed inset-x-0 border-t border-gray-200/80 bg-white/95 backdrop-blur-md shadow-2xl overflow-y-auto z-50"
        :style="mobileMenuStyle"
      >
        <div class="p-4 space-y-3">
          <!-- 子菜单视图 -->
          <template v-if="activeSubmenu">
            <!-- 子菜单头部：返回按钮和标题 -->
            <div class="flex items-center gap-3 pb-3 border-b border-gray-100">
              <UButton
                variant="ghost"
                color="neutral"
                size="sm"
                class="rounded-lg -ml-2"
                @click="closeSubmenu"
              >
                <UIcon name="i-lucide-arrow-left" class="w-5 h-5" />
              </UButton>
              <span class="text-lg font-semibold text-gray-900">{{ activeSubmenu }}</span>
            </div>

            <!-- 子菜单项列表：按分组渲染 -->
            <div v-for="group in currentSubmenuGroups" :key="group.label || 'ungrouped'">
              <p
                v-if="group.label"
                class="pt-3 first:pt-0 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400"
              >
                {{ group.label }}
              </p>
              <div class="grid grid-cols-2 gap-2">
                <NuxtLink
                  v-for="item in group.items"
                  :key="item.to"
                  :to="item.to"
                  class="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 active:scale-[0.98]"
                  :class="{ 'bg-primary/5 ring-1 ring-primary/20': isCurrentRoute(item.to) }"
                  @click="mobileMenuOpen = false"
                >
                  <UIcon :name="item.icon" class="text-lg text-gray-500 shrink-0" :class="{ 'text-primary': isCurrentRoute(item.to) }" />
                  <span class="flex-1 text-sm text-gray-600 truncate" :class="{ 'text-primary font-medium': isCurrentRoute(item.to) }">{{ item.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </template>

          <!-- 主菜单视图 -->
          <template v-else>
            <!-- 一级菜单：双列布局 -->
            <div class="grid grid-cols-2 gap-2">
              <template v-for="item in primaryItems" :key="item.label">
                <!-- 有子菜单的项：使用按钮展开子菜单 -->
                <button
                  v-if="item.hasChildren"
                  class="flex items-center gap-2 p-3 rounded-lg transition-all duration-200 active:scale-[0.98] text-left w-full"
                  :class="getPrimaryItemClasses(item)"
                  @click="openSubmenu(item.label!)"
                >
                  <UIcon :name="item.icon" class="text-lg shrink-0 text-gray-700" />
                  <span class="flex-1 text-sm font-medium truncate text-gray-700">{{ item.label }}</span>
                  <UIcon name="i-lucide-chevron-right" class="text-gray-400 shrink-0" />
                </button>
                <!-- 无子菜单的项：使用 NuxtLink 进行导航 -->
                <NuxtLink
                  v-else
                  :to="item.to"
                  class="flex items-center gap-2 p-3 rounded-lg transition-all duration-200 active:scale-[0.98] text-left w-full"
                  :class="getPrimaryItemClasses(item)"
                  @click="mobileMenuOpen = false"
                >
                  <UIcon :name="item.icon" class="text-lg shrink-0" :class="isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-700'" />
                  <span class="flex-1 text-sm font-medium truncate" :class="isCurrentRoute(item.to) ? 'text-primary' : 'text-gray-700'">{{ item.label }}</span>
                </NuxtLink>
              </template>
            </div>

            <!-- 底部操作按钮 -->
            <div class="flex items-center gap-3 pt-3 border-t border-gray-100">
              <UButton
                to="https://www.gmlart.cn"
                target="_blank"
                rel="noopener noreferrer"
                block
                color="neutral"
                variant="ghost"
                class="flex-1 h-12 rounded-xl bg-black text-white text-base font-medium hover:bg-gray-800 active:scale-[0.98] transition-all leading-relaxed justify-center"
              >
                <template #leading>
                  <UIcon name="i-lucide-log-in" class="w-5 h-5" />
                </template>
                登录智言
              </UButton>

              <UButton
                to="https://api.gmlart.cn/"
                target="_blank"
                rel="noopener noreferrer"
                block
                color="neutral"
                variant="ghost"
                class="flex-1 h-12 rounded-xl text-base font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all leading-relaxed justify-center"
              >
                <template #leading>
                  <UIcon name="i-lucide-book-open" class="w-5 h-5" />
                </template>
                智言API
              </UButton>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'
import { SCROLL, LAYOUT } from '~/utils/ui'

/**
 * AppNavigation 组件
 *
 * 应用主导航组件，支持响应式设计
 * 特性：
 * - 桌面端：水平导航菜单，产品中心为分组 Mega Menu（4 组能力分类），资源中心为常规下拉
 * - 移动端：宫格布局，支持子菜单展开与分组标题
 * - 滚动时背景变化
 * - 当前页面高亮
 *
 * 菜单结构：品牌（首页/智言AI）→ 产品（产品中心）→ 商业（解决方案/定价/私有部署）→ 内容（资源中心）→ 生态（优刻云计算）
 */

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeSubmenu = ref<string | null>(null)

const headerRef = ref<HTMLElement | null>(null)
const menuTop = ref<number>(LAYOUT.HEADER_HEIGHT)
const menuHeight = ref(`calc(100svh - ${LAYOUT.HEADER_HEIGHT}px)`)

const updateMenuPosition = () => {
  if (headerRef.value) {
    const rect = headerRef.value.getBoundingClientRect()
    menuTop.value = rect.bottom
    menuHeight.value = `calc(100svh - ${rect.bottom}px)`
  }
}

/**
 * 打开子菜单
 * @param label - 子菜单标题
 */
const openSubmenu = (label: string) => {
  activeSubmenu.value = label
}

/**
 * 关闭子菜单，返回主菜单
 */
const closeSubmenu = () => {
  activeSubmenu.value = null
}

/**
 * 判断是否为当前路由
 * @param path - 路由路径
 * @returns 是否为当前路由
 */
const isCurrentRoute = (path?: string): boolean => {
  if (!path) {
    return false
  }
  return route.path === path
}

/**
 * 产品中心分组（桌面端 Mega Menu 与移动端子菜单共用的单一数据源）
 * 12 个产品按能力维度分为 4 组，避免平铺列表难以扫描
 */
const productMenuGroups: NavigationMenuItem[] = [
  {
    label: 'AI 绘画创作',
    icon: 'i-lucide-palette',
    children: [
      { label: '香蕉绘画', description: '开源免费的 AI 图像生成系统', icon: 'i-lucide-palette', to: '/product/banana' },
      { label: '即梦AI绘画', description: 'AI绘画系统', icon: 'i-lucide-image', to: '/product/jmdraw' },
      { label: '电商试衣', description: '开源免费的AI模特换装系统', icon: 'i-lucide-shirt', to: '/product/model' }
    ]
  },
  {
    label: 'AI 视频创作',
    icon: 'i-lucide-video',
    children: [
      { label: '即梦AI视频', description: '开源免费的 AI 视频生成系统', icon: 'i-lucide-video', to: '/product/jimeng' },
      { label: 'Sora视频', description: '开源免费的 AI 视频创作系统', icon: 'i-lucide-film', to: '/product/sora' },
      { label: '视频混剪', description: '开源免费的视频剪辑软件', icon: 'i-lucide-scissors', to: '/product/videoclip' },
      { label: '数字人系统', description: '开源免费的虚拟形象克隆系统', icon: 'i-lucide-user', to: '/product/human' }
    ]
  },
  {
    label: 'AI 智能写作',
    icon: 'i-lucide-pen-line',
    children: [
      { label: '网文短剧', description: '开源免费的网文短剧写作系统', icon: 'i-lucide-clapperboard', to: '/product/drama' },
      { label: '小红书助手', description: '开源免费的 AI 文案生成系统', icon: 'i-lucide-book-open', to: '/product/xhs' },
      { label: 'AI简历', description: '开源免费的智能简历生成与分析系统', icon: 'i-lucide-file-text', to: '/product/resume' }
    ]
  },
  {
    label: 'AI 效率办公',
    icon: 'i-lucide-briefcase',
    children: [
      { label: 'AI PPT', description: '开源免费的智能演示文稿制作工具', icon: 'i-lucide-presentation', to: '/product/ppt' },
      { label: 'AI音乐', description: '开源免费的 AI 音乐生成系统', icon: 'i-lucide-music', to: '/product/music' }
    ]
  }
]

/**
 * 产品中心面板底部入口（查看全部 + 应用市场）
 */
const productMenuFooter: NavigationMenuItem[] = [
  { label: '查看全部产品', description: '浏览全部开源 AI 产品', icon: 'i-lucide-arrow-right', to: '/product' },
  { label: '应用中心', description: '丰富的 AI 应用插件', icon: 'i-lucide-grid-2x2', to: '/plugin' }
]

/**
 * 导航项配置
 * 结构：品牌（首页/智言AI）→ 产品（产品中心）→ 商业（解决方案/定价/私有部署）→ 内容（资源中心）→ 生态（优刻云计算）
 */
const items = computed<NavigationMenuItem[][]>(() => [
  [
    { label: '首页', to: '/', icon: 'i-lucide-house' },
    { label: '智言AI', to: '/agent', icon: 'i-lucide-bot' },
    {
      label: '产品中心',
      icon: 'i-lucide-box',
      slot: 'products' as const,
      children: [...productMenuGroups, ...productMenuFooter]
    },
    { label: '解决方案', to: '/solutions', icon: 'i-lucide-lightbulb' },
    { label: '定价方案', to: '/pricing', icon: 'i-lucide-tag' },
    { label: '私有部署', to: '/buidai', icon: 'i-lucide-server' },
    {
      label: '资源中心',
      icon: 'i-lucide-library',
      children: [
        { label: '更新日志', description: '查看产品最新动态', icon: 'i-lucide-history', to: '/changelog' },
        { label: '技术博客', description: '深入了解 AI 技术与实践', icon: 'i-lucide-newspaper', to: '/blog' },
        { label: '文档中心', description: '详细的使用指南和开发文档', icon: 'i-lucide-book-open', to: '/docs' },
        { label: '产品演示', description: '在线体验各产品功能', icon: 'i-lucide-monitor-play', to: '/demo' },
        { label: '资源下载', description: '获取设计资源和开发工具', icon: 'i-lucide-download', to: '/resources' }
      ]
    },
    { label: '优刻云计算', icon: 'i-lucide-cloud', to: 'https://www.cloudcvm.com', target: '_blank' },
  ]
])

/**
 * 计算透明状态
 * 当前默认返回 false，可根据路由或滚动状态扩展
 */
const isTransparent = computed(() => {
  return false
})

/**
 * 动态头部样式类
 */
const headerClasses = computed(() => {
  if (isTransparent.value) {
    return isScrolled.value ? 'bg-white/90 backdrop-blur-md border-gray-200/50' : 'bg-transparent border-transparent'
  }
  return 'bg-white border-gray-100'
})

/**
 * 桌面端导航菜单 UI 配置
 */
const navigationMenuUi = computed(() => ({
  link: isTransparent.value
    ? 'text-base text-white/80 hover:text-white hover:bg-white/10 font-medium rounded-lg px-3 py-2 transition-colors duration-150'
    : 'text-base text-muted hover:text-highlighted hover:bg-elevated font-medium rounded-lg px-3 py-2 transition-colors duration-150',
  linkActive: isTransparent.value
    ? 'text-white font-semibold bg-white/15 rounded-lg'
    : 'text-primary font-semibold bg-primary/10 rounded-lg',
  linkLeadingIcon: isTransparent.value
    ? 'text-white/60 group-hover:text-white'
    : 'text-dimmed group-hover:text-muted group-[.router-link-active]:text-primary',
  content: 'sm:w-auto bg-default rounded-xl shadow-xl ring-1 ring-default p-2',
  viewport: 'sm:w-(--reka-navigation-menu-viewport-width) overflow-hidden',
  childList: 'sm:w-72 space-y-1',
  childItem: '',
  childLink: 'flex flex-wrap items-center gap-x-2 gap-y-1 p-3 rounded-lg hover:bg-elevated transition-colors duration-150 group/child',
  childLinkWrapper: 'contents',
  childLinkIcon: 'size-5 text-dimmed group-hover/child:text-muted shrink-0 transition-colors duration-150',
  childLinkLabel: 'font-semibold text-highlighted group-hover/child:text-primary transition-colors duration-150',
  childLinkDescription: 'w-full text-sm text-muted leading-relaxed'
}))

/**
 * 移动端菜单样式
 * 使用 svh 单位处理 iOS 工具栏变化
 */
const mobileMenuStyle = computed(() => ({
  top: `${menuTop.value}px`,
  height: menuHeight.value,
  maxHeight: menuHeight.value,
  paddingBottom: 'env(safe-area-inset-bottom)'
}))

/**
 * 移动端菜单遮罩样式
 */
const mobileMaskStyle = computed(() => ({
  top: `${menuTop.value}px`
}))

/**
 * 导航项接口
 */
interface FlattenedNavItem {
  label: string
  to: string
  icon: string
  isChild: boolean
  /** 所属一级菜单标题（子菜单筛选依据） */
  menuLabel?: string
  /** 产品分组标题（产品中心子菜单内分组显示） */
  groupLabel?: string
  hasChildren?: boolean
}

/**
 * 扁平化导航项
 * 用于移动端宫格布局，支持两级嵌套（分组 → 产品）
 */
const flattenNavigationItems = computed<FlattenedNavItem[]>(() => {
  const flattened: FlattenedNavItem[] = []

  items.value.forEach(group => {
    group.forEach(item => {
      if (!item.label) {
        return
      }

      const hasChildren = !!item.children && item.children.length > 0

      // 添加一级菜单项
      flattened.push({
        label: item.label,
        to: (item.to as string) || '',
        icon: item.icon || 'i-lucide-circle',
        isChild: false,
        hasChildren
      })

      // 添加子菜单项
      if (item.children) {
        item.children.forEach(child => {
          if (child.children?.length) {
            // 分组：展平组内产品，携带分组标题
            child.children.forEach((product: NavigationMenuItem) => {
              if (product.to && product.label) {
                flattened.push({
                  label: product.label,
                  to: product.to as string,
                  icon: product.icon || 'i-lucide-circle',
                  isChild: true,
                  menuLabel: item.label,
                  groupLabel: child.label
                })
              }
            })
          } else if (child.to && child.label) {
            flattened.push({
              label: child.label,
              to: child.to as string,
              icon: child.icon || 'i-lucide-circle',
              isChild: true,
              menuLabel: item.label
            })
          }
        })
      }
    })
  })

  return flattened
})

/**
 * 一级菜单项
 */
const primaryItems = computed(() =>
  flattenNavigationItems.value.filter(item => !item.isChild)
)

/**
 * 当前子菜单项
 */
const currentSubmenuItems = computed(() => {
  if (!activeSubmenu.value) {
    return []
  }
  return flattenNavigationItems.value.filter(
    item => item.isChild && item.menuLabel === activeSubmenu.value
  )
})

/**
 * 当前子菜单的分组视图
 * 有分组标题的项按组归并，无分组项单独成组（组标签为空）
 */
const currentSubmenuGroups = computed<{ label: string; items: FlattenedNavItem[] }[]>(() => {
  const groups: { label: string; items: FlattenedNavItem[] }[] = []
  const ungrouped: FlattenedNavItem[] = []

  currentSubmenuItems.value.forEach(item => {
    if (item.groupLabel) {
      const group = groups.find(g => g.label === item.groupLabel)
      if (group) {
        group.items.push(item)
      } else {
        groups.push({ label: item.groupLabel, items: [item] })
      }
    } else {
      ungrouped.push(item)
    }
  })

  if (ungrouped.length) {
    groups.push({ label: '', items: ungrouped })
  }

  return groups
})

/**
 * 获取一级菜单项样式类
 * @param item - 导航项
 * @returns 样式类名
 */
const getPrimaryItemClasses = (item: FlattenedNavItem): string => {
  const isActive = isCurrentRoute(item.to)

  if (isActive) {
    return 'bg-primary/10 ring-1 ring-primary/20'
  }

  if (item.hasChildren) {
    return 'bg-blue-50 hover:bg-blue-100'
  }

  return 'bg-gray-50 hover:bg-gray-100'
}

// --- 滚动处理 ---

const isScrolled = useScrollThreshold(SCROLL.THRESHOLD)

/**
 * 路由变化时关闭移动端菜单
 */
watch(() => route.path, () => {
  mobileMenuOpen.value = false
  activeSubmenu.value = null
})

// --- Body 滚动锁定 ---

const scrollY = ref(0)

/**
 * 锁定 body 滚动
 */
const lockBodyScroll = () => {
  if (typeof document === 'undefined') {
    return
  }

  scrollY.value = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY.value}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.width = '100%'
  document.body.dataset.scrollY = String(scrollY.value)
}

/**
 * 解锁 body 滚动
 */
const unlockBodyScroll = () => {
  if (typeof document === 'undefined') {
    return
  }

  const savedScrollY = parseInt(document.body.dataset.scrollY || '0')
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''
  window.scrollTo(0, savedScrollY)
  delete document.body.dataset.scrollY
}

/**
 * 监听移动端菜单状态，控制 body 滚动
 */
watch(mobileMenuOpen, (open) => {
  if (open) {
    updateMenuPosition()
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
})
</script>
