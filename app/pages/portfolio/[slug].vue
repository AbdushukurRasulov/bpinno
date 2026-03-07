<script setup lang="ts">
import Tag from '~/components/shared/Tag.vue';
</script>

<template>
  <div class="bpinno-container py-12 lg:py-18 xl:py-24">
    <div class="h-6 md:hidden mb-4">
      <NuxtImg
        class="h-full object-contain"
        src="/assets/imgs/companies/pocketpills.png"
        alt="Bpinno - Pocketpills"
      />
    </div>
    <h1 class="text-bp-h1-pixfrom-sm xl:text-bp-h1-pixfrom font-pixfrom">
      Pocketpills
    </h1>
    <div
      class="md:flex items-center justify-between max-md:border-t border-bpinno-black/10 max-md:pt-6 mt-6 lg:mt-8 xl:mt-12"
    >
      <div class="max-md:hidden h-6">
        <NuxtImg
          class="h-full object-contain"
          src="/assets/imgs/companies/pocketpills.png"
          alt="Bpinno - Pocketpills"
        />
      </div>

      <div
        class="flex items-center text-sm text-bpinno-black/60 uppercase gap-3"
      >
        <p>Digital Pharmacy</p>
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
        <p>Canada</p>
      </div>

      <NuxtLink
        to="#"
        class="inline-block font-bold text-sm xl:text-base underline underline-offset-4 decoration-2 max-md:mt-2"
      >
        pocketpills.com
      </NuxtLink>
    </div>

    <div class="w-full aspect-2/1 mt-11">
      <NuxtImg
        class="size-full object-cover"
        src="/assets/imgs/portfolios/pocketpills.webp"
        alt="Bpinno - Pocketpills"
      />
    </div>

    <div class="divide-y divide-bpinno-black/10 space-y-5 mt-18">
      <div class="md:flex items-start max-md:space-y-4 gap-4 pb-12 xl:pb-18">
        <Tag title="About the company" class="max-w-120 w-full opacity-60" />

        <p class="max-w-md lg:max-w-xl xxl:max-w-2xl xl:text-xl font-inter">
          Pocketpills completely digitized the patient medication journey,
          offering a single online platform for ordering, filling, and renewing
          prescriptions. The company solves complex adherence challenges by
          sorting medication into user-friendly PocketPacks, labeled by date and
          time, simplifying daily consumption. By integrating pharmacist
          consultations and delivery, Pocketpills makes managing medication
          accessible to millions of Canadians.
        </p>
      </div>
      <div class="md:flex items-start max-md:space-y-4 gap-4 pb-12 xl:pb-18">
        <Tag title="Why we invested" class="max-w-120 w-full opacity-60" />

        <p class="max-w-md lg:max-w-xl xxl:max-w-2xl xl:text-xl font-inter">
          We invested in Pocketpills because the founders identified a systemic
          inefficiency in traditional pharmacy care and executed a superior,
          digital-first solution. The team demonstrated a unique combination of
          deep healthcare expertise and unrelenting product obsession. Bright
          Path Innovations recognized the operational discipline and
          customer-centric model proved they could redefine the entire Canadian
          medication management experience
        </p>
      </div>
    </div>
  </div>
</template>
