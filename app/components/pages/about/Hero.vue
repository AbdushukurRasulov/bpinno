<template>
  <div>
    <div class="bpinno-container py-12 xl:py-32 space-y-6 lg:space-y-10">
      <h1 class="max-w-xl lg:max-w-5xl text-bp-h1-sm lg:text-bp-h1">
        <span
          class="text-bp-h1-pixfrom-sm lg:text-bp-h1-pixfrom font-pixfrom text-bpinno-primary max-md:block"
        >
          Investing
        </span>
        with vision, conviction, and strategic purpose
      </h1>
      <p
        class="max-w-xl xxl:max-w-2xl text-sm xl:text-base xxl:text-xl font-inter lg:pr-10"
      >
        We are a technology-focused investment partner empowering founders to
        build scalable, enduring companies. Our company backs vision across AI,
        Life Sciences, and advanced infrastructure with global conviction and
        deep expertise.
      </p>
    </div>
    <div class="relative h-80 lg:h-191">
      <div class="absolute top-0 left-0 size-full flex items-start">
        <div v-for="idx in 5" :key="idx" class="flex-1 bg-white h-1/4" />
      </div>
      <NuxtImg
        class="size-full object-cover object-center"
        src="/assets/imgs/about-hero.webp"
      />
    </div>
  </div>
</template>
