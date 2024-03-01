<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="py-4 text-xs">
    <h3 class="text-gray-700 px-2.5 mb-1">{{ title }}</h3>
    <div class="flex flex-col gap-1">
      <slot />
    </div>
  </div>
</template>
