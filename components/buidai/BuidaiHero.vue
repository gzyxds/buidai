<script setup lang="ts">
/**
 * Hero 区块：波浪流光背景 + 主标题 + CTA
 */
</script>

<template>
  <!-- 英雄区域 -->
  <section class="relative overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 z-10">
    <!-- AI 主题背景：波浪流光 + 光晕 -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- 基础渐变层 -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-fuchsia-50/20" />

      <!-- 顶部光弧 -->
      <svg class="absolute top-0 left-0 w-full h-full opacity-[0.08]" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0" />
            <stop offset="30%" stop-color="#6366f1" stop-opacity="0.5" />
            <stop offset="50%" stop-color="#a78bfa" stop-opacity="0.6" />
            <stop offset="70%" stop-color="#6366f1" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path class="wave-arc wave-arc-1" d="M-100,400 C200,300 400,200 720,280 C1040,360 1240,250 1540,350" stroke="url(#arc-grad)" stroke-width="2" fill="none" />
        <path class="wave-arc wave-arc-2" d="M-100,480 C250,380 450,300 720,370 C980,440 1200,330 1540,430" stroke="url(#arc-grad)" stroke-width="1.5" fill="none" style="animation-delay:-6s" />
        <path class="wave-arc wave-arc-3" d="M-100,560 C300,460 500,380 720,460 C920,540 1150,420 1540,520" stroke="url(#arc-grad)" stroke-width="1" fill="none" style="animation-delay:-12s" />

        <!-- 底部波浪 -->
        <path class="wave-arc-bottom" d="M-100,650 C150,550 350,600 600,580 C850,560 1050,620 1300,570 C1450,540 1500,560 1540,580" stroke="url(#arc-grad)" stroke-width="1.5" fill="none" opacity="0.3" />
        <path class="wave-arc-bottom" d="M-100,700 C200,620 400,660 650,640 C900,620 1100,680 1350,640 C1480,620 1520,640 1540,660" stroke="url(#arc-grad)" stroke-width="1" fill="none" opacity="0.2" style="animation-delay:-4s" />
      </svg>

      <!-- 光晕 -->
      <div class="absolute top-[-10%] left-[50%] -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-r from-indigo-400/6 via-violet-400/8 to-fuchsia-400/6 blur-[120px] animate-glow-pulse" />
      <div class="absolute top-[30%] right-[5%] h-[200px] w-[200px] rounded-full bg-violet-400/8 blur-[80px] animate-float-glow" style="animation-delay:-3s" />
      <div class="absolute top-[55%] left-[5%] h-[180px] w-[180px] rounded-full bg-fuchsia-400/6 blur-[70px] animate-float-glow" style="animation-delay:-6s" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <!-- NEW 标签 -->
      <div class="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[var(--brand-primary)] text-white text-[11px] sm:text-xs font-medium mb-4 sm:mb-6 max-w-[calc(100%-2rem)]">
        <span class="bg-white text-[var(--brand-primary)] px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold shrink-0">NEW</span>
        <span class="truncate">智言AI 应用市场上线，探索无限可能</span>
      </div>

      <!-- 主标题 -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-5 text-neutral-900 leading-[1.15] sm:leading-tight px-2 sm:px-0">
        一站式企业级<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">AI应用搭建系统</span>
      </h1>

      <!-- 副标题 -->
      <p class="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
        可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 + 应用市场 = 轻松构建强大 AI 应用
      </p>

      <!-- CTA 按钮组 -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5 sm:mb-6 px-4 sm:px-0">
        <a href="https://www.buidai.com/" target="_blank" rel="noopener noreferrer" class="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[var(--brand-primary)] text-white text-sm sm:text-base font-semibold hover:bg-[var(--brand-primary-dark)] active:scale-95 transition-all flex items-center justify-center gap-2">
          快速开始
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href="https://doc.buidai.com/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-neutral-900 text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2">
          前往部署
        </a>
      </div>

      <p class="text-xs sm:text-sm text-neutral-400 px-4">遇到问题，联系我们免费协助部署</p>
    </div>
  </section>
</template>

<style scoped>
/* ========================================
   AI 英雄区背景动画 - 波浪流光
   ======================================== */

/* 顶部光弧波浪 */
.wave-arc {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: wave-flow 18s linear infinite;
}

.wave-arc-1 { animation-duration: 18s; }
.wave-arc-2 { animation-duration: 22s; }
.wave-arc-3 { animation-duration: 26s; }

@keyframes wave-flow {
  0% { stroke-dashoffset: 2000; }
  100% { stroke-dashoffset: 0; }
}

/* 底部波浪 (慢速) */
.wave-arc-bottom {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: wave-flow-bottom 30s linear infinite;
}

@keyframes wave-flow-bottom {
  0% { stroke-dashoffset: 2000; }
  100% { stroke-dashoffset: 0; }
}

/* 浮动光晕 */
.animate-float-glow {
  animation: float-glow 8s ease-in-out infinite;
}

@keyframes float-glow {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) scale(1.1);
    opacity: 1;
  }
}

/* 呼吸脉冲 */
.animate-glow-pulse {
  animation: glow-pulse 6s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}
</style>
