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
        'md:flex flex-col h-full md:w-[250px] rounded-xl px-5 md:px-3 pt-5 pb-3 overflow-y-auto bg-gray-200 md:static',
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

    <div class="divide-y divide-gray-300 mt-5">
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

    <MenuItem :href="links.account.href" class-name="bg-white mt-auto">
      <div class="text-xs flex items-center md:justify-between w-full">
        <img
          :src="links.account.imageUrl"
          class="w-9 h-9 rounded-full ml-4 md:ml-0"
        />
        <div>
          <div class="truncate">{{ links.account.email }}</div>
          <div class="truncate">{{ links.account.text }}</div>
        </div>
        <ChevronLeftIcon class="w-5 mr-auto md:mr-0" />
      </div>
    </MenuItem>
  </div>
</template>
