const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Testing account:", deployer.address);
  
    let val = await ethers.getContractAt("CardFi","0x65571cb75214915A2cD43d9F883C96eDc4D5AB1a");
  
    const usdt = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
    const usdc = "0xaf88d065e77c8cc2239327c5edb3a432268e5831"

    const testController = {
        contractInfo:true,
        deposit : true,
    }

    if(testController.contractInfo)
        {
            console.log("Fetch contractInfo")
            console.log(
                `vault :${await val.vault()} | owner :${await val.owner()} | applyFeeUSD :${await val.applyFeeUSD()}`
            )
            console.log(
                await val.usd(usdt),
                await val.usd(usdc),
                await val.usd("0x65571cb75214915A2cD43d9F883C96eDc4D5AB1a"),
            )
        }
        
    if(testController.deposit)
    {
        await val.deposit("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",100,Buffer.from("md4ldohu_0"));
        console.log("🍺 Deposite 0.1 USDT")
    }

  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

 //npx hardhat run scripts/test.js --network arb