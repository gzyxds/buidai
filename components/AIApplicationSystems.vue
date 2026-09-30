<template>
  <section class="bg-neutral-50">
    <div class="container mx-auto px-4 py-14 md:py-20">
      <!-- 标题区域 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-neutral-900 md:text-3xl">应用中心</h2>
        <p class="mt-3 text-neutral-500">租户已上架的能力与应用，含语音 TTS 等多 API 端点</p>
      </div>

      <!-- 应用卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="app in appList"
          :key="app.id"
          class="group bg-white rounded-xl border border-neutral-200 p-5 transition-all duration-200 hover:border-indigo-200 hover:shadow-sm"
        >
          <!-- 图标 + 名称 -->
          <div class="flex items-start gap-3 mb-3">
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold shrink-0"
              :style="{ background: iconGradient(app.icon) }"
            >
              {{ app.icon }}
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-semibold text-neutral-900 truncate">{{ app.name }}</h3>
              <p class="text-xs text-neutral-400 truncate mt-0.5 font-mono">{{ app.key }}</p>
            </div>
          </div>

          <!-- 描述 -->
          <p class="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4">
            {{ app.description }}
          </p>

          <!-- 底部对齐占位 -->
          <div class="mb-4" />

          <!-- 操作按钮 -->
          <div class="flex items-center gap-3 pt-3 border-t border-neutral-100">
            <NuxtLink to="/pricing" class="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">应用价格</NuxtLink>
            <span class="text-neutral-300">|</span>
            <NuxtLink to="/docs" class="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">查看文档</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface AppItem {
  id: string
  icon: string
  name: string
  key: string
  description: string
  apiCount?: number
}

const appList: AppItem[] = [
  { id: 'person_replacement', icon: '人', name: '人物替换', key: 'person_replacement', description: '人物替换，基于参考图片和输入视频生成替换后的视频结果。' },
  { id: 'action_transfer', icon: '动', name: '动作迁移', key: 'action_transfer', description: '动作迁移，基于参考图片和输入视频生成动作迁移后的视频结果。' },
  { id: 'happy_horse', icon: 'H', name: 'Happy Horse', key: 'happy_horse', description: 'Happy Horse（HappyHorse-1.0 系列）面向文生/图生高质量短视频，采用统一多模态建模，可一阶段生成声画、支持多语言对白与多镜头场景衔接。计费按目标分辨率与生成秒数对应的参数档位计点。本能力为内测邀请制，正式调用前需完成内测申请。', apiCount: 3 },
  { id: 'seedance2_pro', icon: 'S', name: 'Seedance 2.0 Pro', key: 'seedance2_pro', description: '高质量视频生成应用，支持文本提示、参考图片、参考音频、比例与时长控制，可选择 pro 或 fast 提交模式。' },
  { id: 'smart_clip', icon: '智', name: '智能剪辑', key: 'smart_clip', description: '智能剪辑应用，支持模板查询、真人口播混剪、素材混剪和新闻体视频制作。', apiCount: 5 },
  { id: 'image_human', icon: '全', name: '全驱动数字人', key: 'image_human', description: '全驱动数字人，基于图片和参考音频生成自然稳定的数字人视频。' },
  { id: 'wan', icon: 'W', name: 'Wan 视频生成', key: 'wan', description: 'Wan 模型族视频生成应用。版本通过 model 参数选择，支持文生视频、角色参考生视频与视频编辑。' },
  { id: 'seedance', icon: 'S', name: 'Seedance 2.0', key: 'seedance', description: '基于火山方舟 Seedance 2.0 的多模态视频生成应用。支持文本/图片/视频/音频任意组合输入，可输出 480p/720p/1080p 分辨率、4~15 秒时长的视频，并可选生成同步音频。按 token 计费，按分辨率和是否含视频输入分档。', apiCount: 7 },
  { id: 'lipsync', icon: '数', name: '数字人对口型', key: 'lipsync', description: '数字人对口型（Lipsync），任务由平台弹性部署调度。' },
  { id: 'dressing_diffusion', icon: 'A', name: 'AI换装', key: 'dressing_diffusion', description: '智能图片换装，上传模特图和服装图，AI 自动完成试穿效果生成。支持上衣、下装、全身换装。模型可在后台 extra_config 中切换。' },
  { id: 'mmaudio', icon: 'M', name: 'MMaudio', key: 'mmaudio', description: '视频配音 / MMaudio，任务由平台弹性部署调度。' },
  { id: 'flashvsr', icon: 'F', name: 'FlashVSR', key: 'flashvsr', description: '视频超分辨率（FlashVSR），任务由平台弹性部署调度。' },
  { id: 'seedsvc', icon: 'S', name: 'SeedSVC', key: 'seedsvc', description: '音色转换 / 翻唱（SeedSVC），任务由平台弹性部署调度。' },
  { id: 'indextts', icon: 'I', name: 'IndexTTS', key: 'indextts', description: '弹性 GPU 语音合成（IndexTTS），任务由平台弹性部署调度。' },
  { id: 'watermark_removal', icon: '水', name: '水印消除', key: 'watermark_removal', description: '支持抖音、快手、小红书等主流短视频平台，输入分享链接即可获取无水印视频地址。', apiCount: 8 },
  { id: 'voice_tts', icon: '语', name: '语音TTS', key: 'voice_tts', description: '语音克隆、文字转语音（同步/异步）、语音识别等多端点 AI 语音能力', apiCount: 6 },
]

const gradients = [
  'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'linear-gradient(135deg, #8b5cf6, #d946ef)',
  'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'linear-gradient(135deg, #10b981, #34d399)',
  'linear-gradient(135deg, #f59e0b, #f97316)',
  'linear-gradient(135deg, #ef4444, #f97316)',
  'linear-gradient(135deg, #6366f1, #3b82f6)',
  'linear-gradient(135deg, #8b5cf6, #a855f7)',
]

const iconGradient = (() => {
  const cache = new Map<string, string>()
  let idx = 0
  return (icon: string): string => {
    if (!cache.has(icon)) {
      cache.set(icon, gradients[idx % gradients.length]!)
      idx++
    }
    return cache.get(icon)!
  }
})()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
