<template>
  <!-- 1. 顶部 Hero 区域 -->
  <section class="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden text-center">
    <div class="relative z-10 container mx-auto px-4 flex flex-col items-center">
      <!-- 徽章 -->
      <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-sm">
         <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-primary)] opacity-75"/>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-primary)]"/>
        </span>
        <span class="text-xs font-medium text-gray-600">智言AI旗下 AI 平台</span>
      </div>

      <!-- 标题 -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[var(--brand-text)] tracking-tight leading-[1.2] md:leading-[1.15] mb-6">
        智言AI你的 <span class="text-[var(--brand-primary)] block sm:inline">AI 办公空间</span>
      </h1>

      <!-- 副标题 -->
      <p class="text-base sm:text-lg text-[var(--brand-muted)] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
        智言AI旗下新一代 AI 办公平台，让创作与协作更高效
      </p>

      <!-- 行动号召按钮 -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full sm:w-auto px-4 sm:px-0">
        <a href="https://www.gmlart.cn" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto group relative px-8 py-3.5 rounded-full bg-linear-to-r from-[var(--brand-primary)] to-[#7A42FF] text-white font-semibold text-[15px] shadow-[0_8px_20px_-4px_rgba(110,88,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(110,88,255,0.5)] active:scale-95 transition-all duration-300 touch-manipulation flex items-center justify-center">
          立即体验
          <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"/>
        </a>

        <div class="relative group w-full sm:w-auto">
          <button class="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-white border border-[#E5E6F0] text-[#1D2129] font-medium text-[15px] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:bg-[#F9F8FF] active:scale-95 transition-all duration-300 flex items-center gap-2 touch-manipulation">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L12 3M12 16L7 11M12 16L17 11M6 21H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            下载客户端
          </button>
          <!-- 二维码提示框（移动端隐藏） -->
           <div class="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 p-3 bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none">
              <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"/>
              <div class="w-full aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden relative">
                 <!-- 二维码占位符 -->
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR" loading="lazy" width="150" height="150" class="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div class="text-[10px] text-center text-gray-500">扫码下载 App</div>
           </div>
        </div>
      </div>

      <!-- 装饰性层叠卡片（轮播占位） -->
      <div class="relative w-full max-w-5xl h-[260px] md:h-[340px] perspective-1000">
        <div class="absolute inset-x-0 bottom-0 h-full flex justify-center items-end">
           <!-- 中间卡片 -->
           <div class="w-[280px] md:w-[360px] h-[300px] md:h-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-30 transform hover:-translate-y-4 transition-transform duration-500 flex flex-col overflow-hidden touch-manipulation">
              <div class="h-1/2 bg-linear-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-center items-center text-center">
                 <div class="text-4xl font-serif italic mb-2">Portfolio</div>
                 <div class="text-sm text-gray-500">智能作品集生成</div>
              </div>
              <div class="h-1/2 p-6 flex flex-col justify-between">
                 <div class="space-y-2">
                    <div class="h-2 w-2/3 bg-gray-100 rounded"/>
                    <div class="h-2 w-full bg-gray-50 rounded"/>
                 </div>
                 <button class="w-full py-2 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium active:bg-gray-200 transition-colors">查看详情</button>
              </div>
           </div>
           <!-- 左侧卡片（内层） -->
           <div class="absolute left-1/2 -translate-x-full md:-translate-x-[110%] bottom-0 w-[180px] h-[200px] md:w-[320px] md:h-[340px] bg-[#1E1E2E] rounded-2xl shadow-xl z-20 transform -rotate-6 hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden border border-gray-800">
               <div class="p-4 md:p-6 h-full flex flex-col text-white">
                  <div class="text-2xl md:text-4xl font-bold tracking-tighter text-[var(--brand-primary)] mb-1 md:mb-2">CODE</div>
                  <div class="text-sm md:text-xl font-light opacity-80">EVENT 2025</div>
                  <div class="mt-auto h-px w-full bg-gray-700"/>
               </div>
           </div>
           <!-- 左侧卡片（外层） -->
           <div class="hidden lg:block absolute left-1/2 -translate-x-[180%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-white rounded-2xl shadow-lg z-10 transform -rotate-12 hover:rotate-[-14deg] transition-transform duration-500 border border-gray-200 overflow-hidden">
               <div class="p-5 h-full relative bg-gray-50">
                  <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div class="space-y-3 mt-8">
                     <div class="h-2 w-3/4 bg-gray-200 rounded"/>
                     <div class="h-2 w-1/2 bg-gray-200 rounded"/>
                     <div class="h-2 w-full bg-gray-200 rounded"/>
                  </div>
                  <div class="absolute bottom-5 left-5 right-5 h-24 bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex items-center gap-3">
                     <div class="w-10 h-10 rounded-full bg-purple-100 shrink-0"/>
                     <div class="flex-1 space-y-1">
                        <div class="h-1.5 w-2/3 bg-gray-200 rounded"/>
                        <div class="h-1.5 w-1/3 bg-gray-100 rounded"/>
                     </div>
                  </div>
               </div>
           </div>

           <!-- 右侧卡片（内层） -->
           <div class="absolute left-1/2 translate-x-[0%] md:translate-x-[10%] bottom-0 w-[180px] h-[200px] md:w-[320px] md:h-[340px] bg-linear-to-br from-[#E0E7FF] to-[#F3E8FF] rounded-2xl shadow-xl z-20 transform rotate-6 hover:rotate-[8deg] transition-transform duration-500 border border-white/50">
               <div class="p-4 md:p-6 h-full relative">
                  <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"/>
                  <div class="relative z-10 text-2xl md:text-3xl font-script text-indigo-900">f(x)</div>
               </div>
           </div>
           <!-- 右侧卡片（外层） -->
           <div class="hidden lg:block absolute left-1/2 translate-x-[80%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-[var(--brand-text)] rounded-2xl shadow-lg z-10 transform rotate-12 hover:rotate-14 transition-transform duration-500 border border-gray-800 overflow-hidden">
               <div class="p-5 h-full flex flex-col">
                  <div class="flex items-center justify-between mb-6">
                     <div class="w-8 h-8 rounded-lg bg-gray-800"/>
                     <div class="text-xs text-gray-500">AI Analysis</div>
                  </div>
                  <div class="flex-1 flex items-end justify-between gap-2 px-2">
                     <div class="w-1/5 h-[40%] bg-purple-900/50 rounded-t"/>
                     <div class="w-1/5 h-[70%] bg-purple-800/50 rounded-t"/>
                     <div class="w-1/5 h-[50%] bg-purple-700/50 rounded-t"/>
                     <div class="w-1/5 h-[90%] bg-[var(--brand-primary)] rounded-t shadow-[0_0_15px_rgba(110,88,255,0.5)]"/>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 自定义字体（如果未在 Tailwind 配置中） */
.font-serif {
  font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
}
.font-script {
  font-family: 'Brush Script MT', cursive;
}

/* 动画工具类 */
.perspective-1000 {
  perspective: 1000px;
}
</style>
