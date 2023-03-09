import { ethers } from "hardhat";

async function main() {
    const Claimer = await ethers.getContractFactory("Claimer");
    const claimer = await Claimer.deploy();
    await claimer.deployed();

    console.log("ERC721TestToken deployed to", claimer.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
