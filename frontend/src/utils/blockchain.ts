import { ANKR_PROVIDER, STAKE_ADDRESS } from "@/config";
import { ethers } from "ethers";
import StakeABI from "@/abis/stake";

export const getMatch = async () => {
  const provider = new ethers.JsonRpcProvider(
    ANKR_PROVIDER
  );
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