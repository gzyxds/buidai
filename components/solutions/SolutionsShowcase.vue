<script setup lang="ts">
/**
 * 场景展示区块：3 行 6 卡的 bento 网格（PPT/设计/写作/Excel/编程/播客）
 */
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

/**
 * 解决方案卡片接口
 */
interface SolutionCard {
  /** 标题（支持 HTML） */
  title: string;
  /** 按钮行动文本 */
  actionText: string;
  /** 宽度类名（响应式） */
  widthClass: string;
  /** 背景样式类名 */
  bgClass: string;
  /** 文本颜色类名（默认为 text-gray-900） */
  textClass?: string;
  /** 视觉类型标识，用于模板中渲染特定图形 */
  visual: 'ppt' | 'design' | 'writing' | 'excel' | 'code' | 'podcast';
}

/**
 * 解决方案行接口
 */
interface SolutionRow {
  /** 该行包含的卡片列表 */
  cards: SolutionCard[];
}

/**
 * 解决方案网格数据
 * 包含 3 行，每行 2 个卡片，用于渲染核心业务场景入口
 */
const solutionRows: SolutionRow[] = [
  {
    cards: [
      {
        title: '十分钟，\n做拿得出手的PPT',
        actionText: '使用 AI PPT',
        widthClass: 'md:w-[59%]',
        bgClass: 'bg-linear-to-br from-[var(--brand-primary)] to-[#8B7FFF]',
        textClass: 'text-white',
        visual: 'ppt'
      },
      {
        title: '无需技巧，\n生成百变设计',
        actionText: '使用 AI 设计',
        widthClass: 'md:flex-1',
        bgClass: 'bg-[#F3F4F6]',
        textClass: 'text-gray-900',
        visual: 'design'
      }
    ]
  },
  {
    cards: [
      {
        title: '一气呵成，\n写出带排版的长文',
        actionText: '使用 深度写作',
        widthClass: 'md:w-[39%]',
        bgClass: 'bg-[#E5E7EB]',
        textClass: 'text-gray-900',
        visual: 'writing'
      },
      {
        title: '告别公式，\n智能数据分析处理',
        actionText: '使用 AI EXCEL',
        widthClass: 'md:flex-1',
        bgClass: 'bg-linear-to-r from-[#E0E7FF] to-[#Dbeafe]',
        textClass: 'text-[var(--brand-primary)]',
        visual: 'excel'
      }
    ]
  },
  {
    cards: [
      {
        title: '代码自动生成，\n效率提升10倍+',
        actionText: '使用 AI 编程',
        widthClass: 'md:w-[59%]',
        bgClass: 'bg-gray-900',
        textClass: 'text-white',
        visual: 'code'
      },
      {
        title: '超拟人，\n用听觉解读万物',
        actionText: '使用 AI 播客',
        widthClass: 'md:flex-1',
        bgClass: 'bg-[#F3F4F6]',
        textClass: 'text-gray-900',
        visual: 'podcast'
      }
    ]
  }
]
</script>

<template>
  <!-- 新增卡片网格区域 -->
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col gap-4">
        <div v-for="(row, rowIndex) in solutionRows" :key="rowIndex" class="flex flex-col md:flex-row gap-4 w-full">
          <div
            v-for="(card, cardIndex) in row.cards"
            :key="cardIndex"
            class="group relative w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 will-change-transform"
            :class="[card.widthClass, card.bgClass]"
          >
             <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10" :class="card.textClass || 'text-gray-900'">
                <div>
                   <h3 class="text-xl md:text-2xl font-medium mb-2 whitespace-pre-line">{{ card.title }}</h3>
                </div>

                <!-- 视觉占位符区域 -->

                <!-- PPT Visual -->
                <div v-if="card.visual === 'ppt'" class="absolute right-4 bottom-4 md:right-10 md:bottom-8 transform rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 will-change-transform">
                    <div class="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg w-32 md:w-48 border border-white/50">
                        <div class="text-[var(--brand-primary)] font-serif italic text-2xl md:text-3xl text-center">Portfolio</div>
                    </div>
                </div>

                <!-- Design Visual -->
                <div v-if="card.visual === 'design'" class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-0 right-0 w-full h-full" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px; opacity: 0.5;"/>
                    <div class="absolute right-8 bottom-16 w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 will-change-transform">
                       <div class="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center text-[10px] text-purple-600">00</div>
                    </div>
                    <div class="absolute right-20 bottom-24 w-24 h-24 rounded-full border border-gray-400/30"/>
                </div>

                <!-- Writing Visual -->
                <div v-if="card.visual === 'writing'" class="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white rounded-tl-xl p-4 shadow-sm opacity-80 transition-transform duration-500 group-hover:translate-y-2 will-change-transform">
                    <div class="text-[10px] text-gray-400 mb-2">TIME.9.26 - 10.28</div>
                    <div class="space-y-1.5">
                        <div class="h-2 w-full bg-gray-200 rounded"/>
                        <div class="h-2 w-3/4 bg-gray-200 rounded"/>
                    </div>
                    <div class="mt-6 font-mono text-xl text-gray-800 leading-none">COZE<br/>EVENTS<br/>2025...</div>
                </div>

                <!-- Excel Visual -->
                <div v-if="card.visual === 'excel'" class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg class="w-full h-full opacity-50" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <path d="M0,80 Q50,90 100,50 T200,20" fill="none" stroke="var(--brand-primary)" stroke-width="1.5" stroke-dasharray="4 4" />
                        <path d="M0,80 Q50,90 100,50 T200,20" fill="none" stroke="var(--brand-primary)" stroke-width="1.5" class="opacity-30 translate-y-2" />
                    </svg>
                    <div class="absolute right-10 top-1/2 text-7xl font-serif italic text-[var(--brand-primary)]/20 transition-transform duration-500 group-hover:scale-110 will-change-transform">fx</div>
                    <div class="absolute left-0 right-0 top-1/2 h-px bg-[var(--brand-primary)]/20 border-t border-dashed border-[var(--brand-primary)]"/>
                    <div class="absolute top-0 bottom-0 left-2/3 w-px bg-[var(--brand-primary)]/20 border-l border-dashed border-[var(--brand-primary)]"/>
                    <div class="absolute left-2/3 top-1/2 w-3 h-3 border-2 border-[var(--brand-primary)] bg-white rounded-full -translate-x-1.5 -translate-y-1.5 z-10"/>
                </div>

                <!-- Code Visual (Minimalist) -->
                <div v-if="card.visual === 'code'" class="absolute inset-0 pointer-events-none overflow-hidden">
                    <div class="absolute right-6 bottom-6 md:right-10 md:bottom-10 opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:-translate-y-2 will-change-transform">
                        <!-- Minimalist Code Abstract Structure -->
                        <div class="flex flex-col items-end gap-3">
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-purple-400"/>
                                <div class="w-16 h-2 bg-white/90 rounded-full"/>
                                <div class="w-8 h-2 bg-white/40 rounded-full"/>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-12 h-2 bg-white/40 rounded-full"/>
                                <div class="w-20 h-2 bg-white/90 rounded-full"/>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-24 h-2 bg-white/90 rounded-full"/>
                            </div>
                             <div class="flex items-center gap-2 mt-1">
                                <div class="w-10 h-2 bg-white/20 rounded-full"/>
                                <div class="w-2 h-4 bg-purple-400 animate-pulse"/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Podcast Visual -->
                <div v-if="card.visual === 'podcast'">
                  <div class="absolute right-[-10%] bottom-[-10%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-40">
                       <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" class="text-gray-400 w-full h-full">
                           <circle cx="100" cy="100" r="80" stroke-width="1.5" />
                           <ellipse cx="100" cy="100" rx="80" ry="20" stroke-width="1.5" />
                           <ellipse cx="100" cy="100" rx="80" ry="40" stroke-width="1.5" />
                           <ellipse cx="100" cy="100" rx="80" ry="60" stroke-width="1.5" />
                           <line x1="100" y1="20" x2="100" y2="180" stroke-width="1.5" />
                           <line x1="40" y1="40" x2="160" y2="160" stroke-width="1.5" opacity="0.5" />
                           <line x1="160" y1="40" x2="40" y2="160" stroke-width="1.5" opacity="0.5" />
                       </svg>
                  </div>
                  <div class="absolute left-6 md:left-8 bottom-20 flex gap-2">
                      <div class="w-4 h-4 rounded-full bg-[var(--brand-primary)]"/>
                      <div class="w-4 h-4 rounded-full bg-[#D946EF]"/>
                      <div class="w-4 h-4 rounded-full bg-white border border-gray-200"/>
                  </div>
                </div>

                <button class="w-fit bg-white text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 shadow-sm group-hover:bg-gray-50 transition-colors z-10">
                   {{ card.actionText }} <ArrowRightIcon class="w-3 h-3 md:w-4 md:h-4" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-serif {
  font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
}
</style>
