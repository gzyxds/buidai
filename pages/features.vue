<template>
  <div>
    <!-- Hero Section -->
    <section class="relative section-padding gradient-bg overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-accent-300 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto container-padding text-center text-white">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
            Tools for
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-200">Creative Expression</span>
          </h1>
          <p class="text-xl text-purple-100 mb-12 leading-relaxed animation-delay-200 animate-slide-up">
            Every feature designed with love. Every interaction crafted for joy. 
            <span class="block mt-2">Because beautiful code deserves beautiful tools.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Core Creative Tools -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Your Creative Coding Toolkit
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Handcrafted tools that make coding feel like an art form.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CreativeTool
            v-for="(tool, index) in creativeTools"
            :key="tool.title"
            :icon="tool.icon"
            :title="tool.title"
            :description="tool.description"
            :badge="tool.badge"
            :class="`animation-delay-${index * 100 + 200} animate-slide-up`"
          />
        </div>
      </div>
    </section>

    <!-- Aesthetic Code Editor -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <CodeBracketIcon class="w-4 h-4 mr-2" />
              Editor Experience
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Code Like You're
              <span class="gradient-text">Painting Art</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our editor isn't just functional—it's beautiful. Every keystroke feels smooth, 
              every color has meaning, and every feature sparks creativity.
            </p>
            
            <div class="space-y-4">
              <CreativeFeature 
                title="Aesthetic Syntax Highlighting"
                description="Custom color schemes that make your code look like poetry with meaning."
              />
              <CreativeFeature 
                title="Smooth Animations"
                description="Every interaction flows naturally with delightful micro-animations."
              />
              <CreativeFeature 
                title="Zen Mode"
                description="Distraction-free environment that helps you enter the creative flow state."
              />
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-2xl p-6 text-green-400 font-mono text-sm shadow-2xl">
              <div class="flex items-center mb-4">
                <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span class="text-gray-400 ml-2">✨ Aesthetic Editor</span>
              </div>
              <div class="space-y-2">
                <div class="text-pink-300">function createMagic() {</div>
                <div class="text-blue-400 ml-4">const inspiration = getVibes()</div>
                <div class="text-purple-400 ml-4">const creativity = unleash(mind)</div>
                <div class="text-green-400 ml-4">const beauty = merge(logic, art)</div>
                <div class="text-yellow-400 ml-4">return masterpiece.build()</div>
                <div class="text-pink-300">}</div>
                <div class="text-gray-400 mt-4">🎨 Beauty in every line</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Flow Features -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="grid grid-cols-2 gap-6">
              <FlowMetric
                icon="🎵"
                value="Lo-fi"
                label="Curated Playlists"
                description="Music for deep focus"
              />
              <FlowMetric
                icon="🎨"
                value="∞"
                label="Color Palettes"
                description="AI-generated harmony"
              />
              <FlowMetric
                icon="✨"
                value="Live"
                label="Preview Magic"
                description="See changes instantly"
              />
              <FlowMetric
                icon="🧘"
                value="Zen"
                label="Mindful Breaks"
                description="Wellness integrated"
              />
            </div>
          </div>
          
          <div class="order-1 lg:order-2">
            <div class="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <HeartIcon class="w-4 h-4 mr-2" />
              Flow State
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay in the Zone.
              <span class="block text-accent-200">Create Without Limits.</span>
            </h2>
            <p class="text-lg text-purple-100 mb-8 leading-relaxed">
              We've studied the psychology of creativity to build features that 
              keep you in flow state longer and make coding genuinely enjoyable.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center text-white">
                <SparklesIcon class="w-5 h-5 text-accent-200 mr-3 flex-shrink-0" />
                <span>Ambient soundscapes designed for deep work</span>
              </div>
              <div class="flex items-center text-white">
                <SparklesIcon class="w-5 h-5 text-accent-200 mr-3 flex-shrink-0" />
                <span>Smart break reminders with breathing exercises</span>
              </div>
              <div class="flex items-center text-white">
                <SparklesIcon class="w-5 h-5 text-accent-200 mr-3 flex-shrink-0" />
                <span>Progress visualization that motivates</span>
              </div>
              <div class="flex items-center text-white">
                <SparklesIcon class="w-5 h-5 text-accent-200 mr-3 flex-shrink-0" />
                <span>Community showcases for inspiration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Community -->
    <section class="section-padding bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto container-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold gradient-text mb-6">
            Connect with Creators
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join a community that celebrates code as art and shares the joy of creative expression.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CommunityFeature
            v-for="(feature, index) in communityFeatures"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :features="feature.highlights"
            :gradient="feature.gradient"
            :class="`animation-delay-${index * 200 + 200} animate-slide-up`"
          />
        </div>
      </div>
    </section>

    <!-- Inspiration Gallery -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto container-padding text-center">
        <div class="inline-flex items-center bg-accent-100 dark:bg-accent-900 px-4 py-2 rounded-full text-accent-700 dark:text-accent-300 text-sm font-medium mb-6">
          <CameraIcon class="w-4 h-4 mr-2" />
          Creative Showcase
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Be Inspired Daily
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          Discover beautiful code creations from our community and get inspired for your next project.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InspirationCard
            v-for="(item, index) in inspirationItems"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :type="item.type"
            :class="`animation-delay-${index * 100 + 200} animate-slide-up`"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding gradient-bg">
      <div class="max-w-4xl mx-auto container-padding text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Create Something Beautiful?
        </h2>
        <p class="text-xl text-purple-100 mb-12">
          Join thousands of creative coders who've found their flow with our tools.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="glass-effect px-10 py-4 rounded-xl text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Creating
            <SparklesIcon class="ml-2 w-6 h-6 inline" />
          </button>
          <button class="bg-white text-primary-600 hover:bg-gray-50 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Explore Gallery
          </button>
        </div>
        
        <p class="text-purple-200 text-sm mt-8">
          Free to start • Unlimited creativity • Join the vibe
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  SparklesIcon,
  CodeBracketIcon,
  HeartIcon,
  CameraIcon,
  PaintBrushIcon,
  MusicalNoteIcon,
  EyeIcon,
  SwatchIcon,
  BeakerIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

// SEO Meta
useHead({
  title: 'Creative Tools - Vibe Coding | Where Art Meets Algorithm',
  meta: [
    { name: 'description', content: 'Discover beautiful coding tools designed for creative expression. Aesthetic editors, flow state features, and inspiring community.' }
  ]
})

const creativeTools = [
  {
    icon: PaintBrushIcon,
    title: 'Aesthetic Editor',
    description: 'Beautiful syntax highlighting with custom themes that make your code look like art.',
    badge: 'Popular'
  },
  {
    icon: SwatchIcon,
    title: 'Color Harmony',
    description: 'AI-powered palette generator that creates perfect color combinations for your projects.',
    badge: 'Smart'
  },
  {
    icon: MusicalNoteIcon,
    title: 'Focus Soundscapes',
    description: 'Curated lo-fi playlists and ambient sounds designed for creative coding sessions.',
    badge: 'Flow'
  },
  {
    icon: EyeIcon,
    title: 'Live Preview',
    description: 'See your creations come to life instantly with smooth, real-time previews.',
    badge: 'Magic'
  },
  {
    icon: BeakerIcon,
    title: 'Creative Labs',
    description: 'Experiment with new ideas in our playground built for artistic expression.',
    badge: 'Playground'
  },
  {
    icon: PhotoIcon,
    title: 'Visual Sharing',
    description: 'Share your beautiful code with automatic screenshots and social integrations.',
    badge: 'Social'
  }
]

const communityFeatures = [
  {
    title: 'Daily Creative Challenges',
    description: 'Push your boundaries with fun, inspiring coding prompts that spark new ideas.',
    highlights: [
      'New challenges every day',
      'Community voting and feedback',
      'Featured creations showcase',
      'Achievement badges and rewards'
    ],
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Learn from Masters',
    description: 'Tutorials and workshops from creative coding legends and digital artists.',
    highlights: [
      'Expert-led workshops',
      'Interactive tutorials',
      'Behind-the-scenes content',
      'Q&A sessions with pros'
    ],
    gradient: 'from-green-500 to-blue-500'
  }
]

const inspirationItems = [
  {
    title: 'Generative Art',
    description: 'Algorithmic beauty created by community members',
    type: 'Interactive'
  },
  {
    title: 'Data Visualizations',
    description: 'Stories told through beautiful data representations',
    type: 'Visual'
  },
  {
    title: 'Creative Websites',
    description: 'Unique web experiences that push boundaries',
    type: 'Experience'
  }
]
</script>