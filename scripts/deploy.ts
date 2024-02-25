import { ethers } from "hardhat";

async function main() {
  const initialSupply = ethers.parseEther("1");

  const token = await ethers.deployContract("AdeToken", [initialSupply], {});

  await token.waitForDeployment();

  console.log(`AdeToken deployed to ${token.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
