<template>
  <div class="bpinno-container">
    <div class="bg-bpinno-black relative overflow-hidden">
      <div
        class="relative flex max-lg:flex-col items-center justify-between text-white max-lg:text-center z-10 p-6 lg:p-12"
      >
        <h2 class="text-2xl xl:text-bp-h1-sm">
          <span
            class="block xl:text-bp-h1-pixfrom-sm font-pixfrom text-bpinno-primary"
          >
            Ready to build
          </span>
          something meaningful?
        </h2>

        <NuxtLink
          to="#"
          class="md:max-w-68.5 md:w-full inline-block bg-bpinno-primary text-white font-bold text-center py-4 px-8 mt-6"
        >
          Let’s Chat
        </NuxtLink>
      </div>

      <div class="absolute inset-0 size-full pointer-events-none">
        <NuxtImg class="size-full object-cover" src="/assets/imgs/cta-bg.svg" />
        <div
          class="w-100 lg:w-250 h-75 bg-bpinno-black rounded-[50%] absolute top-1/2 -translate-y-1/2 blur-3xl -left-1/5"
        />
      </div>
    </div>
  </div>
</template>
