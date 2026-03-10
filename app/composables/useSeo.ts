import type { SeoOptions } from '~/types/seo.types';

export function useSeo({ description, image, url }: SeoOptions) {
  const route = useRoute();

  const pageName = computed(() => {
    const path = route.path;
    const slug =
      path === '/' ? 'home' : path.split('/').filter(Boolean).pop() || 'home';

    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });

  useSeoMeta({
    title: pageName.value,
    description: description || '',
    ogTitle: `Bpinno | ${pageName.value}`,
    ogDescription: description || '',

    // == TODO: Can be used when all details added ==

    // ogImage: image || '/images/og-default.jpg',
    // ogUrl: url,
    // twitterCard: 'summary_large_image',
    // twitterTitle: title,
    // twitterDescription: description,
    // twitterImage: image || '/images/og-default.jpg',
  });
}
