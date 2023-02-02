import hre, { ethers } from "hardhat";
import { ChainIDs, LzEndpoints } from "../constants";


async function main() {
    const token = "0xC52639d3Ce0e381c11951543650b222C8ee2a6DD";
    const ProxyONFT721 = await ethers.getContractFactory("TestONFTProxy");
    const chainID: ChainIDs = hre.network.config.chainId as ChainIDs;
    const proxyONFT721 = await ProxyONFT721.deploy(250000, LzEndpoints[chainID], token );
    await proxyONFT721.deployed();

    console.log("ProxyONFT721 deployed to", proxyONFT721.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
