import hre, { ethers } from "hardhat";
import { ChainIDs, LzChainIDs } from "../constants";

async function main() {
    const rootToken = "0xC1dA1b898c0247356E14ef327E9fc6C86a816697"; // ONFT: 0x3706AA66C756962Fbf7fEeBDE42dBB35C2c06D94

    const onftAddress = "0x3706AA66C756962Fbf7fEeBDE42dBB35C2c06D94"
    const remoteChainID = LzChainIDs[ChainIDs.ARBITRUM_GOERLI];
    const [owner] = await ethers.getSigners();
    let adapterParams = ethers.utils.solidityPack(["uint16", "uint256"], [1, 650000])
    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const onft721 = ONFT721.attach(onftAddress);
    const fees = await onft721.estimateSendFee(remoteChainID, owner.address, 2, false, adapterParams)
    const est = await onft721.sendFrom(owner.address, remoteChainID, owner.address, 2, owner.address, ethers.constants.AddressZero, adapterParams,
        { value: fees[0], }
    )
    console.log(est);
}
// setDstChainIdToTransferGas
// setMinDstGas
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});