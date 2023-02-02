import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      }
    }
  },
  networks: {
    goerli: {
      url: `${process.env.GOERLI_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 5
    },
    arbitrumGoerli: {
      url: `${process.env.ARBITRUM_GOERLI_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 421613
    },
  },
  etherscan: {
    apiKey: "DCT38TDMESYHYJWZ8R8XXEVYK8U3KS1DNB"
    // goerli: "6ISVKVS2PX8RVBNYGGI33TB6DFCV4NEAEP",
    // polygonscan: "KJ26YEV334IBJTEW49VXSH3FNNVV3361AX",
    // arbitrumGoerli: "DCT38TDMESYHYJWZ8R8XXEVYK8U3KS1DNB",
  },
};

export default config;
