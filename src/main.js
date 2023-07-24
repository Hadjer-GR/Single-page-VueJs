import {createApp} from 'vue';
import App from './App.vue';
import router from "./routes";
import "./axios";

// use App as the options object
const app=createApp(App);
app.use(router);
app.mount("#app");
