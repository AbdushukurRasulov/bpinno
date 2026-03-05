<script setup lang="ts">
import PortfolioCard from '~/components/shared/PortfolioCard.vue';
import portfolios from '~/data/portfolios';

const firstThreePortfolios = computed(() => portfolios.slice(0, 3));
</script>

<template>
  <div class="bpinno-container py-22">
    <h2 class="text-center text-[3.5rem]/[1.1] tracking-[-2.24px]">
      Our
      <span class="font-pixfrom tracking-wider text-bpinno-primary">
        growing
      </span>
      portfolio
    </h2>

    <div class="grid md:grid-cols-3 gap-4 mt-12">
      <PortfolioCard
        v-for="portfolio in firstThreePortfolios"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </div>
  </div>
</template>
