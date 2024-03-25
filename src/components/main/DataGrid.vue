<script setup>
import DataCard from "./DataCard.vue";
import { total } from "../../utils/refrences";
</script>

<template>
  <div class="flex justify-between">
    <DataCard v-for="(item, i) in total" :key="i" />
  </div>
</template>
