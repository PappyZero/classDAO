# classDAO
# Overview
ClassDAO is a decentralized autonomous organization (DAO) designed for a class or group where each member holds a unique NFT representing their membership. 
The DAO will allow members to submit and vote on proposals. Only members holding the class NFT can participate in the governance process.


A Decentralized Autonomous Organization (DAO) is a digital entity that operates on a blockchain network, enabling decentralized decision-making and autonomous governance. Key characteristics:

1. Decentralized: No central authority or single point of control.
2. Autonomous: Self-governing, with rules encoded in smart contracts.
3. Organization: A collective entity with shared goals and interests.


# Features of classDAO :

1. Blockchain-based: Utilizes distributed ledger technology.
2. Smart contracts: Self-executing contracts with predefined rules.
3. Token-based governance: Members vote using tokens.
4. Transparent: All transactions and decisions are publicly visible.
5. Autonomous decision-making: Smart contracts enforce rules.






# Contract Details
In building this classDAO, several types of contracts were necessary :

1. Governance Contract: Defines decision-making processes, voting mechanisms, and proposal submission rules.

2. Token Contract: Manages token creation, distribution, and ownership.

3. Membership Contract: Specifies membership requirements, roles, and privileges.

4. Proposal Contract: Handles proposal submission, voting, and execution.

5. ERC-721 Token Standard (Ethereum): For non-fungible tokens (NFTs).
   DECENTRALIZED AUTONOMUS ORGANIZATION






# REMIX DEFAULT WORKSPACE

Remix default workspace is present when:
i. Remix loads for the very first time 
ii. A new workspace is created with 'Default' template
iii. There are no files existing in the File Explorer

This workspace contains 3 directories:

1. 'contracts': Holds three contracts with increasing levels of complexity.
2. 'scripts': Contains four typescript files to deploy a contract. It is explained below.
3. 'tests': Contains one Solidity test file for 'Ballot' contract & one JS test file for 'Storage' contract.

# SCRIPTS

The 'scripts' folder has four typescript files which help to deploy the 'Storage' contract using 'web3.js' and 'ethers.js' libraries.

For the deployment of any other contract, just update the contract's name from 'Storage' to the desired contract and provide constructor arguments accordingly 
in the file `deploy_with_ethers.ts` or  `deploy_with_web3.ts`

In the 'tests' folder there is a script containing Mocha-Chai unit tests for 'Storage' contract.

To run a script, right click on file name in the file explorer and click 'Run'. Remember, Solidity file must already be compiled.
Output from script will appear in remix terminal.

Please note, require/import is supported in a limited manner for Remix supported modules.
For now, modules supported by Remix are ethers, web3, swarmgw, chai, multihashes, remix and hardhat only for hardhat.ethers object/plugin.
For unsupported modules, an error like this will be thrown: '<module_name> module require is not supported by Remix IDE' will be shown.
