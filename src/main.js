import Vue from 'vue'

import Notification from 'vue-notification'

Vue.use(Notification);
Vue.config.productionTip = false;

import App from '@/App.vue'
import {router} from "@/router/router";
import {store} from "@/store/store";
import {apolloProvider} from "@/graphQL/graphQL";

new Vue({
  render: h => h(App),
  router,
  store,
  apolloProvider
}).$mount('#app');
