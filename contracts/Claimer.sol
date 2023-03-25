// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {ERC721, IERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

// NOTE: this ONFT contract has no public minting logic.
// must implement your own minting logic in child classes
contract Claimer is IERC721Receiver {

    function claim(address _tokenAddress, uint256 _tokenID, address _to) external {
        IERC721(_tokenAddress).safeTransferFrom(address(this), _to, _tokenID, "0x");
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
