// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Imports from online scripts that contain frameworks for writing smart contracts.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
import "@openzeppelin/contracts/access/Ownable.sol"; // This controls who has access to the smart contract. 

// ERC721URIStorage is an extension of ERC721 with an additional option of 
// storing the URI of the Metadata file in BLOCKCHAIN storage. 
contract QN_NFT is ERC721URIStorage, Ownable {
    // Pass the deployer’s address to the Ownable constructor.
    constructor() ERC721("PAPPYZERO PAPPY", "PPY") Ownable(msg.sender) {}

    // URI is the IPFS address of the metadata file with all the data for the specific NFT.
    function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _uri);
    }
}