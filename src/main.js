import Vue from 'vue'

import App from '@/App.vue'
import {router} from "@/router/router";
import {store} from "@/store/store";
import {apolloProvider} from "@/graphQL/graphQL";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  apolloProvider
}).$mount('#app');
