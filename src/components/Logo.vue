<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  size: String,
});
</script>

<template>
  <div class="flex items-center gap-2 px-2">
    <img src="/images/logo.png" alt="" :class="`w-${size}`" />
    <span class="font-bold">پنل مدیریتی</span>
  </div>
</template>
