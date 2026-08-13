<template>
  <!-- CTA Sections - 底部行动召唤区域 -->
  <section
    class="flex h-60 w-full flex-col items-center justify-center gap-2 px-4 text-center sm:h-110"
    style="background-image: url(/images/CtaSection.webp); background-size: cover; background-position: center; background-repeat: no-repeat;"
  >
    <!-- 主标题 -->
    <h2 class="text-xl font-bold text-black sm:text-3xl">
      即刻部署，开发AI应用，点亮AI技能树
    </h2>
    <!-- 副标题 -->
    <p class="text-xs text-black/80 sm:text-base">
      智言AI- 中国领先的AI创作平台
    </p>
    <!-- 按钮组 -->
    <div class="mt-8 flex gap-4">
      <!-- GitHub 按钮 -->
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://gmlart.cn"
        class="flex h-9 w-27 items-center justify-center rounded-sm bg-white/20 text-xs text-black backdrop-blur-[6px] transition-all duration-300 hover:bg-white/30 sm:h-12 sm:w-36 sm:text-base"
      >
        智言AI
      </a>
      <!-- Gitee 按钮 -->
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://gitee.com/"
        class="flex h-9 w-27 items-center justify-center rounded-sm bg-white/20 text-xs text-black backdrop-blur-[6px] transition-all duration-300 hover:bg-white/30 sm:h-12 sm:w-36 sm:text-base"
      >
        私有部署
      </a>
      <!-- 开发文档 按钮 -->
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://doc.buidai.com/"
        class="flex h-9 w-27 items-center justify-center rounded-sm bg-white text-xs text-black transition-all duration-300 hover:bg-white/90 sm:h-12 sm:w-36 sm:text-base"
      >
        开发文档
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * CTA Section 组件
 * 底部行动召唤区域，展示主要入口链接
 */
</script>
