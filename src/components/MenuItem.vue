<script setup>
import { twMerge } from "tailwind-merge";
import { useSidebarStore } from "../stores/sidebar";

defineProps({
  href: String,
  className: String,
});

const sidebar = useSidebarStore();
</script>

<template>
  <router-link
    :to="href"
    @click="sidebar.close()"
    active-class="text-white bg-slate-600"
    :class="
      twMerge(
        'flex items-center py-2.5 rounded-lg hover:bg-slate-700 transition px-2 gap-1',
        className
      )
    "
  >
    <slot />
  </router-link>
</template>
