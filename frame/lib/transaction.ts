import { bundlerActions, createSmartAccountClient } from 'permissionless';
import { privateKeyToSafeSmartAccount } from 'permissionless/accounts';
import { pimlicoBundlerActions } from 'permissionless/actions/pimlico';
import { createPimlicoPaymasterClient } from 'permissionless/clients/pimlico';
import { Address, createPublicClient, http } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import { PIMLICO_API_KEY, STAKE_CONTRACT, PRIVATE_KEY } from '@/app/config';
import { encode } from './encode';

const paymasterUrl = `https://api.pimlico.io/v2/arbitrum-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;
const bundlerUrl = `https://api.pimlico.io/v1/arbitrum-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;

const publicClient = createPublicClient({
  transport: http('https://arb-sepolia.g.alchemy.com/v2/ACOcQTXgJ4c4mdf7HGpkygqJtHbUdJoA'),
});

const paymasterClient = createPimlicoPaymasterClient({
  transport: http(paymasterUrl),
});

export const sendTransaction = async (fid: string) => {

  console.log({ PRIVATE_KEY });

  const account = await privateKeyToSafeSmartAccount(publicClient, {
    privateKey: PRIVATE_KEY as Address,
    safeVersion: '1.4.1', // simple version
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', // global entrypoint
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

  const encodedData = encode([BigInt(0), BigInt(1), BigInt(6)]);

  console.log({ encodedData });

  const callData = await account.encodeCallData({
    to: STAKE_CONTRACT as `0x${string}`,
    data: encodedData as `0x${string}`,
    value: BigInt(0),
  });

  console.log({ callData });

  const userOperation = await smartAccountClient.prepareUserOperationRequest({
    userOperation: {
      callData,
    },
  });

  console.log({ userOperation });

  userOperation.signature = await account.signUserOperation(userOperation);

  const userOpHash = await smartAccountClient.sendUserOperation({
    userOperation,
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  });

  console.log({ userOpHash });

  const receipt = await smartAccountClient.waitForUserOperationReceipt({
    hash: userOpHash,
  })

  const txHash = receipt.receipt.transactionHash

  console.log({ txHash });

};
