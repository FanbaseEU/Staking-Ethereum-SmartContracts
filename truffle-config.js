// configuration for truffle project
// defines deployment and compilation settings

const dotenv = require('dotenv');
dotenv.config();

const LedgerWalletProvider = require('@umaprotocol/truffle-ledger-provider');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const memonics = process.env.MNEMONIC_PHRASE.trim()

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
      
    },

    ropsten: {
      provider: new LedgerWalletProvider(
        {
          networkId: 3,
          path: `44'/60'/${process.env.DEPLOYER_INDEX || 0}'/0/0`,
          askConfirm: false,
          accountsLength: 1,
          accountsOffset: 0
        },
        `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
      ),
      network_id: 3,
      gas: 5250000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      // from: ''
    },
    kovan: {
      provider : () => new HDWalletProvider(memonics, `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`),
      networkCheckTimeout : 10000000,
      network_id : 42,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider : () => new HDWalletProvider(memonics, `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      networkCheckTimeout : 10000000,
      network_id : 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 10000
        }
      }
    },
  },

  mocha: {
    timeout: 5000
  },

  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY
  },

  plugins: ['truffle-contract-size', 'truffle-plugin-verify']
};
