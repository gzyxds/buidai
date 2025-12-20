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
                @click="toggleMobileMenu"
                class="p-2 text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle navigation"
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
                  了解 BuidAI 的最新进展与功能更新。
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
                          class="w-2 h-2 rounded-full flex-shrink-0"
                          :class="version.isMajor ? 'bg-primary-600' : 'bg-gray-300'"
                        ></span>
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
                     <span class="w-2 h-2 rounded-full bg-primary-600"></span>
                     <span>主要版本 (Major)</span>
                   </li>
                   <li class="flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-gray-300"></span>
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
            @click="toggleMobileMenu"
            class="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
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
            <div
              v-for="(version, index) in versions"
              :key="index"
              :id="`version-${index}`"
              class="version-section scroll-mt-24 lg:scroll-mt-32"
            >
              <UChangelogVersions :versions="[version]" />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: '更新日志 - BuidAI',
  description: 'BuidAI 产品版本更新历史与功能迭代记录'
})

const { data: versions } = await useAsyncData('changelog-updates', () => {
  return queryCollection('update').order('date', 'DESC').all()
})

// --- Interaction Logic ---

const activeIndex = ref(0)
const isMobileMenuOpen = ref(false)

const currentVersionTitle = computed(() => {
  return versions.value[activeIndex.value]?.title || '更新日志'
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToVersion = (index: number) => {
  activeIndex.value = index
  isMobileMenuOpen.value = false

  const el = document.getElementById(`version-${index}`)
  if (el) {
    // Offset for sticky headers
    const offset = window.innerWidth < 1024 ? 120 : 100
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = el.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Intersection Observer for Active State
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            const index = parseInt(id.replace('version-', ''))
            if (!isNaN(index)) {
              activeIndex.value = index
            }
          }
        }
      })
    }, {
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1
    })

    // Observe all version sections
    versions.value.forEach((_, index) => {
      const el = document.getElementById(`version-${index}`)
      if (el) observer?.observe(el)
    })
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style lang="scss" scoped>
// Using SCSS for layout specifics as requested
// Breakpoints: Mobile < 768px, Tablet 768px-1023px, Desktop >= 1024px

.layout-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem; // 48px
  }
}

.sidebar {
  width: 100%;

  // Mobile & Tablet: Collapsible or Top
  @media (max-width: 1023px) {
    &.is-mobile-open {
      position: fixed;
      inset: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.98);
      padding: 1rem;
      overflow-y: auto;

      .sidebar-content {
        display: block !important;
        animation: slideIn 0.3s ease-out;
      }
    }
  }

  // Desktop: Fixed Width & Sticky
  @media (min-width: 1024px) {
    width: 300px;
    flex-shrink: 0;
  }
}

.sidebar-sticky {
  @media (min-width: 1024px) {
    position: sticky;
    top: 8rem; // Adjust based on header height
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    padding-right: 1rem; // Scrollbar space

    // Custom Scrollbar
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e5e7eb;
      border-radius: 4px;
    }
  }
}

.mobile-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.toc-nav {
  .toc-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    color: #4b5563; // text-gray-600
    transition: all 0.2s ease;
    font-size: 0.95rem;

    &:hover {
      background-color: #f3f4f6; // bg-gray-100
      color: #111827; // text-gray-900
    }

    &.active {
      background-color: #eff6ff; // bg-primary-50 (assuming blue/primary)
      color: var(--ui-primary, #0284c7); // Use CSS variable or fallback
      font-weight: 500;
    }
  }
}

.main-content {
  flex: 1;
  min-width: 0; // Prevent flex item overflow
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
