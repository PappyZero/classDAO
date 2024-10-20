const hre = require("hardhat");

async function main() 
{
  // Set the unlock time to 1 week from now
  const unlockTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // 1 week in seconds

  // Get the contract factory for Lock
  const Lock = await hre.ethers.getContractFactory("Lock");

  // Deploy the contract with unlockTime and 1 ETH as the initial value
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.utils.parseEther("1.0") });

  // Wait for the contract to be deployed
  await lock.deployed();

  console.log("Lock contract deployed to:", lock.address);
}

// Catch any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




// const { ethers } = require("hardhat");

// async function main() {
//   // Get the contract factory for Lock NFT
//   const LockNFT = await ethers.getContractFactory("Lock");

//   // Deploy the contract
//   const lockNFT = await LockNFT.deploy();

//   // Ensure it's deployed properly by awaiting it
//   await lockNFT.deployed();
//   console.log("LockNFT deployed to:", lockNFT.address);

// }

// // Catch any errors
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

