<script setup lang="ts">
import {
  RocketLaunchIcon,
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  CubeTransparentIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'

/**
 * 处理 CTA 按钮点击事件
 * 触发全局二维码弹窗，用于咨询私有化部署
 */
const handleCTAClick = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('showQRCodeModal', {
      detail: {
        title: '咨询私有化部署',
        desc: '请扫描二维码添加客服微信，咨询私有化部署详情'
      }
    }))
  }
}
</script>

<template>
  <section class="py-24 bg-[#F9FAFB] relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
    <!-- 浮动图标背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- 顶部左侧 -->
      <div class="absolute top-[15%] left-[15%] w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-60 animate-float-slow text-purple-500">
        <RocketLaunchIcon class="w-6 h-6" />
      </div>
      <div class="absolute top-[25%] left-[5%] w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-40 animate-float-slower text-blue-500">
        <SparklesIcon class="w-5 h-5" />
      </div>

      <!-- 顶部右侧 -->
      <div class="absolute top-[10%] right-[20%] w-14 h-14 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-50 animate-float text-cyan-500">
        <CommandLineIcon class="w-7 h-7" />
      </div>
      <div class="absolute top-[30%] right-[10%] w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-30 animate-float-slow text-pink-500">
        <CpuChipIcon class="w-5 h-5" />
      </div>

      <!-- 底部区域 -->
      <div class="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-40 animate-float-reverse text-indigo-500">
        <CloudIcon class="w-5 h-5" />
      </div>
      <div class="absolute bottom-[15%] right-[25%] w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-50 animate-float-slow text-orange-500">
        <CubeTransparentIcon class="w-6 h-6" />
      </div>
      <div class="absolute bottom-[30%] left-[50%] -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-neutral-200 shadow-sm opacity-20 animate-pulse text-yellow-500">
        <BoltIcon class="w-4 h-4" />
      </div>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <!-- 主要标题 -->
      <h2 class="text-2xl md:text-4xl font-medium text-gray-900 mb-2 tracking-tight">
        必创AI-构建你自己的人工智能应用程序，快速而简单。
      </h2>

      <!-- 渐变副标题 -->
      <div class="text-3xl md:text-5xl font-bold mb-6">
        <span class="text-[#8B5CF6]">In Minutes, Not Months.</span>
        <span class="text-[#22D3EE] ml-2">Open-Source Powered! ✨</span>
      </div>

      <!-- 描述 -->
      <p class="text-sm md:text-base text-gray-500 mb-10 max-w-2xl mx-auto tracking-wide">
        我们正在成为「快速搭建私有化 AI 应用」的首选方案。AI 时代，快即壁垒，犹如功夫，唯快不破！
      </p>

      <!-- CTA 按钮 -->
      <div class="flex justify-center">
        <button
          @click="handleCTAClick"
          class="px-10 py-3 rounded-full bg-[#8B5CF6] text-white font-medium text-lg hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          开启私有化部署
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes float-slower {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes float-reverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}
.animate-float-slower {
  animation: float-slower 5s ease-in-out infinite;
}
.animate-float-reverse {
  animation: float-reverse 4.5s ease-in-out infinite;
}
</style>
