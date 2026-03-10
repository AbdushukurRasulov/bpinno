<script setup lang="ts">
import GridBlocks from '~/components/pages/insignts/GridBlocks.vue';
import SocialLinks from '~/components/shared/SocialLinks.vue';
import Tag from '~/components/shared/Tag.vue';

const route = useRoute();

const slug = computed(() => route.params.slug as string);

const { data: article, pending } = await useAsyncData(
  `article-${slug.value}`,
  () => $fetch(`/api/data/articles/${slug.value}`),
);

if (!article.value && !pending.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
  });
}

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

useHead({
  title: article.value.title,
  meta: [
    {
      key: 'description',
      name: 'description',
      content: article.value?.introduction[0],
    },
    { key: 'og:title', property: 'og:title', content: article.value?.title },
    {
      key: 'og:description',
      property: 'og:description',
      content: article.value?.introduction[0],
    },
  ],
});
</script>

<template>
  <main
    class="relative bpinno-container overflow-hidden pt-12 lg:pt-24 xxl:pt-32"
  >
    <h1
      class="max-w-5xl text-3xl xl:text-6xl/tight xxl:text-bp-h1 max-xl:border-b border-bpinno-black/10 max-xl:pb-6"
    >
      {{ article.title }}
    </h1>

    <div class="aspect-2/1 mt-12">
      <NuxtImg
        class="size-full object-cover"
        :src="`/assets/imgs/articles/${article.slug}.webp`"
        :alt="article.title"
      />
    </div>

    <div class="relative lg:flex mt-14 xl:mt-18">
      <div
        class="max-w-2xl xl:max-w-194 ml-auto font-inter [&_p+p]:mt-6 space-y-10 xl:space-y-12"
      >
        <div class="space-y-6">
          <p v-for="(text, idx) in article.introduction" :key="idx">
            {{ text }}
          </p>
        </div>

        <div>
          <h4 class="text-lg xl:text-[1.375rem] font-medium mb-4">
            {{ article.block1.title }}
          </h4>
          <p v-for="(text, idx) in article.block1.paragraphs" :key="idx">
            {{ text }}
          </p>
        </div>

        <div class="w-full h-41 md:h-71">
          <NuxtImg
            class="size-full object-cover"
            :src="`/assets/imgs/articles/${article.img}.webp`"
            :alt="article.block1.title"
          />
        </div>

        <div>
          <h2
            class="text-3xl tracking-tighter xl:text-bp-h1-sm font-favorit-mono mb-4"
          >
            {{ article.block2.title }}
          </h2>
          <p v-for="(text, idx) in article.block2.paragraphs" :key="idx">
            {{ text }}
          </p>
        </div>

        <div>
          <h4 class="text-lg xl:text-[1.375rem] font-medium mb-4">
            {{ article.block3.title }}
          </h4>
          <p v-for="(text, idx) in article.block3.paragraphs" :key="idx">
            {{ text }}
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
