import {ApolloClient} from "apollo-client";
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

const uri = process.env.VUE_APP_GRAPHQL_URI;

export const apolloClient = new ApolloClient({
  link: createHttpLink({uri}),
  cache: new InMemoryCache()
});