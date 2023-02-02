import hre, { ethers } from "hardhat";
import { ChainIDs, LzChainIDs } from "../constants";

async function main() {
    const goerliAddress = "0x510d2b5BcEf4EE178Aa3015d47750Ec33D56A1CF"
    const goerliArbitrumAddress = "0x702AC9C50Abd09368A1b4A58857502Cd3040ce31"

    const remoteChainID = 10143; // Adjust chainID Remote

    let remoteAndLocal = ethers.utils.solidityPack(
        ['address', 'address'],
        [goerliArbitrumAddress, goerliAddress] // Adjust remote and local
    )

    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const onft721 = ONFT721.attach(goerliAddress); // Adjust Address
    await (await onft721.setTrustedRemote(remoteChainID, remoteAndLocal)).wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
