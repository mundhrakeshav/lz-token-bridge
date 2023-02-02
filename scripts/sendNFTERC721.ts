import hre, { ethers } from "hardhat";
import { LzChainIDs } from "../constants";

async function main() {
    const goerliAddress = "0xE466a1D717BD43646E4b9B51909f77fFa17E2A28"
    const remoteChainID = LzChainIDs[421613];
    const [owner] = await ethers.getSigners();
    let adapterParams = ethers.utils.solidityPack(["uint16", "uint256"], [1, 500000])
    const ONFT721 = await ethers.getContractFactory("TestONFT");
    const onft721 = ONFT721.attach(goerliAddress);
    const fees = await onft721.estimateSendFee(remoteChainID, owner.address, 1, false, adapterParams)
    const est = await onft721.sendFrom(owner.address, remoteChainID, owner.address, 1, owner.address, ethers.constants.AddressZero, adapterParams,
        { value: fees[0], }
    )
    console.log(est);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});