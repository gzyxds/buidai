<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          BuildingAI 灵活适配多场景
        </h2>
        <p class="text-gray-500 text-lg">
          从内部提效到外部服务，全面覆盖企业智能化需求
        </p>
      </div>

      <div class="space-y-8 mx-auto">
        <div
          v-for="(item, index) in scenarios"
          :key="index"
          class="group relative rounded-3xl overflow-hidden"
        >
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img src="/ScenarioSection.png" alt="" class="w-full h-full object-cover" />
          </div>

          <div class="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-12" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
            <!-- Text Content -->
            <div class="md:w-1/2 text-left">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ item.title }}</h3>
              <p class="text-gray-300 leading-relaxed text-lg">
                {{ item.desc }}
              </p>
            </div>

            <!-- Image Content -->
            <div class="md:w-1/2 flex justify-center">
               <img
                 :src="item.image"
                 :alt="item.title"
                 class="w-full max-w-[400px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scenarios = [
  {
    title: '全开源 & DIY 装修',
    desc: 'BuildingAI 项目代码完全公开，可私有化部署到企业服务器之中，有效保障数据隐私。同时支持自定义首页、登录界面、加载动画的 Logo。',
    image: '/ScenarioSection-1.png'
  },
  {
    title: '导入 Dify & 扣子 工作流',
    desc: 'BuildingAI 支持导入 Dify、扣子（Coze）等第三方工作流，打破平台局限，让你的能力得到充分施展。',
    image: '/ScenarioSection-2.png'
  },
  {
    title: '企业级组织管理模块',
    desc: '根据业务需求灵活配置角色权限，为不同部门分配编辑与阅读权限，高效实现数据隔离。',
    image: '/ScenarioSection-3.png'
  }
]
</script>

<style scoped>
</style>
