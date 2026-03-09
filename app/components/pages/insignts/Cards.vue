<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

defineProps<{
  highlight: string;
  title: string;
  data: {
    id: number;
    title: string;
    link: string;
    img: string;
  }[];
}>();
</script>
<template>
  <div class="bpinno-container overflow-hidden">
    <h2 class="text-2xl/7 md:text-4xl xl:text-bp-h1-sm">
      <span
        class="font-pixfrom xl:text-bp-h1-pixfrom-sm text-bpinno-primary block"
      >
        {{ highlight }}
      </span>
      {{ title }}
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
          },
          1024: {
            enabled: false,
          },
        }"
        class="overflow-visible! [&_.swiper-wrapper]:lg:grid! [&_.swiper-wrapper]:lg:grid-cols-4 [&_.swiper-wrapper]:lg:gap-4 [&_.swiper-slide]:lg:w-full! max-lg:pb-10!"
      >
        <swiper-slide v-for="item in data" :key="item.id" class="h-auto!">
          <div
            class="flex flex-col h-full bg-white border border-bpinno-primary hover:bg-bpinno-primary hover:text-white transition-colors duration-500 group p-6"
          >
            <div
              class="w-25 h-24 xl:w-35 x:h-33 shrink-0 mx-auto group-hover:invert group-hover:brightness-0 transition-all duration-300"
            >
              <NuxtImg
                class="size-full object-contain"
                :src="`/assets/imgs/illustrations/${item.img}`"
                :alt="item.title"
              />
            </div>

            <h3 class="text-lg xl:text-xl font-inter font-medium mt-8 xl:mt-11">
              {{ item.title }}
            </h3>

            <div class="pt-8 mt-auto">
              <NuxtLink
                :to="item.link"
                class="inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2"
              >
                Learn more
              </NuxtLink>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
