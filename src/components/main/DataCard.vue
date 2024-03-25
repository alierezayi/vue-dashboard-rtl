<script setup>
import {
  UserGroupIcon,
  ShoppingBagIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
} from "@heroicons/vue/24/outline";
import { twMerge } from "tailwind-merge";

const props = defineProps({
  data: Object,
});
</script>
<template>
  <div class="rounded-lg bg-gray-100 p-5">
    <div class="flex justify-between">
      <div class="text-xs mt-1">
        {{ data.title }}
      </div>

      <div class="p-2.5 rounded-full bg-blue-100">
        <UserGroupIcon
          v-if="data.icon === 'user-group'"
          class="w-5 text-blue-500"
        />
        <ShoppingBagIcon
          v-if="data.icon === 'shopping-bag'"
          class="w-5 text-blue-500"
        />
        <BanknotesIcon
          v-if="data.icon === 'banknotes'"
          class="w-5 text-blue-500"
        />
        <ReceiptPercentIcon
          v-if="data.icon === 'receipt-percent'"
          class="w-5 text-blue-500"
        />
      </div>
    </div>

    <div class="text-lg">
      {{ data.value }}
    </div>

    <div class="flex justify-between items-center mt-3">
      <div class="text-xs">نسبت به ماه قبل</div>
      <div
        :class="
          twMerge(
            data.comparison.includes('-') ? 'text-red-500' : 'text-emerald-500'
          )
        "
      >
        {{ data.comparison }}
      </div>
    </div>
  </div>
</template>
