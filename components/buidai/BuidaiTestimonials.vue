<script setup lang="ts">
/**
 * 用户评价区块：三列垂直滚动
 */
import { computed } from 'vue'

const testimonials = [
  { user: { name: '李明', description: 'Java架构师 @某券商科技部', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=李明', alt: '李明' } }, quote: 'Agents-Flex框架让风控Bot开发效率提升300%，@Function注解直接对接内部交易系统，插件热部署避免停机升级' },
  { user: { name: '张悦', description: '全栈工程师 @智慧政务SaaS团队', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张悦', alt: '张悦' } }, quote: '工作流编排API无缝嵌入省公积金平台，智言AI引擎承压每日20万笔审批流，异常自愈机制减少运维告警80%' },
  { user: { name: '陈涛', description: 'Gitee贡献者 @智言AI社区', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=陈涛', alt: '陈涛' } }, quote: 'RBAC权限体系复用企业AD组策略，部门级知识库隔离配置从3天缩短至1小时' },
  { user: { name: '王振华', description: '信息中心主任 @省级医保局', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=王振华', alt: '王振华' } }, quote: 'RAG知识库阻断23次过期政策误用，文件时效性预警+多级权限审计，基层咨询准确率跃至98%' },
  { user: { name: '周敏', description: '技术总监 @跨境物流集团', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=周敏', alt: '周敏' } }, quote: 'Bot自动处理87%清关异常工单，HTTP节点直连海关系统，人工干预成本下降220万/年' },
  { user: { name: '赵立峰', description: '风控副总裁 @城商行', avatar: { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=赵立峰', alt: '赵立峰' } }, quote: '数据中枢字段级脱敏满足金监新规，客户身份证/银行卡号自动掩码，审计合规率100%' },
]

const testimonialColumns = computed(() => {
  const columns: (typeof testimonials)[] = [[], [], []]
  testimonials.forEach((t, i) => columns[i % 3]!.push(t))
  return columns.map(col => [...col, ...col, ...col])
})
</script>

<template>
  <!-- 用户评价 -->
  <section class="py-16 md:py-24 bg-neutral-50/50 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">智言AI 用户评价</h2>
        <p class="text-neutral-500 text-lg leading-relaxed">从个人开发者探索到企业级部署，智言AI 提供强大的工作流引擎与多模型集成能力</p>
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
</template>

<style scoped>
/* 垂直滚动动画：三列内容复制三份，-50% 处与起点内容一致，实现无缝循环 */
@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.animate-marquee-vertical {
  animation: marquee-vertical 40s linear infinite;
}
</style>
