import hre, { ethers } from "hardhat";
import { ChainIDs, LzChainIDs } from "../constants";

async function main() {
    const goerliAddress = "0x739e84cb6aAc21fc2c6fDBAe56Ca731BF3Fcbc77"
    const goerliArbitrumAddress = "0x8071ECF43C718f6129E1621D30FAD13FA2Af3943"

    const remoteChainID = 10121; // Adjust chainID Remote

    let remoteAndLocal = ethers.utils.solidityPack(
        ['address', 'address'],
        [goerliAddress, goerliArbitrumAddress] // Adjust remote and local
    )

    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const onft721 = ONFT721.attach(goerliArbitrumAddress); // Adjust Address
    await (await onft721.setTrustedRemote(remoteChainID, remoteAndLocal)).wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
