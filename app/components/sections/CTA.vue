<template>
  <div class="relative bg-bpinno-black text-white pt-12 pb-16">
    <div class="bpinno-container relative z-10">
      <div class="flex items-end">
        <div>
          <p
            class="text-[5rem]/none tracking-wide font-pixfrom text-bpinno-primary"
          >
            Are you ready
          </p>
          <p class="text-[76px]/[1.1] tracking-[-4px]">to build</p>
        </div>

        <div class="flex-1 translate-y-8 -translate-x-10">
          <NuxtLink
            to="#"
            class="max-w-68.5 w-full block bg-bpinno-primary text-white font-bold text-center py-4 px-8"
          >
            Let’s Chat
          </NuxtLink>
        </div>
      </div>

      <div class="text-right">
        <p class="text-[76px]/[1.1] tracking-[-4px]">something</p>
        <p
          class="text-[5rem]/none tracking-wide font-pixfrom text-bpinno-primary"
        >
          meaningful?
        </p>
      </div>
    </div>

    <NuxtImg
      src="/assets/imgs/cta-bg.png"
      class="absolute inset-0 size-full object-cover"
    />

    <div
      class="absolute inset-0 w-4/5 mx-auto h-full bg-bpinno-black/70 blur-3xl"
    />
  </div>
</template>
