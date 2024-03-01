import "./global.css";
import { createApp } from "./main";
import router from "./utils/router";

const { app } = createApp();

app.use(router);
app.mount("#app");
