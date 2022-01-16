var PROJ = artifacts.require("PROJ"); //artifacts.require tells us which contract it is in link with or using

module.exports = function(deployer) {
  deployer.deploy(PROJ);
};
