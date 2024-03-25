<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { ref, watch } from "vue";

const vClickOutside = {
  mounted: (el, binding) => {
    const handleClickOutside = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value();
      }
    };
    document.addEventListener("click", handleClickOutside);
    el.__vueClickOutside__ = handleClickOutside;
  },
  unmounted: (el) => {
    // Remove event listener when the directive is unmounted
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

const isShow = ref(false);
const searchResult = ref("");

watch(searchResult, () => {
  if (!!searchResult.value) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});

const closePopup = () => {
  isShow.value = false;
  searchResult.value = "";
};
</script>

<template>
  <div class="w-full md:max-w-md relative">
    <div class="bg-gray-200 rounded-lg flex items-center px-4 gap-1">
      <MagnifyingGlassIcon class="w-4 h-4 text-gray-500" />
      <input
        type="text"
        class="py-3 flex-1 outline-none bg-transparent placeholder:text-gray-500 text-xs"
        placeholder="جست و جو"
        v-model="searchResult"
        v-click-outside="closePopup"
      />
    </div>
    <div
      v-if="isShow"
      class="absolute w-full min-h-[200px] bg-gray-100 border top-14 rounded-lg flex justify-center items-center"
    >
      ...loading
    </div>
  </div>
</template>
