<template>
  <!-- 6. 底部呼吁区域 -->
  <section class="relative bg-[#121318] overflow-hidden">
     <!-- 全宽底部图片 -->
     <div class="absolute inset-x-0 bottom-0 z-0 opacity-50 md:opacity-100">
        <img src="/images/foot.webp" alt="" loading="lazy" class="w-full h-[200px] md:h-auto object-cover md:object-contain object-bottom" width="2880" height="776" />
     </div>

     <div class="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div class="flex flex-col items-start text-left max-w-3xl">
           <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
             智言AI你的 AI 办公空间
           </h2>
           <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto">
              <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--brand-primary)] text-white font-bold text-[16px] hover:bg-[#5A43FF] active:scale-95 transition-all shadow-xl">
                 立即体验
              </button>
              <button
                class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1D2129] font-medium text-[16px] hover:bg-gray-100 active:scale-95 transition-all"
                @click="navigateTo('/download')"
              >
                 下载客户端
              </button>
           </div>
        </div>
     </div>
  </section>
</template>
