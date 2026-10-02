<template>
  <section
    class="line-y section-padding bg-white relative py-12"
    style="--grid-line-color: color-mix(in oklab, var(--color-gray-950, #0a0a0a) 5%, transparent);"
  >
    <!-- 顶部贯穿横线 -->
    <div class="absolute top-0 left-0 right-0 h-px bg-(--grid-line-color)" />

    <!-- 底部贯穿横线 -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-(--grid-line-color)" />

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <!-- 左侧：标题区 -->
        <div class="lg:border-r lg:border-(--grid-line-color)">
          <div class="grid grid-cols-1 gap-y-4 px-4 py-4 max-lg:line-b sm:px-6 lg:line-b/half">
            <!-- 标签 - 使用靛蓝色 -->
            <h2 class="font-mono text-sm font-semibold tracking-[0.2em] text-pretty uppercase text-indigo-600">
              FAQ
            </h2>
            <!-- 主标题 -->
            <p class="text-[2.5rem] font-semibold tracking-tight text-pretty text-gray-900 sm:text-[3.5rem]/none leading-[1.1]">
              常见问题解答
            </p>
            <p class="text-lg text-gray-500 mt-2 max-w-md">
              你需要知道的一切，都在这里找到答案。
            </p>

            <!-- 二维码弹窗触发按钮区 -->
            <div class="pt-10">
              <p class="text-base text-gray-500 mb-4 font-medium">还有其他问题？</p>
              <div class="flex flex-wrap gap-3">
                <button
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-base font-medium hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-0.5"
                  @click="openQrModal('community')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM15.493 15.329a4.98 4.98 0 01-2.08.662 4.986 4.986 0 00.065-1.5 6.48 6.48 0 00-1.912-3.947 3 3 0 014.3 3.519c-.066.29-.2.555-.373.266zM13.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  加入社群
                </button>
                <button
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-base font-semibold hover:bg-gray-50 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:-translate-y-0.5"
                  @click="openQrModal('contact')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.02 13.02 0 012.43 8.326 13.02 13.02 0 012 5V3.5z" clip-rule="evenodd" />
                  </svg>
                  联系我们
                </button>
              </div>
            </div>
          </div>
      </div>

      <!-- 右侧：FAQ 列表 -->
        <div class="lg:border-l lg:border-(--grid-line-color)">
          <div class="grid grid-cols-1 gap-12">
            <!-- FAQ 分类组 -->
            <div class="group">
              <!-- 分类标题 -->
              <h3 class="px-4 py-3 font-mono text-xs font-semibold tracking-[0.15em] text-pretty uppercase text-indigo-500 sm:px-6 dark:text-indigo-400">
                产品概述
              </h3>
              <dl class="space-y-1">
                <details
                  v-for="(faq, idx) in faqs"
                  :key="idx"
                  class="group border-t border-(--grid-line-color) px-4 py-4 sm:px-6"
                  :open="activeFaq === idx"
                  @toggle="handleToggle($event, idx)"
                >
                  <!-- 问题行 -->
                  <summary
                    class="flex w-full cursor-pointer items-center justify-between gap-4 select-none [&::-webkit-details-marker]:hidden"
                  >
                    <div class="text-left text-lg font-medium text-pretty text-gray-800 group-open:text-indigo-600 transition-colors duration-200">
                      {{ faq.question }}
                    </div>
                    <!-- Plus 图标（收起状态） -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-8 w-5 text-gray-400 group-open:hidden flex-shrink-0 transition-colors duration-200"
                    >
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                    <!-- Minus 图标（展开状态） -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      class="hidden h-8 w-5 text-indigo-600 group-open:block flex-shrink-0"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                  </summary>

                  <!-- 答案区 -->
                  <div class="faq-content mt-5 grid grid-cols-1 gap-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {{ faq.answer }}
                  </div>
                </details>
              </dl>
            </div>
          </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">

/**
 * FAQ 数据列表
 */
const faqs = [
  {
    question: '智言AI 适合没有编程基础的用户使用吗?',
    answer:
      '完全适合。智言AI 的产品理念正是为了让更多的人能快捷、低门槛地享受和加入AI浪潮，无论是搭建智能体、知识库还是安装配置各种AI应用，流程都非常简单便捷，并且支持可视化操作，让你像"搭积木"般组装出自己想要的AI系统。'
  },
  {
    question: '支持部署到本地或云服务器吗？支持私有大模型吗？',
    answer:
      '支持的。智言AI 本身或者应用市场的AI应用均是源码交付，支持私有化部署到本地或服务器上；同时也支持接入本地大模型，数据完全掌握在自己手中。'
  },
  {
    question: '系统提供哪些功能？支持自定义开发新功能吗？',
    answer:
      '关于现有及规划中的功能详情，请参阅文档中的「产品路线图」。我们完全支持二次开发，并提供了丰富的 AI 编程接口，助您快速扩展和定制个性化的功能模块。'
  },
  {
    question: '智言AI 完全免费开源吗？',
    answer:
      '是的，智言AI 在 GitHub、Gitee 上均有公开的仓库代码（Apache-2.0 license）可供下载并商用；后续将面向企业用户提供专业版，敬请期待。'
  },
  {
    question: '智言AI 是否支持多终端（PC/移动端）访问？',
    answer:
      '支持的。无论是 智言AI 系统本身，还是官方应用市场的AI应用，均会实现多端适配（Web 网页端、PC 客户端、APP、小程序、H5 页面）。'
  }
]

/** FAQ 手风琴：跟踪当前展开项（展开/收起动画由原生 details 提供） */
const { activeIndex: activeFaq, handleToggle } = useFaqAccordion()

/**
 * 打开二维码弹窗
 * @param type - 弹窗类型：community 社群 / contact 联系
 */
const openQrModal = useQrModal({
  community: { title: '加入社群', desc: '扫码加入智言AI社群，获取更多帮助', image: '/qrcode.png' },
  contact: { title: '联系我们', desc: '扫码添加微信客服，一对一解答', image: '/wechat.png' }
})
</script>

<style scoped>
/* 定义 CSS 变量 */
:root {
  --grid-line-color: color-mix(in oklab, var(--color-gray-950, #0a0a0a) 5%, transparent);
}

/* line-y: 垂直线条效果 */
.line-y {
  position: relative;
}

/* line-b: 底部线条 */
.line-b {
  border-bottom: 1px solid var(--grid-line-color);
}

/* line-b/half: 底部半高线条 */
.line-b\/half::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  border-bottom: 1px solid var(--grid-line-color);
  pointer-events: none;
}

/* 移动端底部线条 */
@media (max-width: 1023px) {
  .max-lg\:line-b {
    border-bottom: 1px solid var(--grid-line-color);
  }
}

/* 桌面端底部半高线条 */
@media (min-width: 1024px) {
  .lg\:line-b\/half {
    position: relative;
  }
  .lg\:line-b\/half::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    border-bottom: 1px solid var(--grid-line-color);
    pointer-events: none;
  }
}

/* FAQ 答案区域富文本样式 - 使用项目颜色 */
.faq-content :deep(strong) {
  font-weight: 600;
  color: rgb(17 24 39); /* text-gray-900 */
}

.faq-content :deep(a) {
  font-weight: 600;
  color: rgb(17 24 39); /* text-gray-900 */
  text-decoration: underline;
  text-decoration-color: rgb(99 102 241); /* indigo-500 */
  text-underline-offset: 4px;
}

.faq-content :deep(a:hover) {
  color: rgb(79 70 229); /* indigo-600 */
}

.dark .faq-content :deep(strong) {
  color: rgb(255 255 255);
}

.dark .faq-content :deep(a) {
  color: rgb(255 255 255);
}

.dark .faq-content :deep(a:hover) {
  color: rgb(96 165 250); /* accent-400 */
}
</style>
