<script setup lang="ts">
import PortfolioCard from '~/components/shared/PortfolioCard.vue';
import portfolios from '~/data/portfolios';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const firstThreePortfolios = computed(() => portfolios.slice(0, 3));
</script>

<template>
  <div
    class="relative bpinno-container overflow-hidden py-12 lg:py-16 xl:py-22"
  >
    <h2
      class="max-w-sm lg:max-w-md mx-auto text-center text-3xl tracking-tighter lg:text-bp-h2"
    >
      Our
      <span
        class="font-pixfrom text-4xl tracking-normal lg:text-bp-h2 lg:tracking-wider text-bpinno-primary"
      >
        growing
      </span>
      in portfolio
    </h2>

    <div class="mt-8 lg:mt-12 max-lg:-mx-6 max-lg:px-6">
      <swiper
        :modules="[Pagination]"
        :slides-per-view="1.1"
        :space-between="16"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          320: {
            enabled: true,
          },
          640: {
            slidesPerView: 2.1,
            enabled: true,
          },
          1024: {
            enabled: false,
          },
        }"
        class="overflow-visible! [&_.swiper-wrapper]:lg:grid! [&_.swiper-wrapper]:lg:grid-cols-3 [&_.swiper-wrapper]:lg:gap-4 [&_.swiper-slide]:lg:w-full! max-lg:pb-10!"
      >
        <swiper-slide
          v-for="portfolio in firstThreePortfolios"
          :key="portfolio.id"
          class="h-auto!"
        >
          <PortfolioCard :portfolio="portfolio" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
