import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql/'
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler (error) {
    Vue.notify({
      title: "خطا در ارتباط",
      text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید",
      type: "error"
    });
    console.log('Global error handler');
    console.error(error.message);
  }
});
