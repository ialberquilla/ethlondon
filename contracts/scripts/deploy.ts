import { ethers } from "hardhat";

async function main() {
  const supporterNFT = await ethers.deployContract("SupporterNFT");
  await supporterNFT.waitForDeployment();
  const USDC_ADDRESS = "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d";

  console.log(`deployed to ${supporterNFT.target}`);

  const stake = await ethers.deployContract("Stake", [
    supporterNFT.target,
    USDC_ADDRESS,
  ]);

  await stake.waitForDeployment();

  console.log(`deployed to ${stake.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
