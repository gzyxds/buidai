<template>
  <div class="changelog-page min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-20">
      <div class="layout-wrapper">
        <!-- Sidebar Navigation -->
        <aside class="sidebar" :class="{ 'is-mobile-open': isMobileMenuOpen }">
          <div class="sidebar-sticky">
            <!-- Mobile Header for Sidebar -->
            <div class="mobile-sidebar-header lg:hidden">
              <span class="text-lg font-bold text-gray-900">版本目录</span>
              <button
                class="p-2 text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle navigation"
                @click="toggleMobileMenu"
              >
                <svg v-if="isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <!-- Content for Desktop/Tablet/Mobile(Expanded) -->
            <div class="sidebar-content" :class="{ 'hidden lg:block': !isMobileMenuOpen }">
              <div class="mb-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">更新日志</h1>
                <p class="text-base text-gray-600">
                  了解 智言万象 的最新进展与功能更新。
                </p>
              </div>

              <nav class="toc-nav" aria-label="Table of Contents">
                <ul class="space-y-1">
                  <li v-for="(version, index) in versions" :key="index">
                    <a
                      :href="`#version-${index}`"
                      class="toc-link"
                      :class="{ 'active': activeIndex === index }"
                      @click.prevent="scrollToVersion(index)"
                    >
                      <span class="flex items-center gap-2">
                        <span
                          class="w-2 h-2 rounded-full shrink-0"
                          :class="version.isMajor ? 'bg-primary-600' : 'bg-gray-300'"
                        />
                        <span class="version-title truncate">{{ version.title }}</span>
                      </span>
                      <span class="text-xs text-gray-400 ml-auto">{{ version.date }}</span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div class="mt-8 pt-8 border-t border-gray-200 hidden lg:block">
                 <h3 class="text-sm font-semibold text-gray-900 mb-3">关于版本</h3>
                 <ul class="space-y-2 text-sm text-gray-600">
                   <li class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-primary-600"/>
                     <span>主要版本 (Major)</span>
                   </li>
                   <li class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-gray-300"/>
                     <span>常规更新 (Minor/Patch)</span>
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </aside>

        <!-- Mobile TOC Toggle Button (Sticky Bar) -->
        <div class="lg:hidden mb-6 sticky top-[64px] z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 -mx-4 px-4 py-3 flex items-center justify-between shadow-sm">
          <span class="font-semibold text-gray-900">当前版本: {{ currentVersionTitle }}</span>
          <button
            class="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            @click="toggleMobileMenu"
          >
            <span>目录</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Main Content Area -->
        <main class="main-content">
          <div class="space-y-12 lg:space-y-20">
            <!--
              单实例渲染全部版本（组件内部 v-for），避免 v-for 内逐版本实例化组件
              造成 N 份实例与重复渲染；锚点 id 由组件按 idPrefix 生成
            -->
            <UChangelogVersions id-prefix="version" :versions="changelogVersions" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({})

usePageSeo({
  title: '智言AI - 更新日志 - 智言万象 | 产品迭代历史与新功能发布',
  description: '查看 智言万象 的最新版本更新记录，包括新功能上线、性能优化、Bug 修复及未来规划。保持关注，获取第一手产品动态。',
  keywords: '智言AI更新日志, 版本记录, 产品动态, 新功能发布, 迭代历史, 软件更新, AI平台更新',
  ogTitle: '智言AI - 更新日志 - 智言万象 | 产品迭代历史与新功能发布',
  ogDescription: '查看 智言万象 的最新版本更新记录，包括新功能上线、性能优化、Bug 修复及未来规划。保持关注，获取第一手产品动态。',
  ogType: 'website'
})

 
const { data: versions } = await useAsyncData('changelog-updates', () => {
  return queryCollection('update').order('date', 'DESC').all()
})

// async data 在挂载前可能为undefined，统一兜底为空数组供模板遍历
const changelogVersions = computed(() => versions.value ?? [])

// --- Interaction Logic ---

const activeIndex = ref(0)
const isMobileMenuOpen = ref(false)

const currentVersionTitle = computed(() => {
  return versions.value?.[activeIndex.value]?.title || '更新日志'
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/**
 * 版本目录联动：平滑跳转 + 滚动高亮
 *
 * 该页以数字索引（activeIndex）驱动侧栏高亮，而 composable 返回字符串 id，
 * 故用 resolveActiveId 把 `version-N` 反解为索引，回填到 activeIndex。
 *
 * 偏移量与 rootMargin 保留该页原有取值，断点行为不变。
 */
const { activeId, scrollToId: scrollToIdByAnchor } = useToc({
  // 点击目录项：跳转并收起移动端目录
  resolveTargets: () => changelogVersions.value
    .map((_, index) => document.getElementById(`version-${index}`))
    .filter((el): el is HTMLElement => el !== null),
  resolveActiveId: el => el.id,
  headingOffset: () => (window.innerWidth < 1024 ? 120 : 100),
  syncHash: false,
  rootMargin: '-20% 0px -50% 0px',
  threshold: 0.1
})

/** 由锚点 id 推导版本索引 */
const versionIndexFromAnchor = (id: string): number => {
  const index = Number.parseInt(id.replace('version-', ''), 10)
  return Number.isNaN(index) ? -1 : index
}

// 观察器命中的锚点同步到侧栏高亮索引
watch(activeId, (id) => {
  const index = versionIndexFromAnchor(id)
  if (index >= 0) {
    activeIndex.value = index
  }
})

/**
 * 跳转到指定版本
 * @param index 版本索引
 */
const scrollToVersion = (index: number): void => {
  activeIndex.value = index
  isMobileMenuOpen.value = false
  scrollToIdByAnchor(`version-${index}`)
}
</script>

<style scoped>
/* Breakpoints: Mobile < 768px, Tablet 768px-1023px, Desktop >= 1024px */

.layout-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

@media (min-width: 1024px) {
  .layout-wrapper {
    flex-direction: row;
    gap: 3rem; /* 48px */
  }
}

.sidebar {
  width: 100%;
}

/* Mobile & Tablet: Collapsible or Top */
@media (max-width: 1023px) {
  .sidebar.is-mobile-open {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.98);
    padding: 1rem;
    overflow-y: auto;
  }

  .sidebar.is-mobile-open .sidebar-content {
    display: block !important;
    animation: slideIn 0.3s ease-out;
  }
}

/* Desktop: Fixed Width & Sticky */
@media (min-width: 1024px) {
  .sidebar {
    width: 300px;
    flex-shrink: 0;
  }

  .sidebar-sticky {
    position: sticky;
    top: 8rem; /* Adjust based on header height */
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    padding-right: 1rem; /* Scrollbar space */
  }

  .sidebar-sticky::-webkit-scrollbar {
    width: 4px;
  }

  .sidebar-sticky::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 4px;
  }
}

.mobile-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.toc-nav .toc-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #4b5563; /* text-gray-600 */
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.toc-nav .toc-link:hover {
  background-color: #f3f4f6; /* bg-gray-100 */
  color: #111827; /* text-gray-900 */
}

.toc-nav .toc-link.active {
  background-color: #eff6ff;
  color: var(--ui-primary, #0284c7);
  font-weight: 500;
}

.main-content {
  flex: 1;
  min-width: 0; /* Prevent flex item overflow */
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
