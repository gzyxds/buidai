<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div
      class="absolute top-0 left-0 z-0 h-100 w-full bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] md:h-150"
    />

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>智言万象 V4.6.8 strong release</span>
        </div>

        <h1
          class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight min-h-[1.2em]"
        >
          <span class="typewriter-text">{{ displayText }}</span>
          <span
            class="typewriter-cursor inline-block w-[3px] h-[1em] bg-indigo-600 ml-1 align-middle"
            :class="{ 'animate-blink': showCursor }"
          />
        </h1>

        <p class="text-base sm:text-xl text-neutral-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="https://www.gmlart.cn"
            target="_blank"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </a>
          <a
            href="https://www.gmlart.cn"
            target="_blank"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </a>
        </div>
      </div>
    </section>

    <!-- 核心功能 步骤展示 - 使用独立组件 -->
    <LandingFeatureSteps />

    <!-- 全行业解决方案 -->
    <AIIndustry />

    <!-- 开源路线图 -->
    <LandingOpenSourceRoadmap />


    <!-- 产品优势 -->
    <section class="overflow-hidden bg-white">
      <div class="grid-border-container">
        <!-- 标题区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            <div class="mb-6 sm:mb-8">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
                <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  核心功能
                </span>
              </div>
              <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                产品核心优势
              </h2>
              <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
                为您提供一站式的 AI 解决方案，助力企业实现业务效率的质变与创新
              </p>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- 功能展示区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <div class="flex flex-col gap-16 md:gap-24">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="group"
          >
            <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <!-- 文本内容 -->
              <div
                class="flex flex-col gap-4"
                :class="{ 'lg:order-last': idx % 2 === 1 }"
              >
                <!-- 标签 -->
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium w-fit mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16">
                    <path fill="currentColor" fill-opacity="0.8" d="m10.5 6.882-5.98 5.98a.47.47 0 0 1-.665 0l-1.217-1.215a.47.47 0 0 1 0-.665L8.618 5z"/>
                    <path fill="currentColor" d="M14.5 9.375a.46.46 0 0 1-.136.324.47.47 0 0 1-.327.134h-.926v.917a.46.46 0 0 1-.135.324.466.466 0 0 1-.655 0 .46.46 0 0 1-.136-.324v-.917h-.926a.47.47 0 0 1-.327-.134.456.456 0 0 1 .327-.782h.926V8a.465.465 0 0 1 .926 0v.917h.926c.123 0 .24.048.327.134a.46.46 0 0 1 .136.324M3.39 4.792h.925v.916a.465.465 0 0 0 .926 0v-.916h.926c.123 0 .24-.049.327-.135a.456.456 0 0 0-.327-.782h-.926v-.917a.46.46 0 0 0-.136-.324.465.465 0 0 0-.79.324v.917H3.39a.47.47 0 0 0-.327.134.456.456 0 0 0 .327.783m7.406 6.875h-.462v-.459a.46.46 0 0 0-.136-.324.466.466 0 0 0-.79.324v.459h-.463a.47.47 0 0 0-.328.134.456.456 0 0 0 .328.782h.463v.459c0 .121.048.238.135.324a.466.466 0 0 0 .79-.324v-.459h.463c.123 0 .241-.048.328-.134a.456.456 0 0 0-.328-.782M12.84 5.25l-8.062 7.981a.93.93 0 0 1-1.309 0l-1.198-1.184a.92.92 0 0 1-.2-1 .9.9 0 0 1 .2-.297l8.063-7.981a.93.93 0 0 1 1.009-.2.9.9 0 0 1 .3.2l1.197 1.184a.915.915 0 0 1 .2 1 .9.9 0 0 1-.2.297M9.678 7.083 8.482 5.898l-5.556 5.5 1.197 1.185zm2.507-2.481-1.197-1.185L9.136 5.25l1.198 1.185z"/>
                  </svg>
                  核心功能
                </div>

                <!-- 标题 -->
                <h3 class="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight mb-3">
                  {{ feature.title }}
                </h3>

                <!-- 功能折叠列表 -->
                <div class="flex flex-col gap-1">
                  <div
                    v-for="(point, pIndex) in feature.points"
                    :key="pIndex"
                    class="rounded-xl flex gap-3 w-full group/item transition-all duration-300 pr-3 cursor-pointer"
                    :class="feature.activePoint === pIndex ? 'bg-indigo-50/50' : ''"
                    @mouseenter="feature.activePoint = pIndex"
                  >
                    <div class="flex flex-col pl-3 py-3 items-center gap-[2px]">
                      <!-- Icon -->
                      <div class="relative w-4 h-4 mt-1 shrink-0 flex items-center justify-center text-indigo-500">
                        <!-- 活动图标 -->
                        <svg v-if="feature.activePoint === pIndex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="absolute inset-0 transition-opacity duration-300">
                          <path fill="currentColor" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7m3.073 5.766-3.769 3.769a.54.54 0 0 1-.762 0L4.927 8.919a.539.539 0 0 1 .762-.761l1.234 1.235 3.388-3.39a.54.54 0 0 1 .92.382.54.54 0 0 1-.158.38"/>
                        </svg>
                        <!-- Inactive Icon -->
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16" class="absolute inset-0 transition-opacity duration-300 opacity-30 group-hover/item:opacity-50">
                          <circle cx="8" cy="8" r="7.25"/>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                      </div>

                      <!--连接线 -->
                      <div
                        v-if="pIndex < feature.points.length - 1"
                        class="w-[2px] grow bg-neutral-100 rounded-full relative overflow-hidden min-h-[16px]"
                      >
                        <!--活动进度条 -->
                        <div
                          class="absolute top-0 left-0 w-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
                          :style="{ height: feature.activePoint === pIndex ? '100%' : '0%' }"
                          :class="{ 'opacity-0': feature.activePoint > pIndex }"
                        />
                      </div>
                    </div>

                    <div class="grow">
                      <div class="relative transition-all duration-300 ease-out">
                        <h4
                          class="flex items-center gap-3 font-medium leading-normal p-3 pl-0 transition-colors duration-300 text-base"
                          :class="feature.activePoint === pIndex ? 'text-neutral-900' : 'text-neutral-500 group-hover/item:text-neutral-700'"
                        >
                          {{ point.title }}
                        </h4>

                        <div
                          class="grid transition-[grid-template-rows] duration-300 ease-out"
                          :class="feature.activePoint === pIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                        >
                          <div class="overflow-hidden">
                            <div
                              class="text-sm text-neutral-500 leading-relaxed pt-0 pb-3 opacity-0 -translate-y-1 transition-all duration-300 delay-75"
                              :class="{ 'opacity-100 translate-y-0': feature.activePoint === pIndex }"
                            >
                              {{ point.desc }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CTA 按钮 -->
                <div class="mt-2">
                  <a
                    href="https://www.gmlart.cn"
                    target="_blank"
                    class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-all duration-200 shadow-md shadow-indigo-500/20 hover:-translate-y-0.5"
                  >
                    立即体验
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-5 h-5 ml-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- 视频演示 -->
              <div class="relative h-full">
                <div class="relative p-2 rounded-3xl bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 h-full">
                  <div class="relative rounded-2xl overflow-hidden border border-neutral-100 shadow-sm bg-white aspect-video">
                    <video
                      :src="feature.video"
                      autoplay
                      loop
                      muted
                      playsinline
                      class="w-full h-full object-cover"
                    />
                    <!-- 视频遮罩 -->
                    <div class="absolute inset-0 bg-linear-to-tr from-neutral-500/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- 底部信息 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8">
            <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
            <span class="w-px h-6 bg-neutral-200" />
            <span class="text-base sm:text-lg text-neutral-600 font-medium">全栈赋能，开箱即用，安全可信，全网发布</span>
          </div>
        </div>

        <!-- 底部边框行 -->
        <div class="grid-border-row" />
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="overflow-hidden bg-white">
      <div class="grid-border-container">
        <!-- 标题区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            <div class="mb-6 sm:mb-8">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
                <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  Why 智言AI
                </span>
              </div>
              <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                为什么选择 智言AI ?
              </h2>
              <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
                从底层架构到上层应用，我们提供全栈式的 AI 解决方案，助您在智能时代保持领先
              </p>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- 优势卡片区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="(adv, idx) in advantages"
                :key="idx"
                class="group relative flex flex-col gap-4 border border-neutral-200/80 bg-white p-6 transition-all duration-200 ease-out hover:border-indigo-200 hover:shadow-sm hover:bg-indigo-50/20"
              >
                <!-- 图标区域 -->
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 shrink-0">
                  <component
                    :is="adv.icon"
                    class="h-5 w-5 text-indigo-600"
                    stroke-width="1.5"
                  />
                </div>

                <!-- 内容区域 -->
                <div class="flex-1">
                  <h3 class="text-base font-bold text-neutral-900 mb-2">
                    {{ adv.title }}
                  </h3>
                  <p class="text-sm leading-relaxed text-neutral-600">
                    {{ adv.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- 底部信息 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8">
            <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
            <span class="w-px h-6 bg-neutral-200" />
            <span class="text-base sm:text-lg text-neutral-600 font-medium">全栈式 AI 解决方案</span>
          </div>
        </div>

        <!-- 底部边框行 -->
        <div class="grid-border-row" />
      </div>
    </section>

    <!--常见问题部分 -->
    <section class="overflow-hidden bg-white">
      <div class="grid-border-container">
        <!-- 标题区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            <div class="mb-6 sm:mb-8">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
                <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  FAQ
                </span>
              </div>
              <h2 class="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                常见问题
              </h2>
              <p class="mt-3 text-sm text-neutral-500 max-w-2xl">
                关于智言AI的常见疑问解答
              </p>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- FAQ 内容区域 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-px overflow-hidden rounded-md bg-neutral-200/70 lg:grid-cols-[320px_1fr]">
              <!-- 左侧：标题区 + 二维码按钮 -->
              <aside class="relative order-1 w-full overflow-hidden rounded-md bg-white lg:order-1 border-b lg:border-b-0 lg:border-r border-neutral-200/70 p-5 sm:p-6 lg:p-8">
                <div class="space-y-6">
                  <!-- 左侧标题区 -->
                  <div class="space-y-2">
                    <h3 class="text-base font-semibold text-neutral-900">
                      需要帮助？
                    </h3>
                    <p class="text-sm text-neutral-500 leading-relaxed">
                      扫码添加客服微信，获取更多产品信息和专属优惠
                    </p>
                  </div>

                  <!-- 二维码按钮区 -->
                  <div class="flex flex-col gap-3">
                    <!-- 获取优惠码按钮 -->
                    <button
                      class="group relative inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      @click="openQrModal('coupon')"
                    >
                      <TicketIcon class="relative mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                      <span class="relative">获取优惠码</span>
                    </button>

                    <!-- 联系客服按钮 -->
                    <button
                      class="group inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-neutral-700 bg-white hover:bg-neutral-50 border-2 border-neutral-200 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      @click="openQrModal('wechat')"
                    >
                      <ChatBubbleLeftRightIcon class="mr-2 h-4 w-4 text-neutral-500 group-hover:text-indigo-500 transition-all duration-200 group-hover:scale-110" />
                      <span class="group-hover:text-neutral-900 transition-colors duration-200">联系客服</span>
                    </button>
                  </div>

                  <!-- 服务承诺 -->
                  <div class="pt-5 border-t border-neutral-200/60">
                    <div class="space-y-3">
                      <p class="text-xs font-medium text-neutral-400 uppercase tracking-wider">服务承诺</p>
                      <div class="space-y-2.5">
                        <div class="flex items-center gap-2 text-sm text-neutral-600">
                          <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>7×24小时在线</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm text-neutral-600">
                          <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>专属优惠码</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm text-neutral-600">
                          <div class="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>一对一技术支持</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <!-- 右侧：FAQ 手风琴列表 -->
              <section class="relative order-2 flex flex-col rounded-md bg-white lg:order-2">
                <div
                  v-for="(faq, idx) in faqs"
                  :key="idx"
                  class="group border-b border-neutral-200/90 transition-colors duration-200 last:border-b-0"
                  :class="activeFaq === idx ? 'bg-indigo-50/30' : 'hover:bg-neutral-50/30'"
                >
                  <!-- 问题行 -->
                  <button
                    :id="`faq-tab-${idx}`"
                    type="button"
                    role="tab"
                    :aria-selected="activeFaq === idx"
                    :aria-controls="`faq-panel-${idx}`"
                    class="group relative flex w-full cursor-pointer items-center justify-between gap-4 py-5 px-5 sm:py-6 sm:px-6 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
                    tabindex="0"
                    @click="toggleFaq(idx)"
                    @keydown="handleFaqKeydown($event, idx)"
                  >
                    <!-- 激活指示器 - 左侧竖线 -->
                    <div
                      class="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-full transition-all duration-200"
                      :class="activeFaq === idx ? 'bg-indigo-500' : 'bg-transparent'"
                    />

                    <span
                      class="pr-4 text-sm leading-relaxed text-neutral-800 transition-colors duration-200 sm:text-base"
                      :class="
                        activeFaq === idx
                          ? 'font-semibold text-indigo-900'
                          : 'group-hover:text-neutral-900'
                      "
                    >
                      {{ faq.question }}
                    </span>

                    <!-- chevron 图标 -->
                    <ChevronDownIcon
                      class="h-5 w-5 shrink-0 text-neutral-400 transition-all duration-200"
                      :class="activeFaq === idx ? 'rotate-180 text-indigo-500' : 'group-hover:text-neutral-600'"
                      stroke-width="2"
                    />
                  </button>

                  <!-- 答案区（grid 展开动画） -->
                  <div
                    :id="`faq-panel-${idx}`"
                    role="tabpanel"
                    :aria-labelledby="`faq-tab-${idx}`"
                    class="grid transition-all duration-300 ease-in-out"
                    :class="
                      activeFaq === idx
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    "
                  >
                    <div class="overflow-hidden">
                      <div
                        class="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-neutral-600"
                      >
                        {{ faq.answer }}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="grid-border-divider" />

        <!-- 底部信息 -->
        <div class="grid-border-wrapper">
          <div class="grid-border-side grid-border-side-left" />
          <div class="grid-border-side grid-border-side-right" />

          <div class="grid-border-content content-footer px-4 sm:px-6 lg:px-8">
            <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">智言AI</span>
            <span class="w-px h-6 bg-neutral-200" />
            <span class="text-base sm:text-lg text-neutral-600 font-medium">更多问题？随时联系我们的客服团队</span>
          </div>
        </div>

        <!-- 底部边框行 -->
        <div class="grid-border-row" />
      </div>
    </section>
    
    <!-- CTA 底部行动召唤区域 -->
    <LandingCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Component } from 'vue'
import {
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'


// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config =
    type === 'coupon'
      ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
      : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

// 类型定义：核心特性
interface Feature {
  title: string
  desc: string
  icon: Component
  video: string
  points: { title: string; desc: string }[]
  activePoint: number
}

// 类型定义：优势
interface Advantage {
  title: string
  desc: string
  icon: Component
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

// SEO 元数据配置
useSeoMeta({
  title: '智言AI - 企业级 AI Agent 智能体构建平台',
  description:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。全方位赋能企业 AI 转型，打造智能高效的业务闭环。',
  keywords: 'AI Agent, 智能体, 企业级AI, AI应用平台, 智言AI, Workflow, RAG',
  ogTitle: '智言AI - 企业级 AI Agent 智能体构建平台',
  ogDescription:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。',
  ogType: 'website'
})

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features = ref<Feature[]>([
  {
    title: '全栈赋能',
    desc: '最新的大模型，丰富的资源库，提供 AI Agent 开发所需的全部核心技术。',
    icon: CubeIcon,
    video:
      'https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_5947ecf038587e21912f7a7f0c29723a.mp4',
    points: [
      { title: '多模型接入', desc: '支持 GPT-4、Claude、Gemini 等全球主流大模型' },
      { title: '知识库管理', desc: '强大的 RAG 检索增强，支持多种文档格式' },
      { title: '工作流编排', desc: '可视化拖拽，零代码构建复杂 AI 流程' }
    ],
    activePoint: 0
  },
  {
    title: '开箱即用',
    desc: '健全的应用模板和编排框架，用最低的成本开发最专业的 AI Agent。',
    icon: WrenchScrewdriverIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7a2291113013f873_1749556611819.mp4',
    points: [
      { title: '丰富模板', desc: '预置 50+ 行业场景模板，一键快速部署' },
      { title: '智能体市场', desc: '海量优质 Agent 应用，即装即用' },
      { title: '插件生态', desc: '丰富的工具插件，扩展无限可能' }
    ],
    activePoint: 0
  },
  {
    title: '安全可信',
    desc: '覆盖 Agent 开发全生命周期安全保障，满足企业级安全需求。',
    icon: PuzzlePieceIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d2dabbdbb1d7fbae_1765444399839.mp4',
    points: [
      { title: '私有化部署', desc: '数据本地化存储，完全自主可控' },
      { title: '权限管理', desc: '细粒度访问控制，保障数据安全' },
      { title: '审计日志', desc: '完整操作记录，合规可追溯' }
    ],
    activePoint: 0
  },
  {
    title: '全网发布',
    desc: '点击一下，全平台上线！APP、网页、小程序统统搞定。',
    icon: RocketLaunchIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58508b9898be7111_1749556627094.mp4',
    points: [
      { title: '多端适配', desc: '一次开发，自动适配 Web、iOS、Android' },
      { title: '一键发布', desc: '无需配置服务器，快速上线运营' },
      { title: '持续集成', desc: '自动化部署流程，版本迭代无忧' }
    ],
    activePoint: 0
  }
])

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    desc: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: CubeIcon
  },
  {
    title: '独特的 QA 结构',
    desc: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: SparklesIcon
  },
  {
    title: '可视化工作流',
    desc: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: ArrowsRightLeftIcon
  },
  {
    title: '无限扩展',
    desc: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: PuzzlePieceIcon
  },
  {
    title: '便于调试',
    desc: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: WrenchScrewdriverIcon
  },
  {
    title: '支持多种模型',
    desc: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: WrenchIcon
  }
]

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '什么是 AI Agent，它与普通聊天机器人有什么区别？',
    answer:
      'AI Agent不仅能进行对话，还能自主规划任务、使用工具并执行复杂操作。相比仅能被动回复的聊天机器人，Agent 具备更强的自主性与执行力，能真正协助您完成业务工作。'
  },
  {
    question: '我可以使用自己的企业数据训练 AI 吗？',
    answer:
      '可以。智言万象 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。'
  },
  {
    question: '构建一个 AI 应用需要编程基础吗？',
    answer:
      '完全不需要。智言万象 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。'
  },
  {
    question: '我的数据安全吗？会不会被用于模型训练？',
    answer:
      '您的数据绝对安全。智言万象 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。'
  },
  {
    question: '平台支持哪些大语言模型？',
    answer:
      '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。'
  }
]

// FAQ 展开/收起状态管理
const activeFaq = ref<number | null>(null)

/**
 * 切换 FAQ 展开状态
 * 使用索引控制当前展开的项，再次点击则收起
 * @param idx - 点击的 FAQ 索引
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}

/**
 * 处理 FAQ 键盘导航事件
 * @param event - 键盘事件对象
 * @param currentIndex - 当前按钮索引
 */
const handleFaqKeydown = (event: KeyboardEvent, currentIndex: number) => {
  const actions: Record<string, () => void> = {
    ArrowDown: () => currentIndex < faqs.length - 1 && toggleFaq(currentIndex + 1),
    ArrowUp: () => currentIndex > 0 && toggleFaq(currentIndex - 1),
    Home: () => toggleFaq(0),
    End: () => toggleFaq(faqs.length - 1)
  }

  const action = actions[event.key]
  if (action) {
    event.preventDefault()
    action()
  }
}

// 打字机效果相关
const texts = ['智言AI 领先的AI创作平台', '可视化 Workflow 编排', '超易用 AI 知识库', '创新 RAG 检索', '轻松构建强大 AI 应用']
const displayText = ref('')
const showCursor = ref(true)
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)

const typeWriter = () => {
  const currentText = texts[currentTextIndex.value] ?? ''
  const typingSpeed = isDeleting.value ? 30 : 75
  const pauseDuration = 1500

  if (isDeleting.value) {
    displayText.value = currentText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
  } else {
    displayText.value = currentText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
  }

  if (!isDeleting.value && currentCharIndex.value === currentText.length) {
    showCursor.value = true
    setTimeout(() => {
      isDeleting.value = true
      typeWriter()
    }, pauseDuration)
  } else if (isDeleting.value && currentCharIndex.value === 0) {
    isDeleting.value = false
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
    setTimeout(typeWriter, 500)
  } else {
    setTimeout(typeWriter, typingSpeed)
  }
}

onMounted(() => {
  // 启动打字机效果
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
/* 打字机光标闪烁动画 */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 0.8s infinite;
}

/* 网格边框系统已提取到 assets/css/grid-border.css */
</style>
