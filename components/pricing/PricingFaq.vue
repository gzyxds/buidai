<script setup lang="ts">
/**
 * 定价页 FAQ 区块：左侧标题与联系入口 + 右侧详情列表
 */
import { ref } from 'vue'
import { dispatchQrModal } from '~/utils/qrModal'

const openQrModal = (type: 'coupon' | 'wechat') => {
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系技术专家', desc: '扫码添加微信顾问', image: '/wechat.png' }
  dispatchQrModal(config)
}

// FAQ 数据
const faqItems = [
  {
    label: '积分有效期规则',
    content: '会员积分：按月发放，自到账日起 31 天内有效，到期自动重置；充值积分：自购买日起 2 年内有效，不退不换；每日登录积分：赠送 20 积分，仅限当日使用，次日自动清零。'
  },
  {
    label: '0 积分生成说明',
    content: '关于会员购买后的退款政策：付费服务一经购买，除法定情形或重大平台过错外，不支持退费。0 积分生成不消耗积分，但可能因系统负载进入排队以保障平台稳定性；仅适用于正常会员使用场景。自动化脚本、多账号或多人共享、异常商业使用等行为违反平台规则，平台有权采取限制功能或封禁账号等措施。'
  },
  {
    label: '如何获取更多积分',
    content: '若当前积分不足，可通过以下方式补充：升级会员或叠加购买会员：购买后立即生效，积分即时到账；单独充值积分：按需购买，灵活补充。'
  },
  {
    label: '发票申请与联系方式',
    content: '发票可在「订阅与开票」→「购买记录」中自助申请。如需企业合作，请联系 bd@buidai.com；其他问题欢迎前往帮助中心查询。'
  },
  {
    label: '会员权益须知',
    content: '会员模型下载次数上限为每月 200 次；参与限免或促销活动的订单不支持退款。'
  },
  {
    label: '会员权益保护计划',
    content: '活动开启前 7 天内新购买年付会员（标准版、专业版、私有部署）的用户，平台也发放活动赠品（对应等级的免费次数）。'
  }
]

const activeFaq = ref<number | null>(null)

/**
 * 处理 details 元素的 toggle 事件
 * @param event - Toggle 事件对象
 * @param idx - FAQ 索引
 */
const handleFaqToggle = (event: Event, idx: number) => {
  const details = event.target as HTMLDetailsElement
  if (details.open) {
    activeFaq.value = idx
  } else if (activeFaq.value === idx) {
    activeFaq.value = null
  }
}
</script>

<template>
  <!-- 常见问题区域 -->
  <div class="mt-24 lg:mt-32 pb-20">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
      <!-- 左侧：标题区 -->
      <div class="lg:border-r lg:border-gray-200 dark:lg:border-gray-800">
        <div class="pr-0 lg:pr-10">
          <!-- 标签 -->
          <span class="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 mb-4">
            FAQ
          </span>
          <!-- 主标题 -->
          <h2 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            常见问题解答
          </h2>
          <p class="text-base text-gray-500 dark:text-gray-400 mb-8">
            你需要知道的一切，都在这里找到答案。
          </p>

          <!-- 联系按钮区 -->
          <div class="pt-6">
            <p class="text-sm text-gray-500 mb-4 font-medium">还有其他问题？</p>
            <div class="flex flex-wrap gap-3">
              <button
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all duration-200"
                @click="openQrModal('coupon')"
              >
                <UIcon name="i-heroicons-ticket" class="w-4 h-4" />
                获取优惠码
              </button>
              <button
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                @click="openQrModal('wechat')"
              >
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
                联系客服
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：FAQ 列表 -->
      <div class="lg:pl-10">
        <div class="space-y-1">
          <!-- 分类标题 -->
          <h3 class="py-3 text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 dark:text-indigo-400">
            计费与权益
          </h3>

          <div
            v-for="(item, idx) in faqItems"
            :key="idx"
            class="group border-t border-gray-100 dark:border-gray-800"
          >
            <details
              class="group"
              :open="activeFaq === idx"
              @toggle="handleFaqToggle($event, idx)"
            >
              <!-- 问题行 -->
              <summary
                class="flex w-full cursor-pointer items-center justify-between gap-4 py-4 select-none list-none"
              >
                <span class="text-left text-base font-medium text-gray-800 dark:text-gray-200 group-open:text-indigo-600 dark:group-open:text-indigo-400 transition-colors">
                  {{ item.label }}
                </span>
                <!-- Plus 图标 -->
                <UIcon
                  name="i-heroicons-plus"
                  class="w-5 h-5 text-gray-400 group-open:hidden shrink-0 transition-colors"
                />
                <!-- Minus 图标 -->
                <UIcon
                  name="i-heroicons-minus"
                  class="w-5 h-5 text-indigo-600 hidden group-open:block shrink-0"
                />
              </summary>

              <!-- 答案区 -->
              <div class="pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {{ item.content }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
