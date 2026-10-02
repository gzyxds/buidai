<script setup lang="ts">
/**
 * 特征网格区块：功能选项卡 + 卡片网格
 */
import { ref, computed } from 'vue'
/**
 * 功能特性数据接口
 */
interface FeatureItem {
  title: string
  tag: string
  category: string
  bgClass?: string
  iconClass: string
}

/** 当前选中的功能 Tab */
const currentTab = ref('全部')
/** 功能 Tab 列表 */
const tabs = ['全部', 'AI 视觉创作', '智能对话 Agent', '知识库与文档', '模型与数据能力', '营销与应用集成', '其他功能']

/**
 * 核心功能数据列表
 * 包含：AI 视觉创作、智能对话 Agent、知识库与文档、模型与数据能力、营销与应用集成等
 */
const allFeatures: FeatureItem[] = [
  // AI 视觉创作
  { title: 'Sora2视频', tag: 'Video', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-blue-50 to-purple-50', iconClass: 'i-lucide-video' },
  { title: '香蕉绘画Nanobanana', tag: 'AI Art', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-palette' },
  { title: 'AI视频', tag: 'Video', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-clapperboard' },
  { title: 'AI绘画', tag: 'AI Art', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-image' },
  { title: '艺术二维码', tag: 'QR Code', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-indigo-50 to-blue-50', iconClass: 'i-lucide-qr-code' },
  { title: '豆包文生图', tag: 'AI Image', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-image-plus' },
  { title: 'AI改图', tag: 'Edit', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-pencil' },
  { title: 'AI配音工具', tag: 'Voice', category: 'AI 视觉创作', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-mic' },
  // 智能对话 Agent
  { title: '智能体', tag: 'Agent', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-purple-50 to-indigo-50', iconClass: 'i-lucide-bot' },
  { title: 'AI对话', tag: 'Chat', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-blue-50 to-purple-50', iconClass: 'i-lucide-message-circle' },
  { title: '对话html预览', tag: 'Preview', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-indigo-50 to-blue-50', iconClass: 'i-lucide-code' },
  { title: '对话上传文件', tag: 'Upload', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-upload' },
  { title: '智能体DSL', tag: 'DSL', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-workflow' },
  { title: '对话文案AI补全', tag: 'Completion', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-sparkles' },
  { title: '语音播报', tag: 'TTS', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-volume-2' },
  { title: '分享对话', tag: 'Share', category: '智能对话 Agent', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-share-2' },
  // 知识库与文档
  { title: '知识库', tag: 'Knowledge', category: '知识库与文档', bgClass: 'bg-linear-to-br from-blue-50 to-purple-50', iconClass: 'i-lucide-book-open' },
  { title: '文件导入导出', tag: 'Import', category: '知识库与文档', bgClass: 'bg-linear-to-br from-indigo-50 to-blue-50', iconClass: 'i-lucide-import' },
  { title: '问答对导入', tag: 'QA', category: '知识库与文档', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-circle-question-mark' },
  { title: '拆分问答对', tag: 'Split', category: '知识库与文档', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-scissors' },
  { title: '文档问答', tag: 'Doc QA', category: '知识库与文档', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-file-question-mark' },
  { title: 'PDF解析工具', tag: 'PDF', category: '知识库与文档', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-file-text' },
  { title: '文件生成', tag: 'Generate', category: '知识库与文档', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-file-plus' },
  // 模型与数据能力
  { title: 'MCP', tag: 'MCP', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-blue-50 to-purple-50', iconClass: 'i-lucide-cpu' },
  { title: '模型管理', tag: 'Model', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-indigo-50 to-blue-50', iconClass: 'i-lucide-boxes' },
  { title: '大模型视觉识别', tag: 'Vision', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-eye' },
  { title: '网页解析', tag: 'Parse', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-globe' },
  { title: '图文解析', tag: 'Image Parse', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-scan' },
  { title: '网页速读', tag: 'Read', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-book-marked' },
  { title: '内容总结', tag: 'Summary', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-list' },
  { title: '图表生成', tag: 'Chart', category: '模型与数据能力', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-bar-chart-3' },
  // 营销与应用集成
  { title: '发布至微信公众号', tag: 'WeChat', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-send' },
  { title: '发布至朋友圈海报', tag: 'WeChat', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-layout-template' },
  { title: '发布至企业微信', tag: 'WeCom', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-building-2' },
  { title: '发布至影刀RPA', tag: 'RPA', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-bot' },
  { title: '思维导图', tag: 'Mind Map', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-git-fork' },
  { title: 'GEO排名', tag: 'GEO', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-map-pin' },
  { title: '优化工具', tag: 'Optimize', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-settings' },
  { title: 'AI PPT', tag: 'PPT', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-purple-50 to-pink-50', iconClass: 'i-lucide-presentation' },
  { title: '爆款文章生成', tag: 'Article', category: '营销与应用集成', bgClass: 'bg-linear-to-br from-pink-50 to-purple-50', iconClass: 'i-lucide-newspaper' },
  // 其他功能
  { title: '上传文件', tag: 'Upload', category: '其他功能', bgClass: 'bg-linear-to-br from-blue-50 to-purple-50', iconClass: 'i-lucide-cloud-upload' },
  { title: '手机号登录', tag: 'Login', category: '其他功能', bgClass: 'bg-linear-to-br from-indigo-50 to-blue-50', iconClass: 'i-lucide-smartphone' },
  { title: '图像识别', tag: 'Image', category: '其他功能', bgClass: 'bg-linear-to-br from-purple-50 to-blue-50', iconClass: 'i-lucide-scan-eye' },
  { title: '快递查询', tag: 'Express', category: '其他功能', bgClass: 'bg-linear-to-br from-blue-50 to-indigo-50', iconClass: 'i-lucide-package' },
  { title: '天气查询', tag: 'Weather', category: '其他功能', bgClass: 'bg-linear-to-br from-indigo-50 to-purple-50', iconClass: 'i-lucide-cloud-sun' }
]

/**
 * 根据当前 Tab 过滤功能列表
 * @returns {FeatureItem[]} 过滤后的列表
 */
const filteredFeatures = computed(() => {
  if (currentTab.value === '全部') {return allFeatures}
  return allFeatures.filter(f => f.category === currentTab.value)
})
</script>

<template>
  <!-- 2. 特征网格部分 -->
  <section class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- 部分标题 -->
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-[var(--brand-text)] mb-8 leading-tight">全能 AI 办公助手，<br class="md:hidden" />释放你的创作生产力</h2>

        <!-- 选项卡 -->
        <div class="inline-flex items-center p-1.5 bg-[#F5F6FA] rounded-full overflow-x-auto max-w-full touch-manipulation no-scrollbar">
          <button
            v-for="tab in tabs"
            :key="tab"
            :class="[
              'px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0',
              currentTab === tab
                ? 'bg-white text-[var(--brand-primary)] shadow-sm'
                : 'text-[var(--brand-muted)] hover:text-[var(--brand-text)]'
            ]"
            @click="currentTab = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- 网格布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, index) in filteredFeatures" :key="index" class="group relative bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#EAECF2] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[var(--brand-primary)]/30 active:scale-[0.99] transition-all duration-300 h-[260px] md:h-[280px] cursor-pointer touch-manipulation">
           <div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-[var(--brand-text)] shadow-sm border border-gray-100">
              {{ item.tag }}
           </div>
           <div class="h-full w-full flex flex-col">
              <!-- 卡片视觉内容 -->
              <div class="flex-1 relative overflow-hidden flex items-center justify-center p-6" :class="item.bgClass">
                 <UIcon :name="item.iconClass" class="w-12 h-12 text-[var(--brand-primary)] opacity-70" />
              </div>
              <!-- 卡片底部信息 -->
              <div class="h-16 bg-white border-t border-gray-100 px-5 flex items-center justify-between">
                 <span class="font-bold text-[var(--brand-text)]">{{ item.title }}</span>
                 <span class="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                 </span>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 隐藏滚动条 */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
/* 隐藏滚动条 */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
