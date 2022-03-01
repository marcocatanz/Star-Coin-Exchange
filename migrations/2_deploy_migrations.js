const StarCoin = artifacts.require("StarCoin");
const Exchange = artifacts.require("Exchange");

module.exports = async function(deployer) {
  
  await deployer.deploy(StarCoin, "1000000000000000000000");
  const starcoin = await StarCoin.deployed()

  await deployer.deploy(Exchange, starcoin.address);
  const exchange = await Exchange.deployed()

  await starcoin.transfer(exchange.address, '1000000000000000000000')
};