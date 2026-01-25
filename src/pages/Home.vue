<script setup lang="ts">
import Hero from "@/components/layout/Hero.vue";
import Feature from "@/components/layout/Feature.vue";
import WhyUs from "@/components/layout/WhyUs.vue";
import CTA from "@/components/layout/CTA.vue";


import { useHead } from '@vueuse/head'

useHead({
  title: 'Car Rental in Marrakech | Best Prices',
  meta: [
    { name: 'description', content: 'Rent a car in Marrakech with full insurance, free delivery and 24/7 support.' },
    { name: 'keywords', content: 'car rental Marrakech, Morocco, cheap cars' },
    { property: 'og:title', content: 'Car Rental in Marrakech' },
    { property: 'og:description', content: 'Smooth and affordable car rental service in Morocco.' },
  ]
})

</script>

<template>
  <main>
    <Hero />
    <Feature />
    <WhyUs />
    <CTA />
  </main>
</template>

<style scoped>

</style>