<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- 标题区域 -->
      <SectionHeading eyebrow="覆盖主流 AI 应用" description="覆盖内容创作、客户服务、数字营销等核心场景，助力企业降本增效">
        适合<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">私有化产品交付</span>
      </SectionHeading>

      <!-- 分类导航 -->
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
        <div
          v-for="(cat, idx) in categories"
          :key="cat.name"
          class="group relative flex flex-col items-center gap-2 px-3 py-5 rounded-xl border transition-all duration-200 cursor-pointer"
          :class="activeCategory === idx
            ? 'border-indigo-200 bg-indigo-50/60 shadow-sm'
            : 'border-neutral-100 bg-white hover:border-indigo-100 hover:bg-neutral-50/50'"
          @click="activeCategory = idx"
        >
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200"
            :class="activeCategory === idx
              ? 'bg-indigo-500 text-white shadow-sm'
              : 'bg-neutral-100 text-neutral-500 group-hover:bg-indigo-50 group-hover:text-indigo-500'"
          >
            {{ cat.icon }}
          </div>
          <span
            class="text-xs font-medium transition-colors duration-200"
            :class="activeCategory === idx ? 'text-indigo-600' : 'text-neutral-600 group-hover:text-neutral-800'"
          >
            {{ cat.name }}
          </span>
          <span
            v-if="cat.count"
            class="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-indigo-500 text-white text-[9px] font-bold flex items-center justify-center"
          >
            {{ cat.count }}
          </span>
        </div>
      </div>

      <!-- 应用卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="item in displayedItems"
          :key="item.title"
          class="group flex flex-col gap-3 rounded-xl border border-neutral-100 bg-white p-5 transition-all duration-200 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100/60 flex items-center justify-center text-indigo-600 text-sm font-bold shrink-0 group-hover:from-indigo-100 group-hover:to-violet-100 group-hover:border-indigo-200 transition-all duration-200">
              {{ item.iconChar }}
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-sm font-semibold text-neutral-800 group-hover:text-indigo-600 transition-colors truncate">
                {{ item.title }}
              </h3>
            </div>
          </div>

          <p class="text-xs leading-5 text-neutral-500 line-clamp-2">
            {{ item.desc }}
          </p>

          <div class="mt-auto pt-3 flex items-center justify-between border-t border-neutral-100/80">
            <span class="text-[10px] text-neutral-400 font-medium tracking-wide">已上线</span>
            <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </div>

      <!-- 查看更多 -->
      <div v-if="hasMoreItems" class="mt-10 text-center">
        <button
          type="button"
          class="group inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm active:scale-[0.98]"
          @click="toggleExpand"
        >
          <span>{{ isExpanded ? '收起' : '查看更多' }}</span>
          <UIcon
name="i-lucide-chevron-down"
            class="h-4 w-4 transition-transform duration-200"
            :class="{ 'rotate-180': isExpanded }"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
interface FeatureItem {
  title: string
  desc: string
  iconChar: string
  category: number
}

interface Category {
  name: string
  icon: string
  count?: number
}

const activeCategory = ref(0)

const allFeatures: FeatureItem[] = [
  // AI 生图 (category 0)
  { title: 'AI商品图', desc: '面向电商商品图生成的 AI 工具，复用 AIGC 生图通道并支持独立售价、场景分类和场景模板。', iconChar: '商', category: 0 },
  { title: 'AI换装', desc: '面向服装效果预览的 AI 试衣应用，复用 AIGC 生图通道并支持独立用户售价。', iconChar: '装', category: 0 },
  { title: 'AI换发型', desc: '面向人物发型和发色调整的 AI 图片创作应用，复用 AIGC 生图通道完成生成。', iconChar: '发', category: 0 },
  { title: '模特穿戴', desc: '面向服饰、配饰和电商穿搭展示的 AI 模特穿戴工具，支持独立价格包。', iconChar: '模', category: 0 },
  { title: '商品多角度', desc: '面向商品图的 AI 商品多角度工具，支持单图上传、多选视角和租户独立按视角定价。', iconChar: '角', category: 0 },
  { title: '服饰套图', desc: '面向服饰展示的 AI 服饰套图工具，支持多张服饰图、模特图和租户按服饰图单张定价。', iconChar: '套', category: 0 },
  { title: '图片风格化', desc: '面向电商风格化生成的 AI 工具，支持独立售价、风格分类和风格模板。', iconChar: '风', category: 0 },
  { title: '图片去背景', desc: '面向商品图、人物图和素材图的 AI 图片去背景工具，复用 AIGC 生图通道。', iconChar: '背', category: 0 },
  { title: '老照片修复', desc: '面向老照片修复和上色的 AI 工具，复用 AIGC 生图通道并支持独立模型规格售价。', iconChar: '旧', category: 0 },
  { title: '图片翻译', desc: '面向商品图、人物图和素材图的 AI 图片翻译工具，支持租户独立翻译质量定价。', iconChar: '译', category: 0 },

  // AI 视频 (category 1)
  { title: 'AI视频剪辑', desc: 'AI视频剪辑应用，支持真人口播混剪、素材混剪、新闻体视频剪辑。', iconChar: '剪', category: 1 },
  { title: '产品宣传视频', desc: '面向电商产品传播的 AI 产品宣传视频工具，支持产品图生成视频。', iconChar: '宣', category: 1 },
  { title: 'AIGC视频', desc: 'AIGC video generation application framework for the LikeAdmin AIGC SaaS platform.', iconChar: 'G', category: 1 },
  { title: '动作替换', desc: '上传参考人物图片和输入视频，将视频动作替换到人物形象生成新视频。', iconChar: '换', category: 1 },
  { title: '动作迁移', desc: '上传参考人物图片和参考视频，将视频动作迁移到人物形象生成新视频。', iconChar: '移', category: 1 },

  // 数字人 (category 2)
  { title: '全驱数字人', desc: '基于人物图片和参考音频生成全驱数字人视频，支持 PC端创作和任务轮询。', iconChar: '全', category: 2 },
  { title: '数字人视频', desc: '面向移动端、PC端和后台端的数字人应用框架，支持专属形象和声音。', iconChar: '数', category: 2 },

  // AI 写作 (category 3)
  { title: 'AI对话', desc: 'AI 对话能随时随地的聊天、解答疑问，就像身边有个全能的智能助手。', iconChar: '聊', category: 3 },
  { title: 'AI文案优化', desc: '快速修正文案问题、优化表达，小白也能写出高质量的专业文案。', iconChar: '文', category: 3 },
  { title: 'AI PPT', desc: '根据主题或大纲自动生成结构清晰、设计美观的 PPT 演示文稿。', iconChar: 'P', category: 3 },

  // 语音 (category 4)
  { title: '语音克隆', desc: '音色训练、TTS 合成、音频任务和历史管理。', iconChar: '音', category: 4 },
  { title: '语音TTS', desc: '语音克隆、文字转语音（同步/异步）、语音识别等多端点 AI 语音能力。', iconChar: 'T', category: 4 },

  // 智能体 (category 5)
  { title: '智能体搭建', desc: '可快速搭建智能体，并关联知识库能够深度理解用户输入的文本提示词。', iconChar: '智', category: 5 },
  { title: '知识库创建', desc: '用户自主搭建结构化、可扩展的知识存储体系，支持导入不同格式的文件。', iconChar: '库', category: 5 },
  { title: 'MCP工具', desc: '前后台都能添加MCP工具，运营可在后台统一配置，用户能在前台自主使用。', iconChar: 'M', category: 5 },

  // AI 办公 (category 6)
  { title: '智能体广场', desc: '快速找到并使用适配各类场景的智能体，轻松解决工作与生活中的各类问题。', iconChar: '场', category: 6 },
  { title: '用户管理', desc: '一键查询、筛选、操作用户数据，快速处理账号问题，减轻日常管理负担。', iconChar: '管', category: 6 },
  { title: '会员订阅', desc: '支持灵活的计费周期与权益配置，可无缝对接权限管理、自动续费等核心业务模块。', iconChar: '会', category: 6 },

  // 更多 (category 7)
  { title: 'PC桌面端', desc: 'PC桌面端性能强、功能全、体验高效，是复杂任务与专业场景的首选。', iconChar: '桌', category: 7 },
  { title: '阿里云OSS', desc: '阿里云OSS具备海量、安全、低成本、高可用的特性，可便捷实现文件存储与管理。', iconChar: '云', category: 7 },
  { title: '财务统计', desc: '通过自动化的对账、结算与报表生成，大幅减少财务人员的重复工作。', iconChar: '财', category: 7 },
]

// 分类带数量统计
const categories = computed<Category[]>(() => {
  const counts = [0, 1, 2, 3, 4, 5, 6, 7].map(cid =>
    allFeatures.filter(f => f.category === cid).length
  )
  return [
    { name: 'AI 生图', icon: '图', count: counts[0] },
    { name: 'AI 视频', icon: '视', count: counts[1] },
    { name: '数字人', icon: '人', count: counts[2] },
    { name: 'AI 写作', icon: '文', count: counts[3] },
    { name: '语音', icon: '音', count: counts[4] },
    { name: '智能体', icon: '智', count: counts[5] },
    { name: 'AI 办公', icon: '办', count: counts[6] },
    { name: '更多', icon: '···', count: counts[7] },
  ]
})

const isExpanded = ref(false)
const DEFAULT_DISPLAY_COUNT = 16

const effectiveFeatures = computed(() => {
  return allFeatures.filter(f => {
    if (activeCategory.value === 0) {return true}
    if (activeCategory.value === 7) {return f.category === 7}
    return f.category === activeCategory.value
  })
})

const displayedItems = computed(() => {
  const list = effectiveFeatures.value
  return isExpanded.value ? list : list.slice(0, DEFAULT_DISPLAY_COUNT)
})

const hasMoreItems = computed(() => effectiveFeatures.value.length > DEFAULT_DISPLAY_COUNT)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>
