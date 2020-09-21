const Migrations = artifacts.require("Migrations");
const PlainAdvance = artifacts.require("PlainAdvance");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  //deployer.deploy(PlainAdvance, "0x758b461Cc1bcEe4C153f88ED1a823502ac1bd125", "0x10dbeCf5F27F215E831333998D23c24008c6F285", 2, 1);
};
