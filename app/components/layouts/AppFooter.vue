<script setup lang="ts">
import footer from '~/data/footer';
import SocialLinks from '../shared/SocialLinks.vue';
</script>

<template>
  <footer class="bg-bpinno-black text-white pt-18 lg:pt-10 pb-6">
    <div class="bpinno-container">
      <div class="flex md:hidden items-start justify-between mb-6">
        <AppLogo class="h-14 shrink-0 text-white" />

        <SocialLinks size="size-4" />
      </div>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="max-md:order-1 flex justify-between md:max-w-md gap-12">
          <div v-for="menu in footer" :key="menu.title" class="space-y-6">
            <h4 class="flex items-center gap-3 text-sm opacity-40 uppercase">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.337202"
                  y1="7.03459"
                  x2="7.65702"
                  y2="0.369737"
                  stroke="white"
                />
              </svg>
              <span>{{ menu.title }}</span>
            </h4>
            <ul class="font-pixfrom text-xl xl:text-2xl space-y-4 xl:space-y-6">
              <li v-for="link in menu.navs" :key="link.name">
                <NuxtLink :to="link.link">
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:text-right md:space-y-10 xl:space-y-19">
          <p
            class="max-w-36 max-md:hidden ml-auto text-xl/6 uppercase tracking-[-1px]"
          >
            bright path innovations
          </p>
          <p class="font-inter text-sm max-w-92 ml-auto opacity-60">
            Bright Path innovations is a founder-first investment firm for
            early-stage tech startups. We partner with ambitious founders across
            the globe to build transformative companies.
          </p>
        </div>
      </div>

      <div
        class="flex items-center justify-between border-t border-white/10 pt-6 mt-12 lg:mt-30"
      >
        <p class="font-inter text-xs lg:text-sm opacity-60">
          © 2025 Bright Path innovations, Inc. All rights reserved.
        </p>

        <SocialLinks class="max-md:hidden" size="max-lg:size-4 size-5" />
      </div>
    </div>
  </footer>
</template>
