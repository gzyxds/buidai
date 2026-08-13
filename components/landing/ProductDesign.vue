<template>
  <section class="py-24 sm:py-32 bg-slate-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header - 参考智谱AI设计：标签+标题+描述的清晰层级 -->
      <div class="mb-16 sm:mb-20 lg:mb-24">
        <!-- 标签徽章 - 类似 model-tag 风格 -->
        <div class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20 mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 animate-pulse" />
          Product Vision
        </div>
        
        <!-- 主标题 - 参考 model-title 的大标题风格 -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl leading-tight">
          智言AI 产品愿景与核心价值
        </h2>
        
        <!-- 副标题 - 参考 model-content 的描述风格 -->
        <p class="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
          开源驱动创新，致力于打造企业级智能体开发平台，赋能开发者、创业者和企业组织
        </p>
        
        <!-- 快速入口按钮 - 参考 model-experience 风格 -->
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#features"
            class="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all duration-200"
          >
            探索能力
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            class="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-700 text-sm font-medium ring-1 ring-inset ring-slate-300 hover:bg-slate-50 hover:ring-slate-400 transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub 开源
          </a>
        </div>
      </div>

      <!-- Bento Grid Layout - 12列栅格系统 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        <!-- Card 1: Product Positioning - 大型主导卡片 (8列) -->
        <!-- Tailwind UI 风格：多层阴影 + 微妙边框 -->
        <div class="lg:col-span-8 group">
          <div class="h-full bg-white rounded-2xl p-8 sm:p-10 lg:p-12 ring-1 ring-slate-900/5 hover:ring-slate-900/10 transition-all duration-200">
            <!-- Badge - 使用极淡背景与柔和边框 -->
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-500/10">
              Positioning
            </span>
            <h3 class="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              产品定位
            </h3>
            <p class="mt-4 text-base leading-7 text-slate-600 max-w-3xl">
              智言AI 是专为 AI 开发者、创业者和企业组织打造的开源智能体开发平台。通过直观的可视化配置界面，无需编码即可快速构建包含智能体、知识库、工作流、大模型集成等核心 AI 能力的企业级应用。
            </p>
            <!-- Tags - 使用更克制的标签设计 -->
            <div class="mt-8 flex flex-wrap gap-2">
              <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/10">
                可视化配置
              </span>
              <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/10">
                零代码开发
              </span>
              <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/10">
                企业级应用
              </span>
              <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-indigo-700 bg-indigo-50 ring-1 ring-inset ring-indigo-600/10">
                开源生态
              </span>
            </div>
          </div>
        </div>

        <!-- Card 2: For Developers - 深色模式卡片 (4列) -->
        <!-- Tailwind UI 风格：深色并非纯黑，而是深灰 + 微妙高光 -->
        <div class="lg:col-span-4 group">
          <div
            class="h-full relative overflow-hidden rounded-2xl p-8 sm:p-10 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 bg-cover bg-center bg-no-repeat"
            style="background-image: url('/images/ValueProps-5.png');"
          >
            
            <div class="relative">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/5 text-slate-300 ring-1 ring-inset ring-white/10">
                For Developers
              </span>
              <h3 class="mt-6 text-2xl font-bold tracking-tight text-white">
                赋能开发者
              </h3>
              <p class="mt-4 text-base leading-7 text-white">
                提供完整的 AI 开发工具链，帮助开发者快速转型为 AI 开发者。通过内置应用市场实现技术变现，构建个人技术品牌。
              </p>
              <!-- 指示点 - 更克制的点缀色 -->
              <div class="mt-8 flex gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400/30" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: For Entrepreneurs - 强调色卡片 (4列) -->
        <!-- Tailwind UI 风格：强调色使用更柔和的阴影 -->
        <div class="lg:col-span-4 group">
          <div class="h-full relative overflow-hidden rounded-2xl bg-indigo-600 p-8 sm:p-10 ring-1 ring-inset ring-white/10 transition-all duration-200">
            
            <div class="relative">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/10 text-indigo-100 ring-1 ring-inset ring-white/20">
                For Entrepreneurs
              </span>
              <h3 class="mt-6 text-2xl font-bold tracking-tight text-white">
                助力创业者
              </h3>
              <p class="mt-4 text-base leading-7 text-indigo-100">
                内置完整的商业化功能，无需从零开发即可快速上线智能体产品，大幅降低时间和经济成本，专注业务增长。
              </p>
              <div class="mt-8 flex gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-white" />
                <span class="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span class="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4: For Enterprises - 大型卡片 (8列) -->
        <div class="lg:col-span-8 group">
          <div class="h-full bg-white rounded-2xl p-8 sm:p-10 lg:p-12 ring-1 ring-slate-900/5 hover:ring-slate-900/10 transition-all duration-200">
            <div class="flex flex-col lg:flex-row gap-10">
              <div class="flex-1">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-500/10">
                  For Enterprises
                </span>
                <h3 class="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  服务企业
                </h3>
                <p class="mt-4 text-base leading-7 text-slate-600">
                  智言设计简洁易用，员工可快速上手并充分发挥 AI 生产力。一站式架构支持部门间复用提示词、智能体、知识库和工作流等 AI 基础模块，提升组织协作效率。
                </p>
              </div>
              <!-- 企业特性列表 - 更精致的卡片设计 -->
              <div class="lg:w-[45%] flex items-center">
                <div class="w-full space-y-4">
                  <!-- Feature Item - 使用更柔和的阴影层级 -->
                  <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 ring-1 ring-inset ring-slate-900/5">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center ring-1 ring-inset ring-emerald-600/10">
                      <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.072 0 2.013.53 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" />
                      </svg>
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-semibold text-slate-900">私有化部署</p>
                      <p class="text-xs text-slate-500 mt-0.5">数据完全自主可控</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 ring-1 ring-inset ring-slate-900/5">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center ring-1 ring-inset ring-indigo-600/10">
                      <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-semibold text-slate-900">数据安全</p>
                      <p class="text-xs text-slate-500 mt-0.5">企业级安全防护</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 ring-1 ring-inset ring-slate-900/5">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center ring-1 ring-inset ring-amber-600/10">
                      <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-semibold text-slate-900">国产算力</p>
                      <p class="text-xs text-slate-500 mt-0.5">支持国产硬件生态</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Stats Row - 更克制的统计设计 -->
      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="group bg-white rounded-xl p-6 sm:p-8 ring-1 ring-slate-900/5 hover:ring-slate-900/10 transition-all duration-200"
        >
          <p class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {{ stat.value }}
          </p>
          <p class="mt-2 text-sm font-medium text-slate-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * 产品愿景与核心价值组件
 * 
 * 设计特点（Tailwind UI 风格）：
 * - Slate 中性色系统，营造专业现代感
 * - 多层阴影（shadow-sm + ring）模拟真实光照
 * - 极细边框（ring-slate-900/5）提升精致感
 * - 字体层级：tracking-tight 主标题、tracking-wide 标签
 * - 强调色（Indigo）克制使用于徽章和CTA
 * - 深色卡片使用 Slate-900 而非纯黑，配合微妙高光
 */

/** 统计数据配置 */
interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '10K+', label: '开发者' },
  { value: '500+', label: '企业客户' },
  { value: '99.9%', label: '可用性' },
  { value: '24/7', label: '技术支持' },
];
</script>
