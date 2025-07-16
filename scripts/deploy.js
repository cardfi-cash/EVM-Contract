async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying CardFi contracts with the account:", deployer.address);
  
    // console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const usdt = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";
    const usdc = "0xaf88d065e77c8cc2239327c5edb3a432268e5831"
    const applyFee = 1e16.toString();
    const applyFeeUSD = 1e8.toString();
    const FC = await ethers.getContractFactory("CardFi");
    const fc = await FC.deploy(
          [usdt,usdc],
          "0x69661b7a8A81b4F4d9cde379750277a802C20F5c",
          [applyFee , applyFeeUSD]
    );
  
    console.log("🍺 Deploy success :: ",fc.target)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //npx hardhat run scripts/deploy.js --network arb

/**
 * 
 * 
npx hardhat verify --network arb \
--contract contracts/card.sol:CardFi \
0x65571cb75214915A2cD43d9F883C96eDc4D5AB1a \
--constructor-args args.js

 */