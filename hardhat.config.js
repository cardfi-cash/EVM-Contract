require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",
      },
    ],
  },
  networks: {
    arb: {
      url: `https://1rpc.io/arb`,
      accounts: [''],
    },
    // pol: {
    //   url: `https://polygon.llamarpc.com`,
    //   accounts: [''],
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      arbitrumOne:""
    }
  },
  
};