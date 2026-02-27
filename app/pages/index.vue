<script setup lang="ts">
import CTA from '~/components/pages/home/CTA.vue';
import Investing from '~/components/pages/home/Investing.vue';
import Portfolio from '~/components/pages/home/Portfolio.vue';
import Companies from '~/components/sections/Companies.vue';
</script>

<template>
  <main>
    <!-- <div class="relative overflow-hidden pt-22 pb-54 2xl:pb-72">
      <div class="relative bpinno-container text-bpinno-black z-10">
        <h1 class="text-[4.75rem]/[1.1] tracking-[-3.8px]">
          We back the builders of
        </h1>
        <div class="max-w-4xl ml-auto translate-x-30 space-y-10">
          <h1 class="text-[4.75rem]/[1.1] tracking-[-3.8px]">
            the next generation of tech legacy
          </h1>
          <p class="max-w-xl font-inter text-xl/7">
            Bright Path Innovations empowers visionary founders to transform
            bold ideas into scalable realities — investing smart capital and
            expertise.
          </p>
          <NuxtLink
            to="#"
            class="inline-block font-bold underline underline-offset-4 decoration-2"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 size-full max-h-125 2xl:max-h-3/4">
        <NuxtImg
          class="size-full object-cover"
          src="/assets/imgs/home-hero.webp"
        />
      </div>
    </div>-->
    <!-- <Companies />  -->
    <!-- <Investing /> -->
    <!-- <CTA /> -->
    <Portfolio />
  </main>
</template>
