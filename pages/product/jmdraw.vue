<script lang="ts" setup>
import ProductFeatures from '~/components/landing/ProductFeatures.vue';

// 页面元数据
definePageMeta({
    layout: 'default',
});

useSeoMeta({
    title: '即梦AI绘画 - AI绘画系统,AI系统源码,AI绘画生成系统 | 智言AI-智言万象',
    description: '智言AI-智言万象 即梦AI绘画是一个基于即梦AI绘画的快速绘图工具,能够通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词或参考图来生成图片,支持多种图片比例以及1K和2K分辨率设置。基于开源技术构建,提供完整源码与私有化部署支持。',
    keywords: '即梦AI,AI绘画,文生图,图生图,AI绘画工具,智言AI,智言万象,图片生成,开源AI系统,私有化部署,即梦4.0,绘画源码',
    ogTitle: '即梦AI绘画 - 一键生成 AI 图片 | 智言AI-智言万象',
    ogDescription: '通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词、多种图片比例和分辨率,让创作更简单。',
    ogImage: '/product/jmdraw-2.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '即梦AI绘画 - 一键生成 AI 图片 | 智言AI-智言万象',
    twitterDescription: '通过简单提示词快速生成高质量图像,风格覆盖广泛,支持纯文本提示词和多种图片比例。',
    twitterImage: '/product/jmdraw-2.png'
});

// --- 功能网格数据 ---
const features = [
    {
        title: '文生图',
        desc: '支持纯文本提示词来生成图片,只需输入文字描述即可快速生成高质量图像。',
        icon: 'i-heroicons-document-text',
    },
    {
        title: '图生图',
        desc: '上传参考图来生成图片,支持多张图片融合,让创作更加灵活多样。',
        icon: 'i-heroicons-photo',
    },
    {
        title: '多种分辨率',
        desc: '支持生成不同的图片比例和分辨率,包括 1K、2K,满足不同场景需求。',
        icon: 'i-heroicons-adjustments-horizontal',
    },
    {
        title: '批量生成',
        desc: '用户可以选择每次生成1-4张图片,分别对应不同的积分,提升创作效率。',
        icon: 'i-heroicons-queue-list',
    },
    {
        title: '提示词示例',
        desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛。',
        icon: 'i-heroicons-light-bulb',
    },
    {
        title: '灵感广场',
        desc: '后台可配置灵感广场的示例图片,为用户提供创作灵感和参考。',
        icon: 'i-heroicons-sparkles',
    },
];

// --- 功能详情数据 ---
const featureDetails = ref([
    {
        title: '文生图,文字即刻成画',
        desc: '支持纯文本提示词来生成图片,用户只需输入文字描述,即可快速生成高质量图像。风格覆盖广泛,写实、卡通、插画等皆可驾驭,充分释放您的创作潜能。',
        activePoint: 0,
        points: [
            {
                title: '纯文本提示词',
                desc: '支持纯文本提示词来生成图片,只需输入文字描述,即可快速生成高质量图像。'
            },
            {
                title: '风格多样',
                desc: '支持多种图片风格,如写实、卡通、插画等,满足不同场景和创作需求。'
            },
            {
                title: '快速生成',
                desc: '生成速度非常快,大幅缩短等待时间,提升创作效率,让创意快速落地。'
            },
            {
                title: '高质量输出',
                desc: '生成的图片质量高,细节丰富,色彩饱满,满足专业级创作需求。'
            }
        ],
        image: '/plugin/即梦AI绘画.png',
    },
    {
        title: '图生图,参考图智能融合',
        desc: '上传参考图来生成图片,支持多张图片融合。让创作更加灵活多样,轻松实现从一张图片到多张图片的创意转换。',
        activePoint: 0,
        points: [
            {
                title: '多图参考输入',
                desc: '支持上传参考图来生成图片,提供更丰富的创作素材和灵感来源。'
            },
            {
                title: '智能图片融合',
                desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。'
            },
            {
                title: '风格保持一致',
                desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新图片。'
            },
            {
                title: '灵活创作方式',
                desc: '支持纯文本提示词和上传参考图两种方式,满足不同用户的创作习惯。'
            }
        ],
        image: '/product/jmdraw-2.png',
    },
    {
        title: '后台管理与配置,灵活可控',
        desc: '后台可以配置提示词示例和灵感广场,支持自定义积分消耗,可自由修改应用在前台显示的名称。提供完整的后台管理功能,满足企业级应用需求。',
        activePoint: 0,
        points: [
            {
                title: '提示词示例配置',
                desc: '后台可以配置提示词示例,方便用户试用,降低创作门槛,提升用户体验。'
            },
            {
                title: '灵感广场示例',
                desc: '后台可配置灵感广场的示例图片,为用户提供创作灵感和参考,激发创作灵感。'
            },
            {
                title: '生成记录与积分管理',
                desc: '后台可查看生成记录和积分消耗情况,支持自定义积分消耗,方便运营管理。'
            },
            {
                title: '自定义应用名称',
                desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验,满足个性化需求。'
            }
        ],
        image: '/product/jmdraw-3.png',
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
                        <span class="text-xs text-gray-600 dark:text-gray-300">即梦AI 2.0 发布</span>
                    </div>

                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        打造您的 <span class="text-ui-primary">专属 AI 绘画</span>
                    </h1>

                    <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        新一代 AI 绘画生成工具,输入文字描述或上传参考图即可快速生成高质量图像。<br class="hidden sm:block" />风格覆盖广泛,写实、卡通、插画等皆可驾驭,充分释放您的创作潜能。
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
                        src="/public/plugin/即梦AI绘画.png"
                        alt="即梦AI绘画生成展示"
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
                        全能型 AI 绘画生成平台
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400 text-lg">
                        集文生图、图生图、多种分辨率于一体,为您提供一站式绘画生成解决方案
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
                    准备好开始创作 AI 绘画了吗？
                </h2>
                <p class="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    立即加入 智言万象，体验前沿 AI 绘画生成技术带来的无限可能。无需复杂的配置，快速生成高质量图像。
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
