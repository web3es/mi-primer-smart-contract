const hre = require("hardhat");

async function main() {
  const Criptdle = await hre.ethers.getContractFactory("Criptdle");
  const criptdle = await Criptdle.deploy();
  await criptdle.deployed();

  console.log("Criptdle deployed to:", criptdle.address);
  /*
  let tx = await criptdle.createWord("wagmi");
  tx = await criptdle.createWord("shitcoin");
  tx = await criptdle.createWord("solow");
  tx = await criptdle.createWord("bitcoin");
  tx = await criptdle.createWord("ethereum");
  tx = await criptdle.createWord("rbtc");
  tx = await criptdle.createWord("aave");
  tx = await criptdle.createWord("hodl");
  tx = await criptdle.createWord("solidity");
  tx = await criptdle.createWord("fork");

  tx = await criptdle.getWord();
  console.log(tx);

  tx = await criptdle.useWord("fork");
  tx = await criptdle.isUsed("fork");
  console.log(tx);

  tx = await criptdle.isUsed("solidity");
  console.log(tx);
  */
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
