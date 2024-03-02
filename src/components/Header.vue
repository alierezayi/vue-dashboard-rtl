<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import Logo from "./Logo.vue";
import { useSidebarStore } from "../stores/sidebar";

const sidebar = useSidebarStore();
</script>

<template>
  <div class="w-full md:hidden flex justify-between p-3">
    <Logo size="6" />

    <button @click="sidebar.open()">
      <Bars3Icon class="w-6" />
    </button>
  </div>
</template>
