<template>
  <div>
    <div class="fixed bottom-20 sm:bottom-32 right-4 sm:right-11 z-50 flex flex-col gap-2 sm:gap-3">
      <!-- 售前咨询按钮 - 蓝色渐变 -->
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
          @mouseenter="setShowQRCode(true)"
          @mouseleave="setShowQRCode(false)"
        >
          <button
            class="w-10 h-20 sm:w-12 sm:h-28 bg-linear-to-b from-blue-500 to-blue-400 text-white shadow-lg flex flex-col items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
            aria-label="在线咨询"
            @click="handleClickQRCode"
          >
            <HeadphonesIcon class="h-4 w-4 sm:h-6 sm:w-6 mb-1 sm:mb-2" />
            <div class="text-xs font-medium leading-tight">
              <div>在线</div>
              <div>咨询</div>
            </div>
          </button>

          <!-- 二维码弹窗 - 悬停显示 -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-80 translate-y-2.5"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-80 translate-y-2.5"
          >
            <div
              v-if="showQRCode"
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
                      class="w-28 h-28 sm:w-36 sm:h-36 object-contain border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              <!-- 小三角 -->
              <div class="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
              <!-- 装饰性边框 -->
              <div class="absolute inset-0 border border-gray-100/50 pointer-events-none"></div>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- 售后/活动按钮 - 白色按钮包含两个选项 -->
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
          @mouseenter="setShowAfterSales(true)"
          @mouseleave="setShowAfterSales(false)"
        >
          <div class="w-10 h-20 sm:w-12 sm:h-28 bg-white shadow-lg border border-gray-200/50 flex flex-col overflow-hidden">
            <!-- 售后选项 -->
            <button class="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 cursor-pointer">
              <UserIcon class="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
              <span class="text-xs font-medium">售后</span>
            </button>

            <!-- 活动选项 -->
            <button class="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <GiftIcon class="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
              <span class="text-xs font-medium">活动</span>
            </button>
          </div>

          <!-- 售后详情弹窗 -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-80 translate-y-2.5"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-80 translate-y-2.5"
          >
            <div
              v-if="showAfterSales"
              class="absolute bottom-0 right-full mr-2 sm:mr-3 bg-white shadow-2xl border border-gray-100 min-w-[140px] sm:min-w-[180px] backdrop-blur-sm"
            >
              <div class="p-3 sm:p-5">
                <div class="text-center">
                  <div class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">售后服务</div>
                  <div class="text-xs text-gray-500">专业售后团队为您服务</div>
                </div>
              </div>

              <!-- 小三角 -->
              <div class="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
            </div>
          </Transition>
        </div>
      </Transition>

      <!-- 返回顶部按钮 - 白色圆形 -->
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
          @click="scrollToTop"
          class="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-700 shadow-lg flex items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-gray-200/50 cursor-pointer"
          aria-label="返回顶部"
        >
          <ChevronUpIcon class="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </Transition>
    </div>

    <!-- 新增：点击弹出的二维码模态框 -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showClickQRCode"
        class="fixed inset-0 z-60 flex items-center justify-center"
        @click="handleCloseClickQRCode"
      >
        <!-- 背景遮罩 -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <!-- 模态框内容 -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-80 translate-y-5"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-80 translate-y-5"
        >
          <div
            v-if="showClickQRCode"
            class="relative bg-white shadow-2xl max-w-xs sm:max-w-sm w-full mx-4 overflow-hidden"
            @click.stop
          >
            <!-- 关闭按钮 -->
            <button
              @click="handleCloseClickQRCode"
              class="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 cursor-pointer"
              aria-label="关闭"
            >
              <XIcon class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
            </button>

            <!-- 内容区域 -->
            <div class="p-6 sm:p-8 text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
              <p class="text-sm text-gray-600 mb-4 sm:mb-6">扫描二维码添加客服微信</p>

              <!-- 二维码 -->
              <div class="flex justify-center mb-3 sm:mb-4">
                <div class="relative">
                  <img
                    src="/qrcode.png"
                    alt="客服二维码"
                    class="w-40 h-40 sm:w-48 sm:h-48 object-contain border border-gray-200 shadow-lg"
                  />
                </div>
              </div>

              <!-- 提示文字 -->
              <p class="text-xs text-gray-500">长按二维码保存到相册</p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ChevronUp as ChevronUpIcon,
  Headphones as HeadphonesIcon,
  Gift as GiftIcon,
  User as UserIcon,
  X as XIcon
} from 'lucide-vue-next'

const isVisible = ref(false)
const showQRCode = ref(false)
const showAfterSales = ref(false)
// 新增：点击弹出的二维码状态
const showClickQRCode = ref(false)

// 监听滚动事件，当页面滚动超过300px时显示按钮
const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

// 监听自定义事件，用于从其他组件触发二维码弹窗
const handleShowQRCodeModal = () => {
  showClickQRCode.value = true
}

// 点击按钮时滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 新增：处理点击弹出二维码的函数
const handleClickQRCode = () => {
  showClickQRCode.value = true
}

// 新增：关闭点击弹出的二维码
const handleCloseClickQRCode = () => {
  showClickQRCode.value = false
}

// 新增：设置显示状态的辅助函数
const setShowQRCode = (val: boolean) => {
  showQRCode.value = val
}

const setShowAfterSales = (val: boolean) => {
  showAfterSales.value = val
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
  window.addEventListener('showQRCodeModal', handleShowQRCodeModal)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
  window.removeEventListener('showQRCodeModal', handleShowQRCodeModal)
})
</script>

<style scoped>
/* 可以根据需要添加自定义样式，但大部分样式已通过 Tailwind 类实现 */
</style>
