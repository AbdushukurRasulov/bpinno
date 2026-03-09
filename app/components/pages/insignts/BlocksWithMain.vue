<script setup lang="ts">
import GridBlocks from './GridBlocks.vue';

type MainProps = {
  title: string;
  text: string;
  link: string;
  imgCover: string;
};

type ItemProps = {
  title: string;
  link: string;
};

defineProps<{
  highlight: string;
  title: string;
  main: MainProps;
  list: ItemProps[];
}>();
</script>

<template>
  <div class="relative bpinno-container overflow-hidden z-10">
    <h2 class="text-2xl/7 md:text-4xl xl:text-bp-h1-sm">
      <span
        class="block xl:text-bp-h1-pixfrom-sm font-pixfrom text-bpinno-primary"
      >
        {{ highlight }}
      </span>
      {{ title }}
    </h2>

    <div
      class="bg-white grid md:grid-cols-2 items-center border border-bpinno-primary lg:hover:bg-bpinno-primary lg:hover:text-white transition-colors duration-500 group mt-8 lg:mt-12"
    >
      <div class="w-full aspect-square overflow-hidden">
        <NuxtImg
          class="size-full object-contain scale-102 group-hover:scale-110 transition-transform duration-500"
          :src="`/assets/imgs/insights/${main.imgCover}`"
          :alt="`${highlight} ${title}`"
        />
      </div>
      <div class="p-6 lg:p-10">
        <div class="max-w-md space-y-4 lg:space-y-8">
          <h2
            class="text-lg/6 md:text-3xl xl:text-bp-h1-sm max-lg:font-inter max-lg:font-medium"
          >
            {{ main.title }}
          </h2>
          <p class="font-inter max-xl:text-sm opacity-60">
            {{ main.text }}
          </p>
          <NuxtLink
            :to="main.link"
            class="font-favorit-mono inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2"
          >
            Learn more
          </NuxtLink>
        </div>
      </div>
    </div>

    <GridBlocks :list="list" />
  </div>
</template>
