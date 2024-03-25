<script setup>
import DataCard from "./DataCard.vue";
import { total } from "../../utils/refrences";
</script>

<template>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 textsm"
  >
    <DataCard v-for="(item, i) in total" :key="i" :data="item" />
  </div>
</template>
