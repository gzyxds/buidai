<template>
  <section class="overflow-hidden bg-white">
    <div class="grid-border-container">
      <!-- 标题区域 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />
        <div class="grid-border-content px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
          <div class="mb-4 sm:mb-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                全场景 AI 解决方案
              </span>
            </div>
            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-900">
              赋能企业数智化<span class="text-indigo-600">转型升级</span>
            </h2>
            <p class="mt-2 text-xs sm:text-sm text-neutral-500 max-w-2xl">
              超级智能体平台，为创作者与企业提供一站式 AI 能力支持
            </p>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 主体：左侧导航 + 右侧内容 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />
        <div class="grid-border-content px-0">
          <div class="ai-main">
            <aside class="ai-tabs" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
              <div class="ai-tabs-list">
                <button
                  v-for="(t, idx) in tabs"
                  :id="`industry-tab-${idx}`"
                  :key="t.name"
                  type="button"
                  role="tab"
                  :aria-selected="active === idx"
                  :class="['ai-tab', active === idx ? 'ai-tab--active' : 'ai-tab--inactive']"
                  tabindex="0"
                  @click="setActive(idx)"
                  @keydown="handleKeydown($event, idx)"
                >
                  <div :class="['ai-tab-indicator', active === idx ? 'ai-tab-indicator--active' : 'ai-tab-indicator--inactive']" />
                  <UIcon :name="t.icon" :class="['ai-tab-icon', active === idx ? 'ai-tab-icon--active' : 'ai-tab-icon--inactive']" />
                  <span :class="['ai-tab-label', active === idx ? 'ai-tab-label--active' : 'ai-tab-label--inactive']">{{ t.name }}</span>
                  <UIcon name="i-heroicons-chevron-right" :class="['ai-tab-arrow', active === idx ? 'ai-tab-arrow--active' : 'ai-tab-arrow--inactive']" />
                  <div v-if="active === idx && isAutoplay" class="ai-tab-progress"><div class="ai-tab-progress-bar" /></div>
                </button>
              </div>
              <div class="ai-tabs-footer">
                <div class="ai-tabs-footer-top">
                  <div class="ai-tabs-footer-icon">
                    <UIcon name="i-heroicons-sparkles" class="w-3.5 h-3.5 text-indigo-500" />
                  </div>
                  <p class="text-xs font-semibold text-neutral-800">探索 AI 能力</p>
                </div>
                <p class="text-[11px] leading-5 text-neutral-500 pl-3 mt-1">点击上方分类查看详细功能，或联系顾问获取定制化方案</p>
              </div>
            </aside>

            <section class="ai-panel">
              <div class="ai-panel-header">
                <div class="inline-flex items-center gap-2 mb-2 sm:mb-3">
                  <UIcon :name="currentTab?.icon" class="w-4 h-4 text-indigo-500" />
                  <span class="text-xs font-semibold tracking-wide text-indigo-600 uppercase">{{ currentTab?.name }}</span>
                </div>
                <h3 class="ai-panel-title">{{ currentTab?.title }}</h3>
              </div>

              <div class="ai-features">
                <div v-for="(f, i) in currentTab?.features" :key="i" class="ai-card">
                  <div class="ai-card-header">
                    <div class="ai-card-icon">
                      <UIcon :name="f.icon" class="ai-card-icon-svg" />
                    </div>
                    <h4 class="ai-card-title">{{ f.title }}</h4>
                  </div>
                  <p class="ai-card-desc">{{ f.desc }}</p>
                </div>
              </div>

              <div class="ai-actions">
                <button class="ai-btn ai-btn--primary" @click="openQrModal('solution')">
                  了解方案详情
                  <UIcon name="i-heroicons-arrow-right" class="ai-btn-icon" />
                </button>
                <button class="ai-btn ai-btn--secondary" @click="openQrModal('consult')">
                  联系售前咨询
                  <UIcon name="i-heroicons-chat-bubble-left-right" class="ai-btn-icon" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div class="grid-border-divider" />

      <!-- 底部 -->
      <div class="grid-border-wrapper">
        <div class="grid-border-side grid-border-side-left" />
        <div class="grid-border-side grid-border-side-right" />
        <div class="grid-border-content px-3 sm:px-4 lg:px-6 xl:px-8">
          <div class="ai-footer">
            <div class="ai-footer-main">
              <div class="ai-footer-info">
                <div class="flex items-center gap-2 mb-2">
                  <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
                  <h4 class="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">智言AI 平台</h4>
                </div>
                <p class="ai-footer-desc">整合行业领先的 AI 大模型能力，提供从视觉创作、智能对话到知识管理的全栈解决方案。</p>
              </div>
              <div class="ai-footer-tags">
                <span class="ai-tag">视觉创作</span>
                <span class="ai-tag ai-tag--hl">智能对话</span>
                <span class="ai-tag">知识管理</span>
                <span class="ai-tag">企业定制</span>
              </div>
            </div>
            <div class="ai-footer-bottom">
              <p class="text-[11px] text-neutral-400">已为 500+ 企业提供 AI 转型服务</p>
              <button class="ai-footer-link" @click="openQrModal('consult')">
                联系商务咨询
                <UIcon name="i-heroicons-arrow-right" class="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-border-row" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { dispatchQrModal } from '~/utils/qrModal'
import { ref, computed } from 'vue'
const AUTOPLAY_INTERVAL = 5000
const RESUME_DELAY = 5000

interface IndustryFeature { icon: string; title: string; desc: string }
interface IndustryTab { name: string; title: string; icon: string; features: IndustryFeature[] }

const tabs: IndustryTab[] = [
  {
    name: 'AI 视觉创作', title: 'AI 视觉与创意生成解决方案', icon: 'i-heroicons-photo',
    features: [
      { icon: 'i-heroicons-video-camera', title: 'Sora视频生成', desc: '基于开源Sora技术，一键生成电影级AI视频，支持文生视频与图生视频' },
      { icon: 'i-heroicons-photo', title: '香蕉绘画', desc: '基于Gemini 3 Pro模型，支持文生图、图生图与多图融合，预置模板开箱即用' },
      { icon: 'i-heroicons-sparkles', title: '即梦AI视频', desc: '输入文字或上传参考图，快速生成风格多样的短视频，支持720P/1080P' },
      { icon: 'i-heroicons-photo', title: '即梦AI绘画', desc: '简单提示词快速生成高质量图像，支持1K/2K分辨率，写实卡通插画皆可' },
      { icon: 'i-heroicons-user', title: 'AI数字人', desc: '4K超清画质、5秒声音克隆、多语种合成，打造专属数字分身' },
      { icon: 'i-heroicons-shopping-bag', title: '电商试衣换装', desc: '商品一键适配模特上身，背景智能替换，提升商品主图转化率' },
      { icon: 'i-heroicons-film', title: '视频混剪助手', desc: '自动化批量剪辑、智能转场、滤镜调色，一键生成专业级混剪视频' }
    ]
  },
  {
    name: '智能对话 Agent', title: '智能体与对话交互系统', icon: 'i-heroicons-chat-bubble-left-right',
    features: [
      { icon: 'i-heroicons-cpu-chip', title: '智能体', desc: '自定义专属AI智能体，满足个性化需求' },
      { icon: 'i-heroicons-chat-bubble-left-right', title: 'AI对话', desc: '基于大语言模型的流畅自然交互体验' },
      { icon: 'i-heroicons-code-bracket', title: '对话html预览', desc: '实时预览对话中生成的HTML代码效果' },
      { icon: 'i-heroicons-cloud-arrow-up', title: '对话上传文件', desc: '支持在对话中直接上传并解析文件内容' },
      { icon: 'i-heroicons-command-line', title: '智能体DSL', desc: '通过DSL灵活编排智能体工作流' },
      { icon: 'i-heroicons-sparkles', title: '对话文案AI补全', desc: '智能预测并补全用户输入内容' },
      { icon: 'i-heroicons-microphone', title: '语音播报', desc: '将对话回复自动转换为语音播报' },
      { icon: 'i-heroicons-share', title: '分享对话', desc: '一键生成链接，便捷分享精彩对话' }
    ]
  },
  {
    name: '内容创作工具', title: '智能内容创作与生产工具', icon: 'i-heroicons-document-text',
    features: [
      { icon: 'i-heroicons-document-text', title: 'AI简历', desc: '智能问答快速生成简历，提供数十款专业模板，支持AI分析与优化' },
      { icon: 'i-heroicons-pencil-square', title: 'AI短剧小说', desc: '无限量剧本创作、角色设定、章节可视化拖拽、AI扩写润色续写' },
      { icon: 'i-heroicons-book-open', title: '小红书助手', desc: '一键生成爆款标题与风格化文案，AI生成配图与视频封面' },
      { icon: 'i-heroicons-presentation-chart-line', title: 'AI PPT', desc: '输入主题自动生成结构清晰、设计美观的PPT，内置多种模板与图表' },
      { icon: 'i-heroicons-musical-note', title: 'AI音乐', desc: '文本/歌词/哼唱/乐谱输入，快速生成完整歌曲、伴奏、人声或纯音乐' }
    ]
  },
  {
    name: '模型与数据能力', title: '多模型管理与数据解析', icon: 'i-heroicons-cpu-chip',
    features: [
      { icon: 'i-heroicons-cpu-chip', title: 'MCP', desc: '支持模型上下文协议，增强模型能力' },
      { icon: 'i-heroicons-cpu-chip', title: '模型管理', desc: '统一管理与调度各类大语言模型' },
      { icon: 'i-heroicons-photo', title: '大模型视觉识别', desc: '赋予模型强大的图像理解与分析能力' },
      { icon: 'i-heroicons-globe-alt', title: '网页解析', desc: '智能提取网页正文与关键信息' },
      { icon: 'i-heroicons-photo', title: '图文解析', desc: '多模态内容深度理解与结构化提取' },
      { icon: 'i-heroicons-document-text', title: '内容总结', desc: '快速提炼长文核心观点与摘要' },
      { icon: 'i-heroicons-chart-bar', title: '图表生成', desc: '根据数据自动生成可视化图表' }
    ]
  },
  {
    name: '知识库与文档', title: '企业级知识库与文档处理', icon: 'i-heroicons-document-text',
    features: [
      { icon: 'i-heroicons-document-text', title: '知识库', desc: '构建企业私有知识库，数据安全可控' },
      { icon: 'i-heroicons-cloud-arrow-up', title: '文件导入导出', desc: '支持多种格式文档的批量导入与导出' },
      { icon: 'i-heroicons-arrow-path', title: '问答对导入', desc: '快速导入QA问答对，优化模型回复' },
      { icon: 'i-heroicons-chart-bar', title: '拆分问答对', desc: '智能拆分长文档为独立的问答对片段' },
      { icon: 'i-heroicons-document-text', title: '文档问答', desc: '基于文档内容的精准问答与检索' },
      { icon: 'i-heroicons-document-text', title: 'PDF解析工具', desc: '高效提取PDF文档中的文本与表格' },
      { icon: 'i-heroicons-document-text', title: '文件生成', desc: '自动生成报告、合同等标准化文档' }
    ]
  }
]
const active = ref(0)
const isAutoplay = ref(true)

const currentTab = computed(() => tabs[active.value] || tabs[0])

const { pause: pauseAutoplay, resume: resumeAutoplay } = useAutoPlay(
  () => { active.value = (active.value + 1) % tabs.length },
  { interval: AUTOPLAY_INTERVAL, resumeDelay: RESUME_DELAY, onActiveChange: (value) => { isAutoplay.value = value } }
)

const setActive = (index: number) => { active.value = index; resumeAutoplay() }

const { handleKeydown } = useListKeyboardNav(() => tabs.length, setActive, { focusIdPrefix: 'industry-tab-' })

const openQrModal = (type: 'solution' | 'consult') => {
  const config = type === 'solution'
    ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
    : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }
  dispatchQrModal(config)
}

</script>

<style scoped>
/* ============================================
   CSS 自定义属性（组件内部颜色值）
   ============================================ */
.ai-main,
.ai-main * {
  --ai-primary: rgb(99 102 241);
  --ai-primary-dark: rgb(79 70 229);
  --ai-primary-light: rgb(129 140 248);
  --ai-primary-bg: rgb(238 242 255);
  --ai-primary-border: rgb(224 231 255);
  --ai-neutral-50: rgb(250 250 250);
  --ai-neutral-100: rgb(245 245 245);
  --ai-neutral-200: rgb(229 229 229);
  --ai-neutral-300: rgb(212 212 212);
  --ai-neutral-400: rgb(163 163 163);
  --ai-neutral-500: rgb(115 115 115);
  --ai-neutral-600: rgb(82 82 82);
  --ai-neutral-700: rgb(64 64 64);
  --ai-neutral-800: rgb(38 38 38);
  --ai-neutral-900: rgb(23 23 23);
  --ai-border: rgba(229, 229, 229, 0.7);
  --ai-border-light: rgb(245 245 245);
}

/* ============================================
   网格边框系统已提取到 assets/css/grid-border.css
   ============================================ */

/* ============================================
   主布局：侧边栏 + 内容面板
   ============================================ */
.ai-main { display: grid; grid-template-columns: 1fr; grid-template-rows: auto 1fr; width: 100%; min-width: 0; overflow: hidden; background-color: transparent; }

@media (min-width: 1024px) { .ai-main { grid-template-columns: 260px 1fr; grid-template-rows: 1fr; } }
@media (min-width: 1280px) { .ai-main { grid-template-columns: 280px 1fr; } }

/* ============================================
   侧边栏 Tabs
   ============================================ */
.ai-tabs { position: relative; width: 100%; overflow: hidden; background-color: white; display: flex; flex-direction: column; }
@media (min-width: 1024px) { .ai-tabs { border-right: 1px solid var(--ai-border); justify-content: flex-start; min-height: 100%; } }

.ai-tabs-list { display: flex; flex-direction: row; gap: 0; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; flex: 1; }
.ai-tabs-list::-webkit-scrollbar { display: none; }
@media (min-width: 1024px) { .ai-tabs-list { flex-direction: column; overflow-x: hidden; overflow-y: auto; padding: 0; justify-content: flex-start; flex: 1; max-height: none; } }

/* Tab 按钮 */
.ai-tab {
  position: relative; display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; min-width: fit-content;
  padding: 0.75rem 1rem; text-align: left; cursor: pointer; transition: all 0.2s ease-out;
  background: transparent; border: none; outline: none; min-height: 44px;
}
.ai-tab:focus-visible { box-shadow: inset 0 0 0 2px var(--ai-primary); }
@media (min-width: 1024px) { .ai-tab { width: 100%; padding: 1rem 1rem 1rem 0; border-radius: 0; min-height: 56px; } }

.ai-tab--active { background-color: var(--ai-neutral-50); border-bottom: 2px solid var(--ai-primary); }
.ai-tab--inactive { border-bottom: 2px solid transparent; }
@media (min-width: 1024px) {
  .ai-tab--active { background-color: var(--ai-neutral-50); border: none; box-shadow: none; }
  .ai-tab--inactive { border: none; }
  .ai-tab--inactive:hover { background-color: rgb(250 250 250 / 0.5); }
}

.ai-tab-indicator { position: absolute; left: 0; top: 1rem; bottom: 1rem; width: 4px; border-radius: 0 9999px 9999px 0; transition: all 0.2s; }
.ai-tab-indicator--active { background-color: var(--ai-primary); }
.ai-tab-indicator--inactive { background-color: transparent; }
@media (max-width: 1023px) { .ai-tab-indicator { display: none; } }

.ai-tab-icon { width: 1.25rem; height: 1.25rem; flex-shrink: 0; transition: color 0.2s; margin-left: 0.75rem; }
.ai-tab-icon--active { color: var(--ai-primary-dark); }
.ai-tab-icon--inactive { color: var(--ai-neutral-400); }
@media (max-width: 1023px) { .ai-tab-icon--inactive { color: var(--ai-neutral-500); } }

.ai-tab-label { font-size: 0.875rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; }
.ai-tab-label--active { color: var(--ai-primary); }
.ai-tab-label--inactive { color: var(--ai-neutral-800); }

.ai-tab-arrow { width: 1rem; height: 1rem; flex-shrink: 0; transition: all 0.2s; }
.ai-tab-arrow--active { opacity: 1; transform: translateX(0); color: var(--ai-primary-light); }
.ai-tab-arrow--inactive { opacity: 0; transform: translateX(-0.25rem); color: var(--ai-neutral-300); }
@media (max-width: 1023px) { .ai-tab-arrow { display: none; } }

/* 进度条 */
.ai-tab-progress { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background-color: var(--ai-neutral-100); }
@media (min-width: 1024px) { .ai-tab-progress { left: 0.5rem; right: 0.5rem; border-radius: 1px; } }
.ai-tab-progress-bar { height: 100%; background-color: var(--ai-primary-light); animation: ai-progress 5s linear; }
@keyframes ai-progress { from { width: 0%; } to { width: 100%; } }

/* Tabs 底部 */
.ai-tabs-footer { padding: 1rem 0; border-top: 1px solid rgba(229, 229, 229, 0.6); background-color: var(--ai-neutral-50); flex-shrink: 0; }
@media (max-width: 1023px) { .ai-tabs-footer { display: none; } }
.ai-tabs-footer-top { display: flex; align-items: center; gap: 0.75rem; padding-left: 0.75rem; margin-bottom: 0.25rem; }
.ai-tabs-footer-icon { width: 1.5rem; height: 1.5rem; border-radius: 0.25rem; background-color: var(--ai-primary-bg); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

/* ============================================
   内容面板
   ============================================ */
.ai-panel { position: relative; display: flex; flex-direction: column; background-color: white; padding: 0.5rem; min-width: 0; overflow: hidden; width: 100%; }
@media (min-width: 640px) { .ai-panel { padding: 1.25rem; } }
@media (min-width: 1024px) { .ai-panel { padding: 1.5rem; } }
@media (min-width: 1280px) { .ai-panel { padding: 2rem; } }

.ai-panel-header { margin-bottom: 1rem; }
@media (min-width: 640px) { .ai-panel-header { margin-bottom: 1.25rem; } }
@media (min-width: 1024px) { .ai-panel-header { margin-bottom: 1.5rem; } }

.ai-panel-title { font-size: 1rem; font-weight: 700; color: var(--ai-neutral-900); letter-spacing: -0.025em; line-height: 1.4; }
@media (min-width: 640px) { .ai-panel-title { font-size: 1.125rem; } }
@media (min-width: 1024px) { .ai-panel-title { font-size: 1.25rem; } }

/* 功能卡片网格 */
.ai-features { flex: 1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1rem; min-width: 0; width: 100%; }
@media (min-width: 640px) { .ai-features { gap: 0.75rem; } }
@media (min-width: 1024px) { .ai-features { gap: 0.625rem; margin-bottom: 1.25rem; } }
@media (min-width: 1280px) { .ai-features { gap: 0.75rem; margin-bottom: 1.5rem; } }

.ai-card {
  display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; border-radius: 0.5rem;
  border: 1px solid rgba(229, 229, 229, 0.8); background-color: white; transition: all 0.2s ease-out; min-width: 0; width: 100%;
}
@media (min-width: 640px) { .ai-card { padding: 1.25rem; } }
@media (min-width: 1024px) { .ai-card { padding: 1.25rem; } }
.ai-card:hover { border-color: rgb(199 210 254); box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); background-color: rgb(238 242 255 / 0.2); }

.ai-card-header { display: flex; align-items: center; gap: 0.625rem; min-width: 0; }
.ai-card-icon { display: flex; align-items: center; justify-content: center; width: 1.75rem; height: 1.75rem; border-radius: 0.375rem; background-color: var(--ai-primary-bg); border: 1px solid var(--ai-primary-border); flex-shrink: 0; }
@media (min-width: 640px) { .ai-card-icon { width: 2rem; height: 2rem; } }
.ai-card-icon-svg { width: 0.875rem; height: 0.875rem; color: var(--ai-primary-dark); }
@media (min-width: 640px) { .ai-card-icon-svg { width: 1rem; height: 1rem; } }

.ai-card-title { font-size: 0.875rem; font-weight: 700; color: var(--ai-neutral-900); overflow: hidden; text-overflow: ellipsis; flex: 1; line-height: 1.3; white-space: nowrap; }
@media (min-width: 640px) { .ai-card-title { font-size: 1rem; } }

.ai-card-desc { font-size: 0.75rem; line-height: 1.5; color: var(--ai-neutral-600); display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
@media (min-width: 640px) { .ai-card-desc { font-size: 0.8125rem; } }

/* 操作按钮 */
.ai-actions { margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--ai-border); display: flex; flex-wrap: wrap; gap: 0.625rem; }
@media (min-width: 640px) { .ai-actions { padding-top: 1.25rem; gap: 0.75rem; } }

.ai-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1rem; font-size: 0.8125rem; font-weight: 600; border-radius: 0.5rem; transition: all 0.2s; cursor: pointer; border: none; outline: none; min-height: 40px; flex: 1; min-width: 120px; }
.ai-btn:focus-visible { box-shadow: 0 0 0 2px white, 0 0 0 4px var(--ai-primary); }
@media (min-width: 640px) { .ai-btn { padding: 0.625rem 1.25rem; font-size: 0.875rem; min-height: 44px; flex: 0 0 auto; } }
.ai-btn-icon { width: 1rem; height: 1rem; margin-left: 0.375rem; }
@media (min-width: 640px) { .ai-btn-icon { margin-left: 0.5rem; } }

.ai-btn--primary { color: white; background-color: var(--ai-primary); box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
.ai-btn--primary:hover { background-color: var(--ai-primary-dark); }
.ai-btn--secondary { color: var(--ai-neutral-700); background-color: white; border: 1px solid var(--ai-neutral-200); }
.ai-btn--secondary:hover { background-color: var(--ai-neutral-50); border-color: var(--ai-neutral-300); }

/* ============================================
   底部区域
   ============================================ */
.ai-footer { display: flex; flex-direction: column; align-items: center; padding: 1.25rem 0; }
@media (min-width: 640px) { .ai-footer { padding: 1.5rem 0; } }
@media (min-width: 1024px) { .ai-footer { padding: 2rem 0; } }

.ai-footer-main { display: flex; flex-direction: column; gap: 1.25rem; width: 100%; max-width: 56rem; }
@media (min-width: 1024px) { .ai-footer-main { flex-direction: row; align-items: center; justify-content: space-between; gap: 2rem; } }

.ai-footer-info { flex: 1; min-width: 0; }
.ai-footer-desc { font-size: 0.75rem; line-height: 1.6; color: var(--ai-neutral-600); }
@media (min-width: 640px) { .ai-footer-desc { font-size: 0.8125rem; line-height: 1.625; } }

.ai-footer-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; flex-shrink: 0; }
@media (min-width: 1024px) { .ai-footer-tags { max-width: 220px; justify-content: flex-end; } }

.ai-tag { padding: 0.375rem 0.875rem; border-radius: 9999px; background-color: var(--ai-neutral-100); color: var(--ai-neutral-700); font-size: 0.75rem; font-weight: 500; white-space: nowrap; }
.ai-tag--hl { background-color: var(--ai-primary-bg); color: rgb(67 56 202); }

.ai-footer-bottom {
  margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--ai-border-light);
  display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem; width: 100%; max-width: 56rem;
}
@media (min-width: 640px) { .ai-footer-bottom { margin-top: 1.5rem; flex-direction: row; align-items: center; justify-content: space-between; } }

.ai-footer-link { display: inline-flex; align-items: center; gap: 0.375rem; font-size: 0.75rem; font-weight: 500; color: var(--ai-neutral-700); cursor: pointer; transition: color 0.2s; padding: 0; min-height: 32px; border: none; background: none; }
.ai-footer-link:hover { color: var(--ai-neutral-900); }
</style>
