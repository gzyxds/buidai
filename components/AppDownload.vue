<template>
  <section class="py-24 bg-white relative overflow-hidden" id="download">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-purple-50/50 to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/2 bg-linear-to-tr from-blue-50/50 to-transparent pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          下载 BuidAI 客户端
        </h2>
        <p class="text-lg text-neutral-500 leading-relaxed">
          支持 macOS、Windows、Linux 及 微信小程序，随时随地开启 AI 办公新体验。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- macOS -->
        <div class="group relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-ui-primary/30 hover:-translate-y-1 transition-all duration-300">
          <div class="w-16 h-16 mx-auto bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-900 mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74 1.6.21 2.92.93 3.69 2.1-.15.09-2.16 1.3-2.14 3.96.03 3.12 2.67 4.19 2.72 4.22-.03.07-.43 1.56-1.44 3.06-.85 1.27-1.74 2.52-2.9 2.58zM12.03 7.25c-.15-1.54.82-2.88 1.56-3.79.88-1.04 2.37-1.73 3.69-1.68.18 1.6-1.04 3.25-1.85 4.18-.93 1.09-2.4 1.76-3.4 1.29z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 text-center mb-2">macOS</h3>
          <p class="text-sm text-neutral-400 text-center mb-6">支持 Apple Silicon & Intel</p>
          <div class="space-y-3">
            <button class="w-full py-2.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-ui-primary transition-colors flex items-center justify-center gap-2">
              <span class="text-sm">下载安装包</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
            <div class="text-xs text-center text-neutral-400">版本 v1.2.0</div>
          </div>
        </div>

        <!-- Windows -->
        <div class="group relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-ui-primary/30 hover:-translate-y-1 transition-all duration-300">
          <div class="w-16 h-16 mx-auto bg-blue-50/50 rounded-2xl flex items-center justify-center text-[#0078D6] mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.388 2.126V11.53H0V3.449zm10.742-1.472L24 0v11.53H10.742V1.977zm0 10.966H24V24L10.742 22.036V12.943zm-10.742 0H9.388V21.84L0 20.536V12.943z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 text-center mb-2">Windows</h3>
          <p class="text-sm text-neutral-400 text-center mb-6">Windows 10/11 64位</p>
          <div class="space-y-3">
            <button class="w-full py-2.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-ui-primary transition-colors flex items-center justify-center gap-2">
              <span class="text-sm">下载安装包</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
            <div class="text-xs text-center text-neutral-400">版本 v1.2.0</div>
          </div>
        </div>

        <!-- Linux -->
        <div class="group relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-ui-primary/30 hover:-translate-y-1 transition-all duration-300">
          <div class="w-16 h-16 mx-auto bg-yellow-50/50 rounded-2xl flex items-center justify-center text-neutral-800 mb-6 group-hover:scale-110 transition-transform duration-300">
             <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M10 9h4v6h-4z"/>
             </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 text-center mb-2">Linux</h3>
          <p class="text-sm text-neutral-400 text-center mb-6">Ubuntu / Debian / CentOS</p>
          <div class="space-y-3">
            <button class="w-full py-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-700 font-medium hover:border-ui-primary hover:text-ui-primary transition-colors flex items-center justify-center gap-2">
              <span class="text-sm">敬请期待</span>
            </button>
            <div class="text-xs text-center text-neutral-400">开发中</div>
          </div>
        </div>

        <!-- WeChat Mini Program -->
        <div class="group relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-ui-primary/30 hover:-translate-y-1 transition-all duration-300">
          <div class="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center text-[#07C160] mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5c-3.7 0-6.7 2.4-6.7 5.3 0 1.6.9 3 2.3 4l-.6 1.9 2-1.1c.9.3 1.9.4 2.9.4h.1c-.1-.4-.1-.8-.1-1.2 0-2.8 2.7-5.2 6.1-5.2 1.2 0 2.3.3 3.3.8-.7-2.9-4.8-4.9-9.3-4.9zm6.6 3.6c-3.3 0-6 2.1-6 4.7 0 1 .4 2 1.2 2.8l-.7 1.9 2.2-1.2c.9.4 1.9.6 2.9.6.3 0 .7 0 1-.1.3 0 .6.1.9.1 3.3 0 6-2.1 6-4.7s-2.7-4.7-6-4.7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 text-center mb-2">微信小程序</h3>
          <p class="text-sm text-neutral-400 text-center mb-6">无需下载，即用即走</p>
          <div class="space-y-3 relative">
            <button 
              class="w-full py-2.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-[#07C160] transition-colors flex items-center justify-center gap-2 peer"
            >
              <span class="text-sm">扫码体验</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 6h6v6H6V6zm12 0h-6v6h6V6zm-6 12H6v-6h6v6z"/></svg>
            </button>
            <div class="text-xs text-center text-neutral-400">手机微信扫描</div>

            <!-- QR Code Popup -->
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 h-40 bg-white rounded-xl shadow-xl border border-neutral-100 p-2 opacity-0 scale-95 pointer-events-none peer-hover:opacity-100 peer-hover:scale-100 peer-hover:pointer-events-auto transition-all duration-200 origin-bottom z-20">
              <div class="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400 text-xs">
                <!-- Replace with actual QR code -->
                <span>二维码占位符</span>
              </div>
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-neutral-100 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部提示 -->
      <div class="mt-12 text-center">
        <p class="text-sm text-neutral-400">
          系统要求：macOS 11.0+, Windows 10 (1903)+, Linux Kernel 5.0+
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * AppDownload Component
 * 
 * 展示 APP 下载入口，支持 macOS, Windows, Linux 和 微信小程序
 * 包含平台图标、说明文案及下载/扫码按钮
 */
</script>
