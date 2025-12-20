<script setup lang="ts">
defineProps<{
  versions: any[]
}>()
</script>

<template>
  <div class="">
    <div
      v-for="version in versions"
      :key="version.title"
      class="relative pl-0 sm:pl-40 py-8 group"
    >
      <!-- Timeline Line -->
      <div class="hidden sm:block absolute left-4 sm:left-32 top-0 bottom-0 w-px bg-gray-200 group-last:bottom-auto group-last:h-8"></div>

      <!-- Date Badge (Desktop) -->
      <div class="hidden sm:flex absolute left-0 top-8 w-28 justify-end">
        <span class="text-sm font-medium text-gray-500">{{ version.date }}</span>
      </div>

      <!-- Timeline Dot -->
      <div class="hidden sm:block absolute left-4 sm:left-32 top-8 w-4 h-4 rounded-full border-2 border-white shadow-sm -translate-x-1/2 z-10"
           :class="version.isMajor ? 'bg-primary-600 ring-4 ring-primary-600/10' : 'bg-gray-300'">
      </div>

      <!-- Content Card -->
      <div class="w-full relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <!-- Mobile Date -->
        <div class="sm:hidden flex items-center gap-2 mb-3">
          <span class="text-sm font-medium text-gray-500">{{ version.date }}</span>
          <span v-if="version.isMajor" class="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
        </div>

        <div class="flex flex-col gap-4 mb-4">
          <div class="grow">
            <div class="flex items-center gap-3 mb-2 flex-wrap">
              <h2 class="text-xl font-bold text-gray-900">{{ version.title }}</h2>
              <span v-if="version.isMajor" class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-600">
                Major
              </span>
            </div>
          </div>

          <NuxtLink
            v-if="version.to && version.to !== '#'"
            :to="version.to"
            :target="version.target || '_blank'"
            class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 shrink-0"
          >
            查看详情
            <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Body Content -->
        <div class="text-gray-600 leading-relaxed mb-6 prose prose-sm max-w-none prose-primary">
          <ContentRenderer :value="version" />
        </div>

        <div v-if="version.image" class="rounded-xl overflow-hidden border border-gray-100 mb-6">
          <img :src="version.image" :alt="version.title" class="w-full h-auto object-cover" loading="lazy" />
        </div>

        <div v-if="version.authors?.length" class="flex items-center gap-3 pt-4 border-t border-gray-50">
          <div class="flex -space-x-2">
            <img
              v-for="author in version.authors"
              :key="author.name"
              :src="author.avatar.src"
              :alt="author.avatar.alt"
              class="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100"
            />
          </div>
          <div class="text-sm text-gray-500">
            发布者: <span class="font-medium text-gray-900">{{ version.authors.map((a: any) => a.name).join(', ') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
