<script setup lang="ts">
import Tag from '~/components/shared/Tag.vue';
</script>

<template>
  <div class="bg-bpinno-black text-white">
    <div class="relative bpinno-container py-36">
      <div class="relative z-10">
        <Tag title="Our Story" class="absolute top-1 left-0" />
        <h2 class="text-bp-h1">
          <span class="block max-w-3xl ml-auto">
            <span class="text-bp-h1-pixfrom font-pixfrom text-bpinno-primary">
              Investing since 2023
            </span>
            to fuel <br />
            non-linear growth
          </span>
          <span class="block">
            through proprietary technology and enduring partnerships
          </span>
        </h2>

        <div class="max-w-lg font-inter mt-18">
          <p>
            The firm was founded seven years ago on the core belief that
            technology is the singular, most powerful driver of scale and
            positive change. We recognized a capital gap for visionary founders
            who required more than just funding; they needed operational
            expertise and a partner with deep technical rigor.
          </p>
          <p class="mt-7">
            This commitment inspired us to structure a boutique investment
            vehicle that provides smart, strategic capital alongside hands-on
            support. Our approach focuses on building long-term, resilient
            companies designed for market leadership, not just temporary growth
            cycles.
          </p>

          <NuxtLink
            to="#"
            class="inline-block font-favorit-mono font-bold text-sm xl:text-base underline underline-offset-4 decoration-2 mt-12"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>

      <div class="max-w-2xl w-full aspect-121/87 absolute bottom-0 right-0">
        <NuxtImg
          class="size-full object-contain"
          src="/assets/imgs/our-story-bg.webp"
        />
      </div>
    </div>
  </div>
</template>
