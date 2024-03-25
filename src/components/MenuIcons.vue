<script setup>
import {
  ShoppingBagIcon,
  UsersIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  BellIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";

defineProps({
  name: String,
});
</script>

<template>
  <HomeIcon v-if="name === 'dashboard'" class="w-[18px]" />
  <ShoppingBagIcon v-if="name === 'products'" class="w-[18px]" />
  <UsersIcon v-if="name === 'customers'" class="w-[18px]" />
  <DocumentTextIcon v-if="name === 'order'" class="w-[18px]" />
  <CreditCardIcon v-if="name === 'billing'" class="w-[18px]" />
  <BellIcon v-if="name === 'notifications'" class="w-[18px]" />
  <Cog6ToothIcon v-if="name === 'settings'" class="w-[18px]" />
  <QuestionMarkCircleIcon v-if="name === 'support'" class="w-[18px]" />
  <UserIcon v-if="name === 'profile'" class="w-[18px]" />
</template>
