<script setup lang="ts">
import type { PortfolioProps } from '~/types/portfolio.types';

defineProps<{
  portfolio: PortfolioProps;
}>();
</script>

<template>
  <div class="bg-white border border-bpinno-primary group">
    <div class="relative max-h-86 lg:max-h-122.5 overflow-hidden">
      <div class="absolute top-6 left-6 h-6 lg:h-8 brightness-0 invert z-10">
        <NuxtImg
          class="size-full object-contain"
          :src="`/assets/imgs/companies/${portfolio.companyLogo}.png`"
          :alt="portfolio.title"
        />
      </div>
      <NuxtImg
        class="size-full object-cover group-hover:scale-110 transition-transform duration-500"
        :src="`/assets/imgs/portfolios/img-${portfolio.id}.png`"
        :alt="portfolio.title"
      />
    </div>
    <div
      class="group-hover:bg-bpinno-primary group-hover:text-white transition-colors duration-500 p-6 pt-7"
    >
      <div
        class="flex items-center text-xs lg:text-sm uppercase text-bpinno-black/60 group-hover:text-white/60 transition-colors duration-500 space-x-2"
      >
        <p>{{ portfolio.tag }}</p>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.337202"
            y1="7.03459"
            x2="7.65702"
            y2="0.369737"
            stroke="currentColor"
            stroke-opacity="0.6"
          />
        </svg>

        <p>{{ portfolio.country }}</p>
      </div>
      <h3 class="text-2xl xl:text-4xl/none font-pixfrom mt-3">
        {{ portfolio.title }}
      </h3>

      <NuxtLink
        :to="portfolio.link"
        class="inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2 mt-12"
      >
        Learn more
      </NuxtLink>
    </div>
  </div>
</template>
