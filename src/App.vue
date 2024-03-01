<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex h-full p-2">
    <Sidebar />

    <main class="flex-1 h-full overflow-y-auto rounded-lg">
      <router-view></router-view>
    </main>
  </div>
</template>
