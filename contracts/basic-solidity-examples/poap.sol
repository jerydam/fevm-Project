//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from  "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";


contract Poap is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address Admin;

    constructor(address _admin) ERC721("Meta Guard","MET5G2") {
        Admin = _admin;
    }


    function safeMint(address to, uint256 _tokenId)
        external

    {
        require(msg.sender == Admin, "Unauthorized CALL[POAP]");
        string memory uri = "QmaJKdf1ET1hcCvxF2JD14gRh77Sii5nXHcC6pF6FMnwxA";
        _safeMint(to, _tokenId);
        _setTokenURI(_tokenId, uri);
    }

    function getContract() external view returns(address) {
        return address(this);
    }


    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        // super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage )
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
