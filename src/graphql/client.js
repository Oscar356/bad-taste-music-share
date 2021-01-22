import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://bad-taste-music-share.herokuapp.com/v1/graphql",
});

export default client;