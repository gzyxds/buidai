<script lang="ts" setup>
import ProductFeatures from '~/components/landing/ProductFeatures.vue';

// 页面元数据
definePageMeta({
    layout: 'default',
});

useSeoMeta({
    title: '视频混剪助手 - 开源免费的视频剪辑软件 | 智言AI-智言万象',
    description: '智言AI-智言万象 视频混剪助手是一款高效易用的视频剪辑软件,专为短视频创作者、Vlogger及营销人员设计。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,提供海量模板与素材库,一键生成节奏感强、视觉冲击力大的混剪视频。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容,大幅降低剪辑门槛与时间成本。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords: '视频混剪,视频剪辑,批量剪辑,智能转场,滤镜调色,字幕添加,背景音乐,智言AI,智言万象,视频制作工具,开源AI系统,私有化部署,视频剪辑源码',
    ogTitle: '视频混剪助手 - 一键生成混剪视频 | 智言AI-智言万象',
    ogDescription: '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配。一键生成节奏感强、视觉冲击力大的混剪视频。',
    ogImage: '/product/videoclip-1.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '视频混剪助手 - 一键生成混剪视频 | 智言AI-智言万象',
    twitterDescription: '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,大幅降低剪辑门槛与时间成本。',
    twitterImage: '/product/videoclip-1.png'
});

// --- 功能网格数据 ---
const features = [
    {
        title: '批量剪辑',
        desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。',
        icon: 'i-heroicons-film',
    },
    {
        title: '智能转场',
        desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。',
        icon: 'i-heroicons-sparkles',
    },
    {
        title: '滤镜调色',
        desc: '提供丰富的滤镜和调色功能,一键美化视频画面,打造专业视觉效果。',
        icon: 'i-heroicons-adjustments-horizontal',
    },
    {
        title: '字幕添加',
        desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。',
        icon: 'i-heroicons-closed-captioning',
    },
    {
        title: '背景音乐',
        desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。',
        icon: 'i-heroicons-musical-note',
    },
    {
        title: '海量模板',
        desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。',
        icon: 'i-heroicons-rectangle-stack',
    },
];

// --- 功能详情数据 ---
const featureDetails = ref([
    {
        title: '批量剪辑,效率倍增',
        desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容。',
        activePoint: 0,
        points: [
            {
                title: '自动化批量剪辑',
                desc: '支持自动化批量剪辑,大幅提升视频制作效率,节省大量时间成本。'
            },
            {
                title: '智能场景识别',
                desc: '智能识别视频场景,自动匹配最佳剪辑方案,提升剪辑质量。'
            },
            {
                title: '快速导出',
                desc: '支持快速导出多种格式,大幅缩短等待时间,提升创作效率。'
            },
            {
                title: '高质量输出',
                desc: '生成的视频质量高,画面清晰,节奏感强,满足专业级创作需求。'
            }
        ],
        image: 'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/29d316a12e2de4ed57396acbe5019bd9.png~tplv-2zwwjm3azk-image.image',
    },
    {
        title: '智能转场,流畅自然',
        desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。支持多种转场风格,满足不同创作需求。',
        activePoint: 0,
        points: [
            {
                title: '智能转场匹配',
                desc: '智能匹配转场效果,让视频衔接更加流畅自然,提升观看体验。'
            },
            {
                title: '多种转场风格',
                desc: '支持多种转场风格,如淡入淡出、滑动、缩放等,满足不同场景需求。'
            },
            {
                title: '自动场景识别',
                desc: '自动识别视频场景,智能推荐最佳转场效果,提升剪辑质量。'
            },
            {
                title: '流畅衔接',
                desc: '视频衔接流畅自然,节奏感强,视觉冲击力大,提升观看体验。'
            }
        ],
        image: 'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/103ba53a1feb6150655a8928356f448e.png~tplv-2zwwjm3azk-image.webp',
    },
    {
        title: '滤镜调色与字幕添加,专业级制作',
        desc: '提供丰富的滤镜和调色功能,一键美化视频画面。支持智能字幕添加,让视频信息传达更加清晰。提供海量模板与素材库,一键生成专业级视频。',
        activePoint: 0,
        points: [
            {
                title: '滤镜调色',
                desc: '提供丰富的滤镜和调色功能,一键美化视频画面,打造专业视觉效果。'
            },
            {
                title: '智能字幕添加',
                desc: '支持智能字幕添加,快速生成字幕内容,让视频信息传达更加清晰。'
            },
            {
                title: '背景音乐匹配',
                desc: '支持背景音乐匹配,智能推荐合适的音乐,让视频节奏感更强。'
            },
            {
                title: '海量模板与素材库',
                desc: '提供海量模板与素材库,一键套用模板,快速生成专业级视频。'
            }
        ],
        image: 'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/9046c049b429b7e163d400f2fd6e9d95.png~tplv-2zwwjm3azk-image.webp',
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
                        <span class="text-xs text-gray-600 dark:text-gray-300">AI音乐 发布</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        一键生成 <span class="text-ui-primary">混剪视频</span>
                    </h1>

                    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配。<br class="hidden sm:block" />一键生成节奏感强、视觉冲击力大的混剪视频,大幅降低剪辑门槛与时间成本。
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                         <UButton
                            size="xl"
                            color="primary"
                            to="#"
                            class="px-8 py-3.5 rounded-full justify-center text-base font-medium shadow-lg shadow-ui-primary/20"
                        >
                            开始创作
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
                            查看示例
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
                        src="/plugin/video-mix.png"
                        alt="视频混剪助手展示"
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
                        全能型视频混剪助手
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400 text-lg">
                        集批量剪辑、智能转场、滤镜调色、字幕添加、背景音乐于一体,为您提供一站式视频剪辑解决方案
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
                    准备好开始创作混剪视频了吗？
                </h2>
                <p class="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    立即加入 智言万象，体验前沿视频混剪技术带来的无限可能。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配，大幅降低剪辑门槛与时间成本。
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
