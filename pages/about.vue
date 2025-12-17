<template>
  <div class="min-h-screen bg-white text-[#0F0F12] font-sans selection:bg-blue-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div class="absolute top-0 left-0 w-full h-[600px] bg-[url('/grid.svg')] pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- Hero Section -->
    <section class="pt-48 pb-20 relative z-10">
      <div class="container mx-auto px-4 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-600 mb-8 font-medium">
          <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>About Us</span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.15] mb-6">
          赋能企业，<span class="text-[#6E58FF]">构建智能未来</span>
        </h1>
        <p class="text-lg text-[#5A5E6A] max-w-3xl mx-auto leading-relaxed">
          BuidAI 致力于提供企业级 AI 基础设施，让每一个组织都能安全、高效地驾驭人工智能的力量。
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <!-- Text Content -->
          <div class="lg:w-1/2 space-y-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-6">我们的使命</h2>
              <div class="space-y-6 text-lg text-[#5A5E6A] leading-relaxed">
                <p>
                  在数字化转型的浪潮中，人工智能已成为企业发展的核心驱动力。然而，高昂的技术门槛和复杂的部署流程往往让许多企业望而却步。
                </p>
                <p>
                  BuidAI 的成立初衷很简单：<strong class="text-[#0F0F12]">降低 AI 应用门槛</strong>。我们通过标准化的基础设施和模块化的开发工具，帮助企业快速构建、部署和管理 AI 应用，将精力集中在业务创新而非底层技术上。
                </p>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
                <div class="text-3xl font-bold text-[#6E58FF] mb-1">100+</div>
                <div class="text-sm text-gray-500 font-medium">服务企业</div>
              </div>
              <div class="p-6 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
                <div class="text-3xl font-bold text-[#6E58FF] mb-1">99.9%</div>
                <div class="text-sm text-gray-500 font-medium">系统可用性</div>
              </div>
            </div>
          </div>

          <!-- Visual Content -->
          <div class="lg:w-1/2 w-full">
            <div class="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img src="/about.png" alt="About BuidAI" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-24 bg-[#F9FAFB]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-[#0F0F12] mb-4">核心价值观</h2>
          <p class="text-[#5A5E6A] text-lg">
            坚持长期主义，做难而正确的事
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-[#6E58FF] group-hover:text-white transition-colors">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-[#0F0F12] mb-4">安全可控</h3>
            <p class="text-[#5A5E6A] leading-relaxed">
              数据隐私是企业的生命线。我们坚持私有化部署优先，确保每一比特数据都掌握在客户手中。
            </p>
          </div>

          <!-- Value 2 -->
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div class="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-[#6E58FF] group-hover:text-white transition-colors">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-[#0F0F12] mb-4">务实创新</h3>
            <p class="text-[#5A5E6A] leading-relaxed">
              拒绝空谈概念，我们专注于解决实际业务问题。每一次技术迭代，都为提升企业效能而生。
            </p>
          </div>

          <!-- Value 3 -->
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div class="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-[#6E58FF] group-hover:text-white transition-colors">
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
            </div>
            <h3 class="text-xl font-bold text-[#0F0F12] mb-4">开放生态</h3>
            <p class="text-[#5A5E6A] leading-relaxed">
              技术无国界。我们积极拥抱开源社区，通过标准协议与上下游伙伴共建繁荣的 AI 应用生态。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Callout -->
    <section class="relative bg-[#121318] overflow-hidden">
       <!-- Full Width Bottom Image -->
       <div class="absolute inset-x-0 bottom-0 z-0">
          <img src="/foot.png" alt="" class="w-full object-cover" />
       </div>

       <div class="relative z-10 container mx-auto px-4 py-24">
          <div class="flex flex-col items-start text-left max-w-3xl">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               扣子空间你的 AI 办公空间
             </h2>
             <div class="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6E58FF] text-white font-bold text-[16px] hover:bg-[#5A43FF] transition-colors shadow-xl">
                   立即体验
                </button>
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1D2129] font-medium text-[16px] hover:bg-gray-100 transition-colors">
                   下载客户端
                </button>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '关于我们 - BuidAI',
  meta: [
    { name: 'description', content: 'BuidAI 致力于为企业提供安全、可控、高效的 AI 应用开发基础设施。' }
  ]
})
</script>

<style scoped>
/* Scoped styles kept minimal, relying on Tailwind */
</style>
