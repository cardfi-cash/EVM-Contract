async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying CardFi contracts with the account:", deployer.address);
  
    // console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const FC = await ethers.getContractFactory("CardFi");
    const fc = await FC.deploy('0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff');
  
    console.log("🍺 Deploy success :: ",fc.target)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //npx hardhat run scripts/depoly.js --network pol