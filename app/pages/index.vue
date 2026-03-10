<script setup lang="ts">
import CTA from '~/components/pages/home/CTA.vue';
import Hero from '~/components/pages/home/Hero.vue';
import Investing from '~/components/pages/home/Investing.vue';
import Portfolio from '~/components/pages/home/Portfolio.vue';
import WhatWeBelieve from '~/components/sections/WhatWeBelieve.vue';
import Companies from '~/components/sections/Companies.vue';

useSeo({
  description: 'We back the founders of tomorrow’s tech legacy',
});
</script>

<template>
  <main>
    <Hero />
    <Companies />
    <Investing />
    <CTA />
    <Portfolio />
    <WhatWeBelieve />
  </main>
</template>
