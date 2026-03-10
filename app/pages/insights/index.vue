<script setup lang="ts">
import BlocksWithMain from '~/components/pages/insignts/BlocksWithMain.vue';
import Cards from '~/components/pages/insignts/Cards.vue';
import Hero from '~/components/pages/insignts/Hero.vue';
import ImageCards from '~/components/pages/insignts/ImageCards.vue';
import ReadyToBuild from '~/components/pages/insignts/ReadyToBuild.vue';
import {
  introduction,
  investmentProcess,
  partnership,
  pitch,
  roundsWork,
  whatWeLook,
} from '~/data/insights';

useSeo({
  description: 'Insights on tech investing & fundraising',
});
</script>

<template>
  <main>
    <Hero />

    <div
      class="relative overflow-hidden space-y-18 md:space-y-24 xl:space-y-37 py-18 lg:py-20"
    >
      <Cards
        highlight="Introduction"
        title="to tech investing"
        :data="introduction"
      />

      <ImageCards
        highlight="What we look"
        title="for in founders"
        path="founders"
        :data="whatWeLook"
      />

      <BlocksWithMain
        class="mb-0"
        highlight="How early-stage"
        title="rounds work"
        :main="roundsWork.main"
        :list="roundsWork.items"
      />

      <div class="absolute top-1/4 lg:top-20 right-0">
        <NuxtImg
          src="/assets/imgs/insights-bg-1.png"
          alt="Bpinno - Insight on tech investing & fundraising"
        />
      </div>
    </div>

    <ReadyToBuild />

    <div
      class="relative overflow-hidden space-y-18 md:space-y-24 xl:space-y-37 py-18 lg:py-20"
    >
      <Cards highlight="Building" title="a strong pitch" :data="pitch" />

      <ImageCards
        highlight="Our investment"
        title="process"
        path="investment"
        :data="investmentProcess"
      />

      <BlocksWithMain
        class="mb-0 lg:pb-18"
        highlight="Post-investment"
        title="partnership"
        :main="partnership.main"
        :list="partnership.items"
      />

      <div class="absolute top-60 right-0">
        <NuxtImg
          src="/assets/imgs/insights-bg-2.png"
          alt="Bpinno - Insight on tech investing & fundraising"
        />
      </div>
    </div>
  </main>
</template>
