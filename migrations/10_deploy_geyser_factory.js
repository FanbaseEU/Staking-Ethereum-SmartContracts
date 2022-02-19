// deploy erc20 Pool metadata

const GeyserFactory = artifacts.require('GeyserFactory');

module.exports = async function (deployer) {
    // deploy
    await deployer.deploy(GeyserFactory);
}
