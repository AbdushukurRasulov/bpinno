<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

type ItemProps = {
  title: string;
  link: string;
};

withDefaults(
  defineProps<{
    list: ItemProps[];
    grid?: string;
  }>(),
  {
    grid: '[&_.swiper-wrapper]:lg:grid-cols-3',
  },
);
</script>

<template>
  <div class="mt-4 lg:mt-8 xl:mt-12 max-lg:-mx-6 max-lg:px-6">
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
        },
        1024: {
          enabled: false,
        },
      }"
      class="overflow-visible! [&_.swiper-wrapper]:lg:grid! [&_.swiper-wrapper]:lg:grid-cols-3 [&_.swiper-wrapper]:lg:gap-4 [&_.swiper-slide]:lg:w-full! max-lg:pb-10!"
      :class="grid"
    >
      <swiper-slide
        v-for="(item, idx) in list"
        :key="idx"
        class="flex! flex-col bg-white border border-bpinno-primary lg:hover:bg-bpinno-primary lg:hover:text-white transition-colors duration-300 h-auto! p-6 pb-3.5"
      >
        <h4 class="max-w-72 font-inter font-semibold">
          {{ item.title }}
        </h4>

        <div class="flex pt-6 mt-auto">
          <NuxtLink :to="item.link" class="inline-block">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 12.8557V9.84766H29.008V12.8557H26ZM29.008 15.8957V12.8557H32.048V15.8957H29.008ZM32.048 18.9037V15.8957H35.056V18.9037H32.048ZM35.056 21.9437V18.9037H38.096V21.9437H35.056ZM32.048 24.9517V21.9437H35.056V24.9517H32.048ZM29.008 27.9917V24.9517H32.048V27.9917H29.008ZM26 30.9997V27.9917H29.008V30.9997H26Z"
                fill="currentColor"
              />
              <rect
                x="1.88281"
                y="18.9023"
                width="34.3486"
                height="3.04297"
                fill="currentColor"
              />
            </svg>
          </NuxtLink>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
