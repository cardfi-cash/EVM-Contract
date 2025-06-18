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
    // arb: {
    //   url: `https://arbitrum.llamarpc.com`,
    //   accounts: [''],
    // },
    // pol: {
    //   url: `https://polygon.llamarpc.com`,
    //   accounts: [''],
    // },
  },
  
};