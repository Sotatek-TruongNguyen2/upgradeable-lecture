const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Upgrade Test", function () {
  it("Upgrade Successful", async function () {

    // Deploy V1 and set initial value
    const BoxV1 = await ethers.getContractFactory("BoxV1");
    const instance = await upgrades.deployProxy(BoxV1);
    await instance.setValue('42');
    expect((await instance.value()).toString()).to.equal('42');

    // Upgrade to V2 and check value
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2, {
      call: {
        fn: "initialize",
        args: [
          "Love you"
        ]
      }
    });
    expect((await upgraded.value()).toString()).to.equal('42');

    // Verify that new implementation works as expected
    await upgraded.increase();
    expect((await upgraded.value()).toString()).to.equal('43');
    expect((await upgraded.name()).toString()).to.equal('Love you');

    await upgraded.setValue(100);
    expect((await upgraded.value()).toString()).to.equal("200");
  });
});
