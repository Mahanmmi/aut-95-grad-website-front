import Vue from 'vue'
import VueApollo from 'vue-apollo'

import {loginClient} from "@/graphQL/clients/loginClient";
import {apolloClient} from "@/graphQL/clients/apolloClient";

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  clients: {
    loginClient
  },
  errorHandler(error) {
    console.log('Global error handler');

    if (error.networkError) {
      Vue.notify({
        title: "خطا در ارتباط",
        text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید",
        type: "error"
      });
    } else if (error.gqlError.extensions.code === "INTERNAL_SERVER_ERROR") {
      Vue.notify({
        title: "خطای سرور",
        text: "خطایی در سمت سرور رخ داد.",
        type: "error"
      });
    }
    // console.log(JSON.stringify({...error}));
    console.log({...error});
  }
});
