<script setup lang="ts">
const data = [
  {
    id: 1,
    title: 'Founder-First',
    text: 'We back ambitious entrepreneurs and respect their vision; our role is to enable and amplify, not to dictate product decisions.',
    img: 'founder-first',
  },
  {
    id: 2,
    title: 'Technology-Driven',
    text: 'We invest in technology as the primary lever for innovation and scale, targeting ventures where engineering excellence matters.',
    img: 'technology-driven',
  },

  {
    id: 3,
    title: 'Systems & Discipline',
    text: 'We bring process, measurement, and architectural thinking to unlock repeatable growth and resilient systems.',
    img: 'systems-discipline',
  },
  {
    id: 4,
    title: 'Long-Term Partnership',
    text: 'We commit to multi‑year partnerships that balance runway, strategic counsel, and patient capital.',
    img: 'long-term-partnership',
  },
];
</script>

<template>
  <div class="bpinno-container pt-12 pb-18 lg:pt-22 lg:pb-37">
    <div class="lg:flex gap-10">
      <div class="lg:max-w-sm xl:max-w-118 w-full">
        <div class="lg:sticky top-10">
          <h2
            class="lg:max-w-sm text-3xl tracking-[-1.2px] xl:text-[3.5rem]/[1.1] xl:tracking-[-2.24px] max-lg:text-center"
          >
            What we
            <span class="font-pixfrom tracking-wider text-bpinno-primary">
              believe in
            </span>
          </h2>

          <div class="max-lg:hidden space-y-4 mt-45">
            <button
              type="button"
              v-for="btn in data"
              :key="btn.id"
              class="w-full text-left font-pixfrom text-xl xl:text-2xl tracking-wide border-b border-bpinno-border pb-2"
            >
              {{ btn.title }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 space-y-10 xl:space-y-18 mt-8">
        <div v-for="item in data" :key="item.id">
          <div class="relative">
            <NuxtImg :src="`/assets/imgs/${item.img}.png`" />
          </div>
          <div class="font-inter space-y-3 xl:space-y-4 mt-6 xl:mt-8">
            <h3 class="text-lg xl:text-xl font-semibold">
              {{ item.title }}
            </h3>
            <p class="max-w-lg text-sm opacity-60">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
