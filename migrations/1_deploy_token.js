// deploy GYSR token

const BurnableERC20 = artifacts.require('BurnableERC20');

module.exports = function (deployer) {
    deployer.deploy(BurnableERC20);
}