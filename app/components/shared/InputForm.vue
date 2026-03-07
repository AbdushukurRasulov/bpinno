<script setup lang="ts">
type Props = {
  type?: string;
  placeholder: string;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
});
</script>

<template>
  <div class="relative">
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full border-b border-bpinno-black/10 placeholder-bpinno-black/60 pb-4"
    />
  </div>
</template>
