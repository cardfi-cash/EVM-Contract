const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  describe("Test CardFi", function () {
  
    describe("Deployment", function () {
      it("Time to test", async function () {
        const [owner] = await ethers.getSigners();
        const usdt = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
        const usdc = "0xaf88d065e77c8cc2239327c5edb3a432268e5831"
        const applyFee = 1e16.toString();
        const applyFeeUSD = 1e8.toString();
        const CAR = (await ethers.getContractFactory("CardFi"));
        const car = await CAR.connect(owner).deploy(
          [usdt,usdc],
          "0x69661b7a8A81b4F4d9cde379750277a802C20F5c",
          [applyFee , applyFeeUSD]
        );
        console.log("🍺 CardFi Deploy: "+car.target);  
        });
    });
  });
  