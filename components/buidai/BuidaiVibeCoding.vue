<script setup lang="ts">
/**
 * 氛围编程区块：Vibe Coding 工具网格
 */
/** Vibe Coding 工具列表 */
interface VibeTool { name: string; icon: string; bg: string; color: string }

const vibeTools: VibeTool[] = [
  { name: 'Trae', icon: 'i-heroicons-sparkles', bg: 'bg-emerald-100', color: 'text-emerald-600' },
  { name: 'Claude Code', icon: 'i-lucide-sun', bg: 'bg-orange-100', color: 'text-orange-600' },
  { name: 'Codex', icon: 'i-lucide-code-xml', bg: 'bg-violet-100', color: 'text-violet-600' },
  { name: 'Cursor', icon: 'i-lucide-square', bg: 'bg-neutral-900', color: 'text-white' },
  { name: 'Windsurf', icon: 'i-lucide-waves', bg: 'bg-blue-100', color: 'text-blue-600' },
  { name: 'GitHub Copilot', icon: 'i-lucide-cloud', bg: 'bg-gray-100', color: 'text-gray-800' },
  { name: '通义灵码', icon: 'i-lucide-cloud', bg: 'bg-cyan-100', color: 'text-cyan-600' },
  { name: '文心快码', icon: 'i-lucide-zap', bg: 'bg-indigo-100', color: 'text-indigo-600' },
  { name: '智谱CodeGeeX', icon: 'i-lucide-brain', bg: 'bg-rose-100', color: 'text-rose-600' },
  { name: 'CodeWhisperer', icon: 'i-lucide-cloud-lightning', bg: 'bg-amber-100', color: 'text-amber-600' },
  { name: 'JetBrains AI', icon: 'i-lucide-boxes', bg: 'bg-purple-100', color: 'text-purple-600' },
  { name: 'Tabnine', icon: 'i-lucide-binary', bg: 'bg-teal-100', color: 'text-teal-600' },
]
</script>

<template>
  <!-- 氛围编程（Vibe Coding） -->
  <section class="py-16 md:py-24 bg-[#f7f7f7]">
    <div class="container mx-auto px-4">
      <SectionHeading eyebrow="Vibe Coding" title-size="sm" description="最佳调优的内置提示词结合AI辅助编程，快速完成AI应用开发，一键部署到常用云平台。">
        智言AI完美支持氛围编程（Vibe Coding）的开发方式
      </SectionHeading>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div v-for="tool in vibeTools" :key="tool.name" class="flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-neutral-200 hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="tool.bg">
            <UIcon :name="tool.icon" class="w-5 h-5" :class="tool.color" />
          </div>
          <span class="text-sm font-semibold text-neutral-800">{{ tool.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
