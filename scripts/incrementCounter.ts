import { ethers } from "hardhat";
import { ChainIDs } from "../constants";

async function main() {
    const goerliAddress = "0xCE642136Bb6D6c948940591835687E70867faFCD"
    const goerliArbitrumAddress = "0xAfD43f93610B82371470451FEbA295EBF1596EC5"
    let adapterParams = ethers.utils.solidityPack(
        ['uint16', 'uint256'],
        [1, 200000]
    )
    const omniCounter = await ethers.getContractAt("OmniCounter", goerliArbitrumAddress);
    const fees = await omniCounter.estimateFee(ChainIDs.GOERLI, false, adapterParams)
    
    let tx = await (
        await omniCounter.incrementCounter(
            ChainIDs.GOERLI,
            { value: fees[0] }
        )
    ).wait()
    // let fees = await endpoint.estimateFees(remoteChainId, omniCounter.address, "0x", false, adapterParams)

    // const remoteChainID = ChainIDs.ARBITRUM_GOERLI;
    // let remoteAndLocal = ethers.utils.solidityPack(
    //     ['address', 'address'],
    //     [goerliArbitrumAddress, goerliAddress]
    // )

    // const OmniCounter = await ethers.getContractFactory("OmniCounter");
    // const omniCounter = OmniCounter.attach(goerliAddress);
    // await omniCounter.setTrustedRemote(remoteChainID, remoteAndLocal)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
