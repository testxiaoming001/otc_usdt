import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/css/app.css'
import { Popup,NavBar,Tab, Tabs  } from 'vant';
const app = createApp(App);
app.use(router)
app.use(Popup)
app.use(NavBar)
app.use(Tab);
app.use(Tabs);
app.mount("#app");
