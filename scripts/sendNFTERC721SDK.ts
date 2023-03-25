import hre, { ethers } from "hardhat";
// import { ChainIDs, LzChainIDs } from "../constants";
import { ChainIDs, Bridge, LayerZeroChildChainIDType, LayerZeroRootChainIDType } from "nibbl-bridge";

async function main() {
    const [owner] = await ethers.getSigners();
    const bridge = new Bridge(owner)
    const onftAddress = "0x3706AA66C756962Fbf7fEeBDE42dBB35C2c06D94"
    const rootToken = "0x3ECA1FE779bb0843e13DC7D4f5cb8e043328Bc4C"
    const dstChainID = ChainIDs.ARBITRUM_GOERLI as LayerZeroChildChainIDType;
    const srcChainID = ChainIDs.GOERLI as LayerZeroRootChainIDType;
    // dstChainID,
    // rootToken,
    // srcChainID,
    //     to: owner.address,
    //     tokenID: 3
    await bridge.sendNFT( dstChainID,srcChainID, rootToken, 5, owner.address)
    // await layerZero.sendNFT({
    // })
    // const ONFT721 = await ethers.getContractFactory("TestONFT");
    // const onft721 = ONFT721.attach(onftAddress);
    // const fees = await onft721.estimateSendFee(remoteChainID, owner.address, 2, false, adapterParams)
    // const est = await onft721.sendFrom(owner.address, remoteChainID, owner.address, 2, owner.address, ethers.constants.AddressZero, adapterParams,
    //     { value: fees[0], }
    // )
    // console.log(est);
}
// setDstChainIdToTransferGas
// setMinDstGas
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});