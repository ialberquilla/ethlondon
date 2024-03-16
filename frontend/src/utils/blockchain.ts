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


export const getStakeEvents = async () => {
  const provider = new ethers.JsonRpcProvider(
    ANKR_PROVIDER
  );



  const contract = new ethers.Contract(
    STAKE_ADDRESS,
    StakeABI,
    provider
  );
  const filter = contract.filters.Stake();
  const events = await contract.queryFilter(filter, -50000);

  console.log({ events })

  const eventsFormatted = events.map((event) => {
    return {
      tx: event.transactionHash,
      staker: event.args.staker,
      team: event.args.team,
      amount: event.args.amount,
      blockNumber: event.blockNumber
    };
  })

  eventsFormatted.sort((a, b) => b.blockNumber - a.blockNumber);

  return eventsFormatted;
}