// deploy erc20 Pool metadata
const dotenv = require('dotenv');
dotenv.config();
const PoolMetadata = artifacts.require('PoolMetadata');

module.exports = async function (deployer) {
    // deploy
    
    await deployer.deploy(PoolMetadata, process.env.FACTORY_ADDRESS, process.env.GEYSERFACTORY_ADDRESS, process.env.WFNB_ADDRESS, process.env.TREASURY_ADDRESS );
}
