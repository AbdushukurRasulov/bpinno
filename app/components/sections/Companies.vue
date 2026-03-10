<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const companies = [
  'aarista.png',
  'pocketpills.png',
  'foundation.png',
  'lethub.png',
  'wavy.png',
  'defined.png',
  'swede.png',
  'phaselaw.png',
  'emend.png',
  'pinch.png',
  'mythic.png',
];
</script>

<template>
  <div class="relative overflow-hidden py-8 md:py-10">
    <div class="bpinno-container flex items-center">
      <p
        class="max-xl:hidden font-inter text-sm whitespace-nowrap bg-white z-10 p-2"
      >
        Companies we’ve partnered with:
      </p>
      <div
        class="lg:absolute right-0 lg:flex-1 lg:max-w-300 lg:ml-auto overflow-hidden xl:pl-10 max-lg:-mx-6 max-lg:px-6"
      >
        <swiper
          :slides-per-view="2.5"
          :space-between="48"
          :loop="true"
          :centered-slides="true"
          :breakpoints="{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1280: {
              centeredSlides: false,
              slidesPerView: 5.5,
            },
          }"
          class="w-full overflow-visible!"
        >
          <swiper-slide
            v-for="company in companies"
            :key="company"
            class="flex items-center shrink-0"
          >
            <div class="h-6 lg:h-8">
              <NuxtImg
                :src="`/assets/imgs/companies/${company}`"
                class="size-full object-contain brightness-0"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
