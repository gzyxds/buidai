<template>
  <div class="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
    <!-- 1. Hero 区域：展示页面核心价值 -->
    <section class="relative pt-20 pb-16 overflow-hidden lg:pt-32 lg:pb-24">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          行业解决方案
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          赋能各行各业的 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI 变革</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          基于强大的 LLM 能力，为不同行业提供定制化的 AI 解决方案，助力企业降本增效，重塑业务流程。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
            咨询解决方案
          </button>
          <button class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            查看成功案例
          </button>
        </div>
      </div>
    </section>

    <!-- 2. 行业场景网格：展示覆盖的领域 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">全场景覆盖的行业应用</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            深入理解行业痛点，提供开箱即用的场景化解决方案
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(solution, index) in solutions"
            :key="index"
            class="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="solution.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ solution.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              {{ solution.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="(feature, idx) in solution.features" :key="idx" class="flex items-center text-sm text-gray-600">
                <CheckIcon class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 核心能力展示：图文交替布局 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div class="lg:w-1/2">
            <div class="inline-block px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">企业级能力</div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              私有化部署，<br />数据安全无忧
            </h2>
            <p class="text-gray-500 text-lg mb-8 leading-relaxed">
              支持完整的私有化部署方案，确保企业核心数据不离境。提供企业级的数据加密、权限管理和审计日志，满足最严格的合规要求。
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <ShieldCheckIcon class="w-8 h-8 text-indigo-600" />
                <h4 class="font-bold text-gray-900">金融级安全</h4>
                <p class="text-sm text-gray-500">多重加密与隔离机制</p>
              </div>
              <div class="flex flex-col gap-2">
                <ServerIcon class="w-8 h-8 text-indigo-600" />
                <h4 class="font-bold text-gray-900">本地化运行</h4>
                <p class="text-sm text-gray-500">完全脱离公网环境</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
            <div class="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
              <!-- 模拟的代码/配置界面展示 -->
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <LockClosedIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">数据加密存储</div>
                    <div class="text-xs text-gray-500">AES-256 标准</div>
                  </div>
                  <div class="ml-auto text-green-600 text-sm font-medium">已启用</div>
                </div>
                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <UserGroupIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">RBAC 权限控制</div>
                    <div class="text-xs text-gray-500">细粒度角色管理</div>
                  </div>
                  <div class="ml-auto text-green-600 text-sm font-medium">已配置</div>
                </div>
                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <DocumentTextIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">操作审计日志</div>
                    <div class="text-xs text-gray-500">全链路追踪记录</div>
                  </div>
                  <div class="ml-auto text-green-600 text-sm font-medium">记录中</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. CTA 区域 -->
    <section class="py-24 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          准备好开启您的 AI 之旅了吗？
        </h2>
        <p class="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          立即联系我们的解决方案专家，获取为您量身定制的数字化转型方案。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1">
            预约演示
          </button>
          <button class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-all">
            查看定价
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  CodeBracketIcon,
  UserGroupIcon,
  CheckIcon,
  ShieldCheckIcon,
  ServerIcon,
  LockClosedIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'default'
})

/**
 * 解决方案数据接口定义
 */
interface Solution {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

/**
 * 解决方案列表数据
 * 包含：智能客服、教育培训、电商零售、金融服务、软件开发、人力资源
 */
const solutions: Solution[] = [
  {
    title: '智能客服',
    description: '基于私有知识库的 7x24 小时智能接待，精准回答用户咨询，显著降低人工成本。',
    icon: ChatBubbleLeftRightIcon,
    features: ['多轮对话上下文记忆', '自动转人工服务', '工单系统集成']
  },
  {
    title: '教育培训',
    description: '构建个性化 AI 助教，根据学生进度生成专属学习计划和测试题目。',
    icon: AcademicCapIcon,
    features: ['智能作业批改', '知识点自动提取', '虚拟口语陪练']
  },
  {
    title: '电商零售',
    description: '利用 AI 进行商品文案生成、智能选品分析及全渠道营销内容创作。',
    icon: ShoppingCartIcon,
    features: ['商品详情页生成', '营销话术润色', '客户评论分析']
  },
  {
    title: '金融服务',
    description: '自动化处理研报分析、合同审核及风险控制，提升金融业务处理效率。',
    icon: BanknotesIcon,
    features: ['智能研报摘要', '合规风险检测', '合同关键信息提取']
  },
  {
    title: '软件研发',
    description: '辅助代码编写、Code Review 及自动化测试脚本生成，加速研发效能。',
    icon: CodeBracketIcon,
    features: ['代码自动补全', 'Bug 智能分析', '技术文档生成']
  },
  {
    title: '人力资源',
    description: '自动化简历筛选、面试辅助及员工入职指引，优化 HR 工作流程。',
    icon: UserGroupIcon,
    features: ['简历智能解析', '人岗匹配度分析', '企业制度问答']
  }
]
</script>
