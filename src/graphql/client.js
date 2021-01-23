import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
// import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://bad-taste-music-share.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: "https://bad-taste-music-share.herokuapp.com/v1/graphql",
// });

export default client;
