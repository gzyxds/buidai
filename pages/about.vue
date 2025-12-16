<template>
  <div>
    <!-- Hero Section -->
    <section class="relative section-padding gradient-bg overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-80 h-80 bg-accent-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding text-center text-white">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
            Coding Is
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-200">An Art Form</span>
          </h1>
          <p class="text-xl text-purple-100 mb-12 leading-relaxed animation-delay-200 animate-slide-up">
            We believe programming should be joyful, creative, and beautiful. 
            <span class="block mt-2">Welcome to a platform built for artists who happen to code.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <HeartIcon class="w-4 h-4 mr-2" />
              Our Philosophy
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              When Code Becomes
              <span class="gradient-text">Poetry</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Programming isn't just about solving problems—it's about expressing ideas, 
              creating beauty, and bringing imagination to life through elegant solutions.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Vibe Coding was born from the belief that development tools should inspire, 
              not frustrate. Every feature is crafted to spark creativity and maintain 
              that magical flow state where your best work happens.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                  <SparklesIcon class="w-5 h-5 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Beauty in simplicity</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
                  <SparklesIcon class="w-5 h-5 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Joy in every interaction</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                  <SparklesIcon class="w-5 h-5 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Flow over friction</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-3">
                  <SparklesIcon class="w-5 h-5 text-white" />
                </div>
                <span class="text-gray-700 dark:text-gray-300 font-medium">Community over competition</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="glass-effect rounded-2xl p-8 border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
              <div class="text-center">
                <div class="text-4xl font-bold gradient-text mb-2">✨</div>
                <div class="text-gray-600 dark:text-gray-400 mb-6 text-lg font-medium">The Vibe Manifesto</div>
                
                <div class="space-y-4 text-left">
                  <div class="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                    <div class="text-primary-600 dark:text-primary-400 font-medium mb-1">Create</div>
                    <div class="text-gray-700 dark:text-gray-300 text-sm">Code should be an act of creation, not just computation.</div>
                  </div>
                  <div class="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                    <div class="text-accent-600 dark:text-accent-400 font-medium mb-1">Flow</div>
                    <div class="text-gray-700 dark:text-gray-300 text-sm">Tools should disappear, leaving only you and your ideas.</div>
                  </div>
                  <div class="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                    <div class="text-purple-600 dark:text-purple-400 font-medium mb-1">Share</div>
                    <div class="text-gray-700 dark:text-gray-300 text-sm">Beautiful code deserves to be celebrated and shared.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Values -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Drives Our Creativity
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we build and every decision we make.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CreativeValue
            v-for="(value, index) in creativeValues"
            :key="value.title"
            :icon="value.icon"
            :title="value.title"
            :description="value.description"
            :class="`animation-delay-${index * 100 + 200} animate-slide-up`"
          />
        </div>
      </div>
    </section>

    <!-- Community Impact -->
    <section class="section-padding gradient-bg">
      <div class="max-w-7xl mx-auto container-padding text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-12">
          Creating Ripples of Inspiration
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-2">100K+</div>
            <div class="text-purple-200 font-medium">Creative Coders</div>
          </div>
          <div class="text-center">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-2">1M+</div>
            <div class="text-purple-200 font-medium">Projects Created</div>
          </div>
          <div class="text-center">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
            <div class="text-purple-200 font-medium">Countries</div>
          </div>
          <div class="text-center">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-2">∞</div>
            <div class="text-purple-200 font-medium">Possibilities</div>
          </div>
        </div>
        
        <p class="text-lg text-purple-100 mb-8">
          Join a global community of creators who believe code can be beautiful, joyful, and inspiring.
        </p>
      </div>
    </section>

    <!-- Creative Workspace -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for
              <span class="gradient-text">Creative Minds</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Every pixel, every interaction, every feature is designed with creativity in mind. 
              We don't just build tools—we craft experiences that make you excited to code.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CreativeWorkflow title="Aesthetic First" description="Beautiful interfaces that inspire creativity" />
              <CreativeWorkflow title="Flow State" description="Features designed to maintain deep focus" />
              <CreativeWorkflow title="Collaborative" description="Share and create together seamlessly" />
              <CreativeWorkflow title="Intuitive" description="Tools that feel natural and joyful to use" />
            </div>
          </div>
          
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
                  <div class="text-2xl mb-2">🎨</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Design-Focused</div>
                </div>
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
                  <div class="text-2xl mb-2">🎵</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Music Integration</div>
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
                  <div class="text-2xl mb-2">✨</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Magical UX</div>
                </div>
                <div class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg">
                  <div class="text-2xl mb-2">🌈</div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Vibrant Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join the Movement -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Join the Creative Revolution
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Ready to transform your coding experience? Let's create something beautiful together.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="btn-primary px-10 py-4 text-lg font-semibold">
            <span class="flex items-center">
              Start Creating
              <SparklesIcon class="ml-2 w-5 h-5" />
            </span>
          </button>
          <button class="btn-secondary px-10 py-4 text-lg font-semibold">
            Explore Community
          </button>
        </div>
        
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-8">
          Free to join • Always inspiring • Creative vibes only
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  HeartIcon, 
  SparklesIcon,
  LightBulbIcon, 
  PaintBrushIcon, 
  MusicalNoteIcon, 
  EyeIcon, 
  BeakerIcon, 
  CameraIcon 
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'About - Vibe Coding | Where Code Becomes Art',
  meta: [
    { name: 'description', content: 'Learn about Vibe Coding philosophy. We believe programming should be joyful, creative, and beautiful.' }
  ]
})

const creativeValues = [
  {
    icon: PaintBrushIcon,
    title: 'Aesthetic Excellence',
    description: 'Beauty isn\'t superficial—it\'s fundamental to great user experiences and joyful coding.'
  },
  {
    icon: LightBulbIcon,
    title: 'Creative Innovation',
    description: 'We push boundaries and challenge conventions to create tools that truly inspire.'
  },
  {
    icon: MusicalNoteIcon,
    title: 'Rhythmic Flow',
    description: 'Like music, great code has rhythm and harmony. Our tools help you find your groove.'
  },
  {
    icon: EyeIcon,
    title: 'Visual Storytelling',
    description: 'Every line of code tells a story. We help you make yours beautiful and meaningful.'
  },
  {
    icon: BeakerIcon,
    title: 'Experimental Spirit',
    description: 'Creativity requires experimentation. Our playground encourages bold exploration.'
  },
  {
    icon: CameraIcon,
    title: 'Share the Joy',
    description: 'Beautiful creations deserve to be shared, celebrated, and inspire others.'
  }
]
</script>