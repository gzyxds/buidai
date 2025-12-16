<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding text-center text-white">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            Code with
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-200">Creative Flow</span>
          </h1>
          <p class="text-xl sm:text-2xl text-purple-100 mb-12 leading-relaxed animation-delay-200 animate-slide-up">
            Where <span class="font-bold text-white">aesthetics meet algorithms</span>. 
            Build digital experiences that feel as good as they look. 
            <span class="block mt-2">Welcome to the future of creative coding.</span>
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6 mb-16 animation-delay-400 animate-slide-up">
            <button class="glass-effect px-10 py-4 rounded-xl text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span class="flex items-center">
                Start Your Vibe
                <SparklesIcon class="ml-2 w-6 h-6" />
              </span>
            </button>
            <button class="bg-white/10 border border-white/30 px-10 py-4 rounded-xl text-lg font-semibold text-white hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
              Explore Creations
            </button>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 animation-delay-600 animate-slide-up">
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">100K+</div>
              <div class="text-purple-200 text-sm">Creative Coders</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">50K</div>
              <div class="text-purple-200 text-sm">Projects Built</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">∞</div>
              <div class="text-purple-200 text-sm">Inspiration</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-1">24/7</div>
              <div class="text-purple-200 text-sm">Creative Flow</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Tools -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Tools That Spark Joy
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beautifully crafted development tools that make coding feel like art.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VibeFeature
            v-for="(feature, index) in vibeFeatures"
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :gradient="feature.gradient"
            :class="`animation-delay-${index * 100 + 200} animate-slide-up`"
          />
        </div>
      </div>
    </section>

    <!-- Creative Workflow -->
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Creative
              <span class="gradient-text">Coding Sanctuary</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Ditch the boring terminals and bland editors. Our environment is designed 
              to inspire creativity and make every coding session feel like a zen experience.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PaintBrushIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Aesthetic Code Editor</h3>
                  <p class="text-gray-600 dark:text-gray-300">Beautiful syntax highlighting with custom themes that make your code look like poetry.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MusicalNoteIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Focus Soundscapes</h3>
                  <p class="text-gray-600 dark:text-gray-300">Ambient sounds and lo-fi beats curated specifically for deep coding sessions.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EyeIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Live Visual Preview</h3>
                  <p class="text-gray-600 dark:text-gray-300">See your creations come to life in real-time with our smooth preview system.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="glass-effect rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div class="bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div class="flex items-center mb-4">
                  <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-gray-400 ml-2">Vibe Editor</span>
                </div>
                <div class="space-y-2">
                  <div class="text-purple-300">const magic = () => {</div>
                  <div class="ml-4 text-blue-300">return creativity.unleash()</div>
                  <div class="ml-4 text-yellow-300">.withStyle(aesthetic)</div>
                  <div class="ml-4 text-green-300">.addVibes(infinite)</div>
                  <div class="text-purple-300">}</div>
                  <div class="text-gray-400 mt-4">✨ Your masterpiece awaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Vibes -->
    <section class="section-padding gradient-bg">
      <div class="max-w-7xl mx-auto container-padding text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Join the Creative Collective
        </h2>
        <p class="text-xl text-purple-100 mb-16 max-w-2xl mx-auto">
          Connect with like-minded creators who believe coding is an art form.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-effect rounded-2xl p-8 text-center">
            <div class="text-5xl font-bold text-white mb-3">Daily</div>
            <div class="text-purple-200 font-medium mb-2">Creative Challenges</div>
            <div class="text-purple-100 text-sm">Push your boundaries with fun prompts</div>
          </div>
          <div class="glass-effect rounded-2xl p-8 text-center">
            <div class="text-5xl font-bold text-white mb-3">Share</div>
            <div class="text-purple-200 font-medium mb-2">Your Creations</div>
            <div class="text-purple-100 text-sm">Show off your beautiful code art</div>
          </div>
          <div class="glass-effect rounded-2xl p-8 text-center">
            <div class="text-5xl font-bold text-white mb-3">Learn</div>
            <div class="text-purple-200 font-medium mb-2">From Masters</div>
            <div class="text-purple-100 text-sm">Tutorials from creative coding legends</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Elevate
          <span class="block gradient-text">Your Code Aesthetic?</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Join thousands of creative coders who've discovered the joy of beautiful development.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="btn-primary px-10 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span class="flex items-center">
              Begin Your Journey
              <ArrowRightIcon class="ml-2 w-5 h-5" />
            </span>
          </button>
          <button class="btn-secondary px-10 py-4 text-lg font-semibold">
            Watch Demo
          </button>
        </div>
        
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-8">
          Free forever • No credit card • Join the vibe immediately
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  SparklesIcon,
  ArrowRightIcon, 
  PaintBrushIcon, 
  MusicalNoteIcon, 
  EyeIcon,
  HeartIcon,
  LightBulbIcon,
  CodeBracketIcon,
  SwatchIcon,
  BeakerIcon,
  CameraIcon
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'Vibe Coding - Where Creativity Meets Code',
  meta: [
    { name: 'description', content: 'Build beautiful digital experiences with tools that inspire. Where aesthetics meet algorithms in perfect harmony.' }
  ]
})

const vibeFeatures = [
  {
    icon: PaintBrushIcon,
    title: 'Aesthetic Editor',
    description: 'Code in style with beautiful themes, smooth animations, and interfaces that spark joy.',
    gradient: 'from-primary-500 to-purple-500'
  },
  {
    icon: SwatchIcon,
    title: 'Color Harmony',
    description: 'AI-powered color palette generator that creates perfect combinations for your projects.',
    gradient: 'from-accent-500 to-green-500'
  },
  {
    icon: MusicalNoteIcon,
    title: 'Focus Soundscapes',
    description: 'Curated lo-fi beats and ambient sounds designed for deep, creative coding sessions.',
    gradient: 'from-blue-500 to-primary-500'
  },
  {
    icon: BeakerIcon,
    title: 'Creative Labs',
    description: 'Experiment with new ideas in our playground built for artistic expression.',
    gradient: 'from-purple-500 to-accent-500'
  },
  {
    icon: CameraIcon,
    title: 'Share Creations',
    description: 'Showcase your beautiful code with automatic screenshots and social sharing.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: HeartIcon,
    title: 'Mindful Coding',
    description: 'Break reminders, breathing exercises, and wellness features for healthy coding.',
    gradient: 'from-red-500 to-purple-500'
  }
]
</script>