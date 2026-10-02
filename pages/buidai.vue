<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
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
            <ArrowRightIcon class="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="https://doc.buidai.com/" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-neutral-900 text-white text-sm sm:text-base font-semibold hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2">
            前往部署
          </a>
        </div>

        <p class="text-xs sm:text-sm text-neutral-400 px-4">遇到问题，联系我们免费协助部署</p>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <section class="border-t border-neutral-200 bg-white overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 py-5 md:py-6">
          <div class="text-xs sm:text-sm text-neutral-400 text-center md:text-left shrink-0">
            <span class="font-bold text-neutral-700">智言AI</span>
            <span class="ml-1 md:ml-2 font-semibold">基于流行的技术栈构建</span>
          </div>
          <div class="flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 w-full md:w-auto">
            <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
              <span class="text-blue-500 font-bold text-base sm:text-lg">TS</span>
              <span class="font-medium text-sm">TypeScript</span>
            </div>
            <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
              <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span class="font-medium text-sm">PostgreSQL</span>
            </div>
            <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
              <span class="text-red-500 font-bold text-base sm:text-lg">N</span>
              <span class="font-medium text-sm">NestJS</span>
            </div>
            <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
              <span class="text-green-500 font-bold text-base sm:text-lg">V</span>
              <span class="font-medium text-sm">Vue 3</span>
            </div>
            <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
              <span class="text-green-400 font-bold text-base sm:text-lg">N</span>
              <span class="font-medium text-sm">Nuxt 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AIApplicationSystems />
    <Market :limit="8" />
    <ProductShowcase />

    <!-- 氛围编程（Vibe Coding） -->
    <section class="py-16 md:py-24 bg-[#f7f7f7]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4">Vibe Coding</span>
          <h2 class="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
            智言AI完美支持氛围编程（Vibe Coding）的开发方式
          </h2>
          <p class="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto">
            最佳调优的内置提示词结合AI辅助编程，快速完成AI应用开发，一键部署到常用云平台。
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="tool in vibeTools" :key="tool.name" class="flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-neutral-200 hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="tool.bg">
              <component :is="tool.icon" class="w-5 h-5" :class="tool.color" />
            </div>
            <span class="text-sm font-semibold text-neutral-800">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 平台优势 -->
    <section class="py-16 md:py-24 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4">平台优势</span>
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">平台核心优势</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">构建在先进架构之上的企业级 AI 解决方案，助力企业快速落地 AI 应用</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UPageCard
            v-for="item in advantages"
            :key="item.title"
            v-bind="item"
          >
            <template v-if="item.image" #image>
              <img
                :src="item.image.path"
                :alt="item.title"
                :width="item.image.width"
                :height="item.image.height"
                class="object-contain w-full h-full"
              />
            </template>
          </UPageCard>
        </div>
      </div>
    </section>

    <LLMModels />
    <LandingOpenSourceRoadmap />

    <!-- AI赋能企业通用场景 -->
    <section class="py-8 sm:py-12 lg:py-20 bg-neutral-50/50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-10 md:mb-14">
          <span class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-3 sm:mb-4">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            解决方案
          </span>

          <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--brand-text)] mb-3 sm:mb-4 tracking-tight">
            AI 赋能企业<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">通用场景</span>
          </h2>

          <p class="text-neutral-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
            基于智言AI强大的工作流引擎与多模型集成能力，为企业打造智能化转型全栈解决方案。
            覆盖内容创作、客户服务、数字营销等核心场景，助力企业降本增效，开启AI驱动新增长。
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-8">
            <div v-for="stat in scenarioStats" :key="stat.label" class="flex items-center gap-2">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" :class="stat.bg">
                <span class="font-bold text-xs sm:text-sm" :class="stat.color">{{ stat.value }}</span>
              </div>
              <span class="text-neutral-600 text-xs sm:text-sm">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="scenario-stack">
          <div
            v-for="(scenario, idx) in scenarios"
            :key="idx"
            class="scenario-card"
            :style="{ '--card-top': '100px', zIndex: idx + 1 }"
          >
            <div class="scenario-number">{{ scenario.index }}</div>

            <div class="relative z-10 pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 md:pt-10 md:pb-10 md:px-8 lg:pt-12 lg:pb-12 lg:px-10">
              <div
                class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-stretch relative z-10"
                :class="idx % 2 === 1 ? 'lg:flex-row-reverse' : ''"
              >
                <!-- 左侧内容 -->
                <div class="w-full lg:w-2/5 flex flex-col order-2 lg:order-1">
                  <div class="flex-1 bg-neutral-50 rounded-xl border border-neutral-100 p-4 sm:p-6 md:p-8 flex flex-col">
                    <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div class="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0" :class="scenario.iconBg">
                        <component :is="scenario.icon" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 class="text-base sm:text-lg md:text-xl font-bold text-neutral-900 leading-tight">{{ scenario.title }}</h3>
                    </div>

                    <div class="w-full h-px bg-neutral-200 mb-4 sm:mb-6" />

                    <ul class="space-y-2 sm:space-y-3 flex-1">
                      <li v-for="(item, i) in scenario.items" :key="i" class="flex items-start gap-2 sm:gap-3 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        <CheckCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{{ item }}</span>
                      </li>
                    </ul>

                    <div class="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-neutral-200">
                      <a
                        href="https://www.gmlart.cn/"
                        target="_blank" rel="noopener noreferrer"
                        class="group/btn inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
                      >
                        立即体验
                        <ArrowRightIcon class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>

                <!-- 右侧图片 -->
                <div class="w-full lg:w-3/5 order-1 lg:order-2">
                  <div class="relative w-full h-full min-h-[200px] sm:min-h-[240px] lg:min-h-0">
                    <div class="relative w-full h-full aspect-video lg:aspect-auto lg:h-full">
                      <div class="absolute inset-0 w-full h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-neutral-200 p-2 sm:p-3 md:p-5">
                        <img
                          :src="scenario.image"
                          :alt="scenario.title"
                          loading="lazy"
                          decoding="async"
                          class="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-16 md:py-24 bg-neutral-50/50 relative overflow-hidden">
      <svg class="absolute inset-0 -z-10 h-full w-full stroke-neutral-400/30 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="why-choose-us-grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#why-choose-us-grid)" />
      </svg>
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4">为什么选择我们</span>
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">为什么选择 智言AI？</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">从个人开发者探索到企业级部署，智言AI 提供强大的工作流引擎与多模型集成能力</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UPageCard v-for="item in whyChooseUs" :key="item.title" v-bind="item" />
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <UPageLogos title="Trusted by the best front-end teams" marquee :items="partnerLogos" />
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="py-16 md:py-24 bg-neutral-50/50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">智言AI 用户评价</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">从个人开发者探索到企业级部署，智言AI 提供强大的工作流引擎与多模型集成能力</p>
        </div>

        <div class="relative max-h-[600px] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div
            v-for="(column, colIndex) in testimonialColumns"
            :key="colIndex"
            class="space-y-6"
            :class="{
              'md:mt-10': colIndex === 1,
              'md:mt-20': colIndex === 2
            }"
          >
            <div
              class="space-y-6 animate-marquee-vertical hover:[animation-play-state:paused]"
              :style="{ animationDuration: `${40 + colIndex * 5}s` }"
            >
              <UPageCard
                v-for="(testimonial, index) in column"
                :key="`${colIndex}-${index}`"
                variant="subtle"
                :description="testimonial.quote"
                :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
                class="bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <template #footer>
                  <UUser v-bind="testimonial.user" size="xl" />
                </template>
              </UPageCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="mb-12 lg:mb-16">
          <span class="text-sm font-medium tracking-[0.25em] text-neutral-400 uppercase mb-3 block">FAQ</span>
          <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div class="max-w-2xl">
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.05] mb-3">常见问题</h2>
              <p class="text-neutral-500 text-base md:text-lg leading-relaxed">关于智言AI的常见疑问解答，助您快速上手</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button
                class="group px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-neutral-700 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 flex items-center gap-2"
                @click="openQrModal('coupon')"
              >
                <TicketIcon class="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                获取优惠码
              </button>
              <button
                class="group px-5 py-2.5 rounded-full border border-indigo-600 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all duration-200 flex items-center gap-2"
                @click="openQrModal('wechat')"
              >
                <ChatBubbleLeftRightIcon class="w-4 h-4" />
                联系客服
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div class="lg:w-72 xl:w-80 shrink-0">
            <nav class="flex flex-col gap-2">
              <button
                v-for="(faq, index) in faqs"
                :key="index"
                class="w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 group"
                :class="activeFaq === index
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:border-indigo-300 hover:bg-indigo-50'"
                @mouseenter="activeFaq = index"
              >
                <span class="text-xs font-medium tracking-[0.15em] shrink-0" :class="activeFaq === index ? 'text-white/70' : 'text-indigo-300'">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span class="text-sm font-medium leading-snug">{{ faq.question }}</span>
              </button>
            </nav>
          </div>

          <div class="flex-1 min-w-0">
            <div class="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 h-full">
              <div class="animate-fade-in h-full flex flex-col">
                <div class="flex items-start justify-between gap-4 mb-4">
                  <span class="text-xs font-medium tracking-[0.15em] text-indigo-300 uppercase">{{ String(activeFaq + 1).padStart(2, '0') }}</span>
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <span class="text-sm font-semibold text-indigo-600">{{ String(activeFaq + 1).padStart(2, '0') }}</span>
                  </div>
                </div>
                <h3 class="text-2xl md:text-3xl font-medium text-neutral-900 leading-snug mb-4">{{ faqs[activeFaq]?.question }}</h3>
                <div class="w-10 h-[2px] bg-indigo-200 mb-6" />
                <p class="text-lg text-neutral-500 leading-relaxed">{{ faqs[activeFaq]?.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 pt-12 border-t border-neutral-200">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <p class="text-base text-neutral-400">还有其他问题？我们随时为您解答</p>
            <button
              class="text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2 group"
              @click="openQrModal('wechat')"
            >
              联系客服团队
              <ArrowRightIcon class="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <LandingCtaSection />
  </div>
</template>

<script setup lang="ts">
import { dispatchQrModal } from '~/utils/qrModal'
import { computed, ref } from 'vue'
import type { Component } from 'vue'
import {
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  TicketIcon,
  DocumentTextIcon,
} from '@heroicons/vue/24/outline'
import {
  Sun,
  Code2,
  Square,
  Waves,
  Cloud,
  Zap,
  Brain,
  CloudLightning,
  Boxes,
  Binary,
} from 'lucide-vue-next'
import ProductShowcase from '@/components/landing/ProductShowcase.vue'

const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  dispatchQrModal(config)
}

/** Vibe Coding 工具列表 */
interface VibeTool { name: string; icon: Component; bg: string; color: string }

const vibeTools: VibeTool[] = [
  { name: 'Trae', icon: SparklesIcon, bg: 'bg-emerald-100', color: 'text-emerald-600' },
  { name: 'Claude Code', icon: Sun, bg: 'bg-orange-100', color: 'text-orange-600' },
  { name: 'Codex', icon: Code2, bg: 'bg-violet-100', color: 'text-violet-600' },
  { name: 'Cursor', icon: Square, bg: 'bg-neutral-900', color: 'text-white' },
  { name: 'Windsurf', icon: Waves, bg: 'bg-blue-100', color: 'text-blue-600' },
  { name: 'GitHub Copilot', icon: Cloud, bg: 'bg-gray-100', color: 'text-gray-800' },
  { name: '通义灵码', icon: Cloud, bg: 'bg-cyan-100', color: 'text-cyan-600' },
  { name: '文心快码', icon: Zap, bg: 'bg-indigo-100', color: 'text-indigo-600' },
  { name: '智谱CodeGeeX', icon: Brain, bg: 'bg-rose-100', color: 'text-rose-600' },
  { name: 'CodeWhisperer', icon: CloudLightning, bg: 'bg-amber-100', color: 'text-amber-600' },
  { name: 'JetBrains AI', icon: Boxes, bg: 'bg-purple-100', color: 'text-purple-600' },
  { name: 'Tabnine', icon: Binary, bg: 'bg-teal-100', color: 'text-teal-600' },
]

/** 场景统计数据 */
const scenarioStats = [
  { value: '9+', label: '应用场景', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  { value: '50+', label: '行业模板', bg: 'bg-blue-50', color: 'text-blue-600' },
  { value: '24h', label: '快速部署', bg: 'bg-purple-50', color: 'text-purple-600' },
]

/** SEO */
useSeoMeta({
  title: '智言AI - AI系统源码|企业级开源AI系统源码|私有化部署AI Agent平台',
  description: '智言AI(智言万象)提供全套开源AI系统源码，集成智能体Agent、RAG知识库、多模型管理(LLM)与工作流编排。基于Nuxt 3 + Vue 3开发，支持一键私有化部署，免费下载源代码，是企业构建专属AI中台的最佳选择。',
  keywords: '开源AI系统源码,AI系统源代码下载,企业级AI源码,AI Agent开发平台,私有化部署AI,RAG知识库源码,LLM大模型管理系统,Nuxt3 AI项目,Vue3 AI后台模板',
  ogTitle: '智言AI - 企业级开源AI系统源码 | 私有化部署AI Agent平台',
  ogDescription: '智言AI(智言万象)提供全套开源AI系统源码，集成智能体Agent、RAG知识库、多模型管理(LLM)与工作流编排。基于Nuxt 3 + Vue 3开发，支持一键私有化部署，免费下载源代码，是企业构建专属AI中台的最佳选择。',
  ogType: 'website',
})

interface Scenario {
  title: string
  items: string[]
  icon: Component
  iconBg: string
  image: string
  index: string
}

const scenarios: Scenario[] = [
  {
    title: 'Nanobanana',
    items: ['基于 Gemini 3 Pro Image Preview 模型，支持文生图、图生图及多图融合', '保持角色一致性，支持文本渲染，生成速度极快', '预置多个模板开箱即用，后台可自由配置提示词和参考图'],
    icon: ChatBubbleLeftRightIcon, iconBg: 'bg-blue-50 text-blue-600', image: '/plugin/Nanobanana.png', index: '01',
  },
  {
    title: '企业智能体系统',
    items: ['支持创建具备记忆、目标和工具使用能力的智能体，实现自主任务执行', '通过 AI 之间的分工合作，精准、稳定地解决复杂业务问题', '可视化工作流编排，降低使用门槛，提高开发效率'],
    icon: UserGroupIcon, iconBg: 'bg-indigo-50 text-indigo-600', image: '/product/model-1.png', index: '02',
  },
  {
    title: '企业 AI 客服系统',
    items: ['一键即可将 AI 技术与企业知识库相连，全面支持 PDF、Word、Excel 等文档格式', '轻松通过 API 将 AI 融入企业系统，提升内部知识检索效率', '支持多渠道接入，如网站、微信、APP 等，提供 7×24 小时智能客服服务'],
    icon: BookOpenIcon, iconBg: 'bg-emerald-50 text-emerald-600', image: '/plugin/writing-assist.png', index: '03',
  },
  {
    title: 'AI 漫剧创意系统',
    items: ['快速搭建支持剧本智能创作、角色形象生成、漫剧素材库管理的系统', '适配分镜设计与台词优化，显著降低漫剧创作门槛', '支持创建无限量剧本和小说，提供丰富的剧情模板和冲突框架'],
    icon: SparklesIcon, iconBg: 'bg-purple-50 text-purple-600', image: '/plugin/wanxiang.png', index: '04',
  },
  {
    title: 'AI 数字人系统',
    items: ['上传视频即可克隆专属形象，1:1 还原真人表情与动作，支持 4K 超清画质', '仅需一段语音即可克隆声音音色，支持多语种合成及 SSML 语音标记', '用于直播带货、企业代言、教育培训等场景，打造逼真数字形象'],
    icon: UserGroupIcon, iconBg: 'bg-rose-50 text-rose-600', image: '/product/human-1.png', index: '05',
  },
  {
    title: 'AI 视频剪辑系统',
    items: ['支持自动化批量剪辑、智能转场、滤镜调色，大幅提升视频制作效率', '智能字幕添加与背景音乐匹配，一键生成节奏感强的混剪视频', '提供海量模板与素材库，轻松制作门店营销、产品带货等专业级视频内容'],
    icon: SparklesIcon, iconBg: 'bg-amber-50 text-amber-600', image: '/plugin/video-mix.png', index: '06',
  },
  {
    title: 'AI 简历生成系统',
    items: ['通过智能问答快速收集个人信息，一键生成结构完整的专业简历', '提供数十款专业模板，涵盖不同行业和职位，支持在线编辑与下载', '深度解析简历亮点并提供优化建议，显著提升简历质量与影响力'],
    icon: DocumentTextIcon, iconBg: 'bg-teal-50 text-teal-600', image: '/product/resume-1.png', index: '07',
  },
  {
    title: 'AI PPT 演示系统',
    items: ['根据主题或大纲自动生成结构清晰、设计美观的 PPT 演示文稿', '内置多种模板与图表，支持智能配色、字体搭配与动画效果优化', '一键生成演讲备注，支持实时预览与云端存储，满足各类展示需求'],
    icon: CommandLineIcon, iconBg: 'bg-cyan-50 text-cyan-600', image: '/plugin/aippt.png', index: '08',
  },
  {
    title: 'AI音乐创作系统',
    items: ['以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐', '降低音乐创作门槛，支持个人娱乐与商用配乐，提供完整商用授权'],
    icon: SparklesIcon, iconBg: 'bg-violet-50 text-violet-600', image: '/plugin/AI音乐.png', index: '09',
  },
]

interface Advantage {
  title: string
  description: string
  icon: string
  class?: string
  variant?: 'solid' | 'outline' | 'soft'
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  image?: { path: string; width: number; height: number }
}

const advantages: Advantage[] = [
  {
    title: '开源优势', description: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。', icon: 'i-lucide-box',
    class: 'lg:col-span-2',
    image: { path: 'https://ui2.nuxt.com/illustrations/color-palette', width: 363, height: 152 },
    orientation: 'horizontal',
  },
  {
    title: '独特的 QA 结构', description: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。', icon: 'i-lucide-sparkles',
    variant: 'soft', class: 'bg-indigo-500 text-white [&_[data-slot=title]]:text-white [&_[data-slot=description]]:text-indigo-100',
  },
  {
    title: '可视化工作流', description: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。', icon: 'i-lucide-git-branch',
    variant: 'soft', class: 'bg-indigo-500 text-white [&_[data-slot=title]]:text-white [&_[data-slot=description]]:text-indigo-100',
  },
  {
    title: '无限扩展', description: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。', icon: 'i-lucide-puzzle',
    class: 'lg:col-span-2',
    image: { path: 'https://ui2.nuxt.com/illustrations/icon-library', width: 362, height: 184 },
    orientation: 'horizontal', reverse: true,
  },
  { title: '便于调试', description: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。', icon: 'i-lucide-bug' },
  { title: '支持多种模型', description: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。', icon: 'i-lucide-server' },
  {
    title: '对接支付渠道', description: '智言万象 已打通微信与支付宝渠道，通过设置会员套餐，用户充值使用 AI 功能，实现产品商业化完整闭环。',
    icon: 'i-lucide-credit-card', variant: 'soft',
  },
]

const whyChooseUs = [
  { title: '完全开源', description: '基于 Apache-2.0 协议，支持私有部署和自定义二次开发', icon: 'i-lucide-lock-open', class: 'lg:row-span-2' },
  { title: '极致灵活', description: '流程、组件、模型都可自由组合，满足各类 AI 应用需求', icon: 'i-lucide-puzzle', class: 'lg:col-span-2' },
  { title: '上手快速', description: '无需写代码也能搭建复杂流程，技术人员可嵌入脚本模块灵活控制', icon: 'i-lucide-zap' },
  { title: '社区驱动', description: '不断壮大的开发者生态，众多插件和社区案例持续涌现', icon: 'i-lucide-users' },
]

const partnerLogos = [
  'i-simple-icons-github', 'i-simple-icons-discord', 'i-simple-icons-x',
  'i-simple-icons-instagram', 'i-simple-icons-linkedin', 'i-simple-icons-facebook',
]

const testimonials = [
  { user: { name: '李明', description: 'Java架构师 @某券商科技部', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=李明', alt: '李明' } }, quote: 'Agents-Flex框架让风控Bot开发效率提升300%，@Function注解直接对接内部交易系统，插件热部署避免停机升级' },
  { user: { name: '张悦', description: '全栈工程师 @智慧政务SaaS团队', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张悦', alt: '张悦' } }, quote: '工作流编排API无缝嵌入省公积金平台，智言AI引擎承压每日20万笔审批流，异常自愈机制减少运维告警80%' },
  { user: { name: '陈涛', description: 'Gitee贡献者 @智言AI社区', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=陈涛', alt: '陈涛' } }, quote: 'RBAC权限体系复用企业AD组策略，部门级知识库隔离配置从3天缩短至1小时' },
  { user: { name: '王振华', description: '信息中心主任 @省级医保局', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王振华', alt: '王振华' } }, quote: 'RAG知识库阻断23次过期政策误用，文件时效性预警+多级权限审计，基层咨询准确率跃至98%' },
  { user: { name: '周敏', description: '技术总监 @跨境物流集团', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=周敏', alt: '周敏' } }, quote: 'Bot自动处理87%清关异常工单，HTTP节点直连海关系统，人工干预成本下降220万/年' },
  { user: { name: '赵立峰', description: '风控副总裁 @城商行', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=赵立峰', alt: '赵立峰' } }, quote: '数据中枢字段级脱敏满足金监新规，客户身份证/银行卡号自动掩码，审计合规率100%' },
]

const testimonialColumns = computed(() => {
  const columns: (typeof testimonials)[] = [[], [], []]
  testimonials.forEach((t, i) => columns[i % 3]!.push(t))
  return columns.map(col => [...col, ...col, ...col])
})

const faqs = [
  { question: '官方技术专家能为我做什么？', answer: '我们提供官方认证的技术专家远程服务，可协助您完成 智言万象 平台框架的本地或服务器部署，包含环境配置、源码安装、插件调试及后续运维指导，一站式解决部署难题。' },
  { question: '我可以使用自己的企业数据训练 AI 吗？', answer: '可以。智言AI 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。' },
  { question: '构建一个 AI 应用需要编程基础吗？', answer: '完全不需要。智言AI 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。' },
  { question: '我的数据安全吗？会不会被用于模型训练？', answer: '您的数据绝对安全。智言AI 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。' },
  { question: '平台支持哪些大语言模型？', answer: '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。' },
  { question: '购买付费应用后有哪些注意事项？', answer: '请充分阅读产品说明后购买，如遇问题可咨询官方客服。为坚持开源社区定位，本站付费应用均为开源交付状态。为保护开发者知识产权，促进建立健康的应用市场生态，根据相关法规，源代码类数字化商品下载获取后不支持退款。如无特殊说明，付费应用均为购买后单次安装使用，切勿传播分享已购买付费应用，共同维护开发者权益。' },
  { question: '智言AI适合哪些使用场景？', answer: '智言AI适用于多种企业级场景：智能客服系统、企业知识库问答、内部培训助手、文档智能审核、数据分析报告生成、营销内容创作、代码辅助开发等。无论您是希望提升客户服务效率，还是构建企业内部AI中台，智言AI都能提供灵活的解决方案。支持多租户架构，适合集团型企业统一部署。' },
]

const activeFaq = ref<number>(0)
</script>

<style>
html {
  overflow-x: clip;
}
</style>

<style scoped>
.scenario-stack {
  display: flex;
  flex-direction: column;
  position: relative;
}

.scenario-card {
  position: sticky;
  top: var(--card-top);
  width: 100%;
  min-height: auto;
  margin-bottom: 32px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.scenario-number {
  position: absolute;
  left: 24px;
  top: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #9CA3AF;
  font-size: 12px;
  font-weight: 500;
  font-family: 'SF Mono', Monaco, monospace;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  z-index: 20;
}

.scenario-card:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .scenario-card {
    top: calc(var(--card-top) * 0.7);
    border-radius: 10px;
  }
  .scenario-number {
    left: 20px;
    top: 20px;
    width: 28px;
    height: 28px;
    font-size: 11px;
  }
}

@media (max-width: 767px) {
  .scenario-stack {
    gap: 16px;
    overflow: hidden;
  }
  .scenario-card {
    position: relative;
    top: auto;
    border-radius: 12px;
    margin-bottom: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  }
  .scenario-number {
    left: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
}

@media (max-width: 479px) {
  .scenario-stack {
    gap: 12px;
  }
  .scenario-card {
    border-radius: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
