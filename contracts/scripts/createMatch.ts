import { ethers } from "hardhat";

async function main() {
  const stake = await ethers.getContractAt(
    "Stake",
    "0x4aAc01FB0cE577A5e6082865973a0A40ce1C4D4f"
  );

  const team1 = "PSG";
  const team2 = "Arsenal";

  await stake.createMatch(team1, team2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
