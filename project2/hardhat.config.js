
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const alchemyUrl = process.env.ALCHEMY_URL;

module.exports = {
  solidity: {
    version: "0.8.8",
  },
  networks: {
    hardhat: {
      forking: {
        url: alchemyUrl,
        blockNumber: 4043801
      }
    }
  }
}





