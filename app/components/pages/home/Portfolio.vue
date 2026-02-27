<script setup lang="ts">
import portfolios from '~/data/portfolios';

const firstThreePortfolios = computed(() => portfolios.slice(0, 3));
</script>

<template>
  <div class="bpinno-container py-22">
    <h2 class="text-center text-[3.5rem]/[1.1] tracking-[-2.24px]">
      Our
      <span class="font-pixfrom tracking-wider text-bpinno-primary">
        growing
      </span>
      portfolio
    </h2>

    <div class="grid grid-cols-3 gap-4 mt-12">
      <div
        v-for="portfolio in firstThreePortfolios"
        :key="portfolio.id"
        class="group"
      >
        <div class="relative max-h-122.5 overflow-hidden">
          <div class="absolute top-6 left-6 h-8 brightness-0 invert z-10">
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
            class="flex items-center text-sm uppercase text-bpinno-black/60 group-hover:text-white/60 transition-colors duration-500 space-x-2"
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
          <h3 class="text-4xl/none font-pixfrom mt-3">
            {{ portfolio.title }}
          </h3>

          <NuxtLink
            :to="portfolio.link"
            class="inline-block font-bold underline underline-offset-4 decoration-2 mt-12"
          >
            Learn more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
