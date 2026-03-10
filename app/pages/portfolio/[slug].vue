<script setup lang="ts">
import Tag from '~/components/shared/Tag.vue';
import portfolios from '~/data/portfolios';

const route = useRoute();

const slug = computed(() => route.params.slug as string);

const portfolio = computed(() => {
  const data = portfolios.find((item) => item.companyLogo === slug.value);

  if (!data) {
    throw createError({
      statusCode: 404,
      message: 'Page not found',
    });
  }

  return data;
});
</script>

<template>
  <div class="bpinno-container py-12 lg:py-18 xl:py-24">
    <div class="h-6 md:hidden mb-4">
      <NuxtImg
        class="h-full object-contain"
        :src="`/assets/imgs/companies/${portfolio.companyLogo}.png`"
        :alt="`Bpinno - ${portfolio.title}`"
      />
    </div>
    <h1 class="text-bp-h1-pixfrom-sm xl:text-bp-h1-pixfrom font-pixfrom">
      {{ portfolio.title }}
    </h1>
    <div
      class="md:flex items-center justify-between max-md:border-t border-bpinno-black/10 max-md:pt-6 mt-6 lg:mt-8 xl:mt-12"
    >
      <div class="max-md:hidden h-7">
        <NuxtImg
          class="h-full object-contain"
          :src="`/assets/imgs/companies/${portfolio.companyLogo}.png`"
          :alt="`Bpinno - ${portfolio.title}`"
        />
      </div>

      <div
        class="flex items-center text-sm text-bpinno-black/60 uppercase gap-3"
      >
        <p>{{ portfolio.tag }}</p>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.336226"
            y1="7.03453"
            x2="7.65604"
            y2="0.369676"
            stroke="#090303"
            stroke-opacity="0.6"
          />
        </svg>
        <p>{{ portfolio.country }}</p>
      </div>
      <NuxtLink
        :to="`https://${portfolio.website}/`"
        target="_blank"
        class="inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2 max-md:mt-2"
      >
        {{ portfolio.website }}
      </NuxtLink>
    </div>

    <div class="w-full aspect-2/1 mt-11">
      <NuxtImg
        class="size-full object-cover"
        :src="`/assets/imgs/portfolios/${portfolio.title.toLocaleLowerCase()}.webp`"
        :alt="`Bpinno - ${portfolio.title}`"
      />
    </div>

    <div class="divide-y divide-bpinno-black/10 space-y-5 mt-18">
      <div class="md:flex items-start max-md:space-y-4 gap-4 pb-12 xl:pb-18">
        <Tag title="About the company" class="max-w-120 w-full opacity-60" />

        <p class="max-w-md lg:max-w-xl xxl:max-w-2xl xl:text-xl font-inter">
          {{ portfolio.about }}
        </p>
      </div>
      <div class="md:flex items-start max-md:space-y-4 gap-4 pb-12 xl:pb-18">
        <Tag title="Why we invested" class="max-w-120 w-full opacity-60" />

        <p class="max-w-md lg:max-w-xl xxl:max-w-2xl xl:text-xl font-inter">
          {{ portfolio.invested }}
        </p>
      </div>
    </div>
  </div>
</template>
