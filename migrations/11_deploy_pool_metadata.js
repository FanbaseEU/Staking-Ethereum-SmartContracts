// deploy erc20 Pool metadata

const PoolMetadata = artifacts.require('PoolMetadata');

module.exports = async function (deployer) {
    // deploy
    await deployer.deploy(PoolMetadata);
}
