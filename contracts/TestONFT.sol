// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./src/tokens/ONFT721.sol";

// NOTE: this ONFT contract has no public minting logic.
// must implement your own minting logic in child classes
contract TestONFT is ONFT721 {
    constructor(string memory _name, string memory _symbol, uint256 _minGasToTransfer, address _lzEndpoint) 
    ONFT721(_name, _symbol, _minGasToTransfer, _lzEndpoint) {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://agc.mypinata.cloud/ipfs/QmPyZxMjN2PfJGjGN45MFHbKEZyCD9F7MHeBeqBrKEFUtW/";
    }

}