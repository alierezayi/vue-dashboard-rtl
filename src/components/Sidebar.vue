<script setup>
import { links } from "../utils/refrences";
import MenuItem from "./MenuItem.vue";
import MenuIcons from "./MenuIcons.vue";
import MenuItems from "./MenuItems.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="hidden md:flex flex-col h-full md:w-[200px] xl:w-[250px] rounded-xl px-3 pt-5 pb-3 overflow-y-auto bg-gray-200"
  >
    <div class="flex items-center gap-2 px-2">
      <img src="/images/logo.png" alt="" class="w-6" />
      <span class="font-bold">پنل مدیریتی</span>
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

    <MenuItem href="/account" class-name="bg-white mt-auto">
      <div class="text-xs flex items-center gap-4">
        <img src="/images/profile.jpg" class="w-9 h-9 rounded-full" />
        <div>
          <div>im1.bitcode@gmail.com</div>
          <div>علی رضایی</div>
        </div>
        <ChevronLeftIcon class="w-5" />
      </div>
    </MenuItem>
  </div>
</template>
