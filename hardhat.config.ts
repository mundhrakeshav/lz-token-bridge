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
    mainnet: {
      url: `${process.env.MAINNET_URL}`,
      accounts: [`${process.env.PRIVATE_KEY_NIBBL_DEV}`],
      chainId: 1
    },
    arbitrum: {
      url: `${process.env.ARBITRUM_URL}`,
      accounts: [`${process.env.PRIVATE_KEY_NIBBL_DEV}`],
      chainId: 42161
    },
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
    apiKey: {
      mainnet: `${process.env.ETHERSCAN_API_KEY}`,
      goerli: `${process.env.ETHERSCAN_API_KEY}`,
      polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`,
      arbitrumGoerli: `${process.env.ARBISCAN_API_KEY}`,
      arbitrumOne: `${process.env.ARBISCAN_API_KEY}`,
    }
  },


};

export default config;
