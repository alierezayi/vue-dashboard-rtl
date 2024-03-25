<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="flex h-full p-2 relative">
    <Sidebar />

    <main class="flex-1 h-full overflow-y-auto rounded-lg">
      <Header />
      <div class="px-1 md:px-5 mt-10">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
