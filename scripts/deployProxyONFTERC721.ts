import hre, { ethers } from "hardhat";
import { ChainIDToName, ChainIDs, LzChainIDs, LzEndpoints } from "../constants";
import shell from "shelljs"

async function main() {
    const token = "0xC1dA1b898c0247356E14ef327E9fc6C86a816697";
    const ProxyONFT721 = await ethers.getContractFactory("TestONFTProxy");
    const chainID: ChainIDs = hre.network.config.chainId as ChainIDs;
    const minGasToTransfer = 250000
    const remoteChainID: ChainIDs = ChainIDs.ARBITRUM_GOERLI
    const proxyONFT721 = await ProxyONFT721.deploy(minGasToTransfer, LzEndpoints[chainID], token);
    await proxyONFT721.deployed();
    console.log("ProxyONFT721 deployed to", proxyONFT721.address);
    setTimeout(() => {
        shell.exec(`npx hardhat verify --contract contracts/TestONFTProxy.sol:TestONFTProxy --network ${ChainIDToName[chainID]} ${proxyONFT721.address} ${minGasToTransfer} ${LzEndpoints[chainID]} ${token}`)
    }, 20_000);
    await (await proxyONFT721.setMinDstGas(LzChainIDs[remoteChainID], 1, minGasToTransfer)).wait()
    await (await proxyONFT721.setDstChainIdToTransferGas(LzChainIDs[remoteChainID], minGasToTransfer)).wait()
}
// setMinDstGas
// setDstChainIdToTransferGas

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
