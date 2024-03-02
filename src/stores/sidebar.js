import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isOpen = ref(false);
  const isMinimize = ref(false);

  const open = () => {
    this.isOpen = true;
  };
  const close = () => {
    this.isOpen = true;
  };
  const toggle = () => {
    this.isOpen = !this.isOpen;
  };
  const minimize = () => {
    this.isMinimize = true;
  };
  const maximize = () => {
    this.isMinimize = false;
  };

  return { isOpen, isMinimize, open, close, toggle, minimize, maximize };
});
