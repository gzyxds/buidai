<template>
  <div class="min-h-screen bg-[#F3F4F6] dark:bg-neutral-900 font-sans selection:bg-[#6E58FF] selection:text-white">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[500px] bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- 顶部 Hero 区域 -->
    <section class="relative pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <!-- 徽章 -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-neutral-200 shadow-sm mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E58FF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#6E58FF]"></span>
            </span>
            <span class="text-xs font-medium text-neutral-600">智言AI · 应用市场</span>
          </div>

          <!-- 标题 -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F12] dark:text-white tracking-tight leading-[1.2] mb-4">
            发现 <span class="text-[#6E58FF]">AI 应用</span> 新可能
          </h1>

          <!-- 副标题 -->
          <p class="text-base sm:text-lg text-[#5A5E6A] dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            探索丰富的 AI 插件与独立应用，涵盖智能写作、图像处理、效率工具等多个领域
          </p>
        </div>
      </div>
    </section>

    <!-- 主内容区域 -->
    <section class="relative z-10 pb-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">

          <!-- 侧边栏导航 -->
          <aside class="w-full lg:w-72 shrink-0">
            <div class="lg:sticky lg:top-24 space-y-6">
              <!-- 搜索框 -->
              <div class="relative group">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜索应用..."
                  class="w-full pl-11 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-[#6E58FF]/20 focus:border-[#6E58FF] outline-none transition-all text-sm shadow-sm"
                >
                <MagnifyingGlassIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#6E58FF] transition-colors" />
              </div>

              <!-- 分类列表 -->
              <div class="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm overflow-hidden">
                <div class="px-4 py-3 border-b border-neutral-100 dark:border-neutral-700">
                  <h3 class="text-sm font-semibold text-neutral-900 dark:text-white">应用分类</h3>
                </div>
                <nav class="p-2">
                  <button
                    v-for="category in categories"
                    :key="category.id"
                    @click="activeCategory = category.id"
                    class="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group"
                    :class="activeCategory === category.id
                      ? 'bg-[#6E58FF]/10 text-[#6E58FF] dark:bg-[#6E58FF]/20'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 hover:text-neutral-900 dark:hover:text-white'"
                  >
                    <span>{{ category.name }}</span>
                    <span
                      class="text-xs px-2 py-0.5 rounded-full transition-colors"
                      :class="activeCategory === category.id
                        ? 'bg-[#6E58FF] text-white'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600'"
                    >
                      {{ getCategoryCount(category.id) }}
                    </span>
                  </button>
                </nav>
              </div>

              <!-- 客服入口 -->
              <div class="bg-gradient-to-br from-[#6E58FF] to-[#7A42FF] rounded-xl p-5 text-white shadow-lg shadow-[#6E58FF]/20">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">需要帮助？</h4>
                    <p class="text-xs text-white/70">专业顾问在线解答</p>
                  </div>
                </div>
                <button
                  @click="openQrModal('wechat')"
                  class="w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <QrCodeIcon class="w-4 h-4" />
                  联系客服
                </button>
              </div>
            </div>
          </aside>

          <!-- 主要内容区域 -->
          <main class="flex-1 min-w-0">

            <!-- 促销横幅 -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6E58FF] via-[#7A42FF] to-[#8B5CF6] text-white p-6 md:p-8 mb-8 shadow-xl shadow-[#6E58FF]/20 group">
              <!-- 网格背景 -->
              <div class="absolute inset-0 opacity-5 pointer-events-none"
                   style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 32px 32px;">
              </div>

              <!-- 装饰圆形 -->
              <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="space-y-3">
                  <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                    <SparklesIcon class="w-3.5 h-3.5" />
                    限时特惠
                  </div>
                  <h2 class="text-xl md:text-2xl font-bold tracking-tight">智言AI 应用市场上线啦!</h2>
                  <p class="text-white/80 text-sm md:text-base max-w-md">联系客服领取五折优惠码，数量有限，先到先得</p>
                </div>
                <button
                  @click="openQrModal('coupon')"
                  class="shrink-0 px-6 py-3 bg-white text-[#6E58FF] rounded-xl font-semibold text-sm hover:bg-white/90 transition-all shadow-lg flex items-center gap-2 group-hover:scale-105 transform duration-200"
                >
                  <TicketIcon class="w-4 h-4" />
                  获取5折优惠码
                  <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <!-- 统计信息栏 -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div class="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-[#6E58FF]/10 flex items-center justify-center">
                    <CubeIcon class="w-5 h-5 text-[#6E58FF]" />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-neutral-900 dark:text-white">{{ apps.length }}</div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400">全部应用</div>
                  </div>
                </div>
              </div>
              <div class="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircleIcon class="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-neutral-900 dark:text-white">官方认证</div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400">品质保障</div>
                  </div>
                </div>
              </div>
              <div class="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <ArrowPathIcon class="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-neutral-900 dark:text-white">永久授权</div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400">持续更新</div>
                  </div>
                </div>
              </div>
              <div class="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <SparklesIcon class="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div class="text-xl font-bold text-neutral-900 dark:text-white">5折优惠</div>
                    <div class="text-xs text-neutral-500 dark:text-neutral-400">限时活动</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Title -->
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <component :is="getCurrentCategoryIcon" class="w-5 h-5 text-[#6E58FF]" v-if="getCurrentCategoryIcon" />
                {{ getCurrentCategoryName }}
                <span class="ml-1 text-sm font-normal text-neutral-400">({{ filteredApps.length }})</span>
              </h2>
              <div class="flex items-center gap-2">
                <button
                  @click="viewMode = 'grid'"
                  class="p-2 rounded-lg transition-colors"
                  :class="viewMode === 'grid' ? 'bg-[#6E58FF] text-white' : 'bg-white dark:bg-neutral-800 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 border border-neutral-200 dark:border-neutral-700'"
                >
                  <Squares2X2Icon class="w-4 h-4" />
                </button>
                <button
                  @click="viewMode = 'list'"
                  class="p-2 rounded-lg transition-colors"
                  :class="viewMode === 'list' ? 'bg-[#6E58FF] text-white' : 'bg-white dark:bg-neutral-800 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 border border-neutral-200 dark:border-neutral-700'"
                >
                  <ListBulletIcon class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Apps Grid -->
            <div v-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                v-for="app in filteredApps"
                :key="app.id"
                class="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-[#6E58FF]/30 hover:shadow-xl hover:shadow-[#6E58FF]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <!-- App Preview Image -->
                <div class="aspect-video bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 relative p-2 rounded-t-2xl overflow-hidden">
                  <img
                    :src="app.image"
                    :alt="app.name"
                    class="w-full h-full object-cover rounded-xl border border-neutral-200/50 dark:border-neutral-700/50"
                    loading="lazy"
                    decoding="async"
                  />
                  <!-- 分类标签 -->
                  <div class="absolute top-2.5 left-2.5">
                    <span class="px-2.5 py-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
                      {{ getCategoryLabel(app.category) }}
                    </span>
                  </div>
                  <!-- 独立系统标签 -->
                  <div v-if="app.category === 'independent'" class="absolute top-2.5 right-2.5">
                    <span class="px-2.5 py-1 bg-gradient-to-r from-[#6E58FF] to-[#8B5CF6] rounded-full text-xs font-medium text-white shadow-lg">
                      源码版
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 flex-1 flex flex-col">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 flex items-center justify-center shrink-0">
                       <component :is="app.icon" class="w-4 h-4" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-[#6E58FF] transition-colors">{{ app.name }}</h3>
                    </div>
                  </div>

                  <p class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-4 flex-1 leading-relaxed">
                    {{ app.description }}
                  </p>

                  <!-- 价格和信息 -->
                  <div class="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                    <div class="flex items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span v-if="app.originalPrice !== app.discountPrice" class="text-base text-neutral-400 line-through">¥{{ app.originalPrice.toFixed(2) }}</span>
                        <span v-if="app.originalPrice !== app.discountPrice" class="px-2 py-1 bg-neutral-900 dark:bg-white rounded text-xs font-medium text-yellow-500">折后价 ¥{{ app.discountPrice.toFixed(2) }}</span>
                        <span v-else class="text-xl font-bold text-neutral-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
                      </div>
                      <button class="px-3 py-1.5 bg-[#6E58FF] hover:bg-[#7A42FF] text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors">
                        <ShoppingBagIcon class="w-3.5 h-3.5" />
                        购买
                      </button>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-400">
                      <div class="flex items-center gap-1">
                        <CheckCircleIcon class="w-3.5 h-3.5 text-green-500" />
                        <span>官方认证</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <ArrowPathIcon class="w-3.5 h-3.5 text-blue-500" />
                        <span>永久升级</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 应用程序列表视图 -->
            <div v-else class="space-y-4">
              <div
                v-for="app in filteredApps"
                :key="app.id"
                class="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-[#6E58FF]/30 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"
              >
                <!-- 应用程序预览图像 -->
                <div class="w-full sm:w-48 aspect-video sm:aspect-auto sm:h-40 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800 relative p-2 shrink-0 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none overflow-hidden">
                  <img
                    :src="app.image"
                    :alt="app.name"
                    class="w-full h-full object-cover rounded-xl border border-neutral-200/50 dark:border-neutral-700/50"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <!-- 内容 -->
                <div class="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <div class="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 flex items-center justify-center shrink-0">
                         <component :is="app.icon" class="w-4 h-4" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                          <h3 class="font-bold text-neutral-900 dark:text-white group-hover:text-[#6E58FF] transition-colors">{{ app.name }}</h3>
                          <span class="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 rounded text-xs text-neutral-500 dark:text-neutral-400">{{ getCategoryLabel(app.category) }}</span>
                          <span v-if="app.category === 'independent'" class="px-2 py-0.5 bg-gradient-to-r from-[#6E58FF] to-[#8B5CF6] rounded text-xs text-white">源码版</span>
                        </div>
                      </div>
                    </div>

                    <p class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {{ app.description }}
                    </p>
                  </div>

                  <div class="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                    <div class="flex items-center gap-2">
                      <span v-if="app.originalPrice !== app.discountPrice" class="text-base text-neutral-400 line-through">¥{{ app.originalPrice.toFixed(2) }}</span>
                      <span v-if="app.originalPrice !== app.discountPrice" class="px-2 py-1 bg-neutral-900 dark:bg-white rounded text-xs font-medium text-yellow-500">折后价 ¥{{ app.discountPrice.toFixed(2) }}</span>
                      <span v-else class="text-lg font-bold text-neutral-900 dark:text-white">¥{{ app.originalPrice.toFixed(2) }}</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <button class="px-3 py-1.5 bg-[#6E58FF] hover:bg-[#7A42FF] text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors">
                        <ShoppingBagIcon class="w-3.5 h-3.5" />
                        购买
                      </button>
                      <div class="flex items-center gap-1 text-xs text-neutral-400">
                        <CheckCircleIcon class="w-3.5 h-3.5 text-green-500" />
                        <span>官方认证</span>
                      </div>
                      <div class="flex items-center gap-1 text-xs text-neutral-400">
                        <ArrowPathIcon class="w-3.5 h-3.5 text-blue-500" />
                        <span>永久升级</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredApps.length === 0" class="text-center py-20">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 mb-6">
                <InboxArrowDownIcon class="w-10 h-10 text-neutral-400" />
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-2">未找到相关应用</h3>
              <p class="text-neutral-500 text-sm mb-6">换个搜索词试试看吧</p>
              <button
                @click="searchQuery = ''; activeCategory = 'all'"
                class="px-6 py-2.5 bg-[#6E58FF] text-white rounded-xl text-sm font-medium hover:bg-[#6E58FF]/90 transition-colors"
              >
                查看全部应用
              </button>
            </div>

          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  InboxArrowDownIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  QrCodeIcon,
  TicketIcon,
  CubeIcon,
  ArrowPathIcon,
  Squares2X2Icon,
  ListBulletIcon
} from '@heroicons/vue/24/outline'
import {
  Video as VideoIcon,
  Palette as PaletteIcon,
  FileText as FileTextIcon,
  GitBranch as GitBranchIcon,
  User as UserIcon,
  PenTool as PenToolIcon,
  MonitorPlay as PresentationIcon,
  FileSignature as FileSignatureIcon,
  ShoppingBag as ShoppingBagIcon,
  Tv as TvIcon,
  BookOpen as BookOpenIcon,
  MapPin as MapPinIcon,
  Image as ImageIcon,
  Film as FilmIcon,
  Trophy as TrophyIcon,
  Copy as CopyIcon,
  Shirt as ShirtIcon,
  Scissors as ScissorsIcon,
  ImagePlus as ImagePlusIcon
} from 'lucide-vue-next'
import { apps, categories } from '~/utils/pluginData'
import type { AppData, Category } from '~/utils/pluginData'

/**
 * 二维码弹窗触发函数
 * @param {string} type - 弹窗类型，'coupon' 或 'wechat'
 */
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取五折优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

definePageMeta({
  layout: 'default'
})

// SEO 元数据配置
useSeoMeta({
  title: '智言AI - 应用市场 - 智言万象 | 丰富的 AI 插件与独立应用',
  description: '探索 智言AI 应用市场，发现和安装各类 AI 插件与独立应用。涵盖智能写作、图像处理、效率工具等多个领域，一键扩展您的 AI 办公能力。',
  keywords: '智言万象AI应用市场, AI插件, 独立应用, AI工具商店, 智能办公插件, 效率工具, AI扩展, 开发者市场',
  ogTitle: '智言AI - 应用市场 - 智言万象 | 丰富的 AI 插件与独立应用',
  ogDescription: '探索 智言AI 应用市场，发现和安装各类 AI 插件与独立应用。涵盖智能写作、图像处理、效率工具等多个领域，一键扩展您的 AI 办公能力。',
  ogType: 'website'
})

// --- 状态定义 ---

const searchQuery = ref('')
const activeCategory = ref('all')
const viewMode = ref<'grid' | 'list'>('grid')

// 分类图标映射
const categoryIconMap: Record<string, any> = {
  all: CubeIcon,
  video: VideoIcon,
  writing: PenToolIcon,
  efficiency: GitBranchIcon,
  enterprise: FileSignatureIcon
}

// 分类名称映射
const categoryNameMap: Record<string, string> = {
  all: '全部应用',
  recommend: '官方推荐',
  independent: '独立系统',
  extension: '扩展应用',
  video: '图像视频',
  writing: '智能写作',
  enterprise: '企业工具',
  efficiency: '效率工具'
}

// --- 计算属性 ---

/**
 * 根据搜索关键词和当前分类过滤应用列表
 */
const filteredApps = computed(() => {
  return apps.filter(app => {
    // 1. 根据搜索关键词过滤
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 2. 根据分类过滤
    const matchesCategory = activeCategory.value === 'all' || app.category === activeCategory.value ||
                            // 模拟 "官方推荐" 分类显示部分项目
                            (activeCategory.value === 'recommend' && app.id <= 3) ||
                            // 模拟 "独立应用" 分类
                            (activeCategory.value === 'independent' && app.id >= 50)

    return matchesSearch && matchesCategory
  })
})

/**
 * 获取当前分类名称
 */
const getCurrentCategoryName = computed(() => {
  return categoryNameMap[activeCategory.value] || '全部应用'
})

/**
 * 获取当前分类图标
 */
const getCurrentCategoryIcon = computed(() => {
  return categoryIconMap[activeCategory.value] || CubeIcon
})

// --- 方法定义 ---

/**
 * 获取分类下的应用数量
 * @param {string} categoryId - 分类ID
 * @returns {number} 该分类下的应用数量
 */
const getCategoryCount = (categoryId: string): number => {
  if (categoryId === 'all') return apps.length
  if (categoryId === 'recommend') return 4
  if (categoryId === 'independent') return apps.filter(app => app.id >= 50).length
  return apps.filter(app => app.category === categoryId).length
}

/**
 * 获取分类显示标签
 * @param {string} categoryId - 分类ID
 * @returns {string} 分类显示名称
 */
const getCategoryLabel = (categoryId: string): string => {
  return categoryNameMap[categoryId] || categoryId
}

</script>

<style scoped>
/* 隐藏滚动条但保留功能 */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 侧边栏自定义滚动条 */
aside::-webkit-scrollbar {
  width: 4px;
}
aside::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.1);
  border-radius: 4px;
}
</style>
