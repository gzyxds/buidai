<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-[#020204] text-white pt-20">
    <!-- Background Gradient -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]"></div>
      <div class="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slide-up">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span class="px-1.5 py-0.5 rounded bg-primary-600 text-[10px] font-bold text-white tracking-wider">NEW</span>
            <span class="text-sm text-gray-300">BuildingAI 应用市场上线，探索无限可能</span>
          </div>

          <!-- Headline -->
          <div class="space-y-2">
            <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white/90">
              面向 <span class="text-white">AI开发者</span> · <span class="text-white">AI创业者</span> · <span class="text-white">先进组织</span> 打造的
            </h1>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
              企业级开源智能体搭建平台 ✨
            </h2>
          </div>

          <!-- Subheadline -->
          <p class="text-xl text-gray-400 max-w-lg leading-relaxed">
            它 <span class="text-white font-medium">正在</span> 努力成为AI应用落地的首选方案
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button class="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
              开源部署
            </button>
            <button class="px-8 py-3.5 rounded-full bg-white text-gray-900 font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5">
              查看 Demo
            </button>
          </div>

          <!-- Feature Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-2 pt-8 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>AI原生内核</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <span>组织管理</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              <span>二次开发</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>自定义LOGO</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>简单易用</span>
            </div>
            <div class="col-span-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              <span>插件扩展无限可能</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              <span>开源所有代码</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Image -->
        <div class="relative flex items-center justify-center animate-slide-up animation-delay-200">
           <!-- Using the specific image requested by user -->
           <div class="relative w-full max-w-[800px] perspective-1000">
             <img
               src="https://www.buildingai.cc/ui/home-right-bg.png"
               alt="BuildingAI Dashboard"
               class="w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-700"
             />
             <!-- Glow effect behind the image to match the dark theme integration -->
             <div class="absolute inset-0 bg-primary-500/20 blur-[80px] -z-10 rounded-full"></div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero Section Logic
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
