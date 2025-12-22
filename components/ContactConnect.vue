<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- 1. 微信客服 -->
    <div class="group bg-white rounded-xl p-6 border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 flex flex-col items-center text-center">
      <div class="w-14 h-14 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <UIcon name="i-simple-icons-wechat" class="w-7 h-7" />
      </div>
      <h3 class="text-base font-bold text-neutral-900 mb-1">微信客服</h3>
      <p class="text-xs text-neutral-400 mb-5">扫码添加专属客服</p>

      <div class="w-36 h-36 bg-neutral-50 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-100 group-hover:border-neutral-300 transition-colors">
        <div class="text-neutral-300 text-[10px] flex flex-col items-center gap-2">
          <UIcon name="i-heroicons-qr-code" class="w-8 h-8 opacity-50" />
          <span>二维码占位</span>
        </div>
      </div>
      <p class="text-[10px] text-neutral-400 mt-3 bg-neutral-50 px-2 py-1 rounded-full">工作日 9:00 - 18:00</p>
    </div>

    <!-- 2. 官方公众号 -->
    <div class="group bg-white rounded-xl p-6 border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 flex flex-col items-center text-center">
      <div class="w-14 h-14 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <UIcon name="i-heroicons-chat-bubble-left-right" class="w-7 h-7" />
      </div>
      <h3 class="text-base font-bold text-neutral-900 mb-1">官方公众号</h3>
      <p class="text-xs text-neutral-400 mb-5">关注获取最新资讯</p>

      <div class="w-36 h-36 bg-neutral-50 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-100 group-hover:border-neutral-300 transition-colors">
        <div class="text-neutral-300 text-[10px] flex flex-col items-center gap-2">
          <UIcon name="i-heroicons-qr-code" class="w-8 h-8 opacity-50" />
          <span>二维码占位</span>
        </div>
      </div>
      <p class="text-[10px] text-neutral-400 mt-3 bg-neutral-50 px-2 py-1 rounded-full">回复“入群”加入社区</p>
    </div>

    <!-- 3. 获取演示 -->
    <div class="group bg-white rounded-xl p-6 border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 flex flex-col items-center text-center">
      <div class="w-14 h-14 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <UIcon name="i-heroicons-play-circle" class="w-7 h-7" />
      </div>
      <h3 class="text-base font-bold text-neutral-900 mb-1">获取演示</h3>
      <p class="text-xs text-neutral-400 mb-5">扫码预约产品演示</p>

      <div class="w-36 h-36 bg-neutral-50 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-100 group-hover:border-neutral-300 transition-colors">
        <div class="text-neutral-300 text-[10px] flex flex-col items-center gap-2">
          <UIcon name="i-heroicons-qr-code" class="w-8 h-8 opacity-50" />
          <span>二维码占位</span>
        </div>
      </div>
      <p class="text-[10px] text-neutral-400 mt-3 bg-neutral-50 px-2 py-1 rounded-full">1v1 专家顾问讲解</p>
    </div>

    <!-- 4. QQ客服 -->
    <div class="group bg-white rounded-xl p-6 border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 flex flex-col items-center text-center">
      <div class="w-14 h-14 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <UIcon name="i-simple-icons-tencentqq" class="w-7 h-7" />
      </div>
      <h3 class="text-base font-bold text-neutral-900 mb-1">QQ 客服</h3>
      <p class="text-xs text-neutral-400 mb-5">在线即时沟通</p>

      <div class="w-36 h-36 bg-neutral-50 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-100 group-hover:border-neutral-300 transition-colors">
        <div class="text-neutral-300 text-[10px] flex flex-col items-center gap-2">
          <UIcon name="i-heroicons-qr-code" class="w-8 h-8 opacity-50" />
          <span>二维码占位</span>
        </div>
      </div>
      <p class="text-[10px] text-neutral-400 mt-3 bg-neutral-50 px-2 py-1 rounded-full">QQ群：12345678</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * ContactConnect Component
 *
 * 展示多种联系方式的二维码入口，包含微信客服、公众号、演示预约及QQ客服
 */
</script>
