<script lang="ts" setup>
import { getProductDetailBySlug, handleImageError, productSlugs, type ProductDetail } from '~/data/products'

definePageMeta({})

// SEO 元数据
usePageSeo({
  title: '产品中心 - 开源 AI 产品与私有化部署方案',
  description:
    '浏览 智言万象 全部开源 AI 产品：AI 绘画、AI 视频、数字人、AI 音乐、AI PPT、AI 简历等一站式解决方案，提供完整源码与私有化部署支持。',
  keywords: '产品中心,AI产品,开源AI系统,AI绘画,AI视频,数字人,AI音乐,AI PPT,AI简历,私有化部署,智言万象',
  ogTitle: '产品中心 - 开源 AI 产品与私有化部署方案 | 智言万象',
  ogDescription: '浏览 智言万象 全部开源 AI 产品，提供完整源码与私有化部署支持。',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

/**
 * 置顶产品：来自应用市场的 4 款独立系统，固定排在产品矩阵最前
 * （顺序即应用市场数字 id 50→53，新增置顶产品时在此追加 slug）
 */
const PINNED_SLUGS = ['knowledge-base', 'digital-human-saas', 'yichuang-ai', 'yichuang-paper']

/** 具备详情页的产品列表（置顶产品在前，其余按实体文件名序稳定排列） */
const detailProducts = productSlugs
  .map(slug => getProductDetailBySlug(slug))
  .filter((p): p is ProductDetail => p !== undefined)
  .sort((a, b) => {
    const ai = PINNED_SLUGS.indexOf(a.slug)
    const bi = PINNED_SLUGS.indexOf(b.slug)
    if (ai !== -1 || bi !== -1) { return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi) }
    return 0
  })

/**
 * 产品卡片的"矩阵光谱"强调色板：按索引循环取色，
 * 让相邻产品一眼可辨（颜色即导航地标），呼应"产品矩阵"概念。
 * 每个色板同时给出图标底与封面渐隐色。
 */
const PRODUCT_ACCENTS = [
  {
    iconBox: 'bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400',
    tag: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300'
  },
  {
    iconBox: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400',
    tag: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
  },
  {
    iconBox: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400',
    tag: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300'
  },
  {
    iconBox: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400',
    tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
  },
  {
    iconBox: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
    tag: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
  },
  {
    iconBox: 'bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400',
    tag: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300'
  }
]

/** 按产品索引取强调色 */
function accentOf(index: number) {
  return PRODUCT_ACCENTS[index % PRODUCT_ACCENTS.length]!
}

/** Hero 打字机：产品矩阵覆盖的领域词（顺序固定，SSR/客户端一致） */
const DOMAIN_WORDS = ['AI 绘画', 'AI 视频', '数字人', 'AI 音乐', 'AI PPT', 'AI 简历', 'AI 模特', 'AI 短剧', 'AI 知识库', 'AI 论文']
const { text: domainText } = useTypewriter(DOMAIN_WORDS)

/**
 * Hero 产品药丸：短名取自 seo.title 首段（如"即梦AI绘画"）。
 * 按 index 奇偶拆成两行反向跑马灯；顺序固定，避免 hydration 不一致。
 */
const productPills = detailProducts.map((p, i) => ({
  slug: p.slug,
  name: p.seo.title.split(' - ')[0]!,
  icon: p.icon ?? 'i-lucide-box',
  accent: accentOf(i).iconBox
}))
const pillRows = [
  productPills.filter((_, i) => i % 2 === 0),
  productPills.filter((_, i) => i % 2 === 1)
]
</script>

<template>
  <div class="relative min-h-full font-sans text-gray-900 bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
    <!-- ========== 背景：矩阵光谱光场 ========== -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <!-- 细网格纹理：顶部居中向下渐隐，呼应站点 AI 网格语汇 -->
      <div class="hero-grid absolute inset-x-0 top-0 h-[760px]" />
      <!-- 顶部主光场（站点 indigo→violet→fuchsia 渐变语汇） -->
      <div class="absolute top-[-12%] left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-gradient-to-r from-indigo-300/25 via-violet-300/25 to-fuchsia-300/25 blur-[120px] dark:from-indigo-500/15 dark:via-violet-500/15 dark:to-fuchsia-500/15" />
      <!-- 两侧辅光斑：与卡片色板同源（cyan / amber） -->
      <div class="absolute top-48 -left-24 w-96 h-96 rounded-full bg-cyan-200/25 blur-[100px] dark:bg-cyan-500/10" />
      <div class="absolute top-72 -right-24 w-96 h-96 rounded-full bg-amber-200/25 blur-[100px] dark:bg-amber-500/10" />
      <!-- 底部收尾光斑（emerald，呼应 CTA 区之上） -->
      <div class="absolute bottom-24 left-1/3 w-80 h-80 rounded-full bg-emerald-200/15 blur-[100px] dark:bg-emerald-500/10" />
    </div>

    <!-- ========== 首屏区域 ========== -->
    <div class="relative pt-24 pb-16 md:pt-36 md:pb-24 z-10">
      <div class="container mx-auto px-4 text-center">
        <!-- 状态徽章 -->
        <div class="inline-flex items-center gap-2.5 rounded-full border border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-4 py-1.5 shadow-sm mb-8">
          <span class="relative flex size-2" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
            <span class="relative inline-flex size-2 rounded-full bg-violet-500" />
          </span>
          <span class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
            {{ detailProducts.length }} 款开源产品 · 完整源码交付 · 支持私有化部署
          </span>
        </div>

        <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.08]">
          开源
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
            AI 产品矩阵
          </span>
        </h1>

        <!-- 领域打字机 -->
        <p class="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 min-h-[1.6em]">
          一站式覆盖
          <span class="text-ui-primary font-semibold">{{ domainText }}</span>
          <span class="animate-blink ml-0.5 border-r-2 border-ui-primary inline-block align-middle h-[1.1em]" aria-hidden="true" />
        </p>

        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          从 AI 绘画到数字人、企业知识库，全部产品开箱即用，提供完整源码与私有化部署支持。
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <UButton
            size="xl"
            color="primary"
            to="#products"
            class="w-full sm:w-auto px-8 rounded-full justify-center text-base font-medium shadow-lg shadow-ui-primary/20"
          >
            浏览全部产品
            <template #trailing>
              <UIcon name="i-heroicons-arrow-down" class="w-5 h-5" />
            </template>
          </UButton>
          <UButton
            size="xl"
            color="neutral"
            variant="outline"
            to="/contact"
            class="w-full sm:w-auto px-8 rounded-full justify-center text-base font-medium"
          >
            联系我们
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </template>
          </UButton>
        </div>

        <!-- 数据条：一行式极简呈现，纯色数字 + 灰标签，圆点分隔（移动端不换行） -->
        <div class="mt-6 sm:mt-8 flex items-center justify-center gap-x-3 sm:gap-x-5 px-4 whitespace-nowrap">
          <div class="flex items-baseline gap-1.5">
            <span class="text-sm sm:text-base font-bold text-violet-600 dark:text-violet-400">{{ detailProducts.length }}+</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">开源产品</span>
          </div>
          <span class="size-1 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
          <div class="flex items-baseline gap-1.5">
            <span class="text-sm sm:text-base font-bold text-violet-600 dark:text-violet-400">100%</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">源码开放</span>
          </div>
          <span class="size-1 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
          <div class="flex items-baseline">
            <span class="text-sm sm:text-base font-bold text-violet-600 dark:text-violet-400">私有化部署</span>
          </div>
        </div>
      </div>

      <!-- 产品药丸双排跑马灯 -->
      <div class="relative mt-14 md:mt-16" aria-hidden="true">
        <div class="flex flex-col gap-3">
          <UMarquee orientation="horizontal" :ui="{ root: '[--duration:42s] py-1' }">
            <span
              v-for="pill in pillRows[0]"
              :key="pill.slug"
              class="inline-flex items-center gap-2 mx-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <UIcon :name="pill.icon" class="w-4 h-4" :class="pill.accent" />
              {{ pill.name }}
            </span>
          </UMarquee>
          <UMarquee reverse orientation="horizontal" :ui="{ root: '[--duration:48s] py-1' }">
            <span
              v-for="pill in pillRows[1]"
              :key="pill.slug"
              class="inline-flex items-center gap-2 mx-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <UIcon :name="pill.icon" class="w-4 h-4" :class="pill.accent" />
              {{ pill.name }}
            </span>
          </UMarquee>
        </div>
      </div>
    </div>

    <!-- ========== 产品网格 ========== -->
    <div id="products" class="relative z-10 pb-20 scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(p, i) in detailProducts"
            :key="p.slug"
            :to="`/product/${p.slug}`"
            class="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <!-- 封面图：底部渐隐到卡面色，配图与卡片融为一体 -->
            <div class="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                :src="p.image || p.hero.demoImage"
                :alt="p.name"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent dark:from-gray-800/90" />
            </div>

            <div class="flex flex-col flex-1 p-6">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center" :class="accentOf(i).iconBox">
                  <UIcon :name="p.icon || 'i-lucide-box'" class="w-5 h-5" />
                </div>
                <h2 class="flex-1 text-lg font-bold line-clamp-2 leading-snug">{{ p.name }}</h2>
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="w-4 h-4 mt-1 text-gray-300 dark:text-gray-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>

              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {{ p.description }}
              </p>

              <div v-if="p.tags?.length" class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in p.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
                  :class="accentOf(i).tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ========== CTA 区域 ========== -->
    <div class="relative z-10 pb-24">
      <div class="container mx-auto px-4">
        <div class="text-center rounded-3xl border border-gray-200 dark:border-gray-700 px-6 py-16 bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-500/10 dark:via-gray-800 dark:to-gray-800">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">没有找到合适的产品？</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8">联系我们，获取定制化 AI 解决方案与私有化部署支持。</p>
          <UButton
            size="xl"
            color="primary"
            to="/contact"
            class="px-8 py-3.5 rounded-full justify-center text-base font-medium shadow-lg shadow-ui-primary/20"
          >
            联系我们
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Hero 细网格纹理：顶部居中椭圆渐隐 ── */
.hero-grid {
  background-image:
    linear-gradient(to right, rgb(99 102 241 / 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(99 102 241 / 0.07) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse 70% 62% at 50% 0%, black 25%, transparent 72%);
  mask-image: radial-gradient(ellipse 70% 62% at 50% 0%, black 25%, transparent 72%);
}

.dark .hero-grid {
  background-image:
    linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px);
}

/* ── 打字光标闪烁（与首页 HeroSection 同款节奏） ── */
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── 无障碍：尊重减少动画偏好 ── */
@media (prefers-reduced-motion: reduce) {
  .animate-blink,
  .animate-ping {
    animation: none !important;
  }
}
</style>
