import { ethers } from "hardhat";
import hre from 'hardhat'
import { ChainIDs, LzEndpoints } from "../constants";

async function main() {
    const OmniCounter = await ethers.getContractFactory("OmniCounter");
    const chainID: ChainIDs = hre.network.config.chainId as ChainIDs;
    console.log(chainID);
    
    // const omniCounter = await OmniCounter.deploy(LzEndpoints[chainID]);
    // await omniCounter.deployed();

    // console.log("OmniCounter deployed to", omniCounter.address);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
