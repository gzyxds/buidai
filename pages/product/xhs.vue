<script lang="ts" setup>
import ProductFeatures from '~/components/landing/ProductFeatures.vue';

// 页面元数据
definePageMeta({
    layout: 'default',
});

useSeoMeta({
    title: '小红书热门内容创作助手 - 开源免费的 AI 文案生成系统 | 智言万象',
    description: '智言万象 小红书助手是专为小红书平台内容创作者打造的运营工具,涵盖笔记创作、排版优化、标签推荐等功能。支持一键生成爆款标题与风格化推广文案、AI生成配图、视频封面制作,帮助用户提升笔记曝光与互动率。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords: '小红书助手,小红书创作,AI文案生成,小红书爆款标题,小红书配图,内容创作工具,小红书运营,笔记生成,AI写作,小红书标签推荐,开源AI系统,私有化部署',
    ogTitle: '小红书热门内容创作助手 - 打造爆款笔记的神器 | 智言万象',
    ogDescription: '专为小红书创作者打造,一键生成爆款标题与风格化推广文案。支持 AI 生成配图、视频封面制作、智能匹配热门标签,提升笔记曝光与互动率。',
    ogImage: '/product/xiaohongshu.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '小红书热门内容创作助手 - 打造爆款笔记的神器 | 智言万象',
    twitterDescription: '专为小红书创作者打造,一键生成爆款标题与风格化推广文案,支持 AI 生成配图与智能标签推荐。',
    twitterImage: '/product/xiaohongshu.png'
});

// --- 功能网格数据 ---
const features = [
    {
        title: '一键生成文案',
        desc: '输入产品信息,自动生成爆款标题与风格化推广文案,快速打造吸引人的笔记内容。',
        icon: 'i-heroicons-pencil',
    },
    {
        title: 'AI 生成配图',
        desc: '根据文案智能推荐图片风格与构图,一键生成高质量配图,提升笔记视觉效果。',
        icon: 'i-heroicons-photo',
    },
    {
        title: '智能标签推荐',
        desc: '根据内容自动生成并推荐相关话题与热门标签,提升笔记曝光率与互动量。',
        icon: 'i-heroicons-hashtag',
    },
    {
        title: '排版效果预览',
        desc: '在线查看生成文案在小红书 App 内的真实排版效果,所见即所得。',
        icon: 'i-heroicons-eye',
    },
    {
        title: '历史记录管理',
        desc: '永久保存历史记录,支持草稿编辑与复用,方便内容迭代与优化。',
        icon: 'i-heroicons-clock',
    },
    {
        title: '自定义收费',
        desc: '后台自定义设置模型计费,灵活配置价格策略,满足不同商业需求。',
        icon: 'i-heroicons-currency-dollar',
    },
];

// --- 功能详情数据 ---
const featureDetails = ref([
    {
        title: '一键生成小红书文案,打造爆款笔记',
        desc: '输入产品信息,自动生成爆款标题与风格化推广文案。AI 深度学习小红书爆款笔记特征,快速生成吸引人的标题和内容,让您的笔记脱颖而出。',
        activePoint: 0,
        points: [
            {
                title: '爆款标题自动生成',
                desc: '基于小红书平台爆款笔记数据分析,自动生成高点击率标题,提升笔记曝光量。'
            },
            {
                title: '风格化推广文案',
                desc: '支持多种文案风格,如种草风、测评风、教程风等,满足不同内容创作需求。'
            },
            {
                title: '产品信息智能提取',
                desc: '输入产品名称或链接,自动提取关键信息,快速生成符合小红书调性的推广文案。'
            },
            {
                title: '多版本文案生成',
                desc: '一次生成多个版本文案,支持对比选择,找到最适合的表达方式。'
            }
        ],
        image: '/product/xiaohongshu.png',
    },
    {
        title: 'AI 生成配图与视频封面,提升视觉吸引力',
        desc: '根据文案智能推荐图片风格与构图,一键生成高质量配图和视频封面。让您的笔记在视觉上更具吸引力,提升用户点击率和互动率。',
        activePoint: 0,
        points: [
            {
                title: '智能风格推荐',
                desc: '根据文案内容和目标受众,智能推荐最适合的图片风格,如清新、复古、简约等。'
            },
            {
                title: '构图优化建议',
                desc: 'AI 分析小红书热门图片构图,提供专业构图建议,让配图更具吸引力。'
            },
            {
                title: '一键生成配图',
                desc: '基于文案内容,一键生成高质量配图,无需专业设计技能,快速完成视觉创作。'
            },
            {
                title: '视频封面制作',
                desc: '支持制作视频封面,适配小红书视频笔记格式,提升视频内容的点击率。'
            }
        ],
        image: '/product/xhs-2.png',
    },
    {
        title: '智能标签与历史管理,提升运营效率',
        desc: '根据内容自动生成并推荐相关话题与热门标签,永久保存历史记录,支持草稿编辑与复用。实现内容创作与流量变现的高效结合。',
        activePoint: 0,
        points: [
            {
                title: '智能标签推荐',
                desc: '根据内容自动生成并推荐相关话题与热门标签,提升笔记曝光率与互动量。'
            },
            {
                title: '历史记录管理',
                desc: '永久保存历史记录,支持草稿编辑与复用,方便内容迭代与优化。'
            },
            {
                title: '排版效果预览',
                desc: '在线查看生成文案在小红书 App 内的真实排版效果,所见即所得。'
            },
            {
                title: '自定义收费设置',
                desc: '后台自定义设置模型计费,灵活配置价格策略,满足不同商业需求。'
            }
        ],
        image: '/product/xhs-3.png',
    },
]);

/**
 * 首屏交互逻辑：平滑滚动到演示区域
 *
 * 获取 DOM 元素 __demo_container__ 并执行平滑滚动
 */
const toDemo = () => {
    document.getElementById('__demo_container__')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <div class="relative min-h-full font-sans text-gray-900 bg-white dark:bg-gray-900 dark:text-white overflow-hidden">

        <!-- 首屏区域 -->
        <div class="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <!-- 背景特效（适配自 HeroSection.vue） -->
            <div class="absolute inset-0 z-0 overflow-visible pointer-events-none select-none">
                <!-- 顶部聚焦光束 -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-ui-primary/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-normal dark:bg-ui-primary/10"/>
                <!-- 科技网格背景 -->
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"/>
                <!-- 抽象几何点缀 -->
                <div class="absolute top-20 right-10 w-32 h-32 bg-linear-to-br from-blue-400/30 to-transparent rounded-full blur-2xl animate-pulse hidden md:block"/>
                <div class="absolute bottom-40 left-10 w-24 h-24 bg-linear-to-tr from-purple-400/30 to-transparent rounded-full blur-xl animate-float animation-delay-2000 hidden md:block"/>
            </div>

            <div class="container mx-auto px-4 text-center relative z-10">
                <div class="flex flex-col gap-6 items-center max-w-4xl mx-auto">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4">
                        <span class="px-1.5 py-0.5 rounded bg-ui-primary text-[11px] font-bold text-white tracking-wider">NEW</span>
                        <span class="text-xs text-gray-600 dark:text-gray-300">小红书助手 2.0 发布</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        打造您的 <span class="text-ui-primary">专属爆款笔记</span>
                    </h1>

                    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        专为小红书创作者打造的 AI 内容创作工具,一键生成爆款文案与配图。<br class="hidden sm:block" />智能匹配热门标签,提升笔记曝光与互动率,开启智能运营新时代。
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                         <UButton
                            size="xl"
                            color="primary"
                            to="#"
                            class="px-8 py-3.5 rounded-full justify-center text-base font-medium shadow-lg shadow-ui-primary/20"
                        >
                            开始构建
                            <template #trailing>
                                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                            </template>
                        </UButton>
                        <UButton
                            size="xl"
                            color="neutral"
                            variant="outline"
                            class="px-8 py-3.5 rounded-full justify-center text-base font-medium bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                            @click="toDemo"
                        >
                            查看案例
                        </UButton>
                    </div>
                </div>
            </div>
        </div>

        <!-- 图片展示区域 -->
        <div id="__demo_container__" class="container mx-auto px-4 py-12 md:py-20">
             <div class="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 max-w-5xl mx-auto">
                <div class="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 aspect-video flex items-center justify-center">
                    <img
                        src="/product/xiaohongshu.png"
                        alt="小红书"
                        class="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>

        <!-- 功能网格（适配自 ValueProps.vue） -->
        <div class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 max-w-3xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        全能型小红书创作平台
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400 text-lg">
                        集文案生成、配图制作、标签推荐于一体,为您提供一站式解决方案
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="feature in features"
                        :key="feature.title"
                        class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
                    >
                        <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <UIcon :name="feature.icon" class="w-6 h-6" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ feature.title }}</h3>
                        <p class="text-gray-500 dark:text-gray-400 leading-relaxed">
                            {{ feature.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能详情 -->
        <div class="container mx-auto px-4 py-12 md:py-16 flex flex-col gap-16 md:gap-24">
            <div v-for="(detail, index) in featureDetails" :key="index">
                <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div class="flex flex-col gap-4" :class="{ 'lg:order-last': index % 2 === 1 }">
                        <!-- 标签 -->
                        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ui-primary-weak text-ui-primary text-xs font-medium w-fit mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-opacity="0.8" d="m10.5 6.882-5.98 5.98a.47.47 0 0 1-.665 0l-1.217-1.215a.47.47 0 0 1 0-.665L8.618 5z"/>
                                <path fill="currentColor" d="M14.5 9.375a.46.46 0 0 1-.136.324.47.47 0 0 1-.327.134h-.926v.917a.46.46 0 0 1-.135.324.466.466 0 0 1-.655 0 .46.46 0 0 1-.136-.324v-.917h-.926a.47.47 0 0 1-.327-.134.456.456 0 0 1 .327-.782h.926V8a.465.465 0 0 1 .926 0v.917h.926c.123 0 .24.048.327.134a.46.46 0 0 1 .136.324M3.39 4.792h.925v.916a.465.465 0 0 0 .926 0v-.916h.926c.123 0 .24-.049.327-.135a.456.456 0 0 0-.327-.782h-.926v-.917a.46.46 0 0 0-.136-.324.465.465 0 0 0-.79.324v.917H3.39a.47.47 0 0 0-.327.134.456.456 0 0 0 .327.783m7.406 6.875h-.462v-.459a.46.46 0 0 0-.136-.324.466.466 0 0 0-.79.324v.459h-.463a.47.47 0 0 0-.328.134.456.456 0 0 0 .328.782h.463v.459c0 .121.048.238.135.324a.466.466 0 0 0 .79-.324v-.459h.463c.123 0 .241-.048.328-.134a.456.456 0 0 0-.328-.782M12.84 5.25l-8.062 7.981a.93.93 0 0 1-1.309 0l-1.198-1.184a.92.92 0 0 1-.2-1 .9.9 0 0 1 .2-.297l8.063-7.981a.93.93 0 0 1 1.009-.2.9.9 0 0 1 .3.2l1.197 1.184a.915.915 0 0 1 .2 1 .9.9 0 0 1-.2.297M9.678 7.083 8.482 5.898l-5.556 5.5 1.197 1.185zm2.507-2.481-1.197-1.185L9.136 5.25l1.198 1.185z"/>
                            </svg>
                            核心功能
                        </div>

                        <!-- 标题 -->
                        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight mb-3">
                            {{ detail.title }}
                        </h2>

                        <!-- 功能折叠列表 -->
                        <div class="flex flex-col gap-1">
                            <div
                                v-for="(point, pIndex) in detail.points"
                                :key="pIndex"
                                class="rounded-xl flex gap-3 w-full group/item transition-all duration-300 pr-3"
                                :style="detail.activePoint === pIndex ? { background: 'linear-gradient(to right, color-mix(in srgb, var(--ui-primary), transparent 90%), transparent)' } : {}"
                                @mouseenter="detail.activePoint = pIndex"
                            >
                                <div class="flex flex-col pl-3 py-3 items-center gap-[2px]">
                                    <!-- Icon -->
                                    <div class="relative w-4 h-4 mt-1 shrink-0 flex items-center justify-center text-ui-primary">
                                        <!-- 活动图标 -->
                                        <svg v-if="detail.activePoint === pIndex" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="absolute inset-0 transition-opacity duration-300">
                                            <path fill="currentColor" d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7m3.073 5.766-3.769 3.769a.54.54 0 0 1-.762 0L4.927 8.919a.539.539 0 0 1 .762-.761l1.234 1.235 3.388-3.39a.54.54 0 0 1 .92.382.54.54 0 0 1-.158.38"/>
                                        </svg>
                                        <!-- Inactive Icon -->
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" class="absolute inset-0 transition-opacity duration-300 opacity-30 group-hover/item:opacity-50" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="7.25"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                        </svg>
                                    </div>

                                    <!--连接线 -->
                                    <div
                                        v-if="pIndex < detail.points.length - 1"
                                        class="w-[2px] grow bg-gray-100 dark:bg-gray-800 rounded-full relative overflow-hidden min-h-[16px]"
                                    >
                                        <!--活动进度条 -->
                                        <div
                                            class="absolute top-0 left-0 w-full bg-ui-primary dark:bg-ui-primary rounded-full transition-all duration-500 ease-out"
                                            :style="{ height: detail.activePoint === pIndex ? '100%' : '0%' }"
                                            :class="{ 'opacity-0': detail.activePoint > pIndex }"
                                        />
                                    </div>
                                </div>

                                <div class="grow cursor-default">
                                    <div class="relative transition-all duration-300 ease-out">
                                        <h3
                                            class="flex items-center gap-3 font-medium leading-normal p-3 pl-0 transition-colors duration-300 text-base"
                                            :class="detail.activePoint === pIndex ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'"
                                        >
                                            {{ point.title }}
                                        </h3>

                                        <div
                                            class="grid transition-[grid-template-rows] duration-300 ease-out"
                                            :class="detail.activePoint === pIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                                        >
                                            <div class="overflow-hidden">
                                                <div
class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-0 pb-3 opacity-0 -translate-y-1 transition-all duration-300 delay-75"
                                                    :class="{ 'opacity-100 translate-y-0': detail.activePoint === pIndex }"
                                                >
                                                    {{ point.desc }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 调用操作按钮 -->
                        <div class="mt-2">
                            <UButton
                                to="#"
                                color="primary"
                                size="md"
                                class="rounded-full px-6 py-2.5 font-medium shadow-md shadow-ui-primary/20"
                            >
                                立即体验
                                <template #trailing>
                                    <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
                                </template>
                            </UButton>
                        </div>
                    </div>
                    <div class="relative h-full">
                         <div class="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full">
                            <div class="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 h-full flex items-center justify-center">
                                <img :src="detail.image" :alt="detail.title" class="w-full h-full object-contain"/>
                                <!-- 渐变遮罩 -->
                                <div class="absolute inset-0 bg-linear-to-tr from-black/5 to-transparent pointer-events-none"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 产品功能 Marquee (新增) -->
        <ProductFeatures />

        <!-- 用户评价 -->
        <LandingUserReviews />

        <!-- 行动号召区域（适配自 CallToAction.vue） -->
        <section class="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
             <!-- 背景图形 -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div class="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[80px]"/>
                 <div class="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-purple-400/10 rounded-full blur-[80px]"/>
            </div>

            <div class="container mx-auto px-4 text-center relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    准备好开始创作了吗？
                </h2>
                <p class="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    立即加入 智言万象，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                     <UButton
                        size="xl"
                        color="primary"
                        to="#"
                        class="px-10 py-3 rounded-full justify-center shadow-lg transition-all"
                    >
                        免费试用
                    </UButton>
                     <UButton
                        size="xl"
                        color="neutral"
                        variant="solid"
                        to="/contact"
                        class="px-10 py-3 rounded-full justify-center shadow-sm border border-gray-200 dark:border-gray-700 bg-white text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                        联系商务
                    </UButton>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* 网格和渐变的自定义样式 */
.landing-grid {
    background-size: 50px 50px;
}
</style>
