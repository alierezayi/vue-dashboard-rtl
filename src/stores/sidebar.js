import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isOpen: false,
    isMinimize: false,
  }),
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    minimize() {
      this.isMinimize = true;
    },
    maximize() {
      this.isMinimize = false;
    },
  },
});
