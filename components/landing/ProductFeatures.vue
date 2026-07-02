<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 头部 -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          覆盖主流 AI 应用，适合私有化产品交付
        </h2>
        <p class="text-gray-500 text-lg max-w-3xl mx-auto">
          从内容创作到业务自动化，提供全场景 AI 应用能力，支持独立部署与灵活定价
        </p>
      </div>

      <!-- 核心能力卡片（第一行：主分类） -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
        <div
          v-for="item in mainCategories"
          :key="item.name"
          class="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-default"
        >
          <div class="flex flex-col items-start gap-3">
            <span class="p-2.5 rounded-xl" :class="item.colorBg">
              <component :is="item.icon" class="w-6 h-6" :class="item.colorText" />
            </span>
            <div>
              <h3 class="font-bold text-gray-900 text-lg mb-1">{{ item.name }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="relative mb-12">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-100" />
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-6 text-sm text-gray-400 font-medium">更多 AI 应用能力</span>
        </div>
      </div>

      <!-- 详细工具卡片 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div
          v-for="item in detailTools"
          :key="item.name"
          class="group bg-gray-50/50 rounded-xl border border-gray-100 p-5 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300"
        >
          <h4 class="font-semibold text-gray-800 mb-1.5">{{ item.name }}</h4>
          <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const createIcon = (path: string) => {
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, [h('path', { d: path })])
}

// --- 图标库 ---
const Icons = {
  ImageGen: createIcon('M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M9 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z M21 15l-5-5L5 21 M3 3l7 7'),
  Video: createIcon('M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'),
  DigitalHuman: createIcon('M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z M6 18v-2a6 6 0 0 1 12 0v2 M4 22h16'),
  Writing: createIcon('M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'),
  Voice: createIcon('M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v4 M8 23h8'),
  Agent: createIcon('M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z M7 7h.01'),
  PPT: createIcon('M7 7h3l2 3-2 3H7V7z M11 13h3 M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 3v6h6'),
  CustomerService: createIcon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 9h.01 M12 9h.01 M16 9h.01 M8 13h.01 M12 13h.01 M15 13h.01'),
  More: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 8v4 M12 16h.01'),
  // 工具类图标
  Replace: createIcon('M7 7h10v10 M17 7L7 17 M16 14l2-2-2-2 M8 10l-2 2 2 2'),
  Migrate: createIcon('M17 8l4 4-4 4 M7 8l-4 4 4 4 M14 4l-4 16'),
  BgRemove: createIcon('M10.5 10.5l3-3 M19.07 4.93l-3.07 3.07 M8.9 19.1A6 6 0 0 1 3 11V8l-3 3 3 3v-2a4 4 0 0 0 4.79 7.93 M21 13v2a6 6 0 0 1-5.9 5.08 M12 2a10 10 0 0 1 10 10 M17 2v6h6'),
  OldPhoto: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2 M16.24 5.76a3 3 0 0 1 0 4.24'),
  ModelDress: createIcon('M20 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2 M12 5v14 M10 19h4 M4 9h16 M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9'),
  ProductSet: createIcon('M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M16 13h1v3h3v1h-3v3h-1v-3h-3v-1h3z'),
  MultiAngle: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M16 8a4 4 0 0 1-8 0 M8 12h8 M12 8v12'),
  PromoVideo: createIcon('M23 7l-7 5 7 5V7z M14 5H3v14h11V5z M8 12h4'),
  ClothingSet: createIcon('M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7 M7 3v4 M12 3v4 M17 3v4'),
  Erase: createIcon('M3 3l18 18 M10.58 10.58L9.17 9.17a4 4 0 0 0 0 5.66l2.83-2.83 M13.42 13.42l1.41 1.41a4 4 0 0 0 0-5.66l-2.83 2.83'),
  Repaint: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M6.34 17.66a8 8 0 0 1 11.32 0'),
  ExpandImage: createIcon('M4 4h16v16H4z M8 4v16 M16 4v16 M4 8h16 M4 16h16'),
  TranslateImage: createIcon('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z M6.5 7h11 M5.5 17h13'),
  ProductImage: createIcon('M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M3 10h18 M9 7v14'),
  HairStyle: createIcon('M12 2C6.5 2 2 6.5 2 12c0 2.5.9 4.8 2.4 6.5C5.5 19.9 7.2 21 9 21h6c1.8 0 3.5-1.1 4.6-2.5 1.5-1.8 2.4-4 2.4-6.5 0-5.5-4.5-10-10-10z M8 10v4 M16 10v4 M9 2v4 M15 2v4'),
  Stylize: createIcon('M15 2l3 6 6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1z M12 12l3-3'),
  TryOn: createIcon('M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z M3 21v-2a7 7 0 0 1 14 0v2 M12 10v9'),
  VideoEdit: createIcon('M17 10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5 M11 21l5-5-5-5 M22 16l-5 5'),
  FullDrive: createIcon('M20 21v-2a4 4 0 0 0-3-3.87 M4 21v-2a4 4 0 0 1 3-3.87 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M17 22v-1a6 6 0 0 0-12 0v1'),
  AIGCVideo: createIcon('M15 8v8h-2V8h2z M11 8v8H9V8h2z M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M2 10h20'),
  AIGCImage: createIcon('M2 12h2a8 8 0 0 0 16 0h2 M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 2l20 20'),
  DigitalHumanVideo: createIcon('M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z M12 21v-2a6 6 0 0 1 6-6h1a4 4 0 0 1 0 8h-1 M12 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2'),
  AIGCChat: createIcon('M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 9h8 M8 13h6'),
  InfiniteCanvas: createIcon('M3 3h18v18H3z M3 9h18 M9 3v18 M15 3v18'),
}

// --- 数据 ---

// 主分类（第一行）
const mainCategories = [
  { name: 'AI 生图', desc: '文生图、图生图、风格模板和结果图库', icon: Icons.ImageGen, colorBg: 'bg-violet-50', colorText: 'text-violet-600' },
  { name: 'AI 视频', desc: '文生视频、图生视频、任务队列和回调通知', icon: Icons.Video, colorBg: 'bg-rose-50', colorText: 'text-rose-600' },
  { name: '数字人', desc: '形象、声音、口播视频和素材管理', icon: Icons.DigitalHuman, colorBg: 'bg-sky-50', colorText: 'text-sky-600' },
  { name: 'AI 写作', desc: '文本创作、对话助手、提示词模板和多模型调用', icon: Icons.Writing, colorBg: 'bg-amber-50', colorText: 'text-amber-600' },
  { name: '语音克隆', desc: '音色训练、TTS 合成、音频任务和历史管理', icon: Icons.Voice, colorBg: 'bg-emerald-50', colorText: 'text-emerald-600' },
  { name: '智能体/工作流', desc: '面向复杂业务的多步骤自动化能力扩展', icon: Icons.Agent, colorBg: 'bg-indigo-50', colorText: 'text-indigo-600' },
  { name: 'AI PPT', desc: '主题生成、内容大纲、版式设计和演示素材辅助', icon: Icons.PPT, colorBg: 'bg-orange-50', colorText: 'text-orange-600' },
  { name: 'AI 客服', desc: '知识库问答、业务咨询、自动接待和线索沉淀', icon: Icons.CustomerService, colorBg: 'bg-cyan-50', colorText: 'text-cyan-600' },
  { name: '更多', desc: '更多 AI 应用正在持续迭代中，后续可按业务场景继续扩展', icon: Icons.More, colorBg: 'bg-gray-50', colorText: 'text-gray-600' },
]

// 详细工具
const detailTools = [
  { name: '动作替换', desc: '上传参考人物图片和输入视频，将视频动作替换到人物形象生成新视频' },
  { name: '动作迁移', desc: '上传参考人物图片和参考视频，将视频动作迁移到人物形象生成新视频' },
  { name: '图片去背景', desc: '面向商品图、人物图和素材图的 AI 图片去背景工具，复用 AIGC 生图通道并支持租户独立输出规格定价' },
  { name: '老照片修复', desc: '面向老照片修复和上色的 AI 工具，复用 AIGC 生图通道并支持独立模型规格售价' },
  { name: '模特穿戴', desc: '面向服饰、配饰和电商穿搭展示的 AI 模特穿戴工具，复用 AIGC 生图通道并支持独立价格包' },
  { name: 'AI商品套图', desc: '面向商品图的 AI 商品套图工具，支持最多3张商品图、多选模块和租户独立按模块定价' },
  { name: '商品多角度', desc: '面向商品图的 AI 商品多角度工具，支持单图上传、多选视角和租户独立按视角定价' },
  { name: '产品宣传视频', desc: '面向电商产品传播的 AI 产品宣传视频工具，支持产品图生成视频、租户配置视频类型和按秒生成售价' },
  { name: '服饰套图', desc: '面向服饰展示的 AI 服饰套图工具，支持多张服饰图、模特图、预设模特和租户按服饰图单张定价' },
  { name: '一键消除', desc: '面向商品图、素材图和内容图的 AI 一键消除工具，支持批量上传、多选消除项和租户独立单张定价' },
  { name: '局部重绘', desc: '面向商品图、人物图和素材图的 AI 局部重绘工具，支持上传原图、绘制蒙版并按租户后台单价生成重绘作品' },
  { name: '无缝扩图', desc: '面向商品图、人物图和素材图的 AI 无缝扩图工具，复用 AIGC 生图通道并支持租户独立扩图比例定价' },
  { name: '图片翻译', desc: '面向商品图、人物图和素材图的 AI 图片翻译工具，复用 AIGC 生图通道并支持租户独立翻译质量定价' },
  { name: 'AI商品图', desc: '面向电商商品图生成的 AI 工具，复用 AIGC 生图通道并支持独立售价、场景分类和场景模板' },
  { name: 'AI换发型', desc: '面向人物发型和发色调整的 AI 图片创作应用，复用 AIGC 生图通道完成生成' },
  { name: '图片风格化', desc: '面向电商风格化生成的 AI 工具，复用 AIGC 生图通道并支持独立售价、风格分类和风格模板' },
  { name: 'AI试衣', desc: '面向服装效果预览的 AI 试衣应用，复用 AIGC 生图通道并支持独立用户售价' },
  { name: 'AI视频剪辑', desc: 'AI视频剪辑应用，支持真人口播混剪、素材混剪、新闻体视频剪辑' },
  { name: '全驱数字人', desc: '基于人物图片和参考音频生成全驱数字人视频，首版提供PC端创作、任务轮询和作品展示' },
  { name: 'AIGC视频', desc: 'AIGC video generation application framework for the LikeAdmin AIGC SaaS aggregation platform' },
  { name: 'AIGC生图', desc: 'AIGC image generation sample application for the LikeAdmin AIGC SaaS aggregation platform' },
  { name: '数字人视频', desc: '面向移动端、PC端和后台端的数字人应用框架，支持当前用户专属形象、声音和合成视频任务' },
  { name: 'AIGC对话', desc: 'AIGC large model conversation application with multi-session, multi-turn context and SSE streaming' },
  { name: '无限画布', desc: '面向多节点编排创作的无限画布应用，复用对话、生图和生视频应用完成生成能力' },
]
</script>
