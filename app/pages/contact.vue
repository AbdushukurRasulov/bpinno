<script setup lang="ts">
import InputForm from '~/components/shared/InputForm.vue';

useSeo({
  description:
    'Ready to scale your technology with strategic capital? Contact us directly to discuss verifiable growth and long-term partnership.',
});
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="relative bpinno-container py-12 lg:py-24">
      <h1
        class="max-w-3xl xl:max-w-4xl text-bp-h1-sm lg:text-6xl xl:text-bp-h1"
      >
        Connect for long-term
        <span
          class="text-bp-h1-pixfrom-sm lg:text-6xl xl:text-bp-h1-pixfrom font-pixfrom text-bpinno-primary"
        >
          tech success
        </span>
      </h1>

      <div
        class="grid md:grid-cols-2 gap-10 lg:gap-20 mt-6 md:mt-12 xl:mt-18 pb-5"
      >
        <div class="max-lg:space-y-8">
          <p class="max-w-120 font-inter xl:text-xl">
            Ready to scale your technology with strategic capital? Contact us
            directly to discuss verifiable growth and long-term partnership.
          </p>

          <div
            class="md:absolute bottom-0 left-0 max-w-sm xl:max-w-xl xxl:max-w-161 xxl:-ml-16"
          >
            <NuxtImg
              class="size-full object-contain"
              src="/assets/imgs/contact-bg.webp"
              alt="Bpinno - Connect for long-term tech success"
            />
          </div>
        </div>

        <div>
          <form class="font-inter max-lg:text-sm space-y-8 xl:space-y-10">
            <InputForm placeholder="Full name" />
            <InputForm type="email" placeholder="Email address" />
            <InputForm placeholder="Company or startup name" />
            <div class="relative">
              <textarea
                rows="6"
                placeholder="Your message"
                class="w-full border-b border-bpinno-black/10 placeholder-bpinno-black/60 resize-none pb-4"
              />
            </div>
            <div class="pt-2 xl:pt-8 space-y-6">
              <button
                type="submit"
                class="md:max-w-68.5 w-full inline-block bg-bpinno-primary text-white font-bold text-center py-4 px-8"
              >
                Let’s Talk
              </button>

              <p class="text-xs lg:text-sm">
                By submitting, you agree to our
                <NuxtLink
                  to="#"
                  class="underline underline-offset-3 inline-block"
                >
                  Terms
                </NuxtLink>
                and
                <NuxtLink
                  to="#"
                  class="underline underline-offset-3 inline-block"
                >
                  Privacy Policy.
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
