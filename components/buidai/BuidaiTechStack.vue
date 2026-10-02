<template>
  <!-- 技术栈展示 -->
  <section class="border-t border-neutral-200 bg-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 py-5 md:py-6">
        <div class="text-xs sm:text-sm text-neutral-400 text-center md:text-left shrink-0">
          <span class="font-bold text-neutral-700">智言AI</span>
          <span class="ml-1 md:ml-2 font-semibold">基于流行的技术栈构建</span>
        </div>
        <div class="flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 w-full md:w-auto">
          <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
            <span class="text-blue-500 font-bold text-base sm:text-lg">TS</span>
            <span class="font-medium text-sm">TypeScript</span>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
            <svg class="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span class="font-medium text-sm">PostgreSQL</span>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
            <span class="text-red-500 font-bold text-base sm:text-lg">N</span>
            <span class="font-medium text-sm">NestJS</span>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
            <span class="text-green-500 font-bold text-base sm:text-lg">V</span>
            <span class="font-medium text-sm">Vue 3</span>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-600 shrink-0">
            <span class="text-green-400 font-bold text-base sm:text-lg">N</span>
            <span class="font-medium text-sm">Nuxt 4</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
