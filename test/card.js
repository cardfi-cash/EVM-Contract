const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  describe("Test CardFi", function () {
  
    describe("Deployment", function () {
      it("Time to test", async function () {
        const [owner, addr1 ,addr2,addr3,addr4,addr5,addr6,vault] = await ethers.getSigners();
        console.log("begian")
        const Fac = (await ethers.getContractFactory("CardFi"));
        const fac = await Fac.connect(owner).deploy();
        console.log("🍺 CardFi Deploy: "+fac.target);  
        });
    });
  });
  