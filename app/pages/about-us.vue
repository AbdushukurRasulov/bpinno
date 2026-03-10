<script setup lang="ts">
import Hero from '~/components/pages/about/Hero.vue';
import OurPhilosophy from '~/components/pages/about/OurPhilosophy.vue';
import OurStory from '~/components/pages/about/OurStory.vue';
import WhatWeBelieve from '~/components/sections/WhatWeBelieve.vue';

useSeo({
  description: 'Investing with vision, conviction, and strategic purpose',
});
</script>

<template>
  <main>
    <Hero />
    <OurStory />
    <OurPhilosophy />
    <WhatWeBelieve />
  </main>
</template>
