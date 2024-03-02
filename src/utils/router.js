import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Products from "../pages/Products.vue";
import Customers from "../pages/Customers.vue";
import Order from "../pages/Order.vue";
import Billing from "../pages/Billing.vue";
import Notifications from "../pages/Notifications.vue";
import Settings from "../pages/Settings.vue";
import Support from "../pages/Support.vue";
import Account from "../pages/Account.vue";

const routes = [
  { path: "/", name: "main", component: Main },
  { path: "/products", name: "products", component: Products },
  { path: "/customers", name: "customers", component: Customers },
  { path: "/order", name: "order", component: Order },
  { path: "/billing", name: "billing", component: Billing },
  { path: "/notifications", name: "notifications", component: Notifications },
  { path: "/settings", name: "settings", component: Settings },
  { path: "/support", name: "support", component: Support },
  { path: "/account", name: "account", component: Account },
];

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory("/")
    : createWebHistory("/"),
  routes,
});

export default router;
