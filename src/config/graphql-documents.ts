import { graphql } from "../gql";

export const queryAvailableCrossChains = graphql(`
  query QueryAvailableCrossChains {
    queryLnBridgeSupportedChains(tokenKey: "") {
      tokenKey
      chains {
        fromChain
        toChains
      }
    }
  }
`);

export const querySortedRelayers = graphql(`
  query QuerySortedRelayers(
    $amount: String!
    $decimals: Int!
    $token: String!
    $fromChain: String!
    $toChain: String!
  ) {
    sortedLnBridgeRelayInfos(
      amount: $amount
      decimals: $decimals
      token: $token
      fromChain: $fromChain
      toChain: $toChain
    ) {
      transferLimit
      records {
        sendToken
        relayer
        margin
        baseFee
        protocolFee
        liquidityFeeRate
        lastTransferId
        withdrawNonce
        bridge
      }
    }
  }
`);
