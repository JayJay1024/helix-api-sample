import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Apollo Client
 * mainnet: https://apollo.helixbridge.app/graphql
 * testnet: https://apollo-test.helixbridge.app/graphql
 */
export const client = new ApolloClient({
  // uri: "https://apollo-test.helixbridge.app/graphql",
  uri: "https://apollo.helixbridge.app/graphql",
  cache: new InMemoryCache(),
});
