import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from 'axios'
import VueAxios from 'vue-axios'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import "./assets/main.css";

axios.defaults.baseURL = 'http://dev-spring.com:8080';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios)

app.mount("#app");
