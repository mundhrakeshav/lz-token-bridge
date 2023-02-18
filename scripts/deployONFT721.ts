import hre, { ethers } from "hardhat";
import { ChainIDToName, ChainIDs, LzChainIDs, LzEndpoints } from "../constants";
import shell from "shelljs"

async function main() {
    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const chainID: ChainIDs = hre.network.config.chainId as ChainIDs;
    const NAME = "TestONFT"
    const SYMBOL = "ONFT"
    const minGasToTransfer = 250000
    const remoteChainID: ChainIDs = ChainIDs.MAINNET

    const onft721 = await ONFT721.deploy(NAME, SYMBOL, minGasToTransfer, LzEndpoints[chainID]);
    await onft721.deployed();
    console.log("ONFT721 deployed to", onft721.address);

    setTimeout(() => {
        shell.exec(`npx hardhat verify --contract contracts/TestONFT.sol:TestONFT --network ${ChainIDToName[chainID]} ${onft721.address} ${NAME} ${SYMBOL} ${minGasToTransfer} ${LzEndpoints[chainID]}`)
    }, 20_000);

    await (await onft721.setMinDstGas(LzChainIDs[remoteChainID], 1, minGasToTransfer)).wait()
    await (await onft721.setDstChainIdToTransferGas(LzChainIDs[remoteChainID], minGasToTransfer)).wait()
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
