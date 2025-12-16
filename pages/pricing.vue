<template>
  <div class="py-24 bg-gray-50 dark:bg-black min-h-screen">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">
          新增页面
        </span>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          灵活的定价方案
        </h1>
        <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          无论您是个人开发者还是大型企业，我们都有适合您的方案。
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Starter -->
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-colors shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">个人版</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">适合独立开发者和业余爱好者</p>
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            ¥0 <span class="text-lg text-gray-500 font-normal">/ 月</span>
          </div>
          <button class="w-full py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mb-8 text-gray-900 dark:text-white">
            免费开始
          </button>
          <ul class="space-y-4">
            <li v-for="i in 5" :key="i" class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              基础 AI 模型调用
            </li>
          </ul>
        </div>

        <!-- Pro -->
        <div class="bg-gray-900 dark:bg-primary-900/20 rounded-3xl p-8 border border-primary-500 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
          <div class="absolute top-0 right-0 bg-gradient-to-l from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
            最受欢迎
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">专业版</h3>
          <p class="text-gray-400 mb-6">适合小型团队和初创公司</p>
          <div class="text-4xl font-bold text-white mb-8">
            ¥199 <span class="text-lg text-gray-400 font-normal">/ 月</span>
          </div>
          <button class="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors mb-8 shadow-lg shadow-primary-500/30">
            立即订阅
          </button>
          <ul class="space-y-4">
            <li v-for="i in 8" :key="i" class="flex items-center gap-3 text-gray-300">
              <svg class="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              高级 AI 模型 (GPT-4)
            </li>
          </ul>
        </div>

        <!-- Enterprise -->
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary-500 transition-colors shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">企业版</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">适合大规模部署和定制需求</p>
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            定制 <span class="text-lg text-gray-500 font-normal">价格</span>
          </div>
          <button class="w-full py-3 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mb-8 text-gray-900 dark:text-white">
            联系销售
          </button>
          <ul class="space-y-4">
            <li v-for="i in 6" :key="i" class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              私有化部署支持
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
