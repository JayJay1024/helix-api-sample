import { darwinia } from "viem/chains";
import { client } from "./config/graphql-client";
import {
  queryAvailableCrossChains,
  querySortedRelayers,
} from "./config/graphql-documents";
import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
  parseEther,
} from "viem";
import lnbridgeV3Abi from "./abis/lnbridge-v3";

function App() {
  const handleClick = async () => {
    // 1. get available cross chains
    const availableCrossChains = await client.query({
      query: queryAvailableCrossChains,
      fetchPolicy: "network-only",
    });

    if (
      availableCrossChains.data?.queryLnBridgeSupportedChains?.find(
        (v1) =>
          v1?.tokenKey === "RING" &&
          v1?.chains?.find(
            (v2) =>
              v2?.fromChain === "darwinia-dvm" &&
              v2?.toChains?.includes("arbitrum")
          )
      )
    ) {
      // 2. get sorted relayers
      const sortedRelayers = await client.query({
        query: querySortedRelayers,
        variables: {
          amount: parseEther("4.4").toString(),
          decimals: 18,
          token: "0x0000000000000000000000000000000000000000", // RING is Native token of Darwinia
          fromChain: "darwinia-dvm",
          toChain: "arbitrum",
        },
        fetchPolicy: "network-only",
      });

      const relayInfo =
        sortedRelayers.data.sortedLnBridgeRelayInfos?.records?.[0];
      if (relayInfo) {
        const publicClient = createPublicClient({
          chain: darwinia,
          transport: http(),
        });
        const walletClient = createWalletClient({
          chain: darwinia,
          transport: custom(window.ethereum!),
        });
        const account = (await walletClient.getAddresses())[0];

        // 3. get total fee
        const totalFee = await publicClient.readContract({
          address: "0xbA5D580B18b6436411562981e02c8A9aA1776D10",
          abi: lnbridgeV3Abi,
          functionName: "totalFee",
          args: [
            BigInt(42161),
            relayInfo.relayer as `0x${string}`,
            "0x0000000000000000000000000000000000000000",
            "0x9e523234D36973f9e38642886197D023C88e307e",
            parseEther("4.4"),
          ],
        });

        // 4. transfer RING from Darwinia to Arbitrum
        const { request } = await publicClient.simulateContract({
          address: "0xbA5D580B18b6436411562981e02c8A9aA1776D10",
          abi: lnbridgeV3Abi,
          functionName: "lockAndRemoteRelease",
          account,
          args: [
            {
              remoteChainId: BigInt(42161),
              provider: relayInfo.relayer as `0x${string}`,
              sourceToken: "0x0000000000000000000000000000000000000000",
              targetToken: "0x9e523234D36973f9e38642886197D023C88e307e",
              totalFee: totalFee,
              amount: parseEther("4.4"),
              receiver: account,
              timestamp: BigInt(Math.floor(Date.now() / 1000)),
            },
          ],
          value: totalFee + parseEther("4.4"), // set to undefined for ERC20 token
        });
        const hash = await walletClient.writeContract(request);
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        console.log(receipt.status);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
