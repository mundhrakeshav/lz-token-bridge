import hre, { ethers } from "hardhat";
import { ChainIDs, LzEndpoints } from "../constants";

async function main() {
    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const chainID: ChainIDs = hre.network.config.chainId as ChainIDs;
    const onft721 = await ONFT721.deploy("TestSNT", "TS", 250000, LzEndpoints[chainID]);
    await onft721.deployed();

    console.log("ONFT721 deployed to", onft721.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
