// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.10;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract ERC721TestToken is ERC721 {

    uint public tokenID;

    constructor (string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        
    }


    function mint(address to) public {
        _mint(to, tokenID++);   
    }
    
    function batchMint(address to) public {
        uint _tokenID = tokenID;
        tokenID += 10;
        for (uint256 index = 0; index < 10; index++) {
            _mint(to, _tokenID++);   
        }
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://www.miladymaker.net/milady/json/";
    }

    // function tokenURI(uint256) public pure override returns (string memory) {
    //     return _baseURI();
    // }

}