<script setup lang="ts">
import navigation from '~/data/navigation';

const emit = defineEmits<{
  (e: 'update:isMobileMenuOpen', value: boolean): void;
}>();

const closeMenu = () => {
  emit('update:isMobileMenuOpen', false);
};
</script>

<template>
  <div
    class="fixed lg:hidden top-0 left-0 w-full h-screen flex flex-col bg-bpinno-black text-white z-50 p-6"
  >
    <div class="flex items-center justify-between">
      <AppLogo class="w-24 h-10 md:w-30 md:h-12 shrink-0 text-white" />

      <button
        @click="closeMenu"
        type="button"
        class="bg-bpinno-primary size-10 shrink-0s"
      >
        <svg
          class="m-auto"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 20L20.9706 3.02944" stroke="white" stroke-width="1.5" />
          <path
            d="M4 3.00012L20.9706 19.9707"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>

    <ul class="flex-1 text-center text-3xl space-y-6 pt-32">
      <li>
        <NuxtLink
          @click="closeMenu"
          to="/"
          exact-active-class="text-bpinno-primary font-pixfrom"
        >
          Home
        </NuxtLink>
      </li>
      <li v-for="link in navigation" :key="link.link">
        <NuxtLink
          @click="closeMenu"
          :to="link.link"
          exact-active-class="text-bpinno-primary font-pixfrom text-4xl/9"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink
      to="/contact"
      class="block bg-bpinno-primary text-center font-bold py-3"
    >
      Contact us
    </NuxtLink>
  </div>
</template>
