// deploy GYSR token

const GeyserToken = artifacts.require('BurnableERC20');

module.exports = function (deployer) {
    deployer.deploy(GeyserToken, 'name','symbol', "3", "0x30000",  "0x923B2373A81D52F81930aF7dCd784393CD96Ed1B");
}
