require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
    },
    kovan: {
      url: "https://kovan.infura.io/v3/7319944d8f80468e94f9d67f661c1281",
      accounts: [
        `0x1a7ab01d299e0c0933cba7047392d46dcdb4af9749e1fdc6070e9fed5dc27c71`, //owner
   
      ]
    }
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
