<template>
  <section class="py-24 bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        必定AI - BuidAI 产品功能
      </h2>
      <p class="text-gray-500 text-lg">
        让每个人都能自由构建智能应用，加速想法的落地与迭代
      </p>
    </div>

    <div class="relative w-full max-w-[1920px] mx-auto space-y-8">
      <!-- Gradient Masks -->
      <div class="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

      <!-- Row 1 -->
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'py-2' }"
      >
        <div
          v-for="(item, index) in row1"
          :key="`r1-${index}`"
          class="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 min-w-max hover:shadow-md transition-shadow duration-300 mx-2"
        >
          <span class="p-1.5 rounded-lg" :class="item.colorBg">
            <component :is="item.icon" class="w-5 h-5" :class="item.colorText" />
          </span>
          <span class="font-medium text-gray-700">{{ item.name }}</span>
        </div>
      </UMarquee>

      <!-- Row 2 -->
      <UMarquee
        pause-on-hover
        reverse
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'py-2' }"
      >
        <div
          v-for="(item, index) in row2"
          :key="`r2-${index}`"
          class="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 min-w-max hover:shadow-md transition-shadow duration-300 mx-2"
        >
          <span class="p-1.5 rounded-lg" :class="item.colorBg">
            <component :is="item.icon" class="w-5 h-5" :class="item.colorText" />
          </span>
          <span class="font-medium text-gray-700">{{ item.name }}</span>
        </div>
      </UMarquee>

      <!-- Row 3 -->
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'py-2' }"
      >
        <div
          v-for="(item, index) in row3"
          :key="`r3-${index}`"
          class="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 min-w-max hover:shadow-md transition-shadow duration-300 mx-2"
        >
          <span class="p-1.5 rounded-lg" :class="item.colorBg">
            <component :is="item.icon" class="w-5 h-5" :class="item.colorText" />
          </span>
          <span class="font-medium text-gray-700">{{ item.name }}</span>
        </div>
      </UMarquee>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

// Simple Icon Components using SVG paths
const createIcon = (path: string) => {
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, [h('path', { d: path })])
}

// Icons
const Icons = {
  Brain: createIcon('M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z'),
  Layers: createIcon('M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'),
  Users: createIcon('M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75'),
  MessageSquare: createIcon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'),
  Database: createIcon('M3 6h18M3 12h18M3 18h18'), // Simplified
  Workflow: createIcon('M3 3h18v18H3z'), // Placeholder for workflow
  Cpu: createIcon('M4 4h16v16H4z M9 9h6v6H9z'),
  Video: createIcon('M23 7l-7 5 7 5V7z M14 5H3v14h11V5z'),
  Server: createIcon('M2 12h20 M2 6h20 M2 18h20'), // Stack
  Search: createIcon('M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'),
  ShoppingBag: createIcon('M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0'),
  Image: createIcon('M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M9 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z M21 15l-5-5L5 21'),
  CreditCard: createIcon('M2 10h20 M2 16h20 M2 4h20'), // Simplified card
  Code: createIcon('M16 18l6-6-6-6 M8 6l-6 6 6 6'),
  Music: createIcon('M9 18V5l12-2v13 M9 9l12-2'),
  PenTool: createIcon('M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'),
  Globe: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'),
  Mic: createIcon('M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8'),
  Zap: createIcon('M13 2L3 14h9l-1 8 10-12h-9l1-8z'),
  Shield: createIcon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'),
  Bell: createIcon('M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0'),
  Smartphone: createIcon('M5 2h14v20H5z M12 18h.01'),
  UserCheck: createIcon('M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M20 8l2 2 4-4'),
  FileText: createIcon('M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8'),
}

// Data
const row1 = [
  { name: '智能体记忆', icon: Icons.Brain, colorBg: 'bg-purple-50', colorText: 'text-purple-600' },
  { name: '多模态', icon: Icons.Layers, colorBg: 'bg-blue-50', colorText: 'text-blue-600' },
  { name: '积极开放社区', icon: Icons.Users, colorBg: 'bg-green-50', colorText: 'text-green-600' },
  { name: 'AI对话', icon: Icons.MessageSquare, colorBg: 'bg-indigo-50', colorText: 'text-indigo-600' },
  { name: '大语言模型', icon: Icons.Cpu, colorBg: 'bg-pink-50', colorText: 'text-pink-600' },
  { name: 'RAF知识库', icon: Icons.Database, colorBg: 'bg-orange-50', colorText: 'text-orange-600' },
  { name: '工作流编排', icon: Icons.Code, colorBg: 'bg-teal-50', colorText: 'text-teal-600' },
  { name: '本地模型', icon: Icons.Server, colorBg: 'bg-gray-50', colorText: 'text-gray-600' },
  { name: 'AI视频', icon: Icons.Video, colorBg: 'bg-red-50', colorText: 'text-red-600' },
  { name: 'MCP服务', icon: Icons.Zap, colorBg: 'bg-yellow-50', colorText: 'text-yellow-600' },
  { name: '智能体', icon: Icons.Brain, colorBg: 'bg-purple-100', colorText: 'text-purple-700' },
]

const row2 = [
  { name: '超长上下文', icon: Icons.FileText, colorBg: 'bg-blue-50', colorText: 'text-blue-600' },
  { name: 'OCR模型', icon: Icons.Search, colorBg: 'bg-indigo-50', colorText: 'text-indigo-600' },
  { name: 'AI搜索', icon: Icons.Search, colorBg: 'bg-purple-50', colorText: 'text-purple-600' },
  { name: '应用市场', icon: Icons.ShoppingBag, colorBg: 'bg-green-50', colorText: 'text-green-600' },
  { name: '老照片修复', icon: Icons.Image, colorBg: 'bg-orange-50', colorText: 'text-orange-600' },
  { name: '微信支付', icon: Icons.CreditCard, colorBg: 'bg-green-100', colorText: 'text-green-700' },
  { name: '支付宝支付', icon: Icons.CreditCard, colorBg: 'bg-blue-100', colorText: 'text-blue-700' },
  { name: '本地模型', icon: Icons.Server, colorBg: 'bg-gray-50', colorText: 'text-gray-600' },
  { name: '向量模型', icon: Icons.Database, colorBg: 'bg-pink-50', colorText: 'text-pink-600' },
  { name: '重排模型', icon: Icons.Layers, colorBg: 'bg-yellow-50', colorText: 'text-yellow-600' },
  { name: '计费管理', icon: Icons.CreditCard, colorBg: 'bg-red-50', colorText: 'text-red-600' },
]

const row3 = [
  { name: '用户管理', icon: Icons.UserCheck, colorBg: 'bg-blue-50', colorText: 'text-blue-600' },
  { name: '内容审核', icon: Icons.Shield, colorBg: 'bg-red-50', colorText: 'text-red-600' },
  { name: '消息提醒', icon: Icons.Bell, colorBg: 'bg-yellow-50', colorText: 'text-yellow-600' },
  { name: 'H5/小程序', icon: Icons.Smartphone, colorBg: 'bg-green-50', colorText: 'text-green-600' },
  { name: 'AI音乐', icon: Icons.Music, colorBg: 'bg-purple-50', colorText: 'text-purple-600' },
  { name: 'AI绘画', icon: Icons.Image, colorBg: 'bg-pink-50', colorText: 'text-pink-600' },
  { name: '算力套餐', icon: Icons.Zap, colorBg: 'bg-orange-50', colorText: 'text-orange-600' },
  { name: '创作中心', icon: Icons.PenTool, colorBg: 'bg-indigo-50', colorText: 'text-indigo-600' },
  { name: '写作模版', icon: Icons.FileText, colorBg: 'bg-teal-50', colorText: 'text-teal-600' },
  { name: '国际化多语言', icon: Icons.Globe, colorBg: 'bg-blue-100', colorText: 'text-blue-700' },
  { name: '数字人', icon: Icons.Users, colorBg: 'bg-purple-100', colorText: 'text-purple-700' },
  { name: '声音合成', icon: Icons.Mic, colorBg: 'bg-green-100', colorText: 'text-green-700' },
]
</script>
