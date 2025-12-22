<template>
  <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-12">
        <div class="col-span-2 lg:col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-3 mb-6">
            <img src="/AppFooter.svg" alt="BuidAI" class="h-6 w-auto" />
          </NuxtLink>
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
            必定AI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
            </a>
          </div>
        </div>

        <!-- 移动端风琴菜单 / 桌面端列表 -->
        <div class="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          <div v-for="(group, index) in footerLinks" :key="index" class="border-b md:border-none border-gray-100 last:border-none">
            <button
              @click="toggleGroup(index)"
              class="w-full flex items-center justify-between py-4 md:py-0 text-left group outline-none md:cursor-default"
            >
              <h4 class="font-bold text-gray-900 md:mb-4">{{ group.title }}</h4>
              <span class="md:hidden transform transition-transform duration-200" :class="activeGroups.includes(index) ? 'rotate-180' : ''">
                <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:h-auto"
              :class="activeGroups.includes(index) ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-full'"
            >
              <ul class="space-y-3 text-sm text-gray-500">
                <li v-for="(link, lIndex) in group.links" :key="lIndex">
                  <!-- Custom rendering for "Contact Us" section (last item) -->
                  <template v-if="group.customContent">
                    <div v-if="link.type === 'qq'" class="flex items-center space-x-2">
                      <span class="font-medium">QQ:</span>
                      <span>{{ link.text }}</span>
                    </div>
                    <div v-else-if="link.type === 'social'" class="flex flex-col space-y-2">
                       <div class="flex items-center space-x-2">
                        <span class="font-medium">微信:</span>
                        <span>{{ link.text }}</span>
                      </div>
                      <div class="flex space-x-2 pt-2">
                        <div class="flex flex-col items-center space-y-1">
                          <img src="/qrcode.png" alt="QQ QR Code" class="w-20 h-20 object-contain bg-gray-50 p-1 rounded border border-gray-100" />
                          <span class="text-xs text-gray-400">QQ群</span>
                        </div>
                        <div class="flex flex-col items-center space-y-1">
                          <img src="/wechat.png" alt="WeChat QR Code" class="w-20 h-20 object-contain bg-gray-50 p-1 rounded border border-gray-100" />
                          <span class="text-xs text-gray-400">微信客服</span>
                        </div>
                      </div>
                    </div>
                  </template>

                  <!-- Standard Links -->
                  <template v-else>
                    <NuxtLink
                      v-if="link.to"
                      :to="link.to"
                      class="hover:text-primary-600 transition-colors block py-1 md:py-0"
                    >
                      {{ link.text }}
                    </NuxtLink>
                    <a
                      v-else
                      :href="link.href || '#'"
                      class="hover:text-primary-600 transition-colors block py-1 md:py-0"
                    >
                      {{ link.text }}
                    </a>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p class="text-gray-400 text-sm">
            © 2026 必定AI BuidAI. All rights reserved.
          </p>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="text-gray-400 text-sm hover:text-primary-600 transition-colors">
           赣ICP备2023002309号
          </a>
        </div>
        <div class="flex space-x-6 text-sm text-gray-400">
          <a href="#" class="hover:text-primary-600 transition-colors">服务条款</a>
          <a href="#" class="hover:text-primary-600 transition-colors">隐私政策</a>
          <a href="#" class="hover:text-primary-600 transition-colors">Cookie 设置</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeGroups = ref<number[]>([4]) // 默认展开第5个（索引4）即“关注我们”

const toggleGroup = (index: number) => {
  if (window.innerWidth >= 768) return // Disable toggle on desktop

  const idx = activeGroups.value.indexOf(index)
  if (idx === -1) {
    activeGroups.value.push(index)
  } else {
    activeGroups.value.splice(idx, 1)
  }
}

interface FooterLink {
  text: string;
  href?: string;
  to?: string;
  type?: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
  customContent?: boolean;
}

const footerLinks: FooterGroup[] = [
  {
    title: '产品',
    links: [
      { text: '功能特性', href: '#' },
      { text: '解决方案', href: '#' },
      { text: '价格方案', href: '#' },
      { text: '更新日志', href: '#' }
    ]
  },
  {
    title: '应用市场',
    links: [
      { text: '独立应用', href: '#' },
      { text: '扩展应用', href: '#' },
      { text: '图像视频', href: '#' },
      { text: '智能写作', href: '#' }
    ]
  },
  {
    title: '资源中心',
    links: [
      { text: '文档中心', href: '/docs' },
      { text: 'API 参考', href: '#' },
      { text: 'APP下载', href: '/download' },
      { text: '博客文章', href: '/blog' }
    ]
  },
  {
    title: '公司介绍',
    links: [
      { text: '关于我们', to: '/about' },
      { text: '加入我们', href: '#' },
      { text: '联系方式', href: '/contact' },
      { text: '隐私政策', href: '#' }
    ]
  },
  {
    title: '关注我们',
    customContent: true,
    links: [
      { type: 'qq', text: '236749035' },
      { type: 'social', text: 'userhlc' }
    ]
  }
]
</script>
