import {ApolloLink} from "apollo-link";
import {app} from "@/main";
import {ApolloClient} from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

const uri = process.env.VUE_APP_GRAPHQL_URI;

const loginLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    console.log(operation);
    const {response: {headers}} = context;
    if (headers) {
      app.$store.dispatch("updateToken", headers.get('Authorization'));
      app.$store.dispatch("updateUsername", operation.variables.username);
    }
    return response;
  });
});

export const loginClient = new ApolloClient({
  link: ApolloLink.from([loginLink, createHttpLink({uri})]),
  cache: new InMemoryCache()
});