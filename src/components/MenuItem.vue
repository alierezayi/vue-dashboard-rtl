<script setup>
import { twMerge } from "tailwind-merge";

defineProps({
  href: String,
  className: String,
});
</script>

<template>
  <router-link
    :to="href"
    active-class="text-blue-500 bg-white"
    :class="
      twMerge(
        'flex items-center py-2.5 rounded-xl hover:bg-white transition px-2 gap-1',
        className
      )
    "
  >
    <slot />
  </router-link>
</template>
