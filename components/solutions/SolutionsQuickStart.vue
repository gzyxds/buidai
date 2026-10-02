<script setup lang="ts">
/**
 * 快速开始区块：左标题 + 右四卡
 */
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

/**
 * 快速开始卡片接口
 */
interface QuickStartCard {
  badge: string;
  desc: string;
}

/**
 * 快速开始卡片数据
 */
const quickStartCards: QuickStartCard[] = [
  { badge: '在校学生', desc: '“求学求职社交都能用，不靠模板不撞款”' },
  { badge: '教育从业者', desc: '“教学科研办公都能用 AI 从入门到精通”' },
  { badge: '市场运营&电商', desc: '“增长才是硬道理，分析不再是难题”' },
  { badge: '自媒体运营', desc: '“热点创作又快又多，智能排版一文多发”' }
]
</script>

<template>
  <!-- 3. 快速开始区域 -->
  <section class="py-12 md:py-20 bg-[#F7F8FC]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24">

        <!-- 左侧内容 -->
        <div class="lg:w-1/3 flex flex-col justify-start items-start text-left pt-0 md:pt-4">
          <h2 class="text-2xl md:text-4xl font-bold text-[var(--brand-text)] mb-4">快速入门</h2>
          <p class="text-base md:text-lg text-[var(--brand-muted)] mb-6 md:mb-8">AI 职场神队友，告别无效加班！</p>
          <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white font-medium hover:bg-[#5A43FF] active:scale-95 transition-all shadow-md">
            探索更多
            <ArrowRightIcon class="w-4 h-4" />
          </button>
        </div>

        <!-- 右侧网格 -->
        <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
           <div v-for="(card, i) in quickStartCards" :key="i" class="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-6 md:gap-8 group border border-transparent h-full min-h-[200px] md:min-h-[240px] touch-manipulation active:scale-[0.99]">
              <div class="inline-flex items-center justify-center border border-transparent py-0.5 font-medium w-fit whitespace-nowrap shrink-0 px-4 rounded-full bg-[#B5BFFF4D] text-[14px] md:text-[16px] text-[#333333]">
                 {{ card.badge }}
              </div>
              <p class="text-base md:text-lg font-medium text-[var(--brand-text)] leading-relaxed flex-1">
                 {{ card.desc }}
              </p>
              <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[var(--brand-primary)] group-hover:border-[var(--brand-primary)] group-hover:text-white transition-all">
                 <ArrowRightIcon class="w-5 h-5 md:w-6 md:h-6" />
              </button>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>
