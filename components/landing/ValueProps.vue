<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          BuildingAI 助力企业构建 AI 应用
        </h2>
        <p class="text-gray-500 text-lg">
          全栈式 AI 开发平台，让创意落地为现实
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mx-auto">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-gray-50 rounded-3xl p-8 border border-gray-100 group"
        >
          <div class="h-64 mb-8 bg-white rounded-2xl border border-gray-100 overflow-hidden relative transition-all duration-300">
             <img :src="card.image" :alt="card.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ card.title }}</h3>
          <p class="text-gray-500 leading-relaxed">
            {{ card.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: '连接现有应用与数据',
    desc: '内置 50+ 主流应用连接器，一键打通企业内部数据孤岛，让 AI 理解您的业务上下文。',
    image: '/1.png'
  },
  {
    title: '企业级知识库与文档',
    desc: '支持 PDF, Word, Markdown 等多种格式文档导入，自动分段索引，构建高精度企业知识库。',
    image: '/2.png'
  },
  {
    title: '可视化的工作流编排',
    desc: '拖拽式工作流编辑器，灵活编排 AI 节点、逻辑判断与 API 调用，构建复杂的业务逻辑。',
    image: '/3.png'
  },
  {
    title: '无缝集成的对话体验',
    desc: '提供可嵌入的 Chat Widget 和 SDK，将 AI 助手无缝集成到您的网站或应用程序中。',
    image: '/4.png'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
