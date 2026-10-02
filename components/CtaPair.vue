<script setup lang="ts">
export interface CtaItem {
  href: string
  label: string
  icon?: string
  /** 图标 class 覆盖（两处图标尺寸/动画不同） */
  iconClass?: string
}

/**
 * CTA 按钮对（实心主按钮 + 描边次按钮）
 *
 * ProductShowcase 与 HeroSection 两处尾部 CTA 的公共结构收敛于此：
 * 容器布局（ui）、按钮配色/内边距（primaryClass/secondaryClass）
 * 因两处品牌色与响应式行为不同而参数化，默认值为 HeroSection 版本。
 */
withDefaults(
  defineProps<{
    primary: CtaItem
    secondary: CtaItem
    /** 容器布局覆盖（flex 方向 / 对齐两处不同） */
    ui?: string
    primaryClass?: string
    secondaryClass?: string
  }>(),
  {
    ui: '',
    primaryClass:
      'flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-primary text-white hover:bg-primary/90 gap-1 sm:gap-2',
    secondaryClass:
      'flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 gap-1 sm:gap-2'
  }
)
</script>

<template>
  <div
    class="mt-6 sm:mt-8 lg:mt-10 flex justify-center gap-2 sm:gap-3 w-full sm:w-auto px-3 sm:px-0"
    :class="ui"
  >
    <a
      :href="primary.href"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full text-xs sm:text-sm font-semibold active:scale-95 transition-all flex items-center justify-center touch-manipulation min-h-[40px] sm:min-h-[44px]"
      :class="primaryClass"
    >
      <UIcon
        v-if="primary.icon"
        :name="primary.icon"
        :class="primary.iconClass ?? 'shrink-0 size-4 sm:size-5'"
        aria-hidden="true"
      />
      {{ primary.label }}
    </a>
    <a
      :href="secondary.href"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full text-xs sm:text-sm font-semibold active:scale-95 transition-all flex items-center justify-center touch-manipulation min-h-[40px] sm:min-h-[44px]"
      :class="secondaryClass"
    >
      <UIcon
        v-if="secondary.icon"
        :name="secondary.icon"
        :class="secondary.iconClass ?? 'shrink-0 size-4 sm:size-5'"
        aria-hidden="true"
      />
      {{ secondary.label }}
    </a>
  </div>
</template>
