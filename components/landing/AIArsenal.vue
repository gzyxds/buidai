<template>
  <section class="py-24 bg-[#0B0C15] text-white relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Tag -->
          <div class="flex flex-wrap items-center gap-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span class="text-sm font-medium text-white/90">必定AI</span>
            </div>
            <div class="text-sm font-medium text-white/90">
              专为企业打造的大模型服务与应用开发平台
            </div>
          </div>

          <!-- Headlines -->
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
             开启你的<span class="text-[#6A28F9]">AI大航海之旅</span>
             <img src="/AIArsenal.svg" alt="" class="inline-block w-16 h-16 ml-2 -mt-2" />
              <br />
              <span class="text-white text-2xl md:text-3xl lg:text-4xl">
               旅程从这里开始...
                  <img src="/AIArsenal-1.svg" alt="" class="inline-block w-10 h-10 ml-2 -mt-1" />
              </span>
            </h2>

          </div>

          <!-- Description -->
          <p class="text-lg text-gray-400 max-w-xl leading-relaxed">
            通过让人工智能发挥作用并为你创造收益，来释放你的商业潜力。
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button class="px-8 py-3.5 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
             加入社群
            </button>
            <button class="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5">
              联系我们
            </button>
          </div>
        </div>

        <!-- 右侧内容：垂直无限滚动 -->
        <div class="relative h-[500px] overflow-hidden mask-gradient-y">
          <!-- 动画滚动容器 -->
          <div class="absolute w-full animate-scroll-y">
            <!-- 第一组 -->
            <div class="space-y-6 pb-6">
              <div v-for="(item, index) in features" :key="`set1-${index}`"
                   class="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                <div class="w-12 h-12 rounded-xl bg-gray-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <component :is="item.icon" class="w-6 h-6 text-white/80" />
                </div>
                <span class="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{{ item.name }}</span>
              </div>
            </div>
            <!-- 第二组（重复以实现无缝循环） -->
            <div class="space-y-6 pb-6">
              <div v-for="(item, index) in features" :key="`set2-${index}`"
                   class="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                <div class="w-12 h-12 rounded-xl bg-gray-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <component :is="item.icon" class="w-6 h-6 text-white/80" />
                </div>
                <span class="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import {
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
  DocumentTextIcon,
  EyeIcon,
  ServerIcon,
  CloudIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

const features = [
  { name: '智能体 (Agent)', icon: CpuChipIcon },
  { name: '智能体记忆 (Memory)', icon: ServerIcon },
  { name: '多模态 (Multimodal)', icon: PhotoIcon },
  { name: '超长上下文 (Long Context)', icon: DocumentTextIcon },
  { name: 'OCR模型 (OCR)', icon: EyeIcon },
  { name: '知识库 (Knowledge Base)', icon: CloudIcon },
  { name: '工作流 (Workflow)', icon: CodeBracketIcon },
  { name: '自然语言处理 (NLP)', icon: ChatBubbleBottomCenterTextIcon },
]
</script>

<style scoped>
.mask-gradient-y {
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}

@keyframes scroll-y {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.animate-scroll-y {
  animation: scroll-y 20s linear infinite;
}

/* Pause animation on hover if desired */
/* .animate-scroll-y:hover {
  animation-play-state: paused;
} */
</style>
