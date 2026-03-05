<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex items-center gap-3">
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
        stroke="currentColor"
      />
    </svg>

    <p class="uppercase">{{ title }}</p>
  </div>
</template>
