<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div class="absolute top-0 left-0 w-full h-[400px] md:h-[600px] bg-[url('/images/buidai.png')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>

    <!-- 动态流星雨背景 -->
    <div class="absolute inset-0 h-[600px] overflow-hidden pointer-events-none z-0">
      <div
        v-for="meteor in meteors"
        :key="meteor.id"
        class="absolute w-[2px] bg-linear-to-b from-transparent to-blue-400/80 opacity-0 meteor-animation rounded-full"
        :style="{
          left: meteor.left,
          top: meteor.top,
          height: meteor.length,
          animationDelay: meteor.delay,
          animationDuration: meteor.duration
        }"
      ></div>
    </div>

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 mb-8">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>BuidAI V4.6.8 strong release</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight min-h-[1.2em]">
          {{ displayedText.part1 }}<span v-if="(typingStatus === 'part1' || typingStatus === 'idle') && showCursor" class="inline-block align-baseline w-[3px] h-[0.8em] bg-neutral-900 animate-pulse ml-1"></span><span class="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700 block sm:inline">{{ displayedText.part2 }}<span v-if="typingStatus === 'part2' && showCursor" class="inline-block align-baseline w-[3px] h-[0.8em] bg-blue-600 animate-pulse ml-1"></span></span>{{ displayedText.part3 }}<span v-if="(typingStatus === 'part3' || typingStatus === 'done') && showCursor" class="inline-block align-baseline w-[3px] h-[0.8em] bg-neutral-900 animate-pulse ml-1"></span>
        </h1>

        <p class="text-base sm:text-xl text-neutral-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
         可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态+ 应用市场 = 轻松构建强大 AI 应用
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </button>
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation">
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </button>
        </div>
      </div>
    </section>

    <!-- 功能展示: 核心能力 -->
    <section class="py-20 md:py-32 bg-white overflow-hidden relative isolate">
      <!-- 背景网格装饰 -->
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-neutral-400/30 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="core-features-grid"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#core-features-grid)" />
      </svg>

      <div class="container mx-auto px-4">
        <!-- 标题区域 -->
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            全栈式 AI 开发能力
          </h2>
          <p class="text-lg sm:text-xl text-neutral-500 max-w-3xl mx-auto">
            从模型接入、知识库构建到商业化落地，提供开发者所需的一切工具与基础设施。
          </p>
        </div>

        <!-- 主体卡片容器 -->
        <div
          class="relative rounded-3xl overflow-hidden border border-neutral-200/50 shadow-2xl shadow-neutral-200/50 flex flex-col lg:flex-row bg-white min-h-[600px] isolate"
          data-aos="fade-up"
        >
          <!-- 左侧：功能导航列表 -->
          <div class="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-neutral-100 bg-neutral-50/30 p-4 lg:p-6 flex flex-col z-10">
            <div class="space-y-2 h-full overflow-y-auto custom-scrollbar">
              <button
                v-for="(feature, index) in features"
                :key="feature.title"
                @click="activeFeatureIndex = index"
                @mouseenter="activeFeatureIndex = index"
                class="group w-full flex flex-col text-left px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden outline-none"
                :class="activeFeatureIndex === index ? 'bg-white shadow-sm ring-1 ring-neutral-200' : 'hover:bg-neutral-100/80'"
              >
                <!-- 激活指示条 -->
                <div
                  class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#6E58FF] rounded-r-full transition-all duration-300"
                  :class="activeFeatureIndex === index ? 'opacity-100' : 'opacity-0'"
                ></div>

                <div class="flex gap-4 items-center">
                  <div
                    class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0"
                    :class="activeFeatureIndex === index ? 'bg-[#6E58FF] text-white' : 'bg-white border border-neutral-200 text-neutral-400 group-hover:text-neutral-600'"
                  >
                    <component :is="feature.icon" class="w-5 h-5" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span
                      class="text-base font-bold transition-colors block"
                      :class="activeFeatureIndex === index ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-900'"
                    >
                      {{ feature.title }}
                    </span>
                    <p
                      class="text-xs text-neutral-400 truncate mt-0.5"
                      :class="activeFeatureIndex === index ? 'text-neutral-500' : ''"
                    >
                      {{ feature.desc }}
                    </p>
                  </div>

                  <!-- 箭头 -->
                  <ChevronRightIcon
                    class="w-4 h-4 text-neutral-400 transition-all duration-300 opacity-0 -translate-x-2"
                    :class="activeFeatureIndex === index ? 'opacity-100 translate-x-0' : ''"
                  />
                </div>
              </button>
            </div>
          </div>

          <!-- 右侧：预览图 (浏览器窗口样式) -->
          <div class="flex-1 relative flex flex-col bg-white z-0 overflow-hidden">
             <!-- 背景光晕装饰 -->
            <div class="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>
            <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply"></div>

            <!-- 顶部浏览器栏装饰 -->
            <div class="h-14 border-b border-neutral-100 flex items-center px-6 gap-3 shrink-0 bg-white/80 backdrop-blur-md z-20">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-neutral-200"></div>
                <div class="w-3 h-3 rounded-full bg-neutral-200"></div>
                <div class="w-3 h-3 rounded-full bg-neutral-200"></div>
              </div>
              <!-- 模拟地址栏 -->
               <div class="ml-4 flex-1 max-w-md h-8 bg-neutral-50 rounded-lg border border-neutral-100 flex items-center px-4 text-xs text-neutral-400 font-mono">
                  https://buidai.com/preview/{{ currentFeature?.title ? encodeURIComponent(currentFeature.title) : '' }}
                </div>
            </div>

            <!-- 图片切换区域 -->
            <div class="relative flex-1 p-8 sm:p-12 flex items-center justify-center overflow-hidden">
               <transition
                mode="out-in"
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 scale-95 blur-sm"
                enter-to-class="opacity-100 scale-100 blur-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 scale-100 blur-0"
                leave-to-class="opacity-0 scale-105 blur-sm"
              >
                <img
                  v-if="currentFeature"
                  :key="activeFeatureIndex"
                  :src="currentFeature.image"
                  :alt="currentFeature.title"
                  class="w-full h-full object-contain drop-shadow-2xl"
                />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 平台优势 -->
    <section class="py-16 md:py-24 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">平台核心优势</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">构建在先进架构之上的企业级 AI 解决方案，助力企业快速落地 AI 应用</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UPageCard
            v-for="(item, index) in advantages"
            :key="item.title"
            v-bind="item"
          >
            <template #image v-if="item.image">
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

    <!-- 功能部分: AI赋能企业通用场景 -->
    <section class="py-12 lg:py-20 bg-neutral-50/50">
      <div class="container mx-auto px-4">
        <div data-aos="fade-up" data-aos-offset="5" data-aos-delay="0" data-aos-duration="600">
          <h2 class="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-[#0F0F12]">AI 赋能企业通用场景</h2>
        </div>

        <div class="flex flex-col gap-8 lg:gap-0 relative w-full pb-8 md:pb-12 lg:pb-16">
          <div
            v-for="(scenario, idx) in scenarios"
            :key="scenario.title"
            class="scenario-card rounded-2xl p-8 md:p-12 lg:p-16 transition-transform duration-500 overflow-hidden group bg-white border border-[rgba(68,83,130,0.15)]"
            :style="getScenarioCardStyle(idx)"
            data-aos="fade-up"
            data-aos-offset="50"
            :data-aos-delay="idx * 100"
            data-aos-duration="800"
            data-aos-anchor-placement="top-center"
          >
            <div class="absolute inset-0 pointer-events-none opacity-80" :class="scenario.cardGradientClass"></div>

            <div
              class="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between relative z-10"
              :class="idx % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- 左侧内容 -->
              <div class="w-full lg:w-5/12 flex flex-col gap-8">
                <!-- 图标与标题 -->
                <div class="flex items-center gap-5">
                   <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center" :class="scenario.iconBg">
                     <component :is="scenario.icon" class="w-7 h-7 md:w-9 md:h-9" />
                   </div>
                   <h3 class="text-2xl md:text-3xl font-bold text-neutral-900">{{ scenario.title }}</h3>
                </div>

                <!-- 列表 -->
                <ul class="space-y-4">
                  <li v-for="(item, i) in scenario.items" :key="i" class="flex items-start gap-3 text-neutral-600 text-base md:text-lg leading-relaxed">
                    <CheckCircleIcon class="w-6 h-6 text-ui-primary shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </li>
                </ul>

                <!-- 按钮与序号 -->
                <div class="flex items-center justify-between mt-6 pt-6 border-t border-[rgba(68,83,130,0.15)]">
                  <button
                    type="button"
                    class="group px-8 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors active:scale-95 flex items-center gap-2"
                    @click="openScenarioOverlay(idx)"
                  >
                    立即体验
                    <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span class="text-6xl font-black text-neutral-100 select-none tracking-tighter">{{ scenario.index }}</span>
                </div>
              </div>

              <!-- 右侧图像 -->
              <div class="w-full lg:w-7/12">
                <div class="relative h-[280px] sm:h-[340px] md:h-[420px]">
                  <div class="absolute inset-0 w-full h-full overflow-hidden rounded-3xl bg-white">
                    <img
                      :src="scenario.image"
                      :alt="scenario.title"
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-contain"
                    />
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
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-neutral-400/30 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="why-choose-us-grid"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#why-choose-us-grid)" />
      </svg>
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">为什么选择 BuidAI？</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">从个人开发者探索到企业级部署，BuidAI 提供强大的工作流引擎与多模型集成能力</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UPageCard
            v-for="(item, index) in whyChooseUs"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </section>


    <!-- 合作伙伴 -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <UPageLogos
          title="Trusted by the best front-end teams"
          marquee
          :items="[
            'i-simple-icons-github',
            'i-simple-icons-discord',
            'i-simple-icons-x',
            'i-simple-icons-instagram',
            'i-simple-icons-linkedin',
            'i-simple-icons-facebook'
          ]"
        />
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="py-16 md:py-24 bg-neutral-50/50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">BuidAI 用户评价</h2>
          <p class="text-neutral-500 text-lg leading-relaxed">从个人开发者探索到企业级部署，BuidAI 提供强大的工作流引擎与多模型集成能力</p>
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

    <!-- 开源部署 -->
    <div class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <UPageSection
          title="开源部署"
          description="面向 AI 开发者 · AI 创业者 · 先进组织打造的企业级开源智能体搭建平台。它拥有丰富的 AI 原生开发组件，简单易用，插件扩展无限可能。"
          icon="i-lucide-box"
          orientation="horizontal"
          :features="openSourceFeatures"
          :links="openSourceLinks"
          :ui="{
            container: '!px-0 !max-w-none',
            title: 'text-3xl md:text-4xl font-bold text-neutral-900',
            description: 'text-lg text-neutral-500 mt-4'
          }"
        >
          <img
            src="/blog/blog.webp"
            width="100%"
            height="100%"
            alt="开源部署示意图"
            class="w-full rounded-xl shadow-2xl ring-1 ring-neutral-900/10"
          />
        </UPageSection>
      </div>
    </div>

    <!-- 常见问题 -->
    <section class="py-12 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full text-center lg:text-left">
            <h2 class="text-2xl md:text-4xl font-bold text-[#0F0F12] mb-4">常见问题</h2>
            <p class="text-neutral-500 text-sm md:text-base">关于 BuidAI 的常见疑问解答</p>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="faq.question"
              class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
            >
              <button
                @click="toggleFaq(idx)"
                class="w-full flex items-start justify-between p-6 text-left focus:outline-none hover:bg-neutral-50 active:bg-neutral-100 transition-colors touch-manipulation min-h-[44px]"
              >
                <span class="text-base md:text-lg font-medium text-[#0F0F12] pr-4 md:pr-8">{{ faq.question }}</span>
                <span class="text-neutral-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-45': activeFaq === idx }">
                  <PlusIcon class="w-5 h-5" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-sm md:text-[15px] text-[#5A5E6A] leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="py-16 md:py-24 relative overflow-hidden bg-white border-t border-neutral-100">
      <!-- 底部渐变背景 -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-50/50 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <div class="text-center lg:text-left flex-1 max-w-2xl">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 tracking-tight leading-tight">
              现在开始构建您的 <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">AI Agent</span>
            </h2>
            <p class="text-lg md:text-xl text-neutral-500 leading-relaxed">
              BuidAI 提供企业级 AI 基础设施，让智能体构建触手可及，助力业务数智化升级。
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <button class="w-full sm:w-auto min-w-[160px] h-[56px] text-lg font-semibold px-8 rounded-full bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center group">
              立即使用
              <ArrowRightIcon class="w-5 h-5 ml-2 text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <button class="w-full sm:w-auto min-w-[160px] h-[56px] text-lg font-semibold px-8 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-lg shadow-neutral-200 flex items-center justify-center group">
              开始构建
              <RocketLaunchIcon class="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>


      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="overlayScenario"
        class="fixed inset-0 z-1000 bg-black/50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        @click.self="closeScenarioOverlay"
      >
        <div class="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden">
          <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" :class="overlayScenario.iconBg">
                <component :is="overlayScenario.icon" class="w-6 h-6" />
              </div>
              <div class="min-w-0">
                <div class="text-sm text-neutral-500">场景体验</div>
                <div class="text-lg font-semibold text-neutral-900 truncate">{{ overlayScenario.title }}</div>
              </div>
            </div>

            <button
              type="button"
              class="w-10 h-10 inline-flex items-center justify-center rounded-xl hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
              @click="closeScenarioOverlay"
              aria-label="关闭"
            >
              <XMarkIcon class="w-6 h-6 text-neutral-500" />
            </button>
          </div>

          <div class="p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
              <div class="space-y-4">
                <ul class="space-y-3">
                  <li
                    v-for="(item, i) in overlayScenario.items"
                    :key="i"
                    class="flex items-start gap-3 text-neutral-600 text-base leading-relaxed"
                  >
                    <CheckCircleIcon class="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                    <span>{{ item }}</span>
                  </li>
                </ul>

                <div class="pt-4 border-t border-neutral-100 flex flex-wrap gap-3">
                  <button
                    type="button"
                    class="px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
                    @click="closeScenarioOverlay"
                  >
                    立即开始
                  </button>
                  <button
                    type="button"
                    class="px-5 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors"
                    @click="closeScenarioOverlay"
                  >
                    返回
                  </button>
                </div>
              </div>

              <div class="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-neutral-900/5 bg-white">
                <div class="h-8 bg-neutral-50 flex items-center px-4 gap-2 border-b border-neutral-200">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <img :src="overlayScenario.image" :alt="overlayScenario.title" loading="lazy" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch, reactive } from 'vue'
import type { Component } from 'vue'
import {
  CheckCircleIcon,
  DocumentTextIcon,
  CommandLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  PlusIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  CpuChipIcon,
  CreditCardIcon
} from '@heroicons/vue/24/outline'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// 打字机效果状态
const typewriterText = {
  part1: '一站式',
  part2: '企业级AI ',
  part3: '轻松构建'
}

const displayedText = reactive({
  part1: '一站式',
  part2: '',
  part3: ''
})

const typingStatus = ref<'idle' | 'part1' | 'part2' | 'part3' | 'done'>('idle')
const showCursor = ref(true)

// 流星雨数据
const meteors = ref<{ id: number; left: string; top: string; length: string; delay: string; duration: string }[]>([])

// 光标闪烁
let cursorInterval: any

onMounted(() => {
  // 生成流星数据
  meteors.value = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 120 - 10}%`, // -10% 到 110% (覆盖更宽的顶部区域)
    top: `${Math.random() * 100 - 100}%`, // -100% 到 0% (从屏幕上方开始)
    length: `${Math.random() * 30 + 15}px`, // 短雨滴
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 5 + 8}s` // 极慢速 (8-13s)
  }))

  AOS.init({
    duration: 600,
    once: true,
    mirror: false,
    offset: 5,
    anchorPlacement: 'top-bottom'
  })

  cursorInterval = setInterval(() => {
    if (typingStatus.value !== 'done') {
      showCursor.value = !showCursor.value
    }
  }, 500)

  startTypewriter()
})

const startTypewriter = async () => {
  // 初始延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  typingStatus.value = 'part2'
  // Part 2
  for (let i = 1; i <= typewriterText.part2.length; i++) {
    displayedText.part2 = typewriterText.part2.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, 150))
  }

  typingStatus.value = 'part3'
  // Part 3
  for (let i = 1; i <= typewriterText.part3.length; i++) {
    displayedText.part3 = typewriterText.part3.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, 150))
  }

  typingStatus.value = 'done'
  showCursor.value = false
}

onBeforeUnmount(() => {
  if (cursorInterval) clearInterval(cursorInterval)
})

// 类型定义：功能特性
interface Feature {
  title: string
  desc: string
  icon: Component
  image: string
}

// 类型定义：场景
interface Scenario {
  title: string
  items: string[]
  icon: Component
  iconBg: string
  cardGradientClass: string
  image: string
  index: string
}

// 类型定义：优势
interface Advantage {
  title: string
  description: string
  icon: string
  class?: string
  variant?: 'solid' | 'outline' | 'soft'
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  image?: {
    path: string
    width: number
    height: number
  }
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

// SEO 元数据配置
useSeoMeta({
  title: '必定AI - 企业级开源AI系统源码 | 私有化部署AI Agent平台',
  description: 'BuidAI(必定AI)提供全套开源AI系统源码，集成智能体Agent、RAG知识库、多模型管理(LLM)与工作流编排。基于Nuxt 3 + Vue 3开发，支持一键私有化部署，免费下载源代码，是企业构建专属AI中台的最佳选择。'
})

useHead({
  meta: [
    { name: 'keywords', content: '开源AI系统源码,AI系统源代码下载,企业级AI源码,AI Agent开发平台,私有化部署AI,RAG知识库源码,LLM大模型管理系统,Nuxt3 AI项目,Vue3 AI后台模板' }
  ]
})

/**
 * 核心功能列表
 */
const features: Feature[] = [
  {
    title: 'AI对话',
    desc: '基于 LLM 模型进行对话、文本生成，支持多模态模型调用',
    icon: ChatBubbleLeftRightIcon,
    image: '/images/code1.png'
  },
  {
    title: 'AI智能体',
    desc: '支持创建具备记忆、目标和工具使用能力的智能体，实现自主任务执行',
    icon: CpuChipIcon,
    image: '/images/code2.png'
  },
  {
    title: '知识库',
    desc: '通过文档构建知识库，支持向量检索与RAG增强生成',
    icon: BookOpenIcon,
    image: '/images/code3.png'
  },
  {
    title: 'MCP调用',
    desc: '支持以 SSE、StreamableHTTP 方式调用MCP工具',
    icon: CommandLineIcon,
    image: '/images/code4.png'
  },
  {
    title: '模型管理',
    desc: '支持主流大模型集成，统一API规范',
    icon: CubeIcon,
    image: '/images/code1.png'
  },
  {
    title: '拓展机制',
    desc: '通过安装拓展丰富系统功能和AI能力',
    icon: PuzzlePieceIcon,
    image: '/images/code2.png'
  },
  {
    title: '充值计费',
    desc: '内置会员管理、计费管理、支付功能，开箱即用',
    icon: CreditCardIcon,
    image: '/images/code3.png'
  }
]

const activeFeatureIndex = ref(0)
const currentFeature = computed(() => features[activeFeatureIndex.value] ?? features[0])

const openSourceFeatures = [
  {
    title: 'AI原生内核',
    description: '底层架构专为 AI Agent 设计，原生支持 LLM 调用、记忆管理与工具编排。',
    icon: 'i-lucide-cpu'
  },
  {
    title: '组织管理',
    description: '完善的多租户与 RBAC 权限体系，适配企业级复杂的组织架构与协作需求。',
    icon: 'i-lucide-building-2'
  },
  {
    title: '二次开发',
    description: '基于 Nuxt 模块化架构，提供丰富的 Hook 与 API，轻松扩展业务逻辑。',
    icon: 'i-lucide-code-2'
  },
  {
    title: '自定义LOGO',
    description: '支持白标化部署，从 Logo 到配色方案均可一键配置，打造专属品牌形象。',
    icon: 'i-lucide-palette'
  }
]

const openSourceLinks = [
  {
    label: '查看 Demo',
    to: 'https://demo.buidai.com',
    target: '_blank',
    color: 'neutral' as const,
    variant: 'solid' as const,
    trailingIcon: 'i-lucide-external-link'
  },
  {
    label: 'GitHub 仓库',
    to: 'https://github.com/buidai/buidai',
    target: '_blank',
    color: 'neutral' as const,
    variant: 'ghost' as const,
    trailingIcon: 'i-simple-icons-github'
  }
]

/**
 * AI 赋能场景数据列表
 */
const scenarios: Scenario[] = [
  {
    title: 'AI 客服',
    items: [
      '基于 QA 对的语境和语意的训练',
      '基于企业文档自动理解、标注的训练',
      '支持API形式接入主流客服系统'
    ],
    icon: ChatBubbleLeftRightIcon,
    iconBg: 'bg-primary-50 text-primary-600',
    cardGradientClass: 'bg-linear-to-br from-sky-50 to-white',
    image: '/images/banner1.webp',
    index: '01'
  },
  {
    title: '多 AI 协同',
    items: [
      '通过 AI 之间的分工合作，精准、稳定地解决复杂任务'
    ],
    icon: UserGroupIcon,
    iconBg: 'bg-blue-50 text-blue-600',
    cardGradientClass: 'bg-linear-to-br from-indigo-50 to-white',
    image: '/images/banner2.webp',
    index: '02'
  },
  {
    title: 'AI Wiki 知识库',
    items: [
      '一键即可将AI技术与企业知识库相连，全面支持各类文档格式，简化信息获取过程',
      '轻松通过API将AI融入企业系统，提升内部知识检索效率，实现信息智能化管理'
    ],
    icon: BookOpenIcon,
    iconBg: 'bg-indigo-50 text-indigo-600',
    cardGradientClass: 'bg-linear-to-br from-emerald-50 to-white',
    image: '/images/banner2.webp',
    index: '03'
  },
  {
    title: '提示词优化专家',
    items: [
      '一键操作，轻松输出高质量提示词，提升AI交互效果',
      '告别劣质输入，确保AI输出始终满足您的期待'
    ],
    icon: SparklesIcon,
    iconBg: 'bg-purple-50 text-purple-600',
    cardGradientClass: 'bg-linear-to-br from-fuchsia-50 to-white',
    image: '/images/banner3.webp',
    index: '04'
  }
]

/**
 * 生成场景卡片的样式对象（顶部偏移与透视缩放）
 * @param idx - 场景索引
 * @returns 场景卡片的内联样式对象
 */
const getScenarioCardStyle = (idx: number): Record<string, string | number> => {
  const baseTop = 90
  const stepTop = 40
  const minScale = 0.99
  const maxScale = 1
  const denom = Math.max(scenarios.length - 1, 1)
  const scale = minScale + ((maxScale - minScale) * idx) / denom

  return {
    '--card-top': `${baseTop + idx * stepTop}px`,
    transform: `translate3d(0px, 0px, 0px) scale(${scale}, ${scale})`,
    transformOrigin: 'top center',
    zIndex: idx + 1
  }
}

const overlayScenarioIndex = ref<number | null>(null)

const overlayScenario = computed<Scenario | null>(() => {
  if (overlayScenarioIndex.value === null) return null
  return scenarios[overlayScenarioIndex.value] ?? null
})

/**
 * 打开场景体验覆盖层
 * @param idx - 场景索引
 * @returns void
 */
const openScenarioOverlay = (idx: number): void => {
  overlayScenarioIndex.value = idx
}

/**
 * 关闭场景体验覆盖层
 * @returns void
 */
const closeScenarioOverlay = (): void => {
  overlayScenarioIndex.value = null
}

/**
 * 处理覆盖层键盘事件（按 Esc 关闭）
 * @param event - 键盘事件
 * @returns void
 */
const handleOverlayKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') closeScenarioOverlay()
}

watch(overlayScenarioIndex, (next, prev) => {
  if (!import.meta.client) return

  document.body.style.overflow = next === null ? '' : 'hidden'

  if (prev !== null) window.removeEventListener('keydown', handleOverlayKeydown)
  if (next !== null) window.addEventListener('keydown', handleOverlayKeydown)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleOverlayKeydown)
})

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    description: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: 'i-lucide-box',
    class: 'lg:col-span-2',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/color-palette',
      width: 363,
      height: 152
    },
    orientation: 'horizontal'
  },
  {
    title: '独特的 QA 结构',
    description: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: 'i-lucide-sparkles',
    variant: 'soft'
  },
  {
    title: '可视化工作流',
    description: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: 'i-lucide-git-branch',
    variant: 'soft'
  },
  {
    title: '无限扩展',
    description: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: 'i-lucide-puzzle',
    class: 'lg:col-span-2',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/icon-library',
      width: 362,
      height: 184
    },
    orientation: 'horizontal',
    reverse: true
  },
  {
    title: '便于调试',
    description: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: 'i-lucide-bug'
  },
  {
    title: '支持多种模型',
    description: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: 'i-lucide-server'
  },
  {
    title: '对接支付渠道',
    description:
      'BuildingAI 已打通微信与支付宝渠道，通过设置会员套餐，用户充值使用 AI 功能，实现产品商业化完整闭环。',
    icon: 'i-lucide-credit-card',
    variant: 'soft'
  }
]

/**
 * 为什么选择我们数据列表
 */
const whyChooseUs = [
  {
    title: '完全开源',
    description: '基于 Apache-2.0 协议，支持私有部署和自定义二次开发',
    icon: 'i-lucide-lock-open',
    class: 'lg:row-span-2'
  },
  {
    title: '极致灵活',
    description: '流程、组件、模型都可自由组合，满足各类 AI 应用需求',
    icon: 'i-lucide-puzzle',
    class: 'lg:col-span-2'
  },
  {
    title: '上手快速',
    description: '无需写代码也能搭建复杂流程，技术人员可嵌入脚本模块灵活控制',
    icon: 'i-lucide-zap'
  },
  {
    title: '社区驱动',
    description: '不断壮大的开发者生态，众多插件和社区案例持续涌现',
    icon: 'i-lucide-users'
  }
]



/**
 * 用户评价数据列表
 */
const testimonials = [
  {
    user: {
      name: '李明',
      description: 'Java架构师 @某券商科技部',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=李明', alt: '李明' }
    },
    quote: 'Agents-Flex框架让风控Bot开发效率提升300%，@Function注解直接对接内部交易系统，插件热部署避免停机升级'
  },
  {
    user: {
      name: '张悦',
      description: '全栈工程师 @智慧政务SaaS团队',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张悦', alt: '张悦' }
    },
    quote: '工作流编排API无缝嵌入省公积金平台，BuidAI引擎承压每日20万笔审批流，异常自愈机制减少运维告警80%'
  },
  {
    user: {
      name: '陈涛',
      description: 'Gitee贡献者 @BuidAI社区',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=陈涛', alt: '陈涛' }
    },
    quote: 'RBAC权限体系复用企业AD组策略，部门级知识库隔离配置从3天缩短至1小时'
  },
  {
    user: {
      name: '王振华',
      description: '信息中心主任 @省级医保局',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王振华', alt: '王振华' }
    },
    quote: 'RAG知识库阻断23次过期政策误用，文件时效性预警+多级权限审计，基层咨询准确率跃至98%'
  },
  {
    user: {
      name: '周敏',
      description: '技术总监 @跨境物流集团',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=周敏', alt: '周敏' }
    },
    quote: 'Bot自动处理87%清关异常工单，HTTP节点直连海关系统，人工干预成本下降220万/年'
  },
  {
    user: {
      name: '赵立峰',
      description: '风控副总裁 @城商行',
      avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=赵立峰', alt: '赵立峰' }
    },
    quote: '数据中枢字段级脱敏满足金监新规，客户身份证/银行卡号自动掩码，审计合规率100%'
  }
]

/**
 * 用户评价分列数据
 * 用于实现瀑布流滚动效果，将评价分配到3列中
 */
const testimonialColumns = computed(() => {
  const columns: (typeof testimonials)[] = [[], [], []]
  testimonials.forEach((testimonial, index) => {
    columns[index % 3]!.push(testimonial)
  })
  return columns.map(col => [...col, ...col, ...col])
})

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '开源版和商业版有什么区别？',
    answer: '开源版遵循 Apache 2.0 协议，您可以免费用于商业项目。商业版提供更专业的技术支持和企业级特性。'
  },
  {
    question: 'BuidAI 私有部署对服务器配置有什么要求？',
    answer: '基础运行建议 2核 4G 内存以上。如果需要运行本地大模型，则需要高性能 GPU 服务器。'
  },
  {
    question: 'BuidAI 可以接入微信/飞书/钉钉吗？',
    answer: '可以。BuidAI 提供了标准的 API 接口，可以方便地接入各类 IM 工具和第三方应用。'
  },
  {
    question: '如何获取 API Key？',
    answer: '在控制台的应用设置中，您可以创建和管理 API Key。请妥善保管您的 Key。'
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
</script>

<style scoped>
.scenario-card {
  position: sticky;
  top: var(--card-top);
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 1023px) {
  .scenario-card {
    position: relative;
    top: auto;
  }
}

.stroke-gray-400\/30 {
  stroke: color-mix(in oklab, var(--color-gray-400) 30%, transparent);
}

@keyframes meteor {
  0% {
    transform: translate(0, 0) rotate(20deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(-20vw, 120vh) rotate(20deg);
    opacity: 0;
  }
}

.meteor-animation {
  animation-name: meteor;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
