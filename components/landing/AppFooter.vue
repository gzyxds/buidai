<template>
  <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        <div class="col-span-2 lg:col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-lg">B</span>
            </div>
            <span class="font-bold text-xl text-gray-900">BuildingAI</span>
          </NuxtLink>
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
            BuildingAI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。
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

        <div>
          <h4 class="font-bold text-gray-900 mb-4">产品</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-primary-600 transition-colors">功能特性</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">解决方案</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">价格方案</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">更新日志</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-4">资源</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-primary-600 transition-colors">文档中心</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">API 参考</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">社区论坛</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">博客文章</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 mb-4">公司</h4>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#" class="hover:text-primary-600 transition-colors">关于我们</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">加入我们</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">联系方式</a></li>
            <li><a href="#" class="hover:text-primary-600 transition-colors">隐私政策</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © 2024 BuildingAI. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm text-gray-400">
          <a href="#" class="hover:text-primary-600 transition-colors">服务条款</a>
          <a href="#" class="hover:text-primary-600 transition-colors">隐私政策</a>
          <a href="#" class="hover:text-primary-600 transition-colors">Cookie 设置</a>
        </div>
      </div>
    </div>
  </footer>
</template>
