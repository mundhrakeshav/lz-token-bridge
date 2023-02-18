import hre, { ethers } from "hardhat";
import { ChainIDs, LzChainIDs } from "../constants";

async function main() {
    const onftAddress = "0x0E9BDcC71b8498a9F39e0307D6651d9502FcD3c1"
    const remoteChainID = LzChainIDs[ChainIDs.ARBITRUM];
    const [owner] = await ethers.getSigners();
    let adapterParams = ethers.utils.solidityPack(["uint16", "uint256"], [1, 650000])
    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const onft721 = ONFT721.attach(onftAddress);
    const fees = await onft721.estimateSendFee(remoteChainID, owner.address, 0, false, adapterParams)
    const est = await onft721.sendFrom(owner.address, remoteChainID, owner.address, 0, owner.address, ethers.constants.AddressZero, adapterParams,
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