<script setup lang="ts">
const companies = [
  'aarista.png',
  'pocketpills.png',
  'foundation.png',
  'lethub.png',
  'wavy.png',
  'defined.png',
  'swede.png',
  'phaselaw.png',
  'emend-vision-fund.png',
  'pinch.png',
  'mythic.png',
];
</script>

<template>
  <div class="relative overflow-hidden py-12">
    <div class="bpinno-container">
      <p class="font-inter text-sm">Companies we’ve partnered with:</p>

      <div class="flex items-center space-x-20">
        <!-- <div class="" v-for="company in companies" :key="company">
          <NuxtImg :src="`/assets/imgs/companies/${company}`" class="max-h-7" />
        </div> -->
      </div>
    </div>
  </div>
</template>
