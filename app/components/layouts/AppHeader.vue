<script setup lang="ts">
const navigations = [
  {
    name: 'About Us',
    link: '#',
  },
  {
    name: 'Portfolio',
    link: '#',
  },
  {
    name: 'Contact',
    link: '#',
  },
  {
    name: 'Insights',
    link: '#',
  },
];
</script>

<template>
  <header class="bg-white">
    <div class="bpinno-container flex items-center justify-between py-5">
      <AppLogo class="w-23 h-9 md:w-30 md:h-12 shrink-0" />

      <nav
        class="max-w-xl xxl:max-w-180 flex-1 hidden lg:flex items-center justify-between font-inter"
      >
        <NuxtLink v-for="link in navigations" :key="link.name" :to="link.link">
          {{ link.name }}
        </NuxtLink>
      </nav>

      <div class="flex items-center max-lg:space-x-2">
        <NuxtLink
          to="#"
          class="inline-block bg-bpinno-primary text-white text-sm/6 font-bold px-3 lg:px-6 py-2"
        >
          Contact us
        </NuxtLink>

        <button
          type="button"
          class="lg:hidden size-10 shrink-0 flex items-center border border-bpinno-black"
        >
          <svg
            class="mx-auto"
            width="24"
            height="10"
            viewBox="0 0 24 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.75H24" stroke="#090303" stroke-width="1.5" />
            <path d="M0 8.75H24" stroke="#090303" stroke-width="1.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
