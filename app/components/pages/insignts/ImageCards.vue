<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

defineProps<{
  highlight: string;
  title: string;
  path: string;
  data: {
    id: number;
    title: string;
    text: string;
    link: string;
  }[];
}>();
</script>

<template>
  <div class="relative bpinno-container overflow-hidden">
    <h2 class="text-2xl/7 md:text-4xl xl:text-bp-h1-sm">
      <span
        class="block xl:text-bp-h1-pixfrom-sm font-pixfrom text-bpinno-primary"
      >
        {{ highlight }}
      </span>
      {{ title }}
    </h2>

    <div class="mt-8 lg:mt-12 max-lg:-mx-6 max-lg:px-6">
      <swiper
        :slides-per-view="1.1"
        :space-between="16"
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
        class="overflow-visible! [&_.swiper-wrapper]:lg:grid! [&_.swiper-wrapper]:lg:grid-cols-2 [&_.swiper-wrapper]:lg:gap-4 [&_.swiper-slide]:lg:w-full!"
      >
        <swiper-slide
          v-for="item in data"
          :key="item.id"
          class="lg:flex! max-lg:h-auto! bg-white border border-bpinno-primary group"
        >
          <div
            class="lg:w-50 xl:w-64 xxl:w-auto xxl:h-77 shrink-0 aspect-square overflow-hidden"
          >
            <NuxtImg
              class="size-full object-cover lg:group-hover:scale-110 transition-transform duration-500"
              :src="`/assets/imgs/insights/${path}-${item.id}.png`"
              :alt="item.title"
            />
          </div>
          <div
            class="flex-1 flex flex-col font-inter lg:group-hover:bg-bpinno-primary group-hover:text-white transition-colors duration-500 p-6"
          >
            <h3 class="text-lg xl:text-[1.375rem]/7 font-medium">
              {{ item.title }}
            </h3>
            <p class="line-clamp-3 opacity-60 max-xxl:text-sm mt-4">
              {{ item.text }}
            </p>

            <div class="mt-auto pt-6">
              <NuxtLink
                :to="item.link"
                class="font-favorit-mono inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2"
              >
                Learn more
              </NuxtLink>
            </div>
          </div>
        </swiper-slide></swiper
      >
    </div>

    <!-- <div class="grid grid-cols-2 gap-4 mt-12">
      <div
        v-for="item in data"
        :key="item.id"
        class="flex border border-bpinno-primary group"
      >
        <div class="xl:h-77 shrink-0 aspect-square overflow-hidden">
          <NuxtImg
            class="size-full group-hover:scale-110 transition-transform duration-500"
            :src="`/assets/imgs/insights/${path}-${item.id}.png`"
            :alt="item.title"
          />
        </div>
        <div
          class="flex-1 flex flex-col font-inter group-hover:bg-bpinno-primary group-hover:text-white transition-colors duration-500 p-6"
        >
          <h3 class="text-[1.375rem]/7 font-medium">
            {{ item.title }}
          </h3>
          <p class="line-clamp-3 opacity-60 mt-4">
            {{ item.text }}
          </p>

          <NuxtLink
            :to="item.link"
            class="font-favorit-mono inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2 mt-auto"
          >
            Learn more
          </NuxtLink>
        </div>
      </div>
    </div> -->
  </div>
</template>
