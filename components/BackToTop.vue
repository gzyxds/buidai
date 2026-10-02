<script setup lang="ts">
/**
 * BackToTop 组件
 *
 * 功能描述：
 * 1. 页面滚动超过一定距离显示返回顶部按钮
 * 2. 提供在线咨询悬浮窗（鼠标悬停显示二维码）
 * 3. 提供售后/活动入口悬浮窗
 * 4. 全局二维码弹窗模态框（消费 useQrModalState 共享状态）
 */

// ----------------------------------------------------------------------
// 1. Types & Interfaces (类型定义)
// ----------------------------------------------------------------------
/**
 * 二维码弹窗配置接口
 */
interface QrCodeConfig {
  title: string
  desc: string
  image: string
}

// ----------------------------------------------------------------------
// 2. State (状态)
// ----------------------------------------------------------------------
// 悬浮按钮组是否可见（滚动超过阈值）
const isVisible = useScrollThreshold(300)

// 悬停显示的二维码状态
const showHoverQRCode = ref(false)

// 悬停显示的售后/活动菜单状态
const showAfterSalesMenu = ref(false)

// 点击弹出的全屏模态框状态
const showModalQRCode = ref(false)

// 模态框内容配置
const qrCodeConfig = ref<QrCodeConfig>({
  title: '联系客服',
  desc: '扫描二维码添加客服微信',
  image: '/qrcode.png'
})

// ----------------------------------------------------------------------
// 3. Methods (方法)
// ----------------------------------------------------------------------

/**
 * 滚动到页面顶部
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/**
 * 消费全局二维码弹窗请求状态（useQrModalState）：
 * 各页面/组件经 useQrModal 写入请求，此处响应打开弹窗。
 */
const qrModalRequest = useQrModalState()

watch(qrModalRequest, (config) => {
  if (!config) {return}
  qrCodeConfig.value = {
    title: config.title || '联系客服',
    desc: config.desc || '扫描二维码添加客服微信',
    image: config.image || '/qrcode.png'
  }
  showModalQRCode.value = true
  // 消费后清空，使相同配置可再次触发
  qrModalRequest.value = null
})

/**
 * 打开二维码模态框（点击在线咨询按钮）
 */
const openModalQRCode = () => {
  showModalQRCode.value = true
}

/**
 * 关闭二维码模态框
 */
const closeModalQRCode = () => {
  showModalQRCode.value = false
}

/**
 * 设置悬停二维码显示状态
 * @param val boolean
 */
const setHoverQRCodeVisible = (val: boolean) => {
  showHoverQRCode.value = val
}

/**
 * 设置售后菜单显示状态
 * @param val boolean
 */
const setAfterSalesMenuVisible = (val: boolean) => {
  showAfterSalesMenu.value = val
}
</script>

<template>
  <div>
    <!-- 悬浮按钮组容器 -->
    <div class="fixed bottom-20 sm:bottom-32 right-4 sm:right-11 z-50 flex flex-col gap-2 sm:gap-3">

      <!-- 1. 在线咨询按钮模块 -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <div
          v-if="isVisible"
          class="relative"
          @mouseenter="setHoverQRCodeVisible(true)"
          @mouseleave="setHoverQRCodeVisible(false)"
        >
          <!-- 主按钮：蓝色渐变 -->
          <button
            class="w-10 h-20 sm:w-12 sm:h-28 bg-linear-to-b from-blue-500 to-blue-400 text-white shadow-lg flex flex-col items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
            aria-label="在线咨询"
            @click="openModalQRCode"
          >
            <UIcon name="i-lucide-headphones" class="h-4 w-4 sm:h-6 sm:w-6 mb-1 sm:mb-2" />
            <div class="text-xs font-medium leading-tight">
              <div>在线</div>
              <div>咨询</div>
            </div>
          </button>

          <!-- 悬停弹出的二维码 -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-80 translate-y-2.5"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-80 translate-y-2.5"
          >
            <div
              v-if="showHoverQRCode"
              class="absolute bottom-0 right-full mr-2 sm:mr-3 bg-white shadow-2xl border border-gray-100 min-w-[160px] sm:min-w-[200px] backdrop-blur-sm"
              style="box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            >
              <div class="p-3 sm:p-5">
                <div class="text-center">
                  <div class="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">扫码联系客服</div>
                  <div class="flex justify-center">
                    <img
                      src="/qrcode.png"
                      alt="客服二维码"
                      class="w-28 h-28 sm:w-36 sm:h-36 object-contain border border-gray-200" loading="lazy" decoding="async" width="400" height="400" />
                  </div>
                </div>
              </div>

              <!-- 装饰性箭头 -->
              <div class="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"/>
              <div class="absolute inset-0 border border-gray-100/50 pointer-events-none"/>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- 2. 售后/活动按钮模块 -->
      <Transition
        enter-active-class="transition duration-300 ease-out delay-100"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <div
          v-if="isVisible"
          class="relative"
          @mouseenter="setAfterSalesMenuVisible(true)"
          @mouseleave="setAfterSalesMenuVisible(false)"
        >
          <!-- 白色双层按钮 -->
          <div class="w-10 h-20 sm:w-12 sm:h-28 bg-white shadow-lg border border-gray-200/50 flex flex-col overflow-hidden">
            <!-- 上半部分：售后 -->
            <button class="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 cursor-pointer">
              <UIcon name="i-lucide-user" class="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
              <span class="text-xs font-medium">售后</span>
            </button>

            <!-- 下半部分：活动 -->
            <button class="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <UIcon name="i-lucide-gift" class="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
              <span class="text-xs font-medium">活动</span>
            </button>
          </div>

          <!-- 悬停弹出的售后详情 -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-80 translate-y-2.5"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-80 translate-y-2.5"
          >
            <div
              v-if="showAfterSalesMenu"
              class="absolute bottom-0 right-full mr-2 sm:mr-3 bg-white shadow-2xl border border-gray-100 min-w-[140px] sm:min-w-[180px] backdrop-blur-sm"
            >
              <div class="p-3 sm:p-5">
                <div class="text-center">
                  <div class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">售后服务</div>
                  <div class="text-xs text-gray-500">专业售后团队为您服务</div>
                </div>
              </div>

              <!-- 装饰性箭头 -->
              <div class="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"/>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- 3. 返回顶部按钮 -->
      <Transition
        enter-active-class="transition duration-300 ease-out delay-200"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <button
          v-if="isVisible"
          class="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-700 shadow-lg flex items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-gray-200/50 cursor-pointer"
          aria-label="返回顶部"
          @click="scrollToTop"
        >
          <UIcon name="i-lucide-chevron-up" class="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </Transition>
    </div>

    <!-- 4. 全局二维码模态框 (点击触发) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showModalQRCode"
        class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
        @click="closeModalQRCode"
      >
        <!-- 背景遮罩 -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"/>

        <!-- 模态框内容 -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-5"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-5"
        >
          <div
            v-if="showModalQRCode"
            class="relative bg-white shadow-2xl w-full max-w-2xl rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5 flex flex-col max-h-[85vh] sm:max-h-[90vh]"
            @click.stop
          >
            <!-- 顶部公告栏 -->
            <div class="relative bg-blue-50/80 backdrop-blur-sm px-3 py-2.5 sm:px-6 sm:py-3 flex items-center justify-center border-b border-blue-100/50 shrink-0">
              <div class="flex items-center gap-2 text-xs sm:text-sm text-blue-700 w-full pr-6 sm:pr-0 justify-center sm:justify-start">
                <UIcon name="i-lucide-megaphone" class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-blue-500" />
                <p class="truncate sm:overflow-visible leading-tight">
                  公告：<span class="font-semibold cursor-pointer hover:underline hover:text-blue-800">联系客服</span> 体验产品，关注公众号了解动态
                </p>
              </div>
              <button
                class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-blue-100/50 text-blue-400 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="关闭"
                @click="closeModalQRCode"
              >
                <UIcon name="i-lucide-x" class="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <!-- 内容区域 -->
            <div class="p-4 sm:p-8 overflow-y-auto custom-scrollbar bg-gray-50/30">
              <!-- 标题部分 -->
              <div class="text-left mb-4 sm:mb-6 pl-3 sm:pl-4 border-l-4 border-blue-500 bg-white rounded-r-lg py-1 sm:py-0">
                <h3 class="text-base sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 flex items-center gap-2">
                  {{ qrCodeConfig.title || '联系客服' }}
                  <span class="inline-flex sm:hidden px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-600">在线</span>
                </h3>
                <p class="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 sm:line-clamp-none">{{ qrCodeConfig.desc || '扫描二维码添加客服微信，获取专业技术支持' }}</p>
              </div>

              <!-- 双二维码网格 -->
              <div class="grid grid-cols-2 gap-3 sm:gap-8">
                <!-- 左侧：动态传入的主二维码 -->
                <div class="flex flex-col items-center group bg-white p-3 sm:p-0 rounded-xl sm:bg-transparent border border-gray-100 sm:border-none shadow-sm sm:shadow-none">
                  <div class="relative bg-gray-50 sm:bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 sm:shadow-sm mb-2 sm:mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-100 group-hover:-translate-y-1">
                    <img
                      src="/qrcode.png"
                      :alt="qrCodeConfig.title"
                      class="w-full aspect-square sm:w-48 sm:h-48 object-contain mix-blend-multiply sm:mix-blend-normal" loading="lazy" decoding="async" width="400" height="400" />
                    <!-- 装饰角标 -->
                    <div class="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md scale-100 sm:scale-0 sm:group-hover:scale-100 transition-transform duration-300 delay-75 ring-2 ring-white">
                        <UIcon name="i-lucide-user" class="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                  <h4 class="text-xs sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors text-center">添加客服微信</h4>
                  <p class="text-[10px] sm:text-sm text-gray-400 text-center scale-90 sm:scale-100 origin-top">咨询购买 / 技术支持</p>
                </div>

                <!-- 右侧：固定公众号二维码 -->
                <div class="flex flex-col items-center group bg-white p-3 sm:p-0 rounded-xl sm:bg-transparent border border-gray-100 sm:border-none shadow-sm sm:shadow-none">
                  <div class="relative bg-gray-50 sm:bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 sm:shadow-sm mb-2 sm:mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-100 group-hover:-translate-y-1">
                    <img
                      src="/wechat.png"
                      alt="关注公众号"
                      class="w-full aspect-square sm:w-48 sm:h-48 object-contain mix-blend-multiply sm:mix-blend-normal" loading="lazy" decoding="async" width="500" height="500" />
                    <!-- 装饰角标 -->
                    <div class="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md scale-100 sm:scale-0 sm:group-hover:scale-100 transition-transform duration-300 delay-75 ring-2 ring-white">
                        <UIcon name="i-lucide-gift" class="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                  <h4 class="text-xs sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors text-center">关注公众号</h4>
                  <p class="text-[10px] sm:text-sm text-gray-400 text-center scale-90 sm:scale-100 origin-top">优惠活动 / 产品更新</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/*
  BackToTop Component Styles
*/

/* 自定义滚动条样式 —— 弹窗为浅色底，此处用 slate 系半透明以保持低对比 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(203, 213, 225, 0.4) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(203, 213, 225, 0.4);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(148, 163, 184, 0.6);
}
</style>
