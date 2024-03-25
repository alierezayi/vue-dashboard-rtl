<script setup>
import { twMerge } from "tailwind-merge";
import { links } from "../utils/refrences";
import MenuItem from "./MenuItem.vue";
import MenuIcons from "./MenuIcons.vue";
import MenuItems from "./MenuItems.vue";
import Logo from "./Logo.vue";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useSidebarStore } from "../stores/sidebar";
import { ref, watch } from "vue";

const sidebar = useSidebarStore();
</script>

<template>
  <div
    :class="
      twMerge(
        'md:flex flex-col h-full md:w-[270px] md:rounded-xl px-5 md:px-3 pt-5 pb-3 overflow-y-auto bg-slate-800 md:static text-white',
        sidebar.isOpen ? 'flex absolute inset-0' : 'hidden'
      )
    "
  >
    <div class="flex justify-between">
      <Logo size="6" />

      <button @click="sidebar.close()" class="md:hidden">
        <XMarkIcon class="w-6" />
      </button>
    </div>

    <div class="divide-y divide-gray-600 mt-5">
      <MenuItems title="منوی اصلی">
        <MenuItem v-for="(link, i) in links.main" :key="i" :href="link.href">
          <MenuIcons :name="link.name" />
          {{ link.text }}
        </MenuItem>
      </MenuItems>

      <MenuItems title="حساب کاربری">
        <MenuItem v-for="(link, i) in links.other" :key="i" :href="link.href">
          <MenuIcons :name="link.name" />
          {{ link.text }}
        </MenuItem>
      </MenuItems>
    </div>
  </div>
</template>
