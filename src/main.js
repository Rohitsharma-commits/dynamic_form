import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from "vuejs-paginate-next";
const app = createApp(App).use(store);

app.use(router).use(Paginate).mount('#app')
