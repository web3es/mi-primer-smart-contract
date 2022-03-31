const hre = require("hardhat");

async function main() {
  const Criptdle = await hre.ethers.getContractFactory("Criptdle");
  const criptdle = await Criptdle.deploy();
  await criptdle.deployed();

  console.log("Criptdle deployed to:", criptdle.address);
  
  let tx = await criptdle.createWord("wagmi");

  tx = await criptdle.createWord("shitcoin");

  tx = await criptdle.createWord("barrani");

  tx = await criptdle.readWords();
  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
