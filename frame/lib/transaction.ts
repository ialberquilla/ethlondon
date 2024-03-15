import { bundlerActions, createSmartAccountClient } from "permissionless";
import { privateKeyToSafeSmartAccount } from "permissionless/accounts";
import { pimlicoBundlerActions } from "permissionless/actions/pimlico";
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { Address, createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";
import { PIMLICO_API_KEY, STAKE_CONTRACT } from "@/app/config";

const privateKey = process.env.PRIVATE_KEY!;
const paymasterUrl = `https://api.pimlico.io/v2/arbitrum-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;
const bundlerUrl = `https://api.pimlico.io/v1/arbitrum-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;

const publicClient = createPublicClient({
  transport: http(
    "https://rpc.ankr.com/arbitrum_sepolia/0a769798ee5f5344880d82fe45a2727b46e1eb53accf50356cbe3a5ad601f9e6"
  ),
});

const paymasterClient = createPimlicoPaymasterClient({
  transport: http(paymasterUrl),
});

export const sendTransaction = async (fid: string) => {
  const account = await privateKeyToSafeSmartAccount(publicClient, {
    privateKey: privateKey as Address,
    safeVersion: "1.4.1", // simple version
    entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // global entrypoint
    saltNonce: BigInt(fid),
  });

  const smartAccountClient = createSmartAccountClient({
    account,
    chain: arbitrumSepolia,
    transport: http(bundlerUrl),
    sponsorUserOperation: paymasterClient.sponsorUserOperation,
  })
    .extend(bundlerActions)
    .extend(pimlicoBundlerActions);

  const callData = await account.encodeCallData({
    to: STAKE_CONTRACT as `0x${string}`,
    data: "0x1234",
    value: BigInt(0),
  });

  const userOperation = await smartAccountClient.prepareUserOperationRequest({
    userOperation: {
      callData,
    },
  });

  userOperation.signature = await account.signUserOperation(userOperation);

  const userOpHash = await smartAccountClient.sendUserOperation({
    userOperation,
    entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  });
};
