<script setup lang="ts">
/**
 * 卖点区块：0 门槛一站式（AI 写作 + 智能图像两特性）
 */
</script>

<template>
  <!-- 4. 零门槛/一站式区域 -->
  <section class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10 md:mb-16">
         <h2 class="text-2xl md:text-3xl font-bold text-[var(--brand-text)]">0门槛，一站式 AI 办公空间</h2>
      </div>

      <div class="space-y-12 md:space-y-24">
         <!-- 特性 1：左文右图 -->
         <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div class="lg:w-1/2 space-y-6 order-2 lg:order-1">
               <div class="inline-flex items-center gap-2 text-[var(--brand-primary)] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                  <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
                  AI 辅助写作
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-[var(--brand-text)] leading-tight">和子文档 — <br class="hidden md:block"/>让创作如虎添翼</h3>
               <p class="text-base md:text-lg text-[var(--brand-muted)] leading-relaxed">
                  内置强大的 AI 写作助手，支持文章续写、润色、翻译及摘要生成。无论是工作报告还是创意文案，都能一键搞定。
               </p>
               <div class="flex gap-4 pt-2 md:pt-4">
                  <button class="px-6 py-2.5 bg-[var(--brand-primary)] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] active:scale-95 transition-all shadow-lg shadow-[var(--brand-primary)]/20">
                     创建文档
                  </button>
                  <button class="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all">
                     了解更多
                  </button>
               </div>
            </div>
            <div class="lg:w-1/2 relative order-1 lg:order-2 w-full">
               <div class="absolute -inset-4 bg-linear-to-r from-purple-100 to-blue-50 rounded-3xl -z-10 blur-xl opacity-60"/>
               <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                  <img src="/sell-point-1.webp" alt="AI Writing" loading="lazy" class="rounded-xl w-full h-auto" width="1483" height="852" />
               </div>
            </div>
         </div>

         <!-- 特性 2：右文左图 -->
         <div class="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20">
            <div class="lg:w-1/2 space-y-6 order-2 lg:order-1">
               <div class="inline-flex items-center gap-2 text-[var(--brand-primary)] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                  <UIcon name="i-heroicons-photo" class="w-4 h-4" />
                  智能图像处理
               </div>
               <h3 class="text-2xl md:text-3xl font-bold text-[var(--brand-text)] leading-tight">一键生图，<br class="hidden md:block"/>创意不再受限</h3>
               <p class="text-base md:text-lg text-[var(--brand-muted)] leading-relaxed">
                  输入文字描述即可生成高质量图片，支持多种艺术风格。更有智能修图功能，无损放大、去背景、画质增强一气呵成。
               </p>
               <button class="px-6 py-2.5 bg-[var(--brand-primary)] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] active:scale-95 transition-all shadow-lg shadow-[var(--brand-primary)]/20">
                  立即体验
               </button>
            </div>
            <div class="lg:w-1/2 relative order-1 lg:order-2 w-full">
               <div class="absolute -inset-4 bg-linear-to-l from-pink-100 to-purple-50 rounded-3xl -z-10 blur-xl opacity-60"/>
               <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                  <img src="/sell-point-2.webp" alt="Image Gen" loading="lazy" class="rounded-xl w-full h-auto" width="1484" height="852" />
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>
