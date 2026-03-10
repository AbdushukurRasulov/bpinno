<script setup lang="ts">
import PortfolioCard from '~/components/shared/PortfolioCard.vue';
import portfolios from '~/data/portfolios';

useSeo({
  description: 'Portfolio',
});
</script>

<template>
  <div class="relative overflow-hidden py-12 lg:py-20 xxl:py-32">
    <div class="bpinno-container">
      <h2 class="text-center text-bp-h1-sm lg:text-5xl/tight xxl:text-bp-h1">
        Portfolio
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 md:pt-18 pb-5">
        <PortfolioCard
          v-for="portfolio in portfolios"
          :key="portfolio.id"
          :portfolio="portfolio"
        />
      </div>
    </div>
  </div>
</template>
