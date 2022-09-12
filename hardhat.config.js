require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/c8481c9194d549298fd06005656662ad",
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.9",
};
