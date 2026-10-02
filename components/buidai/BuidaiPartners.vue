<script setup lang="ts">
/**
 * 合作伙伴区块
 */
const partnerLogos = [
  'i-simple-icons-github', 'i-simple-icons-discord', 'i-simple-icons-x',
  'i-simple-icons-instagram', 'i-simple-icons-linkedin', 'i-simple-icons-facebook',
]
</script>

<template>
  <!-- 合作伙伴 -->
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <UPageLogos title="Trusted by the best front-end teams" marquee :items="partnerLogos" />
    </div>
  </section>
</template>
