<script lang="ts" setup>

/**
 * 用户评价组件 + 常见问题
 * 展示用户对 智言 的反馈和评价，以及常见问题解答
 */

type Review = {
  content: string
  author: string
  role: string
}

const reviews: Review[] = [
  {
    content:
      '智言 在国内算做得很好很好了，对于数字人生成，无论是从美观还是使用的角度，都非常方便非常优秀，导入功能特别好，比其他工具好用太多了。继续加油！',
    author: 'Alex',
    role: 'AI 创作者'
  },
  {
    content:
      '智言 真的牛，想要的定制功能提出没多久就加上了，而且测试了下和预期的效果完全一致，我之前还因为其他工具的限制专门写了脚本来处理，现在 智言 直接能满足需求了！',
    author: '何易于',
    role: '全栈开发者'
  },
  {
    content:
      '每次有问题都能在群里直接找到技术人员，不仅给出了最佳解决方案，还进行了耐心的讲解。再次为你们的专业技能和敬业精神点赞👍🏻你们是国产之光',
    author: '花满楼',
    role: '测试工程师'
  },
  {
    content:
      '不知不觉发现公司很多运营都被我带动用上 智言 了，平常分享视频素材都是丢个链接出去，大家发现真方便，都跟着我用了哈哈哈哈，现在越来越离不开 智言 啦',
    author: 'vate',
    role: '运营经理'
  },
  {
    content:
      '其他工具能干的 智言 能干，其他工具不能干的 智言 还是能干，而且 智言 作为国产工具，几乎整合了大部分 AI 相关功能，真就一个代替所有。最主要是对小团队协作友好，有格局。',
    author: '我是光',
    role: '产品经理'
  },
  {
    content:
      '你们的 UI 真不错，是国内 UI 交互做的最好的。做产品就应该这样精致，这样才会有好的产品体验！我每天用 智言，看着这个 UI 交互心情就很好，效率也会好哈哈。',
    author: '多喝热水',
    role: '前端工程师'
  },
  {
    content:
      '对于我们这种初创团队来说，智言 的私有化部署方案简直是救星。数据安全有保障，而且成本可控，技术支持响应速度也非常快，必须五星好评！',
    author: 'TechLead',
    role: 'CTO'
  },
  {
    content:
      'Sora 视频生成功能太惊艳了！生成的视频质量很高，镜头语言很专业，完全可以直接用到商业项目中。大大缩短了我们的视频制作周期。',
    author: '创意总监',
    role: '视频制作人'
  },
  {
    content:
      '集成非常丝滑，API 文档清晰易懂。我们在原有系统中接入 智言 的能力只用了半天时间，现在的产品竞争力提升了一个档次。',
    author: 'CodeMaster',
    role: '后端架构师'
  },
  {
    content:
      '从文案生成到视频制作，一条龙服务太方便了。以前需要几个工具切换，现在一个平台全搞定，效率提升了至少 300%。',
    author: '效率达人',
    role: '自媒体博主'
  },
  {
    content:
      '界面简洁直观，上手没有任何难度。对于非技术人员也非常友好，我们市场部的同事现在都能自己做一些简单的 AI 素材了。',
    author: 'MarketPro',
    role: '市场总监'
  },
  {
    content:
      '不仅仅是工具，更是一个生态。社区氛围很好，官方经常分享一些前沿的 AI 玩法和案例，跟着学到了很多新知识。',
    author: 'LearnAI',
    role: '独立开发者'
  }
]

// 将评论分为三列
const columns: Review[][] = [reviews.slice(0, 4), reviews.slice(4, 8), reviews.slice(8, 12)]

/**
 * 获取指定列的评论列表（用于纵向滚动复制）
 *
 * @param index 列索引（0 开始）
 * @returns 指定列的评论数组，内容复制两遍
 */
const getColumnReviews = (index: number): Review[] => {
  const col = columns[index] ?? []
  return [...col, ...col]
}

const gradients = [
  'bg-linear-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10',
  'bg-linear-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10',
  'bg-linear-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10',
  'bg-linear-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-900/10 dark:to-amber-900/10',
  'bg-linear-to-br from-cyan-50/50 to-sky-50/50 dark:from-cyan-900/10 dark:to-sky-900/10',
  'bg-linear-to-br from-rose-50/50 to-red-50/50 dark:from-rose-900/10 dark:to-red-900/10'
]
</script>

<template>
  <div class="bg-white dark:bg-gray-950">
    <!-- 用户评价部分 -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            深受开发者与创作者喜爱
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-lg">
            听听来自社区的真实反馈，见证 智言 如何提升工作效率
          </p>
        </div>

        <div
          class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-200 overflow-hidden mask-gradient"
        >
          <!-- Column 1 -->
          <div class="marquee-column space-y-6" style="--duration: 40s">
            <div
              v-for="(review, index) in getColumnReviews(0)"
              :key="`col1-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[index % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon
                  name="i-heroicons-chat-bubble-left-right"
                  class="w-5 h-5 text-gray-200 dark:text-gray-800"
                />
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div
            class="marquee-column space-y-6 hidden md:block"
            style="--duration: 50s; --direction: reverse"
          >
            <div
              v-for="(review, index) in getColumnReviews(1)"
              :key="`col2-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[(index + 2) % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon
                  name="i-heroicons-chat-bubble-left-right"
                  class="w-5 h-5 text-gray-200 dark:text-gray-800"
                />
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="marquee-column space-y-6 hidden lg:block" style="--duration: 45s">
            <div
              v-for="(review, index) in getColumnReviews(2)"
              :key="`col3-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[(index + 4) % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon
                  name="i-heroicons-chat-bubble-left-right"
                  class="w-5 h-5 text-gray-200 dark:text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mask-gradient {
  mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
}

.marquee-column {
  animation: marquee-vertical var(--duration) linear infinite;
  animation-direction: var(--direction, normal);
}

.marquee-column:hover {
  animation-play-state: paused;
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
</style>
