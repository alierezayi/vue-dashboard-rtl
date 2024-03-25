<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import Logo from "./Logo.vue";
import { useSidebarStore } from "../stores/sidebar";
import Searchbar from "./Searchbar.vue";

const sidebar = useSidebarStore();
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="w-full md:hidden flex justify-between p-3">
      <Logo size="6" />

      <button @click="sidebar.open()">
        <Bars3Icon class="w-6" />
      </button>
    </div>

    <div class="flex justify-between items-center px-1 md:px-5">
      <div class="flex gap-4 items-center">
        <img
          src="/images/profile.jpg"
          alt="profile"
          class="w-10 rounded-full"
        />
        <div>
          <div class="text-sm">علی عزیز، خوش آمدید</div>
          <div class="text-xs">یک نمای کلی از مدیریت کسب و کار شما</div>
        </div>
      </div>

      <Searchbar />
    </div>
  </div>
</template>
