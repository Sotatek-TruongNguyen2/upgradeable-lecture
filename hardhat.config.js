require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const INFURA_API_KEY= process.env.INFURA_API_KEY;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;
const PLATFORM_PRIVATE_KEY = process.env.PLATFORM_PRIVATE_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      accounts: [DEPLOYER_PRIVATE_KEY, PLATFORM_PRIVATE_KEY],
      url: 'https://rinkeby.infura.io/v3/' + INFURA_API_KEY,
      chainId: 4
    },
  },
  etherscan : {
    apiKey: ETHERSCAN_API_KEY
  },
};
