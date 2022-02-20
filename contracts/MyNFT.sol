// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage , Ownable {

    // diambil dari Counters.sol
    using Counters for Counters.Counter;
    
    //token ID untuk setiap NFT
    Counters.Counter private _tokenIds;

    // Penamaan NFT nya
    constructor() ERC721("Mas Kakanda","KKD"){}

    // Minting atau bikin NFT
    // onlyowner ada di Ownable.sol
    //tokebURI link untuk IPFS
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns(uint256){
        //increment _tokendIds ada di Counters.sol
        _tokenIds.increment();

        // new variable, uint256 = unsigned integer
        uint256 newItemId = _tokenIds.current();
        
        // minting NFT, _mint ada di ERC721.sol
        _mint(recipient,newItemId);

        // _setTokenURI ada d ERC721URIStorage.sol 
        _setTokenURI(newItemId,tokenURI);
    
        return newItemId;
    } 
}