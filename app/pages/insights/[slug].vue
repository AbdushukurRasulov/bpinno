<script setup lang="ts">
import GridBlocks from '~/components/pages/insignts/GridBlocks.vue';
import SocialLinks from '~/components/shared/SocialLinks.vue';
import Tag from '~/components/shared/Tag.vue';

const relatedArticles = [
  {
    id: 1,
    title: 'What makes tech startups different from traditional businesses',
    link: '#',
  },
  {
    id: 2,
    title: 'Why investors bet on technology for scale',
    link: '#',
  },
  {
    id: 3,
    title: 'Understanding risk and reward in tech investing ',
    link: '#',
  },
  {
    id: 4,
    title: 'The role of early-stage capital in technology growth',
    link: '#',
  },
];
</script>

<template>
  <main
    class="relative bpinno-container overflow-hidden pt-12 lg:pt-24 xxl:pt-32"
  >
    <h1
      class="max-w-5xl text-3xl xl:text-6xl/tight xxl:text-bp-h1 max-xl:border-b border-bpinno-black/10 max-xl:pb-6"
    >
      What makes tech startups different from traditional businesses
    </h1>

    <div class="aspect-2/1 mt-12">
      <NuxtImg
        class="size-full object-cover"
        src="/assets/imgs/articles/what-makes-tech-startups-different-from-traditional-businesses.webp"
        alt="What makes tech startups different from traditional businesses"
      />
    </div>

    <div class="relative lg:flex mt-14 xl:mt-18">
      <div
        class="max-w-2xl xl:max-w-194 ml-auto font-inter [&_p+p]:mt-6 space-y-10 xl:space-y-12"
      >
        <div class="space-y-6">
          <p>
            Tech companies operate on an entirely different economic curve. They
            thrive on non-linear growth. This contrasts sharply with the linear,
            incremental growth path of legacy businesses. Their valuation model
            is therefore based on potential market dominance rather than
            historical assets.
          </p>
          <p>
            Non-linear growth enables them to achieve exponential scale and
            reach global user bases. This happens without a proportional rise in
            operating costs. The cost of serving the 100th customer is
            fundamentally different from the cost of serving the 10 millionth.
            The marginal cost of distribution approaches zero as the platform
            matures.
          </p>
        </div>

        <div>
          <h4 class="text-lg xl:text-[1.375rem] font-medium mb-4">
            Intangible Core Value
          </h4>
          <p>
            Crucially, their core value is fundamentally anchored in intangible
            assets. This includes proprietary algorithms and established network
            effects. Physical assets and machinery play a minimal role in
            determining long-term valuation. Their capital intensity is focused
            almost entirely on securing top-tier engineering talent rather than
            physical infrastructure.
          </p>
          <p>
            Robust Intellectual Property (IP) is a primary source of
            defensibility. Unlike legacy businesses focused on physical
            production, tech prioritizes IP protection. IP serves as the
            critical legal and technical barrier to entry for competitors. The
            strategic hoarding of proprietary data often becomes a stronger moat
            than patents alone. This strategic advantage allows them to sustain
            disproportionate pricing power.
          </p>
        </div>

        <div class="w-full h-41 md:h-71">
          <NuxtImg
            class="size-full object-cover"
            src="/assets/imgs/articles/intangible-core-value.webp"
            alt="Intangible Core Value"
          />
        </div>

        <div>
          <h2
            class="text-3xl tracking-tighter xl:text-bp-h1-sm font-favorit-mono mb-4"
          >
            The Competitive Moat
          </h2>
          <p>
            Tech companies prioritize building a defensible competitive moat
            through continuous innovation. This moat is often constructed via
            data leverage and rapid product iteration. The goal is not just to
            compete, but to create a market segment where competition is
            irrelevant. This strategic advantage allows them to sustain
            disproportionate pricing power.
          </p>
        </div>

        <div>
          <h4 class="text-lg xl:text-[1.375rem] font-medium mb-4">
            Strategic Partnership
          </h4>
          <p>
            We partner with founders to strategically structure their company
            and cap table. This ensures their core technological advantage is
            built to last in a competitive landscape. Strategic structuring
            mitigates future dilution risk while securing necessary early
            capital. We model multiple financing rounds to confirm founder and
            employee incentives remain robust through exit.
          </p>
        </div>

        <div
          class="font-favorit-mono lg:absolute top-0 left-0 max-lg:pt-2 max-lg:border-t border-bpinno-black/10"
        >
          <Tag title="share" class="opacity-60 max-lg:text-xs" />
          <SocialLinks
            size="size-8 text-bpinno-black bg-[#F5F5F5] p-2"
            class="gap-2! mt-4"
          />
        </div>

        <Tag
          title="ready for next step?"
          class="opacity-60 border-t border-bpinno-black/30 max-lg:text-xs pt-4 mt-14 xl:mt-32"
        />

        <div>
          <h2
            class="font-pixfrom text-2xl md:text-4xl xl:text-6xl text-bpinno-primary"
          >
            Have a vision to share?
          </h2>
          <p class="max-lg:text-sm mt-4">
            We're a tech-focused investment firm that moves with speed and
            conviction. If you're an early-stage founder ready to transform an
            industry, we want to hear from you.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block bg-bpinno-primary text-white font-favorit-mono font-bold px-8 py-2 mt-6 lg:mt-8"
          >
            Contact us
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="py-18 md:py-24 xl:py-37">
      <h2 class="text-2xl/7 md:text-4xl xl:text-bp-h1-sm">
        <span class="xl:text-bp-h1-pixfrom-sm font-pixfrom text-bpinno-primary">
          Related
        </span>
        Articles
      </h2>

      <GridBlocks
        :list="relatedArticles"
        grid="[&_.swiper-wrapper]:lg:grid-cols-4"
      />
    </div>
  </main>
</template>
