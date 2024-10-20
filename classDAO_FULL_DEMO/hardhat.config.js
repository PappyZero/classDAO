require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config(); 

module.exports = {
  solidity: {
    version: "0.8.20", // Your Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Low value to optimize for deployment
      },
    },
  },
  
  networks: {
    baseSepolia: {
      // Using the environment variable for Alchemy URL
      url: process.env.ALCHEMY_BASE_SEPOLIA_URL, 
      // Using the environment variable for the private key
      accounts: [process.env.PRIVATE_KEY], 
    },
  },

  etherscan: {
    // Using the environment variable for Etherscan API key
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
