<template>
  <div class="min-h-screen bg-[#F3F4F6] font-sans selection:bg-[#6E58FF] selection:text-white">
    <!-- 1. 顶部 Hero 区域 -->
    <section class="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden text-center">
      <div class="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <!-- 徽章 -->
        <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-sm">
           <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E58FF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#6E58FF]"></span>
          </span>
          <span class="text-xs font-medium text-gray-600">必定AI旗下 AI 平台</span>
        </div>

        <!-- 标题 -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0F0F12] tracking-tight leading-[1.2] md:leading-[1.15] mb-6">
          必定AI你的 <span class="text-[#6E58FF] block sm:inline">AI 办公空间</span>
        </h1>

        <!-- 副标题 -->
        <p class="text-base sm:text-lg text-[#5A5E6A] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          必定AI旗下新一代 AI 办公平台，让创作与协作更高效
        </p>

        <!-- 行动号召按钮 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full sm:w-auto px-4 sm:px-0">
          <button class="w-full sm:w-auto group relative px-8 py-3.5 rounded-full bg-linear-to-r from-[#6E58FF] to-[#7A42FF] text-white font-semibold text-[15px] shadow-[0_8px_20px_-4px_rgba(110,88,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(110,88,255,0.5)] active:scale-95 transition-all duration-300 touch-manipulation">
            立即体验
            <span class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </button>

          <div class="relative group w-full sm:w-auto">
            <button class="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-white border border-[#E5E6F0] text-[#1D2129] font-medium text-[15px] hover:border-[#6E58FF] hover:text-[#6E58FF] hover:bg-[#F9F8FF] active:scale-95 transition-all duration-300 flex items-center gap-2 touch-manipulation">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L12 3M12 16L7 11M12 16L17 11M6 21H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              下载客户端
            </button>
            <!-- 二维码提示框（移动端隐藏） -->
             <div class="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 p-3 bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none">
                <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                <div class="w-full aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden relative">
                   <!-- 二维码占位符 -->
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR" loading="lazy" class="w-full h-full object-cover mix-blend-multiply" />
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
                      <div class="h-2 w-2/3 bg-gray-100 rounded"></div>
                      <div class="h-2 w-full bg-gray-50 rounded"></div>
                   </div>
                   <button class="w-full py-2 bg-gray-50 rounded-lg text-xs text-gray-600 font-medium active:bg-gray-200 transition-colors">查看详情</button>
                </div>
             </div>
             <!-- 左侧卡片（内层） -->
             <div class="absolute left-1/2 -translate-x-full md:-translate-x-[110%] bottom-0 w-[180px] h-[200px] md:w-[320px] md:h-[340px] bg-[#1E1E2E] rounded-2xl shadow-xl z-20 transform -rotate-6 hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden border border-gray-800">
                 <div class="p-4 md:p-6 h-full flex flex-col text-white">
                    <div class="text-2xl md:text-4xl font-bold tracking-tighter text-[#6E58FF] mb-1 md:mb-2">CODE</div>
                    <div class="text-sm md:text-xl font-light opacity-80">EVENT 2025</div>
                    <div class="mt-auto h-px w-full bg-gray-700"></div>
                 </div>
             </div>
             <!-- 左侧卡片（外层） -->
             <div class="hidden lg:block absolute left-1/2 -translate-x-[180%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-white rounded-2xl shadow-lg z-10 transform -rotate-12 hover:rotate-[-14deg] transition-transform duration-500 border border-gray-200 overflow-hidden">
                 <div class="p-5 h-full relative bg-gray-50">
                    <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div class="space-y-3 mt-8">
                       <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                       <div class="h-2 w-1/2 bg-gray-200 rounded"></div>
                       <div class="h-2 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div class="absolute bottom-5 left-5 right-5 h-24 bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex items-center gap-3">
                       <div class="w-10 h-10 rounded-full bg-purple-100 shrink-0"></div>
                       <div class="flex-1 space-y-1">
                          <div class="h-1.5 w-2/3 bg-gray-200 rounded"></div>
                          <div class="h-1.5 w-1/3 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                 </div>
             </div>

             <!-- 右侧卡片（内层） -->
             <div class="absolute left-1/2 translate-x-[0%] md:translate-x-[10%] bottom-0 w-[180px] h-[200px] md:w-[320px] md:h-[340px] bg-linear-to-br from-[#E0E7FF] to-[#F3E8FF] rounded-2xl shadow-xl z-20 transform rotate-6 hover:rotate-[8deg] transition-transform duration-500 border border-white/50">
                 <div class="p-4 md:p-6 h-full relative">
                    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <div class="relative z-10 text-2xl md:text-3xl font-script text-indigo-900">f(x)</div>
                 </div>
             </div>
             <!-- 右侧卡片（外层） -->
             <div class="hidden lg:block absolute left-1/2 translate-x-[80%] bottom-4 w-[220px] md:w-[300px] h-[240px] md:h-[320px] bg-[#0F0F12] rounded-2xl shadow-lg z-10 transform rotate-12 hover:rotate-14 transition-transform duration-500 border border-gray-800 overflow-hidden">
                 <div class="p-5 h-full flex flex-col">
                    <div class="flex items-center justify-between mb-6">
                       <div class="w-8 h-8 rounded-lg bg-gray-800"></div>
                       <div class="text-xs text-gray-500">AI Analysis</div>
                    </div>
                    <div class="flex-1 flex items-end justify-between gap-2 px-2">
                       <div class="w-1/5 h-[40%] bg-purple-900/50 rounded-t"></div>
                       <div class="w-1/5 h-[70%] bg-purple-800/50 rounded-t"></div>
                       <div class="w-1/5 h-[50%] bg-purple-700/50 rounded-t"></div>
                       <div class="w-1/5 h-[90%] bg-[#6E58FF] rounded-t shadow-[0_0_15px_rgba(110,88,255,0.5)]"></div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. 特征网格部分 -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- 部分标题 -->
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-[#0F0F12] mb-8 leading-tight">全能 AI 办公助手，<br class="md:hidden" />释放你的创作生产力</h2>

          <!-- 选项卡 -->
          <div class="inline-flex items-center p-1.5 bg-[#F5F6FA] rounded-full overflow-x-auto max-w-full touch-manipulation no-scrollbar">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="currentTab = tab"
              :class="[
                'px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0',
                currentTab === tab
                  ? 'bg-white text-[#6E58FF] shadow-sm'
                  : 'text-[#5A5E6A] hover:text-[#0F0F12]'
              ]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <!-- 网格布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in filteredFeatures" :key="index" class="group relative bg-[#F9FAFB] rounded-2xl overflow-hidden border border-[#EAECF2] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#6E58FF]/30 active:scale-[0.99] transition-all duration-300 h-[260px] md:h-[280px] cursor-pointer touch-manipulation">
             <div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-[#0F0F12] shadow-sm border border-gray-100">
                {{ item.tag }}
             </div>
             <div class="h-full w-full flex flex-col">
                <!-- 卡片视觉内容 -->
                <div class="flex-1 relative overflow-hidden flex items-center justify-center p-6" :class="item.bgClass">
                   <component :is="item.icon" v-if="item.icon" class="w-16 h-16 text-[#6E58FF] opacity-80" />
                   <div v-if="item.customVisual" v-html="item.customVisual"></div>
                </div>
                <!-- 卡片底部信息 -->
                <div class="h-16 bg-white border-t border-gray-100 px-5 flex items-center justify-between">
                   <span class="font-bold text-[#0F0F12]">{{ item.title }}</span>
                   <span class="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center group-hover:bg-[#6E58FF] group-hover:text-white transition-colors">
                      <ArrowRightIcon class="w-4 h-4" />
                   </span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>




    <!-- 新增卡片网格区域 -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4 max-w-[1440px]">
        <div class="flex flex-col gap-4">
          <div v-for="(row, rowIndex) in solutionRows" :key="rowIndex" class="flex flex-col md:flex-row gap-4 w-full">
            <div
              v-for="(card, cardIndex) in row.cards"
              :key="cardIndex"
              class="group relative w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 will-change-transform"
              :class="[card.widthClass, card.bgClass]"
            >
               <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10" :class="card.textClass || 'text-gray-900'">
                  <div>
                     <h3 class="text-xl md:text-2xl font-medium mb-2" v-html="card.title"></h3>
                  </div>

                  <!-- 视觉占位符区域 -->

                  <!-- PPT Visual -->
                  <div v-if="card.visual === 'ppt'" class="absolute right-4 bottom-4 md:right-10 md:bottom-8 transform rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 will-change-transform">
                      <div class="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg w-32 md:w-48 border border-white/50">
                          <div class="text-[#6E58FF] font-serif italic text-2xl md:text-3xl text-center">Portfolio</div>
                      </div>
                  </div>

                  <!-- Design Visual -->
                  <div v-if="card.visual === 'design'" class="absolute inset-0 overflow-hidden pointer-events-none">
                      <div class="absolute top-0 right-0 w-full h-full" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px; opacity: 0.5;"></div>
                      <div class="absolute right-8 bottom-16 w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 will-change-transform">
                         <div class="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center text-[10px] text-purple-600">00</div>
                      </div>
                      <div class="absolute right-20 bottom-24 w-24 h-24 rounded-full border border-gray-400/30"></div>
                  </div>

                  <!-- Writing Visual -->
                  <div v-if="card.visual === 'writing'" class="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white rounded-tl-xl p-4 shadow-sm opacity-80 transition-transform duration-500 group-hover:translate-y-2 will-change-transform">
                      <div class="text-[10px] text-gray-400 mb-2">TIME.9.26 - 10.28</div>
                      <div class="space-y-1.5">
                          <div class="h-2 w-full bg-gray-200 rounded"></div>
                          <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                      </div>
                      <div class="mt-6 font-mono text-xl text-gray-800 leading-none">COZE<br/>EVENTS<br/>2025...</div>
                  </div>

                  <!-- Excel Visual -->
                  <div v-if="card.visual === 'excel'" class="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg class="w-full h-full opacity-50" viewBox="0 0 200 100" preserveAspectRatio="none">
                          <path d="M0,80 Q50,90 100,50 T200,20" fill="none" stroke="#6E58FF" stroke-width="1.5" stroke-dasharray="4 4" />
                          <path d="M0,80 Q50,90 100,50 T200,20" fill="none" stroke="#6E58FF" stroke-width="1.5" class="opacity-30 translate-y-2" />
                      </svg>
                      <div class="absolute right-10 top-1/2 text-7xl font-serif italic text-[#6E58FF]/20 transition-transform duration-500 group-hover:scale-110 will-change-transform">fx</div>
                      <div class="absolute left-0 right-0 top-1/2 h-px bg-[#6E58FF]/20 border-t border-dashed border-[#6E58FF]"></div>
                      <div class="absolute top-0 bottom-0 left-2/3 w-px bg-[#6E58FF]/20 border-l border-dashed border-[#6E58FF]"></div>
                      <div class="absolute left-2/3 top-1/2 w-3 h-3 border-2 border-[#6E58FF] bg-white rounded-full -translate-x-1.5 -translate-y-1.5 z-10"></div>
                  </div>

                  <!-- Code Visual (Minimalist) -->
                  <div v-if="card.visual === 'code'" class="absolute inset-0 pointer-events-none overflow-hidden">
                      <div class="absolute right-6 bottom-6 md:right-10 md:bottom-10 opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:-translate-y-2 will-change-transform">
                          <!-- Minimalist Code Abstract Structure -->
                          <div class="flex flex-col items-end gap-3">
                              <div class="flex items-center gap-2">
                                  <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                                  <div class="w-16 h-2 bg-white/90 rounded-full"></div>
                                  <div class="w-8 h-2 bg-white/40 rounded-full"></div>
                              </div>
                              <div class="flex items-center gap-2">
                                  <div class="w-12 h-2 bg-white/40 rounded-full"></div>
                                  <div class="w-20 h-2 bg-white/90 rounded-full"></div>
                              </div>
                              <div class="flex items-center gap-2">
                                  <div class="w-24 h-2 bg-white/90 rounded-full"></div>
                              </div>
                               <div class="flex items-center gap-2 mt-1">
                                  <div class="w-10 h-2 bg-white/20 rounded-full"></div>
                                  <div class="w-2 h-4 bg-purple-400 animate-pulse"></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Podcast Visual -->
                  <div v-if="card.visual === 'podcast'">
                    <div class="absolute right-[-10%] bottom-[-10%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] opacity-40">
                         <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" class="text-gray-400 w-full h-full">
                             <circle cx="100" cy="100" r="80" stroke-width="1.5" />
                             <ellipse cx="100" cy="100" rx="80" ry="20" stroke-width="1.5" />
                             <ellipse cx="100" cy="100" rx="80" ry="40" stroke-width="1.5" />
                             <ellipse cx="100" cy="100" rx="80" ry="60" stroke-width="1.5" />
                             <line x1="100" y1="20" x2="100" y2="180" stroke-width="1.5" />
                             <line x1="40" y1="40" x2="160" y2="160" stroke-width="1.5" opacity="0.5" />
                             <line x1="160" y1="40" x2="40" y2="160" stroke-width="1.5" opacity="0.5" />
                         </svg>
                    </div>
                    <div class="absolute left-6 md:left-8 bottom-20 flex gap-2">
                        <div class="w-4 h-4 rounded-full bg-[#6E58FF]"></div>
                        <div class="w-4 h-4 rounded-full bg-[#D946EF]"></div>
                        <div class="w-4 h-4 rounded-full bg-white border border-gray-200"></div>
                    </div>
                  </div>

                  <button class="w-fit bg-white text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 shadow-sm group-hover:bg-gray-50 transition-colors z-10">
                     {{ card.actionText }} <ArrowRightIcon class="w-3 h-3 md:w-4 md:h-4" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 快速开始区域 -->
    <section class="py-12 md:py-20 bg-[#F7F8FC]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24">

          <!-- 左侧内容 -->
          <div class="lg:w-1/3 flex flex-col justify-start items-start text-left pt-0 md:pt-4">
            <h2 class="text-2xl md:text-4xl font-bold text-[#0F0F12] mb-4">快速入门</h2>
            <p class="text-base md:text-lg text-[#5A5E6A] mb-6 md:mb-8">AI 职场神队友，告别无效加班！</p>
            <button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6E58FF] text-white font-medium hover:bg-[#5A43FF] active:scale-95 transition-all shadow-md">
              探索更多
              <ArrowRightIcon class="w-4 h-4" />
            </button>
          </div>

          <!-- 右侧网格 -->
          <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
             <div v-for="(card, i) in quickStartCards" :key="i" class="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-6 md:gap-8 group border border-transparent h-full min-h-[200px] md:min-h-[240px] touch-manipulation active:scale-[0.99]">
                <div class="inline-flex items-center justify-center border border-transparent py-0.5 font-medium w-fit whitespace-nowrap shrink-0 px-4 rounded-full bg-[#B5BFFF4D] text-[14px] md:text-[16px] text-[#333333]">
                   {{ card.badge }}
                </div>
                <p class="text-base md:text-lg font-medium text-[#0F0F12] leading-relaxed flex-1">
                   {{ card.desc }}
                </p>
                <button class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#6E58FF] group-hover:border-[#6E58FF] group-hover:text-white transition-all">
                   <ArrowRightIcon class="w-5 h-5 md:w-6 md:h-6" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. 零门槛/一站式区域 -->
    <section class="py-12 md:py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10 md:mb-16">
           <h2 class="text-2xl md:text-3xl font-bold text-[#0F0F12]">0门槛，一站式 AI 办公空间</h2>
        </div>

        <div class="space-y-12 md:space-y-24">
           <!-- 特性 1：左文右图 -->
           <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
              <div class="lg:w-1/2 space-y-6 order-2 lg:order-1">
                 <div class="inline-flex items-center gap-2 text-[#6E58FF] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                    <SparklesIcon class="w-4 h-4" />
                    AI 辅助写作
                 </div>
                 <h3 class="text-2xl md:text-3xl font-bold text-[#0F0F12] leading-tight">和子文档 — <br class="hidden md:block"/>让创作如虎添翼</h3>
                 <p class="text-base md:text-lg text-[#5A5E6A] leading-relaxed">
                    内置强大的 AI 写作助手，支持文章续写、润色、翻译及摘要生成。无论是工作报告还是创意文案，都能一键搞定。
                 </p>
                 <div class="flex gap-4 pt-2 md:pt-4">
                    <button class="px-6 py-2.5 bg-[#6E58FF] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] active:scale-95 transition-all shadow-lg shadow-[#6E58FF]/20">
                       创建文档
                    </button>
                    <button class="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 active:scale-95 transition-all">
                       了解更多
                    </button>
                 </div>
              </div>
              <div class="lg:w-1/2 relative order-1 lg:order-2 w-full">
                 <div class="absolute -inset-4 bg-linear-to-r from-purple-100 to-blue-50 rounded-3xl -z-10 blur-xl opacity-60"></div>
                 <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <img src="/sell-point-1.png" alt="AI Writing" loading="lazy" class="rounded-xl w-full h-auto" />
                 </div>
              </div>
           </div>

           <!-- 特性 2：右文左图 -->
           <div class="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20">
              <div class="lg:w-1/2 space-y-6 order-2 lg:order-1">
                 <div class="inline-flex items-center gap-2 text-[#6E58FF] bg-[#F4F0FF] px-3 py-1 rounded-full text-xs font-bold">
                    <PhotoIcon class="w-4 h-4" />
                    智能图像处理
                 </div>
                 <h3 class="text-2xl md:text-3xl font-bold text-[#0F0F12] leading-tight">一键生图，<br class="hidden md:block"/>创意不再受限</h3>
                 <p class="text-base md:text-lg text-[#5A5E6A] leading-relaxed">
                    输入文字描述即可生成高质量图片，支持多种艺术风格。更有智能修图功能，无损放大、去背景、画质增强一气呵成。
                 </p>
                 <button class="px-6 py-2.5 bg-[#6E58FF] text-white rounded-full text-sm font-semibold hover:bg-[#5A43FF] active:scale-95 transition-all shadow-lg shadow-[#6E58FF]/20">
                    立即体验
                 </button>
              </div>
              <div class="lg:w-1/2 relative order-1 lg:order-2 w-full">
                 <div class="absolute -inset-4 bg-linear-to-l from-pink-100 to-purple-50 rounded-3xl -z-10 blur-xl opacity-60"></div>
                 <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <img src="/sell-point-2.png" alt="Image Gen" loading="lazy" class="rounded-xl w-full h-auto" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- 5. 常见问题区域 -->
    <section class="py-12 md:py-24 bg-[#F7F8FC]">
       <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24 items-start">
            <!-- 左侧：标题 -->
            <div class="lg:w-1/3 w-full">
              <h1 class="text-2xl md:text-4xl font-bold text-[#0F0F12] mb-2 md:mb-0">常见问题</h1>
            </div>

            <!-- 右侧：折叠面板列表 -->
            <div class="lg:w-2/3 w-full space-y-4">
               <div v-for="(faq, i) in faqs" :key="i" class="bg-white rounded-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-gray-200">
                  <button @click="faq.open = !faq.open" class="w-full flex items-start justify-between p-6 text-left active:bg-gray-50 transition-colors touch-manipulation min-h-[60px]">
                     <span class="text-base md:text-lg font-medium text-[#0F0F12] pr-8">{{ faq.question }}</span>
                     <ChevronDownIcon class="w-5 h-5 text-gray-400 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-180': faq.open }" />
                  </button>
                  <div
                    class="grid transition-all duration-300 ease-in-out"
                    :class="faq.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
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

    <!-- 6. 底部呼吁区域 -->
    <section class="relative bg-[#121318] overflow-hidden">
       <!-- 全宽底部图片 -->
       <div class="absolute inset-x-0 bottom-0 z-0 opacity-50 md:opacity-100">
          <img src="/foot.png" alt="" loading="lazy" class="w-full h-[200px] md:h-auto object-cover md:object-contain object-bottom" />
       </div>

       <div class="relative z-10 container mx-auto px-4 py-12 md:py-24">
          <div class="flex flex-col items-start text-left max-w-3xl">
             <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               必定AI你的 AI 办公空间
             </h2>
             <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto">
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6E58FF] text-white font-bold text-[16px] hover:bg-[#5A43FF] active:scale-95 transition-all shadow-xl">
                   立即体验
                </button>
                <button class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1D2129] font-medium text-[16px] hover:bg-gray-100 active:scale-95 transition-all">
                   下载客户端
                </button>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ArrowRightIcon,
  SparklesIcon,
  PhotoIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

// 设置页面布局
definePageMeta({
  layout: 'default'
})

// --- 类型定义 ---

/**
 * 功能特性数据接口
 */
interface FeatureItem {
  /** 标题 */
  title: string;
  /** 标签文本 */
  tag: string;
  /** 所属分类 */
  category: string;
  /** 图标组件（可选） */
  icon?: any;
  /** 背景样式类 */
  bgClass?: string;
  /** 自定义视觉 HTML 字符串（可选） */
  customVisual?: string;
}

/**
 * 解决方案卡片接口
 */
interface SolutionCard {
  /** 标题（支持 HTML） */
  title: string;
  /** 按钮行动文本 */
  actionText: string;
  /** 宽度类名（响应式） */
  widthClass: string;
  /** 背景样式类名 */
  bgClass: string;
  /** 文本颜色类名（默认为 text-gray-900） */
  textClass?: string;
  /** 视觉类型标识，用于模板中渲染特定图形 */
  visual: 'ppt' | 'design' | 'writing' | 'excel' | 'code' | 'podcast';
}

/**
 * 解决方案行接口
 */
interface SolutionRow {
  /** 该行包含的卡片列表 */
  cards: SolutionCard[];
}

/**
 * 快速开始卡片接口
 */
interface QuickStartCard {
  badge: string;
  desc: string;
}

/**
 * 常见问题接口
 */
interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

// --- 状态管理 ---

/** 当前选中的功能 Tab */
const currentTab = ref('全部')
/** 功能 Tab 列表 */
const tabs = ['全部', '写作', '设计', '编程', '效率']

// --- 数据定义 ---

/**
 * 解决方案网格数据
 * 包含 3 行，每行 2 个卡片，用于渲染核心业务场景入口
 */
const solutionRows: SolutionRow[] = [
  {
    cards: [
      {
        title: '十分钟，<br/>做拿得出手的PPT',
        actionText: '使用 AI PPT',
        widthClass: 'md:w-[59%]',
        bgClass: 'bg-linear-to-br from-[#6E58FF] to-[#8B7FFF]',
        textClass: 'text-white',
        visual: 'ppt'
      },
      {
        title: '无需技巧，<br/>生成百变设计',
        actionText: '使用 AI 设计',
        widthClass: 'md:flex-1',
        bgClass: 'bg-[#F3F4F6]',
        textClass: 'text-gray-900',
        visual: 'design'
      }
    ]
  },
  {
    cards: [
      {
        title: '一气呵成，<br/>写出带排版的长文',
        actionText: '使用 深度写作',
        widthClass: 'md:w-[39%]',
        bgClass: 'bg-[#E5E7EB]',
        textClass: 'text-gray-900',
        visual: 'writing'
      },
      {
        title: '告别公式，<br/>智能数据分析处理',
        actionText: '使用 AI EXCEL',
        widthClass: 'md:flex-1',
        bgClass: 'bg-linear-to-r from-[#E0E7FF] to-[#Dbeafe]',
        textClass: 'text-[#6E58FF]',
        visual: 'excel'
      }
    ]
  },
  {
    cards: [
      {
        title: '代码自动生成，<br/>效率提升10倍+',
        actionText: '使用 AI 编程',
        widthClass: 'md:w-[59%]',
        bgClass: 'bg-gray-900',
        textClass: 'text-white',
        visual: 'code'
      },
      {
        title: '超拟人，<br/>用听觉解读万物',
        actionText: '使用 AI 播客',
        widthClass: 'md:flex-1',
        bgClass: 'bg-[#F3F4F6]',
        textClass: 'text-gray-900',
        visual: 'podcast'
      }
    ]
  }
]

/**
 * 核心功能数据列表
 * 包含：作品集、函数图像、代码事件、抽象图形等
 */
const allFeatures: FeatureItem[] = [
  {
    title: '智能作品集',
    tag: 'Portfolio',
    category: '设计',
    bgClass: 'bg-gradient-to-br from-purple-50 to-white',
    customVisual: '<div class="text-3xl font-serif italic text-gray-800">Portfolio</div>'
  },
  {
    title: '数学函数可视化',
    tag: 'Math',
    category: '效率',
    bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    customVisual: '<div class="text-2xl font-script text-blue-600">f(x) = sin(x)</div>'
  },
  {
    title: '代码活动 2025',
    tag: 'Event',
    category: '编程',
    bgClass: 'bg-[#1E1E2E]',
    customVisual: '<div class="text-2xl font-bold text-white tracking-widest">CODE<br/><span class="text-purple-400">2025</span></div>'
  },
  {
    title: '数据可视化',
    tag: 'Chart',
    category: '效率',
    bgClass: 'bg-white',
    customVisual: '<div class="flex items-end gap-2 h-20"><div class="w-3 bg-gray-100 rounded-t h-[40%] animate-[pulse_2s_ease-in-out_infinite]"></div><div class="w-3 bg-purple-200 rounded-t h-[70%] animate-[pulse_2s_ease-in-out_0.2s_infinite]"></div><div class="w-3 bg-purple-400 rounded-t h-[50%] animate-[pulse_2s_ease-in-out_0.4s_infinite]"></div><div class="w-3 bg-[#6E58FF] rounded-t h-[90%] shadow-[0_4px_10px_rgba(110,88,255,0.3)] animate-[pulse_2s_ease-in-out_0.6s_infinite]"></div><div class="w-3 bg-purple-300 rounded-t h-[60%] animate-[pulse_2s_ease-in-out_0.8s_infinite]"></div></div>'
  },
  {
    title: '灵感捕捉',
    tag: 'Idea',
    category: '写作',
    bgClass: 'bg-gray-100',
    customVisual: '<div class="w-full h-full bg-[url(\'https://placehold.co/300x200/e2e8f0/94a3b8?text=Writing\')] bg-cover bg-center opacity-80"></div>'
  },
  {
    title: '抽象设计',
    tag: 'Art',
    category: '设计',
    bgClass: 'bg-white',
    customVisual: '<div class="w-24 h-24 bg-linear-to-tr from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"></div>'
  }
]

/**
 * 根据当前 Tab 过滤功能列表
 * @returns {FeatureItem[]} 过滤后的列表
 */
const filteredFeatures = computed(() => {
  if (currentTab.value === '全部') return allFeatures
  return allFeatures.filter(f => f.category === currentTab.value)
})

/**
 * 快速开始卡片数据
 */
const quickStartCards: QuickStartCard[] = [
  { badge: '在校学生', desc: '“求学求职社交都能用，不靠模板不撞款”' },
  { badge: '教育从业者', desc: '“教学科研办公都能用 AI 从入门到精通”' },
  { badge: '市场运营&电商', desc: '“增长才是硬道理，分析不再是难题”' },
  { badge: '自媒体运营', desc: '“热点创作又快又多，智能排版一文多发”' }
]

/**
 * FAQ 常见问题数据
 */
const faqs = ref<FaqItem[]>([
  { question: '怎么下载导出必定AIAI生成的PPT、文档、表格、设计？', answer: '必定AIAI生成好后，你可以直接选择导出下载，支持常见的PPTX、DOCX、PDF、XLSX、JPG、PNG格式。', open: true },
  { question: '必定AI是免费使用吗？', answer: '必定AI提供免费的基础版，包含大部分核心功能。对于高级功能和更多存储空间，我们提供灵活的付费订阅方案。', open: false },
  { question: '必定AI可以把PDF/图片/网站/报告/论文内容改成PPT吗？', answer: '可以。您可以上传 PDF、图片或输入网址，AI 会自动提取关键信息并生成结构清晰、设计精美的 PPT 演示文稿。', open: false },
  { question: '我没有设计基础，可以让必定AIAI做设计吗？', answer: '完全没问题。必定AI内置了专业的设计引擎，您只需输入文字描述，AI 就能自动生成海报、Banner、配图等高质量设计作品。', open: false },
  { question: '必定AIAI可以帮我创作自媒体内容吗？', answer: '当然。我们提供专门的自媒体创作工具，支持从选题策划、文案生成到排版配图的全流程辅助，助您高效产出爆款内容。', open: false }
])

</script>

<style scoped>
/* 自定义字体（如果未在 Tailwind 配置中） */
.font-serif {
  font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
}
.font-script {
  font-family: 'Brush Script MT', cursive;
}

/* 潜在复用变量 */
:root {
  --primary: #6E58FF;
  --primary-hover: #5A43FF;
  --text-main: #0F0F12;
  --bg-page: #F3F4F6;
}

/* 动画工具类 */
.perspective-1000 {
  perspective: 1000px;
}

/* 隐藏滚动条 */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
/* 隐藏滚动条 */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
