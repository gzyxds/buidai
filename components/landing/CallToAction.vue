<template>
  <section class="py-24 bg-[#F9FAFB] relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
    <!-- Floating Avatars Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Top Left -->
      <div class="absolute top-[15%] left-[15%] w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-60 animate-float-slow">
        <img src="/1.png" alt="User" class="w-full h-full object-cover" />
      </div>
      <div class="absolute top-[25%] left-[5%] w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-40 animate-float-slower">
        <img src="/2.png" alt="User" class="w-full h-full object-cover" />
      </div>

      <!-- Top Right -->
      <div class="absolute top-[10%] right-[20%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-50 animate-float">
        <img src="/3.png" alt="User" class="w-full h-full object-cover" />
      </div>
      <div class="absolute top-[30%] right-[10%] w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-30 animate-float-slow">
        <img src="/4.png" alt="User" class="w-full h-full object-cover" />
      </div>

      <!-- Bottom Areas -->
      <div class="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-40 animate-float-reverse">
        <img src="/1.png" alt="User" class="w-full h-full object-cover" />
      </div>
      <div class="absolute bottom-[15%] right-[25%] w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-50 animate-float-slow">
        <img src="/2.png" alt="User" class="w-full h-full object-cover" />
      </div>
      <div class="absolute bottom-[30%] left-[50%] -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-20 animate-pulse">
        <img src="/3.png" alt="User" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <!-- Main Headline -->
      <h2 class="text-2xl md:text-4xl font-medium text-gray-900 mb-2 tracking-tight">
        BuildingAI - Building Your Own AI Apps , Fast & Simple.
      </h2>

      <!-- Gradient Subheadline -->
      <div class="text-3xl md:text-5xl font-bold mb-6">
        <span class="text-[#8B5CF6]">In Minutes, Not Months.</span>
        <span class="text-[#22D3EE] ml-2">Open-Source Powered! ✨</span>
      </div>

      <!-- Description -->
      <p class="text-sm md:text-base text-gray-500 mb-10 max-w-2xl mx-auto tracking-wide">
        我们正在成为「快速搭建私有化 AI 应用」的首选方案。AI 时代，快即壁垒，犹如功夫，唯快不破！
      </p>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <button class="px-10 py-3 rounded-full bg-[#8B5CF6] text-white font-medium text-lg hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
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
