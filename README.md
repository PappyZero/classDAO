# classDAO Overview
classDAO is a decentralized autonomous organization (DAO) tailored for a class or group where each member holds a unique NFT representing their membership. Members can submit and vote on proposals, and only those who hold the class NFT can participate in the governance process, ensuring exclusive membership engagement.

# What is a DAO?
A Decentralized Autonomous Organization (DAO) operates on a blockchain, enabling decentralized decision-making and governance. The key features include:

Decentralized: No central authority or single point of control; all members have a say.
Autonomous: Rules and processes are encoded in smart contracts and executed without manual intervention.
Organization: A collective of individuals with shared goals and interests.

# Key Features of classDAO
Blockchain-based: Built on a decentralized ledger to ensure transparency and immutability.

Smart Contracts: Self-executing contracts that define governance rules, proposal handling, and membership criteria.

Token-based Governance: Votes are cast using tokens, where each NFT represents membership.

Transparency: All transactions, proposals, and decisions are publicly visible on the blockchain.

Autonomous Decision-Making: Voting outcomes are automatically executed by smart contracts, enforcing community consensus.

# Contract Details
In building classDAO, several key contracts are crucial to ensure decentralized governance and membership control:

Governance Contract:
This smart contract handles proposal submissions, voting, and execution. It defines:

The decision-making process.
Voting mechanisms (e.g., one NFT = one vote).
Proposal submission rules (only members can submit proposals).
Execution of proposals once they reach consensus.


Membership Contract (NFT):
This contract mints an NFT for each DAO member. The NFTs act as membership tokens and are unique to each individual. Key features include:

NFT Minting: Members receive an NFT minted to their wallet address upon joining.
Whitelisting Mechanism: When interacting with the governance contract, the member’s wallet must hold the classDAO NFT. Only verified NFT holders can vote.
Voting Access: Without the NFT, a wallet address cannot participate in governance activities, ensuring that only authenticated members can vote.
