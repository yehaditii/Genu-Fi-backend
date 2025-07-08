require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = process.env.CONTRACT_ADDRESS;

  const CertNFT = await ethers.getContractFactory("CertNFT");
  const certNFT = await CertNFT.attach(contractAddress);

  const owner = await certNFT.owner();
  console.log("🧑 Contract Owner:", owner);
  console.log("🔑 Your Wallet:", deployer.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
