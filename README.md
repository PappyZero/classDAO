## classDAO Overview
<br>

**ClassDAO** is a decentralized autonomous organization (DAO) tailored for a class or group where each member holds a unique NFT representing their membership. The DAO allows members to submit and vote on proposals, ensuring that only those holding the class NFT can participate in the governance process, promoting exclusive membership engagement and decentralized decision-making.

## What is a DAO?
A Decentralized Autonomous Organization (DAO) is a digital entity operating on a blockchain network that facilitates decentralized governance and decision-making. Its key characteristics include:
<br>
Decentralized: No central authority or single point of control; all members have equal say in decisions.
Autonomous: Self-governing, with processes and rules encoded in smart contracts that execute without manual intervention.
Organization: A collective entity where members with shared goals participate in governance and operations.

## Key Features of classDAO
**Blockchain-based:** Built on a decentralized ledger to ensure transparency, immutability, and trust in the system.
**Smart Contracts:** Self-executing contracts that define governance rules, proposal handling, and membership criteria.
**Token-based Governance:** Votes are cast using tokens, with each NFT representing a member’s right to participate in the decision-making process.
**Transparency:** All transactions, proposals, and decisions are publicly visible on the blockchain.
**Autonomous Decision-Making:** Voting outcomes are executed automatically by smart contracts, ensuring community-driven governance without manual intervention.

## Contract Details
Several key smart contracts were built for classDAO to ensure decentralized governance and membership control:

**1. Governance Contract**
This contract manages the decision-making process, proposal submissions, voting, and execution. Its key features include:
Proposal Submission: Only NFT-holding members can submit proposals.
Voting Mechanism: One NFT equals one vote, ensuring fairness and transparency.
Execution of Proposals: Once consensus is reached, proposals are automatically executed by the contract.
<br>
**2. Membership Contract (NFT)**
This contract mints an NFT for each DAO member, representing their membership. Key features include:
NFT Minting: Each member receives a unique NFT minted to their wallet upon joining.
Whitelisting Mechanism: Only wallets holding the classDAO NFT are allowed to interact with the governance contract, ensuring that only verified members can vote.
Voting Access: Without the NFT, a wallet address cannot participate in governance activities, safeguarding exclusive membership participation.

## REMIX DEFAULT WORKSPACE
When using the Remix IDE to work on classDAO’s smart contracts, the default workspace provides essential directories and files to streamline development:

**contracts:** Holds three smart contracts with increasing levels of complexity.
**scripts:** Contains four TypeScript files to deploy contracts using web3.js or ethers.js libraries.
**tests:** Includes Mocha-Chai unit tests for the contracts, allowing for comprehensive testing and debugging.

## SCRIPTS
The scripts folder contains TypeScript files that deploy the "Storage" contract. To deploy other contracts, simply update the contract's name in the script (e.g., deploy_with_ethers.ts or deploy_with_web3.ts) and provide the necessary constructor arguments.

To run a script:

Right-click on the file in the File Explorer and select "Run."
Ensure the Solidity file is already compiled, as the output from the script will appear in the Remix terminal.
