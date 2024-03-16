import { STAKE_ADDRESS } from "@/app/config";
import { ethers } from "ethers";
import StakeABI from "@/app/_contracts/stake";

export const getMatch = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://arb-sepolia.g.alchemy.com/v2/ACOcQTXgJ4c4mdf7HGpkygqJtHbUdJoA"
  );

  console.log({provider})

  await provider.ready;

  const contract = new ethers.Contract(
    STAKE_ADDRESS,
    StakeABI,
    provider
  );
  const match = await contract.getMatch(0);
  const matchObject = {
    team1: match[0],
    team2: match[1],
    team1Stake: match[2].toString(),
    team2Stake: match[3].toString(),
    winner: match[4].toString()
  };

  return matchObject;

};