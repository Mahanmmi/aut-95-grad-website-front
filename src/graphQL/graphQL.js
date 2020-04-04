import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:7000/graphql'
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler (error) {
    console.log('Global error handler');

    if(error.networkError) {
      Vue.notify({
        title: "خطا در ارتباط",
        text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید",
        type: "error"
      });
    } else if(error.gqlError.extensions.code === "INTERNAL_SERVER_ERROR"){
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
