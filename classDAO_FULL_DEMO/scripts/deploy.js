const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Membership NFT Deployment
  const initialOwner = deployer.address; 
  const MembershipNFT = await ethers.getContractFactory("ClassDAONFT");
  const membershipNFT = await MembershipNFT.deploy(initialOwner);

  await membershipNFT.waitForDeployment();
  console.log(`MembershipNFT deployed at ${membershipNFT.target}`);

  const membershipContractAddress = membershipNFT.target;

  // Governance Contract Deployment (MyGovernor)
  const Governance = await ethers.getContractFactory("MyGovernor");

  // Deploy the governance contract, passing the address of the deployed MembershipNFT
  const governance = await Governance.deploy(membershipContractAddress);

  await governance.waitForDeployment();
  console.log(`Governance Contract deployed at ${governance.target}`);
}

// Catch any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
