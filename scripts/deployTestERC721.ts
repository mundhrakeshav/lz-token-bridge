import { ethers } from "hardhat";

async function main() {
    const ERC721TestToken = await ethers.getContractFactory("ERC721TestToken");
    const erc721 = await ERC721TestToken.deploy("TestNFT", "TN");
    await erc721.deployed();

    console.log("ERC721TestToken deployed to", erc721.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
