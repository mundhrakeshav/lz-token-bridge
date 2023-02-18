import hre, { ethers } from "hardhat";
import { ChainIDToName, ChainIDs, LzChainIDs, LzEndpoints } from "../constants";
import shell from "shelljs"


// 0x6A9E52A6C152C5d67be76368eeD264E2bF18E04A


async function main() {
    const [owner] = await ethers.getSigners();
    console.log(owner.address);
    
    const ERC721_Fac = await ethers.getContractFactory("ERC721");
    const addressERC721 = "0x7A2ad726C741D772B4611F9b39f52890f8389cd4"
    const erc721 = ERC721_Fac.attach(addressERC721)
    console.log(await (await erc721.approve("0x6A9E52A6C152C5d67be76368eeD264E2bF18E04A", 51)).wait());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
