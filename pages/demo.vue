<script setup lang="ts">
// 页面级 meta 占位：需要两侧竖带装饰的页面可声明 frameSides: true（见 layouts/default.vue）
/**
 * 产品演示中心页面
 * 状态中枢：维护选中产品/分类状态，组装 Hero、移动标签栏、侧栏与详情组件
 */
import { demoCategories as categories, type ProductDemo } from '~/data/products'
import { SITE_URL } from '~/data/site'

definePageMeta({})

/**
 * 当前选中的产品
 * 默认选中第一个分类的第一个产品，添加空值安全检查
 */
const selectedProduct = ref<ProductDemo | null>(categories[0]?.products[0] ?? null)

/**
 * 当前选中的分类ID
 * 用于高亮左侧导航，添加空值安全检查
 */
const selectedCategoryId = ref<string>(categories[0]?.id ?? '')

/**
 * 分类展开状态
 * 记录每个分类的展开/折叠状态
 */
const expandedCategories = ref<Record<string, boolean>>({
  independent: true,
  extension: true
})

/**
 * 切换分类展开状态
 * @param categoryId - 分类ID
 */
function toggleCategory(categoryId: string): void {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

/**
 * 选择产品
 * @param product - 要选中的产品
 * @param categoryId - 产品所属分类ID
 */
function selectProduct(product: ProductDemo, categoryId: string): void {
  selectedProduct.value = product
  selectedCategoryId.value = categoryId
}

/**
 * 当前分类的产品列表
 * 根据选中的分类ID返回对应的产品数组
 */
const currentCategoryProducts = computed<ProductDemo[]>(() => {
  const category = categories.find(c => c.id === selectedCategoryId.value)
  return category?.products || []
})

/**
 * 切换移动端分类（底部标签栏）
 * 若当前选中的产品不在新分类中，则自动选择新分类的第一个产品
 * @param categoryId - 分类ID
 */
function handleSelectCategory(categoryId: string): void {
  selectedCategoryId.value = categoryId
  const category = categories.find(c => c.id === categoryId)
  if (category && category.products.length > 0) {
    const currentProductInCategory = category.products.find(p => p.id === selectedProduct.value?.id)
    if (!currentProductInCategory) {
      const firstProduct = category.products[0]
      if (firstProduct) {
        selectedProduct.value = firstProduct
      }
    }
  }
}

/**
 * 错误边界处理
 * 捕获组件渲染过程中的错误，防止整个页面崩溃
 */
onErrorCaptured(() => {
  // 返回 false 阻止错误向上传播
  return false
})

/**
 * SEO 配置常量
 */
// 统一用 SITE_URL（原写死 https://buidai.com 少 www，与站点基准域名不一致）
const baseUrl = SITE_URL
const pageTitle = '产品演示中心 | 在线体验AI产品'
const pageDescription =
  '智言万象产品演示中心，在线体验智言AI智能客服、企业知识库、AI绘画、AI视频、AI数字人等AI产品。支持PC端、移动端、后台管理等多平台演示。'
const canonicalUrl = `${baseUrl}/demo`

/**
 * SEO 元数据：统一走 usePageSeo（og/twitter/canonical 派生逻辑与全站一致）。
 * noindex 与 nuxt.config sitemap.exclude: ['/demo'] 口径一致——演示页不对外分发
 */
usePageSeo({
  title: pageTitle,
  description: pageDescription,
  ogType: 'website',
  canonicalUrl,
  robots: 'noindex, nofollow'
})

// WebPage 结构化数据（useHead script 注入为官方安全用法，内容为静态常量）
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '产品演示中心',
        description: pageDescription,
        url: canonicalUrl,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: '产品演示', item: canonicalUrl }
          ]
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <!-- Nuxt 要求 pages/layouts 单根节点（@nuxt/eslint nuxt/vue/single-root，页面过渡等特性依赖） -->
    <div class="min-h-screen bg-white py-8 lg:pb-8 pb-20">
      <!-- 背景装饰 -->
      <div
        class="absolute top-0 left-0 w-full h-[400px] md:h-[500px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"
      />

      <!-- 移动端底部标签栏 - 切换产品分类 (悬浮胶囊风) -->
      <DemoMobileTabs
        :categories="categories"
        :selected-category-id="selectedCategoryId"
        @select-category="handleSelectCategory"
      />

      <!-- 顶部 Hero 区域 -->
      <DemoHero
        :current-category-products="currentCategoryProducts"
        :selected-category-id="selectedCategoryId"
        :selected-product="selectedProduct"
        @select="selectProduct"
      />

      <!-- 主体内容区域 - 使用 container 包裹左右布局 -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex gap-6 lg:gap-8">
          <!-- 左侧产品导航栏 -->
          <DemoSidebar
            :categories="categories"
            :selected-category-id="selectedCategoryId"
            :selected-product="selectedProduct"
            :expanded-categories="expandedCategories"
            @toggle-category="toggleCategory"
            @select="selectProduct"
          />

          <!-- 右侧产品详情 -->
          <DemoProductDetail v-if="selectedProduct" :selected-product="selectedProduct" />
        </div>
      </div>
    </div>
    <!-- CTA 底部行动召唤区域 -->
    <LandingCtaSection />
  </div>
</template>
