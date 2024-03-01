<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="pb-3 pt-5 text-xs">
    <h3 class="text-gray-600 px-2.5 mb-1.5 font-medium">{{ title }}</h3>
    <div class="flex flex-col gap-1">
      <slot />
    </div>
  </div>
</template>
