<script setup lang="ts">
const investing = [
  {
    title: 'Stage',
    text: 'We invest from early growth to expansion, backing transformative ideas with the capital, structure, and long-term partnership needed to scale with precision.',
  },
  {
    title: 'Approach',
    text: 'We partner closely with ambitious teams, combining strategic insight, operational discipline, and smart capital to accelerate growth and create lasting impact.',
  },
  {
    title: 'Sectors',
    text: 'Our focus spans AI, advanced infrastructure, life sciences, and frontier innovation — empowering founders building technologies that redefine industries and unlock new potential.',
  },
  {
    title: 'Geography',
    text: 'With reach across three continents, we invest where ambition and opportunity converge — connecting founders to global networks, experience, and the right markets to scale.',
  },
];
</script>

<template>
  <div class="bg-bpinno-black py-32">
    <div class="max-w-lg mx-auto text-center">
      <h2 class="text-white text-[3.5rem]/[1.1] tracking-[-2.24px]">
        Investing in real
        <span class="font-pixfrom tracking-[1.1px] text-bpinno-primary"
          >technology</span
        >
        growth
      </h2>
    </div>

    <div class="bpinno-container space-y-22 py-22">
      <div
        v-for="(item, idx) in investing"
        :key="item.title"
        :class="[
          'flex items-center ',
          idx % 2 === 1
            ? 'max-w-3xl flex-row-reverse ml-auto gap-42'
            : 'max-w-196 gap-42.5',
        ]"
      >
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.337202"
                y1="7.03456"
                x2="7.65702"
                y2="0.369707"
                stroke="white"
              />
            </svg>

            <h4 class="text-white uppercase">{{ item.title }}</h4>
          </div>
          <p class="text-white/60 font-inter">
            {{ item.text }}
          </p>
        </div>
        <div>
          <div
            class="relative max-w-68.5 bg-linear-142 from-white/10 from-70% via-bpinno-primary via-88% to-[#8CB1FF] to-100% p-px"
          >
            <div
              class="relative bg-bpinno-black flex items-center z-10 px-10 py-16.5"
            >
              <div class="size-48 shrink-0 mx-auto">
                <NuxtImg
                  class="size-full"
                  :src="`/assets/imgs/illustrations/${item.title.toLowerCase()}.svg`"
                  alt="Bpinno - Investing in real technology growth"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
