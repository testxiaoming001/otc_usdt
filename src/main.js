import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/css/app.css'
import './assets/css/login.css'
import './assets/css/register.css'
import './assets/css/tradesell.css'
import './assets/css/reset-password.css'
import './assets/css/binance-transfer.css'
import './assets/css/account-main.css'
import './assets/css/deposit-crypto.css'

import { Popup,NavBar,Tab, Tabs  } from 'vant';
const app = createApp(App);
app.use(router)
app.use(Popup)
app.use(NavBar)
app.use(Tab);
app.use(Tabs);
app.mount("#app");
